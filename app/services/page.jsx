// app/services/page.jsx
"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer1 from "@/components/Footer1";
import { assets } from "@/assets/assets";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const slideIn = {
  hidden: { opacity: 0, x: 60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.9, ease: "easeOut" } },
};

const stagger = {
  show: { transition: { staggerChildren: 0.12 } },
};

export default function ServicesPage() {
  const services = [
    {
      title: "Mineral Exploration & Targeting",
      desc: "Integrated exploration programs using geology, geophysics, geochemistry, and remote sensing.",
      points: ["Reconnaissance", "Target generation", "Exploration program design"],
      img: assets.pic1,
    },
    {
      title: "Drilling, Sampling & QA/QC",
      desc: "Robust sampling protocols and chain-of-custody management for drill programs.",
      points: ["Core & RC drilling", "QA/QC workflows", "Lab coordination"],
      img: assets.pic21,
    },
    {
      title: "Resource Modeling & Reporting",
      desc: "JORC/NI 43-101 compliant resource modeling and feasibility studies.",
      points: ["3D models", "Grade estimation", "Feasibility support"],
      img: assets.pic23,
    },
    {
      title: "Licensing & Regulatory Support",
      desc: "Guidance for permits, approvals, and local stakeholder engagement.",
      points: ["Applications", "Regulatory mapping", "Local compliance"],
      img: "/images/licensing.jpg",
    },
    {
      title: "ESG & Environmental Consulting",
      desc: "Environmental & social impact assessments with closure planning.",
      points: ["ESIA", "Mine closure planning", "Community engagement"],
      img: "/images/esg.jpg",
    },
    {
      title: "Geotechnical & Hydrogeological Studies",
      desc: "Slope stability, groundwater modeling, and tailings management.",
      points: ["Slope stability", "Groundwater modeling", "Water management"],
      img: assets.pic16,
    },
  ];

  return (
    <>
      <Navbar />
      <main className="w-full bg-white antialiased flex flex-col items-center">

        {/* HERO SECTION */}
        <section className="w-full pt-28 pb-20 px-20 max-md:px-5 text-center bg-[#00284e]">
          <motion.div initial="hidden" whileInView="show" variants={fadeUp} className="max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-semibold text-white leading-tight">
              NobleAce Earthworks — Mining Exploration, Licensing & Geological Consulting
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-200 leading-relaxed">
              Partnering with governments, juniors, and investors to responsibly discover, evaluate, and develop mineral resources.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="/contact"
                className="px-6 py-3 rounded-full bg-white text-[#00284e] font-medium shadow hover:opacity-95"
              >
                Start an Exploration Project
              </a>
              <a
                href="/about#expertise"
                className="px-6 py-3 rounded-full border border-white text-white font-medium hover:bg-white/10"
              >
                Why NobleAce Earthworks
              </a>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={slideIn}
            className="mt-12 rounded-xl overflow-hidden shadow-2xl max-w-4xl mx-auto"
          >
            <Image
              src={assets.pic25}
              alt="Geological field crew"
              width={1200}
              height={700}
              className="object-cover w-full h-full"
              priority
            />
          </motion.div>
        </section>

        {/* CORE SERVICES */}
        <section className="w-full px-20 max-md:px-5 py-24 bg-white">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h2 initial="hidden" whileInView="show" variants={fadeUp} className="text-3xl md:text-4xl font-semibold mb-12 text-[#0b2130]">
              Our Core Services
            </motion.h2>
            <motion.div initial="hidden" whileInView="show" variants={stagger} className="grid md:grid-cols-3 gap-10">
              {services.map((s, i) => (
                <motion.article
                  key={i}
                  variants={fadeUp}
                  className="bg-gray-50 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition cursor-pointer flex flex-col"
                >
                  <div className="relative h-52 w-full">
                    <Image src={s.img} alt={s.title} fill className="object-cover" />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-lg font-medium text-[#00284e] mb-3">{s.title}</h3>
                    <p className="text-gray-700 mb-4 flex-1">{s.desc}</p>
                    <ul className="text-gray-700 list-disc list-inside space-y-1">
                      {s.points.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="w-full px-20 max-md:px-5 py-24 bg-[#f7f9fb] text-center">
          <div className="max-w-6xl mx-auto">
            <motion.h2 initial="hidden" whileInView="show" variants={fadeUp} className="text-3xl md:text-4xl font-semibold mb-12 text-[#0b2130]">
              Why Leading Explorers Choose NobleAce
            </motion.h2>
            <motion.div initial="hidden" whileInView="show" variants={stagger} className="grid md:grid-cols-3 gap-8">
              <motion.div variants={fadeUp} className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
                <h3 className="text-xl font-medium text-[#003B5C] mb-2">Proven Technical Capability</h3>
                <p className="text-gray-700">Senior geologists, mining engineers, and hydrogeologists with global best-practice workflows.</p>
              </motion.div>
              <motion.div variants={fadeUp} className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
                <h3 className="text-xl font-medium text-[#003B5C] mb-2">Licence-Ready Deliverables</h3>
                <p className="text-gray-700">Reporting packages designed to meet regulatory and investor expectations.</p>
              </motion.div>
              <motion.div variants={fadeUp} className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
                <h3 className="text-xl font-medium text-[#003B5C] mb-2">Practical, Outcomes-Focused</h3>
                <p className="text-gray-700">Faster permitting, clearer investment cases, and reduced time-to-drill.</p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="w-full px-20 max-md:px-5 py-24 bg-white">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h2 initial="hidden" whileInView="show" variants={fadeUp} className="text-3xl md:text-4xl font-semibold mb-12 text-[#0b2130]">
              Our Process
            </motion.h2>
            <motion.ol initial="hidden" whileInView="show" variants={stagger} className="grid md:grid-cols-4 gap-8 list-decimal pl-6 text-left">
              {[
                { step: "Strategic Targeting", desc: "Synthesis of regional data, remote sensing, and historical records." },
                { step: "Field Investigation", desc: "Rapid mapping, sampling, and geophysical surveys." },
                { step: "Drilling & Testing", desc: "Design, supervision, and geochemical/lab workflows." },
                { step: "Reporting & Permitting", desc: "Resource modeling and regulator-ready documentation." },
              ].map((p, i) => (
                <motion.li key={i} variants={fadeUp} className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
                  <h4 className="text-lg font-medium text-[#00284e] mb-2">Step {i + 1}: {p.step}</h4>
                  <p className="text-gray-700">{p.desc}</p>
                </motion.li>
              ))}
            </motion.ol>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="w-full px-6 py-24 bg-[#00284e] text-white text-center">
          <div className="max-w-4xl mx-auto">
            <motion.h2 initial="hidden" whileInView="show" variants={fadeUp} className="text-3xl md:text-4xl font-semibold leading-tight">
              Ready to turn geological potential into permit-ready projects?
            </motion.h2>
            <p className="mt-6 text-gray-200">
              Contact NobleAce Earthworks for exploration, licensing strategy, or technical review.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
              <a href="/contact" className="px-6 py-3 rounded bg-white text-[#00284e] font-medium shadow hover:opacity-95">
                Book a Consultation
              </a>
              <a href="/resources" className="px-6 py-3 rounded border border-white text-white hover:bg-white/10">
                Download Capability Statement
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer1 />
    </>
  );
}
