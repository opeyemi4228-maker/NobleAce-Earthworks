import React, { useState, useEffect, useRef } from "react";

const NAV_LINKS = [
  { label: { FR: "ACCUEIL", EN: "HOME" }, href: "/" },
  { label: { FR: "DÉCOUVRIR LA DESTINATION", EN: "DISCOVER" }, href: "/destination" },
  { label: { FR: "HÉBERGEMENTS", EN: "ACCOMMODATIONS" }, href: "/hebergements" },
  { label: { FR: "ACTIVITÉS", EN: "ACTIVITIES" }, href: "/activites" },
  { label: { FR: "GASTRONOMIE ET TERROIR", EN: "GASTRONOMY & LOCAL" }, href: "/gastronomie" },
  { label: { FR: "COMMERCES ET SERVICES", EN: "SHOPS & SERVICES" }, href: "/commerces" },
  { label: { FR: "AGENDA", EN: "AGENDA" }, href: "/agenda" },
];

const getLangFromUrl = () => {
  if (typeof window === "undefined") return "FR";
  const params = new URLSearchParams(window.location.search);
  return params.get("lang")?.toUpperCase() === "EN" ? "EN" : "FR";
};

const NatureNavbar = ({ initialLang }) => {
  const [lang, setLang] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("lang") || getLangFromUrl() || "FR";
    }
    return initialLang || "FR";
  });
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [favorites, setFavorites] = useState(2);
  const [activePath, setActivePath] = useState("/");
  const [langSwitching, setLangSwitching] = useState(false);

  const searchInputRef = useRef(null);
  const menuRef = useRef(null);

  // Scroll behavior for navbar mode
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active path tracking
  useEffect(() => {
    setActivePath(window.location.pathname);
  }, []);

  // Language switching with animation, localStorage, and URL param
  const handleLangSwitch = (lng) => {
    if (lng === lang) return;
    setLangSwitching(true);
    setTimeout(() => {
      setLang(lng);
      localStorage.setItem("lang", lng);
      const params = new URLSearchParams(window.location.search);
      params.set("lang", lng.toLowerCase());
      window.history.replaceState({}, "", `${window.location.pathname}?${params}`);
      setLangSwitching(false);
    }, 250);
  };

  // Focus search input when open
  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  // Focus trap for menu modal
  useEffect(() => {
    if (!menuOpen) return;
    const focusable = menuRef.current?.querySelectorAll("a,button");
    if (focusable && focusable.length) focusable[0].focus();
    const handleTab = (e) => {
      if (!menuOpen) return;
      const focusables = menuRef.current?.querySelectorAll("a,button");
      if (!focusables || !focusables.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.key === "Tab") {
        if (e.shiftKey) {
          if (document.activeElement === first) {
            last.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === last) {
            first.focus();
            e.preventDefault();
          }
        }
      }
    };
    window.addEventListener("keydown", handleTab);
    return () => window.removeEventListener("keydown", handleTab);
  }, [menuOpen]);

  // Close menu/search on ESC
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        setSearchOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Hide body scroll when menu open
  useEffect(() => {
    if (menuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
  }, [menuOpen]);

  // Hamburger menu animation
  const hamburgerLine =
    "block h-1 w-8 rounded-full bg-white transition-all duration-400";

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${scrolled || menuOpen ? "bg-white/90 shadow-lg backdrop-blur" : "bg-transparent"}
        ${searchOpen ? "bg-white/95" : ""}
      `}
      style={{ height: scrolled ? 60 : 80 }}
    >
      <nav className="flex items-center justify-between h-full px-4 md:px-12 relative">
        {/* Brand/Logo Left */}
        <a
          href="/"
          className="flex items-center gap-2 group"
          aria-label="Homepage"
        >
          <span
            className={`text-2xl font-bold transition-colors duration-300 ${
              scrolled || menuOpen ? "text-green-900" : "text-white"
            }`}
          >
            ©
          </span>
        </a>

        {/* Center: Logo/title always centered on scroll, even on mobile */}
        <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 pointer-events-none select-none ${scrolled ? "opacity-100" : "opacity-0"}`}>
          <span className="font-serif text-xl font-semibold text-green-900">
            Sumène Artense
          </span>
        </div>

        {/* Right: Controls */}
        <div className="flex items-center gap-6">
          {/* Language Switcher */}
          <div
            className={`flex border border-white/40 rounded-full overflow-hidden transition-all duration-300 shadow-sm`}
            style={{
              background: lang === "EN" ? "#166534" : "#fff",
              boxShadow: langSwitching ? "0 0 0 8px rgba(22,101,52,0.08)" : undefined,
            }}
          >
            {["FR", "EN"].map((lng) => (
              <button
                key={lng}
                className={`w-10 h-10 px-0 font-bold transition-all duration-300
                  ${lang === lng ? (lang === "EN" ? "bg-green-700 text-white" : "bg-white text-green-900") : (lang === "EN" ? "text-white/60" : "text-green-900/60")}
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-green-700
                  relative
                `}
                aria-pressed={lang === lng}
                onClick={() => handleLangSwitch(lng)}
                style={{
                  borderRadius: 24,
                  zIndex: lang === lng ? 2 : 1,
                  boxShadow: langSwitching && lang === lng ? "0 0 0 4px #16653433" : undefined,
                }}
              >
                <span className="relative z-10">{lng}</span>
                {langSwitching && lang === lng && (
                  <span className="absolute inset-0 animate-ping rounded-full bg-green-700/30" />
                )}
              </button>
            ))}
          </div>

          {/* Expandable Search */}
          <div
            className={`relative flex items-center transition-all duration-400
              ${searchOpen ? "w-[350px] bg-white shadow-lg border border-green-700 rounded-[25px]" : "w-10 bg-transparent"}
              h-10
              group
            `}
          >
            <button
              aria-label={lang === "FR" ? "Rechercher" : "Search"}
              className={`absolute left-2 top-1/2 -translate-y-1/2 z-20 p-0 m-0 bg-transparent border-none outline-none
                ${searchOpen ? "text-green-900" : "text-white"}
              `}
              tabIndex={0}
              onClick={() => {
                setSearchOpen(true);
                setTimeout(() => searchInputRef.current?.focus(), 100);
              }}
              type="button"
              onFocus={() => setSearchOpen(true)}
            >
              <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="7" />
                <line x1="16.5" y1="16.5" x2="21" y2="21" />
              </svg>
            </button>
            <input
              ref={searchInputRef}
              type="text"
              value={searchValue}
              onChange={e => setSearchValue(e.target.value)}
              placeholder={lang === "FR" ? "Rechercher..." : "Search destinations..."}
              className={`transition-all duration-400 bg-transparent outline-none border-none pl-10 pr-10 py-2 w-full text-[15px] font-sans
                ${searchOpen ? "opacity-100 text-green-900" : "opacity-0 w-0"}
              `}
              style={{
                transition: "width 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.3s",
              }}
              onBlur={() => !searchValue && setSearchOpen(false)}
            />
            {/* Close/clear icon */}
            {searchOpen && (
              <button
                className="absolute right-2 top-1/2 -translate-y-1/2 text-green-700 bg-white rounded-full p-1 hover:bg-green-100 transition"
                aria-label={lang === "FR" ? "Fermer la recherche" : "Close search"}
                onClick={() => {
                  setSearchValue("");
                  setSearchOpen(false);
                }}
                type="button"
              >
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 18 18">
                  <line x1="4" y1="4" x2="14" y2="14" />
                  <line x1="14" y1="4" x2="4" y2="14" />
                </svg>
              </button>
            )}
          </div>

          {/* Favorites/Wishlist */}
          <button
            aria-label={lang === "FR" ? "Favoris" : "Favorites"}
            className={`relative w-10 h-10 flex items-center justify-center rounded-full transition
              ${scrolled || menuOpen ? "text-green-900" : "text-white"}
              hover:bg-green-700/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-700
            `}
          >
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M12 21s-6.5-5.2-8.5-8.1C1.1 10.1 2.6 7 5.5 7c1.7 0 3.1 1.1 3.8 2.1C10.9 8.1 12.3 7 14 7c2.9 0 4.4 3.1 2 5.9C18.5 15.8 12 21 12 21z" />
            </svg>
            {favorites > 0 && (
              <span className="absolute -top-1 -right-1 bg-green-700 text-white text-xs rounded-full px-1.5 py-0.5 font-bold">
                {favorites}
              </span>
            )}
          </button>

          {/* Hamburger (Menu Open) */}
          <button
            className={`w-10 h-10 flex flex-col justify-center items-center relative z-30 group md:hidden
              ${menuOpen ? "bg-green-800" : "bg-green-700"} 
              rounded-full transition-colors duration-300`}
            aria-label={lang === "FR" ? "Ouvrir le menu" : "Open menu"}
            onClick={() => setMenuOpen(true)}
          >
            <span
              className={`block h-1 w-8 rounded-full bg-white transition-all duration-400
                ${menuOpen ? "rotate-45 translate-y-2" : ""}
              `}
            />
            <span
              className={`block h-1 w-8 rounded-full bg-white my-1 transition-all duration-400
                ${menuOpen ? "opacity-0" : ""}
              `}
            />
            <span
              className={`block h-1 w-8 rounded-full bg-white transition-all duration-400
                ${menuOpen ? "-rotate-45 -translate-y-2" : ""}
              `}
            />
          </button>
        </div>
      </nav>

      {/* Fullscreen Hamburger Menu Modal */}
      {menuOpen && (
        <div
          ref={menuRef}
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{
            background:
              "radial-gradient(circle at 60% 40%, #166534ee 0%, #0C1E2C 100%)",
            backdropFilter: "blur(8px)",
            animation: "menuExpand 0.8s cubic-bezier(0.4,0,0.2,1)",
          }}
          tabIndex={-1}
          aria-modal="true"
          role="dialog"
        >
          {/* Close Button */}
          <button
            className="absolute top-8 right-8 w-12 h-12 rounded-full border-2 border-white flex items-center justify-center bg-green-700 text-white hover:rotate-90 hover:scale-110 transition-all duration-300"
            aria-label={lang === "FR" ? "Fermer le menu" : "Close menu"}
            onClick={() => setMenuOpen(false)}
          >
            <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 32 32">
              <line x1="8" y1="8" x2="24" y2="24" />
              <line x1="24" y1="8" x2="8" y2="24" />
            </svg>
          </button>
          {/* Centered Logo/Title in Menu */}
          <div className="absolute left-1/2 top-16 -translate-x-1/2">
            <span className="font-serif text-2xl font-semibold text-white drop-shadow">
              Sumène Artense
            </span>
          </div>
          {/* Menu Items */}
          <ul className="flex flex-col items-center justify-center gap-8">
            {NAV_LINKS.map((link, i) => (
              <li
                key={link.href}
                style={{
                  animation: `fadeInUp 0.5s ${0.2 + i * 0.1}s both`,
                }}
              >
                <a
                  href={link.href + `?lang=${lang.toLowerCase()}`}
                  className={`text-3xl md:text-4xl font-serif uppercase tracking-widest text-white transition-all duration-300
                    hover:translate-x-2 hover:opacity-100 hover:underline
                    ${activePath === link.href ? "font-bold scale-105 border-l-4 border-white pl-4 bg-white/10" : "opacity-80"}
                  `}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    textShadow: "0 2px 8px #0008",
                  }}
                >
                  {link.label[lang]}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Language fade animation */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px);}
          to { opacity: 1; transform: translateY(0);}
        }
        @keyframes menuExpand {
          from { clip-path: circle(0% at 90% 10%);}
          to { clip-path: circle(150% at 60% 40%);}
        }
      `}</style>
      {/* Language fade out/in */}
      {langSwitching && (
        <div className="fixed inset-0 bg-white/80 z-[9999] pointer-events-none animate-fadeLang" />
      )}
      <style>{`
        .animate-fadeLang {
          animation: fadeLang 0.5s;
        }
        @keyframes fadeLang {
          0% { opacity: 0; }
          40% { opacity: 1; }
          100% { opacity: 0; }
        }
      `}</style>
    </header>
  );
};

export default NatureNavbar;