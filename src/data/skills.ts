export interface Skill {
  name: string;
  level: number; // 0–100
}

export interface SkillGroup {
  label: string;
  skills: Skill[];
}

export const skillGroups: SkillGroup[] = [
  {
    label: "A menudo",
    skills: [
      { name: "PHP (WordPress / Joomla)", level: 88 },
      { name: "HTML / CSS / Tailwind", level: 90 },
      { name: "JavaScript / TypeScript", level: 60 },
    ],
  },
  {
    label: "A diario",
    skills: [
      { name: "Linux / Nginx / DNS / Correo", level: 70 },
      { name: "MySQL / PostgreSQL", level: 60 },
      { name: "Node / NestJS", level: 65 },
    ],
  },
  {
    label: "Aprendiendo ahora",
    skills: [
      { name: "Java · MOOC Helsinki II", level: 25 },
      { name: "Next.js", level: 60 },
      { name: "Docker / CI", level: 40 },
    ],
  },
];
