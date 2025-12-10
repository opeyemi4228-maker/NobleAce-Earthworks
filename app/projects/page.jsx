'use client';
import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footersection from "@/components/Footer1";
import { FiArrowRight } from "react-icons/fi";
import { assets } from "@/assets/assets";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

export default function ProjectsPage() {
  return (
    <div className="bg-white text-gray-900 min-h-screen overflow-hidden">
      <Navbar />

      {/* HERO SECTION */}
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

        <div className="absolute inset-0 bg-black/30 flex flex-col justify-center px-6 md:px-16">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-white max-w-4xl leading-tight"
          >
            Transformative Earthworks & Mining Projects
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="text-white/90 mt-4 text-base md:text-xl max-w-3xl"
          >
            From exploration to full-scale operations — NobleAce Earthworks delivers precision, safety, sustainability, and world‑class engineering.
          </motion.p>
        </div>
      </section>

      {/* SECTION TITLE */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={fadeIn}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6 md:px-10 mt-16 mb-10"
      >
        <h2 className="text-3xl md:text-4xl font-semibold text-slate-800 mb-4">
          FEATURED PROJECTS
        </h2>
        <p className="text-gray-600 text-lg md:text-xl max-w-3xl">
          A showcase of groundbreaking work across mining, geoscience, construction, and environmental restoration.
        </p>
      </motion.section>

      {/* PROJECT GRID */}
      <motion.section
        className="max-w-6xl mx-auto px-6 md:px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-20"
        initial="hidden"
        whileInView="visible"
        variants={stagger}
        viewport={{ once: true }}
      >
        {[
          {
            title: "Gold Ore Exploration & Mapping",
            img: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=800&q=80",
            desc: "A full geological mapping and mineral potential evaluation using AI‑enhanced geospatial tools.",
          },
          {
            title: "Open‑Pit Earthworks Development",
            img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80",
            desc: "High‑precision excavation and slope engineering for long‑term structural integrity.",
          },
          {
            title: "Environmental Reclamation Project",
            img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80",
            desc: "Restoring degraded mining land into thriving, sustainable ecosystems.",
          },
          {
            title: "Limestone Quarry Expansion",
            img: "https://images.unsplash.com/photo-1516912481808-3406841bd33c?auto=format&fit=crop&w=800&q=80",
            desc: "Advanced blasting optimization and material flow redesign for increased output.",
          },
          {
            title: "Geophysical Resistivity Survey",
            img: "https://images.unsplash.com/photo-1602526218301-66f504de3d7f?auto=format&fit=crop&w=800&q=80",
            desc: "Subsurface investigation for groundwater, ore bodies, and structural evaluation.",
          },
          {
            title: "Urban Foundation & Earth Stabilization",
            img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
            desc: "Soil reinforcement, foundation leveling, and deep stabilization for large structures.",
          },
        ].map((project, index) => (
          <motion.div
            key={index}
            variants={fadeIn}
            className="rounded-xl overflow-hidden shadow-md bg-white hover:shadow-xl transition duration-300 cursor-pointer"
          >
            <img
              src={project.img}
              alt={project.title}
              className="h-52 w-full object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-slate-800 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 text-[15px] leading-relaxed mb-4">
                {project.desc}
              </p>
              <button className="flex items-center gap-2 text-sky-700 font-medium hover:gap-3 transition-all">
                View Details <FiArrowRight />
              </button>
            </div>
          </motion.div>
        ))}
      </motion.section>

      {/* CALL TO ACTION */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={fadeIn}
        viewport={{ once: true }}
        className="bg-[#00284e] py-16 px-6 md:px-10 text-center text-white"
      >
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Ready to Start a Project?
        </h2>
        <p className="max-w-3xl mx-auto text-lg mb-8 opacity-90">
          Partner with NobleAce Earthworks for precision‑driven engineering, reliable execution, and sustainable outcomes.
        </p>
        <a
          href="#contact"
          className="bg-white text-blue-800 px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-200 transition"
        >
          Contact Us
        </a>
      </motion.section>

      <Footersection />
    </div>
  );
}
