"use client";

import { ArrowUpRight, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "./LanguageProvider";

export default function Hero() {
  const { t, lang } = useLanguage();
  return (
    <section className="site-grid relative flex min-h-screen overflow-hidden px-6 pt-24 lg:px-8">
      <div className="accent-glow -right-30 top-[15%]" />

      <div className="mx-auto flex w-full max-w-7xl flex-col justify-between pb-8">
        {/* Top metadata */}
        <div className="flex items-center justify-between pt-8 text-[11px] uppercase tracking-[0.18em] text-[color:var(--muted)] dark:text-[color:var(--subtle)]">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
            {t("hero_portfolio_year")}
          </motion.span>

          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.15 }} className="hidden md:block">
            {t("hero_based")}
          </motion.span>

          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.3 }}>
            {t("hero_count")}
          </motion.span>
        </div>

        {/* Main content */}
        <div className="relative py-20 lg:py-28">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-8 flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[color:var(--accent)] opacity-50" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-(--accent)" />
            </span>

            <span className="text-xs font-medium uppercase tracking-[0.18em] text-(--muted) dark:text-(--subtle)">
              {t("hero_available")}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="display max-w-full wrap-break-word whitespace-normal text-[clamp(2.75rem,11vw,9rem)] font-semibold"
          >
            {lang === "pt" ? (
              <>
                Desenvolvedora <span className="text-(--subtle)">frontend</span>
                <span className="text-(--accent)">.</span>
              </>
            ) : (
              <>
                {t("hero_front_end")}
                <br />

                <span className="text-(--subtle)">{t("hero_developer")}</span>
                <span className="text-(--accent)">.</span>
              </>
            )}
          </motion.h1>

          <div className="mt-12 grid gap-8 md:grid-cols-[1fr_1fr] md:items-end">
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.35 }} className="max-w-lg text-base leading-7 text-[color:var(--muted)] dark:text-[color:var(--subtle)] md:text-lg">
              {t("hero_paragraph")}
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.45 }} className="flex flex-wrap gap-3 md:justify-end">
              <a href="https://github.com/epannunzio" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 rounded-full  px-6 py-3.5 text-sm font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                {t("hero_explore")}

                <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </motion.div>
          </div>
        </div>

        {/* Bottom metadata */}
        <div className="flex items-end justify-between border-t border-[color:var(--border)]/70 dark:border-[color:var(--border)] pt-5">
          <div className="flex items-center gap-2 text-xs text-[color:var(--muted)] dark:text-[color:var(--subtle)]">
            <MapPin size={13} />
            {t('hero_location')}
          </div>
        </div>
      </div>
    </section>
  );
}
