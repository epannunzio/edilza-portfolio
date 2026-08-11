"use client";

import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "./LanguageProvider";

export default function About() {
  const { t } = useLanguage();
  return (
    <section
      id="about"
      className="border-t border-[color:var(--border)] dark:border-[color:var(--border)] px-6 py-28 lg:px-8 lg:py-40"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex items-center justify-between">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--accent)]">
            {t('about_label')}
          </p>

          <span className="hidden text-xs text-[color:var(--subtle)] md:block dark:text-[color:var(--subtle)]">
            {t('about_subtitle')}
          </span>
        </div>

        <h2 className="section-title max-w-6xl font-medium">
          {t('about_title_prefix')}
          <span className="text-[color:var(--subtle)]"> {t('about_title_suffix')}</span>
        </h2>

        <div className="mt-20 grid gap-12 border-t border-[color:var(--border)] dark:border-[color:var(--border)] pt-8 md:grid-cols-[1fr_1fr] lg:grid-cols-[0.7fr_1fr]">
          <div className="flex items-start gap-4">
            <span className="mt-1 text-xs text-[color:var(--accent)]">01</span>

            <p className="max-w-md text-sm leading-7 text-[color:var(--muted)] dark:text-[color:var(--subtle)]">
              {t('about_p1')}
            </p>
          </div>

          <div className="flex items-start gap-4">
            <span className="mt-1 text-xs text-[color:var(--accent)]">02</span>

            <div>
              <p className="max-w-md text-sm leading-7 text-[color:var(--muted)] dark:text-[color:var(--subtle)]">
                {t('about_p2')}
              </p>

              <a
                href="https://github.com/epannunzio"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-8 inline-flex items-center gap-2 border-b border-[color:var(--border)] pb-1 text-sm font-medium text-[color:var(--foreground)] transition hover:text-[color:var(--foreground)] dark:border-[color:var(--border)] dark:text-[color:var(--subtle)] dark:hover:text-[color:var(--foreground)]"
              >
                {t('explore_github')}
                <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}