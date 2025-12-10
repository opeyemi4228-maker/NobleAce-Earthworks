// app/contact/page.jsx
"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footersection from "@/components/Footer1";

// --- Animation Variants ---
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const cardHover = {
  hover: { scale: 1.05, boxShadow: "0 15px 30px rgba(0,0,0,0.3)", transition: { type: "spring", stiffness: 300 } },
};

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

export default function ContactPage() {
  const reducedMotion = useReducedMotion();

  // Parallax refs
  const [bgRef, bgOffset] = useParallax(0.3);

  // Form inView
  const formRef = useRef(null);
  const formInView = useInView(formRef, { once: true, margin: "-100px" });

  // Form state
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [success, setSuccess] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleService(service) {
    setForm({ ...form, service });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSuccess(false);
    await new Promise(r => setTimeout(r, 1000));
    setSuccess(true);
    setForm({ name: "", email: "", phone: "", service: "", message: "" });
    setTimeout(() => setSuccess(false), 3000);
  }

  const contactMethods = [
    {
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
      ),
      title: "Email",
      content: <><a href="mailto:contact@nobleaceearthworks.com">contact@nobleaceearthworks.com</a><p>Response within 24 hours</p></>
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
        </svg>
      ),
      title: "Phone",
      content: <><a href="tel:+1234567890">+1 (234) 567-890</a><p>Mon-Fri 9am-6pm EST</p></>
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
        </svg>
      ),
      title: "Address",
      content: <><p>123 Mining Street</p><p>Suite 100, City, State 12345</p></>
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
          <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
        </svg>
      ),
      title: "Business Hours",
      content: <><p>Mon-Fri: 9:00 AM - 6:00 PM</p><p>Sat-Sun: Closed</p></>
    },
  ];

  return (
    <div className="min-h-screen font-montserrat bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center py-32 overflow-hidden">
        {/* Background Image */}
        <motion.div
          ref={bgRef}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: 0,
            transform: `translate3d(0,${bgOffset}px,0)`,
          }}
        />
        {/* Navy Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-navy-700 opacity-70 z-0"></div>

        <motion.h1 initial={{ y: -40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }} className="text-4xl md:text-6xl font-extrabold text-white z-10">
          Contact Noble Ace Earthworks
        </motion.h1>
        <motion.p initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-lg md:text-2xl text-white/90 z-10 mt-2">
          Reach out for inquiries, services, or project consultations.
        </motion.p>
      </section>

      {/* Form & Contact Info */}
      <section className="max-w-6xl mx-auto px-4 md:px-12 py-20 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Form */}
        <motion.form
          ref={formRef}
          initial="hidden"
          animate={formInView ? "visible" : "hidden"}
          variants={fadeUp}
          onSubmit={handleSubmit}
          className="relative bg-white p-8 rounded-2xl shadow-xl flex flex-col gap-6"
        >
          {success && (
            <div className="absolute top-6 left-1/2 transform -translate-x-1/2 bg-navy-700 text-white px-6 py-3 rounded-lg font-semibold z-20">
              ✔ Message Sent!
            </div>
          )}
          <h2 className="text-2xl font-bold text-navy-700">Send Us a Message</h2>
          <input type="text" name="name" placeholder="Full Name" value={form.name} onChange={handleChange} required className="p-4 border-2 border-gray-300 rounded-xl focus:border-navy-700 focus:ring-1 focus:ring-navy-300" />
          <input type="email" name="email" placeholder="Email Address" value={form.email} onChange={handleChange} required className="p-4 border-2 border-gray-300 rounded-xl focus:border-navy-700 focus:ring-1 focus:ring-navy-300" />
          <input type="tel" name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} className="p-4 border-2 border-gray-300 rounded-xl focus:border-navy-700 focus:ring-1 focus:ring-navy-300" />
          
          <div>
            <p className="font-semibold mb-2">Service Interest</p>
            <div className="flex flex-wrap gap-3">
              {["Exploration", "Extraction", "Processing", "Consulting"].map((s) => (
                <motion.button
                  key={s}
                  type="button"
                  onClick={() => handleService(s)}
                  whileHover={{ scale: 1.05 }}
                  className={`px-4 py-2 rounded-xl border-2 transition ${form.service === s ? "bg-navy-700 text-white border-navy-700" : "bg-white text-gray-800 border-gray-400"}`}
                >
                  {s}
                </motion.button>
              ))}
            </div>
          </div>

          <textarea name="message" placeholder="Your Message" value={form.message} onChange={handleChange} required className="p-4 border-2 border-gray-300 rounded-xl focus:border-navy-700 focus:ring-1 focus:ring-navy-300" />
          <button type="submit" className="bg-navy-700 text-white py-3 font-semibold rounded-xl hover:shadow-lg transition-all">
            Send Message
          </button>
        </motion.form>

        {/* Contact Info Cards */}
        <div className="flex flex-col gap-6">
          {contactMethods.map((c, idx) => (
            <motion.div key={idx} whileHover={cardHover.hover} className="flex items-start bg-white p-6 rounded-2xl shadow-lg gap-4">
              <div className="w-14 h-14 bg-navy-700 rounded-xl flex items-center justify-center">{c.icon}</div>
              <div>
                <h3 className="font-semibold text-navy-700">{c.title}</h3>
                {c.content}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Map */}
     <section className="max-w-6xl mx-auto px-4 md:px-12 mb-20">
  <h2 className="text-2xl font-bold text-navy-700 mb-6">Find Us</h2>
  <div className="w-full h-96 rounded-2xl overflow-hidden shadow-lg">
    <iframe
      title="Noble Ace Earthworks Location - Nigeria"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.0073793228985!2d3.379205114665643!3d6.524379124940831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b8c1e9c1a9d%3A0x1d0f0e9b7b1c8f3e!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  </div>
</section>
      <Footersection />

      {/* Montserrat font & Navy color */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');
        .font-montserrat { font-family: 'Montserrat', sans-serif !important; }
        .text-navy-700 { color: #0a2540; }
        .bg-navy-700 { background-color: #0a2540; }
        .focus\\:ring-navy-300:focus { box-shadow: 0 0 0 3px rgba(10,37,64,0.2); }
      `}</style>
    </div>
  );
}
