"use client";

import React from "react";
import Link from "next/link";

export interface HairRepairCandidateCard {
  step: string;
  title: string;
  description: string;
}

const defaultCards: HairRepairCandidateCard[] = [
  {
    step: "01",
    title: "People with Unnatural Hairline",
    description:
      "Those with a poorly designed and unnatural hairline opt for repair.",
  },
  {
    step: "02",
    title: "Having Visible Scars",
    description:
      "Patients with visible scars due to previous transplants.",
  },
  {
    step: "03",
    title: "Low Hair Density",
    description:
      "A patchy hair growth and improper coverage after a Hair Transplant",
  },
  {
    step: "04",
    title: "Poorly placed Grafts",
    description:
      "Those with misplaced grafts causing wrongly directed Hair Growth",
  },
];

export interface HairRepairIdealCandidateProps {
  eyebrow?: string;
  titleLine1?: string;
  titleLine2?: string;
  subtitle?: string;
  cards?: HairRepairCandidateCard[];
  onCallbackClick?: () => void;
}

export default function HairRepairIdealCandidate({
  eyebrow = "IDEAL CANDIDATES",
  titleLine1 = "Who is an Ideal Candidate for",
  titleLine2 = "Hair Transplant Repair?",
  subtitle = "You may be eligible for a Hair Transplant Repair at Realdense Clinic if you have.",
  cards = defaultCards,
  onCallbackClick,
}: HairRepairIdealCandidateProps) {
  const handleScrollToCallback = (e: React.MouseEvent) => {
    if (onCallbackClick) {
      e.preventDefault();
      onCallbackClick();
      return;
    }
    // Default: smooth scroll to top callback form
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="w-full bg-white py-14 sm:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Header Section ── */}
        <div className="text-center max-w-[840px] mx-auto mb-10 sm:mb-14 lg:mb-16">
          <span className="font-['Plus_Jakarta_Sans'] text-[11.5px] sm:text-[13px] font-bold uppercase tracking-[0.22em] text-[#00A3FF] mb-2 sm:mb-3 block">
            {eyebrow}
          </span>
          <h2 className="font-['Plus_Jakarta_Sans'] text-[26px] sm:text-[36px] lg:text-[44px] font-extrabold tracking-[-0.03em] leading-[1.16]">
            <span className="text-[#001e56] block">{titleLine1}</span>
            <span className="text-[#00A3FF] block mt-1">{titleLine2}</span>
          </h2>
          <p className="mt-3.5 sm:mt-4 text-[#556987] font-['Plus_Jakarta_Sans'] text-[14px] sm:text-[15.5px] leading-[1.65] font-normal max-w-[760px] mx-auto">
            {subtitle}
          </p>
        </div>

        {/* ── 4 Steps Flow with Connecting Arcs ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-8 lg:gap-6 relative mb-12 sm:mb-16 lg:mb-20">
          {cards.map((item, idx) => {
            const hasNext = idx < cards.length - 1;
            return (
              <div
                key={item.step}
                className="relative flex flex-col items-center text-center px-3 group"
              >
                {/* Connecting Curved Arc (Visible on desktop between cards) */}
                {hasNext && (
                  <div
                    className="hidden lg:block absolute top-5 left-[calc(50%+34px)] w-[calc(100%-68px)] h-8 pointer-events-none z-0"
                    aria-hidden="true"
                  >
                    <svg
                      className="w-full h-full overflow-visible"
                      viewBox="0 0 100 24"
                      fill="none"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M 0 18 Q 50 -4 95 16"
                        stroke="#7dd3fc"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        className="transition-colors group-hover:stroke-[#00A3FF]"
                      />
                      <circle cx="95" cy="16" r="2.8" fill="#00A3FF" />
                    </svg>
                  </div>
                )}

                {/* Step Circle Badge */}
                <div
                  style={{
                    background:
                      "linear-gradient(180deg, #B5DAEF 0%, #FFFFFF 100%)",
                    boxShadow:
                      "inset 0px -3px 4px rgba(5, 78, 116, 0.44), inset 0px 2.62px 7.86px #8DD8FF",
                  }}
                  className="relative z-10 w-14 h-14 sm:w-16 sm:h-16 lg:w-[72px] lg:h-[72px] rounded-full flex items-center justify-center text-[#001e56] font-['Plus_Jakarta_Sans'] font-extrabold text-[18px] sm:text-[20px] lg:text-[22px] mb-5 transition-transform duration-200 group-hover:scale-105 select-none"
                >
                  {item.step}
                </div>

                {/* Card Title */}
                <h3 className="font-['Plus_Jakarta_Sans'] text-[17px] sm:text-[18px] font-bold text-[#001e56] mb-2.5 tracking-[-0.01em]">
                  {item.title}
                </h3>

                {/* Card Description */}
                <p className="font-['Plus_Jakarta_Sans'] text-[13.5px] sm:text-[14px] leading-[1.65] text-[#556987]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* ── Bottom Banner: Talk to our experts ── */}
        <div className="relative rounded-[22px] sm:rounded-[26px] bg-[#001744] shadow-[0_16px_40px_rgba(0,23,68,0.28)] p-6 sm:p-8 lg:px-10 lg:py-7">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            {/* Left: Heading & Eyebrow */}
            <div className="shrink-0">
              <span className="font-['Plus_Jakarta_Sans'] text-[11.5px] sm:text-[12px] font-bold uppercase tracking-[0.2em] text-[#00A3FF] block mb-1">
                STILL CONFUSED ?
              </span>
              <h3 className="font-['Plus_Jakarta_Sans'] text-[24px] sm:text-[28px] font-extrabold text-white tracking-[-0.02em]">
                Talk to our experts
              </h3>
            </div>

            {/* Divider */}
            <div
              className="hidden lg:block w-[1px] h-12 bg-white/15 mx-2"
              aria-hidden="true"
            />

            {/* Middle: Explanatory text */}
            <p className="font-['Plus_Jakarta_Sans'] text-[13.5px] sm:text-[14.5px] text-white/80 leading-relaxed max-w-[420px]">
              Get personalized guidance to understand if this is the right option
              for your hair restoration journey.
            </p>

            {/* Right: CTA Button */}
            <div className="w-full sm:w-auto shrink-0">
              <Link
                href="#callback-form"
                onClick={handleScrollToCallback}
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#0077e6] hover:bg-[#0066cc] active:scale-[0.98] text-white font-['Plus_Jakarta_Sans'] font-semibold text-[14.5px] shadow-[0_4px_16px_rgba(0,119,230,0.35)] transition-all duration-200"
              >
                <span>Request a callback</span>
                <span className="text-[16px] leading-none">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

