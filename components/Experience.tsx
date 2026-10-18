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
    period: "University of Nigeria, Nsukka (2019 – 2021)",
    title: "Director, Professor B. I. C. Ijomah Centre for Policy Studies and Research",
    place: "2005 - Present",
    tag: "Nigeria",
    description:
      "Professor Uchendu established and structured this center from the ground up, overseeing office spaces, staff recruitment, and program development. She launched the annual Dr. Emmanuel Uduaghan Public Lecture on Youth Leadership and initiated conferences, workshops, and journals like the Journal of Public Policy and the Journal of Behavioral Sciences.",
  },
  {
    period: "University of Nigeria, Nsukka (2012-2013)",
    title: "Head, Department of History & International Studies",
    place: "2005 - Present",
    tag: "Nigeria",
    description:
      "In this leadership role, Professor Uchendu managed departmental staff and students, introduced foreign scholars to the department, and enhanced postgraduate program structures. She promoted professional development by encouraging students' involvement in conferences, regularized program durations, and helped clear postgraduate backlogs.",
  },
  {
    period: "Council for the Development of Social Science Research in Africa (CODESRIA), Dakar (2005)",
    title: "Director, Gender Institute",
    place: "2005 - Present",
    tag: "Senegal",
    description:
      "Professor Uchendu directed the Gender Institute on the theme of \"Masculinities in Contemporary Africa,\" managing the annual program attended by researchers and scholars from across Africa. She produced publications from the institute, contributing significantly to the field of gender studies in Africa.",
  },
  {
    period: "Fulbright Alumni Association of Nigeria (2010 – 2014)",
    title: "Vice President",
    place: "2005 - Present",
    tag: "Nigeria",
    description:
      "Professor Uchendu served two terms as Vice President, supporting alumni activities, facilitating workshops, and strengthening the association's networks.",
  },
  {
    period: "African Humanities Research and Development Circle (AHRDC) (2022- Present)",
    title: "President",
    place: "2005 - Present",
    tag: "INT'L",
    description:
      "As the founding president, Professor Uchendu transformed AHRDC from a research group into an international professional organization for Africanist scholars, launching the organization's journal, Journal of African Humanities Research and Development.",
  },
  {
    period: "Presidential Committee for the Review of Nigeria's National Defence Policy (2014 – 2015)",
    title: "Spokesperson and Sub-Team Leader",
    place: "2005 - Present",
    tag: "Nigeria",
    description:
      "As a spokesperson, Professor Uchendu contributed to the development of Nigeria's National Defence Policy, leading fact-finding missions and collaborating with various sectors to shape defense policy frameworks.",
  },
  {
    period: "University of Calabar Sabbatical Appointment, (2016 – 2017)",
    title: "Professor, Department of History & International Studies",
    place: "2005 - Present",
    tag: "Nigeria",
    description:
      "During her sabbatical, she innovated the graduate program structure by integrating online teaching and hands-on historical fieldwork, providing students with critical experience in archival research.",
  },
];

