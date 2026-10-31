"use client";

import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";

export interface CustomHairTypesProps {
  eyebrow?: string;
  titleLine1?: string;
  titleLine2?: string;
  subtitle?: string;
}

export default function CustomHairTypes({
  eyebrow = "TYPES OF HAIR TRANSPLANT",
  titleLine1 = "Types of",
  titleLine2 = "Custom Hairline Transplant",
  subtitle = "Custom hairline transplants can be tailored into different types based on age, gender, facial structure, and individual aesthetic goals.",
}: CustomHairTypesProps) {
  const card1Points = [
    "Individual grafts are precisely extracted and implanted at natural angles.",
    "Minimal scarring, faster healing, and suitable for short hairstyles.",
  ];

  const card2Points = [
    "A scalp strip is removed, and follicles are transplanted.",
    "Ideal for more grafts, leaving a thin scar hidden by hair.",
  ];

  const card3Points = [
    "Immediate graft implantation.",
    "Higher density, natural results.",
    "Advanced hairline design.",
  ];

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
            <span className="text-[#00A3FF]">{titleLine2}</span>
          </h2>
          <p className="mt-3.5 sm:mt-4 text-[#556987] font-['Plus_Jakarta_Sans'] text-[14px] sm:text-[15.5px] leading-[1.65] font-normal max-w-[740px] mx-auto">
            {subtitle}
          </p>
        </div>

        {/* ── Cards Grid (2 Columns: Card 1 & Card 2 in top row, Card 3 in bottom row) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-start">
          {/* Card 1: FUE (Follicular Unit Excision) */}
          <div className="flex flex-col justify-between rounded-[22px] sm:rounded-[28px] bg-[#f0f7fe] border border-[#dcecfe] p-5 sm:p-7 lg:p-9 shadow-xs">
            <div>
              <h3 className="font-['Plus_Jakarta_Sans'] text-[18px] sm:text-[21px] font-bold text-[#001e56] tracking-tight mb-2.5 sm:mb-3">
                FUE (Follicular Unit Excision)
              </h3>
              <p className="font-['Plus_Jakarta_Sans'] text-[13.5px] sm:text-[14.5px] leading-relaxed text-[#556987] mb-5 sm:mb-6">
                A minimally invasive hair transplant method where individual hair
                follicles are extracted and implanted for natural-looking results.
              </p>

              {/* Diagram Box */}
              <div className="relative w-full rounded-[20px] bg-white p-4 sm:p-5 sm:py-6 border border-white shadow-xs mb-6 overflow-hidden flex items-center justify-center">
                <Image
                  src="/Fue_page_images/fue-technique.webp"
                  alt="FUE: Doner Area, Follicle extraction, and Graft implantation"
                  width={1516}
                  height={534}
                  className="w-full h-auto object-contain"
                  quality={90}
                />
              </div>
            </div>

            {/* Bullet Points */}
            <div className="rounded-[18px] bg-white border border-white/80 p-5 sm:p-6 space-y-3.5">
              {card1Points.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#193c85] text-white flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                  </div>
                  <span className="font-['Plus_Jakarta_Sans'] text-[13px] sm:text-[14px] text-[#475569] leading-snug">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2: FUT (Follicular Unit Transplantation) */}
          <div className="flex flex-col justify-between rounded-[22px] sm:rounded-[28px] bg-[#f0f7fe] border border-[#dcecfe] p-5 sm:p-7 lg:p-9 shadow-xs">
            <div>
              <h3 className="font-['Plus_Jakarta_Sans'] text-[18px] sm:text-[21px] font-bold text-[#001e56] tracking-tight mb-2.5 sm:mb-3">
                FUT (Follicular Unit Transplantation)
              </h3>
              <p className="font-['Plus_Jakarta_Sans'] text-[13.5px] sm:text-[14.5px] leading-relaxed text-[#556987] mb-5 sm:mb-6">
                A strip of scalp is removed, and individual hair follicles are
                extracted and transplanted.
              </p>

              {/* Diagram Box */}
              <div className="relative w-full rounded-[20px] bg-white p-4 sm:p-5 sm:py-6 border border-white shadow-xs mb-6 overflow-hidden flex items-center justify-center">
                <Image
                  src="/Fut_page_images/fut-classic-strip-method.webp"
                  alt="FUT: Strip Removal, Graft Dissection, and Implantation"
                  width={1516}
                  height={534}
                  className="w-full h-auto object-contain"
                  quality={90}
                />
              </div>
            </div>

            {/* Bullet Points */}
            <div className="rounded-[18px] bg-white border border-white/80 p-5 sm:p-6 space-y-3.5">
              {card2Points.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#193c85] text-white flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                  </div>
                  <span className="font-['Plus_Jakarta_Sans'] text-[13px] sm:text-[14px] text-[#475569] leading-snug">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 3: QHT Method (Row 2, Column 1) */}
          <div className="flex flex-col justify-between rounded-[22px] sm:rounded-[28px] bg-[#f0f7fe] border border-[#dcecfe] p-5 sm:p-7 lg:p-9 shadow-xs">
            <div>
              <h3 className="font-['Plus_Jakarta_Sans'] text-[18px] sm:text-[21px] font-bold text-[#001e56] tracking-tight mb-2.5 sm:mb-3">
                QHT Method
              </h3>
              <p className="font-['Plus_Jakarta_Sans'] text-[13.5px] sm:text-[14.5px] leading-relaxed text-[#556987] mb-5 sm:mb-6">
                An advanced technique that directly implants extracted follicles
                using a special implanter pen for precise placement and density.
              </p>

              {/* Diagram Box */}
              <div className="relative w-full rounded-[20px] bg-white p-4 sm:p-5 sm:py-6 border border-white shadow-xs mb-6 overflow-hidden flex items-center justify-center">
                <Image
                  src="/Fue_page_images/fue_qht.webp"
                  alt="QHT Method: Punch Insertion Around Hair Follicle, Extraction of Follicular Units, and Implantation of the Grafts"
                  width={1516}
                  height={550}
                  className="w-full h-auto object-contain"
                  quality={90}
                />
              </div>
            </div>

            {/* Bullet Points */}
            <div className="rounded-[18px] bg-white border border-white/80 p-5 sm:p-6 space-y-3.5">
              {card3Points.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#193c85] text-white flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                  </div>
                  <span className="font-['Plus_Jakarta_Sans'] text-[13px] sm:text-[14px] text-[#475569] leading-snug">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

