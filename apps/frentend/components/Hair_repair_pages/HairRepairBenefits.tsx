"use client";

import React from "react";
import Image from "next/image";

export interface HairRepairBenefitCardData {
  id: string;
  step: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const benefitCards: HairRepairBenefitCardData[] = [
  {
    id: "hairline-restoration",
    step: "01",
    title: "Hairline Restoration",
    description: "The unnatural hairlines are corrected, and a natural look is implemented.",
    imageSrc: "/Ultra_page_images/Benefits-4.webp",
    imageAlt: "01 Hairline Restoration",
  },
  {
    id: "permanent-results",
    step: "02",
    title: "Permanent Results",
    description:
      "The Corrective Hair Transplant procedures at QHT Clinic ensure natural and long-lasting results.",
    imageSrc: "/Ultra_page_images/Benefits-2.webp",
    imageAlt: "02 Permanent Results",
  },
  {
    id: "advanced-techniques",
    step: "03",
    title: "Using Advanced techniques",
    description:
      "The repair methods used by experts at QHT Clinic are safe and leave negligible scars.",
    imageSrc: "/Hair_repair_pages/Benefits-3.webp",
    imageAlt: "03 Using Advanced techniques",
  },
  {
    id: "quick-healing",
    step: "04",
    title: "Quick Healing Process",
    description:
      "New methods of Hair Transplant Repair are less invasive with less recovery time.",
    imageSrc: "/Ultra_page_images/Benefits-3.webp",
    imageAlt: "04 Quick Healing Process",
  },
  {
    id: "customised-repair",
    step: "05",
    title: "Customised Repair",
    description:
      "Realdense Clinic makes sure that the repair plan is tailored to the needs and satisfaction of the patient.",
    imageSrc: "/Ultra_page_images/Benefits-1.webp",
    imageAlt: "05 Customised Repair",
  },
];

export interface HairRepairBenefitsProps {
  eyebrow?: string;
  titleLine1?: string;
  titleAccent?: string;
  subtitle?: string;
  cards?: HairRepairBenefitCardData[];
}

export default function HairRepairBenefits({
  eyebrow = "BENEFITS",
  titleLine1 = "Benefits of",
  titleAccent = "Hair Transplant Repair",
  subtitle = "The Hair Transplant Repair fixes transplant mistakes and gives a natural look. At our Clinic benefits patients in the following ways:",
  cards = benefitCards,
}: HairRepairBenefitsProps) {
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

        {/* ── 2-Column Grid of 5 Benefit Cards ── */}
        <div className="max-w-[1020px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-7 items-stretch">
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

                <h3 className="font-['Plus_Jakarta_Sans'] text-[17px] sm:text-[19px] lg:text-[20px] font-extrabold text-[#001e56] leading-[1.25] tracking-[-0.015em] mb-2 sm:mb-2.5">
                  {card.title}
                </h3>

                <p className="font-['Plus_Jakarta_Sans'] text-[12.5px] sm:text-[13px] leading-[1.6] text-[#556987] font-normal max-w-[240px] sm:max-w-[280px]">
                  {card.description}
                </p>
              </div>

              {/* Right Column: Circular Illustration Badge */}
              <div className="shrink-0 flex items-center justify-center">
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 lg:w-[104px] lg:h-[104px] rounded-full overflow-hidden transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src={card.imageSrc}
                    alt={card.imageAlt}
                    width={180}
                    height={180}
                    className="w-full h-full object-contain"
                    quality={90}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

