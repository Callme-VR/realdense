"use client";

import React from "react";

export interface StepItem {
  step: number;
  title: string;
  description: string;
}

const defaultSteps: StepItem[] = [
  {
    step: 1,
    title: "Donor Area Analysis",
    description:
      "Extraction from the safer donor zone is necessary to avoid future hair loss.",
  },
  {
    step: 2,
    title: "No smoking or Alcohol",
    description:
      "Say no to smoking and alcohol before the procedure.",
  },
  {
    step: 3,
    title: "Avoid certain medications",
    description:
      "Consult your doctor in case of using any medications, especially blood thinners.",
  },
  {
    step: 4,
    title: "Maintain scalp health",
    description:
      "Wash your hair and keep your scalp clean.",
  },
];

export interface UltraStepProcedureProps {
  eyebrow?: string;
  titleLine1?: string;
  titleAccent?: string;
  titleLine2?: string;
  description?: string;
  steps?: StepItem[];
}

export default function UltraStepProcedure({
  eyebrow = "STEP BY STEP",
  titleLine1 = "Procedure for",
  titleAccent = "Ultra Dense",
  titleLine2 = "Hair Transplant in India",
  description = "For attaining the best results, it is recommended to follow the tips discussed below to achieve the best results.",
  steps = defaultSteps,
}: UltraStepProcedureProps) {
  return (
    <section className="w-full bg-white py-14 sm:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Top Header Section (Split Layout) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start mb-12 sm:mb-16">
          {/* Left Column: Eyebrow + Heading */}
          <div className="lg:col-span-6">
            <span className="font-['Plus_Jakarta_Sans'] text-[11.5px] sm:text-[13px] font-bold uppercase tracking-[0.22em] text-[#00A3FF] mb-2 sm:mb-3 block">
              {eyebrow}
            </span>
            <h2 className="font-['Plus_Jakarta_Sans'] text-[26px] sm:text-[36px] lg:text-[44px] font-extrabold tracking-[-0.03em] leading-[1.18]">
              <span className="text-[#001e56]">{titleLine1} </span>
              <span className="text-[#00A3FF]">{titleAccent}</span>
              <br className="hidden sm:inline" />{" "}
              <span className="text-[#001e56]">{titleLine2}</span>
            </h2>
          </div>

          {/* Right Column: Description */}
          <div className="lg:col-span-6 lg:pt-8">
            <p className="text-[#556987] font-['Plus_Jakarta_Sans'] text-[14px] sm:text-[15.5px] lg:text-[16px] leading-[1.7] font-normal max-w-[560px]">
              {description}
            </p>
          </div>
        </div>

        {/* ── 4-Step Centered Horizontal Grid Progression ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-8 lg:gap-8">
          {steps.map((item) => (
            <div
              key={item.step}
              className="flex flex-col items-center text-center px-2 group"
            >
              {/* Step Circle Badge */}
              <div
                style={{
                  background:
                    "linear-gradient(180deg, #B5DAEF 0%, #FFFFFF 100%)",
                  boxShadow:
                    "inset 0px -3px 4px rgba(5, 78, 116, 0.44), inset 0px 2.62px 7.86px #8DD8FF",
                }}
                className="w-14 h-14 sm:w-16 sm:h-16 lg:w-[68px] lg:h-[68px] rounded-full flex items-center justify-center font-['Plus_Jakarta_Sans'] font-extrabold text-[#001e56] text-[18px] sm:text-[20px] lg:text-[22px] mb-5 sm:mb-6 transition-transform duration-200 group-hover:scale-105 select-none"
              >
                {item.step}
              </div>

              {/* Step Title */}
              <h3 className="font-['Plus_Jakarta_Sans'] text-[16px] sm:text-[17px] font-bold text-[#001e56] leading-snug mb-2.5 tracking-[-0.01em]">
                {item.title}
              </h3>

              {/* Step Description */}
              <p className="font-['Plus_Jakarta_Sans'] text-[13px] sm:text-[13.5px] leading-[1.65] text-[#556987] font-normal max-w-[260px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
