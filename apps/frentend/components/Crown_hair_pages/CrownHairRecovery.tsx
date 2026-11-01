"use client";

import React from "react";
import Recoveryjourneryqht, {
  RecoveryjourneryQhtProps,
  TimelineStage,
} from "@/components/QHT_pages/Recoveryjourneryqht";

const crownHairStages: TimelineStage[] = [
  {
    id: "week-1-2",
    tabTitle: "Week 1–2",
    tabSubtitle: "Swelling",
    whatToExpect: ["Redness , swelling , Sensitivity"],
    howToCare: [
      "Head elevated and follow postoperative instructions religiously.",
      "Routine to be followed, no scratching.",
    ],
  },
  {
    id: "week-2-6",
    tabTitle: "Week 2–6",
    tabSubtitle: "Scabs fall off",
    whatToExpect: [
      "Scabs begin falling off naturally as early healing stabilizes.",
    ],
    howToCare: [
      "Gentle wash routine as advised, no picking scabs.",
      "Protect scalp from dust and harsh sunlight.",
    ],
  },
  {
    id: "week-3-12-month",
    tabTitle: "Week 3–12 month",
    tabSubtitle: "New hair",
    whatToExpect: [
      "Fresh hair roots sprout along the natural crown whorl.",
    ],
    howToCare: [
      "Maintain a balanced, nutrient-rich diet.",
      "Stay hydrated and avoid harsh chemical styling.",
    ],
  },
  {
    id: "after-1-year",
    tabTitle: "After 1 year",
    tabSubtitle: "Improvements",
    whatToExpect: [
      "Maximum density achieved with natural-looking spiral blending.",
    ],
    howToCare: [
      "Follow standard hair care and enjoy permanent crown results.",
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
      description="Understand the recovery timeline and essential aftercare tips for a quicker recovery after a Crown Hair Transplant"
      imageSrc="/Crown_hair_images/first.webp"
      imageAlt="Recovery Timeline & Aftercare of Crown Hair Transplant"
      stages={crownHairStages}
      {...props}
    />
  );
}
