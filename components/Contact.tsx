"use client";

import { useEffect, useRef, useState } from "react";
import { Phone, Mail, Send, CheckCircle } from "lucide-react";
import { FaTwitter, FaLinkedinIn, FaFacebook, FaWikipediaW } from "react-icons/fa";

const socialLinks = [
  { icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
  { icon: FaLinkedinIn, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: FaFacebook, href: "https://facebook.com", label: "Facebook" },
  { icon: FaWikipediaW, href: "https://en.wikipedia.org/wiki/Egodi_Uchendu", label: "Wikipedia" },
];

export default function Contact() {
  const [headerVisible, setHeaderVisible] = useState(false);
  const [bodyVisible, setBodyVisible] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", subject: "", message: "" });

  const headerRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const o1 = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setHeaderVisible(true); o1.disconnect(); } }, { threshold: 0.2 });
    const o2 = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setBodyVisible(true); o2.disconnect(); } }, { threshold: 0.1 });
    if (headerRef.current) o1.observe(headerRef.current);
    if (bodyRef.current) o2.observe(bodyRef.current);
    return () => { o1.disconnect(); o2.disconnect(); };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 1500));
    setSending(false);
    setSubmitted(true);
    setForm({ name: "", phone: "", email: "", subject: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const inputClass =
    "w-full px-4 py-3 bg-[#1a1a1a] border border-[#2e2e2e] text-white text-sm placeholder-[#444] focus:outline-none focus:border-[#d4a020] focus:ring-1 focus:ring-[#d4a020]/30 transition-all duration-200 rounded-none";

  return (
    <section id="contact" className="py-24 bg-[#1a1a1a]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-14 transition-all duration-700 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-[#555] text-xs uppercase tracking-[0.3em] mb-3 font-semibold">Contact</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#d4a020] uppercase tracking-wider">
            Connect With Me
          </h2>
          <div className="mt-4 w-12 h-0.5 bg-[#d4a020] mx-auto" />
        </div>

        <div
          ref={bodyRef}
          className={`grid grid-cols-1 lg:grid-cols-5 gap-12 transition-all duration-700 ${
            bodyVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Info panel */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <div className="w-16 h-16 bg-[#d4a020] flex items-center justify-center mb-5">
                <span className="text-2xl font-bold text-[#1a1a1a]" style={{ fontFamily: "var(--font-playfair)" }}>
                  EU
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white" style={{ fontFamily: "var(--font-playfair)" }}>
                Egodi Uchendu
              </h3>
              <p className="text-[#d4a020] text-sm font-semibold mt-1 uppercase tracking-wider">Professor</p>
              <p className="text-[#666] text-sm leading-relaxed mt-4">
                Distinguished scholar at the University of Nigeria, Nsukka, renowned for groundbreaking
                work in women&apos;s history, masculinities, and conflict studies in Eastern Nigeria.
              </p>
            </div>

            {/* Contact details */}
            <div className="space-y-5">
              <a href="tel:+2348039617898" className="flex items-center gap-4 group">
                <div className="w-10 h-10 bg-[#222] border border-[#2e2e2e] flex items-center justify-center group-hover:bg-[#d4a020] group-hover:border-[#d4a020] transition-all duration-200">
                  <Phone size={16} className="text-[#d4a020] group-hover:text-[#1a1a1a] transition-colors duration-200" />
                </div>
                <div>
                  <p className="text-[#444] text-[10px] uppercase tracking-widest">Phone</p>
                  <p className="text-white text-sm font-medium mt-0.5">+234 8039617898</p>
                </div>
              </a>

              <a href="mailto:egodi.uchendu@unn.edu.ng" className="flex items-center gap-4 group">
                <div className="w-10 h-10 bg-[#222] border border-[#2e2e2e] flex items-center justify-center group-hover:bg-[#d4a020] group-hover:border-[#d4a020] transition-all duration-200">
                  <Mail size={16} className="text-[#d4a020] group-hover:text-[#1a1a1a] transition-colors duration-200" />
                </div>
                <div>
                  <p className="text-[#444] text-[10px] uppercase tracking-widest">Email</p>
                  <p className="text-white text-sm font-medium mt-0.5 break-all">egodi.uchendu@unn.edu.ng</p>
                </div>
              </a>
            </div>

            {/* Socials */}
            <div>
              <p className="text-[#444] text-[10px] uppercase tracking-widest mb-4 font-semibold">Find me on</p>
              <div className="flex gap-3">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-9 h-9 border border-[#2e2e2e] flex items-center justify-center text-[#555] hover:text-[#d4a020] hover:border-[#d4a020] transition-all duration-200"
                  >
                    <Icon size={14} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 bg-[#222] border border-[#2e2e2e] p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                <CheckCircle size={40} className="text-[#d4a020] mb-4" />
                <h4 className="text-xl font-bold text-white mb-2" style={{ fontFamily: "var(--font-playfair)" }}>
                  Message Sent!
                </h4>
                <p className="text-[#666] text-sm">Thank you for reaching out. I&apos;ll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#555] text-[10px] uppercase tracking-widest mb-2">Your Name</label>
                    <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="John Doe" className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-[#555] text-[10px] uppercase tracking-widest mb-2">Phone Number</label>
                    <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+234 000 000 0000" className={inputClass} />
                  </div>
                </div>
                <div>
                  <label className="block text-[#555] text-[10px] uppercase tracking-widest mb-2">Email</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="your@email.com" className={inputClass} />
                </div>
                <div>
                  <label className="block text-[#555] text-[10px] uppercase tracking-widest mb-2">Subject</label>
                  <input type="text" name="subject" value={form.subject} onChange={handleChange} required placeholder="How can I help you?" className={inputClass} />
                </div>
                <div>
                  <label className="block text-[#555] text-[10px] uppercase tracking-widest mb-2">Message</label>
                  <textarea name="message" value={form.message} onChange={handleChange} required rows={5} placeholder="Write your message here..." className={`${inputClass} resize-none`} />
                </div>
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full flex items-center justify-center gap-2.5 px-8 py-4 bg-[#d4a020] hover:bg-[#e8b830] disabled:bg-[#8a6a10] text-[#1a1a1a] font-bold text-xs uppercase tracking-widest transition-all duration-200 hover:-translate-y-0.5"
                >
                  {sending ? (
                    <>
                      <span className="w-4 h-4 border-2 border-[#1a1a1a]/30 border-t-[#1a1a1a] rounded-full animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send size={14} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
