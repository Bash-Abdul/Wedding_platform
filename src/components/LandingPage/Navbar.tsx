// "use client";

// import Link from "next/link";
// import React from "react";
// import { useCurrentUser } from "@/hooks/useCurrentUser";
// import { useAuthActions } from "@/hooks/useAuthActions";
// import { useRouter } from "next/navigation";

// const Navbar = () => {
//   const router = useRouter();
//   const { data: user, isLoading } = useCurrentUser();
//   const { logout } = useAuthActions();

//   async function handleLogout(e: React.MouseEvent) {
//     e.preventDefault();
//     await logout(); // this sets cache to null + invalidates
//     router.replace("/auth/login");
//   }

//   // if (isLoading) {
//   //   return (
//   //     <div>
//   //       Loading......
//   //     </div>
//   //   )
//   // }
//   return (
//     <div className="w-full whitespace-nowrap sticky top-0 z-50 border-b border-solid border-b-blush/50 bg-ivory/80 backdrop-blur-sm">
//       <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
//         <div className="flex items-center justify-between h-18">
//           {/* LOGO */}
//           {/* <div className="flex items-center">
//             <Link href={"/"} className="text-lg text-black/80 font-semibold">
//               Wedding
//             </Link>
//           </div> */}
//           <Link href={'/'} className="flex items-center gap-1">
//             {/* <div className="h-6 w-6 text-gold">
//               <svg
//                 fill="none"
//                 viewbox="0 0 15 15"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   clip-rule="evenodd"
//                   d="M12.0799 24L4 19.2479L9.95537 8.75216L18.04 13.4961L18.0446 4H29.9554L29.96 13.4961L38.0446 8.75216L44 19.2479L35.92 24L44 28.7521L38.0446 39.2479L29.96 34.5039L29.9554 44H18.0446L18.04 34.5039L9.95537 39.2479L4 28.7521L12.0799 24Z"
//                   fill="currentColor"
//                   fill-rule="evenodd"
//                 ></path>
//               </svg>
//             </div> */}
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               className="lucide lucide-clover-icon lucide-clover text-gold"
//             >
//               <path d="M16.17 7.83 2 22" />
//               <path d="M4.02 12a2.827 2.827 0 1 1 3.81-4.17A2.827 2.827 0 1 1 12 4.02a2.827 2.827 0 1 1 4.17 3.81A2.827 2.827 0 1 1 19.98 12a2.827 2.827 0 1 1-3.81 4.17A2.827 2.827 0 1 1 12 19.98a2.827 2.827 0 1 1-4.17-3.81A1 1 0 1 1 4 12" />
//               <path d="m7.83 7.83 8.34 8.34" />
//             </svg>
//             <h2 className="text-xl font-bold tracking-tight text-charcoal">
//               Our Vows
//             </h2>
//           </Link>

//           {/* {
//                   isLoading ? (
//                     // <p className='bg-black font-semibold text-white px-4 py-2 text-sm inline-block'>Loading.....</p>
//                     <Link href={''} className='bg-black/20 font-semibold text-white h-12 w-28 px-4 py-2 text-sm inline-block'></Link>

//                   ) :  
//                     user ? (
//                       <div className='flex items-center justify-center gap-x-12'>
//                       <Link href={'/auth/login'} onClick={logout} className='font-bold text-black'>Logout</Link>
//                       <p className='bg-black font-semibold text-white px-4 py-2 text-sm inline-block'>Welcome {user.name}</p>
//                   </div>
//                     ) : (
//                       <div className='flex items-center justify-center gap-x-12'>
//                       <Link href={'/auth/login'} className='font-bold text-black'>Login</Link>
//                       <Link href={''} className='bg-black font-semibold text-white px-4 py-2 text-sm inline-block'>Create an Event</Link>
//                   </div>
//                     )
//                   } */}

//           {user ? (
//             <div className="flex items-center justify-center gap-2">
//               <button onClick={handleLogout} className="hidden h-10 min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full bg-blush/40 px-5 text-sm font-bold leading-normal text-charcoal transition-colors hover:bg-blush/60 sm:flex">
//                 <span className="truncate">Logout</span>
//               </button>
//               <p className="flex h-10 min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full bg-gold px-5 text-sm font-bold leading-normal text-white transition-opacity hover:opacity-90">
//                 <span className="truncate">Welcome {user.name ?? user.email}</span>
//               </p>
//             </div>
//           ) : (

