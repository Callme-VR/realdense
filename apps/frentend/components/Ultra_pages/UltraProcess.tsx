"use client";

import React from "react";
import OurprocessQht from "@/components/QHT_pages/Ourprocessqht";

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  tagLine1: string;
  tagLine2: string;
}

export interface UltraProcessProps {
  eyebrow?: string;
  titleLine1?: string;
  titleLine2?: string;
  description?: string;
  stepsList?: ProcessStep[];
}

const ultraSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Prior Consultation",
    description:
      "A doctor assesses hair loss patterns, medical history, desired results, and suitable hair restoration methods.",
    tagLine1: "Consultation &",
    tagLine2: "Assessment",
  },
  {
    step: "02",
    title: "Assessment of the scalp",
    description:
      "It's important to assess the scalp to analyze the donor and the recipient area of the scalp for the procedure.",
    tagLine1: "Scalp",
    tagLine2: "Analysis",
  },
  {
    step: "03",
    title: "Hairline design",
    description:
      "Checking the natural angle of the hair follicles is essential in hair transplant procedures to ensure natural results.",
    tagLine1: "Natural Hair",
    tagLine2: "Angle",
  },
  {
    step: "04",
    title: "Guidelines for pre–transplant",
    description:
      "A doctor may tell you to avoid smoking, drinking alcohol, and certain medications like blood thinners to avoid the chances of hair follicle rejection.",
    tagLine1: "Pre-Procedure",
    tagLine2: "Precautions",
  },
];

export default function UltraProcess(props: UltraProcessProps) {
  return (
    <OurprocessQht
      eyebrow="OUR PROCESS"
      titleLine1="Procedure used in india"
      titleLine2="For male Hair Transplant"
      description="QHT Technique involves consultation and scalp assessment, creation of slits before the procedure, followed by extraction and implantation."
      stepsList={ultraSteps}
      {...props}
    />
  );
}
