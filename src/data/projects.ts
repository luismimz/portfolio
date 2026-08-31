export interface Project {
  n: string; //"01"
  kind: string; // etiqueta corta: "WordPress", "Backend"..
  title: string;
  description: string;
  tags: string[];
  href?: string; //opcional: si no hay, la tarjeta no es un enlace
  mediaLabel: string; // text del area de imagen
  image?: string; //opcional: si no hay, se muestra un placeholder
}
export const projects: Project[] = [
  {
    n: "01",
    kind: "WordPress",
    title: "La Mano Amiga",
    description: "Sitio web con gestion de agenda, formulario, pagos y correo del dominio. Mantenimiento y copias continuas.",
    tags: ["WordPress", "PHP", "MySQL"],
    href: "https://lamanoamiga.es",
    mediaLabel: "lamanoamiga.es",
    image: "/img/lamanoamiga.webp",
  },
  {
    n: "02",
    kind: "WordPress",
    title: "Pieleva",
    description:
      "Web de servicios con catálogo, SEO técnico y optimización de imágenes. Certificados y firewall gestionados por mí.",
    tags: ["WordPress", "SEO", "Nginx"],
    href: "https://pieleva.com",
    mediaLabel: "pieleva.com",
    image: "/img/pieleva.webp",
  },
  {
    n: "03",
    kind: "Migrada a Next.js",
    title: "Tía María Vallecas",
    description:
      "Reconstruida desde WordPress a Next.js conservando URLs y SEO. Compárala arriba con el antes y el después.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    href: "https://tiamariavallecas.com",
    mediaLabel: "tiamariavallecas.com",
    image: "/img/after.webp",
  },
  {
    n: "04",
    kind: "Infraestructura",
    title: "Servidor dedicado autogestionado",
    description:
      "DNS, correo con SPF/DKIM/DMARC, firewall y fail2ban, certificados, copias y despliegues. Aquí viven todas estas webs.",
    tags: ["Linux", "Nginx", "DNS / Correo"],
    mediaLabel: "panel del servidor",
  },
  {
    n: "05",
    kind: "DAM",
    title: "Proyectos del ciclo en Java",
    description:
      "Aplicaciones con JavaFX y MySQL, más los ejercicios del MOOC de Helsinki. Código abierto en mi GitHub.",
    tags: ["Java", "JavaFX", "MySQL"],
    href: "https://github.com/luismimz",
    mediaLabel: "app de escritorio",
  },
  {
    n: "06",
    kind: "Backend",
    title: "API en NestJS con JWT y roles",
    description:
      "Gestor de incidencias documentado con Swagger, PostgreSQL y despliegue continuo en mi servidor, en curso.",
    tags: ["NestJS", "TypeScript", "PostgreSQL"],
    mediaLabel: "esquema de la API",
  },
]