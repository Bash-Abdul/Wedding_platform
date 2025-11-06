"use client";

import React from "react";
import Link from "next/link";
import { useCurrentUser } from "@/hooks/useCurrentUser";

const heroBg =
  'linear-gradient(rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.7) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBSnZIxpXbZfm_34EPonXzYBvLVTYjgw0KosDkVlBl8EnHpeOt_fLF0YfQ-9LJZlWgqcBd12xxhLh4PA6A2K_BKUu1GSESAEgdUjKN646oiG-aMXmzP3y_PyVyvT3oi-o0sXpe6KFFYF2NqdoKG2A7Socau9owT8Qg9zGysKFoeu-U8-jwsvGnX7F27T7SvKZVmJ84ocSuGn3wYvIxoxTUT_q3fgqwKEXiHGlwoJ8hy4OKOW_VN_NAJrwjPWq6IcCUzzgl7Z0Vygvo")';

export default function HeroSection() {
  const { data: user, isLoading } = useCurrentUser();

  return (
    <section className="w-full pt-1">
      <div
        className="flex min-h-[91vh] flex-col items-center justify-center gap-6 bg-cover bg-center bg-no-repeat p-4 text-center md:gap-8 md:p-8"
        style={{ backgroundImage: heroBg }}
        aria-label="A romantic, sun-drenched photo of a happy couple in a beautiful natural landscape."
        role="img"
      >
        <div className="flex flex-col gap-2">
          <h1 className="text-white text-3xl font-black leading-tight tracking-[-0.033em] md:text-5xl">
            {/* Jack &amp; Kate are getting married */}
            We're getting married!
          </h1>
          <p className="text-white text-lg">#JATE</p>
          <h2 className="text-white text-base leading-normal md:text-lg">
            October 26, 2024 | Napa Valley, California
          </h2>
        </div>

        {/* {isLoading ? (
          <div className="h-12 w-[180px] rounded-full bg-white/30 animate-pulse" />
        ) : user ? (
          <Link
            href="/dashboard"
            className="flex h-12 min-w-[84px] max-w-[480px] items-center justify-center overflow-hidden rounded-full bg-[#C0B283] px-6 text-base font-bold leading-normal text-white transition-opacity hover:opacity-90"
          >
            <span className="truncate">Access Dashboard</span>
          </Link>
        ) : (
          <a
            href="#rsvp"
            className="flex h-12 min-w-[84px] max-w-[480px] items-center justify-center overflow-hidden rounded-full bg-[#C0B283] px-6 text-base font-bold leading-normal text-white transition-opacity hover:opacity-90"
          >
            <span className="truncate">RSVP Now</span>
          </a>
        )} */}
      </div>
    </section>
  );
}
