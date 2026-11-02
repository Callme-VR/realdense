"use client";

import React from "react";
import Link from "next/link";

export interface HairMenCandidateCard {
  step: string;
  title: string;
  description: string;
}

const defaultCards: HairMenCandidateCard[] = [
  {
    step: "01",
    title: "MAA",
    description:
      "The most common form of hair loss in men, mainly affecting the hairline and temple area of the scalp.",
  },
  {
    step: "02",
    title: "Hair thinning",
    description:
      "Genetics, hormonal changes, and aging are some of the primary causes of hair thinning in men.",
  },
  {
    step: "03",
    title: "Low Density",
    description:
      "Someone born with naturally low-density hair but experiencing a noticeable scalp visibility with age.",
  },
  {
    step: "04",
    title: "Autoimmune diseases",
    description:
      "Hashimoto's disease, Graves' disease, or scalp psoriasis may cause significant hair loss.",
  },
  {
    step: "05",
    title: "Post-Traumatic Alopecia:",
    description: "Alopecia resulting from burns & injuries.",
  },
];

export interface HairMenIdealCandidateProps {
  eyebrow?: string;
  titleLine1?: string;
  titleLine2?: string;
  subtitle?: string;
  cards?: HairMenCandidateCard[];
  onCallbackClick?: () => void;
}

export default function HairMenIdealCandidate({
  eyebrow = "IDEAL CANDIDATES",
  titleLine1 = "Who is an Ideal Candidate for",
  titleLine2 = "Male Hair Transplant?",
  subtitle = "You may be eligible for a Male Hair Transplant at Realdense Clinic if you have.",
  cards = defaultCards,
  onCallbackClick,
}: HairMenIdealCandidateProps) {
  const handleScrollToCallback = (e: React.MouseEvent) => {
    if (onCallbackClick) {
      e.preventDefault();
      onCallbackClick();
      return;
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const topCards = cards.slice(0, 4);
  const bottomCard = cards[4];

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

        {/* ── Top Row: 4 Cards Flow with Connecting Arcs ── */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-7 sm:gap-8 lg:gap-6 relative mb-8 sm:mb-10 lg:mb-12">
          {topCards.map((item, idx) => {
            const hasNext = idx < topCards.length - 1;
            return (
              <div
                key={item.step}
                className="relative flex flex-col items-center text-center px-1 sm:px-3 group"
              >
                {/* Connecting Curved Arc between cards 1->2, 2->3, 3->4 */}
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
                  className="relative z-10 w-12 h-12 sm:w-16 sm:h-16 lg:w-[72px] lg:h-[72px] rounded-full flex items-center justify-center text-[#001e56] font-['Plus_Jakarta_Sans'] font-extrabold text-[16px] sm:text-[20px] lg:text-[22px] mb-3.5 sm:mb-5 transition-transform duration-200 group-hover:scale-105 select-none"
                >
                  {item.step}
                </div>

                {/* Card Title */}
                <h3 className="font-['Plus_Jakarta_Sans'] text-[14px] sm:text-[18px] font-bold text-[#001e56] mb-1.5 sm:mb-2.5 tracking-[-0.01em]">
                  {item.title}
                </h3>

                {/* Card Description */}
                <p className="font-['Plus_Jakarta_Sans'] text-[11px] sm:text-[14px] leading-[1.5] sm:leading-[1.65] text-[#556987]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* ── Bottom Row: Card 05 (Positioned on the left under 01) ── */}
        {bottomCard && (
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-7 sm:gap-8 lg:gap-6 relative mb-10 sm:mb-16 lg:mb-20">
            <div className="relative flex flex-col items-center text-center px-1 sm:px-3 group">
              {/* Step Circle Badge */}
              <div
                style={{
                  background:
                    "linear-gradient(180deg, #B5DAEF 0%, #FFFFFF 100%)",
                  boxShadow:
                    "inset 0px -3px 4px rgba(5, 78, 116, 0.44), inset 0px 2.62px 7.86px #8DD8FF",
                }}
                className="relative z-10 w-12 h-12 sm:w-16 sm:h-16 lg:w-[72px] lg:h-[72px] rounded-full flex items-center justify-center text-[#001e56] font-['Plus_Jakarta_Sans'] font-extrabold text-[16px] sm:text-[20px] lg:text-[22px] mb-3.5 sm:mb-5 transition-transform duration-200 group-hover:scale-105 select-none"
              >
                {bottomCard.step}
              </div>

              {/* Card Title */}
              <h3 className="font-['Plus_Jakarta_Sans'] text-[14px] sm:text-[18px] font-bold text-[#001e56] mb-1.5 sm:mb-2.5 tracking-[-0.01em]">
                {bottomCard.title}
              </h3>

              {/* Card Description */}
              <p className="font-['Plus_Jakarta_Sans'] text-[11px] sm:text-[14px] leading-[1.5] sm:leading-[1.65] text-[#556987]">
                {bottomCard.description}
              </p>
            </div>
          </div>
        )}

        {/* ── Bottom CTA Banner ── */}
        <div className="w-full rounded-[16px] sm:rounded-[24px] bg-[#001744] p-3.5 sm:p-8 lg:px-12 lg:py-9 shadow-[0_12px_36px_rgba(0,23,68,0.18)] flex flex-row sm:flex-col md:flex-row items-center sm:items-start md:items-center justify-between gap-2 sm:gap-6">
          {/* Banner Left: Question & Title */}
          <div className="text-center md:text-left shrink-0">
            <span className="font-['Plus_Jakarta_Sans'] text-[7.5px] sm:text-[12px] font-bold uppercase tracking-[0.2em] text-[#00A3FF] block mb-0.5 sm:mb-1">
              STILL CONFUSED ?
            </span>
            <h3 className="font-['Plus_Jakarta_Sans'] text-[11.5px] sm:text-[26px] lg:text-[28px] font-extrabold text-white tracking-tight whitespace-nowrap">
              Talk to our experts
            </h3>
          </div>

          {/* Banner Middle: Divider + Helper text */}
          <div className="block sm:hidden lg:block w-px h-7 sm:h-12 bg-white/15 mx-1 sm:mx-2 shrink-0" aria-hidden="true" />
          <p className="text-white/80 font-['Plus_Jakarta_Sans'] text-[8px] sm:text-[14.5px] leading-[1.35] sm:leading-relaxed text-left max-w-[130px] sm:max-w-[480px]">
            Get personalized guidance to understand if this is the right option
            for your hair restoration journey.
          </p>

          {/* Banner Right: Callback Button */}
          {/* Right: CTA Button */}
          <div className="shrink-0">
            <Link
              href="#callback-form"
              onClick={handleScrollToCallback}
              className="inline-flex items-center justify-center gap-1 sm:gap-2 px-2.5 py-1.5 sm:px-6 sm:py-3.5 rounded-[8px] sm:rounded-xl bg-[#0077e6] hover:bg-[#0066cc] active:scale-[0.98] text-white font-['Plus_Jakarta_Sans'] font-semibold text-[8.5px] sm:text-[14.5px] shadow-[0_4px_16px_rgba(0,119,230,0.35)] transition-all duration-200 cursor-pointer whitespace-nowrap"
            >
              <span>Request a callback</span>
              <span className="text-[9.5px] sm:text-[16px] leading-none">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}