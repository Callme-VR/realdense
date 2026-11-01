"use client";

import React from "react";
import DosAndDontsQht, {
  DosAndDontsQhtProps,
  GuidelineItem,
} from "@/components/QHT_pages/DosAndDontsqht";

const crownHairDontsList: GuidelineItem[] = [
  {
    title: "Avoid Sun Exposure",
    description: "Protect your scalp from direct sunlight and UV rays.",
  },
  {
    title: "Skip Heavy Exercise",
    description: "Avoid strenuous activities and excessive sweating",
  },
  {
    title: "Don't Touch Grafts",
    description: "Avoid scratching or picking at the hairline",
  },
  {
    title: "Avoid Styling Products",
    description: "Skip gels, sprays, and dyes for 2–3 weeks.",
  },
];

const crownHairDosList: GuidelineItem[] = [
  {
    title: "Follow Instructions",
    description: "Follow your surgeon's aftercare advice.",
  },
  {
    title: "Keep Scalp Clean",
    description: "Wash gently as recommended.",
  },
  {
    title: "Eat Healthy",
    description: "Stay hydrated and eat nutritious food.",
  },
  {
    title: "Take Medication",
    description: "Use prescribed medicines to manage pain and prevent infection.",
  },
];

export default function CrownHairDosAndDonts(
  props: Partial<DosAndDontsQhtProps>
) {
  return (
    <DosAndDontsQht
      eyebrow="AFTERCARE GUIDE"
      titlePart1="Do's and Don'ts"
      titlePart2="Crown Hair Transplant"
      description="It is critical to observe the guidelines that ensure maximum healing and natural hair growth after hairline reconstruction at Realdense Clinic."
      donts={crownHairDontsList}
      dos={crownHairDosList}
      {...props}
    />
  );
}

