"use client";

import React from "react";
import OverviewQht, {
  OverviewBlockData,
  OverviewQhtProps,
} from "@/components/QHT_pages/Overviewqht";

const defaultBlock1: OverviewBlockData = {
  eyebrow: "OVERVIEW",
  titleLine1: "What is Hair",
  titleLine2: "Transplant Repair?",
  paragraphs: [
    "Hair Transplant Repair is a procedure that can be used to correct the results of a hair transplant that has not been successful. It helps restore hairline and density, as well as conceal scars caused by earlier procedures.",
    "Our experts use advanced techniques and treatment is centered on nurturing natural growth, avoiding complications, and for long-lasting results.",
  ],
  imageSrc: "/Hair_repair_pages/first.webp",
  imageAlt: "What is Hair Transplant Repair - Restoring hairline and density",
};

const defaultBlock2: OverviewBlockData = {
  eyebrow: "IN INDIA",
  titleLine1: "Hair Transplant Repair",
  titleLine2: "in India",
  paragraphs: [
    "Failed Hair transplants are prevalent due to unskilled surgeons, leading to unfavourable results. In India, the Failed Hair Transplant Correction is performed by experts using our own Quick Hair Transplant method. Because of such skilled surgeons that we have.",
  ],
  imageSrc: "/Hair_repair_pages/second.webp",
  imageAlt: "Hair Transplant Repair in India - Expert correction with natural results",
};

export interface HairRepairOverviewProps extends Partial<OverviewQhtProps> {}

export default function HairRepairOverview({
  block1,
  block2,
}: HairRepairOverviewProps) {
  return (
    <OverviewQht
      block1={{ ...defaultBlock1, ...block1 }}
      block2={{ ...defaultBlock2, ...block2 }}
    />
  );
}

