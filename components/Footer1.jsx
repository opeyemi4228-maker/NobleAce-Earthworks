import React, { useEffect, useState } from "react";

// --- Social Links Data ---
const socialLinks = [
  {
    platform: "X (Twitter)",
    url: "https://twitter.com/glencore",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="#000">
        <path d="M19.753 4.659a1 1 0 0 0-1.506-1.317l-5.11 5.84L8.8 3.4A1 1 0 0 0 8 3H4a1 1 0 0 0-.8 1.6l6.437 8.582-5.39 6.16a1 1 0 0 0 1.506 1.317l5.11-5.841L15.2 20.6a1 1 0 0 0 .8.4h4a1 1 0 0 0 .8-1.6l-6.437-8.582 5.39-6.16ZM16.5 19L6 5h1.5L18 19h-1.5Z"/>
      </svg>
    ),
  },
  {
    platform: "LinkedIn",
    url: "https://linkedin.com/company/glencore",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
        <path fill="#000" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z"/>
      </svg>
    ),
  },
  {
    platform: "Facebook",
    url: "https://facebook.com/glencore",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
        <path fill="#000" d="M12 2.04c-5.5 0-10 4.49-10 10.02c0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89c1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02Z"/>
      </svg>
    ),
  },
  {
    platform: "Instagram",
    url: "https://instagram.com/glencore",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 1024 1024">
        <path fill="#000" d="M511 4c138 0 155 1 209 3c53 2 90 11 123 24c34 13 62 30 90 58s45 56 58 90c13 33 22 70 24 123c2 54 3 71 3 209s-1 155-3 209c-2 53-11 90-24 123c-13 34-30 62-58 90s-56 45-90 58c-33 13-70 22-123 24c-54 2-71 3-209 3s-155-1-209-3c-53-2-90-11-123-24c-34-13-62-30-90-58s-45-56-58-90C18 810 9 773 7 720c-2-54-3-71-3-209s1-155 3-209c2-53 11-90 24-123c13-34 30-62 58-90s56-45 90-58c33-13 70-22 123-24c54-2 71-3 209-3zm0 644c112 0 203-91 203-203s-91-203-203-203s-203 91-203 203s91 203 203 203zm332-10c0 34-28 60-62 60s-60-26-60-60s26-62 60-62s62 28 62 62z"/>
      </svg>
    ),
  },
  {
    platform: "YouTube",
    url: "https://youtube.com/glencore",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
        <path fill="#000" d="M22.8 8.6c-.2-1.5-.4-2.6-1-3C21.2 5.1 16 5 12 5s-9.2.1-9.8.6c-.6.4-.8 1.5-1 3S1 11 1 12s0 1.9.2 3.4s.4 2.6 1 3c.6.5 5.8.6 9.8.6c4 0 9.2-.1 9.8-.6c.6-.4.8-1.5 1-3S23 13 23 12s0-1.9-.2-3.4zm-12.8 7V8.4l6 3.6l-6 3.6z"/>
      </svg>
    ),
  },
];

// --- Footer Links Data ---
const footerLinks = [
  [
    { label: "Terms of use", href: "/terms" },
    { label: "Privacy policy", href: "/privacy" },
    { label: "Cookies policy", href: "/cookies" },
  ],
  [
    { label: "Accessibility", href: "/accessibility" },
    { label: "Speaking openly/Raising concerns", href: "/speaking-openly" },
  ],
  [
    { label: "Modern Slavery Statement", href: "/modern-slavery" },
  ],
];

// --- Stock Data (mocked) ---
const initialStocks = [
  { symbol: "LSE:GLEN", exchange: "LSE GBp", price: 357.15, change: 1.40, timestamp: new Date("2025-10-09T17:06:00Z") },
  { symbol: "JSE:GLN", exchange: "JSE ZAR", price: 81.85, change: -0.73, timestamp: new Date("2025-10-09T15:00:00Z") },
];

// --- Helpers ---
const formatTimestamp = (date) => {
  if (!(date instanceof Date)) date = new Date(date);
  const pad = (n) => String(n).padStart(2, "0");
  return `${pad(date.getDate())}/${pad(date.getMonth() + 1)}/${date.getFullYear()} • ${pad(date.getHours())}:${pad(date.getMinutes())} GMT`;
};

