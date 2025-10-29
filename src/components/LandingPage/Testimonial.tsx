import React from "react";
import { Star } from "lucide-react";

type Testimonial = {
  quote: string;
  name: string;
  img: string;
  imgAlt: string;
  rating?: number; // default 5
};

const testimonials: Testimonial[] = [
  {
    quote:
      "Our Vows was a lifesaver! It was so easy to set up, and our guests loved being able to see all the details and upload photos from the day. It’s a keepsake we’ll cherish forever.",
    name: "Sarah & Tom",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB2jGdsRjmWYqcujTf-DCotbIRegXTSqP8X-BaEVAtuD_yUkl7eXXDv6mEArq2x1M5Yz68zWGmQDsOwyYjNe6jkFb5psrX2G1Fs06Xf4PF_tSU1Z-wRYRo-3G_ikThTAqFsi9VlrsvoP0WMFTgA0-OWrK8XuijK4fMCwkpt3dFzhKY_DGAq8kWj-TsZR4lpkCTX33zMlxvxmTDJuoplW-8G8RSkfis0byu7_ucWG-yMpYgRU4gYqPt4cvO3oNEktc3TjxxAAgH4fpw",
    imgAlt: "Profile picture of Sarah L.",
    rating: 5,
  },
  {
    quote:
      "The best part was the shared photo gallery. We got to see our wedding from everyone's perspective. The QR code idea was brilliant and so simple for everyone to use.",
    name: "Jessica & Maria",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCgvVTGnzp762Oc2LcHFeig6xAmn648iRFGXL-oHGBP2h4gYFm5w4ABZbZhHygIpx2l_RqwyqwrbVIfym4vfR8SbEJ6wEjE6p9FXlbZ84491YBuPDtyuodf2ssq5dh2GEYjIc9PoFW46-wxRgtZF1Edqbe8PfhZWJmNqF9Ojlyoj6-AS9sm5kd5xHdQeYTeNmhI1eYOAG86Y6shu9jO4qVZuDnuuN0-018Oy7Dkb9cSmFeFh0uVxjlhDv0ddgOjuRmk0O8KkN9cZ1c",
    imgAlt: "Profile picture of Jessica M.",
    rating: 5,
  },
  {
    quote:
      "We loved having one central place for everything from the schedule to our gift registry. It made planning so much less stressful. Highly recommend!",
    name: "David & Chloe",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC85IFG5rx0_tpVgtbRjWNS4S5WBLQ2mRHw6oqheLwdbFFVuRr8D2shXnuI82-pmWHE09_vI80o8dubCdK_55f0jaAQixyHgmpHJofxFA7uFD7h9jVhGEulji8mDXodTcMahpIoWDrDo5qP6LUx0Eht-F367mNOq_yWuXE4jwdaxzlMpNJXKAFCvGE-JpI8KeMvqTD7GmDu1HFmISIeS8y1MfNORLpDCucbOgMKl7TtJOI47iSGuStzFFxPR3fbCMczJAWecuPa97s",
    imgAlt: "Profile picture of David K.",
    rating: 5,
  },
];

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex items-center gap-1 text-gold" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < count ? "fill-current" : "opacity-30"}`}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

function TestimonialCard({ quote, name, img, imgAlt, rating = 5 }: Testimonial) {
  return (
    <div className="flex flex-col gap-4 rounded-lg bg-white p-6 shadow-md">
      <Stars count={rating} />
      <p className="text-charcoal/90">&quot;{quote}&quot;</p>
      <div className="flex items-center gap-3">
        <img className="h-10 w-10 rounded-full object-cover" alt={imgAlt} src={img} />
        <div>
          <p className="font-bold text-charcoal">{name}</p>
        </div>
      </div>
    </div>
  );
}

const Testimonials: React.FC = () => {
  return (
    <section className="w-full py-16 md:py-24">
      <div className="flex flex-col items-center gap-4 text-center">
        <h2 className="font-serif text-3xl font-bold leading-tight tracking-tight text-charcoal sm:text-4xl">
          Loved by Couples Everywhere
        </h2>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t) => (
          <TestimonialCard key={t.name} {...t} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
