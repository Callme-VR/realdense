"use client";

import React from "react";

/* ── 1. Declining Chart Icon (Stress) ── */
const DecliningChartIcon = () => (
  <svg
    width="54"
    height="50"
    viewBox="0 0 93 86"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className="w-12 h-11 text-[#002366]"
  >
    <path
      d="M65.8467 60.9449H93V33.8583L65.8467 60.9449ZM9.50365 24.9874L35.2993 50.7197L55.6642 30.4047L76.0292 50.7197L82.8175 43.948L55.6642 16.8614L35.2993 37.1764L9.50365 11.5795V0H0V86H93V76.5197H9.50365V24.9874Z"
      fill="currentColor"
    />
  </svg>
);

/* ── 2. Medical Briefcase / Cross Icon ── */
const MedicalIcon = () => (
  <svg
    width="54"
    height="50"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-12 h-12 text-[#002366]"
  >
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    <line x1="12" y1="11" x2="12" y2="17" />
    <line x1="9" y1="14" x2="15" y2="14" />
  </svg>
);

/* ── 3. DNA Helix Icon (Genetics / Hormonal) ── */
const DnaHelixIcon = () => (
  <svg
    width="50"
    height="58"
    viewBox="0 0 71 88"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className="w-12 h-14 text-[#002366]"
  >
    <path
      d="M61.2117 62.2222C64.7379 67.6297 67.0245 73.843 67.7507 80.4444C67.9155 81.9446 68 83.4648 68 85M67.7507 80.4444H21.5714M35.5 44L34.2497 43.6492C23.8777 40.7419 15.3121 34.2488 9.78814 25.7778C6.26202 20.3704 3.97528 14.157 3.24932 7.55556C3.08436 6.05546 3 4.53527 3 3M3.24932 7.55556H49.4286M3 85C3 66.1245 15.7526 49.5359 34.2497 44.3508L35.5 44M35.5 44L36.7503 43.6492C55.2475 38.4641 68 21.8754 68 3M35.5 44L36.7503 44.3508C47.1225 47.2581 55.6881 53.7512 61.2117 62.2222M37.8214 25.7778H9.78814M33.1786 62.2222H61.2117"
      stroke="currentColor"
      strokeWidth="6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/* ── 4. Nutritional Deficiencies – Molecule / Virus Icon ── */
const MoleculeIcon = () => (
  <svg
    width="54"
    height="54"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-12 h-12 text-[#002366]"
  >
    <circle cx="12" cy="12" r="5" />
    <path d="M12 1v3" />
    <path d="M12 20v3" />
    <path d="M4.22 4.22l2.12 2.12" />
    <path d="M17.66 17.66l2.12 2.12" />
    <path d="M1 12h3" />
    <path d="M20 12h3" />
    <path d="M4.22 19.78l2.12-2.12" />
    <path d="M17.66 6.34l2.12-2.12" />
  </svg>
);

export interface CauseItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const defaultCauses: CauseItem[] = [
  {
    id: "genetics",
    title: "Genetics",
    description: "Family history baldness, DHT sensitivity.",
    icon: <DnaHelixIcon />,
  },
  {
    id: "hormonal-imbalances",
    title: "Hormonal Imbalances",
    description: "PCOS, imbalance of thyroid or testosterone.",
    icon: <DnaHelixIcon />,
  },
  {
    id: "medical",
    title: "Medical",
    description: "Scalp infection, auto immune complications, chemical damage.",
    icon: <MedicalIcon />,
  },
  {
    id: "stress",
    title: "Stress",
    description: "Bad sleep cycle, smoking, alcohol.",
    icon: <DecliningChartIcon />,
  },
  {
    id: "nutritional-deficiencies",
    title: "Nutritional Deficiencies",
    description: "Low protein, iron, zinc, Vitamins.",
    icon: <MoleculeIcon />,
  },
];

export interface CustomHairCausesProps {
  titleLine1?: string;
  titleLine2?: string;
  subtitle?: string;
  causes?: CauseItem[];
}

export default function CustomHairCausesOfHairLoss({
  titleLine1 = "Causes of Hair Loss Leading to",
  titleLine2 = "Custom Hairline Transplant",
  subtitle = "Early hairline loss can occur due to genetic factors, hormonal changes, lifestyle habits, or underlying medical conditions.",
  causes = defaultCauses,
}: CustomHairCausesProps) {
  const topRow = causes.slice(0, 3);
  const bottomRow = causes.slice(3);

  return (
    <section className="w-full bg-white py-14 sm:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Section Header (centered) ── */}
        <div className="text-center max-w-[840px] mx-auto mb-12 sm:mb-16 lg:mb-20">
          <h2 className="font-['Plus_Jakarta_Sans'] text-[26px] sm:text-[36px] lg:text-[44px] font-extrabold tracking-[-0.03em] leading-[1.18]">
            <span className="text-[#001e56] block">{titleLine1}</span>
            <span className="text-[#00A3FF] block mt-1">{titleLine2}</span>
          </h2>
          <p className="mt-4 sm:mt-5 text-[#556987] font-['Plus_Jakarta_Sans'] text-[14px] sm:text-[15.5px] leading-[1.7] font-normal max-w-[700px] mx-auto">
            {subtitle}
          </p>
        </div>

        {/* ── Top Row: 3 Cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 mb-6 sm:mb-7 max-w-[1060px] mx-auto">
          {topRow.map((cause) => (
            <div
              key={cause.id}
              className="group relative flex flex-col justify-start rounded-[26px] sm:rounded-[32px] bg-[#eef3f8] border border-[#dce8f2] p-6 sm:p-8 transition-all duration-300 hover:shadow-[0_12px_32px_rgba(3,30,80,0.09)] hover:-translate-y-0.5"
            >
              {/* Icon container */}
              <div className="mb-5 sm:mb-6 shrink-0 flex items-center justify-start h-[60px]">
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

        {/* ── Bottom Row: 2 Cards (centered) ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-7 max-w-[720px] mx-auto">
          {bottomRow.map((cause) => (
            <div
              key={cause.id}
              className="group relative flex flex-col justify-start rounded-[26px] sm:rounded-[32px] bg-[#eef3f8] border border-[#dce8f2] p-6 sm:p-8 transition-all duration-300 hover:shadow-[0_12px_32px_rgba(3,30,80,0.09)] hover:-translate-y-0.5"
            >
              {/* Icon container */}
              <div className="mb-5 sm:mb-6 shrink-0 flex items-center justify-start h-[60px]">
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

