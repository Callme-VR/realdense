"use client";

import React from "react";
import HairRepairStepProcedure, {
  HairRepairStepItem,
  HairRepairStepProcedureProps,
} from "@/components/Hair_repair_pages/HairRepairStepProcedure";

const customHairStepItems: HairRepairStepItem[] = [
  {
    step: 1,
    title: "Avoid Smoking and Alcohol",
    description:
      "Avoid smoking and alcohol intake at least 7 days before surgery, which may alter the flow of blood and the healing process.",
  },
  {
    step: 2,
    title: "Blood Thinners",
    description:
      "If you're taking any blood-thinning medicines, the doctor may ask you to pause them for a few days to avoid extra bleeding during the procedure.",
  },
  {
    step: 3,
    title: "Wash Hair on Surgery Day",
    description:
      "On surgery day, wash your hair with a gentle shampoo to keep the scalp fresh and reduce infection chances.",
  },
  {
    step: 4,
    title: "Talk With Your Surgeon",
    description:
      "Consult with your surgeon thoroughly to make the final decision about the hairline design and density to make sure that it fits your requirements and isn't looking artificial.",
  },
];

export default function CustomHairStepProcedure(
  props: Partial<HairRepairStepProcedureProps>
) {
  return (
    <HairRepairStepProcedure
      eyebrow="STEP BY STEP"
      titleLine1="Procedure for"
      titleAccent="Male"
      titleLine2="Hair Transplant"
      description="Scheduling your procedure in advance can be one way of ensuring a smooth surgery and good results. These are the core steps to be taken by patients:"
      steps={customHairStepItems}
      {...props}
    />
  );
}

