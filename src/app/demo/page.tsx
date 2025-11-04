"use client"
import Countdown from '@/components/Microsite/Countdown'
import MicrositeFooter from '@/components/Microsite/Footer'
import HeroSection from '@/components/Microsite/HeroSection'
import Navbar from '@/components/Microsite/Navbar'
import OurStorySection from '@/components/Microsite/OurStory'
import PhotoBook from '@/components/Microsite/PhotoBook'
import RegistrySection from '@/components/Microsite/RegisterySection'
import WeddingEvents from '@/components/Microsite/WeddingEvent'
import React from 'react'

const Demo = () => {
  return (
    <div className='bg-demo-background-light text-demo-text-light'>
      <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
        <div className="flex h-full grow flex-col">
         <Navbar />

         <main className='w-full'>
         <HeroSection />
          <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
            <Countdown />
            <OurStorySection />
            <WeddingEvents />
            <PhotoBook />
            <RegistrySection />
          </div>
         </main>

         <MicrositeFooter />
        </div>
      </div>
    </div>
  )
}

export default Demo