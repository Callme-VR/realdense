"use client";

import React from "react";
import PatientResultsQht, {
  PatientResultsQhtProps,
} from "@/components/QHT_pages/PatientResultsqht";

export default function HairMenPatientResults(
  props: Partial<PatientResultsQhtProps>
) {
  return (
    <PatientResultsQht
      eyebrow="PATIENT RESULTS"
      titleLine1="Results of"
      titleLine2="Male Hair Transplant"
      description="The results are usually permanent with less chance of balding as DHT-resistant hair follicles are transplanted. Within 3–6 months post-procedure, the results are more noticeable, making it the best full coverage hair transplant procedure."
      {...props}
    />
  );
}

