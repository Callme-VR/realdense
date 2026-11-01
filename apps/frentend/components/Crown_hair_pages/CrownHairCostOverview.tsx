"use client";

import React from "react";
import CostOverviewQht, {
  CostOverviewQhtProps,
  PricingRow,
  FactorCard,
} from "@/components/QHT_pages/CostOverviewqht";

const crownHairPricingRows: PricingRow[] = [
  {
    label: "FUE",
    prefix: "Starts from ",
    amount: "₹50",
    suffix: " per graft",
  },
  {
    label: "FUT",
    prefix: "Starts from ",
    amount: "₹70",
    suffix: " per graft",
  },
  {
    label: "QHT",
    prefix: "Starts from ",
    amount: "₹100",
    suffix: " per graft",
    highlighted: true,
  },
];

const crownHairFactors: FactorCard[] = [
  {
    step: "01",
    title: "Technique Used",
    description:
      "Advanced micro-extraction and sapphire or QHT implanters ensure highest graft survival in the crown area.",
  },
  {
    step: "02",
    title: "Crown Baldness Area",
    description:
      "The larger the thinning or bald crown patch, the higher the graft count needed for complete circular coverage.",
  },
  {
    step: "03",
    title: "Surgeon’s Artistry",
    description:
      "Crown reconstruction requires artistic whorl design and high precision to match existing hair angles.",
  },
  {
    step: "04",
    title: "Clinic Location & Standards",
    description:
      "Modern surgical theaters, international sterilization protocols, and premium patient care.",
  },
];

export default function CrownHairCostOverview(
  props: Partial<CostOverviewQhtProps>
) {
  return (
    <CostOverviewQht
      eyebrow="COST OVERVIEW"
      titleLine1="Crown Hair Transplant"
      titleLine2="Cost in India"
      paragraphs={[
        "The cost of a crown hair transplant in India depends on the number of grafts required for dense vertex coverage, the technique chosen (FUE or QHT), and the surgeon's experience.",
      ]}
      pricingRows={crownHairPricingRows}
      factorsTitleLine1="The Factors Affecting"
      factorsTitleLine2="Crown Hair Transplant"
      factors={crownHairFactors}
      {...props}
    />
  );
}

