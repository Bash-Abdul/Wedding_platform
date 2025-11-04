"use client";

import React from "react";

type RegistryItem = {
  id: string;
  title: string;
  priceLabel: string;
  description: string;
  image: string;
  cta: string;
  href?: string;
  progress?: number; // 0 to 100 (only for funds)
};

const PRIMARY = "#D1A6A6";   // soft rose
const SECONDARY = "#C0B283"; // warm gold

const REGISTRY_ITEMS: RegistryItem[] = [
  {
    id: "r1",
    title: "KitchenAid Stand Mixer",
    priceLabel: "$399.99",
    description: "To help us bake a lifetime of sweet memories.",
    cta: "View on Store",
    href: "#",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAS5Po5hzO9iSD7ei5iaCk55G7wg0GnpKEmDFyISfAqKU0K-I1diZVOQiSfPB-16-UVZo6wTRJUlP7ZKCDs_bYSIEXmgWSdJnmRSJoHl_zSy-QIrQMB1af_s3j9xnhYnDTXe35G8couJlohEijKlmI6hAsaOrQHEM8KkJOIiDVuH_UR-XSqbo_HeM_gmqyzLy2iZJ7Nq_Su6yHC9dR2lLyWqG7Q8E_Bz8qvH8C6xQJsN22RQSbNwaIobUxLnGFHcXOcApyImcKWJAc",
  },
  {
    id: "r2",
    title: "Honeymoon Fund",
    priceLabel: "Any Amount",
    description:
      "Help us explore the Amalfi Coast for our dream honeymoon!",
    cta: "Gift Now",
    href: "#",
    progress: 45,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDCxFDvaOnDSzBqHCe4gS13AsQAtIF9zk_bq56Y4k4Cj5-3w8pE_swYDTOEL1H5XVPKhXd6LL3T5Rf-2tSCAbC26-eaSiezLt5wphlaxRvtrXt1u0CPIlSECXawH7Q-LMsQZnygvjjABCnSMvqsnZc4IdhOBe9mUmQV3vYeF0mELAzXNp9-K1L9VBulq4y3OsaMFOAHiDwlOqDEa1KOIfvKirJ2CYRXYby08dP1FkW6Zsr_FGF2qOonuLUGn24rixhqTxLyEK4ltQo",
  },
  {
    id: "r3",
    title: "Linen Duvet Set",
    priceLabel: "$250.00",
    description: "For cozy Sunday mornings and breakfast in bed.",
    cta: "View on Store",
    href: "#",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAGBgLcPN3XCpbcIQOKiIk1CIj92scIMrUn-JO83nSSLD-ah7bWB6F5ljUo8nQJ6_0h6WhNTa2IjAVEEHvUtCTcjm2zP4ySfthE4lIW3WzHyy-ixgS1eM-uOMBA4GSHyy2CVfijmLY-L4CKIdHwpkvfCyCLkKKGg6KbV_vEpcT4CNi0WKB7NB0mPbg-iuvTq97z0NxMyamSF45Kx3np6yl8KxaIcSTprnNRYpOhLR2exjBVBlF7zU_5Xs1cPom8R67kdeVEtxJTfAA",
  },
];

export default function RegistrySection() {
  return (
    <section className="py-10">
      <div className="text-center">
        <h2 className="text-3xl font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          Our Wishlist
        </h2>
        <p className="mb-8 max-w-2xl mx-auto">
          Your presence is the greatest gift, but if you&apos;re so inclined,
          here are a few things we&apos;d love as we start our new life
          together.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {REGISTRY_ITEMS.map((item) => (
          <article
            key={item.id}
            className="flex flex-col rounded-xl overflow-hidden border"
            style={{
              borderColor: `${PRIMARY}33`, // ~20% opacity
              backgroundColor: `${PRIMARY}1A`, // ~10% opacity
            }}
          >
            <div
              className="w-full aspect-4/3 bg-cover bg-center"
              role="img"
              aria-label={item.title}
              style={{ backgroundImage: `url("${item.image}")` }}
            />

            <div className="flex flex-col p-4 grow">
              <h4 className="font-bold">{item.title}</h4>
              <p
                className="text-sm font-semibold"
                style={{ color: SECONDARY }}
              >
                {item.priceLabel}
              </p>

              {/* Optional progress bar for funds */}
              {typeof item.progress === "number" && (
                <div className="my-2 w-full rounded-full h-2.5" style={{ backgroundColor: `${PRIMARY}33` }}>
                  <div
                    className="h-2.5 rounded-full"
                    style={{
                      width: `${item.progress}%`,
                      backgroundColor: SECONDARY,
                    }}
                  />
                </div>
              )}

              <p className="text-sm mt-2 grow">{item.description}</p>

              <a
                href={item.href || "#"}
                className="mt-4 flex h-10 w-full items-center justify-center overflow-hidden rounded-full px-4 text-sm font-bold leading-normal tracking-[0.015em] text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: SECONDARY }}
              >
                <span className="truncate">{item.cta}</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
