"use client";

import React from "react";
import OurprocessQht from "@/components/QHT_pages/Ourprocessqht";

export interface HairRepairProcessStep {
  step: string;
  title: string;
  description: string;
  tagLine1: string;
  tagLine2: string;
}

export interface HairRepairProcessProps {
  eyebrow?: string;
  titleLine1?: string;
  titleLine2?: string;
  description?: string;
  stepsList?: HairRepairProcessStep[];
}

const hairRepairSteps: HairRepairProcessStep[] = [
  {
    step: "01",
    title: "Assessment.",
    description:
      "Evaluation of the previous transplant by the QHT Clinic team of experts.",
    tagLine1: "Consultation &",
    tagLine2: "Assessment",
  },
  {
    step: "02",
    title: "Grafts Correction",
    description:
      "The pluggy grafts are carefully extracted, and healthy new grafts are taken from the donor area.",
    tagLine1: "Graft",
    tagLine2: "Extraction",
  },
  {
    step: "03",
    title: "Redesigning the Hairline",
    description:
      "Experts at QHT Clinic work on a customised natural hairline by implanting grafts for a natural look.",
    tagLine1: "Natural",
    tagLine2: "Hairline",
  },
  {
    step: "04",
    title: "Recovery and Care",
    description:
      "Proper care after the surgery to reduce scars and for healthy regrowth through proper follow-ups.",
    tagLine1: "Recovery",
    tagLine2: "",
  },
];

export default function HairRepairProcess(props: HairRepairProcessProps) {
  return (
    <OurprocessQht
      eyebrow="OUR PROCESS"
      titleLine1="Procedure used in india"
      titleLine2="For Hair Transplant Repair"
      description="The procedure for a Failed Hair Transplant Correction mainly includes removing misplaced grafts and their re-implantation more naturally by experts."
      stepsList={hairRepairSteps}
      {...props}
    />
  );
}

