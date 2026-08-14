"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "./LanguageProvider";
import { main } from "framer-motion/client";
import { BrazilFlag, UsFlag } from "./icons";
import ThemeToggle from "./ThemeToggle";

export default function MistralCaseStudy() {
  const { lang, setLang, t } = useLanguage();

  const isPortuguese = lang === "pt";

  const contributions = [
    {
      number: "01",
      title: isPortuguese
        ? "Desenvolvimento do zero"
        : "Development from scratch",
      description: isPortuguese
        ? "Participação no desenvolvimento da plataforma desde o início, utilizando o Figma fornecido pelo cliente como base para transformar os layouts em uma experiência web funcional e responsiva."
        : "Contributed to the development of the platform from the ground up, using the Figma provided by the client as the foundation for a functional and responsive web experience.",
    },
    {
      number: "02",
      title: "Landing pages",
      description: isPortuguese
        ? "Criação e desenvolvimento de várias landing pages do projeto, transformando os layouts fornecidos pelo cliente em interfaces responsivas."
        : "Development of most of the project's landing pages, turning the designs provided by the client into responsive interfaces.",
    },
    {
      number: "03",
      title: isPortuguese
        ? "Área logada"
        : "Authenticated experience",
      description: isPortuguese
        ? "Desenvolvimento de funcionalidades da área logada, incluindo cadastro, pedidos e favoritos."
        : "Development of authenticated features including registration, orders and favorites.",
    },
    {
      number: "04",
      title: isPortuguese
        ? "Integração do carrinho"
        : "Shopping cart integration",
      description: isPortuguese
        ? "Trabalho no desenvolvimento e integração da experiência de carrinho dentro do fluxo de compra da plataforma."
        : "Worked on the development and integration of the shopping cart experience within the platform's purchasing flow.",
    },
    {
      number: "05",
      title: isPortuguese
        ? "Retirar na loja"
        : "Store pickup",
      description: isPortuguese
        ? "Criação e integração da nova seção de retirada na loja, adicionando uma nova opção à experiência de compra."
        : "Development and integration of the new store pickup section, adding a new option to the purchasing experience.",
    },
    {
      number: "06",
      title: isPortuguese
        ? "Imagens e renderização"
        : "Image optimization",
      description: isPortuguese
        ? "Manutenção e tratamento de imagens buscando melhorar resolução, qualidade visual e renderização dentro da plataforma."
        : "Image maintenance and treatment focused on improving resolution, visual quality and rendering across the platform.",
    },
  ];

  return (
    <main className="min-h-screen bg-(--background) text-(--foreground)">
      <section className="px-5 pb-20 pt-28 sm:px-8 sm:pt-36 lg:px-12 lg:pb-28 lg:pt-10">
        <div className="mx-auto max-w-7xl">
          <div className="flex justify-between">
            <Link
              href="/#work"
              className="group mb-16 inline-flex items-center gap-2 text-sm text-(--muted) transition-colors hover:text-(--foreground)"
            >
              <ArrowLeft
                size={16}
                className="transition-transform duration-300 group-hover:-translate-x-1"
              />

              {isPortuguese
                ? "Voltar para projetos"
                : "Back to selected work"}
            </Link>

            <div className="flex items-center gap-2">
              <button
                aria-label={t('aria_portuguese')}
                onClick={() => setLang('pt')}
                className={`h-5 w-7 rounded-md border border-(--border) ${lang === 'pt' ? 'ring-2 ring-[#5B5BF7]/40' : ''}`}
              >
                <BrazilFlag />
              </button>
            
              <button
                aria-label={t('aria_english')}
                onClick={() => setLang('en')}
                className={`h-5 w-7 rounded-md border border-(--border) ${lang === 'en' ? 'ring-2 ring-[#5B5BF7]/40' : ''}`}
              >
                <UsFlag />
              </button>
            
                <ThemeToggle />
            </div>
          </div>

          <div className="grid gap-14 lg:grid-cols-[1fr_320px] lg:items-end lg:gap-20">
            <div>
              <div className="mb-7 flex flex-wrap items-center gap-3">
                <span className="text-xs uppercase tracking-[0.2em] text-(--accent)">
                  01 / Client project
                </span>

                <span className="rounded-full bg-(--accent-light) px-3 py-1 text-[10px] font-medium uppercase tracking-[0.15em] text-(--accent)">
                  Webeleven
                </span>
              </div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="display max-w-5xl font-semibold text-3xl"
              >
                Mistral
                <span className="text-(--accent)">.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.15,
                }}
                className="mt-8 max-w-2xl text-base leading-8 text-(--muted) sm:text-lg"
              >
                {isPortuguese
                  ? "Desenvolvimento de uma experiência digital completa para a Mistral, construída a partir do zero com base no design fornecido pelo cliente."
                  : "Development of a complete digital experience for Mistral, built from the ground up based on the design provided by the client."}
              </motion.p>
            </div>

            <div className="border-t border-(--border) pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-(--subtle)">
                  Role
                </span>

                <p className="mt-2 text-base font-medium">
                  Front-end Developer
                </p>
              </div>

              <div className="mt-7">
                <span className="text-[10px] uppercase tracking-[0.2em] text-(--subtle)">
                  Company
                </span>

                <p className="mt-2 text-base font-medium">
                  Webeleven
                </p>
              </div>

              <div className="mt-7">
                <span className="text-[10px] uppercase tracking-[0.2em] text-(--subtle)">
                  Type
                </span>

                <p className="mt-2 text-base font-medium">
                  {isPortuguese
                    ? "Projeto profissional"
                    : "Professional project"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------
          HERO IMAGE
      ------------------------------------------------ */}

      <section className="px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="relative aspect-video overflow-hidden rounded-3xl bg-neutral-100 dark:bg-neutral-900"
          >
            <Image
              src="/projects/mistral.webp"
              alt="Mistral website homepage"
              fill
              priority
              className="object-cover object-top"
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
          </motion.div>
        </div>
      </section>

      {/* ------------------------------------------------
          OVERVIEW
      ------------------------------------------------ */}

      <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.65fr_1.35fr] lg:gap-24">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-(--accent)">
              02 / Overview
            </span>

            <h2 className="mt-5 max-w-md text-3xl font-medium tracking-tight sm:text-4xl lg:text-5xl">
              {isPortuguese
                ? "Do Figma para uma experiência digital real."
                : "From Figma to a real digital experience."}
            </h2>
          </div>

          <div className="max-w-3xl text-sm leading-8 text-(--muted) sm:text-base">
            <p>
              {isPortuguese
                ? "Participei do desenvolvimento da plataforma Mistral desde o zero, utilizando o Figma fornecido pelo cliente como ponto de partida para a implementação das interfaces e funcionalidades."
                : "I contributed to the development of the Mistral platform from the ground up, using the Figma provided by the client as the starting point for implementing its interfaces and features."}
            </p>

            <p className="mt-6">
              {isPortuguese
                ? "Minha atuação envolveu diferentes partes da experiência, desde a criação da maioria das landing pages até funcionalidades da área logada e etapas importantes do fluxo de compra."
                : "My contribution covered different parts of the experience, from developing most of the landing pages to authenticated features and important steps of the purchasing flow."}
            </p>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------
          CONTRIBUTIONS
      ------------------------------------------------ */}

      <section className="border-y border-(--border) px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 max-w-3xl">
            <span className="text-xs uppercase tracking-[0.2em] text-(--accent)">
              03 / My contribution
            </span>

            <h2 className="mt-5 text-4xl font-medium tracking-tight sm:text-5xl lg:text-6xl">
              {isPortuguese
                ? "O que eu construí."
                : "What I worked on."}
            </h2>
          </div>

          <div className="grid border-t border-(--border) md:grid-cols-2">
            {contributions.map((item) => (
              <motion.article
                key={item.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5 }}
                className="border-b border-(--border) py-8 md:even:pl-10 md:odd:border-r md:odd:pr-10"
              >
                <span className="text-xs text-(--accent)">
                  {item.number}
                </span>

                <h3 className="mt-4 text-xl font-medium tracking-tight">
                  {item.title}
                </h3>

                <p className="mt-3 max-w-md text-sm leading-7 text-(--muted)">
                  {item.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------
          SELECTED SCREENS
      ------------------------------------------------ */}

      <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl">
            <span className="text-xs uppercase tracking-[0.2em] text-(--accent)">
              04 / Selected screens
            </span>

            <h2 className="mt-5 text-4xl font-medium tracking-tight sm:text-5xl lg:text-6xl">
              {isPortuguese
                ? "Alguns detalhes do projeto."
                : "Selected views from the project."}
            </h2>
          </div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="overflow-hidden rounded-3xl bg-neutral-100 dark:bg-neutral-900"
            >
              <Image
                src="/projects/mistral/area-logada.webp"
                alt="Mistral Área Logada"
                width={1600}
                height={1000}
                className="h-auto w-full"
              />
            </motion.div>

            <div className="grid gap-8 md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="overflow-hidden rounded-3xl bg-neutral-100 dark:bg-neutral-900"
              >
                <Image
                  src="/projects/mistral/carrinho.webp"
                  alt="Mistral Carrinho"
                  width={1000}
                  height={800}
                  className="h-auto w-full"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="overflow-hidden rounded-3xl bg-neutral-100 dark:bg-neutral-900"
              >
                <Image
                  src="/projects/mistral/retirar-loja.webp"
                  alt="Mistral Retirar em Loja"
                  width={1000}
                  height={800}
                  className="h-auto w-full"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------
          TECHNOLOGIES
      ------------------------------------------------ */}

      <section className="border-y border-(--border) px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.7fr_1.3fr] md:items-start">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-(--accent)">
              05 / Technologies
            </span>

            <h2 className="mt-5 text-3xl font-medium tracking-tight sm:text-4xl">
              {isPortuguese
                ? "Tecnologias"
                : "Technologies"}
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {[
              "React",
              "Next.js",
              "TypeScript",
              "Tailwind CSS",
              "JavaScript",
              "HTML",
              "CSS",
            ].map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-(--border) px-4 py-2 text-sm text-(--muted)"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------
          VISIT PROJECT
      ------------------------------------------------ */}

      <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 md:flex-row md:items-end">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-(--accent)">
              06 / Visit project
            </span>

            <h2 className="mt-5 text-4xl font-medium tracking-tight sm:text-5xl lg:text-6xl">
              Mistral
              <span className="text-(--accent)">.</span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-(--muted)">
              {isPortuguese
                ? "Conheça o projeto em produção."
                : "Explore the project in production."}
            </p>
          </div>

          <a
            href="https://www.mistral.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex w-fit items-center gap-3 rounded-full  px-6 py-3.5 text-sm font-medium text-(--background) transition-all duration-300 hover:-translate-y-1"
          >
            {isPortuguese ? "Visitar Mistral" : "Visit Mistral"}

            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </a>
        </div>
      </section>

      {/* ------------------------------------------------
          BACK TO WORK
      ------------------------------------------------ */}

      <div className="border-t border-(--border) px-5 py-8 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/#work"
            className="group inline-flex items-center gap-2 text-sm text-(--muted) transition-colors hover:text-(--foreground)"
          >
            <ArrowLeft
              size={16}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />

            {isPortuguese
              ? "Voltar para projetos"
              : "Back to selected work"}
          </Link>
        </div>
      </div>
    </main>
  );
}