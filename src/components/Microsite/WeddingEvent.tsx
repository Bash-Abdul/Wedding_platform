"use client";

import React from "react";
import { Church, Wine, Utensils } from "lucide-react";

type Item = {
  icon: React.ReactNode;
  title: string;
  time: string;
  desc: string;
};

const ITINERARY: Item[] = [
  {
    icon: <Church className="w-5 h-5 text-[#C0B283]" aria-hidden="true" />,
    title: "The Ceremony",
    time: "4:00 PM - 4:30 PM",
    desc:
      'Join us as we say "I do" surrounded by the beautiful vineyards of Napa Valley.',
  },
  {
    icon: <Wine className="w-5 h-5 text-[#C0B283]" aria-hidden="true" />,
    title: "Cocktail Hour",
    time: "4:30 PM - 5:30 PM",
    desc:
      "Enjoy drinks and appetizers on the terrace overlooking the valley.",
  },
  {
    icon: <Utensils className="w-5 h-5 text-[#C0B283]" aria-hidden="true" />,
    title: "The Reception",
    time: "5:30 PM - 10:00 PM",
    desc:
      "Dinner, dancing, and celebrations to follow. Get ready to party.",
  },
];

export default function WeddingEvents() {
  return (
    <section className="py-10">
      <h2 className="text-center text-3xl font-bold leading-tight tracking-[-0.015em] px-4 pb-8 pt-5">
        The Wedding Events
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Itinerary card */}
        <div className="flex flex-col gap-8 rounded-xl bg-[rgba(247,186,207,0.15)] p-6">
          <div>
            <h3 className="text-xl font-bold mb-2">The Itinerary</h3>
            <ul className="space-y-4">
              {ITINERARY.map((item) => (
                <li key={item.title} className="flex items-start gap-4">
                  <span className="mt-1">{item.icon}</span>
                  <div>
                    <h4 className="font-bold">{item.title}</h4>
                    <p className="text-sm">{item.time}</p>
                    <p className="text-sm">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Map and venue */}
        <div className="flex flex-col gap-4">
          <div className="w-full aspect-video rounded-xl overflow-hidden">
            <iframe
              title="Napa Valley, California map"
              width="100%"
              height="100%"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d200785.4947938392!2d-122.5019853380295!3d38.45266749176311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808446d33b5c138b%3A0x44b121c05da73a5a!2sNapa%20Valley%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
            />
          </div>
          <div className="text-center">
            <h4 className="font-bold">The Meadowood Estate</h4>
            <p>123 Vineyard Lane, Napa Valley, CA 94558</p>
          </div>
        </div>
      </div>
    </section>
  );
}
