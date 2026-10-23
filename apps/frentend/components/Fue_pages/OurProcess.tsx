"use client";

import React from "react";
import { CalendarCheck, HeartPulse } from "lucide-react";

interface ProcessStep {
  step: string;
  title: string;
  description: string;
  tagLine1: string;
  tagLine2: string;
}

const steps: ProcessStep[] = [
  {
    step: "01",
    title: "Assessment and Extraction",
    description:
      "Evaluation of the donor site and extraction of follicles in a painless manner.",
    tagLine1: "Scalp analysis &",

    tagLine2: "personalised plan",
  },
  {
    step: "02",
    title: "Follicle Extraction",
    description:
      "Individual hair follicles are extracted from the donor area using a micro-punch tool.",
    tagLine1: "Precise,minimally",
    tagLine2: "invasive extraction",
  },
  {
    step: "03",
    title: "Graft Preservation",
    description:
      "Extracted follicles are carefully handled and preserved before implantation.",
    tagLine1: "Careful handling &",
    tagLine2: "Graft protection",
  },
  {
    step: "04",
    title: "Implantation",
    description:
      "Follicles are placed into the recipient area at planned angles and directions for a natural-looking result.",
    tagLine1: "Natural hairline &",
    tagLine2: "precise placement",
  },
  {
    step: "05",
    title: "Aftercare",
    description:
      "Post-procedure guidance and follow-up support help monitor healing and recovery..",
    tagLine1: "Healing support &",
    tagLine2: "recovery guidance",
  },
];

interface OurProcessProps {
  eyebrow?: string;
  titleLine1?: string;
  titleLine2?: string;
  description?: string;
}

