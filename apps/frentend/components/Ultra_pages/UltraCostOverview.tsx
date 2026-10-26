"use client";

import React from "react";
import CostOverviewQht, {
  CostOverviewQhtProps,
  PricingRow,
  FactorCard,
} from "@/components/QHT_pages/CostOverviewqht";

const ultraPricingRows: PricingRow[] = [
  {
    label: "Ultra Dense FUE",
    prefix: "Starts from ",
    amount: "₹50",
    suffix: " per graft",
    highlighted: true,
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
];

const ultraFactors: FactorCard[] = [
  {
    step: "01",
    title: "Extent of the hair loss",
    description:
      "If the baldness grade is higher, a greater number of hair grafts are used to provide full coverage and restore the hair density.",
  },
  {
    step: "02",
    title: "The complexity of the procedure",
    description:
      "Ultra-dense transplants require expert precision and monitoring. Costs may increase for complex revision cases.",
  },
  {
    step: "03",
    title: "Geographical Location of the Clinic",
    description:
      "Being an in-clinic procedure, the cost for ultra-dense hair transplant may significantly vary from city to city.",
  },
  {
    step: "04",
    title: "Usage of tools",
    description:
      "SAVA implanters are used in this procedure, making the cost go slightly higher as these are high-precision devices that require proper expertise.",
  },
];

export default function UltraCostOverview(
  props: Partial<CostOverviewQhtProps>
) {
  return (
    <CostOverviewQht
      eyebrow="COST OVERVIEW"
      titleLine1="Ultra Dense Hair"
      titleLine2="Cost in india"
      paragraphs={[
        "Unlike a regular hair transplant, the cost for a complex hair transplant can go significantly up due to the complications involved. More complications require expert surgeons and advanced surgical skills.",
        "There have been many cases of bad hair transplantation, but at QHT Clinic, such cases have been handled with great precision, all because of the 15+ years of expertise of the trained team.",
      ]}
      pricingRows={ultraPricingRows}
      factorsTitleLine1="The Factors Affecting"
      factorsTitleLine2="ULTRA DENSE HAIR TRANSPLANT"
      factors={ultraFactors}
      {...props}
    />
  );
}
