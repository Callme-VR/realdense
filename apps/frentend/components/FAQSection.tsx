"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "Is hair transplant a permanent solution?",
    answer:
      "Yes, hair transplantation provides permanent results. Donor follicles are taken from the back and sides of the scalp, which are genetically resistant to DHT (the hormone responsible for male and female pattern baldness). Once implanted into thinning areas, these follicles retain their genetic resistance and continue to grow naturally for a lifetime.",
  },
  {
    id: 2,
    question: "Is the hair transplant procedure painful?",
    answer:
      "No, the procedure is performed under gentle local anesthesia, making it virtually painless. You will feel only mild pinching sensations during the initial numbing phase (which lasts 2–3 minutes). Throughout the rest of the procedure, patients comfortably watch movies, listen to music, or even nap.",
  },
  {
    id: 3,
    question: "When will I see the full, natural results?",
    answer:
      "New hair growth starts becoming visible around month 3 to 4 following the procedure. By month 6 to 9, you will experience noticeable density and hairline transformation. Complete maturation, maximum thickness, and 100% natural results are fully realized within 12 to 14 months.",
  },
  {
    id: 4,
    question: "How long does the recovery and healing take?",
    answer:
      "Recovery is rapid with our minimally invasive FUE and DHI techniques. Most micro-scabs shed within 7 to 10 days. Patients can return to remote or light office work within 2 to 3 days, and regular gym activities can safely be resumed after 2 weeks.",
  },
  {
    id: 5,
    question: "Will my transplanted hair look completely natural?",
    answer:
      "Yes. Our experienced surgeons specialize in anatomical hairline recreation. Every single graft is implanted at the exact angle, depth, and direction of your original hair flow, ensuring soft transitions and a result that looks entirely natural and undetectable.",
  },
  {
    id: 6,
    question: "How many grafts will I need for full coverage?",
    answer:
      "Graft requirements depend on your degree of hair loss, donor density, and aesthetic goals. Typically, hairline restoration requires 1,800–2,500 grafts, while crown or extensive restoration may require 3,000–4,500 grafts. During our free evaluation, we map your scalp to provide an exact graft count.",
  },
];

