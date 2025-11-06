// // import React from "react";
// // import {
// //     PlusCircle,
// //     Edit,
// //     Trash2,
// //     GripVertical,
// //     ExternalLink,
// //     Gift as GiftIcon,
// // } from "lucide-react";

// // export default function GiftListPage() {
// //     return (
// //         <>
// //             {/* Page Heading */}
// //             <header className="flex flex-wrap justify-between items-center gap-4 mb-8">
// //                 <div className="flex flex-col gap-2">
// //                     <h1 className="text-[#181113] text-4xl font-black leading-tight tracking-[-0.033em]">
// //                         Manage Your Gift List
// //                     </h1>
// //                     <p className="text-[#886370] text-base leading-normal">
// //                         Add gifts for your guests. Drag and drop cards to reorder your list.
// //                     </p>
// //                 </div>
// //                 <button
// //                     className="flex min-w-[84px] items-center justify-center gap-2 overflow-hidden rounded-xl h-12 px-6 bg-[#f7bacf] hover:opacity-90 text-black cursor-pointer text-sm font-bold leading-normal tracking-[0.015em] transition-colors shadow-sm"
// //                     type="button"
// //                 >
// //                     <PlusCircle className="w-5 h-5" />
// //                     <span className="truncate">Add New Gift</span>
// //                 </button>
// //             </header>

// //             {/* Gift Cards Grid */}
// //             <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
// //                 {/* Gift Item Card 1 */}
// //                 <div className="group relative flex flex-col gap-3 pb-3 bg-white border border-transparent hover:border-[#f7bacf]/50 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 cursor-grab">
// //                     {/* Hover actions right */}
// //                     <div className="absolute top-3 right-3 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
// //                         <button
// //                             className="size-8 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-black/60"
// //                             type="button"
// //                             aria-label="Edit gift"
// //                             title="Edit"
// //                         >
// //                             <Edit className="w-4 h-4" />
// //                         </button>
// //                         <button
// //                             className="size-8 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-black/60"
// //                             type="button"
// //                             aria-label="Delete gift"
// //                             title="Delete"
// //                         >
// //                             <Trash2 className="w-4 h-4" />
// //                         </button>
// //                     </div>
// //                     {/* Drag handle left */}
// //                     <div className="absolute top-3 left-3 size-8 rounded-full bg-black/40 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
// //                         <GripVertical className="w-4 h-4" />
// //                     </div>

// //                     <div
// //                         className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-t-xl"
// //                         aria-label="Tropical beach with palm trees and clear blue water"
// //                         style={{
// //                             backgroundImage:
// //                                 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBs9Oik0gAA1Lbk8lsY6hnIjEGaDyEvQvEvrIU8HmBfktgdt17jJHMKPwrbP_qkbDaYD1WwwjuQzfogfnTqEF79p0Ppl1mMCjgfjd8kuUA6qwS32A6xmLMVAKlQqCUglI9CAMqbf91_QN_bTjzb76BeiLuqbkrPv87nMV88UKa7EZscS5H1JmlJ-ZoAMVxYnrAmT3XqeLY1KRU2CgEDxLULDxsKAZkCIOSN7guoGnpLucfKd5iUjknyjxGJSR1EMzf9aMiflw4YufY")',
// //                         }}
// //                     />
// //                     <div className="px-4">
// //                         <div className="flex justify-between items-start">
// //                             <p className="text-[#181113] text-base font-medium">Honeymoon Fund</p>
// //                             <a
// //                                 className="text-[#886370] hover:text-[#f7bacf]"
// //                                 href="#"
// //                                 aria-label="Open gift link"
// //                             >
// //                                 <ExternalLink className="w-5 h-5" />
// //                             </a>
// //                         </div>
// //                         <p className="text-[#886370] text-sm">
// //                             Help us fund our dream trip to Italy!
// //                         </p>
// //                         <p className="text-[#886370] text-sm mt-1">$1,250 of $2,000</p>
// //                     </div>
// //                     {/* Progress */}
// //                     <div className="flex flex-col gap-2 px-4 mt-1">
// //                         <div className="rounded-full bg-[#f7bacf]/20 h-2">
// //                             <div
// //                                 className="h-2 rounded-full bg-[#f7bacf]"
// //                                 style={{ width: "62.5%" }}
// //                             />
// //                         </div>
// //                     </div>
// //                 </div>

// //                 {/* Gift Item Card 2 */}
// //                 <div className="group relative flex flex-col gap-3 pb-3 bg-white border border-transparent hover:border-[#b7d0c3]/50 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 cursor-grab">
// //                     <div className="absolute top-3 right-3 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
// //                         <button
// //                             className="size-8 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-black/60"
// //                             type="button"
// //                             aria-label="Edit gift"
// //                             title="Edit"
// //                         >
// //                             <Edit className="w-4 h-4" />
// //                         </button>
// //                         <button
// //                             className="size-8 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-black/60"
// //                             type="button"
// //                             aria-label="Delete gift"
// //                             title="Delete"
// //                         >
// //                             <Trash2 className="w-4 h-4" />
// //                         </button>
// //                     </div>
// //                     <div className="absolute top-3 left-3 size-8 rounded-full bg-black/40 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
// //                         <GripVertical className="w-4 h-4" />
// //                     </div>

