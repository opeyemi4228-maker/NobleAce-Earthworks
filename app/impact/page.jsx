'use client';

import React, { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer1 from "@/components/Footer1";
import { motion, useInView, useReducedMotion } from "framer-motion";

/* ---------- Font import ---------- */
const MontserratFont = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');
    .font-montserrat { font-family: 'Montserrat', sans-serif !important; }
    @media (prefers-reduced-motion: reduce) {
      .reduce-motion { animation: none !important; transition: none !important; }
    }
  `}</style>
);

/* ---------- Motion variants ---------- */
const kenBurnsBg = {
  initial: { opacity: 0, scale: 1.0, filter: "blur(3px)" },
  animate: { opacity: 1, scale: 1.0, filter: "blur(0px)", transition: { duration: 1.8, ease: [0.25,0.46,0.45,0.94] } },
  kenBurns: { scale: [1, 1.05], transition: { duration: 10, ease: "linear", repeat: Infinity, repeatType: "loop" } },
};

const headline = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.3 } } };
const sub = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.6 } } };
const cta = (i=0) => ({ hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.6, delay: 0.9 + i*0.15 } } });
const sectionFade = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } } };
const splitLeft = { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.9 } } };
const splitRight = { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.9 } } };
const tile = (i=0) => ({ hidden: { opacity: 0, y: 40, scale: 0.96 }, visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.75, delay: i*0.18, ease: [0.34,1.56,0.64,1] } } });

/* ---------- Small helper hooks ---------- */
function useScrollIndicator() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const scrolled = (window.scrollY / (doc.scrollHeight - doc.clientHeight)) * 100;
      setProgress(Math.min(100, Math.max(0, scrolled)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return progress;
}

/* ---------- Cookie banner ---------- */
function CookieBanner() {
  const [accepted, setAccepted] = useState(() => typeof window !== "undefined" && localStorage.getItem("impact_cookie") === "20");
  useEffect(() => {
    if (accepted) localStorage.setItem("impact_cookie", "20");
  }, [accepted]);
  if (accepted) return null;
  return (
    <motion.div
      initial={{ y: 120, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 2, duration: 0.45 }}
      className="fixed left-4 right-4 md:left-8 md:right-8 bottom-6 z-50 bg-white rounded-lg shadow-lg p-4 flex flex-col md:flex-row items-center gap-3 font-montserrat"
      role="dialog"
      aria-live="polite"
    >
      <div className="text-sm text-gray-700 max-w-xl">
        We use cookies to improve your experience and analyze site engagement in line with our sustainability principles.
      </div>
      <div className="ml-auto flex gap-2">
        <button className="px-4 py-2 text-sm rounded border border-gray-300" onClick={() => setAccepted(true)}>Accept</button>
        <button className="px-4 py-2 text-sm rounded bg-gray-100" onClick={() => setAccepted(true)}>Settings</button>
      </div>
    </motion.div>
  );
}

/* ---------- Hero component ---------- */
function Hero() {
  const prefersReduced = useReducedMotion();
  const heroRef = useRef(null);
  const inView = useInView(heroRef, { once: true, amount: 0.2 });
  const progress = useScrollIndicator();

  return (
    <header className="relative w-full overflow-hidden">
      <motion.div
        ref={heroRef}
        className="h-[66vh] md:h-[78vh] relative flex items-center justify-center"
        variants={kenBurnsBg}
        initial="initial"
        animate={prefersReduced ? "animate" : ["animate", "kenBurns"]}
        style={{
          backgroundImage: "linear-gradient(180deg, rgba(2,6,23,0.55), rgba(2,6,23,0.2)), url('https://images.unsplash.com/photo-1505842465776-3b4953ca4f44?auto=format&fit=crop&w=1800&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-hidden="true"
      />

      {/* breadcrumb */}
      <nav className="absolute top-6 left-6 mt-12 z-30">
        <ul className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded backdrop-blur-sm text-white text-sm font-montserrat">
          <li><a href="/" className="opacity-80 hover:opacity-100 transition-opacity">Home</a></li>
          <li className="opacity-60">/</li>
          <li className="font-medium underline decoration-white/40 underline-offset-2">Community Impact Service</li>
        </ul>
      </nav>

      {/* hero content */}
      <div className="absolute inset-0 z-40 flex items-center justify-center px-6">
        <div className="max-w-5xl text-center">
          <motion.h1
            variants={headline}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="text-3xl md:text-5xl lg:text-6xl text-white font-extrabold leading-tight tracking-tight font-montserrat"
          >
            EMPOWERING COMMUNITIES THROUGH SUSTAINABLE EARTHWORKS
          </motion.h1>

          <motion.p
            variants={sub}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="mt-4 text-base md:text-lg text-white/90 font-medium font-montserrat"
          >
            Building partnerships that drive local development, environmental education, and economic resilience across mining communities.
          </motion.p>

          <motion.div
            variants={cta(0)}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="mt-8 flex items-center justify-center gap-4"
          >
            <a
              href="#mission"
              className="inline-flex items-center gap-3 px-5 py-3 rounded-lg bg-white text-[#0b2130] font-semibold shadow hover:scale-[1.02] transition-transform font-montserrat"
            >
              Learn more
              <span className="inline-block transform transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#programs"
              className="inline-flex items-center gap-3 px-5 py-3 rounded-lg border border-white/40 text-white hover:bg-white/10 transition font-montserrat"
            >
              Our Programs
              <span className="inline-block transform transition-transform group-hover:translate-x-1">🌍</span>
            </a>
          </motion.div>
        </div>
      </div>
    </header>
  );
}

/* ---------- Mission Section ---------- */
function MissionSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });
  return (
    <section id="mission" className="max-w-6xl mx-auto px-4 md:px-8 py-16 font-montserrat">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <motion.div
          ref={ref}
          variants={splitLeft}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="md:col-span-7"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#0b2130] tracking-wider uppercase">
            MINING WITH A HUMAN AND ENVIRONMENTAL PURPOSE
          </h2>
          <p className="mt-6 text-gray-700 text-lg leading-relaxed">
            At NobleAce Earthworks, our mission extends beyond resource extraction — we are dedicated to community empowerment, education, and sustainable transformation.
          </p>

          <ul className="mt-6 space-y-3 text-gray-600 text-base">
            {[
              "Community Training & Skill Development",
              "Environmental Education & Awareness Programs",
              "Water Resource & Sanitation Projects",
              "Local Business Empowerment Initiatives",
              "Eco-Restoration & Reforestation Campaigns",
            ].map((b, i) => (
              <motion.li key={b} initial={{ opacity: 0, x: -24 }} animate={inView ? { opacity: 1, x: 0, transition: { delay: 0.15 + i*0.12 } } : {}} className="flex items-start gap-3">
                <span className="mt-1 text-[#0066cc]">›</span>
                <span>{b}</span>
              </motion.li>
            ))}
          </ul>

          <div className="mt-8">
            <a className="inline-flex items-center gap-3 px-4 py-2 rounded border border-[#0b2130] text-[#0b2130] hover:shadow-md transition text-sm md:text-base" href="#discover">
              Discover Our Impact
            </a>
            <div className="mt-2 text-xs text-gray-400">Empowering People, Protecting Nature</div>
          </div>
        </motion.div>

        <motion.div
          variants={splitRight}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="md:col-span-5"
        >
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img src="https://images.unsplash.com/photo-1598368195834-1b1bbf1d4d2b?auto=format&fit=crop&w=1200&q=80" alt="Community training session in mining region" className="w-full h-full object-cover transform transition-transform duration-400 hover:scale-[1.02]" loading="lazy" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- Page Component ---------- */
export default function ImpactPage() {
  return (
    <div className="font-montserrat text-[#0b2130] bg-white min-h-screen antialiased">
      <MontserratFont />
      <Navbar />
      <Hero />
      <main>
        <MissionSection />
        {/* Add ServicesSection, BookingSection, LifestyleSection here with same font-montserrat */}
      </main>
      <CookieBanner />
      <Footer1 />
    </div>
  );
}
