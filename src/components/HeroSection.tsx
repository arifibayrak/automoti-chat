export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-[#080808] overflow-hidden flex items-center">
      {/* Background image with transparency */}
      <img
        src="/images/hero-bg.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center select-none pointer-events-none"
        style={{ opacity: 0.45 }}
      />

      {/* Dark overlay so text stays legible */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, rgba(8,8,8,0.85) 35%, rgba(8,8,8,0.2) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-10 md:px-20 w-full py-32">
        <div className="max-w-[580px]">
          <h1 className="font-['GesturaHeadline'] text-[60px] leading-[60px] tracking-[-1.2px] font-normal lg:text-[66px] lg:leading-[66px] lg:tracking-[-1.32px]">
            <span className="text-white block">Every car listing,</span>
            <span className="text-white/70 block">one intelligent search.</span>
          </h1>

          <p className="text-white/60 text-base leading-relaxed tracking-[-0.16px] max-w-[480px] mt-6 font-['Inter']">
            Search every listing across dealerships, platforms, and private sellers. Find your perfect car faster.
          </p>

          <a
            href="#waitlist"
            className="mt-10 inline-block bg-white/90 text-[#1C1D1F] text-sm font-medium px-6 py-3 rounded-full hover:bg-white transition font-['Inter']"
          >
            Get early access
          </a>
        </div>
      </div>

      {/* Vignette bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, #080808)" }}
      />
    </section>
  );
}
