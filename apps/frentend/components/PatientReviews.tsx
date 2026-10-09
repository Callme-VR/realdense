"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";

interface PatientReview {
  id: number;
  name: string;
  treatment: string;
  image: string;
  rating: number;
  quote: string;
}

const reviewsData: PatientReview[] = [
  {
    id: 1,
    name: "Rohan Mehta",
    treatment: "FUE HAIR TRANSPLANT",
    image: "/patients/rohan-mehta.jpg",
    rating: 5,
    quote:
      "The entire experience at Realdense was smooth and professional. The team understood my concerns, explained everything clearly, and the results look completely natural. I feel more confident than ever!",
  },
  {
    id: 2,
    name: "Amit Sharma",
    treatment: "HAIRLINE RESTORATION",
    image: "/patients/amit-sharma.jpg",
    rating: 5,
    quote:
      "My hairline was receding for years and it affected my confidence. The team at Realdense gave me a natural hairline and the results exceeded my expectations. Highly recommended!",
  },
  {
    id: 3,
    name: "Vikram Malhotra",
    treatment: "SAPPHIRE FUE 3,200 GRAFTS",
    image: "/patients/patient-2.jpg",
    rating: 5,
    quote:
      "Traveling to India for my hair transplant was the best decision. The clinical precision and aftercare from Realdense were world-class. My density at 9 months is unbelievable!",
  },
  {
    id: 4,
    name: "Dr. Kabir Sengupta",
    treatment: "DHI DENSE RESTORATION",
    image: "/patients/patient-4.jpg",
    rating: 5,
    quote:
      "As a doctor myself, I evaluated hygiene, graft handling, and surgeon involvement meticulously. Realdense exceeded every clinical standard. Truly exceptional and painless procedure.",
  },
];

