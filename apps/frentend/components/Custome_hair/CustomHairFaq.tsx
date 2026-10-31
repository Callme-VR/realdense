"use client";

import React from "react";
import Faqqht, { FaqQhtProps, FAQItem } from "@/components/QHT_pages/Faqqht";

const customHairFaqs: FAQItem[] = [
  {
    id: 1,
    question: "Is a custom hairline transplant painful?",
    answer:
      "Local anaesthesia minimises pain during the procedure. Mild discomfort may occur afterward.",
  },
  {
    id: 2,
    question: "How long does recovery take?",
    answer:
      "Most patients resume daily routines within 7 to 10 days, with complete graft healing within 2 to 3 weeks.",
  },
  {
    id: 3,
    question: "Is the hairline permanent?",
    answer:
      "Yes, the transplanted follicles are harvested from DHT-resistant donor areas, ensuring permanent, natural hair growth.",
  },
  {
    id: 4,
    question: "Will it look natural?",
    answer:
      "Yes, our surgeons artistically design the hairline considering your facial symmetry, age, and natural follicle angles.",
  },
  {
    id: 5,
    question: "What is the success rate?",
    answer:
      "With specialized techniques and experienced surgeons, RealDense achieves a graft survival success rate above 95%.",
  },
];

export default function CustomHairFaq(props: Partial<FaqQhtProps>) {
  return (
    <Faqqht
      titlePart1="FAQ’S for"
      titlePart2="Custom hairline transplant"
      description="At RealDense, our care doesn't end after surgery. We provide complete post-operative support to ensure smooth recovery and long-lasting, natural results."
      faqs={customHairFaqs}
      {...props}
    />
  );
}

