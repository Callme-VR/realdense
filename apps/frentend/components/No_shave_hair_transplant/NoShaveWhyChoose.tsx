"use client";

import React from "react";
import OurProcess2Qht, {
  OurProcess2QhtProps,
} from "@/components/QHT_pages/OurProcess2qht";

export default function NoShaveWhyChoose(
  props: Partial<OurProcess2QhtProps>
) {
  return (
    <OurProcess2Qht
      eyebrow="OUR PROCESS"
      titleLine1="Why Choose RealDense for"
      titleLine2="Female hair transplant"
      description="With over 15,000+ surgical procedures, RealDense has earned a reputation as one of the best hair transplant clinics in India. With a dedicated in-house surgical team, we provide support at every step of the treatment, from consultation to recovery."
      advantageTitle="The RealDense Advantage"
      advantageSubtitle="Our experience, technology and personalised care ensure a smooth process and natural-looking results."
      {...props}
    />
  );
}
