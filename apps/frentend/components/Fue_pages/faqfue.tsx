"use client";

import React, { useState } from "react";

/* ── FAQ Data Interface ── */

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const defaultFaqData: FAQItem[] = [
  {
    id: 1,
    question: "Is FUE Hair Transplant painful?",
    answer:
      "At RealDense, local anaesthesia helps minimise pain and discomfort during the procedure.",
  },
  {
    id: 2,
    question: "Are the results of FUE Hair Transplant permanent?",
    answer:
      "Yes, the results of FUE hair transplant are permanent because transplanted follicles are taken from the permanent donor zone and are genetically resistant to hair loss.",
  },
  {
    id: 3,
    question: "How long does FUE recovery take?",
    answer:
      "Most patients resume daily activities within 3 to 7 days, with complete healing of extraction sites occurring over 7 to 10 days.",
  },
];

export interface FaqFueProps {
  titlePart1?: string;
  titlePart2?: string;
  description?: string;
  faqs?: FAQItem[];
}

export default function FaqFue({
  titlePart1 = "FAQ’S for",
  titlePart2 = "FUE Hair Transplant",
  description = "At RealDense, our care doesn't end after surgery. We provide complete post-operative support to ensure smooth recovery and long-lasting, natural results.",
  faqs = defaultFaqData,
}: FaqFueProps) {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleFaq = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#edf7fe] py-16 sm:py-20 lg:py-28">
      {/* ══════════════════════════════════════
          AMBIENT BACKGROUND
          - Delicate Cyan Dot Matrix in Top-Right
          - Fine Flowing Curved SVG lines
          - Soft Radial Ambient Glow
      ══════════════════════════════════════ */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden select-none"
        aria-hidden="true"
      >
        {/* Soft Radial Ambient Glow */}
        <div className="absolute -right-24 -top-24 h-[550px] w-[550px] rounded-full bg-gradient-to-bl from-[#cdecfd]/60 via-[#e0f3fe]/30 to-transparent blur-3xl" />

        {/* Delicate Dot Matrix in Top-Right Corner */}
        <div className="absolute right-0 top-0 h-72 w-80 opacity-35 sm:w-96">
          <svg width="100%" height="100%" viewBox="0 0 380 280" fill="none">
            <defs>
              <pattern
                id="fueFaqDotGrid"
                x="0"
                y="0"
                width="18"
                height="18"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="2" cy="2" r="1.3" fill="#00a8ff" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#fueFaqDotGrid)" />
          </svg>
        </div>

        {/* Fine Flowing Ambient Curves */}
        <svg
          className="absolute right-0 top-0 h-full w-[60%] opacity-25"
          viewBox="0 0 900 650"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M150 0 C420 180 650 320 900 420"
            stroke="#00a8ff"
            strokeWidth="1.2"
            strokeDasharray="4 4"
            opacity="0.4"
          />
          <path
            d="M80 0 C340 260 580 440 900 560"
            stroke="#38bdf8"
            strokeWidth="1.4"
            opacity="0.5"
          />
          <path
            d="M0 80 C300 340 520 520 900 650"
            stroke="#7dd3fc"
            strokeWidth="1.8"
            opacity="0.6"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] xl:grid-cols-[450px_1fr] gap-10 lg:gap-14 items-start">

          {/* ══════════════════════════════════════
              LEFT: Title & Description
          ══════════════════════════════════════ */}
          <div className="max-w-[460px] lg:sticky lg:top-28">
            <h2 className="font-['Plus_Jakarta_Sans'] text-[32px] sm:text-[40px] lg:text-[44px] font-extrabold tracking-[-0.03em] leading-[1.18]">
              <span className="text-[#001e56] block whitespace-nowrap">{titlePart1}</span>
              <span className="text-[#00A3FF] block mt-1 whitespace-nowrap">{titlePart2}</span>
            </h2>
            <p className="mt-5 text-[#556987] font-['Plus_Jakarta_Sans'] text-[14.5px] sm:text-[15.5px] leading-[1.7] font-normal">
              {description}
            </p>
          </div>

          {/* ══════════════════════════════════════
              RIGHT: FAQ Accordion Cards
          ══════════════════════════════════════ */}
          <div className="space-y-3.5 sm:space-y-4 w-full">
            {faqs.map((faq) => {
              const isOpen = openId === faq.id;

              return (
                <div
                  key={faq.id}
                  className={`rounded-[20px] sm:rounded-[24px] border transition-all duration-300 ${isOpen
                    ? "bg-[#e2f3fe] border-[#68c1fd] shadow-[0_4px_24px_rgba(0,163,255,0.12)]"
                    : "bg-white border-[#bde3f8] hover:border-[#8ad0fb] shadow-[0_2px_10px_rgba(0,163,255,0.03)]"
                    }`}
                >
                  {/* Card Header: Click to Toggle */}
                  <button
                    type="button"
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full text-left px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3.5 sm:gap-4.5 flex-1 min-w-0">
                      {/* Number badge */}
                      <div
                        className={`w-[32px] h-[32px] sm:w-[36px] sm:h-[36px] rounded-full flex items-center justify-center shrink-0 transition-colors duration-200 ${isOpen ? "bg-white shadow-xs" : "bg-[#EBF6FE]"
                          }`}
                      >
                        <span className="font-['Plus_Jakarta_Sans'] text-[13.5px] sm:text-[14.5px] font-bold text-[#0052cc]">
                          {faq.id}
                        </span>
                      </div>

                      {/* Question Text */}
                      <span className="font-['Plus_Jakarta_Sans'] text-[15px] sm:text-[16.5px] font-bold text-[#001e56] leading-snug">
                        {faq.question}
                      </span>
                    </div>

                    {/* Chevron Icon */}
                    <div className="shrink-0 text-[#001e56] transition-transform duration-300">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`w-5 h-5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                          }`}
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </div>
                  </button>

                  {/* Accordion Answer Content */}
                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-1">
                      <div className="pl-[45px] sm:pl-[52px] pr-2 sm:pr-4">
                        <p className="font-['Plus_Jakarta_Sans'] text-[13.5px] sm:text-[14.5px] text-[#556987] leading-[1.65]">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}

export { FaqFue as FAQFue };
