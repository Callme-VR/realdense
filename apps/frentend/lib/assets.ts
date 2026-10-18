/**
 * Centralized, type-safe asset registry for Realdense.
 * All paths map to production-optimized WebP and vector assets in /public/images/.
 */

export const ASSETS = {
  brand: {
    logo: "/images/brand/logo.webp",
    logoPng: "/images/brand/logo.png",
  },
  hero: {
    video: "/images/hero/wave.mp4",
    patients: {
      kashyap: "/images/hero/patient-kashyap.webp",
      deepak: "/images/hero/patient-deepak.webp",
      abhishek: "/images/hero/patient-abhishek.webp",
      ranbeer: "/images/hero/patient-ranbeer.webp",
    },
  },
  transformations: {
    case1: {
      before: "/images/transformations/case-01-before.webp",
      after: "/images/transformations/case-01-after.webp",
    },
    case2: {
      before: "/images/transformations/case-02-before.webp",
      after: "/images/transformations/case-02-after.webp",
    },
    case3: {
      before: "/images/transformations/case-03-before.webp",
      after: "/images/transformations/case-03-after.webp",
    },
    case4: {
      before: "/images/transformations/case-04-before.webp",
      after: "/images/transformations/case-04-after.webp",
    },
    banner: "/images/transformations/before-and-after-banner.webp",
  },
  whyIndia: {
    flight: "/images/why-india/flight.webp",
    affordableCosts: "/images/why-india/affordable-costs.webp",
    verifiedShield: "/images/why-india/verified-shield.webp",
    tajMahal: "/images/why-india/taj-mahal.webp",
    hospital: "/images/why-india/accredited-hospital.webp",
  },
  process: {
    dentistShowcase: "/images/process/dentist-procedure.webp",
    journey: {
      step1: "/images/process/journey-step-01.webp",
      step2: "/images/process/journey-step-02.webp",
      step3: "/images/process/journey-step-03.webp",
    },
    clinical: {
      step1: "/images/process/clinical-step-01.webp",
      step2: "/images/process/clinical-step-02.webp",
      step3: "/images/process/clinical-step-03.webp",
      step4: "/images/process/clinical-step-04.webp",
    },
  },
  clinic: {
    modernBuilding: "/images/clinic/modern-building.webp",
    footerBanner: "/images/clinic/footer-banner.webp",
  },
  reviews: {
    rohanMehta: "/images/reviews/rohan-mehta.webp",
    amitSharma: "/images/reviews/amit-sharma.webp",
    patient1: "/images/reviews/patient-1.webp",
    patient2: "/images/reviews/patient-2.webp",
    patient3: "/images/reviews/patient-3.webp",
    patient4: "/images/reviews/patient-4.webp",
  },
} as const;
