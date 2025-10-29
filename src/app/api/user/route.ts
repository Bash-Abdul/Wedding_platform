import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { authOptions } from "@/lib/auth";

export async function GET(req: Request, res: Response) {

    // getting user session on server side and storing in this variable
    const session = await getServerSession(authOptions)


    // check if a particular email has session?
    if(!session?.user?.email) return NextResponse.json({message: 'User Not authenticated', user: null}, {status:200});

    const email = session.user.email.trim().toLowerCase();

    // tell prisma to find email that matches session email and return selected fields
    const user = await prisma.user.findUnique(
        {
            where: {email},
            select: {id: true, name: true, email: true}
        }
    )

    if (!user) return NextResponse.json({message: 'User not found', user: null}, {status: 200});

    // returning user object
    return NextResponse.json({ user: user ?? null }, {status: 200});
}