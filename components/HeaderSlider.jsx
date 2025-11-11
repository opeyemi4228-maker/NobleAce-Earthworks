'use client';
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { assets } from "@/assets/assets";
import Image from "next/image";

// --- Particle Effect ---
function MiningParticles({ count = 60 }) {
  const [particles, setParticles] = useState([]);
  useEffect(() => {
    const arr = [];
    for (let i = 0; i < count; i++) {
      arr.push({
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 3 + Math.random() * 5,
        delay: Math.random() * 8,
        color:
          i % 3 === 0
            ? "#B87333"
            : i % 2 === 0
            ? "#003B5C"
            : "#696969",
      });
    }
    setParticles(arr);
  }, [count]);
  return (
    <div className="absolute inset-0 pointer-events-none z-10">
      {particles.map((p, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
            background: p.color,
            opacity: 0.5,
            filter: "blur(1px)",
          }}
          animate={{
            y: [0, -24, 0],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            repeat: Infinity,
            duration: 8 + p.delay,
            ease: "easeInOut",
            delay: p.delay,
          }}
        />
      ))}
    </div>
  );
}

// --- Main Hero Banner ---
export default function NobleAceHeroBanner() {
  const sectionRef = useRef();

  return (
    <section
      ref={sectionRef}
      className="hero-section relative w-screen min-h-screen overflow-hidden flex items-center justify-center"
      style={{
        marginLeft: "calc(-50vw + 50%)",
        marginRight: "calc(-50vw + 50%)",
        width: "100vw",
        maxWidth: "100vw",
        minHeight: "100vh",
        padding: 0,
        position: "relative",
      }}
      aria-label="NobleAce Earthworks mining exploration, licensing, and consultancy services"
    >
      {/* --- BG Image Layer --- */}
      <Image
        src={assets.mine1}
        alt="NobleAce Earthworks mining exploration and consultancy operations"
        fill
        priority
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ objectFit: "cover" }}
      />

      {/* --- Overlay and Particles --- */}
      <div className="absolute inset-0 w-full h-full bg-black/15 pointer-events-none z-10" />
      <MiningParticles count={70} />

      {/* --- Content Overlay --- */}
      <div
        className="absolute bottom-8 right-8 flex flex-col items-end gap-4 z-20"
        style={{
          maxWidth: "90vw",
        }}
      >
        <div className="bg-white/60 px-6 py-4 rounded-lg shadow-lg backdrop-blur-sm">
          <span className="uppercase text-xs font-semibold tracking-wider text-[#003B5C] mb-2 block">
            ADVANCING MINING. EMPOWERING INDUSTRY.
          </span>
          <h1 className="text-[#1C1C1C] font-bold text-3xl md:text-5xl leading-tight mb-2 text-left">
            EXPERT IN MINING
            <br />
             EXPLORATION.
          </h1>
          <div className="flex flex-col md:flex-row gap-3 mt-4">
            <button className="h-12 px-8 rounded-[2px] bg-[#003B5C] text-white font-bold uppercase tracking-wide shadow hover:shadow-lg hover:border-[#B87333] border-2 border-transparent transition-all duration-300">
              Explore Our Mining Services
            </button>
            <button className="h-12 px-8 rounded-[2px] border-2 border-[#B87333] text-[#003B5C] bg-white font-bold uppercase tracking-wide hover:bg-[#B87333] hover:text-white transition-all duration-300">
              View Our Reports
            </button>
          </div>
        </div>
      </div>

      {/* --- Info Button --- */}
      <button
        className="fixed bottom-8 right-8 z-30 bg-[#003B5C] text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg border-2 border-[#B87333] focus:outline-none"
        aria-label="Contact NobleAce Earthworks"
        tabIndex={0}
      >
        <svg width="32" height="32" fill="none" stroke="#B87333" strokeWidth="2">
          <circle cx="16" cy="16" r="14" />
          <path d="M16 10v8M16 22h.01" />
        </svg>
      </button>

      {/* --- Responsive Styles --- */}
      <style jsx>{`
        .hero-section {
          margin-left: calc(-50vw + 50%);
          margin-right: calc(-50vw + 50%);
          width: 100vw;
          max-width: 100vw;
          min-height: 100vh;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          padding: 0;
          position: relative;
        }
        @media (max-width: 768px) {
          .hero-section {
            background-position: center top;
          }
          .hero-section h1 {
            font-size: 2rem;
          }
          .hero-section .bg-white\\/80 {
            padding: 1rem;
          }
        }
      `}</style>
    </section>
  );
}
