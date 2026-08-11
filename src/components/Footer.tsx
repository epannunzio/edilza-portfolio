"use client";

import { ArrowUp } from "lucide-react";
import { useLanguage } from "./LanguageProvider";

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="px-6 py-8 lg:px-8">
      <div className="mx-auto flex max-w-7xl justify-end pb-6">
        <a href="#top" className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--background)]/90 px-4 py-2 text-sm text-[color:var(--muted)] transition hover:-translate-y-0.5 hover:bg-[color:var(--background)]/95 dark:border-[color:var(--border)] dark:bg-[color:var(--background)]/70 dark:text-[color:var(--subtle)] dark:hover:bg-[color:var(--background)]/80">
          {t('footer_back_to_top')}
          <ArrowUp size={16} />
        </a>
      </div>

      <div className="border-t border-[color:var(--border)] dark:border-[color:var(--border)] pt-6">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-[color:var(--muted)] dark:text-[color:var(--subtle)] md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Edilza Pannunzio.</p>

          <p>{t('footer_built_with')}</p>
        </div>
      </div>
    </footer>
  );
}