'use client';

import { useState } from "react";

interface FooterProps {
  name: string;
}

export function Footer({ name }: FooterProps) {
    const [year,] = useState<number>(new Date().getFullYear()); 

  return (
    <footer className="border-t border-[#EAE5D9] bg-[#F8F6F0] py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-[#78716C]">
        <div>
          <span className="font-serif font-bold text-sm text-[#1C1917] block sm:inline mr-2">
            {name}
          </span>
          <span suppressHydrationWarning>&copy; {year} · Built with Next.js, TypeScript & Tailwind CSS.</span>
        </div>

        <nav className="flex items-center gap-6 font-medium">
          <a href="#projects" className="hover:text-[#1C1917] transition-colors">Projects</a>
          <a href="#workspace" className="hover:text-[#1C1917] transition-colors">Workspace</a>
          <a href="#contact" className="hover:text-[#1C1917] transition-colors">Contact</a>
        </nav>
      </div>
    </footer>
  );
}