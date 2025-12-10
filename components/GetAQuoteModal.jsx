// components/GetAQuoteModal.jsx
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function GetAQuoteModal({ onClose }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState(null);

  const services = [
    "Geological Mapping",
    "Geophysics (Acquisition)",
    "Geophysics (Processing)",
    "Drilling Program",
    "EIA / ESG",
    "Hydrogeology",
    "GIS & Modelling",
    "Custom - Contact Me",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const body = new FormData();
      Object.entries(form).forEach(([k, v]) => body.append(k, v));
      if (file) body.append("attachment", file);

      const res = await fetch("/api/contact", {
        method: "POST",
        body,
      });

      if (res.ok) {
        setOk(true);
        setForm({ name: "", email: "", phone: "", company: "", service: "", budget: "", message: "" });
        setFile(null);
      } else {
        setOk(false);
      }
    } catch (err) {
      setOk(false);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      aria-modal="true"
      role="dialog"
    >
      {/* backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black backdrop-blur-sm"
        onClick={onClose}
      />

      {/* modal */}
      <motion.div
        initial={{ y: 40, opacity: 0, scale: 0.98 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="relative z-50 w-full max-w-3xl bg-white rounded-2xl shadow-2xl p-6 md:p-8"
      >
        <div className="flex items-start justify-between">
          <h3 className="text-xl font-semibold text-[#0b2130]">Get A Quote</h3>
          <button onClick={onClose} className="text-slate-500 hover:text-slate-700">Close</button>
        </div>

        <form onSubmit={handleSubmit} className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <input required name="name" value={form.name} onChange={handleChange} placeholder="Full name" className="col-span-1 md:col-span-1 p-3 border rounded" />
          <input required name="email" value={form.email} onChange={handleChange} type="email" placeholder="Email address" className="p-3 border rounded" />
          <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone number" className="p-3 border rounded" />
          <input name="company" value={form.company} onChange={handleChange} placeholder="Company / Organization" className="p-3 border rounded" />

          <select name="service" value={form.service} onChange={handleChange} className="p-3 border rounded">
            <option value="">Select service</option>
            {services.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>

          <input name="budget" value={form.budget} onChange={handleChange} placeholder="Estimated budget (optional)" className="p-3 border rounded" />

          <div className="md:col-span-2">
            <label className="text-sm text-slate-600">Attach file (brief / map / spec) — optional</label>
            <input type="file" onChange={(e) => setFile(e.target.files?.[0] ?? null)} className="mt-2 w-full" />
          </div>

          <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message / Project details" className="md:col-span-2 p-3 border rounded h-28" />

          <div className="md:col-span-2 flex items-center justify-between gap-4">
            <button type="submit" disabled={loading} className="px-5 py-3 rounded bg-[#003D5C] text-white font-semibold disabled:opacity-60">
              {loading ? "Sending..." : "Request Quote"}
            </button>

            <div className="text-sm text-slate-600">
              {ok === true && <span className="text-green-600">Request submitted — we'll contact you shortly.</span>}
              {ok === false && <span className="text-red-600">Submission failed — try again or email training@nobleaceearthwork.com</span>}
            </div>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
}
