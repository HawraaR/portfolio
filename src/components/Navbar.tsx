import { ArrowUpRight } from "lucide-react";

interface NavbarProps {
  name: string;
}

export function Navbar({ name }: NavbarProps) {
  return (
    <header className="w-full border-b border-[#EAE5D9]">
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <a href="#" className="font-serif text-xl font-bold text-[#1C1917] tracking-tight">
          {name}
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#78716C]">
          <a href="#projects" className="hover:text-[#1C1917] transition-colors">Projects</a>
          <a href="#workspace" className="hover:text-[#1C1917] transition-colors">Workspace</a>
          <a href="#bookshelf" className="hover:text-[#1C1917] transition-colors">Bookshelf</a>
          <a href="#contact" className="hover:text-[#1C1917] transition-colors">Contact</a>
        </nav>

        <a
          href="#contact"
          className="bg-[#8C3A2B] hover:bg-[#732E22] text-white text-sm font-medium px-5 py-2.5 rounded-full transition-colors inline-flex items-center gap-2"
        >
          <span>Get in Touch</span>
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
    </header>
  );
}