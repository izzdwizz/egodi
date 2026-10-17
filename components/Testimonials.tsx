"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "Professor Uchendu's groundbreaking work on women's history in Eastern Nigeria has transformed how we understand gender and conflict in post-colonial Africa. A truly outstanding scholar.",
    name: "Prof. Adaeze Okonkwo",
    role: "Department of History, University of Lagos",
    initials: "AO",
    color: "bg-amber-700",
  },
  {
    quote:
      "Her editorial leadership at History in Africa elevated the journal's standing significantly. She brings intellectual rigour and an inspiring commitment to mentoring the next generation of African historians.",
    name: "Dr. Emeka Nnadi",
    role: "African Studies Association",
    initials: "EN",
    color: "bg-stone-600",
  },
  {
    quote:
      "Working under Professor Uchendu's Building Research Competence Project was transformative. She equipped us with skills and confidence that shaped our entire academic careers.",
    name: "Chisom Nwosu",
    role: "PhD Candidate, UNN",
    initials: "CN",
    color: "bg-amber-500",
  },
  {
    quote:
      "Her policy insights on national defence and electoral integrity reflect the kind of engaged scholarship that bridges the gap between the academy and real-world governance.",
    name: "Barr. Tunde Fasanya",
    role: "Presidential Policy Advisory Team",
    initials: "TF",
    color: "bg-slate-600",
  },
  {
    quote:
      "Nigeria's Resource Wars is essential reading for anyone studying resource conflict in sub-Saharan Africa. Professor Uchendu's analysis is sharp, original, and deeply humane.",
    name: "Dr. Ngozi Akpala",
    role: "Senior Fellow, African Peace Institute",
    initials: "NA",
    color: "bg-emerald-800",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(2);
  const [headerVisible, setHeaderVisible] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const [contentVisible, setContentVisible] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs1 = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setHeaderVisible(true); obs1.disconnect(); } },
      { threshold: 0.2 }
    );
    const obs2 = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setContentVisible(true); obs2.disconnect(); } },
      { threshold: 0.1 }
    );
    if (headerRef.current) obs1.observe(headerRef.current);
    if (contentRef.current) obs2.observe(contentRef.current);
    return () => { obs1.disconnect(); obs2.disconnect(); };
  }, []);

  const prev = () => setActive((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () => setActive((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  const t = testimonials[active];

  return (
    <section className="py-24 bg-[#1a1a1a]">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-4 transition-all duration-700 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#d4a020] uppercase tracking-wider">
            What Colleagues Say
          </h2>
          <div className="mt-4 w-12 h-0.5 bg-[#d4a020] mx-auto" />
          <p className="text-[#666] text-sm mt-5 max-w-lg mx-auto leading-relaxed">
            Reflections from students, collaborators, and peers across academia and policy circles.
          </p>
        </div>

        {/* Avatar row */}
        <div
          ref={contentRef}
          className={`mt-10 flex items-end justify-center gap-2 sm:gap-3 transition-all duration-700 delay-100 ${
            contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {testimonials.map((item, i) => {
            const isActive = i === active;
            return (
              <button
                key={item.name}
                onClick={() => setActive(i)}
                className={`rounded-full border-2 flex items-center justify-center font-bold text-white transition-all duration-300 flex-shrink-0 ${item.color} ${
                  isActive
                    ? "w-16 h-16 sm:w-20 sm:h-20 border-[#d4a020] text-sm shadow-xl shadow-[#d4a020]/20"
                    : "w-10 h-10 sm:w-12 sm:h-12 border-[#2e2e2e] text-xs opacity-60 hover:opacity-90"
                }`}
              >
                {item.initials}
              </button>
            );
          })}
        </div>

        {/* Quote card */}
        <div
          className={`mt-8 text-center transition-all duration-500 ${
            contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="relative">
            {/* Opening quote mark */}
            <span className="text-7xl text-[#d4a020]/20 font-serif leading-none absolute -top-4 left-1/2 -translate-x-1/2 select-none" aria-hidden>
              &ldquo;
            </span>
            <blockquote className="text-[#ccc] text-base sm:text-lg leading-relaxed italic px-4 pt-6 pb-6 min-h-[7rem] transition-all duration-300">
              {t.quote}
            </blockquote>
          </div>
          <div className="mt-2">
            <p className="text-white font-bold text-sm">{t.name}</p>
            <p className="text-[#d4a020] text-xs mt-0.5">{t.role}</p>
          </div>

          {/* Bottom gold line */}
          <div className="mt-8 w-full h-px bg-gradient-to-r from-transparent via-[#d4a020] to-transparent" />

          {/* Controls */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-[#2e2e2e] flex items-center justify-center text-[#888] hover:text-[#d4a020] hover:border-[#d4a020] transition-all duration-200"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-1.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    i === active ? "w-6 bg-[#d4a020]" : "w-2 bg-[#333]"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-[#2e2e2e] flex items-center justify-center text-[#888] hover:text-[#d4a020] hover:border-[#d4a020] transition-all duration-200"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
