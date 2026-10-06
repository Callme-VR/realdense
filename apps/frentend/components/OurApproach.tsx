"use client";

import React, { useState, useRef, useCallback } from "react";
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
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1" />
      </svg>
    ),
  },
  {
    title: "Experienced Specialists",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    title: "Advanced Techniques",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    title: "Long-Term Support",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
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
    image: "/assets/step-1.jpg",
    alt: "Detailed hair and scalp analysis",
  },
  {
    number: "02",
    title: "Personalized Plan",
    description:
      "A customised treatment strategy based on your goals, hair type and density.",
    image: "/assets/step-2.jpg",
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
    image: "/assets/step-4.jpg",
    alt: "Ongoing post-op checkup and scalp care",
  },
];

export default function OurApproach() {
  const [sliderPos, setSliderPos] = useState<number>(50); // percentage 0 - 100
  const isDragging = useRef<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  }, []);

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging.current) {
      handleMove(e.clientX);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  return (
    <section id="our-approach" className="relative w-full bg-white pt-16 sm:pt-20 lg:pt-24">
      {/* ── Top Hero Section ── */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-16 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* ── LEFT COLUMN: Text & Key Features ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-5 flex flex-col items-start"
          >
            {/* Pill Eyebrow */}
            <div className="mb-4 inline-flex items-center px-4 py-1.5 rounded-full border border-sky-300/80 bg-sky-50/50">
              <span className="text-[11.5px] font-bold uppercase tracking-[0.2em] text-[#0cb0f2]">
                OUR APPROACH
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold leading-[1.14] tracking-tight mb-4">
              <span className="text-[#001e56]">Precision Behind Every </span>
              <br className="hidden sm:inline" />
              <span className="text-[#0cb0f2]">Transformation</span>
            </h2>

            {/* Subtitle */}
            <p className="text-[15px] sm:text-[16px] font-medium leading-relaxed text-[#4A5568] max-w-[420px] mb-8">
              It&apos;s more than a procedure - it&apos;s a personalised journey, guided by expertise, advanced techniques, and ongoing care.
            </p>

            {/* 4 Feature List Items */}
            <div className="flex flex-col gap-4 w-full">
              {features.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 group cursor-pointer">
                  <div className="shrink-0 w-11 h-11 rounded-full bg-[#0cb0f2] text-white flex items-center justify-center shadow-md shadow-sky-200 transition-transform duration-200 group-hover:scale-105">
                    {item.icon}
                  </div>
                  <span className="text-[15.5px] font-semibold text-[#001e56] tracking-tight group-hover:text-[#0cb0f2] transition-colors">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── RIGHT COLUMN: Interactive Before/After Split Comparison Showcase ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="lg:col-span-7 relative w-full flex justify-center lg:justify-end"
          >
            {/* Background Halo Ring Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] sm:w-[480px] h-[380px] sm:h-[480px] rounded-full border border-sky-300/40 shadow-[0_0_60px_rgba(12,176,242,0.25)] pointer-events-none -z-10" />

            {/* Split Comparison Showcase Container */}
            <div
              ref={containerRef}
              className="relative w-full max-w-[560px] h-[380px] sm:h-[450px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white select-none cursor-ew-resize bg-slate-900"
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
            >
              {/* AFTER Image Layer (Full Background) */}
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src="/assets/AFTER.png"
                  alt="After natural hair transplant result"
                  fill
                  sizes="(max-width: 768px) 100vw, 560px"
                  className="object-cover object-center"
                  priority
                />
              </div>

              {/* BEFORE Image Layer (Clipped to sliderPos %) */}
              <div
                className="absolute inset-y-0 left-0 overflow-hidden border-r-2 border-white shadow-xl"
                style={{ width: `${sliderPos}%` }}
              >
                <div className="absolute inset-y-0 left-0 w-[560px] h-full">
                  <Image
                    src="/assets/BEFORE.png"
                    alt="Before thinning hairline"
                    fill
                    sizes="(max-width: 768px) 100vw, 560px"
                    className="object-cover object-center"
                    priority
                  />
                </div>
              </div>

              {/* Glowing Vector Ring Halo & Node Pointer Lines */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none z-15"
                viewBox="0 0 560 450"
                fill="none"
              >
                {/* Outer Glowing Cyan Ring Arc */}
                <ellipse
                  cx="280"
                  cy="200"
                  rx="210"
                  ry="175"
                  stroke="#0cb0f2"
                  strokeWidth="2"
                  strokeDasharray="8 4"
                  opacity="0.8"
                  className="filter drop-shadow-[0_0_10px_#0cb0f2]"
                />

                {/* Left Node Leader Line (To BEFORE Badge) */}
                <line x1="210" y1="125" x2="160" y2="105" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.85" />

                {/* Right Node Leader Line (To AFTER Badge) */}
                <line x1="350" y1="125" x2="400" y2="105" stroke="#0cb0f2" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.85" />

                {/* Left Node Target Dot (BEFORE) */}
                <circle cx="210" cy="125" r="7" fill="#334155" stroke="#ffffff" strokeWidth="2" className="drop-shadow-md" />
                <circle cx="210" cy="125" r="3" fill="#ffffff" />

                {/* Right Node Target Dot (AFTER) */}
                <circle cx="350" cy="125" r="7" fill="#0cb0f2" stroke="#ffffff" strokeWidth="2" className="drop-shadow-md" />
                <circle cx="350" cy="125" r="3" fill="#ffffff" />
              </svg>

              {/* Glowing Split Beam Line */}
              <div
                className="absolute top-0 bottom-0 w-[3px] bg-cyan-400 shadow-[0_0_14px_#0cb0f2] z-20 pointer-events-none"
                style={{ left: `calc(${sliderPos}% - 1.5px)` }}
              />

              {/* Interactive Handle Toggle Button */}
              <div
                className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white text-[#0cb0f2] border-2 border-[#0cb0f2] shadow-[0_4px_16px_rgba(12,176,242,0.5)] flex items-center justify-center z-30 font-bold text-xs hover:scale-110 active:scale-95 transition-transform"
                style={{ left: `${sliderPos}%` }}
              >
                &lt; &gt;
              </div>

              {/* Floating BEFORE Badge */}
              <div className="absolute top-14 left-8 z-20 pointer-events-none">
                <div className="px-3.5 py-1.5 rounded-full bg-[#475569]/85 backdrop-blur-md border border-slate-500/40 shadow-xl text-white flex items-center gap-1.5">
                  <span className="text-[10.5px] font-extrabold uppercase tracking-wider text-white">BEFORE</span>
                  <span className="text-[9.5px] font-medium text-slate-200 opacity-90">Thinning Hairline</span>
                </div>
              </div>

              {/* Floating AFTER Badge */}
              <div className="absolute top-14 right-8 z-20 pointer-events-none">
                <div className="px-3.5 py-1.5 rounded-full bg-[#0cb0f2] shadow-lg shadow-sky-400/30 text-white flex items-center gap-1.5">
                  <span className="text-[10.5px] font-extrabold uppercase tracking-wider text-white">AFTER</span>
                  <span className="text-[9.5px] font-medium text-sky-100">Natural Result</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* ── Bottom 4-Step Sequential Process Cards ── */}
      <div className="w-full bg-gradient-to-b from-white via-[#f4fafe] to-[#eef7fe] py-16 lg:py-20">
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
