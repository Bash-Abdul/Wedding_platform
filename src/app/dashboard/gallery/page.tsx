// "use client";

// import React, { useMemo, useRef, useState } from "react";
// import { ExternalLink, Trash2 } from "lucide-react";
// import Link from 'next/link'

// type MediaKind = "photo" | "video";
// type GalleryItem = {
//   id: string;
//   kind: MediaKind;
//   src: string;
//   alt: string;
//   uploadedBy: string;
// };

// const INITIAL_ITEMS: GalleryItem[] = [
//   {
//     id: "g1",
//     kind: "photo",
//     alt: "Couple smiling at the altar",
//     uploadedBy: "Olivia",
//     src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCbvbTu5qn5M87WtKbO_n2YfMG6lX9hiMbuDQCJyGeYUUj1WTRacl9SZLZMHhYdKMVEgHMdZ70gaCAdNbIA774FKEbwD2uEyUXX8e-uCH9bdRfhI_bG246PgWYOR1sRMb_aS39bKWg5lMjYBjluE1EN6wBZtn3y1j0JBMu-SumQLjavAVj-8IXqxyf5sAb-eOjedcjJ_voLFRWn8MRMMvIAChRFc_yFa8juc6DdmnBoquS8VrKL-a-apxhAay8kvC1iVNHEjXwXjt4",
//   },
//   {
//     id: "g2",
//     kind: "photo",
//     alt: "First dance under chandeliers",
//     uploadedBy: "Liam",
//     src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAp30R3iDu29PkQbtVxQc7BpYTyUeET5b9JcNW4qq4lOZ_7jOga0qVQZO4hD6e-jHSHY3Z_wBRd6kYSSiHpifO0tFCCCc1sgpORmH9P3KPid8TenhupeWVbYcPz9N1m-osHhknGrZZ0ASlscmyfOqUv06JiqVm5bqh2HsYMvezyHpyrmTBgsg8r5XAPYjANkHxtUGy34y5wfMg2_fkZOOUYm4hRD5vNWa74vHBy6L2yc_hJTSU4kvKtYwpwvwLXPJUbNHdtfXof5_8",
//   },
//   {
//     id: "g3",
//     kind: "photo",
//     alt: "Guests tossing confetti",
//     uploadedBy: "Guest",
//     src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAHuA6nQTt6qHntKbrtgFCChAD8RbnzPadk1DgshBBMC_KcN43I-qKl8XqQnRi7JEPlkWtKPGwC9QeQAYidvjdRf43ADPj3jjstcoJI6NE3HG0pf0ViYEQJrriWTaEeRaBGZdxWVmJMOEbAG-LLJp_AvtpUkuD9PGpAkmEZ3PWFZJkJpRYe_moJ5lfoRmUNB_LE1GXM32uhU_aIuwBx5DcCBQQJr2zVWaEElH8nJfMwPuscf3Q-jV0bFNB7ORhnspvbgq9DbPhRVFU",
//   },
//   {
//     id: "g4",
//     kind: "photo",
//     alt: "Close up of wedding rings",
//     uploadedBy: "Photographer",
//     src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDBSfMIzc9Bb0ZUGMZZJnDsrHXhO4KWTkpf6GPEzCC7DXnA_biiu86K6PrZ1ect8jc5oTIP0DkZLrzUjAXzsNpunLqAYqeOSk2lVXCWJOwiqDC0VSsVXToL4k2Nv7Ct_WlLuD7kAUk1JNiz3jodfE0ypAGpuJXAOoan8f9vslkuhBD33YW8_cq1PKZugrJ6fVwZKMAQ7Cb4oTfGfuIZ0dQII2ta7P-wNIAwE0cxpr0hBAkOAb6oGdd7nEMaGdWtR7fjql6fyDWSxF0",
//   },
//   {
//     id: "g5",
//     kind: "photo",
//     alt: "Bride walking down the aisle",
//     uploadedBy: "Guest",
//     src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB-PLORWTB_zrx6mPTW9JHs53nlu-S96NYTj_CD8mkn4bRHOug1H7oLMS70-9bw-T6nlqn669JTmxhfaQYbF1t-_7VvsSWqCq4Q-BfsFStdk9w6Ne_n4HLWzlwtrANmhgWCaBXAyijw8_Nt7_8s0sNBoMZ1z5ZiafWuH5g46isTaz5GV58i9iZ0ZUaw-4PB7djbJCBkvj9Ts1sAsYMAQS6Lr8gAOb1tm_xoEUF-mEPfDFKk3mj88KbiNeEXIPl5MEu1Gkfn6tCQwi8",
//   },
//   {
//     id: "g6",
//     kind: "photo",
//     alt: "Groom seeing the bride for the first time",
//     uploadedBy: "Guest",
//     src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDgNCcxyuZaw1rgYDvEvdjXya4e3zKhL5Wvuoet1swXLpyXJhAawtOVLBbxc8Bl-nhYsRI7a86QA7WaHDVJlxK0nfLku1idflDXljgCLMmJA41BowYyCQjYdHpYB2OlrTn1MC5te4Tm6ygu1B5L4QVkaaQBNhvtqwE-lS5Uv1RXelnA5_rXK1m0ObAS9KNscDIy4ZB6SlTi5xp6U4h4qTWulnpzTE69hkC6D_ctT0kUAGSCn55pT4wDeoIsVGVI5eqNiPtTxQD2dpk",
//   },
//   {
//     id: "g7",
//     kind: "photo",
//     alt: "Wedding cake cutting ceremony",
//     uploadedBy: "Guest",
//     src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDx78RkU1V2XOwbXEPbfqBuhlvDVADufwd2MWmDtV1MEENmDT6CazqthgCgQiwVVYh96UINQ_2yFwcVl19phiYfmtQoS3dO5a0RchNpF-1EXSXOO-qMILF0wNP2GJsPaFptdm66WVEC1X3Lbv-6b40eY2KD2jR3OkZEk3ENFsl4I7uFjCywATdVVnv3xfYMRfjryp80EhNVeJs-54bcqteRpYfGvI1c3RMiUJVuNlloIdCmWvynlcRewo8FLYRdpJEhwSJN77wb-bo",
//   },
//   {
//     id: "g8",
//     kind: "photo",
//     alt: "A toast from the best man",
//     uploadedBy: "Guest",
//     src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB29Bk-dz8pDr51dECuQ-W0AhebXDDzSfNPJw3EpeApG10VZO9Rkn8r0FI6Me6gWm8HVw_5HTl_UGeY1pPFhkgFnDvACppBu5rm8Z886tiIRe8rIBm6_6BG8PDjRsNRDAcNhuXjalWZB-SqbGpueGkAiWU4fO1FUXKY535FD2zmv8npZZeR_RnuYs4FGjvelbeYQHZeaOGRcT5pQo-Y7awgB8tRpPzQon9m7O50jZ8ygJWSrZtc1TQI7DV5V6QjyObnJTfuccyapfA",
//   },
//   {
//     id: "g9",
//     kind: "photo",
//     alt: "Sunset portrait of the couple",
//     uploadedBy: "Photographer",
//     src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDI3EwgAbjHR4gZGLTRv300eVXn4HtD-3th0w0tNFfRDRJuebMlGyv9uwesHyyCKkK8WSFg5p8nl_P4Z0eBnUcAK0S5RukmhnqURIQEbevXjzElnAzry_a6j_bKfH2a-vzc5_g6ceBFUoirvaBMd0GQglifLJOlXX44qkQ0nhM624zbAXEWnbKlKiOUcRfNFn33KHCu21AvEQez-ohOVgnQFzUyBmTv4KtnzvmZQX49wKjadrkbXFBl0VQAyLaQBtu2MVnHbu0XtyM",
//   },
//   {
//     id: "g10",
//     kind: "photo",
//     alt: "Bouquet toss with bridesmaids",
//     uploadedBy: "Guest",
//     src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAzmvI1FSOp9WKzR_EJ_DuvpKDNLYNNJQ5ndCF9N1wiAd9dwYwMCziCuILs4ourJl6kKl8HEpkfaKhIPfZMHT3ur76fp55CJ_5fQX5nZ-em_AfcVT_k8Ro2mBI-Bdmed90qfV-OhdaryrA_CwfktH2p-ygkHFRjhZXiS5hveCwNFkArsoKStscras_6SKDdhsGcDhnqtFY0YHsSPAkaliRb4cgArYoco_x6oX3SM7orah0vMfk7e9uQX3PKGrrsgjr58N0Ib8k_KaI",
//   },
//   {
//     id: "g11",
//     kind: "photo",
//     alt: "Candid shot of guests laughing",
//     uploadedBy: "Guest",
//     src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBWgDrtLAEdGL6IgIMa7u6H6GTXlZ3mM3VVxfQjYxVqxZjyn7AxYkA4a_phI_oARWXBL1MYDp3NzSJSLVGfUENMPaxGK0cAPRsAYrJvM1q1ROYrYisRjpJPG-bGrq_mgMAnv1kFPIac6JKmH9kZimbqEaciox9-G2eENV4dtEPM8Q7olJuAmbzuG_E3DrbKbbpIP37pTD4lY0kr-6BQg9guwD3WFNjgv4J-ESHQfdgKHLl81C4hnfIs6E5yEN26468HK9UQAk8uqu8",
//   },
//   {
//     id: "g12",
//     kind: "photo",
//     alt: "The getaway car decorated with flowers",
//     uploadedBy: "Guest",
//     src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBC6thpQmLp4oZoISjchFWcV8f6z7P4-2ZZN3sh7MsBJ9DENdTbR1WAGzNq8vlv5MRGS-oyAQ6w5a5nULfDBLeifG18PmHiFoR6_T3C8qL1Jt85LCTGkDobEg4svZtj8u3iNwTTLq55C_0tHhKiGzBXx_Otpf4VmRIb6SpNqF30CYluDjVFd55GmM9vptiyQ_UgX63_RF5OvqjEdMHyaiUorbsTqBN8Bx4k8Us2lnUuU2-qLkTldgGCP1xqu8PUOnVmMMqvvJ8PS-Y",
//   },
// ];

