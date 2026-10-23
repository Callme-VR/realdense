"use client";

import React from "react";

export interface StepItem {
  step: number;
  title: string;
  description: string;
}

const stepsData: StepItem[] = [
  {
    step: 1,
    title: "Avoid Alcohol and Smoking",
    description:
      "Avoid smoking and alcohol intake at least 7 days before surgery, which may alter the flow of blood and the healing process.",
  },
  {
    step: 2,
    title: "Stop Blood Thinners when Advised.",
    description:
      "If you're taking any blood-thinning medicines, the doctor may ask you to pause them for a few days to avoid extra bleeding during the procedure.",
  },
  {
    step: 3,
    title: "Wash Hair on Surgery Day",
    description:
      "On surgery day, wash your hair with a gentle shampoo to keep the scalp fresh and reduce infection chances.",
  },
  {
    step: 4,
    title: "Talk With Your Surgeon about Hairline Design.",
    description:
      "Consult with your surgeon thoroughly to make the final decision about the hairline design and density to make sure that it fits your requirements and isn't looking artificial.",
  },
];

export interface StepByStepProcedureFueProps {
  eyebrow?: string;
  titleLine1?: string;
  titleAccent?: string;
  titleLine2?: string;
  description?: string;
  steps?: StepItem[];
}

export default function StepByStepProcedureFue({
  eyebrow = "STEP BY STEP",
  titleLine1 = "Procedure for",
  titleAccent = "FUE",
  titleLine2 = "Hair Transplant in India",
  description = "Scheduling your procedure in advance can be one way of ensuring a smooth surgery and good results. These are the core steps to be taken by patients:",
  steps = stepsData,
}: StepByStepProcedureFueProps) {
  return (
    <section className="w-full bg-white py-14 sm:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Top Header Section (Split Layout) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start mb-10 sm:mb-14 lg:mb-16">
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

        {/* ── 4-Step Horizontal Grid Progression ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-8">
          {steps.map((item) => (
            <div
              key={item.step}
              className="flex flex-col items-start text-left group"
            >
              {/* Step Circle Badge */}
              <div
                style={{
                  background:
                    "linear-gradient(180deg, #B5DAEF 0%, #FFFFFF 100%)",
                  boxShadow:
                    "inset 0px -3px 4px rgba(5, 78, 116, 0.44), inset 0px 2.62px 7.86px #8DD8FF",
                }}
                className="w-14 h-14 sm:w-16 sm:h-16 lg:w-[72px] lg:h-[72px] rounded-full flex items-center justify-center font-['Plus_Jakarta_Sans'] font-extrabold text-[#001e56] text-[18px] sm:text-[20px] lg:text-[22px] mb-5 sm:mb-6 transition-transform duration-200 group-hover:scale-105 select-none"
              >
                {item.step}
              </div>

              {/* Step Title */}
              <h3 className="font-['Plus_Jakarta_Sans'] text-[15.5px] sm:text-[16.5px] font-bold text-[#001e56] leading-snug mb-2.5 tracking-[-0.01em]">
                {item.title}
              </h3>

              {/* Step Description */}
              <p className="font-['Plus_Jakarta_Sans'] text-[13px] sm:text-[13.5px] leading-[1.65] text-[#556987] font-normal">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
