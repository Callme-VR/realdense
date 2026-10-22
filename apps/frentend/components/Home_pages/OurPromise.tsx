
"use client";

import React from "react";

interface PromisePillar {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const pillars: PromisePillar[] = [
  {
    id: "proven-techniques",
    title: "Safe & Proven Techniques",
    description:
      "We use advanced, clinically proven methods to ensure your safety and the best possible results.",
    icon: (
      <svg
        className="h-5 w-5 max-sm:h-4 max-sm:w-4"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <circle cx="12" cy="10" r="1.5" />
        <path d="M12 11.5v3" />
      </svg>
    ),
  },
  {
    id: "treatment-plans",
    title: "Personalised Treatment Plans",
    description:
      "Every individual is different. We create customised plans based on your unique needs and goals.",
    icon: (
      <svg
        className="h-5 w-5 max-sm:h-4 max-sm:w-4"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    id: "care-support",
    title: "Expert Care & Support",
    description:
      "From consultation to recovery, our team is with you at every step of your journey.",
    icon: (
      <svg
        className="h-5 w-5 max-sm:h-4 max-sm:w-4"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    id: "natural-results",
    title: "Natural-Looking Results",
    description:
      "Our focus is on creating natural, undetectable results that blend seamlessly with your existing hair.",
    icon: (
      <svg
        className="h-5 w-5 max-sm:h-4 max-sm:w-4"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6 3h12l4 7-10 11L2 10l4-7z" />
        <path d="M2 10h20" />
        <path d="M12 21L7.5 10 10 3" />
        <path d="M12 21l4.5-11L14 3" />
      </svg>
    ),
  },
  {
    id: "minimal-downtime",
    title: "Minimal Downtime",
    description:
      "Get back to your routine faster with minimally invasive procedures and quick recovery.",
    icon: (
      <svg
        className="h-5 w-5 max-sm:h-4 max-sm:w-4"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    id: "transparent-process",
    title: "Transparent Process",
    description:
      "Clear guidance, honest advice and no hidden costs so you always know what to expect.",
    icon: (
      <svg
        className="h-5 w-5 max-sm:h-4 max-sm:w-4"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <polyline points="9 15 11 17 15 13" />
      </svg>
    ),
  },
];

export default function OurPromise(): React.JSX.Element {
  return (
    <section
      id="our-promise"
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#e9f4fd]/50 via-white to-white py-12 max-sm:py-8 sm:py-16 lg:py-20"
    >
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[280px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-100/30 blur-3xl sm:h-[360px] sm:w-[720px]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-5 max-sm:px-3 sm:px-8 lg:px-12">
        {/* Header — no entrance animation */}
        <div className="mx-auto mb-12 max-sm:mb-8 flex max-w-3xl flex-col items-center text-center sm:mb-16 lg:mb-20">
          <div className="mb-3.5 max-sm:mb-2 max-sm:gap-0 inline-flex items-center gap-3.5">
            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#64748B] sm:text-[11.5px]">
              OUR PROMISE
            </span>

            <div className="h-[2px] w-8 rounded-full bg-[#94a3b8] sm:w-10 max-sm:hidden" />
          </div>

          <h2 className="text-3xl max-sm:text-[21px] max-sm:leading-tight font-extrabold leading-[1.14] tracking-tight text-[#001e56] sm:text-4xl lg:text-[46px]">
            <span>Your Hair. </span>

            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #0cb0f2 0%, #0196e3 100%)",
              }}
            >
              Our Commitment.
            </span>
          </h2>

          <p className="mt-4 max-sm:mt-2.5 max-sm:max-w-[340px] max-sm:text-[12px] max-sm:leading-relaxed max-w-[620px] text-[14px] font-normal leading-relaxed text-[#4A5568] sm:text-[16.5px]">
            We combine advanced techniques, medical expertise, and personalised
            care to deliver natural-looking, long-lasting results.
          </p>
        </div>

        {/* Responsive Grid — cards have no entrance animation */}
        <div className="grid grid-cols-1 max-sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar, index) => {
            const isLast = index === pillars.length - 1;
            const isDesktopRightColumn = index % 3 === 2;
            const isTabletRightColumn = index % 2 === 1;

            const isMobileBottomRow =
              pillar.id === "care-support" || pillar.id === "transparent-process";
            const isMobileLeftColumn =
              pillar.id === "proven-techniques" ||
              pillar.id === "natural-results" ||
              pillar.id === "care-support";

            const mobileOrderClass =
              pillar.id === "proven-techniques"
                ? "max-sm:order-1"
                : pillar.id === "treatment-plans"
                ? "max-sm:order-2"
                : pillar.id === "natural-results"
                ? "max-sm:order-3"
                : pillar.id === "minimal-downtime"
                ? "max-sm:order-4"
                : pillar.id === "care-support"
                ? "max-sm:order-5"
                : "max-sm:order-6";

            return (
              <div
                key={pillar.id}
                className={`group relative overflow-hidden rounded-2xl bg-white p-5 max-sm:px-2.5 max-sm:py-3.5 sm:p-7 ${mobileOrderClass}`}
              >
                {/* Mobile Horizontal Separator */}
                {!isMobileBottomRow && (
                  <div className="pointer-events-none absolute bottom-0 left-5 right-5 max-sm:left-2 max-sm:right-2 h-[1.5px] rounded-full bg-[#cbd5e1] opacity-75 md:hidden" />
                )}

                {/* Mobile Vertical Separator */}
                {isMobileLeftColumn && (
                  <div className="pointer-events-none absolute right-0 top-3.5 bottom-3.5 w-[1.5px] rounded-full bg-[#cbd5e1] opacity-75 md:hidden" />
                )}

                {/* Tablet Horizontal Separator */}
                {index < 4 && (
                  <div className="pointer-events-none absolute bottom-0 left-7 right-7 hidden h-[1.5px] rounded-full bg-[#cbd5e1] opacity-75 md:block lg:hidden" />
                )}

                {/* Tablet Vertical Separator */}
                {!isTabletRightColumn && (
                  <div className="pointer-events-none absolute right-0 top-7 bottom-7 hidden w-[1.5px] rounded-full bg-[#cbd5e1] opacity-75 md:block lg:hidden" />
                )}

                {/* Desktop Horizontal Separator */}
                {index < 3 && (
                  <div className="pointer-events-none absolute bottom-0 left-7 right-7 hidden h-[2px] rounded-full bg-[#cbd5e1] opacity-75 lg:block" />
                )}

                {/* Desktop Vertical Separator */}
                {!isDesktopRightColumn && (
                  <div className="pointer-events-none absolute right-0 top-7 bottom-7 hidden w-[2px] rounded-full bg-[#cbd5e1] opacity-75 lg:block" />
                )}

                {/* Only animation retained: blue gradient rises on hover */}
                <div
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-0 bg-gradient-to-t from-[#9DDAF8] via-[#DDF3FC] to-white transition-[height] duration-500 ease-out group-hover:h-full"
                  aria-hidden="true"
                />

                {/* Card Content */}
                <div className="relative z-10 flex items-start gap-4 max-sm:gap-2">
                  {/* Icon */}
                  <div className="flex h-11 w-11 max-sm:h-8 max-sm:w-8 max-sm:rounded-full shrink-0 items-center justify-center rounded-xl bg-[#edf6fe] text-[#001e56] shadow-sm sm:h-12 sm:w-12">
                    {pillar.icon}
                  </div>

                  {/* Text */}
                  <div className="flex min-w-0 flex-col pt-0.5 max-sm:pt-0">
                    <h3 className="mb-1.5 max-sm:mb-1 text-[16px] max-sm:text-[12px] max-sm:leading-[1.25] font-bold leading-snug tracking-tight text-[#001e56] sm:text-[17px]">
                      {pillar.title}
                    </h3>

                    <p className="text-[14px] max-sm:text-[10px] max-sm:leading-[1.35] leading-relaxed text-[#64748b] sm:text-[14.5px]">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}