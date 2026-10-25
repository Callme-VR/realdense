"use client";

import React, { useState } from "react";
import Image from "next/image";

/* ── Timeline Stage Interface ── */

export interface TimelineStage {
  id: string;
  tabTitle: string;
  tabSubtitle: string;
  whatToExpect: string[];
  howToCare: string[];
}

const timelineStages: TimelineStage[] = [
  {
    id: "week-1",
    tabTitle: "Week 1",
    tabSubtitle: "Initial Healing",
    whatToExpect: [
      "Redness, swelling and tightness of the donor area. Small scabs start to form around transplanted grafts.",
    ],
    howToCare: [
      "Sleep with your head elevated.",
      "Take prescribed medications for pain relief.",
    ],
  },
  {
    id: "week-2",
    tabTitle: "Week 2",
    tabSubtitle: "Scab Formation",
    whatToExpect: [
      "Scabs begin to fall off, the donor area heals",
    ],
    howToCare: [
      "No scratching",
      "Keep your scalp clean following the doctor's instructions",
    ],
  },
  {
    id: "week-3",
    tabTitle: "Week 3",
    tabSubtitle: "Stitch Removal",
    whatToExpect: [
      "Shedding cycle reset",
    ],
    howToCare: [
      "Avoid workouts, swimming, or heavy lifting",
      "Attend follow-up appointments",
    ],
  },
  {
    id: "week-4",
    tabTitle: "Week 4",
    tabSubtitle: "Visible Improvement",
    whatToExpect: [
      "New growth cycle begins, less itching",
    ],
    howToCare: [
      "Take a healthy diet",
      "Continue gentle washing",
    ],
  },
  {
    id: "week-5",
    tabTitle: "Week 5",
    tabSubtitle: "New Hair Growth",
    whatToExpect: [
      "Visible new growth appears and continues to get thicker and longer with time.",
    ],
    howToCare: [
      "Normal styling, aftercare visits",
    ],
  },
];

export interface RecoveryjourneryfueProps {
  eyebrow?: string;
  titlePart1?: string;
  titlePart2?: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
  stages?: TimelineStage[];
}

