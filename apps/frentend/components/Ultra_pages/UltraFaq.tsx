"use client";

import React from "react";
import Faqqht, { FaqQhtProps, FAQItem } from "@/components/QHT_pages/Faqqht";

const ultraFaqs: FAQItem[] = [
  {
    id: 1,
    question: "What is ultra-dense hair transplantation technique?",
    answer:
      "Ultra-dense hair transplantation is an advanced technique that implants a high number of hair grafts with precision to achieve fuller, denser, natural-looking hair.",
  },
  {
    id: 2,
    question: "Are you a suitable candidate for an ultra hair transplant?",
    answer:
      "Suitable candidates include individuals with adequate donor hair density who seek maximum volume and natural coverage for thinning or bald areas.",
  },
  {
    id: 3,
    question: "Do women opt for an ultra hair transplant?",
    answer:
      "Yes, women experiencing female pattern hair thinning or seeking hairline lowering and volume enhancement can benefit from ultra-dense hair transplantation.",
  },
  {
    id: 4,
    question: "Is ultra dense hair transplant technique painfull?",
    answer:
      "No, the procedure is carried out under local anaesthesia, ensuring minimal pain and mild discomfort during extraction and graft implantation.",
  },
  {
    id: 5,
    question: "Are the results permanent?",
    answer:
      "Yes, transplanted follicles are typically harvested from DHT-resistant donor areas, ensuring long-lasting and natural hair growth for life.",
  },
  {
    id: 6,
    question: "Is ultra dense hair transplant affordable?",
    answer:
      "Yes, RealDense offers flexible, transparent, and affordable pricing plans tailored to the required graft count and individual treatment goals.",
  },
];

export default function UltraFaq(props: Partial<FaqQhtProps>) {
  return (
    <Faqqht
      titlePart1="FAQ’S for"
      titlePart2="Ultra Dense Hair Transplant"
      description="At RealDense, our care doesn't end after surgery. We provide complete post-operative support to ensure smooth recovery and long-lasting, natural results."
      faqs={ultraFaqs}
      {...props}
    />
  );
}
