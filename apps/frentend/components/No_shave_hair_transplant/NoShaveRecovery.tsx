"use client";

import React from "react";
import Recoveryjourneryqht, {
  RecoveryjourneryQhtProps,
  TimelineStage,
} from "@/components/QHT_pages/Recoveryjourneryqht";

const noShaveStages: TimelineStage[] = [
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
    tabSubtitle: "Hair Shedding",
    whatToExpect: ["Hair shaft may shed, normal healing process."],
    howToCare: [
      "Gentle washing, avoid rubbing transplanted area, avoid scalp pressure, eat a healthy diet.",
    ],
  },
  {
    id: "week-3-4",
    tabTitle: "Week 3–4",
    tabSubtitle: "Scalp happy",
    whatToExpect: [
      "Grafts settle, no redness, minimal sensitivity, scalp feels healthier.",
    ],
    howToCare: ["Avoid sunlight and wear a hat", "Use mild shampoo"],
  },
  {
    id: "week-5",
    tabTitle: "Week 5",
    tabSubtitle: "New Hair",
    whatToExpect: [
      'Tiny new hairs or "hair shaves" appear in transplanted area.',
    ],
    howToCare: [
      "Gentle hair care, avoid chemicals, no salon/bleaching, avoid excessive heat styling",
    ],
  },
  {
    id: "week-6",
    tabTitle: "Week 6",
    tabSubtitle: "Natural Look",
    whatToExpect: [
      "Consistent regrowth, blending with existing hair, fuller and natural look",
    ],
    howToCare: [
      "Regular follow-ups, continue protective care, maintain a balanced diet for long-term outcomes",
    ],
  },
];

export default function NoShaveRecovery(
  props: Partial<RecoveryjourneryQhtProps>
) {
  return (
    <Recoveryjourneryqht
      eyebrow="RECOVERY JOURNEY"
      titlePart1="Recovery Timeline & Aftercare of"
      titlePart2="Unshaven Hair Transplant"
      description="Understand the recovery timeline and essential aftercare tips for a quicker recovery after a crown hair transplant."
      imageSrc="/No_shave_images/recovery.webp"
      imageAlt="Recovery Timeline and Aftercare of Unshaven Hair Transplant"
      stages={noShaveStages}
      {...props}
    />
  );
}
