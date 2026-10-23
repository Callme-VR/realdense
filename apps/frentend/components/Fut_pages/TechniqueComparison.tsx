"use client";

import React from "react";

/* ── Comparison Row Interface ── */

interface ComparisonRow {
  feature: string;
  fut: string;
  fue: string;
  qht: string;
}

const comparisonData: ComparisonRow[] = [
  {
    feature: "Extraction method",
    fue: "Individual follicular units extracted one by one",
    fut: "A thin donor strip is removed and dissected into grafts",
    qht: "Technique depends on the clinic's specific QHT protocol",
  },
  {
    feature: "Scarring",
    fue: "Small dot-like marks",
    fut: "A linear donor scar",
    qht: "Depends on the extraction method used",
  },
  {
    feature: "Graft yield",
    fue: "Depends on donor capacity and treatment plan",
    fut: "Can provide a high graft count in one session",
    qht: "Depends on donor capacity and treatment plan",
  },
  {
    feature: "Recovery",
    fue: "Often shorter donor-area recovery",
    fut: "Includes strip-wound and suture healing",
    qht: "Depends on the technique performed",
  },
  {
    feature: "Best suited for",
    fue: "Patients suited to individual follicle extraction",
    fut: "Some patients needing a larger graft session",
    qht: "Determined after an individual assessment",
  },
  {
    feature: "Key consideration",
    fue: "Requires shaving in many cases; options vary",
    fut: "Linear scar and suture care should be considered",
    qht: "Ask the clinic to explain exactly how the method differs.",
  },
];

export interface TechniqueComparisonProps {
  titlePart1?: string;
  titlePart2?: string;
  subtitle?: string;
  data?: ComparisonRow[];
}

export default function TechniqueComparison({
  titlePart1 = "Compare Hair Transplant Techniques",
  titlePart2 = "FUE vs FUT vs QHT",
  subtitle = "Understand the key differences before discussing your options with a specialist.",
  data = comparisonData,
}: TechniqueComparisonProps) {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-28 overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* ══════════════════════════════════════
            HEADER: Centered Title & Subtitle (Single Line)
        ══════════════════════════════════════ */}
        <div className="text-center max-w-[1100px] mx-auto mb-10 sm:mb-14">
          <h2 className="font-['Plus_Jakarta_Sans'] text-[20px] sm:text-[28px] md:text-[34px] lg:text-[38px] xl:text-[42px] font-extrabold tracking-[-0.03em] leading-tight md:whitespace-nowrap">
            <span className="text-[#001e56]">{titlePart1} </span>
            <span className="text-[#00A3FF]">{titlePart2}</span>
          </h2>
          <p className="mt-3 sm:mt-4 text-[#556987] font-['Plus_Jakarta_Sans'] text-[14.5px] sm:text-[15.5px] leading-[1.7] font-normal max-w-[680px] mx-auto">
            {subtitle}
          </p>
        </div>

        {/* ══════════════════════════════════════
            TABLE SYSTEM:
            Left: Feature Pillar Card
            Right: FUE vs FUT vs QHT Table Card
        ══════════════════════════════════════ */}
        {/* Mobile scroll hint */}
        <div className="flex md:hidden items-center justify-end text-[11px] font-bold text-[#00A3FF] mb-2 gap-1 tracking-wider uppercase">
          <span>Scroll table</span>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2.5 6H9.5M6.5 3L9.5 6L6.5 9" />
          </svg>
        </div>

        <div className="w-full overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-sky-200">
          <div className="min-w-[780px] sm:min-w-[840px] grid grid-cols-[200px_1fr] sm:grid-cols-[240px_1fr] lg:grid-cols-[270px_1fr] gap-3 sm:gap-6 items-stretch">

            {/* ── Left Pillar: Feature Column ── */}
            <div className="rounded-[24px] sm:rounded-[28px] bg-[#edf5fb] border border-[#d6ecfa] overflow-hidden flex flex-col shadow-xs">
              {/* Header */}
              <div className="bg-[#cfe7fa] py-4 sm:py-5 flex items-center justify-center min-h-[64px]">
                <span className="font-['Plus_Jakarta_Sans'] text-[16px] sm:text-[17.5px] font-extrabold text-[#001e56]">
                  Feature
                </span>
              </div>

              {/* Rows */}
              <div className="flex flex-col flex-1 divide-y divide-[#dbe8f5]">
                {data.map((row, idx) => (
                  <div
                    key={idx}
                    className="flex-1 min-h-[92px] sm:min-h-[96px] flex items-center justify-center text-center px-4 py-4"
                  >
                    <span className="font-['Plus_Jakarta_Sans'] text-[14.5px] sm:text-[15.5px] font-bold text-[#001e56]">
                      {row.feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Right Table: FUE vs FUT vs QHT ── */}
            <div className="rounded-[24px] sm:rounded-[28px] bg-[#fbfdff] border border-[#d6ecfa] overflow-hidden flex flex-col shadow-xs">
              {/* Header: FUE / FUT / QHT */}
              <div className="bg-[#bce0fa] py-4 sm:py-5 grid grid-cols-3 min-h-[64px] items-center text-center">
                <span className="font-['Plus_Jakarta_Sans'] text-[16px] sm:text-[17.5px] font-extrabold text-[#001e56]">
                  FUE
                </span>
                <span className="font-['Plus_Jakarta_Sans'] text-[16px] sm:text-[17.5px] font-extrabold text-[#001e56]">
                  FUT
                </span>
                <span className="font-['Plus_Jakarta_Sans'] text-[16px] sm:text-[17.5px] font-extrabold text-[#001e56]">
                  QHT
                </span>
              </div>

              {/* Rows */}
              <div className="flex flex-col flex-1 divide-y divide-[#e3effa]">
                {data.map((row, idx) => (
                  <div
                    key={idx}
                    className="flex-1 min-h-[92px] sm:min-h-[96px] grid grid-cols-3 items-center text-center px-3 sm:px-6 py-4 divide-x divide-[#e8f1f8]"
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

                    {/* QHT cell */}
                    <div className="px-2 sm:px-4">
                      <p className="font-['Plus_Jakarta_Sans'] text-[13px] sm:text-[14px] text-[#556987] leading-relaxed">
                        {row.qht}
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
