"use client";

import { useLanguage } from "@/app/contexts/language";
import { translations } from "@/app/translation";
import { useState } from "react";

export default function Contact() {
  const { language } = useLanguage();
  const t = translations[language].contact;

  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = new FormData(form);

    const response = await fetch("https://formspree.io/f/xzzjgzon", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      setStatus("success");
      form.reset();
    } else {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 max-w-3xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6">{t.title}</h2>
      <p className="text-muted-foreground mb-8">{t.description}</p>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 text-left bg-white dark:bg-neutral-900 p-6 rounded-xl shadow-md"
      >
        <div>
          <label className="block mb-1 text-sm font-medium">Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full px-4 py-2 border rounded-lg dark:bg-neutral-800"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full px-4 py-2 border rounded-lg dark:bg-neutral-800"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium">Message</label>
          <textarea
            name="message"
            rows={5}
            required
            className="w-full px-4 py-2 border rounded-lg dark:bg-neutral-800"
          />
        </div>

        <button
          type="submit"
          className="w-full px-6 py-3 bg-primary text-white rounded-lg"
          disabled={status === "loading"}
        >
          {status === "loading"
            ? "Sending..."
            : language === "en"
            ? "Send Message"
            : "Ipadala"}
        </button>

        {status === "success" && (
          <p className="text-green-600 mt-2 text-sm">
            ✅ {language === "en" ? "Message sent!" : "Naipadala ang mensahe!"}
          </p>
        )}
        {status === "error" && (
          <p className="text-red-600 mt-2 text-sm">
            ❌ {language === "en"
              ? "Something went wrong. Please try again."
              : "Nagka-error. Subukang muli."}
          </p>
        )}
      </form>
    </section>
  );
}
