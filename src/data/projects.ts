export type Project = {
  number: string;
  title: string;
  category: string;
  description: string;
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
    title: "Mistral",
    category: "Client project · Webeleven",
    description:
      "A complete e-commerce experience for one of Brazil's leading wine importers. I contributed to the project from its initial development, helping build and refine the digital experience.",
    technologies: ["React", "Next.js", "TypeScript"],
    url: "https://www.mistral.com.br/",
    image: "/projects/mistral.webp",
    featured: true,
    professional: true,
  },
  {
    number: "02",
    title: "Linktree",
    category: "Personal project",
    description:
      "A responsive link management interface inspired by the Linktree experience, focused on clean UI and responsive layouts.",
    technologies: ["React", "TypeScript", "CSS"],
    url: "https://projeto-linktree-react-one.vercel.app/",
    image: "/projects/linktree.webp",
    github: "https://github.com/epannunzio",
  },
  {
    number: "03",
    title: "Coffee Delivery",
    category: "Personal project",
    description:
      "A coffee delivery interface focused on product selection, cart interactions and a smooth ordering experience.",
    technologies: ["React", "TypeScript", "Styled Components"],
    url: "https://projeto-coffe-delivery-wine.vercel.app/",
    image: "/projects/coffee-delivery.webp",
    github: "https://github.com/epannunzio",
  },
  {
    number: "04",
    title: "Pomodoro",
    category: "Personal project",
    description:
      "A focused productivity timer implementing the Pomodoro technique with a simple and distraction-free interface.",
    technologies: ["React", "TypeScript", "CSS"],
    url: "https://projeto-pomodoro-iota.vercel.app/",
    image: "/projects/pomodoro.webp",
    github: "https://github.com/epannunzio",
  },
  {
    number: "05",
    title: "Expert Notes",
    category: "Personal project",
    description:
      "A note-taking application designed around creating, organizing and managing information through a clean interface.",
    technologies: ["React", "TypeScript", "CSS"],
    url: "https://projeto-react-notes.vercel.app/",
    image: "/projects/expert-notes.webp",
    github: "https://github.com/epannunzio",
  },

];