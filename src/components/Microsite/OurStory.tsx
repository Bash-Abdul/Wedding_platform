import React from "react";

type OurStoryProps = {
  title?: string;
  imageUrl?: string;
  alt?: string; // used for aria-label since it's a background image
  paragraphs?: string[];
};

export default function OurStorySection({
  title = "Our Story",
  imageUrl = "https://lh3.googleusercontent.com/aida-public/AB6AXuCZrFLGU7zk0qBsocC3wDM6GmHbAAUYwweOslit_kkibeV9MP9XAvZTJ8ZKz9bEa1VHW3MIkGXgeZVPcaVXQcFmI1ammYmP6bxLMd8WsvyIVL-jieZvH77f5dY9OzqwjNp7Uxc2lsdMEZeSTAxc3PYqv0nVxxV-YrnUkaxzhrnJPkQPJwTbXDSJueGCRzfr7pGvidzSLp9nz9Xa5kwfdAMpF6NZnZOvsORo4LK10Cd0aIOtXRn852UpN9dlKbNdaoJ3YJkJCzzu9kQ",
  alt = "A candid photo of Jack and Kate laughing together.",
  paragraphs = [
    "It all started with a shared love for classic literature and a very competitive game of Scrabble at a local coffee shop. Kate was winning, of course. Jack, ever the charmer, decided that losing to her was the best win he could ask for. From that day forward, our chapters have been filled with laughter, adventure, and an ever-growing library of shared memories.",
    "After countless hikes, two adopted cats, and one very memorable trip to Italy where Jack proposed under the Tuscan sun, we knew our story was one for the books. We are so excited to start our next chapter with you, our favorite people, by our side.",
  ],
}: OurStoryProps) {
  return (
    <section className="py-10">
      <h2 className="text-center text-3xl font-bold leading-tight tracking-[-0.015em] text-text-light dark:text-text-dark px-4 pb-8 pt-5">
        {title}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4">
        {/* Background image as accessible figure */}
        <div
          className="w-full aspect-square rounded-xl bg-cover bg-center"
          style={{ backgroundImage: `url('${imageUrl}')` }}
          aria-label={alt}
          role="img"
        />

        {/* Copy */}
        <div className="flex flex-col gap-4 text-text-light dark:text-text-dark">
          {paragraphs.map((p, i) => (
            <p key={i} className="leading-relaxed">
              {p}
            </p>
          ))}
        </div>
      </div>


      <h2 className="text-3xl font-bold text-center mt-10">And so, our forever begins...</h2>
    </section>
  );
}
