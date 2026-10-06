"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { motion } from "motion/react";

/* ── Pricing Card Data Interface ── */
interface PricingCard {
  id: number;
  title: string;
  shortDesc: string;
  category: string;
  popular?: boolean;
  price: string;
  features: string[];
}

const categories = [
  "Hair Transplant",
  "Beard Transplant",
  "Eyebrow Transplant",
  "Crown Restoration",
  "Corrective Transplant",
  "Hairline Restoration",
  "Hair Restoration",
];

const pricingCards: PricingCard[] = [
  {
    id: 1,
    title: "Hairline Restoration",
    shortDesc:
      "Designed to recreate a natural, dense, and age-appropriate hairline contour.",
    category: "Hairline Restoration",
    price: "₹80,000",
    features: [
      "Natural hairline design",
      "Face-framing symmetry",
      "Boosts confidence",
    ],
  },
  {
    id: 2,
    title: "FUE Hair Transplant",
    shortDesc:
      "Individual follicular units extracted and implanted for a natural look.",
    category: "Hair Transplant",
    price: "₹90,000",
    features: [
      "Natural-looking results",
      "Minimal downtime",
      "Ideal for most hair types",
    ],
  },
  {
    id: 3,
    title: "DHI Hair Transplant",
    shortDesc:
      "Direct hair implantation for higher density and precision.",
    category: "Hair Transplant",
    popular: true,
    price: "₹1,20,000",
    features: [
      "Maximum density",
      "No pre-made incisions",
      "Faster recovery",
    ],
  },
  {
    id: 4,
    title: "Sapphire FUE",
    shortDesc:
      "Advanced technique using sapphire blades for finer incisions.",
    category: "Hair Transplant",
    price: "₹1,10,000",
    features: [
      "More precise graft placement",
      "Less trauma to scalp",
      "Quicker healing",
    ],
  },
  {
    id: 5,
    title: "Crown Restoration",
    shortDesc:
      "Specialized swirl-pattern transplantation for vertex and crown hair loss.",
    category: "Crown Restoration",
    price: "₹95,000",
    features: [
      "Natural crown swirl design",
      "High graft survival",
      "Full head coverage",
    ],
  },
  {
    id: 6,
    title: "Beard Transplant",
    shortDesc:
      "Facial hair follicle transplantation to sculpt a full, patch-free beard.",
    category: "Beard Transplant",
    price: "₹85,000",
    features: [
      "Natural beard growth",
      "Custom facial contour",
      "Permanent results",
    ],
  },
  {
    id: 7,
    title: "Eyebrow Transplant",
    shortDesc:
      "Precision micro-grafting to restore full, naturally shaped eyebrows.",
    category: "Eyebrow Transplant",
    price: "₹65,000",
    features: [
      "Ultra-fine precision",
      "Custom eyebrow arch",
      "Natural hair angle",
    ],
  },
  {
    id: 8,
    title: "Corrective Transplant",
    shortDesc:
      "Expert revision procedure to correct previous unsatisfactory hair transplants.",
    category: "Corrective Transplant",
    price: "₹1,30,000",
    features: [
      "Fixes unnatural hairlines",
      "Scar concealment",
      "Expert revision technique",
    ],
  },
  {
    id: 9,
    title: "Hair Restoration",
    shortDesc:
      "Comprehensive non-surgical & surgical therapy to arrest hair loss and restore density.",
    category: "Hair Restoration",
    price: "₹75,000",
    features: [
      "Stimulates dormant follicles",
      "Restores natural hair volume",
      "Long-lasting hair vitality",
    ],
  },
];

