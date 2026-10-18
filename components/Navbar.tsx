"use client";

import { useState } from "react";
import { Menu, Sun, Moon } from "lucide-react";
import { useTheme } from "./useTheme";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#features" },
  { label: "Publications", href: "#projects" },
  { label: "Experience", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const scrollTo = (href: string) => {
    setIsOpen(false);
    document.getElementById(href.replace("#", ""))?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-[var(--border-color)]">
      <div className="flex gap-3 items-center">
        <div className="bg-[var(--icon-bg)] rounded-full p-1 border-[5px] border-[var(--surface-to)] flex">
          <img
            src="/logo.png"
            alt="logo"
            className="h-[55px] w-[55px] relative -bottom-1 rounded-full object-cover"
          />
        </div>
        <p className="font-titleFont font-bold">Egodi Uchendu</p>
      </div>

      <div className="flex items-center gap-4">
        <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
          {navLinks.map((link) => (
            <li
              key={link.href}
              className="text-base font-normal text-[var(--muted-color)] tracking-wide cursor-pointer hover:text-designColor duration-300"
            >
              <a onClick={() => scrollTo(link.href)}>{link.label}</a>
            </li>
          ))}
        </ul>

        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="text-xl w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer duration-300"
          style={{ background: theme === "dark" ? "transparent" : "#f6f4f2" }}
        >
          {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        <span
          className="text-xl mdl:hidden bg-[var(--icon-bg)] w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
          onClick={() => setIsOpen((p) => !p)}
        >
          <Menu size={20} />
        </span>
      </div>

      {isOpen && (
        <ul className="mdl:hidden absolute top-24 left-0 w-full bg-bodyColor border-b-[1px] border-b-[var(--border-color)] flex flex-col items-center gap-6 py-8 z-50">
          {navLinks.map((link) => (
            <li
              key={link.href}
              className="text-base font-normal text-[var(--muted-color)] tracking-wide cursor-pointer hover:text-designColor duration-300"
            >
              <a onClick={() => scrollTo(link.href)}>{link.label}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
