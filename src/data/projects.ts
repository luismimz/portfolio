export interface Project {
  n: string;
  kind: string;
  title: string;
  description: string;
  tags: string[];
  href?: string;
  mediaLabel: string;
  image?: string;
  hidden?: boolean;
}

export const projects: Project[] = [
  {
    n: "01",
    kind: "WordPress",
    title: "La Mano Amiga",
    description:
      "Web de servicios con gestión de citas, disponibilidad, formularios, pagos online y correo corporativo. También realizo su mantenimiento, seguridad y copias de respaldo.",
    tags: ["WordPress", "Amelia", "Elementor", "PHP", "MySQL"],
    href: "https://lamanoamiga.es",
    mediaLabel: "Vista de lamanoamiga.es",
    image: "/img/lamanoamiga.webp",
  },

  {
    n: "02",
    kind: "WordPress",
    title: "Pieleva",
    description:
      "Web corporativa con catálogo de servicios, optimización SEO, mejora de imágenes, configuración de certificados SSL, seguridad y mantenimiento técnico.",
    tags: ["WordPress", "SEO", "PHP", "MySQL", "Seguridad"],
    href: "https://pieleva.com",
    mediaLabel: "Vista de pieleva.com",
    image: "/img/pieleva.webp",
  },

  {
    n: "03",
    kind: "Next.js",
    title: "Tía María Vallecas",
    description:
      "Reconstrucción de una web WordPress con Next.js, TypeScript y Tailwind CSS, conservando URLs y SEO. Incluye diseño responsive, galería, formularios y sistema de reservas.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "SEO"],
    href: "https://tiamariavallecas.com",
    mediaLabel: "Nueva web de Tía María Vallecas",
    image: "/img/after.webp",
  },

  {
    n: "04",
    kind: "Infraestructura",
    title: "Servidor dedicado con Plesk",
    description:
      "Administración de un servidor dedicado Hetzner con Ubuntu y Plesk para alojar varios proyectos, dominios, bases de datos, certificados y copias de seguridad. DNS gestionadas en Cloudflare y correo empresarial en Microsoft 365.",
    tags: [
      "Hetzner",
      "Ubuntu",
      "Plesk",
      "Cloudflare",
      "Microsoft 365",
      "Fail2ban",
    ],
    mediaLabel: "Panel del servidor dedicado",
  },

  {
    n: "05",
    kind: "DevOps",
    title: "VPS con Coolify y Docker",
    description:
      "Configuración de un VPS Hetzner con Ubuntu, Docker y Coolify para desplegar aplicaciones desde GitHub. Incluye dominios, certificados, variables de entorno, reglas de seguridad en Cloudflare y correo corporativo en IONOS.",
    tags: [
      "Hetzner",
      "Ubuntu",
      "Coolify",
      "Docker",
      "GitHub",
      "Cloudflare",
    ],
    mediaLabel: "Panel de despliegues de Coolify",
  },

  {
    n: "06",
    kind: "Backend",
    title: "API REST con NestJS",
    description:
      "Desarrollo de una API modular con autenticación JWT, control de acceso por roles, validación de datos, documentación con Swagger y base de datos PostgreSQL.",
    tags: [
      "NestJS",
      "TypeScript",
      "JWT",
      "PostgreSQL",
      "Swagger",
      "Docker",
    ],
    mediaLabel: "Documentación de la API",
  },

  {
    n: "07",
    kind: "Java",
    title: "Proyectos en Java",
    description:
      "Aplicaciones y ejercicios desarrollados con Java, programación orientada a objetos, colecciones, archivos, excepciones, JavaFX y bases de datos MySQL.",
    tags: ["Java", "JavaFX", "POO", "MySQL", "JUnit"],
    href: "https://github.com/luismimz",
    mediaLabel: "Aplicaciones desarrolladas en Java",
    hidden: true,
  },
];