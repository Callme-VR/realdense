"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface ProcessItem {
  title: string;
  desc: string;
}

interface StepData {
  id: number;
  number: string;
  stepNumber: string;
  navLabel: string;
  cardTitle: string;
  cardSubtitle: string;
  whosWithYou: ProcessItem[];
  howTheySupportYou: ProcessItem[];
}

const stepsData: StepData[] = [
  {
    id: 0,
    number: "01",
    stepNumber: "01",
    navLabel: "Consultation",
    cardTitle: "Consultation",
    cardSubtitle: "Understanding\nYour Goals",
    whosWithYou: [
      {
        title: "Hair Restoration Surgeon",
        desc: "Evaluates your hair and creates a personalised plan",
      },
      {
        title: "Dermatologist",
        desc: "Checks scalp health and overall suitability",
      },
      {
        title: "Consultation Coordinator",
        desc: "Guides you with process, cost, and expected results",
      },
    ],
    howTheySupportYou: [
      {
        title: "Understand your goals and concerns",
        desc: "We listen to your expectations and analyse your hair condition.",
      },
      {
        title: "Personalised treatment",
        desc: "Designed for natural-looking and long-lasting results.",
      },
      {
        title: "Explain the entire process clearly",
        desc: "Our team answers all your questions about procedure, cost, and care.",
      },
    ],
  },
  {
    id: 1,
    number: "02",
    stepNumber: "02",
    navLabel: "Pre-Op",
    cardTitle: "Pre - Op",
    cardSubtitle: "Treatment\nPlanning",
    whosWithYou: [
      {
        title: "Hair Restoration Surgeon",
        desc: "Plans grafts for the procedure.",
      },
      {
        title: "Anesthetist",
        desc: "Ensures comfortable preparation.",
      },
      {
        title: "Technicians",
        desc: "Maintain surgical hygiene and safety.",
      },
    ],
    howTheySupportYou: [
      {
        title: "Graft Planning",
        desc: "The team plans grafts carefully.",
      },
      {
        title: "Comfortable Preparation",
        desc: "Ensures painless preparation.",
      },
      {
        title: "Surgical Safety",
        desc: "Maintains strict hygiene and surgical safety.",
      },
    ],
  },
  {
    id: 2,
    number: "03",
    stepNumber: "03",
    navLabel: "Surgery",
    cardTitle: "Surgery",
    cardSubtitle: "Surgical\nProcedure",
    whosWithYou: [
      {
        title: "Hair Restoration Surgeon",
        desc: "Performs precise graft extraction and implantation.",
      },
      {
        title: "Anesthetist",
        desc: "Ensures patient comfort during surgery.",
      },
    ],
    howTheySupportYou: [
      {
        title: "Precise Extraction",
        desc: "Each graft is carefully extracted.",
      },
      {
        title: "Accurate Implantation",
        desc: "Grafts are placed with precision for natural-looking results.",
      },
    ],
  },
  {
    id: 3,
    number: "04",
    stepNumber: "04",
    navLabel: "Recovery",
    cardTitle: "Recovery",
    cardSubtitle: "Smooth\nRecovery",
    whosWithYou: [
      {
        title: "Hair Restoration Surgeon",
        desc: "Monitors healing and hair growth.",
      },
      {
        title: "Dermatologist",
        desc: "Guides scalp care during recovery.",
      },
      {
        title: "Patient Care Team",
        desc: "Supports aftercare and follow-up visits.",
      },
    ],
    howTheySupportYou: [
      {
        title: "Scalp Care",
        desc: "Guidance for a smooth recovery.",
      },
      {
        title: "Medication",
        desc: "Follow prescribed medication instructions.",
      },
      {
        title: "Regular Follow-Ups",
        desc: "Monitor healing and long-term results.",
      },
    ],
  },
];

// Bar progress reach for each step (aligning with column centers: 12.5%, 37.5%, 62.5%, 88%)
const progressWidths = ["12.5%", "37.5%", "62.5%", "88%"];

