import React from "react";
import WorkItem from "./WorkItem";
import { QrCode, ImageUp, Gift, ListChecks } from "lucide-react";

const ITEMS = [
  {
    Icon: QrCode,
    title: "Share with a QR Code",
    description:
      "Easily share your site with guests using a unique QR code on your invitations and at your event.",
  },
  {
    Icon: ImageUp,
    title: "Seamless Photo Uploads",
    description:
      "Guests can upload photos and videos directly to your site, creating a shared album of memories.",
  },
  {
    Icon: Gift,
    title: "Integrated Wishlist Gifting",
    description:
      "Link your gift registry or create a custom wishlist, making it easy for guests to celebrate with you.",
  },
  {
    Icon: ListChecks,
    title: "Effortless RSVP Tracking",
    description:
      "Track guest responses in real-time and manage your guest list with our simple RSVP system.",
  },
];

const Works = () => {
  return (
    <section className="w-full py-16 md:py-24">
      <div className="flex flex-col items-center gap-4 text-center">
        <h2 className="text-2xl font-bold leading-tight tracking-tight text-charcoal sm:text-4xl">
          How It Works
        </h2>
        <p className="max-w-xl text-charcoal/80">
          From sharing details to collecting memories, our platform makes it simple to manage your special day.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {ITEMS.map((item) => (
          <WorkItem
            key={item.title}
            Icon={item.Icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Works;