export default function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleFAQ = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="relative w-full pt-16 sm:pt-20 lg:pt-24 pb-12 sm:pb-16 lg:pb-20 bg-white overflow-hidden">
      {/* ═════════════════════════════════════════════════════════
          FLOWING BLUE WAVES AT THE BOTTOM
          Matches reference: wave crests by circle and slopes gently downwards
         ═════════════════════════════════════════════════════════ */}
      <div
        className="absolute bottom-0 left-0 right-0 w-full pointer-events-none z-0 overflow-hidden leading-none"
        aria-hidden="true"
      >
        <svg
          className="w-full h-[180px] sm:h-[240px] lg:h-[290px] block"
          viewBox="0 0 1600 450"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Wave 1: Upper silky wave ribbon */}
            <linearGradient id="faqWave1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#7dd3fc" stopOpacity="0.75" />
              <stop offset="25%" stopColor="#bae6fd" stopOpacity="0.65" />
              <stop offset="48%" stopColor="#dcf1fd" stopOpacity="0.45" />
              <stop offset="72%" stopColor="#f0f9ff" stopOpacity="0.2" />
              <stop offset="82%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>

            {/* Wave 2: Middle wave with white highlight crest */}
            <linearGradient id="faqWave2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.82" />
              <stop offset="22%" stopColor="#7dd3fc" stopOpacity="0.72" />
              <stop offset="45%" stopColor="#bae6fd" stopOpacity="0.45" />
              <stop offset="68%" stopColor="#e0f2fe" stopOpacity="0.2" />
              <stop offset="80%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>

            {/* Wave 3: Foreground ocean wave on left corner */}
            <linearGradient id="faqWave3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0284c7" stopOpacity="0.94" />
              <stop offset="14%" stopColor="#009fe3" stopOpacity="0.88" />
              <stop offset="32%" stopColor="#38bdf8" stopOpacity="0.7" />
              <stop offset="52%" stopColor="#7dd3fc" stopOpacity="0.35" />
              <stop offset="66%" stopColor="#bae6fd" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* 1. Back/Upper Silk Ribbon: Sweeps under circle, crests at 38%, then slopes down */}
          <path
            d="M-50 300 C 50 280, 140 280, 240 295 C 360 310, 480 305, 620 285 C 760 265, 880 330, 1020 380 C 1140 420, 1220 445, 1280 450 V 450 H -50 Z"
            fill="url(#faqWave1)"
          />

          {/* 2. Middle Layer: Flowing silk wave with bright white highlight crest */}
          <path
            d="M-50 330 C 80 300, 200 315, 360 335 C 500 350, 620 330, 740 335 C 880 340, 1000 400, 1140 435 C 1220 450, 1270 450, 1300 450 V 450 H -50 Z"
            fill="url(#faqWave2)"
          />
          <path
            d="M-50 300 C 50 280, 140 280, 240 295 C 360 310, 480 305, 620 285 C 760 265, 880 330, 1020 380 C 1140 420, 1220 445, 1280 450"
            fill="none"
            stroke="#ffffff"
            strokeWidth="3.2"
            opacity="0.95"
          />

          {/* 3. Front Layer: Deep vibrant cyan wave with peak on left and gentle downward sweep */}
          <path
            d="M-50 360 C 20 330, 80 320, 150 335 C 220 350, 280 380, 380 385 C 480 390, 600 375, 720 395 C 840 415, 940 445, 1020 450 V 450 H -50 Z"
            fill="url(#faqWave3)"
          />
          <path
            d="M-50 360 C 20 330, 80 320, 150 335 C 220 350, 280 380, 380 385 C 480 390, 600 375, 720 395 C 840 415, 940 445, 1020 450"
            fill="none"
            stroke="#ffffff"
            strokeWidth="2.5"
            opacity="0.8"
          />
        </svg>
      </div>

      {/* ═════════════════════════════════════════════════════════
          MAIN CONTENT GRID
         ═════════════════════════════════════════════════════════ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* ── Left Column: Header + Circular Graphic with thought.png ── */}
          <div className="lg:col-span-5 flex flex-col items-start">
            {/* Header Text */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="max-w-lg mb-6 sm:mb-8"
            >
              <p className="text-[12px] sm:text-[13px] font-bold uppercase tracking-[0.22em] text-[#00a8ff] mb-2.5">
                FAQ
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-[45px] font-extrabold tracking-tight leading-[1.14]">
                <span className="text-[#001e56] block">Frequently Asked</span>
                <span className="text-[#00a8ff] block">Questions</span>
              </h2>
              <p className="mt-3.5 text-[14px] sm:text-[15.5px] leading-relaxed text-slate-500 font-normal">
                Find answers to the most common questions about hair transplant,
                treatment, recovery and results.
              </p>
            </motion.div>

            {/* ── Circular Graphic Container: thought.png inside circle + dashed orbit + 3D bubbles ── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="relative w-full flex items-center justify-center lg:justify-start pt-2 sm:pt-4"
            >
              <div className="relative w-[300px] h-[300px] sm:w-[370px] sm:h-[370px] lg:w-[420px] lg:h-[420px]">
                {/* 1. Dashed Orbital Ring SVG around the circle */}
                <svg
                  className="absolute inset-[-9%] w-[118%] h-[118%] pointer-events-none z-10"
                  viewBox="0 0 500 500"
                >
                  {/* Outer Dashed Orbit Circle */}
                  <circle
                    cx="250"
                    cy="250"
                    r="236"
                    stroke="#55BEFF"
                    strokeWidth="1.6"
                    strokeDasharray="7 6"
                    fill="none"
                    opacity="0.85"
                  />

                  {/* Constellation connector lines to outer satellite dots */}
                  <line
                    x1="65"
                    y1="230"
                    x2="40"
                    y2="245"
                    stroke="#7dd3fc"
                    strokeWidth="1.2"
                    opacity="0.6"
                  />
                  <line
                    x1="45"
                    y1="245"
                    x2="35"
                    y2="280"
                    stroke="#7dd3fc"
                    strokeWidth="1.2"
                    opacity="0.6"
                  />
                  <line
                    x1="435"
                    y1="250"
                    x2="455"
                    y2="270"
                    stroke="#7dd3fc"
                    strokeWidth="1.2"
                    opacity="0.6"
                  />

                  {/* Tiny constellation dots */}
                  <circle cx="40" cy="245" r="3.5" fill="#38bdf8" opacity="0.8" />
                  <circle cx="35" cy="280" r="2.5" fill="#0284c7" opacity="0.7" />
                  <circle cx="455" cy="270" r="3.5" fill="#38bdf8" opacity="0.8" />
                  <circle cx="465" cy="235" r="2.5" fill="#0284c7" opacity="0.7" />
                </svg>

                {/* 2. Floating 3D Glossy Spheres along the Orbit */}
                {/* Sphere: Upper Right (~1 o'clock) */}
                <div
                  className="absolute rounded-full z-20"
                  style={{
                    width: 20,
                    height: 20,
                    right: "-2%",
                    top: "16%",
                    background:
                      "radial-gradient(circle at 35% 30%, #ffffff 0%, #60a5fa 35%, #0284c7 75%, #0369a1 100%)",
                    boxShadow: "0 4px 12px rgba(2, 132, 199, 0.4)",
                    animation: "faqBubbleFloat 4s ease-in-out infinite alternate",
                  }}
                />

                {/* Sphere: Right Mid (~3 o'clock) */}
                <div
                  className="absolute rounded-full z-20"
                  style={{
                    width: 14,
                    height: 14,
                    right: "-6%",
                    top: "48%",
                    background:
                      "radial-gradient(circle at 35% 30%, #ffffff 0%, #38bdf8 40%, #0284c7 80%, #0369a1 100%)",
                    boxShadow: "0 3px 10px rgba(2, 132, 199, 0.35)",
                    animation: "faqBubbleFloat 4.6s ease-in-out infinite alternate 0.5s",
                  }}
                />

                {/* Sphere: Lower Right (~4 o'clock) */}
                <div
                  className="absolute rounded-full z-20"
                  style={{
                    width: 17,
                    height: 17,
                    right: "2%",
                    top: "72%",
                    background:
                      "radial-gradient(circle at 35% 30%, #ffffff 0%, #60a5fa 35%, #0284c7 75%, #0369a1 100%)",
                    boxShadow: "0 4px 12px rgba(2, 132, 199, 0.4)",
                    animation: "faqBubbleFloat 3.8s ease-in-out infinite alternate 0.8s",
                  }}
                />

                {/* Sphere: Left Mid (~9 o'clock) - Larger glossy sphere */}
                <div
                  className="absolute rounded-full z-20"
                  style={{
                    width: 22,
                    height: 22,
                    left: "-5%",
                    top: "42%",
                    background:
                      "radial-gradient(circle at 35% 30%, #ffffff 0%, #60a5fa 35%, #0284c7 75%, #0369a1 100%)",
                    boxShadow: "0 5px 14px rgba(2, 132, 199, 0.45)",
                    animation: "faqBubbleFloat 4.2s ease-in-out infinite alternate 0.3s",
                  }}
                />

                {/* Sphere: Lower Left (~7 o'clock) */}
                <div
                  className="absolute rounded-full z-20"
                  style={{
                    width: 16,
                    height: 16,
                    left: "2%",
                    top: "76%",
                    background:
                      "radial-gradient(circle at 35% 30%, #ffffff 0%, #38bdf8 40%, #0284c7 80%, #0369a1 100%)",
                    boxShadow: "0 3px 10px rgba(2, 132, 199, 0.35)",
                    animation: "faqBubbleFloat 5s ease-in-out infinite alternate 1.1s",
                  }}
                />

                {/* Sphere: Upper Left (~10 o'clock) */}
                <div
                  className="absolute rounded-full z-20"
                  style={{
                    width: 14,
                    height: 14,
                    left: "3%",
                    top: "18%",
                    background:
                      "radial-gradient(circle at 35% 30%, #ffffff 0%, #38bdf8 40%, #0284c7 80%, #0369a1 100%)",
                    boxShadow: "0 3px 10px rgba(2, 132, 199, 0.35)",
                    animation: "faqBubbleFloat 3.6s ease-in-out infinite alternate 0.6s",
                  }}
                />

                {/* Sphere: Top Orbit (~12 o'clock) */}
                <div
                  className="absolute rounded-full z-20"
                  style={{
                    width: 10,
                    height: 10,
                    left: "44%",
                    top: "-5%",
                    background:
                      "radial-gradient(circle at 35% 30%, #ffffff 0%, #60a5fa 35%, #0284c7 75%, #0369a1 100%)",
                    boxShadow: "0 2px 8px rgba(2, 132, 199, 0.3)",
                    animation: "faqBubbleFloat 4.4s ease-in-out infinite alternate 1.4s",
                  }}
                />

                {/* 3. The Main Glowing Circle with thought.png Inside */}
                <div className="absolute inset-0 rounded-full overflow-hidden border-[5px] sm:border-[6px] border-white shadow-[0_12px_45px_rgba(2,132,199,0.22)] z-10">
                  {/* Soft radial blue gradient background behind man */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "radial-gradient(circle at 45% 42%, #eff8ff 0%, #d8f1fe 42%, #bae6fd 80%, #90d3fb 100%)",
                    }}
                  />

                  {/* Soft inner ambient glow */}
                  <div className="absolute inset-0 rounded-full shadow-[inset_0_0_30px_rgba(2,132,199,0.15)] pointer-events-none z-10" />

                  {/* Thinking Man Image inside the circle */}
                  <div className="relative w-full h-full">
                    <Image
                      src="/assets/thought.png"
                      alt="Thinking person frequently asked questions"
                      fill
                      className="object-cover object-top scale-105 translate-y-2 select-none pointer-events-none"
                      sizes="(max-width: 640px) 300px, (max-width: 1024px) 370px, 420px"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ── Right Column: FAQ Accordion Stack ── */}
          <div className="lg:col-span-7 flex flex-col gap-3.5 sm:gap-4 lg:pt-3">
            {faqData.map((item, idx) => {
              const isOpen = openId === item.id;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{
                    duration: 0.38,
                    delay: idx * 0.05,
                    ease: "easeOut",
                  }}
                  className={`border transition-all duration-300 overflow-hidden bg-white ${isOpen
                    ? "border-[#0085CA] rounded-[24px] shadow-[0_6px_24px_rgba(0,133,202,0.12)] ring-1 ring-[#0085CA]/20"
                    : "border-[#7dd3fc]/80 hover:border-[#0085CA] rounded-full sm:rounded-[28px] shadow-[0_2px_10px_rgba(2,132,199,0.04)] hover:shadow-[0_4px_16px_rgba(0,133,202,0.08)]"
                    }`}
                >
                  {/* Accordion Trigger Button */}
                  <button
                    type="button"
                    onClick={() => toggleFAQ(item.id)}
                    className="w-full flex items-center justify-between px-4 sm:px-6 py-3.5 sm:py-4.5 text-left cursor-pointer select-none group"
                    aria-expanded={isOpen}
                  >
                    {/* Left Question Mark Icon */}
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#0085CA] group-hover:bg-[#0070b0] text-white flex items-center justify-center font-bold text-sm sm:text-base shrink-0 shadow-xs transition-colors duration-200">
                      ?
                    </div>

                    {/* Question Title */}
                    <span className="flex-1 px-3.5 sm:px-4 text-[14.5px] sm:text-[16px] font-semibold text-[#001e56] leading-snug group-hover:text-[#0085CA] transition-colors duration-200">
                      {item.question}
                    </span>

                    {/* Right Chevron Icon */}
                    <div className="shrink-0 text-[#0085CA] transition-colors duration-200">
                      <svg
                        className={`w-5 h-5 transition-transform duration-300 ease-in-out ${isOpen ? "rotate-180" : "rotate-0"
                          }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </button>

                  {/* Accordion Content Panel */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 sm:px-6 pb-4 sm:pb-5 pt-1 text-[13.5px] sm:text-[14.5px] leading-relaxed text-slate-600 border-t border-[#e0f2fe] mt-1 pl-[58px] sm:pl-[68px]">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bubble Float Animation Keyframes */}
      <style jsx>{`
        @keyframes faqBubbleFloat {
          0% {
            transform: translateY(0) scale(1);
            opacity: 0.85;
          }
          100% {
            transform: translateY(-10px) scale(1.08);
            opacity: 0.6;
          }
        }
      `}</style>
    </section>
  );
}
