"use client";

import React, { useState, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import BookConsultationButton from "./BookConsultationButton";
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
    description: (
      <>
        Follicular Unit Extraction (FUE) is a minimally invasive hair transplant <br />
        technique where individual hair follicles are extracted and <br />
        implanted for natural-looking, long-lasting results.
      </>
    ),
    beforeImg: "/assets/BEFORE.png",
    afterImg: "/assets/AFTER.png",
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
    beforeImg: "/assets/BEFORE1.png",
    afterImg: "/assets/AFTER1.png",
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
    beforeImg: "/assets/BEFORE.png",
    afterImg: "/assets/AFTER.png",
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
    beforeImg: "/assets/BEFORE1.png",
    afterImg: "/assets/AFTER1.png",
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
    beforeImg: "/assets/BEFORE.png",
    afterImg: "/assets/AFTER.png",
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
      className="relative w-full max-w-[320px] aspect-[1.15/1] rounded-3xl overflow-hidden shadow-[0_8px_30px_rgba(12,176,242,0.18)] border-4 border-white select-none cursor-ew-resize bg-slate-900 group/showcase touch-none @container focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0cb0f2]"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onMouseMove={handleMouseMove}
    >
      {/* BEFORE Badge */}
      <span className="absolute top-4 left-4 z-30 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10.5px] font-extrabold uppercase tracking-wider text-white border border-white/10 shadow-sm pointer-events-none">
        BEFORE
      </span>

      {/* AFTER Badge */}
      <span className="absolute top-4 right-4 z-30 px-3 py-1 rounded-full bg-[#0cb0f2] text-[10.5px] font-extrabold uppercase tracking-wider text-white shadow-md shadow-sky-500/30 pointer-events-none">
        AFTER
      </span>

      {/* AFTER Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={afterImg}
          alt={`After ${title}`}
          fill
          loading="eager"
          sizes="(max-width: 768px) 100vw, 320px"
          className="object-cover object-center"
        />
      </div>

      {/* BEFORE Image (Clipped) */}
      <div
        className="absolute inset-y-0 left-0 overflow-hidden border-r-2 border-white shadow-xl"
        style={{ width: `${sliderPos}%` }}
      >
        <div className="absolute inset-y-0 left-0 w-[100cqw] min-w-full h-full">
          <Image
            src={beforeImg}
            alt={`Before ${title}`}
            fill
            loading="eager"
            sizes="(max-width: 768px) 100vw, 320px"
            className="object-cover object-center"
          />
        </div>
      </div>

      {/* Split Beam Divider */}
      <div
        className="absolute top-0 bottom-0 w-[3px] bg-cyan-400 shadow-[0_0_12px_#0cb0f2] z-20 pointer-events-none"
        style={{ left: `calc(${sliderPos}% - 1.5px)` }}
      />

      {/* Handle Knob */}
      <div
        className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white text-[#0cb0f2] border-2 border-[#0cb0f2] shadow-lg flex items-center justify-center z-30 text-[11px] font-bold group-hover/showcase:scale-110 transition-transform pointer-events-none"
        style={{ left: `${sliderPos}%` }}
      >
        ‹ ›
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
      className="relative w-full bg-gradient-to-b from-white via-[#f8fafc] to-white py-12 sm:py-16 lg:py-20 overflow-hidden"
    >
      {/* Background Ambient Light Glow */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#dcf1fd]/40 blur-3xl rounded-full opacity-70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto mb-12 flex max-w-3xl flex-col items-center text-center"
        >
          <p className="text-[12px] font-bold uppercase tracking-[0.25em] text-[#0cb0f2] mb-3">
            OUR SERVICES
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-extrabold leading-[1.12] tracking-tight text-[#001e56]">
            Advanced Hair Restoration
          </h2>
        </motion.div>

        {/* ── Interactive Service Selection Tabs Bar ── */}
        <div className="flex items-center gap-3 lg:gap-4 overflow-x-auto w-full pb-4 mb-14 scrollbar-none justify-start pr-6">
          {servicesList.map((service) => {
            const isActive = activeTab === service.id;
            return (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`flex items-center gap-3 px-5 py-3.5 rounded-2xl transition-all duration-300 cursor-pointer shrink-0 text-left ${isActive
                  ? "bg-white border-2 border-[#0cb0f2] shadow-[0_8px_24px_rgba(12,176,242,0.18)] scale-[1.02]"
                  : "bg-white/80 border border-slate-200/90 hover:bg-[#edf6fe] hover:border-[#0cb0f2]/60"
                  }`}
              >
                {/* Bullseye / Target Icon */}
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-colors ${isActive
                    ? "bg-[#0cb0f2] text-white"
                    : "bg-[#edf6fe] text-[#0196e3]"
                    }`}
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <circle cx="12" cy="12" r="9" />
                    <circle cx="12" cy="12" r="5" />
                    <circle cx="12" cy="12" r="1" />
                  </svg>
                </div>

                <div>
                  <h3 className="text-[14.5px] font-bold text-[#001e56] leading-tight">
                    {service.tabTitle}
                  </h3>
                  <p className="text-[12px] font-medium text-[#64748B] mt-0.5">
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
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="mb-14"
          >
            {/* Top Row: Description on Left, Smaller Before/After Image Card on Right */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-8">
              <div className="lg:col-span-8 flex flex-col items-start">
                <p className="text-[13px] font-bold uppercase tracking-[0.25em] text-[#0cb0f2] mb-4">
                  {currentService.eyebrow}
                </p>

                <h3 className="text-4xl sm:text-5xl lg:text-[52px] font-extrabold leading-tight text-[#001e56] mb-5">
                  {currentService.title}
                </h3>

                <p className="text-[16px] sm:text-[17px] font-normal leading-relaxed text-[#64748B]">
                  {currentService.description}
                </p>
              </div>

              <div className="lg:col-span-4 flex justify-center lg:justify-end">
                <ServiceBeforeAfterCard
                  beforeImg={currentService.beforeImg}
                  afterImg={currentService.afterImg}
                  title={currentService.title}
                />
              </div>
            </div>

            {/* Middle Row: 3 Key Benefits FULL-WIDTH BELOW Image & Description */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-0 lg:divide-x divide-slate-200/90 w-full py-6 my-6 border-t border-b border-slate-100/90 items-center">
              {currentService.benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-3.5 px-2 lg:px-6">
                  <div className="w-11 h-11 rounded-full bg-[#edf6fe] text-cyan-400 flex items-center justify-center shrink-0 shadow-sm">
                    {idx === 0 ? (
                      <Leaf className="w-5 h-5" strokeWidth={2} />
                    ) : idx === 1 ? (
                      <Clock className="w-5 h-5" strokeWidth={2} />
                    ) : (
                      <Star className="w-5 h-5" strokeWidth={2} />
                    )}
                  </div>
                  <div>
                    <h4 className="text-[15px] font-bold text-[#001e56] leading-snug">
                      {benefit.title}
                    </h4>
                    <p className="text-[12.5px] font-medium text-[#64748B] mt-0.5">
                      {benefit.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* ── Bottom 3-Card Information Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7 items-stretch">
          {/* Card 1: How It Works Timeline */}
          <div className="bg-[#f4fafe]/90 rounded-3xl p-6 sm:p-7 border border-[#e9f4fd] shadow-sm flex flex-col">
            <h3 className="text-[19px] font-bold text-[#001e56] mb-6">
              How It Works
            </h3>

            <div className="flex flex-col gap-6 relative">
              {/* Vertical connecting line */}
              <div className="absolute top-4 bottom-4 left-4 w-[2px] bg-sky-200 border-dashed border-l border-sky-300 z-0" />

              {currentService.timeline.map((stepItem) => (
                <div key={stepItem.step} className="flex items-start gap-4 relative z-10">
                  <div className="w-8 h-8 rounded-full bg-[#dcf1fd] text-[#0196e3] font-bold text-[13px] flex items-center justify-center shrink-0 shadow-sm border border-white">
                    {stepItem.step}
                  </div>
                  <div>
                    <h4 className="text-[15px] font-bold text-[#001e56] leading-snug">
                      {stepItem.title}
                    </h4>
                    <p className="text-[12.5px] font-normal text-[#64748B] leading-relaxed mt-0.5">
                      {stepItem.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2: Advantages / Checklist */}
          <div className="bg-[#f4fafe]/90 rounded-3xl p-6 sm:p-7 border border-[#e9f4fd] shadow-sm flex flex-col">
            <h3 className="text-[19px] font-bold text-[#001e56] mb-6">
              Key Advantages
            </h3>

            <div className="flex flex-col gap-3.5">
              {currentService.checklist.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#0cb0f2]/15 text-[#0cb0f2] flex items-center justify-center shrink-0">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-[13.5px] font-semibold text-[#001e56] leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 3: Pricing & Consultation CTA */}
          <div className="bg-[#f4fafe]/90 rounded-3xl p-6 sm:p-7 border border-[#e9f4fd] shadow-sm flex flex-col">
            <h3 className="text-[19px] font-bold text-[#001e56] mb-6">
              Starting From
            </h3>

            <div className="flex items-baseline gap-1.5 mb-6">
              <span className="text-3xl sm:text-4xl font-extrabold text-[#001e56]">
                {currentService.price}
              </span>
              <span className="text-[13.5px] font-normal text-[#64748B]">
                session
              </span>
            </div>

            <div className="flex flex-col gap-3 mb-6 pt-4 border-t border-slate-200/80">
              <div className="flex items-center gap-2.5 text-[13.5px] font-medium text-[#001e56]">
                <span className="w-2 h-2 rounded-full bg-[#001e56]" />
                Procedure Time {currentService.procedureTime}
              </div>
              <div className="flex items-center gap-2.5 text-[13.5px] font-medium text-[#001e56]">
                <span className="w-2 h-2 rounded-full bg-[#001e56]" />
                Recovery Time {currentService.recoveryTime}
              </div>
              <div className="flex items-center gap-2.5 text-[13.5px] font-medium text-[#001e56]">
                <span className="w-2 h-2 rounded-full bg-[#001e56]" />
                Results Visible {currentService.resultsTime}
              </div>
            </div>

            <BookConsultationButton
              className="flex items-center justify-center gap-2.5 w-full py-3.5 px-6 rounded-2xl text-[14.5px] font-semibold text-white bg-[#001e56] shadow-md hover:bg-[#0c246c] hover:shadow-lg transition-all duration-300 ease-out active:scale-[0.98]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
