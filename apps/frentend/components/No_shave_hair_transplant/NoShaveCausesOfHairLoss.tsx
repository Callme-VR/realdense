"use client";

import React from "react";
import { Dna, TrendingDown, Sparkles, Activity, ShieldAlert, Leaf } from "lucide-react";

export interface NoShaveCauseCard {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const GeneticsIcon = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-10 h-10 text-[#001e56]"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M2 15c6.667-6 13.333 0 20-6" />
    <path d="M9 22c1.798-1.998 2.518-3.995 2.807-5.993" />
    <path d="M15 2c-1.798 1.998-2.518 3.995-2.807 5.993" />
    <path d="M17 6l-2.5-2.5" />
    <path d="M14 8l-1-1" />
    <path d="M7 18l2.5 2.5" />
    <path d="M3.5 14.5l.5.5" />
    <path d="M20 9l.5.5" />
    <path d="M6.5 12.5l1 1" />
    <path d="M16.5 10.5l1 1" />
    <path d="M10 16l-1-1" />
  </svg>
);

const HormonesIcon = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-10 h-10 text-[#001e56]"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 4c6.667 6 13.333 0 20 6" />
    <path d="M4 20c6.667-6 13.333 0 20-6" />
    <line x1="6" y1="7" x2="6" y2="17" />
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="18" y1="7" x2="18" y2="17" />
  </svg>
);

const ScalpHealthIcon = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-10 h-10 text-[#001e56]"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M7 19c0-3 2-6 5-6s5 3 5 6" />
    <path d="M12 13V5" />
    <path d="M9 14.5L7 8" />
    <path d="M15 14.5L17 8" />
    <circle cx="12" cy="4" r="1.5" fill="currentColor" />
    <circle cx="7" cy="7" r="1.5" fill="currentColor" />
    <circle cx="17" cy="7" r="1.5" fill="currentColor" />
  </svg>
);

const AftercareIcon = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-10 h-10 text-[#001e56]"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="5" y="10" width="14" height="11" rx="2" />
    <path d="M12 4v6" />
    <path d="M8 7h8" />
    <circle cx="12" cy="15.5" r="2.5" />
  </svg>
);

const defaultCauses: NoShaveCauseCard[] = [
  {
    id: "genetics",
    icon: <GeneticsIcon />,
    title: "Genetics",
    description:
      "Genetic predisposition can sometimes have an impact on the longevity of a no shave hair transplant.",
  },
  {
    id: "hormonal",
    icon: <HormonesIcon />,
    title: "Hormonal Imbalances",
    description:
      "Hormonal issues can weaken a follicle, potentially affecting the success of a no shave hair transplant.",
  },
  {
    id: "lifestyle",
    icon: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10 text-[#001e56]"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 3v18h18" />
        <path d="M7 9l5 6 4-3 5 5" />
        <polyline points="16 17 21 17 21 12" />
      </svg>
    ),
    title: "Lifestyle Factors",
    description:
      "Lifestyle issues such as smoking, stress, and diet can affect the success of a no shave hair transplant.",
  },
  {
    id: "scalp",
    icon: <ScalpHealthIcon />,
    title: "Scalp Health",
    description:
      "If a patient was not in excellent scalp health prior to a no shave hair transplant, this could affect graft survival after a no-shave hair transplant.",
  },
  {
    id: "aftercare",
    icon: <AftercareIcon />,
    title: "Poor Aftercare",
    description:
      "Poor adherence to aftercare instructions may lead to shedding after a no shave hair transplant.",
  },
  {
    id: "environmental",
    icon: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10 text-[#001e56]"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22v-9" />
        <path d="M12 13c-4.5 0-8-3.5-8-8 4.5 0 8 3.5 8 8z" />
        <path d="M12 13c4.5 0 8-3.5 8-8-4.5 0-8 3.5-8 8z" />
      </svg>
    ),
    title: "Environmental Factors",
    description:
      "Sun, pollution, and damaging hair products could also impact results following a no shave hair transplant.",
  },
];

export interface NoShaveCausesOfHairLossProps {
  titleLine1?: string;
  titleLine2?: string;
  subtitle?: string;
  causes?: NoShaveCauseCard[];
}

export default function NoShaveCausesOfHairLoss({
  titleLine1 = "Causes of Hair Loss Leading to",
  titleLine2 = "Unshaven Hair Transplant",
  subtitle = "There are many factors that can affect the overall results of a No-Shave Hair Transplant and its success long-term.",
  causes = defaultCauses,
}: NoShaveCausesOfHairLossProps) {
  return (
    <section className="w-full bg-white py-14 sm:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Section Header ── */}
        <div className="text-center max-w-[840px] mx-auto mb-12 sm:mb-16">
          <h2 className="font-['Plus_Jakarta_Sans'] text-[26px] sm:text-[36px] lg:text-[44px] font-extrabold tracking-[-0.03em] leading-[1.18]">
            <span className="text-[#001e56] block">{titleLine1}</span>
            <span className="text-[#00A3FF] block mt-1">{titleLine2}</span>
          </h2>
          <p className="mt-3.5 sm:mt-4 text-[#556987] font-['Plus_Jakarta_Sans'] text-[14px] sm:text-[15.5px] leading-[1.65] font-normal max-w-[720px] mx-auto">
            {subtitle}
          </p>
        </div>

        {/* ── 6 Cards Grid (3 Columns) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {causes.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-start rounded-[28px] bg-[#edf2f7] border border-[#e2e8f0]/80 p-7 sm:p-8 hover:bg-[#e8eff5] transition-colors duration-200"
            >
              <div className="mb-5 flex items-center justify-start">
                {item.icon}
              </div>

              <h3 className="font-['Plus_Jakarta_Sans'] text-[19px] sm:text-[21px] font-bold text-[#001e56] tracking-tight mb-2.5">
                {item.title}
              </h3>

              <p className="font-['Plus_Jakarta_Sans'] text-[13px] sm:text-[14px] leading-relaxed text-[#556987]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