export default function OurProcessFue({
  eyebrow = "OUR PROCESS",
  titleLine1 = "Procedure used in india",
  titleLine2 = "For male Hair Transplant",
  description = "The FUE Transplant is performed with precision and safety for painless procedures. The experts follow careful steps for graft survival and natural results.",
}: OurProcessProps) {
  return (
    <section className="w-full bg-white py-14 sm:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Top Header Section (2 Columns) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-10 sm:mb-14">
          {/* Left Column: Heading & Description */}
          <div className="lg:col-span-7 max-w-[560px]">
            <span className="font-['Plus_Jakarta_Sans'] text-[11.5px] sm:text-[13px] font-bold uppercase tracking-[0.22em] text-[#00A3FF] mb-2 sm:mb-3 block">
              {eyebrow}
            </span>
            <h2 className="font-['Plus_Jakarta_Sans'] text-[26px] sm:text-[36px] lg:text-[44px] font-extrabold tracking-[-0.03em] leading-[1.16]">
              <span className="text-[#001e56] block">{titleLine1}</span>
              <span className="text-[#00A3FF] block mt-1">{titleLine2}</span>
            </h2>
            <p className="mt-3.5 sm:mt-4 text-[#556987] font-['Plus_Jakarta_Sans'] text-[14px] sm:text-[15px] leading-[1.65] font-normal">
              {description}
            </p>
          </div>

          {/* Right Column: Floating Stat Cards with Geometric Contour */}
          <div className="lg:col-span-5 relative flex flex-col items-center lg:items-end justify-center min-h-[220px]">
            {/* Background Dotted Trajectory Line */}
            <div
              className="absolute inset-0 pointer-events-none select-none"
              aria-hidden="true"
            >
              <svg
                className="w-full h-full"
                viewBox="0 0 380 220"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M 60 50 L 190 20 L 330 20 L 350 110 L 250 180 L 130 190 L 70 120"
                  stroke="#38bdf8"
                  strokeWidth="1.2"
                  strokeDasharray="4 4"
                  strokeOpacity="0.6"
                />
              </svg>
            </div>

            {/* Floating Card 1: 3 Week Recovery (With 4 Corner Handles) */}
            <div className="relative z-10 self-center lg:self-center mb-5 w-[210px] sm:w-[220px]">
              <span className="absolute -top-1.5 -left-1.5 w-3.5 h-3.5 rounded-full border-2 border-[#00A3FF] bg-white shadow-xs z-20" />
              <span className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 rounded-full border-2 border-[#00A3FF] bg-white shadow-xs z-20" />
              <span className="absolute -bottom-1.5 -left-1.5 w-3.5 h-3.5 rounded-full border-2 border-[#00A3FF] bg-white shadow-xs z-20" />
              <span className="absolute -bottom-1.5 -right-1.5 w-3.5 h-3.5 rounded-full border-2 border-[#00A3FF] bg-white shadow-xs z-20" />

              {/* Card Inner */}
              <div className="flex items-center gap-3.5 px-4 py-3 rounded-[18px] bg-white/95 backdrop-blur-xs border border-[#00A3FF]/40 shadow-[0_8px_24px_rgba(0,163,255,0.14)]">
                <div className="w-10 h-10 rounded-xl bg-[#001e56] text-white flex items-center justify-center shrink-0 shadow-xs">
                  <CalendarCheck className="w-5 h-5 text-white" strokeWidth={2.2} />
                </div>
                <div className="flex flex-col">
                  <span className="font-['Plus_Jakarta_Sans'] text-[20px] font-extrabold text-[#001e56] leading-none">
                    5
                  </span>
                  <span className="font-['Plus_Jakarta_Sans'] text-[12px] font-medium text-[#556987] mt-0.5">
                    Week Recovery
                  </span>
                </div>
              </div>
            </div>

            {/* Floating Card 2: Minimal Pain */}
            <div className="relative z-10 self-center lg:self-end mr-0 lg:mr-8 w-[190px] sm:w-[200px]">
              <div className="flex items-center gap-3 px-4 py-3 rounded-[18px] bg-[#f0f7fe] border border-white shadow-[0_8px_20px_rgba(3,30,80,0.06)]">
                <div className="w-10 h-10 rounded-xl bg-[#001e56] text-white flex items-center justify-center shrink-0 shadow-xs">
                  <HeartPulse className="w-5 h-5 text-white" strokeWidth={2.2} />
                </div>
                <div className="flex flex-col">
                  <span className="font-['Plus_Jakarta_Sans'] text-[15px] font-bold text-[#001e56] leading-tight">
                    Minimal
                  </span>
                  <span className="font-['Plus_Jakarta_Sans'] text-[12px] font-medium text-[#556987]">
                    Pain
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Main Process Card (Large Dark Navy Box) ── */}
        <div className="relative rounded-[22px] sm:rounded-[32px] bg-[#001e56] shadow-[0_20px_50px_rgba(0,30,86,0.3)] p-5 sm:p-9 lg:p-12 overflow-hidden">
          <div className="space-y-6 sm:space-y-8 lg:space-y-10">
            {steps.map((item, idx) => {
              const isLast = idx === steps.length - 1;
              return (
                <div
                  key={item.step}
                  className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5 lg:gap-8 group"
                >
                  {/* Left + Middle: Step Number, Timeline Connector, Title, Description */}
                  <div className="flex items-start gap-3.5 sm:gap-6 flex-1 min-w-0">
                    {/* Number Circle & Vertical Timeline Connector */}
                    <div className="relative flex flex-col items-center shrink-0">
                      {/* Step Circle */}
                      <div className="relative z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#dff2fe] text-[#001e56] font-['Plus_Jakarta_Sans'] font-extrabold text-[14px] sm:text-[16px] flex items-center justify-center shadow-xs">
                        {item.step}
                      </div>

                      {/* Dashed Timeline Connector Line with Glowing Cyan Dot */}
                      {!isLast && (
                        <div
                          className="w-[2px] h-14 sm:h-20 border-l-2 border-dashed border-[#00A3FF]/40 relative my-1 sm:my-1.5 flex items-center justify-center"
                          aria-hidden="true"
                        >
                          {/* Cyan Dot on Timeline */}
                          <span className="absolute w-2 h-2 rounded-full bg-[#00A3FF] shadow-[0_0_8px_#00A3FF] -left-[3px]" />
                        </div>
                      )}
                    </div>

                    {/* Step Content */}
                    <div className="flex-1 min-w-0 pt-0.5 sm:pt-1">
                      <h3 className="font-['Plus_Jakarta_Sans'] text-[16px] sm:text-[19px] font-bold text-[#00A3FF] tracking-tight">
                        {item.title}
                      </h3>
                      <p className="font-['Plus_Jakarta_Sans'] text-[13px] sm:text-[14.5px] leading-relaxed text-[#cbd5e1] mt-1.5 sm:mt-2 max-w-[580px]">
                        {item.description}
                      </p>

                      {/* Subtle Horizontal Divider */}
                      <div
                        className="w-full max-w-[580px] h-[1px] bg-white/10 mt-4 sm:mt-6"
                        aria-hidden="true"
                      />
                    </div>
                  </div>

                  {/* Right Tag Pill */}
                  <div className="w-full md:w-auto shrink-0 pl-[52px] sm:pl-[72px] md:pl-0">
                    <div className="w-full md:w-[210px] lg:w-[230px] rounded-[16px] sm:rounded-[18px] bg-white/[0.07] hover:bg-white/[0.1] border border-white/12 px-4 py-3 sm:px-5 sm:py-4 text-center transition-colors duration-200">
                      <span className="font-['Plus_Jakarta_Sans'] text-[12.5px] sm:text-[14px] text-white/90 font-medium block leading-snug">
                        {item.tagLine1}
                      </span>
                      <span className="font-['Plus_Jakarta_Sans'] text-[12.5px] sm:text-[14px] text-white/90 font-medium block leading-snug">
                        {item.tagLine2}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
