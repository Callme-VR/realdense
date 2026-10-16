"use client";

import React, { useState } from "react";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "Is hair transplant a permanent solution?",
    answer:
      "Yes, a hair transplant provides a permanent solution. The transplanted hair is taken from the back of your head, which is naturally resistant to hair loss. These follicles continue to grow for a lifetime, giving you natural and long-lasting results.",
  },
  {
    id: 2,
    question: "Is Hair Transplant Repair Painful?",
    answer:
      "No, hair transplant repair is performed under gentle local anesthesia, so you feel virtually no pain during the procedure. Any mild post-procedure soreness is minimal and easily managed with prescribed medication.",
  },
  {
    id: 3,
    question: "How long does Hair Transplant Repair last?",
    answer:
      "A hair transplant repair lasts a lifetime. The newly implanted follicles are harvested from permanent donor zones resistant to DHT, ensuring permanent, natural growth and lifelong coverage.",
  },
  {
    id: 4,
    question: "Is hairline reconstruction permanent?",
    answer:
      "Yes, hairline reconstruction using modern microscopic FUE and DHI methods provides permanent results. The newly designed hairline blends seamlessly with your existing hair and continues growing naturally forever.",
  },
  {
    id: 5,
    question: "Is FUE Hair Transplant painful?",
    answer:
      "FUE hair transplant is minimally invasive and virtually painless thanks to targeted local anesthesia. Most patients comfortably watch movies, chat with the medical team, or relax throughout the session.",
  },
  {
    id: 6,
    question: "What is cost of FUT hair transplant in India in 2026?",
    answer:
      "In 2026, FUT hair transplants in India typically range from ₹45,000 to ₹95,000 depending on the number of grafts required, clinic accreditation, and surgeon expertise, offering world-class care at transparent prices.",
  },
];

export default function FAQSection(): React.JSX.Element {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleFAQ = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#edf7fe] py-16 sm:py-20 lg:py-24">
      {/* ── Ambient Background: Soft Sweeps & Dot Matrix Pattern on Top-Right ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden select-none">
        {/* Soft Radial Ambient Glow */}
        <div className="absolute -right-24 -top-24 h-[550px] w-[550px] rounded-full bg-gradient-to-bl from-[#cdecfd]/60 via-[#e0f3fe]/30 to-transparent blur-3xl" />

        {/* Delicate Dot Matrix in Top-Right Corner */}
        <div className="absolute right-0 top-0 h-72 w-80 opacity-35 sm:w-96">
          <svg width="100%" height="100%" viewBox="0 0 380 280" fill="none">
            <defs>
              <pattern
                id="faqDotGrid"
                x="0"
                y="0"
                width="18"
                height="18"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="2" cy="2" r="1.3" fill="#00a8ff" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#faqDotGrid)" />
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

      {/* ── Main Grid Container ── */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Heading & Description */}
          <div className="flex flex-col items-start lg:col-span-5 lg:pt-3">
            <span className="text-[12.5px] font-bold uppercase tracking-[0.28em] text-[#00a8ff] sm:text-[13px]">
              F A Q
            </span>

            <h2 className="mt-3 text-3xl font-extrabold leading-[1.12] tracking-tight sm:text-4xl lg:text-[46px] xl:text-[50px]">
              <span className="block text-[#0a1931]">Frequently Asked</span>
              <span className="block text-[#00a8ff]">Questions</span>
            </h2>

            <p className="mt-5 max-w-[380px] text-[14.5px] font-normal leading-[1.65] text-[#556987] sm:text-[15.5px]">
              Find answers to the most common questions about hair transplant,
              treatment, recovery and results.
            </p>
          </div>

          {/* Right Column: Accordion Stack */}
          <div className="flex flex-col gap-3.5 sm:gap-4 lg:col-span-7">
            {faqData.map((item) => {
              const isOpen = openId === item.id;

              return (
                <div
                  key={item.id}
                  className={`border border-[#38bdf8] transition-all duration-200 overflow-hidden rounded-[18px] sm:rounded-[20px] ${isOpen
                    ? "bg-[#e6f4fe] p-5 sm:p-6"
                    : "bg-white px-5 py-3.5 sm:px-6 sm:py-4 hover:border-[#00a8ff]"
                    }`}
                >
                  {/* Trigger Button */}
                  <button
                    type="button"
                    onClick={() => toggleFAQ(item.id)}
                    aria-expanded={isOpen}
                    className="flex w-full cursor-pointer select-none items-center justify-between gap-3 text-left sm:gap-4"
                  >
                    {/* Number Badge */}
                    <div
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[14px] font-bold text-[#0a1931] transition-colors sm:h-10 sm:w-10 sm:text-[15px] ${isOpen ? "bg-white shadow-xs" : "bg-[#eaf5fe]"
                        }`}
                    >
                      {item.id}
                    </div>

                    {/* Question Title */}
                    <span className="flex-1 text-[15px] font-bold leading-snug text-[#0a1931] sm:text-[16.5px]">
                      {item.question}
                    </span>

                    {/* Chevron Icon */}
                    <div className="shrink-0 text-[#0a1931]">
                      <svg
                        className={`h-5 w-5 transition-transform duration-200 ${isOpen ? "rotate-180" : "rotate-0"
                          }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.4}
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </button>

                  {/* Expanded Answer Content */}
                  {isOpen && (
                    <div className="mt-3.5 pr-2 pl-[48px] text-[13.5px] leading-[1.65] text-[#556987] sm:pr-6 sm:pl-[52px] sm:text-[14px]">
                      {item.answer}
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