export default function Recoveryjourneryfue({
  eyebrow = "RECOVERY JOURNEY",
  titlePart1 = "Recovery Timeline & Aftercare of",
  titlePart2 = "FUE Hair Transplant",
  description = "FUE has a slightly longer recovery time compared to FUE due to the donor strip excision and suture healing. Here's what to expect at each stage and how to care for your scalp for a smooth and stress-free recovery.",
  imageSrc = "/Fut_page_images/Recovery.webp",
  imageAlt = "Medical post-procedure scalp spray care during FUE recovery",
  stages = timelineStages,
}: RecoveryjourneryfueProps) {
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const activeStage = stages[activeStageIndex];

  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-28 overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* ══════════════════════════════════════
            HEADER: Centered Title & Description
        ══════════════════════════════════════ */}
        <div className="text-center max-w-[800px] mx-auto mb-12 sm:mb-16">
          <span className="font-['Plus_Jakarta_Sans'] text-[11.5px] sm:text-[13px] font-bold uppercase tracking-[0.24em] text-[#00A3FF] mb-2 sm:mb-3 block">
            {eyebrow}
          </span>
          <h2 className="font-['Plus_Jakarta_Sans'] text-[28px] sm:text-[38px] lg:text-[44px] font-extrabold tracking-[-0.03em] leading-[1.18]">
            <span className="text-[#001e56]">{titlePart1} </span>
            <span className="text-[#00A3FF]">{titlePart2}</span>
          </h2>
          <p className="mt-4 sm:mt-5 text-[#556987] font-['Plus_Jakarta_Sans'] text-[14.5px] sm:text-[15.5px] leading-[1.7] font-normal max-w-[760px] mx-auto">
            {description}
          </p>
        </div>

        {/* ══════════════════════════════════════
            MAIN 3-COLUMN CONTENT:
            Left: Timeline Steps Track
            Center: Image
            Right: What to Expect & How to Care Cards
        ══════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr_1.1fr] xl:grid-cols-[300px_410px_1fr] gap-8 lg:gap-8 xl:gap-10 items-center">

          {/* ── Left Column: Timeline Steps ── */}
          <div className="relative">
            {/* Continuous vertical timeline connector line */}
            <div
              className="absolute left-[11px] top-[24px] bottom-[24px] w-[2px] bg-[#dbeefe]"
              aria-hidden="true"
            />

            <div className="space-y-3 sm:space-y-3.5">
              {stages.map((stage, idx) => {
                const isActive = idx === activeStageIndex;

                return (
                  <div
                    key={stage.id}
                    onClick={() => setActiveStageIndex(idx)}
                    className="relative flex items-center gap-3.5 sm:gap-4 cursor-pointer group"
                  >
                    {/* Timeline Node indicator */}
                    <div className="relative z-10 shrink-0">
                      <div
                        className={`w-[24px] h-[24px] rounded-full border-2 flex items-center justify-center transition-all duration-300 ${isActive
                          ? "border-[#0088ff] bg-white ring-4 ring-[#00a3ff]/20"
                          : "border-[#bde3f8] bg-white group-hover:border-[#0088ff]"
                          }`}
                      >
                        <div
                          className={`w-[9px] h-[9px] rounded-full transition-all duration-300 ${isActive
                            ? "bg-[#0088ff]"
                            : "bg-[#0088ff]/60 group-hover:bg-[#0088ff]"
                            }`}
                        />
                      </div>
                    </div>

                    {/* Step Pill Button */}
                    <div
                      className={`flex-1 rounded-[18px] sm:rounded-[22px] px-5 py-3 sm:py-3.5 transition-all duration-300 ${isActive
                        ? "bg-gradient-to-r from-[#0085f2] to-[#149aff] text-white shadow-[0_6px_20px_rgba(0,136,255,0.28)] scale-[1.02]"
                        : "bg-[#edf5fc] hover:bg-[#e4f0fa] text-[#001e56]"
                        }`}
                    >
                      <span
                        className={`font-['Plus_Jakarta_Sans'] text-[14.5px] sm:text-[15.5px] font-bold block leading-tight ${isActive ? "text-white" : "text-[#001e56]"
                          }`}
                      >
                        {stage.tabTitle}
                      </span>
                      <span
                        className={`font-['Plus_Jakarta_Sans'] text-[11.5px] sm:text-[12.5px] block mt-0.5 leading-snug ${isActive ? "text-white/90" : "text-[#556987]"
                          }`}
                      >
                        {stage.tabSubtitle}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── Center Column: Recovery Image ── */}
          <div className="w-full flex justify-center">
            <div className="relative w-full max-w-[400px] lg:max-w-none aspect-[4/4.8] sm:aspect-[4/4.5] rounded-[30px] sm:rounded-[36px] overflow-hidden shadow-[0_12px_40px_rgba(0,30,86,0.1)] border border-[#e2effa]">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 410px"
                className="object-cover object-center"
                quality={92}
                priority
              />
            </div>
          </div>

          {/* ── Right Column: What to Expect & How to Care Cards ── */}
          <div className="flex flex-col gap-5 sm:gap-6 w-full">

            {/* Card 1: What to Expect */}
            <div className="rounded-[24px] sm:rounded-[28px] bg-[#edf5fc] p-6 sm:p-7 border border-[#d9ebf9]/80 transition-all duration-300 shadow-[0_2px_12px_rgba(0,163,255,0.04)]">
              <h3 className="font-['Plus_Jakarta_Sans'] text-[18px] sm:text-[20px] font-bold text-[#001e56] tracking-tight mb-4">
                What to Expect
              </h3>
              <div className="space-y-3">
                {activeStage.whatToExpect.map((point, i) => (
                  <div key={i} className="flex items-start gap-3 sm:gap-3.5">
                    <div className="w-[20px] h-[20px] rounded-full bg-[#0052cc] flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                      <svg
                        width="11"
                        height="11"
                        viewBox="0 0 12 12"
                        fill="none"
                        stroke="#FFFFFF"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M2.5 6.2L4.8 8.5L9.5 3.5" />
                      </svg>
                    </div>
                    <p className="font-['Plus_Jakarta_Sans'] text-[13.5px] sm:text-[14.5px] text-[#475569] leading-relaxed">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Card 2: How to Care */}
            <div className="rounded-[24px] sm:rounded-[28px] bg-[#edf5fc] p-6 sm:p-7 border border-[#d9ebf9]/80 transition-all duration-300 shadow-[0_2px_12px_rgba(0,163,255,0.04)]">
              <h3 className="font-['Plus_Jakarta_Sans'] text-[18px] sm:text-[20px] font-bold text-[#001e56] tracking-tight mb-4">
                How to Care
              </h3>
              <div className="space-y-3.5">
                {activeStage.howToCare.map((point, i) => (
                  <div key={i} className="flex items-start gap-3 sm:gap-3.5">
                    <div className="w-[20px] h-[20px] rounded-full bg-[#0052cc] flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                      <svg
                        width="11"
                        height="11"
                        viewBox="0 0 12 12"
                        fill="none"
                        stroke="#FFFFFF"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M2.5 6.2L4.8 8.5L9.5 3.5" />
                      </svg>
                    </div>
                    <p className="font-['Plus_Jakarta_Sans'] text-[13.5px] sm:text-[14.5px] text-[#475569] leading-relaxed">
                      {point}
                    </p>
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

export { Recoveryjourneryfue as RecoveryJourneyFue };
