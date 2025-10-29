import { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
// import { prisma } from './prisma'
// import prisma from './prisma'
import { prisma } from './prisma'
import bcrypt from 'bcryptjs'

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        const email = credentials?.email.trim().toLowerCase()
        const password = credentials?.password
        if (!email || !password) {
          throw new Error('Missing credentials')
        }

        // tiny random delay, 100–250 ms
    await new Promise(r => setTimeout(r, 100 + Math.floor(Math.random() * 150)));

        const user = await prisma.user.findUnique({
          where: { email },
          select: { id:true, email:true, name:true, password:true}
        })

        if (!user || !user.password) {
          throw new Error('Invalid credentials')
        }

        const isValid = await bcrypt.compare(password, user.password)

        if (!isValid) {
          throw new Error('Invalid credentials')
        }

        return {
          id: user.id,
          email: user.email,
          name: user.name,
        }
      }
    })
  ],
  session: {
    strategy: 'jwt'
  },
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.uid = user.id
      return token
    },
    async session({ session, token }) {
      if (session.user && token?.uid) {
        // add id to the session object the client sees
        // @ts-ignore
        session.user.id = token.uid
      }
      return session
    }
  },
  secret: process.env.NEXTAUTH_SECRET,
}