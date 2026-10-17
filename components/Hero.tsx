"use client";

import { FaFacebookF, FaWikipediaW, FaLinkedinIn } from "react-icons/fa";
import { useTheme } from "./useTheme";

const socialLinks = [
  { icon: FaFacebookF, href: "https://www.facebook.com/ProfessorEgodiUchendu/", label: "Facebook" },
  { icon: FaWikipediaW, href: "https://de.wikipedia.org/wiki/Egodi_Uchendu", label: "Wikipedia" },
  { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/egodi-uchendu-73a41818/", label: "LinkedIn" },
];
  

export default function Hero() {
  const { theme } = useTheme();

  return (
    <section
      id="home"
      className="w-full pt-10 pb-20 flex flex-col gap-10 xl:gap-0 lgl:flex-row items-center border-b-[1px] font-titleFont border-b-[var(--border-color)]"
    >
      <div className="w-full lgl:w-1/2 flex flex-col gap-20">
        <div className="flex flex-col gap-5">
          <h4 className="text-lg font-normal">WELCOME TO MY WORLD</h4>
          <h1 className="text-5xl font-bold text-lightText">
            Hi, I&apos;m <span className="text-designColor capitalize w-full">Egodi Uchendu</span>
          </h1>
          <h2 className="text-4xl font-bold text-lightText">
            a <span>Professional Scholar.</span>
            <span className="text-designColor cursor-blink">|</span>
          </h2>
          <p className="text-base font-bodyFont leading-8 tracking-wide text-[var(--muted-color)]">
            Professor Egodi Uchendu, a distinguished scholar at the University of Nigeria, Nsukka, is
            renowned for her groundbreaking work in women&apos;s history, masculinities, and conflict
            studies in Eastern Nigeria, supported by prestigious grants and accolades, and her
            influential roles in academic and policy circles globally.
          </p>
        </div>
        <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
          <div>
            <h2 className="text-base uppercase font-titleFont mb-4">Find me on</h2>
            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className={`bannerIcon`} style={{background:theme === "dark"? 'transparent': '#ede8e8ba' }}>
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
        <img
          className="w-[300px] h-[300px] lgl:w-[600px] lgl:h-[600px] z-10 object-cover rounded-full"
          src="https://egodiuchendu.org/static/media/bannerimg2.3603c641b808513618ad.png"
          alt="bannerImg"
        />
        <div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[600px] lgl:h-[500px] bg-gradient-to-r from-[var(--surface-from)] to-[var(--surface-to)] shadow-shadowOne flex justify-center items-center" />
      </div>
    </section>
  );
}
