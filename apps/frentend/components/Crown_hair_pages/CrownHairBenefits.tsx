"use client";

import React from "react";
import HairRepairBenefits, {
  HairRepairBenefitCardData,
  HairRepairBenefitsProps,
} from "@/components/Hair_repair_pages/HairRepairBenefits";

const crownHairBenefitsCards: HairRepairBenefitCardData[] = [
  {
    id: "realistic-hair-density",
    step: "01",
    title: "Realistic Hair Density",
    description: "Crown Hair Transplant with a natural spiral growth pattern.",
    imageSrc: "/Ultra_page_images/Benefits-4.webp",
    imageAlt: "01 Realistic Hair Density",
  },
  {
    id: "long-lasting-results",
    step: "02",
    title: "Long–lasting Results",
    description:
      "The transplanted hair follicles are less prone to root damage",
    imageSrc: "/Ultra_page_images/Benefits-2.webp",
    imageAlt: "02 Long–lasting Results",
  },
  {
    id: "minimal-invasive-techniques",
    step: "03",
    title: "Minimal Invasive techniques",
    description: "The Realdense technique gives minimal scars.",
    imageSrc: "/Ultra_page_images/Benefits-3.webp",
    imageAlt: "03 Minimal Invasive techniques",
  },
  {
    id: "customised-approach",
    step: "03",
    title: "Customised Approach",
    description:
      "At Realdense Clinic, the procedure is tailored to the patient’s needs.",
    imageSrc: "/Ultra_page_images/Benefits-1.webp",
    imageAlt: "03 Customised Approach",
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
      subtitle="The Crown Hair Transplant at our clinic restores the hair in the crown region. The advanced procedure is beneficial in the following ways:"
      cards={crownHairBenefitsCards}
      {...props}
    />
  );
}
