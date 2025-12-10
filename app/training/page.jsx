'use client';
import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footersection from "@/components/Footer1";
import { FiArrowRight, FiX } from "react-icons/fi";

const courses = [
  {
    title: "Basic Geological Mapping",
    icon: "🗺️",
    desc: "Master field mapping techniques, structural documentation, and create professional geological maps.",
    duration: "5 Days | Field",
    syllabus: [
      "Basic Geological Mapping",
      "Field Survey Techniques",
      "Structural Documentation",
      "Creating Professional Geological Maps"
    ],
    instructors: ["Dr. James Okafor", "Engr. Sandra Bello"],
    demo: "https://www.youtube.com/embed/5qap5aO4i9A"
  },
  {
    title: "Geochemical Sampling & Analysis",
    icon: "🧪",
    desc: "Hands-on soil, rock, and stream sediment sampling, including QA/QC and interpretation protocols.",
    duration: "4 Days | Lab + Field",
    syllabus: [
      "Sampling Protocols",
      "QA/QC Procedures",
      "Soil and Rock Analysis",
      "Interpretation of Geochemical Results"
    ],
    instructors: ["Dr. Chidi Nwosu", "Engr. Fatima Yusuf"],
    demo: "https://www.youtube.com/embed/5qap5aO4i9A"
  },
  {
    title: "Geophysical Data Acquisition",
    icon: "📡",
    desc: "Learn magnetics, gravity, radiometrics, electrical methods, and seismic fundamentals for exploration.",
    duration: "7 Days | Intensive",
    syllabus: [
      "Magnetic Surveys",
      "Gravity & Radiometric Techniques",
      "Electrical & Seismic Methods",
      "Field Equipment Handling"
    ],
    instructors: ["Engr. Michael Ade", "Dr. Helen Obi"],
    demo: "https://www.youtube.com/embed/5qap5aO4i9A"
  },
  {
    title: "Geophysical Processing & Interpretation",
    icon: "💻",
    desc: "Advanced data filtering, corrections, inversion techniques, and integrated geological interpretation.",
    duration: "6 Days | Software",
    syllabus: [
      "Data Filtering & Correction",
      "Inversion Techniques",
      "Integrated Geological Interpretation",
      "Report Generation"
    ],
    instructors: ["Dr. Kemi Oladipo", "Engr. Uche Eze"],
    demo: "https://www.youtube.com/embed/5qap5aO4i9A"
  },
  {
    title: "GIS for Mining Exploration",
    icon: "🌍",
    desc: "Spatial data management, geostatistics, and creating high-quality maps for exploration projects.",
    duration: "5 Days | Hands-on",
    syllabus: [
      "GIS Basics",
      "Spatial Data Management",
      "Geostatistics",
      "Map Production & Visualization"
    ],
    instructors: ["Engr. Fola Adeyemi", "Dr. Grace Okeke"],
    demo: "https://www.youtube.com/embed/5qap5aO4i9A"
  },
  {
    title: "Geological Modelling & Resource Management",
    icon: "🏗️",
    desc: "3D modeling, geostatistics, and resource estimation techniques using industry-standard software.",
    duration: "6 Days | Advanced",
    syllabus: [
      "3D Modeling",
      "Geostatistics",
      "Resource Estimation",
      "Software Workflows"
    ],
    instructors: ["Dr. Tunde Bakare", "Engr. Ifeoma Nnamdi"],
    demo: "https://www.youtube.com/embed/5qap5aO4i9A"
  },
  {
    title: "Drill Core Logging & Sampling",
    icon: "🪨",
    desc: "Comprehensive core handling, lithology logging, structure measurement, and sampling protocols.",
    duration: "4 Days | Practical",
    syllabus: [
      "Core Handling",
      "Lithology Logging",
      "Structure Measurement",
      "Sampling Protocols"
    ],
    instructors: ["Dr. Emeka Onwu", "Engr. Funke Adeyemi"],
    demo: "https://www.youtube.com/embed/5qap5aO4i9A"
  },
  {
    title: "Geological Software Training",
    icon: "⚙️",
    desc: "Step-by-step training on Leapfrog, Micromine, Surpac, Oasis Montaj, ArcGIS, and project workflows.",
    duration: "Flexible",
    syllabus: [
      "Leapfrog Training",
      "Micromine & Surpac",
      "Oasis Montaj",
      "ArcGIS Project Workflows"
    ],
    instructors: ["Dr. Nnena Uzo", "Engr. Abiola Shodeinde"],
    demo: "https://www.youtube.com/embed/5qap5aO4i9A"
  }
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function TrainingPage() {
  const [filter, setFilter] = useState("All");
  const [selectedCourse, setSelectedCourse] = useState(null);

  const categories = ["All", "Field", "Lab", "Software", "Hands-on", "Practical", "Advanced", "Intensive", "Flexible"];

  const filteredCourses = filter === "All" ? courses : courses.filter(course => course.duration.includes(filter));

  return (
    <div className="bg-white text-gray-900 min-h-screen font-sans">
      <Navbar />

      {/* HERO */}
      <section className="relative w-full h-[60vh] md:h-[75vh] flex items-center justify-center bg-gradient-to-b from-blue-950 to-blue-900 text-white px-6">
        <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }} className="text-center max-w-4xl">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">NobleAce Training Academy</h1>
          <p className="text-lg md:text-xl opacity-90">
            Learn, practice, and excel with our industry-focused geological, geophysical, and mining courses.
          </p>
        </motion.div>
      </section>

      {/* FILTERS */}
      <motion.section className="max-w-6xl mx-auto px-6 md:px-10 mt-12 mb-8">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((cat) => (
            <button key={cat} onClick={() => setFilter(cat)} className={`px-4 py-2 rounded-full font-medium text-sm md:text-base transition-colors ${filter === cat ? "bg-sky-800 text-white" : "bg-gray-200 text-gray-700 hover:bg-sky-100"}`}>
              {cat}
            </button>
          ))}
        </div>
      </motion.section>

      {/* COURSES GRID */}
      <motion.section className="max-w-6xl mx-auto px-6 md:px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20" initial="hidden" whileInView="visible" viewport={{ once: true }}>
        {filteredCourses.map((course, index) => (
          <motion.div key={index} variants={fadeInUp} className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer" onClick={() => setSelectedCourse(course)}>
            <div className="p-6 flex flex-col h-full">
              <div className="text-5xl mb-4">{course.icon}</div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">{course.title}</h3>
              <p className="text-gray-600 text-[15px] flex-1">{course.desc}</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-sm font-medium text-sky-700">{course.duration}</span>
                <button className="flex items-center gap-2 text-sky-700 font-medium hover:gap-3 transition-all">
                  View Details <FiArrowRight />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.section>

      {/* COURSE MODAL */}
      {selectedCourse && (
        <motion.div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <motion.div className="bg-white rounded-xl shadow-xl w-full max-w-4xl p-6 relative overflow-y-auto max-h-[90vh]" initial={{ scale: 0.9 }} animate={{ scale: 1 }} transition={{ duration: 0.3 }}>
            <button className="absolute top-4 right-4 text-gray-600 hover:text-gray-900" onClick={() => setSelectedCourse(null)}>
              <FiX size={24} />
            </button>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">{selectedCourse.title}</h2>
            <p className="text-gray-700 mb-4">{selectedCourse.desc}</p>
            <span className="text-sky-700 font-medium mb-4 inline-block">{selectedCourse.duration}</span>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Syllabus</h3>
              <ul className="list-disc list-inside space-y-1">
                {selectedCourse.syllabus.map((item, i) => (<li key={i} className="text-gray-600">{item}</li>))}
              </ul>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Instructors</h3>
              <ul className="list-disc list-inside space-y-1">
                {selectedCourse.instructors.map((inst, i) => (<li key={i} className="text-gray-600">{inst}</li>))}
              </ul>
            </div>
            {selectedCourse.demo && (
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Course Demo</h3>
                <div className="aspect-w-16 aspect-h-9">
                  <iframe src={selectedCourse.demo} title={selectedCourse.title} allowFullScreen className="w-full h-full rounded-lg" />
                </div>
              </div>
            )}
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">Practical Exercises</h3>
              <p className="text-gray-600">Engage in interactive exercises, field simulations, and software labs to reinforce learning.</p>
              <div className="mt-3 bg-gray-100 p-3 rounded"><p className="text-gray-500">[Interactive practical exercises coming soon...]</p></div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* CTA */}
      <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="bg-sky-800 py-16 px-6 md:px-10 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">Join the NobleAce Training Academy Today</h2>
        <p className="max-w-3xl mx-auto text-lg mb-8 opacity-90">Get hands-on experience, industry-recognized skills, and practical expertise to accelerate your career in mining, geoscience, and exploration.</p>
        <a href="#register" className="bg-white text-sky-800 px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-200 transition">Register Now</a>
      </motion.section>

      <Footersection />
    </div>
  );
}
