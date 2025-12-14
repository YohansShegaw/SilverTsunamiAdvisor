"use client";

import { ReactNode } from "react";

interface ServiceSectionBlockProps {
  card: ReactNode;
  image: string;
  reverse?: boolean;
}

export function ServiceSectionBlock({ card, image, reverse }: ServiceSectionBlockProps) {
  return (
    <div
      className={`flex flex-col md:flex-row items-center justify-between gap-10 mb-20 ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Card Side */}
      <div className="flex-1 flex justify-center">
        {card}
      </div>

      {/* Image Side */}
      <div className="flex-1 flex justify-center">
        <img
          src={image}
          alt="Service"
          className="w-full max-w-md rounded-3xl object-cover shadow-xl"
          style={{ aspectRatio: "4 / 3" }} // ensures height proportional to card
        />
      </div>
    </div>
  );
}
