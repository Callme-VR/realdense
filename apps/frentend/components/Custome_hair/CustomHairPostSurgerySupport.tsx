"use client";

import React from "react";
import PostSurgerySupportQht, {
  PostSurgerySupportQhtProps,
  SupportItem,
} from "@/components/QHT_pages/PostSurgerySupportqht";

/** 1. Calendar with checkmark */
const CalendarCheckIcon = () => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#0052CC"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-7 h-7 sm:w-8 sm:h-8"
  >
    <rect x="3" y="4" width="18" height="18" rx="3.5" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
    <path d="M8.5 15.5L11 18L16 13" strokeWidth="2.4" />
  </svg>
);

/** 2. Medical Case / First Aid Icon */
const MedicalCaseIcon = () => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#0052CC"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-7 h-7 sm:w-8 sm:h-8"
  >
    <rect x="3" y="6" width="18" height="15" rx="3" />
    <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    <line x1="12" y1="11" x2="12" y2="16" strokeWidth="2.4" />
    <line x1="9.5" y1="13.5" x2="14.5" y2="13.5" strokeWidth="2.4" />
  </svg>
);

/** 3. Document with checkmark */
const DocumentCheckIcon = () => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#0052CC"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-7 h-7 sm:w-8 sm:h-8"
  >
    <path d="M6 4C6 3.17 6.67 2.5 7.5 2.5H16.5C17.33 2.5 18 3.17 18 4V13" />
    <path d="M6 4V19.5C6 20.33 6.67 21 7.5 21H13" />
    <path d="M9.5 7.5H14.5" />
    <path d="M9.5 11.5H13" />
    <path d="M14 17.5L16.5 20L21.5 14" strokeWidth="2.4" />
  </svg>
);

/** 4. Doctor Icon with Stethoscope */
const DoctorIcon = () => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#0052CC"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-7 h-7 sm:w-8 sm:h-8"
  >
    <circle cx="12" cy="7.5" r="3.5" />
    <path d="M5.5 21V19C5.5 16.3 7.8 14.2 10.5 14.2H13.5C16.2 14.2 18.5 16.3 18.5 19V21" />
    <path d="M9.5 14.2V16.5C9.5 17.9 10.6 19 12 19C13.4 19 14.5 17.9 14.5 16.5V14.2" />
    <circle cx="14.5" cy="18.5" r="1.2" fill="#0052CC" stroke="none" />
  </svg>
);

const customHairSupportItems: SupportItem[] = [
  {
    id: "consultation-assessment",
    icon: <CalendarCheckIcon />,
    title: "Consultation & Assessment",
    description: "Hairline created according to natural appearance.",
  },
  {
    id: "donor-extraction",
    icon: <MedicalCaseIcon />,
    title: "Donor Extraction",
    description: "Extraction with FUE/FUT/QHT.",
  },
  {
    id: "implantation",
    icon: <DocumentCheckIcon />,
    title: "Implantation",
    description: "Grafts that are laid with precision.",
  },
  {
    id: "recovery-care",
    icon: <DoctorIcon />,
    title: "Recovery Care",
    description: "Long-term results follow-up.",
  },
];

export default function CustomHairPostSurgerySupport(
  props: Partial<PostSurgerySupportQhtProps>
) {
  return (
    <PostSurgerySupportQht
      eyebrow="POST-CARE"
      titlePart1="Post–Surgery Support for"
      titlePart2="Custom Hairline Transplant"
      description="At RealDense, our care doesn't end after surgery. We provide complete post-operative support to ensure smooth recovery and long-lasting, natural results."
      items={customHairSupportItems}
      {...props}
    />
  );
}

