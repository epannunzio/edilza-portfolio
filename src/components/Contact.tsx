"use client";

import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { useLanguage } from "./LanguageProvider";

export default function Contact() {
  const { t } = useLanguage();
  return (
    <section id="contact" className="border-t border-(--border) dark:border-(--border) px-6 py-24 lg:px-8 lg:py-40">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-(--accent)">{t('contact_label') || 'Get in touch'}</p>

        <h2 className="mt-6 max-w-4xl text-5xl font-semibold leading-none tracking-[-0.04em] md:text-7xl">{t('contact_title') || "Let's build something great together."}</h2>

        <p className="mt-8 max-w-xl text-base leading-7 text-(--muted) dark:text-(--subtle)">{t('contact_paragraph') || "I'm always interested in connecting with people who are building meaningful products and solving interesting problems."}</p>

        <a href="mailto:edilza_rodrigues@hotmail.com" className="group mt-10 inline-flex items-center gap-3 text-lg font-medium text-(--foreground) transition hover:text-(--foreground) dark:text-(--subtle) dark:hover:text-(--foreground)">
          <Mail size={20} />
          edilza_rodrigues@hotmail.com
          <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </a>

        <br />

        <a href="https://wa.me/5511988032511" className="group mt-10 inline-flex items-center gap-3 text-lg font-medium text-(--foreground) transition hover:text-(--foreground) dark:text-(--subtle) dark:hover:text-(--foreground)">
          <Phone size={20} />
          (11) 9 8803-2511
          <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </a>

        <div className="mt-12 flex gap-6 text-sm text-(--muted) dark:text-(--subtle)">
          <a href="https://github.com/epannunzio" target="_blank" rel="noopener noreferrer" className="transition-colors text-(--muted) hover:text-(--foreground) dark:text-(--subtle) dark:hover:text-(--foreground)">GitHub</a>

          <a href="https://www.linkedin.com/in/epannunzio/" target="_blank" rel="noopener noreferrer" className="transition-colors text-(--muted) hover:text-(--foreground) dark:text-(--subtle) dark:hover:text-(--foreground)">LinkedIn</a>
        </div>
      </div>
    </section>
  );
}