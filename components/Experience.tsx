"use client";

import { useState } from "react";

type Entry = {
  period: string;
  title: string;
  place: string;
  tag: string;
  description: string;
};

const education: Entry[] = [
  {
    period: "University of Nigeria, Nsukka (2002)",
    title: "PhD in Social History/Women's History",
    place: "1989 - 2019",
    tag: "Hons.",
    description:
      "Professor Uchendu completed her doctoral studies with a focus on Social History, specializing in women's experiences, roles, and identities. Her research emphasized the historical evolution of women's contributions and their impact on Nigerian society, reflecting her enduring interest in gender studies and conflict.",
  },
  {
    period: "University of Nigeria, Nsukka (1993)",
    title: "M.A. in Political History",
    place: "1989 - 2019",
    tag: "Hons.",
    description:
      "In her master's program, Uchendu studied the dynamics of political history, particularly in Nigeria. Her studies during this time laid the groundwork for her later research on historical movements, political change, and gender in Nigeria.",
  },
  {
    period: "University of Nigeria, Nsukka (1989)",
    title: "B.A. in History",
    place: "1989 - 2019",
    tag: "Hons.",
    description:
      "As an undergraduate, Uchendu pursued a comprehensive study of history, gaining foundational knowledge in Nigerian and African historical narratives, which would later serve as the basis for her specialized research on the Nigerian Civil War and Islamic history in Eastern Nigeria.",
  },
];

const work: Entry[] = [
  {
    period: "Galilee International Management Institute, Nahalal (2019)",
    title: "Diploma in Management of Higher Education Institutes",
    place: "2010 - 2022",
    tag: "Israel",
    description:
      "This diploma provided Prof. Uchendu with essential skills in educational management, equipping her to effectively lead academic departments and research centers and contribute to policy formulation in higher education.",
  },
  {
    period: "Loyola University, New Orleans (2001)",
    title: "Certificate in English for Graduate Studies",
    place: "2010 - 2022",
    tag: "USA",
    description:
      "This certification facilitated Prof. Uchendu's proficiency in academic English, enabling her to communicate her research effectively within international academic circles.",
  },
  {
    period: "University of Applied Sciences, Osnabrück, Germany, and University of Addis Ababa, Ethiopia (2008)",
    title: "Certificate in Modern Higher Education Management and Leadership",
    place: "2010 - 2022",
    tag: "Germany",
    description:
      "Through this course, Prof. Uchendu developed advanced leadership skills tailored to higher education, preparing her for her roles in managing academic programs and faculty development initiatives.",
  },
];

const achievements: Entry[] = [
  {
    period: "African Studies Association",
    title: "Editor, History in Africa Journal",
    place: "2019 - 2025",
    tag: "Editorship",
    description:
      "Editor of History in Africa: A Journal of Debates, Methods, and Source Analysis for the African Studies Association.",
  },
  {
    period: "Presidential Committee, Nigeria",
    title: "Policy Advisory and Consultancy",
    place: "Ongoing",
    tag: "Policy",
    description:
      "Served on the Presidential Committee for Nigeria's National Defence Policy and as a consultant to Transparency International on security sector involvement in Nigerian elections.",
  },
  {
    period: "University of Nigeria, Nsukka",
    title: "Mentorship and Development",
    place: "Ongoing",
    tag: "Capacity Building",
    description:
      "Established programs like the Building Research Competence Project and the Faculty of Arts Capacity Building Workshop at UNN to develop research skills among students and early-career academics.",
  },
];

const tabs = [
  { id: "education", label: "Education", data: education },
  { id: "work", label: "Work Experience", data: work },
  { id: "achievements", label: "Achievements", data: achievements },
];

function Timeline({ entries }: { entries: Entry[] }) {
  return (
    <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-[var(--border-color)] border-opacity-30 flex flex-col gap-10">
      {entries.map((entry) => (
        <div key={entry.title} className="w-full group flex">
          <div className="w-10 h-[6px] bgOpacity mt-16 relative">
            <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-[var(--icon-bg)] bg-opacity-60">
              <span className="w-3 h-3 rounded-full bg-bodyColor inline-flex group-hover:bg-designColor duration-300" />
            </span>
          </div>
          <div className="w-full bgOpacity hover:bg-[var(--surface-opacity-hover)] duration-300 rounded-lg p-4 lgl:px-10 flex flex-col justify-center gap-6 lgl:gap-10 shadow-shadowOne">
            <div className="flex flex-col lgl:flex-row justify-between gap-4 lgl:gap-0 lgl:items-center">
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-lightText duration-300">
                  {entry.title}
                </h3>
                <p className="text-sm mt-2 text-[var(--muted-color)] group-hover:text-lightText duration-300">
                  {entry.period}
                </p>
              </div>
              <div>
                <p className="px-4 py-2 text-designColor bg-[var(--surface-opacity)] rounded-lg flex justify-center items-center shadow-shadowOne text-sm font-medium">
                  {entry.tag}
                </p>
              </div>
            </div>
            <p className="text-sm md:text-base font-medium text-[var(--muted-color)] group-hover:text-[var(--heading-color)] duration-300">
              {entry.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Experience() {
  const [active, setActive] = useState("education");
  const activeTab = tabs.find((t) => t.id === active) ?? tabs[0];

  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-[var(--border-color)]">
      <div className="flex justify-center items-center text-center">
        <div className="flex flex-col gap-4 font-titleFont mb-14">
          <h3 className="text-sm uppercase font-light text-designColor tracking-wide">
            OVER 20 YEARS OF PROFESSIONAL EXPERIENCE
          </h3>
          <h1 className="text-4xl md:text-5xl text-[var(--heading-color)] font-bold capitalize">
            Experience
          </h1>
        </div>
      </div>

      <div>
        <ul className="w-full grid grid-cols-1 md:grid-cols-3">
          {tabs.map((tab) => (
            <li
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={`resumeLi ${
                active === tab.id ? "border-designColor text-lightText" : "border-transparent"
              }`}
            >
              {tab.label}
            </li>
          ))}
        </ul>
      </div>

      <div className="w-full" style={{ opacity: 1 }}>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">{activeTab.data[0]?.place}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-lightText">{activeTab.label}</h2>
        </div>
        <Timeline entries={activeTab.data} />
      </div>
    </section>
  );
}
