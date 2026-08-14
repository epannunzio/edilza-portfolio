"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { useLanguage } from "./LanguageProvider";

function ProjectPreview({ project }: { project: (typeof projects)[number] }) {
  const { t, lang } = useLanguage();
  const titleText = typeof project.title === "string" ? project.title : project.title[lang];
  const isMistral = titleText.toLowerCase().includes("mistral");

  return (
    <div className="group relative aspect-12/7 overflow-hidden rounded-3xl bg-neutral-200 dark:bg-neutral-900 sm:aspect-16/10">
      <motion.div
        className={`absolute inset-0 overflow-hidden ${isMistral ? "" : "p-4 sm:p-6"}`}
        initial={{ scale: isMistral ? 1 : 0.95, y: 0 }}
        whileHover={{ scale: isMistral ? 1 : 1, y: -4 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {project.image ? (
          <Image
            src={project.image}
            alt={titleText}
            fill
            className={`transition-transform duration-700 will-change-transform ${isMistral ? "object-contain object-center bg-black/5 dark:bg-[color:var(--foreground)]/5" : "object-contain object-center"}`}
            priority={project.featured}
            quality={90}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 760px"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-neutral-200 dark:bg-neutral-900 px-6 text-center">
            <div>
              <div className="text-[clamp(2rem,5vw,5rem)] font-semibold tracking-[-0.06em] text-neutral-300">
                {titleText}
                <span className="text-[#5B5BF7]">.</span>
              </div>
              <div className="mt-2 text-xs uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-400">
                {t("live_project")}
              </div>
            </div>
          </div>
        )}
      </motion.div>

      <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="absolute left-0 right-0 top-0 z-10 flex h-10 items-center gap-1.5 border-b border-black/5 bg-white/80 px-4 backdrop-blur-md dark:border-(--foreground)/10 dark:bg-(--background)/70">
        <span className="h-2 w-2 rounded-full bg-neutral-300" />
        <span className="h-2 w-2 rounded-full bg-neutral-300" />
        <span className="h-2 w-2 rounded-full bg-neutral-300" />
        <div className="ml-4 h-5 flex-1 rounded-md bg-neutral-100" />
      </div>
    </div>
  );
}

export default function Projects() {
  const { t, lang } = useLanguage();
  const featuredProject = projects.find((project) => project.featured);
  const secondaryProjects = projects.filter((project) => !project.featured);

  if (!featuredProject) {
    return null;
  }

  return (
      <section
      id="work"
      className="border-t border-(--border) dark:border-(--border) px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-40"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-20 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#5B5BF7]">
              {t('projects_selected')}
            </p>

            <h2 className="section-title mt-5 max-w-3xl font-medium">
              {t('projects_title_prefix')}
              <span className="text-neutral-400">{t('projects_title_suffix')}</span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-neutral-500 dark:text-neutral-400">
            {t('projects_description')}
          </p>
        </div>

        {/* Featured project */}
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="group"
        >
          <a
            href={featuredProject.url}
            target="_blank"
            rel="noopener noreferrer"
            className="grid gap-10 md:grid-cols-[minmax(0,1.7fr)_minmax(280px,0.8fr)] md:items-center lg:gap-14"
          >
            {/* Mistral image */}
            <div className="w-full">
              <ProjectPreview project={featuredProject} />
            </div>

            {/* Mistral information */}
            <div className="flex flex-col">
              {/* Number */}
              <span className="text-sm text-(--subtle)">
                {featuredProject.number}
              </span>

              {/* Title + professional badge */}
              <div className="mt-5">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-3xl font-medium tracking-tight text-(--foreground) lg:text-4xl">
                    {typeof featuredProject.title === "string"
                      ? featuredProject.title
                      : featuredProject.title[lang]}
                  </h3>

                  <span className="rounded-full bg-(--accent-light) px-3 py-1 text-[10px] font-medium uppercase tracking-[0.15em] text-[color:var(--accent)]">
                    {featuredProject.professional
                      ? t("featured_professional")
                      : t("featured_personal")}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="mt-6 max-w-md text-sm leading-7 text-(--muted) dark:text-(--subtle)">
                {typeof featuredProject.description === "string"
                  ? featuredProject.description
                  : featuredProject.description[lang]}
              </p>

              {/* Technologies */}
              <div className="mt-7 flex flex-wrap gap-2">
                {featuredProject.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-(--border) px-3 py-1.5 text-xs text-[#5B5BF7]"
                  >
                    {technology}
                  </span>
                ))}
              </div>
              <div className="flex justify-around">
              {/* Visit project */}
                <div className="mt-9 flex items-center gap-2 text-sm font-medium">
                  {t("visit_project")}

                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </div>

                {/* Study Case */}
                <div className="mt-9 flex items-center gap-2 text-sm font-medium">
                  {t("study_case")}

                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </div>
              </div>
            </div>
          </a>
        </motion.article>

        {/* Secondary projects */}
        <div className="mt-28 grid gap-x-8 gap-y-20 sm:grid-cols-1 md:grid-cols-2">
          {secondaryProjects.map((project, index) => (
            <motion.article
              key={project.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              className="group"
            >
                    <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <ProjectPreview project={project} />

                  <div className="mt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <div>
                          <span className="text-xs text-neutral-400 dark:text-neutral-400">
                            {project.number}
                          </span>

                          <div className="mt-2 flex items-center gap-3">
                            <h3 className="text-2xl font-medium tracking-tight text-[color:var(--foreground)] dark:text-[color:var(--foreground)]">
                              {typeof project.title === 'string' ? project.title : project.title[lang]}
                            </h3>

                            <span className="rounded-full bg-[color:var(--accent-light)] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.15em] text-[color:var(--accent)]">
                              {project.professional ? t('featured_professional') : t('featured_personal')}
                            </span>
                          </div>
                        </div>
                      </div>

                      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--border)] dark:border-[color:var(--border)] transition-all duration-300 group-hover:-translate-y-1 group-hover:border-black dark:group-hover:border-[color:var(--foreground)]">
                        <ArrowUpRight size={16} />
                      </span>
                    </div>

                    <p className="mt-3 max-w-lg text-sm leading-6 text-[color:var(--muted)] dark:text-[color:var(--subtle)]">
                      {typeof project.description === 'string' ? project.description : project.description[lang]}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                          {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-full border border-[color:var(--border)] dark:border-[color:var(--border)] px-3 py-1.5 text-xs text-[#5B5BF7]"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
            </motion.article>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="mt-24 flex justify-center">
          <a
            href="https://github.com/epannunzio"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 rounded-full border border-[color:var(--border)] bg-[color:var(--background)]/90 px-6 py-3.5 text-sm font-medium text-[color:var(--foreground)] transition-all duration-300 hover:-translate-y-1 hover:border-black hover:bg-[color:var(--background)]/95 dark:border-[color:var(--border)] dark:bg-[color:var(--background)]/50 dark:text-[color:var(--foreground)] dark:hover:bg-[color:var(--background)]/80"
          >
            {t('github_cta')}

            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>
      </div>
    </section>
  );
}