const steps = [
  {
    number: "01",
    heading: "Search once, see everything",
    description: "Enter your criteria once. We scan 200+ sources so you never miss a listing.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
        <circle cx="12" cy="12" r="7" stroke="#1C1D1F" strokeWidth="1.6" />
        <path d="M17.5 17.5L23 23" stroke="#1C1D1F" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M9 12h6M12 9v6" stroke="#1C1D1F" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
    visual: (
      <div className="w-full h-full flex items-center justify-center px-6 py-5">
        <div className="w-full max-w-xs space-y-2">
          {["AutoTrader", "CarGurus", "eBay Motors", "Dealer Direct", "Facebook Marketplace"].map((src, i) => (
            <div
              key={src}
              className="flex items-center gap-3 bg-white rounded-xl px-3 py-2 shadow-sm"
              style={{ opacity: 1 - i * 0.14 }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#1C1D1F]/20 flex-shrink-0" />
              <span className="text-[#1C1D1F]/70 text-xs font-['Inter']">{src}</span>
              <div className="ml-auto w-10 h-1 rounded-full bg-[#d4a847]/40" />
            </div>
          ))}
          <div className="bg-[#1C1D1F] rounded-xl px-3 py-2 flex items-center gap-2 mt-1">
            <div className="w-1.5 h-1.5 rounded-full bg-[#d4a847]" />
            <span className="text-white text-xs font-['Inter'] font-medium">347 listings found</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    number: "02",
    heading: "Compare on your terms",
    description: "Filter by price, mileage, and seller rating across all platforms in one view.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="8" width="20" height="3" rx="1.5" fill="#1C1D1F" fillOpacity="0.15" />
        <rect x="4" y="8" width="14" height="3" rx="1.5" fill="#1C1D1F" />
        <rect x="4" y="14" width="20" height="3" rx="1.5" fill="#1C1D1F" fillOpacity="0.15" />
        <rect x="4" y="14" width="9" height="3" rx="1.5" fill="#1C1D1F" />
        <rect x="4" y="20" width="20" height="3" rx="1.5" fill="#1C1D1F" fillOpacity="0.15" />
        <rect x="4" y="20" width="17" height="3" rx="1.5" fill="#1C1D1F" />
      </svg>
    ),
    visual: (
      <div className="w-full h-full flex items-center justify-center px-6 py-5">
        <div className="w-full max-w-xs space-y-2">
          {[
            { label: "Price", val: "£18,500", bar: 72 },
            { label: "Mileage", val: "34k mi", bar: 45 },
            { label: "History", val: "9.2 / 10", bar: 92 },
            { label: "Seller", val: "4.8★", bar: 88 },
          ].map(({ label, val, bar }) => (
            <div key={label} className="bg-white rounded-xl px-3 py-2.5 shadow-sm">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[#1C1D1F]/50 text-xs font-['Inter']">{label}</span>
                <span className="text-[#1C1D1F] text-xs font-medium font-['Inter']">{val}</span>
              </div>
              <div className="h-1 rounded-full bg-[#1C1D1F]/8 overflow-hidden">
                <div className="h-full rounded-full bg-[#d4a847]" style={{ width: `${bar}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    number: "03",
    heading: "Connect and close",
    description: "Message sellers, get instant price analysis, and decide with confidence.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
        <path d="M5 8a3 3 0 013-3h12a3 3 0 013 3v8a3 3 0 01-3 3h-4l-4 4v-4H8a3 3 0 01-3-3V8z" stroke="#1C1D1F" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M10 12h8M10 15.5h5" stroke="#1C1D1F" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
    visual: (
      <div className="w-full h-full flex items-center justify-center px-6 py-5">
        <div className="w-full max-w-xs space-y-2.5">
          <div className="bg-[#1C1D1F] rounded-2xl rounded-bl-sm px-3 py-2.5 max-w-[180px]">
            <p className="text-white text-xs font-['Inter']">Is the car still available?</p>
          </div>
          <div className="bg-white rounded-2xl rounded-br-sm px-3 py-2.5 max-w-[200px] ml-auto shadow-sm">
            <p className="text-[#1C1D1F] text-xs font-['Inter']">Yes! Available for viewing this weekend.</p>
          </div>
          <div className="bg-[#d4a847]/10 border border-[#d4a847]/20 rounded-xl px-3 py-2.5 flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M8 2v4l3 2" stroke="#d4a847" strokeWidth="1.4" strokeLinecap="round" />
              <circle cx="8" cy="8" r="6" stroke="#d4a847" strokeWidth="1.4" />
            </svg>
            <span className="text-[#1C1D1F]/70 text-xs font-['Inter']">Price is <strong className="text-[#1C1D1F]">4% below</strong> market average</span>
          </div>
        </div>
      </div>
    ),
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-[#E8E3DB] py-16 md:py-28">
      <div className="max-w-[1360px] mx-auto px-5 md:px-10">
        {/* Header */}
        <div className="mb-10 md:mb-16">
          <p className="text-xs font-medium uppercase tracking-widest text-[#1C1D1F]/40 font-['Inter'] mb-3">
            How it works
          </p>
          <h2 className="font-['GesturaHeadline'] text-3xl md:text-5xl font-normal leading-tight tracking-[-0.72px] md:tracking-[-0.96px] text-[#1C1D1F] max-w-xs md:max-w-sm">
            Three steps to your perfect car.
          </h2>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-white rounded-2xl md:rounded-3xl overflow-hidden flex flex-col border border-black/[0.06] shadow-[0_2px_16px_rgba(0,0,0,0.06)]"
            >
              {/* Visual area */}
              <div className="h-44 md:h-52 bg-[#F2F1EE] flex-shrink-0">
                {step.visual}
              </div>

              {/* Text area */}
              <div className="p-5 md:p-6 flex flex-col gap-2.5">
                <div className="flex items-center gap-2.5">
                  <span className="text-xs font-medium text-[#1C1D1F]/25 font-['Inter'] tabular-nums">
                    {step.number}
                  </span>
                  <div className="w-px h-3.5 bg-[#1C1D1F]/10" />
                  <div className="opacity-60">{step.icon}</div>
                </div>
                <h3 className="font-['GesturaHeadline'] text-xl md:text-2xl font-normal leading-tight tracking-[-0.4px] text-[#1C1D1F]">
                  {step.heading}
                </h3>
                <p className="text-sm text-[#1C1D1F]/55 leading-relaxed font-['Inter']">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
