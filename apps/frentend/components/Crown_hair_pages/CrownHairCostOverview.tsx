"use client";

import React from "react";
import Image from "next/image";

export interface CrownHairFactorCard {
  step: string;
  title: string;
  description: string;
}

const defaultFactorsRow1: CrownHairFactorCard[] = [
  {
    step: "01",
    title: "Size of Bald Patch",
    description:
      "Larger bald areas require more grafts, increasing the overall cost.",
  },
  {
    step: "02",
    title: "Multiple Sittings",
    description:
      "More sessions mean higher total expenses due to repeated procedures.",
  },
  {
    step: "03",
    title: "Technique Used",
    description:
      "FUE and QHT are usually more expensive than FUT. Advanced methods like QHT require specialized tools and expertise, raising the overall cost.",
  },
  {
    step: "04",
    title: "Number of Grafts Required",
    description:
      "The greater the bald area or density required, the higher the graft count.",
  },
];

const defaultFactorsRow2: CrownHairFactorCard[] = [
  {
    step: "01",
    title: "Surgeon’s Experience",
    description:
      "Experienced doctors and trusted clinics may charge more for quality and safety.",
  },
  {
    step: "02",
    title: "Location of the Clinic",
    description:
      "Metropolitan areas often have higher expenses, so procedures in cities like Delhi, Mumbai, and Bangalore tend to be costlier.",
  },
];

export interface CrownHairCostOverviewProps {
  eyebrow?: string;
  titleLine1?: string;
  titleLine2?: string;
  description?: string;
  factorsTitleLine1?: string;
  factorsTitleLine2?: string;
  factorsRow1?: CrownHairFactorCard[];
  factorsRow2?: CrownHairFactorCard[];
}

export default function CrownHairCostOverview({
  eyebrow = "COST OVERVIEW",
  titleLine1 = "Crown Hair Transplant",
  titleLine2 = "Cost in india",
  description = "The Crown Hair Transplant in India varies in cost based on the patient’s extent of baldness at the Crown region, the number of grafts needed, and the technique that is chosen, along with the surgeon’s expertise. On average, the Crown Hair Transplant Cost is between Rs. 80,000 to Rs. 1,50,000 for those with moderate baldness in the Crown region, while the cases that need higher grafts range from Rs. 1,50,000 to Rs. 3,00,000.",
  factorsTitleLine1 = "The Factors Affecting",
  factorsTitleLine2 = "Crown Hair Transplant",
  factorsRow1 = defaultFactorsRow1,
  factorsRow2 = defaultFactorsRow2,
}: CrownHairCostOverviewProps) {
  return (
    <section className="relative isolate w-full overflow-hidden bg-[#e8f4fb] py-14 sm:py-20 lg:py-24">
      {/* ── Background Image Layer ── */}
      <div className="absolute inset-0 -z-10 w-full h-full pointer-events-none select-none overflow-hidden">
        <Image
          src="/Fut_page_images/fut-patient-results-background.webp"
          alt="Cost Overview Background"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 1920px"
          className="object-cover object-center"
          quality={90}
        />
      </div>

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Top Header Section ── */}
        <div className="max-w-[880px] mb-12 sm:mb-16">
          <span className="font-['Plus_Jakarta_Sans'] text-[11.5px] sm:text-[13px] font-bold uppercase tracking-[0.22em] text-[#00A3FF] mb-2 sm:mb-3 block">
            {eyebrow}
          </span>
          <h2 className="font-['Plus_Jakarta_Sans'] text-[26px] sm:text-[36px] lg:text-[44px] font-extrabold tracking-[-0.03em] leading-[1.16]">
            <span className="text-[#001e56] block">{titleLine1}</span>
            <span className="text-[#00A3FF] block mt-1">{titleLine2}</span>
          </h2>
          <p className="mt-4 sm:mt-5 text-[#556987] font-['Plus_Jakarta_Sans'] text-[14px] sm:text-[15px] lg:text-[15.5px] leading-[1.7] font-normal">
            {description}
          </p>
        </div>

        {/* ── Factors Subheading ── */}
        <div className="mb-8 sm:mb-10">
          <h3 className="font-['Plus_Jakarta_Sans'] text-[22px] sm:text-[28px] lg:text-[34px] font-extrabold tracking-[-0.02em]">
            <span className="text-[#001e56]">{factorsTitleLine1} </span>
            <span className="text-[#00A3FF]">{factorsTitleLine2}</span>
          </h3>
        </div>

        {/* ── Row 1: 4 Cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-6">
          {factorsRow1.map((card, idx) => (
            <div
              key={idx}
              className="flex flex-col rounded-[22px] sm:rounded-[26px] bg-white border border-[#d5eaf7]/70 p-6 sm:p-7 shadow-[0_4px_16px_rgba(3,30,80,0.04)] hover:shadow-[0_10px_26px_rgba(3,30,80,0.08)] transition-all duration-300 hover:-translate-y-1"
            >
              {/* Step Circle Badge */}
              <div
                style={{
                  background:
                    "linear-gradient(180deg, #B5DAEF 0%, #FFFFFF 100%)",
                  boxShadow:
                    "inset 0px -3px 4px rgba(5, 78, 116, 0.44), inset 0px 2.62px 7.86px #8DD8FF",
                }}
                className="w-12 h-12 rounded-full flex items-center justify-center font-['Plus_Jakarta_Sans'] font-extrabold text-[#001e56] text-[16px] mb-5 select-none"
              >
                {card.step}
              </div>

              {/* Title */}
              <h4 className="font-['Plus_Jakarta_Sans'] text-[17px] sm:text-[18px] font-bold text-[#001e56] tracking-[-0.01em] mb-2.5">
                {card.title}
              </h4>

              {/* Description */}
              <p className="font-['Plus_Jakarta_Sans'] text-[13px] sm:text-[13.5px] leading-[1.65] text-[#556987]">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* ── Row 2: 2 Cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {factorsRow2.map((card, idx) => (
            <div
              key={idx}
              className="flex flex-col rounded-[22px] sm:rounded-[26px] bg-white border border-[#d5eaf7]/70 p-6 sm:p-7 shadow-[0_4px_16px_rgba(3,30,80,0.04)] hover:shadow-[0_10px_26px_rgba(3,30,80,0.08)] transition-all duration-300 hover:-translate-y-1"
            >
              {/* Step Circle Badge */}
              <div
                style={{
                  background:
                    "linear-gradient(180deg, #B5DAEF 0%, #FFFFFF 100%)",
                  boxShadow:
                    "inset 0px -3px 4px rgba(5, 78, 116, 0.44), inset 0px 2.62px 7.86px #8DD8FF",
                }}
                className="w-12 h-12 rounded-full flex items-center justify-center font-['Plus_Jakarta_Sans'] font-extrabold text-[#001e56] text-[16px] mb-5 select-none"
              >
                {card.step}
              </div>

              {/* Title */}
              <h4 className="font-['Plus_Jakarta_Sans'] text-[17px] sm:text-[18px] font-bold text-[#001e56] tracking-[-0.01em] mb-2.5">
                {card.title}
              </h4>

              {/* Description */}
              <p className="font-['Plus_Jakarta_Sans'] text-[13px] sm:text-[13.5px] leading-[1.65] text-[#556987]">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
