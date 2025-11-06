// import React from "react";
// import {
//   LayoutDashboard,
//   Upload,
//   Images,
//   Gift,
//   CreditCard,
//   List,
//   Settings,
//   LogOut,
// } from "lucide-react";

// /**
//  * Wedding Microsite Dashboard (React + Tailwind + lucide-react)
//  * - Sidebar is now FIXED (left), full height.
//  * - Main content scrolls independently.
//  * - No dark: classes. Colors are literal.
//  */

// export default function WeddingDashboard() {
//   const leftAvatarBg =
//     'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAjMr641dw1rpmeskU3R77v-8Ewark57IdgaNGrM22hZYr_lYFgjRZV1Vh3jT-j4hhST34JGJLubxrG68hOfAE1vB4nxRzSG41QdT_XGp1Q3WM5yiIbcW_2f4hMK9jEJyt70eA9D3umyERPMvKyrAfAra_zJYsTu73OVmwexZCVtNERJfaNwZcy5edeUaINm5lS8rM4aLke2-WwbhgWt0DUNspmgvEZvXe4CyVTdKxUsBPuBLSIrVS9GAxjueNL2mGSbCwZ2AWstN8")';

//   const qrSrc =
//     "https://lh3.googleusercontent.com/aida-public/AB6AXuDhA-px8wm4MiTR0ap8sGZwe99h_-ts534dlMv1XVE0SwAk_O7vm42SsaQnXObEUSE_q9Ne6P-Uerk95Rq8dtv-G1ADJNe28a5c4CAVljeYs3i-6IBYAdogyXWCT-ZJuVUa5ruzG0cyY-gAd8PMfLERtTHMZlOLccf3Eg1ZWMej3P7T6t-3T_k64ZtVz0jOsKoq-Onu1_S0bDJXgElTC7RedtZakYbu8MaSz85rNiaEptXCx9BlOCnqFrkjmax1Ue025MdYWA4I1jo";

//   return (
//     <div className="font-display bg-[#f8f6f6] text-[#181113] h-screen overflow-hidden">
//       {/* FIXED SIDEBAR */}
//       <aside className="fixed inset-y-0 left-0 w-64 bg-white border-r border-[#e5dcdf] flex flex-col justify-between">
//         <div className="p-4 overflow-y-auto">
//           <div className="flex items-center gap-3 p-2 mb-4">
//             <div
//               className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
//               aria-label="Profile picture of Alex and Jordan"
//               style={{ backgroundImage: leftAvatarBg }}
//             />
//             <div className="flex flex-col">
//               <h1 className="text-[#181113] text-base font-semibold leading-normal">
//                 Alex &amp; Jordan
//               </h1>
//               <p className="text-[#886370] text-sm font-normal leading-normal">
//                 Wedding Microsite
//               </p>
//             </div>
//           </div>
//           <nav className="flex flex-col gap-1">
//             <a
//               className="flex items-center gap-3 px-3 py-2 rounded-lg bg-[#f7bacf]/20 text-[#181113]"
//               href="#"
//             >
//               <LayoutDashboard className="w-5 h-5" />
//               <p className="text-sm font-medium leading-normal">Overview</p>
//             </a>
//             <a
//               className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
//               href="#"
//             >
//               <Upload className="w-5 h-5" />
//               <p className="text-sm font-medium leading-normal">Uploads</p>
//             </a>
//             <a
//               className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
//               href="#"
//             >
//               <Images className="w-5 h-5" />
//               <p className="text-sm font-medium leading-normal">
//                 Gallery Preview
//               </p>
//             </a>
//             <a
//               className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
//               href="#"
//             >
//               <Gift className="w-5 h-5" />
//               <p className="text-sm font-medium leading-normal">Wishlist</p>
//             </a>
//             <a
//               className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
//               href="#"
//             >
//               <CreditCard className="w-5 h-5" />
//               <p className="text-sm font-medium leading-normal">Payments</p>
//             </a>
//             <a
//               className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
//               href="#"
//             >
//               <List className="w-5 h-5" />
//               <p className="text-sm font-medium leading-normal">RSVP List</p>
//             </a>
//             <a
//               className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
//               href="#"
//             >
//               <Settings className="w-5 h-5" />
//               <p className="text-sm font-medium leading-normal">Settings</p>
//             </a>
//           </nav>
//         </div>
//         <div className="p-4 border-t border-[#e5dcdf]">
//           <a
//             className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
//             href="#"
//           >
//             <LogOut className="w-5 h-5" />
//             <p className="text-sm font-medium leading-normal">Log Out</p>
//           </a>
//         </div>
//       </aside>

