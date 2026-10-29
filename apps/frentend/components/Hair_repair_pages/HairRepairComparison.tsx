"use client";

import React from "react";

export interface HairRepairComparisonRow {
  feature: string;
  scarCamouflage: string;
  graftRemoval: string;
  densityCorrection: string;
}

const defaultComparisonData: HairRepairComparisonRow[] = [
  {
    feature: "Purpose",
    scarCamouflage: "Mixes visible scars with natural hair",
    graftRemoval: "Eradicates misplaced grafts",
    densityCorrection: "Adds grafts to thinning areas",
  },
  {
    feature: "Effectiveness",
    scarCamouflage: "Enhances appearance but doesn't fix grafts",
    graftRemoval: "Provides a natural look.",
    densityCorrection: "Provides a thick, natural look",
  },
  {
    feature: "Risk of side effects",
    scarCamouflage: "Very low",
    graftRemoval: "Slight risk of scarring",
    densityCorrection: "Low",
  },
  {
    feature: "Cost",
    scarCamouflage: "Moderate",
    graftRemoval: "High",
    densityCorrection: "Moderate",
  },
];

export interface HairRepairComparisonProps {
  titlePart1?: string;
  titlePart2?: string;
  subtitle?: string;
  data?: HairRepairComparisonRow[];
}

export default function HairRepairComparison({
  titlePart1 = "Compare of",
  titlePart2 = "Hair Transplant Repair Techniques",
  subtitle = "This comparison provides a clear overview of the key features of each technique, helping you choose the best option for your specific needs and goals",
  data = defaultComparisonData,
}: HairRepairComparisonProps) {
  return (
    <section className="w-full bg-white py-14 sm:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Section Header (Centered) ── */}
        <div className="text-center max-w-[900px] mx-auto mb-10 sm:mb-14">
          <h2 className="font-['Plus_Jakarta_Sans'] text-[24px] sm:text-[32px] md:text-[38px] lg:text-[44px] font-extrabold tracking-[-0.03em] leading-tight">
            <span className="text-[#001e56]">{titlePart1} </span>
            <span className="text-[#00A3FF]">{titlePart2}</span>
          </h2>
          <p className="mt-3.5 sm:mt-4 text-[#556987] font-['Plus_Jakarta_Sans'] text-[14px] sm:text-[15.5px] leading-[1.7] font-normal max-w-[700px] mx-auto">
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

        {/* ── Table System (Feature Column + 3 Technique Columns) ── */}
        <div className="w-full overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-sky-200">
          <div className="min-w-[840px] max-w-[1100px] mx-auto grid grid-cols-[200px_1fr] sm:grid-cols-[220px_1fr] lg:grid-cols-[240px_1fr] gap-3 sm:gap-6 items-stretch">
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
                    <span className="font-['Plus_Jakarta_Sans'] text-[14.5px] sm:text-[15.5px] font-bold text-[#001e56]">
                      {row.feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Right Pillar: 3 Technique Columns ── */}
            <div className="rounded-[22px] sm:rounded-[28px] bg-[#f4f9fd] border border-[#d6ecfa] overflow-hidden flex flex-col shadow-xs">
              {/* Table Header: 3 Columns */}
              <div className="bg-[#cfe7fa] grid grid-cols-3 divide-x divide-[#badcf7] min-h-[60px] sm:min-h-[64px]">
                <div className="flex items-center justify-center py-4 px-3 text-center">
                  <span className="font-['Plus_Jakarta_Sans'] text-[15.5px] sm:text-[17px] font-extrabold text-[#001e56]">
                    Scar Camouflage
                  </span>
                </div>
                <div className="flex items-center justify-center py-4 px-3 text-center">
                  <span className="font-['Plus_Jakarta_Sans'] text-[15.5px] sm:text-[17px] font-extrabold text-[#001e56]">
                    Graft Removal
                  </span>
                </div>
                <div className="flex items-center justify-center py-4 px-3 text-center">
                  <span className="font-['Plus_Jakarta_Sans'] text-[15.5px] sm:text-[17px] font-extrabold text-[#001e56]">
                    Density Correction
                  </span>
                </div>
              </div>

              {/* Table Data Rows */}
              <div className="flex flex-col flex-1 divide-y divide-[#dbe8f5]">
                {data.map((row, idx) => (
                  <div
                    key={idx}
                    className="grid grid-cols-3 divide-x divide-[#dbe8f5] flex-1 min-h-[82px] sm:min-h-[90px] hover:bg-[#ebf5fd]/60 transition-colors"
                  >
                    {/* Scar Camouflage */}
                    <div className="flex items-center justify-center text-center px-4 py-3.5">
                      <p className="font-['Plus_Jakarta_Sans'] text-[13px] sm:text-[14px] leading-relaxed text-[#556987]">
                        {row.scarCamouflage}
                      </p>
                    </div>

                    {/* Graft Removal */}
                    <div className="flex items-center justify-center text-center px-4 py-3.5">
                      <p className="font-['Plus_Jakarta_Sans'] text-[13px] sm:text-[14px] leading-relaxed text-[#556987]">
                        {row.graftRemoval}
                      </p>
                    </div>

                    {/* Density Correction */}
                    <div className="flex items-center justify-center text-center px-4 py-3.5">
                      <p className="font-['Plus_Jakarta_Sans'] text-[13px] sm:text-[14px] leading-relaxed text-[#556987]">
                        {row.densityCorrection}
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