export default function TransparentPricing() {
  const [activeCategory, setActiveCategory] = useState("Hair Transplant");
  const carouselRef = useRef<HTMLDivElement>(null);

  const filteredCards = pricingCards.filter(
    (card) => card.category === activeCategory
  ).length > 0
    ? pricingCards.filter((card) => card.category === activeCategory)
    : pricingCards;

  const handleCategorySelect = (cat: string) => {
    setActiveCategory(cat);
    if (carouselRef.current) {
      carouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  };

  return (
    <section
      id="pricing"
      className="relative w-full bg-[#fcfdff] py-16 sm:py-20 lg:py-24 overflow-hidden"
    >
      {/* Background Soft Glow Overlay */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#dcf1fd]/50 blur-3xl rounded-full opacity-70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* ── Top Section: Full Width Header ── */}
        <div className="max-w-3xl mb-10 sm:mb-12">
          {/* Eyebrow Tag */}
          <p className="text-[13px] font-extrabold uppercase tracking-[0.2em] text-[#0cb0f2] mb-3">
            INVESTMENT
          </p>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold leading-[1.15] tracking-tight mb-4">
            <span className="text-[#001e56] block sm:inline">Transparent Pricing </span>
            <br />
            <span className="text-[#0cb0f2] block sm:inline">for Real Transformations</span>
          </h2>

          {/* Subtitle */}
          <p className="text-[15px] sm:text-[16px] font-normal leading-relaxed text-[#64748B]">
            Personalised treatment plans with clear pricing, no hidden costs <br className="hidden sm:inline" /> and world-class techniques
          </p>
        </div>

        {/* ── Pill Filter Tabs Row ── */}
        <div className="mb-10">
          <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none max-w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategorySelect(cat)}
                className={`px-6 py-2.5 rounded-full text-[14px] font-semibold transition-all duration-200 whitespace-nowrap cursor-pointer ${activeCategory === cat
                  ? "bg-[#001e56] text-white shadow-md border border-[#001e56]"
                  : "bg-white text-[#001e56] border border-[#e2e8f0] hover:bg-slate-50 hover:border-[#cbd5e1]"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* ── Horizontal Scrolling Pricing Cards Carousel ── */}
        <div className="relative w-full">
          <div
            ref={carouselRef}
            className="flex gap-7 overflow-x-auto scroll-smooth snap-x snap-mandatory py-4 px-1 scrollbar-none"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {filteredCards.map((card) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className={`group relative bg-white rounded-[28px] p-7 sm:p-8 flex flex-col justify-between min-w-[300px] sm:min-w-[340px] max-w-[360px] snap-start shrink-0 transition-all duration-300 ${card.popular
                  ? "border-2 border-[#0cb0f2] shadow-[0_8px_30px_rgba(12,176,242,0.25)] scale-[1.02] z-10"
                  : "border border-slate-100 shadow-sm hover:border-slate-300 hover:shadow-md hover:-translate-y-1"
                  }`}
              >
                {/* Card Main Info */}
                <div>
                  {/* Title & Inline Most Popular Badge */}
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <h3 className="text-[21px] font-bold text-[#001e56] leading-snug">
                      {card.title}
                    </h3>
                    {card.popular && (
                      <span className="shrink-0 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#0cb0f2] to-[#38bdf8] text-[10px] font-extrabold uppercase tracking-wider text-white shadow-sm">
                        MOST POPULAR
                      </span>
                    )}
                  </div>

                  {/* Short Description */}
                  <p className="text-[13.5px] font-normal text-[#64748B] leading-relaxed mb-6 min-h-[48px]">
                    {card.shortDesc}
                  </p>

                  {/* Features Checklist with Soft Blue Checkmark Circles */}
                  <div className="flex flex-col gap-3.5 mb-8">
                    {card.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-[#dcf1fd] text-[#0cb0f2] flex items-center justify-center shrink-0">
                          <svg
                            className="w-3 h-3"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={3}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <span className="text-[13.5px] font-semibold text-[#001e56]">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Section: Starting From, Price & CTA Arrow Button */}
                <div className="pt-5 border-t border-slate-100 flex items-end justify-between">
                  <div>
                    <p className="text-[12px] font-medium text-slate-400 mb-0.5">
                      Starting From
                    </p>
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl sm:text-3xl font-extrabold text-[#001e56]">
                        {card.price}
                      </span>
                      <span className="text-[12.5px] font-normal text-slate-400">
                        /session
                      </span>
                    </div>
                  </div>

                  <Link
                    href="/book-consultation"
                    className="w-11 h-11 rounded-full bg-[#0cb0f2] text-white flex items-center justify-center text-lg shadow-sm hover:bg-[#0096e3] group-hover:scale-105 transition-all duration-200 shrink-0"
                    aria-label={`Book ${card.title}`}
                  >
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                      />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Bottom Banner Card: "Get an Accurate Price for Your Hair Goals." ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-14 sm:mt-16 relative w-full rounded-[28px] bg-[#002766] p-7 sm:p-9 text-white shadow-xl overflow-hidden"
        >
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-8">
            {/* Left Title */}
            <div className="lg:max-w-xs shrink-0 lg:pr-6 lg:border-r border-white/20">
              <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#0cb0f2] mb-1.5 block">
                PERSONALISED FOR YOU
              </span>
              <h3 className="text-2xl sm:text-[26px] font-extrabold leading-tight">
                Get an Accurate Price <br />
                <span className="text-[#0cb0f2]">for Your Hair Goals.</span>
              </h3>
            </div>

            {/* Middle 3 Columns */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 flex-1">
              <div>
                <h4 className="text-[15px] font-bold text-white mb-1">Free Consultation</h4>
                <p className="text-[12.5px] text-white/70 leading-snug">
                  Discuss your goals with our specialists.
                </p>
              </div>
              <div>
                <h4 className="text-[15px] font-bold text-white mb-1">Customised Plan</h4>
                <p className="text-[12.5px] text-white/70 leading-snug">
                  Get a treatment plan tailored to your needs.
                </p>
              </div>
              <div>
                <h4 className="text-[15px] font-bold text-white mb-1">Clear Pricing</h4>
                <p className="text-[12.5px] text-white/70 leading-snug">
                  Know the exact cost with no hidden fees.
                </p>
              </div>
            </div>

            {/* Right CTA Button */}
            <div className="shrink-0 flex items-center">
              <Link
                href="/book-consultation"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white text-[#001e56] font-bold text-[14px] shadow-md hover:bg-sky-50 transition-all duration-200 active:scale-[0.98] whitespace-nowrap group"
              >
                <span>Get a Personalised Quote</span>
                <svg
                  className="w-4 h-4 text-[#001e56] group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
