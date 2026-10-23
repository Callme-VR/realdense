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

export interface OverviewProps {
  block1?: OverviewBlockData;
  block2?: OverviewBlockData;
}

const defaultBlock1: OverviewBlockData = {
  eyebrow: "OVERVIEW",
  titleLine1: "What is FUE",
  titleLine2: "Hair Transplant?",
  paragraphs: [
    "FUE (Follicular Unit Extraction) is a minimally invasive hair transplant technique in which individual hair follicles are extracted from the donor area, usually at the back of the head.",
    "These follicles are carefully implanted into thinning or bald areas to restore natural-looking hair growth, without the linear scar associated with the traditional FUT strip method."
  ],
  imageSrc: "/Fue_page_images/fue-procedure-implement.webp",
  imageAlt: "What is FUE Hair Transplant - Procedure marking and planning",
};

const defaultBlock2: OverviewBlockData = {
  eyebrow: "IN INDIA",
  titleLine1: "FUE Hair Transplant",
  titleLine2: "in India",
  paragraphs: [
    "FUE has become a popular hair restoration option for people seeking natural-looking results with minimal visible scarring. The technique is suitable for a range of hair loss patterns, depending on donor hair availability and individual needs.",
    "With careful planning, skilled specialists and precise follicle extraction, FUE can help restore hair density and create a natural-looking hairline tailored to each patient."
  ],
  imageSrc: "/Fue_page_images/Closeup-implementation.webp",
  imageAlt: "FUE Hair Transplant in India - Microscopic graft dissection",
};

export default function FueOverview({
  block1 = defaultBlock1,
  block2 = defaultBlock2,
}: OverviewProps) {
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
                src={b1.imageSrc || "/Fut_page_images/fut-procedure-marking.webp"}
                alt={b1.imageAlt || "What is FUT Hair Transplant"}
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
                alt={b2.imageAlt || "FUT Hair Transplant in India"}
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


