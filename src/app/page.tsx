import Image from "next/image";
import Navbar from "@/components/LandingPage/Navbar";

export default function Home() {
  return (
    <>
    <Navbar />
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div>
        WELCOME TO THE EVENT PLATFORM
      </div>
    </div>
    </>
    
  );
}