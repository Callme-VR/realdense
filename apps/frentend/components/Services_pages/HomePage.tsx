"use client";

import Image from "next/image";
import BookConsultationButton from "@/components/BookConsultationButton";

interface FeaturePill {
  id: string;
  iconBg: string;
  line1: string;
  line2: string;
  icon: React.ReactNode;
}

const featurePills: FeaturePill[] = [
  {
    id: "tech",
    iconBg: "bg-[#095edb]",
    line1: "Advanced",
    line2: "Technology",
    icon: (
      <svg
        className="w-full h-full"
        viewBox="0 0 39 39"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle cx="19.4758" cy="19.4758" r="19.4758" fill="#003CAF" />
        <path
          d="M19.4753 11.922C19.0581 11.922 18.658 12.0985 18.363 12.4126C18.068 12.7267 17.9023 13.1528 17.9023 13.597C17.9023 14.0412 18.068 14.4673 18.363 14.7814C18.658 15.0955 19.0581 15.272 19.4753 15.272C19.8925 15.272 20.2925 15.0955 20.5875 14.7814C20.8825 14.4673 21.0483 14.0412 21.0483 13.597C21.0483 13.1528 20.8825 12.7267 20.5875 12.4126C20.2925 12.0985 19.8925 11.922 19.4753 11.922ZM16.554 13.597C16.554 12.772 16.8618 11.9808 17.4096 11.3974C17.9575 10.8141 18.7005 10.4863 19.4753 10.4863C20.25 10.4863 20.9931 10.8141 21.5409 11.3974C22.0887 11.9808 22.3965 12.772 22.3965 13.597C22.3965 14.422 22.0887 15.2132 21.5409 15.7966C20.9931 16.3799 20.25 16.7077 19.4753 16.7077C18.7005 16.7077 17.9575 16.3799 17.4096 15.7966C16.8618 15.2132 16.554 14.422 16.554 13.597ZM13.1834 13.8363C12.8258 13.8363 12.4828 13.9875 12.23 14.2568C11.9771 14.526 11.8351 14.8912 11.8351 15.272C11.8351 15.6528 11.9771 16.0179 12.23 16.2872C12.4828 16.5564 12.8258 16.7077 13.1834 16.7077C13.5409 16.7077 13.8839 16.5564 14.1367 16.2872C14.3896 16.0179 14.5316 15.6528 14.5316 15.272C14.5316 14.8912 14.3896 14.526 14.1367 14.2568C13.8839 13.9875 13.5409 13.8363 13.1834 13.8363ZM10.4868 15.272C10.4868 14.5104 10.7709 13.7801 11.2766 13.2416C11.7823 12.7031 12.4682 12.4006 13.1834 12.4006C13.8985 12.4006 14.5844 12.7031 15.0901 13.2416C15.5958 13.7801 15.8799 14.5104 15.8799 15.272C15.8799 16.0335 15.5958 16.7639 15.0901 17.3024C14.5844 17.8409 13.8985 18.1434 13.1834 18.1434C12.4682 18.1434 11.7823 17.8409 11.2766 17.3024C10.7709 16.7639 10.4868 16.0335 10.4868 15.272ZM24.4189 15.272C24.4189 14.8912 24.561 14.526 24.8138 14.2568C25.0667 13.9875 25.4096 13.8363 25.7672 13.8363C26.1248 13.8363 26.4677 13.9875 26.7206 14.2568C26.9734 14.526 27.1155 14.8912 27.1155 15.272C27.1155 15.6528 26.9734 16.0179 26.7206 16.2872C26.4677 16.5564 26.1248 16.7077 25.7672 16.7077C25.4096 16.7077 25.0667 16.5564 24.8138 16.2872C24.561 16.0179 24.4189 15.6528 24.4189 15.272ZM25.7672 12.4006C25.052 12.4006 24.3662 12.7031 23.8605 13.2416C23.3548 13.7801 23.0707 14.5104 23.0707 15.272C23.0707 16.0335 23.3548 16.7639 23.8605 17.3024C24.3662 17.8409 25.052 18.1434 25.7672 18.1434C26.4824 18.1434 27.1682 17.8409 27.6739 17.3024C28.1796 16.7639 28.4637 16.0335 28.4637 15.272C28.4637 14.5104 28.1796 13.7801 27.6739 13.2416C27.1682 12.7031 26.4824 12.4006 25.7672 12.4006ZM15.4305 19.8184C15.4305 18.8938 16.1352 18.1434 17.0034 18.1434H21.9471C22.8154 18.1434 23.5201 18.8938 23.5201 19.8184V23.4076C23.5201 24.5499 23.0939 25.6454 22.3354 26.4532C21.5768 27.2609 20.548 27.7147 19.4753 27.7147C18.4025 27.7147 17.3737 27.2609 16.6152 26.4532C15.8566 25.6454 15.4305 24.5499 15.4305 23.4076V19.8184ZM17.0034 19.5791C16.9439 19.5791 16.8867 19.6043 16.8446 19.6492C16.8024 19.694 16.7787 19.7549 16.7787 19.8184V23.4076C16.7787 24.1691 17.0628 24.8995 17.5685 25.438C18.0742 25.9765 18.7601 26.279 19.4753 26.279C20.1904 26.279 20.8763 25.9765 21.382 25.438C21.8877 24.8995 22.1718 24.1691 22.1718 23.4076V19.8184C22.1718 19.7549 22.1481 19.694 22.106 19.6492C22.0639 19.6043 22.0067 19.5791 21.9471 19.5791H17.0034ZM14.6305 19.0794C14.5652 19.3149 14.5322 19.5612 14.5316 19.8184V20.5936L12.0023 21.3153C11.9447 21.3317 11.8956 21.3717 11.8658 21.4267C11.8359 21.4816 11.8278 21.5469 11.8432 21.6082L12.4832 24.1513C12.6473 24.8036 13.0221 25.3735 13.5418 25.7607C14.0614 26.1479 14.6926 26.3277 15.3244 26.2685C15.6075 26.7336 15.9581 27.1481 16.3608 27.4955C15.8377 27.6802 15.2847 27.7491 14.7357 27.698C14.1868 27.6469 13.6534 27.477 13.1683 27.1985C12.6832 26.92 12.2567 26.5389 11.9149 26.0786C11.5732 25.6183 11.3233 25.0885 11.1807 24.5217L10.5407 21.9796C10.4328 21.5506 10.4894 21.0935 10.6979 20.7088C10.9064 20.3242 11.2498 20.0435 11.6526 19.9284L14.6305 19.0794ZM22.5898 27.4955C22.6647 27.5223 22.7405 27.5465 22.8172 27.5682C23.8533 27.8638 24.9573 27.709 25.8863 27.1378C26.8152 26.5667 27.4931 25.626 27.7707 24.5227L28.4107 21.9805C28.4643 21.768 28.478 21.5464 28.4511 21.3283C28.4242 21.1101 28.3572 20.8998 28.254 20.7092C28.1507 20.5186 28.0132 20.3516 27.8493 20.2176C27.6855 20.0837 27.4984 19.9854 27.2988 19.9284L24.3201 19.0785C24.3854 19.3146 24.4183 19.5612 24.4189 19.8184V20.5936L26.9501 21.3153C27.0075 21.3319 27.0564 21.372 27.086 21.4269C27.1157 21.4818 27.1237 21.547 27.1083 21.6082L26.4683 24.1513C26.3041 24.8038 25.9291 25.3738 25.4093 25.761C24.8895 26.1483 24.2581 26.3279 23.6261 26.2685C23.3434 26.7329 22.9937 27.147 22.5898 27.4955Z"
          fill="white"
        />
      </svg>
    ),
  },
  {
    id: "plans",
    iconBg: "bg-[#00a8ff]",
    line1: "Personalised",
    line2: "Treatment Plans",
    icon: (
      <svg
        className="w-5 h-5 sm:w-5.5 sm:h-5.5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.2}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <path d="M10 13v2l-1.5 2.5a1 1 0 0 0 .8 1.5h5.4a1 1 0 0 0 .8-1.5L14 15v-2" />
        <line x1="10" y1="13" x2="14" y2="13" />
      </svg>
    ),
  },
  {
    id: "specialists",
    iconBg: "bg-[#062973]",
    line1: "Experienced",
    line2: "Specialists",
    icon: (
      <svg
        className="w-5 h-5 sm:w-5.5 sm:h-5.5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.2}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
        <circle cx="9.5" cy="7" r="4" />
        <circle cx="17.5" cy="16.5" r="3.5" />
        <polyline points="17.5 14.5 17.5 16.5 19 16.5" />
      </svg>
    ),
  },
  {
    id: "results",
    iconBg: "bg-[#00b4d8]",
    line1: "Natural & Long -",
    line2: "Lasting Results",
    icon: (
      <svg
        className="w-full h-full"
        viewBox="0 0 73 73"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle cx="36.5018" cy="36.5018" r="36.5018" fill="#00A1F5" />
        <path
          d="M36.7914 19.1172C32.5526 19.1172 28.5502 20.6228 25.4062 23.3188V19.1172H22.7788V25.6823C22.7788 26.8903 23.7597 27.8707 24.9683 27.8707H31.5367V25.2446H27.219C29.8814 23.0037 33.2357 21.7432 36.7914 21.7432C44.9976 21.7432 51.6798 28.4221 51.6798 36.6242C51.6798 38.2786 51.4083 39.9067 50.8741 41.4561L53.3613 42.3052C53.9919 40.4757 54.3072 38.5674 54.3072 36.6154C54.3072 26.9603 46.4514 19.1084 36.7914 19.1084V19.1172ZM35.4777 26.9866V37.1669L41.5557 43.2418L43.4124 41.3861L38.1051 36.0814V26.9866H35.4777ZM42.0461 45.3777H48.6146V45.3864C49.8232 45.3864 50.804 46.3668 50.804 47.5748V54.1399H48.1767V49.9382C45.0078 52.657 40.9676 54.148 36.7914 54.1399C27.1315 54.1399 19.2756 46.288 19.2756 36.6329C19.2756 34.6809 19.5909 32.7726 20.2215 30.9431L22.7087 31.7922C22.1749 33.3473 21.9027 34.9801 21.903 36.6242C21.903 44.8262 28.5853 51.5051 36.7914 51.5051C40.3471 51.5051 43.7014 50.2446 46.3638 48.0037H42.0461V45.3777Z"
          fillRule="evenodd"
          clipRule="evenodd"
          fill="white"
        />
      </svg>
    ),
  },
];

