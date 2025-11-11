import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2,
  Calendar,
  Award,
  HardHat,
  DraftingCompass,
  Drill,
  Building,
  Hourglass,
  Globe,
  Leaf,
  BadgeCheck,
  Lightbulb,
  ChevronDown,
  Share2,
} from "lucide-react";

// --- Categories with active/inactive styles ---
const CATEGORIES = [
  { key: "general", label: "General", active: "bg-black text-white", inactive: "bg-white text-black border border-black" },
  { key: "services", label: "Services", active: "bg-black text-white", inactive: "bg-white text-black border border-black" },
  { key: "projects", label: "Projects", active: "bg-black text-white", inactive: "bg-white text-black border border-black" },
  { key: "licenses", label: "Licenses", active: "bg-[#272121] text-white", inactive: "bg-white text-[#272121] border border-[#272121]" },
];

// --- FAQ Data ---
const FAQS = {
  general: [
    {
      question: "What services does NobleAce Mining provide?",
      icon: <Building2 size={24} />,
      answer:
        "NobleAce Mining offers professional mining and geoscience solutions. Our core services include mineral exploration, mining consultancy, geological surveys, drilling supervision, and environmental compliance. We specialize in helping businesses and investors navigate the Nigerian mining sector effectively.",
      badge: "Most asked question",
    },
    {
      question: "How long has NobleAce Mining been in operation?",
      icon: <Calendar size={24} />,
      answer:
        "Founded to redefine mining consultancy in Nigeria, NobleAce Mining has years of combined technical experience in mineral exploration, project management, and mining license acquisition. We are known for our reliability, compliance with regulations, and commitment to sustainable mining practices.",
    },
    {
      question: "What sets NobleAce Mining apart from other mining companies?",
      icon: <Award size={24} />,
      answer:
        "We combine technical expertise with cutting-edge exploration technologies, offering end-to-end consultancy for mineral exploration and license sourcing. Our focus on precision, transparency, and sustainable practices ensures long-term success for our clients and projects.",
    },
  ],
  services: [
    {
      question: "What mining consultancy services do you offer?",
      icon: <HardHat size={24} />,
      answer:
        "We provide consultancy services across the entire mining lifecycle: mineral exploration, resource evaluation, drilling supervision, environmental compliance, and operational optimization. We assist investors and companies in maximizing efficiency while meeting regulatory requirements.",
    },
    {
      question: "Do you assist with mining license applications?",
      icon: <DraftingCompass size={24} />,
      answer:
        "Yes. Our experts guide clients through the complex process of acquiring mining licenses and permits in Nigeria. We prepare documentation, liaise with regulatory authorities, and ensure compliance with all legal and environmental standards.",
    },
    {
      question: "Can you manage exploration drilling projects?",
      icon: <Drill size={24} />,
      answer:
        "Absolutely. Our team supervises exploration and geotechnical drilling to ensure accurate data collection. We handle core sampling, borehole logging, and site analysis to support mining feasibility studies and resource evaluation.",
    },
  ],
  projects: [
    {
      question: "What types of projects has NobleAce Mining executed?",
      icon: <Building size={24} />,
      answer:
        "Our project portfolio includes mineral exploration campaigns, geophysical surveys, environmental assessments, drilling projects, and resource evaluation assignments. We have successfully supported private and government clients across Nigeria and West Africa.",
    },
    {
      question: "How long does a typical mining exploration project take?",
      icon: <Hourglass size={24} />,
      answer:
        "Project duration varies based on scope. Preliminary exploration may take 2–4 weeks, while full-scale surveys and feasibility studies can last several months. We provide clear timelines and regular updates to ensure transparency and efficiency.",
    },
    {
      question: "Do you operate outside Nigeria?",
      icon: <Globe size={24} />,
      answer:
        "Yes, we execute mining exploration and consultancy projects across West Africa. Our team is equipped to handle diverse terrains, regulatory frameworks, and cross-border operations efficiently.",
    },
  ],
  licenses: [
    {
      question: "How can NobleAce Mining help with mining licenses?",
      icon: <Leaf size={24} />,
      answer:
        "We specialize in sourcing and acquiring mining licenses for clients. Our team guides applicants through regulatory requirements, environmental assessments, and government submissions to secure approvals for exploration and mining operations.",
    },
    {
      question: "Are your license services compliant with Nigerian law?",
      icon: <BadgeCheck size={24} />,
      answer:
        "Absolutely. We ensure that all license applications comply with Nigerian mining and environmental regulations. Our team stays updated on policy changes and liaises with authorities to guarantee legal compliance.",
    },
    {
      question: "Do you provide ongoing support after license acquisition?",
      icon: <Lightbulb size={24} />,
      answer:
        "Yes. We provide ongoing consultancy, monitoring, and reporting services to ensure continued compliance and smooth operations. This includes regulatory updates, site supervision, and operational advisory.",
    },
  ],
};

// --- Icon Background ---
const ICON_BG = { general: "bg-[#fff]", services: "bg-[#fff]", projects: "bg-[#fff]", licenses: "bg-[#fff]" };