// //                     <div
// //                         className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-t-xl"
// //                         aria-label="Modern living room with a comfortable grey sofa"
// //                         style={{
// //                             backgroundImage:
// //                                 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC2uG_yhaVuaEYnXjQbQC50Lghpz2Nw8u07As8m04VAB1FBXtqhSRLhgD9UcmTqYaGJwDWG8j-1BuPX3lIkCDXwcgcu4UfBNIfAAl5zJaPlSEg5eIwPot-lTF2HzhiQgkWOUcfdLDK0T5fzqHzSl9bGTxZqfA7V9NgH4TYcuw-ZxwJ1kJu8TUKbKNsRj-1OaP6t9jb3KT-f8-XVHyfpunJGaJTHZDRDCR150FzQ_1MU2MZYIoTydZwD1vkf1QaZmSOqxZd9K9AGhdE")',
// //                         }}
// //                     />
// //                     <div className="px-4">
// //                         <div className="flex justify-between items-start">
// //                             <p className="text-[#181113] text-base font-medium">New Sofa</p>
// //                             <a
// //                                 className="text-[#886370] hover:text-[#b7d0c3]"
// //                                 href="#"
// //                                 aria-label="Open gift link"
// //                             >
// //                                 <ExternalLink className="w-5 h-5" />
// //                             </a>
// //                         </div>
// //                         <p className="text-[#886370] text-sm">For our new home.</p>
// //                         <p className="text-[#886370] text-sm mt-1">$700 of $1,500</p>
// //                     </div>
// //                     <div className="flex flex-col gap-2 px-4 mt-1">
// //                         <div className="rounded-full bg-[#b7d0c3]/20 h-2">
// //                             <div className="h-2 rounded-full bg-[#b7d0c3]" style={{ width: "47%" }} />
// //                         </div>
// //                     </div>
// //                 </div>

// //                 {/* Gift Item Card 3 */}
// //                 <div className="group relative flex flex-col gap-3 pb-3 bg-white border border-transparent hover:border-[#9ec5fe]/50 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 cursor-grab">
// //                     <div className="absolute top-3 right-3 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
// //                         <button
// //                             className="size-8 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-black/60"
// //                             type="button"
// //                             aria-label="Edit gift"
// //                             title="Edit"
// //                         >
// //                             <Edit className="w-4 h-4" />
// //                         </button>
// //                         <button
// //                             className="size-8 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-black/60"
// //                             type="button"
// //                             aria-label="Delete gift"
// //                             title="Delete"
// //                         >
// //                             <Trash2 className="w-4 h-4" />
// //                         </button>
// //                     </div>
// //                     <div className="absolute top-3 left-3 size-8 rounded-full bg-black/40 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
// //                         <GripVertical className="w-4 h-4" />
// //                     </div>

// //                     <div
// //                         className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-t-xl"
// //                         aria-label="A sleek, red KitchenAid stand mixer on a countertop"
// //                         style={{
// //                             backgroundImage:
// //                                 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA5vfobdcmh0ibOv-J7As9fTWPPr00qevCfdyJfxd0FKf0JiLELoWR3IufSw4rjFJlBi5XB6OR12DZk6fEaxhvUs1TSaSRkmfGHs9pKQymJgDhKJlP2Y5RIXr6HqrtRvaaUrtt-wyVXFxhG6TjtBPfUUPj1fW-VeldTyWN1V6v6GhQOZsFIoeEOK7S3Ax4yojSryA_8XrKb-FjVmDlkgEs_X5bvo-xmY9-CBiCWJWzSTflRVKPAefOKkYbtr0iklcESndBECdRseAg")',
// //                         }}
// //                     />
// //                     <div className="px-4">
// //                         <div className="flex justify-between items-start">
// //                             <p className="text-[#181113] text-base font-medium">KitchenAid Mixer</p>
// //                             <a
// //                                 className="text-[#886370] hover:text-[#9ec5fe]"
// //                                 href="#"
// //                                 aria-label="Open gift link"
// //                             >
// //                                 <ExternalLink className="w-5 h-5" />
// //                             </a>
// //                         </div>
// //                         <p className="text-[#886370] text-sm">To whip up some delicious treats.</p>
// //                         <p className="text-[#886370] text-sm mt-1">$450 of $450</p>
// //                     </div>
// //                     <div className="flex flex-col gap-2 px-4 mt-1">
// //                         <div className="rounded-full bg-[#9ec5fe]/20 h-2">
// //                             <div className="h-2 rounded-full bg-[#9ec5fe]" style={{ width: "100%" }} />
// //                         </div>
// //                     </div>
// //                 </div>

// //                 {/* Empty State (hidden by default) */}
// //                 <div className="col-span-full mt-8 text-center hidden">
// //                     <div className="bg-white rounded-xl p-12 flex flex-col items-center gap-4 border-2 border-dashed border-gray-300">
// //                         <div className="text-[#f7bacf] bg-[#f7bacf]/10 rounded-full p-4">
// //                             <GiftIcon className="w-10 h-10" />
// //                         </div>
// //                         <h2 className="text-[#181113] text-xl font-bold">Your Wishlist is Empty</h2>
// //                         <p className="text-[#886370] max-w-sm">
// //                             Start building your dream gift list. Click &quot;Add New Gift&quot; to add your first
// //                             item.
// //                         </p>
// //                         <button
// //                             className="mt-4 flex min-w-[84px] items-center justify-center gap-2 overflow-hidden rounded-xl h-12 px-6 bg-[#f7bacf] hover:opacity-90 text-white text-sm font-bold leading-normal tracking-[0.015em] transition-colors shadow-sm"
// //                             type="button"
// //                         >
// //                             <PlusCircle className="w-5 h-5" />
// //                             <span className="truncate">Add Your First Gift</span>
// //                         </button>
// //                     </div>
// //                 </div>
// //             </div>
// //         </>
// //     );
// // }



