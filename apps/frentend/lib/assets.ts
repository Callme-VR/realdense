/**
 * Centralized, type-safe asset registry for Realdense.
 * All paths map to production-optimized WebP and media assets in /public.
 */

export const ASSETS = {
  brand: {
    logo: "/images/brand/logo.webp",
    logoPng: "/images/brand/logo.png",
  },
  hero: {
    background: "/images/hero/hero-background.webp",
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
  fue: {
    heroBackground: "/Fue_page_images/fue-hero-background.webp",
    procedureMarking: "/Fue_page_images/fue-procedure-marking.webp",
    graftsDissection: "/Fue_page_images/fue-grafts-dissection.webp",
    patientResultsBackground: "/Fue_page_images/fue-patient-results-background.webp",
  },
  services: {
    heroBackground: "/service_page_images/services-hero-background.webp",
    formBanner: "/service_page_images/services-form-banner.webp",
    cards: {
      fut: "/service_page_images/service-fut.webp",
      fue: "/service_page_images/service-fue.webp",
      qht: "/service_page_images/service-qht.webp",
      ultraDense: "/service_page_images/service-ultra-dense.webp",
      female: "/service_page_images/service-female.webp",
      repair: "/service_page_images/service-repair.webp",
      unshaven: "/service_page_images/service-unshaven.webp",
      men: "/service_page_images/service-men.webp",
      customHairline: "/service_page_images/service-custom-hairline.webp",
      crown: "/service_page_images/service-crown.webp",
      hairlineReconstruction: "/service_page_images/service-hairline-reconstruction.webp",
      badTransplantCorrection: "/service_page_images/service-bad-transplant-correction.webp",
      temple: "/service_page_images/service-temple.webp",
      moustache: "/service_page_images/service-moustache.webp",
      eyebrow: "/service_page_images/service-eyebrow.webp",
      beard: "/service_page_images/service-beard.webp",
      afro: "/service_page_images/service-afro.webp",
      influencer: "/service_page_images/service-influencer.webp",
      caucasian: "/service_page_images/service-caucasian.webp",
      naturalLook: "/service_page_images/service-natural-look.webp",
      burn: "/service_page_images/service-burn.webp",
    },
  },
} as const;

export type Assets = typeof ASSETS;
