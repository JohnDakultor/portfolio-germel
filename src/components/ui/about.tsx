"use client";

import { useLanguage } from "@/app/contexts/language";
import { translations } from "@/app/translation";

export default function About() {
  const { language } = useLanguage();
  const t = translations[language].about;

  return (
    <section id="about" className="py-20 max-w-3xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6">{t.title}</h2>
      <p className="text-muted-foreground">{t.description}</p>
    </section>
  );
}
