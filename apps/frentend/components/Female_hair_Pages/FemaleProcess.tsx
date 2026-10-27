"use client";

import React from "react";
import OurprocessQht from "@/components/QHT_pages/Ourprocessqht";

export interface FemaleProcessStep {
  step: string;
  title: string;
  description: string;
  tagLine1: string;
  tagLine2: string;
}

export interface FemaleProcessProps {
  eyebrow?: string;
  titleLine1?: string;
  titleLine2?: string;
  description?: string;
  stepsList?: FemaleProcessStep[];
}

const femaleSteps: FemaleProcessStep[] = [
  {
    step: "01",
    title: "Consultation and Assessment.",
    description:
      "Hair loss pattern, donor area, and general health are evaluated in detail to create a unique treatment program.",
    tagLine1: "Consultation &",
    tagLine2: "Assessment",
  },
  {
    step: "02",
    title: "Donor Hair Extraction",
    description:
      "Advanced techniques such as FUE or FUT are then used to extract healthy follicles either in the back or sides of the scalp.",
    tagLine1: "Hair",
    tagLine2: "Extraction",
  },
  {
    step: "03",
    title: "Graft Preparation",
    description:
      "Preparation of the extracted follicles is done under magnification to maximize survival and natural implantation.",
    tagLine1: "Extract",
    tagLine2: "Follicles",
  },
  {
    step: "04",
    title: "Implantation and Recovery.",
    description:
      "The implantation of follicles into the thinned regions is made at the right angle and direction and then guided towards the normal healing and development.",
    tagLine1: "Recovery",
    tagLine2: "",
  },
];

export default function FemaleProcess(props: FemaleProcessProps) {
  return (
    <OurprocessQht
      eyebrow="OUR PROCESS"
      titleLine1="Procedure used in india"
      titleLine2="For female Hair Transplant"
      description="Indian female hair transplant procedure is carried out with accuracy and caution and guarantees natural growth and permanent outcome."
      stepsList={femaleSteps}
      {...props}
    />
  );
}
