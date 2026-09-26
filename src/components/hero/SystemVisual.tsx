"use client";

import React, { useState } from "react";
import {
  Globe,
  MessageSquare,
  Smartphone,
  Zap,
  ArrowRight,
  CheckCircle2,
  Send,
  Sparkles,
  Shield,
  Layers,
} from "lucide-react";

interface ShowcaseMode {
  id: string;
  badge: string;
  label: string;
  title: string;
  description: string;
  featurePill: string;
}

const MODES: ShowcaseMode[] = [
  {
    id: "website",
    badge: "01 // CORE SERVICE",
    label: "Business Website",
    title: "Fast, Responsive Business Website",
    description: "Built from scratch with modern technology. Perfectly formatted on mobile, tablet, and desktop.",
    featurePill: "Sub-Second Load Time • SEO Ready",
  },
  {
    id: "chatbot",
    badge: "02 // SMART FEATURE",
    label: "AI Chatbot",
    title: "24/7 Website AI Assistant",
    description: "Answers customer questions instantly with verified information about your services and pricing.",
    featurePill: "Trained on Your Real FAQs",
  },
  {
    id: "whatsapp",
    badge: "03 // INSTANT CONTACT",
    label: "WhatsApp Leads",
    title: "Direct WhatsApp Redirection",
    description: "One-click chat button allows visitors to reach you instantly on WhatsApp without filling long forms.",
    featurePill: "Zero Missed Customers",
  },
  {
    id: "automation",
    badge: "04 // TIME SAVER",
    label: "Automation",
    title: "Automated Lead Routing",
    description: "New website inquiries automatically trigger instant email notifications and sync to your calendar.",
    featurePill: "Instant Team Notification",
  },
];

