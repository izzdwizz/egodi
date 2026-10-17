"use client";

import { useEffect, useState, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { FaTwitter, FaLinkedinIn, FaFacebook, FaWikipediaW } from "react-icons/fa";

const roles = [
  "a Professional Scholar.",
  "a Historian.",
  "an Author.",
  "a Policy Advisor.",
  "an Academic Leader.",
];

const socialLinks = [
  { icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
  { icon: FaLinkedinIn, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: FaFacebook, href: "https://facebook.com", label: "Facebook" },
  { icon: FaWikipediaW, href: "https://en.wikipedia.org/wiki/Egodi_Uchendu", label: "Wikipedia" },
];

export default function Hero() {
  const [displayed, setDisplayed] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [visible, setVisible] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const current = roles[roleIndex];
    const speed = isDeleting ? 45 : 85;
    timerRef.current = setTimeout(() => {
      if (!isDeleting) {
        setDisplayed(current.slice(0, displayed.length + 1));
        if (displayed.length + 1 === current.length) {
          timerRef.current = setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayed(current.slice(0, displayed.length - 1));
        if (displayed.length === 0) {
          setIsDeleting(false);
          setRoleIndex((i) => (i + 1) % roles.length);
        }
      }
    }, speed);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [displayed, isDeleting, roleIndex]);

  return (
    <section id="home" className="min-h-screen flex flex-col lg:flex-row pt-[3px]">
      {/* ── LEFT PANEL ── */}
      <div className="flex-1 bg-[#1a1a1a] flex flex-col justify-center px-8 md:px-14 lg:px-16 pt-24 pb-16 lg:pt-0 lg:pb-0 relative overflow-hidden">
        {/* Decorative squiggle */}
        <svg className="absolute top-32 right-8 opacity-20 hidden lg:block" width="60" height="80" viewBox="0 0 60 80" fill="none">
          <path d="M30 5 Q50 20 30 35 Q10 50 30 65 Q50 75 40 80" stroke="#d4a020" strokeWidth="2" strokeLinecap="round" fill="none"/>
        </svg>

        <div
          className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <p className="text-[#888] text-sm font-medium mb-2 tracking-wide">Hello I&apos;m</p>
          <h1
            className="text-5xl md:text-6xl xl:text-7xl font-bold text-white leading-none tracking-tight uppercase"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Egodi<br />Uchendu
          </h1>
        </div>

        <div
          className={`mt-4 transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <p className="text-[#aaa] text-lg font-light min-h-[1.8rem]">
            {displayed}
            <span className="cursor-blink text-[#d4a020]">|</span>
          </p>
        </div>

        {/* Publication count + avatars */}
        <div
          className={`mt-8 flex items-center gap-4 transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <div className="flex -space-x-2.5">
            {["bg-amber-700", "bg-slate-600", "bg-amber-500", "bg-stone-500"].map((c, i) => (
              <div
                key={i}
                className={`w-9 h-9 rounded-full ${c} border-2 border-[#1a1a1a] flex items-center justify-center text-white text-xs font-bold`}
              >
                {["EU", "UN", "NG", "AF"][i]}
              </div>
            ))}
            <div className="w-9 h-9 rounded-full bg-[#d4a020] border-2 border-[#1a1a1a] flex items-center justify-center text-[#1a1a1a] text-xs font-bold">
              8+
            </div>
          </div>
          <p className="text-[#888] text-sm">More than <span className="text-white font-semibold">8 books</span> published</p>
        </div>

        {/* Let's talk CTA */}
        <div
          className={`mt-10 flex items-center gap-6 transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <div className="relative">
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="w-28 h-28 rounded-full bg-[#d4a020] flex items-center justify-center text-[#1a1a1a] font-bold text-sm hover:bg-[#e8b830] transition-all duration-300 hover:scale-105 relative group"
            >
              <span className="text-center leading-tight">let&apos;s<br />talk</span>
              <ArrowUpRight
                size={18}
                className="absolute -top-1 -right-1 bg-[#1a1a1a] text-[#d4a020] rounded-full p-1 w-7 h-7 group-hover:rotate-12 transition-transform duration-300"
              />
            </button>
          </div>
          {/* Diagonal arrow line */}
          <svg width="60" height="50" viewBox="0 0 60 50" className="text-[#d4a020]" fill="none">
            <line x1="0" y1="50" x2="55" y2="5" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 3"/>
            <polyline points="48,2 56,5 53,13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        {/* Social links */}
        <div
          className={`mt-10 transition-all duration-700 delay-400 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <p className="text-[#555] text-xs uppercase tracking-widest mb-3 font-medium">Find me on</p>
          <div className="flex gap-3">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-full border border-[#333] flex items-center justify-center text-[#666] hover:text-[#d4a020] hover:border-[#d4a020] transition-all duration-200 hover:scale-110"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── GOLD VERTICAL DIVIDER ── */}
      <div className="hidden lg:block w-px bg-[#d4a020] self-stretch" />

      {/* ── RIGHT PANEL ── */}
      <div
        className={`lg:w-[45%] bg-[#111] relative overflow-hidden min-h-[55vw] lg:min-h-0 transition-all duration-700 delay-200 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Stylised portrait placeholder */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-full h-full">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#111] via-[#1a1510] to-[#111]" />
            {/* Large initials */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center select-none">
                <span
                  className="text-[22vw] lg:text-[18vw] font-bold text-white/5 leading-none block"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  EU
                </span>
              </div>
            </div>
            {/* Decorative ring */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 lg:w-72 lg:h-72 rounded-full border border-[#d4a020]/20 spin-slow" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 lg:w-52 lg:h-52 rounded-full border border-[#d4a020]/10" />
            {/* Central monogram */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 lg:w-40 lg:h-40 rounded-full bg-[#222] border border-[#d4a020]/30 flex flex-col items-center justify-center gap-1">
              <span className="text-3xl lg:text-4xl font-bold text-[#d4a020]" style={{ fontFamily: "var(--font-playfair)" }}>EU</span>
              <span className="text-[10px] text-[#888] uppercase tracking-widest">Professor</span>
            </div>
          </div>
        </div>

        {/* "20+ YEARS EXPERIENCE" badge */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white text-[#1a1a1a] px-5 py-2.5 text-xs font-bold uppercase tracking-widest whitespace-nowrap shadow-2xl">
          20+ Years Experience
        </div>

        {/* Squiggle decoration bottom-right */}
        <svg className="absolute bottom-16 right-4 opacity-40" width="60" height="50" viewBox="0 0 60 50" fill="none">
          <path d="M5 45 Q20 30 35 35 Q50 40 55 20 Q58 10 50 5" stroke="#d4a020" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
        </svg>
      </div>
    </section>
  );
}
