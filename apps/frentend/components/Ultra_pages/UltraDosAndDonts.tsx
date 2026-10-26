"use client";

import React from "react";
import DosAndDontsQht, {
  DosAndDontsQhtProps,
  GuidelineItem,
} from "@/components/QHT_pages/DosAndDontsqht";

const ultraDontsList: GuidelineItem[] = [
  {
    title: "Avoid Pulling Hair",
    description: "Pulling can damage grafts and surrounding hair follicles.",
  },
  {
    title: "Avoid smoking and alcohol",
    description: "Smoking and alcohol may slow healing and hair growth.",
  },
  {
    title: "Avoid Styling Products",
    description: "Styling products may damage grafts and affect hair growth.",
  },
  {
    title: "Avoid Direct Sunlight",
    description: "Sunlight can irritate the scalp and affect graft healing.",
  },
];

const ultraDosList: GuidelineItem[] = [
  {
    title: "Maintain Hygiene",
    description: "Keep the scalp clean to reduce infection risks.",
  },
  {
    title: "Follow Scalp Care",
    description: "Use doctor-recommended disinfectants for proper healing.",
  },
  {
    title: "Wash Gently",
    description: "Use mild shampoo and avoid combing wet hair.",
  },
  {
    title: "Cover Your Head",
    description: "Cover your head to prevent burning and itching.",
  },
];

export default function UltraDosAndDonts(
  props: Partial<DosAndDontsQhtProps>
) {
  return (
    <DosAndDontsQht
      eyebrow="AFTERCARE GUIDE"
      titlePart1="Do's and Don'ts"
      titlePart2="After Hair Transplant"
      description="Follow these essential guidelines after your Ultra Dense hair transplant at RealDense to ensure proper healing, healthy growth and long-lasting results."
      donts={ultraDontsList}
      dos={ultraDosList}
      {...props}
    />
  );
}
