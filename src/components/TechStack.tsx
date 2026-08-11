"use client";

const categories = [
  {
    titleKey: "tech_frontend",
    technologies: ["React", "Next.js", "TypeScript", "JavaScript"],
  },
  {
    titleKey: "tech_styling",
    technologies: ["Tailwind CSS", "CSS", "HTML"],
  },
  {
    titleKey: "tech_tools",
    technologies: ["Git", "GitHub", "Figma", "Vercel"],
  },
  {
    titleKey: "tech_currently_exploring",
    technologies: ["Testing", "Accessibility", "Performance"],
  },
];

import { useLanguage } from "./LanguageProvider";

export default function TechStack() {
  const { t } = useLanguage();
  return (
    <section className="border-t border-neutral-200 dark:border-neutral-800 px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.4fr_1fr]">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#5B5BF7]">
              {t('techstack_label')}
            </p>

            <h2 className="mt-4 text-3xl font-medium tracking-tight md:text-5xl">
              {t('techstack_title')}
            </h2>
          </div>

          <div className="grid gap-10 sm:grid-cols-2">
            {categories.map((category) => (
              <div key={category.titleKey}>
                <h3 className="text-sm font-medium">{t(category.titleKey)}</h3>

                <div className="mt-4 flex flex-wrap gap-2">
                  {category.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-neutral-200 dark:border-neutral-800 px-3 py-2 text-sm text-[#5B5BF7]"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}