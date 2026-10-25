"use client";

export interface BenefitCardData {
  id: string;
  step: string;
  title: string;
  titleTop?: string;
  titleBottom?: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const benefitCards: BenefitCardData[] = [
  {
    id: "realistic-hairline",
    step: "01",
    title: "Realistic Hairline Design",
    titleTop: "Realistic Hairline",
    titleBottom: "Design",
    description:
      "Carefully planned hairline placement for natural-looking results.",
    imageSrc: "/Fut_page_images/benefit-1.webp",
    imageAlt: "01 Realistic Hairline Design",
  },
  {
    id: "minimally-invasive",
    step: "02",
    title: "Minimally Invasive Technique",
    titleTop: "Minimally Invasive",
    titleBottom: "Technique",
    description:
      "Precision-based extraction designed to minimise tissue trauma.",
    imageSrc: "/Fut_page_images/benefit-2.webp",
    imageAlt: "02 Minimally Invasive Technique",
  },
  {
    id: "graft-preservation",
    step: "03",
    title: "Graft Preservation",
    titleTop: "Graft",
    titleBottom: "Preservation",
    description:
      "Careful graft handling helps maintain graft quality before implantation.",
    imageSrc: "/Fut_page_images/benefit-3.webp",
    imageAlt: "03 Graft Preservation",
  },
  {
    id: "precision-guided",
    step: "04",
    title: "Precision-Guided Implantation",
    titleTop: "Precision-Guided",
    titleBottom: "Implantation",
    description:
      "SAVA implanters support controlled graft placement for a natural appearance.",
    imageSrc: "/Fut_page_images/benefit-4.webp",
    imageAlt: "04 Precision-Guided Implantation",
  },
];

export interface BenefitsQhtProps {
  eyebrow?: string;
  titleLine1?: string;
  titleAccent?: string;
  subtitle?: string;
  cards?: BenefitCardData[];
}

export default function BenefitsQht({
  eyebrow = "BENEFITS",
  titleLine1 = "Benefits of",
  titleAccent = "QHT Hair Transplant",
  subtitle = "QHT Hair Transplant offers multiple benefits, like a realistic hairline design, speed and precision, graft preservation, and a high graft survival rate.",
  cards = benefitCards,
}: BenefitsQhtProps) {
  return (
    <section className="w-full bg-white py-14 sm:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Section Header ── */}
        <div className="text-center max-w-[820px] mx-auto mb-10 sm:mb-14">
          <span className="font-['Plus_Jakarta_Sans'] text-[11.5px] sm:text-[13px] font-bold uppercase tracking-[0.22em] text-[#00A3FF] mb-2 sm:mb-3 block">
            {eyebrow}
          </span>
          <h2 className="font-['Plus_Jakarta_Sans'] text-[26px] sm:text-[36px] lg:text-[44px] font-extrabold tracking-[-0.03em] leading-[1.16]">
            <span className="text-[#001e56]">{titleLine1} </span>
            <span className="text-[#00A3FF]">{titleAccent}</span>
          </h2>
          <p className="mt-3.5 sm:mt-4 text-[#556987] font-['Plus_Jakarta_Sans'] text-[14px] sm:text-[15.5px] leading-[1.65] font-normal max-w-[740px] mx-auto">
            {subtitle}
          </p>
        </div>

        {/* ── 2x2 Grid of Benefit Cards ── */}
        <div className="max-w-[960px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-7 justify-center items-stretch">
          {cards.map((card) => (
            <div
              key={card.id}
              className="group relative rounded-[22px] sm:rounded-[26px] bg-[#f4f8fb] p-5 sm:p-6 lg:p-7 flex items-center justify-between gap-3 sm:gap-4 shadow-[0_4px_16px_rgba(3,30,80,0.04)] hover:shadow-[0_10px_26px_rgba(3,30,80,0.08)] transition-all duration-300 hover:-translate-y-0.5"
            >
              {/* Left Column: Step, Title, Description */}
              <div className="flex flex-col items-start justify-center flex-1 min-w-0 pr-1 sm:pr-2">
                <span className="font-['Plus_Jakarta_Sans'] text-[13.5px] sm:text-[14.5px] font-bold text-[#00A3FF] tracking-[0.06em] mb-1.5 sm:mb-2 block">
                  {card.step}
                </span>

                <h3 className="font-['Plus_Jakarta_Sans'] text-[17px] sm:text-[19px] lg:text-[20.5px] font-bold text-[#001e56] leading-[1.22] tracking-[-0.015em] mb-2 sm:mb-2.5">
                  {card.titleTop && card.titleBottom ? (
                    <>
                      <span className="block">{card.titleTop}</span>
                      <span className="block">{card.titleBottom}</span>
                    </>
                  ) : (
                    card.title
                  )}
                </h3>

                <p className="font-['Plus_Jakarta_Sans'] text-[12.5px] sm:text-[13px] leading-[1.6] text-[#556987] font-normal max-w-[240px] sm:max-w-[270px]">
                  {card.description}
                </p>
              </div>

              {/* Right Column: Circular Illustration Badge */}
              <div className="relative w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden shrink-0 bg-[#f4f8fb]">
                <div
                  className="w-full h-full rounded-full transition-transform duration-300 group-hover:scale-105"
                  style={{
                    backgroundImage: `url(${card.imageSrc})`,
                    backgroundPosition: "89.5% 50%",
                    backgroundSize: "362% auto",
                    backgroundRepeat: "no-repeat",
                  }}
                  aria-hidden="true"
                />
              </div>

              {/* Screen reader accessible text */}
              <span className="sr-only">
                {card.step} {card.title}: {card.description}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
