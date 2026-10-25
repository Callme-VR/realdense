
"use client";

import React from "react";
import Image from "next/image";

interface ApproachFeature {
  title: string;
  icon: React.ReactNode;
}

const features: ApproachFeature[] = [
  {
    title: "Personalised Treatment Plans",
    icon: (
      <svg
        className="h-5 w-5 max-sm:h-4 max-sm:w-4 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="3" />
        <line x1="12" y1="2" x2="12" y2="6" />
        <line x1="12" y1="18" x2="12" y2="22" />
        <line x1="2" y1="12" x2="6" y2="12" />
        <line x1="18" y1="12" x2="22" y2="12" />
      </svg>
    ),
  },
  {
    title: "Experienced Specialists",
    icon: (
      <svg
        className="h-5 w-5 max-sm:h-4 max-sm:w-4 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 11a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
        />
      </svg>
    ),
  },
  {
    title: "Advanced Techniques",
    icon: (
      <svg
        className="h-5 w-5 max-sm:h-4 max-sm:w-4 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <rect
          x="5"
          y="4"
          width="14"
          height="16"
          rx="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line
          x1="9"
          y1="9"
          x2="15"
          y2="9"
          strokeLinecap="round"
        />
        <line
          x1="9"
          y1="13"
          x2="15"
          y2="13"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Long-Term Support",
    icon: (
      <svg
        className="h-5 w-5 max-sm:h-4 max-sm:w-4 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
  },
];

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}

const steps: ProcessStep[] = [
  {
    number: "01",
    title: "Detailed Analysis",
    description:
      "We assess your hair, scalp and facial features to design the right plan for you.",
    image: "/images/process/clinical-step-02.webp",
    alt: "Detailed hair and scalp analysis",
  },
  {
    number: "02",
    title: "Personalized Plan",
    description:
      "A customised treatment strategy based on your goals, hair type and density.",
    image: "/images/process/clinical-step_01.webp",
    alt: "Personalized hair restoration planning",
  },
  {
    number: "03",
    title: "Advanced Technique",
    description:
      "Using FUE, DHI or Sapphire FUE for natural, precise and minimally invasive results.",
    image: "/images/process/clinical-step-03.webp",
    alt: "Advanced hair transplant technique execution",
  },
  {
    number: "04",
    title: "Ongoing Care",
    description:
      "Structured aftercare support from day one to your final result at 12–18 months.",
    image: "/images/process/clinical-step_04.png",
    alt: "Ongoing post-op checkup and scalp care",
  },
];

export default function OurApproach(): React.JSX.Element {
  return (
    <section
      id="our-approach"
      className="relative w-full overflow-hidden bg-white pb-0 pt-12 max-sm:pt-8 sm:pt-16 lg:pt-20"
    >
      {/* Top Hero Section */}
      <div className="mx-auto max-w-7xl px-6 max-sm:px-4 pb-2 max-sm:pb-4 sm:px-8 lg:px-12 lg:pb-4">
        <div className="grid grid-cols-1 max-sm:flex max-sm:flex-col items-center gap-10 max-sm:gap-0 lg:grid-cols-12 lg:gap-6">
          {/* Left Column: Text and Features */}
          <div className="z-10 flex flex-col items-start lg:col-span-5 max-sm:contents">
            {/* Header Content */}
            <div className="flex flex-col items-start max-sm:order-1 max-sm:w-full">
              {/* Eyebrow */}
              <div className="mb-5 max-sm:mb-3.5 inline-flex items-center rounded-full border border-[#0cb0f2]/40 bg-white px-5 max-sm:px-4 py-1.5 max-sm:py-1">
                <span className="text-[12px] max-sm:text-[10.5px] font-bold uppercase tracking-[0.2em] text-[#0cb0f2]">
                  OUR APPROACH
                </span>
              </div>

              {/* Main Headline */}
              <h2 className="mb-5 max-sm:mb-2.5 text-3xl max-sm:text-[23px] max-sm:leading-[1.18] font-extrabold leading-[1.14] tracking-tight sm:text-4xl lg:text-[46px]">
                <span className="text-[#001e56]">
                  Precision Behind Every
                </span>

                <span className="block text-[#0cb0f2]">
                  Transformation
                </span>
              </h2>

              {/* Subtitle */}
              <p className="mb-8 max-sm:mb-6 max-w-[420px] text-[15px] max-sm:text-[11.5px] max-sm:leading-[1.45] font-medium leading-relaxed text-[#4A5568] sm:text-[16px]">
                It&apos;s more than a procedure —
                <br className="hidden sm:inline" />
                it&apos;s a personalised journey, guided by expertise,
                <br className="hidden sm:inline" />
                advanced techniques, and ongoing care.
              </p>
            </div>

            {/* Feature List */}
            <div className="flex w-full flex-col gap-5 max-sm:order-3 max-sm:grid max-sm:grid-cols-2 max-sm:gap-x-2 max-sm:gap-y-4 max-sm:mb-8 max-sm:mt-2">
              {features.map((item) => (
                <div
                  key={item.title}
                  className="group flex items-center gap-4 max-sm:gap-2.5"
                >
                  <div className="flex h-12 w-12 max-sm:h-9 max-sm:w-9 shrink-0 items-center justify-center rounded-full bg-[#0cb0f2] text-white shadow-md shadow-sky-200/80 transition-transform duration-200 group-hover:scale-105">
                    {item.icon}
                  </div>

                  <span className="text-[16px] max-sm:text-[12px] max-sm:leading-tight font-bold tracking-tight text-[#001e56] transition-colors group-hover:text-[#0cb0f2]">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Before-and-After Image */}
          <div className="relative flex w-full items-center justify-center lg:col-span-7 lg:justify-end max-sm:order-2 max-sm:mb-6">
            {/* Soft background glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#dcf1fd]/40 blur-3xl sm:h-[500px] sm:w-[500px] lg:h-[600px] lg:w-[600px]"
            />

            {/* Image only: no card, border, or shadow */}
            <div className="relative w-full max-w-[680px] lg:max-w-[740px]">
              <Image
                src="/images/transformations/before-and-after-banner.webp"
                alt="Before and after hair restoration results"
                width={1200}
                height={800}
                priority
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="block h-auto w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Four-Step Process */}
      <div className="w-full bg-gradient-to-b from-white via-[#f4fafe] to-[#edf6fe] pb-14 max-sm:pb-10 pt-4 max-sm:pt-8 lg:pb-16 lg:pt-6">
        <div className="mx-auto max-w-7xl px-6 max-sm:px-3 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 max-sm:grid-cols-2 items-stretch gap-8 max-sm:gap-y-7 max-sm:gap-x-0 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-sky-200/60 lg:gap-0">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="group relative flex cursor-pointer flex-col items-center px-4 max-sm:px-2.5 text-center lg:px-6"
              >
                {/* Mobile Vertical Separator between column 1 and column 2 */}
                {index % 2 === 0 && (
                  <div className="pointer-events-none absolute right-0 top-3 bottom-3 w-[1px] bg-sky-200/60 md:hidden" />
                )}

                {/* Number Badge */}
                <div className="mb-4 max-sm:mb-2.5 flex h-11 w-11 max-sm:h-9 max-sm:w-9 items-center justify-center rounded-full bg-[#dcf1fd] text-[15px] max-sm:text-[13px] font-extrabold text-[#0196e3] shadow-sm transition-colors duration-200 group-hover:bg-[#0cb0f2] group-hover:text-white">
                  {step.number}
                </div>

                {/* Step Title */}
                <h3 className="mb-2 max-sm:mb-1 text-[17.5px] max-sm:text-[13px] max-sm:leading-tight font-bold tracking-tight text-[#001e56] transition-colors duration-200 group-hover:text-[#0cb0f2]">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="mb-6 max-sm:mb-3 min-h-0 sm:min-h-[52px] max-w-[250px] max-sm:max-w-none text-[14px] max-sm:text-[10px] max-sm:leading-[1.35] font-normal leading-relaxed text-[#64748B]">
                  {step.description}
                </p>

                {/* Process Image */}
                <div className="relative h-[175px] max-sm:h-[110px] w-full overflow-hidden rounded-2xl max-sm:rounded-xl border-2 border-white shadow-sm shadow-sky-100 transition-shadow duration-200 group-hover:shadow-md">
                  <Image
                    src={step.image}
                    alt={step.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-center"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
