"use client";

import React from "react";
import DosAndDontsQht, {
  DosAndDontsQhtProps,
  GuidelineItem,
} from "@/components/QHT_pages/DosAndDontsqht";

const femaleDontsList: GuidelineItem[] = [
  {
    title: "Avoid Touching Grafts",
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
    title: "Avoid Tight Headwear",
    description: "Avoid tight caps or helmets that put pressure on grafts.",
  },
];

const femaleDosList: GuidelineItem[] = [
  {
    title: "Follow Doctor's Instructions",
    description: "Follow all post-procedure guidance from your surgeon.",
  },
  {
    title: "Elevate Your Head",
    description: "Sleep with your head raised to help reduce swelling.",
  },
  {
    title: "Use Prescribed Products",
    description: "Use only prescribed medicines and shampoos.",
  },
  {
    title: "Wash Gently",
    description: "Clean your scalp carefully as directed by your doctor.",
  },
  {
    title: "Stay Hydrated",
    description: "Drink enough water and eat a protein-rich diet.",
  },
];

export default function FemaleDosAndDonts(
  props: Partial<DosAndDontsQhtProps>
) {
  return (
    <DosAndDontsQht
      eyebrow="AFTERCARE GUIDE"
      titlePart1="Do's and Don'ts"
      titlePart2="After Hair Transplant"
      description="Following the right do's and don'ts after a female hair transplant is essential for smooth recovery and long-lasting results."
      donts={femaleDontsList}
      dos={femaleDosList}
      {...props}
    />
  );
}
