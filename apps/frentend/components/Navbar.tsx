"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import BookConsultationButton from "./BookConsultationButton";

interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
  dropdown?: { label: string; href: string }[];
}

const navLinks: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Results", href: "/results" },
  {
    label: "Services",
    href: "/services",
    hasDropdown: true,
    dropdown: [
      { label: "All Services Overview", href: "/services" },
      { label: "FUT Hair Transplant", href: "/services/fut" },
      { label: "FUE Hair Transplant", href: "/services/fue" },
      { label: "QHT Hair Transplant", href: "/services/qht" },
      { label: "Ultra dense Transplant", href: "/services/ultradense" },
      { label: "Female Hair Transplant", href: "/services/female" },
      { label: "Hair repair", href: "/services/hairrepair" },
      { label: "No shave", href: "/services/noshave" },

      // { label: "Sapphire FUE", href: "/services/sapphire-fue" },
      // { label: "Hairline Restoration", href: "/services/hairline" },
      // { label: "Beard Transplant", href: "/services/beard" },
      // { label: "Eyebrow Transplant", href: "/services/eyebrow" },
    ],
  },
  { label: "Treatment cost", href: "/treatment-cost" },
  { label: "Our doctors", href: "/our-doctors" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 15);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) {
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
    closeTimer.current = setTimeout(() => setServicesOpen(false), 140);
  };

  const isLinkActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-2.5 sm:py-3.5 ${scrolled
        ? "bg-white/85 backdrop-blur-md shadow-[0_4px_20px_rgba(3,30,80,0.06)]"
        : "bg-transparent"
        }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="shrink-0 flex items-center transition-transform duration-200 hover:scale-[1.02]"
          aria-label="Realdense Home"
        >
          <Image
            src="/images/brand/logo.webp"
            alt="Realdense Hair Restoration Clinic"
            width={160}
            height={46}
            className="w-auto h-[38px] sm:h-[44px] lg:h-[48px] object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden lg:flex items-center gap-1.5 bg-[#EBF8FF]/95 backdrop-blur-xs border border-[#d6ecfb] rounded-full px-2 py-1 shadow-[0_2px_8px_rgba(3,30,80,0.03)]"
          aria-label="Main navigation"
        >
          {navLinks.map((item) => {
            const active = isLinkActive(item.href);

            if (item.hasDropdown) {
              return (
                <div
                  key={item.label}
                  className="relative flex items-center"
                  onMouseEnter={onDropdownEnter}
                  onMouseLeave={onDropdownLeave}
                >
                  <Link
                    href={item.href}
                    className={`group relative flex items-center gap-1 px-4 py-1.5 rounded-full text-[14px] font-semibold text-[#031E50] transition-all duration-200 select-none ${active
                      ? "bg-[rgba(62,184,247,0.32)] shadow-[0px_2px_4px_rgba(0,0,0,0.12),inset_0px_1px_4px_rgba(0,75,214,0.35)]"
                      : "hover:bg-[rgba(62,184,247,0.14)] hover:text-[#00A3FF]"
                      }`}
                    aria-expanded={servicesOpen}
                    aria-haspopup="true"
                    onClick={() => setServicesOpen(false)}
                  >
                    <span>{item.label}</span>

                    <svg
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen
                        ? "rotate-180 text-[#00A3FF]"
                        : "text-[#031E50]/70"
                        }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>

                    {/* Animated underline on hover */}
                    <span className="absolute bottom-0 left-4 right-4 h-[2px] origin-left scale-x-0 bg-[#00A3FF] transition-transform duration-200 group-hover:scale-x-100" />
                  </Link>

                  {/* Dropdown panel */}
                  <div
                    className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-white rounded-2xl shadow-[0_10px_35px_rgba(3,30,80,0.12)] border border-[#d6ecfb] py-2 transition-all duration-200 origin-top ${servicesOpen
                      ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                      }`}
                    role="menu"
                  >
                    <div className="absolute -top-[5px] left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-white border-l border-t border-[#d6ecfb] rotate-45" />

                    {item.dropdown!.map((subItem) => (
                      <Link
                        key={subItem.label}
                        href={subItem.href}
                        role="menuitem"
                        className="flex items-center gap-2.5 px-4 py-2 text-[13.5px] font-semibold text-[#031E50] hover:bg-[#EBF8FF] hover:text-[#00A3FF] transition-colors"
                        onClick={() => setServicesOpen(false)}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00A3FF] shrink-0" />
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`group relative flex items-center px-4 py-1.5 rounded-full text-[14px] font-semibold text-[#031E50] transition-all duration-200 select-none ${active
                  ? "bg-[rgba(62,184,247,0.32)] shadow-[0px_2px_4px_rgba(0,0,0,0.12),inset_0px_1px_4px_rgba(0,75,214,0.35)]"
                  : "hover:bg-[rgba(62,184,247,0.14)] hover:text-[#00A3FF]"
                  }`}
              >
                {item.label}

                {/* Animated underline on hover */}
                <span className="absolute bottom-0 left-4 right-4 h-[2px] origin-left scale-x-0 bg-[#00A3FF] transition-transform duration-200 group-hover:scale-x-100" />
              </Link>
            );
          })}
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden relative flex flex-col justify-center items-center w-10 h-10 rounded-full bg-[#EBF8FF] border border-[#d6ecfb] transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <span
            className={`absolute block w-5 h-[2px] rounded-full bg-[#031E50] transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-0" : "-translate-y-[5px]"
              }`}
          />
          <span
            className={`block w-5 h-[2px] rounded-full bg-[#031E50] transition-all duration-300 ${mobileOpen ? "opacity-0 scale-x-0" : "opacity-100 scale-x-100"
              }`}
          />
          <span
            className={`absolute block w-5 h-[2px] rounded-full bg-[#031E50] transition-all duration-300 ${mobileOpen ? "-rotate-45 translate-y-0" : "translate-y-[5px]"
              }`}
          />
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileOpen
          ? "max-h-[640px] opacity-100 mt-2.5"
          : "max-h-0 opacity-0"
          }`}
        aria-hidden={!mobileOpen}
      >
        <nav
          className="mx-4 sm:mx-6 rounded-3xl bg-[#EBF8FF] border border-[#d6ecfb] px-5 py-4 flex flex-col gap-1 shadow-[0_12px_36px_rgba(3,30,80,0.1)] max-h-[calc(100dvh-100px)] overflow-y-auto"
          aria-label="Mobile navigation"
        >
          {navLinks.map((item) => {
            const active = isLinkActive(item.href);

            if (item.hasDropdown) {
              return (
                <div key={item.label} className="w-full">
                  <div
                    className={`w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-[14.5px] font-semibold text-[#031E50] transition-colors ${active
                      ? "bg-[rgba(62,184,247,0.32)]"
                      : "hover:bg-white/60"
                      }`}
                  >
                    <Link
                      href={item.href}
                      className="flex-1"
                      onClick={() => {
                        setMobileOpen(false);
                        setMobileServicesOpen(false);
                      }}
                    >
                      {item.label}
                    </Link>

                    <button
                      type="button"
                      className="p-1 -mr-1 rounded-lg hover:bg-black/5"
                      onClick={(e) => {
                        e.stopPropagation();
                        setMobileServicesOpen(!mobileServicesOpen);
                      }}
                      aria-label="Toggle services menu"
                      aria-expanded={mobileServicesOpen}
                    >
                      <svg
                        className={`w-4 h-4 text-[#031E50] transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""
                          }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                  </div>

                  <div
                    className={`overflow-hidden transition-all duration-200 ${mobileServicesOpen
                      ? "max-h-80 opacity-100 mt-1"
                      : "max-h-0 opacity-0"
                      }`}
                  >
                    <div className="ml-4 pl-3 border-l-2 border-[#00A3FF]/30 flex flex-col gap-1">
                      {item.dropdown!.map((subItem) => (
                        <Link
                          key={subItem.label}
                          href={subItem.href}
                          className="py-2 px-3 text-[13.5px] font-medium text-[#031E50]/80 hover:text-[#00A3FF] transition-colors"
                          onClick={() => {
                            setMobileOpen(false);
                            setMobileServicesOpen(false);
                          }}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`px-4 py-2.5 rounded-xl text-[14.5px] font-semibold text-[#031E50] transition-colors ${active
                  ? "bg-[rgba(62,184,247,0.32)]"
                  : "hover:bg-white/60"
                  }`}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}

          <div className="mt-2 pt-3 border-t border-sky-200/60">
            <BookConsultationButton
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-full text-[14.5px] font-semibold text-white bg-gradient-to-r from-[#00A3FF] to-[#0196e3] shadow-[0_4px_16px_rgba(0,163,255,0.3)] transition-all active:scale-[0.98]"
            />
          </div>
        </nav>
      </div>
    </header>
  );
}