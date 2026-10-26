"use client";

import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";

export interface UltraTypesProps {
  eyebrow?: string;
  titleLine1?: string;
  titleLine2?: string;
  subtitle?: string;
}

export default function UltraTypes({
  eyebrow = "TYPES OF HAIR TRANSPLANT",
  titleLine1 = "Types of",
  titleLine2 = "Ultra Dense Hair Transplant",
  subtitle = "In this advanced hair density restoration procedure, techniques like ULTRA DENSE FUE,FUT are used, making it a more advanced and precision-based procedure.",
}: UltraTypesProps) {
  const card1Points = [
    "Around 3,000–5,000 grafts are extracted and implanted using SAVA implanters, depending on baldness severity.",
    "It leaves a linear scar at the site of extraction.",
    "Recovery takes a little longer.",
  ];

  const card2Points = [
    "Minimally invasive procedure with no linear scar.",
    "Donor hair strips contain multiple follicles.",
    "Visible hair growth in 3–4 months.",
  ];

  const card3Points = [
    "Advanced, no–incision technique for direct follicle implant.",
    "Individual follicles extracted using specialised tools.",
    "Recovery in 10–15 days, with visible growth around 3 months.",
  ];

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
          <p className="mt-3.5 sm:mt-4 text-[#556987] font-['Plus_Jakarta_Sans'] text-[14px] sm:text-[15.5px] leading-[1.65] font-normal max-w-[740px] mx-auto">
            {subtitle}
          </p>
        </div>

        {/* ── Cards Grid (2 Columns, 3 Cards) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          {/* Card 1: ULTRA DENSE FUE */}
          <div className="flex flex-col justify-between rounded-[22px] sm:rounded-[28px] bg-[#f0f7fe] border border-[#dcecfe] p-5 sm:p-7 lg:p-9 shadow-xs">
            <div>
              {/* Card Header */}
              <h3 className="font-['Plus_Jakarta_Sans'] text-[18px] sm:text-[21px] font-bold text-[#001e56] tracking-tight mb-2.5 sm:mb-3 uppercase">
                ULTRA DENSE FUE
              </h3>
              <p className="font-['Plus_Jakarta_Sans'] text-[13.5px] sm:text-[14.5px] leading-relaxed text-[#556987] mb-5 sm:mb-6">
                A large number of hair follicles are extracted to achieve high density.
              </p>

              {/* Diagram Box */}
              <div className="relative w-full rounded-[20px] bg-white p-4 sm:p-5 sm:py-6 border border-white shadow-xs mb-6 overflow-hidden flex items-center justify-center">
                <Image
                  src="/Fue_page_images/fue-technique.webp"
                  alt="ULTRA DENSE FUE: Doner Area, Follicle extraction, and Graft implantation"
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

          {/* Card 2: FUT -(FOLLICULAR UNIT TRANSPLANTATION) */}
          <div className="flex flex-col justify-between rounded-[22px] sm:rounded-[28px] bg-[#f0f7fe] border border-[#dcecfe] p-5 sm:p-7 lg:p-9 shadow-xs">
            <div>
              {/* Card Header */}
              <h3 className="font-['Plus_Jakarta_Sans'] text-[18px] sm:text-[21px] font-bold text-[#001e56] tracking-tight mb-2.5 sm:mb-3 uppercase">
                FUT –(FOLLICULAR UNIT TRANSPLANTATION)
              </h3>
              <p className="font-['Plus_Jakarta_Sans'] text-[13.5px] sm:text-[14.5px] leading-relaxed text-[#556987] mb-5 sm:mb-6">
                Hair tissues having several follicles are extracted
              </p>

              {/* Diagram Box */}
              <div className="relative w-full rounded-[20px] bg-white p-4 sm:p-5 sm:py-6 border border-white shadow-xs mb-6 overflow-hidden flex items-center justify-center">
                <Image
                  src="/Fut_page_images/fut-classic-strip-method.webp"
                  alt="FUT Follicular Unit Transplantation: Strip Removal, Graft Dissection, and Implantation"
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

          {/* Card 3: QHT (Quick Hair Transplant) */}
          <div className="flex flex-col justify-between rounded-[22px] sm:rounded-[28px] bg-[#f0f7fe] border border-[#dcecfe] p-5 sm:p-7 lg:p-9 shadow-xs">
            <div>
              {/* Card Header */}
              <h3 className="font-['Plus_Jakarta_Sans'] text-[18px] sm:text-[21px] font-bold text-[#001e56] tracking-tight mb-2.5 sm:mb-3">
                QHT (Quick Hair Transplant)
              </h3>
              <p className="font-['Plus_Jakarta_Sans'] text-[13.5px] sm:text-[14.5px] leading-relaxed text-[#556987] mb-5 sm:mb-6">
                A greater number of hair grafts are extracted and implanted with minimal out-of-body graft time to achieve maximum density.
              </p>

              {/* Diagram Box */}
              <div className="relative w-full rounded-[20px] bg-white p-4 sm:p-5 sm:py-6 border border-white shadow-xs mb-6 overflow-hidden flex items-center justify-center">
                <Image
                  src="/Fue_page_images/fue_qht.webp"
                  alt="QHT Quick Hair Transplant: Punch Insertion, Extraction of Follicular Units, and Implantation of the Grafts"
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
