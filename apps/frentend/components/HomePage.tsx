"use client";

import Image from "next/image";

interface PatientCard {
  id: string;
  name: string;
  imageSrc: string;
  isCenter?: boolean;
  widthClass: string;
  scaleClass: string;
  borderClass: string;
  radiusClass: string;
  zIndexClass: string;
}

const patientCards: PatientCard[] = [
  {
    id: "kashyap-1",
    name: "Kashyap D",
    imageSrc: "/images/hero/patient-kashyap.webp",
    widthClass: "w-[17%] max-w-[195px]",
    scaleClass: "scale-[0.88] opacity-90 hover:opacity-100",
    borderClass: "border-[1.5px] sm:border-2 border-white",
    radiusClass: "rounded-[12px] sm:rounded-[18px] lg:rounded-[22px]",
    zIndexClass: "z-0",
  },
  {
    id: "deepak",
    name: "Dipak M",
    imageSrc: "/images/hero/patient-deepak.webp",
    widthClass: "w-[20%] max-w-[230px]",
    scaleClass: "scale-[0.95] hover:scale-[0.98]",
    borderClass: "border-2 sm:border-[2.5px] border-white",
    radiusClass: "rounded-[14px] sm:rounded-[22px] lg:rounded-[26px]",
    zIndexClass: "z-10",
  },
  {
    id: "abhishek",
    name: "Abhishek P",
    imageSrc: "/images/hero/patient-abhishek.webp",
    isCenter: true,
    widthClass: "w-[23%] max-w-[275px]",
    scaleClass: "scale-100 sm:scale-105 hover:scale-[1.07]",
    borderClass: "border-[2.5px] sm:border-[3.5px] border-white",
    radiusClass: "rounded-[16px] sm:rounded-[26px] lg:rounded-[30px]",
    zIndexClass: "z-20",
  },
  {
    id: "ranbeer",
    name: "Ranbir M",
    imageSrc: "/images/hero/patient-ranbeer.webp",
    widthClass: "w-[20%] max-w-[230px]",
    scaleClass: "scale-[0.95] hover:scale-[0.98]",
    borderClass: "border-2 sm:border-[2.5px] border-white",
    radiusClass: "rounded-[14px] sm:rounded-[22px] lg:rounded-[26px]",
    zIndexClass: "z-10",
  },
  {
    id: "kashyap-2",
    name: "Kashyap D",
    imageSrc: "/images/hero/patient-kashyap.webp",
    widthClass: "w-[17%] max-w-[195px]",
    scaleClass: "scale-[0.88] opacity-90 hover:opacity-100",
    borderClass: "border-[1.5px] sm:border-2 border-white",
    radiusClass: "rounded-[12px] sm:rounded-[18px] lg:rounded-[22px]",
    zIndexClass: "z-0",
  },
];

