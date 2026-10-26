"use client";

import React from "react";
import Recoveryjourneryqht, {
  RecoveryjourneryQhtProps,
} from "@/components/QHT_pages/Recoveryjourneryqht";

export default function UltraRecovery(
  props: Partial<RecoveryjourneryQhtProps>
) {
  return (
    <Recoveryjourneryqht
      eyebrow="RECOVERY JOURNEY"
      titlePart1="Recovery Timeline & Aftercare of"
      titlePart2="Ultra Dense Hair"
      description="Learn about the aftercare and the recovery timeline for ensuring proper hair growth , optimum results and smooth healing."
      imageSrc="/Ultra_page_images/Recovery.webp"
      imageAlt="Recovery Timeline & Aftercare of Ultra Dense Hair"
      {...props}
    />
  );
}
