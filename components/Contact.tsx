"use client";

import { useState } from "react";
import { FaFacebookF, FaWikipediaW, FaLinkedinIn } from "react-icons/fa";
import { useTheme } from "./useTheme";

const socialLinks = [
  { icon: FaFacebookF, href: "https://www.facebook.com/ProfessorEgodiUchendu/", label: "Facebook" },
  { icon: FaWikipediaW, href: "https://de.wikipedia.org/wiki/Egodi_Uchendu", label: "Wikipedia" },
  { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/egodi-uchendu-73a41818/", label: "LinkedIn" },
];

export default function Contact() {
  const { theme } = useTheme();
  const [form, setForm] = useState({ name: "", phone: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", phone: "", email: "", subject: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="w-full py-20 border-b-[1px] border-b-[var(--border-color)]">
      <div className="flex justify-center items-center text-center">
        <div className="flex flex-col gap-4 font-titleFont mb-14">
          <h3 className="text-sm uppercase font-light text-designColor tracking-wide">CONTACT</h3>
          <h1 className="text-4xl md:text-5xl text-[var(--heading-color)] font-bold capitalize">
            Connect With Me
          </h1>
        </div>
      </div>

      <div className="w-full">
        <div className="w-full h-auto flex flex-col lgl:flex-row justify-between gap-8 lgl:gap-0">
          <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[var(--panel-from)] to-[var(--panel-to)] p-4 lgl:p-8 rounded-lg shadow-2xl flex flex-col gap-8 justify-center">
            <img
              className="w-full h-64 object-cover rounded-lg mb-2"
              src="https://egodiuchendu.org/static/media/contactImg.8ddfbfd11798f881db54.png"
              alt="contactImg"
            />
            <div className="flex flex-col gap-4">
              <h3 className="text-3xl font-bold text-[var(--contrast-strong)]">Egodi Uchendu</h3>
              <p className="text-lg font-normal text-[var(--muted-color)]">Professor</p>
              <p className="text-base text-[var(--muted-color)] tracking-wide">
                Professor Egodi Uchendu, a distinguished scholar at the University of Nigeria, Nsukka, is
                renowned for her groundbreaking work in women&apos;s history, masculinities, and conflict
                studies in Eastern Nigeria, supported by prestigious grants and accolades, and her
                influential roles in academic and policy circles globally.
              </p>
              <p className="text-base text-[var(--muted-color)] flex items-center gap-2">
                Phone: <span className="text-lightText">+234 8039617898</span>
              </p>
              <p className="text-base text-[var(--muted-color)] flex items-center gap-2">
                Email: <span className="text-lightText">egodi.uchendu@unn.edu.ng</span>
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-base uppercase font-titleFont mb-4">Find me on</h2>
              <div className="flex gap-4">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="bannerIcon"
                    style={{ background: theme === "dark" ? "rgb(20 21 24)" : "#ede8e8ba" }}
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full lgl:w-[60%] h-full py-10 bg-gradient-to-r from-[var(--panel-from)] to-[var(--panel-to)] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-2xl">
            {sent ? (
              <div className="flex-1 flex flex-col items-center justify-center text-center py-16">
                <h3 className="text-2xl font-bold text-lightText mb-2">Message Sent!</h3>
                <p className="text-[var(--muted-color)] text-base">
                  Thank you for reaching out — I&apos;ll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5">
                <div className="w-full flex flex-col lgl:flex-row gap-10">
                  <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                    <p className="text-sm text-[var(--muted-color)] uppercase tracking-wide">Your name</p>
                    <input
                      className="contactInput"
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                    <p className="text-sm text-[var(--muted-color)] uppercase tracking-wide">Phone Number</p>
                    <input
                      className="contactInput"
                      type="text"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <p className="text-sm text-[var(--muted-color)] uppercase tracking-wide">Email</p>
                  <input
                    className="contactInput"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <p className="text-sm text-[var(--muted-color)] uppercase tracking-wide">Subject</p>
                  <input
                    className="contactInput"
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <p className="text-sm text-[var(--muted-color)] uppercase tracking-wide">Message</p>
                  <textarea
                    className="contactTextArea"
                    cols={30}
                    rows={8}
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="w-full">
                  <button
                    type="submit"
                    className="w-full h-12 rounded-lg text-base text-[var(--muted-color)] tracking-wider uppercase hover:text-[var(--contrast-strong)] duration-300 hover:border-[1px] hover:border-designColor border-transparent"
                    style={{ background: theme === "dark" ? "rgb(20 21 24)" : "#ede8e8ba" }}
                  >
                    Send Message
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
