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
}

const crownHairSteps: CrownHairProcessStep[] = [
  {
    step: "01",
    title: "Consultation & Assessment",
    description:
      "Comprehensive scalp analysis to evaluate crown thinning patterns, whorl direction, and donor graft availability.",
    tagLine1: "Consultation &",
    tagLine2: "Assessment",
  },
  {
    step: "02",
    title: "Spiral Pattern Design",
    description:
      "Artistic mapping of the natural crown whorl pattern, ensuring correct angle and orientation for every transplanted graft.",
    tagLine1: "Spiral Angle",
    tagLine2: "Design",
  },
  {
    step: "03",
    title: "Precision Graft Extraction",
    description:
      "DHT-resistant follicular units are extracted carefully from the donor area with minimal tissue trauma.",
    tagLine1: "Graft",
    tagLine2: "Extraction",
  },
  {
    step: "04",
    title: "Crown Implantation & Care",
    description:
      "Dense, natural implantation aligned with the natural crown spiral, backed by structured follow-up support.",
    tagLine1: "Implantation &",
    tagLine2: "Care",
  },
];

export default function CrownHairProcess(props: CrownHairProcessProps) {
  return (
    <OurprocessQht
      eyebrow="OUR PROCESS"
      titleLine1="Procedure used in India"
      titleLine2="For Crown Hair Transplant"
      description="The procedure for crown hair transplant requires meticulous planning to recreate the natural circular spiral (whorl) pattern with maximum density."
      stepsList={crownHairSteps}
      {...props}
    />
  );
}