export default function ServicesHero() {
  return (
    <section className="relative isolate w-full bg-[#c2ebfd] min-h-[640px] sm:min-h-[700px] lg:min-h-[760px] xl:min-h-[820px] flex flex-col justify-between overflow-hidden pt-24 sm:pt-28 lg:pt-32 pb-6 sm:pb-8 lg:pb-10 max-sm:min-h-[620px] max-sm:pt-24 max-sm:pb-6">
      {/* ── Background Image Layer (Anchored to right to keep hair follicle & wave crisp & uncropped) ── */}
      <div className="absolute inset-0 -z-10 w-full h-full select-none pointer-events-none overflow-hidden">
        <Image
          src="/service_page_images/services-hero-background.webp"
          alt="Advanced Hair Restoration Solution"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 1920px"
          className="object-cover object-right md:object-[right_center] lg:object-right"
          quality={100}
        />
      </div>

      {/* ── Hero Main Content ── */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 my-auto pt-4 sm:pt-6 lg:pt-8 max-sm:pt-2">
        <div className="max-w-[620px] lg:max-w-[660px] text-left max-sm:text-center max-sm:mx-auto max-sm:flex max-sm:flex-col max-sm:items-center">
          {/* Eyebrow */}
          <p className="mb-2 sm:mb-3 font-['Plus_Jakarta_Sans'] text-[12px] sm:text-[13px] lg:text-[14px] font-bold uppercase tracking-[0.24em] text-[#0cb0f2] max-sm:text-[11.5px] max-sm:tracking-[0.2em] max-sm:mb-2">
            BECAUSE LOOK MATTERS.
          </p>

          {/* Headline */}
          <h1 className="font-['Plus_Jakarta_Sans'] text-[28px] xs:text-[32px] sm:text-[42px] md:text-[50px] lg:text-[58px] xl:text-[64px] font-extrabold tracking-[-0.03em] leading-[1.1] text-[#001e56] max-sm:text-[28px] xs:max-sm:text-[31px] max-sm:leading-[1.15]">
            <span>Advanced Hair</span>
            <br />
            <span>Restoration </span>
            <span className="text-[#0cb0f2]">Solution</span>
          </h1>

          {/* Description */}
          <p className="mt-3.5 sm:mt-4 mb-6 sm:mb-8 w-full max-w-[850px] font-['Plus_Jakarta_Sans'] text-[14px] sm:text-[15.5px] lg:text-[16.5px] font-medium leading-[1.6] text-[#1b3a6b] max-sm:mt-3 max-sm:mb-6 max-sm:max-w-[340px] max-sm:text-[13px] max-sm:leading-[1.5] max-sm:text-center max-sm:mx-auto">
            <span className="max-sm:hidden">
              From hair transplant to non-surgical treatments, we offer complete hair restoration
              <br className="hidden md:inline" />{" "}
              solutions using advanced techniques, expert care and personalised treatment plans.
            </span>
            <span className="hidden max-sm:inline">
              Complete hair restoration solutions with advanced treatments, expert care, and personalised plans.
            </span>
          </p>
          {/* Primary CTA */}
          <div className="flex items-center mb-4 max-sm:justify-center max-sm:mb-2">
            <BookConsultationButton
              href="/treatment-cost"
              className="!min-h-[44px] !rounded-xl !px-7 sm:!px-8 !py-3.5 sm:!py-4 !text-[15px] sm:!text-[16px] !bg-[#001e56] hover:!bg-[#072464] shadow-[0_8px_24px_rgba(0,30,86,0.25)] transition-transform duration-200 hover:scale-[1.02]"
            >
              Book a Consultation
            </BookConsultationButton>
          </div>
        </div>
      </div>

      {/* ── Bottom Floating Feature Capsule ── */}
      <div className="relative z-10 w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-12 lg:mt-14 max-sm:mt-6 max-sm:px-3">
        <div className="relative overflow-hidden rounded-[20px] sm:rounded-[24px] bg-[#346e9d]/90 backdrop-blur-md border border-white/30 shadow-[0_14px_36px_rgba(3,30,80,0.18)]">
          <div className="grid grid-cols-1 max-sm:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 divide-y max-sm:divide-y-0 sm:divide-y-0 lg:divide-x divide-white/20">
            {featurePills.map((pill, idx) => (
              <div
                key={pill.id}
                className={`flex items-center gap-3.5 sm:gap-4 px-5 sm:px-6 py-3.5 sm:py-4.5 lg:py-5 transition-colors duration-200 hover:bg-white/10 max-sm:px-2.5 xs:max-sm:px-3.5 max-sm:py-3.5 max-sm:gap-2 xs:max-sm:gap-2.5 ${idx % 2 === 1 ? "sm:border-l sm:border-white/20 lg:border-l-0 max-sm:border-l max-sm:border-white/20" : ""
                  } ${idx >= 2 ? "sm:border-t sm:border-white/20 lg:border-t-0" : ""}`}
              >
                <div
                  className={`w-11 h-11 sm:w-11.5 sm:h-11.5 rounded-full ${pill.iconBg} flex items-center justify-center text-white shrink-0 shadow-[0_2px_8px_rgba(0,0,0,0.18)] max-sm:w-10 max-sm:h-10`}
                >
                  {pill.icon}
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-['Plus_Jakarta_Sans'] text-[14px] sm:text-[14.5px] lg:text-[15px] font-bold leading-tight text-white tracking-[-0.01em] max-sm:text-[11.5px] xs:max-sm:text-[12.5px] max-sm:leading-[1.25]">
                    {pill.line1}
                  </span>
                  <span className="font-['Plus_Jakarta_Sans'] text-[14px] sm:text-[14.5px] lg:text-[15px] font-bold leading-tight text-white tracking-[-0.01em] max-sm:text-[11.5px] xs:max-sm:text-[12.5px] max-sm:leading-[1.25]">
                    {pill.line2}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
