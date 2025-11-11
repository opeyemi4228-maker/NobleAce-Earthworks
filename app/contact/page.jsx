'use client';
import React, { useRef, useState, useEffect } from "react";
import { motion, useAnimation, useInView, useScroll, useReducedMotion } from "framer-motion";
import { FaLinkedin, FaTwitter, FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";
import Navbar from "@/components/Navbar";
import Footersection from "@/components/Footer1";
import Contact_us from "@/components/contact_us";

// --- Parallax Hook ---
function useParallax(speed = 0.5) {
  const ref = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      setOffset(window.scrollY * speed - rect.top * speed);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);
  return [ref, offset];
}

// --- Animation Variants ---
const fadeStagger = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.15, duration: 0.8, ease: "easeOut" },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const cardHover = {
  hover: { scale: 1.05, boxShadow: "0 15px 30px rgba(0,0,0,0.3)", transition: { type: "spring", stiffness: 300 } },
};

const badgeFloat = {
  initial: { y: 0 },
  animate: { y: [0, -8, 0], transition: { repeat: Infinity, duration: 2, ease: "easeInOut" } },
};

// --- Mining Images ---
const miningImages = [
  { src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80", alt: "Mining Equipment in Action" },
  { src: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80", alt: "Mineral Processing Facility" },
  { src: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80", alt: "Safety Operations Team" },
];

// --- Social Media ---
const socialLinks = [
  { icon: <FaLinkedin />, label: "LinkedIn", url: "#" },
  { icon: <FaTwitter />, label: "Twitter", url: "#" },
  { icon: <FaYoutube />, label: "YouTube", url: "#" },
  { icon: <FaInstagram />, label: "Instagram", url: "#" },
  { icon: <FaFacebook />, label: "Facebook", url: "#" },
];

// --- Main Page ---
export default function ContactPage() {
  const { scrollY } = useScroll();
  const reducedMotion = useReducedMotion();

  // Parallax refs
  const [bgRef, bgOffset] = useParallax(0.5);
  const [midRef, midOffset] = useParallax(0.7);
  const [fgRef, fgOffset] = useParallax(1);

  // Form & gallery inView
  const galleryRef = useRef(null);
  const galleryInView = useInView(galleryRef, { once: true, margin: "-100px" });
  const formRef = useRef(null);
  const formInView = useInView(formRef, { once: true, margin: "-100px" });

  // Form state
  const [form, setForm] = useState({ name: "", email: "", service: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Handlers
  function handleChange(e) { setForm({ ...form, [e.target.name]: e.target.value }); }
  function handleService(service) { setForm({ ...form, service }); }
  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    await new Promise(r => setTimeout(r, 1500));
    setLoading(false);
    setSuccess(true);
    setForm({ name: "", email: "", service: "", message: "" });
    setTimeout(() => setSuccess(false), 2500);
  }

  const motionProps = reducedMotion ? { transition: { duration: 0 } } : {};

  return (
    <div className="min-h-screen bg-white text-gray-800 font-[Outfit]">
      <Navbar />

      {/* --- Hero Section --- */}
      <section
        ref={bgRef}
        className="relative overflow-hidden flex flex-col items-center justify-center pt-20 pb-16"
        style={{ background: "linear-gradient(120deg, #23272a 80%, #B8976A 100%)" }}
      >
        <motion.div
          style={{
            position: "absolute",
            top: bgOffset,
            left: 0,
            width: "100%",
            height: "100%",
            background: "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80') center/cover no-repeat",
            opacity: 0.15,
            zIndex: 0,
            pointerEvents: "none",
            transform: `translate3d(0,${bgOffset}px,0)`,
          }}
        />
        <motion.div
          variants={fadeStagger}
          initial="hidden"
          animate="show"
          className="relative z-10 flex flex-col items-center text-center px-4"
        >
          <motion.h1 variants={fadeUp} className="text-3xl md:text-6xl font-extrabold text-white mb-4 mt-8 tracking-wide">
            Consult with Us
          </motion.h1>
          <motion.h2 variants={fadeUp} className="text-xl md:text-2xl font-semibold text-white/90">
            Before You Commit
          </motion.h2>
        </motion.div>
      </section>

      {/* --- Mining Gallery --- */}
      <section ref={midRef} className="relative z-10 py-20 px-4 md:px-12 bg-gray-50">
        <motion.div
          ref={galleryRef}
          variants={fadeStagger}
          initial="hidden"
          animate={galleryInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {miningImages.map((img, i) => (
            <motion.div
              key={img.alt}
              className="rounded-xl overflow-hidden shadow-lg border-2 border-gray-300 cursor-pointer bg-white"
              variants={fadeUp}
              whileHover={cardHover.hover}
              style={{ transform: `translate3d(0,${midOffset * (i + 1) * 0.15}px,0)` }}
            >
              <img src={img.src} alt={img.alt} className="w-full h-64 object-cover transition-transform duration-300" />
              <div className="p-4 text-center">
                <h3 className="text-gray-700 font-medium">{img.alt}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* --- Contact Form --- */}
      <section className="relative z-10 py-20 px-4 md:px-12 flex flex-col md:flex-row items-center justify-center gap-12">
        {/* Left Image */}
        <motion.div
          ref={fgRef}
          className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-2xl"
          initial={{ x: -80, opacity: 0 }}
          animate={formInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=900&q=80"
            alt="Mining Site"
            className="w-full h-96 object-cover"
          />
        </motion.div>

        {/* Form */}
        <motion.form
          ref={formRef}
          className="w-full md:w-1/2 bg-white border-2 border-gray-800 rounded-2xl shadow-xl p-8 flex flex-col gap-6"
          initial={{ x: 80, opacity: 0 }}
          animate={formInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          onSubmit={handleSubmit}
        >
          <h2 className="text-3xl font-bold text-gray-700 mb-4">Get in Touch</h2>
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="flex-1 px-4 py-3 rounded-lg border-2 border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-700 transition"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              required
              className="flex-1 px-4 py-3 rounded-lg border-2 border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-700 transition"
            />
          </div>

          <label className="text-lg font-semibold mt-2">Service Interest</label>
          <div className="flex flex-wrap gap-3">
            {["Exploration", "Extraction", "Processing", "Consulting"].map(service => (
              <motion.button
                type="button"
                key={service}
                onClick={() => handleService(service)}
                className={`px-4 py-2 rounded-lg border-2 transition ${
                  form.service === service
                    ? "bg-gray-300 text-gray-900 border-gray-400"
                    : "bg-white text-gray-800 border-gray-700"
                }`}
                whileHover={{ scale: 1.08, boxShadow: "0 5px 15px rgba(0,0,0,0.3)" }}
                whileTap={{ scale: 0.98 }}
              >
                {service}
              </motion.button>
            ))}
          </div>

          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-4 py-3 rounded-lg border-2 border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-700 transition"
          />

          <motion.button
            type="submit"
            className="w-full py-3 rounded-full bg-black text-white font-semibold text-lg flex items-center justify-center"
            whileTap={{ scale: 0.97 }}
            disabled={loading}
          >
            {loading ? (
              <motion.span
                className="loader"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                style={{
                  display: "inline-block",
                  width: 24,
                  height: 24,
                  border: "3px solid #FFD700",
                  borderTop: "3px solid #23272a",
                  borderRadius: "50%",
                  marginRight: 8,
                }}
              />
            ) : success ? (
              <span className="text-green-600 font-bold">✔ Sent!</span>
            ) : (
              "Submit"
            )}
          </motion.button>
        </motion.form>
      </section>

      {/* --- Social & Footer --- */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto flex justify-center gap-6">
          {socialLinks.map((s, i) => (
            <motion.a
              key={i}
              href={s.url}
              aria-label={s.label}
              className="text-gray-800 text-2xl"
              whileHover={{ scale: 1.2, color: "#B8976A" }}
              whileTap={{ scale: 0.95 }}
            >
              {s.icon}
            </motion.a>
          ))}
        </div>
      </section>

      <Contact_us />
      <Footersection />

      {/* --- Loader CSS --- */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&display=swap');
        .font-[Outfit] { font-family: 'Outfit', sans-serif !important; }
        .loader {
          border: 3px solid #FFD700;
          border-top: 3px solid #23272a;
          border-radius: 50%;
          width: 24px;
          height: 24px;
          display: inline-block;
        }
      `}</style>
    </div>
  );
}
