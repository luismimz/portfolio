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
    label: "A diario",
    skills: [
      { name: "PHP (WordPress / Joomla)", level: 88 },
      { name: "HTML / CSS / Tailwind", level: 90 },
      { name: "JavaScript / TypeScript", level: 85 },
    ],
  },
  {
    label: "Con soltura",
    skills: [
      { name: "Linux / Nginx / DNS / Correo", level: 82 },
      { name: "MySQL / PostgreSQL", level: 80 },
      { name: "Node / NestJS", level: 74 },
    ],
  },
  {
    label: "Aprendiendo ahora",
    skills: [
      { name: "Java · MOOC Helsinki II", level: 70 },
      { name: "Next.js", level: 60 },
      { name: "Docker / CI", level: 50 },
    ],
  },
];
