"use client";

import React, { useState } from "react";
import { CalendarCheck, HeartPulse } from "lucide-react";

export interface HairMenProcessStep {
  step: string;
  title: string;
  description: string;
  tag: string;
}

const defaultSteps: HairMenProcessStep[] = [
  {
    step: "01",
    title: "Initial consultation",
    description:
      "It's important to assess the scalp to analyze the donor and the recipient area of the scalp for the procedure.",
    tag: "Consultation",
  },
  {
    step: "02",
    title: "Selection of techniques",
    description:
      "The surgeon selects FUT, FUE, or QHT based on your individual needs.",
    tag: "Best Technique",
  },
  {
    step: "03",
    title: "Safe extraction",
    description:
      "It's important to extract hair from a safe donor zone to avoid future hair loss.",
    tag: "Extraction",
  },
  {
    step: "04",
    title: "Fast recovery",
    description:
      "Grafts follow the natural hair direction, with new growth typically appearing within a few months.",
    tag: "Recovery",
  },
];

export interface HairMenProcessProps {
  eyebrow?: string;
  titleLine1?: string;
  titleLine2?: string;
  titleLine3?: string;
  description?: string;
  stepsList?: HairMenProcessStep[];
}

export default function HairMenProcess({
  eyebrow = "OUR PROCESS",
  titleLine1 = "Procedure used in india",
  titleLine2 = "For Male Hair Transplant",
  titleLine3 = "in India",
  description = "Male hair transplant involves assessment of the scalp followed by safer extraction with the usage of different hair techniques. The precision-guided implantation helps in faster recovery and significant hair growth.",
  stepsList = defaultSteps,
}: HairMenProcessProps) {
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
              <span className="text-[#00A3FF] block mt-1">
                {titleLine2}
                {titleLine3 && ` ${titleLine3}`}
              </span>
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

            {/* Floating Card 1: 3 Week Recovery */}
            <div className="relative z-10 self-center lg:self-center mb-5 w-[210px] sm:w-[220px]">
              <div className="flex items-center gap-3.5 px-4 py-3 rounded-[18px] bg-[#f0f7fe] border border-white shadow-[0_8px_20px_rgba(3,30,80,0.06)]">
                <div className="w-10 h-10 rounded-xl bg-[#001e56] text-white flex items-center justify-center shrink-0 shadow-xs">
                  <CalendarCheck className="w-5 h-5 text-white" strokeWidth={2.2} />
                </div>
                <div className="flex flex-col">
                  <span className="font-['Plus_Jakarta_Sans'] text-[20px] font-extrabold text-[#001e56] leading-none">
                    3
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

        {/* ── Main Process Box (Navy Container) ── */}
        <div className="relative rounded-[26px] sm:rounded-[36px] bg-[#001b54] p-6 sm:p-10 lg:p-14 shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: 4 Timeline Steps */}
            <div className="lg:col-span-8 flex flex-col space-y-6 sm:space-y-8">
              {stepsList.map((step, index) => {
                const isActive = activeStep === index;
                const isLast = index === stepsList.length - 1;

                return (
                  <div
                    key={step.step}
                    onClick={() => setActiveStep(index)}
                    onMouseEnter={() => setActiveStep(index)}
                    className="relative flex items-start gap-4 sm:gap-6 group cursor-pointer"
                  >
                    {/* Step Circle & Vertical Timeline Line */}
                    <div className="flex flex-col items-center shrink-0 relative">
                      {/* Step Number Circle */}
                      <div
                        className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-['Plus_Jakarta_Sans'] text-[14px] sm:text-[15px] font-extrabold transition-all duration-300 z-10 select-none ${
                          isActive
                            ? "bg-white text-[#001e56] shadow-[0_0_20px_rgba(255,255,255,0.4)] scale-105"
                            : "bg-[#0a2768] text-white/80 border border-white/20 group-hover:border-white/50"
                        }`}
                      >
                        {step.step}
                      </div>

                      {/* Timeline Line connecting to next dot */}
                      {!isLast && (
                        <div
                          className="w-0.5 bg-white/20 h-16 sm:h-18 absolute top-12 left-1/2 -translate-x-1/2 pointer-events-none"
                          aria-hidden="true"
                        >
                          {/* Inner small dot in between */}
                          <div className="w-1.5 h-1.5 rounded-full bg-[#00A3FF] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                        </div>
                      )}
                    </div>

                    {/* Step Content */}
                    <div className="flex-1 pt-1.5 pb-2 border-b border-white/10 last:border-b-0">
                      <h3
                        className={`font-['Plus_Jakarta_Sans'] text-[17px] sm:text-[19px] lg:text-[20px] font-bold transition-colors duration-200 tracking-tight ${
                          isActive
                            ? "text-[#00A3FF]"
                            : "text-white group-hover:text-white/90"
                        }`}
                      >
                        {step.title}
                      </h3>
                      <p className="mt-1 sm:mt-1.5 text-white/70 font-['Plus_Jakarta_Sans'] text-[13px] sm:text-[14px] leading-relaxed max-w-[560px]">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Column: 4 Interactive Pills */}
            <div className="lg:col-span-4 flex flex-col space-y-4">
              {stepsList.map((step, index) => {
                const isActive = activeStep === index;

                return (
                  <button
                    key={step.step}
                    type="button"
                    onClick={() => setActiveStep(index)}
                    onMouseEnter={() => setActiveStep(index)}
                    className={`w-full py-4 sm:py-5 px-6 rounded-[16px] text-center font-['Plus_Jakarta_Sans'] text-[15px] sm:text-[16px] font-bold transition-all duration-300 cursor-pointer ${
                      isActive
                        ? "bg-[#0052FF] text-white shadow-[0_8px_24px_rgba(0,82,255,0.4)] scale-[1.02]"
                        : "bg-white/[0.08] hover:bg-white/[0.14] text-white/80 border border-white/10"
                    }`}
                  >
                    {step.tag}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
