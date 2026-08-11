"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { useLanguage } from "./LanguageProvider";
import { BrazilFlag, UsFlag } from "./icons";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 bg-[color:var(--background)]/20 backdrop-blur-xl shadow-sm shadow-black/10 dark:shadow-white/10`}>
      <nav className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6 sm:py-5 lg:px-8">
        <a
          href="#"
          onClick={() => setIsOpen(false)}
          className="group flex items-center gap-2 text-lg font-semibold tracking-tight text-[color:var(--foreground)] dark:text-[color:var(--foreground)]"
        >
          Edilza Pannunzio
          <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent)] transition-transform duration-300 group-hover:scale-150" />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <div className="flex items-center gap-6">
            <a href="#about" className="text-sm text-[color:var(--muted)] hover:text-[color:var(--foreground)]">{t('nav_about')}</a>
            <a href="#experience" className="text-sm text-[color:var(--muted)] hover:text-[color:var(--foreground)]">{t('nav_experience')}</a>
            <a href="#work" className="text-sm text-[color:var(--muted)] hover:text-[color:var(--foreground)]">{t('nav_work')}</a>
            <a href="#contact" className="text-sm text-[color:var(--muted)] hover:text-[color:var(--foreground)]">{t('nav_contact')}</a>
          </div>

          <div className="flex items-center gap-2">
            <button
              aria-label="Português"
              onClick={() => setLang('pt')}
              className={`flex h-5 w-7 items-center justify-center rounded-md border border-[color:var(--border)] ${lang === 'pt' ? 'ring-2 ring-[#5B5BF7]/40' : ''}`}
            >
              <BrazilFlag />
            </button>

            <button
              aria-label="English"
              onClick={() => setLang('en')}
              className={`flex h-5 w-7 items-center justify-center rounded-md border border-[color:var(--border)] ${lang === 'en' ? 'ring-2 ring-[#5B5BF7]/40' : ''}`}
            >
              <UsFlag />
            </button>

            <ThemeToggle />
          </div>
        </div>

        <div className="flex items-center gap-2 md:hidden">

          <ThemeToggle />

          <button
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-full border border-[color:var(--border)] bg-[color:var(--background)]/50 p-2.5 text-[color:var(--foreground)] backdrop-blur-sm dark:border-[color:var(--border)] dark:bg-[color:var(--background)]/50 dark:text-[color:var(--foreground)]"
          >
            {isOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="border-b border-[color:var(--border)] bg-[color:var(--background)]/95 px-4 pb-7 backdrop-blur-xl dark:border-[color:var(--border)] dark:bg-[color:var(--background)]/95 md:hidden">
          <div className="flex flex-col gap-5 pt-4">
            <a href="#about" onClick={() => setIsOpen(false)} className="text-2xl font-medium tracking-tight text-[color:var(--foreground)]">{t('nav_about')}</a>
            <a href="#experience" onClick={() => setIsOpen(false)} className="text-2xl font-medium tracking-tight text-[color:var(--foreground)]">{t('nav_experience')}</a>
            <a href="#work" onClick={() => setIsOpen(false)} className="text-2xl font-medium tracking-tight text-[color:var(--foreground)]">{t('nav_work')}</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="text-2xl font-medium tracking-tight text-[color:var(--foreground)]">{t('nav_contact')}</a>
          </div>
        </div>
      )}
    </header>
  );
}