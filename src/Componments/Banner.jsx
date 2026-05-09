"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const slides = [
  {
    title: "Summer Sale 50% OFF",
    subtitle: "Grab the hottest deals of the season",
    emoji: "☀️🛍️",
    badge: "🔥 Limited Offer",
  },
  {
    title: "Hot Deals Are Live",
    subtitle: "Best products at unbeatable prices",
    emoji: "🔥💥",
    badge: "Top Trending",
  },
  {
    title: "Mega Discount Week",
    subtitle: "Save more on every purchase",
    emoji: "🎉🛒",
    badge: "Mega Sale",
  },
];

const Banner = () => {
  const [index, setIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="w-full min-h-[85vh] flex items-center bg-gradient-to-br from-orange-700 via-red-400 to-pink-400 text-white relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col md:flex-row items-center justify-between gap-12">

        {/* Left Content */}
        <div className="space-y-8 text-center md:text-left transition-all duration-500">

          {/* Badge */}
          <div className="inline-block bg-white/20 px-5 py-2 rounded-full text-sm font-semibold">
            {slides[index].badge}
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            {slides[index].title}
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/90 max-w-xl">
            {slides[index].subtitle}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start">

            <Link
              href="/products"
              className="bg-white text-red-600 font-bold px-8 py-4 rounded-full hover:bg-gray-100 transition shadow-lg"
            >
              Shop Now →
            </Link>

            <button
              onClick={prevSlide}
              className="border border-white px-6 py-4 rounded-full hover:bg-white hover:text-red-600 transition"
            >
              Prev
            </button>

            <button
              onClick={nextSlide}
              className="border border-white px-6 py-4 rounded-full hover:bg-white hover:text-red-600 transition"
            >
              Next
            </button>

          </div>

        </div>

        {/* Right Visual */}
        <div className="relative text-center">

          <div className="text-[120px] md:text-[180px] animate-bounce transition-all duration-500">
            {slides[index].emoji}
          </div>

          {/* Floating badge */}
          <div className="absolute -top-6 -right-6 bg-yellow-300 text-black px-5 py-2 rounded-full font-bold shadow-xl animate-pulse">
            {index + 1} / {slides.length}
          </div>

        </div>

      </div>

    </section>
  );
};

export default Banner;