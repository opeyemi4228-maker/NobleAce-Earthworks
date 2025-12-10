"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footersection from "@/components/Footer1";
import { FiX, FiChevronRight } from "react-icons/fi";

// ---------------------------
// NobleAce — Team & Leadership
// World-class single-file React (Next.js) page
// Built with Tailwind + Framer Motion
// Features: Leader modals, hover highlights, culture cards,
// timeline, recruitment section, accessibility, and polish.
// ---------------------------

const pageFade = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.6 } } };
const cardPop = { hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

const LEADERS = [
  {
    id: "timbee",
    name: " Mr. Timbee Terungwa Jacob",
    role: "Chief Executive Officer",
    photo: "https://images.unsplash.com/photo-1603415526960-f7e0328f2b5b?auto=format&fit=crop&w=800&q=80",
    bio: "Adewale leads with a rare combination of technical depth and strategic vision. Over 25 years, he has delivered large-scale mining projects and championed sustainable practices across West Africa.",
    achievements: [
      "Led 40+ large-scale projects",
      "AI-driven geological mapping pioneer",
      "Awarded Industry Leadership, 2022",
    ],
    focus: ["Strategy", "Sustainability", "Partnerships"],
  },
  {
    id: "musa",
    name: "Alhaji Kamaludeen Musa",
    role: "Head of Geological Sciences",
    photo: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=80",
    bio: "Dr. Sandra is an expert in exploration geology, core logging and resource modelling. She leads NobleAce's scientific programs and mentors young geoscientists.",
    achievements: ["12+ peer-reviewed papers", "Multiple commercial discoveries", "Head of Exploration 2016-present"],
    focus: ["Exploration", "Modelling", "Research"],
  },
  {
    id: "michael",
    name: "Engr. Michael Yusuf",
    role: "Director of Operations",
    photo: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=800&q=80",
    bio: "Michael runs field operations, safety systems and logistics — ensuring projects run on time and safely at scale.",
    achievements: ["Zero-accident safety model (5yrs)", "Built operations teams of 200+", "Innovator: soil stabilisation methods"],
    focus: ["Operations", "Safety", "Execution"],
  },
];

const CULTURE = [
  { title: "Integrity", desc: "We operate transparently, ethically and responsibly." },
  { title: "Innovation", desc: "We apply the latest science and technology to solve hard problems." },
  { title: "Sustainability", desc: "We deliver projects that restore environments and uplift communities." },
];

const TIMELINE = [
  { year: "2002", title: "Founded as a geological survey team" },
  { year: "2008", title: "Expanded into full earthworks & geotechnical services" },
  { year: "2016", title: "Started large-scale open-pit programs across West Africa" },
  { year: "2023", title: "Launched AI-driven exploration initiative" },
];

const JOBS = [
  { id: "geo-1", title: "Senior Geologist", location: "Lagos, NG", desc: "Lead exploration campaigns and resource modelling." },
  { id: "ops-1", title: "Site Operations Manager", location: "Abuja, NG", desc: "Oversee field operations and safety programs." },
  { id: "eng-1", title: "Geotechnical Engineer", location: "Remote", desc: "Design and validate earthworks and slope stability." },
];

export default function TeamLeadershipPage() {
  const [active, setActive] = useState(null); // leader id
  const [filter, setFilter] = useState("all");
  const [showApply, setShowApply] = useState(false);
  const applyRef = useRef();

  useEffect(() => {
    if (showApply && applyRef.current) applyRef.current.focus();
  }, [showApply]);

  const openLeader = (id) => setActive(id);
  const closeLeader = () => setActive(null);

  const leader = LEADERS.find((l) => l.id === active);

  return (
    <motion.div initial="hidden" animate="visible" variants={pageFade} className="min-h-screen bg-white text-slate-900">
      <Navbar />

      {/* HERO */}
      
         <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden mb-20 bg-[#00284e]">
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
        <div className="relative z-10 flex flex-col items-start justify-center h-full px-6 md:px-16 lg:px-24">
          <motion.h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-3xl" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
           MEET THE TEAM DRIVING NOBLEACE
          </motion.h1>
          <motion.p className="text-white/90 mt-4 max-w-2xl text-base md:text-lg" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
            Our leadership blends deep technical expertise, operational excellence and a commitment to sustainable development across every project.
          </motion.p>
        </div>
      </section>
      

      {/* LEADERS GRID */}
      <main className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <section className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800">EXECUTIVE LEADERSHIP</h2>
            <p className="text-gray-600 mt-1">Click any profile to view a detailed bio and achievements.</p>
          </div>
          <div className="flex items-center gap-3">
            <label className="text-sm text-gray-600">Filter:</label>
            <select value={filter} onChange={(e) => setFilter(e.target.value)} className="rounded-md border px-3 py-2 text-sm">
              <option value="all">All</option>
              <option value="strategy">Strategy</option>
              <option value="exploration">Exploration</option>
              <option value="operations">Operations</option>
            </select>
          </div>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {LEADERS.filter((l) => filter === "all" || l.focus.join(" ").toLowerCase().includes(filter)).map((l) => (
            <motion.article key={l.id} variants={cardPop} initial="hidden" whileInView="visible" viewport={{ once: true }} className="rounded-2xl shadow-lg hover:shadow-2xl bg-white overflow-hidden group cursor-pointer" onClick={() => openLeader(l.id)} aria-labelledby={`leader-${l.id}`} role="button" tabIndex={0} onKeyDown={(e) => (e.key === 'Enter' ? openLeader(l.id) : null)}>
              <div className="relative h-64 w-full overflow-hidden">
                <Image src={l.photo} alt={l.name} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>

              <div className="p-6">
                <h3 id={`leader-${l.id}`} className="text-lg md:text-xl font-semibold text-slate-800">{l.name}</h3>
                <p className="text-sky-700 font-medium mt-1">{l.role}</p>

                {/* Hover-activated role highlights (7) */}
                <div className="mt-4">
                  <div className="text-sm text-gray-600 line-clamp-3">{l.bio}</div>
                  <div className="mt-3 opacity-0 group-hover:opacity-100 transition-all text-sm text-gray-700">
                    <strong>Focus:</strong> {l.focus.join(", ")}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </section>

        {/* Modal (1) */}
        <AnimatePresence>
          {active && leader && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
              <motion.div initial={{ scale: 0.95, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95, y: 20 }} transition={{ duration: 0.25 }} className="bg-white rounded-2xl max-w-3xl w-full shadow-2xl overflow-hidden">
                <div className="relative">
                  <button onClick={closeLeader} aria-label="Close profile" className="absolute top-4 right-4 z-10 rounded-full bg-white p-2 shadow hover:bg-gray-50">
                    <FiX size={20} />
                  </button>
                  <div className="relative h-56 md:h-72 w-full">
                    <Image src={leader.photo} alt={leader.name} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40" />
                  </div>
                </div>

                <div className="p-6 md:p-8">
                  <h3 className="text-2xl font-bold text-slate-900">{leader.name}</h3>
                  <p className="text-sky-700 font-medium mt-1 mb-4">{leader.role}</p>
                  <p className="text-gray-700 leading-relaxed mb-4">{leader.bio}</p>

                  <h4 className="font-semibold mb-2">Key Achievements</h4>
                  <ul className="list-disc pl-6 text-gray-700 mb-6">
                    {leader.achievements.map((a, i) => (
                      <li key={i}>{a}</li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-3">
                    {leader.focus.map((f) => (
                      <span key={f} className="px-3 py-1 rounded-full bg-sky-50 text-sky-800 text-sm">{f}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CULTURE & VALUES (4) */}
        <section className="mt-16">
          <motion.h3 variants={cardPop} initial="hidden" whileInView="visible" className="text-2xl md:text-3xl font-semibold text-slate-800 mb-6">Our Culture & Core Values</motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CULTURE.map((c) => (
              <motion.div key={c.title} variants={cardPop} className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
                <h4 className="text-xl font-semibold text-sky-800 mb-2">{c.title}</h4>
                <p className="text-gray-600">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* TIMELINE (6) */}
        <section className="mt-16">
          <motion.h3 variants={cardPop} initial="hidden" whileInView="visible" className="text-2xl md:text-3xl font-semibold text-slate-800 mb-8">Our Journey</motion.h3>

          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-sky-200" />
            <div className="space-y-10 pl-10">
              {TIMELINE.map((item, idx) => (
                <motion.div key={item.year} variants={cardPop} className="relative">
                  <div className="absolute -left-7 top-1 flex items-center justify-center h-9 w-9 rounded-full bg-sky-700 text-white text-sm">{item.year}</div>
                  <div className="bg-white p-4 rounded-xl shadow-sm">
                    <h4 className="font-semibold text-slate-800">{item.title}</h4>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* RECRUITMENT / CAREERS (5) */}
        <section className="mt-16 bg-sky-50 p-8 rounded-2xl">
          <div className="flex items-start justify-between gap-6 flex-col md:flex-row">
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold text-slate-800">Join Our Team</h3>
              <p className="text-gray-700 mt-2 max-w-xl">We hire for excellence. Explore current openings and apply to help build a more sustainable mining future.</p>
            </div>
            <div>
              <button onClick={() => setShowApply(true)} className="bg-sky-800 text-white px-5 py-3 rounded-full font-semibold hover:bg-sky-700 transition">See Open Roles</button>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            {JOBS.slice(0,3).map((job) => (
              <div key={job.id} className="bg-white p-4 rounded-xl shadow-sm">
                <h4 className="font-semibold text-slate-800">{job.title}</h4>
                <p className="text-sm text-gray-600 mt-1">{job.location}</p>
                <p className="text-gray-700 mt-3 text-sm">{job.desc}</p>
                <div className="mt-4">
                  <button onClick={() => setShowApply(true)} className="text-sky-800 font-medium inline-flex items-center gap-2">Apply <FiChevronRight /></button>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* APPLY MODAL */}
      <AnimatePresence>
        {showApply && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
            <motion.div initial={{ scale: 0.95 }} animate={{ scale: 1 }} exit={{ scale: 0.95 }} className="bg-white rounded-2xl max-w-2xl w-full p-6 shadow-lg">
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-semibold">Apply for a Role</h3>
                <button onClick={() => setShowApply(false)} className="text-gray-500 hover:text-black"><FiX size={22} /></button>
              </div>

              <form className="mt-4 grid grid-cols-1 gap-4">
                <label className="text-sm text-gray-700">Full name</label>
                <input ref={applyRef} className="border rounded-md px-3 py-2" placeholder="Your full name" />

                <label className="text-sm text-gray-700">Email</label>
                <input className="border rounded-md px-3 py-2" placeholder="you@email.com" type="email" />

                <label className="text-sm text-gray-700">Role</label>
                <select className="border rounded-md px-3 py-2">
                  {JOBS.map((j) => <option key={j.id} value={j.id}>{j.title}</option>)}
                </select>

                <label className="text-sm text-gray-700">Cover letter</label>
                <textarea className="border rounded-md px-3 py-2 h-28" placeholder="A short message about why you'd be a great fit" />

                <div className="flex items-center justify-end gap-3 mt-2">
                  <button type="button" onClick={() => setShowApply(false)} className="px-4 py-2 rounded-md">Cancel</button>
                  <button type="submit" className="bg-sky-800 text-white px-4 py-2 rounded-md">Send Application</button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footersection />
    </motion.div>
  );
}
