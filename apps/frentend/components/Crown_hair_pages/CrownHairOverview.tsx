"use client";

import React from "react";
import OverviewQht, {
  OverviewBlockData,
  OverviewQhtProps,
} from "@/components/QHT_pages/Overviewqht";

const defaultBlock1: OverviewBlockData = {
  eyebrow: "OVERVIEW",
  titleLine1: "What is Hair",
  titleLine2: "Crown Hair Transplant?",
  paragraphs: [
    "A crown hair transplant restores hair density in the bald region or spots with thinner hair at the back of the scalp, also called the crown. As the crown has a spiral type of hair growth and usually encounters early hair loss. the hair restoration procedure at this site needs planning, precise techniques, and expert intervention. At QHT Clinic, experts study the level of baldness and expected hair loss to create a natural crown design for long-term",
  ],
  imageSrc: "/Crown_hair_images/first.webp",
  imageAlt: "What is Hair Crown Hair Transplant? - Overview and doctor procedure",
};

const defaultBlock2: OverviewBlockData = {
  eyebrow: "IN INDIA",
  titleLine1: "Crown Hair Transplant",
  titleLine2: "in India",
  paragraphs: [
    "Crown hair transplant in India is a trusted fix for patients who have encountered thinning or balding at the crown region of the scalp. At our Clinic, Modern technology and techniques like realdense , along with density rectification, are used to treat diminished hair growth and realistic spirals in the crown area. Realdense Clinic’s aptitude and affordability make it a favored destination for crown hair transplant procedures.",
  ],
  imageSrc: "/Crown_hair_images/second.webp",
  imageAlt: "Crown Hair Transplant in India - Doctor consultation and results",
};

export interface CrownHairOverviewProps extends Partial<OverviewQhtProps> {}

export default function CrownHairOverview({
  block1,
  block2,
}: CrownHairOverviewProps) {
  return (
    <OverviewQht
      block1={{ ...defaultBlock1, ...block1 }}
      block2={{ ...defaultBlock2, ...block2 }}
    />
  );
}

