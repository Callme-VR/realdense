"use client";

import React from "react";
import HairRepairBenefits, {
  HairRepairBenefitCardData,
  HairRepairBenefitsProps,
} from "@/components/Hair_repair_pages/HairRepairBenefits";

const customHairBenefitsCards: HairRepairBenefitCardData[] = [
  {
    id: "hairline-restoration",
    step: "01",
    title: "Hairline Restoration",
    description: "Transplanted follicles provide long-lasting hair growth.",
    imageSrc: "/Ultra_page_images/Benefits-2.webp",
    imageAlt: "01 Hairline Restoration",
  },
  {
    id: "natural-growth-pattern",
    step: "02",
    title: "Natural Growth Pattern",
    description: "Grafts follow natural hair angles and directions.",
    imageSrc: "/Ultra_page_images/Benefits-4.webp",
    imageAlt: "02 Natural Growth Pattern",
  },
  {
    id: "facial-balance",
    step: "03",
    title: "Facial Balance and Self-confidence",
    description:
      "A personalised hairline enhances facial balance and confidence.",
    imageSrc: "/Ultra_page_images/Benefits-3.webp",
    imageAlt: "03 Facial Balance and Self-confidence",
  },
  {
    id: "rapid-recovery",
    step: "04",
    title: "Rapid Recovery",
    description:
      "Minimal discomfort and scarring, with recovery in a few days.",
    imageSrc: "/Ultra_page_images/Benefits-1.webp",
    imageAlt: "04 Rapid Recovery",
  },
];

export default function CustomHairBenefits(
  props: Partial<HairRepairBenefitsProps>
) {
  return (
    <HairRepairBenefits
      eyebrow="BENEFITS"
      titleLine1="Benefits of"
      titleAccent="Custom Hairline Transplant"
      subtitle="A custom hairline transplant offers natural-looking results by restoring hair in harmony with your unique facial features and age."
      cards={customHairBenefitsCards}
      {...props}
    />
  );
}

