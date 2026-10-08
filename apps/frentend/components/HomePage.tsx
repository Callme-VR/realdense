"use client";

import Image from "next/image";
import Link from "next/link";
import BookConsultationButton from "./BookConsultationButton";
import { useState } from "react";

/* ── Avatar stack ── */
const AvatarStack = () => (
  <div className="flex items-center -space-x-2">
    {["/patients/patient-1.jpg", "/patients/patient-2.jpg", "/patients/patient-3.jpg"].map((src, i) => (
      <Image
        key={i}
        src={src}
        alt={`Patient ${i + 1}`}
        width={34}
        height={34}
        className="w-8 h-8 rounded-full border-2 border-white object-cover shadow-sm"
      />
    ))}
  </div>
);

/* ── Stars ── */
const Stars = ({ rating }: { rating: number }) => (
  <div className="flex items-center gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 ${i < Math.floor(rating) ? "text-yellow-400" : "text-yellow-200"}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

/* ── Position helper & Before/After Card Components ── */
const pos = (l: number, t: number, w: number, h: number): React.CSSProperties => ({
  position: "absolute",
  left: `${(l / 595) * 100}%`,
  top: `${(t / 564) * 100}%`,
  width: `${(w / 595) * 100}%`,
  height: `${(h / 564) * 100}%`,
});

function Pill({ label, dark, style }: { label: string; dark?: boolean; style: React.CSSProperties }) {
  return (
    <span
      style={style}
      className={`z-20 flex items-center justify-center rounded-full text-[clamp(8px,1.9cqw,13px)] font-extrabold tracking-wide text-white shadow-md ${dark ? "bg-[#001e56]" : "bg-[#0cb0f2]"
        }`}
    >
      {label}
    </span>
  );
}

function Photo({ src, alt }: { src?: string; alt: string }) {
  return src ? (
    <img src={src} alt={alt} loading="eager" className="h-full w-full object-cover transition-transform duration-500 ease-out hover:scale-105" />
  ) : (
    <div className="h-full w-full bg-gradient-to-b from-slate-300 to-slate-400" aria-label={alt} />
  );
}

function Card({
  style,
  radius,
  before,
  after,
  hoverDirection = "vertical",
}: {
  style: React.CSSProperties;
  radius: string;
  before: React.ReactNode;
  after: React.ReactNode;
  hoverDirection?: "vertical" | "horizontal";
}) {
  return (
    <div
      style={style}
      className="z-10 flex overflow-visible transition-all duration-300 group cursor-pointer"
    >
      <div className="relative w-full h-full flex gap-1 items-center">
        {/* BEFORE image panel */}
        <div
          style={{ borderRadius: radius }}
          className={`h-full w-1/2 overflow-hidden border-2 border-sky-200/80 bg-white shadow-[0_8px_24px_rgba(14,140,220,0.25)] transition-transform duration-500 ease-out ${hoverDirection === "vertical"
            ? "group-hover:-translate-y-3.5"
            : "group-hover:-translate-x-3.5"
            }`}
        >
          {before}
        </div>

        {/* Small gap separator */}
        <div className="h-full w-[2px] bg-transparent shrink-0" />

        {/* AFTER image panel */}
        <div
          style={{ borderRadius: radius }}
          className={`h-full w-1/2 overflow-hidden border-2 border-sky-200/80 bg-white shadow-[0_8px_24px_rgba(14,140,220,0.25)] transition-transform duration-500 ease-out ${hoverDirection === "vertical"
            ? "group-hover:translate-y-3.5"
            : "group-hover:translate-x-3.5"
            }`}
        >
          {after}
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <section className="relative min-h-[calc(100vh-76px)] flex items-center bg-transparent">
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-10 py-14 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* ── LEFT CONTENT ── */}
        <div className="flex flex-col items-start gap-5 max-w-[540px] lg:-translate-y-8">
          {/* Eyebrow — image: 'BECAUSE LOOK MATTERS.' cyan, all caps, tracked */}
          <p
            className="text-[14px] font-semibold tracking-[0.25em] uppercase"
            style={{ color: "#0cb0f2" }}
          >
            Because Look Matters.
          </p>

          {/* Headline */}
          <h1 className="font-extrabold leading-[1.08] text-[50px] lg:text-[60px]">
            <span style={{ color: "#001e56" }}>A Fuller Hairline</span>
            <br />
            <span
              style={{
                background: "linear-gradient(90deg, #0cb0f2 0%, #0196e3 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              A Stronger You
            </span>
          </h1>

          {/* Sub-headline — image: navy/dark blue, underlined */}
          <p
            className="text-[15.5px] font-medium leading-relaxed max-w-[420px] "
            style={{ color: "#001e56" }}
          >
            Advanced hair restoration designed around you, with <br />
            natural-looking
            results that feel completely your own.
          </p>

          {/* CTAs — image: dark navy filled rounded button + subtle bordered button */}
          <div className="flex flex-wrap items-center gap-4 mt-1">
            {/* Primary: dark navy filled, rounded-lg, with arrow → */}
            <BookConsultationButton />

            <Link
              href="/services"
              className="inline-flex items-center rounded-lg border border-[#c8d6e5] bg-white px-7 py-3.5 text-[15px] font-semibold text-[#0B2545] transition-all duration-200 hover:border-[#0196E3] hover:bg-[#0196E3] hover:text-white active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0196E3] focus-visible:ring-offset-2"
            >
              Explore Treatments
            </Link>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center gap-4 mt-2">
            <div className="flex items-center gap-3">
              <AvatarStack />
              <p className="text-[13.5px] text-gray-600 font-medium">
                <span className="font-extrabold text-[#001e56]">2,000+</span>{" "}
                happy patients
              </p>
            </div>
            <div className="w-px h-7 bg-gray-200" />
            <div className="flex items-center gap-2">
              <Stars rating={4.9} />
              <p className="text-[13.5px] text-gray-600 font-medium">
                <span className="font-extrabold text-[#001e56]">4.9/5</span>{" "}
                rating
              </p>
            </div>
          </div>
        </div>

        {/* ── RIGHT: Before/After Cards ── */}
        <div className="relative w-full max-w-[595px] mx-auto lg:ml-auto lg:-translate-y-8" style={{ aspectRatio: "595 / 564", containerType: "inline-size" }}>
          {/* top card */}
          <Pill label="BEFORE" style={pos(83, 13, 80, 22)} />
          <Pill label="AFTER" dark style={pos(243, 13, 80, 22)} />
          <Card
            hoverDirection="vertical"
            style={pos(45, 28, 315, 240)}
            radius="9%"
            before={<Photo src="/assets/BEFORE.png" alt="Before, top view" />}
            after={<Photo src="/assets/AFTER.png" alt="After, top view" />}
          />

          {/* side card */}
          <Pill label="BEFORE" style={pos(157, 330, 78, 22)} />
          <Card
            hoverDirection="horizontal"
            style={pos(220, 313, 280, 212)}
            radius="7%"
            before={<Photo src="/assets/BEFORE1.png" alt="Before, side view" />}
            after={<Photo src="/assets/AFTER1.png" alt="After, side view" />}
          />
          <Pill label="AFTER" dark style={pos(470, 486, 78, 20)} />
        </div>
      </div>
    </section>
  );
}
