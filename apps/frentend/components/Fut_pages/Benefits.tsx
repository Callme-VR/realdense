"use client";

import React from "react";
import Image from "next/image";

interface BenefitCardData {
  id: string;
  step: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const benefitCards: BenefitCardData[] = [
  {
    id: "graft-yield",
    step: "01",
    title: "Maximum Graft Yield",
    description:
      "The FUT technique can deliver more than 3000 grafts in a single session.",
    imageSrc: "/Fut_page_images/benefit-1.webp",
    imageAlt:
      "01 Maximum Graft Yield - The FUT technique can deliver more than 3000 grafts in a single session.",
  },
  {
    id: "permanent-results",
    step: "02",
    title: "Permanent, Natural Results",
    description:
      "Transplanted follicles are resistant to hair loss, ensuring lifelong, natural growth.",
    imageSrc: "/Fut_page_images/benefit-2.webp",
    imageAlt:
      "02 Permanent, Natural Results - Transplanted follicles are resistant to hair loss, ensuring lifelong, natural growth.",
  },
  {
    id: "cost-effective",
    step: "03",
    title: "Cost-Effective for High Graft Counts",
    description:
      "Affordable option for patients needing more grafts, with a lower per-graft cost than FUE.",
    imageSrc: "/Fut_page_images/benefit-3.webp",
    imageAlt:
      "03 Cost-Effective for High Graft Counts - Affordable option for patients needing more grafts, with a lower per-graft cost than FUE.",
  },
  {
    id: "donor-preservation",
    step: "04",
    title: "Donor Area Preservation",
    description:
      "Reduces overharvesting and preserves long-term donor potential.",
    imageSrc: "/Fut_page_images/benefit-4.webp",
    imageAlt:
      "04 Donor Area Preservation - Reduces overharvesting and preserves long-term donor potential.",
  },
];

interface BenefitsProps {
  eyebrow?: string;
  titleLine1?: string;
  titleLine2?: string;
  subtitle?: string;
  cards?: BenefitCardData[];
}

export default function Benefits({
  eyebrow = "BENEFITS",
  titleLine1 = "Benefits of",
  titleLine2 = "FUT Hair Transplant",
  subtitle = "FUT offers distinct advantages and remains clinically validated as one of the most effective hair restoration procedures for high-volume graft requirements.",
  cards = benefitCards,
}: BenefitsProps) {
  return (
    <section className="w-full bg-white py-14 sm:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Section Header ── */}
        <div className="text-center max-w-[800px] mx-auto mb-10 sm:mb-14">
          <span className="font-['Plus_Jakarta_Sans'] text-[11.5px] sm:text-[13px] font-bold uppercase tracking-[0.22em] text-[#00A3FF] mb-2 sm:mb-3 block">
            {eyebrow}
          </span>
          <h2 className="font-['Plus_Jakarta_Sans'] text-[26px] sm:text-[36px] lg:text-[44px] font-extrabold tracking-[-0.03em] leading-[1.16]">
            <span className="text-[#001e56]">{titleLine1} </span>
            <span className="text-[#00A3FF]">{titleLine2}</span>
          </h2>
          <p className="mt-3.5 sm:mt-4 text-[#556987] font-['Plus_Jakarta_Sans'] text-[14px] sm:text-[15.5px] leading-[1.65] font-normal max-w-[720px] mx-auto">
            {subtitle}
          </p>
        </div>

        {/* ── 2x2 Grid of Benefit Cards (Compact sizing) ── */}
        <div className="max-w-[940px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-7 justify-center items-stretch">
          {cards.map((card) => (
            <div
              key={card.id}
              className="group relative rounded-[18px] sm:rounded-[22px] overflow-hidden shadow-[0_4px_16px_rgba(3,30,80,0.04)] hover:shadow-[0_10px_26px_rgba(3,30,80,0.09)] transition-all duration-300 hover:-translate-y-0.5 bg-[#f4f8fb] mx-auto w-full max-w-[450px]"
            >
              <Image
                src={card.imageSrc}
                alt={card.imageAlt}
                width={1416}
                height={596}
                sizes="(max-width: 768px) 100vw, 450px"
                className="w-full h-auto object-contain rounded-[18px] sm:rounded-[22px] transition-transform duration-300 group-hover:scale-[1.01]"
                quality={90}
              />
              {/* Screen reader accessible fallback */}
              <span className="sr-only">
                {card.step} {card.title}: {card.description}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
