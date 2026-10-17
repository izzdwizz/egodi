"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { FaWikipediaW } from "react-icons/fa";

const publications = [
  {
    year: "2007",
    title: "Women and Conflict in the Nigerian Civil War",
    excerpt:
      "Examines the roles, experiences, and resilience of Nigerian women during the Nigerian Civil War, highlighting their unique contributions and struggles.",
    readTime: "6 min read",
    gradient: "from-amber-900/50 via-[#1e1a10] to-[#222]",
  },
  {
    year: "2011",
    title: "Dawn for Islam in Eastern Nigeria",
    excerpt:
      "Traces the historical spread of Islam in Eastern Nigeria, particularly in Igboland, exploring its cultural and social impact on the region.",
    readTime: "5 min read",
    gradient: "from-stone-800/50 via-[#1a1a1a] to-[#222]",
  },
  {
    year: "2018",
    title: "Islam in the Niger Delta, 1890–2017",
    excerpt:
      "An in-depth look at the historical evolution of Islam in Nigeria's Niger Delta, detailing perspectives from both indigenous and migrant communities.",
    readTime: "7 min read",
    gradient: "from-blue-900/40 via-[#111] to-[#222]",
  },
  {
    year: "2008",
    title: "Masculinities in Contemporary Africa",
    excerpt:
      "A collection of essays analyzing diverse expressions of masculinity across African societies and their influence on gender relations.",
    readTime: "4 min read",
    gradient: "from-purple-900/40 via-[#111] to-[#222]",
  },
  {
    year: "2020",
    title: "Nigeria's Resource Wars",
    excerpt:
      "Explores the causes, dynamics, and socio-political consequences of resource-based conflicts within Nigeria, providing pathways to peace.",
    readTime: "5 min read",
    gradient: "from-red-900/30 via-[#111] to-[#222]",
  },
  {
    year: "2021",
    title: "Negotiating Patriarchy and Gender in Africa",
    excerpt:
      "Investigates the challenges surrounding patriarchy and gender roles in African societies through both historical and contemporary lenses.",
    readTime: "6 min read",
    gradient: "from-emerald-900/30 via-[#111] to-[#222]",
  },
  {
    year: "2023",
    title: "Witchcraft in Africa: Meanings, Factors, and Practices",
    excerpt:
      "Delves into the complex beliefs, societal reactions, and human rights issues associated with witchcraft across African communities.",
    readTime: "5 min read",
    gradient: "from-slate-700/50 via-[#111] to-[#222]",
  },
  {
    year: "2024",
    title: "Economic Development of Nigeria Since 1800",
    excerpt:
      "Chronicles the economic history of Nigeria, examining key developments, challenges, and transformations over two centuries.",
    readTime: "7 min read",
    gradient: "from-amber-800/40 via-[#1a1410] to-[#222]",
  },
];

function PublicationCard({
  year,
  title,
  excerpt,
  readTime,
  gradient,
  index,
}: {
  year: string;
  title: string;
  excerpt: string;
  readTime: string;
  gradient: string;
  index: number;
}) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), (index % 4) * 90);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={ref}
      className={`group bg-[#222] rounded-xl border border-[#2e2e2e] overflow-hidden hover:border-[#d4a020]/50 hover:shadow-xl hover:shadow-black/40 transition-all duration-400 hover:-translate-y-1 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDuration: "0.55s", transitionProperty: "opacity, transform, border-color, box-shadow" }}
    >
      {/* Image area */}
      <div className={`h-44 bg-gradient-to-br ${gradient} relative overflow-hidden`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className="text-7xl font-bold text-white/5 select-none"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {index + 1 < 10 ? `0${index + 1}` : index + 1}
          </span>
        </div>
        <div className="absolute top-3 right-3 text-[10px] font-bold text-[#d4a020] bg-[#1a1a1a]/70 px-2 py-1 rounded">
          {year}
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4a020]/50 to-transparent" />
      </div>

      {/* Body */}
      <div className="p-5">
        <h3
          className="text-white font-bold text-base leading-snug mb-2 group-hover:text-[#d4a020] transition-colors duration-200 line-clamp-2"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          {title}
        </h3>
        <p className="text-[#777] text-sm leading-relaxed mb-4 line-clamp-3">{excerpt}</p>
        <div className="flex items-center justify-between">
          <span className="text-[#555] text-xs">{readTime}</span>
          <div className="w-8 h-8 rounded-full bg-[#d4a020] flex items-center justify-center group-hover:bg-[#e8b830] group-hover:scale-110 transition-all duration-200">
            <ArrowUpRight size={14} className="text-[#1a1a1a]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Publications() {
  const [headerVisible, setHeaderVisible] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setHeaderVisible(true); observer.disconnect(); } },
      { threshold: 0.2 }
    );
    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="publications" className="py-24 bg-[#111]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-12 transition-all duration-700 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a
            href="https://en.wikipedia.org/wiki/Egodi_Uchendu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#888] text-xs font-semibold uppercase tracking-widest mb-4 border border-[#2e2e2e] px-4 py-2 rounded-full hover:border-[#d4a020]/50 hover:text-[#d4a020] transition-all duration-200"
          >
            <FaWikipediaW size={12} />
            Visit My Wikipedia for More Information
          </a>
          <h2 className="text-3xl md:text-4xl font-bold text-[#d4a020] uppercase tracking-wider">
            Publications
          </h2>
          <div className="mt-4 w-12 h-0.5 bg-[#d4a020] mx-auto" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {publications.map((pub, i) => (
            <PublicationCard key={pub.title} {...pub} index={i} />
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 border border-[#d4a020] text-[#d4a020] text-xs font-semibold uppercase tracking-widest hover:bg-[#d4a020] hover:text-[#1a1a1a] transition-all duration-200">
            View All
          </button>
        </div>
      </div>
    </section>
  );
}
