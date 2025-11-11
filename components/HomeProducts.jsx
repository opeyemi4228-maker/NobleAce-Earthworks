import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import { useAppContext } from "@/context/AppContext";
import { assets } from "@/assets/assets";

// --- Category Colors ---
const categoryColors = {
  sustainability: "#007A3D",
  "what-we-do": "#003D5C",
  careers: "#8B4513",
  investors: "#1E3A8A",
};

// --- Card Data ---
const cards = [
  {
    category: "Sustainability",
    title: "Building a Greener, Smarter Mining Future",
    image: assets.mine5,
    link: "/sustainability",
    desc: "Leading sustainable mining practices through eco-conscious engineering and reduced environmental footprint.",
  },
  {
    category: "What-we-do",
    title: "From Earthworks to Resource Transformation",
    image: assets.mine4,
    link: "/what-we-do",
    desc: "Delivering innovative geotechnical and construction solutions that transform mineral resources responsibly.",
  },
  {
    category: "Careers",
    title: "Shape the Future of Mining with Us",
    image: assets.mine3,
    link: "/careers",
    desc: "Join a growing team of mining experts redefining modern earthworks and sustainable mining operations.",
  },
  {
    category: "Investors",
    title: "Driving Long-Term Value through Responsible Exploration",
    image: assets.mine2,
    link: "/investors",
    desc: "Invest in a vision that merges profitability, environmental care, and community empowerment.",
  },
];

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
    cardEl.querySelector(".card-image").style.transform += ` translateX(${-rotateY * 0.5}px) translateY(${-rotateX * 0.5}px) scale(1.12)`;
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
      window.location.href = card.link;
    }, 700);
  };

  return (
    <motion.article
      ref={ref}
      className={`discovery-card card-hidden relative flex flex-col overflow-hidden bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-400 cursor-pointer`}
      style={{
        height: 480,
        minWidth: 0,
        opacity: 0,
        transform: "translateY(60px) scale(0.95)",
        borderRadius: 12,
        boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
        zIndex: activeIndex === index ? 100 : 1,
      }}
      animate={controls}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      data-category={card.category}
      tabIndex={0}
      aria-label={card.title}
    >
      <div className="card-image-container relative h-[65%] overflow-hidden">
        <Image
          src={card.image}
          alt={card.title}
          className="card-image w-full h-full object-cover transition-transform duration-700"
          style={{ filter: "brightness(0.85)", transition: "transform 0.6s cubic-bezier(0.4,0,0.2,1)" }}
          loading="lazy"
          fill
        />
        <div
          className="card-overlay absolute inset-0"
          style={{
            background: "linear-gradient(to bottom,rgba(0,0,0,0) 0%,rgba(0,0,0,0.3) 60%,rgba(0,0,0,0.6) 100%)",
            transition: "opacity 0.4s",
            opacity: 0.5,
          }}
        />
      </div>

      <div className="card-content flex flex-col justify-between px-6 py-6 relative h-[35%]">
        <span
          className="card-category font-bold uppercase text-xs tracking-wider mb-2"
          style={{
            color: categoryColors[card.category],
            letterSpacing: 1.5,
            fontWeight: 700,
            fontSize: 11,
            transition: "color 0.3s",
          }}
        >
          {card.category.replace("-", " ")}
        </span>
        <h3
          className="card-title text-[16px] font-normal leading-snug text-[#1A1A1A] mb-9"
          style={{ maxHeight: 60, overflow: "hidden", lineHeight: 1.4 }}
        >
          {card.title}
        </h3>
        <a
          href={card.link}
          className="card-link absolute bottom-6 right-6 w-11 h-11 rounded-full border-2 border-[#CCC] flex items-center justify-center bg-transparent transition-all duration-300 hover:bg-[#007A3D] hover:border-[#007A3D]"
          aria-label={`Learn more about ${card.category}`}
          style={{ transition: "all 0.3s" }}
        >
          <svg width={20} height={20} fill="none" stroke="#333" strokeWidth={2}>
            <circle cx="10" cy="10" r="9" stroke="none" />
            <path d="M5 10h10M10 5l5 5-5 5" />
          </svg>
        </a>
      </div>
      {activeIndex === index && (
        <motion.div className="absolute inset-0 z-50" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }} />
      )}
    </motion.article>
  );
}

// --- Progress Bar & Dots ---
function SectionProgress({ activeIndex, setActiveIndex }) {
  return (
    <div className="scroll-progress-container flex items-center gap-6 mt-10 mb-2 w-full max-w-4xl mx-auto">
      <div className="progress-bar flex-1 h-[3px] bg-[#E0E0E0] rounded overflow-hidden relative">
        <div
          className="progress-fill h-full rounded"
          style={{
            width: `${((activeIndex + 1) / cards.length) * 100}%`,
            background: "linear-gradient(90deg,#007A3D 0%,#00A651 100%)",
            transition: "width 0.2s linear",
          }}
        />
      </div>
      <div className="progress-dots flex gap-3">
        {cards.map((_, i) => (
          <button
            key={i}
            className={`progress-dot w-3 h-3 rounded-full transition-all duration-300 ${
              activeIndex === i ? "bg-[#007A3D] w-8 rounded-[5px]" : "bg-[#CCCCCC]"
            }`}
            aria-label={`View card ${i + 1}`}
            aria-current={activeIndex === i ? "true" : undefined}
            onClick={() => setActiveIndex(i)}
            style={{ border: "none", cursor: "pointer", padding: 0, outline: "none" }}
          />
        ))}
      </div>
    </div>
  );
}

// --- Main Discover Section ---
export default function DiscoverSection() {
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
    };
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="discovery-section w-full px-4 py-24 bg-gradient-to-b from-[#f8f8f8] to-[#fff] relative"
      style={{ minHeight: 900 }}
      aria-label="Discover NobleAce Earthworks Mining and Earthworks Services"
    >
      {/* Header */}
      <motion.h2
        className="text-[12px] font-semibold uppercase text-xl md:text-4xl tracking-[2px] text-gray-800 mb-2"
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

      {/* Card Grid */}
      <div className="discovery-grid grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-10 px-5">
        {cards.map((card, i) => (
          <ParallaxCard key={card.category} card={card} index={i} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
        ))}
      </div>

      {/* Progress Bar & Dots */}
      <SectionProgress activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
      <div className="text-center text-base text-[#888] mt-2">{`Section progress: ${activeIndex + 1} of ${cards.length} active`}</div>
    </section>
  );
}
