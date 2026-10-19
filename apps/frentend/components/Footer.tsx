"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import BookConsultationButton from "./BookConsultationButton";
import MeshBackground from "./meshnetworkdot";
import { motion } from "motion/react";

interface FooterProps {
  hideCta?: boolean;
}

export default function Footer({ hideCta = false }: FooterProps) {
  return (
    <footer className="w-full bg-white relative overflow-hidden">
      {/* ── Upper CTA Section: "Start Your Hair Restoration Journey Today" ── */}
      {!hideCta && (
        <section className="relative w-full min-h-[480px] sm:min-h-[520px] lg:min-h-[560px] overflow-hidden bg-white flex items-center">
        {/* Full-Bleed Panorama Background Banner */}
        <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0">
          <Image
            src="/images/clinic/footer.webp"
            alt="Realdense Hair Restoration Centre Building Banner"
            fill
            priority
            className="object-cover object-right lg:object-center"
            sizes="100vw"
          />
          {/* Subtle mobile fade so text is 100% readable over background on smaller screens */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent lg:hidden" />
        </div>

        {/* Content Container (Left-aligned) */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="max-w-xl"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] xl:text-[50px] font-extrabold tracking-tight leading-[1.12]">
              <span className="text-[#001e56] block">
                Start Your Hair Restoration
              </span>
              <span className="text-[#00a8ff] block mt-1">
                Journey Today
              </span>
            </h2>

            <p className="mt-4 sm:mt-5 text-[15px] sm:text-[16px] text-slate-500 font-normal leading-relaxed max-w-lg">
              Book a consultancy with our experts and get a personalized
              treatment plan for natural results.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 mt-8 sm:mt-10">
              {/* Primary Button */}
              <BookConsultationButton />

              {/* WhatsApp Button */}
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-xl bg-white hover:bg-sky-50 text-[#001e56] border border-[#38bdf8] font-bold text-[14.5px] transition-all duration-200 shadow-xs hover:shadow-md active:scale-[0.98]"
              >
                <svg
                  className="w-5 h-5 text-[#001e56]"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M20.52 3.48A11.87 11.87 0 0 0 12.04 0C5.47 0 .12 5.35.12 11.92c0 2.1.55 4.15 1.6 5.96L.02 24l6.27-1.65a11.9 11.9 0 0 0 5.74 1.46h.01c6.57 0 11.92-5.35 11.92-11.92a11.85 11.85 0 0 0-3.44-8.41ZM12.04 21.8a9.9 9.9 0 0 1-5.05-1.39l-.36-.21-3.72.98.99-3.63-.24-.37a9.85 9.85 0 0 1-1.52-5.26c0-5.47 4.45-9.92 9.92-9.92a9.85 9.85 0 0 1 7.02 2.91 9.85 9.85 0 0 1 2.9 7.01c0 5.47-4.45 9.92-9.94 9.92Zm5.45-7.43c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.09 4.49.71.3 1.27.49 1.7.62.72.23 1.37.2 1.88.12.58-.09 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z"
                    fill="currentColor"
                  />
                </svg>
                <span>Chat on Whatsapp</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
      )}

      {/* ── Main Deep Navy Footer with Animated Mesh Network Background ── */}
      <MeshBackground
        top={0}
        left={0}
        className="!relative !w-full !top-0 !left-0 !h-auto text-white overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-12">
          {/* Main Columns Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12">
            {/* Column 1: Brand Info & Socials */}
            <div className="lg:col-span-4 flex flex-col justify-between">
              <div>
                {/* Logo */}
                <Link href="/" className="inline-block">
                  <div className="relative h-14 w-44 brightness-0 invert opacity-95 hover:opacity-100 transition-opacity">
                    <Image
                      src="/images/brand/logo.png"
                      alt="Realdense Hair Transplant Clinic"
                      fill
                      className="object-contain object-left"
                      sizes="(max-width: 768px) 150px, 176px"
                    />
                  </div>
                </Link>

                <p className="mt-4 text-[13.5px] sm:text-[14px] leading-relaxed text-slate-300 font-normal max-w-sm">
                  Book a consultancy with our experts and get a personalized
                  treatment plan for natural results.
                </p>
              </div>

              {/* Social Media Icons */}
              <div className="flex items-center gap-2.5 mt-6 sm:mt-8">
                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#00a8ff] text-white flex items-center justify-center transition-all duration-200"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>

                {/* Facebook */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#00a8ff] text-white flex items-center justify-center transition-all duration-200"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.7 5H18V0h-3.808C10.597 0 9 1.582 9 4.615V8z" />
                  </svg>
                </a>

                {/* YouTube */}
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#00a8ff] text-white flex items-center justify-center transition-all duration-200"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#00a8ff] text-white flex items-center justify-center transition-all duration-200"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Column 2: Our Services */}
            <div className="lg:col-span-3">
              <h3 className="text-white font-bold text-[16px] mb-4">
                Our Services
              </h3>
              <ul className="space-y-2.5">
                {[
                  { name: "FUE Hair Transplant", href: "/services" },
                  { name: "DHI Hair Transplant", href: "/services" },
                  { name: "Sapphire FUE", href: "/services" },
                  { name: "Hairline Restoration", href: "/services" },
                  { name: "Crown Restoration", href: "/services" },
                  { name: "Beard Transplant", href: "/services" },
                  { name: "Eyebrow Transplant", href: "/services" },
                ].map((link, idx) => (
                  <li key={idx}>
                    <Link
                      href={link.href}
                      className="text-slate-300 hover:text-[#00a8ff] text-[13.5px] transition-colors duration-200 block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: About */}
            <div className="lg:col-span-2">
              <h3 className="text-white font-bold text-[16px] mb-4">
                About
              </h3>
              <ul className="space-y-2.5">
                {[
                  { name: "Home", href: "/" },
                  { name: "About Us", href: "/about" },
                  { name: "Our Doctors", href: "/our-doctors" },
                  { name: "Results", href: "/results" },
                  { name: "Treatment Cost", href: "/treatment-cost" },
                  { name: "FAQS", href: "/faq" },
                ].map((link, idx) => (
                  <li key={idx}>
                    <Link
                      href={link.href}
                      className="text-slate-300 hover:text-[#00a8ff] text-[13.5px] transition-colors duration-200 block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact Us */}
            <div className="lg:col-span-3">
              <h3 className="text-white font-bold text-[16px] mb-4">
                Contact Us
              </h3>
              <div className="space-y-4">
                {/* Phone */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5 text-[#38bdf8]">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <a
                      href="tel:+919876543210"
                      className="text-white font-semibold text-[14px] hover:text-[#00a8ff] transition-colors block"
                    >
                      +91 98765 43210
                    </a>
                    <span className="text-[12px] text-slate-400 block mt-0.5">
                      Mon – Sat, 9:00 AM – 7:00 PM
                    </span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5 text-[#38bdf8]">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <a
                      href="mailto:info@realdenseclinic.com"
                      className="text-white font-semibold text-[14px] hover:text-[#00a8ff] transition-colors block"
                    >
                      info@realdenseclinic.com
                    </a>
                    <span className="text-[12px] text-slate-400 block mt-0.5">
                      We&apos;ll respond within 24 hours
                    </span>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5 text-[#38bdf8]">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[13px] text-slate-300 leading-snug">
                      123 Wellness Street, Bandra West, Mumbai - 400050, India
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Sub-Footer Legal / Copyright Bar ── */}
          <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12.5px] text-slate-400">
            {/* Legal Links */}
            <div className="flex items-center gap-6">
              <Link
                href="/privacy-policy"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-white transition-colors"
              >
                Terms & Conditions
              </Link>
              <Link
                href="/refund-policy"
                className="hover:text-white transition-colors"
              >
                Refund Policy
              </Link>
            </div>

            {/* Copyright */}
            <p className="text-slate-400 text-center sm:text-right">
              &copy; {new Date().getFullYear()} Realdense Hair Restoration
              Centre. All Rights Reserved.
            </p>
          </div>
        </div>
      </MeshBackground>
    </footer>
  );
}
