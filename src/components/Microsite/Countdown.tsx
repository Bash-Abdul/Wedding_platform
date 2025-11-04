// "use client";

// import React, { useEffect, useMemo, useState } from "react";

// type Parts = { days: number; hours: number; minutes: number; seconds: number };

// function diffParts(target: Date): Parts {
//   const now = new Date().getTime();
//   const end = target.getTime();
//   const clamped = Math.max(end - now, 0);

//   const days = Math.floor(clamped / (1000 * 60 * 60 * 24));
//   const hours = Math.floor((clamped % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   const minutes = Math.floor((clamped % (1000 * 60 * 60)) / (1000 * 60));
//   const seconds = Math.floor((clamped % (1000 * 60)) / 1000);

//   return { days, hours, minutes, seconds };
// }

// export default function Countdown({
//   targetDate = "2025-12-26T00:09:00", // ISO string, set yours here
// }: {
//   targetDate?: string;
// }) {
//   const target = useMemo(() => new Date(targetDate), [targetDate]);
//   const [parts, setParts] = useState<Parts>(() => diffParts(target));

//   useEffect(() => {
//     const t = setInterval(() => setParts(diffParts(target)), 1000);
//     return () => clearInterval(t);
//   }, [target]);

//   const items = [
//     { label: "Days", value: parts.days },
//     { label: "Hours", value: parts.hours },
//     { label: "Minutes", value: parts.minutes },
//     { label: "Seconds", value: parts.seconds },
//   ];

//   return (
//     <section className="w-full">
//       <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-10">
//         {items.map((it) => (
//           <div key={it.label} className="flex flex-col items-center gap-2">
//             <div className="flex h-20 w-full items-center justify-center rounded-lg bg-primary/20 dark:bg-primary/30">
//               <p className="text-3xl font-bold leading-tight tracking-[-0.015em] text-text-light dark:text-text-dark">
//                 {it.value.toLocaleString()}
//               </p>
//             </div>
//             <p className="text-sm font-normal leading-normal text-text-light dark:text-text-dark">
//               {it.label}
//             </p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }


"use client";

import React, { useEffect, useMemo, useState } from "react";

type Parts = { days: number; hours: number; minutes: number; seconds: number };

function diffParts(targetMs: number): Parts {
  const now = Date.now();
  const clamped = Math.max(targetMs - now, 0);

  const days = Math.floor(clamped / (1000 * 60 * 60 * 24));
  const hours = Math.floor((clamped % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((clamped % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((clamped % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
}

export default function Countdown({
  // add Z if your date is in UTC, or keep local if you intend local time
  targetDate = "2025-12-26T00:09:00Z",
}: {
  targetDate?: string;
}) {
  const targetMs = useMemo(() => new Date(targetDate).getTime(), [targetDate]);

  // mounted gate prevents any SSR HTML for this component
  const [mounted, setMounted] = useState(false);
  const [parts, setParts] = useState<Parts>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!mounted) return;
    // sync immediately on mount
    setParts(diffParts(targetMs));
    const id = setInterval(() => setParts(diffParts(targetMs)), 1000);
    return () => clearInterval(id);
  }, [mounted, targetMs]);

  const items = [
    { label: "Days", value: parts.days },
    { label: "Hours", value: parts.hours },
    { label: "Minutes", value: parts.minutes },
    { label: "Seconds", value: parts.seconds },
  ];

  // simple zero-pad to avoid locale quirks
  const fmt = (n: number) => String(n).padStart(2, "0");

  if (!mounted) return null;

  return (
    <section className="w-full">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-10">
        {items.map((it) => (
          <div key={it.label} className="flex flex-col items-center gap-2">
            <div className="flex h-20 w-full items-center justify-center rounded-lg bg-primary/20 dark:bg-primary/30">
              <p className="text-3xl font-bold leading-tight tracking-[-0.015em] text-text-light dark:text-text-dark">
                {fmt(it.value)}
              </p>
            </div>
            <p className="text-sm font-normal leading-normal text-text-light dark:text-text-dark">
              {it.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
