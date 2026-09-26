import type { Bi } from "./i18n";

export const profile = {
  name: "Jhonatan Brito",
  headline: {
    _es: "Desarrollador de Software Full-Stack",
    _en: "Full-Stack Software Developer",
  } satisfies Bi,
  /** One-line greeting under the name (from the CV summary). */
  tagline: {
    _es: "Construyo y escalo aplicaciones web y móviles de alto rendimiento.",
    _en: "I build and scale high-performance web and mobile applications.",
  } satisfies Bi,
  /** Hero intro, first person, derived from the CV professional summary. */
  intro: {
    _es: "+5 años diseñando y escalando software web y móvil. Especialista en arquitecturas frontend modernas, Flutter y sistemas backend eficientes.",
    _en: "5+ years designing and scaling web and mobile software. Specialist in modern frontend architectures, Flutter, and efficient backend systems.",
  } satisfies Bi,
  /** About section: "Resumen profesional" from the CV. */
  summary: {
    _es: "Entiendo el desarrollo de software no solo como escribir código, sino como la resolución eficiente de problemas. Con experiencia tanto en entornos web como móviles, me especializo en conectar interfaces complejas con arquitecturas backend sólidas. Aprovecho el potencial de las herramientas de IA para optimizar mi proceso de programación, automatizar tareas repetitivas y acelerar la entrega de valor. Trabajo con foco en la usabilidad, la velocidad de iteración y la construcción de productos preparados para crecer.",
    _en: "I view software development not merely as writing code, but as efficient problem-solving. With experience in both web and mobile environments, I specialize in connecting complex interfaces with robust backend architectures. I leverage AI tools to optimize my coding process, automate repetitive tasks, and accelerate the delivery of value. My work focuses on usability, iteration speed, and building products designed for scalability.",
  } satisfies Bi,
} as const;
