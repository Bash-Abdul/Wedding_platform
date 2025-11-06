// import { getServerSession } from "next-auth";
// import { NextResponse } from "next/server";
// import { prisma } from "@/lib/prisma";
// import { authOptions } from "@/lib/auth";

// export async function GET(req: Request, res: Response) {

//     // getting user session on server side and storing in this variable
//     const session = await getServerSession(authOptions)


//     // check if a particular email has session?
//     if(!session?.user?.email) return NextResponse.json({message: 'User Not authenticated', user: null}, {status:200});

//     const email = session.user.email.trim().toLowerCase();

//      // Since we have callbacks in authOptions that set user data in the session,
//     // we can actually just return the session user directly without a DB call
//     // This is more efficient for multiple users
//     if (session?.user?.id) {
//         return NextResponse.json(
//           {
//             user: {
//               id: session.user.id,
//               name: session.user.name,
//               email: session.user.email,
//             },
//           },
//           { status: 200 }
//         );
//       }

//     // tell prisma to find email that matches session email and return selected fields
//     const user = await prisma.user.findUnique(
//         {
//             where: {email},
//             select: {id: true, name: true, email: true}
//         }
//     )

//     if (!user) return NextResponse.json({message: 'User not found', user: null}, {status: 200});

//     // returning user object
//     return NextResponse.json({ user: user ?? null }, {status: 200});
// }

// app/api/user/route.ts (update your existing route)
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { authOptions } from "@/lib/auth";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    // Get user session on server side
    const session = await getServerSession(authOptions);

    // Check if user has a valid session
    if (!session?.user?.email) {
      return NextResponse.json(
        { message: "User not authenticated", user: null },
        { status: 401 }
      );
    }

    const email = session.user.email.trim().toLowerCase();

    // Since we have callbacks in authOptions that set user data in the session,
    // we can actually just return the session user directly without a DB call
    // This is more efficient for multiple users
    if (session.user.id) {
      return NextResponse.json(
        {
          user: {
            id: session.user.id,
            name: session.user.name,
            email: session.user.email,
          },
        },
        { status: 200 }
      );
    }

    // Fallback: fetch from database if for some reason session doesn't have id
    const user = await prisma.user.findUnique({
      where: { email },
      select: { id: true, name: true, email: true },
    });

    if (!user) {
      return NextResponse.json(
        { message: "User not found", user: null },
        { status: 404 }
      );
    }

    return NextResponse.json({ user }, { status: 200 });
  } catch (error) {
    console.error("Error fetching user:", error);
    return NextResponse.json(
      { message: "Internal server error", user: null },
      { status: 500 }
    );
  }
}