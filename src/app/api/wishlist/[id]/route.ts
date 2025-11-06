// src/app/api/wishlist/[id]/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireUserId } from "@/lib/session";
import { Wishlist } from "@/lib/validators";

type Params = { params: { id: string } };

export async function PATCH(req: Request, { params }: Params) {
  try {
    const userId = await requireUserId();
    const existing = await prisma.wishlistItem.findUnique({ where: { id: params.id } });
    if (!existing || existing.ownerId !== userId) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    const body = await req.json();
    const data = Wishlist.update.parse(body);

    const updated = await prisma.wishlistItem.update({
      where: { id: params.id },
      data: {
        title: data.title,
        description: data.description,
        imageUrl: data.imageUrl,
        externalLink: data.externalLink,
        targetAmount: data.targetAmount ?? undefined,
        fundedAmount: data.fundedAmount ?? undefined,
        allowPartial: data.allowPartial,
        accentColor: data.accentColor,
      },
    });

    return NextResponse.json(updated);
  } catch (e: any) {
    return NextResponse.json({ error: e?.message ?? "Bad Request" }, { status: 400 });
  }
}

export async function DELETE(_req: Request, { params }: Params) {
  const userId = await requireUserId();
  const existing = await prisma.wishlistItem.findUnique({ where: { id: params.id } });
  if (!existing || existing.ownerId !== userId) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  await prisma.wishlistItem.delete({ where: { id: params.id } });
  return NextResponse.json({ ok: true });
}

// src/app/api/wishlist/[id]/route.ts
export async function PUT(req: Request, { params }: Params) {
  try {
    const userId = await requireUserId();
    const existing = await prisma.wishlistItem.findUnique({ where: { id: params.id } });
    if (!existing || existing.ownerId !== userId) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    const body = await req.json();
    // If you want to require the full shape, validate with Wishlist.create
    // and allow fundedAmount/allowPartial to be optional if you prefer.
    const full = Wishlist.update
      .and(Wishlist.create.pick({ title: true, targetAmount: true })) // ensure required fields exist
      .parse(body);

    const updated = await prisma.wishlistItem.update({
      where: { id: params.id },
      data: {
        title: full.title,
        description: full.description,
        imageUrl: full.imageUrl,
        externalLink: full.externalLink,
        targetAmount: full.targetAmount,
        fundedAmount: full.fundedAmount ?? 0,
        allowPartial: full.allowPartial ?? true,
        accentColor: full.accentColor,
      },
    });

    return NextResponse.json(updated);
  } catch (e: any) {
    return NextResponse.json({ error: e?.message ?? "Bad Request" }, { status: 400 });
  }
}
