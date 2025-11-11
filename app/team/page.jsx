'use client';

import React, { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer1 from "@/components/Footer1";
import { Montserrat } from "next/font/google";

/* ---------- Team page - NobleAce Earthworks ---------- */
/* Excellence and professionalism implemented with accessible, responsive markup.
   Tailwind utility classes are used; adjust if your project uses different CSS. */

const BRAND_GOLD = "#B8976A";
const montserrat = Montserrat({ subsets: ["latin"], weight: ["300","400","500","600","700"] });

const TEAM_MEMBERS = [
  {
    id: 1,
    name: "Mr. Timbee Terungwa Jacob",
    title: "Chief Executive Officer & Managing Director",
    years: "18 yrs",
    bio: "A visionary leader in geological engineering and mineral resource development, driving sustainable mining operations across Africa.",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
    type: "hero",
  },
  {
    id: 1,
    name: "Alhaji Kamaludeen Musa",
    title: "General Manager",
    years: "18 yrs",
    bio: "A visionary leader in geological engineering and mineral resource development, driving sustainable mining operations across Africa.",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
    type: "hero",
  },
  {
    id: 2,
    name: "Dr. Amara Okonkwo",
    title: "Head, Geological & Exploration Services",
    years: "15 yrs",
    bio: "Leads exploration teams in geophysical surveys, drilling programs, and mineral assessment across diverse terrains.",
    img: "https://images.unsplash.com/photo-1545996124-1b2f6b6d6a9a?auto=format&fit=crop&w=800&q=80",
    type: "small",
    bg: "bg-[#D4E8E8]",
  },
  {
    id: 3,
    name: "Dr. Cynthia O. Akande",
    title: "Director, Sustainability & Environmental Impact",
    years: "12 yrs",
    bio: "Passionate about responsible mining practices and environmental conservation.",
    type: "quote",
    quote:
      "At NobleAce Earthworks, we don’t just extract resources — we uncover value responsibly, ensuring every project leaves a legacy of sustainability.",
    bg: "bg-[#E5D4F0]",
  },
  {
    id: 4,
    name: "Engr. Oluwaseun Balogun",
    title: "Chief Mining Engineer",
    years: "20+ yrs",
    bio: "Oversees drilling, blasting, and field operations with precision and adherence to global safety standards.",
    img: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&w=800&q=80",
    type: "small",
    bg: "bg-[#D4F0E0]",
  },
  {
    id: 5,
    name: "Engr. Sarah Adeyemi",
    title: "Project Coordinator",
    years: "9 yrs",
    bio: "Ensures efficient coordination of exploration data, logistics, and client reporting.",
    type: "stat",
    stat: "200+",
    statLabel: "Exploration Projects Completed",
    bg: "bg-[#2B1810]",
  },
  {
    id: 6,
    name: "Engr. Kofi Agyeman",
    title: "Health, Safety & Compliance Officer",
    years: "13 yrs",
    bio: "Implements best-in-class HSE standards and oversees operational safety protocols on field projects.",
    img: "https://images.unsplash.com/photo-1545996124-1b2f6b6d6a9a?auto=format&fit=crop&w=800&q=60",
    type: "small",
    bg: "bg-[#FFD4C4]",
  },
  {
    id: 7,
    name: "Chika Nwafor",
    title: "Geospatial Data & GIS Lead",
    years: "10 yrs",
    bio: "Specializes in remote sensing, spatial mapping, and digital terrain analysis for mineral exploration.",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=60",
    type: "small",
    bg: "bg-[#E5D4F0]",
  },
  {
    id: 8,
    name: "Engr. David Okeke",
    title: "Director of Operations",
    years: "14 yrs",
    bio: "Oversees field logistics, drilling efficiency, and stakeholder coordination for all active mining sites.",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=60",
    type: "large",
  },
];

/* ---------- Simple in-view hook (IntersectionObserver) ---------- */
function useInView(ref, options = {}) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            if (options.once) observer.unobserve(entry.target);
          }
        });
      },
      { threshold: options.threshold ?? 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [ref, options.once, options.threshold]);
  return inView;
}

