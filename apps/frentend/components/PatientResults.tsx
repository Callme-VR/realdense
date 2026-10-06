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
    beforeImg: "/assets/BEFORE.png",
    afterImg: "/assets/AFTER.png",
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
    beforeImg: "/assets/BEFORE.png",
    afterImg: "/assets/AFTER.png",
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
    beforeImg: "/assets/BEFORE.png",
    afterImg: "/assets/AFTER.png",
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
    beforeImg: "/assets/BEFORE.png",
    afterImg: "/assets/AFTER.png",
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
    <section className="relative w-full py-16 sm:py-20 lg:py-24 overflow-hidden bg-gradient-to-br from-[#edf6fe] via-[#f8fafc] to-[#e6f4fe]">
      {/* ── SVG WAVE BACKGROUND LAYER ── */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Soft Ambient Glow */}
        <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-gradient-to-br from-[#cce9fd]/80 via-[#dcf1fd]/40 to-transparent blur-3xl opacity-80" />

        <svg
          viewBox="0 0 2048 1152"
          preserveAspectRatio="none"
          aria-hidden="true"
          className="absolute inset-0 w-full h-full text-[#0cb0f2]"
        >
          <defs>
            {/* Main blue gradient */}
            <linearGradient id="waveBlue" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#0cb0f2" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#00a8ff" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#0196e3" stopOpacity="0.3" />
            </linearGradient>

            {/* Bottom soft gradient */}
            <linearGradient id="softBlue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#dcf1fd" stopOpacity="0.7" />
            </linearGradient>
          </defs>

          {/* Bottom soft blue area */}
          <path
            d="
              M 0 760
              C 350 1000, 650 1000, 940 850
              C 1190 720, 1300 570, 1530 520
              C 1760 470, 1930 550, 2048 650
              L 2048 1152
              L 0 1152
              Z
            "
            fill="url(#softBlue)"
          />

          {/* TOP FLOWING WAVES */}
          <path
            d="
              M 720 150
              C 920 80, 1050 330, 1240 280
              C 1430 230, 1510 30, 1730 10
              C 1880 -5, 1980 50, 2048 90
            "
            fill="none"
            stroke="url(#waveBlue)"
            strokeWidth="3.5"
          />

          <path
            d="
              M 690 190
              C 900 120, 1040 390, 1240 330
              C 1450 270, 1520 80, 1730 45
              C 1880 20, 1980 80, 2048 125
            "
            fill="none"
            stroke="#0cb0f2"
            strokeOpacity="0.55"
            strokeWidth="2.5"
          />

          <path
            d="
              M 780 220
              C 950 160, 1060 410, 1260 350
              C 1450 295, 1540 115, 1730 80
              C 1880 55, 1990 110, 2048 155
            "
            fill="none"
            stroke="#00a8ff"
            strokeOpacity="0.45"
            strokeWidth="2"
          />

          {/* LARGE MIDDLE WAVE */}
          <path
            d="
              M 900 270
              C 1110 350, 1240 570, 1470 530
              C 1690 490, 1870 570, 2048 690
            "
            fill="none"
            stroke="#0cb0f2"
            strokeOpacity="0.4"
            strokeWidth="4"
          />

          <path
            d="
              M 850 300
              C 1090 390, 1250 610, 1480 570
              C 1710 530, 1880 610, 2048 720
            "
            fill="none"
            stroke="#0196e3"
            strokeOpacity="0.35"
            strokeWidth="2.5"
          />

          {/* LOWER FLOWING WAVES */}
          <path
            d="
              M 970 390
              C 1200 500, 1360 620, 1580 570
              C 1800 520, 1920 600, 2048 700
            "
            fill="none"
            stroke="#0cb0f2"
            strokeOpacity="0.35"
            strokeWidth="4"
          />

          <path
            d="
              M 920 420
              C 1180 540, 1360 680, 1590 610
              C 1800 545, 1930 630, 2048 730
            "
            fill="none"
            stroke="#00a8ff"
            strokeOpacity="0.3"
            strokeWidth="2.5"
          />

          {/* FINE PARALLEL LINES */}
          {Array.from({ length: 18 }).map((_, i) => (
            <path
              key={i}
              d={`
                M ${1150 + i * 12} ${20 + i * 3}
                C ${1370 + i * 5} ${-50 + i * 4},
                  ${1480 + i * 7} ${100 + i * 2},
                  ${1650 + i * 4} ${55 + i * 2}
                C ${1820 + i * 2} ${10 + i * 4},
                  ${1960 + i} ${60 + i * 5},
                  2048 ${110 + i * 7}
              `}
              fill="none"
              stroke="#0196e3"
              strokeOpacity={Math.max(0.12, 0.45 - i * 0.018)}
              strokeWidth="1.8"
            />
          ))}
        </svg>

        {/* ── DOT PATTERN OVERLAY ── */}
        <div
          className="absolute top-[50px] right-[60px] w-[380px] h-[360px] opacity-60 pointer-events-none"
          style={{
            backgroundImage: `
              radial-gradient(
                circle,
                #0cb0f2 1.6px,
                transparent 1.6px
              )
            `,
            backgroundSize: "18px 18px",
            maskImage: `
              radial-gradient(
                ellipse at center,
                black 0%,
                rgba(0,0,0,0.8) 50%,
                transparent 80%
              )
            `,
            WebkitMaskImage: `
              radial-gradient(
                ellipse at center,
                black 0%,
                rgba(0,0,0,0.8) 50%,
                transparent 80%
              )
            `,
          }}
        />
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
          <div className="flex items-center gap-2.5 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0 scrollbar-none">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-full text-[14px] font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${isActive
                    ? "bg-[#183c7d] text-white shadow-md shadow-blue-950/20 scale-[1.02]"
                    : "bg-[#e8f3fc]/80 text-[#183c7d] border border-[#c2e2f5] hover:bg-[#dbeffd] hover:border-[#93cbe9]"
                    }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Action Button: View All Results */}
          <button
            type="button"
            className="shrink-0 rounded-[10px] border border-[#183c7d] bg-transparent px-6 py-2.5 text-[14px] font-medium leading-5 text-[#183c7d] transition-all duration-200 hover:bg-[#183c7d] hover:text-white active:scale-[0.98]"
          >
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
