"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

interface ApproachFeature {
  title: string;
  icon: React.ReactNode;
}

const features: ApproachFeature[] = [
  {
    title: "Personalised Treatment Plans",
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 11a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
      </svg>
    ),
  },
  {
    title: "Advanced Techniques",
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <rect x="5" y="4" width="14" height="16" rx="2" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="9" y1="9" x2="15" y2="9" strokeLinecap="round" />
        <line x1="9" y1="13" x2="15" y2="13" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Long-Term Support",
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
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
    image: "/assets/step2.jpg",
    alt: "Detailed hair and scalp analysis",
  },
  {
    number: "02",
    title: "Personalized Plan",
    description:
      "A customised treatment strategy based on your goals, hair type and density.",
    image: "/assets/step1.jpg",
    alt: "Personalized hair restoration planning",
  },
  {
    number: "03",
    title: "Advanced Technique",
    description:
      "Using FUE, DHI or Sapphire FUE for natural, precise and minimally invasive results.",
    image: "/assets/step-3.jpg",
    alt: "Advanced hair transplant technique execution",
  },
  {
    number: "04",
    title: "Ongoing Care",
    description:
      "Structured aftercare support from day one to your final result at 12–18 months.",
    image: "/assets/step4.jpg",
    alt: "Ongoing post-op checkup and scalp care",
  },
];

export default function OurApproach() {
  return (
    <section id="our-approach" className="relative w-full bg-white pt-16 sm:pt-20 lg:pt-24 overflow-hidden">
      {/* ── Top Hero Section ── */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-2 lg:pb-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center">

          {/* ── LEFT COLUMN: Text & Key Features ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-5 flex flex-col items-start z-10"
          >
            {/* Pill Eyebrow */}
            <div className="mb-5 inline-flex items-center px-5 py-1.5 rounded-full border border-[#0cb0f2]/40 bg-white">
              <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#0cb0f2]">
                OUR APPROACH
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold leading-[1.14] tracking-tight mb-5">
              <span className="text-[#001e56] block">Precision Behind Every</span>
              <span className="text-[#0cb0f2] block">Transformation</span>
            </h2>

            {/* Subtitle */}
            <p className="text-[15px] sm:text-[16px] font-medium leading-relaxed text-[#4A5568] max-w-[360px] mb-8">
              It&apos;s more than a procedure -<br />
              it&apos;s a personalised journey,<br />
              guided by expertise,<br />
              advanced techniques, and<br />
              ongoing care.
            </p>

            {/* 4 Feature List Items */}
            <div className="flex flex-col gap-5 w-full">
              {features.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 group cursor-pointer">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-[#0cb0f2] text-white flex items-center justify-center shadow-md shadow-sky-200/80 transition-transform duration-200 group-hover:scale-105">
                    {item.icon}
                  </div>
                  <span className="text-[16px] font-bold text-[#001e56] tracking-tight group-hover:text-[#0cb0f2] transition-colors">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── RIGHT COLUMN: Showcase Graphic second.png ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="lg:col-span-7 relative w-full flex justify-center lg:justify-end items-center"
          >
            {/* Background Soft Glow Halo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[650px] h-[500px] sm:h-[650px] rounded-full bg-gradient-to-tr from-[#dcf1fd]/40 to-[#0cb0f2]/15 blur-3xl pointer-events-none -z-10" />

            {/* Large Full Image Display */}
            <div className="relative w-full max-w-[680px] lg:max-w-[740px]">
              <Image
                src="/assets/second.png"
                alt="Our Approach - Precision Behind Every Transformation"
                width={1200}
                height={800}
                priority
                style={{ width: "100%", height: "auto" }}
                className="w-full h-auto object-contain drop-shadow-xl"
              />
            </div>
          </motion.div>

        </div>
      </div>

      {/* ── Bottom 4-Step Sequential Process Cards ── */}
      <div className="w-full bg-gradient-to-b from-white via-[#f4fafe] to-[#eef7fe] pt-4 pb-14 lg:pt-6 lg:pb-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x divide-sky-200/60 items-stretch">
            {steps.map((step, idx) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
                className="flex flex-col items-center text-center px-4 lg:px-6 group cursor-pointer"
              >
                {/* Number Badge */}
                <div className="w-11 h-11 rounded-full bg-[#dcf1fd] text-[#0196e3] font-extrabold text-[15px] flex items-center justify-center mb-4 shadow-sm group-hover:bg-[#0cb0f2] group-hover:text-white transition-colors duration-300">
                  {step.number}
                </div>

                {/* Step Title */}
                <h3 className="text-[17.5px] font-bold text-[#001e56] tracking-tight mb-2 group-hover:text-[#0cb0f2] transition-colors">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-[13.5px] font-normal text-[#64748B] leading-relaxed max-w-[250px] mb-6 min-h-[58px]">
                  {step.description}
                </p>

                {/* Process Step Image Thumbnail */}
                <div className="relative w-full h-[175px] rounded-2xl overflow-hidden border-2 border-white shadow-md shadow-sky-100 transition-transform duration-300 group-hover:scale-[1.02] group-hover:shadow-lg">
                  <Image
                    src={step.image}
                    alt={step.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
