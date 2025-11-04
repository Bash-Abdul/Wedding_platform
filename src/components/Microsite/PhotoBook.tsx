"use client";

import React from "react";

type Photo = { src: string; alt: string };

const PHOTOS: Photo[] = [
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDKImHnC1jtawBmwryWEi67ju_hWWUYpfMv380xAPKp8nk0lC4xBkTDTwPqH2yVDAyi_YuMbwgRlqAW1tVoHPil30ZJk9IOOAgqExMIcPSh4xP4epY9XZAATnpAiX8dZwWoYVqjHJ-crZTTXpO9SoHUeX10lex-0cWSg7PeiXH45XDE7Hcb3506yUdp7-h5-I4-GhmceMKl70GdnZdhywK-dC12cyjpBkZ5Ri5-DmWCVlq5dwrAUN8xcIfpTYuOPbWBPQO9uIfBN8I",
    alt: "Guests dancing at the wedding reception.",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAuaFScypuBvYbezz28BN8heq_v3DVM7wWWlmzrYS87uXud8vsE-9gSIUf7oMjtCsaSc_-0feoYwqlS1JM9xIpNdKftTwNrhiBSlq0jjP5VU-Kio1mnDHsxRbXVqLAW4dnnuiYgwE5idFOxZEB2uXfqwphhC-tZ9w3Z_pFzYw2OyaTDfRi2JyoSMC0y65GIqyqm00RrEpT6mIv-Z6b4HbY0KPRacbgZLHWvH71xTgbqiF6U8R3Ag3HrhUYuilFgwliGVOmiIKyUm7k",
    alt: "A close-up shot of the wedding cake.",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDKtBYm8jXy5Uf31JS-yXbhKUIldL6GtcQXzcfBg9QMG7lf4Svgys6YupSImV7e3eOrgvK3VnFCneEc1vWvGBHaFtPkI6rEKD4lqnJ0aB73WmnBRUUx-kzrtyKht7pnycbwUwRaXKV38rubV2DSnLukAjzGHh-dNWKXz-FJIpkFqYB0eglCMTVzqU4Z5Upf0GVosihGBHjBRU8GP5kFdK8lpLxNhWEeKP0ZK2-pw1n6EFJhpjKe57FFdBhUPwUSaEZe2XYR3ijmb5Y",
    alt: "A candid photo of guests laughing.",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAe1In2hsEXPI_4W-s6GdPXpA6a5Pw-sLMbmw7u_xb7Mk6Ffft_HHZdKqMQk2bfYbJ-AaufKtOzLzbQravBIYrdLN7xtqPbuwOTg2rnth_0gagkDHyufbsHM5JXe0lCynRfZvtmQ1VGCOtJtnMwVCC7-4-bxgiyhh_OS_Ly2kXr_q-_HBsX8VFsIOZnvKCoBdu-QmK4WvzaNrcWBLwyFtCBtWyQfFdAz0UzFXAVMYyYyFu2AS9EaAb_Hot4ICS5A1PvVvFM1Vi-_rA",
    alt: "The bride and groom sharing their first dance.",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAbcwuPpMRFLSsumNVG9eKOB69AhAZ3cDTszeeIXwp2P-ASzYOBaNGmbHgPlPueCGXsAFw1d1fK_ZcXN-GB7SVX-7C4Nk3rBKZqFELZ40QVmN7qDlx1YkVxhaf95P7S7Yowzv27NPIdrX603bVse9ZHvBg6kIpdCF66vAE6NWuvgLhm-cJ7Tiddk6mCUYHnPdQ2P5HSrQ5H3uzQouynYnVRf97thkip5WlVGZ8PlDJH_JfbkOiQQLed7bVyZ6wsNhdmsRlCGTIbgdA",
    alt: "A group photo of friends at the wedding.",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC_RlT4qcPLTP3rIx77x35Qnn5xZtqprH9KRJ7DnGuxqLAxg015EFyPaB2AJeFRDpZAyUVk_p1GSh3pPTn3aAaS6ohdslsE1-8J-xEI6zrP42eMOfVXSFXvSv7YRsDIQEBhWzzPSEbOdKzQltF2GP7SKCbJBugnUv9w-sU3cfffDRodlfI2afdDUlwU4w0m4L7q8fzLGPPQvavV4U7gAJIbB8XiSPNx3uBCDoP9kSL95x7b3WHZ16Ihzld8ALHFPPS3fPmZ_E6Hl04",
    alt: "Children playing at the wedding venue.",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAQjnm9HASg2ewS0KU27zF9sl6eOJjdlFBCzkWw7TKgeP12qPg12nT9f4VZFaFoKfviDEGqAVevnsL1wiNCCrlQPwzR2oqCTVf8s26RdCR57a9_Zp5cFAteS-gPviIQOvX-JKHsFIrJ-Guk5CS3Y6U233a4Fu8Peo2VTCP8fQGr7qCrF7EGj8k7MFKvO871KzMqlbPgkitvPxfVFeP2_6y8T1JLeXEJpDdHS8E_boRdK-AuQntdOJamN7ERNLF7huJ6byh8I7Cmmf0",
    alt: "A beautiful shot of the floral arrangements.",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBEcAQbgZoQqKbl1GEp3k1AeP_5Mm2fBQz5wRveQhgXXnGQy2u0Ze7WFwiBREit2j6Hli9RKXl-JwqEeuVwSxDwXjkjY__K_LulSfEPSrLk5byoHayxkl3U42x0jbOgkaVYBL-GaXelSeZnJe3d6ho3NExsNvDAk5tC18fjsn0iDyUemkOXiT3PRznH9fyxBAIpwsab1vyBzKmhCr0OdeN2gEiy6X-7KhPhCXfqxYGUPiDbL6DINfAtXj_RSYYHnNe6f1EHoh_2yvM",
    alt: "Guests toasting with champagne glasses.",
  },
];

