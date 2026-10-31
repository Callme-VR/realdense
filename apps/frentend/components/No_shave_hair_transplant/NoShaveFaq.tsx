"use client";

import React from "react";
import Faqqht, { FaqQhtProps, FAQItem } from "@/components/QHT_pages/Faqqht";

const noShaveFaqs: FAQItem[] = [
  {
    id: 1,
    question: "What is a No–Shave Hair Transplant?",
    answer:
      "A No–Shave Hair Transplant restores hair while keeping the recipient area and most existing hair unshaven for a discreet appearance.",
  },
  {
    id: 2,
    question: "How long recovery for an Unshaven Hair Transplant?",
    answer:
      "Recovery from an Unshaven Hair Transplant is fast, with most patients returning to routine social and work activities within 48 to 72 hours.",
  },
  {
    id: 3,
    question: "Is the No Shave Hair Transplant permanent?",
    answer:
      "Yes, the transplanted follicles are harvested from permanent, DHT-resistant donor areas, ensuring lifetime, natural hair growth.",
  },
];

export default function NoShaveFaq(props: Partial<FaqQhtProps>) {
  return (
    <Faqqht
      titlePart1="FAQ’S for"
      titlePart2="No Shave Hair Transplant"
      description="At RealDense, our care doesn't end after surgery. We provide complete post-operative support to ensure smooth recovery and long-lasting, natural results."
      faqs={noShaveFaqs}
      {...props}
    />
  );
}
