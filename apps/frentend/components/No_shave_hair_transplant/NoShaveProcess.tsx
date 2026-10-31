"use client";

import React, { useState } from "react";
import { CalendarCheck, HeartPulse } from "lucide-react";

export interface NoShaveProcessStep {
  step: string;
  title: string;
  description: string;
  tag: string;
}

const defaultSteps: NoShaveProcessStep[] = [
  {
    step: "01",
    title: "Donor Identification",
    description:
      "The donor follicles are assessed and identified for harvesting.",
    tag: "Donor Follicles",
  },
  {
    step: "02",
    title: "Graft Extraction",
    description:
      "We uses magnified lenses and ultra-fine sapphire punches for faster extraction and improved graft survival.",
    tag: "Faster Extraction",
  },
  {
    step: "03",
    title: "Recipient Preparation",
    description:
      "The thinning areas will be prepared for implantation.",
    tag: "Thinning",
  },
  {
    step: "04",
    title: "Implantation",
    description:
      "Grafts are implanted naturally to blend seamlessly with existing hair.",
    tag: "Grafts Implantation",
  },
  {
    step: "05",
    title: "Limited Aftercare",
    description:
      "The transplant requires very little aftercare and will produce a dense, long-lasting outcome.",
    tag: "Aftercare",
  },
];

export interface NoShaveProcessProps {
  eyebrow?: string;
  titleLine1?: string;
  titleLine2?: string;
  description?: string;
  stepsList?: NoShaveProcessStep[];
}

export default function NoShaveProcess({
  eyebrow = "OUR PROCESS",
  titleLine1 = "Procedure used in india",
  titleLine2 = "For Unshaven Hair Transplant in India",
  description = "The Unshaven Hair Transplant in India replaces hair without complete shaving, giving a natural look and appearance, with little downtime.",
  stepsList = defaultSteps,
}: NoShaveProcessProps) {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section className="w-full bg-white py-14 sm:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Top Header Section (2 Columns) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-10 sm:mb-14">
          {/* Left Column: Heading & Description */}
          <div className="lg:col-span-7 max-w-[580px]">
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

            {/* Floating Card 1: 5 Week Recovery */}
            <div className="relative z-10 self-center lg:self-center mb-5 w-[210px] sm:w-[220px]">
              <div className="flex items-center gap-3.5 px-4 py-3 rounded-[18px] bg-[#f0f7fe] border border-white shadow-[0_8px_20px_rgba(3,30,80,0.06)]">
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

            {/* Floating Card 2: 1 Procedure Lasting Results */}
            <div className="relative z-10 self-center lg:self-end mr-0 lg:mr-8 w-[210px] sm:w-[230px]">
              <div className="flex items-center gap-3 px-4 py-3 rounded-[18px] bg-[#f0f7fe] border border-white shadow-[0_8px_20px_rgba(3,30,80,0.06)]">
                <div className="w-10 h-10 rounded-xl bg-[#001e56] text-white flex items-center justify-center shrink-0 shadow-xs">
                  <HeartPulse className="w-5 h-5 text-white" strokeWidth={2.2} />
                </div>
                <div className="flex flex-col">
                  <span className="font-['Plus_Jakarta_Sans'] text-[15px] font-extrabold text-[#001e56] leading-tight">
                    1 Procedure
                  </span>
                  <span className="font-['Plus_Jakarta_Sans'] text-[12px] font-medium text-[#556987]">
                    Lasting Results
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Main Process Card (Large Dark Navy Box) ── */}
        <div className="relative rounded-[22px] sm:rounded-[32px] bg-[#0c235c] shadow-[0_20px_50px_rgba(0,30,86,0.3)] p-5 sm:p-9 lg:p-12 overflow-hidden">
          <div className="flex flex-col">
            {stepsList.map((item, idx) => {
              const isLast = idx === stepsList.length - 1;
              const isActive = activeStep === idx;

              return (
                <div
                  key={item.step}
                  onClick={() => setActiveStep(idx)}
                  onMouseEnter={() => setActiveStep(idx)}
                  className="flex items-stretch gap-3.5 sm:gap-6 group cursor-pointer"
                >
                  {/* Left Column: Number Circle & Vertical Timeline Connector */}
                  <div className="relative flex flex-col items-center shrink-0 self-stretch">
                    {/* Step Circle */}
                    <div
                      className={`relative z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full font-['Plus_Jakarta_Sans'] font-extrabold text-[14px] sm:text-[16px] flex items-center justify-center transition-all duration-200 ${isActive
                          ? "bg-[#0052FF] text-white shadow-[0_4px_16px_rgba(0,82,255,0.5)]"
                          : "bg-[#dff2fe] text-[#001e56] shadow-[0_4px_10px_rgba(0,0,0,0.2)]"
                        }`}
                    >
                      {item.step}
                    </div>

                    {/* Dashed Timeline Connector Line with Cyan Dot */}
                    {!isLast && (
                      <div
                        className="w-0 flex-1 relative flex items-center justify-center my-0"
                        style={{ borderLeft: "1px dashed #FFFFFF" }}
                        aria-hidden="true"
                      >
                        <span className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#00A3FF] shadow-[0_0_8px_#00A3FF]" />
                      </div>
                    )}
                  </div>

                  {/* Right Column: Step Content & Tag Pill */}
                  <div
                    className={`flex-1 min-w-0 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 lg:gap-8 ${!isLast ? "pb-6 sm:pb-8 lg:pb-10" : "pb-0"
                      }`}
                  >
                    {/* Step Content */}
                    <div className="flex-1 min-w-0 pt-0.5 sm:pt-1">
                      <h3 className="font-['Plus_Jakarta_Sans'] text-[16px] sm:text-[19px] font-bold text-[#00A3FF] tracking-tight">
                        {item.title}
                      </h3>
                      <p className="font-['Plus_Jakarta_Sans'] text-[13px] sm:text-[14.5px] leading-relaxed text-[#cbd5e1] mt-1.5 sm:mt-2 max-w-[580px]">
                        {item.description}
                      </p>

                      {/* Subtle Horizontal Divider */}
                      {!isLast && (
                        <div
                          className="w-full max-w-[580px] h-[1px] bg-white/10 mt-4 sm:mt-6"
                          aria-hidden="true"
                        />
                      )}
                    </div>

                    {/* Tag Box on Right */}
                    <div className="w-full md:w-auto shrink-0 flex justify-start md:justify-end">
                      <div
                        className={`w-full md:w-[220px] rounded-xl px-5 py-4 text-center transition-all duration-200 border ${isActive
                            ? "bg-[#0052FF] text-white border-[#0052FF] shadow-[0_4px_20px_rgba(0,82,255,0.45)]"
                            : "bg-[#152e6e] text-white/90 border-white/10 group-hover:bg-[#1b3984] group-hover:border-[#00A3FF]/40"
                          }`}
                      >
                        <span className="font-['Plus_Jakarta_Sans'] text-[14px] sm:text-[15px] font-semibold text-white">
                          {item.tag}
                        </span>
                      </div>
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
