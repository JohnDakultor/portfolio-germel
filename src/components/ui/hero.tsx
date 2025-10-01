"use client";

import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import { useLanguage } from "@/app/contexts/language";

export default function Hero() {
  const { language, setLanguage } = useLanguage();

  const translations = {
    en: {
      greeting: "Hi, I’m Germel",
      role: "Full-Stack Developer",
      about:
        "I’m a developer based in the Philippines with a passion for building clean, modern, and fast web applications. I enjoy solving complex challenges and turning them into simple, elegant solutions.",
      viewProjects: "View Projects",
      contactMe: "Contact Me",
    },
    tl: {
      greeting: "Kumusta, Ako si Germel",
      role: "Full-Stack Developer",
      about:
        "Ako ay isang developer mula sa Pilipinas na may hilig sa paggawa ng malinis, moderno, at mabilis na web applications. Mahilig akong lutasin ang mga mahihirap na problema at gawing simple at eleganteng solusyon.",
      viewProjects: "Tingnan ang Mga Proyekto",
      contactMe: "Makipag-ugnayan",
    },
  };

  const t = translations[language];

  return (
    <section className="relative flex flex-col md:flex-row md:items-start md:gap-16 md:px-24 py-20 min-h-screen mt-20">
      {/* Left Sidebar */}
      <div className="md:w-1/3 md:sticky md:top-24 flex flex-col items-center md:items-start text-center md:text-left md:pl-8">
        {/* Profile Image */}
        <div className="w-32 h-32 relative mb-4">
          <Image
            src="/jj.jpg"
            alt="Germel Profile"
            fill
            className="rounded-full object-cover shadow-lg border-4 border-white dark:border-neutral-800"
          />
        </div>

        {/* Location */}
        <p className="px-4 text-muted-foreground text-sm">Asia/Philippines</p>

        {/* Language Switch */}
        <div className="flex gap-2 mt-3">
          <button
            onClick={() => setLanguage("en")}
            className={`px-3 py-1 border rounded-full text-sm transition ${
              language === "en"
                ? "bg-primary text-white"
                : "bg-white dark:bg-neutral-900 text-black dark:text-white"
            }`}
          >
            English
          </button>
          <button
            onClick={() => setLanguage("tl")}
            className={`px-3 py-1 border rounded-full text-sm transition ${
              language === "tl"
                ? "bg-primary text-white"
                : "bg-white dark:bg-neutral-900 text-black dark:text-white"
            }`}
          >
            Tagalog
          </button>
        </div>
      </div>

      {/* Right Content */}
      <div className="flex-1 mt-10 md:mt-0 text-center md:text-left">
        <h2 className="text-4xl md:text-6xl font-bold">
          <Typewriter
            words={[t.greeting]}
            loop={false}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h2>
        <h3 className="text-2xl text-muted-foreground mt-2">{t.role}</h3>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto md:mx-0">
          {t.about}
        </p>

        {/* Action Buttons */}
        <div className="mt-6 flex justify-center md:justify-start gap-4">
          {/* Projects Button */}
          <a
            href="#projects"
            className="px-6 py-3 bg-primary text-white rounded-xl hover:opacity-90 transition"
          >
            {t.viewProjects}
          </a>

          {/* Contact Button */}
          <a
            href="#contact"
            className="px-6 py-3 border rounded-xl 
                       text-black dark:text-white 
                       bg-white dark:bg-neutral-900 
                       hover:bg-neutral-100 dark:hover:bg-neutral-800 
                       transition"
          >
            {t.contactMe}
          </a>
        </div>
      </div>
    </section>
  );
}
