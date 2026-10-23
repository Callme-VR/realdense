"use client";

import React from "react";
import Image from "next/image";

/* ── Pricing row data ── */
export interface PricingRow {
  label: string;
  prefix?: string;
  amount: string;
  suffix?: string;
  highlighted?: boolean;
}

const defaultPricingRows: PricingRow[] = [
  {
    label: "FUE",
    prefix: "Starts from ",
    amount: "₹50",
    suffix: " per graft",
    highlighted: true,
  },
  {
    label: "FUT",
    prefix: "Starts from ",
    amount: "₹70",
    suffix: " per graft",
  },
  {
    label: "QHT",
    prefix: "Starts from ",
    amount: "₹100",
    suffix: " per graft",
  },
];

/* ── Factor card data ── */
export interface FactorCard {
  step: string;
  title: string;
  description: string;
}

const defaultFactors: FactorCard[] = [
  {
    step: "01",
    title: "Baldness Extent",
    description:
      "The degree of baldness of the individual decides the number of grafts that are needed.",
  },
  {
    step: "02",
    title: "The Technique Chosen",
    description:
      "FUE method along with its advancement with QHT technique offers high graft survival rates, precision and realistic results.",
  },
  {
    step: "03",
    title: "Experienced Surgeons",
    description:
      "At QHT Clinic, transplants are performed by surgeons with years of experience that ensures safety and natural density.",
  },
  {
    step: "04",
    title: "The amount of sessions required",
    description:
      "Severe baldness may require multiple sessions that can cause a spike in expenses.",
  },
];

export interface CostOverviewProps {
  eyebrow?: string;
  titleLine1?: string;
  titleLine2?: string;
  paragraphs?: string[];
  pricingRows?: PricingRow[];
  factorsTitleLine1?: string;
  factorsTitleLine2?: string;
  factors?: FactorCard[];
}

