"use client";

import React from "react";

export interface NoShaveStepItem {
  step: number;
  title: string;
  description: string;
}

const defaultSteps: NoShaveStepItem[] = [
  {
    step: 1,
    title: "Avoid Substances",
    description:
      "Don't take blood-thinning medications, drink alcohol, or smoke before a QHT Unshaven Hair Transplant.",
  },
  {
    step: 2,
    title: "Hair Length",
    description:
      "Individuals seeking a No-Shave Hair Transplant have to grow their hair at least to the shoulder length.",
  },
  {
    step: 3,
    title: "Dietary Instructions",
    description:
      "Follow your diet plan from your surgeon for your Unshaven Hair Transplant.",
  },
  {
    step: 4,
    title: "Rest & Hydration",
    description:
      "Rest well and stay hydrated to assist in recovery.",
  },
];

export interface NoShaveStepProcedureProps {
  eyebrow?: string;
  titleLine1?: string;
  titleAccent?: string;
  titleLine2?: string;
  description?: string;
  steps?: NoShaveStepItem[];
}

export default function NoShaveStepProcedure({
  eyebrow = "STEP BY STEP",
  titleLine1 = "Procedure for",
  titleAccent = "Unshaven",
  titleLine2 = "Hair Transplant",
  description = "Proper preparation is vital for achieving the best results and minimizing recovery time before a QHT Unshaven Hair Transplant.",
  steps = defaultSteps,
}: NoShaveStepProcedureProps) {
  return (
    <section className="w-full bg-white py-14 sm:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start mb-12 sm:mb-16">
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

          <div className="lg:col-span-6 lg:pt-8">
            <p className="text-[#556987] font-['Plus_Jakarta_Sans'] text-[14px] sm:text-[15.5px] lg:text-[16px] leading-[1.7] font-normal max-w-[560px]">
              {description}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-8 lg:gap-8">
          {steps.map((item) => (
            <div
              key={item.step}
              className="flex flex-col items-center text-center px-2 group"
            >
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

              <h3 className="font-['Plus_Jakarta_Sans'] text-[16.5px] sm:text-[17.5px] font-bold text-[#001e56] mb-2 sm:mb-2.5 tracking-[-0.01em] min-h-[44px] flex items-center justify-center">
                {item.title}
              </h3>

              <p className="font-['Plus_Jakarta_Sans'] text-[13px] sm:text-[13.5px] leading-[1.65] text-[#556987]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

