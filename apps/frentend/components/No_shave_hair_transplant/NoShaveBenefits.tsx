"use client";

import React from "react";
import Image from "next/image";

export interface NoShaveBenefitCardData {
  step: string;
  titleTop?: string;
  titleBottom?: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const defaultCards: NoShaveBenefitCardData[] = [
  {
    step: "01",
    titleTop: "Speedy",
    titleBottom: "Recovery",
    title: "Speedy Recovery",
    description:
      "A no-shave hair transplant allows patients to return to public presence more rapidly than a shave procedure.",
    imageSrc: "/Ultra_page_images/Benefits-4.webp",
    imageAlt: "01 Speedy Recovery",
  },
  {
    step: "02",
    title: "Lasting Results",
    description:
      "Density, permanence, and a natural look are just a few reasons to consider a No-Shave Hair Transplant.",
    imageSrc: "/Ultra_page_images/Benefits-2.webp",
    imageAlt: "02 Lasting Results",
  },
  {
    step: "03",
    titleTop: "Complete",
    titleBottom: "Discretion",
    title: "Complete Discretion",
    description:
      "Maintains complete discretion throughout the process.",
    imageSrc: "/Hair_repair_pages/Benefits-3.webp",
    imageAlt: "03 Complete Discretion",
  },
];

export interface NoShaveBenefitsProps {
  eyebrow?: string;
  titleLine1?: string;
  titleLine2?: string;
  subtitleLine1?: string;
  subtitleLine2?: string;
  cards?: NoShaveBenefitCardData[];
}

export default function NoShaveBenefits({
  eyebrow = "BENEFITS",
  titleLine1 = "Benefits of",
  titleLine2 = "No–Shave Hair Transplant",
  subtitleLine1 = "A No-shave Hair Transplant creates natural results without compromising your style.",
  subtitleLine2 = "Donor areas are trimmed only as needed, so your hairstyle is maintained.",
  cards = defaultCards,
}: NoShaveBenefitsProps) {
  return (
    <section className="w-full bg-white py-14 sm:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Section Header ── */}
        <div className="text-center max-w-[840px] mx-auto mb-10 sm:mb-14">
          {eyebrow && (
            <span className="font-['Plus_Jakarta_Sans'] text-[11px] sm:text-[12.5px] font-bold uppercase tracking-[0.22em] text-[#00A3FF] mb-2 sm:mb-3 block">
              {eyebrow}
            </span>
          )}
          <h2 className="font-['Plus_Jakarta_Sans'] text-[28px] sm:text-[36px] lg:text-[42px] font-extrabold tracking-[-0.03em] leading-[1.18]">
            <span className="text-[#001e56]">{titleLine1} </span>
            <span className="text-[#00A3FF]">{titleLine2}</span>
          </h2>
          <div className="mt-3.5 sm:mt-4 text-[#556987] font-['Plus_Jakarta_Sans'] text-[14px] sm:text-[15.5px] leading-[1.65] font-normal space-y-1">
            <p>{subtitleLine1}</p>
            <p>{subtitleLine2}</p>
          </div>
        </div>

        {/* ── Cards Layout: 2 on top row, 1 centered below ── */}
        <div className="max-w-[1020px] mx-auto">
          {/* Top Row: Cards 01 & 02 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {cards.slice(0, 2).map((item) => (
              <div
                key={item.step}
                className="flex items-center justify-between gap-5 sm:gap-6 rounded-[28px] sm:rounded-[32px] bg-[#f5f8fc] border border-[#eef3f9] p-6 sm:p-8 lg:p-9 transition-transform duration-300 hover:-translate-y-0.5"
              >
                <div className="flex-1 min-w-0 pr-2">
                  <span className="font-['Plus_Jakarta_Sans'] text-[14px] sm:text-[15px] font-extrabold text-[#00A3FF] block mb-1.5 sm:mb-2">
                    {item.step}
                  </span>
                  <h3 className="font-['Plus_Jakarta_Sans'] text-[20px] sm:text-[23px] font-bold text-[#001e56] tracking-tight mb-2 sm:mb-2.5 leading-[1.25]">
                    {item.titleTop && item.titleBottom ? (
                      <>
                        <span className="block">{item.titleTop}</span>
                        <span className="block">{item.titleBottom}</span>
                      </>
                    ) : (
                      item.title
                    )}
                  </h3>
                  <p className="font-['Plus_Jakarta_Sans'] text-[13px] sm:text-[13.5px] leading-[1.65] text-[#556987]">
                    {item.description}
                  </p>
                </div>

                <div className="relative w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 shrink-0 flex items-center justify-center">
                  <Image
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    width={130}
                    height={130}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Row: Card 03 (Centered) */}
          {cards[2] && (
            <div className="flex justify-center mt-6 lg:mt-8">
              <div className="w-full md:max-w-[494px] flex items-center justify-between gap-5 sm:gap-6 rounded-[28px] sm:rounded-[32px] bg-[#f5f8fc] border border-[#eef3f9] p-6 sm:p-8 lg:p-9 transition-transform duration-300 hover:-translate-y-0.5">
                <div className="flex-1 min-w-0 pr-2">
                  <span className="font-['Plus_Jakarta_Sans'] text-[14px] sm:text-[15px] font-extrabold text-[#00A3FF] block mb-1.5 sm:mb-2">
                    {cards[2].step}
                  </span>
                  <h3 className="font-['Plus_Jakarta_Sans'] text-[20px] sm:text-[23px] font-bold text-[#001e56] tracking-tight mb-2 sm:mb-2.5 leading-[1.25]">
                    {cards[2].titleTop && cards[2].titleBottom ? (
                      <>
                        <span className="block">{cards[2].titleTop}</span>
                        <span className="block">{cards[2].titleBottom}</span>
                      </>
                    ) : (
                      cards[2].title
                    )}
                  </h3>
                  <p className="font-['Plus_Jakarta_Sans'] text-[13px] sm:text-[13.5px] leading-[1.65] text-[#556987]">
                    {cards[2].description}
                  </p>
                </div>

                <div className="relative w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 shrink-0 flex items-center justify-center">
                  <Image
                    src={cards[2].imageSrc}
                    alt={cards[2].imageAlt}
                    width={130}
                    height={130}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
