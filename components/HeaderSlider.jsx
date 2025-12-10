'use client';
import React, { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

// --- Get A Quote Modal ---
function GetAQuoteModal({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* --- Backdrop with Lens Blur --- */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* --- Modal Sliding Up, Starts below Navbar on large screens --- */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
            className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-24 md:pt-32"
          >
            <div className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl max-w-lg w-full p-8 relative z-50">
              {/* --- Bold Close Button --- */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-[#B87333] hover:text-[#003B5C] text-3xl font-extrabold"
                aria-label="Close Get A Quote Modal"
              >
                ×
              </button>
              <h2 className="text-2xl font-extrabold text-[#003B5C] mb-4">
                Get A Quote
              </h2>
              <p className="text-gray-600 mb-6">
                Fill out the form below and our team will get back to you promptly.
              </p>
              <form className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#B87333]"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#B87333]"
                />
                <input
                  type="text"
                  placeholder="Company / Project"
                  className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#B87333]"
                />
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#B87333]"
                />
                <button
                  type="submit"
                  className="bg-[#003B5C] text-white font-bold uppercase py-3 rounded-md hover:bg-[#B87333] transition-all duration-300 shadow-md hover:shadow-xl"
                >
                  Submit
                </button>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

// --- Main Hero Banner ---
export default function NobleAceHeroBanner() {
  const sectionRef = useRef();
  const [modalOpen, setModalOpen] = useState(false);

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
        src={assets.pic10}
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
        style={{ maxWidth: "90vw" }}
      >
        <div className="bg-white/60 px-6 py-4 rounded-lg shadow-lg backdrop-blur-sm">
          <span className="uppercase text-xs font-bold tracking-wider text-[#003B5C] mb-2 block">
            Unlocking the Potential of Earth's Resources.
          </span>
          <h1 className="text-[#1C1C1C] font-extrabold text-3xl md:text-5xl leading-tight mb-2 text-left">
            MINERAL EXPLORATION & <br /> CONSULTANCY SERVICES
          </h1>
          <div className="flex flex-col md:flex-row gap-3 mt-4">
            <button className="h-12 px-8 rounded-[2px] bg-[#003B5C] text-white font-bold uppercase tracking-wide shadow hover:shadow-lg hover:border-[#B87333] border-2 border-transparent transition-all duration-300">
              Explore Our Services
            </button>
            <button
              onClick={() => setModalOpen(true)}
              className="h-12 px-8 rounded-[2px] border-2 border-[#B87333] text-[#003B5C] bg-white font-bold uppercase tracking-wide hover:bg-[#B87333] hover:text-white transition-all duration-300"
            >
              Get A Quote
            </button>
          </div>
        </div>
      </div>

      {/* --- Floating Contact Button --- */}
      <button
        className="fixed bottom-8 right-8 z-30 bg-[#003B5C] text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg border-2 border-[#B87333] focus:outline-none"
        aria-label="Contact NobleAce Earthworks"
      >
        <svg width="32" height="32" fill="none" stroke="#B87333" strokeWidth="2">
          <circle cx="16" cy="16" r="14" />
          <path d="M16 10v8M16 22h.01" />
        </svg>
      </button>

      {/* --- Get A Quote Modal --- */}
      <GetAQuoteModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

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
