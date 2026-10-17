"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const categories = ["All", "Research", "Teaching", "Policy", "Community"];

const services = [
  {
    title: "Professional Editing",
    description:
      "Editor of History in Africa: A Journal of Debates, Methods, and Source Analysis for the African Studies Association (2019–2025).",
    category: "Research",
    featured: true,
    gradient: "from-amber-900/40 via-[#1e1a10] to-[#1a1a1a]",
    accent: "#d4a020",
  },
  {
    title: "Mentorship & Development",
    description:
      "Established programs like the Building Research Competence Project and the Faculty of Arts Capacity Building Workshop at UNN.",
    category: "Teaching",
    gradient: "from-slate-800/60 to-[#1a1a1a]",
    accent: "#d4a020",
  },
  {
    title: "Conference Organization",
    description:
      "Organized conferences on Nigeria's resource conflicts, Islamic propagation, and technological advancement.",
    category: "Community",
    gradient: "from-stone-800/50 to-[#1a1a1a]",
    accent: "#d4a020",
  },
  {
    title: "Community Engagement",
    description:
      "Launched the #Don't-Litter-Initiative for sustainable waste management at the University of Nigeria Nsukka campus.",
    category: "Community",
    gradient: "from-emerald-900/30 to-[#1a1a1a]",
    accent: "#d4a020",
  },
  {
    title: "Policy Advisory & Consultancy",
    description:
      "Served on the Presidential Committee for Nigeria's National Defence Policy and as a consultant to Transparency International.",
    category: "Policy",
    gradient: "from-blue-900/30 to-[#1a1a1a]",
    accent: "#d4a020",
  },
  {
    title: "Research & Publications",
    description:
      "Authored multiple books and articles on Islam in Nigeria, women's roles in conflict, and the Nigerian Civil War.",
    category: "Research",
    gradient: "from-purple-900/30 to-[#1a1a1a]",
    accent: "#d4a020",
  },
];

function ArrowBtn() {
  return (
    <div className="w-9 h-9 rounded-full bg-[#d4a020] flex items-center justify-center flex-shrink-0 group-hover:bg-[#e8b830] group-hover:scale-110 transition-all duration-200">
      <ArrowUpRight size={16} className="text-[#1a1a1a]" />
    </div>
  );
}

function ServiceCard({
  title,
  description,
  gradient,
  featured,
  index,
}: {
  title: string;
  description: string;
  gradient: string;
  featured?: boolean;
  index: number;
}) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), index * 80);
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
      className={`group relative rounded-2xl border border-[#2e2e2e] bg-[#222] overflow-hidden cursor-pointer
        hover:border-[#d4a020]/50 transition-all duration-400 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/40
        ${featured ? "lg:col-span-2 lg:row-span-2" : ""}
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDuration: "0.5s", transitionProperty: "opacity, transform, border-color, box-shadow" }}
    >
      {/* Image area */}
      <div className={`w-full bg-gradient-to-br ${gradient} ${featured ? "h-52 lg:h-64" : "h-36"} relative`}>
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          <span className="text-8xl font-bold text-white" style={{ fontFamily: "var(--font-playfair)" }}>
            {title.charAt(0)}
          </span>
        </div>
        {/* Bottom border accent */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4a020]/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-5 flex items-start justify-between gap-3">
        <div className="flex-1">
          <h3 className="text-white font-bold text-base leading-snug mb-1.5 group-hover:text-[#d4a020] transition-colors duration-200">
            {title}
          </h3>
          {featured && (
            <p className="text-[#888] text-sm leading-relaxed">{description}</p>
          )}
        </div>
        <ArrowBtn />
      </div>
    </div>
  );
}

export default function Services() {
  const [activeCategory, setActiveCategory] = useState("All");
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

  const filtered = activeCategory === "All"
    ? services
    : services.filter((s) => s.category === activeCategory);

  return (
    <section id="services" className="py-24 bg-[#1a1a1a]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-12 transition-all duration-700 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#d4a020] uppercase tracking-wider">
            Services Rendered
          </h2>
          <div className="mt-4 w-12 h-0.5 bg-[#d4a020] mx-auto" />
        </div>

        {/* Filter tabs */}
        <div
          className={`flex flex-wrap justify-center gap-2 mb-10 transition-all duration-700 delay-100 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 text-xs font-semibold uppercase tracking-wider rounded-sm transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-[#d4a020] text-[#1a1a1a]"
                  : "bg-[#222] text-[#888] border border-[#2e2e2e] hover:border-[#d4a020]/40 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">
          {filtered.map((service, i) => (
            <ServiceCard key={service.title} {...service} index={i} />
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-10">
          <button className="px-8 py-3 border border-[#d4a020] text-[#d4a020] text-xs font-semibold uppercase tracking-widest hover:bg-[#d4a020] hover:text-[#1a1a1a] transition-all duration-200">
            View All
          </button>
        </div>
      </div>
    </section>
  );
}
