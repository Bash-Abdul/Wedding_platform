import React from 'react'

const Navbar = () => {
  return (
    <div>
         <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-primary/70 bg-demo-background-light/80 px-4 py-5 backdrop-blur-sm md:px-10 lg:px-20">
            <div className="flex items-center gap-4">
              <div className="size-6 text-primary">
                <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path d="M44 11.2727C44 14.0109 39.8386 16.3957 33.69 17.6364C39.8386 18.877 44 21.2618 44 24C44 26.7382 39.8386 29.123 33.69 30.3636C39.8386 31.6043 44 33.9891 44 36.7273C44 40.7439 35.0457 44 24 44C12.9543 44 4 40.7439 4 36.7273C4 33.9891 8.16144 31.6043 14.31 30.3636C8.16144 29.123 4 26.7382 4 24C4 21.2618 8.16144 18.877 14.31 17.6364C8.16144 16.3957 4 14.0109 4 11.2727C4 7.25611 12.9543 4 24 4C35.0457 4 44 7.25611 44 11.2727Z" fill="currentColor"></path>
                </svg>
              </div>
              <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] text-text-light dark:text-text-dark">J &amp; K</h2>
            </div>
            {/* <div className="hidden items-center gap-9 md:flex">
              <a className="text-sm font-medium leading-normal text-demo-text-light dark:text-text-dark" href="#story">Our Story</a>
              <a className="text-sm font-medium leading-normal text-demo-text-light" href="#events">Events</a>
              <a className="text-sm font-medium leading-normal text-demo-text-light" href="#rsvp">RSVP</a>
              <a className="text-sm font-medium leading-normal text-demo-text-light" href="#gallery">Gallery</a>
              <a className="text-sm font-medium leading-normal text-demo-text-light" href="#registry">Registry</a>
            </div>
            <a className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-demo-secondary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity" href="#rsvp">
              <span className="truncate">RSVP Now</span>
            </a> */}
          </header>
    </div>
  )
}

export default Navbar