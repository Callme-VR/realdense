"use client";

import React from "react";

export interface ComparisonRow {
  feature: string;
  fue: string;
  fut: string;
}

const defaultComparisonData: ComparisonRow[] = [
  {
    feature: "Process",
    fue: "Individual follicles are extracted and stored.",
    fut: "Individual follicles are extracted and stored.",
  },
  {
    feature: "Graft Viability",
    fue: "Longer graft exposure may increase infection risk.",
    fut: "Shorter graft exposure may reduce infection risk.",
  },
  {
    feature: "Results",
    fue: "Slightly lower density, but effective.",
    fut: "Higher density and fuller coverage.",
  },
  {
    feature: "Recovery",
    fue: "It takes less time to heal post-treatment.",
    fut: "It takes a longer time to heal.",
  },
  {
    feature: "Cost",
    fue: "It is affordable, mid-range",
    fut: "The cost is on the higher end",
  },
];

export interface UltraComparisonProps {
  titlePart1?: string;
  titlePart2?: string;
  subtitle?: string;
  data?: ComparisonRow[];
}

export default function UltraComparison({
  titlePart1 = "Compare Hair Sub Ultra Dense Hair",
  titlePart2 = "Transplant Techniques",
  subtitle = "Understand the key differences before discussing your options with a specialist.",
  data = defaultComparisonData,
}: UltraComparisonProps) {
  return (
    <section className="w-full bg-white py-14 sm:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Section Header (Centered) ── */}
        <div className="text-center max-w-[900px] mx-auto mb-10 sm:mb-14">
          <h2 className="font-['Plus_Jakarta_Sans'] text-[22px] sm:text-[30px] md:text-[36px] lg:text-[40px] font-extrabold tracking-[-0.03em] leading-tight">
            <span className="text-[#001e56]">{titlePart1} </span>
            <span className="text-[#00A3FF]">{titlePart2}</span>
          </h2>
          <p className="mt-3.5 sm:mt-4 text-[#556987] font-['Plus_Jakarta_Sans'] text-[14px] sm:text-[15.5px] leading-[1.7] font-normal max-w-[680px] mx-auto">
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

        {/* ── Table System (Feature Column + FUE / FUT Columns) ── */}
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

            {/* ── Right Table: FUE vs FUT ── */}
            <div className="rounded-[22px] sm:rounded-[28px] bg-[#fbfdff] border border-[#d6ecfa] overflow-hidden flex flex-col shadow-xs">
              {/* Header: FUE / FUT */}
              <div className="bg-[#bce0fa] py-4 sm:py-5 grid grid-cols-2 min-h-[60px] sm:min-h-[64px] items-center text-center">
                <span className="font-['Plus_Jakarta_Sans'] text-[15.5px] sm:text-[17px] font-extrabold text-[#001e56]">
                  FUE
                </span>
                <span className="font-['Plus_Jakarta_Sans'] text-[15.5px] sm:text-[17px] font-extrabold text-[#001e56]">
                  FUT
                </span>
              </div>

              {/* Rows */}
              <div className="flex flex-col flex-1 divide-y divide-[#e3effa]">
                {data.map((row, idx) => (
                  <div
                    key={idx}
                    className="flex-1 min-h-[82px] sm:min-h-[90px] grid grid-cols-2 items-center text-center px-3 sm:px-6 py-3 divide-x divide-[#e8f1f8]"
                  >
                    {/* FUE cell */}
                    <div className="px-2 sm:px-4">
                      <p className="font-['Plus_Jakarta_Sans'] text-[13px] sm:text-[14px] text-[#556987] leading-relaxed">
                        {row.fue}
                      </p>
                    </div>

                    {/* FUT cell */}
                    <div className="px-2 sm:px-4">
                      <p className="font-['Plus_Jakarta_Sans'] text-[13px] sm:text-[14px] text-[#556987] leading-relaxed">
                        {row.fut}
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
