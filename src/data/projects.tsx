export type SimpleProject = {
  name: string;
  imageKey: string;
  description: string;
  gradient: [string, string];
  url: string;
  tech: string[];
};

export const PROJECTS: SimpleProject[] = [
  {
    name: "InAmigos Site",
    imageKey: "inamigos-site",
    description: "Modern community website built with TypeScript",
    gradient: ["#2563eb", "#0f172a"],
    url: "https://in-amigos-site.vercel.app",
    tech: ["typescript", "nextjs", "tailwindcss"],
  },
  {
    name: "Household Services Website",
    imageKey: "household-services-website",
    description: "Service platform for household bookings and workflows",
    gradient: ["#0f766e", "#042f2e"],
    url: "https://github.com/MihirTank03/household-services-website",
    tech: ["typescript", "nextjs", "tailwindcss"],
  },
  {
    name: "YouTube Content Manager",
    imageKey: "youtube-content-manager",
    description: "Dashboard concept for organizing creator workflows",
    gradient: ["#dc2626", "#111827"],
    url: "https://github.com/MihirTank03/YouTube-Content-Manager",
    tech: ["typescript", "react", "tailwindcss"],
  },
  {
    name: "OS CPU Scheduling Visualizer",
    imageKey: "os-cpu-scheduling-visualizer",
    description: "Interactive visualizer for CPU scheduling algorithms",
    gradient: ["#7c3aed", "#1e1b4b"],
    url: "https://os-cpu-scheduling-visualizer.vercel.app",
    tech: ["javascript", "react", "tailwindcss"],
  },
  {
    name: "QR Project",
    imageKey: "qr-project",
    description: "JavaScript utility project for QR workflows",
    gradient: ["#0891b2", "#164e63"],
    url: "https://github.com/MihirTank03/QR-project",
    tech: ["javascript", "react", "tailwindcss"],
  },
  {
    name: "Calculator Using JS",
    imageKey: "calculator-using-js",
    description: "Clean browser calculator built with core web tech",
    gradient: ["#f97316", "#431407"],
    url: "https://calculator-using-js-mu.vercel.app",
    tech: ["javascript", "react", "tailwindcss"],
  },
  {
    name: "Tic Tac Toe",
    imageKey: "tick-tak-toe",
    description: "Classic browser game implemented in JavaScript",
    gradient: ["#16a34a", "#052e16"],
    url: "https://github.com/MihirTank03/tick-tak-toe",
    tech: ["javascript", "react", "tailwindcss"],
  },
];
