"use client";

import React from "react";
import OverviewQht, {
  OverviewBlockData,
  OverviewQhtProps,
} from "@/components/QHT_pages/Overviewqht";

const defaultBlock1: OverviewBlockData = {
  eyebrow: "OVERVIEW",
  titleLine1: "What is Female",
  titleLine2: "Hair Transplant?",
  paragraphs: [
    "A female hair transplant is a surgical solution to address female pattern baldness and diffuse thinning. The procedure involves transferring healthy follicles from a stable donor area, typically the back of the scalp, to areas experiencing hair loss.",
    "At our Clinic, every step is guided by our proprietary QHT technique, delivering high graft survival, minimal downtime, and a natural aesthetic tailored to the female hairline. Whether you’re dealing with widening of the part.",
  ],
  imageSrc: "/Female_pages_images/first.webp",
  imageAlt: "What is Female Hair Transplant - Natural hairline restoration",
};

const defaultBlock2: OverviewBlockData = {
  eyebrow: "IN INDIA",
  titleLine1: "Female Hair Transplant",
  titleLine2: "in India",
  paragraphs: [
    "Female hair transplant in India is the latest technique used to help women with thinning hair, receding hair lines or bald spots. With the methods of FUE and FUT, qualified surgeons insert healthy follicles to thinning spots, producing natural and permanent effect according to the hair loss of women.",
    "India is one of the best options when it comes to women hair transplants because of highly qualified doctors, advanced clinics and low prices.",
  ],
  imageSrc: "/Female_pages_images/second.webp",
  imageAlt: "Female Hair Transplant in India - Advanced natural hair restoration",
};

export interface FemaleOverviewProps extends Partial<OverviewQhtProps> {}

export default function FemaleOverview({
  block1,
  block2,
}: FemaleOverviewProps) {
  return (
    <OverviewQht
      block1={{ ...defaultBlock1, ...block1 }}
      block2={{ ...defaultBlock2, ...block2 }}
    />
  );
}
