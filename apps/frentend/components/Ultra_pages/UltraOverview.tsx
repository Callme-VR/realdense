"use client";

import React from "react";
import OverviewQht, {
  OverviewBlockData,
  OverviewQhtProps,
} from "@/components/QHT_pages/Overviewqht";

const defaultBlock1: OverviewBlockData = {
  eyebrow: "OVERVIEW",
  titleLine1: "What is Ultra Dense",
  titleLine2: "Hair Transplant?",
  paragraphs: [
    "ULTRA DENSE HAIR TRANSPLANT is a hair restoration technique involving the implantation of the maximum number of hair grafts per square centimeter on the scalp that creates a natural, fuller-looking hair. Often, the natural density of the hair exceeds, and the hair looks highly voluminous and dense.",
    "Ultra-dense hair transplant is a minimally invasive procedure, and leaves minimal scarring on the scalp.",
  ],
  imageSrc: "/Ultra_page_images/first.webp",
  imageAlt: "What is Ultra Dense Hair Transplant - Doctor performing graft implantation",
};

const defaultBlock2: OverviewBlockData = {
  eyebrow: "IN INDIA",
  titleLine1: "Ultra Dense Hair Transplant",
  titleLine2: "in India",
  paragraphs: [
    "Every hair transplant aims at covering the bald spots. In an advanced hair density restoration procedure, the process targets implantation of the hair grafts closer together at maximum proximity to each other, thereby increasing the number of grafts per square centimeter.",
    "The grafts in the recipient area are placed extremely close to each other, mimicking high density.",
  ],
  imageSrc: "/Ultra_page_images/second.webp",
  imageAlt: "Ultra Dense Hair Transplant in India - Maximum proximity graft placement",
};

export interface UltraOverviewProps extends Partial<OverviewQhtProps> { }

export default function UltraOverview({
  block1,
  block2,
}: UltraOverviewProps) {
  return (
    <OverviewQht
      block1={{ ...defaultBlock1, ...block1 }}
      block2={{ ...defaultBlock2, ...block2 }}
    />
  );
}
