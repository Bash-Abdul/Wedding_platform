"use client";

import React from "react";

type FooterProps = {
  coupleNames?: string;  // e.g., "Jack & Kate"
  hashtag?: string;      // e.g., "#JackAndKateTieTheKnot"
};

const PRIMARY = "#D1A6A6";   // soft rose
const SECONDARY = "#C0B283"; // warm gold

export default function MicrositeFooter({
  coupleNames = "Jack & Kate",
  hashtag = "#JackAndKateTieTheKnot",
}: FooterProps) {
  return (
    <footer
      className="w-full py-8 mt-10"
      style={{ backgroundColor: `${PRIMARY}1A` }} // ~10% opacity
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-8 text-center">
        <p className="font-bold text-lg">Thank you for being part of our story.</p>
        <p className="mt-2 text-sm">With love, {coupleNames}</p>
        <p className="mt-4 text-2xl font-bold" style={{ color: SECONDARY }}>
          {hashtag}
        </p>
      </div>
    </footer>
  );
}
