"use client";

import React, { useState } from "react";
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
    title: "Consultation and assessment",
    description:
      "A proper scalp analysis is crucial to assess the procedure's suitability.",
    tagLine1: "Scalp analysis &",
    tagLine2: "personalised plan",
  },
  {
    step: "02",
    title: "Pre-made slits creation",
    description:
      "Slits are created before the procedure by customizable slit making blades that vary according to the patient's hair graft thickness.",
    tagLine1: "Custom-made",
    tagLine2: "slits",
  },
  {
    step: "03",
    title: "Safe Extraction",
    description:
      "Sapphire punches create holes while grafts remain attached to the skin, maintaining blood supply and reducing exposure.",
    tagLine1: "Precise & safe",
    tagLine2: "graft extraction",
  },
  {
    step: "04",
    title: "Careful Implantation",
    description:
      "The extracted hair grafts are loaded into the SAVA implanter and implanted at the pre-made slits at 10× magnification for a precision-guided implantation.",
    tagLine1: "Natural hairline &",
    tagLine2: "precise implantation",
  },
];

interface OurprocessQhtProps {
  eyebrow?: string;
  titleLine1?: string;
  titleLine2?: string;
  description?: string;
  stepsList?: ProcessStep[];
  stat1Number?: string | number;
  stat1Text?: string;
  stat2Title?: string;
  stat2Text?: string;
}

export default function OurprocessQht({
  eyebrow = "OUR PROCESS",
  titleLine1 = "Procedure used in india",
  titleLine2 = "For male Hair Transplant",
  description = "QHT Technique involves consultation and scalp assessment, creation of slits before the procedure, followed by extraction and implantation.",
  stepsList = steps,
  stat1Number = "3",
  stat1Text = "Week Recovery",
  stat2Title = "Minimal",
  stat2Text = "Pain",
}: OurprocessQhtProps) {
  const [activeStep, setActiveStep] = useState<number>(0);

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
            {/* Background Dotted Geometric Contour Line */}
            <div
              className="absolute inset-0 pointer-events-none select-none"
              aria-hidden="true"
            >
              <svg
                className="w-full h-full overflow-visible"
                viewBox="0 0 400 240"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M 25 65 L 55 12 L 115 2 L 130 26 M 235 60 L 260 70 L 260 95 L 325 95 L 325 135 L 365 145 L 380 180 L 370 245 L 340 240 M 180 185 L 160 185 L 130 150 L 65 153 L 25 65"
                  stroke="#7eb5df"
                  strokeWidth="1.3"
                  strokeDasharray="4 4"
                  strokeOpacity="0.8"
                />
              </svg>
            </div>

            {/* Floating Card 1: Week Recovery */}
            <div className="relative z-10 self-center lg:self-start ml-0 lg:ml-6 mb-6 w-[220px] sm:w-[235px]">
              <div className="flex items-center gap-4 px-5 py-3.5 rounded-[22px] bg-[#f0f6fc] border border-white shadow-[0_8px_24px_rgba(3,30,80,0.06)]">
                {/* Solid Blue Calendar Icon with White Checkmark */}
                <div className="shrink-0 flex items-center justify-center">
                  <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
                    <rect x="9" y="1" width="3.5" height="5" rx="1.75" fill="#003cb3" />
                    <rect x="27.5" y="1" width="3.5" height="5" rx="1.75" fill="#003cb3" />
                    <rect x="3" y="3.5" width="34" height="33" rx="7" fill="#003cb3" />
                    <line
                      x1="3"
                      y1="12"
                      x2="37"
                      y2="12"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeOpacity="0.3"
                    />
                    <path
                      d="M13 23.5 L17.5 28 L27 18.5"
                      stroke="white"
                      strokeWidth="3.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="font-['Plus_Jakarta_Sans'] text-[24px] sm:text-[26px] font-extrabold text-[#001e56] leading-none">
                    {stat1Number}
                  </span>
                  <span className="font-['Plus_Jakarta_Sans'] text-[12.5px] sm:text-[13px] font-medium text-[#556987] mt-1">
                    {stat1Text}
                  </span>
                </div>
              </div>
            </div>

            {/* Floating Card 2: Minimal Pain */}
            <div className="relative z-10 self-center lg:self-end mr-0 lg:mr-2 w-[220px] sm:w-[235px]">
              <div className="flex items-center gap-4 px-5 py-3.5 rounded-[22px] bg-[#f0f6fc] border border-white shadow-[0_8px_24px_rgba(3,30,80,0.06)]">
                {/* Solid Navy Heart with White Cardiogram Pulse */}
                <div className="shrink-0 flex items-center justify-center">
                  <svg className="w-10 h-10" viewBox="0 0 44 44" fill="none">
                    <path
                      d="M22 38.5 C22 38.5 4 27.5 4 14.5 C4 8.5 8.5 4 14.5 4 C18.2 4 21.5 6.2 22 7.5 C22.5 6.2 25.8 4 29.5 4 C35.5 4 40 8.5 40 14.5 C40 27.5 22 38.5 22 38.5 Z"
                      fill="#001e56"
                    />
                    <path
                      d="M4 21.5 H13.5 L16.5 17.5 L19.5 25.5 L23.5 13.5 L27.5 28.5 L30.5 21.5 H40"
                      stroke="white"
                      strokeWidth="2.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="font-['Plus_Jakarta_Sans'] text-[17px] sm:text-[18px] font-bold text-[#001e56] leading-tight">
                    {stat2Title}
                  </span>
                  <span className="font-['Plus_Jakarta_Sans'] text-[12.5px] sm:text-[13px] font-medium text-[#556987]">
                    {stat2Text}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Main Process Card (Large Dark Navy Box) ── */}
        <div className="relative rounded-[22px] sm:rounded-[32px] bg-[#001e56] shadow-[0_20px_50px_rgba(0,30,86,0.3)] p-5 sm:p-9 lg:p-12 overflow-hidden">
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
                        {/* Cyan Dot on Timeline */}
                        <span className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#00A3FF] shadow-[0_0_8px_#00A3FF]" />
                      </div>
                    )}
                  </div>

                  {/* Right Column: Step Content & Tag Pill */}
                  <div
                    className={`flex-1 min-w-0 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 lg:gap-8 ${
                      !isLast ? "pb-6 sm:pb-8 lg:pb-10" : "pb-0"
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
                      <div
                        className="w-full max-w-[580px] h-[1px] bg-white/10 mt-4 sm:mt-6"
                        aria-hidden="true"
                      />
                    </div>

                    {/* Right Tag Pill */}
                    <div className="w-full md:w-auto shrink-0">
                      <div
                        className={`w-full md:w-[210px] lg:w-[230px] rounded-[16px] sm:rounded-[18px] px-4 py-3 sm:px-5 sm:py-4 text-center transition-all duration-200 ${isActive
                          ? "bg-[#0052FF] text-white shadow-[0_4px_16px_rgba(0,82,255,0.4)]"
                          : "bg-[#0a235c] text-white/85 border border-white/10 hover:bg-[#0d2d75]"
                          }`}
                      >
                        <span className="font-['Plus_Jakarta_Sans'] text-[12.5px] sm:text-[14px] font-medium block leading-snug">
                          {item.tagLine1}
                        </span>
                        <span className="font-['Plus_Jakarta_Sans'] text-[12.5px] sm:text-[14px] font-medium block leading-snug">
                          {item.tagLine2}
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
