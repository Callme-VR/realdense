"use client";

import React from "react";
import Faqqht, { FaqQhtProps, FAQItem } from "@/components/QHT_pages/Faqqht";

const femaleFaqs: FAQItem[] = [
  {
    id: 1,
    question: "What is better for females – FUE or FUT",
    answer:
      "FUE is often preferred for minimal scarring, while FUT may suit women needing more grafts. The best choice depends on individual needs.",
  },
  {
    id: 2,
    question: "Is a robotic hair transplant effective than a manual one?",
    answer:
      "Robotic hair transplants offer high precision in graft extraction, but manual techniques guided by experienced surgeons provide superior artistry, natural hairline design, and gentler handling tailored to female hair.",
  },
  {
    id: 3,
    question: "Which method does not hurt as much?",
    answer:
      "Both FUE and QHT procedures are performed under local anaesthesia and cause minimal discomfort. Most women experience very little pain during the procedure and only mild soreness during early recovery.",
  },
  {
    id: 4,
    question: "Which approach is the most natural?",
    answer:
      "QHT and micro-FUE offer the most natural appearance because follicles are transplanted at the exact natural angle, direction, and depth tailored to female hair growth patterns.",
  },
  {
    id: 5,
    question: "Which is the quicker recovery procedure?",
    answer:
      "FUE and QHT have significantly faster recovery times than traditional strip FUT, allowing most patients to resume everyday activities within 7 to 10 days with minimal visible downtime.",
  },
];

export default function FemaleFaq(props: Partial<FaqQhtProps>) {
  return (
    <Faqqht
      titlePart1="FAQ’S for"
      titlePart2="Ultra Dense Hair Transplant"
      description="At RealDense, our care doesn't end after surgery. We provide complete post-operative support to ensure smooth recovery and long-lasting, natural results."
      faqs={femaleFaqs}
      {...props}
    />
  );
}
