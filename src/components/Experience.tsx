"use client";

import { experience } from "@/data/experience";
import { useLanguage } from "./LanguageProvider";

export default function Experience() {
  const { t, lang } = useLanguage();
  return (
    <section
      id="experience"
      className="border-t border-[color:var(--border)] dark:border-[color:var(--border)] px-6 py-24 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[color:var(--accent)]">{t('experience_label')}</p>

          <h2 className="mt-4 text-3xl font-medium tracking-tight md:text-5xl">{t('experience_title')}</h2>
        </div>

        <div className="border-t border-[color:var(--border)] dark:border-[color:var(--border)]">
          {experience.map((item) => {
            const companyText = typeof item.company === 'string' ? item.company : item.company[lang];
            const periodText = typeof item.period === 'string' ? item.period : item.period[lang];

            return (
              <article
                key={`${companyText}-${periodText}`}
                className="grid gap-8 border-b border-[color:var(--border)] dark:border-[color:var(--border)] py-10 md:grid-cols-[180px_1fr_220px]"
              >
                <p className="text-sm text-[color:var(--muted)] dark:text-[color:var(--subtle)]">{periodText}</p>

                <div>
                <h3 className="text-xl font-medium">{typeof item.role === 'string' ? item.role : item.role[lang]}</h3>

                <p className="mt-1 text-[color:var(--muted)] dark:text-[color:var(--subtle)]">{companyText}</p>

                <p className="mt-6 max-w-2xl text-sm leading-6 text-[color:var(--muted)] dark:text-[color:var(--subtle)]">
                  {typeof item.description === 'string' ? item.description : item.description[lang]}
                </p>
              </div>

              <div className="flex flex-wrap content-start gap-2">
                {item.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-(--border) dark:border-(--border) px-3 py-1.5 text-xs text-[#5B5BF7]"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </article>
          )})}
        </div>
      </div>
    </section>
  )
}