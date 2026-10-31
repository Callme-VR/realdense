"use client";

import React from "react";
import OverviewQht, {
  OverviewBlockData,
  OverviewQhtProps,
} from "@/components/QHT_pages/Overviewqht";

const defaultBlock1: OverviewBlockData = {
  eyebrow: "OVERVIEW",
  titleLine1: "What is No-Shave",
  titleLine2: "Hair Transplant ?",
  paragraphs: [
    "No-Shave Hair Transplant is an advanced method of restoring hair when a complete shave is not appropriate. Candidates for No-Shave Hair Transplant can maintain their current hairstyle using a specialised process.",
    "Our no-shave hair transplant at our Clinic offers patients very little downtime, privacy, and a discreet hair restoration program made to boost your confidence and provide convenience.",
  ],
  imageSrc: "/No_shave_images/first.webp",
  imageAlt: "What is No-Shave Hair Transplant ?",
};

const defaultBlock2: OverviewBlockData = {
  eyebrow: "IN INDIA",
  titleLine1: "Hair Transplant Repair",
  titleLine2: "in India",
  paragraphs: [
    "Unshaven Hair Transplant is gaining popularity in India, as it results in a very natural-looking outcome without making the hair transplant look obvious. The treatment is discreet- chosen by professionals or celebrities who want to avoid too much attention. Our Clinic employs the best technology and advanced techniques, along with maintaining affordability and accessibility.",
  ],
  imageSrc: "/No_shave_images/second.webp",
  imageAlt: "Hair Transplant Repair in India",
};

export interface NoShaveOverviewProps extends Partial<OverviewQhtProps> { }

export default function NoShaveOverview({
  block1,
  block2,
}: NoShaveOverviewProps) {
  return (
    <OverviewQht
      block1={{ ...defaultBlock1, ...block1 }}
      block2={{ ...defaultBlock2, ...block2 }}
    />
  );
}

