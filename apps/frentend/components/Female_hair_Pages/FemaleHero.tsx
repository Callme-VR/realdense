"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { User, ChevronDown, CheckCircle2 } from "lucide-react";

export interface FemaleHeroProps {
  eyebrow?: string;
  titleLine1?: string;
  titleLine2?: string;
  description?: string;
  patientCount?: string;
  ratingScore?: string;
  onSubmitCallback?: (data: {
    fullName: string;
    phone: string;
    countryCode: string;
  }) => void;
}

interface CountryOption {
  code: string;
  name: string;
  dialCode: string;
  flag: string;
}

const countryList: CountryOption[] = [
  { code: "IN", name: "India", dialCode: "+91", flag: "🇮🇳" },
  { code: "US", name: "United States", dialCode: "+1", flag: "🇺🇸" },
  { code: "GB", name: "United Kingdom", dialCode: "+44", flag: "🇬🇧" },
  { code: "AE", name: "UAE", dialCode: "+971", flag: "🇦🇪" },
  { code: "AU", name: "Australia", dialCode: "+61", flag: "🇦🇺" },
  { code: "CA", name: "Canada", dialCode: "+1", flag: "🇨🇦" },
];

export default function FemaleHero({
  eyebrow = "FEMALE HAIR TRANSPLANT",
  titleLine1 = "Female Hair Transplant",
  titleLine2 = "Fuller Hair, Natural–Looking Results",
  description = "A personalised hair restoration approach designed to improve hair density, restore thinning areas, and achieve natural-looking results tailored to each woman’s needs.",
  patientCount = "2,000+",
  ratingScore = "4.9/5",
  onSubmitCallback,
}: FemaleHeroProps) {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedCountry, setSelectedCountry] = useState<CountryOption>(
    countryList[0]
  );
  const [countryDropdownOpen, setCountryDropdownOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close country dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setCountryDropdownOpen(false);
      }
    }
    if (countryDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [countryDropdownOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phone.trim()) return;

    setIsSubmitting(true);
    if (onSubmitCallback) {
      onSubmitCallback({
        fullName: fullName.trim(),
        phone: phone.trim(),
        countryCode: selectedCountry.dialCode,
      });
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFullName("");
        setPhone("");
      }, 4000);
    }, 600);
  };

  return (
    <section className="relative isolate w-full bg-[#dff2fe] min-h-[640px] sm:min-h-[720px] lg:min-h-[780px] xl:min-h-[840px] flex flex-col justify-between overflow-hidden pt-28 sm:pt-32 lg:pt-36 pb-10 sm:pb-14 lg:pb-16">
      {/* ── Background Image Layer ── */}
      <div className="absolute inset-0 -z-10 w-full h-full select-none pointer-events-none overflow-hidden">
        <Image
          src="/Fut_page_images/fut-hero-background.webp"
          alt="Hair Transplant Background"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 1920px"
          className="object-cover object-center"
          quality={100}
        />
      </div>

      {/* ── Main Hero Content (Centered) ── */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center my-auto">
        {/* Eyebrow / Kicker */}
        <p className="mb-2 sm:mb-3 font-['Plus_Jakarta_Sans'] text-[11px] sm:text-[13px] md:text-[14px] font-bold uppercase tracking-[0.22em] text-[#00A3FF]">
          {eyebrow}
        </p>

        {/* Headline */}
        <h1 className="font-['Plus_Jakarta_Sans'] tracking-[-0.03em] leading-[1.15] text-center max-w-[1100px] mx-auto px-2">
          <span className="text-[#001e56] font-extrabold text-[28px] sm:text-[42px] md:text-[52px] lg:text-[60px] xl:text-[64px] block">
            {titleLine1}
          </span>
          <span className="text-[#00A3FF] font-extrabold text-[20px] sm:text-[30px] md:text-[38px] lg:text-[45px] xl:text-[49px] block mt-1 sm:mt-2 sm:whitespace-nowrap">
            {titleLine2}
          </span>
        </h1>

        {/* Subtitle / Description */}
        <p className="mt-3 sm:mt-4 mb-6 sm:mb-8 max-w-[660px] mx-auto font-['Plus_Jakarta_Sans'] text-[14px] sm:text-[16px] md:text-[17px] font-medium leading-[1.6] text-[#1b3a6b] px-2">
          {description}
        </p>

        {/* Social Proof Pill (Avatars, count, stars, rating) */}
        <div className="flex items-center justify-center flex-wrap gap-x-3.5 sm:gap-x-4 gap-y-2 mb-8 sm:mb-10 lg:mb-12">
          {/* 3 Overlapping Patient Avatars */}
          <div className="flex items-center -space-x-2.5 sm:-space-x-3">
            <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden border-2 border-white shadow-sm ring-1 ring-black/5">
              <Image
                src="/images/reviews/amit-sharma.webp"
                alt="Patient review"
                fill
                className="object-cover"
                sizes="36px"
              />
            </div>
            <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden border-2 border-white shadow-sm ring-1 ring-black/5 z-10">
              <Image
                src="/images/reviews/patient-1.webp"
                alt="Patient review"
                fill
                className="object-cover"
                sizes="36px"
              />
            </div>
            <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden border-2 border-white shadow-sm ring-1 ring-black/5 z-20">
              <Image
                src="/images/reviews/rohan-mehta.webp"
                alt="Patient review"
                fill
                className="object-cover"
                sizes="36px"
              />
            </div>
          </div>

          {/* Happy Patients Count */}
          <p className="font-['Plus_Jakarta_Sans'] text-[13.5px] sm:text-[14.5px] text-[#475569]">
            <strong className="font-bold text-[#001e56]">{patientCount}</strong>{" "}
            happy patients
          </p>

          {/* Divider */}
          <span
            className="hidden sm:inline-block w-[1px] h-4 bg-[#cbd5e1] mx-0.5"
            aria-hidden="true"
          />

          {/* Star Rating */}
          <div className="flex items-center gap-1.5">
            <div className="flex items-center gap-0.5 text-[#f59e0b]">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-4 h-4 fill-current text-[#f59e0b]"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="font-['Plus_Jakarta_Sans'] text-[13.5px] sm:text-[14.5px] text-[#475569]">
              <strong className="font-bold text-[#001e56]">{ratingScore}</strong>{" "}
              rating
            </p>
          </div>
        </div>
      </div>

      {/* ── Bottom Floating "Request a Callback" Form Bar ── */}
      <div className="relative z-20 w-full max-w-[1040px] mx-auto px-4 sm:px-6 lg:px-8 mt-4 sm:mt-6">
        <div className="relative rounded-[20px] sm:rounded-[24px] bg-[#1a3b83] shadow-[0_16px_40px_rgba(15,35,95,0.22)] border border-white/10 p-3.5 sm:p-4 md:p-5 lg:px-7 lg:py-4">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col lg:flex-row items-center gap-3 sm:gap-4 lg:gap-4.5 w-full"
          >
            {/* "Request a Callback" with underline */}
            <div className="shrink-0 text-center lg:text-left w-full lg:w-auto mb-1 lg:mb-0">
              <div className="inline-block">
                <span className="font-['Plus_Jakarta_Sans'] text-white font-semibold text-[15px] sm:text-[16px] tracking-[-0.01em]">
                  Request a Callback
                </span>
                <div className="w-11 h-[2px] bg-white/95 rounded-full mt-1" />
              </div>
            </div>

            {/* Input 1: Full Name */}
            <div className="relative w-full lg:flex-1 lg:max-w-[280px]">
              <div className="flex items-center w-full h-[46px] sm:h-[48px] rounded-xl bg-white/[0.08] hover:bg-white/[0.12] focus-within:bg-white/[0.14] border border-white/20 focus-within:border-white/50 px-3.5 transition-all duration-200">
                <User className="w-[18px] h-[18px] text-white/70 shrink-0 mr-2.5" />
                <input
                  type="text"
                  placeholder="Full name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full bg-transparent font-['Plus_Jakarta_Sans'] text-white placeholder-white/60 text-[13.5px] sm:text-[14px] focus:outline-none"
                  required
                />
              </div>
            </div>

            {/* Input 2: Country Flag/Code Dropdown + Phone Number */}
            <div className="relative w-full lg:flex-1 lg:max-w-[340px]">
              <div className="flex items-center w-full h-[46px] sm:h-[48px] rounded-xl bg-white/[0.08] hover:bg-white/[0.12] focus-within:bg-white/[0.14] border border-white/20 focus-within:border-white/50 px-3 transition-all duration-200">
                {/* Country selector button */}
                <div className="relative" ref={dropdownRef}>
                  <button
                    type="button"
                    onClick={() => setCountryDropdownOpen(!countryDropdownOpen)}
                    className="flex items-center gap-1.5 pr-2.5 text-white text-[13px] sm:text-[13.5px] font-medium border-r border-white/25 hover:opacity-90 focus:outline-none cursor-pointer"
                    aria-label="Select Country Code"
                  >
                    <span className="text-base leading-none select-none">
                      {selectedCountry.flag}
                    </span>
                    <span className="font-['Plus_Jakarta_Sans'] font-semibold">
                      {selectedCountry.dialCode}
                    </span>
                    <ChevronDown className="w-3.5 h-3.5 text-white/70 shrink-0" />
                  </button>

                  {/* Dropdown Menu */}
                  {countryDropdownOpen && (
                    <div className="absolute left-0 bottom-full mb-2 w-52 rounded-xl bg-[#0e2456] border border-white/15 shadow-2xl py-1.5 z-50 overflow-hidden">
                      {countryList.map((c) => (
                        <button
                          key={c.code}
                          type="button"
                          onClick={() => {
                            setSelectedCountry(c);
                            setCountryDropdownOpen(false);
                          }}
                          className={`w-full flex items-center justify-between px-3.5 py-2 text-left text-xs font-['Plus_Jakarta_Sans'] transition-colors ${
                            selectedCountry.code === c.code
                              ? "bg-[#00A3FF] text-white font-semibold"
                              : "text-white/90 hover:bg-white/10"
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <span>{c.flag}</span>
                            <span>{c.name}</span>
                          </div>
                          <span className="text-white/60 text-[11px]">
                            {c.dialCode}
                          </span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Phone Input */}
                <input
                  type="tel"
                  placeholder="Enter number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-transparent font-['Plus_Jakarta_Sans'] text-white placeholder-white/60 text-[13.5px] sm:text-[14px] pl-2.5 focus:outline-none"
                  required
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="w-full lg:w-auto shrink-0">
              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className="w-full lg:w-auto min-w-[140px] h-[46px] sm:h-[48px] px-7 rounded-xl bg-white hover:bg-white/90 active:scale-[0.98] text-[#1a3b83] font-['Plus_Jakarta_Sans'] font-bold text-[14px] sm:text-[14.5px] shadow-[0_4px_14px_rgba(0,0,0,0.12)] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-80"
              >
                {isSubmitting ? (
                  <span className="inline-block w-4 h-4 border-2 border-[#1a3b83] border-t-transparent rounded-full animate-spin" />
                ) : isSubmitted ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Sent!</span>
                  </>
                ) : (
                  <span>Submit</span>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