export default function PhotoBook() {
  return (
    <section className="py-10">
      <div className="text-center">
        <h2 className="text-3xl font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5 mb-8">
          Our PhotoBook
        </h2>
        {/* <p className="mb-8">Share your favorite moments from our special day!</p> */}
      </div>

      {/* Masonry via CSS columns */}
      <div
        className="columns-2 md:columns-3 lg:columns-4 space-y-4"
        style={{ columnGap: "1rem" }} // column gap for masonry
      >
        {PHOTOS.map((p, idx) => (
          <div key={idx} className="break-inside-avoid">
            <img
              src={p.src}
              alt={p.alt}
              className="w-full rounded-lg"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <button
          type="button"
          className="mx-auto flex h-12 min-w-[84px] max-w-[480px] items-center justify-center overflow-hidden rounded-full bg-[#C0B283] px-5 text-base font-bold leading-normal text-white transition-opacity hover:opacity-90"
          onClick={() => alert("Open upload modal here")}
        >
          <span className="truncate">View Full PhotoBook</span>
        </button>
      </div>
    </section>
  );
}

// "use client";

// import React, { useCallback, useEffect, useMemo, useState } from "react";
// import { X, ChevronLeft, ChevronRight, Link } from "lucide-react";

// type Photo = { src: string; alt: string };

// const PHOTOS: Photo[] = [
//   {
//     src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDKImHnC1jtawBmwryWEi67ju_hWWUYpfMv380xAPKp8nk0lC4xBkTDTwPqH2yVDAyi_YuMbwgRlqAW1tVoHPil30ZJk9IOOAgqExMIcPSh4xP4epY9XZAATnpAiX8dZwWoYVqjHJ-crZTTXpO9SoHUeX10lex-0cWSg7PeiXH45XDE7Hcb3506yUdp7-h5-I4-GhmceMKl70GdnZdhywK-dC12cyjpBkZ5Ri5-DmWCVlq5dwrAUN8xcIfpTYuOPbWBPQO9uIfBN8I",
//     alt: "Guests dancing at the wedding reception.",
//   },
//   {
//     src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAuaFScypuBvYbezz28BN8heq_v3DVM7wWWlmzrYS87uXud8vsE-9gSIUf7oMjtCsaSc_-0feoYwqlS1JM9xIpNdKftTwNrhiBSlq0jjP5VU-Kio1mnDHsxRbXVqLAW4dnnuiYgwE5idFOxZEB2uXfqwphhC-tZ9w3Z_pFzYw2OyaTDfRi2JyoSMC0y65GIqyqm00RrEpT6mIv-Z6b4HbY0KPRacbgZLHWvH71xTgbqiF6U8R3Ag3HrhUYuilFgwliGVOmiIKyUm7k",
//     alt: "A close-up shot of the wedding cake.",
//   },
//   {
//     src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDKtBYm8jXy5Uf31JS-yXbhKUIldL6GtcQXzcfBg9QMG7lf4Svgys6YupSImV7e3eOrgvK3VnFCneEc1vWvGBHaFtPkI6rEKD4lqnJ0aB73WmnBRUUx-kzrtyKht7pnycbwUwRaXKV38rubV2DSnLukAjzGHh-dNWKXz-FJIpkFqYB0eglCMTVzqU4Z5Upf0GVosihGBHjBRU8GP5kFdK8lpLxNhWEeKP0ZK2-pw1n6EFJhpjKe57FFdBhUPwUSaEZe2XYR3ijmb5Y",
//     alt: "A candid photo of guests laughing.",
//   },
//   {
//     src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAe1In2hsEXPI_4W-s6GdPXpA6a5Pw-sLMbmw7u_xb7Mk6Ffft_HHZdKqMQk2bfYbJ-AaufKtOzLzbQravBIYrdLN7xtqPbuwOTg2rnth_0gagkDHyufbsHM5JXe0lCynRfZvtmQ1VGCOtJtnMwVCC7-4-bxgiyhh_OS_Ly2kXr_q-_HBsX8VFsIOZnvKCoBdu-QmK4WvzaNrcWBLwyFtCBtWyQfFdAz0UzFXAVMYyYyFu2AS9EaAb_Hot4ICS5A1PvVvFM1Vi-_rA",
//     alt: "The bride and groom sharing their first dance.",
//   },
//   {
//     src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAbcwuPpMRFLSsumNVG9eKOB69AhAZ3cDTszeeIXwp2P-ASzYOBaNGmbHgPlPueCGXsAFw1d1fK_ZcXN-GB7SVX-7C4Nk3rBKZqFELZ40QVmN7qDlx1YkVxhaf95P7S7Yowzv27NPIdrX603bVse9ZHvBg6kIpdCF66vAE6NWuvgLhm-cJ7Tiddk6mCUYHnPdQ2P5HSrQ5H3uzQouynYnVRf97thkip5WlVGZ8PlDJH_JfbkOiQQLed7bVyZ6wsNhdmsRlCGTIbgdA",
//     alt: "A group photo of friends at the wedding.",
//   },
//   {
//     src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC_RlT4qcPLTP3rIx77x35Qnn5xZtqprH9KRJ7DnGuxqLAxg015EFyPaB2AJeFRDpZAyUVk_p1GSh3pPTn3aAaS6ohdslsE1-8J-xEI6zrP42eMOfVXSFXvSv7YRsDIQEBhWzzPSEbOdKzQltF2GP7SKCbJBugnUv9w-sU3cfffDRodlfI2afdDUlwU4w0m4L7q8fzLGPPQvavV4U7gAJIbB8XiSPNx3uBCDoP9kSL95x7b3WHZ16Ihzld8ALHFPPS3fPmZ_E6Hl04",
//     alt: "Children playing at the wedding venue.",
//   },
//   {
//     src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAQjnm9HASg2ewS0KU27zF9sl6eOJjdlFBCzkWw7TKgeP12qPg12nT9f4VZFaFoKfviDEGqAVevnsL1wiNCCrlQPwzR2oqCTVf8s26RdCR57a9_Zp5cFAteS-gPviIQOvX-JKHsFIrJ-Guk5CS3Y6U233a4Fu8Peo2VTCP8fQGr7qCrF7EGj8k7MFKvO871KzMqlbPgkitvPxfVFeP2_6y8T1JLeXEJpDdHS8E_boRdK-AuQntdOJamN7ERNLF7huJ6byh8I7Cmmf0",
//     alt: "A beautiful shot of the floral arrangements.",
//   },
//   {
//     src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBEcAQbgZoQqKbl1GEp3k1AeP_5Mm2fBQz5wRveQhgXXnGQy2u0Ze7WFwiBREit2j6Hli9RKXl-JwqEeuVwSxDwXjkjY__K_LulSfEPSrLk5byoHayxkl3U42x0jbOgkaVYBL-GaXelSeZnJe3d6ho3NExsNvDAk5tC18fjsn0iDyUemkOXiT3PRznH9fyxBAIpwsab1vyBzKmhCr0OdeN2gEiy6X-7KhPhCXfqxYGUPiDbL6DINfAtXj_RSYYHnNe6f1EHoh_2yvM",
//     alt: "Guests toasting with champagne glasses.",
//   },
// ];

// export default function PhotoBook() {
//   const [activeIndex, setActiveIndex] = useState<number | null>(null);

//   // lock body scroll while modal is open
//   useEffect(() => {
//     if (activeIndex !== null) {
//       const prev = document.body.style.overflow;
//       document.body.style.overflow = "hidden";
//       return () => {
//         document.body.style.overflow = prev;
//       };
//     }
//   }, [activeIndex]);

//   const hasPrev = useMemo(
//     () => activeIndex !== null && activeIndex > 0,
//     [activeIndex]
//   );
//   const hasNext = useMemo(
//     () => activeIndex !== null && activeIndex < PHOTOS.length - 1,
//     [activeIndex]
//   );

//   const close = useCallback(() => setActiveIndex(null), []);
//   const prev = useCallback(() => {
//     if (hasPrev && activeIndex !== null) setActiveIndex(activeIndex - 1);
//   }, [activeIndex, hasPrev]);
//   const next = useCallback(() => {
//     if (hasNext && activeIndex !== null) setActiveIndex(activeIndex + 1);
//   }, [activeIndex, hasNext]);

//   // keyboard controls: Esc, ←, →
//   useEffect(() => {
//     if (activeIndex === null) return;
//     function onKey(e: KeyboardEvent) {
//       if (e.key === "Escape") close();
//       if (e.key === "ArrowLeft") prev();
//       if (e.key === "ArrowRight") next();
//     }
//     window.addEventListener("keydown", onKey);
//     return () => window.removeEventListener("keydown", onKey);
//   }, [activeIndex, close, prev, next]);

//   return (
//     <section className="py-10">
//       <div className="text-center">
//         <h2 className="mb-8 text-3xl font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
//           OUR PHOTOBOOK
//         </h2>
//         {/* <p className="mb-8">Share your favorite moments from our special day.</p> */}
//       </div>

//       {/* Masonry via CSS columns */}
//       <div className="columns-2 md:columns-3 lg:columns-4 space-y-4" style={{ columnGap: "1rem" }}>
//         {PHOTOS.map((p, idx) => (
//           <button
//             key={idx}
//             type="button"
//             className="block w-full break-inside-avoid focus:outline-none"
//             onClick={() => setActiveIndex(idx)}
//             aria-label={`Open image: ${p.alt}`}
//           >
//             <img
//               src={p.src}
//               alt={p.alt}
//               className="w-full rounded-lg transition-transform duration-300 hover:scale-[1.02]"
//               loading="lazy"
//             />
//           </button>
//         ))}
//       </div>

//       {/* <div className="text-center mt-8">
//         <Link href={'/demo/gallery'} className="mx-auto flex h-12 min-w-[84px] max-w-[480px] items-center justify-center overflow-hidden rounded-full bg-[#C0B283] px-5 text-base font-bold leading-normal text-white transition-opacity hover:opacity-90">
          
//         </Link>
//       </div> */}

//       {/* <div className="text-center mt-8">
//         <Link
//         href={'/demo/gallery'}
//           // type="button"
//           className="mx-auto flex h-12 min-w-[84px] max-w-[480px] items-center justify-center overflow-hidden rounded-full bg-[#C0B283] px-5 text-base font-bold leading-normal text-white transition-opacity hover:opacity-90"
//           // onClick={() => alert("Open upload modal here")}
//         >
//           <span className="truncate">View Full PhotoBook</span>
//         </Link>
//       </div> */}

//       {/* Lightbox modal */}
//       {activeIndex !== null && (
//         <div
//           className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
//           role="dialog"
//           aria-modal="true"
//           aria-label="Image viewer"
//           onClick={(e) => {
//             // close only when backdrop is clicked
//             if (e.target === e.currentTarget) close();
//           }}
//         >
//           {/* Close button */}
//           <button
//             type="button"
//             onClick={close}
//             className="absolute right-4 top-4 inline-flex items-center justify-center rounded-full bg-white/10 p-2 text-white backdrop-blur hover:bg-white/20 focus:outline-none"
//             aria-label="Close"
//           >
//             <X className="h-6 w-6" />
//           </button>

//           {/* Prev button */}
//           {hasPrev && (
//             <button
//               type="button"
//               onClick={prev}
//               className="absolute left-3 md:left-6 inline-flex items-center justify-center rounded-full bg-white/10 p-2 text-white backdrop-blur hover:bg-white/20 focus:outline-none"
//               aria-label="Previous image"
//             >
//               <ChevronLeft className="h-7 w-7" />
//             </button>
//           )}

//           {/* Next button */}
//           {hasNext && (
//             <button
//               type="button"
//               onClick={next}
//               className="absolute right-3 md:right-6 inline-flex items-center justify-center rounded-full bg-white/10 p-2 text-white backdrop-blur hover:bg-white/20 focus:outline-none"
//               aria-label="Next image"
//             >
//               <ChevronRight className="h-7 w-7" />
//             </button>
//           )}

//           {/* Image wrapper to keep aspect nicely centered */}
//           <figure className="max-h-[90vh] w-full max-w-5xl">
//             <img
//               src={PHOTOS[activeIndex].src}
//               alt={PHOTOS[activeIndex].alt}
//               className="mx-auto max-h-[90vh] w-auto rounded-lg shadow-2xl"
//             />
//             <figcaption className="mt-3 text-center text-sm text-white/80">
//               {PHOTOS[activeIndex].alt}
//             </figcaption>
//           </figure>
//         </div>
//       )}
//     </section>
//   );
// }
