"use client";

import React from "react";
import Image from "next/image";

export interface BenefitCardData {
  id: string;
  step: string;
  titleTop: string;
  titleBottom: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const benefitCards: BenefitCardData[] = [
  {
    id: "high-density",
    step: "01",
    titleTop: "HIGH",
    titleBottom: "DENSITY",
    description: "High graft density creates fuller, youthful-looking hair.",
    imageSrc: "/Ultra_page_images/Benefits-4.webp",
    imageAlt: "01 High Density",
  },
  {
    id: "painless-procedure",
    step: "02",
    titleTop: "PAINLESS",
    titleBottom: "PROCEDURE",
    description: "Minimally invasive procedure with less pain and mild discomfort.",
    imageSrc: "/Ultra_page_images/Benefits-2.webp",
    imageAlt: "02 Painless Procedure",
  },
  {
    id: "less-scarring",
    step: "03",
    titleTop: "LESS",
    titleBottom: "SCARRING",
    description: "Sapphire punches create tiny openings with minimal visible scarring.",
    imageSrc: "/Ultra_page_images/Benefits-1.webp",
    imageAlt: "03 Less Scarring",
  },
  {
    id: "versatile-grafting",
    step: "04",
    titleTop: "VERSATILE GRAFTING",
    titleBottom: "OPTIONS",
    description: "Beard and chest hair can supplement limited donor scalp hair.",
    imageSrc: "/Ultra_page_images/Benefits-3.webp",
    imageAlt: "04 Versatile Grafting Options",
  },
];

export interface UltraBenefitsProps {
  eyebrow?: string;
  titleLine1?: string;
  titleAccent?: string;
  subtitle?: string;
  cards?: BenefitCardData[];
}

export default function UltraBenefits({
  eyebrow = "BENEFITS",
  titleLine1 = "Benefits of",
  titleAccent = "Ultra Dense Hair Transplant",
  subtitle = "Ultra-Dense Hair Transplant provides benefits like high density, less scarring, a painless procedure, and versatile grafting options.",
  cards = benefitCards,
}: UltraBenefitsProps) {
  return (
    <section className="w-full bg-white py-14 sm:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Section Header ── */}
        <div className="text-center max-w-[820px] mx-auto mb-10 sm:mb-14">
          <span className="font-['Plus_Jakarta_Sans'] text-[11.5px] sm:text-[13px] font-bold uppercase tracking-[0.22em] text-[#00A3FF] mb-2 sm:mb-3 block">
            {eyebrow}
          </span>
          <h2 className="font-['Plus_Jakarta_Sans'] text-[26px] sm:text-[36px] lg:text-[44px] font-extrabold tracking-[-0.03em] leading-[1.16]">
            <span className="text-[#001e56]">{titleLine1} </span>
            <span className="text-[#00A3FF]">{titleAccent}</span>
          </h2>
          <p className="mt-3.5 sm:mt-4 text-[#556987] font-['Plus_Jakarta_Sans'] text-[14px] sm:text-[15.5px] leading-[1.65] font-normal max-w-[740px] mx-auto">
            {subtitle}
          </p>
        </div>

        {/* ── 2x2 Grid of Benefit Cards ── */}
        <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-7 justify-center items-stretch">
          {cards.map((card) => (
            <div
              key={card.id}
              className="group relative rounded-[22px] sm:rounded-[26px] bg-[#f4f8fb] p-5 sm:p-6 lg:p-7 flex items-center justify-between gap-3 sm:gap-4 shadow-[0_4px_16px_rgba(3,30,80,0.04)] hover:shadow-[0_10px_26px_rgba(3,30,80,0.08)] transition-all duration-300 hover:-translate-y-0.5"
            >
              {/* Left Column: Step, Title, Description */}
              <div className="flex flex-col items-start justify-center flex-1 min-w-0 pr-1 sm:pr-2">
                <span className="font-['Plus_Jakarta_Sans'] text-[13.5px] sm:text-[14.5px] font-bold text-[#00A3FF] tracking-[0.06em] mb-1.5 sm:mb-2 block">
                  {card.step}
                </span>

                <h3 className="font-['Plus_Jakarta_Sans'] text-[17px] sm:text-[19px] lg:text-[20px] font-extrabold text-[#001e56] leading-[1.22] tracking-[-0.015em] mb-2 sm:mb-2.5">
                  <span className="block">{card.titleTop}</span>
                  <span className="block">{card.titleBottom}</span>
                </h3>

                <p className="font-['Plus_Jakarta_Sans'] text-[12.5px] sm:text-[13px] leading-[1.6] text-[#556987] font-normal max-w-[240px] sm:max-w-[270px]">
                  {card.description}
                </p>
              </div>

              {/* Right Column: Circular Illustration Badge */}
              <div className="relative w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 shrink-0 flex items-center justify-center">
                <div className="relative w-full h-full rounded-full overflow-hidden transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src={card.imageSrc}
                    alt={card.imageAlt}
                    fill
                    sizes="(max-width: 640px) 80px, 128px"
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Screen reader accessible text */}
              <span className="sr-only">
                {card.step} {card.titleTop} {card.titleBottom}: {card.description}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
