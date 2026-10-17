"use client";

import { useEffect, useRef, useState } from "react";
import { GraduationCap, Briefcase, Trophy } from "lucide-react";

const tabs = [
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "work", label: "Work Experience", icon: Briefcase },
  { id: "achievements", label: "Achievements", icon: Trophy },
];

const education = [
  {
    period: "2002",
    degree: "PhD in Social History / Women's History",
    institution: "University of Nigeria, Nsukka",
    honor: "Hons.",
    description:
      "Doctoral studies focused on Social History, specializing in women's experiences, roles, and identities. Research emphasized the historical evolution of women's contributions and their impact on Nigerian society.",
  },
  {
    period: "1993",
    degree: "M.A. in Political History",
    institution: "University of Nigeria, Nsukka",
    honor: "Hons.",
    description:
      "Studied the dynamics of political history, particularly in Nigeria — laying the groundwork for later research on historical movements, political change, and gender.",
  },
  {
    period: "1989",
    degree: "B.A. in History",
    institution: "University of Nigeria, Nsukka",
    honor: "Hons.",
    description:
      "Gained foundational knowledge in Nigerian and African historical narratives, which later served as the basis for specialized research on the Nigerian Civil War and Islamic history in Eastern Nigeria.",
  },
];

const work = [
  {
    period: "2019",
    degree: "Diploma in Management of Higher Education Institutes",
    institution: "Galilee International Management Institute, Nahalal",
    honor: "Israel",
    description:
      "Provided essential skills in educational management, equipping her to effectively lead academic departments and contribute to policy formulation in higher education.",
  },
  {
    period: "2008",
    degree: "Certificate in Modern Higher Education Management and Leadership",
    institution: "University of Applied Sciences, Osnabrück & University of Addis Ababa",
    honor: "Germany / Ethiopia",
    description:
      "Developed advanced leadership skills tailored to higher education, preparing her for roles in managing academic programs and faculty development initiatives.",
  },
  {
    period: "2001",
    degree: "Certificate in English for Graduate Studies",
    institution: "Loyola University, New Orleans",
    honor: "USA",
    description:
      "Facilitated proficiency in academic English, enabling effective communication of research within international academic circles.",
  },
];

const achievements = [
  {
    period: "2019–2025",
    degree: "Editor, History in Africa Journal",
    institution: "African Studies Association",
    honor: "Journal Editorship",
    description:
      "Served as editor of History in Africa: A Journal of Debates, Methods, and Source Analysis — one of the premier journals in African historical scholarship.",
  },
  {
    period: "Ongoing",
    degree: "Presidential Committee Member",
    institution: "Nigeria's National Defence Policy",
    honor: "Policy Advisory",
    description:
      "Served on the Presidential Committee shaping Nigeria's National Defence Policy, contributing scholarly expertise to national security governance.",
  },
  {
    period: "Ongoing",
    degree: "Consultant, Transparency International",
    institution: "Security Sector & Electoral Integrity",
    honor: "Consultancy",
    description:
      "Engaged as a consultant on security sector involvement in Nigerian elections, advising on governance, accountability, and democratic processes.",
  },
  {
    period: "2010+",
    degree: "Building Research Competence Project",
    institution: "University of Nigeria, Nsukka",
    honor: "Academic Initiative",
    description:
      "Established a flagship mentorship program at UNN to build research capacity among students and early-career academics in the Faculty of Arts.",
  },
];

const tabData: Record<string, typeof education> = { education, work, achievements };

function TimelineItem({
  period, degree, institution, honor, description, index, isLast,
}: {
  period: string; degree: string; institution: string; honor: string;
  description: string; index: number; isLast: boolean;
}) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setVisible(false);
    const t = setTimeout(() => {
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) { setTimeout(() => setVisible(true), index * 120); observer.disconnect(); } },
        { threshold: 0.1 }
      );
      if (ref.current) observer.observe(ref.current);
      return () => observer.disconnect();
    }, 60);
    return () => clearTimeout(t);
  }, [index, degree]);

  return (
    <div
      ref={ref}
      className={`flex gap-6 transition-all duration-600 ${
        visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
      }`}
      style={{ transitionDuration: "0.6s" }}
    >
      {/* Spine */}
      <div className="flex flex-col items-center flex-shrink-0">
        <div className="w-4 h-4 rounded-full bg-[#d4a020] border-4 border-[#1a1a1a] shadow-lg shadow-[#d4a020]/30 mt-1.5" />
        {!isLast && <div className="w-px flex-1 bg-gradient-to-b from-[#d4a020]/60 to-[#2e2e2e] mt-1" />}
      </div>

      {/* Content */}
      <div className="pb-10">
        <span className="inline-block text-[10px] font-bold text-[#d4a020] tracking-widest uppercase bg-[#d4a020]/10 border border-[#d4a020]/20 px-2.5 py-0.5 rounded mb-2">
          {period}
        </span>
        <h3
          className="text-xl font-bold text-white mt-1 leading-snug"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          {degree}
        </h3>
        <p className="text-[#d4a020] text-sm font-semibold mt-1">{institution}</p>
        <span className="text-xs text-[#555] font-medium">{honor}</span>
        <p className="text-[#777] text-sm leading-relaxed mt-3 max-w-xl">{description}</p>
      </div>
    </div>
  );
}

export default function Experience() {
  const [activeTab, setActiveTab] = useState("education");
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

  const items = tabData[activeTab] || [];

  return (
    <section id="experience" className="py-24 bg-[#111]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-12 transition-all duration-700 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-[#555] text-xs uppercase tracking-[0.3em] mb-3 font-semibold">
            Over 20 Years of Professional Experience
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#d4a020] uppercase tracking-wider">
            Experience
          </h2>
          <div className="mt-4 w-12 h-0.5 bg-[#d4a020] mx-auto" />
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {tabs.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`flex items-center gap-2.5 px-6 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                activeTab === id
                  ? "bg-[#d4a020] text-[#1a1a1a]"
                  : "bg-[#222] text-[#777] border border-[#2e2e2e] hover:border-[#d4a020]/40 hover:text-white"
              }`}
            >
              <Icon size={14} />
              {label}
            </button>
          ))}
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          {items.map((item, i) => (
            <TimelineItem key={`${activeTab}-${i}`} {...item} index={i} isLast={i === items.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