export default function OurProcess() {
  const [activeStep, setActiveStep] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0); // 0: WHO'S WITH YOU, 1: HOW THEY SUPPORT YOU
  const current = stepsData[activeStep];
  const displayedItems = activeSlide === 0 ? current.whosWithYou : current.howTheySupportYou;

  return (
    <section
      id="our-process"
      className="relative w-full bg-white py-14 max-sm:py-8 sm:py-18 lg:py-20 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-4 max-sm:px-3 sm:px-6 lg:px-8">
        {/* ── Section Header ── */}
        <div className="text-center max-w-3xl mx-auto mb-8 max-sm:mb-6 sm:mb-12">
          <p className="text-[11px] max-sm:text-[10px] sm:text-[12px] font-bold uppercase tracking-[0.25em] text-[#64748B] mb-2 sm:mb-2.5 max-sm:mb-1">
            OUR PROCESS
          </p>

          <h2 className="text-2xl max-sm:text-[21px] max-sm:leading-tight sm:text-3xl md:text-4xl lg:text-[42px] font-extrabold tracking-tight leading-[1.18] text-[#001e56]">
            <span>A Team of Experts, </span>
            <span className="text-[#00a8ff]">Focused on You</span>
          </h2>

          <p className="mt-3 max-sm:mt-2 max-sm:text-[11.5px] max-sm:leading-relaxed sm:mt-4 text-[13px] sm:text-[14.5px] font-normal leading-relaxed text-[#64748B] max-w-xl mx-auto">
            Hair restoration isn&apos;t a one-person job – it&apos;s a team effort.
            Our specialists work together to design a natural, safe, and lasting
            hairline with zero compromise.
          </p>
        </div>

        {/* ── Stepper Navigation ── */}
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-4 gap-2 sm:gap-4">
            {stepsData.map((step) => {
              const isActive = activeStep === step.id;
              return (
                <button
                  key={step.id}
                  onClick={() => {
                    setActiveStep(step.id);
                    setActiveSlide(0);
                  }}
                  type="button"
                  className="group flex flex-col items-center cursor-pointer transition-all focus:outline-none"
                  aria-label={`Step ${step.id + 1}: ${step.navLabel}`}
                  aria-selected={isActive}
                >
                  {/* Step Number Circle */}
                  <div
                    className={`w-9 h-9 max-sm:w-8 max-sm:h-8 sm:w-11 sm:h-11 rounded-full flex items-center justify-center font-bold text-sm max-sm:text-xs sm:text-base transition-all duration-300 ${
                      isActive
                        ? "bg-[#00a8ff] text-white shadow-md shadow-sky-500/25"
                        : "bg-[#e1f0fe] text-[#557398] group-hover:bg-[#d5e9fd]"
                    }`}
                  >
                    {step.id + 1}
                  </div>

                  {/* Step Label */}
                  <span
                    className={`mt-2 max-sm:mt-1.5 sm:mt-2.5 text-[12px] max-sm:text-[11px] sm:text-[13.5px] transition-colors duration-200 text-center ${
                      isActive
                        ? "font-bold text-[#001e56]"
                        : "font-semibold text-[#64748B] group-hover:text-[#001e56]"
                    }`}
                  >
                    {step.navLabel}
                  </span>
                </button>
              );
            })}
          </div>

          {/* ── Animated Progress Line with Indicator Dot ── */}
          <div className="relative w-full mt-4 max-sm:mt-3 sm:mt-5">
            {/* Background track */}
            <div className="relative w-full h-[5px] max-sm:h-[3.5px] sm:h-[6px] bg-[#dceaf7] rounded-full overflow-hidden">
              <div
                className="h-full bg-[#00a8ff] rounded-full transition-all duration-500 ease-out"
                style={{ width: progressWidths[activeStep] }}
              />
            </div>

            {/* Dot at start of progress track */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 max-sm:w-1.5 max-sm:h-1.5 sm:w-2.5 sm:h-2.5 bg-[#00a8ff] rounded-full shadow-sm pointer-events-none" />
          </div>
        </div>

        {/* ── Dynamic Content Cards (2-Card Layout matching Reference) ── */}
        <div className="max-w-4xl mx-auto mt-8 max-sm:mt-6 sm:mt-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="flex flex-col md:flex-row max-sm:flex-row gap-5 max-sm:gap-2.5 sm:gap-6 items-stretch"
            >
              {/* Card 1: Step Number & Title */}
              <div className="w-full md:w-[240px] lg:w-[260px] max-sm:w-[35%] shrink-0 bg-gradient-to-b from-[#e3f2fd] via-[#eaf5fe] to-[#edf6fe] border border-[#d7e9f9] rounded-2xl sm:rounded-3xl max-sm:rounded-2xl p-6 max-sm:p-3.5 sm:p-7 flex flex-col justify-center min-h-[160px] md:min-h-[280px] max-sm:min-h-0 shadow-[0_4px_20px_rgba(0,102,255,0.04)]">
                <span className="text-4xl sm:text-[50px] max-sm:text-[28px] font-extrabold text-[#001e56] leading-none mb-3 max-sm:mb-2 tracking-tight">
                  {current.number}
                </span>
                <h3 className="text-lg sm:text-[21px] max-sm:text-[13.5px] font-bold text-[#001e56] leading-snug mb-1 max-sm:mb-0.5">
                  {current.cardTitle}
                </h3>
                <p className="text-xs sm:text-[13.5px] max-sm:text-[10px] font-medium text-[#7091b5] leading-snug whitespace-pre-line">
                  {current.cardSubtitle}
                </p>
              </div>

              {/* Card 2: Interactive Slider Card (WHO'S WITH YOU / HOW THEY SUPPORT YOU) */}
              <div className="flex-1 bg-[#f8fbfe] border border-[#e5f0fa] rounded-2xl sm:rounded-3xl max-sm:rounded-2xl p-6 max-sm:p-3.5 sm:p-7 flex flex-col justify-between shadow-[0_2px_14px_rgba(0,0,0,0.02)] min-h-[280px] max-sm:min-h-0">
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between pb-3 max-sm:pb-2 mb-4 max-sm:mb-2.5">
                    <span className="text-xs sm:text-[13px] max-sm:text-[9.5px] font-extrabold tracking-wider text-[#001e56] uppercase">
                      {activeSlide === 0 ? "WHO'S WITH YOU" : "HOW THEY SUPPORT YOU"}
                    </span>
                    <span className="text-xs sm:text-[13px] max-sm:text-[9.5px] font-bold text-[#64748B]">
                      {current.stepNumber}/04
                    </span>
                  </div>

                  {/* Items List */}
                  <div className="space-y-3.5 max-sm:space-y-2 sm:space-y-4">
                    {displayedItems.map((item, idx) => (
                      <div
                        key={idx}
                        className={
                          idx !== displayedItems.length - 1
                            ? "border-b border-dashed border-[#d8e6f4] pb-3 max-sm:pb-1.5"
                            : ""
                        }
                      >
                        <h4 className="text-[14px] sm:text-[15px] max-sm:text-[11px] font-bold text-[#001e56] leading-snug">
                          {item.title}
                        </h4>
                        <p className="text-[12px] sm:text-[13px] max-sm:text-[8.5px] text-[#64748b] leading-relaxed max-sm:leading-tight mt-0.5 max-sm:mt-0">
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Carousel / Tab Indicator */}
                <div className="flex items-center justify-center gap-1.5 pt-4 max-sm:pt-2 mt-2 max-sm:mt-1">
                  <button
                    type="button"
                    onClick={() => setActiveSlide(0)}
                    aria-label="Who's with you"
                    className={`transition-all duration-300 rounded-full cursor-pointer ${
                      activeSlide === 0
                        ? "w-6 h-1 max-sm:w-4 max-sm:h-0.5 bg-[#001e56]"
                        : "w-1.5 h-1.5 max-sm:w-1 max-sm:h-1 bg-[#cbd5e1] hover:bg-[#94a3b8]"
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setActiveSlide(1)}
                    aria-label="How they support you"
                    className={`transition-all duration-300 rounded-full cursor-pointer ${
                      activeSlide === 1
                        ? "w-6 h-1 max-sm:w-4 max-sm:h-0.5 bg-[#001e56]"
                        : "w-1.5 h-1.5 max-sm:w-1 max-sm:h-1 bg-[#cbd5e1] hover:bg-[#94a3b8]"
                    }`}
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
