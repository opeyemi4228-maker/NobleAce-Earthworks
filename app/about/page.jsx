// app/about-projects/page.jsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer1 from "@/components/Footer1";
import { assets } from "@/assets/assets";
import GetAQuoteModal from "@/components/GetAQuoteModal";

/* -------------------- ANIMATION VARIANTS -------------------- */
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

/* ========================== MAIN PAGE ========================== */
export default function AboutProjectsPage() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  const projects = [
    {
      title: "Open-Pit Geological Survey & Mapping",
      desc: "Comprehensive structural mapping, lithological profiling, and orebody delineation. Delivered with QA/QC and GIS-ready datasets.",
      img: assets.pic3,
      category: "Geological Operations",
    },
    {
      title: "Diamond Core Drilling Program",
      desc: "High-precision diamond core programs for robust resource definition and metallurgical sampling.",
      img: assets.pic21,
      category: "Drilling & Resource Definition",
    },
    {
      title: "3D Geophysical Subsurface Imaging",
      desc: "Integrated seismic, EM and magnetotelluric surveys to image complex subsurface targets.",
      img: assets.pic23,
      category: "Geophysical Operations",
    },
    {
      title: "Mine Access Road Construction",
      desc: "Engineering and earthworks for safe, efficient access in remote terrains with environmental best practice.",
      img: assets.mine2,
      category: "Earthworks & Engineering",
    },
  ];

  useEffect(() => {
    function handler(e) {
      const bounds = heroRef.current?.getBoundingClientRect();
      if (!bounds) return;
      const x = (e.clientX - (bounds.left + bounds.width / 2)) / bounds.width;
      const y = (e.clientY - (bounds.top + bounds.height / 2)) / bounds.height;
      setMouse({ x, y });
    }
    const node = heroRef.current;
    node?.addEventListener("mousemove", handler);
    return () => node?.removeEventListener("mousemove", handler);
  }, []);

  const [autoStep, setAutoStep] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setAutoStep((s) => (s + 1) % 4), 4500);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="min-h-screen w-full bg-white text-[#0b2130] antialiased flex flex-col items-center">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-white text-[#003D5C] px-3 py-2 rounded shadow"
      >
        Skip to content
      </a>

      <Navbar />

      <main id="main" className="w-full flex flex-col items-center">
        {/* ---------------------------------------------------------------------- */}
        {/* HERO — MULTILAYER PARALLAX */}
        {/* ---------------------------------------------------------------------- */}
      

         <section className="relative w-full h-[72vh] md:h-[68vh] flex items-center justify-center overflow-hidden mb-15 bg-[#00284e]">
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

            <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/25 to-black/45" />
          

          {/* HERO CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative z-20 max-w-5xl px-6 md:px-0"
          >
            <h1 id="hero-title" className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              NobleAce Earthworks
            </h1>
            <p className="mt-4 text-md md:text-lg text-gray-100 max-w-3xl mx-auto font-light">
              Responsible mining. Engineering excellence. We combine scalable exploration techniques with
              environmental stewardship and community partnerships.
            </p>

            <div className="mt-8 flex items-center justify-center gap-3 flex-wrap">
              <button
                onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                className="rounded-full bg-white text-[#003D5C] px-6 py-3 font-semibold shadow hover:bg-gray-100 transition"
              >
                About NobleAce
              </button>

              <button
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="rounded-full border border-white/30 text-white px-5 py-3 font-semibold hover:bg-white/10 transition"
              >
                View Projects
              </button>

              <button
                onClick={() => setIsQuoteOpen(true)}
                className="rounded-full bg-yellow-400 text-[#0b2130] px-5 py-3 font-semibold shadow-md"
              >
                Get A Quote
              </button>
            </div>
          </motion.div>
        </section>

        {/* ---------------------------------------------------------------------- */}
        {/* ABOUT SECTION (ENHANCED) */}
        {/* ---------------------------------------------------------------------- */}
        <section id="about" className="max-w-5xl mx-auto py-16 md:py-24 px-4 text-center">
          <motion.div initial="hidden" whileInView="show" variants={stagger} viewport={{ once: true }}>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-semibold mb-4">
              About NobleAce Earthworks
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed">
              NobleAce Earthworks is a multidisciplinary mining and geoscience company delivering responsible resource exploration,
              sustainable extraction and environmental restoration. Founded by experienced field geoscientists and engineers, we
              combine decades of regional knowledge with modern data science, remote sensing and rigorous QA/QC workflows to deliver
              licence-ready results for exploration and development programs.
            </motion.p>

            {/* Quick Facts */}
            <motion.div variants={fadeInUp} className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto">
              <div>
                <div className="text-2xl font-bold">25+</div>
                <div className="text-xs text-slate-500 mt-1">Years experience</div>
              </div>
              <div>
                <div className="text-2xl font-bold">500+</div>
                <div className="text-xs text-slate-500 mt-1">Skilled professionals</div>
              </div>
              <div>
                <div className="text-2xl font-bold">12</div>
                <div className="text-xs text-slate-500 mt-1">Major projects</div>
              </div>
              <div>
                <div className="text-2xl font-bold">98%</div>
                <div className="text-xs text-slate-500 mt-1">Client satisfaction</div>
              </div>
            </motion.div>

            {/* Founding Story + Approach */}
            <motion.div variants={fadeInUp} className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-start text-left">
              <div>
                <h3 className="text-xl font-semibold text-[#003D5C] mb-2">Our Story</h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Started as a small geological survey team, NobleAce has grown into a full-service earthworks and mining consultancy.
                  Our founding engineers cut their teeth on small field campaigns and evolved their practice to support multi-disciplinary
                  projects — from early-stage target generation to mine closure planning. We partner with local communities, authorities and
                  investors to translate geological potential into tangible, sustainable value.
                </p>

                <h4 className="mt-6 text-sm font-semibold text-slate-800">Certifications & Standards</h4>
                <ul className="mt-2 text-sm text-slate-600 list-disc list-inside space-y-1">
                  <li>JORC / NI 43-101 reporting workflows</li>
                  <li>ISO 9001 quality management principles applied to field & lab workflows</li>
                  <li>HSE systems aligned with international best practice</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#003D5C] mb-2">Our Approach</h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  We blend robust field methods with remote sensing, geophysical imaging and machine-learning enabled data modelling.
                  Every program is built around defensible sampling, clear QA/QC, transparent data packages, and GIS-ready deliverables
                  so clients can make informed investment decisions.
                </p>

                <h4 className="mt-6 text-sm font-semibold text-slate-800">Key Capabilities</h4>
                <div className="mt-2 grid grid-cols-2 gap-2 text-sm text-slate-600">
                  <div>• Geological mapping & structural interpretation</div>
                  <div>• Diamond & RC drilling programs</div>
                  <div>• Geophysical (seismic, EM, magnetics) surveys</div>
                  <div>• Hydrogeology & water management</div>
                  <div>• Resource modelling & reserve estimation</div>
                  <div>• Environmental impact assessment & mine rehabilitation</div>
                </div>
              </div>
            </motion.div>

            {/* Core Values */}
            <motion.div variants={fadeInUp} className="mt-10">
              <h3 className="text-2xl font-semibold text-[#003D5C] mb-4">Our Values</h3>
              <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                <div className="bg-white rounded-lg p-5 shadow-sm">
                  <div className="font-semibold">Safety & Integrity</div>
                  <p className="text-sm text-slate-600 mt-2">HSE-first culture, transparent reporting and rigorous governance across every project.</p>
                </div>
                <div className="bg-white rounded-lg p-5 shadow-sm">
                  <div className="font-semibold">Sustainability</div>
                  <p className="text-sm text-slate-600 mt-2">Design for lower impact, progressive rehabilitation and community-led outcomes.</p>
                </div>
                <div className="bg-white rounded-lg p-5 shadow-sm">
                  <div className="font-semibold">Innovation</div>
                  <p className="text-sm text-slate-600 mt-2">Practical use of remote sensing, 3D geophysics and data science to de-risk exploration.</p>
                </div>
              </div>
            </motion.div>

            {/* Sustainability & Community */}
            <motion.div variants={fadeInUp} className="mt-10 max-w-4xl mx-auto text-left">
              <h4 className="text-lg font-semibold text-[#003D5C] mb-2">Sustainability & Community</h4>
              <p className="text-sm text-slate-700 leading-relaxed">
                We prioritise local partnerships and environmental stewardship. Before mobilisation, we conduct baseline studies,
                community consultations and biodiversity assessments. Closure and reclamation are planned from day one so that reclaimed
                land delivers long-term benefits for communities and ecosystems.
              </p>
            </motion.div>

            {/* Team / Partners (compact) */}
            <motion.div variants={fadeInUp} className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
              <div className="text-left">
                <h4 className="text-sm font-semibold text-[#003D5C]">Leadership</h4>
                <p className="text-sm text-slate-600 mt-2">Senior geologists and engineers with regional project experience and multi-disciplinary leadership.</p>
              </div>
              <div className="text-left">
                <h4 className="text-sm font-semibold text-[#003D5C]">Local Capacity</h4>
                <p className="text-sm text-slate-600 mt-2">We hire and train local staff, build lasting technical capability, and transfer knowledge during every program.</p>
              </div>
              <div className="text-left">
                <h4 className="text-sm font-semibold text-[#003D5C]">Trusted Partners</h4>
                <p className="text-sm text-slate-600 mt-2">We collaborate with laboratories, engineering firms and community consultants to ensure holistic delivery.</p>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div variants={fadeInUp} className="mt-12">
              <button
                onClick={() => setIsQuoteOpen(true)}
                className="inline-flex items-center gap-2 bg-[#003D5C] text-white px-6 py-3 rounded-full font-semibold shadow hover:scale-[1.02] transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ffd54a]"
                aria-label="Request a quote from NobleAce Earthworks"
              >
                Request a Project Quote
              </button>
            </motion.div>
          </motion.div>
        </section>

        {/* ---------------------------------------------------------------------- */}
        {/* PROJECTS SECTION */}
        {/* ---------------------------------------------------------------------- */}
        <section id="projects" className="max-w-6xl mx-auto py-16 px-4 text-center">
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-3xl md:text-4xl font-semibold mb-12">
            Featured Projects
          </motion.h2>

          <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center" initial="hidden" whileInView="show" variants={stagger}>
            {projects.map((p, i) => (
              <motion.article key={i} variants={fadeInUp} whileHover={{ scale: 1.02 }} className="bg-white rounded-2xl shadow hover:shadow-2xl overflow-hidden w-full max-w-sm">
                <div className="relative h-56">
                  <Image src={p.img} alt={p.title} fill className="object-cover" sizes="(min-width:1024px) 400px, (min-width:640px) 50vw, 100vw" />
                </div>

                <div className="p-5 text-center">
                  <div className="text-xs uppercase font-semibold text-[#007A3D]">{p.category}</div>
                  <h3 className="mt-2 text-lg font-semibold text-[#0b2130]">{p.title}</h3>
                  <p className="mt-3 text-sm text-slate-700 leading-relaxed">{p.desc}</p>

                  <div className="mt-4 flex items-center justify-center gap-4">
                    <a href="#" className="text-sm font-semibold text-[#003D5C] hover:underline">Read case study</a>
                    <button onClick={() => setIsQuoteOpen(true)} className="text-sm bg-[#003D5C] text-white px-3 py-1 rounded">Request Quote</button>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </section>

        {/* ---------------------------------------------------------------------- */}
        {/* CTA SECTION */}
        {/* ---------------------------------------------------------------------- */}
        <section className="w-full bg-gradient-to-r from-[#003D5C] to-[#007A3D] text-white py-20">
          <div className="max-w-3xl mx-auto text-center px-4">
            <h3 className="text-2xl md:text-4xl font-semibold mb-4">Let’s build the future of mining together</h3>
            <p className="max-w-3xl mx-auto text-md md:text-lg mb-8 text-gray-100 leading-relaxed">
              From exploration to development, NobleAce Earthworks delivers top-tier geological, drilling, and engineering solutions.
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <button onClick={() => setIsQuoteOpen(true)} className="inline-block bg-white text-[#003D5C] px-6 py-3 rounded-full font-semibold shadow hover:bg-gray-100 transition">Get A Quote</button>
              <a href="#projects" className="inline-block border border-white/30 text-white px-5 py-3 rounded-full font-semibold hover:bg-white/10">Explore Projects</a>
            </div>
          </div>
        </section>
      </main>

      <Footer1 />

      <AnimatePresence>
        {isQuoteOpen && <GetAQuoteModal onClose={() => setIsQuoteOpen(false)} />}
      </AnimatePresence>
    </div>
  );
}

/* ====================== SHORT SERVICE DESCRIPTIONS ====================== */
function serviceShortDescription(name) {
  const services = {
    "Geological and Geophysical Surveys": "High-quality airborne and ground surveys (magnetics, gravity, radiometrics, EM, seismic) designed for target generation and mapping.",
    "Mineral Exploration and Resource Assessment": "Target generation, drilling, sampling and resource estimation to JORC/NI 43-101 standards with defensible workflows.",
    "Environmental Impact Assessments (EIA)": "Baseline studies, impact analysis, mitigation planning and regulatory reporting aligned to legal frameworks.",
    "Geotechnical Engineering": "Slope stability, pit design and geotechnical instrumentation supporting safe mine engineering.",
    "Hydrogeological Studies": "Groundwater baseline, modelling and dewatering strategies for sustainable operations.",
    "Remote Sensing and GIS": "Satellite/drone mapping, change detection and GIS workflows for exploration and environment.",
    "Seismology and Earthquake Risk Assessment": "Hazard analysis and site-specific ground-motion studies for safe design.",
    "Geochemical Analysis": "Sampling design, QA/QC protocols and multi-element lab analysis with geostatistics.",
    "Geological Mapping": "Field workflows, structural measurements and interpretation for exploration targeting.",
    "Geological Modeling and Data Analysis": "3D modelling, variography, kriging and uncertainty quantification for strong resource models.",
    "GIS Database Management": "Centralized spatial databases, versioning workflows and WebGIS deployments.",
    "Natural Hazard Assessment": "Landslide, flood and erosion risk assessment for communities and operations.",
    "Regulatory Compliance Consulting": "Permits, environmental compliance, stakeholder engagement and governance support.",
    "Risk Assessment & Management": "Integrated ESG, technical and operational risk evaluations.",
    "Technical Report Writing": "Regulator-ready technical reports and investor documentation.",
    "Training & Workshops": "Hands-on training in mapping, geophysics, core logging and software.",
    "Project Management": "Full program management: logistics, procurement, HSE, schedule and budget.",
  };
  return services[name] || "Professional geoscience service delivered with integrity.";
}
