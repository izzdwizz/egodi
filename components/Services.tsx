"use client";

import { ArrowRight } from "lucide-react";

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
    icon: (
      <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <path d="M864 144H560c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16zm0 400H560c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V560c0-8.8-7.2-16-16-16zM464 144H160c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16zm0 400H160c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V560c0-8.8-7.2-16-16-16z" />
      </svg>
    ),
  },
  {
    title: "Conference Organization",
    description:
      "Organized conferences on pressing topics, such as Nigeria's resource conflicts, Islamic propagation, and technological advancement.",
    icon: (
      <svg stroke="currentColor" fill="currentColor" strokeWidth={0} role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <title></title>
        <path d="M23.235 6.825v11.997a.924.924 0 0 1-.419.725l-.393.235c-1.961 1.135-3.687 2.134-5.431 3.14V9.948L5.759 3.454C7.703 2.338 9.64 1.211 11.586.1a.927.927 0 0 1 .837 0l10.81 6.243v.482zm-8.741 4.562A9631.706 9631.706 0 0 0 6.8 6.943a.94.94 0 0 0-.837 0c-1.733 1.001-3.467 2-5.199 3.004l8.113 4.684V24c1.732-.999 3.46-2.006 5.197-2.995a.927.927 0 0 0 .419-.724zM.765 19.317l5.613 3.241V16.07Z" />
      </svg>
    ),
  },
  {
    title: "Community Engagement",
    description:
      "Launched the #Don't-Litter-Initiative for sustainable waste management at the University of Nigeria Nsukka campus.",
    icon: (
      <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <path d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z" />
      </svg>
    ),
  },
  {
    title: "Policy Advisory and Consultancy",
    description:
      "Served on the Presidential Committee for Nigeria's National Defence Policy and as a consultant to Transparency International on security sector involvement in Nigerian elections.",
    icon: (
      <svg stroke="currentColor" fill="currentColor" strokeWidth={0} role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <title></title>
        <path d="M17.4511 6.6808c.5091-.5064.5091-1.3316 0-1.838l-1.8729-1.873.0027.0027c-.4957-.4957-1.3478-1.3478-2.5535-2.5508-.568-.5547-1.487-.5493-2.0498.0134L.426 10.9787a1.4426 1.4426 0 0 0 0 2.047l10.549 10.541a1.4506 1.4506 0 0 0 2.0497 0l4.4238-4.4211c.509-.5064.509-1.3317 0-1.8381a1.3049 1.3049 0 0 0-1.8408 0l-3.3493 3.3546c-.1393.1394-.3564.1394-.4957 0l-8.4268-8.4188c-.1394-.1393-.1394-.3563 0-.4956L11.76 3.3289c.0107-.0108.0241-.0188.0349-.0295.1393-.1099.3322-.0992.4608.0295l3.3547 3.352c.509.509 1.3343.509 1.8407 0zm-8.2446 5.375a2.8482 2.8456 0 1 0 5.6965 0 2.8482 2.8456 0 1 0-5.6965 0zm14.3672-1.0343l-3.293-3.277c-.5092-.5063-1.3344-.5063-1.8408.0028a1.2968 1.2968 0 0 0 0 1.838l2.2239 2.2213c.1393.1393.1393.3564 0 .4957l-2.1918 2.189a1.2968 1.2968 0 0 0 0 1.8382 1.3049 1.3049 0 0 0 1.8408 0l3.2635-3.2609a1.445 1.445 0 0 0-.0026-2.047Z" />
      </svg>
    ),
  },
  {
    title: "Research and Publications",
    description:
      "Authored multiple books and articles on topics such as Islam in Nigeria, women's roles in conflict, and the Nigerian Civil War.",
    icon: (
      <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 496 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <path d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z" />
      </svg>
    ),
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
        {services.map(({ title, description, icon }) => (
          <div
            key={title}
            className="w-full px-12 h-80 py-10 rounded-lg shadow-xl flex items-center bg-gradient-to-r from-[var(--panel-from)] to-[var(--panel-to)] group hover:from-[var(--panel-hover-from)] hover:to-[var(--panel-hover-to)] transition-colors duration-100"
          >
            <div className="h-72 overflow-y-hidden">
              <div className="flex h-full flex-col gap-10 translate-y-16 group-hover:-translate-y-12 transition-transform duration-500">
                <div className="w-10 h-8 flex flex-col justify-between">
                  {icon === "bars" ? (
                    <>
                      <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex" />
                      <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex" />
                      <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex" />
                      <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex" />
                    </>
                  ) : (
                    <span className="text-5xl text-designColor">{icon}</span>
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
