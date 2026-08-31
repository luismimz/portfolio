export interface Degree {
  eyebrow: string;
  title: string;
  text: string;
  href?: string; // si existe → tarjeta enlazada y resaltada (borde acento)
  cert?: string
}

export interface Course {
  meta: string;
  title: string;
  note?: string;
  href?: string;
  cert?: string
}

export const degrees: Degree[] = [
  {
    eyebrow: "Grado Superior · En curso",
    title: "Desarrollo de Aplicaciones Multiplataforma",
    text: "Ilerna. Java, AI, bases de datos, acceso a datos Sistema de gestion empresarial, interfaces.",
  },
  {
    eyebrow: "Grado Medio · Título oficial",
    title: "Sistemas Microinformáticos y Redes (SMIR)",
    text: "La base de todo lo que hago en servidor: redes, sistemas operativos, hardware y seguridad.",
  },
  {
  eyebrow: "Verificable ↗",
  cert: "java-helsinki",
  title: "Java Programming I · Universidad de Helsinki",
  text: "MOOC.fi, 2026. Cursando la parte II. Certificado con validación pública.",
},
];

export const courses: Course[] = [
  
  { 
    meta: "2026 · Udemy ↗", 
    cert: "webdev-bootcamp", 
    title: "The Complete Full-Stack Web Development Bootcamp", 
    note: "Angela Yu" },
  { 
    meta: "2025 · Udemy", 
    cert: "logica-programacion", 
    title: "Lógica de programación" 
  },
  {
    meta: "2023 · Gamelearn",
    title: "Liderazgo, productividad, gestion del tiempo y negociación",
    note: "Pacific, Triskelion y Merchants",
  },
  { meta: "2022 · Udemy ↗", 
    cert: "git-github", 
    title: "Git y GitHub completo desde cero" 
  },
  {
    meta: "2017 · Servicio Canario de Empleo",
    title: "Actividades de venta",
    note: "Trato con cliente, contabilidad y cierre",
  },
];
