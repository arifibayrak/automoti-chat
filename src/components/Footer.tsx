import Link from "next/link";
import { AutomotiIcon } from "@/components/icons";

export function Footer() {
  return (
    <footer data-nav-theme="light" className="bg-[#F9F8F6] border-t border-[#1C1D1F]/10">
      <div className="max-w-[1360px] mx-auto px-10 py-20">
        {/* Top: Logo + columns */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-16">
          {/* Logo */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <AutomotiIcon className="w-5 h-5 text-[#1C1D1F]" />
              <span className="text-sm font-medium text-[#1C1D1F] font-['Inter']">
                Automoti
              </span>
            </Link>
          </div>

          {/* Product column */}
          <div>
            <p className="text-xs font-medium text-[#1C1D1F]/40 uppercase tracking-wide mb-4 font-['Inter']">
              Product
            </p>
            <a
              href="#"
              className="block text-sm font-['Inter'] text-[#1C1D1F] hover:text-[#1C1D1F]/60 transition mb-2"
            >
              Browse cars
            </a>
            <a
              href="#"
              className="block text-sm font-['Inter'] text-[#1C1D1F] hover:text-[#1C1D1F]/60 transition mb-2"
            >
              Sell your car
            </a>
          </div>

          {/* Company column */}
          <div>
            <p className="text-xs font-medium text-[#1C1D1F]/40 uppercase tracking-wide mb-4 font-['Inter']">
              Company
            </p>
            <a
              href="#"
              className="block text-sm font-['Inter'] text-[#1C1D1F] hover:text-[#1C1D1F]/60 transition mb-2"
            >
              About
            </a>
            <a
              href="#"
              className="block text-sm font-['Inter'] text-[#1C1D1F] hover:text-[#1C1D1F]/60 transition mb-2"
            >
              Blog
            </a>
          </div>

          {/* Connect column */}
          <div>
            <p className="text-xs font-medium text-[#1C1D1F]/40 uppercase tracking-wide mb-4 font-['Inter']">
              Connect
            </p>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm font-['Inter'] text-[#1C1D1F] hover:text-[#1C1D1F]/60 transition mb-2"
            >
              Twitter / X
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm font-['Inter'] text-[#1C1D1F] hover:text-[#1C1D1F]/60 transition mb-2"
            >
              LinkedIn
            </a>
            <a
              href="mailto:hello@automoti.com"
              className="block text-sm font-['Inter'] text-[#1C1D1F] hover:text-[#1C1D1F]/60 transition mb-2"
            >
              hello@automoti.com
            </a>
          </div>

          {/* Legal column */}
          <div>
            <p className="text-xs font-medium text-[#1C1D1F]/40 uppercase tracking-wide mb-4 font-['Inter']">
              Legal
            </p>
            <a
              href="#"
              className="block text-sm font-['Inter'] text-[#1C1D1F] hover:text-[#1C1D1F]/60 transition mb-2"
            >
              Terms
            </a>
            <a
              href="#"
              className="block text-sm font-['Inter'] text-[#1C1D1F] hover:text-[#1C1D1F]/60 transition mb-2"
            >
              Privacy
            </a>
          </div>
        </div>

        {/* Bottom: Copyright */}
        <div className="border-t border-[#1C1D1F]/10 pt-6">
          <p className="text-xs text-[#1C1D1F]/40 font-['Inter']">
            © 2026 Automoti.
          </p>
        </div>
      </div>
    </footer>
  );
}
