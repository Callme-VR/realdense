"use client";

import React from "react";

const CalendarIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#0052cc"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-7 h-7 sm:w-7.5 sm:h-7.5"
  >
    <rect x="3" y="4" width="18" height="18" rx="3.5" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
    <path d="M8.5 15.5L11 18L16 13" strokeWidth="2.4" />
  </svg>
);

const MedicineIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#0052cc"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-7 h-7 sm:w-7.5 sm:h-7.5"
  >
    <path d="M8 3H16" strokeWidth="2.4" />
    <path d="M9 3V5.5C7.2 6.5 6.5 8.5 6.5 11V18C6.5 19.8 8 21.2 9.8 21.2H14.2C16 21.2 17.5 19.8 17.5 18V11C17.5 8.5 16.8 6.5 15 5.5V3" />
    <path d="M12 11.5V17.5M9 14.5H15" strokeWidth="2.4" />
  </svg>
);

const DocumentIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#0052cc"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-7 h-7 sm:w-7.5 sm:h-7.5"
  >
    <path d="M6 4C6 3.17 6.67 2.5 7.5 2.5H16.5C17.33 2.5 18 3.17 18 4V13" />
    <path d="M6 4V19.5C6 20.33 6.67 21 7.5 21H13" />
    <path d="M9.5 7.5H14.5" />
    <path d="M9.5 11.5H13" />
    <path d="M14 17.5L16.5 20L21.5 14" strokeWidth="2.4" />
  </svg>
);

export interface SupportCardItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const defaultCards: SupportCardItem[] = [
  {
    id: "recovery-programs",
    icon: <CalendarIcon />,
    title: "Detailed Recovery Programs",
    description:
      "Personalized aftercare plans for QHT unshaven hair transplant patients.",
  },
  {
    id: "follow-up",
    icon: <MedicineIcon />,
    title: "Follow–Up Consultations",
    description:
      "Personalized aftercare for unshaven QHT patients.",
  },
  {
    id: "help-support",
    icon: <DocumentIcon />,
    title: "24/7 Help and Support",
    description:
      "24/7 support for post-transplant questions and concerns.",
  },
];

export interface NoShavePostSurgerySupportProps {
  eyebrow?: string;
  titlePart1?: string;
  titlePart2?: string;
  description?: string;
  items?: SupportCardItem[];
}

export default function NoShavePostSurgerySupport({
  eyebrow = "POST-CARE",
  titlePart1 = "Post–Surgery Support for",
  titlePart2 = "Unshaven Hair Transplant",
  description = "At RealDense, our care doesn't end after surgery. We provide complete post-operative support to ensure smooth recovery and long-lasting, natural results.",
  items = defaultCards,
}: NoShavePostSurgerySupportProps) {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-28 overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-14 xl:gap-20">
          {/* ══════════════════════════════════════
              LEFT COLUMN: Eyebrow + Heading + Description
          ══════════════════════════════════════ */}
          <div className="w-full lg:max-w-[480px] xl:max-w-[500px] shrink-0">
            <span className="font-['Plus_Jakarta_Sans'] text-[11.5px] sm:text-[13px] font-bold uppercase tracking-[0.24em] text-[#00A3FF] mb-2 sm:mb-3 block">
              {eyebrow}
            </span>
            <h2 className="font-['Plus_Jakarta_Sans'] text-[30px] sm:text-[40px] lg:text-[44px] font-extrabold tracking-[-0.03em] leading-[1.18]">
              <span className="text-[#001e56] block">{titlePart1}</span>
              <span className="text-[#00A3FF] block mt-1">{titlePart2}</span>
            </h2>
            <p className="mt-5 text-[#556987] font-['Plus_Jakarta_Sans'] text-[14.5px] sm:text-[15.5px] leading-[1.7] font-normal max-w-[460px]">
              {description}
            </p>
          </div>

          {/* ══════════════════════════════════════
              RIGHT COLUMN: The 3 Cards + Connected Curved Spline
          ══════════════════════════════════════ */}
          <div className="relative w-full max-w-[560px] lg:max-w-[540px] xl:max-w-[580px]">
            {/* ── Curved SVG Arch with 3 Glowing Nodes (Desktop) ── */}
            <div
              className="hidden lg:block absolute -left-[76px] xl:-left-[88px] top-0 bottom-0 w-[76px] xl:w-[88px] pointer-events-none select-none z-10"
              aria-hidden="true"
            >
              <svg
                viewBox="0 0 80 378"
                className="w-full h-full overflow-visible"
                fill="none"
                preserveAspectRatio="none"
              >
                {/* Smooth continuous curved spline connecting strictly from Node 1 to Node 3 */}
                <path
                  d="M 24 55 C 38 105, 64 145, 64 189 C 64 233, 36 275, 18 323"
                  stroke="#A8DCFD"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  fill="none"
                />

                {/* Node 1: Exactly centered with Card 1 (y = 55) */}
                <g className="transition-transform duration-300">
                  <circle cx="24" cy="55" r="15" fill="#00A3FF" fillOpacity="0.18" />
                  <circle cx="24" cy="55" r="7.5" fill="#0077e6" />
                  <circle cx="24" cy="55" r="3.2" fill="#FFFFFF" />
                </g>

                {/* Node 2: Exactly centered with Card 2 (y = 189, bowing outward to the right) */}
                <g className="transition-transform duration-300">
                  <circle cx="64" cy="189" r="15" fill="#00A3FF" fillOpacity="0.18" />
                  <circle cx="64" cy="189" r="7.5" fill="#0077e6" />
                  <circle cx="64" cy="189" r="3.2" fill="#FFFFFF" />
                </g>

                {/* Node 3: Exactly centered with Card 3 (y = 323, bowing inward to the left) */}
                <g className="transition-transform duration-300">
                  <circle cx="18" cy="323" r="15" fill="#00A3FF" fillOpacity="0.18" />
                  <circle cx="18" cy="323" r="7.5" fill="#0077e6" />
                  <circle cx="18" cy="323" r="3.2" fill="#FFFFFF" />
                </g>
              </svg>
            </div>

            {/* ── 3 Support Cards ── */}
            <div className="flex flex-col gap-6 w-full">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="group relative bg-white rounded-[26px] sm:rounded-[30px] p-5 sm:px-7 sm:py-6 border border-[#cdebfd] transition-all duration-300 hover:-translate-y-0.5 min-h-[110px] flex items-center"
                  style={{
                    boxShadow:
                      "0 12px 36px -4px rgba(0, 163, 255, 0.14), 0 2px 10px rgba(0, 163, 255, 0.05)",
                  }}
                >
                  <div className="flex items-center gap-4 sm:gap-6 w-full">
                    {/* Circular Icon Container */}
                    <div className="w-[52px] h-[52px] sm:w-[62px] sm:h-[62px] rounded-full bg-[#EBF6FE] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105">
                      {item.icon}
                    </div>

                    {/* Card Text */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-['Plus_Jakarta_Sans'] text-[17px] sm:text-[19px] lg:text-[20px] font-bold text-[#001e56] tracking-tight leading-snug">
                        {item.title}
                      </h3>
                      <p className="font-['Plus_Jakarta_Sans'] text-[13px] sm:text-[13.5px] text-[#556987] leading-[1.6] mt-1">
                        {item.description}
                      </p>
                    </div>
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
