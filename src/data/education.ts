export interface Degree {
  eyebrow: string;
  title: string;
  text: string;
  href?: string; // si existe → tarjeta enlazada y resaltada (borde acento)
}

export interface Course {
  meta: string;
  title: string;
  note?: string;
  href?: string;
}

export const degrees: Degree[] = [
  {
    eyebrow: "Grado Superior · En curso",
    title: "Desarrollo de Aplicaciones Multiplataforma",
    text: "Ilerna. Java, bases de datos, acceso a datos e interfaces.",
  },
  {
    eyebrow: "Grado Medio · Título oficial",
    title: "Sistemas Microinformáticos y Redes (SMIR)",
    text: "La base de todo lo que hago en servidor: redes, sistemas operativos, hardware y seguridad.",
  },
  {
    eyebrow: "Verificable ↗",
    href: "https://certificates.mooc.fi/validate/rv0jtbu05qo",
    title: "Java Programming I · Universidad de Helsinki",
    text: "MOOC.fi, 2026. Cursando la parte II. Certificado con validación pública.",
  },
];

export const courses: Course[] = [
  {
    meta: "2022 · Udemy ↗",
    href: "https://udemy-certificate.s3.amazonaws.com/image/UC-6b1db4f4-b5c4-405a-82ae-4d828bc74119.jpg",
    title: "Git y GitHub completo desde cero",
  },
  { meta: "2025 · Udemy", title: "Lógica de programación" },
  {
    meta: "2023 · Gamelearn",
    title: "Liderazgo, productividad y negociación",
    note: "Pacific, Triskelion y Merchants",
  },
  {
    meta: "2017 · Servicio Canario de Empleo",
    title: "Actividades de venta",
    note: "Trato con cliente y cierre",
  },
];