// "use client";

// import React, { useEffect, useMemo, useRef, useState } from "react";
// import {
//   PlusCircle,
//   Edit,
//   Trash2,
//   GripVertical,
//   ExternalLink,
//   Gift as GiftIcon,
//   X,
// } from "lucide-react";

// /** ---------- Stable currency formatter, avoids hydration mismatch ---------- */
// const CURRENCY_LOCALE = "en-NG";
// const CURRENCY = "NGN";
// const currencyFmt = new Intl.NumberFormat(CURRENCY_LOCALE, {
//   style: "currency",
//   currency: CURRENCY,
//   maximumFractionDigits: 0,
// });
// function currency(n: number) {
//   return currencyFmt.format(n);
// }

// type GiftItem = {
//   id: string;
//   title: string;
//   description: string;
//   imageUrl: string;
//   link?: string;
//   raised: number; // current amount
//   goal: number;   // target amount
//   // style accents for each card
//   accent: {
//     border: string;   // e.g. "#f7bacf"
//     progress: string; // same as border typically
//   };
// };

// const initialGifts: GiftItem[] = [
//   {
//     id: "g1",
//     title: "Honeymoon Fund",
//     description: "Help us fund our dream trip to Italy!",
//     imageUrl:
//       "https://lh3.googleusercontent.com/aida-public/AB6AXuBs9Oik0gAA1Lbk8lsY6hnIjEGaDyEvQvEvrIU8HmBfktgdt17jJHMKPwrbP_qkbDaYD1WwwjuQzfogfnTqEF79p0Ppl1mMCjgfjd8kuUA6qwS32A6xmLMVAKlQqCUglI9CAMqbf91_QN_bTjzb76BeiLuqbkrPv87nMV88UKa7EZscS5H1JmlJ-ZoAMVxYnrAmT3XqeLY1KRU2CgEDxLULDxsKAZkCIOSN7guoGnpLucfKd5iUjknyjxGJSR1EMzf9aMiflw4YufY",
//     link: "#",
//     raised: 1250,
//     goal: 2000,
//     accent: { border: "#f7bacf", progress: "#f7bacf" },
//   },
//   {
//     id: "g2",
//     title: "New Sofa",
//     description: "For our new home.",
//     imageUrl:
//       "https://lh3.googleusercontent.com/aida-public/AB6AXuC2uG_yhaVuaEYnXjQbQC50Lghpz2Nw8u07As8m04VAB1FBXtqhSRLhgD9UcmTqYaGJwDWG8j-1BuPX3lIkCDXwcgcu4UfBNIfAAl5zJaPlSEg5eIwPot-lTF2HzhiQgkWOUcfdLDK0T5fzqHzSl9bGTxZqfA7V9NgH4TYcuw-ZxwJ1kJu8TUKbKNsRj-1OaP6t9jb3KT-f8-XVHyfpunJGaJTHZDRDCR150FzQ_1MU2MZYIoTydZwD1vkf1QaZmSOqxZd9K9AGhdE",
//     link: "#",
//     raised: 700,
//     goal: 1500,
//     accent: { border: "#b7d0c3", progress: "#b7d0c3" },
//   },
//   {
//     id: "g3",
//     title: "KitchenAid Mixer",
//     description: "To whip up some delicious treats.",
//     imageUrl:
//       "https://lh3.googleusercontent.com/aida-public/AB6AXuA5vfobdcmh0ibOv-J7As9fTWPPr00qevCfdyJfxd0FKf0JiLELoWR3IufSw4rjFJlBi5XB6OR12DZk6fEaxhvUs1TSaSRkmfGHs9pKQymJgDhKJlP2Y5RIXr6HqrtRvaaUrtt-wyVXFxhG6TjtBPfUUPj1fW-VeldTyWN1V6v6GhQOZsFIoeEOK7S3Ax4yojSryA_8XrKb-FjVmDlkgEs_X5bvo-xmY9-CBiCWJWzSTflRVKPAefOKkYbtr0iklcESndBECdRseAg",
//     link: "#",
//     raised: 450,
//     goal: 450,
//     accent: { border: "#9ec5fe", progress: "#9ec5fe" },
//   },
// ];

// // function currency(n: number) {
// //   return n.toLocaleString(undefined, { style: "currency", currency: "USD", maximumFractionDigits: 0 });
// // }

// function percent(raised: number, goal: number) {
//   if (!goal) return 0;
//   const percent = Math.min(100, Math.max(0, (raised / goal) * 100));
//   return Math.round(percent * 10) / 10; // 1 decimal
// }

// function GiftCard({
//   item,
//   onEdit,
//   onDelete,
// }: {
//   item: GiftItem;
//   onEdit: (id: string) => void;
//   onDelete: (id: string) => void;
// }) {
//   const p = percent(item.raised, item.goal);

//   return (
//     <div
//       className="group relative flex flex-col gap-3 pb-3 bg-white border border-transparent rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 cursor-grab"
//       style={{
//         // hover border tint
//         boxShadow:
//           "0 1px 2px rgba(16,24,40,.06), 0 1px 3px rgba(16,24,40,.10)",
//       }}
//     >
//       {/* Hover actions right */}
//       <div className="absolute top-3 right-3 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
//         <button
//           className="size-8 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-black/60"
//           type="button"
//           aria-label="Edit gift"
//           title="Edit"
//           onClick={() => onEdit(item.id)}
//         >
//           <Edit className="w-4 h-4" />
//         </button>
//         <button
//           className="size-8 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-black/60"
//           type="button"
//           aria-label="Delete gift"
//           title="Delete"
//           onClick={() => onDelete(item.id)}
//         >
//           <Trash2 className="w-4 h-4" />
//         </button>
//       </div>
//       {/* Drag handle left */}
//       <div className="absolute top-3 left-3 size-8 rounded-full bg-black/40 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
//         <GripVertical className="w-4 h-4" />
//       </div>

