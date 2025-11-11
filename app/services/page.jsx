'use client';
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer1 from "@/components/Footer1";
import FAQSection from "@/components/FAQSection";

// --- Font Import ---
const OutfitFont = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&display=swap');
    body, .font-outfit {
      font-family: 'Outfit', sans-serif !important;
    }
  `}</style>
);

// --- Animation Variants ---
const heroBgVariants = {
  initial: { opacity: 0, scale: 1.15, filter: "blur(5px)" },
  animate: { opacity: 1, scale: 1, filter: "blur(0px)", transition: { duration: 2, ease: [0.25, 0.46, 0.45, 0.94] } },
  kenBurns: { scale: 1.07, transition: { duration: 25, ease: "linear" } },
};
const heroHeadlineVariants = { hidden: { opacity: 0, clipPath: "inset(0 100% 0 0)" }, visible: { opacity: 1, clipPath: "inset(0 0 0 0)", transition: { duration: 1.2, delay: 0.4, ease: "easeOut" } } };
const heroSubVariants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.8, ease: "easeOut" } } };
const introColVariants = { hidden: { opacity: 0, y: 40, filter: "blur(3px)" }, visible: i => ({ opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 1, delay: i * 0.25, ease: "easeOut" } }) };

// --- Data ---
const focusAreas = [
  { title: "Mineral Exploration & Targeting", tag: "Exploration", img: "https://images.unsplash.com/photo-1504945005722-7e1b5f0f7f90?auto=format&fit=crop&w=800&q=80" },
  { title: "Geotechnical Investigations & Pit Stability", tag: "Geotechnical", img: "https://images.unsplash.com/photo-1529257414776-1963f0b6a0d6?auto=format&fit=crop&w=800&q=80" },
  { title: "Environmental Assessment & Reclamation Planning", tag: "EIA & Rehab", img: "https://images.unsplash.com/photo-1509228627153-9f1b3b7e6a37?auto=format&fit=crop&w=800&q=80" },
  { title: "Hydrogeology & Water Management", tag: "Hydrogeology", img: "https://images.unsplash.com/photo-1505672678657-cc7037095e2c?auto=format&fit=crop&w=800&q=80" },
  { title: "GIS, Remote Sensing & Geological Modelling", tag: "GIS & Modelling", img: "https://images.unsplash.com/photo-1526378729438-38b1b9d7b59b?auto=format&fit=crop&w=800&q=80" },
];

// --- Helper Components ---
function FocusCard({ area, index }) {
  const cardRef = useRef(null);
  const inView = useInView(cardRef, { margin: "-100px", once: true });
  return (
    <motion.article
      ref={cardRef}
      variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.7, delay: index * 0.15 } } }}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="group bg-white rounded-xl shadow-md flex-shrink-0 w-[340px] md:w-[400px] mr-8 border border-transparent hover:border-[#00A86B] transition-all duration-300"
    >
      <div className="relative aspect-[16/9] w-full overflow-hidden">
        <img src={area.img} alt={area.title} className="w-full h-full object-cover transition-transform duration-400" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        <span className="absolute left-4 top-4 bg-[#000ea8] text-white text-xs font-medium px-3 py-1 rounded-full shadow">{area.tag}</span>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-lg md:text-xl font-light mb-2 group-hover:text-[#000ea8] transition-colors">{area.title}</h3>
      </div>
    </motion.article>
  );
}

// --- Main Page ---
export default function WhatWeDoPage() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { margin: "-100px", once: true });

  return (
    <div className="bg-[#ffffff] min-h-screen font-outfit">
      <OutfitFont />
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-[520px] md:h-[680px] flex items-center justify-center overflow-hidden mb-6">
        <motion.div
          className="absolute inset-0 w-full h-full"
          variants={heroBgVariants}
          initial="initial"
          animate="animate"
          whileInView="kenBurns"
          style={{
            background: "linear-gradient(0deg,rgba(0,0,0,0.5),rgba(0,0,0,0.15)), url('https://images.unsplash.com/photo-1581092194502-36b0d5b0b1a9?auto=format&fit=crop&w=1600&q=80') center center / cover no-repeat",
            zIndex: 1,
          }}
        />
        <motion.h1
          ref={heroRef}
          variants={heroHeadlineVariants}
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
          className="relative z-10 text-white text-5xl md:text-7xl font-extrabold tracking-tight text-center"
        >
          What We Do
          <motion.p
            variants={heroSubVariants}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            className="text-xl md:text-2xl font-normal mt-4"
          >
            Exploring Nigeria’s mineral wealth with sustainable geoscience solutions.
          </motion.p>
        </motion.h1>
      </section>

      {/* Introduction */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 mb-24">
        <motion.div
          variants={introColVariants}
          initial="hidden"
          whileInView="visible"
          custom={0}
          viewport={{ once: true, amount: 0.2 }}
          className="bg-white shadow p-8 text-[20px] md:text-[22px] text-gray-800 font-extralight leading-relaxed rounded-xl"
        >
          NobleAce Earthworks is a multidisciplinary geoscience and mining services firm based in Abuja. Combining practical field experience with rigorous technical analysis, we deliver exploration, environmental, and engineering solutions that unlock mineral value while prioritizing safety and sustainability. Our team of geologists, engineers, and environmental scientists bring deep local knowledge and international best practices to every project. We work closely with communities, regulators, and industry partners to ensure lasting economic and environmental benefits.
        </motion.div>
      </section>

      {/* Focus Areas */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mb-24">
        <div className="flex overflow-x-auto pb-4 -mx-2">
          {focusAreas.map((area, i) => (
            <FocusCard key={i} area={area} index={i} />
          ))}
        </div>
      </section>

      <FAQSection />
      <Footer1 />
    </div>
  );
}
