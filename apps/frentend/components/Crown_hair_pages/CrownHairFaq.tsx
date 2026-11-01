"use client";

import React from "react";
import Faqqht, { FaqQhtProps, FAQItem } from "@/components/QHT_pages/Faqqht";

const crownHairFaqs: FAQItem[] = [
  {
    id: 1,
    question: "Why is a crown hair transplant considered challenging?",
    answer:
      "The crown has a complex spiral (whorl) growth pattern with varying follicle angles. Recreating this requires exceptional surgical skill to ensure the new hair blends invisibly with native hair.",
  },
  {
    id: 2,
    question: "How many grafts are typically needed for the crown?",
    answer:
      "Depending on the extent of thinning or baldness, a crown procedure generally requires between 1,500 and 3,500 grafts to achieve satisfying density and full coverage.",
  },
  {
    id: 3,
    question: "How long does it take to see full results in the crown area?",
    answer:
      "While initial growth is visible within 3 to 6 months, crown hair typically matures around 9 to 12 months post-procedure due to scalp circulation and circular hair direction.",
  },
  {
    id: 4,
    question: "Are crown hair transplant results permanent?",
    answer:
      "Yes. The hair follicles are harvested from the permanent, DHT-resistant donor zone at the back and sides of the scalp, ensuring lifelong growth.",
  },
  {
    id: 5,
    question: "Can I combine crown restoration with a hairline transplant?",
    answer:
      "Yes, if your donor area has sufficient graft density, our surgeons can design a treatment plan addressing both hairline recession and crown thinning.",
  },
];

export default function CrownHairFaq(props: Partial<FaqQhtProps>) {
  return (
    <Faqqht
      titlePart1="FAQ’S for"
      titlePart2="Crown hair transplant"
      description="At RealDense, our commitment extends well beyond the procedure. We provide structured aftercare and expert follow-up to support optimal crown hair density."
      faqs={crownHairFaqs}
      {...props}
    />
  );
}

