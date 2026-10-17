"use client";

import { ArrowRight } from "lucide-react";
import { FaGlobeAfrica, FaMobileAlt } from "react-icons/fa";
import { SiCodepen } from "react-icons/si";
import { LayoutGrid, ShieldCheck } from "lucide-react";

const services = [
  {
    title: "Professional Editing",
    description:
      "Editor of History in Africa: A Journal of Debates, Methods, and Source Analysis for the African Studies Association (2019–2025).",
    icon: "bars" as const,
  },
  {
    title: "Mentorship and Development",
    description:
      "Established programs like the Building Research Competence Project and the Faculty of Arts Capacity Building Workshop at UNN to develop research skills among students and early-career academics.",
    icon: LayoutGrid,
  },
  {
    title: "Conference Organization",
    description:
      "Organized conferences on pressing topics, such as Nigeria's resource conflicts, Islamic propagation, and technological advancement.",
    icon: SiCodepen,
  },
  {
    title: "Community Engagement",
    description:
      "Launched the #Don't-Litter-Initiative for sustainable waste management at the University of Nigeria Nsukka campus.",
    icon: FaMobileAlt,
  },
  {
    title: "Policy Advisory and Consultancy",
    description:
      "Served on the Presidential Committee for Nigeria's National Defence Policy and as a consultant to Transparency International on security sector involvement in Nigerian elections.",
    icon: ShieldCheck,
  },
  {
    title: "Research and Publications",
    description:
      "Authored multiple books and articles on topics such as Islam in Nigeria, women's roles in conflict, and the Nigerian Civil War.",
    icon: FaGlobeAfrica,
  },
];

export default function Services() {
  return (
    <section id="features" className="w-full py-20 border-b-[1px] border-b-[var(--border-color)]">
      <div className="flex flex-col gap-4 font-titleFont mb-14">
        <h3 className="text-sm uppercase font-light text-designColor tracking-wide">Features</h3>
        <h1 className="text-4xl md:text-5xl text-[var(--heading-color)] font-bold capitalize">
          Services Rendered
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        {services.map(({ title, description, icon: Icon }) => (
          <div
            key={title}
            className="w-full px-12 h-80 py-10 rounded-lg shadow-shadowOne flex items-center bg-gradient-to-r from-[var(--surface-from)] to-[var(--surface-to)] group hover:from-[var(--surface-hover-from)] hover:to-[var(--surface-hover-to)] transition-colors duration-100"
          >
            <div className="h-72 overflow-y-hidden">
              <div className="flex h-full flex-col gap-10 translate-y-16 group-hover:-translate-y-12 transition-transform duration-500">
                <div className="w-10 h-8 flex flex-col justify-between">
                  {Icon === "bars" ? (
                    <>
                      <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex" />
                      <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex" />
                      <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex" />
                      <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex" />
                    </>
                  ) : (
                    <Icon className="text-3xl text-designColor" />
                  )}
                </div>
                <div className="flex flex-col gap-6">
                  <h2 className="text-xl md:text-2xl font-titleFont font-bold text-[var(--heading-color)]">
                    {title}
                  </h2>
                  <p className="base">{description}</p>
                  <span className="text-2xl text-designColor text-transparent">
                    <ArrowRight />
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
