import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { assets } from "@/assets/assets";
import Image from "next/image";

// --- Card Data ---
const cards = [
  {
    title: "Mining Exploration",
    desc: "NobleAce Earthworks provides comprehensive geological surveys and exploration services to identify mineral resources with precision and efficiency.",
    image: assets.pic21,
    link: "#exploration",
    cta: "Discover More",
  },
  {
    title: "Licensing & Regulatory Compliance",
    desc: "We assist clients in obtaining mining licenses and ensuring compliance with local regulations, simplifying the licensing process for sustainable operations.",
    image: assets.mine4,
    link: "#licensing",
    cta: "Learn How",
  },
  {
    title: "Mining Consultancy",
    desc: "Our expert geologists and engineers provide consultancy on mining operations, feasibility studies, and project management to optimize productivity.",
    image: assets.mine3,
    link: "#consultancy",
    cta: "Get Consulting",
  },
];

// --- Utility: Easing ---
const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

// --- Parallax Card ---
function ParallaxCard({ card, index, activeIndex, setActiveIndex }) {
  const ref = useRef();
  const inView = useInView(ref, { threshold: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { delay: index * 0.15, duration: 0.8, ease: [0.4, 0, 0.2, 1] },
      });
    }
  }, [inView, controls, index]);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const windowH = window.innerHeight;
      if (rect.top < windowH && rect.bottom > 0) {
        const progress = (windowH - rect.top) / (windowH + rect.height);
        const img = ref.current.querySelector(".card-image");
        const content = ref.current.querySelector(".card-content");
        if (img)
          img.style.transform = `translateY(${
            (progress - 0.5) * 40 * (index % 2 === 0 ? 1 : -1)
          }px) scale(1.08)`;
        if (content)
          content.style.transform = `translateY(${-(progress - 0.5) * 12}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [index]);

  const handleMouseMove = (e) => {
    const cardEl = ref.current;
    if (!cardEl) return;
    const rect = cardEl.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    cardEl.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateY(-8px)
      scale3d(1.02,1.02,1.02)
    `;
    cardEl.querySelector(".card-image").style.transform += ` translateX(${
      -rotateY * 0.5
    }px) translateY(${-rotateX * 0.5}px) scale(1.12)`;
  };
  const handleMouseLeave = () => {
    const cardEl = ref.current;
    if (!cardEl) return;
    cardEl.style.transform = "";
    cardEl.querySelector(".card-image").style.transform = "";
  };

  const handleClick = (e) => {
    e.preventDefault();
    setActiveIndex(index);
    setTimeout(() => {
      window.location.hash = card.id;
    }, 700);
  };

  return (
    <motion.article
      ref={ref}
      className={`discovery-card card-hidden relative flex flex-col overflow-hidden bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-400 cursor-pointer`}
      style={{
        height: 340,
        minWidth: 0,
        opacity: 0,
        transform: "translateY(60px) scale(0.95)",
        borderRadius: 16,
        boxShadow:
          activeIndex === index
            ? "0 8px 32px 0 rgba(16,185,129,0.18),0 0 0 4px rgba(16,185,129,0.08)"
            : "0 4px 20px rgba(0,0,0,0.08)",
        zIndex: 1,
      }}
      animate={controls}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      data-category={card.title}
      tabIndex={0}
      aria-label={card.title}
    >
      <div className="card-image-container relative h-[56%] overflow-hidden">
        <Image
          src={card.image}
          alt={card.title}
          className="card-image w-full h-full object-cover transition-transform duration-700"
          style={{
            filter: "brightness(0.95) contrast(1.05)",
            transition: "transform 0.6s cubic-bezier(0.4,0,0.2,1)",
            height: "100%",
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
          }}
          loading="lazy"
        />
        <div
          className="card-overlay absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom,rgba(255,255,255,0.7) 0%,rgba(255,255,255,0.0) 60%,rgba(0,0,0,0.08) 100%)",
            transition: "opacity 0.4s",
            opacity: 0.5,
          }}
        />
      </div>

      <div className="card-content flex flex-col justify-between px-6 py-4 relative h-[44%]">
        <h3 className="card-title text-[16px] font-bold leading-snug text-[#1A1A1A] mb-1">
          {card.title}
        </h3>
        <p className="text-gray-700 text-[12px] mb-4">{card.desc}</p>
        <a
          href={card.link}
          className="card-link flex items-center gap-2 text-sky-700 font-medium text-base mt-auto group cursor-pointer relative"
          aria-label={card.cta}
        >
          <svg width={22} height={22} fill="none" stroke="#00B4D8" strokeWidth={2}>
            <path d="M7 11h8M11 7l4 4-4 4" />
          </svg>
          <span className="relative">
            {card.cta}
            <span
              className="absolute left-0 bottom-[-2px] w-full h-[2px] bg-gradient-to-r from-blue-800 to-blue-600"
              style={{
                transform: "scaleX(0)",
                transition: "transform 0.3s ease-out",
              }}
            />
          </span>
        </a>
      </div>
    </motion.article>
  );
}

