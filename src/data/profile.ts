import type { Bi } from './i18n';

export const profile = {
  name: 'Jhonatan Brito',
  headline: {
    _es: 'Desarrollador de Software Full-Stack | Frontend & Mobile Specialist',
    _en: 'Full-Stack Software Developer | Frontend & Mobile Specialist',
  } satisfies Bi,
  /** One-line greeting under the name (from the CV summary). */
  tagline: {
    _es: 'Construyo y escalo aplicaciones web y móviles de alto rendimiento.',
    _en: 'I build and scale high-performance web and mobile applications.',
  } satisfies Bi,
  /** Hero intro, first person, derived from the CV professional summary. */
  intro: {
    _es: 'Soy desarrollador de software con más de 5 años de experiencia creando y escalando aplicaciones web y móviles de alto rendimiento. Me especializo en frontend (Angular, VueJS, React) y móvil (Flutter), con bases sólidas en backend (NestJS, PHP, REST APIs), arquitectura de bases de datos relacionales y contenedores (Docker).',
    _en: 'I am a software developer with more than 5 years of experience building and scaling high-performance web and mobile applications. I specialize in frontend (Angular, VueJS, React) and mobile (Flutter), with solid skills in backend (NestJS, PHP, REST APIs), relational database architecture and containers (Docker).',
  } satisfies Bi,
  /** About section: "Resumen profesional" from the CV. */
  summary: {
    _es: 'Desarrollador de Software con más de 5 años de experiencia especializado en la creación y escalamiento de aplicaciones web y móviles de alto rendimiento. Experiencia destacada en desarrollo Frontend (Angular, VueJS, React) y Móvil (Flutter), complementada con conocimientos sólidos en Backend (NestJS, PHP, REST APIs), arquitectura de bases de datos relacionales (SQL) y contenedores (Docker). Historial comprobado en modernización de sistemas heredados, integración de CI/CD y despliegue de soluciones multiplataforma de impacto.',
    _en: 'Software Developer with more than 5 years of experience specializing in the creation and scaling of high-performance web and mobile applications. Outstanding experience in Frontend development (Angular, VueJS, React) and Mobile (Flutter), complemented by solid knowledge of Backend (NestJS, PHP, REST APIs), relational database architecture (SQL) and containers (Docker). Proven track record in legacy system modernization, CI/CD integration and the delivery of impactful cross-platform solutions.',
  } satisfies Bi,
} as const;
