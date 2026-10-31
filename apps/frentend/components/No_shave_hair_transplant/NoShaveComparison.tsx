"use client";

import React from "react";

export interface ComparisonRow {
  feature: string;
  partialShave: string;
  noShave: string;
}

const defaultComparisonData: ComparisonRow[] = [
  {
    feature: "Donor Area",
    partialShave: "Partially shaved, most hair remains in place",
    noShave: "Entire scalp left unshaved, all hair maintained",
  },
  {
    feature: "Extraction",
    partialShave: "Faster due to improved visibility of follicles",
    noShave: "Performed with gentler movements using latest FUE techniques",
  },
  {
    feature: "Appearance",
    partialShave: "Subtle temporary changes, minimal downtime",
    noShave: "No visible signs of surgical removal",
  },
  {
    feature: "Suitability",
    partialShave:
      "Patients willing to shave a small section for easier handling of bald grafts",
    noShave:
      "Professionals or patients requiring maximum discretion and natural blending",
  },
];

export interface NoShaveComparisonProps {
  titlePart1?: string;
  titlePart2?: string;
  subtitle?: string;
  data?: ComparisonRow[];
}

export default function NoShaveComparison({
  titlePart1 = "Compare of",
  titlePart2 = "Unshaven Hair Transplant",
  subtitle = "This comparison provides a clear overview of the key features of each technique, helping you choose the best option for your specific needs and goals",
  data = defaultComparisonData,
}: NoShaveComparisonProps) {
  return (
    <section className="w-full bg-white py-14 sm:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Section Header ── */}
        <div className="text-center max-w-[840px] mx-auto mb-12 sm:mb-16">
          <h2 className="font-['Plus_Jakarta_Sans'] text-[26px] sm:text-[36px] lg:text-[44px] font-extrabold tracking-[-0.03em] leading-[1.18]">
            <span className="text-[#001e56]">{titlePart1} </span>
            <span className="text-[#00A3FF]">{titlePart2}</span>
          </h2>
          <p className="mt-3.5 sm:mt-4 text-[#556987] font-['Plus_Jakarta_Sans'] text-[14px] sm:text-[15.5px] leading-[1.65] font-normal max-w-[720px] mx-auto">
            {subtitle}
          </p>
        </div>

        {/* ── Comparison Table Layout ── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 items-stretch max-w-[1100px] mx-auto">
          {/* Feature Column (Left) */}
          <div className="md:col-span-4 rounded-[26px] sm:rounded-[30px] bg-[#d3ebfc] border border-[#bde0fe] overflow-hidden flex flex-col shadow-xs">
            <div className="p-5 sm:p-6 text-center border-b border-[#bde0fe]">
              <h3 className="font-['Plus_Jakarta_Sans'] text-[18px] sm:text-[20px] font-bold text-[#001e56]">
                Feature
              </h3>
            </div>
            <div className="flex-1 flex flex-col justify-around py-2 sm:py-3">
              {data.map((row, idx) => (
                <div
                  key={idx}
                  className="px-5 py-5 sm:py-6 text-center border-b last:border-b-0 border-[#bde0fe]/60 flex items-center justify-center min-h-[90px]"
                >
                  <span className="font-['Plus_Jakarta_Sans'] text-[15px] sm:text-[16px] font-bold text-[#001e56]">
                    {row.feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Techniques Comparison Columns (Right) */}
          <div className="md:col-span-8 rounded-[26px] sm:rounded-[30px] bg-white border border-[#cce5fc] overflow-hidden flex flex-col shadow-sm">
            {/* Header Row */}
            <div className="grid grid-cols-2 bg-[#bde0fe] text-center">
              <div className="p-5 sm:p-6 border-r border-[#a8d4fc]">
                <h3 className="font-['Plus_Jakarta_Sans'] text-[16px] sm:text-[18px] lg:text-[19px] font-bold text-[#001e56]">
                  Partial Shave Technique
                </h3>
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="font-['Plus_Jakarta_Sans'] text-[16px] sm:text-[18px] lg:text-[19px] font-bold text-[#001e56]">
                  No Shave Technique
                </h3>
              </div>
            </div>

            {/* Data Rows */}
            <div className="flex-1 flex flex-col justify-around divide-y divide-[#e2eefb]">
              {data.map((row, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-2 divide-x divide-[#e2eefb] items-center text-center p-4 sm:p-6 min-h-[90px]"
                >
                  <div className="px-3 sm:px-4">
                    <p className="font-['Plus_Jakarta_Sans'] text-[13px] sm:text-[14px] leading-relaxed text-[#556987]">
                      {row.partialShave}
                    </p>
                  </div>
                  <div className="px-3 sm:px-4">
                    <p className="font-['Plus_Jakarta_Sans'] text-[13px] sm:text-[14px] leading-relaxed text-[#556987]">
                      {row.noShave}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
