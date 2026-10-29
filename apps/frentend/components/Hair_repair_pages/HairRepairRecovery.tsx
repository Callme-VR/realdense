"use client";

import React from "react";
import Recoveryjourneryqht, {
  RecoveryjourneryQhtProps,
  TimelineStage,
} from "@/components/QHT_pages/Recoveryjourneryqht";

const hairRepairStages: TimelineStage[] = [
  {
    id: "week-1",
    tabTitle: "Week 1",
    tabSubtitle: "Swelling",
    whatToExpect: ["Redness & swelling of the donor area."],
    howToCare: [
      "Sleep with your head elevated.",
      "Take prescribed medications for pain relief.",
    ],
  },
  {
    id: "week-2",
    tabTitle: "Week 2",
    tabSubtitle: "Scab Formation",
    whatToExpect: [
      "Scabs begin to form at the recipient sites as early healing starts.",
    ],
    howToCare: [
      "Avoid picking or scratching at the scabs.",
      "Follow doctor's instructions for gentle washes.",
    ],
  },
  {
    id: "week-3",
    tabTitle: "Week 3",
    tabSubtitle: "Hair Shedding",
    whatToExpect: [
      "Transplanted hair shafts shed naturally, which is a normal part of recovery.",
    ],
    howToCare: [
      "Do not panic, healthy roots remain intact under the scalp.",
      "Use prescribed mild shampoo only.",
    ],
  },
  {
    id: "week-4",
    tabTitle: "Week 4",
    tabSubtitle: "Scalp Cleaner",
    whatToExpect: [
      "Scalp clears of scabs and redness significantly subsides.",
    ],
    howToCare: [
      "Resume normal gentle cleansing routine.",
      "Protect your scalp from harsh sunlight.",
    ],
  },
  {
    id: "week-5",
    tabTitle: "Week 5",
    tabSubtitle: "New Hair Growth",
    whatToExpect: [
      "Fresh new hair follicles gradually begin to sprout from repaired grafts.",
    ],
    howToCare: [
      "Maintain a balanced, nutrient-rich diet.",
      "Stay hydrated and attend follow-up consultations.",
    ],
  },
];

export default function HairRepairRecovery(
  props: Partial<RecoveryjourneryQhtProps>
) {
  return (
    <Recoveryjourneryqht
      eyebrow="RECOVERY JOURNEY"
      titlePart1="Recovery Timeline & Aftercare of"
      titlePart2="Hair Transplant Repair"
      description="Understand the recovery timeline and essential aftercare tips for a quicker recovery after a hair transplant repair."
      imageSrc="/Hair_repair_pages/Recovery.webp"
      imageAlt="Recovery Timeline & Aftercare of Hair Transplant Repair"
      stages={hairRepairStages}
      {...props}
    />
  );
}

