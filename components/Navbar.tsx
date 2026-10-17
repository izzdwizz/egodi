"use client";

import { useState, useEffect } from "react";
import { Menu, X, Mail } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Publications", href: "#publications" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setIsOpen(false);
    document.getElementById(href.replace("#", ""))?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-3 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#1a1a1a]/95 backdrop-blur-md shadow-xl shadow-black/40" : "bg-[#1a1a1a]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between gap-8">
        {/* Email */}
        <a
          href="mailto:egodi.uchendu@unn.edu.ng"
          className="hidden sm:flex items-center gap-2 text-[#888] text-xs hover:text-[#d4a020] transition-colors duration-200"
        >
          <Mail size={13} />
          egodi.uchendu@unn.edu.ng
        </a>

        {/* Nav links – desktop */}
        <ul className="hidden md:flex items-center gap-7 mx-auto">
          {navLinks.map((link) => {
            const active = activeSection === link.href.replace("#", "");
            return (
              <li key={link.href}>
                <button
                  onClick={() => scrollTo(link.href)}
                  className={`text-xs font-semibold tracking-widest uppercase transition-all duration-200 relative group ${
                    active ? "text-[#d4a020]" : "text-[#aaa] hover:text-white"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-0.5 left-0 h-px bg-[#d4a020] transition-all duration-300 ${
                      active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </button>
              </li>
            );
          })}
        </ul>

        {/* Logo */}
        <button
          onClick={() => scrollTo("#home")}
          className="text-xl font-bold text-white italic tracking-tight hover:text-[#d4a020] transition-colors duration-200 flex-shrink-0"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          EU
        </button>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-[#aaa] hover:text-[#d4a020] transition-colors duration-200 -mr-1"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="px-6 pb-5 pt-2 flex flex-col gap-4 border-t border-[#2e2e2e]">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => scrollTo(link.href)}
                className={`text-xs font-semibold tracking-widest uppercase transition-colors duration-200 ${
                  activeSection === link.href.replace("#", "")
                    ? "text-[#d4a020]"
                    : "text-[#aaa] hover:text-white"
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
