import React from 'react'

const FinalCTA = () => {
    return (
        <section className="w-full rounded-lg bg-blush py-16 md:py-20">
            <div className="flex flex-col items-center gap-4 text-center">
                <h2 className="font-serif text-3xl font-bold leading-tight tracking-tight text-charcoal sm:text-4xl">Ready to start planning?</h2>
                <p className="max-w-xl text-charcoal/80">Begin your story today and create a beautiful wedding website your guests will love.</p>
                <button className="mt-4 flex h-12 min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full bg-gold px-6 text-base font-bold leading-normal text-white transition-opacity hover:opacity-90">
                    <span className="truncate">Create Your Free Page</span>
                </button>
            </div>
        </section>
    )
}

export default FinalCTA