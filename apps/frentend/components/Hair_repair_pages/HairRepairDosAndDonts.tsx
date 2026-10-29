"use client";

import React from "react";
import DosAndDontsQht, {
  DosAndDontsQhtProps,
  GuidelineItem,
} from "@/components/QHT_pages/DosAndDontsqht";

const hairRepairDontsList: GuidelineItem[] = [
  {
    title: "Avoid Scratch or Rub",
    description: "Do not touch, scratch, or rub the treated area.",
  },
  {
    title: "Avoid smoking and alcohol",
    description: "These can affect graft survival and healing.",
  },
  {
    title: "Avoid Strenuous Activity",
    description:
      "Skip swimming, heavy exercise, and excessive sweating for two weeks.",
  },
  {
    title: "Avoid Direct Sunlight",
    description: "Protect your scalp from sunlight and dust during early healing.",
  },
  {
    title: "Avoid Harsh products",
    description: "Avoid using harsh hair products.",
  },
  {
    title: "Attend Therapy",
    description: "Do not skip therapy sessions",
  },
];

const hairRepairDosList: GuidelineItem[] = [
  {
    title: "Follow Doctor's Instructions",
    description: "Follow all post-procedure guidance from your surgeon.",
  },
  {
    title: "Scalp Wash",
    description: "Clean scalp properly and wash on time",
  },
  {
    title: "Eat Balanced Food",
    description: "Eat a balanced, nutritious diet",
  },
  {
    title: "Elevated Head",
    description: "Sleep with an elevated head",
  },
  {
    title: "Hair Clean",
    description: "Wash hair gently at the advised time",
  },
  {
    title: "Stay Hydrated",
    description: "Drink water more and more in a day",
  },
];

export default function HairRepairDosAndDonts(
  props: Partial<DosAndDontsQhtProps>
) {
  return (
    <DosAndDontsQht
      eyebrow="AFTERCARE GUIDE"
      titlePart1="Do's and Don'ts"
      titlePart2="After Hair Transplant"
      description="Following the right do's and don'ts after a hair transplant repair is essential for smooth recovery and long-lasting results."
      donts={hairRepairDontsList}
      dos={hairRepairDosList}
      {...props}
    />
  );
}

