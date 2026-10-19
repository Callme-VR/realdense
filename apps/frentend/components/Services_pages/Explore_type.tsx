"use client";

import React, { useState } from "react";
import Image from "next/image";

interface ServiceCard {
  id: string;
  title: string;
  description: string;
  image: string;
}

interface ServiceCategory {
  id: string;
  categoryName: string;
  filterKey: string;
  cards: ServiceCard[];
}

const serviceCategories: ServiceCategory[] = [
  {
    id: "hair-transplant",
    categoryName: "Hair Transplant Treatments",
    filterKey: "hair-transplant",
    cards: [
      {
        id: "fut",
        title: "FUT Hair Transplant",
        description: "A traditional strip method suitable for extensive hair restoration.",
        image: "/service_page_images/image.webp",
      },
      {
        id: "fue",
        title: "FUE Hair Transplant",
        description: "Minimally invasive treatment for natural results, without linear scars.",
        image: "/service_page_images/image copy.webp",
      },
      {
        id: "qht",
        title: "QHT Hair Transplant",
        description: "Advanced minimally invasive technique for precise and natural results.",
        image: "/service_page_images/image copy 2.webp",
      },
      {
        id: "ultra-dense",
        title: "Ultra-Dense Hair Transplant",
        description: "An effective procedure to achieve maximum density for a fuller look.",
        image: "/service_page_images/image copy 3.webp",
      },
      {
        id: "female",
        title: "Female Hair Transplant",
        description: "Restore your confidence with expert care at India's top clinic for women.",
        image: "/service_page_images/image copy 4.webp",
      },
      {
        id: "repair",
        title: "Hair Transplant Repair",
        description: "Correct and improve previous transplant results with expert care and precision.",
        image: "/service_page_images/image copy 5.webp",
      },
      {
        id: "unshaven",
        title: "Unshaven Hair Transplant",
        description: "Get natural results with minimal shaving and maximum discretion.",
        image: "/service_page_images/image copy 6.webp",
      },
      {
        id: "men",
        title: "Hair Transplant for Men",
        description: "Result-driven male hair transplant solutions designed for a natural look.",
        image: "/service_page_images/image copy 7.webp",
      },
    ],
  },
  {
    id: "hairline-density",
    categoryName: "Hairline & Density Restoration",
    filterKey: "hairline-density",
    cards: [
      {
        id: "custom-hairline",
        title: "Custom Hairline Transplant",
        description: "Personalised hairline design tailored to your facial features.",
        image: "/service_page_images/image copy 8.webp",
      },
      {
        id: "crown",
        title: "Crown Hair Transplant",
        description: "Restore hair density in the crown area for a fuller and natural look.",
        image: "/service_page_images/image copy 9.webp",
      },
      {
        id: "hairline-reconstruction",
        title: "Hairline Reconstruction",
        description: "Restore your hairline with a natural and age-appropriate design.",
        image: "/service_page_images/image copy 10.webp",
      },
      {
        id: "bad-transplant-correction",
        title: "Bad Hair Transplant Correction",
        description: "From regret to renewal – correct your hair transplant with confidence.",
        image: "/service_page_images/image copy 11.webp",
      },
      {
        id: "temple",
        title: "Temple Hair Transplant",
        description: "Expert solutions for temple restoration and balanced hairline design.",
        image: "/service_page_images/image copy 12.webp",
      },
    ],
  },
  {
    id: "facial-hair",
    categoryName: "Facial Hair Restoration",
    filterKey: "facial-hair",
    cards: [
      {
        id: "moustache",
        title: "Moustache Hair Transplant",
        description: "Restore your facial hair and achieve a fuller, natural look.",
        image: "/service_page_images/image copy 13.webp",
      },
      {
        id: "eyebrow",
        title: "Eyebrow Reconstruction",
        description: "Restore or enhance eyebrows with natural-looking density.",
        image: "/service_page_images/image copy 14.webp",
      },
      {
        id: "beard",
        title: "Beard Hair Transplant",
        description: "Achieve a thicker, well-defined beard with natural results.",
        image: "/service_page_images/image copy 15.webp",
      },
    ],
  },
  {
    id: "specialized",
    categoryName: "Specialized Hair Restoration",
    filterKey: "specialized",
    cards: [
      {
        id: "afro",
        title: "Afro Hair Transplant",
        description: "Specialized hair transplant services that honor the individuality of Afro-textured hair.",
        image: "/service_page_images/image copy 16.webp",
      },
      {
        id: "influencer",
        title: "Social Media Influencer Hair",
        description: "Tailored hair transplant solutions for creators and public figures.",
        image: "/service_page_images/image copy 17.webp",
      },
      {
        id: "caucasian",
        title: "Caucasian Patients Hair Transplant",
        description: "Expert hair transplant solutions for Caucasian patients.",
        image: "/service_page_images/image copy 18.webp",
      },
      {
        id: "natural-look",
        title: "Natural Look Hair Restoration",
        description: "Reclaim your confidence with hair that looks as natural as it feels.",
        image: "/service_page_images/image copy 19.webp",
      },
      {
        id: "burn",
        title: "Burn Hair Transplant",
        description: "From scars to strength, with a natural restoration that restores both hair.",
        image: "/service_page_images/image copy 20.webp",
      },
    ],
  },
];

