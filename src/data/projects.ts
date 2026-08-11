export type Project = {
  number: string;
  title: { en: string; pt: string };
  category: { en: string; pt: string };
  description: { en: string; pt: string };
  technologies: string[];
  url: string;
  github?: string;
  image?: string;
  featured?: boolean;
  professional?: boolean;
};

export const projects: Project[] = [
  {
    number: "01",
    title: { en: "Mistral", pt: "Mistral" },
    category: { en: "Client project · Webeleven", pt: "Projeto para cliente · Webeleven" },
    description: {
      en: "A complete e-commerce experience for one of Brazil's leading wine importers. I contributed to the project from its initial development, helping build and refine the digital experience.",
      pt: "Uma experiência completa de e-commerce para uma das principais importadoras de vinhos do Brasil. Contribuí desde o desenvolvimento inicial, ajudando a construir e refinar a experiência digital.",
    },
    technologies: ["React", "Next.js", "TypeScript"],
    url: "https://www.mistral.com.br/",
    image: "/projects/mistral.webp",
    featured: true,
    professional: true,
  },
  {
    number: "02",
    title: { en: "Linktree", pt: "Linktree" },
    category: { en: "Personal project", pt: "Projeto pessoal" },
    description: {
      en: "A responsive link management interface inspired by the Linktree experience, focused on clean UI and responsive layouts.",
      pt: "Uma interface responsiva de gerenciamento de links inspirada no Linktree, com foco em UI limpa e layouts responsivos.",
    },
    technologies: ["React", "TypeScript", "CSS"],
    url: "https://projeto-linktree-react-one.vercel.app/",
    image: "/projects/linktree.webp",
    github: "https://github.com/epannunzio",
  },
  {
    number: "03",
    title: { en: "Coffee Delivery", pt: "Coffee Delivery" },
    category: { en: "Personal project", pt: "Projeto pessoal" },
    description: {
      en: "A coffee delivery interface focused on product selection, cart interactions and a smooth ordering experience.",
      pt: "Uma interface de delivery de café focada na seleção de produtos, interações de carrinho e uma experiência de pedido fluida.",
    },
    technologies: ["React", "TypeScript", "Styled Components"],
    url: "https://projeto-coffe-delivery-wine.vercel.app/",
    image: "/projects/coffee-delivery.webp",
    github: "https://github.com/epannunzio",
  },
  {
    number: "04",
    title: { en: "Pomodoro", pt: "Pomodoro" },
    category: { en: "Personal project", pt: "Projeto pessoal" },
    description: {
      en: "A focused productivity timer implementing the Pomodoro technique with a simple and distraction-free interface.",
      pt: "Um temporizador de produtividade que implementa a técnica Pomodoro com interface simples e sem distrações.",
    },
    technologies: ["React", "TypeScript", "CSS"],
    url: "https://projeto-pomodoro-iota.vercel.app/",
    image: "/projects/pomodoro.webp",
    github: "https://github.com/epannunzio",
  },
  {
    number: "05",
    title: { en: "Expert Notes", pt: "Expert Notes" },
    category: { en: "Personal project", pt: "Projeto pessoal" },
    description: {
      en: "A note-taking application designed around creating, organizing and managing information through a clean interface.",
      pt: "Uma aplicação de anotações projetada para criar, organizar e gerenciar informações por meio de uma interface limpa.",
    },
    technologies: ["React", "TypeScript", "CSS"],
    url: "https://projeto-react-notes.vercel.app/",
    image: "/projects/expert-notes.webp",
    github: "https://github.com/epannunzio",
  },

];