export default function PatientReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  // 1 card on mobile, 2 cards on desktop
  const maxIndex = reviewsData.length - 1;

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // 2 reviews displayed based on currentIndex
  const visibleReviews = [
    reviewsData[currentIndex],
    reviewsData[(currentIndex + 1) % reviewsData.length],
  ];

  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Top Header Section ── */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-12 lg:mb-16">
          {/* Left Title & Description */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="max-w-xl"
          >
            <p className="text-[12px] sm:text-[13px] font-bold uppercase tracking-[0.2em] text-[#00a8ff] mb-3">
              PATIENT REVIEWS
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-extrabold tracking-tight leading-[1.12]">
              <span className="text-[#001e56] block">Real Stories.</span>
              <span className="text-[#00a8ff] block">Real Confidence.</span>
            </h2>
            <p className="mt-4 text-[14.5px] sm:text-[16px] leading-relaxed text-slate-500 font-normal">
              Hear from our patients who have transformed their lives with
              natural-looking hair restoration at Realdense.
            </p>
          </motion.div>

          {/* Right Google Reviews Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="self-start md:self-auto shrink-0 bg-[#e9f4fd]/80 hover:bg-[#e4f1fc] border border-[#d2ecfd] rounded-2xl px-5 py-4 sm:px-6 sm:py-4.5 flex items-center gap-4 shadow-[0_2px_12px_rgba(0,168,255,0.06)] transition-all duration-300"
          >
            {/* Google G Logo */}
            <div className="w-10 h-10 shrink-0 flex items-center justify-center bg-white rounded-full p-2 shadow-xs border border-sky-100">
              <svg className="w-full h-full" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
                />
                <path
                  fill="#34A853"
                  d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.97 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
                />
                <path
                  fill="#EA4335"
                  d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                />
              </svg>
            </div>

            {/* Rating Information */}
            <div className="flex flex-col">
              <span className="text-[17px] font-extrabold text-[#001e56] leading-tight">
                4.9/5
              </span>
              <div className="flex items-center gap-0.5 text-[#ffbb1f] my-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-3.5 h-3.5 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-[11.5px] font-medium text-slate-500 leading-tight">
                Verified Patient Reviews
              </span>
            </div>
          </motion.div>
        </div>

        {/* ── Reviews Carousel Container with Arrows ── */}
        <div className="relative flex items-center">
          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            aria-label="Previous reviews"
            className="
    absolute
    left-0
    sm:-left-5
    lg:-left-6
    z-10
    w-9
    h-9
    sm:w-11
    sm:h-11
    rounded-full
    bg-white/95
    hover:bg-[#0D2C8A]
    text-slate-400
    hover:text-white
    border
    border-slate-200/90
    shadow-md
    flex
    items-center
    justify-center
    transition-all
    duration-200
    hover:scale-105
    active:scale-95
    cursor-pointer
  "
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2.2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Cards Grid / Transition View */}
          <div className="w-full px-8 sm:px-6">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: direction * 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -direction * 40 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
              >
                {visibleReviews.map((review, rIdx) => (
                  <div
                    key={`${review.id}-${rIdx}`}
                    className={`relative bg-[#f0f8fd]/70 hover:bg-[#ebf6fd] border border-[#dcf1fd] rounded-[24px] sm:rounded-[28px] p-6 sm:p-8 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,168,255,0.08)] flex-col justify-between ${rIdx > 0 ? "hidden md:flex" : "flex"
                      }`}
                  >
                    {/* Cyan Quote Mark in Top Left */}
                    <div className="mb-4 text-[#00a8ff]">
                      <svg
                        className="w-5 h-5 sm:w-6 sm:h-6 fill-current opacity-90"
                        viewBox="0 0 24 24"
                      >
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>

                    {/* Card Content: Avatar Left, Review Right */}
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-6">
                      {/* Avatar & Patient Info */}
                      <div className="flex flex-col items-center shrink-0 w-32 sm:w-36 text-center">
                        <div className="relative w-20 h-20 sm:w-22 sm:h-22 rounded-full overflow-hidden ring-3 ring-white shadow-md bg-slate-200">
                          <Image
                            src={review.image}
                            alt={review.name}
                            fill
                            className="object-cover"
                            sizes="(max-width: 640px) 80px, 88px"
                          />
                        </div>
                        <h3 className="mt-3 text-[15px] sm:text-[16px] font-bold text-[#001e56] leading-tight">
                          {review.name}
                        </h3>
                        <p className="mt-1 text-[10px] sm:text-[10.5px] font-bold tracking-wider text-slate-400 uppercase leading-snug">
                          {review.treatment}
                        </p>
                      </div>

                      {/* Rating Stars & Quote */}
                      <div className="flex-1 flex flex-col justify-start text-center sm:text-left">
                        {/* Stars */}
                        <div className="flex items-center justify-center sm:justify-start gap-1 text-[#ffbb1f] mb-3">
                          {[...Array(review.rating)].map((_, i) => (
                            <svg
                              key={i}
                              className="w-4 h-4 sm:w-[18px] sm:h-[18px] fill-current"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>

                        {/* Quote Text */}
                        <p className="text-[13.5px] sm:text-[14.5px] text-slate-600 leading-relaxed font-normal">
                          &ldquo;{review.quote}&rdquo;
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            aria-label="Next reviews"
            className="
    absolute
    right-0
    sm:-right-5
    lg:-right-6
    z-10
    w-9
    h-9
    sm:w-11
    sm:h-11
    rounded-full
    bg-white/95
    hover:bg-[#0D2C8A]
    text-slate-400
    hover:text-white
    border
    border-slate-200/90
    shadow-md
    flex
    items-center
    justify-center
    transition-all
    duration-200
    hover:scale-105
    active:scale-95
    cursor-pointer
  "
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2.2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* ── Carousel Pagination Dots & View All Link ── */}
        <div className="flex flex-col items-center justify-center gap-3 mt-10">
          {/* Indicator Dots */}
          <div className="flex items-center gap-1.5">
            {[...Array(maxIndex + 1)].map((_, idx) => {
              const isActive = currentIndex === idx;
              return (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`transition-all duration-300 rounded-full cursor-pointer ${isActive
                    ? "w-8 h-2 bg-[#00a8ff]"
                    : "w-2 h-2 bg-[#cceafe] hover:bg-[#00a8ff]/50"
                    }`}
                />
              );
            })}
          </div>

          {/* View All Reviews Link */}
          <Link
            href="/results"
            className="group inline-flex items-center gap-1.5 text-[14px] font-bold text-[#001e56] hover:text-[#00a8ff] transition-colors mt-1"
          >
            <span>View all reviews</span>
            <span className="transition-transform group-hover:translate-x-1">
              &rarr;
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
