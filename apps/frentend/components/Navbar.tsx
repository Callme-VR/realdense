"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

// ─── Figma Design Tokens (file: sr2znFAWlrfvsYNHtSYjYz) ──────────────────────
// Font: Plus Jakarta Sans | Nav: SemiBold 600 ~19-21px | Link color: #001e56
// Cyan accent: #0cb0f2 / #0196e3 | Tint bg: #e9f4fd | Gold: #ffbb1f

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Results", href: "/results" },
  {
    label: "Services",
    href: "/services",
    hasDropdown: true,
    dropdown: [
      { label: "FUE Hair Transplant", href: "/services/fue" },
      { label: "DHI Hair Transplant", href: "/services/dhi" },
      { label: "Sapphire FUE", href: "/services/sapphire-fue" },
      { label: "Hairline Restoration", href: "/services/hairline" },
      { label: "Beard Transplant", href: "/services/beard" },
      { label: "Eyebrow Transplant", href: "/services/eyebrow" },
    ],
  },
  { label: "Treatment cost", href: "/treatment-cost" },
  { label: "Our doctors", href: "/our-doctors" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Scroll-aware shadow (Figma: Header sticky variant)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close drawer on desktop resize
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) {
        setMobileOpen(false);
        setMobileServicesOpen(false);
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const onDropdownEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };
  const onDropdownLeave = () => {
    closeTimer.current = setTimeout(() => setServicesOpen(false), 120);
  };

  return (
    <header
      className={`w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-white/90 backdrop-blur-md shadow-[0_4px_24px_rgba(0,30,86,0.08)]"
        : "bg-transparent"
        }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 flex items-center justify-between h-[76px]">

        {/* ── Logo ── */}
        <Link href="/" className="flex items-center shrink-0 group" aria-label="Realdense Home">
          <Image
            src="/assets/logo.png"
            alt="Realdense Hair Restoration Clinic"
            width={148}
            height={52}
            className="object-contain w-auto transition-transform duration-200 group-hover:scale-[1.02]"
            style={{ height: "auto", maxHeight: "52px" }}
            priority
          />
        </Link>

        {/* ── Desktop Nav ── */}
        {/* Figma: Plus Jakarta Sans SemiBold 600 ~19px, color #001e56 */}
        <nav className="hidden md:flex items-center gap-0.5" aria-label="Main navigation">
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={onDropdownEnter}
                onMouseLeave={onDropdownLeave}
              >
                <button
                  className="flex items-center gap-[5px] px-3.5 py-2 text-[15px] font-semibold text-[#001e56] hover:text-[#0cb0f2] transition-colors duration-200 rounded-lg hover:bg-[#e9f4fd]/60"
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                >
                  {link.label}
                  {/* Figma Vector 1 — chevron */}
                  <svg
                    className={`w-[14px] h-[14px] opacity-70 transition-transform duration-200 ${servicesOpen ? "rotate-180 text-[#0cb0f2]" : "text-[#001e56]"}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Dropdown panel */}
                <div
                  className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-white rounded-2xl shadow-[0_8px_40px_rgba(0,30,86,0.13)] border border-[#e9f4fd] py-2 transition-all duration-200 origin-top ${servicesOpen
                    ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 scale-95 -translate-y-1 pointer-events-none"
                    }`}
                  onMouseEnter={onDropdownEnter}
                  onMouseLeave={onDropdownLeave}
                  role="menu"
                >
                  {/* Caret */}
                  <div className="absolute -top-[6px] left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-l border-t border-[#e9f4fd] rotate-45" />

                  {link.dropdown!.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      role="menuitem"
                      className="flex items-center gap-2.5 px-4 py-2.5 text-[13.5px] font-semibold text-[#001e56] hover:bg-[#e9f4fd] hover:text-[#0cb0f2] transition-colors duration-150 group/item"
                      onClick={() => setServicesOpen(false)}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0cb0f2] opacity-0 group-hover/item:opacity-100 transition-opacity shrink-0" />
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              /* Regular link — Figma: color #001e56, hover #0cb0f2 */
              <Link
                key={link.label}
                href={link.href}
                className="relative px-3.5 py-2 text-[15px] font-semibold text-[#001e56] hover:text-[#0cb0f2] transition-colors duration-200 rounded-lg hover:bg-[#e9f4fd]/60 group"
              >
                {link.label}
                {/* Figma active underline state */}
                <span className="absolute bottom-1 left-3.5 right-3.5 h-[2px] bg-[#0cb0f2] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>
            )
          )}
        </nav>


        {/* ── Mobile Hamburger ── */}
        <button
          className="md:hidden relative flex flex-col justify-center items-center w-10 h-10 rounded-xl hover:bg-[#e9f4fd] transition-colors duration-200"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <span
            className={`absolute block w-5 h-[2px] rounded-full bg-[#001e56] transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-0" : "-translate-y-[5px]"
              }`}
          />
          <span
            className={`block w-5 h-[2px] rounded-full bg-[#001e56] transition-all duration-300 ${mobileOpen ? "opacity-0 scale-x-0" : "opacity-100 scale-x-100"
              }`}
          />
          <span
            className={`absolute block w-5 h-[2px] rounded-full bg-[#001e56] transition-all duration-300 ${mobileOpen ? "-rotate-45 translate-y-0" : "translate-y-[5px]"
              }`}
          />
        </button>
      </div>

      {/* ── Mobile Drawer ── */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
          }`}
        aria-hidden={!mobileOpen}
      >
        <nav
          className="border-t border-[#e9f4fd] bg-white px-6 pt-4 pb-6 flex flex-col gap-1"
          aria-label="Mobile navigation"
        >
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <div key={link.label}>
                <button
                  className="w-full flex items-center justify-between px-3 py-3 text-[15px] font-semibold text-[#001e56] hover:text-[#0cb0f2] hover:bg-[#e9f4fd]/70 rounded-xl transition-colors duration-150"
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  aria-expanded={mobileServicesOpen}
                >
                  {link.label}
                  <svg
                    className={`w-4 h-4 opacity-60 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-250 ease-in-out ${mobileServicesOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                >
                  <div className="ml-4 mt-1 flex flex-col gap-0.5 border-l-2 border-[#0cb0f2]/20 pl-4">
                    {link.dropdown!.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="py-2.5 text-[14px] font-semibold text-[#001e56]/80 hover:text-[#0cb0f2] transition-colors duration-150"
                        onClick={() => {
                          setMobileOpen(false);
                          setMobileServicesOpen(false);
                        }}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="px-3 py-3 text-[15px] font-semibold text-[#001e56] hover:text-[#0cb0f2] hover:bg-[#e9f4fd]/70 rounded-xl transition-colors duration-150"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            )
          )}

          {/* Mobile CTA */}
          <div className="mt-3 pt-4 border-t border-[#e9f4fd]">
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full text-[15px] font-semibold text-white bg-gradient-to-r from-[#0cb0f2] to-[#0196e3] shadow-[0_4px_16px_rgba(12,176,242,0.30)] transition-all duration-200 active:scale-[0.98]"
              onClick={() => setMobileOpen(false)}
            >
              Book a Consultation
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
