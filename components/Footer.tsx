"use client";

import { ArrowUp } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const followLinks = [
  { icon: FaFacebook, href: "https://facebook.com", label: "Facebook" },
  { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
  { icon: FaLinkedinIn, href: "https://linkedin.com", label: "LinkedIn" },
];

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Publications", href: "#publications" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-[#111] border-t border-[#2e2e2e]">
      {/* Follow Me On band */}
      <div className="border-b border-[#2e2e2e] py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-center gap-6">
          <p className="text-white font-bold text-sm uppercase tracking-widest">Follow Me On</p>
          <div className="flex items-center gap-6">
            {followLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#777] hover:text-[#d4a020] transition-colors duration-200 text-sm group"
              >
                <Icon size={16} className="group-hover:scale-110 transition-transform duration-200" />
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-[#2e2e2e]">
          {/* Brand */}
          <div>
            <h3
              className="text-2xl font-bold text-white italic mb-3"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              EU
            </h3>
            <p className="text-[#555] text-sm leading-relaxed max-w-xs">
              Distinguished scholar and professor at the University of Nigeria, Nsukka —
              advancing knowledge in African history, gender studies, and conflict research.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() =>
                      document.getElementById(link.href.replace("#", ""))?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="text-[#555] text-sm hover:text-[#d4a020] transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-[#d4a020] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-5">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <span className="text-[#444] text-[10px] uppercase tracking-wider block mb-0.5">Institution</span>
                <span className="text-[#888]">University of Nigeria, Nsukka</span>
              </li>
              <li>
                <span className="text-[#444] text-[10px] uppercase tracking-wider block mb-0.5">Phone</span>
                <a href="tel:+2348039617898" className="text-[#888] hover:text-[#d4a020] transition-colors duration-200">
                  +234 8039617898
                </a>
              </li>
              <li>
                <span className="text-[#444] text-[10px] uppercase tracking-wider block mb-0.5">Email</span>
                <a
                  href="mailto:egodi.uchendu@unn.edu.ng"
                  className="text-[#888] hover:text-[#d4a020] transition-colors duration-200 break-all"
                >
                  egodi.uchendu@unn.edu.ng
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#444] text-xs">
            © 2024. All rights reserved by{" "}
            <span className="text-[#d4a020]">Egodi Uchendu</span>
          </p>
          <p className="text-[#333] text-xs">Design and Developed for Egodi Uchendu</p>
          <button
            onClick={scrollTop}
            className="flex items-center gap-2 text-xs text-[#444] hover:text-[#d4a020] transition-all duration-200 group"
          >
            Back to top
            <span className="w-7 h-7 border border-[#2e2e2e] flex items-center justify-center group-hover:border-[#d4a020] group-hover:bg-[#d4a020]/10 transition-all duration-200">
              <ArrowUp size={12} />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
