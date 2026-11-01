"use client";

import React from "react";

export interface ComparisonRow {
  feature: string;
  col1: string;
  col2: string;
}

const defaultComparisonData: ComparisonRow[] = [
  {
    feature: "Purpose",
    col1: "Precision, natural spiral, high density",
    col2: "Forceps implantation in premade slits.",
  },
  {
    feature: "Scarring",
    col1: "Minimal, covered by procedure",
    col2: "Minimal",
  },
  {
    feature: "Recovery",
    col1: "5–7 days",
    col2: "7–10 days",
  },
];

export interface CrownHairComparisonProps {
  titlePart1?: string;
  titlePart2?: string;
  subtitle?: string;
  col1Title?: string;
  col2Title?: string;
  data?: ComparisonRow[];
}

export default function CrownHairComparison({
  titlePart1 = "Compare of",
  titlePart2 = "GFC vs PRP for Hairline Growth",
  subtitle = "GFC injections are different from the PRP injections, though both of them are non-invasive the following factors make them different from one to another:",
  col1Title = "QHT Temple Hair Transplant",
  col2Title = "Traditional FUE",
  data = defaultComparisonData,
}: CrownHairComparisonProps) {
  return (
    <section className="w-full bg-white py-14 sm:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Section Header (Centered) ── */}
        <div className="text-center max-w-[900px] mx-auto mb-10 sm:mb-14">
          <h2 className="font-['Plus_Jakarta_Sans'] text-[24px] sm:text-[32px] md:text-[38px] lg:text-[44px] font-extrabold tracking-[-0.03em] leading-tight">
            <span className="text-[#001e56]">{titlePart1} </span>
            <span className="text-[#00A3FF]">{titlePart2}</span>
          </h2>
          <p className="mt-3.5 sm:mt-4 text-[#556987] font-['Plus_Jakarta_Sans'] text-[14px] sm:text-[15.5px] leading-[1.7] font-normal max-w-[760px] mx-auto">
            {subtitle}
          </p>
        </div>

        {/* ── Mobile Scroll Hint ── */}
        <div className="flex md:hidden items-center justify-end text-[11px] font-bold text-[#00A3FF] mb-2 gap-1 tracking-wider uppercase">
          <span>Scroll table</span>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M2.5 6H9.5M6.5 3L9.5 6L6.5 9" />
          </svg>
        </div>

        {/* ── Table System (Feature Column + Technique Columns) ── */}
        <div className="w-full overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-sky-200">
          <div className="min-w-[680px] sm:min-w-[760px] max-w-[1020px] mx-auto grid grid-cols-[180px_1fr] sm:grid-cols-[220px_1fr] lg:grid-cols-[240px_1fr] gap-3 sm:gap-6 items-stretch">
            {/* ── Left Pillar: Feature Column ── */}
            <div className="rounded-[22px] sm:rounded-[28px] bg-[#edf5fb] border border-[#d6ecfa] overflow-hidden flex flex-col shadow-xs">
              {/* Header */}
              <div className="bg-[#cfe7fa] py-4 sm:py-5 flex items-center justify-center min-h-[60px] sm:min-h-[64px]">
                <span className="font-['Plus_Jakarta_Sans'] text-[15.5px] sm:text-[17px] font-extrabold text-[#001e56]">
                  Feature
                </span>
              </div>

              {/* Rows */}
              <div className="flex flex-col flex-1 divide-y divide-[#dbe8f5]">
                {data.map((row, idx) => (
                  <div
                    key={idx}
                    className="flex-1 min-h-[82px] sm:min-h-[90px] flex items-center justify-center text-center px-4 py-3"
                  >
                    <span className="font-['Plus_Jakarta_Sans'] text-[14px] sm:text-[15px] font-bold text-[#001e56]">
                      {row.feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Right Table: col1 vs col2 ── */}
            <div className="rounded-[22px] sm:rounded-[28px] bg-[#fbfdff] border border-[#d6ecfa] overflow-hidden flex flex-col shadow-xs">
              {/* Header */}
              <div className="bg-[#bce0fa] py-4 sm:py-5 grid grid-cols-2 min-h-[60px] sm:min-h-[64px] items-center text-center">
                <span className="font-['Plus_Jakarta_Sans'] text-[15.5px] sm:text-[17px] font-extrabold text-[#001e56]">
                  {col1Title}
                </span>
                <span className="font-['Plus_Jakarta_Sans'] text-[15.5px] sm:text-[17px] font-extrabold text-[#001e56]">
                  {col2Title}
                </span>
              </div>

              {/* Rows */}
              <div className="flex flex-col flex-1 divide-y divide-[#e3effa]">
                {data.map((row, idx) => (
                  <div
                    key={idx}
                    className="flex-1 min-h-[82px] sm:min-h-[90px] grid grid-cols-2 items-center text-center px-3 sm:px-6 py-3 divide-x divide-[#e8f1f8]"
                  >
                    {/* col1 cell */}
                    <div className="px-2 sm:px-4">
                      <p className="font-['Plus_Jakarta_Sans'] text-[13px] sm:text-[14px] text-[#556987] leading-relaxed">
                        {row.col1}
                      </p>
                    </div>

                    {/* col2 cell */}
                    <div className="px-2 sm:px-4">
                      <p className="font-['Plus_Jakarta_Sans'] text-[13px] sm:text-[14px] text-[#556987] leading-relaxed">
                        {row.col2}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
