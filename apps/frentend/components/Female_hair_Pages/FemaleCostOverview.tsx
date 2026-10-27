"use client";

import React from "react";
import CostOverviewQht, {
  CostOverviewQhtProps,
  PricingRow,
  FactorCard,
} from "@/components/QHT_pages/CostOverviewqht";

const femalePricingRows: PricingRow[] = [
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
  },
  {
    label: "Robotic Hair Transplant",
    prefix: "Starts from ",
    amount: "₹100",
    suffix: " per graft",
  },
];

const femaleFactors: FactorCard[] = [
  {
    step: "01",
    title: "Extent of the hair loss",
    description:
      "The greater the area to be covered, the greater the number of grafts and, as a result, the higher the cost.",
  },
  {
    step: "02",
    title: "Technique Used",
    description:
      "More complex techniques such as FUE or QHT tend to be more expensive than a standard FUT on the basis of accuracy and recovery.",
  },
  {
    step: "03",
    title: "Surgeon’s Expertise",
    description:
      "Experienced and renowned surgeons can command higher prices due to their competence, safety and reliability.",
  },
  {
    step: "04",
    title: "Clinic Infrastructure",
    description:
      "The overall cost can be influenced by modern clinics, equipment, hygiene levels, and the overall package of care.",
  },
];

export default function FemaleCostOverview(
  props: Partial<CostOverviewQhtProps>
) {
  return (
    <CostOverviewQht
      eyebrow="COST OVERVIEW"
      titleLine1="Female Hair Transplant"
      titleLine2="Cost in india"
      paragraphs={[
        "The hair transplant cost depends upon the technique used at your clinic.",
      ]}
      pricingRows={femalePricingRows}
      factorsTitleLine1="The Factors Affecting"
      factorsTitleLine2="FEMALE HAIR TRANSPLANT"
      factors={femaleFactors}
      {...props}
    />
  );
}
