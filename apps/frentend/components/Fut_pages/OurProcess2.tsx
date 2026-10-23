"use client";

import React from "react";
import Image from "next/image";

/* ── Stat data for the Advantage card ── */
interface StatItem {
  value: string;
  label: string;
}

const defaultStats: StatItem[] = [
  { value: "15,000+", label: "Surgeries Completed" },
  { value: "Advanced", label: "Surgical Techniques" },
  { value: "Expert", label: "Medical Team" },
  { value: "High", label: "Patient Satisfaction" },
];

/* ── Grid photos ── */
interface GridPhoto {
  src: string;
  alt: string;
}

const defaultGridPhotos: GridPhoto[] = [
  {
    src: "/Fut_page_images/process-2.webp",
    alt: "RealDense surgeon examining patient hairline",
  },
  {
    src: "/Fut_page_images/process-3.webp",
    alt: "Doctor consulting patient with hair analysis screen",
  },
  {
    src: "/Fut_page_images/process-4.webp",
    alt: "Surgical team performing FUT hair transplant procedure",
  },
  {
    src: "/Fut_page_images/process-5.webp",
    alt: "Patient consultation with RealDense hair specialist",
  },
];

export interface OurProcess2Props {
  eyebrow?: string;
  titleLine1?: string;
  titleLine2?: string;
  description?: string;
  advantageTitle?: string;
  advantageSubtitle?: string;
  stats?: StatItem[];
  heroPhoto?: {
    src: string;
    alt: string;
    caption: string;
    captionSub: string;
  };
  gridPhotos?: GridPhoto[];
}

export default function OurProcess2({
  eyebrow = "OUR PROCESS",
  titleLine1 = "Why Choose RealDense for",
  titleLine2 = "FUT Hair Transplant",
  description = "With over 15,000+ surgical procedures, RealDense has earned a reputation as one of the best hair transplant clinics in India. With a dedicated in-house surgical team, we provide support at every step of the treatment, from consultation to recovery.",
  advantageTitle = "The RealDense Advantage",
  advantageSubtitle = "Our experience, technology and personalised care ensure a smooth process and natural-looking results.",
  stats = defaultStats,
  heroPhoto = {
    src: "/Fut_page_images/process-1.webp",
    alt: "RealDense Expert Surgical Team",
    caption: "",
    captionSub: "",
  },
  gridPhotos = defaultGridPhotos,
}: OurProcess2Props) {
  return (
    <section className="w-full bg-white py-14 sm:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* ══════════════════════════════════════
            TOP: Two-column header
        ══════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-start mb-10 sm:mb-14">

          {/* Left: Eyebrow + Heading + Description */}
          <div className="max-w-[520px]">
            <span className="font-['Plus_Jakarta_Sans'] text-[11.5px] sm:text-[13px] font-bold uppercase tracking-[0.22em] text-[#00A3FF] mb-2 sm:mb-3 block">
              {eyebrow}
            </span>
            <h2 className="font-['Plus_Jakarta_Sans'] text-[26px] sm:text-[36px] lg:text-[42px] font-extrabold tracking-[-0.03em] leading-[1.16] whitespace-nowrap">
              <span className="text-[#001e56] block whitespace-nowrap">
                {titleLine1}
              </span>
              <span className="text-[#00A3FF] block mt-1">
                {titleLine2}
              </span>
            </h2>
            <p className="mt-4 sm:mt-5 text-[#556987] font-['Plus_Jakarta_Sans'] text-[14px] sm:text-[15px] leading-[1.7] font-normal">
              {description}
            </p>
          </div>

          {/* Right: Advantage info card */}
          <div className="w-full max-w-[500px] lg:max-w-none">
            <div
              className="p-5 sm:p-8 lg:p-10 border border-[#C8E8FE]/80 shadow-[0_10px_35px_rgba(200,232,254,0.35)] transition-all duration-300 rounded-[28px] sm:rounded-[38px] lg:rounded-[54.16px]"
              style={{
                background: "linear-gradient(180deg, #C8E8FE 0%, rgba(255, 255, 255, 0) 100%)",
              }}
            >
              {/* Card heading */}
              <h3 className="font-['Plus_Jakarta_Sans'] text-[18px] sm:text-[21px] font-bold text-[#001e56] tracking-tight mb-2.5">
                {advantageTitle}
              </h3>
              <p className="font-['Plus_Jakarta_Sans'] text-[13.5px] sm:text-[14.5px] text-[#3a6080] leading-[1.65] mb-6 sm:mb-8 max-w-[540px]">
                {advantageSubtitle}
              </p>

              {/* Stats row — 2 cols on mobile, 4 on sm+ with vertical dividers */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-5 gap-x-3 sm:gap-0">
                {stats.map((stat, idx) => (
                  <div key={idx} className="relative flex flex-col items-start">
                    {idx > 0 && (
                      <div
                        className="hidden sm:block absolute left-0 top-1 h-[80%] w-[1px] bg-[#93c9e8]/70"
                        aria-hidden="true"
                      />
                    )}
                    <div className={idx > 0 ? "sm:pl-4 lg:pl-5" : ""}>
                      <span className="font-['Plus_Jakarta_Sans'] text-[15px] sm:text-[16px] lg:text-[17px] font-extrabold text-[#0077cc] block leading-tight">
                        {stat.value}
                      </span>
                      <span className="font-['Plus_Jakarta_Sans'] text-[11px] sm:text-[12px] text-[#3a6080] leading-snug mt-1 block">
                        {stat.label}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════
            BOTTOM: Photo Grid
            Left : 1 tall hero card with caption
            Right: 2 × 2 grid of smaller photos
        ══════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-4 sm:gap-5">

          {/* ── Left: Hero Photo Card (text already baked into image) ── */}
          <div className="relative rounded-[20px] sm:rounded-[24px] overflow-hidden min-h-[260px] sm:min-h-[300px] lg:min-h-[360px] group">
            <Image
              src={heroPhoto.src}
              alt={heroPhoto.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 420px"
              className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
              quality={90}
              priority
            />
          </div>

          {/* ── Right: 2 × 2 photo grid ── */}
          <div className="grid grid-cols-2 gap-4 sm:gap-5">
            {gridPhotos.slice(0, 4).map((photo, idx) => (
              <div
                key={idx}
                className="relative rounded-[16px] sm:rounded-[20px] overflow-hidden aspect-[3/2] group"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 40vw, 260px"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.04]"
                  quality={85}
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