// const FILTERS: { label: string; value: "all" | MediaKind }[] = [
//   { label: "All", value: "all" },
//   { label: "Photos", value: "photo" },
//   { label: "Videos", value: "video" },
// ];

// export default function GalleryCuratePage() {
//   const [items, setItems] = useState<GalleryItem[]>(INITIAL_ITEMS);
//   const [filter, setFilter] = useState<"all" | MediaKind>("all");
//   const dragIndex = useRef<number | null>(null);

//   const filtered = useMemo(() => {
//     if (filter === "all") return items;
//     return items.filter((i) => i.kind === filter);
//   }, [items, filter]);

//   function handleDelete(id: string) {
//     setItems((prev) => prev.filter((i) => i.id !== id));
//   }

//   // Simple HTML5 DnD to reorder
//   function onDragStart(index: number) {
//     dragIndex.current = index;
//   }
//   function onDragOver(e: React.DragEvent) {
//     e.preventDefault();
//   }
//   function onDrop(index: number) {
//     const from = dragIndex.current;
//     dragIndex.current = null;
//     if (from == null || from === index) return;

//     setItems((prev) => {
//       const next = [...prev];
//       const [moved] = next.splice(from, 1);
//       next.splice(index, 0, moved);
//       return next;
//     });
//   }

//   return (
//     <>
//       {/* Header */}
//       <header className="flex flex-col md:flex-row flex-wrap justify-between items-start gap-4 mb-6">
//         <div className="flex min-w-72 flex-col gap-2">
//           <h1 className="text-[#181113] text-3xl lg:text-4xl font-black leading-tight tracking-[-0.033em]">
//             Curate Your Gallery
//           </h1>
//           <p className="text-[#886370] text-base leading-normal max-w-2xl">
//             Drag and drop to reorder photos, or remove any you do not want in your public gallery. All guest
//             uploads appear here automatically.
//           </p>
//         </div>
//         <Link
//         //   type="button"
//         href={'/demo/gallery'}
//           className="flex min-w-[84px] items-center justify-center gap-2 rounded-lg h-10 px-4 bg-white text-[#181113] text-sm font-bold border border-gray-200 hover:bg-gray-50 transition-colors"
//         >
//           <ExternalLink className="w-4 h-4" />
//           <span className="truncate">View Live Site</span>
//         </Link>
//       </header>

