"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  User,
  Mail,
  MapPin,
  Calendar,
  Lock,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";

interface BadgeItem {
  id: string;
  line1: string;
  line2: string;
  iconBg: string;
  icon: React.ReactNode;
}

const trustBadges: BadgeItem[] = [
  {
    id: "guidance",
    line1: "Expert",
    line2: "Guidance",
    iconBg: "bg-[#0095ff]",
    icon: (
      <svg
        className="w-6 h-6 text-white max-sm:w-3.5 max-sm:h-3.5 xs:max-sm:w-4 xs:max-sm:h-4"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    id: "patients",
    line1: "2,000+ Happy",
    line2: "Patients",
    iconBg: "bg-[#0095ff]",
    icon: (
      <svg
        className="w-6 h-6 text-white max-sm:w-3.5 max-sm:h-3.5 xs:max-sm:w-4 xs:max-sm:h-4"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <circle cx="12" cy="10.5" r="2.2" />
        <path d="M12 12.7v3.2" />
      </svg>
    ),
  },
  {
    id: "response",
    line1: "Quick",
    line2: "Response",
    iconBg: "bg-[#0095ff]",
    icon: (
      <svg
        className="w-6 h-6 text-white max-sm:w-3.5 max-sm:h-3.5 xs:max-sm:w-4 xs:max-sm:h-4"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="7" r="4" />
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      </svg>
    ),
  },
  {
    id: "rating",
    line1: "4.9/5 Patient",
    line2: "Rating",
    iconBg: "bg-[#0095ff]",
    icon: (
      <svg
        className="w-6 h-6 text-white max-sm:w-3.5 max-sm:h-3.5 xs:max-sm:w-4 xs:max-sm:h-4"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <circle cx="12" cy="10.5" r="2.2" />
        <path d="M12 12.7v3.2" />
      </svg>
    ),
  },
];

export default function GetInTouch() {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [date, setDate] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <section className="relative isolate w-full overflow-hidden bg-[#eef6fe] py-14 sm:py-18 lg:py-22 max-sm:bg-white max-sm:py-8">
      {/* ── Background Wave & 3D Follicle Layer (services-form-banner.webp) ── */}
      <div className="absolute inset-0 z-0 w-full h-full select-none pointer-events-none overflow-hidden max-sm:hidden">
        <Image
          src="/service_page_images/services-form-banner.webp"
          alt="Consultation Background Pattern"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[55%_center] sm:object-[54%_center] lg:object-[53%_center]"
          quality={100}
        />
        {/* Soft mobile ambient wash for 4.5:1 text contrast compliance on small screens */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white/40 md:hidden pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 max-sm:px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-8 max-sm:gap-0">
          {/* ── Left Column: Value Proposition & Trust Badges ── */}
          <div className="w-full lg:max-w-[460px] xl:max-w-[500px] shrink-0 flex flex-col justify-center max-sm:items-center max-sm:text-center">
            {/* Eyebrow */}
            <p className="font-['Plus_Jakarta_Sans'] text-[12px] sm:text-[13px] lg:text-[13.5px] font-bold uppercase tracking-[0.24em] text-[#0cb0f2] mb-2 sm:mb-3 max-sm:text-[11px] max-sm:tracking-[0.22em] max-sm:mb-2">
              GET IN TOUCH
            </p>

            {/* Headline */}
            <h2 className="font-['Plus_Jakarta_Sans'] text-[28px] xs:text-[32px] sm:text-[40px] lg:text-[48px] font-extrabold tracking-[-0.03em] leading-[1.12] text-[#001e56] max-sm:text-[23px] xs:max-sm:text-[26px] max-sm:leading-[1.2]">
              <span>Take the First Step </span>
              <br className="hidden sm:inline" />
              <span className="text-[#0cb0f2]">Towards Stronger Hair</span>
            </h2>

            {/* Description */}
            <p className="mt-3.5 sm:mt-4 mb-7 sm:mb-9 max-w-[460px] font-['Plus_Jakarta_Sans'] text-[14px] sm:text-[15.5px] font-medium leading-[1.6] text-[#1e3a6a] max-sm:mt-2.5 max-sm:mb-6 max-sm:text-[12.5px] max-sm:leading-relaxed max-sm:max-w-[380px] max-sm:mx-auto">
              Consult with our RealDense hair restoration experts and get a personalized treatment plan designed for natural, long-lasting results.
            </p>

            {/* 4 Trust Badges Grid (4 columns in a row on mobile, 2x2 on desktop/tablet) */}
            <div className="grid grid-cols-2 max-sm:grid-cols-4 gap-y-6 sm:gap-y-8 gap-x-6 sm:gap-x-10 max-w-[500px] max-sm:max-w-full max-sm:w-full max-sm:gap-x-1 xs:max-sm:gap-x-2 max-sm:mb-6">
              {trustBadges.map((badge) => (
                <div key={badge.id} className="flex items-center gap-3.5 sm:gap-4 max-sm:gap-1.5 max-sm:justify-center">
                  <div
                    className={`w-[48px] h-[48px] sm:w-[52px] sm:h-[52px] max-sm:w-[28px] max-sm:h-[28px] xs:max-sm:w-[32px] xs:max-sm:h-[32px] rounded-full ${badge.iconBg} flex items-center justify-center shrink-0 shadow-[0_4px_14px_rgba(0,149,255,0.25)] max-sm:shadow-none`}
                  >
                    {badge.icon}
                  </div>
                  <div className="flex flex-col min-w-0 text-left">
                    <span className="font-['Plus_Jakarta_Sans'] text-[15px] sm:text-[16px] font-bold text-[#001e56] leading-[1.22] whitespace-nowrap max-sm:text-[8.5px] xs:max-sm:text-[9.5px] max-sm:leading-tight">
                      {badge.line1}
                    </span>
                    <span className="font-['Plus_Jakarta_Sans'] text-[15px] sm:text-[16px] font-bold text-[#001e56] leading-[1.22] whitespace-nowrap max-sm:text-[8.5px] xs:max-sm:text-[9.5px] max-sm:leading-tight">
                      {badge.line2}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Center Space: Reserved for the 3D Follicle & Glowing Bubbles to shine through ── */}
          <div className="hidden lg:block flex-1 min-w-[60px]" aria-hidden="true" />

          {/* ── Right Column: Consultation Form ── */}
          <div className="w-full lg:max-w-[375px] xl:max-w-[390px] shrink-0 flex justify-center lg:justify-end max-sm:max-w-full">
            <div className="w-full bg-white/95 backdrop-blur-xs rounded-[22px] sm:rounded-[26px] p-4.5 sm:p-5.5 lg:p-6 shadow-[0_16px_40px_rgba(0,30,86,0.11)] border border-[#e2eaf4] max-sm:bg-transparent max-sm:backdrop-blur-none max-sm:rounded-none max-sm:p-0 max-sm:shadow-none max-sm:border-0">
              {/* Card Header (Hidden on mobile as main section header serves as form header) */}
              <div className="text-center mb-3.5 sm:mb-4 max-sm:hidden">
                <h3 className="font-['Plus_Jakarta_Sans'] text-[18px] sm:text-[19.5px] font-bold tracking-tight text-[#001e56]">
                  <span>Book a </span>
                  <span className="text-[#0cb0f2]">Free Consultation</span>
                </h3>
                <p className="mt-0.5 text-[11.5px] sm:text-[12px] font-normal text-[#64748B]">
                  Fill in your details and our team will get in touch with you soon.
                </p>
              </div>

              {submitted ? (
                <div className="py-6 text-center flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-2.5">
                    <CheckCircle2 className="w-6.5 h-6.5" />
                  </div>
                  <h4 className="font-['Plus_Jakarta_Sans'] text-[16.5px] font-bold text-[#001e56] mb-1">
                    Consultation Requested!
                  </h4>
                  <p className="text-[12.5px] text-[#64748B] max-w-xs mb-4">
                    Thank you, <span className="font-semibold text-[#001e56]">{fullName || "there"}</span>. One of our specialist doctors will contact you shortly on {phone || "your phone"}.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFullName("");
                      setPhone("");
                      setEmail("");
                      setCity("");
                      setDate("");
                    }}
                    className="text-xs font-semibold text-[#00a8ff] hover:underline cursor-pointer"
                  >
                    Submit another response
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-2.5 max-sm:gap-3">
                  {/* Full Name */}
                  <div className="relative flex items-center">
                    <div className="absolute left-3.5 pointer-events-none text-[#94A3B8]">
                      <User className="w-3.5 h-3.5" />
                    </div>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Full name"
                      className="w-full min-h-[42px] sm:min-h-[44px] pl-9.5 pr-3.5 py-2 sm:py-2.5 text-[13px] sm:text-[13.5px] rounded-full border border-[#D5E0EB] bg-white text-[#001e56] placeholder-[#94A3B8] focus:outline-none focus:border-[#00a8ff] focus:ring-1.5 focus:ring-[#00a8ff]/15 transition-all"
                    />
                  </div>

                  {/* Phone Number with Country Code */}
                  <div className="relative flex items-center min-h-[42px] sm:min-h-[44px] rounded-full border border-[#D5E0EB] bg-white focus-within:border-[#00a8ff] focus-within:ring-1.5 focus-within:ring-[#00a8ff]/15 transition-all overflow-hidden">
                    <div className="flex items-center gap-1 pl-3 pr-2 py-2 sm:py-2.5 border-r border-[#E2E8F0] shrink-0 bg-slate-50/50">
                      <span className="text-[13px]" role="img" aria-label="India flag">
                        🇮🇳
                      </span>
                      <span className="text-[12px] font-medium text-[#001e56]">
                        {countryCode}
                      </span>
                      <ChevronDown className="w-3 h-3 text-[#94A3B8]" />
                    </div>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Enter phone number*"
                      className="w-full px-3 py-2 sm:py-2.5 text-[13px] sm:text-[13.5px] bg-transparent text-[#001e56] placeholder-[#94A3B8] focus:outline-none"
                    />
                  </div>

                  {/* Email */}
                  <div className="relative flex items-center">
                    <div className="absolute left-3.5 pointer-events-none text-[#94A3B8]">
                      <Mail className="w-3.5 h-3.5" />
                    </div>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full min-h-[42px] sm:min-h-[44px] pl-9.5 pr-3.5 py-2 sm:py-2.5 text-[13px] sm:text-[13.5px] rounded-full border border-[#D5E0EB] bg-white text-[#001e56] placeholder-[#94A3B8] focus:outline-none focus:border-[#00a8ff] focus:ring-1.5 focus:ring-[#00a8ff]/15 transition-all"
                    />
                  </div>

                  {/* Location / City */}
                  <div className="relative flex items-center">
                    <div className="absolute left-3.5 pointer-events-none text-[#94A3B8]">
                      <MapPin className="w-3.5 h-3.5" />
                    </div>
                    <input
                      type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="Enter your city / location"
                      className="w-full min-h-[42px] sm:min-h-[44px] pl-9.5 pr-3.5 py-2 sm:py-2.5 text-[13px] sm:text-[13.5px] rounded-full border border-[#D5E0EB] bg-white text-[#001e56] placeholder-[#94A3B8] focus:outline-none focus:border-[#00a8ff] focus:ring-1.5 focus:ring-[#00a8ff]/15 transition-all"
                    />
                  </div>

                  {/* Preferred consultation date (Optional) */}
                  <div className="relative flex items-center">
                    <div className="absolute left-3.5 pointer-events-none text-[#94A3B8]">
                      <Calendar className="w-3.5 h-3.5" />
                    </div>
                    <input
                      type="text"
                      onFocus={(e) => (e.target.type = "date")}
                      onBlur={(e) => {
                        if (!e.target.value) e.target.type = "text";
                      }}
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      placeholder="Preferred consultation date (Optional)"
                      className="w-full min-h-[42px] sm:min-h-[44px] pl-9.5 pr-3.5 py-2 sm:py-2.5 text-[13px] sm:text-[13.5px] rounded-full border border-[#D5E0EB] bg-white text-[#001e56] placeholder-[#94A3B8] focus:outline-none focus:border-[#00a8ff] focus:ring-1.5 focus:ring-[#00a8ff]/15 transition-all"
                    />
                  </div>

                  {/* Submit CTA */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full min-h-[44px] sm:min-h-[44px] max-sm:min-h-[46px] mt-1 py-2.5 sm:py-3 rounded-xl font-semibold text-[13.5px] sm:text-[14px] max-sm:text-[14px] text-white bg-[#002b80] hover:bg-[#002066] active:scale-[0.99] transition-all duration-200 shadow-[0_5px_15px_rgba(0,43,128,0.22)] flex items-center justify-center cursor-pointer"
                  >
                    {loading ? (
                      <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      "Schedule a Consultation"
                    )}
                  </button>

                  {/* Privacy / Confidential Notice */}
                  <div className="flex items-center justify-center gap-1.5 mt-1 sm:mt-1 max-sm:mt-2.5 text-[#64748B]">
                    <Lock className="w-3 h-3 shrink-0" />
                    <p className="text-[10.5px] sm:text-[11px] leading-tight text-center">
                      Your information is 100% confidential and will never be shared with third parties.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
