import Image from "next/image";
import Navbar from "@/components/LandingPage/Navbar";
import Hero from "@/components/LandingPage/Hero";
import Works from "@/components/LandingPage/Works";
import Feature from "@/components/LandingPage/Feature";
import Testimonials from "@/components/LandingPage/Testimonial";
import FinalCTA from "@/components/LandingPage/FinalCTA";
import Footer from "@/components/LandingPage/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="w-full">
        <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-20 mb-10">
          <Hero />
          <Works />
          <Feature />
          <Testimonials />
          <FinalCTA />
        </div>
      </div>

      <Footer />
      {/*     
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-color-ivory">
      <div>
        WELCOME TO THE EVENT PLATFORM
      </div>
    </div> */}
    </>
  );
}
