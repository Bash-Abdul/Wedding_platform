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
          select: { id: true, email: true, name: true, password: true }
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
    strategy: 'jwt',
    maxAge:   7 * 60 * 60,
  },
  pages: {
    signIn: '/auth/login',
  },
  // in your NextAuth callbacks (you already set token.uid)
  // add this if you want to avoid the DB read in /api/user:
  callbacks: {
    async jwt({ token, user, trigger }) {
      if (user) {
        token.uid = user.id;
        token.name = user.name || token.name;   // keep name fresh
        token.email = user.email || token.email;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user && token) {
        // @ts-ignore
        session.user.id = token.uid as string;
        // make sure name/email are present
        session.user.name = token.name as string | null ?? session.user.name ?? null;
        session.user.email = token.email as string ?? session.user.email!;
      }
      return session;
    }
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === 'development',
}