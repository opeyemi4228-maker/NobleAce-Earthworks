'use client';
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- Menu Data (updated and optimized) ---
const NAV_ITEMS = [
  { label: "Home", href: "/", submenu: true },
  { label: "About NobleAce Earthworks", href: "/about", submenu: true }, // Who we are → About NobleAce Earthworks
  { label: "Mining & Exploration Services", href: "/services", submenu: true }, // What we do → Mining & Exploration Services
  { label: "Environmental Stewardship", href: "/sustainability", submenu: true }, // Sustainability → Environmental Stewardship
  { label: "Mining Impact & CSR", href: "/impact", submenu: true }, // Community Impact Stories → Mining Impact & CSR
  { label: "Experts & Geologists", href: "/team", submenu: true }, // Our Team → Experts & Geologists
  { label: "Get in Touch", href: "/contact" }, // Contact Us → Get in Touch
];

const UTILITY_LINKS = [];

// --- Helper: Detect scroll and hero state ---
function useNavbarState() {
  const [mode, setMode] = useState("solid"); // solid | transparent | menu
  const [scrollY, setScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrollY(window.scrollY);
      if (menuOpen) return setMode("menu");
      if (window.scrollY < 200) setMode("transparent");
      else setMode("solid");
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [menuOpen]);

  return { mode, setMode, menuOpen, setMenuOpen, scrollY };
}

// --- Hamburger/X Button ---
function HamburgerButton({ open, onClick }) {
  return (
    <button
      aria-label={open ? "Close menu" : "Open menu"}
      className="fixed left-6 top-0 z-[1001] w-[50px] h-[60px] flex items-center justify-center bg-[#00284e] hover:bg-[#00417d] transition-colors duration-200"
      style={{ border: "none", borderRadius: 0 }}
      onClick={onClick}
    >
      <div className="relative w-7 h-5 flex flex-col justify-between">
        <span
          className={`block absolute left-0 w-7 h-0.5 bg-white transition-all duration-400 ease-in-out
            ${open ? "rotate-45 top-2.5" : "top-0"}`}
        />
        <span
          className={`block absolute left-0 w-7 h-0.5 bg-white transition-all duration-400 ease-in-out
            ${open ? "opacity-0 scale-0 top-2.5" : "top-2.5"}`}
        />
        <span
          className={`block absolute left-0 w-7 h-0.5 bg-white transition-all duration-400 ease-in-out
            ${open ? "-rotate-45 top-2.5" : "top-5"}`}
        />
      </div>
    </button>
  );
}

// --- Logo ---
function GlencoreLogo({ mode }) {
  return (
    <span
      className={`font-serif uppercase tracking-[0.08em] transition-colors duration-300`}
      style={{
        fontFamily: "Cormorant, Georgia, serif",
        fontWeight: 500,
        fontSize: 32,
        color: mode === "transparent" ? "#fff" : "#1A1A1A",
        letterSpacing: 2,
        textShadow:
          mode === "transparent"
            ? "0 2px 4px rgba(0,0,0,0.3)"
            : "none",
        transition: "color 0.3s",
      }}
    >
      NobleAce
    </span>
  );
}

// --- Search Button ---
function SearchButton({ mode, onClick }) {
  return (
    <button
      aria-label="Search"
      className={`fixed right-6 top-0 z-[1001] w-[50px] h-[60px] flex items-center justify-center
        ${mode === "transparent" ? "bg-black/60" : "bg-[#1A1A1A]"}
        hover:opacity-85 active:scale-95 transition-all`}
      style={{ border: "none", borderRadius: 0 }}
      onClick={onClick}
    >
      <svg width="20" height="20" fill="none" stroke="#fff" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="11" cy="11" r="7" />
        <line x1="16.5" y1="16.5" x2="21" y2="21" />
      </svg>
    </button>
  );
}

