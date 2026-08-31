export interface Certificate {
  slug: string;
  title: string;
  issuer: string;
  date: string;
  image: string;
  verifyUrl?: string;
}

export const certificates: Certificate[] = [
  {
    slug: "java-helsinki",
    title: "Java Programming I",
    issuer: "MOOC.fi · Universidad de Helsinki",
    date: "2026 · 5 ECTS",
    image: "/img/Java-I-UHelsinki.webp",
    verifyUrl: "https://certificates.mooc.fi/validate/rv0jtbu05qo",
  },
  {
    slug: "webdev-bootcamp",
    title: "The Complete Full-Stack Web Development Bootcamp",
    issuer: "Udemy · Dr. Angela Yu",
    date: "2026 · 62 h",
    image: "/img/angelaYu-Udemy.webp",
    verifyUrl: "https://ude.my/UC-e105dfd8-c3e8-46ae-a98c-0a25f353d16a",
  },
  {
    slug: "git-github",
    title: "Git y GitHub Completo Desde Cero",
    issuer: "Udemy · Jose Javier Villena",
    date: "2022",
    image: "/img/git-githubUdemy.webp",
    verifyUrl: "https://ude.my/UC-6b1db4f4-b5c4-405a-82ae-4d828bc74119",
  },
  {
    slug: "logica-programacion",
    title: "Lógica de programación",
    issuer: "Udemy · Sayyab Tariq Awan",
    date: "2025",
    image: "/img/logicadeprogramacion.webp",
    verifyUrl: "https://ude.my/UC-bdd94b21-4248-43b4-b5ca-3ad8fac68dbf",
  },
];
