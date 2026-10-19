"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  User,
  Mail,
  MapPin,
  Calendar,
  Lock,
  Heart,
  ShieldCheck,
  Award,
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
    iconBg: "bg-[#00a3ff]",
    icon: <Heart className="w-5 h-5 text-white" strokeWidth={2.2} />,
  },
  {
    id: "patients",
    line1: "2,000+ Happy",
    line2: "Patients",
    iconBg: "bg-[#0077e6]",
    icon: <ShieldCheck className="w-5 h-5 text-white" strokeWidth={2.2} />,
  },
  {
    id: "response",
    line1: "Quick",
    line2: "Response",
    iconBg: "bg-[#00a3ff]",
    icon: <User className="w-5 h-5 text-white" strokeWidth={2.2} />,
  },
  {
    id: "rating",
    line1: "4.9/5 Patient",
    line2: "Rating",
    iconBg: "bg-[#0077e6]",
    icon: <Award className="w-5 h-5 text-white" strokeWidth={2.2} />,
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
    <section className="relative isolate w-full overflow-hidden bg-[#eef6fe] py-14 sm:py-18 lg:py-22">
      {/* ── Background Wave & 3D Follicle Layer (services-form-banner.webp) ── */}
      <div className="absolute inset-0 z-0 w-full h-full select-none pointer-events-none overflow-hidden">
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

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-8">
          {/* ── Left Column: Value Proposition & Trust Badges ── */}
          <div className="w-full lg:max-w-[460px] xl:max-w-[500px] shrink-0 flex flex-col justify-center">
            {/* Eyebrow */}
            <p className="font-['Plus_Jakarta_Sans'] text-[12px] sm:text-[13px] lg:text-[13.5px] font-bold uppercase tracking-[0.24em] text-[#0cb0f2] mb-2 sm:mb-3">
              GET IN TOUCH
            </p>

            {/* Headline */}
            <h2 className="font-['Plus_Jakarta_Sans'] text-[28px] xs:text-[32px] sm:text-[40px] lg:text-[48px] font-extrabold tracking-[-0.03em] leading-[1.12] text-[#001e56]">
              <span>Take the First Step</span>
              <br />
              <span className="text-[#0cb0f2]">Towards Stronger Hair</span>
            </h2>

            {/* Description */}
            <p className="mt-3.5 sm:mt-4 mb-7 sm:mb-9 max-w-[460px] font-['Plus_Jakarta_Sans'] text-[14px] sm:text-[15.5px] font-medium leading-[1.6] text-[#1e3a6a]">
              Consult with our RealDense hair restoration experts and get a personalized treatment plan designed for natural, long-lasting results.
            </p>

            {/* 4 Trust Badges Grid (Responsive 1-col on tiny screens, 2-col on normal) */}
            <div className="grid grid-cols-1 xs:grid-cols-2 gap-y-4 sm:gap-y-6 gap-x-4 sm:gap-x-8 max-w-[440px]">
              {trustBadges.map((badge) => (
                <div key={badge.id} className="flex items-center gap-3">
                  <div
                    className={`w-11 h-11 rounded-full ${badge.iconBg} flex items-center justify-center shrink-0 shadow-[0_4px_12px_rgba(0,163,255,0.22)]`}
                  >
                    {badge.icon}
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-['Plus_Jakarta_Sans'] text-[13.5px] sm:text-[14.5px] font-bold text-[#001e56] leading-snug">
                      {badge.line1}
                    </span>
                    <span className="font-['Plus_Jakarta_Sans'] text-[13.5px] sm:text-[14.5px] font-bold text-[#001e56] leading-snug">
                      {badge.line2}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Center Space: Reserved for the 3D Follicle & Glowing Bubbles to shine through ── */}
          <div className="hidden lg:block flex-1 min-w-[60px]" aria-hidden="true" />

          {/* ── Right Column: White Floating Consultation Card (Compact) ── */}
          <div className="w-full lg:max-w-[375px] xl:max-w-[390px] shrink-0 flex justify-center lg:justify-end">
            <div className="w-full bg-white/95 backdrop-blur-xs rounded-[22px] sm:rounded-[26px] p-4.5 sm:p-5.5 lg:p-6 shadow-[0_16px_40px_rgba(0,30,86,0.11)] border border-[#e2eaf4]">
              {/* Card Header */}
              <div className="text-center mb-3.5 sm:mb-4">
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
                <form onSubmit={handleSubmit} className="flex flex-col gap-2.5">
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
                    className="w-full min-h-[44px] mt-1 py-2.5 sm:py-3 rounded-xl font-semibold text-[13.5px] sm:text-[14px] text-white bg-[#002b80] hover:bg-[#002066] active:scale-[0.99] transition-all duration-200 shadow-[0_5px_15px_rgba(0,43,128,0.22)] flex items-center justify-center cursor-pointer"
                  >
                    {loading ? (
                      <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      "Schedule a Consultation"
                    )}
                  </button>

                  {/* Privacy / Confidential Notice */}
                  <div className="flex items-center justify-center gap-1.5 mt-1 text-[#64748B]">
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
