"use client";

import React, { useEffect, useState } from "react";
import { X } from "lucide-react";

type Photo = { src: string; alt: string };

const PHOTOS: Photo[] = [
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDKImHnC1jtawBmwryWEi67ju_hWWUYpfMv380xAPKp8nk0lC4xBkTDTwPqH2yVDAyi_YuMbwgRlqAW1tVoHPil30ZJk9IOOAgqExMIcPSh4xP4epY9XZAATnpAiX8dZwWoYVqjHJ-crZTTXpO9SoHUeX10lex-0cWSg7PeiXH45XDE7Hcb3506yUdp7-h5-I4-GhmceMKl70GdnZdhywK-dC12cyjpBkZ5Ri5-DmWCVlq5dwrAUN8xcIfpTYuOPbWBPQO9uIfBN8I", alt: "Guests dancing at the wedding reception." },
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAuaFScypuBvYbezz28BN8heq_v3DVM7wWWlmzrYS87uXud8vsE-9gSIUf7oMjtCsaSc_-0feoYwqlS1JM9xIpNdKftTwNrhiBSlq0jjP5VU-Kio1mnDHsxRbXVqLAW4dnnuiYgwE5idFOxZEB2uXfqwphhC-tZ9w3Z_pFzYw2OyaTDfRi2JyoSMC0y65GIqyqm00RrEpT6mIv-Z6b4HbY0KPRacbgZLHWvH71xTgbqiF6U8R3Ag3HrhUYuilFgwliGVOmiIKyUm7k", alt: "A close-up shot of the wedding cake." },
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDKtBYm8jXy5Uf31JS-yXbhKUIldL6GtcQXzcfBg9QMG7lf4Svgys6YupSImV7e3eOrgvK3VnFCneEc1vWvGBHaFtPkI6rEKD4lqnJ0aB73WmnBRUUx-kzrtyKht7pnycbwUwRaXKV38rubV2DSnLukAjzGHh-dNWKXz-FJIpkFqYB0eglCMTVzqU4Z5Upf0GVosihGBHjBRU8GP5kFdK8lpLxNhWEeKP0ZK2-pw1n6EFJhpjKe57FFdBhUPwUSaEZe2XYR3ijmb5Y", alt: "A candid photo of guests laughing." },
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAe1In2hsEXPI_4W-s6GdPXpA6a5Pw-sLMbmw7u_xb7Mk6Ffft_HHZdKqMQk2bfYbJ-AaufKtOzLzbQravBIYrdLN7xtqPbuwOTg2rnth_0gagkDHyufbsHM5JXe0lCynRfZvtmQ1VGCOtJtnMwVCC7-4-bxgiyhh_OS_Ly2kXr_q-_HBsX8VFsIOZnvKCoBdu-QmK4WvzaNrcWBLwyFtCBtWyQfFdAz0UzFXAVMYyYyFu2AS9EaAb_Hot4ICS5A1PvVvFM1Vi-_rA", alt: "The bride and groom sharing their first dance." },
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAbcwuPpMRFLSsumNVG9eKOB69AhAZ3cDTszeeIXwp2P-ASzYOBaNGmbHgPlPueCGXsAFw1d1fK_ZcXN-GB7SVX-7C4Nk3rBKZqFELZ40QVmN7qDlx1YkVxhaf95P7S7Yowzv27NPIdrX603bVse9ZHvBg6kIpdCF66vAE6NWuvgLhm-cJ7Tiddk6mCUYHnPdQ2P5HSrQ5H3uzQouynYnVRf97thkip5WlVGZ8PlDJH_JfbkOiQQLed7bVyZ6wsNhdmsRlCGTIbgdA", alt: "A group photo of friends at the wedding." },
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC_RlT4qcPLTP3rIx77x35Qnn5xZtqprH9KRJ7DnGuxqLAxg015EFyPaB2AJeFRDpZAyUVk_p1GSh3pPTn3aAaS6ohdslsE1-8J-xEI6zrP42eMOfVXSFXvSv7YRsDIQEBhWzzPSEbOdKzQltF2GP7SKCbJBugnUv9w-sU3cfffDRodlfI2afdDUlwU4w0m4L7q8fzLGPPQvavV4U7gAJIbB8XiSPNx3uBCDoP9kSL95x7b3WHZ16Ihzld8ALHFPPS3fPmZ_E6Hl04", alt: "Children playing at the wedding venue." },
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAQjnm9HASg2ewS0KU27zF9sl6eOJjdlFBCzkWw7TKgeP12qPg12nT9f4VZFaFoKfviDEGqAVevnsL1wiNCCrlQPwzR2oqCTVf8s26RdCR57a9_Zp5cFAteS-gPviIQOvX-JKHsFIrJ-Guk5CS3Y6U233a4Fu8Peo2VTCP8fQGr7qCrF7EGj8k7MFKvO871KzMqlbPgkitvPxfVFeP2_6y8T1JLeXEJpDdHS8E_boRdK-AuQntdOJamN7ERNLF7huJ6byh8I7Cmmf0", alt: "A beautiful shot of the floral arrangements." },
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBEcAQbgZoQqKbl1GEp3k1AeP_5Mm2fBQz5wRveQhgXXnGQy2u0Ze7WFwiBREit2j6Hli9RKXl-JwqEeuVwSxDwXjkjY__K_LulSfEPSrLk5byoHayxkl3U42x0jbOgkaVYBL-GaXelSeZnJe3d6ho3NExsNvDAk5tC18fjsn0iDyUemkOXiT3PRznH9fyxBAIpwsab1vyBzKmhCr0OdeN2gEiy6X-7KhPhCXfqxYGUPiDbL6DINfAtXj_RSYYHnNe6f1EHoh_2yvM", alt: "Guests toasting with champagne glasses." },
];

export default function DemoPhotoBook() {
  const [active, setActive] = useState<Photo | null>(null);

  // Close with ESC
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setActive(null);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
   <div className="bg-black w-full min-h-screen">
     <main className="p-3">
      {/* <header className="text-center mb-6">
        <h1 className="text-3xl font-bold tracking-tight">Guest Gallery</h1>
        <p className="text-sm text-gray-600 mt-2">
          Tap a photo to view, press Esc to close.
        </p>
      </header> */}

      {/* Masonry columns */}
      <section className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 [column-fill:balance]">
        {PHOTOS.map((p, i) => (
          <figure
            key={i}
            className="mb-4 break-inside-avoid overflow-hidden rounded-xl relative group"
          >
            <img
              src={p.src}
              alt={p.alt}
              loading="lazy"
              className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              onClick={() => setActive(p)}
            />
            <figcaption className="pointer-events-none absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
          </figure>
        ))}
      </section>

      {/* Lightbox */}
      {active && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setActive(null)}
        >
          <div
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close"
              className="absolute -top-10 right-0 rounded-full p-2 bg-white/10 hover:bg-white/20"
              onClick={() => setActive(null)}
            >
              <X className="h-6 w-6 text-white" />
            </button>
            <img
              src={active.src}
              alt={active.alt}
              className="w-full h-auto rounded-lg"
            />
            <p className="mt-3 text-center text-sm text-white/80">{active.alt}</p>
          </div>
        </div>
      )}
    </main>
   </div>
  );
}
