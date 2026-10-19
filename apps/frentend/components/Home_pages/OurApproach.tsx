
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
        className="h-5 w-5 text-white"
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
        className="h-5 w-5 text-white"
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
        className="h-5 w-5 text-white"
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
        className="h-5 w-5 text-white"
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
    image: "/images/process/clinical-step-01.webp",
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
    image: "/images/process/clinical-step-04.webp",
    alt: "Ongoing post-op checkup and scalp care",
  },
];

export default function OurApproach(): React.JSX.Element {
  return (
    <section
      id="our-approach"
      className="relative w-full overflow-hidden bg-white pb-0 pt-12 sm:pt-16 lg:pt-20"
    >
      {/* Top Hero Section */}
      <div className="mx-auto max-w-7xl px-6 pb-2 sm:px-8 lg:px-12 lg:pb-4">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-6">
          {/* Left Column: Text and Features */}
          <div className="z-10 flex flex-col items-start lg:col-span-5">
            {/* Eyebrow */}
            <div className="mb-5 inline-flex items-center rounded-full border border-[#0cb0f2]/40 bg-white px-5 py-1.5">
              <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#0cb0f2]">
                OUR APPROACH
              </span>
            </div>


            {/* Main Headline */}
            <h2 className="mb-5 text-3xl font-extrabold leading-[1.14] tracking-tight sm:text-4xl lg:text-[46px]">
              <span className="text-[#001e56]">
                Precision Behind Every
              </span>

              <span className="block text-[#0cb0f2]">
                Transformation
              </span>
            </h2>

            {/* Subtitle */}
            <p className="mb-8 max-w-[420px] text-[15px] font-medium leading-relaxed text-[#4A5568] sm:text-[16px]">
              It&apos;s more than a procedure —
              <br className="hidden sm:inline" />
              it&apos;s a personalised journey, guided by expertise,
              <br className="hidden sm:inline" />
              advanced techniques, and ongoing care.
            </p>

            {/* Feature List */}
            <div className="flex w-full flex-col gap-5">
              {features.map((item) => (
                <div
                  key={item.title}
                  className="group flex items-center gap-4"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0cb0f2] text-white shadow-md shadow-sky-200/80 transition-transform duration-200 group-hover:scale-105">
                    {item.icon}
                  </div>

                  <span className="text-[16px] font-bold tracking-tight text-[#001e56] transition-colors group-hover:text-[#0cb0f2]">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Before-and-After Image */}
          <div className="relative flex w-full items-center justify-center lg:col-span-7 lg:justify-end">
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
      <div className="w-full bg-gradient-to-b from-white via-[#f4fafe] to-[#edf6fe] pb-14 pt-4 lg:pb-16 lg:pt-6">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 items-stretch gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-sky-200/60 lg:gap-0">
            {steps.map((step) => (
              <div
                key={step.number}
                className="group flex cursor-pointer flex-col items-center px-4 text-center lg:px-6"
              >
                {/* Number Badge */}
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#dcf1fd] text-[15px] font-extrabold text-[#0196e3] shadow-sm transition-colors duration-200 group-hover:bg-[#0cb0f2] group-hover:text-white">
                  {step.number}
                </div>

                {/* Step Title */}
                <h3 className="mb-2 text-[17.5px] font-bold tracking-tight text-[#001e56] transition-colors duration-200 group-hover:text-[#0cb0f2]">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="mb-6 min-h-0 sm:min-h-[52px] max-w-[250px] text-[14px] font-normal leading-relaxed text-[#64748B]">
                  {step.description}
                </p>

                {/* Process Image */}
                <div className="relative h-[175px] w-full overflow-hidden rounded-2xl border-2 border-white shadow-sm shadow-sky-100 transition-shadow duration-200 group-hover:shadow-md">
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
