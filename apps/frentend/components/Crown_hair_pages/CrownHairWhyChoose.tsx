"use client";

import React from "react";
import OurProcess2Qht, {
  OurProcess2QhtProps,
} from "@/components/QHT_pages/OurProcess2qht";

export default function CrownHairWhyChoose(
  props: Partial<OurProcess2QhtProps>
) {
  return (
    <OurProcess2Qht
      eyebrow="OUR PROCESS"
      titleLine1="Why Choose RealDense for"
      titleLine2="Crown Hair Transplant"
      description="With over 15,000+ successful hair restoration procedures, RealDense specializes in intricate crown whorl reconstruction, delivering natural angles, seamless blending, and lifelong density."
      advantageTitle="The RealDense Advantage"
      advantageSubtitle="Our specialized surgical team, state-of-the-art tools, and tailored crown designs ensure natural whorl patterns and maximum graft survival."
      {...props}
    />
  );
}

