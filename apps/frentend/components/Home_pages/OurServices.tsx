"use client";

import React, { useState, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import BookConsultationButton from "@/components/BookConsultationButton";
import { motion, AnimatePresence } from "motion/react";
import { Leaf, Clock, Star } from "lucide-react";

/* ── Service Data Interface ── */
interface ServiceData {
  id: string;
  tabTitle: string;
  tabSubtitle: string;
  eyebrow: string;
  title: string;
  description: React.ReactNode;
  beforeImg: string;
  afterImg: string;
  price: string;
  benefits: { title: string; subtitle: string }[];
  timeline: { step: string; title: string; description: string }[];
  checklist: string[];
  procedureTime: string;
  recoveryTime: string;
  resultsTime: string;
}

const servicesList: ServiceData[] = [
  {
    id: "fue",
    tabTitle: "FUE Hair Transplant",
    tabSubtitle: "Natural-Looking Results",
    eyebrow: "HAIR TRANSPLANT",
    title: "FUE Hair Transplant",
    description:
      "Follicular Unit Extraction (FUE) is a minimally invasive hair transplant technique where individual hair follicles are extracted and implanted for natural-looking, long-lasting results.",
    beforeImg: "/images/transformations/case-01-before.webp",
    afterImg: "/images/transformations/case-01-after.webp",
    price: "₹90,000",
    benefits: [
      {
        title: "Natural-Looking Results",
        subtitle: "Blends seamlessly with existing hair",
      },
      {
        title: "Minimal Downtime",
        subtitle: "Get back to your routine faster",
      },
      {
        title: "Ideal for Most Hair Types",
        subtitle: "A safe and effective solution",
      },
    ],
    timeline: [
      {
        step: "01",
        title: "Extraction",
        description:
          "Individual hair follicles are extracted from the donor area.",
      },
      {
        step: "02",
        title: "Preparation",
        description:
          "Follicles are carefully prepared for implantation.",
      },
      {
        step: "03",
        title: "Implantation",
        description:
          "Follicles are placed in thinning areas following your natural hair pattern.",
      },
    ],
    checklist: [
      "Natural and undetectable results",
      "No linear scar (only tiny dots)",
      "Minimally invasive procedure",
      "Quick recovery",
      "Long-lasting and permanent results",
      "Suitable for most hair types",
    ],
    procedureTime: "4–8 hours",
    recoveryTime: "3–5 days",
    resultsTime: "3–6 months",
  },
  {
    id: "dhi",
    tabTitle: "DHI Hair Transplant",
    tabSubtitle: "Maximum Density",
    eyebrow: "DIRECT HAIR IMPLANTATION",
    title: "DHI Hair Transplant",
    description:
      "Direct Hair Implantation (DHI) utilizes a specialized Choi Implanter Pen to control depth, angle, and direction for ultra-dense, natural hairline restoration.",
    beforeImg: "/images/transformations/case-02-before.webp",
    afterImg: "/images/transformations/case-02-after.webp",
    price: "₹1,10,000",
    benefits: [
      {
        title: "Maximum Density",
        subtitle: "High graft placement precision",
      },
      {
        title: "No Channel Incisions",
        subtitle: "Direct implantation method",
      },
      {
        title: "Rapid Scalp Healing",
        subtitle: "Minimal post-op redness",
      },
    ],
    timeline: [
      {
        step: "01",
        title: "Follicle Harvest",
        description:
          "Grafts are carefully extracted with micro-punches.",
      },
      {
        step: "02",
        title: "Pen Loading",
        description:
          "Extracted grafts are loaded into Choi implanter pens.",
      },
      {
        step: "03",
        title: "Direct Placement",
        description:
          "Direct insertion into recipient sites with exact angle control.",
      },
    ],
    checklist: [
      "Ultra-dense follicle placement",
      "No shaving required for recipient zone",
      "Exact direction and depth control",
      "Faster recovery time",
      "Permanent graft survival",
      "Ideal for hairline refinement",
    ],
    procedureTime: "5–8 hours",
    recoveryTime: "2–4 days",
    resultsTime: "3–6 months",
  },
  {
    id: "sapphire-fue",
    tabTitle: "Sapphire FUE",
    tabSubtitle: "Precision & Faster Healing",
    eyebrow: "ADVANCED FUE TECH",
    title: "Sapphire FUE Transplant",
    description:
      "Sapphire FUE uses blades made from precious sapphire gemstone instead of steel, creating micro-channels that accelerate healing and maximize graft density.",
    beforeImg: "/images/transformations/case-03-before.webp",
    afterImg: "/images/transformations/case-03-after.webp",
    price: "₹1,00,000",
    benefits: [
      {
        title: "Gemstone Blades",
        subtitle: "Ultra-sharp V-shaped incisions",
      },
      {
        title: "Faster Scalp Recovery",
        subtitle: "Less tissue trauma and swelling",
      },
      {
        title: "Enhanced Hair Density",
        subtitle: "Closer channel opening pattern",
      },
    ],
    timeline: [
      {
        step: "01",
        title: "Micro Extraction",
        description:
          "Healthy grafts extracted using micro-motor technique.",
      },
      {
        step: "02",
        title: "Sapphire Channels",
        description:
          "Precise micro-grooves opened with sapphire gemstone blades.",
      },
      {
        step: "03",
        title: "Follicle Insertion",
        description:
          "Grafts implanted carefully into sapphire micro-channels.",
      },
    ],
    checklist: [
      "Ultra-precise V-shaped channel openings",
      "Reduced risk of post-op scab formation",
      "Faster tissue regeneration",
      "High density natural alignment",
      "Permanent natural results",
      "Suitable for advanced hair loss",
    ],
    procedureTime: "4–7 hours",
    recoveryTime: "3–5 days",
    resultsTime: "3–6 months",
  },
  {
    id: "beard",
    tabTitle: "Beard Transplant",
    tabSubtitle: "Natural Beard Growth",
    eyebrow: "FACIAL HAIR RESTORATION",
    title: "Beard & Mustache Transplant",
    description:
      "Restore patchy, thin, or uneven facial hair with natural donor hair follicles transplanted to sculpt a full, well-defined beard.",
    beforeImg: "/images/transformations/case-04-before.webp",
    afterImg: "/images/transformations/case-04-after.webp",
    price: "₹85,000",
    benefits: [
      {
        title: "Natural Beard Growth",
        subtitle: "Can be shaved, trimmed, & styled",
      },
      {
        title: "Custom Beard Contour",
        subtitle: "Designed according to your facial structure",
      },
      {
        title: "Permanent Hair Survival",
        subtitle: "Lifetime natural facial hair",
      },
    ],
    timeline: [
      {
        step: "01",
        title: "Scalp Donor Harvest",
        description:
          "Single-hair follicles extracted from back of scalp.",
      },
      {
        step: "02",
        title: "Facial Mapping",
        description:
          "Beard outline mapped precisely to match your facial shape.",
      },
      {
        step: "03",
        title: "Facial Implant",
        description:
          "Follicles placed at acute angles matching beard growth.",
      },
    ],
    checklist: [
      "Fills patchy beard and cheek gaps",
      "Custom hairline and cheekbone design",
      "Permanent growing beard hair",
      "Minimally invasive with no linear scar",
      "Quick 3-day recovery",
      "Natural hair texture match",
    ],
    procedureTime: "4–6 hours",
    recoveryTime: "3–5 days",
    resultsTime: "4–8 months",
  },
  {
    id: "eyebrow",
    tabTitle: "Eyebrow Transplant",
    tabSubtitle: "Defined & Natural Look",
    eyebrow: "EYEBROW RESTORATION",
    title: "Eyebrow Transplant",
    description:
      "Precision transplantation of single hair follicles to reshape over-plucked, thin, or scarred eyebrows for natural facial symmetry.",
    beforeImg: "/images/transformations/case-01-before.webp",
    afterImg: "/images/transformations/case-02-after.webp",
    price: "₹75,000",
    benefits: [
      {
        title: "Defined & Natural Look",
        subtitle: "Restores eyebrow arch and tail density",
      },
      {
        title: "Single-Hair Precision",
        subtitle: "Implanted at ultra-flat angles",
      },
      {
        title: "Permanent Eyebrows",
        subtitle: "Natural growing real hair",
      },
    ],
    timeline: [
      {
        step: "01",
        title: "Single Follicle Selection",
        description:
          "Ultra-fine single hair grafts harvested carefully.",
      },
      {
        step: "02",
        title: "Arch & Contour Design",
        description:
          "Eyebrow shape customized to your eye and brow bone.",
      },
      {
        step: "03",
        title: "Flat Angle Implantation",
        description:
          "Grafts implanted flush against the skin for natural direction.",
      },
    ],
    checklist: [
      "Fills thin, over-plucked, or scarred brows",
      "Custom arch symmetry design",
      "Single-hair graft precision placement",
      "Natural growing real hair",
      "Minimal downtime",
      "Permanent lifelong results",
    ],
    procedureTime: "3–5 hours",
    recoveryTime: "2–4 days",
    resultsTime: "3–6 months",
  },
];

/* ── Interactive Before / After Split Showcase ── */
function ServiceBeforeAfterCard({
  beforeImg,
  afterImg,
  title,
}: {
  beforeImg: string;
  afterImg: string;
  title: string;
}) {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updatePos = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  }, []);

  const handlePointerDown = (e: React.PointerEvent) => {
    isDragging.current = true;
    updatePos(e.clientX);
  };
  const handlePointerMove = (e: React.PointerEvent) => {
    if (isDragging.current || e.buttons === 1) updatePos(e.clientX);
  };
  const handlePointerUp = () => {
    isDragging.current = false;
  };
  const handleMouseMove = (e: React.MouseEvent) => {
    updatePos(e.clientX);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      setSliderPos((prev) => Math.max(0, prev - 5));
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      setSliderPos((prev) => Math.min(100, prev + 5));
    }
  };

  return (
    <div
      ref={containerRef}
      role="slider"
      tabIndex={0}
      aria-label={`Before and after comparison slider for ${title}`}
      aria-valuenow={Math.round(sliderPos)}
      aria-valuemin={0}
      aria-valuemax={100}
      onKeyDown={handleKeyDown}
      className="relative w-full aspect-[1.14/1] rounded-2xl overflow-hidden select-none cursor-ew-resize bg-slate-900 group/showcase touch-none @container focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0cb0f2]"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onMouseMove={handleMouseMove}
    >
      {/* BEFORE Badge */}
      <span className="absolute top-3.5 left-3.5 z-30 px-2.5 py-0.5 rounded-full bg-slate-800/60 backdrop-blur-xs text-[10px] font-bold uppercase tracking-wider text-white border border-white/10 shadow-sm pointer-events-none">
        BEFORE
      </span>

      {/* AFTER Badge */}
      <span className="absolute top-3.5 right-3.5 z-30 px-2.5 py-0.5 rounded-full bg-[#00a8ff] text-[10px] font-bold uppercase tracking-wider text-white shadow-md shadow-sky-500/25 pointer-events-none">
        AFTER
      </span>

      {/* AFTER Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={afterImg}
          alt={`After ${title}`}
          fill
          loading="eager"
          sizes="(max-width: 768px) 100vw, 340px"
          className="object-cover object-center"
        />
      </div>

      {/* BEFORE Image (Clipped) */}
      <div
        className="absolute inset-y-0 left-0 overflow-hidden border-r border-white/80 shadow-md"
        style={{ width: `${sliderPos}%` }}
      >
        <div className="absolute inset-y-0 left-0 w-[100cqw] min-w-full h-full">
          <Image
            src={beforeImg}
            alt={`Before ${title}`}
            fill
            loading="eager"
            sizes="(max-width: 768px) 100vw, 340px"
            className="object-cover object-center"
          />
        </div>
      </div>

      {/* Split Divider */}
      <div
        className="absolute top-0 bottom-0 w-[2px] bg-white shadow-[0_0_8px_rgba(0,0,0,0.3)] z-20 pointer-events-none"
        style={{ left: `calc(${sliderPos}% - 1px)` }}
      />

      {/* Handle Knob */}
      <div
        className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white text-slate-700 border border-slate-200/90 shadow-md flex items-center justify-center z-30 text-[10px] font-bold group-hover/showcase:scale-105 transition-transform pointer-events-none"
        style={{ left: `${sliderPos}%` }}
      >
        <span className="flex select-none items-center gap-[1px] leading-none text-slate-700">
          ‹›
        </span>
      </div>
    </div>
  );
}

