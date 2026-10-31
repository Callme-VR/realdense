"use client";

import React from "react";
import CostOverviewQht, {
  CostOverviewQhtProps,
  PricingRow,
  FactorCard,
} from "@/components/QHT_pages/CostOverviewqht";

const customHairPricingRows: PricingRow[] = [
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

const customHairFactors: FactorCard[] = [
  {
    step: "01",
    title: "Technique Used",
    description:
      "FUE and QHT are usually more expensive than FUT. Advanced methods like QHT require specialized tools and expertise, raising the overall cost.",
  },
  {
    step: "02",
    title: "Grafts Required",
    description:
      "The greater the bald area or density required, the higher the graft count.",
  },
  {
    step: "03",
    title: "Surgeon’s Experience",
    description:
      "Experienced doctors and trusted clinics may charge more for proven results, quality materials, and high safety standards.",
  },
  {
    step: "04",
    title: "Location of the Clinic",
    description:
      "Metropolitan areas often have higher expenses, so procedures in cities like Delhi, Mumbai, and Bangalore tend to be costlier.",
  },
];

export default function CustomHairCostOverview(
  props: Partial<CostOverviewQhtProps>
) {
  return (
    <CostOverviewQht
      eyebrow="COST OVERVIEW"
      titleLine1="Custom Hairline Transplant"
      titleLine2="Cost in india"
      paragraphs={[
        "The cost of a custom hairline transplant in India varies widely, depending on the technique used, the number of grafts required, and the surgeon's expertise.",
      ]}
      pricingRows={customHairPricingRows}
      factorsTitleLine1="The Factors Affecting"
      factorsTitleLine2="Custom Hairline Transplant"
      factors={customHairFactors}
      {...props}
    />
  );
}

