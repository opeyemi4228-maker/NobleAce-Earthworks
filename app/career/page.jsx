"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import Footer1 from "@/components/Footer1";
import Navbar from "@/components/Navbar";

// Single-file Next.js-compatible React component using Tailwind CSS + Framer Motion
// Content rewritten only—structure, functions, and layout preserved exactly.

export default function CareersNobleAce() {
  const [resumeName, setResumeName] = useState(null);
  const [certNames, setCertNames] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    availability: "",
    education: "",
    linkedin: "",
    coverLetter: "",
    agree: false,
  });

  const resumeRef = useRef(null);
  const certsRef = useRef(null);

  const Stat = ({ label, value }) => (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <div className="text-4xl md:text-5xl font-extrabold text-emerald-600">{value}</div>
      <div className="text-sm md:text-base text-slate-700">{label}</div>
    </motion.div>
  );

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setFormValues((p) => ({ ...p, [name]: type === "checkbox" ? checked : value }));
  }

  function handleResume(e) {
    const file = e.target.files?.[0];
    if (file) setResumeName(file.name);
  }

  function handleCerts(e) {
    const files = Array.from(e.target.files || []);
    setCertNames(files.map((f) => f.name));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!formValues.agree) {
      alert("Please confirm your information and agree to our privacy policy before submitting.");
      return;
    }

    setSubmitting(true);
    try {
      await new Promise((r) => setTimeout(r, 900));

      setFormValues({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        position: "",
        experience: "",
        availability: "",
        education: "",
        linkedin: "",
        coverLetter: "",
        agree: false,
      });
      setResumeName(null);
      setCertNames([]);

      alert("Your application has been received. Our recruitment team will follow up shortly.");
    } catch (err) {
      console.error(err);
      alert("An error occurred while submitting your application. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white text-slate-800 antialiased">
        {/* HERO */}
        <header className="relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-sky-900 to-slate-800 text-white px-6 md:px-12 pt-24 pb-20"
          >
            <div className="container mx-auto max-w-5xl relative z-10">
              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-5xl font-extrabold leading-tight max-w-3xl"
              >
                Build Your Future with{" "}
                <span className="text-emerald-400">NobleAce Earthwork</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 0.95, y: 0 }}
                transition={{ delay: 0.12, duration: 0.6 }}
                className="mt-5 text-slate-200 max-w-2xl text-lg md:text-xl"
              >
                Join a forward-thinking team of explorers, engineers, and innovators shaping the next era of
                sustainable resource development across the globe.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.22 }}
                className="mt-8"
              >
                <a
                  href="#positions"
                  className="inline-flex items-center gap-3 bg-emerald-600 hover:bg-emerald-500 active:translate-y-0.5 text-white rounded-full px-6 py-3 font-semibold shadow-lg ring-emerald-300/30 ring-1"
                >
                  View Open Roles
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </motion.div>
            </div>

            {/* Decorative SVG */}
            <div className="pointer-events-none absolute -right-10 -bottom-10 opacity-20">
              <svg width="320" height="320" viewBox="0 0 320 320" fill="none">
                <defs>
                  <linearGradient id="g1" x1="0" x2="1">
                    <stop offset="0%" stopColor="#059669" stopOpacity="0.18" />
                    <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.06" />
                  </linearGradient>
                </defs>
                <circle cx="160" cy="160" r="120" fill="url(#g1)" />
              </svg>
            </div>
          </motion.div>
        </header>

        {/* WHY SECTION */}
        <main className="container mx-auto max-w-6xl px-6 md:px-8 mt-12">
          <section className="bg-white rounded-2xl shadow-xl p-6 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-2">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Why NobleAce?</h2>
                <p className="mt-3 text-slate-600 max-w-xl">
                  We are a people-driven exploration and mining development company, committed to pioneering
                  technology, responsible geoscience, and unlocking long-term value for communities and clients.
                </p>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      icon: "🌍",
                      title: "Make Global Impact",
                      body: "Work on high-impact geological and mining projects spanning multiple countries and terrains.",
                    },
                    {
                      icon: "🚀",
                      title: "Innovation At Our Core",
                      body: "Access advanced tools, AI-assisted modelling, and next-gen exploration techniques.",
                    },
                    {
                      icon: "👥",
                      title: "Collaborate With Experts",
                      body: "Join teams led by seasoned geologists, engineers, and thought leaders in the industry.",
                    },
                    {
                      icon: "📈",
                      title: "Grow Your Career",
                      body: "Progress through structured development pathways, mentorship, and industry certifications.",
                    },
                  ].map((v) => (
                    <motion.div
                      key={v.title}
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      className="bg-slate-50 border border-slate-100 p-5 rounded-2xl shadow-sm"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-br from-slate-900 to-sky-700 text-white text-lg">
                          {v.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-900">{v.title}</h4>
                          <p className="text-sm text-slate-600 mt-1">{v.body}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <aside className="hidden md:block">
                <div className="rounded-xl bg-emerald-50 border border-emerald-100 p-6">
                  <h3 className="text-lg font-semibold text-emerald-700">Employee Benefits</h3>
                  <p className="mt-2 text-sm text-emerald-600">
                    Your well-being fuels our progress. We invest in benefits that help you thrive.
                  </p>

                  <ul className="mt-4 space-y-3 text-sm text-slate-700">
                    <li>💰 Competitive salary packages</li>
                    <li>🏥 Comprehensive health coverage</li>
                    <li>📚 Learning & certification support</li>
                    <li>🌴 Flexible & hybrid work options</li>
                    <li>🎯 Retirement & financial planning</li>
                  </ul>

                  <a href="#positions" className="mt-5 inline-block text-sm font-medium text-emerald-700">
                    View Opportunities →
                  </a>
                </div>
              </aside>
            </div>
          </section>

          {/* EXPERTISE */}
          <section className="mt-8">
            <h3 className="text-xl font-bold text-slate-900">Our Professional Capabilities</h3>
            <p className="text-slate-600 mt-2 max-w-2xl">
              We deliver end-to-end mining and geoscience solutions powered by innovation and deep expertise.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              {[
                {
                  emoji: "⛏️",
                  title: "Mineral Exploration",
                  body: "Data-driven exploration with advanced geophysics, geochemistry, and geological modelling.",
                },
                {
                  emoji: "📊",
                  title: "Resource Estimation",
                  body: "Internationally compliant JORC & NI 43-101 resource modelling with defensible results.",
                },
                {
                  emoji: "🔬",
                  title: "Geological Consulting",
                  body: "Expert structural interpretation, core logging, modelling, and exploration strategy.",
                },
                {
                  emoji: "🌱",
                  title: "Environmental Solutions",
                  body: "Holistic environmental assessments with sustainability-focused development plans.",
                },
                {
                  emoji: "⚙️",
                  title: "Mine Planning & Design",
                  body: "Optimized surface and underground mine planning, balancing safety and economics.",
                },
                {
                  emoji: "📈",
                  title: "Feasibility & Due Diligence",
                  body: "Robust financial and technical assessments that support major investment decisions.",
                },
              ].map((x) => (
                <motion.article
                  key={x.title}
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-md"
                >
                  <div className="text-3xl mb-3">{x.emoji}</div>
                  <h4 className="font-semibold text-slate-900">{x.title}</h4>
                  <p className="text-sm text-slate-600 mt-2">{x.body}</p>
                </motion.article>
              ))}
            </div>
          </section>

          {/* APPLICATION FORM */}
          <section id="positions" className="mt-10 bg-slate-50 rounded-2xl p-6 md:p-10 shadow-lg">
            <div className="md:flex md:gap-8">
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold">Join Our Team</h3>
                <p className="mt-3 text-slate-600">
                  Submit your application and take the next step toward an exciting and impactful career at NobleAce Earthwork.
                </p>

                <div className="mt-6 space-y-4">
                  <div className="rounded-lg bg-white p-4 border">
                    <h5 className="font-semibold">How Our Hiring Works</h5>
                    <p className="text-sm text-slate-600 mt-2">
                      Every application is reviewed thoroughly. Shortlisted candidates receive interview invitations within 5–7 business days.
                    </p>
                  </div>

                  <div className="rounded-lg bg-white p-4 border">
                    <h5 className="font-semibold">Available Positions</h5>
                    <ul className="text-sm text-slate-700 mt-2 space-y-1">
                      <li>Exploration Geologist</li>
                      <li>Mining Engineer</li>
                      <li>Geophysicist</li>
                      <li>GIS Analyst</li>
                      <li>Environmental Specialist</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* FORM */}
              <form
                onSubmit={handleSubmit}
                className="mt-6 md:mt-0 md:w-1/2 bg-white rounded-2xl p-6 border shadow-sm"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* form fields unchanged except text */}
                  <label className="block">
                    <span className="text-sm font-medium text-slate-700">First Name *</span>
                    <input
                      name="firstName"
                      value={formValues.firstName}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full rounded-xl border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-200"
                    />
                  </label>

                  <label className="block">
                    <span className="text-sm font-medium text-slate-700">Last Name *</span>
                    <input
                      name="lastName"
                      value={formValues.lastName}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full rounded-xl border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-200"
                    />
                  </label>

                  <label className="block">
                    <span className="text-sm font-medium text-slate-700">Email *</span>
                    <input
                      name="email"
                      value={formValues.email}
                      onChange={handleChange}
                      type="email"
                      required
                      className="mt-1 block w-full rounded-xl border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-200"
                    />
                  </label>

                  <label className="block">
                    <span className="text-sm font-medium text-slate-700">Phone *</span>
                    <input
                      name="phone"
                      value={formValues.phone}
                      onChange={handleChange}
                      type="tel"
                      required
                      className="mt-1 block w-full rounded-xl border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-200"
                    />
                  </label>

                  <label className="block">
                    <span className="text-sm font-medium text-slate-700">Position of Interest *</span>
                    <select
                      name="position"
                      value={formValues.position}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full rounded-xl border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-200"
                    >
                      <option value="">Select a role</option>
                      <option value="Exploration Geologist">Exploration Geologist</option>
                      <option value="Mining Consultant">Mining Consultant</option>
                      <option value="Environmental Specialist">Environmental Specialist</option>
                      <option value="Mining Engineer">Mining Engineer</option>
                      <option value="GIS Analyst">GIS Analyst</option>
                      <option value="Geophysicist">Geophysicist</option>
                      <option value="Project Manager">Project Manager</option>
                      <option value="Field Technician">Field Technician</option>
                      <option value="Other">Other</option>
                    </select>
                  </label>

                  <label className="block">
                    <span className="text-sm font-medium text-slate-700">Years of Experience *</span>
                    <select
                      name="experience"
                      value={formValues.experience}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full rounded-xl border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-200"
                    >
                      <option value="">Choose experience level</option>
                      <option value="0-2">0–2 years</option>
                      <option value="3-5">3–5 years</option>
                      <option value="6-10">6–10 years</option>
                      <option value="10+">10+ years</option>
                    </select>
                  </label>

                  <label className="block">
                    <span className="text-sm font-medium text-slate-700">Availability *</span>
                    <select
                      name="availability"
                      value={formValues.availability}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full rounded-xl border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-200"
                    >
                      <option value="">Select availability</option>
                      <option value="Immediate">Immediate</option>
                      <option value="2-weeks">2 Weeks Notice</option>
                      <option value="1-month">1 Month</option>
                      <option value="Negotiable">Negotiable</option>
                    </select>
                  </label>

                  <label className="block md:col-span-2">
                    <span className="text-sm font-medium text-slate-700">
                      Highest Level of Education *
                    </span>
                    <select
                      name="education"
                      value={formValues.education}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full rounded-xl border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-200"
                    >
                      <option value="">Select education level</option>
                      <option value="High School Diploma">High School Diploma</option>
                      <option value="Associate Degree">Associate Degree</option>
                      <option value="Bachelor's Degree">Bachelor’s Degree</option>
                      <option value="Master's Degree">Master’s Degree</option>
                      <option value="PhD/Doctorate">PhD/Doctorate</option>
                    </select>
                  </label>

                  <label className="block md:col-span-2">
                    <span className="text-sm font-medium text-slate-700">LinkedIn Profile</span>
                    <input
                      name="linkedin"
                      value={formValues.linkedin}
                      onChange={handleChange}
                      type="url"
                      placeholder="https://linkedin.com/in/yourprofile"
                      className="mt-1 block w-full rounded-xl border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-200"
                    />
                  </label>

                  <label className="block md:col-span-2">
                    <span className="text-sm font-medium text-slate-700">
                      Cover Letter — Tell Us Why You’re a Great Fit *
                    </span>
                    <textarea
                      name="coverLetter"
                      value={formValues.coverLetter}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Briefly introduce yourself and share why you’d love to join NobleAce Earthwork."
                      className="mt-1 block w-full rounded-xl border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-200"
                    ></textarea>
                  </label>

                  {/* Resume Upload */}
                  <div className="md:col-span-2">
                    <label className="block">
                      <span className="text-sm font-medium text-slate-700">
                        Upload Resume/CV (PDF, DOCX – Max 5MB) *
                      </span>
                      <div className="mt-2 flex items-center gap-3">
                        <label className="flex-1 cursor-pointer rounded-xl border border-dashed border-slate-200 bg-white px-4 py-3 text-sm text-slate-600 hover:border-emerald-300">
                          <input
                            ref={resumeRef}
                            onChange={handleResume}
                            type="file"
                            accept=".pdf,.doc,.docx"
                            required
                            className="hidden"
                          />
                          <div className="flex items-center justify-between">
                            <span>{resumeName ?? "Choose file or drag & drop"}</span>
                            <span className="text-xs text-slate-400">📄</span>
                          </div>
                        </label>
                        <span className="text-xs text-slate-500">Max 5MB</span>
                      </div>
                    </label>
                  </div>

                  {/* Certifications */}
                  <div className="md:col-span-2">
                    <label className="block">
                      <span className="text-sm font-medium text-slate-700">Upload Certifications (Optional)</span>
                      <label className="w-full cursor-pointer rounded-xl border border-dashed border-slate-200 bg-white px-4 py-3 mt-2 text-sm text-slate-600 hover:border-emerald-300">
                        <input
                          ref={certsRef}
                          onChange={handleCerts}
                          type="file"
                          accept=".pdf,.doc,.docx"
                          multiple
                          className="hidden"
                        />
                        <div className="flex items-center justify-between">
                          <span>
                            {certNames.length ? certNames.join(", ") : "Choose files or drag & drop"}
                          </span>
                          <span className="text-xs text-slate-400">🎓</span>
                        </div>
                      </label>
                    </label>
                  </div>

                  {/* Agreement */}
                  <label className="md:col-span-2 flex items-start gap-3">
                    <input
                      name="agree"
                      checked={formValues.agree}
                      onChange={handleChange}
                      type="checkbox"
                      className="mt-1 shrink-0"
                    />
                    <span className="text-sm text-slate-700">
                      I confirm that the information provided is accurate and I agree to NobleAce
                      Earthwork’s privacy policy. *
                    </span>
                  </label>
                </div>

                {/* SUBMIT BUTTON */}
                <div className="mt-5">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white py-3 font-semibold shadow transition active:scale-[0.98] disabled:opacity-50"
                  >
                    {submitting ? "Submitting..." : "Submit Application"}
                  </button>
                </div>
              </form>
            </div>
          </section>
        </main>
      </div>

      <Footer1 />
    </>
  );
}
