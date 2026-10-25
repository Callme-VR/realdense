"use client";

import React from "react";

/* ── Check & Cross Icons ── */

const CrossIcon = () => (
  <div className="w-[24px] h-[24px] sm:w-[26px] sm:h-[26px] rounded-full bg-[#dc2626] flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      stroke="#FFFFFF"
      strokeWidth="2.4"
      strokeLinecap="round"
    >
      <line x1="2.5" y1="2.5" x2="9.5" y2="9.5" />
      <line x1="9.5" y1="2.5" x2="2.5" y2="9.5" />
    </svg>
  </div>
);

const CheckIcon = () => (
  <div className="w-[24px] h-[24px] sm:w-[26px] sm:h-[26px] rounded-full bg-[#0052cc] flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
    <svg
      width="12"
      height="12"
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
);

/* ── Item Data Types ── */

interface GuidelineItem {
  title: string;
  description: string;
}

const dontsList: GuidelineItem[] = [
  {
    title: "Do not scratch or rub",
    description: "Avoid scratching or rubbing the donor or recipient area.",
  },
  {
    title: "Avoid smoking and alcohol",
    description: "Stay away from smoking and alcohol for at least 2 weeks.",
  },
  {
    title: "Do not use cosmetic products",
    description:
      "Avoid any cosmetic products on the scalp during the initial weeks.",
  },
  {
    title: "Avoid direct sunlight",
    description: "Do not expose your scalp to direct sunlight.",
  },
  {
    title: "Avoid strenuous activity",
    description:
      "Stay away from heavy exercise or strenuous activities.",
  },
];

const dosList: GuidelineItem[] = [
  {
    title: "Take prescribed medications",
    description:
      "Follow all antibiotics and painkillers as advised by your doctor.",
  },
  {
    title: "Sleep with your head elevated",
    description:
      "Use extra pillows to keep your head slightly elevated while sleeping.",
  },
  {
    title: "Follow expert instructions",
    description: "Follow all instructions from the clinical team.",
  },
  {
    title: "Maintain a healthy diet",
    description:
      "Eat nutritious foods to promote healing and hair growth.",
  },
  {
    title: "Attend follow-up appointments",
    description:
      "Visit for regular follow-ups for suture removal and progress monitoring.",
  },
];

export interface DosAndDontsProps {
  eyebrow?: string;
  titlePart1?: string;
  titlePart2?: string;
  description?: string;
  donts?: GuidelineItem[];
  dos?: GuidelineItem[];
}

export default function DosAndDonts({
  eyebrow = "AFTERCARE GUIDE",
  titlePart1 = "Do's and Don'ts",
  titlePart2 = "After Hair Transplant",
  description = "Follow these essential guidelines after your FUT hair transplant at RealDense to ensure proper healing, healthy growth and long-lasting results.",
  donts = dontsList,
  dos = dosList,
}: DosAndDontsProps) {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-28 overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* ══════════════════════════════════════
            HEADER: Centered Title & Description
        ══════════════════════════════════════ */}
        <div className="text-center max-w-[700px] mx-auto mb-12 sm:mb-16">
          <span className="font-['Plus_Jakarta_Sans'] text-[11.5px] sm:text-[13px] font-bold uppercase tracking-[0.24em] text-[#00A3FF] mb-2 sm:mb-3 block">
            {eyebrow}
          </span>
          <h2 className="font-['Plus_Jakarta_Sans'] text-[28px] sm:text-[38px] lg:text-[44px] font-extrabold tracking-[-0.03em] leading-[1.18]">
            <span className="text-[#001e56] whitespace-nowrap">{titlePart1} </span>
            <span className="text-[#00A3FF] whitespace-nowrap">{titlePart2}</span>
          </h2>
          <p className="mt-4 sm:mt-5 text-[#556987] font-['Plus_Jakarta_Sans'] text-[14.5px] sm:text-[15.5px] leading-[1.7] font-normal max-w-[620px] mx-auto">
            {description}
          </p>
        </div>

        {/* ══════════════════════════════════════
            TWO CARDS: DON'TS & DO'S
        ══════════════════════════════════════ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-[1080px] mx-auto items-stretch">

          {/* ── Left: DON'TS Card ── */}
          <div className="rounded-[32px] sm:rounded-[38px] lg:rounded-[44px] bg-[#fffbfb] border border-[#ffccd3] p-6 sm:p-8 lg:p-9 shadow-[0_4px_24px_rgba(239,68,68,0.06)] flex flex-col transition-all duration-300 hover:shadow-[0_8px_30px_rgba(239,68,68,0.1)]">

            {/* Top Banner: DON'TS */}
            <div className="rounded-[22px] sm:rounded-[26px] bg-[#fed7da] py-3.5 sm:py-4 mb-7 sm:mb-9 text-center">
              <span className="font-['Plus_Jakarta_Sans'] text-[20px] sm:text-[23px] lg:text-[25px] font-extrabold tracking-wider text-[#a81c1c] block">
                DON’TS
              </span>
            </div>

            {/* List of 5 items */}
            <div className="space-y-6 sm:space-y-7 flex-1">
              {donts.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3.5 sm:gap-4.5">
                  <CrossIcon />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-['Plus_Jakarta_Sans'] text-[15px] sm:text-[16px] font-bold text-[#001e56] leading-snug">
                      {item.title}
                    </h4>
                    <p className="font-['Plus_Jakarta_Sans'] text-[13px] sm:text-[13.5px] text-[#556987] leading-[1.55] mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* ── Right: DO'S Card ── */}
          <div className="rounded-[32px] sm:rounded-[38px] lg:rounded-[44px] bg-[#edf6ff] border border-[#badefc] p-6 sm:p-8 lg:p-9 shadow-[0_4px_24px_rgba(0,163,255,0.08)] flex flex-col transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,163,255,0.14)]">

            {/* Top Banner: DO'S */}
            <div className="rounded-[22px] sm:rounded-[26px] bg-[#d6ecff] py-3.5 sm:py-4 mb-7 sm:mb-9 text-center">
              <span className="font-['Plus_Jakarta_Sans'] text-[20px] sm:text-[23px] lg:text-[25px] font-extrabold tracking-wider text-[#0040a8] block">
                DO’S
              </span>
            </div>

            {/* List of 5 items */}
            <div className="space-y-6 sm:space-y-7 flex-1">
              {dos.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3.5 sm:gap-4.5">
                  <CheckIcon />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-['Plus_Jakarta_Sans'] text-[15px] sm:text-[16px] font-bold text-[#001e56] leading-snug">
                      {item.title}
                    </h4>
                    <p className="font-['Plus_Jakarta_Sans'] text-[13px] sm:text-[13.5px] text-[#556987] leading-[1.55] mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
