"use client";

import React from "react";
import Faqqht, { FaqQhtProps, FAQItem } from "@/components/QHT_pages/Faqqht";

const hairRepairFaqs: FAQItem[] = [
  {
    id: 1,
    question: "Is Hair Transplant Repair painful?",
    answer:
      "Local anaesthesia helps minimise pain during hair transplant repair, though mild discomfort may occur during recovery.",
  },
  {
    id: 2,
    question: "How long does Hair Transplant Repair last?",
    answer:
      "Hair transplant repair results are permanent. The relocated hair follicles are genetically resistant to thinning and will continue to grow naturally for a lifetime.",
  },
  {
    id: 3,
    question: "Can failed hair transplants be corrected completely?",
    answer:
      "Yes, experienced specialists can extract poorly placed, wrongly angled or pluggy grafts, soften an unnatural hairline, and restore natural density and direction.",
  },
  {
    id: 4,
    question: "How is QHT better for corrective hair transplant?",
    answer:
      "QHT utilizes micro-punches and high-magnification implanters that protect follicle integrity, reduce trauma to already scarred recipient sites, and deliver refined, natural-looking results.",
  },
];

export default function HairRepairFaq(props: Partial<FaqQhtProps>) {
  return (
    <Faqqht
      titlePart1="FAQ’S for"
      titlePart2="Hair Transplant Repair"
      description="At RealDense, our care doesn't end after surgery. We provide complete post-operative support to ensure smooth recovery and long-lasting, natural results."
      faqs={hairRepairFaqs}
      {...props}
    />
  );
}