export default function CostOverviewFue({
  eyebrow = "COST OVERVIEW",
  titleLine1 = "FUE Hair Transplant",
  titleLine2 = "Cost in india",
  paragraphs = [
    "The FUE Hair Transplant in India relies on various factors like the patient’s degree of baldness, the number of grafts required, the technique opted, and the surgeon’s expertise.",
    "The cost of a hair transplant at a clinic depends on several factors, including the clinic’s reputation, the surgeon’s experience, the clinic’s location, and the specific type of procedure performed (such as QHT, FUE or FUT).",
  ],
  pricingRows = defaultPricingRows,
  factorsTitleLine1 = "The Factors Affecting",
  factorsTitleLine2 = "FUE Hair Transplant Cost",
  factors = defaultFactors,
}: CostOverviewProps) {
  return (
    <section className="relative isolate w-full overflow-hidden bg-[#e8f4fb]">
      {/* ── Background Image Layer (Matching reference image waves & dot matrix) ── */}
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
          SECTION 1 — Cost Overview & Pricing Table
      ══════════════════════════════════════ */}
      <div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 pt-14 sm:pt-20 lg:pt-24 pb-10 sm:pb-14 lg:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-14 items-start">
          {/* ── Left: Text Content ── */}
          <div className="max-w-[560px]">
            {/* Eyebrow */}
            <span className="font-['Plus_Jakarta_Sans'] text-[11.5px] sm:text-[13px] font-bold uppercase tracking-[0.22em] text-[#00A3FF] mb-2 sm:mb-3 block">
              {eyebrow}
            </span>

            {/* Heading */}
            <h2 className="font-['Plus_Jakarta_Sans'] text-[26px] sm:text-[36px] lg:text-[44px] font-extrabold tracking-[-0.03em] leading-[1.16]">
              <span className="text-[#001e56] block">{titleLine1}</span>
              <span className="text-[#00A3FF] block mt-1">{titleLine2}</span>
            </h2>

            {/* Body paragraphs */}
            <div className="mt-4 sm:mt-6 space-y-3.5 sm:space-y-5 text-[#556987] font-['Plus_Jakarta_Sans'] text-[14.5px] sm:text-[15.5px] lg:text-[16px] leading-[1.7] font-normal">
              {paragraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </div>

          {/* ── Right: Pricing Table Card ── */}
          <div className="w-full max-w-[520px] lg:max-w-none mx-auto lg:mx-0">
            <div className="rounded-[22px] sm:rounded-[28px] bg-white border border-[#d5eaf7] shadow-[0_8px_32px_rgba(3,30,80,0.07)] overflow-hidden">
              {/* Table Header */}
              <div className="grid grid-cols-2 border-b border-[#e0eff8] bg-white">
                <div className="px-5 sm:px-7 py-3.5 sm:py-4 flex items-center">
                  <span className="font-['Plus_Jakarta_Sans'] text-[12.5px] sm:text-[13.5px] font-bold text-[#001e56]">
                    Type of Hair Transplant
                  </span>
                </div>
                <div className="px-5 sm:px-7 py-3.5 sm:py-4 border-l border-[#e0eff8] flex items-center">
                  <span className="font-['Plus_Jakarta_Sans'] text-[12.5px] sm:text-[13.5px] font-bold text-[#001e56]">
                    Cost per Graft at{" "}
                    <span className="text-[#0077cc]">RealDense</span>
                  </span>
                </div>
              </div>

              {/* Pricing Rows */}
              {pricingRows.map((row, idx) => (
                <div
                  key={idx}
                  className={`grid grid-cols-2 transition-colors ${
                    idx < pricingRows.length - 1
                      ? "border-b border-[#e0eff8]"
                      : ""
                  } ${
                    row.highlighted
                      ? "bg-[#dff2fe]"
                      : "bg-white hover:bg-[#f5fbff]"
                  }`}
                >
                  {/* Type Label */}
                  <div className="px-5 sm:px-7 py-4 sm:py-5 flex items-center">
                    <span
                      className={`font-['Plus_Jakarta_Sans'] text-[15px] sm:text-[16px] font-bold tracking-[-0.01em] ${
                        row.highlighted ? "text-[#0077cc]" : "text-[#001e56]"
                      }`}
                    >
                      {row.label}
                    </span>
                  </div>

                  {/* Price */}
                  <div
                    className={`px-5 sm:px-7 py-4 sm:py-5 border-l flex items-center ${
                      row.highlighted ? "border-[#b5d9f0]" : "border-[#e0eff8]"
                    }`}
                  >
                    <span className="font-['Plus_Jakarta_Sans'] text-[14px] sm:text-[15px] font-medium text-[#334155] leading-snug">
                      {row.prefix || "Starts from "}
                      <span className="font-extrabold text-[#0077cc] text-[15.5px] sm:text-[16.5px]">
                        {row.amount}
                      </span>
                      {row.suffix || " per graft"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════
          SECTION 2 — Factors Affecting Cost
      ══════════════════════════════════════ */}
      <div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 pb-14 sm:pb-20 lg:pb-24">
        {/* Section Header */}
        <div className="mb-10 sm:mb-14 lg:mb-16">
          <h2 className="font-['Plus_Jakarta_Sans'] text-[24px] sm:text-[32px] lg:text-[40px] font-extrabold tracking-[-0.03em] leading-[1.2]">
            <span className="text-[#001e56]">{factorsTitleLine1} </span>
            <span className="text-[#00A3FF]">{factorsTitleLine2}</span>
          </h2>
        </div>

        {/* ── 4-Column Factor Cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 relative">
          {factors.map((item) => (
            <div key={item.step} className="relative group">
              {/* Card Content */}
              <div className="relative z-10 rounded-[20px] sm:rounded-[24px] bg-white border border-[#d5eaf7] shadow-[0_6px_22px_rgba(3,30,80,0.06)] p-5 sm:p-6 h-full flex flex-col transition-all duration-300 hover:shadow-[0_12px_32px_rgba(3,30,80,0.11)] hover:-translate-y-0.5">
                {/* Step Badge */}
                <div
                  style={{
                    background:
                      "linear-gradient(180deg, #B5DAEF 0%, #FFFFFF 100%)",
                    boxShadow:
                      "inset 0px -3px 4px rgba(5, 78, 116, 0.44), inset 0px 2.62px 7.86px #8DD8FF",
                  }}
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-[#001e56] font-['Plus_Jakarta_Sans'] font-extrabold text-[18px] sm:text-[20px] mb-4 sm:mb-5 transition-transform duration-200 group-hover:scale-105 select-none shrink-0"
                >
                  {item.step}
                </div>

                {/* Title */}
                <h3 className="font-['Plus_Jakarta_Sans'] text-[16px] sm:text-[17px] font-bold text-[#001e56] mb-2 tracking-[-0.01em]">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="font-['Plus_Jakarta_Sans'] text-[13px] sm:text-[13.5px] leading-[1.65] text-[#556987] font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