//       {/* Image */}
//       <div
//         className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-t-xl"
//         style={{ backgroundImage: `url("${item.imageUrl}")` }}
//         aria-label={item.title}
//       />

//       {/* Body */}
//       <div className="px-4">
//         <div className="flex justify-between items-start">
//           <p className="text-[#181113] text-base font-medium">{item.title}</p>
//           {item.link ? (
//             <a
//               className="text-[#886370] hover:opacity-80"
//               href={item.link}
//               aria-label="Open gift link"
//               target="_blank"
//               rel="noreferrer"
//               title="Open link"
//               style={{ color: "#886370" }}
//             >
//               <ExternalLink className="w-5 h-5" />
//             </a>
//           ) : null}
//         </div>
//         <p className="text-[#886370] text-sm">{item.description}</p>
//         <p className="text-[#886370] text-sm mt-1">
//           {currency(item.raised)} of {currency(item.goal)}
//         </p>
//       </div>

//       {/* Progress */}
//       <div className="flex flex-col gap-2 px-4 mt-1">
//         <div
//           className="rounded-full h-2"
//           style={{ backgroundColor: `${item.accent.progress}33` }} // 20% alpha
//         >
//           <div
//             className="h-2 rounded-full"
//             style={{ width: `${p}%`, backgroundColor: item.accent.progress }}
//           />
//         </div>
//       </div>

//       {/* Hover border effect via overlay: */}
//       <div
//         className="pointer-events-none absolute inset-0 rounded-xl transition-colors duration-300 group-hover:border"
//         style={{ borderColor: `${item.accent.border}80` }}
//       />
//     </div>
//   );
// }

// /** Simple headless modal */
// function Modal({
//   open,
//   onClose,
//   title,
//   children,
// }: {
//   open: boolean;
//   onClose: () => void;
//   title: string;
//   children: React.ReactNode;
// }) {
//   const panelRef = useRef<HTMLDivElement | null>(null);

//   // Close on Esc
//   useEffect(() => {
//     if (!open) return;
//     const onKey = (e: KeyboardEvent) => {
//       if (e.key === "Escape") onClose();
//     };
//     window.addEventListener("keydown", onKey);
//     return () => window.removeEventListener("keydown", onKey);
//   }, [open, onClose]);

//   // Focus trap lite: focus panel when opened
//   useEffect(() => {
//     if (open) panelRef.current?.focus();
//   }, [open]);

//   if (!open) return null;

//   return (
//     <div
//       className="fixed inset-0 z-50"
//       role="dialog"
//       aria-modal="true"
//       aria-labelledby="modal-title"
//     >
//       <div
//         className="absolute inset-0 bg-black/40"
//         onClick={onClose}
//         aria-hidden="true"
//       />
//       <div className="absolute inset-0 flex items-center justify-center p-4">
//         <div
//           ref={panelRef}
//           tabIndex={-1}
//           className="w-full max-w-lg rounded-2xl bg-white shadow-xl outline-none"
//         >
//           <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200">
//             <h3 id="modal-title" className="text-lg font-semibold text-[#181113]">
//               {title}
//             </h3>
//             <button
//               type="button"
//               aria-label="Close"
//               className="p-2 rounded-md hover:bg-gray-100"
//               onClick={onClose}
//             >
//               <X className="h-5 w-5" />
//             </button>
//           </div>
//           <div className="px-5 py-4">{children}</div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function GiftListPage() {
//   const [gifts, setGifts] = useState<GiftItem[]>(initialGifts);
//   const [open, setOpen] = useState(false);

//   // Form state for Add Gift
//   const [form, setForm] = useState({
//     title: "",
//     description: "",
//     link: "",
//     imageUrl: "",
//     goal: 1000,
//     raised: 0,
//     accent: "#f7bacf",
//   });

//   const isValid = useMemo(() => {
//     return form.title.trim().length > 0 && form.imageUrl.trim().length > 0 && form.goal > 0;
//   }, [form]);

//   function resetForm() {
//     setForm({
//       title: "",
//       description: "",
//       link: "",
//       imageUrl: "",
//       goal: 1000,
//       raised: 0,
//       accent: "#f7bacf",
//     });
//   }

//   function handleSubmit(e: React.FormEvent) {
//     e.preventDefault();
//     if (!isValid) return;

//     const id = `g${Date.now()}`;
//     const newItem: GiftItem = {
//       id,
//       title: form.title.trim(),
//       description: form.description.trim(),
//       link: form.link.trim() || undefined,
//       imageUrl: form.imageUrl.trim(),
//       goal: Number(form.goal),
//       raised: Number(form.raised || 0),
//       accent: { border: form.accent, progress: form.accent },
//     };

//     setGifts((prev) => [newItem, ...prev]);
//     setOpen(false);
//     resetForm();
//   }

//   function onEdit(id: string) {
//     // placeholder: you can open the same modal prefilled to edit
//     const item = gifts.find((g) => g.id === id);
//     if (!item) return;
//     setForm({
//       title: item.title,
//       description: item.description,
//       link: item.link || "",
//       imageUrl: item.imageUrl,
//       goal: item.goal,
//       raised: item.raised,
//       accent: item.accent.progress,
//     });
//     setOpen(true);
//   }

