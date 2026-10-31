"use client";

import React from "react";
import DosAndDontsQht, {
  DosAndDontsQhtProps,
  GuidelineItem,
} from "@/components/QHT_pages/DosAndDontsqht";

const noShaveDontsList: GuidelineItem[] = [
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
];

const noShaveDosList: GuidelineItem[] = [
  {
    title: "Medication",
    description:
      "Take prescribed medications on time to reduce swelling and infection risk.",
  },
  {
    title: "Follow - up",
    description: "Attend all follow-up appointments for progress monitoring.",
  },
  {
    title: "Scalp Wash",
    description: "Clean scalp properly and wash on time",
  },
  {
    title: "Elevated Head",
    description: "Sleep with an elevated head",
  },
];

export default function NoShaveDosAndDonts(
  props: Partial<DosAndDontsQhtProps>
) {
  return (
    <DosAndDontsQht
      eyebrow="AFTERCARE GUIDE"
      titlePart1="Do's and Don'ts"
      titlePart2="After Hair Transplant"
      description="Following the right do's and don'ts after a Unshaven Hair Transplant is essential for smooth recovery and long-lasting results."
      donts={noShaveDontsList}
      dos={noShaveDosList}
      {...props}
    />
  );
}
