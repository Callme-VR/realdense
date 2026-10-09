
import Link from "next/link";
import React from "react";
import { ArrowRight } from "lucide-react";

interface BookConsultationButtonProps {
  href?: string;
  className?: string;
  children?: React.ReactNode;
  showArrow?: boolean;
  arrowIcon?: React.ReactNode;
  onClick?: () => void;
  style?: React.CSSProperties;
}

export default function BookConsultationButton({
  href = "/book-consultation",
  className = "",
  children = "Book a Consultation",
  showArrow = true,
  arrowIcon,
  onClick,
  style,
}: BookConsultationButtonProps) {
  const icon =
    arrowIcon ?? (
      <ArrowRight
        size={14}
        strokeWidth={2.5}
        aria-hidden="true"
      />
    );

  return (
    <Link
      href={href}
      onClick={onClick}
      style={style}
      className={`
        group
        relative
        inline-flex
        items-center
        gap-2.5
        overflow-hidden
        rounded-lg
        px-7
        py-3.5
        text-[15px]
        font-semibold
        text-white
        bg-[#001e56]
        transition-all
        duration-300
        ease-out
        hover:shadow-[0_8px_25px_rgba(0,30,86,0.25)]
        active:scale-[0.98]
        ${className}
      `}
    >
      {/* =========================================
          CONTINUOUS SHIMMER
      ========================================= */}
      <span
        className="
          button-shimmer
          absolute
          inset-y-0
          -left-1/2
          w-1/2
          pointer-events-none
          skew-x-[-20deg]
          bg-gradient-to-r
          from-transparent
          via-[#42bfff]/40
          to-transparent
        "
      />

      {/* =========================================
          BUTTON TEXT
      ========================================= */}
      <span className="relative z-10">
        {children}
      </span>

      {/* =========================================
          SINGLE MOVING ARROW
      ========================================= */}
      {showArrow && (
        <span
          className="relative z-10 button-arrow-container"
          aria-hidden="true"
        >
          <span className="button-arrow">
            {icon}
          </span>
        </span>
      )}
    </Link>
  );
}