//   function onDelete(id: string) {
//     setGifts((prev) => prev.filter((g) => g.id !== id));
//   }

//   return (
//     <>
//       {/* Page Heading */}
//       <header className="flex flex-wrap justify-between items-center gap-4 mb-8">
//         <div className="flex flex-col gap-2">
//           <h1 className="text-[#181113] text-4xl font-black leading-tight tracking-[-0.033em]">
//             Manage Your Gift List
//           </h1>
//           <p className="text-[#886370] text-base leading-normal">
//             Add gifts for your guests. Drag and drop cards to reorder your list.
//           </p>
//         </div>
//         <button
//           className="flex min-w-[84px] items-center justify-center gap-2 overflow-hidden rounded-xl h-12 px-6 bg-[#f7bacf] hover:opacity-90 text-black cursor-pointer text-sm font-bold leading-normal tracking-[0.015em] transition-colors shadow-sm"
//           type="button"
//           onClick={() => setOpen(true)}
//         >
//           <PlusCircle className="w-5 h-5" />
//           <span className="truncate">Add New Gift</span>
//         </button>
//       </header>

//       {/* Gift Cards Grid */}
//       <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
//         {gifts.length === 0 ? (
//           <div className="col-span-full mt-8 text-center">
//             <div className="bg-white rounded-xl p-12 flex flex-col items-center gap-4 border-2 border-dashed border-gray-300">
//               <div className="text-[#f7bacf] bg-[#f7bacf]/10 rounded-full p-4">
//                 <GiftIcon className="w-10 h-10" />
//               </div>
//               <h2 className="text-[#181113] text-xl font-bold">Your Wishlist is Empty</h2>
//               <p className="text-[#886370] max-w-sm">
//                 Start building your dream gift list. Click &quot;Add New Gift&quot; to add your first
//                 item.
//               </p>
//               <button
//                 className="mt-4 flex min-w-[84px] items-center justify-center gap-2 overflow-hidden rounded-xl h-12 px-6 bg-[#f7bacf] hover:opacity-90 text-white text-sm font-bold leading-normal tracking-[0.015em] transition-colors shadow-sm"
//                 type="button"
//                 onClick={() => setOpen(true)}
//               >
//                 <PlusCircle className="w-5 h-5" />
//                 <span className="truncate">Add Your First Gift</span>
//               </button>
//             </div>
//           </div>
//         ) : (
//           gifts.map((item) => (
//             <GiftCard key={item.id} item={item} onEdit={onEdit} onDelete={onDelete} />
//           ))
//         )}
//       </div>

