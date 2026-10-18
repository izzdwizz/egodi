"use client";

import { FaGlobeAfrica } from "react-icons/fa";
import { useTheme } from "./useTheme";

const publications = [
  {
    title: "Women and Conflict in the Nigerian Civil War (2007)",
    link: "https://www.researchgate.net/publication/272102474_Women_and_Conflict_in_the_Nigerian_Civil_War",
    description:
      "Examines the roles, experiences, and resilience of Nigerian women during the Nigerian Civil War, highlighting their unique contributions and struggles.",
    img: "/womenxconflict.jpg",
    fit: "cover",
  },
  {
    title: "Dawn for Islam in Eastern Nigeria: A History of the Arrival of Islam in Igboland (2011)",
    link: "https://www.degruyter.com/document/doi/10.1515/olzg-2015-0054/pdf",
    description:
      "Traces the historical spread of Islam in Eastern Nigeria, particularly in Igboland, exploring its cultural and social impact on the region.",
    img: "/dawnofislam.png",
    fit: "contain",
  },
  {
    title: "Islam in the Niger Delta, 1890-2017: A Synthesis of the Accounts of Indigenes and Migrants (2018)",
    link: "https://www.researchgate.net/publication/344794453_Islam_in_the_Niger_Delta_1890-2017_A_Synthesis_of_the_Accounts_of_Indigenes_and_Migrants",
    description:
      "Provides an in-depth look at the historical evolution of Islam in Nigeria's Niger Delta, detailing perspectives from both indigenous and migrant communities.",
    img: "/islaminthenigerdelta.jpg",
    fit: "contain",
  },
  {
    title: "Masculinities in Contemporary Africa (Ed., 2008)",
    link: "https://www.researchgate.net/publication/272100118_Masculinities_in_Contemporary_Africa",
    description:
      "A collection of essays analyzing diverse expressions of masculinity across African societies and their influence on gender relations and societal roles.",
    img: "/masculinities.jpeg",
    fit: "contain",
  },
  {
    title: "Nigeria's Resource Wars (Ed., 2020)",
    link: "https://www.researchgate.net/publication/345814605_Nigeria's_Resource_Wars",
    description:
      "Explores the causes, dynamics, and socio-political consequences of resource-based conflicts within Nigeria, aiming to provide pathways to peace and resource equity.",
    img: "/nigeriaresourcewars.png",
    fit: "contain",
  },
  {
    title: "Negotiating Patriarchy and Gender in Africa: Discourses, Practices, and Policies (Ed., 2021, 2023)",
    link: "https://rowman.com/ISBN/9781793642066/Negotiating-Patriarchy-and-Gender-in-Africa-Discourses-Practices-and-Policies",
    description:
      "Investigates the ongoing challenges and adaptations surrounding patriarchy and gender roles in African societies through both historical and contemporary lenses.",
    img: "/UCHENDU%20and%20EDEAGU%20Negotiating%20Patriarchy%20and%20Gender%20in%20Africa_LITHO_Proof1-2_page-0001.94e337ddefceee65c2f4.jpg",
    fit: "contain",
  },
  {
    title: "Witchcraft in Africa: Meanings, Factors, and Practices (Ed., 2023)",
    link: "https://www.cambridgescholars.com/product/978-1-5275-9026-7",
    description:
      "Delves into the complex beliefs, societal reactions, and human rights issues associated with witchcraft across African communities.",
    img: "/witchcraft.png",
    fit: "contain",
  },
  {
    title: "Economic Development of Nigeria Since 1800 (Ed., 2024)",
    link: "https://www.elivapress.com/en/book/book-4794938956/",
    description:
      "Chronicles the economic history of Nigeria, examining key developments, challenges, and transformations that have shaped the nation's economy over two centuries.",
    img: "/economicdevelopment.png",
    fit: "contain",
  },
  {
    title: "Nigeria's 2019 Democratic Experience",
    link: "https://www.degruyter.com/document/doi/10.1515/9783110766561/html?lang=en",
    description:
      "Nigeria's democracy since independence has faced challenges, with electoral violence by political elites undermining stability and prompting military coups. Nigeria's 2019 Democratic Experience examines these issues in depth.",
    img: "/democratic%20experience.jpg",
    fit: "contain",
  },
];

export default function Publications() {

  const {theme} = useTheme()
  return (
    <section id="projects" className="w-full py-20 border-b-[1px] border-b-[var(--border-color)]">
      <div className="flex justify-center items-center text-center">
        <div className="flex flex-col gap-4 font-titleFont mb-14">
          <h3 className="text-sm uppercase font-light text-designColor tracking-wide">
            VISIT MY WIKIPEDIA FOR MORE INFORMATION
          </h3>
          <h1 className="text-4xl md:text-5xl text-[var(--heading-color)] font-bold capitalize">
            Publications
          </h1>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        {publications.map((pub) => (
          <div
            key={pub.title}
            className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-2xl flex flex-col bg-gradient-to-r from-[var(--panel-from)] to-[var(--panel-to)] group hover:from-[var(--panel-hover-from)] hover:to-[var(--panel-hover-to)] transition-colors duration-1000"
          >
            <div className="w-full h-[80%] overflow-hidden rounded-lg">
              <img
                className={`w-full h-60 group-hover:scale-110 duration-300 cursor-pointer ${
                  pub.fit === "cover" ? "object-cover" : "object-contain"
                }`}
                src={pub.img}
                alt={pub.title}
              />
            </div>
            <div className="w-full mt-5 flex flex-col gap-6">
              <div>
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-base uppercase text-designColor font-normal">{pub.title}</h3>
                  <div className="flex gap-2">
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg w-10 h-10 rounded-sm inline-flex justify-center items-center text-[var(--muted-color)] hover:text-designColor duration-300 cursor-pointer flex-shrink-0"
                      style={{ background: theme === "dark" ? "var(--icon-bg)" : "#ede8e8de" }}
                    >
                      <FaGlobeAfrica />
                    </a>
                  </div>
                </div>
                <p className="text-sm tracking-wide mt-3 hover:text-lightText duration-300 text-[var(--muted-color)]">
                  {pub.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
