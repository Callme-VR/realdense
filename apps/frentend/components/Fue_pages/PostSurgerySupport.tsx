"use client";

import React from "react";

/* ── Custom SVGs matching the reference image ── */

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

/** 2. Prescription Medications: Medicine bottle with plus */
const PrescriptionIcon = () => (
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

/** 3. Customised Therapy: Document sheet with lines and checkmark */
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

/** 4. Access to Expert Surgeons: Doctor with stethoscope */
const DoctorIcon = () => (
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
    <circle cx="12" cy="7.5" r="3.5" />
    <path d="M5.5 21V19C5.5 16.3 7.8 14.2 10.5 14.2H13.5C16.2 14.2 18.5 16.3 18.5 19V21" />
    <path d="M9.5 14.2V16.5C9.5 17.9 10.6 19 12 19C13.4 19 14.5 17.9 14.5 16.5V14.2" />
    <circle cx="14.5" cy="18.5" r="1.2" fill="#0052CC" stroke="none" />
  </svg>
);

/* ── Support items data ── */
interface SupportItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const defaultItems: SupportItem[] = [
  {
    id: "follow-ups",
    icon: <CalendarCheckIcon />,
    title: "Regular Follow-Ups",
    description:
      "Scheduled follow-up appointments to monitor healing, suture removal and early hair growth.",
  },
  {
    id: "medications",
    icon: <PrescriptionIcon />,
    title: "Prescription Medications",
    description:
      "Antibiotics and painkillers for a comfortable and safe recovery.",
  },
  {
    id: "therapy",
    icon: <TherapyIcon />,
    title: "Customised Therapy",
    description:
      "Personalised post-recovery plan to support the health of transplanted and existing hair.",
  },
  {
    id: "surgeons",
    icon: <DoctorIcon />,
    title: "Access to Expert Surgeons",
    description:
      "Direct access to our doctors for addressing any concerns during the recovery process.",
  },
];

export interface PostSurgerySupportProps {
  eyebrow?: string;
  titlePart1?: string;
  titlePart2?: string;
  description?: string;
  items?: SupportItem[];
}

export default function PostSurgerySupport({
  eyebrow = "POST-CARE",
  titlePart1 = "Post–Surgery Support for",
  titlePart2 = "FUT Hair Transplant",
  description = "At RealDense, our care doesn't end after surgery. We provide complete post-operative support to ensure smooth recovery and long-lasting, natural results.",
  items = defaultItems,
}: PostSurgerySupportProps) {
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
              MIDDLE: Organic Curved Wavy Line with 4 Glowing Nodes
              (Visible on lg screens matching the 4 cards)
          ══════════════════════════════════════ */}
          <div className="hidden lg:flex justify-center items-center h-full relative self-stretch">
            <svg
              viewBox="0 0 100 600"
              className="w-full h-full max-h-[580px] overflow-visible"
              fill="none"
              preserveAspectRatio="none"
            >
              {/* Soft wavy spline connecting the 4 nodes */}
              <path
                d="M 45 75 C 45 150, 75 150, 75 225 C 75 300, 60 300, 60 375 C 60 450, 42 450, 42 525"
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
                <circle cx="75" cy="225" r="16" fill="#00A3FF" fillOpacity="0.18" />
                <circle cx="75" cy="225" r="8" fill="#00A3FF" />
                <circle cx="75" cy="225" r="3.8" fill="#FFFFFF" />
              </g>

              {/* Node 3 */}
              <g className="transition-transform duration-300 hover:scale-110">
                <circle cx="60" cy="375" r="16" fill="#00A3FF" fillOpacity="0.18" />
                <circle cx="60" cy="375" r="8" fill="#00A3FF" />
                <circle cx="60" cy="375" r="3.8" fill="#FFFFFF" />
              </g>

              {/* Node 4 */}
              <g className="transition-transform duration-300 hover:scale-110">
                <circle cx="42" cy="525" r="16" fill="#00A3FF" fillOpacity="0.18" />
                <circle cx="42" cy="525" r="8" fill="#00A3FF" />
                <circle cx="42" cy="525" r="3.8" fill="#FFFFFF" />
              </g>
            </svg>
          </div>

          {/* ══════════════════════════════════════
              RIGHT: 4 Floating Glowing Support Cards
          ══════════════════════════════════════ */}
          <div className="flex flex-col gap-4 sm:gap-5 w-full">
            {items.map((item) => (
              <div
                key={item.id}
                className="group relative bg-white rounded-[20px] sm:rounded-[26px] p-4.5 sm:p-6 lg:p-7 border border-[#cdebfd]/80 transition-all duration-300 hover:-translate-y-1"
                style={{
                  boxShadow:
                    "0 8px 32px -4px rgba(0, 163, 255, 0.16), 0 2px 10px rgba(0, 163, 255, 0.08)",
                }}
              >
                <div className="flex items-center gap-3.5 sm:gap-6">
                  {/* Circular icon container */}
                  <div className="w-[52px] h-[52px] sm:w-[66px] sm:h-[66px] rounded-full bg-[#EBF6FE] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105">
                    {item.icon}
                  </div>

                  {/* Card text */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-['Plus_Jakarta_Sans'] text-[17px] sm:text-[19px] font-bold text-[#001e56] tracking-tight mb-1">
                      {item.title}
                    </h3>
                    <p className="font-['Plus_Jakarta_Sans'] text-[13px] sm:text-[14px] text-[#556987] leading-[1.6]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
