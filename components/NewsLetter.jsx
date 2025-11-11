import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

// --- Parallax Hook ---
function useParallax(ref, max = 20) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const windowH = window.innerHeight;
      const progress = Math.max(0, Math.min(1, 1 - rect.top / windowH));
      setOffset(progress * max);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [ref, max]);

  return offset;
}

// --- Main Component ---
export default function NewsletterSubscribeSection({ onActive }) {
  const sectionRef = useRef();
  const inView = useInView(sectionRef, { threshold: 0.5 });
  const controls = useAnimation();
  const [showBar, setShowBar] = useState(false);
  const parallax = useParallax(sectionRef, 20);

  // --- Navbar mode trigger ---
  useEffect(() => {
    if (inView) {
      onActive?.("subscribe", "dark");
      setShowBar(true);
    } else {
      onActive?.(null, "light");
      setShowBar(false);
    }
  }, [inView, onActive]);

  // --- Cinematic entrance ---
  useEffect(() => {
    controls.start(inView ? "visible" : "hidden");
  }, [inView, controls]);

  return (
    <motion.section
      ref={sectionRef}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, scale: 0.98, y: 40 },
        visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] } },
      }}
      className="w-full min-h-[480px] flex items-center justify-center relative overflow-hidden"
      style={{ background: "linear-gradient(120deg,#fff 0%,#f7f7f7 100%)", perspective: "800px", willChange: "opacity,transform,background" }}
      aria-label="Newsletter Subscribe"
      role="region"
    >
      {/* Parallax overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(120deg,rgba(255,255,255,0.98) 0%,rgba(247,247,247,0.98) 100%)",
          zIndex: 0,
          transform: `translateY(${parallax}px)`,
          transition: "transform 0.3s cubic-bezier(.4,0,.2,1)",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-xl mx-auto flex flex-col items-center justify-center text-center px-4 py-16">
        {/* Headline */}
        <motion.h2
          className="uppercase tracking-[0.18em] text-[13px] md:text-[15px] font-semibold text-black mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          SIGN UP FOR OUR UPDATES
        </motion.h2>

        {/* Progress bar */}
        <motion.div
          className="w-full h-[2px] bg-transparent mb-8 rounded"
          initial={{ width: 0 }}
          animate={showBar ? { width: "100%" } : { width: 0 }}
          transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
          style={{ background: "linear-gradient(90deg,#222 0%,#bbb 100%)" }}
          aria-hidden="true"
        />

        {/* Subheadline */}
        <motion.p
          className="text-[1.35rem] md:text-[1.7rem] font-light text-black mb-1 leading-snug tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        >
          Get exclusive updates on launches, personalized communication, and our latest news.
        </motion.p>

        {/* Form */}
        <motion.form
          className="w-full flex flex-col md:flex-row items-center justify-center gap-3 mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          autoComplete="off"
          aria-label="Subscribe to newsletter"
        >
          <label htmlFor="newsletter-email" className="sr-only">Email address</label>
          <input
            id="newsletter-email"
            type="email"
            required
            autoComplete="email"
            placeholder="Enter your email address"
            className="w-full md:w-auto flex-1 h-12 md:h-14 px-4 rounded-md border border-gray-300 bg-white text-black text-base font-medium outline-none transition-all duration-200 focus:border-black/60"
            aria-label="Email address"
          />
          <motion.button
            type="submit"
            className="relative flex items-center justify-center h-12 md:h-14 px-8 md:px-12 rounded-md border border-black text-black bg-transparent font-semibold text-base uppercase tracking-wide transition-all duration-300 hover:bg-black hover:text-white focus:bg-black focus:text-white outline-none"
            whileHover={{ boxShadow: "0 2px 16px 0 rgba(0,0,0,0.08)", scale: 1.04 }}
            style={{ letterSpacing: "0.12em", overflow: "hidden" }}
            aria-label="Subscribe"
          >
            <span className="relative z-10">+ Subscribe</span>
            <motion.span
              className="absolute left-0 bottom-0 w-full h-[2px] bg-black"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              style={{ transformOrigin: "left" }}
              aria-hidden="true"
            />
          </motion.button>
        </motion.form>
      </div>
    </motion.section>
  );
}
