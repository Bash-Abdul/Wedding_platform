"use client"

import Link from 'next/link'
import React from 'react'
import { useCurrentUser } from '@/hooks/useCurrentUser'
import { useAuthActions } from '@/hooks/useAuthActions'

const Navbar = () => {
  const {data: user, isLoading} = useCurrentUser();
  const {logout} = useAuthActions();

  // if (isLoading) {
  //   return (
  //     <div>
  //       Loading......
  //     </div>
  //   )
  // }
  return (
    <div className='bg-white/90 w-full'>
        <div className='container mx-auto px-14 sm:px-6 lg:px-20'>
            <div className='flex items-center justify-between h-18'>

                {/* LOGO */}
                <div className='flex items-center'>
                <Link href={'/'} className='text-lg text-black/80 font-semibold'>Wedding</Link>
                </div>

                {
                  isLoading ? (
                    <p className='bg-black font-semibold text-white px-4 py-2 text-sm inline-block'>Loading.....</p>
                  ) :  
                    user ? (
                      <div className='flex items-center justify-center gap-x-12'>
                      <Link href={'/auth/login'} onClick={logout} className='font-bold text-black'>Logout</Link>
                      <p className='bg-black font-semibold text-white px-4 py-2 text-sm inline-block'>Welcome {user.name}</p>
                  </div>
                    ) : (
                      <div className='flex items-center justify-center gap-x-12'>
                      <Link href={'/auth/login'} className='font-bold text-black'>Login</Link>
                      <Link href={''} className='bg-black font-semibold text-white px-4 py-2 text-sm inline-block'>Create an Event</Link>
                  </div>
                    )
                  }
            </div>
        </div>
    </div>
  )
}

export default Navbar