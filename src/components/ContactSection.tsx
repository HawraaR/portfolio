"use client";
import React, { useState } from "react";
import { PortfolioData } from "@/data/portfolioData";
import { Mail, Clock, Send, CheckCircle2 } from "lucide-react";
import { GithubIcon } from "./icons/GithubIcon";
import { LinkedinIcon } from "./icons/LinkedinIcon";

interface ContactSectionProps {
  contactData: PortfolioData["contact"];
}

export function ContactSection({ contactData }: ContactSectionProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  const getChannelIcon = (iconName: string) => {
    switch (iconName) {
      case "Mail":
        return <Mail className="w-4 h-4 text-[#8C3A2B]" />;
      case "Github":
        return <GithubIcon className="w-4 h-4 text-[#1C1917]" />;
      case "Linkedin":
        return <LinkedinIcon className="w-4 h-4 text-[#0A66C2]" />;
      default:
        return <Mail className="w-4 h-4 text-[#8C3A2B]" />;
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-24 border-t border-[#EAE5D9]">
      {/* Section Header */}
      <div className="max-w-2xl mb-12 space-y-3">
        <div className="inline-block px-3 py-1 rounded-full bg-[#E8EFE9] text-[#2D5A39] border border-[#C8DEC9] text-xs font-semibold tracking-wider uppercase">
          INQUIRIES & COLLABORATION
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#1C1917] tracking-tight">
          Let&apos;s Build Something Meaningful Together
        </h2>
        <p className="text-sm sm:text-base text-[#57534E] leading-relaxed">
          {contactData.subhead}
        </p>
      </div>

      {/* Grid: 7 cols form / 5 cols direct channels */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Contact Form */}
        <div className="lg:col-span-7 bg-white border border-[#EAE5D9] rounded-2xl p-6 sm:p-8 shadow-2xs">
          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#E8EFE9] text-[#2D5A39] mx-auto flex items-center justify-center border border-[#C8DEC9]">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl text-[#1C1917]">
                Message Received
              </h3>
              <p className="text-sm text-[#57534E] max-w-md mx-auto">
                Thank you for reaching out. I will review your message and reply
                within {contactData.responseTime.toLowerCase()}.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-semibold text-[#1C1917] mb-1.5 uppercase tracking-wider"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  placeholder="e.g. Alex Chen"
                  className="w-full bg-[#F8F6F0] border border-[#EAE5D9] focus:border-[#8C3A2B] rounded-xl px-4 py-3 text-sm text-[#1C1917] outline-none transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-semibold text-[#1C1917] mb-1.5 uppercase tracking-wider"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  placeholder="alex@company.com"
                  className="w-full bg-[#F8F6F0] border border-[#EAE5D9] focus:border-[#8C3A2B] rounded-xl px-4 py-3 text-sm text-[#1C1917] outline-none transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-semibold text-[#1C1917] mb-1.5 uppercase tracking-wider"
                >
                  Project Scope or Inquiries
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  placeholder="Tell me about your project, timeline, or engineering needs..."
                  className="w-full bg-[#F8F6F0] border border-[#EAE5D9] focus:border-[#8C3A2B] rounded-xl px-4 py-3 text-sm text-[#1C1917] outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#8C3A2B] hover:bg-[#732E22] text-white py-3.5 px-6 rounded-full text-sm font-medium transition-colors inline-flex items-center justify-center gap-2 shadow-2xs"
              >
                {loading ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>

        {/* Right Column: Direct Channels & Guarantee */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white border border-[#EAE5D9] rounded-2xl p-6 sm:p-7 shadow-2xs space-y-4">
            <h3 className="text-xs font-semibold text-[#78716C] tracking-wider uppercase border-b border-[#EAE5D9] pb-3">
              Direct Channels
            </h3>
            <div className="space-y-3">
              {contactData.channels.map((channel, idx) => (
                <a
                  key={idx}
                  href={channel.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#F8F6F0] hover:bg-white border border-[#EAE5D9] hover:border-[#D8D1C2] p-3.5 rounded-xl flex items-center justify-between gap-3 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white border border-[#EAE5D9] flex items-center justify-center shrink-0">
                      {getChannelIcon(channel.iconName)}
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-[#1C1917]">
                        {channel.label}
                      </div>
                      <div className="text-[11px] text-[#78716C] font-mono">
                        {channel.value}
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Response Guarantee Badge */}
          <div className="bg-[#E8EFE9]/60 border border-[#C8DEC9] rounded-2xl p-5 flex items-start gap-3.5 text-xs text-[#2D5A39]">
            <Clock className="w-5 h-5 text-[#2D5A39] shrink-0 mt-0.5" />
            <div>
              <strong className="font-semibold block text-[#1C1917] mb-0.5">
                Turnaround Time Guarantee
              </strong>
              <p className="leading-relaxed text-[#2D5A39]">
                {contactData.responseTime}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
