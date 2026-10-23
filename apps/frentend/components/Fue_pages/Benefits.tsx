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
    id: "natural-appearance",
    step: "01",
    title: "Natural Appearance",
    description:
      "Personalized hairline design with improved hair density as per the individual’s needs.",
    imageSrc: "/Fue_page_images/benefits-1.webp",
    imageAlt:
      "01 Natural Appearance - Personalized hairline design with improved hair density as per the individual’s needs.",
  },
  {
    id: "permanent-hair-growth",
    step: "02",
    title: "Permanent Hair Growth",
    description:
      "FUE method, the results are permanent and lifelong.",
    imageSrc: "/Fue_page_images/benefits_2.webp",
    imageAlt:
      "02 Permanent Hair Growth - FUE method, the results are permanent and lifelong.",
  },
  {
    id: "quick-recovery",
    step: "03",
    title: "Quick Recovery",
    description:
      "The time of healing after recovery becomes very less with QHT Clinics advanced techniques.",
    imageSrc: "/Fue_page_images/benefits-3.webp",
    imageAlt:
      "03 Quick Recovery - The time of healing after recovery becomes very less with QHT Clinics advanced techniques.",
  },
];

interface BenefitsProps {
  eyebrow?: string;
  titleLine1?: string;
  titleLine2?: string;
  subtitle?: string;
  cards?: BenefitCardData[];
}

export default function BenefitsFue({
  eyebrow = "BENEFITS",
  titleLine1 = "Benefits of",
  titleLine2 = "FUE Hair Transplant",
  subtitle = "FUE offers distinct advantages and remains clinically validated as one of the most effective hair restoration procedures for high-volume graft requirements.",
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

        {/* ── 2+1 Grid of Benefit Cards (2 on top, 1 centered below) ── */}
        <div className="max-w-[940px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-7 justify-center items-stretch">
          {cards.map((card, idx) => {
            const isLastSingle = idx === cards.length - 1 && cards.length % 2 !== 0;
            return (
              <div
                key={card.id}
                className={`group relative rounded-[18px] sm:rounded-[22px] overflow-hidden shadow-[0_4px_16px_rgba(3,30,80,0.04)] hover:shadow-[0_10px_26px_rgba(3,30,80,0.09)] transition-all duration-300 hover:-translate-y-0.5 bg-[#f4f8fb] mx-auto w-full max-w-[450px] ${isLastSingle ? "md:col-span-2" : ""
                  }`}
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
