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
    <section className="relative w-full pt-16 sm:pt-20 lg:pt-24 pb-8 sm:pb-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* ── Left Column: Heading + Thought Image ── */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            {/* Header Text */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="max-w-lg mb-8 lg:mb-4"
            >
              <p className="text-[12px] sm:text-[13px] font-bold uppercase tracking-[0.2em] text-[#00a8ff] mb-2.5">
                FAQ
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold tracking-tight leading-[1.15]">
                <span className="text-[#001e56] block">Frequently Asked</span>
                <span className="text-[#00a8ff] block">Questions</span>
              </h2>
              <p className="mt-3.5 text-[14px] sm:text-[15.5px] leading-relaxed text-slate-500 font-normal">
                Find answers to the most common questions about hair transplant,
                treatment, recovery and results.
              </p>
            </motion.div>

            {/* Thought Image: Thinking Man with Waves */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
              className="relative w-full flex items-center justify-center lg:justify-start -ml-2 sm:-ml-4 pt-2 lg:pt-6"
            >
              <div className="relative w-full max-w-[460px] sm:max-w-[500px] lg:max-w-[540px]">
                <Image
                  src="/assets/thought.png"
                  alt="Frequently asked questions about hair transplant"
                  width={720}
                  height={620}
                  className="w-full h-auto object-contain select-none pointer-events-none drop-shadow-xs"
                  priority
                />
              </div>
            </motion.div>
          </div>

          {/* ── Right Column: FAQ Accordion Stack ── */}
          <div className="lg:col-span-7 flex flex-col gap-3.5 sm:gap-4 lg:pt-2">
            {faqData.map((item, idx) => {
              const isOpen = openId === item.id;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{
                    duration: 0.4,
                    delay: idx * 0.05,
                    ease: "easeOut",
                  }}
                  className={`border transition-all duration-300 overflow-hidden bg-white ${isOpen
                      ? "border-[#00a8ff] rounded-[24px] shadow-[0_6px_24px_rgba(0,168,255,0.1)] ring-1 ring-[#00a8ff]/20"
                      : "border-[#7dd3fc]/80 hover:border-[#00a8ff] rounded-full sm:rounded-[28px] hover:shadow-[0_4px_16px_rgba(0,168,255,0.06)]"
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
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#00a8ff] group-hover:bg-[#0092dd] text-white flex items-center justify-center font-bold text-sm sm:text-base shrink-0 shadow-xs transition-colors duration-200">
                      ?
                    </div>

                    {/* Question Title */}
                    <span className="flex-1 px-3.5 sm:px-4 text-[14px] sm:text-[15.5px] font-semibold text-[#001e56] leading-snug group-hover:text-[#00a8ff] transition-colors duration-200">
                      {item.question}
                    </span>

                    {/* Right Chevron Icon */}
                    <div className="shrink-0 text-[#001e56] group-hover:text-[#00a8ff] transition-colors duration-200">
                      <svg
                        className={`w-5 h-5 transition-transform duration-300 ease-in-out ${isOpen ? "rotate-180 text-[#00a8ff]" : "rotate-0"
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

      {/* Subtle Bottom Ambient Gradient Glow */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#e9f4fd]/40 to-transparent pointer-events-none" />
    </section>
  );
}
