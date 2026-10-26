"use client";

import React from "react";
import IdealCandidateQht, {
  IdealCandidateQhtProps,
} from "@/components/QHT_pages/IdealCandidateqht";

const defaultCards = [
  {
    step: "01",
    title: "High-grade baldness",
    description:
      "High-grade baldness leads to scalp visibility and reduced hair density. This technique can help in restoring hair density.",
  },
  {
    step: "02",
    title: "Hair thinning",
    description:
      "People experiencing hair thinning can be ideal candidates to undergo the procedure.",
  },
  {
    step: "03",
    title: "Autoimmune diseases",
    description:
      "Hashimoto’s disease, Graves’ disease, or scalp psoriasis may cause significant hair loss.",
  },
  {
    step: "04",
    title: "Low density",
    description:
      "Someone born with naturally low-density hair but experiencing a noticeable scalp visibility with age.",
  },
];

export default function UltraIdealCandidate(
  props: Partial<IdealCandidateQhtProps>
) {
  return (
    <IdealCandidateQht
      eyebrow="IDEAL CANDIDATES"
      titleLine1="Who is an Ideal Candidate for"
      titleLine2="Ultra Dense Hair Transplant?"
      subtitle="Someone experiencing higher-grade baldness i.e grade 2 or higher , hair thinning, low-density hair, or certain autoimmune conditions is a suitable candidate for the full coverage hair transplant."
      cards={defaultCards}
      {...props}
    />
  );
}
