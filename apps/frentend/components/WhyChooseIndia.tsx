"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

interface IndiaFeature {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}

const topFeatures: IndiaFeature[] = [
  {
    id: "travel-friendly",
    title: "Travel–Friendly Destination",
    description:
      "India is easily accessible with direct flights from major countries and offers a comfortable experience for international patients.",
    image: "/assets/aeroplane.png",
    alt: "Travel friendly destination with airplane illustration",
  },
  {
    id: "cost-effective",
    title: "Cost–Effective Treatment",
    description:
      "Get world-class hair transplant procedures at a fraction of the cost compared to many Western countries.",
    image: "/assets/coins.png",
    alt: "Cost effective treatment with Indian Rupee coins illustration",
  },
  {
    id: "experienced-surgeons",
    title: "Highly Experienced Surgeons",
    description:
      "Treatment is performed by skilled and experienced surgeons using globally approved techniques.",
    image: "/assets/shiled.png",
    alt: "Highly experienced surgeons with medical shield illustration",
  },
];

const bottomFeatures: IndiaFeature[] = [
  {
    id: "combine-travel",
    title: "Combine Treatment with Travel",
    description:
      "Experience India’s rich culture, heritage, and hospitality while transforming your look.",
    image: "/assets/mahal.png",
    alt: "Combine treatment with travel Taj Mahal illustration",
  },
  {
    id: "modern-clinics",
    title: "Modern Clinics & Technology",
    description:
      "State-of-the-art facilities equipped with the latest technology ensure safe, precise, and natural-looking results.",
    image: "/assets/hospital.png",
    alt: "Modern clinics and technology hospital illustration",
  },
];

export default function WhyChooseIndia() {
  return (
    <section
      id="why-choose-india"
      className="relative w-full bg-gradient-to-b from-white via-[#f8fafc] to-white py-20 sm:py-24 lg:py-28 overflow-hidden"
    >
      {/* Background Soft Glow Ambient Overlay */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#dcf1fd]/40 blur-3xl rounded-full opacity-60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto mb-16 sm:mb-20 max-w-3xl flex flex-col items-center text-center"
        >
          {/* Eyebrow Label + Trailing Line */}
          <div className="mb-3.5 inline-flex items-center gap-3">
            <span className="text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.22em] text-[#64748B]">
              WHY CHOOSE INDIA
            </span>
            <div className="h-[2px] w-9 rounded-full bg-[#94a3b8]" />
          </div>

          {/* Main Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-extrabold leading-[1.15] tracking-tight">
            <span className="text-[#001e56]">World–Class Hair Transplant </span>
            <span className="bg-gradient-to-r from-[#f59e0b] to-[#d97706] bg-clip-text text-transparent">
              in India
            </span>
          </h2>

          {/* Subheading Description */}
          <p className="mt-4 max-w-[600px] text-[15px] sm:text-[16.5px] font-medium leading-relaxed text-[#64748B]">
            Advanced technology, experienced surgeons, and affordable treatment
            make India a trusted destination for hair restoration.
          </p>
        </motion.div>

        {/* ── Top Row: 3 Feature Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12 max-w-6xl mx-auto mb-12 lg:mb-16 items-start">
          {topFeatures.map((feature, idx) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
              className="group flex flex-col items-center text-center px-4 cursor-pointer"
            >
              {/* 3D Illustration Graphic Container */}
              <div className="relative w-44 h-44 sm:w-52 sm:h-52 mb-6 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <Image
                  src={feature.image}
                  alt={feature.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 220px"
                  className="object-contain object-center drop-shadow-sm"
                  priority={idx === 0}
                />
              </div>

              {/* Title */}
              <h3 className="text-[18px] sm:text-[19px] font-bold text-[#001e56] leading-snug tracking-tight mb-2.5 max-w-[240px] group-hover:text-[#0cb0f2] transition-colors">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-[13.5px] sm:text-[14px] font-normal text-[#64748B] leading-relaxed max-w-[290px]">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ── Bottom Row: 2 Centered Feature Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12 max-w-4xl mx-auto items-start">
          {bottomFeatures.map((feature, idx) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (idx + 3) * 0.1, ease: "easeOut" }}
              className="group flex flex-col items-center text-center px-4 cursor-pointer"
            >
              {/* 3D Illustration Graphic Container */}
              <div className="relative w-44 h-44 sm:w-52 sm:h-52 mb-6 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <Image
                  src={feature.image}
                  alt={feature.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 220px"
                  className="object-contain object-center drop-shadow-sm"
                />
              </div>

              {/* Title */}
              <h3 className="text-[18px] sm:text-[19px] font-bold text-[#001e56] leading-snug tracking-tight mb-2.5 max-w-[260px] group-hover:text-[#0cb0f2] transition-colors">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-[13.5px] sm:text-[14px] font-normal text-[#64748B] leading-relaxed max-w-[290px]">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