//       {/* SCROLLING MAIN AREA */}
//       <main className="ml-64 h-screen overflow-y-auto p-6 lg:p-10">
//         <div className="max-w-7xl mx-auto">

//         </div>
//       </main>
//     </div>
//   );
// }
"use client"

import { useState } from 'react'

export default function Dashboard() {

  const [qrGenerated, setQrGenerated] = useState(false);

  const qrSrc =
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDhA-px8wm4MiTR0ap8sGZwe99h_-ts534dlMv1XVE0SwAk_O7vm42SsaQnXObEUSE_q9Ne6P-Uerk95Rq8dtv-G1ADJNe28a5c4CAVljeYs3i-6IBYAdogyXWCT-ZJuVUa5ruzG0cyY-gAd8PMfLERtTHMZlOLccf3Eg1ZWMej3P7T6t-3T_k64ZtVz0jOsKoq-Onu1_S0bDJXgElTC7RedtZakYbu8MaSz85rNiaEptXCx9BlOCnqFrkjmax1Ue025MdYWA4I1jo";


  return (


    <>
      {/* PageHeading */}
      <header className="mb-8">
        <p className="text-[#181113] text-4xl font-black leading-tight tracking-[-0.033em]">
          Overview
        </p>
        <p className="text-[#886370] text-base font-normal leading-normal mt-2">
          Here’s a summary of your wedding microsite activity.
        </p>
      </header>

      {/* Stats */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          { label: "Total RSVPs", value: "82", change: "+5% last 7 days" },
          {
            label: "Photos Uploaded",
            value: "156",
            change: "+12% last 7 days",
          },
          {
            label: "Gifts Received",
            value: "$2,450",
            change: "+8% last 7 days",
          },
          {
            label: "QR Code Scans",
            value: "210",
            change: "+20% last 7 days",
          },
        ].map((s) => (
          <div
            key={s.label}
            className="flex flex-col gap-2 rounded-xl p-6 bg-white border border-[#e5dcdf] transition-shadow hover:shadow-lg"
          >
            <p className="text-[#181113] text-base font-medium leading-normal">
              {s.label}
            </p>
            <p className="text-[#181113] tracking-light text-3xl font-bold leading-tight">
              {s.value}
            </p>
            <p className="text-green-600 text-sm font-medium leading-normal mt-1">
              {s.change}
            </p>
          </div>
        ))}
      </section>

      {/* Charts and QR Code */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-5">
        <div className="lg:col-span-2 p-6 rounded-xl bg-white border border-[#e5dcdf]">
          <div className="flex flex-col gap-2">
            <p className="text-[#181113] text-base font-medium leading-normal">
              RSVPs Over Time
            </p>
            <p className="text-[#181113] tracking-light text-[32px] font-bold leading-tight truncate">
              82 Total
            </p>
            <div className="flex gap-1">
              <p className="text-[#886370] text-sm font-normal leading-normal">
                Last 30 Days
              </p>
              <p className="text-green-600 text-sm font-medium leading-normal">
                +15%
              </p>
            </div>
            <div className="grid min-h-[180px] grid-flow-col gap-6 grid-rows-[1fr_auto] items-end justify-items-center px-3 pt-6">
              <div
                className="w-full bg-[#f7bacf]/20 rounded-t-lg"
                style={{ height: "45%" }}
              />
              <div
                className="w-full bg-[#f7bacf]/20 rounded-t-lg"
                style={{ height: "60%" }}
              />
              <div
                className="w-full bg-[#f7bacf]/20 rounded-t-lg"
                style={{ height: "75%" }}
              />
              <div
                className="w-full bg-[#f7bacf] rounded-t-lg"
                style={{ height: "90%" }}
              />
              <p className="text-[#886370] text-xs font-medium leading-normal">
                Week 1
              </p>
              <p className="text-[#886370] text-xs font-medium leading-normal">
                Week 2
              </p>
              <p className="text-[#886370] text-xs font-medium leading-normal">
                Week 3
              </p>
              <p className="text-[#886370] text-xs font-medium leading-normal">
                Week 4
              </p>
            </div>
          </div>
        </div>

        <div className="p-6 rounded-xl bg-white border border-[#e5dcdf] flex flex-col items-center justify-center text-center">
          {
            qrGenerated ? (
              <>
                <h3 className="text-base font-medium text-[#181113] mb-4">
                  Your Wedding QR Code
                </h3>
                <div className="p-3 bg-white rounded-lg border border-[#e5dcdf]">
                  <img
                    alt="Wedding Microsite QR Code"
                    className="w-36 h-36"
                    src={qrSrc}
                  />
                </div>
                <p className="text-xs text-[#886370] mt-3">
                  Guests can scan this to visit your site.
                </p>
                <button className="cursor-pointer mt-4 w-full bg-[#f7bacf] text-[#181113] font-semibold py-2 px-4 rounded-lg hover:opacity-90 transition-opacity">
                  Download QR
                </button>
              </>
            ) : (

              <>
                <h3 className="text-base font-medium text-[#181113] mb-4">
                  Generate Unique Wedding QR Code
                </h3>
                <div className="p-3 bg-white rounded-lg border border-[#e5dcdf]">
                  <img
                    alt="Wedding Microsite QR Code"
                    className="w-36 h-36"
                    src={qrSrc}
                  />
                </div>
                <p className="text-xs text-[#886370] mt-3">
                  Guests can scan this to visit your site.
                </p>
                <button className="cursor-pointer mt-4 w-full bg-[#f7bacf] text-[#181113] font-semibold py-2 px-4 rounded-lg hover:opacity-90 transition-opacity">
                  Generate QR
                </button>
              </>

            )
          }
        </div>
      </section>

      <div>
        {/* SectionHeader */}
        <header>
          <h2 className="text-[#181113] text-[22px] font-bold leading-tight tracking-[-0.015em] pt-5 pb-3">
            Recent Activity
          </h2>
        </header>

        {/* Recent Activity Table */}
        <section className="bg-white border border-[#e5dcdf] rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-[#e5dcdf] text-xs text-[#886370] uppercase">
                <tr>
                  <th className="px-6 py-3 font-medium" scope="col">
                    Guest Name
                  </th>
                  <th className="px-6 py-3 font-medium" scope="col">
                    Activity
                  </th>
                  <th className="px-6 py-3 font-medium" scope="col">
                    Status
                  </th>
                  <th className="px-6 py-3 font-medium" scope="col">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e5dcdf] hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-[#181113] whitespace-nowrap">
                    Olivia Chen
                  </td>
                  <td className="px-6 py-4 text-[#886370]">Sent an RSVP</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                      Attending
                    </span>
                  </td>
                  <td className="px-6 py-4 text-[#886370]">2 min ago</td>
                </tr>
                <tr className="border-b border-[#e5dcdf] hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-[#181113] whitespace-nowrap">
                    Liam Rodriguez
                  </td>
                  <td className="px-6 py-4 text-[#886370]">
                    Uploaded a Photo
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                      Pending Approval
                    </span>
                  </td>
                  <td className="px-6 py-4 text-[#886370]">1 hour ago</td>
                </tr>
                <tr className="border-b border-[#e5dcdf] hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-[#181113] whitespace-nowrap">
                    Anonymous
                  </td>
                  <td className="px-6 py-4 text-[#886370]">Sent a Gift</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                      Received
                    </span>
                  </td>
                  <td className="px-6 py-4 text-[#886370]">3 hours ago</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-[#181113] whitespace-nowrap">
                    Sophia Nguyen
                  </td>
                  <td className="px-6 py-4 text-[#886370]">Sent an RSVP</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                      Not Attending
                    </span>
                  </td>
                  <td className="px-6 py-4 text-[#886370]">Yesterday</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </>
  )
}