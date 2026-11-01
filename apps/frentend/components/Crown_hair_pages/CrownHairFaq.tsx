"use client";

import React from "react";
import Faqqht, { FaqQhtProps, FAQItem } from "@/components/QHT_pages/Faqqht";

const crownHairFaqs: FAQItem[] = [
  {
    id: 1,
    question: "How effective is a crown hair transplant?",
    answer:
      "Most patients resume daily activities within a few days, with scalp healing taking 1–2 weeks.",
  },
  {
    id: 2,
    question: "Which technique is better for crown hair Transplant?",
    answer:
      "Both FUE and QHT are effective, but QHT offers superior precision for matching the natural whorl angle with faster healing and higher graft survival.",
  },
  {
    id: 3,
    question: "How long is crown transplant recovery?",
    answer:
      "Initial healing takes about 7 to 10 days, while noticeable hair growth begins around 3 to 6 months and reaches full density at 9 to 12 months.",
  },
  {
    id: 4,
    question: "Are the crown hair transplant results permanent?",
    answer:
      "Yes, transplanted follicles are harvested from the DHT-resistant permanent zone at the back and sides of the scalp, providing permanent growth.",
  },
  {
    id: 5,
    question: "Does a crown hair transplant leave scars after surgery?",
    answer:
      "With advanced micro-punch FUE and QHT techniques, extraction points heal into tiny micro-dots that are virtually imperceptible even with short hair.",
  },
];

export default function CrownHairFaq(props: Partial<FaqQhtProps>) {
  return (
    <Faqqht
      titlePart1="FAQ’S for"
      titlePart2="Crown hair transplant"
      description="At RealDense, our care doesn't end after surgery. We provide complete post-operative support to ensure smooth recovery and long-lasting, natural results."
      faqs={crownHairFaqs}
      {...props}
    />
  );
}
