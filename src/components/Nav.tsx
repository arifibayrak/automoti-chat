"use client";

import { useEffect, useState } from "react";
import { AutomotiIcon } from "@/components/icons";

const navLinks = [
  { label: "How it works", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
  { label: "Try AI Search", href: "/chat" },
];

const NAV_HEIGHT = 76;

export function Nav() {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    function check() {
      const lightSections = document.querySelectorAll<HTMLElement>("[data-nav-theme='light']");
      let light = false;
      for (const section of lightSections) {
        const rect = section.getBoundingClientRect();
        if (rect.top < NAV_HEIGHT && rect.bottom > 0) {
          light = true;
          break;
        }
      }
      setIsLight(light);
    }

    check();
    window.addEventListener("scroll", check, { passive: true });
    return () => window.removeEventListener("scroll", check);
  }, []);

  const textClass = isLight ? "text-[#1C1D1F]" : "text-white";
  const hoverClass = isLight ? "hover:opacity-60" : "hover:opacity-70";
  const btnClass = isLight
    ? "bg-[#1C1D1F] text-white hover:bg-[#1C1D1F]/85"
    : "bg-white/90 text-[#1C1D1F] hover:bg-white";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-[76px] bg-transparent flex items-center transition-colors duration-200">
      <div className="max-w-[1440px] mx-auto px-10 flex items-center justify-between w-full">
        <a href="/" className={`flex items-center gap-2 transition-colors duration-200 ${textClass}`}>
          <AutomotiIcon className="w-6 h-6" />
          <span className="text-base font-medium font-['Inter']">Automoti</span>
        </a>

        <nav className="hidden md:flex items-center gap-0">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium px-3 py-2 transition-all duration-200 font-['Inter'] ${textClass} ${hoverClass}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="/chat"
          className={`text-sm font-medium px-4 py-2 rounded-full transition-all duration-200 font-['Inter'] ${btnClass}`}
        >
          Try AI Search
        </a>
      </div>
    </nav>
  );
}
