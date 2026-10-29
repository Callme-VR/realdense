"use client";

import React from "react";

/** 1. Regular Follow-Ups: Calendar with checkmark */
const CalendarCheckIcon = () => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#0052CC"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-7 h-7 sm:w-8 sm:h-8"
  >
    <rect x="3" y="4" width="18" height="18" rx="3.5" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
    <path d="M8.5 15.5L11 18L16 13" strokeWidth="2.4" />
  </svg>
);

/** 2. Medication: Medicine bottle with plus */
const MedicationIcon = () => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#0052CC"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-7 h-7 sm:w-8 sm:h-8"
  >
    <path d="M8 3H16" strokeWidth="2.4" />
    <path d="M9 3V5.5C7.2 6.5 6.5 8.5 6.5 11V18C6.5 19.8 8 21.2 9.8 21.2H14.2C16 21.2 17.5 19.8 17.5 18V11C17.5 8.5 16.8 6.5 15 5.5V3" />
    <path d="M12 11.5V17.5M9 14.5H15" strokeWidth="2.4" />
  </svg>
);

/** 3. Personalized Therapy: Document sheet with lines and checkmark */
const TherapyIcon = () => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#0052CC"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-7 h-7 sm:w-8 sm:h-8"
  >
    <path d="M6 4C6 3.17 6.67 2.5 7.5 2.5H16.5C17.33 2.5 18 3.17 18 4V13" />
    <path d="M6 4V19.5C6 20.33 6.67 21 7.5 21H13" />
    <path d="M9.5 7.5H14.5" />
    <path d="M9.5 11.5H13" />
    <path d="M14 17.5L16.5 20L21.5 14" strokeWidth="2.4" />
  </svg>
);

export interface SupportItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const defaultSupportItems: SupportItem[] = [
  {
    id: "regular-follow-ups",
    icon: <CalendarCheckIcon />,
    title: "Regular Follow-Ups",
    description:
      "Scheduled follow-up appointments to monitor healing, suture removal and early hair growth.",
  },
  {
    id: "medication",
    icon: <MedicationIcon />,
    title: "Medication",
    description:
      "Personalized guidance on medication, hair washing, and scalp care supports healing.",
  },
  {
    id: "personalized-therapy",
    icon: <TherapyIcon />,
    title: "Personalized therapy",
    description:
      "Therapies are planned to strengthen scalp health and improve graft survival.",
  },
];

export interface HairRepairPostSurgerySupportProps {
  eyebrow?: string;
  titlePart1?: string;
  titlePart2?: string;
  description?: string;
  items?: SupportItem[];
}

export default function HairRepairPostSurgerySupport({
  eyebrow = "POST-CARE",
  titlePart1 = "Post–Surgery Support for",
  titlePart2 = "Hair Transplant Repair",
  description = "At RealDense, our care doesn't end after surgery. We provide complete post-operative support to ensure smooth recovery and long-lasting, natural results.",
  items = defaultSupportItems,
}: HairRepairPostSurgerySupportProps) {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-28 overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_80px_1.35fr] xl:grid-cols-[440px_90px_560px] items-center gap-10 lg:gap-0">
          {/* ══════════════════════════════════════
              LEFT: Eyebrow + Heading + Subtitle
          ══════════════════════════════════════ */}
          <div className="max-w-[500px]">
            <span className="font-['Plus_Jakarta_Sans'] text-[11.5px] sm:text-[13px] font-bold uppercase tracking-[0.24em] text-[#00A3FF] mb-2 sm:mb-3 block">
              {eyebrow}
            </span>
            <h2 className="font-['Plus_Jakarta_Sans'] text-[30px] sm:text-[40px] lg:text-[44px] font-extrabold tracking-[-0.03em] leading-[1.18]">
              <span className="text-[#001e56] block">{titlePart1}</span>
              <span className="text-[#00A3FF] block mt-1">{titlePart2}</span>
            </h2>
            <p className="mt-5 text-[#556987] font-['Plus_Jakarta_Sans'] text-[14.5px] sm:text-[15.5px] leading-[1.7] font-normal">
              {description}
            </p>
          </div>

          {/* ══════════════════════════════════════
              MIDDLE: Organic Curved Wavy Line with 3 Glowing Nodes
          ══════════════════════════════════════ */}
          <div className="hidden lg:flex justify-center items-center h-full relative self-stretch">
            <svg
              viewBox="0 0 100 480"
              className="w-full h-full max-h-[460px] overflow-visible"
              fill="none"
              preserveAspectRatio="none"
            >
              {/* Soft wavy spline connecting the 3 nodes */}
              <path
                d="M 45 75 C 45 160, 78 160, 78 240 C 78 320, 60 320, 60 405"
                stroke="#A8DCFD"
                strokeWidth="1.8"
                strokeLinecap="round"
                fill="none"
              />

              {/* Node 1 */}
              <g className="transition-transform duration-300 hover:scale-110">
                <circle cx="45" cy="75" r="16" fill="#00A3FF" fillOpacity="0.18" />
                <circle cx="45" cy="75" r="8" fill="#00A3FF" />
                <circle cx="45" cy="75" r="3.8" fill="#FFFFFF" />
              </g>

              {/* Node 2 */}
              <g className="transition-transform duration-300 hover:scale-110">
                <circle cx="78" cy="240" r="16" fill="#00A3FF" fillOpacity="0.18" />
                <circle cx="78" cy="240" r="8" fill="#00A3FF" />
                <circle cx="78" cy="240" r="3.8" fill="#FFFFFF" />
              </g>

              {/* Node 3 */}
              <g className="transition-transform duration-300 hover:scale-110">
                <circle cx="60" cy="405" r="16" fill="#00A3FF" fillOpacity="0.18" />
                <circle cx="60" cy="405" r="8" fill="#00A3FF" />
                <circle cx="60" cy="405" r="3.8" fill="#FFFFFF" />
              </g>
            </svg>
          </div>

          {/* ══════════════════════════════════════
              RIGHT: 3 Floating Rounded Cards
          ══════════════════════════════════════ */}
          <div className="flex flex-col gap-5 sm:gap-6 w-full">
            {items.map((item) => (
              <div
                key={item.id}
                className="group relative rounded-[22px] sm:rounded-[26px] bg-white border border-[#E1F1FD] p-5 sm:p-6 lg:p-7 shadow-[0_8px_30px_rgba(0,163,255,0.08)] hover:shadow-[0_16px_40px_rgba(0,163,255,0.16)] transition-all duration-300 hover:-translate-y-1 flex items-center gap-5 sm:gap-6"
              >
                {/* Left: Soft-blue circular icon badge */}
                <div className="shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#EBF6FE] flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                  {item.icon}
                </div>

                {/* Right: Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-['Plus_Jakarta_Sans'] text-[17px] sm:text-[19px] font-bold text-[#001e56] leading-snug tracking-[-0.01em] mb-1.5 sm:mb-2">
                    {item.title}
                  </h3>
                  <p className="font-['Plus_Jakarta_Sans'] text-[13px] sm:text-[14px] leading-[1.6] text-[#556987] font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

