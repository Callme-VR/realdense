"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

interface ProcessCard {
  number: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}

const processSteps: ProcessCard[] = [
  {
    number: "01",
    title: "Consultation & Analysis",
    description:
      "We assess your hair, scalp and goals with advanced diagnostics.",
    image: "/assets/second1.png",
    alt: "Consultation and hair analysis",
  },
  {
    number: "02",
    title: "Personalised Plan",
    description:
      "A tailored treatment strategy designed around your unique needs.",
    image: "/assets/step1.jpg",
    alt: "Personalised hair transplant planning",
  },
  {
    number: "03",
    title: "Procedure",
    description:
      "Using FUE, DHI or Sapphire FUE for natural, precise and minimally invasive results.",
    image: "/assets/step-3.jpg",
    alt: "Hair restoration procedure execution",
  },
  {
    number: "04",
    title: "Recovery & Care",
    description: "Guidance and support through every stage of your recovery.",
    image: "/assets/second2.png",
    alt: "Recovery and scalp aftercare support",
  },
  {
    number: "05",
    title: "Your Transformation",
    description: "Natural-looking results that grow with you, for life.",
    image: "/assets/second3.png",
    alt: "Final hair restoration transformation",
  },
];

export default function OurProcess() {
  return (
    <section
      id="our-process"
      className="relative w-full bg-gradient-to-b from-white via-[#f8fafc] to-white py-12 sm:py-16 lg:py-20 overflow-hidden"
    >
      {/* Background Soft Glow Ambient Overlay */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 right-0 w-[600px] h-[500px] bg-[#dcf1fd]/50 blur-3xl rounded-full opacity-60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* ── Top Hero Showcase: Left Info & Right Wave Image ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mb-16 lg:mb-24">
          {/* Left Column: Heading, Subtitle & 3 Badges */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-6 flex flex-col items-start"
          >
            {/* Eyebrow Label */}
            <p className="text-[12px] font-bold uppercase tracking-[0.25em] text-[#0cb0f2] mb-3">
              OUR PROCESS
            </p>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold leading-[1.12] tracking-tight mb-4">
              <span className="text-[#001e56] block">A Personalised</span>
              <span className="text-[#0cb0f2] block sm:inline whitespace-nowrap">
                Journey to Lasting Results.
              </span>
            </h2>
            {/* Subtitle */}
            <p className="text-[15px] sm:text-[16px] font-medium leading-relaxed text-[#64748B] max-w-[480px] mb-8">
              From your first consultation to final results, every step is
              guided <br className="hidden sm:inline" />
              by expertise, advanced technology, and personalized care.
            </p>

            {/* 3 Feature Badges Grid */}
            <div className="flex flex-wrap items-center gap-6 sm:gap-8 w-full">
              {/* Badge 1: Expert Team */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#dcf1fd] text-[#0196e3] flex items-center justify-center shrink-0 shadow-sm">
                  <svg
                    className="w-5 h-5"
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
                </div>
                <div>
                  <h3 className="text-[14.5px] font-bold text-[#001e56] leading-snug">
                    Expert Team
                  </h3>
                  <p className="text-[12px] text-[#64748B] font-medium">
                    Specialists in all hair types
                  </p>
                </div>
              </div>

              {/* Badge 2: Advanced Technology */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#dcf1fd] text-[#0196e3] flex items-center justify-center shrink-0 shadow-sm">
                  <svg
                    className="w-5 h-5"
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
                  </svg>
                </div>
                <div>
                  <h3 className="text-[14.5px] font-bold text-[#001e56] leading-snug">
                    Advanced Technology
                  </h3>
                  <p className="text-[12px] text-[#64748B] font-medium">
                    FUE, DHI & Sapphire FUE
                  </p>
                </div>
              </div>

              {/* Badge 3: Personal Care */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#dcf1fd] text-[#0196e3] flex items-center justify-center shrink-0 shadow-sm">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[14.5px] font-bold text-[#001e56] leading-snug">
                    Personal Care
                  </h3>
                  <p className="text-[12px] text-[#64748B] font-medium">
                    Support at every stage
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: dentist_wave.png Showcase Graphic */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="lg:col-span-6 relative w-full flex justify-center lg:justify-end items-center"
          >
            {/* Background Soft Glow Halo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[650px] h-[400px] sm:h-[550px] rounded-full bg-gradient-to-tr from-[#dcf1fd]/50 to-[#0cb0f2]/20 blur-3xl pointer-events-none -z-10" />

            {/* Large Organic Graphic Display (Without Rectangular Card Box) */}
            <div className="relative w-full max-w-[680px] lg:max-w-[780px] xl:max-w-[840px] aspect-[16/11]">
              <Image
                src="/assets/dentist_wave.png"
                alt="Doctor performing procedure with wave frame graphic"
                fill
                sizes="(max-width: 1024px) 100vw, 780px"
                className="object-contain object-center mix-blend-multiply scale-105 sm:scale-110 lg:scale-115"
              />
            </div>
          </motion.div>
        </div>

        {/* ── Bottom Grid: 5 Sequential Process Cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 sm:gap-6 items-stretch">
          {processSteps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: "easeOut" }}
              className="relative bg-[#f4fafe]/80 rounded-2xl p-3.5 sm:p-4 border border-[#e9f4fd] flex flex-col"
            >
              {/* Process Step Image Thumbnail Container */}
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 shadow-sm mb-3">
                {/* Step Serial Number Circle Badge at Top-Left Corner */}
                <div className="absolute top-0 left-0 z-50 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#dcf1fd] text-[#0196e3] text-[13px] sm:text-[14px] font-extrabold flex items-center justify-center shadow-lg border-2 border-white">
                  {step.number}
                </div>

                <Image
                  src={step.image}
                  alt={step.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 20vw"
                  className="object-cover object-center"
                />
              </div>

              {/* Title */}
              <h3 className="text-[15.5px] font-bold text-[#001e56] leading-snug tracking-tight mb-1.5">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-[12.5px] font-normal text-[#64748B] leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
