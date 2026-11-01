"use client";

import React from "react";
import OurprocessQht from "@/components/QHT_pages/Ourprocessqht";

export interface CrownHairProcessStep {
  step: string;
  title: string;
  description: string;
  tagLine1: string;
  tagLine2: string;
}

export interface CrownHairProcessProps {
  eyebrow?: string;
  titleLine1?: string;
  titleLine2?: string;
  description?: string;
  stepsList?: CrownHairProcessStep[];
  stat1Number?: string | number;
  stat1Text?: string;
  stat2Title?: string;
  stat2Text?: string;
}

const crownHairSteps: CrownHairProcessStep[] = [
  {
    step: "01",
    title: "Assessment.",
    description:
      "Evaluation of the previous transplant by the realdense Clinic team of experts.",
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
    title: "Grafts Preparation",
    description:
      "Healthy grafts are loaded into implanters, while others are preserved in a special solution.",
    tagLine1: "Healthy",
    tagLine2: "Grafts",
  },
  {
    step: "04",
    title: "Implantation in the Crown area",
    description:
      "Grafts are implanted along the crown’s natural spiral pattern for a realistic look.",
    tagLine1: "Implantation",
    tagLine2: "",
  },
];

export default function CrownHairProcess(props: CrownHairProcessProps) {
  return (
    <OurprocessQht
      eyebrow="OUR PROCESS"
      titleLine1="Procedure used in india"
      titleLine2="For Hair Transplant in India"
      description="The Hair Transplant at Crown area at our Clinic is performed with utmost precision to ensure permanent outcomes. The process comprises the following steps:"
      stepsList={crownHairSteps}
      stat1Number="4"
      stat1Text="Week Recovery"
      stat2Title="Minimal"
      stat2Text="Pain"
      {...props}
    />
  );
}
