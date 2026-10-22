
"use client";

import React from "react";
import Image from "next/image";

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
    image: "/images/why-india/flight.webp",
    alt: "Travel friendly destination with airplane illustration",
  },
  {
    id: "cost-effective",
    title: "Cost–Effective Treatment",
    description:
      "Get world-class hair transplant procedures at a fraction of the cost compared to many Western countries.",
    image: "/images/why-india/affordable-costs.webp",
    alt: "Cost effective treatment with Indian Rupee coins illustration",
  },
  {
    id: "experienced-surgeons",
    title: "Highly Experienced Surgeons",
    description:
      "Treatment is performed by skilled and experienced surgeons using globally approved techniques.",
    image: "/images/why-india/verified-shield.webp",
    alt: "Highly experienced surgeons with medical shield illustration",
  },
];

const bottomFeatures: IndiaFeature[] = [
  {
    id: "combine-travel",
    title: "Combine Treatment with Travel",
    description:
      "Experience India’s rich culture, heritage, and hospitality while transforming your look.",
    image: "/images/why-india/taj-mahal.webp",
    alt: "Combine treatment with travel Taj Mahal illustration",
  },
  {
    id: "modern-clinics",
    title: "Modern Clinics & Technology",
    description:
      "State-of-the-art facilities equipped with the latest technology ensure safe, precise, and natural-looking results.",
    image: "/images/why-india/accredited-hospital.webp",
    alt: "Modern clinics and technology hospital illustration",
  },
];

export default function WhyChooseIndia(): React.JSX.Element {
  return (
    <section
      id="why-choose-india"
      className="relative w-full overflow-hidden bg-gradient-to-b from-white via-[#f8fafc] to-white py-12 max-sm:py-8 sm:py-16 lg:py-20"
    >
      {/* Background Soft Glow */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-1/2 top-1/3 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#dcf1fd]/40 opacity-60 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 max-sm:px-3 sm:px-8 lg:px-12">
        {/* Section Header — No Motion Animation */}
        <div className="mx-auto mb-16 max-sm:mb-8 flex max-w-3xl flex-col items-center text-center sm:mb-20">
          {/* Eyebrow Label */}
          <div className="mb-3.5 max-sm:mb-2 max-sm:gap-0 inline-flex items-center gap-3">
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#64748B] sm:text-[12px]">
              WHY CHOOSE INDIA
            </span>

            <div className="h-[2px] w-9 rounded-full bg-[#94a3b8] max-sm:hidden" />
          </div>

          {/* Main Headline */}
          <h2 className="text-3xl max-sm:text-[20px] max-sm:leading-tight font-extrabold leading-[1.15] tracking-tight sm:text-4xl lg:text-[48px]">
            <span className="text-[#001e56]">
              World–Class Hair Transplant{" "}
            </span>

            <span className="text-[#ffbb1f]">
              in India
            </span>
          </h2>

          {/* Description */}
          <p className="mt-4 max-sm:mt-2 text-[15px] max-sm:text-[11px] max-sm:max-w-[340px] max-sm:leading-relaxed font-medium leading-relaxed text-[#64748B] sm:text-[16.5px]">
            Advanced technology, experienced surgeons, and affordable treatment
            make India a trusted destination for hair restoration.
          </p>
        </div>

        {/* Feature Cards Container — 2-col on mobile, 3-col + 2-col on desktop */}
        <div className="mx-auto max-w-6xl max-md:grid max-md:grid-cols-2 max-md:gap-x-3 max-md:gap-y-8">
          {/* Top Row: 3 Feature Items */}
          <div className="mx-auto mb-12 grid max-w-6xl grid-cols-1 items-start gap-10 md:grid-cols-3 lg:mb-16 lg:gap-12 max-md:contents">
            {topFeatures.map((feature) => (
              <div
                key={feature.id}
                className="group flex cursor-pointer flex-col items-center px-4 max-sm:px-1.5 text-center"
              >
                {/* Illustration */}
                <div className="relative mb-6 max-sm:mb-2 flex h-44 w-44 max-sm:h-24 max-sm:w-24 items-center justify-center transition-transform duration-300 group-hover:scale-105 sm:h-52 sm:w-52">
                  <Image
                    src={feature.image}
                    alt={feature.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 220px"
                    className="object-contain object-center drop-shadow-sm"
                  />
                </div>

                {/* Title */}
                <h3 className="mb-2.5 max-sm:mb-1.5 text-[18px] max-sm:text-[13px] max-sm:leading-tight font-bold leading-snug tracking-tight text-[#001e56] transition-colors group-hover:text-[#0cb0f2] sm:text-[19px]">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="max-w-[290px] max-sm:max-w-[160px] text-[13.5px] max-sm:text-[10px] max-sm:leading-[1.35] font-normal leading-relaxed text-[#64748B] sm:text-[14px]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Row: 2 Centered Feature Items */}
          <div className="mx-auto grid max-w-4xl grid-cols-1 items-start gap-10 md:grid-cols-2 lg:gap-12 max-md:contents">
            {bottomFeatures.map((feature) => (
              <div
                key={feature.id}
                className={`group flex cursor-pointer flex-col items-center px-4 max-sm:px-1.5 text-center ${
                  feature.id === "modern-clinics"
                    ? "max-md:col-span-2 max-md:mx-auto max-md:max-w-[220px]"
                    : ""
                }`}
              >
                {/* Illustration */}
                <div className="relative mb-6 max-sm:mb-2 flex h-44 w-44 max-sm:h-24 max-sm:w-24 items-center justify-center transition-transform duration-300 group-hover:scale-105 sm:h-52 sm:w-52">
                  <Image
                    src={feature.image}
                    alt={feature.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 220px"
                    className="object-contain object-center drop-shadow-sm"
                  />
                </div>

                {/* Title */}
                <h3 className="mb-2.5 max-sm:mb-1.5 text-[18px] max-sm:text-[13px] max-sm:leading-tight font-bold leading-snug tracking-tight text-[#001e56] transition-colors group-hover:text-[#0cb0f2] sm:text-[19px]">
                  {feature.title}
                </h3>

                {/* Description */}
                <p
                  className={`max-w-[290px] ${
                    feature.id === "modern-clinics"
                      ? "max-sm:max-w-[190px]"
                      : "max-sm:max-w-[160px]"
                  } text-[13.5px] max-sm:text-[10px] max-sm:leading-[1.35] font-normal leading-relaxed text-[#64748B] sm:text-[14px]`}
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}