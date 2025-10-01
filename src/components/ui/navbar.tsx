"use client";

import Link from "next/link";
import ThemeToggle from "@/components/ui/theme-toggle";
import { useLanguage } from "@/app/contexts/language";
import { translations } from "@/app/translation";

export default function Navbar() {
  const { language } = useLanguage();
  const t = translations[language].navbar;

  return (
    <nav className="z-50">
      {/* Desktop Navbar (top center) */}
      <div className="hidden md:flex fixed top-4 left-1/2 -translate-x-1/2 
                      items-center bg-white/70 dark:bg-neutral-900/70 backdrop-blur-md 
                      shadow-lg rounded-full px-8 py-3 gap-8 border 
                      border-gray-200 dark:border-neutral-700">
        <Link href="#about" className="hover:text-primary transition-colors">
          {t.about}
        </Link>
        <Link href="#projects" className="hover:text-primary transition-colors">
          {t.projects}
        </Link>
        <Link href="#contact" className="hover:text-primary transition-colors">
          {t.contact}
        </Link>
        <ThemeToggle />
      </div>

      {/* Mobile Navbar (bottom center) */}
      <div className="flex md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 
                      items-center justify-around w-[90%] max-w-sm
                      bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md 
                      shadow-lg rounded-full px-6 py-3 border 
                      border-gray-200 dark:border-neutral-700">
        <Link href="#about" className="hover:text-primary transition-colors text-sm">
          {t.about}
        </Link>
        <Link href="#projects" className="hover:text-primary transition-colors text-sm">
          {t.projects}
        </Link>
        <Link href="#contact" className="hover:text-primary transition-colors text-sm">
          {t.contact}
        </Link>
        <ThemeToggle />
      </div>
    </nav>
  );
}
