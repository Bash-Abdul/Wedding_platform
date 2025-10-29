import React from 'react'

const Feature = () => {
  return (

    <section className="flex flex-col gap-20 py-16 md:py-24">
  {/* --- First row: Image first --- */}
  <div className="grid items-center gap-12 md:grid-cols-2">
    <div
      className="w-full rounded-lg bg-cover bg-center shadow-lg aspect-16/10"
      role="img"
      aria-label="A mockup of a wedding website's photo gallery page, shown on a desktop screen, featuring a grid of beautiful couple photos."
      style={{
        backgroundImage:
          'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDi7I9fDTFqmuUL8ZKtDnnZfZNBDDkMkojE_4C87rwfAL7LNGEqWIfa2to5LqauO7yn4ph-v0ql80lnh1eXlA_Edlq3GgSBnoIIdTOsgSACxldOQkgzY5OxyrUlJEHOF_wr2LwENUE6pE27QMaKNPJ_qO95JtqrhBuscoGnPVV1DuXR4AEyJ8IhNfE2ipDLqQsIR6TYIcSL7S23vnjzlQnNU0EAs0_A6xy5byQNKMuJFS2P3CUQ7ltiisz3RXXQWgyqnJwf3sxiwUg")',
      }}
    />

    <div className="flex flex-col gap-4">
      <h2 className="font-serif text-3xl font-bold leading-tight tracking-tight text-charcoal sm:text-4xl">
        A Beautiful Home for Your Memories
      </h2>
      <p className="text-charcoal/80">
        Showcase your journey with elegant design. Our mockups preview the seamless experience for you and your guests on any device.
      </p>
    </div>
  </div>

  {/* --- Second row: Text first (with image second) --- */}
  <div className="grid items-center gap-12 md:grid-cols-2">
    <div className="flex flex-col gap-4">
      <h2 className="font-serif text-3xl font-bold leading-tight tracking-tight text-charcoal sm:text-4xl">
        All The Details, Perfectly Planned
      </h2>
      <p className="text-charcoal/80">
        Keep everyone informed with a clear timeline of events, venue details, and accommodation suggestions, all in one accessible place.
      </p>
    </div>

    <div
      className="w-full rounded-lg bg-cover bg-center shadow-lg aspect-16/10"
      role="img"
      aria-label="A mockup of a wedding website's event timeline, shown on a mobile phone screen, listing ceremony and reception details."
      style={{
        backgroundImage:
          'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAbfCUgaX95Y4j3KaXKFTCIkSrFM9t_fTxzkC20fpvLlS5nV0456u7h_Y191Bv7WASZ57_gdDLVprZf01bdcRs6ZTajDqrw_wUOHzKhtD-tVKOpi0pmURnyCAerVFjndbcI88Hrq_cn84BdmdP5b7Cc_Ann4BWB6M1y2ZGDJzMmsAz5o6UIIbcTeEldxxZe-WwboyXe2QEzjMzLkWr96-Piids8mGi5-YchUHyIXInD4RIyKk0TN3EbgV8zvvRoyRyv6werkF7FjmI")',
      }}
    />
  </div>
</section>



//     <section className="flex flex-col gap-20 py-16 md:py-24">
//   <div className="grid items-center gap-12 md:grid-cols-2">
//     <div className="flex flex-col gap-4">
//       <h2 className="font-serif text-3xl font-bold leading-tight tracking-tight text-charcoal sm:text-4xl">
//         A Beautiful Home for Your Memories
//       </h2>
//       <p className="text-charcoal/80">
//         Showcase your journey with elegant design. Our mockups preview the seamless experience for you and your guests on any device.
//       </p>
//     </div>

//     <div
//       className="w-full rounded-lg bg-cover bg-center shadow-lg aspect-[16/10]"
//       role="img"
//       aria-label="A mockup of a wedding website's photo gallery page, shown on a desktop screen, featuring a grid of beautiful couple photos."
//       style={{
//         backgroundImage:
//           'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDi7I9fDTFqmuUL8ZKtDnnZfZNBDDkMkojE_4C87rwfAL7LNGEqWIfa2to5LqauO7yn4ph-v0ql80lnh1eXlA_Edlq3GgSBnoIIdTOsgSACxldOQkgzY5OxyrUlJEHOF_wr2LwENUE6pE27QMaKNPJ_qO95JtqrhBuscoGnPVV1DuXR4AEyJ8IhNfE2ipDLqQsIR6TYIcSL7S23vnjzlQnNU0EAs0_A6xy5byQNKMuJFS2P3CUQ7ltiisz3RXXQWgyqnJwf3sxiwUg")',
//       }}
//     />
//   </div>

//   <div className="grid items-center gap-12 md:grid-cols-2">
   

//     <div className="flex flex-col gap-4">
//       <h2 className="font-serif text-3xl font-bold leading-tight tracking-tight text-charcoal sm:text-4xl">
//         All The Details, Perfectly Planned
//       </h2>
//       <p className="text-charcoal/80">
//         Keep everyone informed with a clear timeline of events, venue details, and accommodation suggestions, all in one accessible place.
//       </p>
//     </div>



//     <div
//       className="w-full rounded-lg bg-cover bg-center shadow-lg aspect-[16/10] md:order-last"
//       role="img"
//       aria-label="A mockup of a wedding website's event timeline, shown on a mobile phone screen, listing ceremony and reception details."
//       style={{
//         backgroundImage:
//           'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAbfCUgaX95Y4j3KaXKFTCIkSrFM9t_fTxzkC20fpvLlS5nV0456u7h_Y191Bv7WASZ57_gdDLVprZf01bdcRs6ZTajDqrw_wUOHzKhtD-tVKOpi0pmURnyCAerVFjndbcI88Hrq_cn84BdmdP5b7Cc_Ann4BWB6M1y2ZGDJzMmsAz5o6UIIbcTeEldxxZe-WwboyXe2QEzjMzLkWr96-Piids8mGi5-YchUHyIXInD4RIyKk0TN3EbgV8zvvRoyRyv6werkF7FjmI")',
//       }}
//     />
//   </div>
// </section>

  )
}

export default Feature