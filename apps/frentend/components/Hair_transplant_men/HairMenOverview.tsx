"use client";

import React from "react";
import OverviewQht, {
  OverviewBlockData,
  OverviewQhtProps,
} from "@/components/QHT_pages/Overviewqht";

const defaultBlock1: OverviewBlockData = {
  eyebrow: "OVERVIEW",
  titleLine1: "What is Hair",
  titleLine2: "Transplant for men?",
  paragraphs: [
    "A surgical procedure used for treating receding hairlines or baldness in men. Male pattern hair loss, also known as androgenetic alopecia, affects the temples and scalp, gradually causing hair loss and reduced density.",
    "Male hair transplant treatment has become a reliable option for those seeking to restore hair and confidence. Our Clinic offers the best affordable packages for male hair transplant procedure.",
  ],
  imageSrc: "/Hair_men_images/first.webp",
  imageAlt: "What is Hair Transplant for men? - Doctor designing hairline on patient scalp",
};

const defaultBlock2: OverviewBlockData = {
  eyebrow: "IN INDIA",
  titleLine1: "Male Hair Transplant",
  titleLine2: "in India",
  paragraphs: [
    "At Realdense, we offer affordable packages with long-lasting natural results. As it depends on several factors like the number of grafts used, geographical location of the clinic or the hospital, doctor's expertise, and the techniques used, there isn't a single cost bracket for all the cities. However, it can be estimated to be between Rs 25000 and Rs 1,50,000. The cost for the surgery may increase to cover larger bald patches. Here's a quick overview of the male hair transplant procedure.",
  ],
  imageSrc: "/Hair_men_images/second.webp",
  imageAlt: "Male Hair Transplant in India - Natural hair growth results",
};

export interface HairMenOverviewProps extends Partial<OverviewQhtProps> {}

export default function HairMenOverview({
  block1,
  block2,
}: HairMenOverviewProps) {
  return (
    <OverviewQht
      block1={{ ...defaultBlock1, ...block1 }}
      block2={{ ...defaultBlock2, ...block2 }}
    />
  );
}

