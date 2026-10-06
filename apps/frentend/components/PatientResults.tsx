"use client";

import React, { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

/* ── Filter Categories ── */
const categories = [
  "All",
  "Hairline",
  "Crown",
  "Full Restoration",
  "Beard",
  "Eyebrows",
] as const;

type Category = (typeof categories)[number];

/* ── Result Card Data Interface ── */
interface ResultItem {
  id: number;
  title: string;
  grafts: string;
  category: Category;
  beforeImg: string;
  afterImg: string;
}

const resultsData: ResultItem[] = [
  {
    id: 1,
    title: "Hairline + Crown",
    grafts: "FUE 3,200 grafts",
    category: "Hairline",
    beforeImg: "/assets/BEFORE.png",
    afterImg: "/assets/AFTER.png",
  },
  {
    id: 2,
    title: "Hairline Restoration",
    grafts: "DHI 1,800 grafts",
    category: "Hairline",
    beforeImg: "/assets/BEFORE1.png",
    afterImg: "/assets/AFTER1.png",
  },
  {
    id: 3,
    title: "Crown Restoration",
    grafts: "Sapphire FUE 2,400 grafts",
    category: "Crown",
    beforeImg: "/assets/BEFORE.png",
    afterImg: "/assets/AFTER.png",
  },
  {
    id: 4,
    title: "Full Restoration",
    grafts: "DHI - 4,100 grafts",
    category: "Full Restoration",
    beforeImg: "/assets/BEFORE1.png",
    afterImg: "/assets/AFTER1.png",
  },
  {
    id: 5,
    title: "Profile Restoration",
    grafts: "FUE 3,200 grafts",
    category: "Beard",
    beforeImg: "/assets/BEFORE.png",
    afterImg: "/assets/AFTER.png",
  },
  {
    id: 6,
    title: "Hairline + Crown",
    grafts: "FUE 3,200 grafts",
    category: "Hairline",
    beforeImg: "/assets/BEFORE1.png",
    afterImg: "/assets/AFTER1.png",
  },
  {
    id: 7,
    title: "Hairline Restoration",
    grafts: "FUE 3,200 grafts",
    category: "Eyebrows",
    beforeImg: "/assets/BEFORE.png",
    afterImg: "/assets/AFTER.png",
  },
  {
    id: 8,
    title: "Hairline + Crown",
    grafts: "FUE 3,200 grafts",
    category: "Full Restoration",
    beforeImg: "/assets/BEFORE1.png",
    afterImg: "/assets/AFTER1.png",
  },
];

/* ── Interactive Before / After Split Slider Component ── */
function BeforeAfterImage({
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

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  }, []);

  const handlePointerDown = (e: React.PointerEvent) => {
    isDragging.current = true;
    updatePosition(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (isDragging.current || e.buttons === 1) {
      updatePosition(e.clientX);
    }
  };

  const handlePointerUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    updatePosition(e.clientX);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[4/3] bg-slate-900 overflow-hidden select-none cursor-ew-resize group/img"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onMouseMove={handleMouseMove}
    >
      {/* BEFORE Label Badge */}
      <span className="absolute top-3 left-3 z-30 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10.5px] font-extrabold uppercase tracking-wider text-white border border-white/10 shadow-sm pointer-events-none">
        BEFORE
      </span>

      {/* AFTER Label Badge */}
      <span className="absolute top-3 right-3 z-30 px-2.5 py-1 rounded-full bg-[#0cb0f2] text-[10.5px] font-extrabold uppercase tracking-wider text-white shadow-md shadow-sky-500/30 pointer-events-none">
        AFTER
      </span>

      {/* AFTER Image (Full Background Layer) */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={afterImg}
          alt={`After ${title}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover object-center"
        />
      </div>

      {/* BEFORE Image (Clipped Left Layer) */}
      <div
        className="absolute inset-y-0 left-0 overflow-hidden border-r-2 border-white shadow-lg"
        style={{ width: `${sliderPos}%` }}
      >
        <div className="absolute inset-y-0 left-0 w-full min-w-[320px] h-full">
          <Image
            src={beforeImg}
            alt={`Before ${title}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover object-center"
          />
        </div>
      </div>

      {/* Glowing Split Beam Divider */}
      <div
        className="absolute top-0 bottom-0 w-[2px] bg-cyan-400 shadow-[0_0_10px_#0cb0f2] z-20 pointer-events-none"
        style={{ left: `calc(${sliderPos}% - 1px)` }}
      />

      {/* Interactive Handle Knob */}
      <div
        className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-white text-[#0cb0f2] border border-[#0cb0f2]/40 shadow-md flex items-center justify-center z-30 text-[10px] font-bold group-hover/img:scale-110 transition-transform pointer-events-none"
        style={{ left: `${sliderPos}%` }}
      >
        ‹ ›
      </div>
    </div>
  );
}

/* ── Main Patient Results Section Component ── */
export default function PatientResults() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filteredResults =
    activeCategory === "All"
      ? resultsData
      : resultsData.filter(
          (item) =>
            item.category === activeCategory ||
            (activeCategory === "Hairline" && item.title.includes("Hairline")) ||
            (activeCategory === "Crown" && item.title.includes("Crown")) ||
            (activeCategory === "Full Restoration" && item.title.includes("Full"))
        );

  return (
    <section className="relative w-full bg-gradient-to-br from-[#eef7fe] via-[#f8fafc] to-[#e6f4fe]/60 py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* ── Background Visuals & Light Waves ── */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Soft upper-right ambient sky blue glow */}
        <div className="absolute top-0 right-0 w-[850px] h-[650px] bg-gradient-to-br from-[#bae3fa]/80 via-[#d0ebfd]/50 to-transparent blur-3xl opacity-90" />

        {/* Decorative cyan/blue wave lines & visual graphics */}
        <svg
          className="absolute top-0 right-0 w-full max-w-[950px] h-[550px] opacity-80 text-[#0cb0f2]"
          viewBox="0 0 950 550"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Wave Petal Fills */}
          <path
            d="M250 0C450 160 700 220 950 180V0H250Z"
            fill="url(#wave-grad-1)"
          />
          <path
            d="M400 0C580 180 780 280 950 250V0H400Z"
            fill="url(#wave-grad-2)"
          />

          {/* Stroke Lines */}
          <path
            d="M150 0C380 200 650 280 950 220"
            stroke="url(#line-grad-1)"
            strokeWidth="2.5"
            opacity="0.8"
          />
          <path
            d="M250 0C450 160 700 220 950 180"
            stroke="#ffffff"
            strokeWidth="2"
            opacity="0.9"
          />
          <path
            d="M100 0C320 230 580 340 950 300"
            stroke="url(#line-grad-2)"
            strokeWidth="3"
            strokeDasharray="6 6"
            opacity="0.6"
          />
          <path
            d="M50 0C280 270 520 400 950 380"
            stroke="#0cb0f2"
            strokeWidth="1.5"
            opacity="0.4"
          />

          <defs>
            <linearGradient id="wave-grad-1" x1="250" y1="0" x2="950" y2="180">
              <stop stopColor="#0cb0f2" stopOpacity="0.18" />
              <stop offset="1" stopColor="#0196e3" stopOpacity="0.05" />
            </linearGradient>
            <linearGradient id="wave-grad-2" x1="400" y1="0" x2="950" y2="250">
              <stop stopColor="#cceafe" stopOpacity="0.3" />
              <stop offset="1" stopColor="#0cb0f2" stopOpacity="0.08" />
            </linearGradient>
            <linearGradient id="line-grad-1" x1="150" y1="0" x2="950" y2="220">
              <stop stopColor="#0cb0f2" />
              <stop offset="1" stopColor="#0196e3" stopOpacity="0.4" />
            </linearGradient>
            <linearGradient id="line-grad-2" x1="100" y1="0" x2="950" y2="300">
              <stop stopColor="#0196e3" />
              <stop offset="1" stopColor="#0cb0f2" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* ── Header / Intro Section ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-2xl mb-10 sm:mb-12"
        >
          {/* Small Uppercase Label */}
          <p className="text-[12px] font-bold uppercase tracking-[0.25em] text-[#0cb0f2] mb-3">
            PATIENT RESULTS
          </p>

          {/* Main Heading */}
          <h2 className="text-4xl sm:text-5xl lg:text-[52px] font-extrabold leading-[1.1] tracking-tight">
            <span className="text-[#001e56] block">See the Difference.</span>
            <span className="text-[#0cb0f2]">Feel the Confidence.</span>
          </h2>

          {/* Subheading Description */}
          <p className="mt-4 text-[15px] sm:text-[16.5px] font-medium leading-relaxed text-[#64748B]">
            Real patients. Real results. Every transformation below is from our
            own clinic.
          </p>
        </motion.div>

        {/* ── Category Filters & Action Bar ── */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10 pb-2">
          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0 scrollbar-none">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-[13.5px] font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-[#001e56] text-white shadow-md scale-[1.02]"
                      : "bg-white text-[#001e56] border border-slate-200/90 hover:bg-[#edf6fe] hover:border-[#0cb0f2] hover:text-[#0cb0f2]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Action Button: View All Results */}
          <button className="shrink-0 px-5 py-2.5 rounded-xl border border-[#0cb0f2]/50 bg-white text-[#001e56] text-[14px] font-semibold hover:bg-[#0cb0f2] hover:text-white hover:border-[#0cb0f2] transition-all duration-200 shadow-sm cursor-pointer active:scale-[0.98]">
            View All Results
          </button>
        </div>

        {/* ── Results Cards Grid ── */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          <AnimatePresence mode="popLayout">
            {filteredResults.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{
                  duration: 0.4,
                  delay: idx * 0.06,
                  ease: "easeOut",
                }}
                className="group relative bg-white rounded-2xl border border-[#e9f4fd] shadow-[0_4px_20px_rgba(0,30,86,0.06)] hover:shadow-[0_12px_32px_rgba(12,176,242,0.15)] hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex flex-col"
              >
                {/* Interactive Before / After Image Split Slider */}
                <BeforeAfterImage
                  beforeImg={item.beforeImg}
                  afterImg={item.afterImg}
                  title={item.title}
                />

                {/* Card Title & Graft Information */}
                <div className="p-5 text-center flex flex-col items-center justify-center bg-white border-t border-slate-100/80">
                  <h3 className="text-[16px] font-bold text-[#001e56] tracking-tight group-hover:text-[#0cb0f2] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[13.5px] font-medium text-[#64748B] mt-0.5">
                    {item.grafts}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
