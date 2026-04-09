"use client";

import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { useState, useRef, useEffect } from "react";
import { CarCard } from "@/components/CarCard";
import type { RecommendationResult } from "@/lib/recommendation/types";
import type { AutomotiUIMessage } from "@/lib/recommendation/ui-types";

const STARTER_PROMPTS = [
  "Family SUV under £30k, two kids",
  "EV commuter, drive into London daily",
  "Dog-friendly estate, motorway miles",
  "First car, low insurance, automatic",
];

const HOW_IT_WORKS = [
  {
    number: "01",
    heading: "Tell me what you need",
    description: "Budget, seats, how you drive. I'll ask the right questions.",
    visual: (
      <div className="flex flex-col gap-2 w-full">
        {["Under £20k", "5 seats", "Family use", "Petrol or hybrid"].map((tag, i) => (
          <div key={tag} className="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-2" style={{ opacity: 1 - i * 0.15 }}>
            <div className="w-1.5 h-1.5 rounded-full bg-[#d4a847]/60 flex-shrink-0" />
            <span className="text-white/60 text-xs font-['Inter']">{tag}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    number: "02",
    heading: "I search 1,000 listings",
    description: "Scored by match quality, price value, and your profile.",
    visual: (
      <div className="flex flex-col gap-2 w-full">
        {[
          { label: "Match", bar: 92 },
          { label: "Value", bar: 78 },
          { label: "Eco", bar: 65 },
        ].map(({ label, bar }) => (
          <div key={label} className="flex items-center gap-3">
            <span className="text-white/30 text-xs font-['Inter'] w-10 flex-shrink-0">{label}</span>
            <div className="flex-1 h-1.5 rounded-full bg-white/8 overflow-hidden">
              <div className="h-full rounded-full bg-[#d4a847]" style={{ width: `${bar}%` }} />
            </div>
            <span className="text-white/40 text-xs font-['Inter'] tabular-nums w-8 text-right">{bar}%</span>
          </div>
        ))}
        <div className="mt-1 bg-[#d4a847]/10 border border-[#d4a847]/20 rounded-lg px-3 py-2">
          <span className="text-[#d4a847] text-xs font-['Inter'] font-medium">5 top matches found</span>
        </div>
      </div>
    ),
  },
  {
    number: "03",
    heading: "See your results",
    description: "Real listings with photos, prices, and marketplace links.",
    visual: (
      <div className="flex flex-col gap-2 w-full">
        <div className="bg-white/5 rounded-xl overflow-hidden">
          <div className="h-16 bg-white/5 flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="7" width="18" height="12" rx="2" stroke="#d4a847" strokeWidth="1.3" />
              <path d="M7 7V5a2 2 0 014 0v2M13 7V5a2 2 0 014 0v2" stroke="#d4a847" strokeWidth="1.3" />
            </svg>
          </div>
          <div className="px-3 py-2.5 flex items-center justify-between">
            <div>
              <p className="text-white/80 text-xs font-medium font-['Inter']">2021 Toyota RAV4</p>
              <p className="text-white/35 text-xs font-['Inter']">28k mi · Hybrid</p>
            </div>
            <span className="text-white text-xs font-semibold font-['Inter']">£24,500</span>
          </div>
        </div>
        <div className="flex items-center gap-1.5 bg-green-500/10 border border-green-500/20 rounded-lg px-3 py-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
          <span className="text-green-400 text-xs font-['Inter']">Great deal</span>
        </div>
      </div>
    ),
  },
];

function ThinkingDots() {
  return (
    <div className="flex items-center gap-1 px-4 py-3">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="w-1.5 h-1.5 rounded-full bg-white/30 animate-bounce"
          style={{ animationDelay: `${i * 0.15}s`, animationDuration: "0.9s" }}
        />
      ))}
    </div>
  );
}

function stripHiddenTags(text: string): string {
  return text
    // Remove complete tags
    .replace(/<profile>[\s\S]*?<\/profile>/gi, "")
    .replace(/<suggestions>[\s\S]*?<\/suggestions>/gi, "")
    // Remove incomplete tags still streaming in (cut everything from the opening tag onward)
    .replace(/<profile>[\s\S]*/gi, "")
    .replace(/<suggestions>[\s\S]*/gi, "")
    .trim();
}

export function ChatPage() {
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  const { messages, sendMessage, status } =
    useChat<AutomotiUIMessage>({
      transport: new DefaultChatTransport({ api: "/api/chat" }),
    });

  const isLoading = status === "submitted" || status === "streaming";

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  function submit(text: string) {
    const trimmed = text.trim();
    if (!trimmed || isLoading) return;
    sendMessage({ text: trimmed });
    setInput("");
  }

  // Get the latest suggestion chips (from the last assistant message)
  const lastAssistantMessage = [...messages].reverse().find((m) => m.role === "assistant");
  const latestSuggestions = lastAssistantMessage?.parts
    .filter((p) => p.type === "data-suggestions")
    .flatMap((p) => p.data as string[]) ?? [];

  return (
    <div className="flex flex-col h-screen bg-[#080808]">
      {/* Nav bar */}
      <header className="flex-shrink-0 h-14 border-b border-white/8 flex items-center px-6 gap-3">
        <a href="/" className="text-white/40 hover:text-white transition-colors">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
        <div className="w-px h-4 bg-white/10" />
        <span className="text-white text-sm font-medium font-['Inter']">Automoti AI</span>
        <span className="ml-auto px-2 py-0.5 rounded-full bg-[#d4a847]/15 text-[#d4a847] text-xs font-medium font-['Inter']">
          AI Search
        </span>
      </header>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-6">
        {/* Empty state */}
        {messages.length === 0 && (
          <div className="max-w-2xl mx-auto px-0 pt-6 pb-4">
            {/* Title */}
            <div className="text-center mb-8">
              <h2 className="text-white text-2xl font-['GesturaHeadline'] mb-2">
                Find your perfect car
              </h2>
              <p className="text-white/40 text-sm font-['Inter']">
                1,000 UK listings searched in seconds
              </p>
            </div>

            {/* Starter prompts */}
            <div className="flex flex-wrap justify-center gap-2">
              {STARTER_PROMPTS.map((p) => (
                <button
                  key={p}
                  onClick={() => submit(p)}
                  className="px-3 py-2 rounded-full border border-white/10 text-white/55 text-xs font-['Inter'] hover:border-white/25 hover:text-white/80 transition-all"
                >
                  {p}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Message list */}
        <div className="max-w-2xl mx-auto space-y-5">
          {messages.map((message) => {
            const textParts = message.parts.filter((p) => p.type === "text");
            const recParts = message.parts.filter((p) => p.type === "data-recommendations");

            const displayText = stripHiddenTags(
              textParts.map((p) => p.text).join("")
            );

            const isUser = message.role === "user";

            return (
              <div key={message.id} className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[85%] space-y-4 ${isUser ? "items-end flex flex-col" : ""}`}>
                  {/* Bubble */}
                  {displayText && (
                    <div
                      className={`px-4 py-3 rounded-2xl text-sm font-['Inter'] leading-relaxed whitespace-pre-wrap ${
                        isUser
                          ? "bg-white text-[#1C1D1F] rounded-br-sm"
                          : "bg-[#1a1a1a] text-white/85 rounded-bl-sm"
                      }`}
                    >
                      {displayText}
                    </div>
                  )}

                  {/* Car recommendation cards */}
                  {recParts.map((part, i) => {
                    const result = part.data as RecommendationResult;
                    return (
                      <div key={i} className="space-y-3 w-full">
                        <p className="text-white/30 text-xs font-['Inter'] px-1">
                          {result.archetypeLabel} · {result.totalScored} cars matched
                        </p>
                        {result.recommendations.map((rec, j) => (
                          <CarCard key={j} rec={rec} />
                        ))}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}

          {/* Thinking indicator */}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-[#1a1a1a] rounded-2xl rounded-bl-sm">
                <ThinkingDots />
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>
      </div>

      {/* Quick-reply chips — shown when not loading and suggestions exist */}
      {!isLoading && latestSuggestions.length > 0 && (
        <div className="flex-shrink-0 px-4 pb-2">
          <div className="max-w-2xl mx-auto flex flex-wrap gap-2">
            {latestSuggestions.map((chip) => (
              <button
                key={chip}
                onClick={() => submit(chip)}
                className="px-3 py-1.5 rounded-full border border-[#d4a847]/30 text-[#d4a847]/80 text-xs font-['Inter'] hover:border-[#d4a847]/60 hover:text-[#d4a847] transition-all"
              >
                {chip}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input bar */}
      <div className="flex-shrink-0 border-t border-white/8 px-4 py-4">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            submit(input);
          }}
          className="max-w-2xl mx-auto flex items-end gap-3"
        >
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                submit(input);
              }
            }}
            placeholder="Tell me what you're looking for…"
            rows={1}
            disabled={isLoading}
            className="flex-1 resize-none bg-[#1a1a1a] border border-white/10 rounded-2xl px-4 py-3 text-sm text-white placeholder-white/30 font-['Inter'] outline-none focus:border-white/25 transition-colors disabled:opacity-50"
            style={{ maxHeight: "120px" }}
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#d4a847] flex items-center justify-center hover:opacity-90 transition-opacity disabled:opacity-30"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 13V3M8 3L4 7M8 3L12 7" stroke="#1C1D1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </form>
        <p className="text-center text-white/20 text-xs font-['Inter'] mt-3">
          Searching 1,000 UK car listings · Prices from AutoTrader, CarGurus & more
        </p>
      </div>
    </div>
  );
}
