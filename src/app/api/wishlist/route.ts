import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireUserId } from "@/lib/session";
import { Wishlist } from "@/lib/validators";


export async function GET() {
    const userId = await requireUserId();
    const items = await prisma.wishlistItem.findMany({
      where: { ownerId: userId },
      orderBy: { createdAt: "asc" },
    });
    return NextResponse.json(items);
  }
  
  export async function POST(req: Request) {
    try {
      const userId = await requireUserId();
      const body = await req.json();
      const data = Wishlist.create.parse(body);
  
      const item = await prisma.wishlistItem.create({
        data: {
          ownerId: userId,
          title: data.title,
          description: data.description,
          imageUrl: data.imageUrl,
          externalLink: data.externalLink,
          targetAmount: data.targetAmount,
          fundedAmount: data.fundedAmount ?? 0,
          allowPartial: data.allowPartial ?? true,
          accentColor: data.accentColor,
        },
      });
  
      return NextResponse.json(item, { status: 201 });
    } catch (e: any) {
      return NextResponse.json({ error: e?.message ?? "Bad Request" }, { status: 400 });
    }
  }