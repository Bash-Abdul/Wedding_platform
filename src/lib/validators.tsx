// src/lib/validators.ts
import { z } from "zod";

/** Common mini-schemas */
const HexColor = z.string().regex(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i, "Invalid color");
const Url = z.string().url();

/** Wishlist (NGN, whole naira) */
export const Wishlist = {
  create: z.object({
    title: z.string().trim().min(1, "Title is required"),
    description: z.string().trim().max(2000).optional().or(z.literal("")).transform(s => s || undefined),
    imageUrl: Url.optional().or(z.literal("")).transform(s => s || undefined),
    externalLink: Url.optional().or(z.literal("")).transform(s => s || undefined),
    targetAmount: z.coerce.number().int().positive(),
    fundedAmount: z.coerce.number().int().min(0).default(0),
    allowPartial: z.coerce.boolean().default(true),
    accentColor: HexColor.optional(),
  }),
  update: z.object({
    title: z.string().trim().min(1).optional(),
    description: z.string().trim().max(2000).optional(),
    imageUrl: Url.optional(),
    externalLink: Url.optional(),
    targetAmount: z.coerce.number().int().positive().optional(),
    fundedAmount: z.coerce.number().int().min(0).optional(),
    allowPartial: z.coerce.boolean().optional(),
    accentColor: HexColor.optional(),
  }),
};

export type TWishlistCreate = z.infer<typeof Wishlist.create>;
export type TWishlistUpdate = z.infer<typeof Wishlist.update>;

/** Later you can add:
export const Event = { create: z.object({ ... }), update: z.object({ ... }) };
export const Image = { ... };
*/
