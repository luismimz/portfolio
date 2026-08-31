export interface TimelineEntry {
  meta: string; //izq: fecha o etiqueta "2020 - Hoy", "Certificado"
  title: string;
  org?: string; // se pinta en gris tras el titulo
  text?: string;
  href?: string; //si meta es un enlace
}
export const experience : TimelineEntry[]=[
  {
    meta: "2020 - Hoy",
    title: "Desarrollo y mantenimiento web",
    org: "Clientes propios",
    text: "Webs y tiendas en WordPress y Joomla: temas a medidas, migraciones, rendimiento y soporte. Trato directo con el cliente, presupuesto y entrega.",
  },
  {
    meta: "2019 - Hoy",
    title: "Administración de servidor dedicado y VPS",
    org: "Autogestión",
    text: "DNS, Cloudflare, correo, firewall, certificados SSL, copias de seguridad y despliegues."
  },
  {
  meta: "2018 - Hoy",
  title: "Responsable de tienda",
  org: "Orange · Fuerteventura",
  text: "Dirijo un equipo de 5–7 personas: horarios, conflictos, formación y seguimiento individual para que cada uno progrese. KPIs, planes de acción, gestión de incidencias y soporte informático del punto de venta — equipos, impresoras y aplicaciones internas (Siebel, Pangea, extranet, ARPA…). Aquí aprendí a liderar, priorizar y traducir lo técnico a quien no lo es.",
},

]