const achievements: Entry[] = [
  {
    period: "University of Nigeria, Nsukka (2023)",
    title: "Lifetime Achievement Award by the Emerge Club",
    place: "1999 - 2023",
    tag: "Nsukka",
    description:
      "This award honored her career-long contributions to academia and her legacy at the University of Nigeria, Nsukka.",
  },
  {
    period: "(2019)",
    title: "TETFund Book Publication Grant",
    place: "1999 - 2023",
    tag: "Nsukka",
    description:
      "This grant from the Tertiary Education Trust Fund facilitated the publication of one of her major works, supporting her contribution to academic literature in Nigeria.",
  },
  {
    period: "University of Nigeria, Nsukka (2016)",
    title: "University of Nigeria Most Punctual Lecturer Award",
    place: "1999 - 2023",
    tag: "Nsukka",
    description:
      "Reflecting her dedication and professionalism, this award recognized her exemplary punctuality and commitment to her teaching responsibilities.",
  },
  {
    period: "University of Nigeria, Nsukka (2001 - 2002)",
    title: "Vice Chancellor's Prize for Best Graduating Ph.D. Candidate",
    place: "1999 - 2023",
    tag: "Nsukka",
    description:
      "Professor Uchendu received this award (second position) as one of the best-performing PhD candidates in the University of Nigeria.",
  },
  {
    period: "University of Nigeria, Nsukka (1999 - 2001)",
    title: "University of Nigeria Postgraduate Research Awards",
    place: "1999 - 2023",
    tag: "Nsukka",
    description:
      "These awards supported her PhD research and recognized her outstanding academic performance during her postgraduate studies.",
  },
  {
    period: "SOAS, University of London (2004)",
    title: "Postdoctoral Research Fellowship",
    place: "1999 - 2023",
    tag: "England",
    description:
      "Uchendu conducted postdoctoral research at the School of Oriental and African Studies (SOAS), deepening her expertise in African studies and history.",
  },
  {
    period: "University of Kansas, USA (2001–2002)",
    title: "Fulbright Visiting Research Award",
    place: "1999 - 2023",
    tag: "USA",
    description:
      "This prestigious Fulbright grant supported her research in women's studies, allowing her to expand her scholarship at the University of Kansas.",
  },
  {
    period: "ASRF (2020)",
    title: "African Studies and Research Forum (ASRF) Runner-Up Best Book Award",
    place: "1999 - 2023",
    tag: "Africa",
    description:
      "Her book Islam in the Niger Delta, 1890-2017 was recognized as one of the best scholarly works, showcasing her expertise in Islamic history in Nigeria.",
  },
  {
    period: "(2022)",
    title: "Humboldt Alumni Award for Innovative Networking Initiative",
    place: "1999 - 2023",
    tag: "Germany",
    description:
      "This award funded her #Don't-Litter-Initiative at UNN, a project focused on responsible waste management through community involvement and sustainability education.",
  },
  {
    period: "AvH (2009, 2018)",
    title: "Alexander von Humboldt Book and Equipment Grants",
    place: "1999 - 2023",
    tag: "Germany",
    description:
      "These grants from the AvH Foundation supported her research infrastructure and publication efforts, reinforcing her scholarship in Nigerian and African studies.",
  },
  {
    period: "The University of Texas at Austin (2017)",
    title: "The University of Texas at Austin's Wangari Maathai Award for Innovative Scholarship and Leadership",
    place: "1999 - 2023",
    tag: "USA",
    description:
      "This prestigious award honored her innovative research and leadership in gender studies, named after the Nobel Laureate Wangari Maathai.",
  },
  {
    period: "Zentrum Moderner Orient, Berlin (2006-2008)",
    title: "Alexander von Humboldt (AvH) Postdoctoral Fellowship",
    place: "1999 - 2023",
    tag: "Germany",
    description:
      "Funded by the AvH Foundation, this fellowship enabled her research in Berlin and established her international collaborations in gender and social history.",
  },
];

const tabs = [
  { id: "education", label: "Education", heading: "Education", data: education },
  { id: "work", label: "Work Experience", heading: "Professional Work Experience", data: work },
  { id: "achievements", label: "Achievements", heading: "Achievements", data: achievements },
];

function Timeline({ entries }: { entries: Entry[] }) {
  return (
    <div className="mt-6 lgl:mt-14 w-full columns-1 lgl:columns-2 gap-10">
      {entries.map((entry) => (
        <div key={entry.title} className="w-full group flex break-inside-avoid mb-10">
          <div className="w-10 h-[6px] bgOpacity mt-16 relative">
            <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-[var(--icon-bg)] bg-opacity-60">
              <span className="w-3 h-3 rounded-full bg-bodyColor inline-flex group-hover:bg-designColor duration-300" />
            </span>
          </div>
          <div className="w-full bg-gradient-to-r from-[var(--panel-from)] to-[var(--panel-to)] hover:from-[var(--panel-hover-from)] hover:to-[var(--panel-hover-to)] duration-300 rounded-lg p-4 lgl:px-10 flex flex-col justify-center gap-6 lgl:gap-10 shadow-xl">
            <div className="flex flex-col lgl:flex-row justify-between gap-4 lgl:gap-0 lgl:items-center">
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-lightText group-hover:text-[var(--contrast-strong)] duration-300">
                  {entry.title}
                </h3>
                <p className="text-sm mt-2 text-[var(--muted-color)] group-hover:text-[var(--contrast-strong)] duration-300">
                  {entry.period}
                </p>
              </div>
              <div>
                <p className="px-4 py-2 text-designColor bg-[var(--tag-bg)] rounded-lg flex justify-center items-center text-sm font-medium">
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
          <h2 className="text-3xl md:text-4xl font-bold text-lightText">{activeTab.heading}</h2>
        </div>
        <Timeline entries={activeTab.data} />
      </div>
    </section>
  );
}
