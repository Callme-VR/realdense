"use client";

import React from "react";
import { motion } from "motion/react";

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
        className="h-5 w-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
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
        className="h-5 w-5"
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
        className="h-5 w-5"
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
        className="h-5 w-5"
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
        className="h-5 w-5"
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
        className="h-5 w-5"
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
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#e9f4fd]/50 via-white to-white py-12 sm:py-16 lg:py-20"
    >
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[280px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-100/30 blur-3xl sm:h-[360px] sm:w-[720px]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto mb-12 flex max-w-3xl flex-col items-center text-center sm:mb-16 lg:mb-20"
        >
          <div className="mb-3.5 inline-flex items-center gap-3.5">
            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#64748B] sm:text-[11.5px]">
              OUR PROMISE
            </span>

            <div className="h-[2px] w-8 rounded-full bg-[#94a3b8] sm:w-10" />
          </div>

          <h2 className="text-3xl font-extrabold leading-[1.14] tracking-tight text-[#001e56] sm:text-4xl lg:text-[46px]">
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

          <p className="mt-4 max-w-[620px] text-[14px] font-normal leading-relaxed text-[#4A5568] sm:text-[16.5px]">
            We combine advanced techniques, medical expertise, and personalised
            care to deliver natural-looking, long-lasting results.
          </p>
        </motion.div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar, index) => {
            const isLast = index === pillars.length - 1;

            // Desktop: 3 columns
            const isDesktopRightColumn = index % 3 === 2;

            // Tablet: 2 columns
            const isTabletRightColumn = index % 2 === 1;

            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
                className="
                  group relative overflow-hidden rounded-2xl
                  bg-white p-5 sm:p-7
                  transition-all duration-300
                "
              >
                {/* Mobile Separator */}
                {!isLast && (
                  <div
                    className="
                      absolute bottom-0 left-5 right-5 h-[1.5px]
                      rounded-full bg-[#cbd5e1] opacity-75
                      md:hidden pointer-events-none
                    "
                  />
                )}

                {/* Tablet Horizontal Separator */}
                {index < 4 && (
                  <div
                    className="
                      absolute bottom-0 left-7 right-7 h-[1.5px]
                      rounded-full bg-[#cbd5e1] opacity-75
                      hidden md:block lg:hidden pointer-events-none
                    "
                  />
                )}

                {/* Tablet Vertical Separator */}
                {!isTabletRightColumn && (
                  <div
                    className="
                      absolute right-0 top-7 bottom-7 w-[1.5px]
                      rounded-full bg-[#cbd5e1] opacity-75
                      hidden md:block lg:hidden pointer-events-none
                    "
                  />
                )}

                {/* Desktop Horizontal Separator */}
                {index < 3 && (
                  <div
                    className="
                      absolute bottom-0 left-7 right-7 h-[2px]
                      rounded-full bg-[#cbd5e1] opacity-75
                      hidden lg:block pointer-events-none
                    "
                  />
                )}

                {/* Desktop Vertical Separator */}
                {!isDesktopRightColumn && (
                  <div
                    className="
                      absolute right-0 top-7 bottom-7 w-[2px]
                      rounded-full bg-[#cbd5e1] opacity-75
                      hidden lg:block pointer-events-none
                    "
                  />
                )}

                {/* Soft blue gradient rises from bottom to top on hover */}
                <div
                  className="
                    absolute inset-x-0 bottom-0
                    h-0
                    bg-gradient-to-t
                    from-[#9DDAF8]
                    via-[#DDF3FC]
                    to-white
                    transition-all duration-500 ease-out
                    group-hover:h-full
                    pointer-events-none
                  "
                />

                {/* Content above the animated background */}
                <div className="relative z-10 flex items-start gap-4">
                  {/* Icon */}
                  <div
                    className="
                      flex h-11 w-11 shrink-0 items-center justify-center
                      rounded-xl bg-[#edf6fe] text-[#001e56]
                      shadow-sm sm:h-12 sm:w-12
                    "
                  >
                    {pillar.icon}
                  </div>

                  {/* Text */}
                  <div className="flex min-w-0 flex-col pt-0.5">
                    <h3 className="mb-1.5 text-[16px] font-bold leading-snug tracking-tight text-[#001e56] sm:text-[17px]">
                      {pillar.title}
                    </h3>

                    <p className="text-[13px] leading-relaxed text-[#64748b] sm:text-[13.5px]">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}