//             <div className="flex items-center gap-2">
//             <Link href={''} className="flex h-10 min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full bg-gold px-5 text-sm font-bold leading-normal text-white transition-opacity hover:opacity-90">
//               <span className="truncate">Create Your Event</span>
//             </Link>
//             <Link href={'/auth/login'} className="hidden h-10 min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full bg-blush/40 px-5 text-sm font-bold leading-normal text-charcoal transition-colors hover:bg-blush/60 sm:flex">
//               <span className="truncate">Log In</span>
//             </Link>
//           </div>
//             // <div className="flex items-center justify-center gap-x-12">
//             //   <Link href="/auth/login" className="font-bold text-black">
//             //     Login
//             //   </Link>
//             //   <Link
//             //     href=""
//             //     className="bg-black font-semibold text-white px-4 py-2 text-sm inline-block"
//             //   >
//             //     Create an Event
//             //   </Link>
//             // </div>
//           )}

//           {/* <div className="flex items-center gap-2">
//             <Link href={''} className="flex h-10 min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full bg-gold px-5 text-sm font-bold leading-normal text-white transition-opacity hover:opacity-90">
//               <span className="truncate">Create Your Event</span>
//             </Link>
//             <Link href={'/auth/login'} className="hidden h-10 min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full bg-blush/40 px-5 text-sm font-bold leading-normal text-charcoal transition-colors hover:bg-blush/60 sm:flex">
//               <span className="truncate">Log In</span>
//             </Link>
//           </div> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;


"use client";

import Link from "next/link";
import React from "react";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { useAuthActions } from "@/hooks/useAuthActions";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const { data: user, isLoading } = useCurrentUser();
  const { logout } = useAuthActions();

  async function handleLogout(e: React.MouseEvent) {
    e.preventDefault();
    await logout();
    router.replace("/auth/login");
  }

  return (
    <div className="w-full whitespace-nowrap sticky top-0 z-50 border-b border-solid border-b-blush/50 bg-ivory/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
        <div className="flex items-center justify-between h-18">
          {/* LOGO */}
          <Link href={'/'} className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-clover-icon lucide-clover text-gold"
            >
              <path d="M16.17 7.83 2 22" />
              <path d="M4.02 12a2.827 2.827 0 1 1 3.81-4.17A2.827 2.827 0 1 1 12 4.02a2.827 2.827 0 1 1 4.17 3.81A2.827 2.827 0 1 1 19.98 12a2.827 2.827 0 1 1-3.81 4.17A2.827 2.827 0 1 1 12 19.98a2.827 2.827 0 1 1-4.17-3.81A1 1 0 1 1 4 12" />
              <path d="m7.83 7.83 8.34 8.34" />
            </svg>
            <h2 className="text-xl font-bold tracking-tight text-charcoal">
              Our Vows
            </h2>
          </Link>

          {/* AUTH BUTTONS - Handle loading state */}
          {isLoading ? (
            // Show skeleton/placeholder during loading to prevent flash
            <div className="flex items-center gap-2">
              <div className="h-10 w-[140px] rounded-full bg-blush/40 animate-pulse" />
              <div className="hidden sm:block h-10 w-[84px] rounded-full bg-blush/40 animate-pulse" />
            </div>
          ) : user ? (
            // Authenticated state
            <div className="flex items-center justify-center gap-2">
              <button
                onClick={handleLogout}
                className="hidden h-10 min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full bg-blush/40 px-5 text-sm font-bold leading-normal text-charcoal transition-colors hover:bg-blush/60 sm:flex"
              >
                <span className="truncate">Logout</span>
              </button>
              <div className="flex h-10 min-w-[84px] max-w-[480px] items-center justify-center overflow-hidden rounded-full bg-gold px-5 text-sm font-bold leading-normal text-white">
                <span className="truncate">Welcome {user.name ?? user.email}</span>
              </div>
            </div>
          ) : (
            // Unauthenticated state
            <div className="flex items-center gap-2">
              <Link
                href={'/auth/register'}
                className="flex h-10 min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full bg-gold px-5 text-sm font-bold leading-normal text-white transition-opacity hover:opacity-90"
              >
                <span className="truncate">Create Your Event</span>
              </Link>
              <Link
                href={'/auth/login'}
                className="hidden h-10 min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full bg-blush/40 px-5 text-sm font-bold leading-normal text-charcoal transition-colors hover:bg-blush/60 sm:flex"
              >
                <span className="truncate">Log In</span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;