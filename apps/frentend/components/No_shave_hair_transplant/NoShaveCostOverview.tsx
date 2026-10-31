"use client";

import React from "react";
import Image from "next/image";

export interface NoShaveCostFactor {
  step: string;
  title: string;
  description: string;
}

const defaultFactors: NoShaveCostFactor[] = [
  {
    step: "01",
    title: "Grafts Required",
    description:
      "The total grafts required will have a direct impact on the cost of the procedure.",
  },
  {
    step: "02",
    title: "Technique Used",
    description:
      "Newer techniques and enhanced equipment (e.g. sapphire punch and magnification) can contribute to the overall prices.",
  },
  {
    step: "03",
    title: "Expert Surgeons",
    description:
      "Every patient has their unique challenges and a good skillful surgeon will ensure a better outcome for the patient, which may result in additional cost.",
  },
  {
    step: "04",
    title: "Location",
    description:
      "Clinics providing standards of care, safety, and comfort on par with international guidelines will likely have a higher pricing structure.",
  },
];

export interface NoShaveCostOverviewProps {
  eyebrow?: string;
  titleLine1?: string;
  titleLine2?: string;
  paragraphLeft?: string;
  paragraphRight?: string;
  subheadingPart1?: string;
  subheadingPart2?: string;
  factors?: NoShaveCostFactor[];
}

export default function NoShaveCostOverview({
  eyebrow = "COST OVERVIEW",
  titleLine1 = "Unshaven Hair Transplant",
  titleLine2 = "Cost in india",
  paragraphLeft = "The cost of a No-Shave Hair Transplant in India is dependent on factors such as the number of grafts needed, the complexity of the case, and the expertise of the surgeon. A no-shave hair transplant is significantly more complicated than a traditional hair transplant and requires more skill; thus, it costs more than a traditional hair transplant.",
  paragraphRight = "In addition, not every clinic has the ability to do no-shave hair transplants, meaning that the cost is variable depending on the clinic itself.",
  subheadingPart1 = "The Factors Affecting",
  subheadingPart2 = "UNSHAVEN HAIR TRANSPLANT",
  factors = defaultFactors,
}: NoShaveCostOverviewProps) {
  return (
    <section className="relative isolate w-full overflow-hidden bg-[#e8f4fb]">
      {/* ── Background Image Layer (From existing Hair Repair Cost Overview) ── */}
      <div className="absolute inset-0 -z-10 w-full h-full pointer-events-none select-none overflow-hidden">
        <Image
          src="/Fut_page_images/fut-patient-results-background.webp"
          alt="Cost Overview Background"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 1920px"
          className="object-cover object-top"
          quality={90}
        />
      </div>

      {/* ══════════════════════════════════════
          SECTION 1 — Cost Overview 2-Column Text
      ══════════════════════════════════════ */}
      <div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 pt-14 sm:pt-20 lg:pt-24 pb-8 sm:pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          {/* ── Left Column: Eyebrow + Heading + Paragraph Left ── */}
          <div className="lg:col-span-6 max-w-[560px]">
            <span className="font-['Plus_Jakarta_Sans'] text-[11.5px] sm:text-[13px] font-bold uppercase tracking-[0.22em] text-[#00A3FF] mb-2 sm:mb-3 block">
              {eyebrow}
            </span>

            <h2 className="font-['Plus_Jakarta_Sans'] text-[26px] sm:text-[36px] lg:text-[44px] font-extrabold tracking-[-0.03em] leading-[1.16]">
              <span className="text-[#001e56] block">{titleLine1}</span>
              <span className="text-[#00A3FF] block mt-1">{titleLine2}</span>
            </h2>

            <p className="mt-4 sm:mt-6 text-[#556987] font-['Plus_Jakarta_Sans'] text-[14px] sm:text-[15px] leading-[1.7] font-normal">
              {paragraphLeft}
            </p>
          </div>

          {/* ── Right Column: Paragraph Right ── */}
          <div className="lg:col-span-6 lg:pt-14 max-w-[560px]">
            <p className="text-[#556987] font-['Plus_Jakarta_Sans'] text-[14px] sm:text-[15px] leading-[1.7] font-normal">
              {paragraphRight}
            </p>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════
          SECTION 2 — The Factors Affecting
      ══════════════════════════════════════ */}
      <div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24 lg:pb-28">
        {/* Factors Section Title */}
        <div className="mb-8 sm:mb-12">
          <h3 className="font-['Plus_Jakarta_Sans'] text-[24px] sm:text-[32px] lg:text-[38px] font-extrabold tracking-[-0.03em] leading-[1.2]">
            <span className="text-[#001e56]">{subheadingPart1} </span>
            <span className="text-[#00A3FF] uppercase">{subheadingPart2}</span>
          </h3>
        </div>

        {/* Factors Cards Grid (4 Cards in a row) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 items-stretch">
          {factors.map((item) => (
            <div
              key={item.step}
              className="relative flex flex-col justify-start rounded-[24px] bg-white p-6 sm:p-7 shadow-[0_8px_24px_rgba(3,30,80,0.06)] hover:shadow-[0_12px_32px_rgba(3,30,80,0.1)] border border-[#e2eef7] transition-all duration-300 hover:-translate-y-1"
            >
              {/* Step Circle Badge */}
              <div
                style={{
                  background:
                    "linear-gradient(180deg, #B5DAEF 0%, #FFFFFF 100%)",
                  boxShadow:
                    "inset 0px -3px 4px rgba(5, 78, 116, 0.44), inset 0px 2.62px 7.86px #8DD8FF",
                }}
                className="w-12 h-12 rounded-full flex items-center justify-center font-['Plus_Jakarta_Sans'] font-extrabold text-[#001e56] text-[17px] mb-4 sm:mb-5 select-none"
              >
                {item.step}
              </div>

              {/* Title */}
              <h4 className="font-['Plus_Jakarta_Sans'] text-[17px] sm:text-[18px] font-bold text-[#001e56] mb-2 tracking-tight">
                {item.title}
              </h4>

              {/* Description */}
              <p className="font-['Plus_Jakarta_Sans'] text-[13px] sm:text-[13.5px] leading-[1.65] text-[#556987]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
