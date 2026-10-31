"use client";

import React from "react";
import Recoveryjourneryqht, {
  RecoveryjourneryQhtProps,
  TimelineStage,
} from "@/components/QHT_pages/Recoveryjourneryqht";

const customHairStages: TimelineStage[] = [
  {
    id: "week-1",
    tabTitle: "Week 1",
    tabSubtitle: "Swelling",
    whatToExpect: [
      "Scalp swelling, redness (erythema), and scabbing around the hairline are common.",
    ],
    howToCare: [
      "Keep the scalp clean with mild washing as advised, avoid scratching, and sleep with your head elevated to reduce swelling.",
    ],
  },
  {
    id: "week-2",
    tabTitle: "Week 2",
    tabSubtitle: "Scabs fall off",
    whatToExpect: [
      "Scabs around the hairline begin to naturally loosen and shed during gentle washes.",
    ],
    howToCare: [
      "Continue gentle washing with recommended shampoo; do not pick or scratch at scabs.",
    ],
  },
  {
    id: "week-3",
    tabTitle: "Week 3",
    tabSubtitle: "Hair shed",
    whatToExpect: [
      "Transplanted hair shafts temporarily shed (shock loss). Root follicles remain securely anchored.",
    ],
    howToCare: [
      "Do not worry as shedding is part of the natural cycle. Avoid harsh styling products.",
    ],
  },
  {
    id: "week-4",
    tabTitle: "Week 4",
    tabSubtitle: "Healing",
    whatToExpect: [
      "Scalp redness fades and donor and recipient areas heal significantly.",
    ],
    howToCare: [
      "Resume light exercise, protect scalp from direct UV exposure, and stay hydrated.",
    ],
  },
  {
    id: "week-5",
    tabTitle: "Week 5+",
    tabSubtitle: "New Hair",
    whatToExpect: [
      "Fine, healthy new hair begins to emerge from the custom hairline.",
    ],
    howToCare: [
      "Maintain balanced nutrition and attend routine clinic follow-up appointments.",
    ],
  },
];

export default function CustomHairRecovery(
  props: Partial<RecoveryjourneryQhtProps>
) {
  return (
    <Recoveryjourneryqht
      eyebrow="RECOVERY JOURNEY"
      titlePart1="Recovery Timeline & Aftercare of"
      titlePart2="Custom hairline transplant"
      description="Understand the recovery timeline and essential aftercare tips for a quicker recovery after a Male Hair Transplant"
      imageSrc="/custom_hair_images/first.webp"
      imageAlt="Recovery Timeline & Aftercare of Custom hairline transplant"
      stages={customHairStages}
      {...props}
    />
  );
}
