"use client";

import React from "react";
import Recoveryjourneryqht, {
  RecoveryjourneryQhtProps,
  TimelineStage,
} from "@/components/QHT_pages/Recoveryjourneryqht";

const hairMenStages: TimelineStage[] = [
  {
    id: "week-1",
    tabTitle: "Week 1",
    tabSubtitle: "Swelling",
    whatToExpect: ["Mild redness, swelling, small scabs, and tenderness."],
    howToCare: [
      "Adhere to medications, avoid touching/scratching, gently clean scalp, sleep with head elevated.",
    ],
  },
  {
    id: "week-2",
    tabTitle: "Week 2",
    tabSubtitle: "Scab Formation",
    whatToExpect: [
      "Scabs begin to loosen and fall off naturally as initial graft anchor completes.",
    ],
    howToCare: [
      "Follow doctor's instructions for gentle washes. Never scratch or force scabs off.",
    ],
  },
  {
    id: "week-3",
    tabTitle: "Week 3–4",
    tabSubtitle: "Hair Shedding",
    whatToExpect: [
      "Shock loss occurs where transplanted hair shafts shed naturally. Roots remain safe.",
    ],
    howToCare: [
      "Do not panic, healthy roots remain intact under the scalp. Use prescribed mild shampoo.",
    ],
  },
  {
    id: "week-5",
    tabTitle: "Week 5",
    tabSubtitle: "New Hair",
    whatToExpect: [
      "Fine new hair growth begins to emerge from dormant follicles.",
    ],
    howToCare: [
      "Maintain a nutrient-rich diet, stay hydrated, and attend scheduled follow-ups.",
    ],
  },
  {
    id: "week-6",
    tabTitle: "Week 6",
    tabSubtitle: "Natural Look",
    whatToExpect: [
      "Visible thickening, density improvement, and natural follicle orientation.",
    ],
    howToCare: [
      "Resume normal grooming routines and protect the scalp from direct UV exposure.",
    ],
  },
];

export default function HairMenRecovery(
  props: Partial<RecoveryjourneryQhtProps>
) {
  return (
    <Recoveryjourneryqht
      eyebrow="RECOVERY JOURNEY"
      titlePart1="Recovery Timeline & Aftercare of"
      titlePart2="Male Hair Transplant"
      description="Understand the recovery timeline and essential aftercare tips for a quicker recovery after a male hair transplant."
      imageSrc="/Hair_men_images/recovery.webp"
      imageAlt="Recovery Timeline & Aftercare of Male Hair Transplant"
      stages={hairMenStages}
      {...props}
    />
  );
}

