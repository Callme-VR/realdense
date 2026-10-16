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
  const current = stepsData[activeStep];

  return (
    <section
      id="our-process"
      className="relative w-full bg-white py-16 sm:py-20 lg:py-24 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Section Header ── */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <p className="text-[12px] sm:text-[13px] font-extrabold uppercase tracking-[0.25em] text-[#0099ff] mb-3">
            OUR PROCESS
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-tight leading-[1.18] text-[#001e56]">
            A Team of Experts ,
            <span className="block text-[#0099ff] mt-1 sm:mt-1.5">
              Focused on You
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-[15.5px] font-normal leading-relaxed text-[#556987] max-w-2xl mx-auto">
            Hair restoration isn&apos;t a one-person job – it&apos;s a team effort.
            Our specialists work together to design a natural, safe, and lasting
            hairline with zero compromise.
          </p>
        </div>

        {/* ── Stepper Navigation ── */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-4 gap-2 sm:gap-4">
            {stepsData.map((step) => {
              const isActive = activeStep === step.id;
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  type="button"
                  className="group flex flex-col items-center cursor-pointer transition-all focus:outline-none"
                  aria-label={`Step ${step.id + 1}: ${step.navLabel}`}
                  aria-selected={isActive}
                >
                  {/* Step Number Circle */}
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-bold text-base sm:text-lg transition-all duration-300 ${isActive
                      ? "bg-[#0066ff] text-white shadow-md shadow-blue-500/30 scale-105"
                      : "bg-[#e1f0fe] text-[#2563eb] group-hover:bg-[#d5e9fd]"
                      }`}
                  >
                    {step.id + 1}
                  </div>

                  {/* Step Label */}
                  <span
                    className={`mt-2.5 sm:mt-3 text-xs sm:text-[15px] transition-colors duration-200 text-center ${isActive
                      ? "font-bold text-[#001e56]"
                      : "font-semibold text-[#475569] group-hover:text-[#001e56]"
                      }`}
                  >
                    {step.navLabel}
                  </span>
                </button>
              );
            })}
          </div>

          {/* ── Animated Progress Line with Indicator Dot ── */}
          <div className="relative w-full mt-5 sm:mt-6">
            <div className="relative w-full h-[5px] sm:h-[6px] bg-[#e4effa] rounded-full overflow-hidden">
              <div
                className="h-full bg-[#0066ff] rounded-full transition-all duration-500 ease-out"
                style={{ width: progressWidths[activeStep] }}
              />
            </div>
            {/* Dot at start of progress track */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 sm:w-2.5 sm:h-2.5 bg-[#0066ff] rounded-full shadow-sm pointer-events-none" />
          </div>
        </div>

        {/* ── Dynamic Content Cards ── */}
        <div className="max-w-5xl mx-auto mt-10 sm:mt-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="flex flex-col lg:flex-row gap-5 sm:gap-6 items-stretch"
            >
              {/* Card 1: Highlight / Number & Title */}
              <div className="w-full lg:w-[220px] xl:w-[240px] shrink-0 bg-gradient-to-br from-[#ebf5fe] via-[#f1f8fe] to-[#dcf0fe] border border-[#d2e8fb] rounded-2xl sm:rounded-3xl p-6 sm:p-7 flex flex-col justify-center min-h-[170px] lg:min-h-[280px] shadow-[0_4px_20px_rgba(0,102,255,0.04)]">
                <span className="text-4xl sm:text-[46px] font-extrabold text-[#001e56] leading-none mb-3 tracking-tight">
                  {current.number}
                </span>
                <h3 className="text-lg sm:text-[21px] font-bold text-[#001e56] leading-snug mb-1.5">
                  {current.cardTitle}
                </h3>
                <p className="text-sm sm:text-[14.5px] font-medium text-[#4b7bb0] leading-snug whitespace-pre-line">
                  {current.cardSubtitle}
                </p>
              </div>

              {/* Card 2: WHO'S WITH YOU */}
              <div className="flex-1 bg-[#f8fbfe] border border-[#e5f0fa] rounded-2xl sm:rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-[0_2px_14px_rgba(0,0,0,0.02)]">
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-[#e8f1fa] mb-4">
                    <span className="text-xs sm:text-[13px] font-black tracking-wider text-[#001e56] uppercase">
                      WHO&apos;S WITH YOU
                    </span>
                    <span className="text-xs sm:text-[13px] font-bold text-[#567fa6]">
                      {current.stepNumber}/04
                    </span>
                  </div>

                  <div className="space-y-4">
                    {current.whosWithYou.map((item, idx) => (
                      <div
                        key={idx}
                        className={
                          idx !== current.whosWithYou.length - 1
                            ? "border-b border-dashed border-[#d8e6f4] pb-3.5"
                            : ""
                        }
                      >
                        <h4 className="text-[14.5px] sm:text-[15px] font-bold text-[#001e56] leading-snug">
                          {item.title}
                        </h4>
                        <p className="text-[12.5px] sm:text-[13px] text-[#64748b] leading-relaxed mt-0.5">
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card 3: HOW THEY SUPPORT YOU */}
              <div className="flex-1 bg-[#f8fbfe] border border-[#e5f0fa] rounded-2xl sm:rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-[0_2px_14px_rgba(0,0,0,0.02)]">
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-[#e8f1fa] mb-4">
                    <span className="text-xs sm:text-[13px] font-black tracking-wider text-[#001e56] uppercase">
                      HOW THEY SUPPORT YOU
                    </span>
                    <span className="text-xs sm:text-[13px] font-bold text-[#567fa6]">
                      {current.stepNumber}/04
                    </span>
                  </div>

                  <div className="space-y-4">
                    {current.howTheySupportYou.map((item, idx) => (
                      <div
                        key={idx}
                        className={
                          idx !== current.howTheySupportYou.length - 1
                            ? "border-b border-dashed border-[#d8e6f4] pb-3.5"
                            : ""
                        }
                      >
                        <h4 className="text-[14.5px] sm:text-[15px] font-bold text-[#001e56] leading-snug">
                          {item.title}
                        </h4>
                        <p className="text-[12.5px] sm:text-[13px] text-[#64748b] leading-relaxed mt-0.5">
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
