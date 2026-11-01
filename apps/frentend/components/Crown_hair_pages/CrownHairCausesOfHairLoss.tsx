"use client";

import React from "react";

/* ── 1. Shock DNA Icon ── */
const ShockDnaIcon = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className="w-11 h-11 text-[#002366]"
  >
    <path
      d="M5 3C8 6 16 7 19 10M5 14C8 17 16 18 19 21"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <path
      d="M19 3C16 6 8 7 5 10M19 14C16 17 8 18 5 21"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <path
      d="M7 5.5L17 7.5M7 16.5L17 18.5"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <circle cx="12" cy="12" r="2" fill="currentColor" />
  </svg>
);

/* ── 2. Poor Post-Transplant Care Icon ── */
const PostTransplantCareIcon = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className="w-11 h-11 text-[#002366]"
  >
    <path
      d="M12 21C16.5 21 19 17.5 19 13C19 8.5 16 5 12 5C8 5 5 8.5 5 13C5 17.5 7.5 21 12 21Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <path
      d="M8.5 10C9.5 9 10.5 9.5 12 9C13.5 9.5 14.5 9 15.5 10"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <path
      d="M10 11.5V13.5M12 11V13.5M14 11.5V13.5"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <path
      d="M14 2L18 6M17 2L13 6"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

/* ── 3. Weak Donor Grafts Icon ── */
const WeakDonorGraftsIcon = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className="w-11 h-11 text-[#002366]"
  >
    <circle cx="12" cy="12" r="9.5" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="12" cy="9.5" r="3.2" stroke="currentColor" strokeWidth="1.8" />
    <path
      d="M7.5 17.5C8.5 15.2 10.2 14.2 12 14.2C13.8 14.2 15.5 15.2 16.5 17.5"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

/* ── 4. Infections Icon ── */
const InfectionsIcon = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className="w-11 h-11 text-[#002366]"
  >
    <path
      d="M12 3C7.5 3 5 6.5 5 11C5 15 7.5 19 12 21C16.5 19 19 15 19 11C19 6.5 16.5 3 12 3Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <path
      d="M12 3V21"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeDasharray="2 2"
    />
    <circle cx="8.5" cy="8.5" r="1" fill="currentColor" />
    <circle cx="7.5" cy="12.5" r="1" fill="currentColor" />
    <circle cx="9.5" cy="15.5" r="1" fill="currentColor" />
  </svg>
);

export interface CrownHairCauseCard {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const defaultCauses: CrownHairCauseCard[] = [
  {
    id: "shock",
    icon: <ShockDnaIcon />,
    title: "Shock",
    description:
      "Hair shedding due to trauma or shock experienced by the individual.",
  },
  {
    id: "poor-post-transplant-care",
    icon: <PostTransplantCareIcon />,
    title: "Poor Post–transplant Care",
    description:
      "Not following the care plan properly may cause early loss or poor growth",
  },
  {
    id: "weak-donor-grafts",
    icon: <WeakDonorGraftsIcon />,
    title: "Weak Donor Grafts",
    description: "If the donor hair is weak, it may lead to poor results",
  },
  {
    id: "infections",
    icon: <InfectionsIcon />,
    title: "Infections",
    description:
      "Poor hygiene or any medical complications may affect graft retention rate.",
  },
];

export interface CrownHairCausesOfHairLossProps {
  titleLine1?: string;
  titleAccent?: string;
  subtitle?: string;
  causes?: CrownHairCauseCard[];
}

export default function CrownHairCausesOfHairLoss({
  titleLine1 = "Causes of Hair Loss Leading to",
  titleAccent = "Crown Hair Transplant",
  subtitle = "Early hairline loss can occur due to genetic factors, hormonal changes, lifestyle habits, or underlying medical conditions.",
  causes = defaultCauses,
}: CrownHairCausesOfHairLossProps) {
  const topRowCauses = causes.slice(0, 3);
  const bottomRowCauses = causes.slice(3, 4);

  return (
    <section className="w-full bg-white py-14 sm:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Section Header ── */}
        <div className="text-center max-w-[800px] mx-auto mb-12 sm:mb-16">
          <h2 className="font-['Plus_Jakarta_Sans'] text-[26px] sm:text-[36px] lg:text-[44px] font-extrabold tracking-[-0.03em] leading-[1.16]">
            <span className="text-[#001e56]">{titleLine1} </span>
            <span className="text-[#00A3FF] block sm:inline">{titleAccent}</span>
          </h2>
          <p className="mt-3.5 sm:mt-4 text-[#556987] font-['Plus_Jakarta_Sans'] text-[14px] sm:text-[15.5px] leading-[1.65] font-normal max-w-[680px] mx-auto">
            {subtitle}
          </p>
        </div>

        {/* ── Top Row: 3 Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1000px] mx-auto mb-6">
          {topRowCauses.map((cause) => (
            <div
              key={cause.id}
              className="flex flex-col justify-start rounded-[24px] sm:rounded-[28px] bg-[#edf3f8] p-6 sm:p-7 shadow-[0_4px_16px_rgba(3,30,80,0.04)] hover:shadow-[0_10px_28px_rgba(3,30,80,0.08)] transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon Container */}
              <div className="mb-5">{cause.icon}</div>

              {/* Title */}
              <h3 className="font-['Plus_Jakarta_Sans'] text-[18px] sm:text-[19px] font-bold text-[#001e56] tracking-tight mb-2.5">
                {cause.title}
              </h3>

              {/* Description */}
              <p className="font-['Plus_Jakarta_Sans'] text-[13px] sm:text-[13.5px] leading-[1.65] text-[#556987]">
                {cause.description}
              </p>
            </div>
          ))}
        </div>

        {/* ── Bottom Row: 1 Card Centered ── */}
        <div className="flex justify-center max-w-[1000px] mx-auto">
          {bottomRowCauses.map((cause) => (
            <div
              key={cause.id}
              className="w-full md:w-[calc(33.333%-16px)] flex flex-col justify-start rounded-[24px] sm:rounded-[28px] bg-[#edf3f8] p-6 sm:p-7 shadow-[0_4px_16px_rgba(3,30,80,0.04)] hover:shadow-[0_10px_28px_rgba(3,30,80,0.08)] transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon Container */}
              <div className="mb-5">{cause.icon}</div>

              {/* Title */}
              <h3 className="font-['Plus_Jakarta_Sans'] text-[18px] sm:text-[19px] font-bold text-[#001e56] tracking-tight mb-2.5">
                {cause.title}
              </h3>

              {/* Description */}
              <p className="font-['Plus_Jakarta_Sans'] text-[13px] sm:text-[13.5px] leading-[1.65] text-[#556987]">
                {cause.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