// --- Progress Bar ---
function SectionProgress({ activeIndex, setActiveIndex }) {
  return (
    <div className="scroll-progress-container flex items-center gap-6 mt-10 mb-2 w-full max-w-4xl mx-auto">
      <div className="progress-bar flex-1 h-[2px] bg-[#E0E0E0] rounded overflow-hidden relative">
        <div
          className="progress-fill h-full rounded"
          style={{
            width: `${((activeIndex + 1) / cards.length) * 100}%`,
            background: "linear-gradient(90deg,#00B4D8 0%,#10B981 100%)",
            transition: "width 0.2s linear",
          }}
        />
      </div>
      <div className="progress-dots flex gap-3">
        {cards.map((_, i) => (
          <button
            key={i}
            className={`progress-dot w-3 h-3 rounded-full transition-all duration-300 ${
              activeIndex === i
                ? "bg-[#43A047] w-8 rounded-[5px]"
                : "bg-[#CCCCCC]"
            }`}
            aria-label={`View card ${i + 1}`}
            aria-current={activeIndex === i ? "true" : undefined}
            onClick={() => setActiveIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}

// --- Main Section ---
export default function MiningServicesSection() {
  const sectionRef = useRef();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const cardEls = sectionRef.current.querySelectorAll(".discovery-card");
    const handler = () => {
      let maxVisible = 0;
      let maxIdx = 0;
      cardEls.forEach((card, i) => {
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
      window.history.replaceState(null, "", `#${cards[maxIdx].id}`);
    };
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full px-4 py-24 bg-white relative"
      style={{ minHeight: 700 }}
      aria-label="NobleAce Earthworks mining exploration, licensing, and consultancy services"
    >
      {/* Header */}
      <div className="max-w-4xl mx-1 mb-12">
        <span className="uppercase text-xs tracking-widest font-semibold text-[#666] text-[12px] mb-3 block">
          MINING SERVICES
        </span>
        <h2 className="text-xl md:text-4xl font-bold text-gray-800 mb-4">
          EXPERT MINING SOLUTION
        </h2>
        <p className="text-lg font-light text-gray-700 mb-8 max-w-2xl">
          NobleAce Earthworks delivers end-to-end mining services, including exploration, licensing, and consultancy, ensuring sustainable and compliant operations for clients worldwide.
        </p>
        <a
          href="#"
          className="group flex items-center gap-2 px-6 py-3 rounded-full border border-green-950 text-green-900 font-semibold text-base transition-all duration-300 hover:bg-green-50 hover:shadow-lg focus:outline-none cursor-pointer relative overflow-hidden"
          aria-label="Learn more about NobleAce Mining Services"
        >
          Learn More About Our Services
          <span className="ml-2 flex items-center justify-center w-8 h-8 rounded-full border border-green-800 group-hover:bg-green-100 transition-all duration-300">
            <svg width={22} height={22} fill="none" stroke="#000" strokeWidth={2}>
              <circle cx="11" cy="11" r="10" stroke="none" />
              <path d="M7 11h8M11 7l4 4-4 4" />
            </svg>
          </span>
        </a>
      </div>

      {/* Progress Bar */}
      <SectionProgress activeIndex={activeIndex} setActiveIndex={setActiveIndex} />

      {/* Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10" style={{ marginBottom: 40 }}>
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
    </section>
  );
}