// --- Slide-in Menu Panel ---
function MenuPanel({ open, onClose, activePath }) {
  const panelRef = useRef();
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      panelRef.current?.focus();
    } else {
      document.body.style.overflow = "";
    }
    return () => (document.body.style.overflow = "");
  }, [open]);

  // Close on ESC or backdrop click
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") onClose();
    }
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-[999] bg-black/30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.aside
            className="menu-panel fixed top-0 left-0 h-full bg-white shadow-2xl z-[1000] flex flex-col"
            style={{
              width: "min(400px, 85vw)",
              maxWidth: 400,
              transition: "transform 0.4s cubic-bezier(0.4,0,0.2,1)",
              outline: "none",
            }}
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            tabIndex={-1}
            ref={panelRef}
          >
            <div className="flex items-center h-[60px] px-8 border-b border-[#E5E5E5]">
              <GlencoreLogo mode="solid" />
            </div>
            <nav className="flex-1 overflow-y-auto custom-scrollbar">
              <ul className="pt-4">
                {NAV_ITEMS.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className={`menu-item flex items-center justify-between text-[19px] font-normal px-10 py-3 transition-all
                        ${activePath === item.href
                          ? "border-l-4 border-[#002d2d] bg-[#E6F3F3] font-semibold text-[#00284e] pl-[36px]"
                          : "border-l-4 border-transparent text-[#1A1A1A] hover:bg-[#F2FBFB] hover:pl-[44px]"}`}
                      style={{
                        lineHeight: 2.5,
                        letterSpacing: 0.5,
                        position: "relative",
                        transition: "all 0.2s",
                      }}
                    >
                      {item.label}
                      {item.submenu && (
                        <span className="ml-2 transition-transform group-hover:translate-x-1">
                          &gt;
                        </span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="border-t border-[#E5E5E5] my-6" />
              <ul>
                {UTILITY_LINKS.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="block text-[14px] font-medium text-[#666] uppercase tracking-wider px-10 py-3 hover:bg-[#F2FBFB] transition"
                      style={{ letterSpacing: 1 }}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.aside>
          <style>{`
            .custom-scrollbar::-webkit-scrollbar { width: 8px; }
            .custom-scrollbar::-webkit-scrollbar-thumb { background: #C0C0C0; border-radius: 4px; }
            .custom-scrollbar::-webkit-scrollbar-track { background: #F0F0F0; }
            .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #A0A0A0; }
          `}</style>
        </>
      )}
    </AnimatePresence>
  );
}

// --- Main Navbar Component ---
export default function Navbar() {
  const { mode, setMode, menuOpen, setMenuOpen, scrollY } = useNavbarState();
  const [searchOpen, setSearchOpen] = useState(false);
  const [activePath, setActivePath] = useState("/"); // Default to "/" for SSR

  // Set activePath on client after mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      setActivePath(window.location.pathname);
    }
  }, []);

  // Breadcrumbs (optimized for SEO)
  const breadcrumbs =
    activePath === "/"
      ? ["Home"]
      : ["Home", ...activePath.split("/").filter(Boolean).map((s) => s.charAt(0).toUpperCase() + s.slice(1))];

  return (
    <>
      {/* Navbar */}
      <header
        className={`navbar fixed top-0 left-0 w-full flex items-center justify-center z-[1000]
          ${mode === "solid" ? "bg-white shadow-[0_2px_8px_rgba(0,0,0,0.08)] border-b border-[#E5E5E5]" : ""}
          ${mode === "transparent" ? "bg-white/5 backdrop-blur-[8px]" : ""}
          transition-all`}
        style={{
          height: mode === "transparent" ? 80 : 60,
          transition: "background-color 0.3s, height 0.3s, box-shadow 0.3s",
        }}
      >
        <HamburgerButton open={menuOpen} onClick={() => setMenuOpen((v) => !v)} />
        <div className="flex-1 flex items-center justify-center pointer-events-none select-none">
          <a href="/" className="pointer-events-auto" style={{ textDecoration: "none" }}>
            <GlencoreLogo mode={mode} />
          </a>
        </div>
        <SearchButton mode={mode} onClick={() => setSearchOpen(true)} />
      </header>

      {/* Slide-in Menu Panel */}
      <MenuPanel open={menuOpen} onClose={() => setMenuOpen(false)} activePath={activePath} />

      {/* Search Overlay */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            className="fixed inset-0 z-[1100] flex items-center justify-center bg-[#00284e]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSearchOpen(false)}
          >
            <motion.div
              className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-lg relative"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <input
                autoFocus
                className="w-full border-b border-[#00284e] text-lg px-2 py-3 outline-none"
                placeholder="Search NobleAce Earthworks..."
                style={{ fontSize: 20 }}
              />
              <button
                className="absolute top-4 right-4 text-[#00284e] text-2xl"
                aria-label="Close search"
                onClick={() => setSearchOpen(false)}
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Breadcrumbs */}
      <AnimatePresence>
        {scrollY > 120 && (
          <motion.nav
            className="fixed left-0 top-[60px] w-full z-[900] flex items-center px-8 py-1 bg-white/90 border-b border-[#E5E5E5] text-xs text-[#00284e] font-medium"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            style={{ letterSpacing: 0.5, transition: "all 0.2s" }}
            aria-label="Breadcrumb"
          >
            {breadcrumbs.map((crumb, i) => (
              <span key={crumb}>
                {i > 0 && <span className="mx-1">&gt;</span>}
                <a
                  href={i === 0 ? "/" : "/" + breadcrumbs.slice(1, i + 1).join("/").toLowerCase()}
                  className="hover:underline"
                  style={{ color: "#00284e" }}
                >
                  {crumb}
                </a>
              </span>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
