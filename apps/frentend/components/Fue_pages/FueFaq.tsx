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
    question: "Is FUT better than FUE?",
    answer:
      "FUT and FUE are clinically validated techniques, and the choice of technique for treatment depends on the patient's hair loss stage and individual goals.",
  },
  {
    id: 2,
    question: "Is FUT painful?",
    answer:
      "FUT is performed under local anesthesia, so you will feel virtually no pain during the procedure. Post-operative discomfort is easily managed with prescribed painkillers for a smooth, comfortable recovery.",
  },
  {
    id: 3,
    question: "Are FUT hair transplant results permanent?",
    answer:
      "Yes, FUT hair transplant results are permanent. The donor follicles are harvested from the safe donor zone at the back and sides of the scalp, which are genetically resistant to DHT and hair loss.",
  },
  {
    id: 4,
    question: "Will the FUT Scar be visible?",
    answer:
      "The fine linear scar is concealed under surrounding hair. With advanced trichophytic closure techniques, hair grows directly through the scar line, making it virtually undetectable even with short hairstyles.",
  },
  {
    id: 5,
    question: "How long does recovery take after FUT?",
    answer:
      "Initial healing and suture removal take about 10 to 14 days. Most patients return to desk jobs within 3 to 5 days, with complete follicular settling occurring over the subsequent weeks.",
  },
  {
    id: 6,
    question: "What is cost of FUT hair transplant in India in 2026?",
    answer:
      "In 2026, FUT hair transplants in India typically range from ₹45,000 to ₹95,000 depending on the number of grafts required, surgeon expertise, and personalized aftercare plans.",
  },
];

export interface FueFaqProps {
  titlePart1?: string;
  titlePart2?: string;
  description?: string;
  faqs?: FAQItem[];
}

export default function FueFaq({
  titlePart1 = "FAQ’S for",
  titlePart2 = "FUT Hair Transplant",
  description = "At RealDense, our care doesn't end after surgery. We provide complete post-operative support to ensure smooth recovery and long-lasting, natural results.",
  faqs = defaultFaqData,
}: FueFaqProps) {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleFaq = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#edf7fe] py-16 sm:py-20 lg:py-28">
      {/* ══════════════════════════════════════
          AMBIENT BACKGROUND (Home FAQ Background)
          - Delicate Cyan Dot Matrix in Top-Right
          - Fine Flowing Curved SVG lines
          - Soft Radial Ambient Glow
      ══════════════════════════════════════ */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden select-none" aria-hidden="true">
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
              <span className="text-[#001e56] block">{titlePart1}</span>
              <span className="text-[#00A3FF] block mt-1">{titlePart2}</span>
            </h2>
            <p className="mt-5 text-[#556987] font-['Plus_Jakarta_Sans'] text-[14.5px] sm:text-[15.5px] leading-[1.7] font-normal">
              {description}
            </p>
          </div>

          {/* ══════════════════════════════════════
              RIGHT: 6 FAQ Accordion Cards
          ══════════════════════════════════════ */}
          <div className="space-y-3.5 sm:space-y-4 w-full">
            {faqs.map((faq) => {
              const isOpen = openId === faq.id;

              return (
                <div
                  key={faq.id}
                  className={`rounded-[20px] sm:rounded-[24px] bg-white border transition-all duration-300 ${
                    isOpen
                      ? "border-[#7ec6f8] shadow-[0_4px_20px_rgba(0,163,255,0.08)]"
                      : "border-[#bde3f8] hover:border-[#8ad0fb] shadow-[0_2px_10px_rgba(0,163,255,0.03)]"
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
                      <div className="w-[32px] h-[32px] sm:w-[36px] sm:h-[36px] rounded-full bg-[#EBF6FE] flex items-center justify-center shrink-0">
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
                    <div className="shrink-0 text-[#0052cc] transition-transform duration-300">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`w-5 h-5 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
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
