"use client";

import Image from "next/image";
import BookConsultationButton from "@/components/BookConsultationButton";

interface FeaturePill {
  id: string;
  iconBg: string;
  line1: string;
  line2: string;
  icon: React.ReactNode;
}

const featurePills: FeaturePill[] = [
  {
    id: "tech",
    iconBg: "bg-[#095edb]",
    line1: "Advanced",
    line2: "Technology",
    icon: (
      <svg
        className="w-5 h-5 sm:w-5.5 sm:h-5.5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.2}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="6" cy="12" r="2.5" fill="currentColor" />
        <circle cx="18" cy="6" r="2.5" fill="currentColor" />
        <circle cx="18" cy="18" r="2.5" fill="currentColor" />
        <path d="M8.5 11l7-3.5M8.5 13l7 3.5" />
      </svg>
    ),
  },
  {
    id: "plans",
    iconBg: "bg-[#00a8ff]",
    line1: "Personalised",
    line2: "Treatment Plans",
    icon: (
      <svg
        className="w-5 h-5 sm:w-5.5 sm:h-5.5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.2}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <path d="M10 13v2l-1.5 2.5a1 1 0 0 0 .8 1.5h5.4a1 1 0 0 0 .8-1.5L14 15v-2" />
        <line x1="10" y1="13" x2="14" y2="13" />
      </svg>
    ),
  },
  {
    id: "specialists",
    iconBg: "bg-[#062973]",
    line1: "Experienced",
    line2: "Specialists",
    icon: (
      <svg
        className="w-5 h-5 sm:w-5.5 sm:h-5.5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.2}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
        <circle cx="9.5" cy="7" r="4" />
        <circle cx="17.5" cy="16.5" r="3.5" />
        <polyline points="17.5 14.5 17.5 16.5 19 16.5" />
      </svg>
    ),
  },
  {
    id: "results",
    iconBg: "bg-[#00b4d8]",
    line1: "Natural & Long -",
    line2: "Lasting Results",
    icon: (
      <svg
        className="w-5 h-5 sm:w-5.5 sm:h-5.5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.2}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M21.5 2v6h-6" />
        <path d="M21.5 8a9.5 9.5 0 1 0 2 6" />
        <path d="M2.5 22v-6h6" />
        <path d="M2.5 16a9.5 9.5 0 1 0-2-6" />
      </svg>
    ),
  },
];

export default function ServicesHero() {
  return (
    <section className="relative isolate w-full bg-[#c2ebfd] min-h-[640px] sm:min-h-[700px] lg:min-h-[760px] xl:min-h-[820px] flex flex-col justify-between overflow-hidden pt-24 sm:pt-28 lg:pt-32 pb-6 sm:pb-8 lg:pb-10">
      {/* ── Background Image Layer (Anchored to right to keep hair follicle & wave crisp & uncropped) ── */}
      <div className="absolute inset-0 -z-10 w-full h-full select-none pointer-events-none overflow-hidden">
        <Image
          src="/service_page_images/services-hero-background.webp"
          alt="Advanced Hair Restoration Solution"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 1920px"
          className="object-cover object-right md:object-[right_center] lg:object-right"
          quality={100}
        />
      </div>

      {/* ── Hero Main Content ── */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 my-auto pt-4 sm:pt-6 lg:pt-8">
        <div className="max-w-[620px] lg:max-w-[660px] text-left">
          {/* Eyebrow */}
          <p className="mb-2 sm:mb-3 font-['Plus_Jakarta_Sans'] text-[12px] sm:text-[13px] lg:text-[14px] font-bold uppercase tracking-[0.24em] text-[#0cb0f2]">
            BECAUSE LOOK MATTERS.
          </p>

          {/* Headline */}
          <h1 className="font-['Plus_Jakarta_Sans'] text-[28px] xs:text-[32px] sm:text-[42px] md:text-[50px] lg:text-[58px] xl:text-[64px] font-extrabold tracking-[-0.03em] leading-[1.1] text-[#001e56]">
            <span>Advanced Hair</span>
            <br />
            <span>Restoration </span>
            <span className="text-[#0cb0f2]">Solution</span>
          </h1>

          {/* Description */}
          <p className="mt-3.5 sm:mt-4 mb-6 sm:mb-8 w-full max-w-[850px] font-['Plus_Jakarta_Sans'] text-[14px] sm:text-[15.5px] lg:text-[16.5px] font-medium leading-[1.6] text-[#1b3a6b]">
            From hair transplant to non-surgical treatments, we offer complete hair restoration
            <br className="hidden md:inline" />{" "}
            solutions using advanced techniques, expert care and personalised treatment plans.
          </p>
          {/* Primary CTA */}
          <div className="flex items-center mb-4">
            <BookConsultationButton
              href="/treatment-cost"
              className="!min-h-[44px] !rounded-xl !px-7 sm:!px-8 !py-3.5 sm:!py-4 !text-[15px] sm:!text-[16px] !bg-[#001e56] hover:!bg-[#072464] shadow-[0_8px_24px_rgba(0,30,86,0.25)] transition-transform duration-200 hover:scale-[1.02]"
            >
              Book a Consultation
            </BookConsultationButton>
          </div>
        </div>
      </div>

      {/* ── Bottom Floating Feature Capsule ── */}
      <div className="relative z-10 w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-12 lg:mt-14">
        <div className="relative overflow-hidden rounded-[20px] sm:rounded-[24px] bg-[#346e9d]/90 backdrop-blur-md border border-white/30 shadow-[0_14px_36px_rgba(3,30,80,0.18)]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 lg:divide-x divide-white/20">
            {featurePills.map((pill, idx) => (
              <div
                key={pill.id}
                className={`flex items-center gap-3.5 sm:gap-4 px-5 sm:px-6 py-3.5 sm:py-4.5 lg:py-5 transition-colors duration-200 hover:bg-white/10 ${idx % 2 === 1 ? "sm:border-l sm:border-white/20 lg:border-l-0" : ""
                  } ${idx >= 2 ? "sm:border-t sm:border-white/20 lg:border-t-0" : ""}`}
              >
                <div
                  className={`w-11 h-11 sm:w-11.5 sm:h-11.5 rounded-full ${pill.iconBg} flex items-center justify-center text-white shrink-0 shadow-[0_2px_8px_rgba(0,0,0,0.18)]`}
                >
                  {pill.icon}
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-['Plus_Jakarta_Sans'] text-[14px] sm:text-[14.5px] lg:text-[15px] font-bold leading-tight text-white tracking-[-0.01em]">
                    {pill.line1}
                  </span>
                  <span className="font-['Plus_Jakarta_Sans'] text-[14px] sm:text-[14.5px] lg:text-[15px] font-bold leading-tight text-white tracking-[-0.01em]">
                    {pill.line2}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
