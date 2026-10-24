"use client";

import React from "react";
import Image from "next/image";

export interface OverviewBlockData {
  eyebrow?: string;
  titleLine1?: string;
  titleLine2?: string;
  paragraphs?: string[];
  imageSrc?: string;
  imageAlt?: string;
}

export interface OverviewQhtProps {
  block1?: OverviewBlockData;
  block2?: OverviewBlockData;
}

const defaultBlock1: OverviewBlockData = {
  eyebrow: "OVERVIEW",
  titleLine1: "What is QHT",
  titleLine2: "Hair Transplant?",
  paragraphs: [
    "QHT hair transplant stands for QUICK HAIR TRANSPLANT, an advanced, minimally invasive FUE technique developed by the QHT clinic, prioritizing speed and precision.",
    "Benefits like hairline restoration, increased hair density, and overall improved appearance make it a perfect choice for achieving aesthetically natural hair.",
  ],
  imageSrc: "/Fue_page_images/fue-procedure-implement.webp",
  imageAlt: "What is QHT Hair Transplant - Procedure and extraction",
};

const defaultBlock2: OverviewBlockData = {
  eyebrow: "IN INDIA",
  titleLine1: "QHT Hair Transplant",
  titleLine2: "in India",
  paragraphs: [
    "Baldness is a common issue in India, and the majority of the population experiences significant hair loss as early as in their 30s . Stress, poor lifestyle, and genetics are some of the contributing factors leading to early hair loss.",
    "If you’re looking for a painless procedure offering maximum benefits with minimal downtime, QHT Hair Transplant could be your saviour.",
  ],
  imageSrc: "/Fue_page_images/Closeup-implementation.webp",
  imageAlt: "QHT Hair Transplant in India - Microscopic follicle implantation",
};

export default function OverviewQht({
  block1 = defaultBlock1,
  block2 = defaultBlock2,
}: OverviewQhtProps) {
  const b1 = { ...defaultBlock1, ...block1 };
  const b2 = { ...defaultBlock2, ...block2 };

  return (
    <section className="w-full bg-white py-14 sm:py-20 lg:py-28 overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-20 lg:space-y-28">
        {/* ── Block 1: Text Left, Image Right ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Content Column */}
          <div className="max-w-[560px]">
            {/* Eyebrow */}
            <span className="font-['Plus_Jakarta_Sans'] text-[11.5px] sm:text-[13px] font-bold uppercase tracking-[0.22em] text-[#00A3FF] mb-2 sm:mb-3 block">
              {b1.eyebrow}
            </span>

            {/* Heading */}
            <h2 className="font-['Plus_Jakarta_Sans'] text-[26px] sm:text-[36px] lg:text-[44px] font-extrabold tracking-[-0.03em] leading-[1.16]">
              <span className="text-[#001e56] block">{b1.titleLine1}</span>
              <span className="text-[#00A3FF] block mt-1">{b1.titleLine2}</span>
            </h2>

            {/* Paragraphs */}
            <div className="mt-4 sm:mt-6 space-y-3.5 sm:space-y-5 text-[#556987] font-['Plus_Jakarta_Sans'] text-[14.5px] sm:text-[15.5px] lg:text-[16px] leading-[1.7] font-normal">
              {b1.paragraphs?.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </div>

          {/* Image Column */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[460px] rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-[0_12px_36px_rgba(3,30,80,0.08)] bg-slate-50 transition-transform duration-300 hover:scale-[1.01]">
              <Image
                src={b1.imageSrc || "/Fue_page_images/fue-procedure-implement.webp"}
                alt={b1.imageAlt || "What is QHT Hair Transplant"}
                width={1534}
                height={1431}
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 460px"
                className="w-full h-auto object-cover rounded-[24px] sm:rounded-[32px]"
                quality={92}
              />
            </div>
          </div>
        </div>

        {/* ── Block 2: Image Left, Text Right ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Image Column (First on desktop) */}
          <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[460px] rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-[0_12px_36px_rgba(3,30,80,0.08)] bg-slate-50 transition-transform duration-300 hover:scale-[1.01]">
              <Image
                src={b2.imageSrc || "/Fue_page_images/Closeup-implementation.webp"}
                alt={b2.imageAlt || "QHT Hair Transplant in India"}
                width={1534}
                height={1431}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 460px"
                className="w-full h-auto object-cover rounded-[24px] sm:rounded-[32px]"
                quality={92}
              />
            </div>
          </div>

          {/* Content Column */}
          <div className="order-1 lg:order-2 max-w-[560px]">
            {/* Eyebrow */}
            <span className="font-['Plus_Jakarta_Sans'] text-[11.5px] sm:text-[13px] font-bold uppercase tracking-[0.22em] text-[#00A3FF] mb-2 sm:mb-3 block">
              {b2.eyebrow}
            </span>

            {/* Heading */}
            <h2 className="font-['Plus_Jakarta_Sans'] text-[26px] sm:text-[36px] lg:text-[44px] font-extrabold tracking-[-0.03em] leading-[1.16]">
              <span className="text-[#001e56] block">{b2.titleLine1}</span>
              <span className="text-[#00A3FF] block mt-1">{b2.titleLine2}</span>
            </h2>

            {/* Paragraphs */}
            <div className="mt-4 sm:mt-6 space-y-3.5 sm:space-y-5 text-[#556987] font-['Plus_Jakarta_Sans'] text-[14.5px] sm:text-[15.5px] lg:text-[16px] leading-[1.7] font-normal">
              {b2.paragraphs?.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
