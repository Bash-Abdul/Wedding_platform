"use client"

import React from "react";
import Link from "next/link";
import { useCurrentUser } from "@/hooks/useCurrentUser";


const heroBg =
  'linear-gradient(rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBfLstAjfcD0oZZ3LptobhAuE8_AI-3Tm2IqeAfsrE8oDNpr8FV23p5YwujWJaUiAj5jVpw2cvAXiSXU4O-5comeAlXF62au77j_caBDG878DeJE3t_J0X9r-wjTp9lLFnhJxz0rmqpmcqdjmAn8p2V0WXMONBVPu1KycWfQGTeI6dcjVBLhxL2kXTBrDDwkqpGEYVEidosFaCkPXLZwo4G-IOfSuuf6YeI3kVHTRpeywGSCFuOvxI6O3oK_KiqauxkMv0z4aaahMY")';

const Hero = () => {

  const {data: user, isLoading} = useCurrentUser();
  return (
    <section className="w-full py-10 md:py-14">
     <div
      className="flex min-h-[80vh] flex-col items-center justify-center gap-6 rounded-xl bg-cover bg-center p-8 text-center"
      style={{ backgroundImage: heroBg }}
      aria-label="A softly lit, romantic image of a diverse couple sharing a happy moment at their wedding."
      role="img"
    >
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
            Your love story, beautifully shared.
          </h1>
          <p className="mx-auto max-w-2xl text-base font-normal leading-normal text-white/90 sm:text-lg">
            Create a personalized wedding microsite to gather photos, manage
            RSVPs, and share your journey with friends and family.
          </p>
        </div>

        {
          isLoading ? (
            <div className="h-10 w-[140px] rounded-full bg-blush/40 animate-pulse" />
          ) : user ? (
            <Link href={'/dashboard'} className="flex h-12 min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full bg-gold px-6 text-base font-bold leading-normal text-white transition-opacity hover:opacity-90">
          <span className="truncate">Access Dashboard</span>
        </Link>
          ) : (
            <Link href={'/auth/login'} className="flex h-12 min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full bg-gold px-6 text-base font-bold leading-normal text-white transition-opacity hover:opacity-90">
          <span className="truncate">Create Your Event</span>
        </Link>
          )
        }
        {/* {
          user ? (
            <Link href={'/dashboard'} className="flex h-12 min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full bg-gold px-6 text-base font-bold leading-normal text-white transition-opacity hover:opacity-90">
          <span className="truncate">Access Dashboard</span>
        </Link>
          ) : (
            <Link href={'/auth/login'} className="flex h-12 min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full bg-gold px-6 text-base font-bold leading-normal text-white transition-opacity hover:opacity-90">
          <span className="truncate">Create Your Event</span>
        </Link>
          )
        } */}
      </div>
    </section>
  );
};

export default Hero;
