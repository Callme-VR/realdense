import Link from "next/link";
import React from "react";

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
  className,
  children,
  showArrow = true,
  arrowIcon,
  onClick,
  style,
}: BookConsultationButtonProps) {
  const defaultClasses =
    "group relative inline-flex items-center gap-2.5 overflow-hidden rounded-lg px-7 py-3.5 text-[15px] font-semibold text-white bg-[#001e56] transition-all duration-300 ease-out hover:shadow-[0_8px_25px_rgba(0,30,86,0.25)] active:scale-[0.98]";

  return (
    <Link
      href={href}
      onClick={onClick}
      style={style}
      className={
        className
          ? `group relative overflow-hidden ${className}`
          : defaultClasses
      }
    >
      {/* Continuous automatic shimmer animation */}
      <span
        className="
          button-shimmer
          absolute inset-y-0
          -left-1/2
          w-1/2
          bg-gradient-to-r
          from-transparent
          via-[#42bfff]/40
          to-transparent
          skew-x-[-20deg]
          pointer-events-none
        "
      />

      {/* Button text */}
      <span className="relative z-10">
        {children ?? "Book a Consultation"}
      </span>

      {/* Button arrow */}
      {showArrow &&
        (arrowIcon ? (
          <span className="relative z-10 select-none transition-transform duration-300 ease-out group-hover:translate-x-1">
            {arrowIcon}
          </span>
        ) : (
          <span
            className="
              relative z-10
              text-[17px] leading-none select-none
              transition-transform duration-300 ease-out
              group-hover:translate-x-2
            "
          >
            →
          </span>
        ))}
    </Link>
  );
}