const isMarketOpen = (symbol) => {
  const now = new Date();
  const utcHour = now.getUTCHours();
  const day = now.getUTCDay();
  if (day === 0 || day === 6) return false;
  if (symbol.startsWith("LSE")) return utcHour >= 8 && utcHour < 16.5;
  if (symbol.startsWith("JSE")) return utcHour >= 7 && utcHour < 15;
  return false;
};

// --- Stock Card ---
const StockCard = ({ stock }) => {
  const positive = stock.change > 0;
  const negative = stock.change < 0;
  const color = positive ? "#00A86B" : negative ? "#D32F2F" : "#666";
  const arrow = positive ? "▲" : negative ? "▼" : "—";
  const marketOpen = isMarketOpen(stock.symbol);

  return (
    <div className="flex flex-col sm:flex-row items-center gap-2 flex-1 min-w-[220px] max-w-[340px] px-2">
      <span className="font-bold text-[18px] uppercase text-[#1A1A1A] mr-2">{stock.exchange}</span>
      <span className="text-[14px] text-[#666] mr-2">{formatTimestamp(stock.timestamp)}</span>
      <span
        className="inline-block w-2 h-2 rounded-full mr-2"
        style={{ background: marketOpen ? "#00A86B" : "#bbb" }}
        aria-label={marketOpen ? "Market open" : "Market closed"}
      />
      <span className="font-bold text-[28px] text-[#1A1A1A] font-mono mx-2" style={{ minWidth: 70, textAlign: "right" }}>
        {stock.price.toFixed(2)}
      </span>
      <span
        className="ml-2 px-3 py-1 rounded-full text-[16px] font-medium flex items-center justify-center"
        style={{ background: "#f5f5f5", color, minWidth: 70, fontVariantNumeric: "tabular-nums" }}
      >
        {positive && "+"}{stock.change.toFixed(2)}
        <span className="ml-1" style={{ fontSize: 18 }}>{arrow}</span>
      </span>
    </div>
  );
};

// --- Footer Component ---
export default function Footer1() {
  const [stocks, setStocks] = useState(initialStocks);
  const [year, setYear] = useState(new Date().getFullYear());

  // Mock real-time stock updates
  useEffect(() => {
    const interval = setInterval(() => {
      setStocks(prev =>
        prev.map(s => ({
          ...s,
          price: +(s.price + (Math.random() - 0.5) * 0.5).toFixed(2),
          change: +(Math.random() * 2 - 1).toFixed(2),
          timestamp: new Date(),
        }))
      );
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  // Update year dynamically
  useEffect(() => {
    const timer = setInterval(() => setYear(new Date().getFullYear()), 3600000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="w-full bg-white pt-16 pb-8 px-4 border-t border-gray-200">
      {/* Logo */}
      <div className="flex flex-col items-center mb-10">
        <a
          href="/"
          className="text-4xl font-serif font-semibold uppercase tracking-wide text-[#1A1A1A] mb-4 transition-opacity hover:opacity-70"
          aria-label="Glencore homepage"
        >
          NOBLEACE
        </a>
      </div>

      {/* Stock Cards */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-2 max-w-4xl mx-auto">
        <div className="flex-1 border-b md:border-b-0 md:border-r border-black/30 pb-2 md:pb-0 md:pr-8">
          <StockCard stock={stocks[0]} />
        </div>
        <div className="flex-1 pt-2 md:pt-0 md:pl-8">
          <StockCard stock={stocks[1]} />
        </div>
      </div>
      <div className="text-right text-[14px] text-[#666] italic my-2 max-w-4xl mx-auto pr-2">
        Share prices are delayed by 10 minutes
      </div>

      {/* Social Links */}
      <nav className="flex items-center justify-center gap-6 my-10" aria-label="Social media">
        {socialLinks.map(s => (
          <a
            key={s.platform}
            href={s.url}
            className="w-10 h-10 flex items-center justify-center rounded-full text-[#1A1A1A] transition-transform hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#006B6B]"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Follow us on ${s.platform}`}
          >
            {s.svg}
          </a>
        ))}
      </nav>

      {/* Footer Links */}
      <div className="flex flex-col items-center gap-2 mb-8 text-[14px] text-[#666]">
        {footerLinks.map((group, idx) => (
          <div key={idx} className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            {group.map(l => (
              <a key={l.label} href={l.href} className="hover:text-[#006B6B] hover:underline transition">{l.label}</a>
            ))}
          </div>
        ))}
      </div>

      {/* Copyright */}
      <div className="text-center text-[12px] text-[#999] mt-10 mb-2">
        © Glencore {year}
      </div>
    </footer>
  );
}