const FAQSection = () => {
  const [activeCategory, setActiveCategory] = useState("general");
  const [openIdx, setOpenIdx] = useState(null);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [filteredFaqs, setFilteredFaqs] = useState(FAQS[activeCategory] || []);
  const containerRef = useRef();

  // --- Debounced filtering ---
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      const filtered = search
        ? (FAQS[activeCategory] || []).filter(faq =>
            faq.question.toLowerCase().includes(search.toLowerCase())
          )
        : FAQS[activeCategory] || [];
      setFilteredFaqs(filtered);
      setOpenIdx(null);
      setLoading(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [search, activeCategory]);

  // --- Scroll to open FAQ ---
  useEffect(() => {
    if (openIdx !== null && containerRef.current) {
      const el = containerRef.current.querySelector(`#faq-${openIdx}`);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [openIdx]);

  return (
    <section className="w-full bg-white py-24 px-4 md:px-12 lg:px-24 flex flex-col items-center">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-8 text-center">
        <h1 className="text-4xl md:text-4xl font-semibold mb-4 text-gray-900 uppercase tracking-tight">
          Frequently Asked Questions
        </h1>
        <p className="text-[17px] font-normal text-gray-600 mb-[0.1] max-w-2xl mx-auto">
          These FAQs cover NobleAce Mining’s services in mineral exploration, consultancy, and license acquisition. Can't find what you’re looking for?{" "}
          <a href="/contact" className="text-[#272121] font-semibold hover:text-[#5C4E4E] transition-colors">Contact our team!</a>
        </p>
      </motion.div>

      {/* Filter Tabs */}
      <motion.div role="tablist" className="flex flex-wrap justify-center gap-4 mb-10" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
        {CATEGORIES.map((cat) => (
          <button
            key={cat.key}
            role="tab"
            aria-pressed={activeCategory === cat.key}
            className={`px-6 py-1 rounded-full font-normal text-base focus:outline-none transition-all duration-200 shadow-sm ${activeCategory === cat.key ? cat.active : cat.inactive + " hover:bg-gray-100 hover:scale-105"}`}
            onClick={() => setActiveCategory(cat.key)}
          >
            {cat.label}
          </button>
        ))}
      </motion.div>

      {/* Progress Indicator */}
      <div className="w-full max-w-lg mx-auto mb-6">
        <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
          <motion.div initial={{ width: 0 }} animate={{ width: loading ? "100%" : "0%" }} transition={{ duration: 0.4 }} className="h-1 bg-[#5C4E4E]" />
        </div>
        <div className="text-xs text-gray-500 mt-2 text-right">{filteredFaqs.length} of {(FAQS[activeCategory] || []).length} questions</div>
      </div>

      {/* FAQ List */}
      <div ref={containerRef} className="w-full max-w-2xl mx-auto">
        <AnimatePresence mode="wait">
          {loading ? (
            <motion.div key="skeleton" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-6">
              {[...Array(3)].map((_, i) => <div key={i} className="h-20 bg-gray-100 rounded-lg animate-pulse" />)}
            </motion.div>
          ) : (
            filteredFaqs.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <motion.article
                  key={faq.question}
                  id={`faq-${idx}`}
                  role="region"
                  aria-labelledby={`faq-button-${idx}`}
                  initial={{ opacity: 0, y: 40, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: isOpen ? 1.01 : 1 }}
                  exit={{ opacity: 0, y: -40, scale: 0.98 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className={`mb-6 bg-white rounded-xl border border-black shadow-sm transition-all duration-300 ${isOpen ? "shadow-lg ring-2 ring-[#252020]" : "hover:bg-gray-50 hover:scale-[1.01]"}`}
                  tabIndex={0}
                >
                  <button
                    id={`faq-button-${idx}`}
                    className="w-full flex items-center text-left px-6 py-4 focus:outline-none group relative"
                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-content-${idx}`}
                  >
                    <span className={`flex items-center justify-center w-10 h-10 rounded-full mr-4 transition-transform duration-300 ${isOpen ? ICON_BG[activeCategory] : "bg-gray-100"} ${isOpen ? "scale-110" : "scale-100"}`}>
                      {faq.icon}
                    </span>
                    <span className="flex-1 text-lg font-light text-gray-900">{faq.question}</span>
                    {faq.badge && <span className="ml-2 px-2 py-1 bg-[#5C4E4E] text-white text-xs rounded-full font-light">{faq.badge}</span>}
                    <motion.span initial={false} animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }} className="ml-4">
                      <ChevronDown size={22} />
                    </motion.span>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        id={`faq-content-${idx}`}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 pb-6 text-[#342c2c] text-base leading-relaxed"
                      >
                        {faq.answer}
                        {/* Feedback & Share */}
                        <div className="mt-4 flex items-center gap-4">
                          <span className="text-xs text-gray-500">Was this helpful?</span>
                          <button className="text-xs text-gray-500 hover:text-[#272121] underline">Yes</button>
                          <button className="text-xs text-gray-500 hover:text-[#272121] underline">No</button>
                          <button className="ml-auto text-xs text-gray-400 hover:text-[#1c1717] flex items-center gap-1"><Share2 size={16} /> Share</button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.article>
              );
            })
          )}
        </AnimatePresence>
      </div>

      {/* CTA */}
      <div className="mt-12 text-center">
        <a href="/contact" className="inline-block px-8 py-3 border-2 border-[#382e2e] text-[#1c1c1c] rounded-full font-normal text-lg transition-all duration-200 hover:bg-[#5C4E4E] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#272121]">
          Still have questions? Contact us
        </a>
      </div>
    </section>
  );
};

export default FAQSection;
