"use client";

import React from "react";

/* ── 1. Poor Hairline Icon (Head with irregular hairline outline) ── */
const PoorHairlineIcon = () => (
  <svg
    width="50"
    height="50"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className="w-11 h-11 text-[#002366]"
  >
    <circle cx="12" cy="8" r="4.5" stroke="currentColor" strokeWidth="1.8" />
    <path
      d="M8.5 7C9.5 5.5 10.5 6 12 5C13.5 6 14.5 5.5 15.5 7"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <path
      d="M5 20C5 16.5 8 14.5 12 14.5C16 14.5 19 16.5 19 20"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

/* ── 2. Graft Survival Icon (Follicle root / bulb) ── */
const GraftSurvivalIcon = () => (
  <svg
    width="50"
    height="50"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className="w-11 h-11 text-[#002366]"
  >
    <path
      d="M12 2V14"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <path
      d="M9 14C9 16.5 10.3 20 12 21C13.7 20 15 16.5 15 14C15 12.5 13.7 11.5 12 11.5C10.3 11.5 9 12.5 9 14Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
    <path
      d="M7 6C8 7.5 10 9 12 9"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M17 6C16 7.5 14 9 12 9"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

/* ── 3. Visible Scars Icon (Incision mark with cross sutures) ── */
const VisibleScarsIcon = () => (
  <svg
    width="50"
    height="50"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className="w-11 h-11 text-[#002366]"
  >
    <path
      d="M4 20L20 4"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
    />
    <path
      d="M6 14L10 18"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <path
      d="M10 10L14 14"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <path
      d="M14 6L18 10"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

/* ── 4. Poor Density Icon (Hair crown with thinning patch) ── */
const PoorDensityIcon = () => (
  <svg
    width="50"
    height="50"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className="w-11 h-11 text-[#002366]"
  >
    <path
      d="M12 3C7.5 3 4 6.8 4 11.5C4 16 7 19.5 10 21"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <path
      d="M12 3C16.5 3 20 6.8 20 11.5C20 16 17 19.5 14 21"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <path
      d="M12 8V12M9 10V13M15 10V13"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <circle cx="12" cy="17" r="1.5" fill="currentColor" />
  </svg>
);

/* ── 5. Patient Personal Factors Icon (User profile with badge) ── */
const PatientPersonalFactorsIcon = () => (
  <svg
    width="50"
    height="50"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className="w-11 h-11 text-[#002366]"
  >
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="12" cy="9" r="3" stroke="currentColor" strokeWidth="1.8" />
    <path
      d="M7 18C7.5 15.5 9.5 14 12 14C14.5 14 16.5 15.5 17 18"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

export interface HairRepairCauseCard {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const defaultCauses: HairRepairCauseCard[] = [
  {
    id: "poor-hairline",
    icon: <PoorHairlineIcon />,
    title: "Poor Hairline",
    description:
      "An irregular hairline may need proper correction for the desired look.",
  },
  {
    id: "graft-survival",
    icon: <GraftSurvivalIcon />,
    title: "Graft Survival",
    description:
      "Failed grafts make Hair Transplant Repair at Realdense Clinic essential.",
  },
  {
    id: "visible-scars",
    icon: <VisibleScarsIcon />,
    title: "Visible Scars",
    description:
      "The scars caused due to improper methods may need repair.",
  },
  {
    id: "poor-density",
    icon: <PoorDensityIcon />,
    title: "Poor Density",
    description:
      "Patchy hair growth may lead to patients opting for full coverage.",
  },
  {
    id: "personal-factors",
    icon: <PatientPersonalFactorsIcon />,
    title: "Patient Personal Factors",
    description:
      "Before a Hair Transplant Repair, if the patient consumes alcohol or smokes, then the healing is affected.",
  },
];

export interface HairRepairCausesOfHairLossProps {
  titleLine1?: string;
  titleAccent?: string;
  subtitle?: string;
  causes?: HairRepairCauseCard[];
}

export default function HairRepairCausesOfHairLoss({
  titleLine1 = "Causes of Hair Loss Leading to",
  titleAccent = "Hair Transplant Repair",
  subtitle = "People need early Hair Transplant Repair for proper treatment, and our Clinic offers expert care for lasting results.",
  causes = defaultCauses,
}: HairRepairCausesOfHairLossProps) {
  // First 3 cards on top row, last 2 cards centered on bottom row
  const topRowCauses = causes.slice(0, 3);
  const bottomRowCauses = causes.slice(3, 5);

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

        {/* ── Bottom Row: 2 Cards Centered ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[660px] mx-auto">
          {bottomRowCauses.map((cause) => (
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
      </div>
    </section>
  );
}

