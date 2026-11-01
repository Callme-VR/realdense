"use client";

import React from "react";
import Recoveryjourneryqht, {
  RecoveryjourneryQhtProps,
  TimelineStage,
} from "@/components/QHT_pages/Recoveryjourneryqht";

const crownHairStages: TimelineStage[] = [
  {
    id: "week-1",
    tabTitle: "Week 1",
    tabSubtitle: "Swelling & Care",
    whatToExpect: ["Mild redness and swelling in the donor and crown area."],
    howToCare: [
      "Sleep with your head elevated at a 45-degree angle.",
      "Take prescribed medications on time and avoid touching the crown.",
    ],
  },
  {
    id: "week-2",
    tabTitle: "Week 2",
    tabSubtitle: "Scab Formation",
    whatToExpect: [
      "Tiny scabs begin to form at the recipient crown sites as early healing starts.",
    ],
    howToCare: [
      "Do not pick, rub, or scratch at the scabs.",
      "Follow doctor's instructions for gentle head washing with lukewarm water.",
    ],
  },
  {
    id: "week-3",
    tabTitle: "Week 3",
    tabSubtitle: "Hair Shedding",
    whatToExpect: [
      "Transplanted hair shafts begin shedding, which is an expected shock-loss stage.",
    ],
    howToCare: [
      "Do not panic—the transplanted roots remain firmly anchored underneath.",
      "Continue using gentle, prescribed mild shampoo.",
    ],
  },
  {
    id: "week-4",
    tabTitle: "Week 4",
    tabSubtitle: "Scalp Cleared",
    whatToExpect: [
      "The scalp clears completely of scabs and redness subsides significantly.",
    ],
    howToCare: [
      "Gradually return to your normal routine.",
      "Protect your scalp from direct sun exposure with a loose hat.",
    ],
  },
  {
    id: "week-5",
    tabTitle: "Week 5+",
    tabSubtitle: "New Growth",
    whatToExpect: [
      "Fresh new hair follicles gradually begin to sprout in the crown whorl area.",
    ],
    howToCare: [
      "Maintain a balanced, nutrient-rich diet with essential vitamins.",
      "Stay hydrated and attend follow-up consultations with your surgeon.",
    ],
  },
];

export default function CrownHairRecovery(
  props: Partial<RecoveryjourneryQhtProps>
) {
  return (
    <Recoveryjourneryqht
      eyebrow="RECOVERY JOURNEY"
      titlePart1="Recovery Timeline & Aftercare of"
      titlePart2="Crown Hair Transplant"
      description="Understand the recovery timeline and essential aftercare tips for ensuring proper hair growth, optimum crown density, and smooth healing."
      imageSrc="/Crown_hair_images/recovery.webp"
      imageAlt="Recovery Timeline & Aftercare of Crown Hair Transplant"
      stages={crownHairStages}
      {...props}
    />
  );
}

