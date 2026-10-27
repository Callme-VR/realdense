"use client";

import React from "react";
import Recoveryjourneryqht, {
  RecoveryjourneryQhtProps,
} from "@/components/QHT_pages/Recoveryjourneryqht";

export default function FemaleRecovery(
  props: Partial<RecoveryjourneryQhtProps>
) {
  return (
    <Recoveryjourneryqht
      eyebrow="RECOVERY JOURNEY"
      titlePart1="Recovery Timeline & Aftercare of"
      titlePart2="Female Hair Transplant"
      description="Learn about the aftercare and the recovery timeline for ensuring proper hair growth, optimum results and smooth healing."
      imageSrc="/Female_pages_images/Recovery.webp"
      imageAlt="Recovery Timeline & Aftercare of Female Hair Transplant"
      {...props}
    />
  );
}