export function SystemVisual() {
  const [activeTab, setActiveTab] = useState<string>("website");
  const [chatMessage, setChatMessage] = useState<string>("");
  const [chatHistory, setChatHistory] = useState<{ sender: "user" | "bot"; text: string }[]>([
    {
      sender: "bot",
      text: "Hello! Welcome to Nexora. Looking for a new business website, redesign, or AI chatbot?",
    },
  ]);

  const handleSendMessage = (textToSend?: string) => {
    const text = textToSend || chatMessage;
    if (!text.trim()) return;

    const newHistory = [...chatHistory, { sender: "user" as const, text }];
    setChatHistory(newHistory);
    setChatMessage("");

    setTimeout(() => {
      let reply = "We build custom, high-speed websites tailored specifically to your business needs!";
      if (text.toLowerCase().includes("cost") || text.toLowerCase().includes("price") || text.toLowerCase().includes("quote")) {
        reply = "We offer transparent custom quotes based on your exact requirements. Fill out our consultation form below to get a clear scope!";
      } else if (text.toLowerCase().includes("time") || text.toLowerCase().includes("fast") || text.toLowerCase().includes("long")) {
        reply = "Most standard business websites launch within 7–14 days, fully tested across all mobile devices.";
      } else if (text.toLowerCase().includes("whatsapp")) {
        reply = "Yes! We can connect a direct WhatsApp button so leads message you immediately.";
      }
      setChatHistory((prev) => [...prev, { sender: "bot" as const, text: reply }]);
    }, 450);
  };

  const activeMode = MODES.find((m) => m.id === activeTab) || MODES[0];

  return (
    <div className="w-full rounded-2xl border border-white/12 bg-[#0C0F17] shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden">
      {/* Browser Window Chrome */}
      <div className="px-4 py-3 bg-[#080A10] border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          <span className="ml-2 text-[11px] font-mono text-slate-400 bg-white/[0.04] px-3 py-1 rounded-md border border-white/5 truncate max-w-[200px] sm:max-w-none">
            nexora.live/your-business-preview
          </span>
        </div>
        <div className="flex items-center gap-2 text-[10px] font-mono text-emerald-400">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="hidden sm:inline">Production Ready</span>
        </div>
      </div>

      {/* Interactive Mode Dock */}
      <div className="p-3 bg-[#0F131F]/90 border-b border-white/8 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
        {MODES.map((mode) => {
          const isActive = mode.id === activeTab;
          return (
            <button
              key={mode.id}
              onClick={() => setActiveTab(mode.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-150 cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                isActive
                  ? "bg-blue-600 text-white shadow-[0_0_12px_rgba(59,130,246,0.4)]"
                  : "text-slate-400 hover:text-white hover:bg-white/[0.05]"
              }`}
            >
              {mode.id === "website" && <Globe className="w-3 h-3" />}
              {mode.id === "chatbot" && <MessageSquare className="w-3 h-3" />}
              {mode.id === "whatsapp" && <Smartphone className="w-3 h-3" />}
              {mode.id === "automation" && <Zap className="w-3 h-3" />}
              <span>{mode.label}</span>
            </button>
          );
        })}
      </div>

      {/* Screen Canvas Area */}
      <div className="p-5 sm:p-6 min-h-[380px] flex flex-col justify-between bg-gradient-to-b from-[#0C0F17] to-[#07090E]">
        {/* Dynamic Interactive View according to activeTab */}
        {activeTab === "website" && (
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/8">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-blue-400 block font-medium">
                  {activeMode.badge}
                </span>
                <h4 className="text-base font-bold text-white tracking-tight mt-0.5">
                  {activeMode.title}
                </h4>
              </div>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                99/100 Mobile Speed
              </span>
            </div>

            {/* Simulated Live Website Card */}
            <div className="rounded-xl border border-white/10 bg-[#121622] p-4 space-y-3 shadow-inner">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-white tracking-wide">Apex Solutions</span>
                <div className="flex gap-2 text-[10px] font-mono text-slate-400">
                  <span>Home</span>
                  <span>Services</span>
                  <span className="text-blue-400">Contact</span>
                </div>
              </div>
              <div className="pt-2">
                <div className="text-xs font-bold text-white">Commercial Contracting &amp; Renovations</div>
                <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
                  Licensed commercial contractors delivering projects on time and within budget.
                </p>
              </div>
              <div className="pt-2 flex flex-wrap gap-2">
                <div className="px-2.5 py-1 rounded bg-blue-500/20 text-blue-300 text-[10px] font-mono border border-blue-500/30">
                  ✓ Instant Quote Request Form
                </div>
                <div className="px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-mono border border-emerald-500/30">
                  ✓ Direct WhatsApp Chat
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-1 text-xs">
              <div className="p-3 rounded-lg border border-white/8 bg-white/[0.02]">
                <span className="text-[10px] font-mono text-slate-400 block">Mobile Responsive</span>
                <span className="text-xs font-medium text-slate-200 mt-0.5 block">Formatted for all phones</span>
              </div>
              <div className="p-3 rounded-lg border border-white/8 bg-white/[0.02]">
                <span className="text-[10px] font-mono text-slate-400 block">Code Ownership</span>
                <span className="text-xs font-medium text-slate-200 mt-0.5 block">100% Client Owned</span>
              </div>
            </div>
          </div>
        )}

        {activeTab === "chatbot" && (
          <div className="space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-white/8">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-blue-400 block font-medium">
                  {activeMode.badge}
                </span>
                <h4 className="text-base font-bold text-white tracking-tight mt-0.5">
                  Live Interactive Chat Test
                </h4>
              </div>
              <span className="text-[10px] font-mono text-blue-400 bg-blue-500/10 border border-blue-500/30 px-2 py-0.5 rounded-full">
                Try it below
              </span>
            </div>

            {/* Chat Box */}
            <div className="rounded-xl border border-white/10 bg-[#121622] p-3 space-y-2.5 h-[190px] overflow-y-auto text-xs">
              {chatHistory.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-xl px-3 py-2 leading-relaxed ${
                      msg.sender === "user"
                        ? "bg-blue-600 text-white font-medium shadow-sm"
                        : "bg-surface-3 text-slate-200 border border-white/8"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Prompts */}
            <div className="flex gap-1.5 overflow-x-auto pb-1">
              <button
                onClick={() => handleSendMessage("How fast can you build my website?")}
                className="text-[10px] font-mono px-2 py-1 rounded bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-colors whitespace-nowrap cursor-pointer"
              >
                Turnaround time?
              </button>
              <button
                onClick={() => handleSendMessage("How much does a website cost?")}
                className="text-[10px] font-mono px-2 py-1 rounded bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-colors whitespace-nowrap cursor-pointer"
              >
                Pricing info?
              </button>
              <button
                onClick={() => handleSendMessage("Can you add a WhatsApp chat button?")}
                className="text-[10px] font-mono px-2 py-1 rounded bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-colors whitespace-nowrap cursor-pointer"
              >
                WhatsApp integration?
              </button>
            </div>

            {/* Chat Input */}
            <div className="flex gap-2">
              <input
                type="text"
                value={chatMessage}
                onChange={(e) => setChatMessage(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Ask a question..."
                className="flex-1 bg-surface-2 border border-white/15 rounded-lg px-3 py-1.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500"
              />
              <button
                onClick={() => handleSendMessage()}
                className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-medium cursor-pointer transition-colors"
                aria-label="Send message"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {activeTab === "whatsapp" && (
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/8">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 block font-medium">
                  {activeMode.badge}
                </span>
                <h4 className="text-base font-bold text-white tracking-tight mt-0.5">
                  Direct WhatsApp Redirection
                </h4>
              </div>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                Instant Chat
              </span>
            </div>

            <div className="rounded-xl border border-emerald-500/25 bg-[#0e1f18] p-5 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">One-Tap Customer Connection</div>
                  <div className="text-xs text-emerald-300/80">Opens WhatsApp directly on your client&apos;s phone</div>
                </div>
              </div>

              <div className="p-3.5 rounded-lg bg-black/30 border border-emerald-500/20 text-xs text-slate-300 font-mono space-y-1">
                <div className="text-emerald-400 font-semibold">Pre-Filled Client Message:</div>
                <div className="text-slate-200">
                  &ldquo;Hi! I saw your website and would like to get a quote for a new project.&rdquo;
                </div>
              </div>

              <div className="flex items-center justify-between pt-1 text-xs text-slate-400">
                <span>✓ Works on all mobile devices</span>
                <span>✓ Zero app download needed</span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Customers who hate filling long contact forms can reach you in one tap. You receive the inquiry directly on your phone with zero delay.
            </p>
          </div>
        )}

        {activeTab === "automation" && (
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/8">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-blue-400 block font-medium">
                  {activeMode.badge}
                </span>
                <h4 className="text-base font-bold text-white tracking-tight mt-0.5">
                  Automated Inquiry Routing
                </h4>
              </div>
              <span className="text-[10px] font-mono text-blue-400 bg-blue-500/10 border border-blue-500/30 px-2 py-0.5 rounded-full">
                Hands-Free
              </span>
            </div>

            <div className="space-y-2.5">
              <div className="p-3.5 rounded-xl border border-white/10 bg-[#121622] flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400 text-xs font-mono">
                  01
                </div>
                <div className="flex-1">
                  <div className="text-xs font-semibold text-white">Visitor Fills Quote Form</div>
                  <div className="text-[11px] text-slate-400">Collects name, phone, budget, and project details</div>
                </div>
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              </div>

              <div className="p-3.5 rounded-xl border border-blue-500/30 bg-blue-950/20 flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-blue-500/30 border border-blue-500/50 flex items-center justify-center text-blue-300 text-xs font-mono">
                  02
                </div>
                <div className="flex-1">
                  <div className="text-xs font-semibold text-white">Instant Alert Sent to You</div>
                  <div className="text-[11px] text-slate-300">Delivered straight to your WhatsApp, Telegram, or Email</div>
                </div>
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              </div>

              <div className="p-3.5 rounded-xl border border-white/10 bg-[#121622] flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400 text-xs font-mono">
                  03
                </div>
                <div className="flex-1">
                  <div className="text-xs font-semibold text-white">Automatic Confirmation to Client</div>
                  <div className="text-[11px] text-slate-400">Reassures the client that their request was received</div>
                </div>
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              </div>
            </div>
          </div>
        )}

        {/* Footer Pill */}
        <div className="pt-4 border-t border-white/8 flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-1.5 text-slate-300">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>{activeMode.featurePill}</span>
          </div>
          <a
            href="#consultation"
            className="text-white hover:text-blue-400 font-medium inline-flex items-center gap-1 transition-colors"
          >
            <span>Get this for your business</span>
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
}