//       {/* Add / Edit Modal */}
//       <Modal open={open} onClose={() => setOpen(false)} title="Add a Gift">
//         <form className="space-y-4" onSubmit={handleSubmit}>
//           <div>
//             <label className="block text-sm font-medium text-[#181113] mb-1">Title</label>
//             <input
//               className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-[#f7bacf]"
//               placeholder="e.g., Honeymoon Fund"
//               value={form.title}
//               onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-[#181113] mb-1">Description</label>
//             <textarea
//               className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-[#f7bacf] min-h-24"
//               placeholder="A short description"
//               value={form.description}
//               onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))}
//             />
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             <div>
//               <label className="block text-sm font-medium text-[#181113] mb-1">Image URL</label>
//               <input
//                 className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-[#f7bacf]"
//                 placeholder="https://..."
//                 value={form.imageUrl}
//                 onChange={(e) => setForm((f) => ({ ...f, imageUrl: e.target.value }))}
//                 required
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-[#181113] mb-1">External Link</label>
//               <input
//                 className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-[#f7bacf]"
//                 placeholder="Optional product link"
//                 value={form.link}
//                 onChange={(e) => setForm((f) => ({ ...f, link: e.target.value }))}
//               />
//             </div>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
//             <div>
//               <label className="block text-sm font-medium text-[#181113] mb-1">Goal (USD)</label>
//               <input
//                 type="number"
//                 min={1}
//                 className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-[#f7bacf]"
//                 value={form.goal}
//                 onChange={(e) => setForm((f) => ({ ...f, goal: Number(e.target.value) }))}
//                 required
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-[#181113] mb-1">Raised (USD)</label>
//               <input
//                 type="number"
//                 min={0}
//                 className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-[#f7bacf]"
//                 value={form.raised}
//                 onChange={(e) => setForm((f) => ({ ...f, raised: Number(e.target.value) }))}
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-[#181113] mb-1">Accent Color</label>
//               <input
//                 type="color"
//                 className="h-10 w-full rounded-lg border border-gray-300 px-1 py-1 cursor-pointer"
//                 value={form.accent}
//                 onChange={(e) => setForm((f) => ({ ...f, accent: e.target.value }))}
//               />
//             </div>
//           </div>

//           <div className="flex items-center justify-end gap-3 pt-2">
//             <button
//               type="button"
//               onClick={() => setOpen(false)}
//               className="px-4 h-10 rounded-lg border border-gray-300 text-[#181113] hover:bg-gray-50"
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               disabled={!isValid}
//               className="px-5 h-10 rounded-lg bg-[#f7bacf] text-black font-semibold disabled:opacity-50"
//             >
//               Save Gift
//             </button>
//           </div>
//         </form>
//       </Modal>
//     </>
//   );
// }



"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  PlusCircle,
  Edit,
  Trash2,
  GripVertical,
  ExternalLink,
  Gift as GiftIcon,
  X,
} from "lucide-react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { api } from "@/lib/axios";

/** ---------- Currency helpers (UI shows whole units) ---------- */
const CURRENCY_LOCALE = "en-NG";
const CURRENCY = "NGN";
const currencyFmt = new Intl.NumberFormat(CURRENCY_LOCALE, {
  style: "currency",
  currency: CURRENCY,
  maximumFractionDigits: 0,
});
function currency(n: number) {
  return currencyFmt.format(n);
}

/** ---------- Types: API row vs UI card ---------- */
// What your API returns for each wishlist item
type DbWishlistItem = {
  id: string;
  ownerId: string;
  title: string;
  description?: string | null;
  imageUrl?: string | null;
  externalLink?: string | null;
  targetAmount: number; // cents
  fundedAmount: number; // cents
  allowPartial: boolean;
  accentColor?: string | null;
  createdAt: string;
  updatedAt: string;
};

// What your UI renders
type GiftItem = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  link?: string;
  raised: number; // whole currency for UI
  goal: number;   // whole currency for UI
  accent: {
    border: string;
    progress: string;
  };
};

const DEFAULT_ACCENT = "#f7bacf";
const WISHLIST_QK = ["wishlist"];

/** ---------- Adapters ---------- */
function toGiftItem(row: DbWishlistItem): GiftItem {
  const accent = row.accentColor || DEFAULT_ACCENT;
  return {
    id: row.id,
    title: row.title,
    description: row.description ?? "",
    imageUrl: row.imageUrl ?? "",
    link: row.externalLink ?? undefined,
    // raised: Math.round((row.fundedAmount || 0) / 100),
    // goal: Math.round(row.targetAmount / 100),
    raised: row.fundedAmount,  // naira direct
    goal: row.targetAmount,    
    accent: { border: accent, progress: accent },
  };
}

// The POST body your API expects
function fromForm(form: {
  title: string;
  description: string;
  link: string;
  imageUrl: string;
  goal: number;   // whole units from input
  raised: number; // whole units from input
  accent: string;
}) {
  return {
    title: form.title.trim(),
    description: form.description.trim() || undefined,
    imageUrl: form.imageUrl.trim() || undefined,
    externalLink: form.link.trim() || undefined,
    // targetAmount: Math.max(1, Math.round(Number(form.goal))) * 100, // to cents
    // fundedAmount: Math.max(0, Math.round(Number(form.raised || 0))) * 100, // to cents
    targetAmount: Math.max(1, Math.round(Number(form.goal))),       // naira direct
    fundedAmount: Math.max(0, Math.round(Number(form.raised || 0))),// naira direct
    allowPartial: true,
    accentColor: form.accent || DEFAULT_ACCENT,
  };
}

function percent(raised: number, goal: number) {
  if (!goal) return 0;
  const p = Math.min(100, Math.max(0, (raised / goal) * 100));
  return Math.round(p * 10) / 10;
}

/** ---------- Presentational components kept as-is ---------- */
function GiftCard({
  item,
  onEdit,
  onDelete,
}: {
  item: GiftItem;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}) {
  const p = percent(item.raised, item.goal);

  return (
    <div
      className="group relative flex flex-col gap-3 pb-3 bg-white border border-transparent rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 cursor-grab"
      style={{ boxShadow: "0 1px 2px rgba(16,24,40,.06), 0 1px 3px rgba(16,24,40,.10)" }}
    >
      <div className="absolute top-3 right-3 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          className="size-8 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-black/60"
          type="button"
          aria-label="Edit gift"
          title="Edit"
          onClick={() => onEdit(item.id)}
        >
          <Edit className="w-4 h-4" />
        </button>
        <button
          className="size-8 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-black/60"
          type="button"
          aria-label="Delete gift"
          title="Delete"
          onClick={() => onDelete(item.id)}
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>

      <div className="absolute top-3 left-3 size-8 rounded-full bg-black/40 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <GripVertical className="w-4 h-4" />
      </div>

      <div
        className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-t-xl"
        style={{ backgroundImage: `url("${item.imageUrl}")` }}
        aria-label={item.title}
      />

      <div className="px-4">
        <div className="flex justify-between items-start">
          <p className="text-[#181113] text-base font-medium">{item.title}</p>
          {item.link ? (
            <a
              className="text-[#886370] hover:opacity-80"
              href={item.link}
              aria-label="Open gift link"
              target="_blank"
              rel="noreferrer"
              title="Open link"
              style={{ color: "#886370" }}
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          ) : null}
        </div>
        <p className="text-[#886370] text-sm">{item.description}</p>
        <p className="text-[#886370] text-sm mt-1">
          {currency(item.raised)} of {currency(item.goal)}
        </p>
      </div>

      <div className="flex flex-col gap-2 px-4 mt-1">
        <div className="rounded-full h-2" style={{ backgroundColor: `${item.accent.progress}33` }}>
          <div className="h-2 rounded-full" style={{ width: `${p}%`, backgroundColor: item.accent.progress }} />
        </div>
      </div>

      <div
        className="pointer-events-none absolute inset-0 rounded-xl transition-colors duration-300 group-hover:border"
        style={{ borderColor: `${item.accent.border}80` }}
      />
    </div>
  );
}

function Modal({
  open,
  onClose,
  title,
  children,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}) {
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  useEffect(() => {
    if (open) panelRef.current?.focus();
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} aria-hidden="true" />
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div ref={panelRef} tabIndex={-1} className="w-full max-w-lg rounded-2xl bg-white shadow-xl outline-none">
          <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200">
            <h3 id="modal-title" className="text-lg font-semibold text-[#181113]">
              {title}
            </h3>
            <button
              type="button"
              aria-label="Close"
              className="p-2 rounded-md hover:bg-gray-100"
              onClick={onClose}
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="px-5 py-4">{children}</div>
        </div>
      </div>
    </div>
  );
}

/** ---------- Page ---------- */
export default function GiftListPage() {
  const qc = useQueryClient();

  // Modal + form state
  const [open, setOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState({
    title: "",
    description: "",
    link: "",
    imageUrl: "",
    goal: 1000,
    raised: 0,
    accent: DEFAULT_ACCENT,
  });

  const isValid = useMemo(() => {
    return form.title.trim().length > 0 && form.imageUrl.trim().length > 0 && Number(form.goal) > 0;
  }, [form]);

  function resetForm() {
    setEditingId(null);
    setForm({
      title: "",
      description: "",
      link: "",
      imageUrl: "",
      goal: 1000,
      raised: 0,
      accent: DEFAULT_ACCENT,
    });
  }

  /** Fetch wishlist */
  const { data, isLoading, isError, error } = useQuery({
    queryKey: WISHLIST_QK,
    queryFn: async () => {
      const res = await api.get<DbWishlistItem[]>("/api/wishlist");
      return res.data.map(toGiftItem);
    },
    staleTime: 30_000,
  });

  /** Create */
  const createMutation = useMutation({
    mutationFn: async (payload: ReturnType<typeof fromForm>) => {
      const res = await api.post<DbWishlistItem>("/api/wishlist", payload);
      return toGiftItem(res.data);
    },
    onMutate: async (payload) => {
      await qc.cancelQueries({ queryKey: WISHLIST_QK });
      const previous = qc.getQueryData<GiftItem[]>(WISHLIST_QK) || [];
      const optimistic: GiftItem = {
        id: `temp-${Date.now()}`,
        title: payload.title,
        description: payload.description || "",
        imageUrl: payload.imageUrl || "",
        link: payload.externalLink,
        // goal: Math.round(payload.targetAmount / 100),
        // raised: Math.round((payload.fundedAmount || 0) / 100),
        goal: payload.targetAmount,                 // naira direct
        raised: payload.fundedAmount || 0, 
        accent: { border: payload.accentColor || DEFAULT_ACCENT, progress: payload.accentColor || DEFAULT_ACCENT },
      };
      qc.setQueryData(WISHLIST_QK, [optimistic, ...previous]);
      return { previous };
    },
    onError: (err, _payload, ctx) => {
      if (ctx?.previous) qc.setQueryData(WISHLIST_QK, ctx.previous);
      alert(err.message || "Failed to create item");
    },
    onSuccess: (created) => {
      qc.setQueryData<GiftItem[]>(WISHLIST_QK, (old = []) => {
        // replace the optimistic temp item with the real one
        const withoutTemps = old.filter(i => !i.id.startsWith("temp-"));
        return [created, ...withoutTemps];
      });
    },
  });

  /** Update */
  const updateMutation = useMutation({
    mutationFn: async ({ id, payload }: { id: string; payload: Partial<ReturnType<typeof fromForm>> }) => {
      const res = await api.patch<DbWishlistItem>(`/api/wishlist/${id}`, payload);
      return toGiftItem(res.data);
    },
    onMutate: async ({ id, payload }) => {
      await qc.cancelQueries({ queryKey: WISHLIST_QK });
      const previous = qc.getQueryData<GiftItem[]>(WISHLIST_QK) || [];
      qc.setQueryData<GiftItem[]>(WISHLIST_QK, (old = []) =>
        old.map((g) =>
          g.id === id
            ? {
                ...g,
                title: payload.title ?? g.title,
                description: payload.description ?? g.description,
                imageUrl: payload.imageUrl ?? g.imageUrl,
                link: payload.externalLink ?? g.link,
                // goal: payload.targetAmount != null ? Math.round(payload.targetAmount / 100) : g.goal,
                // raised: payload.fundedAmount != null ? Math.round(payload.fundedAmount / 100) : g.raised,
                goal: payload.targetAmount != null ? payload.targetAmount : g.goal,          // naira direct
                raised: payload.fundedAmount != null ? payload.fundedAmount : g.raised,
                accent:
                  payload.accentColor != null
                    ? { border: payload.accentColor, progress: payload.accentColor }
                    : g.accent,
              }
            : g
        )
      );
      return { previous };
    },
    onError: (err, _vars, ctx) => {
      if (ctx?.previous) qc.setQueryData(WISHLIST_QK, ctx.previous);
      alert(err.message || "Failed to update item");
    },
    onSuccess: (updated) => {
      qc.setQueryData<GiftItem[]>(WISHLIST_QK, (old = []) => old.map((g) => (g.id === updated.id ? updated : g)));
    },
  });

  /** Delete */
  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      await api.delete(`/api/wishlist/${id}`);
      return id;
    },
    onMutate: async (id) => {
      await qc.cancelQueries({ queryKey: WISHLIST_QK });
      const previous = qc.getQueryData<GiftItem[]>(WISHLIST_QK) || [];
      qc.setQueryData<GiftItem[]>(WISHLIST_QK, (old = []) => old.filter((g) => g.id !== id));
      return { previous };
    },
    onError: (err, _id, ctx) => {
      if (ctx?.previous) qc.setQueryData(WISHLIST_QK, ctx.previous);
      alert(err.message || "Failed to delete item");
    },
  });

  /** UI handlers */
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!isValid) return;

    const payload = fromForm(form);

    if (editingId) {
      // Update existing
      updateMutation.mutate({
        id: editingId,
        payload,
      });
    } else {
      // Create new
      createMutation.mutate(payload);
    }
    setOpen(false);
    resetForm();
  }

  function onEdit(id: string) {
    const current = qc.getQueryData<GiftItem[]>(WISHLIST_QK)?.find((g) => g.id === id);
    if (!current) return;
    setEditingId(id);
    setForm({
      title: current.title,
      description: current.description,
      link: current.link || "",
      imageUrl: current.imageUrl,
      goal: current.goal,
      raised: current.raised,
      accent: current.accent.progress,
    });
    setOpen(true);
  }

  function onDelete(id: string) {
    deleteMutation.mutate(id);
  }

  /** Render */
  return (
    <>
      {/* Page Heading */}
      <header className="flex flex-wrap justify-between items-center gap-4 mb-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-[#181113] text-4xl font-black leading-tight tracking-[-0.033em]">
            Manage Your Gift List
          </h1>
          <p className="text-[#886370] text-base leading-normal">
            Add gifts for your guests. Drag and drop cards to reorder your list.
          </p>
        </div>
        <button
          className="flex min-w-[84px] items-center justify-center gap-2 overflow-hidden rounded-xl h-12 px-6 bg-[#f7bacf] hover:opacity-90 text-black cursor-pointer text-sm font-bold leading-normal tracking-[0.015em] transition-colors shadow-sm"
          type="button"
          onClick={() => setOpen(true)}
        >
          <PlusCircle className="w-5 h-5" />
          <span className="truncate">Add New Gift</span>
        </button>
      </header>

      {/* Grid */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
        {isLoading ? (
          <div className="col-span-full mt-8 text-center text-[#886370]">Loading your wishlist...</div>
        ) : isError ? (
          <div className="col-span-full mt-8 text-center text-red-600">
            {error instanceof Error ? error.message : "Failed to load wishlist"}
          </div>
        ) : (data?.length ?? 0) === 0 ? (
          <div className="col-span-full mt-8 text-center">
            <div className="bg-white rounded-xl p-12 flex flex-col items-center gap-4 border-2 border-dashed border-gray-300">
              <div className="text-[#f7bacf] bg-[#f7bacf]/10 rounded-full p-4">
                <GiftIcon className="w-10 h-10" />
              </div>
              <h2 className="text-[#181113] text-xl font-bold">Your Wishlist is Empty</h2>
              <p className="text-[#886370] max-w-sm">
                Start building your dream gift list. Click "Add New Gift" to add your first item.
              </p>
              <button
                className="mt-4 flex min-w-[84px] items-center justify-center gap-2 overflow-hidden rounded-xl h-12 px-6 bg-[#f7bacf] hover:opacity-90 text-white text-sm font-bold leading-normal tracking-[0.015em] transition-colors shadow-sm"
                type="button"
                onClick={() => setOpen(true)}
              >
                <PlusCircle className="w-5 h-5" />
                <span className="truncate">Add Your First Gift</span>
              </button>
            </div>
          </div>
        ) : (
          data!.map((item) => <GiftCard key={item.id} item={item} onEdit={onEdit} onDelete={onDelete} />)
        )}
      </div>

      {/* Add or Edit modal */}
      <Modal open={open} onClose={() => { setOpen(false); setEditingId(null); }} title={editingId ? "Edit Gift" : "Add a Gift"}>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-[#181113] mb-1">Title</label>
            <input
              className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-[#f7bacf]"
              placeholder="e.g., Honeymoon Fund"
              value={form.title}
              onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#181113] mb-1">Description</label>
            <textarea
              className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-[#f7bacf] min-h-24"
              placeholder="A short description"
              value={form.description}
              onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-[#181113] mb-1">Image URL</label>
              <input
                className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-[#f7bacf]"
                placeholder="https://..."
                value={form.imageUrl}
                onChange={(e) => setForm((f) => ({ ...f, imageUrl: e.target.value }))}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#181113] mb-1">External Link</label>
              <input
                className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-[#f7bacf]"
                placeholder="Optional product link"
                value={form.link}
                onChange={(e) => setForm((f) => ({ ...f, link: e.target.value }))}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-[#181113] mb-1">Goal (USD)</label>
              <input
                type="number"
                min={1}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-[#f7bacf]"
                value={form.goal}
                onChange={(e) => setForm((f) => ({ ...f, goal: Number(e.target.value) }))}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#181113] mb-1">Raised (USD)</label>
              <input
                type="number"
                min={0}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-[#f7bacf]"
                value={form.raised}
                onChange={(e) => setForm((f) => ({ ...f, raised: Number(e.target.value) }))}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#181113] mb-1">Accent Color</label>
              <input
                type="color"
                className="h-10 w-full rounded-lg border border-gray-300 px-1 py-1 cursor-pointer"
                value={form.accent}
                onChange={(e) => setForm((f) => ({ ...f, accent: e.target.value }))}
              />
            </div>
          </div>

          <div className="flex items-center justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={() => { setOpen(false); setEditingId(null); }}
              className="px-4 h-10 rounded-lg border border-gray-300 text-[#181113] hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={!isValid || createMutation.isPending || updateMutation.isPending}
              className="px-5 h-10 rounded-lg bg-[#f7bacf] text-black font-semibold disabled:opacity-50"
            >
              {editingId ? "Save Changes" : "Save Gift"}
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
}

