'use client';
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer1 from "@/components/Footer1";

// --- Font Import ---
const MontserratFont = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');
    body, .font-montserrat { font-family: 'Montserrat', sans-serif !important; }
    h1, h2, h3, h4, h5, h6 { font-family: 'Montserrat', sans-serif; }
  `}</style>
);

// --- Animation Variants ---
const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } };
const fadeIn = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 1, ease: "easeOut" } } };
const scaleHover = { hover: { scale: 1.05, transition: { duration: 0.3 } } };
const cardAnim = { hidden: { opacity: 0, y: 50, scale: 0.95 }, visible: i => ({ opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, delay: i * 0.15, ease: [0.34, 1.56, 0.64, 1] } }) };

// --- Focus Areas Data ---
const focusAreas = [
  { title: "Environmental Stewardship", desc: "Preserving ecosystems by integrating environmental protection into every project stage. From habitat conservation to responsible waste management, we ensure the land we explore remains sustainable for future generations.", img: "https://images.unsplash.com/photo-1581091012184-5c4a6eec0c84?auto=format&fit=crop&w=800&q=80", cta: "Learn more →" },
  { title: "Energy Efficiency & Climate Action", desc: "Minimizing greenhouse gas emissions through energy-efficient practices, renewable energy adoption, and climate-conscious operations. Our initiatives reduce the carbon footprint across all sites.", img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80", cta: "Learn more →" },
  { title: "Health, Safety & Workforce Welfare", desc: "Ensuring the highest standards of safety, health, and training for every employee. We invest in protective equipment, emergency preparedness, and wellness programs to guarantee a secure and motivated workforce.", img: "https://images.unsplash.com/photo-1581092160607-9d7a9a5e9d57?auto=format&fit=crop&w=800&q=80", cta: "Learn more →" },
  { title: "Community Engagement & Development", desc: "Building partnerships with local communities through education, skills training, and empowerment programs. We believe in mutual growth, supporting social infrastructure and creating long-term benefits.", img: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=800&q=80", cta: "Learn more →" },
  { title: "Governance & Ethical Operations", desc: "Ensuring transparency, accountability, and ethical practices across all operations. Compliance, anti-corruption policies, and robust reporting frameworks uphold our corporate integrity.", img: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=800&q=80", cta: "Learn more →" },
];

// --- Helper Components ---
function FocusCard({ area, index }) {
  const cardRef = useRef(null);
  const inView = useInView(cardRef, { margin: "-100px", once: true });
  return (
    <motion.article
      ref={cardRef}
      variants={cardAnim}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      custom={index}
      className="group bg-white rounded-xl shadow-md overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-300 cursor-pointer"
      whileHover="hover"
      style={{ willChange: "transform,box-shadow" }}
    >
      <motion.div
        className="relative aspect-[16/9] w-full overflow-hidden"
        initial={{ scale: 1, filter: "brightness(0.95)" }}
        whileHover={{ scale: 1.08, filter: "brightness(1.1)", y: -5, transition: { duration: 0.6 } }}
      >
        <img src={area.img} alt={area.title} className="w-full h-full object-cover transition-transform duration-500" />
        <motion.div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" initial={{ opacity: 0.2 }} whileHover={{ opacity: 0.05 }} />
      </motion.div>
      <div className="p-6 flex flex-col flex-1">
        <motion.h3 className="text-xl font-semibold mb-2 group-hover:text-[#4c87f4] transition-colors">{area.title}</motion.h3>
        <p className="text-base text-gray-700 mb-4">{area.desc}</p>
        <motion.a href="#" className="text-[#0066cc] font-medium flex items-center gap-2 group" whileHover={{ color: "#0D47A1" }}>
          <span>{area.cta}</span>
          <motion.span className="inline-block" initial={{ x: 0 }} whileHover={{ x: 8 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>→</motion.span>
        </motion.a>
      </div>
    </motion.article>
  );
}

// --- Main Page ---
export default function SustainabilityPage() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { margin: "-100px", once: true });

  return (
    <div className="bg-[#F5F5F5] min-h-screen font-montserrat">
      <MontserratFont />
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-[440px] md:h-[560px] flex items-center justify-center overflow-hidden mb-20 bg-[#00284e]">
        <motion.div
          className="absolute inset-0 w-full h-full"
          initial={{ scale: 1.1, filter: "blur(3px)" }}
          animate={{ scale: 1, filter: "blur(0px)", transition: { duration: 1.5, ease: "easeOut" } }}
          style={{
            background: "linear-gradient(0deg, rgba(0,0,0,0.4), rgba(0,0,0,0.15)), url('https://images.unsplash.com/photo-1609851197358-5a875eb4d5cb?auto=format&fit=crop&w=1200&q=80') center center / cover no-repeat",
            zIndex: 1,
            willChange: "transform,filter",
          }}
        />
        <motion.div className="relative z-10 text-center px-6 md:px-0">
          <motion.h1
            ref={heroRef}
            variants={fadeUp}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            className="text-white text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6"
            style={{ textShadow: "0 4px 32px rgba(0,0,0,0.28)" }}
          >
            Our Commitment to Sustainable Earthworks
          </motion.h1>
          <motion.p className="text-gray-200 text-lg md:text-xl max-w-3xl mx-auto">
            Leading the industry with responsible exploration, ethical operations, and measurable impact. NobleAce Earthworks integrates sustainability into every stage of its projects to protect the environment, communities, and future resources.
          </motion.p>
        </motion.div>
      </section>

      {/* Introduction Section */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 mb-24">
        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            "At NobleAce Earthworks, sustainability drives every exploration, engineering, and environmental decision. Our philosophy ensures that resource development does not come at the cost of ecological integrity.",
            "We implement cutting-edge solutions to reduce water usage, minimize waste, and optimize energy consumption. Our ESG framework ensures measurable outcomes and responsible resource management.",
            "Through community partnership programs, reclamation initiatives, and renewable technology integration, we actively fight climate change and promote long-term ecosystem health."
          ].map((text, i) => (
            <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="bg-white rounded-xl shadow p-8 text-gray-800 font-light">
              {text}
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Focus Area Cards */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 mb-24">
        <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" className="text-3xl md:text-4xl font-semibold text-[#00284e] text-center mb-12">
          Key Focus Areas of Our Sustainable Operations
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {focusAreas.slice(0, 3).map((area, i) => <FocusCard key={area.title} area={area} index={i} />)}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8">
          {focusAreas.slice(3).map((area, i) => <FocusCard key={area.title} area={area} index={i + 3} />)}
        </div>
      </section>

      {/* Impact & Achievements */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 mb-24">
        <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" className="text-3xl md:text-4xl font-semibold text-[#00284e] text-center mb-12">
          Measurable Impact & Achievements
        </motion.h2>
        <motion.div className="grid md:grid-cols-3 gap-8 text-center">
          {[
            { value: "500+", label: "Hectares Reclaimed" },
            { value: "1M+", label: "Tons of Emissions Reduced" },
            { value: "50+", label: "Community Programs Supported" },
          ].map((item, i) => (
            <motion.div key={i} variants={fadeUp} className="bg-white rounded-xl shadow p-8 hover:shadow-lg transition">
              <div className="text-4xl md:text-5xl font-semibold text-[#00284e] mb-2">{item.value}</div>
              <div className="text-gray-700 text-lg">{item.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <Footer1 />
    </div>
  );
}
