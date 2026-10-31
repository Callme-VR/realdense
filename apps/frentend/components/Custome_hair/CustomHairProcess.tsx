"use client";

import React, { ComponentProps } from "react";
import OurprocessQht from "@/components/QHT_pages/Ourprocessqht";

interface ProcessStep {
  step: string;
  title: string;
  description: string;
  tagLine1: string;
  tagLine2: string;
}

const customHairSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Consultation",
    description: "Assess hair, scalp, and facial features to plan treatment.",
    tagLine1: "Consultation",
    tagLine2: "",
  },
  {
    step: "02",
    title: "Hairline Design",
    description: "Create a natural hairline with precise graft placement.",
    tagLine1: "Hairline Design",
    tagLine2: "",
  },
  {
    step: "03",
    title: "Donor Extraction",
    description: "Extract healthy follicles from the donor area.",
    tagLine1: "Donor",
    tagLine2: "",
  },
  {
    step: "04",
    title: "Graft Preparation",
    description: "Clean, sort, and preserve extracted grafts.",
    tagLine1: "Grafts",
    tagLine2: "",
  },
  {
    step: "05",
    title: "Implantation",
    description: "Implant grafts precisely using SAVA implanters.",
    tagLine1: "Implantation",
    tagLine2: "",
  },
  {
    step: "06",
    title: "Aftercare",
    description: "Get complete guidance for recovery and graft care.",
    tagLine1: "Aftercare",
    tagLine2: "",
  },
];

export interface CustomHairProcessProps
  extends Partial<ComponentProps<typeof OurprocessQht>> { }

export default function CustomHairProcess(props: CustomHairProcessProps) {
  return (
    <OurprocessQht
      eyebrow="OUR PROCESS"
      titleLine1="Procedure used in india"
      titleLine2="For Hair Transplant in India"
      description="Male hair transplant involves assessment of the scalp followed by safer extraction with the usage of different hair techniques. The precision-guided implantation helps in faster recovery and significant hair growth."
      stepsList={customHairSteps}
      stat1Number="6"
      stat1Text="Week Recovery"
      stat2Title="Minimal"
      stat2Text="Pain"
      {...props}
    />
  );
}
