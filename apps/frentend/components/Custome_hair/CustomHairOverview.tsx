"use client";

import React from "react";
import OverviewQht, {
  OverviewBlockData,
  OverviewQhtProps,
} from "@/components/QHT_pages/Overviewqht";

const defaultBlock1: OverviewBlockData = {
  eyebrow: "OVERVIEW",
  titleLine1: "What is Hair",
  titleLine2: "Custom Hairline Transplant?",
  paragraphs: [
    "Custom hairline transplant is a medicalized form of hair restoration surgery, which is developed to form an age-realistic, natural-looking hairline that flows in harmony with your facial features. In contrast to generic transplant techniques, custom hairline targets your personal requirements; face shape, age, gender and future patterns of loss of your hair.",
  ],
  imageSrc: "/custom_hair_images/first.webp",
  imageAlt: "What is Hair Custom Hairline Transplant? - Precision surgical procedure",
};

const defaultBlock2: OverviewBlockData = {
  eyebrow: "IN INDIA",
  titleLine1: "Custom Hairline Transplant",
  titleLine2: "in India",
  paragraphs: [
    "A combination of low cost, highly qualified surgeons, and technology has made India one of the top locations to have custom hairline transplants. India is preferred by patients worldwide as a destination of choice to perform procedures that are affordable and at the same time of high quality.",
  ],
  imageSrc: "/custom_hair_images/second.webp",
  imageAlt: "Custom Hairline Transplant in India - Doctor consultation with patient",
};

export interface CustomHairOverviewProps extends Partial<OverviewQhtProps> {}

export default function CustomHairOverview({
  block1,
  block2,
}: CustomHairOverviewProps) {
  return (
    <OverviewQht
      block1={{ ...defaultBlock1, ...block1 }}
      block2={{ ...defaultBlock2, ...block2 }}
    />
  );
}

