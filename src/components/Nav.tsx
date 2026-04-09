import { AutomotiIcon } from "@/components/icons";

const navLinks = [
  { label: "How it works", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
  { label: "Try AI Search", href: "/chat" },
];

export function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-[76px] bg-transparent flex items-center">
      <div className="max-w-[1440px] mx-auto px-10 flex items-center justify-between w-full">
        <a href="/" className="flex items-center gap-2">
          <AutomotiIcon className="w-6 h-6 text-white" />
          <span className="text-white text-base font-medium font-['Inter']">Automoti</span>
        </a>

        <nav className="hidden md:flex items-center gap-0">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white text-sm font-medium px-3 py-2 hover:opacity-70 transition-opacity font-['Inter']"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="/chat"
          className="bg-white/90 text-[#1C1D1F] text-sm font-medium px-4 py-2 rounded-full hover:bg-white transition font-['Inter']"
        >
          Try AI Search
        </a>
      </div>
    </nav>
  );
}
