"use client";

import React from "react";
import HairRepairBenefits, {
  HairRepairBenefitCardData,
  HairRepairBenefitsProps,
} from "@/components/Hair_repair_pages/HairRepairBenefits";

const crownHairBenefitsCards: HairRepairBenefitCardData[] = [
  {
    id: "natural-whorl-pattern",
    step: "01",
    title: "Natural Crown Spiral",
    description:
      "Recreates the authentic circular whorl growth pattern unique to your scalp.",
    imageSrc: "/Ultra_page_images/Benefits-4.webp",
    imageAlt: "01 Natural Crown Spiral",
  },
  {
    id: "full-density-coverage",
    step: "02",
    title: "Full Density & Coverage",
    description:
      "Transforms prominent bald crown spots into dense, natural-looking hair.",
    imageSrc: "/Ultra_page_images/Benefits-2.webp",
    imageAlt: "02 Full Density & Coverage",
  },
  {
    id: "permanent-dht-resistant",
    step: "03",
    title: "Permanent DHT Resistance",
    description:
      "Harvested from safe donor zones, transplanted crown hair lasts for life.",
    imageSrc: "/Hair_repair_pages/Benefits-3.webp",
    imageAlt: "03 Permanent DHT Resistance",
  },
  {
    id: "minimally-invasive",
    step: "04",
    title: "Fast, Scarless Recovery",
    description:
      "Advanced micro-punch technology ensures rapid healing and virtually invisible scarring.",
    imageSrc: "/Ultra_page_images/Benefits-3.webp",
    imageAlt: "04 Fast, Scarless Recovery",
  },
];

export default function CrownHairBenefits(
  props: Partial<HairRepairBenefitsProps>
) {
  return (
    <HairRepairBenefits
      eyebrow="BENEFITS"
      titleLine1="Benefits of"
      titleAccent="Crown Hair Transplant"
      subtitle="A crown hair transplant offers complete vertex coverage, restoring a natural whorl pattern and youthful density with minimal downtime."
      cards={crownHairBenefitsCards}
      {...props}
    />
  );
}

