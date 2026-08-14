"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

type Lang = "en" | "pt";

const translations: Record<Lang, Record<string, string>> = {
  en: {
    nav_about: "About",
    nav_experience: "Experience",
    nav_work: "Work",
    nav_contact: "Contact",
    nav_lets_talk: "Let's talk",
    open_menu: "Open menu",
    close_menu: "Close menu",
    aria_portuguese: "Portuguese",
    aria_english: "English",
    hero_available: "Available for opportunities",
    hero_based: "Based in Brazil",
    hero_portfolio_year: "Portfólio / 2026",
    hero_count: "01 — 06",
    hero_front_end: "Front-end",
    hero_developer: "Developer",
    hero_paragraph:
      "I build modern digital experiences where thoughtful design, clean code and technology come together.",
    hero_explore: "Explore my work",
      about_label: "02 / About",
      about_subtitle: "A little bit about me",
      about_title_prefix: "I turn complex problems into",
      about_title_suffix: "simple, intuitive and beautifully crafted experiences.",
      about_p1: "I'm a Front-end Developer with experience building modern web applications since 2021. I'm passionate about the intersection between design and technology.",
      about_p2: "I care about writing clean, maintainable code while making sure the final product is accessible, performant and genuinely useful.",
      explore_github: "Explore GitHub",
    projects_selected: "03 / Selected work",
    projects_title_prefix: "Projects that",
    projects_title_suffix: " tell the story.",
    projects_description:
      "A mix of professional work and personal projects exploring interfaces, interactions and modern front-end development.",
    featured_professional: "Professional",
    featured_personal: "Personal",
    visit_project: "Visit project",
    study_case: "Study Case",
    github_cta: "Explore more projects on GitHub",
    live_project: "Live project",
    contact_label: "Get in touch",
    contact_title: "Let's build something great together.",
    contact_paragraph: "I'm always interested in connecting with people who are building meaningful products and solving interesting problems.",
    experience_label: "Experience",
    experience_title: "Where I've been building.",
    techstack_label: "Tech stack",
    footer_back_to_top: "Back to top",
    footer_built_with: "Built with Next.js & TypeScript.",
    techstack_title: "Tools I use to bring ideas to life.",
    hero_location: "São Paulo, Brazil",
    tech_frontend: "Frontend",
    tech_styling: "Styling",
    tech_tools: "Tools",
    tech_currently_exploring: "Currently exploring",
  },
  pt: {
    nav_about: "Sobre",
    nav_experience: "Experiência",
    nav_work: "Projetos",
    nav_contact: "Contato",
    nav_lets_talk: "Vamos conversar",
    hero_available: "Disponível para oportunidades",
    hero_based: "Baseada no Brasil",
    hero_portfolio_year: "Portfolio / 2026",
    hero_count: "01 — 06",
    hero_front_end: "Front-end",
    hero_developer: "Desenvolvedora",
    hero_paragraph:
      "Construo experiências digitais modernas onde design cuidadoso, código limpo e tecnologia se encontram.",
    hero_explore: "Veja meus trabalhos",
      about_label: "02 / Sobre",
      about_subtitle: "Um pouco sobre mim",
      about_title_prefix: "Eu transformo problemas complexos em",
      about_title_suffix: "experiências simples, responsivas e intuitivas.",
      about_p1: "Sou desenvolvedora Front-end com experiência em construir aplicações web modernas desde 2021. Sou apaixonada pela interseção entre design e tecnologia.",
      about_p2: "Prezo por escrever código limpo e de fácil manutenção, garantindo que o produto final seja acessível, performático e verdadeiramente útil.",
      explore_github: "Explore o GitHub",
    projects_selected: "03 / Trabalhos selecionados",
    projects_title_prefix: "Projetos que",
    projects_title_suffix: " contam a história.",
    projects_description:
      "Uma mistura de trabalhos profissionais e projetos pessoais explorando interfaces, interações e desenvolvimento front-end moderno.",
    featured_professional: "Profissional",
    featured_personal: "Pessoal",
    visit_project: "Ver projeto",
    github_cta: "Veja mais projetos no GitHub",
    live_project: "Projeto ao vivo",
    contact_label: "Fale comigo",
    contact_title: "Vamos construir algo incrível juntos.",
    contact_paragraph: "Estou sempre interessada em conectar-me com pessoas que estão construindo produtos significativos e resolvendo problemas.",
    experience_label: "Experiência",
    experience_title: "Onde estive construindo.",
    techstack_label: "Tecnologias",
    footer_back_to_top: "Voltar ao topo",
    footer_built_with: "Construído com Next.js & TypeScript.",
    open_menu: "Abrir menu",
    close_menu: "Fechar menu",
    aria_portuguese: "Português",
    aria_english: "Inglês",
    study_case: "Estudo de caso",
    techstack_title: "Ferramentas que uso para dar vida às ideias.",
    hero_location: "São Paulo, Brasil",
    tech_frontend: "Frontend",
    tech_styling: "Estilização",
    tech_tools: "Ferramentas",
    tech_currently_exploring: "Atualmente explorando",
  },
};

const LanguageContext = createContext<{
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
} | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("lang");
      if (saved === "pt" || saved === "en") setLang(saved);
      else if (window.navigator.language?.startsWith("pt")) setLang("pt");
    } catch (e) {
      // ignore
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("lang", lang);
    } catch (e) {}
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang, t: (key: string) => translations[lang][key] ?? key }), [lang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}

export default LanguageProvider;
