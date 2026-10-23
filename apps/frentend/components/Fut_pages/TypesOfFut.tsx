"use client";

import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";

interface TypesOfFutProps {
  eyebrow?: string;
  titleLine1?: string;
  titleLine2?: string;
  subtitle?: string;
}

export default function TypesOfFut({
  eyebrow = "TYPES OF FUT",
  titleLine1 = "Types of",
  titleLine2 = "FUT Hair Transplant?",
  subtitle = "We offer a refined and modern approach to FUT, combining precision dissection with advanced implantation techniques to deliver natural-looking, long-lasting results.",
}: TypesOfFutProps) {
  const card1Points = [
    "Yields a high number of grafts in a single session.",
    "Ideal for advanced hair loss (Norwood grade 5–7).",
    "Trichophytic closure helps reduce visible scarring.",
    "Suitable for patients who prefer not to shave the donor area.",
  ];

  const card2Points = [
    "High FUT graft yield with precise FUE/QHT implantation.",
    "Improves graft handling and survival rate.",
    "Natural hairline with precise angle, depth & direction.",
    "Ideal for large coverage with refined results.",
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

        {/* ── Cards Grid (2 Columns) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          {/* Card 1: FUT - Classic Strip Method */}
          <div className="flex flex-col justify-between rounded-[22px] sm:rounded-[28px] bg-[#f0f7fe] border border-[#dcecfe] p-5 sm:p-7 lg:p-9 shadow-xs">
            <div>
              {/* Card Header */}
              <h3 className="font-['Plus_Jakarta_Sans'] text-[18px] sm:text-[21px] font-bold text-[#001e56] tracking-tight mb-2.5 sm:mb-3">
                FUT – Classic Strip Method
              </h3>
              <p className="font-['Plus_Jakarta_Sans'] text-[13.5px] sm:text-[14.5px] leading-relaxed text-[#556987] mb-5 sm:mb-6">
                A thin strip of scalp is surgically removed from the donor area,
                and the incision is closed with sutures. The follicular units are
                dissected under a microscope and implanted in the thinning or
                bald areas.
              </p>

              {/* Diagram Box */}
              <div className="relative w-full rounded-[20px] bg-white p-4 sm:p-5 sm:py-6 border border-white shadow-xs mb-6 overflow-hidden flex items-center justify-center">
                <Image
                  src="/Fut_page_images/fut-classic-strip-method.webp"
                  alt="FUT Classic Strip Method: Strip Removal, Graft Dissection, and Implantation"
                  width={1516}
                  height={534}
                  className="w-full h-auto object-contain"
                  quality={90}
                />
              </div>
            </div>

            {/* Bullet Points */}
            <div className="rounded-[18px] bg-white/60 border border-white/80 p-5 sm:p-6 space-y-3.5">
              {card1Points.map((point, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#193c85] text-white flex items-center justify-center shrink-0 shadow-xs">
                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                  </div>
                  <span className="font-['Plus_Jakarta_Sans'] text-[13px] sm:text-[14px] text-[#475569] leading-snug">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2: FUT with FUE/QHT Implantation Technique */}
          <div className="flex flex-col justify-between rounded-[22px] sm:rounded-[28px] bg-[#f0f7fe] border border-[#dcecfe] p-5 sm:p-7 lg:p-9 shadow-xs">
            <div>
              {/* Card Header */}
              <h3 className="font-['Plus_Jakarta_Sans'] text-[18px] sm:text-[21px] font-bold text-[#001e56] tracking-tight mb-2.5 sm:mb-3">
                FUT with FUE/QHT Implantation Technique
              </h3>
              <p className="font-['Plus_Jakarta_Sans'] text-[13.5px] sm:text-[14.5px] leading-relaxed text-[#556987] mb-5 sm:mb-6">
                For patients with advanced baldness, FUT can be combined with
                FUE or QHT implantation techniques. This allows high graft yield
                with the same precision in graft placement, resulting in a dense
                and natural hairline.
              </p>

              {/* Diagram Box */}
              <div className="relative w-full rounded-[20px] bg-white p-4 sm:p-5 sm:py-6 border border-white shadow-xs mb-6 overflow-hidden flex items-center justify-center">
                <Image
                  src="/Fut_page_images/fut-combined-technique.webp"
                  alt="FUT vs FUE/QHT Implantation Technique comparison"
                  width={1516}
                  height={550}
                  className="w-full h-auto object-contain"
                  quality={90}
                />
              </div>
            </div>

            {/* Bullet Points */}
            <div className="rounded-[18px] bg-white/60 border border-white/80 p-5 sm:p-6 space-y-3.5">
              {card2Points.map((point, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#193c85] text-white flex items-center justify-center shrink-0 shadow-xs">
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