export default function HomePage() {
  return (
    <section className="relative isolate flex w-full flex-col items-center justify-center overflow-hidden pt-24 pb-10 sm:pt-28 sm:pb-16">
      {/* White glow behind the headline */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[235px] z-0 h-[300px] w-[min(991px,140vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white opacity-40 blur-[100px] sm:h-[320px] sm:blur-[120px] lg:h-[346.86px] lg:blur-[151px]"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center px-4 text-center sm:px-6 lg:px-8">
        {/* Eyebrow */}
        <p className="mb-2.5 font-['Plus_Jakarta_Sans'] text-[12px] font-semibold uppercase leading-[25px] tracking-[0.24em] text-[#0093B0] sm:text-[13.5px] md:text-[16px]">
          Because Look Matters.
        </p>

        {/* Main headline */}
        <h1 className="mx-auto max-w-3xl font-['Plus_Jakarta_Sans'] text-[30px] font-extrabold leading-[1.14] tracking-tight sm:text-4xl md:text-[42px] lg:text-[46px] xl:text-[48px]">
          <span className="inline-block bg-gradient-to-r from-[#051A4D] to-[#0C3CB3] bg-clip-text text-transparent [filter:drop-shadow(0_0_2px_rgba(255,255,255,0.4))]">
            Rediscover a Denser
          </span>
          <br />

          <span
            className="inline-block bg-gradient-to-r from-[#0380C1] to-[#00C7FF] bg-clip-text text-transparent [filter:drop-shadow(0_0_2px_rgba(255,255,255,0.4))]"
          >
            More Confident
          </span>{" "}

          <span className="inline-block bg-gradient-to-r from-[#051A4D] to-[#0C3CB3] bg-clip-text text-transparent [filter:drop-shadow(0_0_2px_rgba(255,255,255,0.4))]">
            You
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mt-3 w-full max-w-[800px] font-['Plus_Jakarta_Sans'] text-[14px] font-medium leading-relaxed tracking-[0.02em] text-[#001E56] sm:mt-3.5 sm:text-[15.5px] md:text-[16px] md:leading-[1.6] lg:text-[18px] lg:leading-[1.7]">
          Advanced hair restoration designed around you, with natural-looking
          results that feel completely your own.
        </p>

        {/* Patient transformations */}
        <div className="mt-7 flex w-full items-center justify-center gap-1.5 px-1 sm:mt-9 sm:gap-3.5 sm:px-4 lg:gap-5">
          {patientCards.map((card) => (
            <div
              key={card.id}
              className={`relative shrink-0 cursor-pointer overflow-hidden border transition-all duration-300 ease-out shadow-[0_10px_30px_rgba(2,30,80,0.14)] ${card.isCenter
                ? "shadow-[0_16px_45px_rgba(2,30,85,0.24)]"
                : ""
                } ${card.widthClass} ${card.radiusClass} ${card.borderClass} ${card.scaleClass} ${card.zIndexClass}`}
            >
              <div className="relative aspect-[1192/1320] w-full">
                <Image
                  src={card.imageSrc}
                  alt={`${card.name} Hair Restoration Result`}
                  fill
                  sizes="(max-width: 640px) 20vw, 280px"
                  className="object-contain object-center"
                  priority={card.isCenter}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Statistics bar */}
        <div className="mt-7 grid w-full max-w-[1060px] grid-cols-2 gap-x-3 gap-y-4 rounded-[22px] border border-white/25 bg-[#2E78B8]/85 px-5 py-4 shadow-[0_10px_35px_rgba(2,30,80,0.22)] backdrop-blur-md sm:mt-10 sm:flex sm:items-center sm:justify-between sm:gap-4 sm:px-10 sm:py-[18px]">
          {/* Stat 1 */}
          <div className="flex min-w-0 items-center gap-2.5 sm:gap-3.5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/30 bg-[#0047C4] text-white shadow-sm sm:h-11 sm:w-11">
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <div className="min-w-0 text-left">
              <div className="text-[16px] font-bold leading-tight tracking-tight text-white sm:text-[20px]">
                2000+
              </div>
              <div className="mt-0.5 text-[11px] font-medium leading-tight text-sky-100 sm:text-[13px]">
                Patients Treated
              </div>
            </div>
          </div>

          <div className="hidden h-10 w-px bg-white/20 sm:block" />

          {/* Stat 2 */}
          <div className="flex min-w-0 items-center gap-2.5 sm:gap-3.5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/30 bg-[#00A3FF] text-white shadow-sm sm:h-11 sm:w-11">
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <div className="min-w-0 text-left">
              <div className="text-[16px] font-bold leading-tight tracking-tight text-white sm:text-[20px]">
                10+ Years
              </div>
              <div className="mt-0.5 text-[11px] font-medium leading-tight text-sky-100 sm:text-[13px]">
                of Experience
              </div>
            </div>
          </div>

          <div className="hidden h-10 w-px bg-white/20 sm:block" />

          {/* Stat 3 */}
          <div className="flex min-w-0 items-center gap-2.5 sm:gap-3.5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/30 bg-[#0047C4] text-white shadow-sm sm:h-11 sm:w-11">
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
            </div>
            <div className="min-w-0 text-left">
              <div className="text-[16px] font-bold leading-tight tracking-tight text-white sm:text-[20px]">
                4.9/5
              </div>
              <div className="mt-0.5 text-[11px] font-medium leading-tight text-sky-100 sm:text-[13px]">
                Patient Satisfaction
              </div>
            </div>
          </div>

          <div className="hidden h-10 w-px bg-white/20 sm:block" />

          {/* Stat 4 */}
          <div className="flex min-w-0 items-center gap-2.5 sm:gap-3.5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/30 bg-[#00A3FF] text-white shadow-sm sm:h-11 sm:w-11">
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <div className="min-w-0 text-left">
              <div className="text-[16px] font-bold leading-tight tracking-tight text-white sm:text-[20px]">
                Personalized
              </div>
              <div className="mt-0.5 text-[11px] font-medium leading-tight text-sky-100 sm:text-[13px]">
                Treatment Plans
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}