//       {/* Toolbar */}
//       <div className="flex flex-col md:flex-row justify-between gap-4 py-3 border-b border-gray-200 mb-6">
//         <div className="flex flex-wrap items-center gap-2">
//           <p className="text-sm font-medium text-gray-700">
//             Showing {filtered.length} item{filtered.length !== 1 ? "s" : ""}. Drag to reorder.
//           </p>
//         </div>
//         <div className="flex flex-wrap gap-2">
//           {FILTERS.map((f) => {
//             const isActive = filter === f.value;
//             return (
//               <button
//                 key={f.value}
//                 type="button"
//                 onClick={() => setFilter(f.value)}
//                 className={[
//                   "flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-lg pl-4 pr-3",
//                   isActive
//                     ? "bg-[rgba(247,186,207,0.15)] text-[#e73271] font-semibold"
//                     : "bg-gray-100 text-[#181113] hover:bg-gray-200",
//                 ].join(" ")}
//               >
//                 <p className={isActive ? "text-sm font-semibold" : "text-sm font-medium"}>{f.label}</p>
//               </button>
//             );
//           })}
//         </div>
//       </div>

//       {/* Grid */}
//       <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-5">
//         {filtered.map((item, idx) => (
//           <figure
//             key={item.id}
//             className="group relative aspect-3/4 overflow-hidden rounded-xl cursor-grab active:cursor-grabbing"
//             data-alt={item.alt}
//             draggable
//             onDragStart={() => onDragStart(idx)}
//             onDragOver={onDragOver}
//             onDrop={() => onDrop(idx)}
//             aria-label={item.alt}
//             role="img"
//           >
//             <img
//               src={item.src}
//               alt={item.alt}
//               className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
//             />
//             <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
//             <figcaption className="absolute inset-0 flex flex-col justify-end p-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
//               <p className="text-sm font-medium">Uploaded by {item.uploadedBy}</p>
//             </figcaption>
//             <button
//               type="button"
//               onClick={() => handleDelete(item.id)}
//               className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-white opacity-0 transition-all duration-300 group-hover:opacity-100 hover:bg-red-500"
//               aria-label="Delete item"
//               title="Delete"
//             >
//               <Trash2 className="w-4 h-4" />
//             </button>
//           </figure>
//         ))}
//       </div>
//     </>
//   );
// }