/* ── Main Our Services Component ── */
export default function OurServices() {
  const [activeTab, setActiveTab] = useState<string>("fue");

  const currentService =
    servicesList.find((s) => s.id === activeTab) || servicesList[0];

  return (
    <section
      id="our-services"
      className="relative w-full bg-gradient-to-b from-white via-[#f8fafc] to-white py-12 max-sm:py-8 sm:py-16 lg:py-20 overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#dcf1fd]/40 blur-3xl rounded-full opacity-70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 max-sm:px-4 sm:px-8 lg:px-12">
        {/* ── Section Header ── */}
        <div className="mx-auto mb-10 max-sm:mb-6 sm:mb-12 flex max-w-3xl flex-col items-center text-center">
          <p className="text-[11px] max-sm:text-[10px] sm:text-[12px] font-bold uppercase tracking-[0.25em] text-[#64748B] mb-2 sm:mb-2.5 max-sm:mb-1">
            OUR SERVICES
          </p>

          <h2 className="text-3xl max-sm:text-[23px] sm:text-4xl lg:text-[44px] font-extrabold leading-[1.14] tracking-tight text-[#001e56]">
            Advanced Hair Restoration
          </h2>
        </div>

        {/* ── Interactive Service Selection Tabs Bar ── */}
        <div className="flex items-center gap-3 lg:gap-4 overflow-x-auto w-full pb-3 max-sm:pb-2 mb-10 max-sm:mb-6 sm:mb-12 scrollbar-none justify-start pr-6 max-sm:pr-4">
          {servicesList.map((service) => {
            const isActive = activeTab === service.id;
            return (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`flex items-center gap-3 max-sm:gap-2 px-4 max-sm:px-3 sm:px-5 py-3 max-sm:py-2.5 rounded-2xl max-sm:rounded-xl transition-all duration-300 cursor-pointer shrink-0 text-left ${isActive
                  ? "bg-[#edf7fe] border-2 border-[#0cb0f2]/60 shadow-[0_4px_16px_rgba(12,176,242,0.15)] scale-[1.01]"
                  : "bg-white border border-slate-200/80 hover:bg-[#f6fbfe] hover:border-slate-300"
                  }`}
              >
                {/* Target / Bullseye Icon */}
                <div
                  className={`w-8 h-8 max-sm:w-7 max-sm:h-7 sm:w-9 sm:h-9 rounded-full flex items-center justify-center shrink-0 transition-colors ${isActive
                    ? "bg-[#0cb0f2] text-white"
                    : "bg-[#edf6fe] text-[#0196e3]"
                    }`}
                >
                  <svg className="w-4 h-4 max-sm:w-3.5 max-sm:h-3.5 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <circle cx="12" cy="12" r="9" />
                    <circle cx="12" cy="12" r="5" />
                    <circle cx="12" cy="12" r="1" />
                  </svg>
                </div>

                <div>
                  <h3 className="text-[13.5px] max-sm:text-[12px] sm:text-[14px] font-bold text-[#001e56] leading-tight">
                    {service.tabTitle}
                  </h3>
                  <p className="text-[11px] max-sm:text-[10px] sm:text-[11.5px] font-medium text-[#64748B] mt-0.5 max-sm:mt-0">
                    {service.tabSubtitle}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* ── Active Service Main Content Showcase ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentService.id}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="mb-10 max-sm:mb-6 sm:mb-12"
          >
            {/* Top Row: Description on Left, Framed Before/After Image on Right */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-8 max-sm:mb-5">
              <div className="lg:col-span-8 flex flex-col items-start">
                <p className="text-[12px] max-sm:text-[11px] font-bold uppercase tracking-[0.22em] text-[#0cb0f2] mb-3 max-sm:mb-1.5">
                  {currentService.eyebrow}
                </p>

                <h3 className="text-4xl sm:text-5xl lg:text-[52px] max-sm:text-[24px] font-extrabold leading-tight text-[#001e56] mb-4 max-sm:mb-2">
                  {currentService.title}
                </h3>

                <p className="text-[15px] sm:text-[16px] max-sm:text-[13px] font-normal leading-relaxed text-[#64748B] max-w-xl max-sm:mb-4">
                  {currentService.description}
                </p>
              </div>

              <div className="lg:col-span-4 flex justify-center lg:justify-end">
                {/* Framed Before/After Showcase */}
                <div className="w-full max-w-[340px] max-sm:max-w-[280px] p-3 sm:p-3.5 max-sm:p-2.5 rounded-[28px] sm:rounded-[32px] max-sm:rounded-[22px] bg-[#e1f1fc] shadow-sm">
                  <ServiceBeforeAfterCard
                    beforeImg={currentService.beforeImg}
                    afterImg={currentService.afterImg}
                    title={currentService.title}
                  />
                </div>
              </div>
            </div>

            {/* Middle Row: 3 Key Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 max-sm:grid-cols-3 gap-5 sm:gap-4 max-sm:gap-1.5 py-5 max-sm:py-3.5 my-6 max-sm:my-4 border-t border-b border-slate-100 items-center max-sm:items-start">
              {currentService.benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-3.5 px-2 max-sm:gap-1.5 max-sm:px-0.5 max-sm:items-start">
                  <div className="w-10 h-10 max-sm:w-6 max-sm:h-6 max-sm:mt-0.5 rounded-full bg-[#edf6fe] text-[#0cb0f2] flex items-center justify-center shrink-0 shadow-sm">
                    {idx === 0 ? (
                      <Leaf className="w-4.5 h-4.5 max-sm:w-3 max-sm:h-3" strokeWidth={2} />
                    ) : idx === 1 ? (
                      <Clock className="w-4.5 h-4.5 max-sm:w-3 max-sm:h-3" strokeWidth={2} />
                    ) : (
                      <Star className="w-4.5 h-4.5 max-sm:w-3 max-sm:h-3" strokeWidth={2} />
                    )}
                  </div>
                  <div>
                    <h4 className="text-[14px] max-sm:text-[9.5px] max-sm:leading-[1.15] font-bold text-[#001e56] leading-snug">
                      {benefit.title}
                    </h4>
                    <p className="text-[11.5px] max-sm:text-[7.5px] max-sm:leading-[1.2] font-medium text-[#64748B] mt-0.5 max-sm:mt-0.5 max-sm:line-clamp-2">
                      {benefit.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* ── Bottom Information Cards (3-column on desktop, stacked on mobile) ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7 items-stretch max-sm:gap-4">
          {/* Card 1: How It Works Timeline */}
          <div className="bg-[#f4fafe] rounded-3xl max-sm:rounded-2xl p-6 sm:p-8 max-sm:p-5 border border-[#e8f3fc] shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-[20px] max-sm:text-[17px] font-bold text-[#001e56] mb-6 max-sm:mb-4">
                How It Works
              </h3>

              <div className="flex flex-col gap-6 max-sm:gap-4 relative">
                {/* Vertical dotted/dashed connecting line */}
                <div className="absolute top-4 bottom-4 left-4 max-sm:left-3.5 w-[2px] border-l-2 border-dashed border-sky-300 z-0" />

                {currentService.timeline.map((stepItem) => (
                  <div key={stepItem.step} className="flex items-start gap-4 max-sm:gap-3 relative z-10">
                    <div className="w-8 h-8 max-sm:w-7 max-sm:h-7 rounded-full bg-[#dcf1fd] text-[#0196e3] font-bold text-[13px] max-sm:text-[11px] flex items-center justify-center shrink-0 shadow-sm border border-white">
                      {stepItem.step}
                    </div>
                    <div>
                      <h4 className="text-[15px] max-sm:text-[13.5px] font-bold text-[#001e56] leading-snug">
                        {stepItem.title}
                      </h4>
                      <p className="text-[12.5px] max-sm:text-[11.5px] font-normal text-[#64748B] leading-relaxed mt-0.5">
                        {stepItem.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 2: What It Offers */}
          <div className="bg-[#f4fafe] rounded-3xl max-sm:rounded-2xl p-6 sm:p-8 max-sm:p-5 border border-[#e8f3fc] shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-[20px] max-sm:text-[17px] font-bold text-[#001e56] mb-6 max-sm:mb-4">
                What It Offers
              </h3>

              <div className="flex flex-col gap-3.5 max-sm:gap-2.5">
                {currentService.checklist.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 max-sm:gap-2.5">
                    <div className="w-5 h-5 max-sm:w-4.5 max-sm:h-4.5 rounded-full bg-[#dcf1fd] text-[#0196e3] flex items-center justify-center shrink-0">
                      <svg className="w-3.5 h-3.5 max-sm:w-3 max-sm:h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-[13.5px] max-sm:text-[12px] font-semibold text-[#001e56] leading-snug">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 3: Starting From / Pricing & Consultation CTA */}
          <div className="bg-[#f4fafe] rounded-3xl max-sm:rounded-2xl p-6 sm:p-8 max-sm:p-5 border border-[#e8f3fc] shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-[13px] max-sm:text-[11.5px] font-semibold text-[#64748B]">
                Starting From
              </span>

              <div className="flex items-baseline gap-2 mt-1 mb-6 max-sm:mb-4">
                <span className="text-3xl sm:text-4xl max-sm:text-[26px] font-extrabold text-[#001e56]">
                  {currentService.price}
                </span>
                <span className="text-[13.5px] max-sm:text-[11.5px] font-normal text-[#64748B]">
                  session
                </span>
              </div>

              <div className="flex flex-col gap-3 max-sm:gap-2 mb-6 max-sm:mb-5">
                <div className="flex items-center gap-2.5 text-[13.5px] max-sm:text-[11.5px] font-medium text-[#001e56]">
                  <span className="w-2 h-2 rounded-full bg-[#001e56] shrink-0" />
                  Procedure Time {currentService.procedureTime}
                </div>
                <div className="flex items-center gap-2.5 text-[13.5px] max-sm:text-[11.5px] font-medium text-[#001e56]">
                  <span className="w-2 h-2 rounded-full bg-[#001e56] shrink-0" />
                  Recovery Time {currentService.recoveryTime}
                </div>
                <div className="flex items-center gap-2.5 text-[13.5px] max-sm:text-[11.5px] font-medium text-[#001e56]">
                  <span className="w-2 h-2 rounded-full bg-[#001e56] shrink-0" />
                  Results Visible {currentService.resultsTime}
                </div>
              </div>
            </div>

            <div className="mt-auto">
              <BookConsultationButton
                className="flex items-center justify-center gap-2.5 w-full py-3.5 max-sm:py-3 px-6 rounded-xl text-[14.5px] max-sm:text-[13.5px] font-semibold text-white bg-[#001e56] shadow-sm hover:bg-[#0c246c] hover:shadow-md transition-all duration-200 active:scale-[0.98]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

