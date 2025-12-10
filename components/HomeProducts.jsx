"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { assets } from "@/assets/assets";

// --- Category Colors ---
const categoryColors = {
  "Drilling & Resource Definition": "#007A3D",
  "Geological Operations": "#003D5C",
  "GeoPhysical Operations": "#8B4513",
  Investors: "#1E3A8A",
};

// --- Card Data ---
const cards = [
  {
    category: "Drilling & Resource Definition",
    image: assets.pic21,
    link: "/sustainability",
    desc: "Leading sustainable mining practices through eco-conscious engineering and reduced environmental footprint.",
  },
  {
    category: "Geological Operations",
    image: assets.pic20,
    link: "/what-we-do",
    desc: "Delivering innovative geotechnical and construction solutions that transform mineral resources responsibly.",
  },
  {
    category: "GeoPhysical Operations",
    image: assets.pic13,
    link: "/careers",
    desc: "Join a growing team of mining experts redefining modern earthworks and sustainable mining operations.",
  },
  {
    category: "Investors",
    image: assets.mine2,
    link: "/investors",
    desc: "Invest in a vision that merges profitability, environmental care, and community empowerment.",
  },
];

// --- Parallax Card Component ---
function ParallaxCard({ card, index, activeIndex, setActiveIndex }) {
  const ref = useRef();
  const inView = useInView(ref, { threshold: 0.3 });
  const controls = useAnimation();
  const router = useRouter();

  // Scroll fade-in animation
  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { delay: index * 0.15, duration: 0.8 },
      });
    }
  }, [inView]);

  // Mouse tilt effect
  const handleMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = ((y - rect.height / 2) / rect.height) * -12;
    const rotateY = ((x - rect.width / 2) / rect.width) * 12;

    el.style.transform = `
      perspective(900px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.03)
    `;
  };

  const handleMouseLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "";
  };

  const handleNavigate = (e) => {
    e.stopPropagation();
    if (card?.link) router.push(card.link);
  };

  return (
    <motion.div
      ref={ref}
      className="relative flex flex-col bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transition-all"
      style={{
        opacity: 0,
        transform: "translateY(60px) scale(0.95)",
        height: 450,
      }}
      animate={controls}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => setActiveIndex(index)}
    >
      {/* Image */}
      <div className="relative h-[60%] overflow-hidden">
        <Image
          src={card.image}
          alt={card.category}
          className="w-full h-full object-cover transition-transform duration-700"
          style={{ filter: "brightness(0.85)" }}
          fill
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
      </div>

      {/* Content */}
      <div className="px-5 py-8 relative h-[40%] flex flex-col justify-between">
        <span
          className="font-bold uppercase text-xs tracking-widest mb-2"
          style={{ color: categoryColors[card.category] }}
        >
          {card.category}
        </span>

        {/* Description fade-in */}
        <motion.p
          className="text-[14px] text-gray-600 leading-relaxed line-clamp-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {card.desc}
        </motion.p>

        {/* Link Button */}
        <button
          onClick={handleNavigate}
          className="absolute bottom-5 right-5 w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center transition-all hover:bg-[#007A3D] hover:border-[#007A3D] hover:text-white"
        >
          →
        </button>
      </div>
    </motion.div>
  );
}

// --- Progress Bar (Line + Dots) ---
function DiscoverProgress({ activeIndex }) {
  return (
    <div className="flex items-center gap-6 mt-10 mx-auto max-w-xl w-full">
      <div className="h-[3px] bg-gray-200 w-full rounded overflow-hidden relative">
        <div
          className="h-full transition-all duration-300"
          style={{
            width: `${((activeIndex + 1) / cards.length) * 100}%`,
            background: "linear-gradient(90deg,#007A3D,#00B15D)",
          }}
        />
      </div>

      <div className="flex gap-3">
        {cards.map((_, i) => (
          <div
            key={i}
            className={`transition-all duration-300 rounded-full ${
              activeIndex === i
                ? "bg-[#007A3D] w-7 h-3 rounded-md"
                : "w-3 h-3 bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

// --- MAIN SECTION (Minimal + Progress Bar + Header/Intro) ---
export default function DiscoverMinimal() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef();

  // Detect which card is most visible
  useEffect(() => {
    const cardsEl = sectionRef.current?.querySelectorAll(".relative");
    if (!cardsEl) return;

    const handler = () => {
      let maxVisible = 0;
      let maxIdx = 0;

      cardsEl.forEach((card, i) => {
        const rect = card.getBoundingClientRect();
        const visible =
          Math.max(0, Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0)) /
          rect.height;

        if (visible > maxVisible) {
          maxVisible = visible;
          maxIdx = i;
        }
      });

      setActiveIndex(maxIdx);
    };

    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-16">
      {/* Header */}
      <motion.h2
        className="text-xl md:text-4xl font-semibold uppercase tracking-[2px] text-gray-800 mb-2"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Discover NobleAce Earthworks
      </motion.h2>

      {/* Intro */}
      <motion.p
        className="intro-text max-w-2xl text-[18px] font-light leading-relaxed text-[#333] mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        Explore how NobleAce Earthworks pioneers sustainable mining, advanced geotechnical innovation, and eco-aligned earthworks that empower industries, uplift communities, and protect the planet.
      </motion.p>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {cards.map((card, i) => (
          <ParallaxCard
            key={i}
            card={card}
            index={i}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <DiscoverProgress activeIndex={activeIndex} />
    </section>
  );
}