/* ---------- Hero ---------- */
function Hero() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, threshold: 0.18 });

  return (
    <section
      ref={ref}
      className="relative h-[60vh] flex items-center"
      aria-label="Meet our excellence hero"
      style={{
        backgroundImage:
          "linear-gradient(180deg, rgba(43,24,16,0.7), rgba(43,24,16,0.3)), url('https://images.unsplash.com/photo-1581091870622-3b5de1b1a8e8?auto=format&fit=crop&w=1800&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0" aria-hidden="true" />
      <div className="max-w-6xl px-5 md:px-12 z-10">
        <nav
          className="text-white/90 text-[13px] font-medium mb-4"
          style={{ marginTop: 30 }}
          aria-label="breadcrumb"
        >
          <ol className="flex gap-2 mt-20 items-center">
            <li><a href="/" className="hover:underline focus:outline-none">Home</a></li>
            <li className="opacity-70">/</li>
            <li className="font-medium">Our Team</li>
          </ol>
        </nav>

        <div
          className={`max-w-[900px] text-white leading-tight transition-all duration-500 ease-out ${inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
          style={{ letterSpacing: "1px" }}
        >
          <h1 className="text-[30px] md:text-[30px] lg:text-[45px] font-extrabold tracking-wide leading-tight">
            <span className="block">MEET THE <span style={{ color: BRAND_GOLD }}>MINDS</span></span>
            <span className="block">BEHIND NOBLEACE EARTHWORKS</span>
          </h1>

          <p className="mt-6 text-[16px] md:text-[18px] max-w-[650px] text-white/90 leading-[1.4]">
            A multidisciplinary team of geologists, engineers, and innovators — committed to redefining mining through excellence, innovation, and sustainability.
          </p>

          
    
        </div>
      </div>
    </section>
  );
}

/* ---------- TeamCard ---------- */
function TeamCard({ member }) {
  const ref = useRef(null);
  const visible = useInView(ref, { once: true, threshold: 0.15 });
  const base = "transition-transform duration-500 ease-out";

  if (member.type === "hero" || member.type === "large") {
    return (
      <article
        ref={ref}
        className={`${base} transform ${visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"} rounded-xl overflow-hidden relative col-span-2 row-span-2 shadow-lg`}
        style={{ minHeight: 320 }}
        tabIndex={0}
      >
        <img src={member.img} alt={member.name} className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent p-6 flex flex-col justify-end">
          <div>
            <div className="text-2xl font-bold text-white">{member.name}</div>
            <div className="text-sm text-[#B8976A] mt-1">{member.title}</div>
            <p className="text-sm text-white/90 mt-3 max-w-[75%]">{member.bio}</p>
          </div>
        </div>
      </article>
    );
  }

  if (member.type === "quote") {
    return (
      <article
        ref={ref}
        className={`${base} transform ${visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"} p-8 rounded-xl ${member.bg ?? "bg-white"} shadow`}
        style={{ minHeight: 200 }}
        tabIndex={0}
      >
        <div className="text-[56px] text-white/10 mb-4 leading-none">“</div>
        <p className="text-base text-[#2B1810] mb-4">{member.quote}</p>
        <div className="mt-4 text-sm font-semibold text-[#2B1810]">{member.name}</div>
        <div className="text-xs text-gray-600">{member.title}</div>
      </article>
    );
  }

  if (member.type === "stat") {
    return (
      <article
        ref={ref}
        className={`${base} transform ${visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"} p-6 rounded-xl ${member.bg ?? "bg-white"} shadow text-white`}
        style={{ minHeight: 160 }}
        tabIndex={0}
      >
        <div className="text-4xl font-bold" style={{ color: BRAND_GOLD }}>{member.stat}</div>
        <div className="text-sm mt-1 text-white/95">{member.statLabel}</div>
        <div className="mt-6 text-sm font-medium text-white">{member.name}</div>
        <div className="text-xs text-white/80">{member.title}</div>
      </article>
    );
  }

  return (
    <article
      ref={ref}
      className={`${base} transform ${visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"} p-6 rounded-xl ${member.bg ?? "bg-white"} shadow flex items-start gap-4`}
      style={{ minHeight: 160 }}
      tabIndex={0}
    >
      {member.img && (
        <img src={member.img} alt={`${member.name} portrait`} className="w-16 h-16 rounded-full object-cover flex-shrink-0" loading="lazy" />
      )}
      <div>
        <div className="text-lg font-semibold text-[#2B1810]">{member.name}</div>
        <div className="text-sm text-gray-700">{member.title} · {member.years}</div>
        <div className="text-sm italic text-gray-600 mt-2">{member.bio}</div>
      </div>
    </article>
  );
}

/* ---------- TeamGrid ---------- */
function TeamGrid() {
  return (
    <section id="team-grid" className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <header className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2B1810]">EXCELLENCE IN EVERY FLIGHT</h2>
          <p className="mt-4 text-[17px] text-[#5D5D5D] mx-auto max-w-[700px] leading-relaxed">
            Meet the professionals who ensure your journey exceeds expectations, every single time.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 auto-rows-fr">
          <TeamCard member={TEAM_MEMBERS[0]} />
          <TeamCard member={TEAM_MEMBERS[2]} />
          <TeamCard member={TEAM_MEMBERS[1]} />
          <TeamCard member={TEAM_MEMBERS[3]} />
          <TeamCard member={TEAM_MEMBERS[7]} />
          <TeamCard member={TEAM_MEMBERS[4]} />
          <TeamCard member={TEAM_MEMBERS[5]} />
          <TeamCard member={TEAM_MEMBERS[6]} />
        </div>
      </div>
    </section>
  );
}

/* ---------- Testimonials (horizontal scroll) ---------- */
function Testimonials() {
  const containerRef = useRef(null);

  useEffect(() => {
    // No forced animation on users with reduced motion - simple subtle auto scroll if desired
    const el = containerRef.current;
    if (!el) return;
    let rafId;
    let lastTs = performance.now();
    const speed = 0.02;
    const step = (ts) => {
      const dt = ts - lastTs;
      lastTs = ts;
      el.scrollLeft = (el.scrollLeft + dt * speed) % (el.scrollWidth || 1);
      rafId = requestAnimationFrame(step);
    };
    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, []);

  const cards = [
    {
      quote:
        "The NobleAce team made field mobilisation seamless and safe. Communication and delivery were outstanding.",
      name: "Chidi Okafor",
      title: "CEO, TechCorp Nigeria",
      avatar: "https://images.unsplash.com/photo-1545996124-1b2f6b6d6a9a?auto=format&fit=crop&w=200&q=80",
    },
    {
      quote:
        "Their environmental stewardship and technical expertise are industry-leading.",
      name: "Aisha Bello",
      title: "Founder, A&B Events",
      avatar: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&w=200&q=80",
    },
    {
      quote:
        "Operational excellence across multi-site projects — reliable and professional.",
      name: "Mark Stevens",
      title: "COO, GlobalEnergy",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
    },
  ];

  return (
    <section className="py-16 bg-[#F5F5F5]">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <h3 className="text-3xl text-center font-bold text-[#2B1810] mb-8">WHAT OUR CLIENTS SAY</h3>

        <div
          ref={containerRef}
          className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-4"
          aria-label="client testimonials"
        >
          {cards.map((c, i) => (
            <article key={i} className="min-w-[320px] max-w-[380px] bg-white rounded-xl p-6 shadow-md snap-center">
              <div className="text-[#B8976A] mb-4">★★★★★</div>
              <p className="text-[#3D3D3D] leading-relaxed mb-6" style={{ lineHeight: 1.9 }}>
                {c.quote}
              </p>
              <div className="flex items-center gap-3">
                <img src={c.avatar} alt={`${c.name} avatar`} className="w-12 h-12 rounded-full object-cover" loading="lazy" />
                <div>
                  <div className="font-semibold">{c.name}</div>
                  <div className="text-xs text-gray-500">{c.title}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- WhyDifferent ---------- */
function WhyDifferent() {
  const features = [
    {
      icon: "🎓",
      title: "Certified Professionals",
      body: "Every team member holds industry certifications and undergoes continuous training in safety and operational excellence.",
    },
    {
      icon: "⚡",
      title: "24/7 Availability",
      body: "Our teams operate around the clock to support time-critical projects across multiple time zones.",
    },
    {
      icon: "🤝",
      title: "Personal Consultants",
      body: "Dedicated consultants manage stakeholder relations and ensure project delivery with precision.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-5 md:px-8 text-center">
        <h3 className="text-3xl font-bold text-[#2B1810] mb-10">EXCELLENCE THROUGH EXPERTISE</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="p-8 rounded-lg border hover:shadow-lg transition transform hover:-translate-y-1">
              <div className="text-5xl mb-4" aria-hidden>{f.icon}</div>
              <h4 className="text-xl font-semibold mb-3">{f.title}</h4>
              <p className="text-gray-600 leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- JoinCTA ---------- */
function JoinCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, threshold: 0.25 });

  return (
    <section ref={ref} className="py-16" style={{ background: "#2B1810" }}>
      <div className="max-w-5xl mx-auto px-5 text-center text-white">
        <h3 className="text-3xl font-bold mb-4">PASSIONATE ABOUT EXCELLENCE?</h3>
        <p className="max-w-[700px] mx-auto text-white/90 mb-6">
          We're always looking for exceptional talent to join NobleAce Earthworks. Explore opportunities to help shape sustainable mining in Africa.
        </p>
        <a
          href="/careers"
          className="inline-block px-8 md:px-10 py-3 md:py-4 border-2 border-white rounded-full text-white font-semibold transition transform"
          style={{
            background: inView ? "rgba(255,255,255,0.04)" : "transparent",
            boxShadow: inView ? "0 10px 30px rgba(0,0,0,0.25)" : "none",
          }}
        >
          VIEW OPEN POSITIONS
        </a>
      </div>
    </section>
  );
}

/* ---------- Page Export ---------- */
export default function TeamPage() {
  return (
    <div className="antialiased text-[#2B1810] bg-white font-sans">
      <Navbar />
      <main>
        <Hero />
        <TeamGrid />
        <Testimonials />
        <WhyDifferent />
        <JoinCTA />
      </main>
      <Footer1 />
    </div>
  );
}