"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { User, ChevronDown, CheckCircle2 } from "lucide-react";

export interface CustomHairHeroProps {
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

export default function CustomHairHero({
  eyebrow = "CUSTOM HAIRLINE TRANSPLANT",
  titleLine1 = "Custom Hairline Transplant",
  titleLine2 = "Designed Hairline , Natural–Looking Results",
  description = "Restore your hairline with a personalised transplant designed to complement your facial features and achieve natural-looking density.",
  patientCount = "2,000+",
  ratingScore = "4.9/5",
  onSubmitCallback,
}: CustomHairHeroProps) {
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
          alt="Custom Hairline Transplant Background"
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

      {/* ── Bottom Floating Callback Bar (Rectangular with Underline Accent) ── */}
      <div className="relative z-20 w-full max-w-[1020px] mx-auto px-4 sm:px-6">
        <div className="rounded-[20px] sm:rounded-[24px] bg-[#0c235c] p-4 sm:p-5 lg:p-6 shadow-[0_18px_45px_rgba(0,30,86,0.28)] border border-white/10 backdrop-blur-xs">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3 sm:gap-4"
          >
            {/* Left title: Request a Callback with cyan underline */}
            <div className="flex flex-col justify-center px-1 sm:px-2 shrink-0">
              <span className="font-['Plus_Jakarta_Sans'] text-white text-[15px] sm:text-[16px] font-bold tracking-tight">
                Request a Callback
              </span>
              <span className="h-[2px] w-12 bg-[#00A3FF] rounded-full mt-1" />
            </div>

            {/* Inputs & Submit container */}
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 items-center">
              {/* Full Name Input */}
              <div className="relative lg:col-span-5">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-white/50">
                  <User className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  required
                  placeholder="Full name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full h-11 pl-10 pr-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 font-['Plus_Jakarta_Sans'] text-[13.5px] focus:outline-none focus:border-[#00A3FF] focus:bg-white/15 transition-all"
                />
              </div>

              {/* Phone Input with Country Code Dropdown */}
              <div className="relative lg:col-span-5 flex items-center h-11 rounded-xl bg-white/10 border border-white/20 focus-within:border-[#00A3FF] focus-within:bg-white/15 transition-all" ref={dropdownRef}>
                {/* Country Selector Button */}
                <button
                  type="button"
                  onClick={() => setCountryDropdownOpen(!countryDropdownOpen)}
                  className="h-full flex items-center gap-1.5 pl-3 pr-2 text-white font-['Plus_Jakarta_Sans'] text-[13px] hover:text-white/80 transition-colors shrink-0"
                  aria-label="Select Country Code"
                >
                  <span className="text-[14px]">{selectedCountry.flag}</span>
                  <span className="font-semibold text-white/90">
                    {selectedCountry.dialCode}
                  </span>
                  <ChevronDown className="w-3.5 h-3.5 text-white/60" />
                </button>

                {/* Vertical separator */}
                <span className="h-5 w-[1px] bg-white/20 mr-2" />

                {/* Number input */}
                <input
                  type="tel"
                  required
                  placeholder="Enter number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/[^0-9]/g, ""))}
                  className="w-full h-full pr-3 bg-transparent text-white placeholder-white/60 font-['Plus_Jakarta_Sans'] text-[13.5px] focus:outline-none"
                />

                {/* Country dropdown menu */}
                {countryDropdownOpen && (
                  <div className="absolute top-[calc(100%+6px)] left-0 z-50 w-56 max-h-60 overflow-y-auto rounded-xl bg-[#001e56] border border-white/15 shadow-2xl py-1 backdrop-blur-md">
                    {countryList.map((country) => (
                      <button
                        key={country.code}
                        type="button"
                        onClick={() => {
                          setSelectedCountry(country);
                          setCountryDropdownOpen(false);
                        }}
                        className={`w-full flex items-center justify-between px-3 py-2 text-left font-['Plus_Jakarta_Sans'] text-[13px] hover:bg-white/10 transition-colors ${
                          selectedCountry.code === country.code
                            ? "bg-white/15 text-[#00A3FF] font-semibold"
                            : "text-white"
                        }`}
                      >
                        <span className="flex items-center gap-2 truncate">
                          <span>{country.flag}</span>
                          <span className="truncate">{country.name}</span>
                        </span>
                        <span className="text-white/70 font-mono text-[12px] ml-2 shrink-0">
                          {country.dialCode}
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <div className="sm:col-span-2 lg:col-span-2">
                <button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className="w-full h-11 rounded-xl bg-white text-[#001e56] font-['Plus_Jakarta_Sans'] text-[14px] font-bold hover:bg-[#e6f4fe] active:scale-[0.98] transition-all flex items-center justify-center shadow-sm disabled:opacity-75 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="inline-block w-4 h-4 border-2 border-[#001e56] border-t-transparent rounded-full animate-spin" />
                  ) : isSubmitted ? (
                    <span className="flex items-center gap-1.5 text-green-700">
                      <CheckCircle2 className="w-4 h-4" />
                      Sent
                    </span>
                  ) : (
                    "Submit"
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

