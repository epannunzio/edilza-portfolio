"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { useState } from "react";
import { certificates } from "@/data/certificates";
import { useLanguage } from "./LanguageProvider";

export default function Certificates() {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const previousIndex =
    (activeIndex - 1 + certificates.length) % certificates.length;
  const nextIndex = (activeIndex + 1) % certificates.length;
  const activeCertificate = certificates[activeIndex];

  function showPrevious() {
    setActiveIndex(previousIndex);
  }

  function showNext() {
    setActiveIndex(nextIndex);
  }

  return (
    <section
      id="certificates"
      aria-label={t("certificates_title")}
      className="overflow-hidden border-t border-[color:var(--border)] px-6 py-28 lg:px-8 lg:py-40"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex items-center justify-between">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--accent)]">
            {t("certificates_label")}
          </p>
          <span className="hidden text-xs text-[color:var(--subtle)] md:block">
            {t("certificates_subtitle")}
          </span>
        </div>

        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="section-title max-w-4xl font-medium">
            {t("certificates_title")}
            <span className="text-(--subtle)">
              {" "}
              {t("certificates_title_suffix")}
            </span>
          </h2>
          <p className="max-w-sm text-sm leading-7 text-(--muted)">
            {t("certificates_description")}
          </p>
        </div>

        <div
          role="group"
          aria-roledescription="carousel"
          aria-label={t("certificates_title")}
          className="border-y border-(--border) py-8 md:py-12"
        >
          <div className="grid items-center gap-5 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.35fr)_minmax(0,0.8fr)] md:gap-4 lg:gap-8">
            <button
              type="button"
              onClick={showPrevious}
              aria-label={t("certificates_previous")}
              className="group hidden text-left md:block"
            >
              <CertificateCard
                certificate={certificates[previousIndex]}
                featured={false}
                openLabel={t("certificates_view")}
              />
            </button>

            <a
              href={activeCertificate.file}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${t("certificates_view")}: ${activeCertificate.title}`}
              className="group min-w-0"
            >
              <CertificateCard
                certificate={activeCertificate}
                featured
                openLabel={t("certificates_view")}
              />
            </a>

            <button
              type="button"
              onClick={showNext}
              aria-label={t("certificates_next")}
              className="group hidden text-left md:block"
            >
              <CertificateCard
                certificate={certificates[nextIndex]}
                featured={false}
                openLabel={t("certificates_view")}
              />
            </button>
          </div>

          <div className="mt-8 flex items-center justify-between gap-4 md:mt-10">
            <p
              aria-live="polite"
              className="text-xs tabular-nums text-(--muted)"
            >
              {String(activeIndex + 1).padStart(2, "0")}
              <span className="px-2 text-(--subtle)">/</span>
              {String(certificates.length).padStart(2, "0")}
              <span className="ml-3 hidden sm:inline">
                {t("certificates_count")}
              </span>
            </p>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={showPrevious}
                aria-label={t("certificates_previous")}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-(--border) text-[color:var(--foreground)] transition-colors hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                onClick={showNext}
                aria-label={t("certificates_next")}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-(--border) text-[color:var(--foreground)] transition-colors hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type Certificate = (typeof certificates)[number];

function CertificateCard({
  certificate,
  featured,
  openLabel,
}: {
  certificate: Certificate;
  featured: boolean;
  openLabel: string;
}) {
  return (
    <div
      className={`min-w-0 transition-all duration-300 ${
        featured ? "" : "opacity-55 group-hover:opacity-85"
      }`}
    >
      <div
        className={`relative flex aspect-[1.42] items-center justify-center overflow-hidden border border-[color:var(--border)] bg-[color:var(--background)] p-3 transition-all duration-300 sm:p-5 ${
          featured
            ? "shadow-[0_24px_70px_rgba(0,0,0,0.10)] dark:shadow-[0_24px_70px_rgba(0,0,0,0.3)]"
            : "md:scale-[0.92] md:group-hover:scale-[0.96]"
        }`}
      >
        {certificate.isImage ? (
          <Image
            src={certificate.file}
            alt={`${certificate.title} — ${certificate.provider}`}
            width={1400}
            height={1000}
            sizes={featured ? "(min-width: 768px) 48vw, 100vw" : "25vw"}
            className="h-full w-full object-contain"
          />
        ) : (
          <iframe
            src={`${certificate.file}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
            title={`${certificate.title} — ${certificate.provider}`}
            loading="lazy"
            className="pointer-events-none absolute inset-0 h-full w-full border-0 bg-white"
          />
        )}
      </div>

      <div className="mt-4 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="truncate text-[10px] font-medium uppercase tracking-[0.16em] text-[color:var(--accent)] sm:text-xs">
            {certificate.provider}
          </p>
          <p className="mt-1 line-clamp-2 text-xs leading-5 text-[color:var(--foreground)] sm:text-sm">
            {certificate.title}
          </p>
        </div>
        {featured && (
          <span
            aria-label={openLabel}
            className="mt-1 shrink-0 text-[color:var(--muted)] transition-colors group-hover:text-[color:var(--accent)]"
          >
            <ExternalLink size={16} />
          </span>
        )}
      </div>
    </div>
  );
}
