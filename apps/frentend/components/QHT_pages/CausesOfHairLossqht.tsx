"use client";

import React from "react";

/* ── SVG Icons matching design reference ── */

/** 1. Shock loss – DNA double-helix / hourglass icon */
const ShockLossIcon = () => (
  <svg
    width="48"
    height="58"
    viewBox="0 0 71 88"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M61.2117 62.2222C64.7379 67.6297 67.0245 73.843 67.7507 80.4444C67.9155 81.9446 68 83.4648 68 85M67.7507 80.4444H21.5714M35.5 44L34.2497 43.6492C23.8777 40.7419 15.3121 34.2488 9.78814 25.7778C6.26202 20.3704 3.97528 14.157 3.24932 7.55556C3.08436 6.05546 3 4.53527 3 3M3.24932 7.55556H49.4286M3 85C3 66.1245 15.7526 49.5359 34.2497 44.3508L35.5 44M35.5 44L36.7503 43.6492C55.2475 38.4641 68 21.8754 68 3M35.5 44L36.7503 44.3508C47.1225 47.2581 55.6881 53.7512 61.2117 62.2222M37.8214 25.7778H9.78814M33.1786 62.2222H61.2117"
      stroke="#002366"
      strokeWidth="6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/** 2. Improper care – declining trend chart icon */
const ImproperCareIcon = () => (
  <svg
    width="54"
    height="50"
    viewBox="0 0 93 86"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M65.8467 60.9449H93V33.8583L65.8467 60.9449ZM9.50365 24.9874L35.2993 50.7197L55.6642 30.4047L76.0292 50.7197L82.8175 43.948L55.6642 16.8614L35.2993 37.1764L9.50365 11.5795V0H0V86H93V76.5197H9.50365V24.9874Z"
      fill="#002366"
    />
  </svg>
);

/** 3. Poor surgical skills – first-aid medical box icon */
const SurgicalSkillsIcon = () => (
  <svg
    width="56"
    height="51"
    viewBox="0 0 106 97"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M91.5455 16.975H14.4545C10.621 16.975 6.94439 18.5079 4.23364 21.2366C1.52289 23.9653 0 27.6661 0 31.525V82.45C0 86.3089 1.52289 90.0098 4.23364 92.7384C6.94439 95.4671 10.621 97 14.4545 97H91.5455C95.379 97 99.0556 95.4671 101.766 92.7384C104.477 90.0098 106 86.3089 106 82.45V31.525C106 27.6661 104.477 23.9653 101.766 21.2366C99.0556 18.5079 95.379 16.975 91.5455 16.975ZM96.3636 82.45C96.3636 83.7363 95.856 84.9699 94.9524 85.8795C94.0488 86.789 92.8233 87.3 91.5455 87.3H14.4545C13.1767 87.3 11.9512 86.789 11.0476 85.8795C10.144 84.9699 9.63636 83.7363 9.63636 82.45V31.525C9.63636 30.2387 10.144 29.0051 11.0476 28.0955C11.9512 27.186 13.1767 26.675 14.4545 26.675H91.5455C92.8233 26.675 94.0488 27.186 94.9524 28.0955C95.856 29.0051 96.3636 30.2387 96.3636 31.525V82.45ZM28.9091 4.85C28.9091 3.5637 29.4167 2.33008 30.3203 1.42053C31.2239 0.51098 32.4494 0 33.7273 0H72.2727C73.5506 0 74.7761 0.51098 75.6797 1.42053C76.5833 2.33008 77.0909 3.5637 77.0909 4.85C77.0909 6.1363 76.5833 7.36992 75.6797 8.27947C74.7761 9.18902 73.5506 9.7 72.2727 9.7H33.7273C32.4494 9.7 31.2239 9.18902 30.3203 8.27947C29.4167 7.36992 28.9091 6.1363 28.9091 4.85ZM57.8182 52.1375H67.4545V61.8375H57.8182V71.5375H48.1818V61.8375H38.5455V52.1375H48.1818V42.4375H57.8182V52.1375Z"
      fill="#002366"
    />
  </svg>
);

/** 4 & 5. Eyeglasses icon for Hormonal Changes and Nutritional Deficiencies */
const GlassesIcon = () => (
  <svg
    width="50"
    height="50"
    viewBox="0 0 54 54"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {/* Left Arm extending upwards */}
    <path
      d="M10 40C9 28 10 18 16 11"
      stroke="#002366"
      strokeWidth="3.5"
      strokeLinecap="round"
    />
    {/* Right Arm extending upwards */}
    <path
      d="M44 40C45 28 44 18 38 11"
      stroke="#002366"
      strokeWidth="3.5"
      strokeLinecap="round"
    />
    {/* Bridge */}
    <path
      d="M23 39C25 36.5 29 36.5 31 39"
      stroke="#002366"
      strokeWidth="3.5"
      strokeLinecap="round"
    />
    {/* Left Lens */}
    <circle
      cx="17"
      cy="40"
      r="7.5"
      stroke="#002366"
      strokeWidth="3.5"
    />
    {/* Right Lens */}
    <circle
      cx="37"
      cy="40"
      r="7.5"
      stroke="#002366"
      strokeWidth="3.5"
    />
  </svg>
);

/* ── Card data ── */
export interface CauseCard {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const defaultCauses: CauseCard[] = [
  {
    id: "shock-loss",
    icon: <ShockLossIcon />,
    title: "Shock loss",
    description:
      "The body may reject the transplanted hair grafts, although it’s temporary. The initial shedding of hair can increase anxiety, but over time, the hair loss minimizes, and the grafted hair follicles stop shedding.",
  },
  {
    id: "improper-care",
    icon: <ImproperCareIcon />,
    title: "Improper care",
    description:
      "It’s advised to be gentle with the scalp while undergoing a hair transplant procedure, as improper care may cause infection at the site of implantation.",
  },
  {
    id: "surgical-skills",
    icon: <SurgicalSkillsIcon />,
    title: "Poor surgical skills",
    description:
      "When opting for a QHT hair transplant, always look for a reputable and trustworthy clinic. Avoid using low-cost clinics, as the damage post-treatment can be complicated due to poor handling of the issues.",
  },
  {
    id: "hormonal-changes",
    icon: <GlassesIcon />,
    title: "Hormonal Changes",
    description:
      "Variation in hormonal levels can cause shedding of hair, although it subsides once the hormones become balanced.",
  },
  {
    id: "nutritional-deficiencies",
    icon: <GlassesIcon />,
    title: "Nutritional Deficiencies",
    description:
      "Low iron and zinc levels can contribute to hair loss.",
  },
];

export interface CausesOfHairLossQhtProps {
  eyebrow?: string;
  titleLine1?: string;
  titleLine2?: string;
  subtitle?: string;
  causes?: CauseCard[];
}

export default function CausesOfHairLossQht({
  eyebrow,
  titleLine1 = "Causes of Hair Loss Leading to",
  titleLine2 = "QHT Hair Transplant",
  subtitle = "Understanding the early causes of QHT hair transplant loss can help in identifying the underlying factors that contribute to poor graft survival rates.",
  causes = defaultCauses,
}: CausesOfHairLossQhtProps) {
  return (
    <section className="w-full bg-white py-14 sm:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Section Header (centered) ── */}
        <div className="text-center max-w-[780px] mx-auto mb-12 sm:mb-16 lg:mb-20">
          {eyebrow && (
            <span className="font-['Plus_Jakarta_Sans'] text-[11.5px] sm:text-[13px] font-bold uppercase tracking-[0.22em] text-[#00A3FF] mb-2 sm:mb-3 block">
              {eyebrow}
            </span>
          )}
          <h2 className="font-['Plus_Jakarta_Sans'] text-[24px] sm:text-[34px] lg:text-[42px] font-extrabold tracking-[-0.03em] leading-[1.18]">
            <span className="text-[#001e56]">{titleLine1} </span>
            <br className="hidden sm:block" />
            <span className="text-[#00A3FF]">{titleLine2}</span>
          </h2>
          <p className="mt-4 sm:mt-5 text-[#556987] font-['Plus_Jakarta_Sans'] text-[14px] sm:text-[15.5px] leading-[1.7] font-normal max-w-[680px] mx-auto">
            {subtitle}
          </p>
        </div>

        {/* ── 3 on Top, 2 Centered Below Grid of Cause Cards ── */}
        <div className="flex flex-wrap justify-center gap-5 sm:gap-6 lg:gap-7 max-w-[1040px] mx-auto">
          {causes.map((cause) => (
            <div
              key={cause.id}
              className="w-full sm:w-[calc(50%-14px)] lg:w-[calc(33.333%-19px)] max-w-[330px] flex flex-col rounded-[24px] sm:rounded-[30px] bg-[#eef3f8] border border-[#dce8f2] p-6 sm:p-7 lg:p-8 transition-all duration-300 hover:shadow-[0_12px_32px_rgba(3,30,80,0.10)] hover:-translate-y-0.5"
            >
              {/* Icon container */}
              <div className="mb-5 sm:mb-6 shrink-0 flex items-center justify-start h-[56px] sm:h-[60px]">
                {cause.icon}
              </div>

              {/* Title */}
              <h3 className="font-['Plus_Jakarta_Sans'] text-[17px] sm:text-[18px] lg:text-[19px] font-bold text-[#001e56] mb-2.5 sm:mb-3 tracking-[-0.01em] leading-snug">
                {cause.title}
              </h3>

              {/* Description */}
              <p className="font-['Plus_Jakarta_Sans'] text-[13px] sm:text-[13.5px] leading-[1.65] text-[#556987] font-normal">
                {cause.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
