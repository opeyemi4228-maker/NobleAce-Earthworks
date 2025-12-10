import React, { useEffect, useState } from "react";

// --- Social Links Data ---
const socialLinks = [
  {
    platform: "X (Twitter)",
    url: "https://twitter.com/NobleAceEarthworks",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
<path fill="#212121" fill-rule="evenodd" d="M38,42H10c-2.209,0-4-1.791-4-4V10c0-2.209,1.791-4,4-4h28	c2.209,0,4,1.791,4,4v28C42,40.209,40.209,42,38,42z" clip-rule="evenodd"></path><path fill="#fff" d="M34.257,34h-6.437L13.829,14h6.437L34.257,34z M28.587,32.304h2.563L19.499,15.696h-2.563 L28.587,32.304z"></path><polygon fill="#fff" points="15.866,34 23.069,25.656 22.127,24.407 13.823,34"></polygon><polygon fill="#fff" points="24.45,21.721 25.355,23.01 33.136,14 31.136,14"></polygon>
</svg>
    ),
  },
  {
    platform: "LinkedIn",
    url: "https://linkedin.com/company/NobleAceEarthworks",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
    <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
</svg>
    ),
  },
  {
    platform: "Facebook",
    url: "https://facebook.com/NobleAceEarthworks",
    svg: (
      <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/facebook-new.png" alt="facebook-new"/>
    ),
  },
  {
    platform: "Instagram",
    url: "https://instagram.com/NobleAceEarthworks",
    svg: (
      <img width="100" height="100" src="https://img.icons8.com/sf-regular-filled/100/instagram-new.png" alt="instagram-new"/>
    ),
  },
  {
    platform: "YouTube",
    url: "https://youtube.com/NobleAceEarthworks",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
<path d="M 44.898438 14.5 C 44.5 12.300781 42.601563 10.699219 40.398438 10.199219 C 37.101563 9.5 31 9 24.398438 9 C 17.800781 9 11.601563 9.5 8.300781 10.199219 C 6.101563 10.699219 4.199219 12.199219 3.800781 14.5 C 3.398438 17 3 20.5 3 25 C 3 29.5 3.398438 33 3.898438 35.5 C 4.300781 37.699219 6.199219 39.300781 8.398438 39.800781 C 11.898438 40.5 17.898438 41 24.5 41 C 31.101563 41 37.101563 40.5 40.601563 39.800781 C 42.800781 39.300781 44.699219 37.800781 45.101563 35.5 C 45.5 33 46 29.398438 46.101563 25 C 45.898438 20.5 45.398438 17 44.898438 14.5 Z M 19 32 L 19 18 L 31.199219 25 Z"></path>
</svg>
    ),
  },
];

// --- Footer Links Data ---
const footerLinks = [
  [
    { label: "Sustainability", href: "/sustainability" },
    { label: "Careers", href: "/careers" },
    {label: "Contact us", href: "/contact" },
  ],
  [
    { label: "Terms of use", href: "/terms" },
    { label: "Privacy policy", href: "/privacy" },
    { label: "Cookies policy", href: "/cookies" },
  ],
];

// --- Stock Data (mocked for demo) ---
const initialStocks = [
  { symbol: "NEX:NAE", exchange: "NEX", price: 120.50, change: 0.72, timestamp: new Date() },
  { symbol: "LSE:NAE", exchange: "LSE", price: 310.80, change: -1.25, timestamp: new Date() },
];

// --- Stock Card ---
const StockCard = ({ stock }) => {
  const positive = stock.change > 0;
  const negative = stock.change < 0;
  const color = positive ? "#00A86B" : negative ? "#D32F2F" : "#666";
  const arrow = positive ? "▲" : negative ? "▼" : "—";

  return (
    <div className="flex flex-col sm:flex-row items-center gap-2 flex-1 min-w-[220px] max-w-[340px] px-2">
      <span className="font-bold text-[18px] uppercase text-[#1A1A1A] mr-2">{stock.exchange}</span>
      <span className="text-[14px] text-[#666] mr-2">{stock.timestamp.toLocaleTimeString()}</span>
      <span className="font-bold text-[28px] text-[#1A1A1A] font-mono mx-2" style={{ minWidth: 70, textAlign: "right" }}>
        {stock.price.toFixed(2)}
      </span>
      <span
        className="ml-2 px-3 py-1 rounded-full text-[16px] font-medium flex items-center justify-center"
        style={{ background: "#f5f5f5", color, minWidth: 70, fontVariantNumeric: "tabular-nums" }}
      >
        {positive && "+"}{stock.change.toFixed(2)} <span className="ml-1" style={{ fontSize: 18 }}>{arrow}</span>
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
          price: +(s.price + (Math.random() - 0.5) * 2).toFixed(2),
          change: +(Math.random() * 2 - 1).toFixed(2),
          timestamp: new Date(),
        }))
      );
    }, 30000); // update every 30s
    return () => clearInterval(interval);
  }, []);

  // Update year dynamically
  useEffect(() => {
    const timer = setInterval(() => setYear(new Date().getFullYear()), 3600000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="w-full bg-[#f9f9f9] pt-16 pb-8 px-6 border-t border-gray-200">
      {/* Logo & Tagline */}
      <div className="flex flex-col items-center mb-10">
        <a
          href="/"
          className="text-4xl font-serif font-semibold uppercase tracking-wider text-[#1A1A1A] mb-2 hover:opacity-80 transition-opacity"
          aria-label="NobleAce Earthworks homepage"
        >
          NOBLEACE
        </a>
        <p className="text-center text-[#555] max-w-lg">
          Excellence in Mining & Exploration | Environmental Stewardship | Community Impact
        </p>
      </div>

      {/* Stock Cards */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8 max-w-4xl mx-auto">
        {stocks.map((s, idx) => (
          <StockCard key={idx} stock={s} />
        ))}
      </div>

      {/* Social Links */}
      <nav className="flex items-center justify-center gap-6 my-10" aria-label="Social media">
        {socialLinks.map((s) => (
          <a
            key={s.platform}
            href={s.url}
            className="w-10 h-10 flex items-center justify-center rounded-full text-[#1A1A1A] hover:bg-[#00284e]/10 transition-transform hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#006B6B]"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Follow us on ${s.platform}`}
          >
            {s.svg}
          </a>
        ))}
      </nav>

      {/* Footer Links */}
      <div className="flex flex-col items-center gap-3 mb-8 text-[14px] text-[#666]">
        {footerLinks.map((group, idx) => (
          <div key={idx} className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            {group.map((l) => (
              <a key={l.label} href={l.href} className="hover:text-[#006B6B] hover:underline transition">{l.label}</a>
            ))}
          </div>
        ))}
      </div>

      {/* Copyright */}
      <div className="text-center text-[12px] text-[#999] mt-10">
        © NobleAce Earthworks Ltd {year}. All rights reserved.
      </div>
    </footer>
  );
}