const filterTabs = [
  { label: "All Services", key: "all" },
  { label: "Hair Transplant", key: "hair-transplant" },
  { label: "Hairline & Density", key: "hairline-density" },
  { label: "Facial Hair", key: "facial-hair" },
  { label: "Specialized", key: "specialized" },
];

export default function ExploreServices() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredCategories =
    activeFilter === "all"
      ? serviceCategories
      : serviceCategories.filter((cat) => cat.filterKey === activeFilter);

  return (
    <section className="relative w-full bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Section Header ── */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 lg:mb-12">
          {/* Eyebrow */}
          <p className="font-['Plus_Jakarta_Sans'] text-[12px] sm:text-[13px] lg:text-[13.5px] font-semibold uppercase tracking-[0.24em] text-[#64748B] mb-2 sm:mb-2.5">
            FIND THE RIGHT SOLUTION
          </p>

          {/* Heading */}
          <h2 className="font-['Plus_Jakarta_Sans'] text-[28px] xs:text-[32px] sm:text-[38px] md:text-[44px] font-extrabold tracking-tight text-[#001e56]">
            <span>Explore </span>
            <span className="text-[#0cb0f2]">Our Services</span>
          </h2>

          {/* Subtitle */}
          <p className="mt-3 sm:mt-3.5 font-['Plus_Jakarta_Sans'] text-[14px] sm:text-[15.5px] lg:text-[16px] font-medium leading-relaxed text-[#334155] max-w-2xl mx-auto">
            Whether you&apos;re looking to restore your hairline, add density or explore non-surgical options, our expert-led treatments are designed to deliver natural, long-lasting results.
          </p>
        </div>

        {/* ── Filter Tabs (Mobile Scrollable with 44px Touch Targets) ── */}
        <div className="flex items-center justify-start sm:justify-center gap-2 sm:gap-3 overflow-x-auto pb-3 pt-1 mb-10 sm:mb-14 scrollbar-none select-none -mx-4 px-4 sm:mx-0 sm:px-0">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.key;
            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveFilter(tab.key)}
                className={`shrink-0 min-h-[44px] rounded-full px-5 sm:px-6 py-2.5 text-[13.5px] sm:text-[14px] font-semibold transition-all duration-200 cursor-pointer flex items-center justify-center ${isActive
                  ? "bg-[#001e56] text-white shadow-[0_4px_14px_rgba(0,30,86,0.22)] border border-[#001e56]"
                  : "bg-white text-[#001e56] border border-[#cbd5e1] hover:border-[#0cb0f2] hover:text-[#0cb0f2]"
                  }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* ── Services Sections ── */}
        <div className="flex flex-col gap-12 sm:gap-14 lg:gap-18">
          {filteredCategories.map((category) => (
            <div key={category.id} className="flex flex-col min-w-0">
              {/* Category Title */}
              <h3 className="font-['Plus_Jakarta_Sans'] text-[20px] sm:text-[24px] lg:text-[26px] font-bold tracking-tight text-[#001e56] mb-5 sm:mb-7">
                {category.categoryName}
              </h3>

              {/* Grid of Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
                {category.cards.map((card) => (
                  <div
                    key={card.id}
                    className="group relative flex flex-col rounded-[22px] sm:rounded-[26px] overflow-hidden border border-[#e2e8f0]/80 shadow-[0_4px_16px_rgba(0,30,86,0.06)] hover:shadow-[0_12px_28px_rgba(0,30,86,0.12)] transition-all duration-300 hover:-translate-y-1 bg-[#edf3fc] min-w-0"
                  >
                    <div className="relative w-full aspect-[1016/1104] overflow-hidden">
                      <Image
                        src={card.image}
                        alt={`${card.title} - ${card.description}`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover object-center transition-transform duration-300 group-hover:scale-[1.02]"
                        quality={90}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