"use client";

import React, { useMemo, useRef, useState } from "react";
import { ExternalLink, Trash2, LayoutGrid, GalleryVerticalEnd } from "lucide-react";
import Link from "next/link";

type MediaKind = "photo" | "video";
type GalleryItem = {
  id: string;
  kind: MediaKind;
  src: string;
  alt: string;
  uploadedBy: string;
};

const INITIAL_ITEMS: GalleryItem[] = [
  { id: "g1", kind: "photo", alt: "Couple smiling at the altar", uploadedBy: "Olivia", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCbvbTu5qn5M87WtKbO_n2YfMG6lX9hiMbuDQCJyGeYUUj1WTRacl9SZLZMHhYdKMVEgHMdZ70gaCAdNbIA774FKEbwD2uEyUXX8e-uCH9bdRfhI_bG246PgWYOR1sRMb_aS39bKWg5lMjYBjluE1EN6wBZtn3y1j0JBMu-SumQLjavAVj-8IXqxyf5sAb-eOjedcjJ_voLFRWn8MRMMvIAChRFc_yFa8juc6DdmnBoquS8VrKL-a-apxhAay8kvC1iVNHEjXwXjt4" },
  { id: "g2", kind: "photo", alt: "First dance under chandeliers", uploadedBy: "Liam", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAp30R3iDu29PkQbtVxQc7BpYTyUeET5b9JcNW4qq4lOZ_7jOga0qVQZO4hD6e-jHSHY3Z_wBRd6kYSSiHpifO0tFCCCc1sgpORmH9P3KPid8TenhupeWVbYcPz9N1m-osHhknGrZZ0ASlscmyfOqUv06JiqVm5bqh2HsYMvezyHpyrmTBgsg8r5XAPYjANkHxtUGy34y5wfMg2_fkZOOUYm4hRD5vNWa74vHBy6L2yc_hJTSU4kvKtYwpwvwLXPJUbNHdtfXof5_8" },
  { id: "g3", kind: "photo", alt: "Guests tossing confetti", uploadedBy: "Guest", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAHuA6nQTt6qHntKbrtgFCChAD8RbnzPadk1DgshBBMC_KcN43I-qKl8XqQnRi7JEPlkWtKPGwC9QeQAYidvjdRf43ADPj3jjstcoJI6NE3HG0pf0ViYEQJrriWTaEeRaBGZdxWVmJMOEbAG-LLJp_AvtpUkuD9PGpAkmEZ3PWFZJkJpRYe_moJ5lfoRmUNB_LE1GXM32uhU_aIuwBx5DcCBQQJr2zVWaEElH8nJfMwPuscf3Q-jV0bFNB7ORhnspvbgq9DbPhRVFU" },
  { id: "g4", kind: "photo", alt: "Close up of wedding rings", uploadedBy: "Photographer", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDBSfMIzc9Bb0ZUGMZZJnDsrHXhO4KWTkpf6GPEzCC7DXnA_biiu86K6PrZ1ect8jc5oTIP0DkZLrzUjAXzsNpunLqAYqeOSk2lVXCWJOwiqDC0VSsVXToL4k2Nv7Ct_WlLuD7kAUk1JNiz3jodfE0ypAGpuJXAOoan8f9vslkuhBD33YW8_cq1PKZugrJ6fVwZKMAQ7Cb4oTfGfuIZ0dQII2ta7P-wNIAwE0cxpr0hBAkOAb6oGdd7nEMaGdWtR7fjql6fyDWSxF0" },
  { id: "g5", kind: "photo", alt: "Bride walking down the aisle", uploadedBy: "Guest", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB-PLORWTB_zrx6mPTW9JHs53nlu-S96NYTj_CD8mkn4bRHOug1H7oLMS70-9bw-T6nlqn669JTmxhfaQYbF1t-_7VvsSWqCq4Q-BfsFStdk9w6Ne_n4HLWzlwtrANmhgWCaBXAyijw8_Nt7_8s0sNBoMZ1z5ZiafWuH5g46isTaz5GV58i9iZ0ZUaw-4PB7djbJCBkvj9Ts1sAsYMAQS6Lr8gAOb1tm_xoEUF-mEPfDFKk3mj88KbiNeEXIPl5MEu1Gkfn6tCQwi8" },
  { id: "g6", kind: "photo", alt: "Groom seeing the bride for the first time", uploadedBy: "Guest", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDgNCcxyuZaw1rgYDvEvdjXya4e3zKhL5Wvuoet1swXLpyXJhAawtOVLBbxc8Bl-nhYsRI7a86QA7WaHDVJlxK0nfLku1idflDXljgCLMmJA41BowYyCQjYdHpYB2OlrTn1MC5te4Tm6ygu1B5L4QVkaaQBNhvtqwE-lS5Uv1RXelnA5_rXK1m0ObAS9KNscDIy4ZB6SlTi5xp6U4h4qTWulnpzTE69hkC6D_ctT0kUAGSCn55pT4wDeoIsVGVI5eqNiPtTxQD2dpk" },
  { id: "g7", kind: "photo", alt: "Wedding cake cutting ceremony", uploadedBy: "Guest", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDx78RkU1V2XOwbXEPbfqBuhlvDVADufwd2MWmDtV1MEENmDT6CazqthgCgQiwVVYh96UINQ_2yFwcVl19phiYfmtQoS3dO5a0RchNpF-1EXSXOO-qMILF0wNP2GJsPaFptdm66WVEC1X3Lbv-6b40eY2KD2jR3OkZEk3ENFsl4I7uFjCywATdVVnv3xfYMRfjryp80EhNVeJs-54bcqteRpYfGvI1c3RMiUJVuNlloIdCmWvynlcRewo8FLYRdpJEhwSJN77wb-bo" },
  { id: "g8", kind: "photo", alt: "A toast from the best man", uploadedBy: "Guest", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB29Bk-dz8pDr51dECuQ-W0AhebXDDzSfNPJw3EpeApG10VZO9Rkn8r0FI6Me6gWm8HVw_5HTl_UGeY1pPFhkgFnDvACppBu5rm8Z886tiIRe8rIBm6_6BG8PDjRsNRDAcNhuXjalWZB-SqbGpueGkAiWU4fO1FUXKY535FD2zmv8npZZeR_RnuYs4FGjvelbeYQHZeaOGRcT5pQo-Y7awgB8tRpPzQon9m7O50jZ8ygJWSrZtc1TQI7DV5V6QjyObnJTfuccyapfA" },
  { id: "g9", kind: "photo", alt: "Sunset portrait of the couple", uploadedBy: "Photographer", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDI3EwgAbjHR4gZGLTRv300eVXn4HtD-3th0w0tNFfRDRJuebMlGyv9uwesHyyCKkK8WSFg5p8nl_P4Z0eBnUcAK0S5RukmhnqURIQEbevXjzElnAzry_a6j_bKfH2a-vzc5_g6ceBFUoirvaBMd0GQglifLJOlXX44qkQ0nhM624zbAXEWnbKlKiOUcRfNFn33KHCu21AvEQez-ohOVgnQFzUyBmTv4KtnzvmZQX49wKjadrkbXFBl0VQAyLaQBtu2MVnHbu0XtyM" },
  { id: "g10", kind: "photo", alt: "Bouquet toss with bridesmaids", uploadedBy: "Guest", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAzmvI1FSOp9WKzR_EJ_DuvpKDNLYNNJQ5ndCF9N1wiAd9dwYwMCziCuILs4ourJl6kKl8HEpkfaKhIPfZMHT3ur76fp55CJ_5fQX5nZ-em_AfcVT_k8Ro2mBI-Bdmed90qfV-OhdaryrA_CwfktH2p-ygkHFRjhZXiS5hveCwNFkArsoKStscras_6SKDdhsGcDhnqtFY0YHsSPAkaliRb4cgArYoco_x6oX3SM7orah0vMfk7e9uQX3PKGrrsgjr58N0Ib8k_KaI" },
  { id: "g11", kind: "photo", alt: "Candid shot of guests laughing", uploadedBy: "Guest", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBWgDrtLAEdGL6IgIMa7u6H6GTXlZ3mM3VVxfQjYxVqxZjyn7AxYkA4a_phI_oARWXBL1MYDp3NzSJSLVGfUENMPaxGK0cAPRsAYrJvM1q1ROYrYisRjpJPG-bGrq_mgMAnv1kFPIac6JKmH9kZimbqEaciox9-G2eENV4dtEPM8Q7olJuAmbzuG_E3DrbKbbpIP37pTD4lY0kr-6BQg9guwD3WFNjgv4J-ESHQfdgKHLl81C4hnfIs6E5yEN26468HK9UQAk8uqu8" },
  { id: "g12", kind: "photo", alt: "The getaway car decorated with flowers", uploadedBy: "Guest", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBC6thpQmLp4oZoISjchFWcV8f6z7P4-2ZZN3sh7MsBJ9DENdTbR1WAGzNq8vlv5MRGS-oyAQ6w5a5nULfDBLeifG18PmHiFoR6_T3C8qL1Jt85LCTGkDobEg4svZtj8u3iNwTTLq55C_0tHhKiGzBXx_Otpf4VmRIb6SpNqF30CYluDjVFd55GmM9vptiyQ_UgX63_RF5OvqjEdMHyaiUorbsTqBN8Bx4k8Us2lnUuU2-qLkTldgGCP1xqu8PUOnVmMMqvvJ8PS-Y" },
];

const FILTERS: { label: string; value: "all" | MediaKind }[] = [
  { label: "All", value: "all" },
  { label: "Photos", value: "photo" },
  { label: "Videos", value: "video" },
];

type LayoutMode = "grid" | "masonry";

export default function GalleryCuratePage() {
  const [items, setItems] = useState<GalleryItem[]>(INITIAL_ITEMS);
  const [filter, setFilter] = useState<"all" | MediaKind>("all");
  const [layout, setLayout] = useState<LayoutMode>("grid");
  const dragIndex = useRef<number | null>(null);

  const filtered = useMemo(() => {
    if (filter === "all") return items;
    return items.filter((i) => i.kind === filter);
  }, [items, filter]);

  function handleDelete(id: string) {
    setItems((prev) => prev.filter((i) => i.id !== id));
  }

  // Simple HTML5 DnD to reorder (grid only)
  function onDragStart(index: number) {
    if (layout !== "grid") return;
    dragIndex.current = index;
  }
  function onDragOver(e: React.DragEvent) {
    if (layout !== "grid") return;
    e.preventDefault();
  }
  function onDrop(index: number) {
    if (layout !== "grid") return;
    const from = dragIndex.current;
    dragIndex.current = null;
    if (from == null || from === index) return;

    setItems((prev) => {
      const next = [...prev];
      const [moved] = next.splice(from, 1);
      next.splice(index, 0, moved);
      return next;
    });
  }

  return (
    <>
      {/* Header */}
      <header className="flex flex-col md:flex-row flex-wrap justify-between items-start gap-4 mb-6">
        <div className="flex min-w-72 flex-col gap-2">
          <h1 className="text-[#181113] text-3xl lg:text-4xl font-black leading-tight tracking-[-0.033em]">
            Curate Your Gallery
          </h1>
          <p className="text-[#886370] text-base leading-normal max-w-2xl">
            Drag and drop to reorder photos, or remove any you do not want in your public gallery. All guest
            uploads appear here automatically.
          </p>
        </div>
        <Link
          href={"/demo/gallery"}
          className="flex min-w-[84px] items-center justify-center gap-2 rounded-lg h-10 px-4 bg-white text-[#181113] text-sm font-bold border border-gray-200 hover:bg-gray-50 transition-colors"
        >
          <ExternalLink className="w-4 h-4" />
          <span className="truncate">View Live Site</span>
        </Link>
      </header>

      {/* Toolbar */}
      <div className="flex flex-col md:flex-row justify-between gap-4 py-3 border-b border-gray-200 mb-6">
        <div className="flex flex-wrap items-center gap-3">
          <p className="text-sm font-medium text-gray-700">
            Showing {filtered.length} item{filtered.length !== 1 ? "s" : ""}. Drag to reorder.
          </p>

          {/* Layout toggle */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setLayout("grid")}
              className={`inline-flex items-center gap-1 rounded-md border px-2.5 py-1.5 text-sm ${
                layout === "grid"
                  ? "border-[#f7bacf] bg-[rgba(247,186,207,0.15)] text-[#e73271] font-semibold"
                  : "border-gray-300 bg-white text-[#181113] hover:bg-gray-100"
              }`}
              title="Grid layout"
              aria-pressed={layout === "grid"}
            >
              <LayoutGrid className="w-4 h-4" />
              Grid
            </button>
            <button
              type="button"
              onClick={() => setLayout("masonry")}
              className={`inline-flex items-center gap-1 rounded-md border px-2.5 py-1.5 text-sm ${
                layout === "masonry"
                  ? "border-[#f7bacf] bg-[rgba(247,186,207,0.15)] text-[#e73271] font-semibold"
                  : "border-gray-300 bg-white text-[#181113] hover:bg-gray-100"
              }`}
              title="Masonry layout"
              aria-pressed={layout === "masonry"}
            >
              <GalleryVerticalEnd className="w-4 h-4" />
              Masonry
            </button>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {FILTERS.map((f) => {
            const isActive = filter === f.value;
            return (
              <button
                key={f.value}
                type="button"
                onClick={() => setFilter(f.value)}
                className={[
                  "flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-lg pl-4 pr-3",
                  isActive
                    ? "bg-[rgba(247,186,207,0.15)] text-[#e73271] font-semibold"
                    : "bg-gray-100 text-[#181113] hover:bg-gray-200",
                ].join(" ")}
              >
                <p className={isActive ? "text-sm font-semibold" : "text-sm font-medium"}>{f.label}</p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Content */}
      {layout === "grid" ? (
        /* Normal grid with DnD */
        <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-5">
          {filtered.map((item, idx) => (
            <figure
              key={item.id}
              className="group relative aspect-3/4 overflow-hidden rounded-xl cursor-grab active:cursor-grabbing"
              data-alt={item.alt}
              draggable
              onDragStart={() => onDragStart(idx)}
              onDragOver={onDragOver}
              onDrop={() => onDrop(idx)}
              aria-label={item.alt}
              role="img"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
              <figcaption className="absolute inset-0 flex flex-col justify-end p-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="text-sm font-medium">Uploaded by {item.uploadedBy}</p>
              </figcaption>
              <button
                type="button"
                onClick={() => handleDelete(item.id)}
                className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-white opacity-0 transition-all duration-300 group-hover:opacity-100 hover:bg-red-500"
                aria-label="Delete item"
                title="Delete"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </figure>
          ))}
        </div>
      ) : (
        /* Masonry layout using CSS columns */
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-5 [column-fill:balance]">
          {filtered.map((item) => (
            <figure
              key={item.id}
              className="group relative mb-5 overflow-hidden rounded-xl break-inside-avoid-column"
              aria-label={item.alt}
              role="img"
              /* DnD intentionally disabled in masonry to avoid weirdness */
            >
              <div className="relative w-full">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-auto block object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                <figcaption className="absolute inset-0 flex flex-col justify-end p-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="text-sm font-medium">Uploaded by {item.uploadedBy}</p>
                </figcaption>
                <button
                  type="button"
                  onClick={() => handleDelete(item.id)}
                  className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-white opacity-0 transition-all duration-300 group-hover:opacity-100 hover:bg-red-500"
                  aria-label="Delete item"
                  title="Delete"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </figure>
          ))}
        </div>
      )}
    </>
  );
}
