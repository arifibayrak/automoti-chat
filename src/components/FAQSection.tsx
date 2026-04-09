"use client";

import { useState } from "react";
import { PlusIcon, MinusIcon } from "@/components/icons";

const faqs = [
  {
    question: "How does Automoti work?",
    answer:
      "Automoti continuously scans 200+ sources — dealerships, major marketplaces, and private seller platforms — and aggregates all listings into a single, searchable feed. Enter your search criteria once and we handle the rest, surfacing new matches the moment they appear.",
  },
  {
    question: "Is Automoti free to use?",
    answer:
      "Yes. Basic search and aggregation will be free. We'll offer a premium tier with advanced filters, price alerts, history reports, and direct seller messaging tools. Waitlist members get extended free access when we launch.",
  },
  {
    question: "When will Automoti launch?",
    answer:
      "We're in the final stages of development and plan to launch publicly soon. Join the waitlist to be among the first to get access — waitlist members are onboarded before the general public.",
  },
  {
    question: "Do you cover all car types?",
    answer:
      "We cover new and used cars, electric vehicles, vans, and SUVs. At launch we'll focus on the top markets. More vehicle types and regions will follow based on demand from our waitlist.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function handleToggle(index: number) {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <section id="faq" className="bg-[#080808] py-32">
      <div className="max-w-[1360px] mx-auto px-10">
        <div className="mb-16">
          <h2 className="font-['GesturaHeadline'] text-5xl font-normal leading-tight tracking-[-0.96px] text-white mb-4">
            Frequently asked questions
          </h2>
          <p className="text-base text-white/50 leading-relaxed max-w-md font-['Inter']">
            Answers to the most common questions about Automoti.
          </p>
        </div>

        <div className="space-y-0">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="border-b border-white/10">
                <button
                  type="button"
                  onClick={() => handleToggle(index)}
                  className="w-full flex items-center justify-between py-5 text-left cursor-pointer hover:opacity-70 transition-opacity"
                >
                  <span className="text-base font-medium text-white font-['Inter']">
                    {faq.question}
                  </span>
                  <span className="text-white/40 flex-shrink-0 ml-4">
                    {isOpen ? (
                      <MinusIcon className="w-5 h-5" />
                    ) : (
                      <PlusIcon className="w-5 h-5" />
                    )}
                  </span>
                </button>
                {isOpen && (
                  <div className="pb-5 text-sm leading-relaxed text-white/60 max-w-2xl font-['Inter']">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
