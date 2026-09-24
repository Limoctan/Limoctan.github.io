export type Lang = 'es' | 'en';

/** Bilingual string, side by side, so translations cannot drift apart. */
export type Bi = { _es: string; _en: string };

export const t = (value: Bi, lang: Lang): string => value[`_${lang}`];

/** Localized anchor ids: `/` uses Spanish ids, `/en/` uses English ids. */
export const anchors = {
  es: {
    about: 'sobre-mi',
    experience: 'experiencia',
    projects: 'proyectos',
    contact: 'contacto',
  },
  en: {
    about: 'about',
    experience: 'experience',
    projects: 'projects',
    contact: 'contact',
  },
} as const;

export type SectionId = keyof (typeof anchors)['es'];

export const sectionOrder: SectionId[] = ['about', 'experience', 'projects', 'contact'];

export const headings: Record<SectionId, Bi> = {
  about: { _es: 'Sobre mí', _en: 'About' },
  experience: { _es: 'Experiencia', _en: 'Experience' },
  projects: { _es: 'Proyectos', _en: 'Projects' },
  contact: { _es: 'Contacto', _en: 'Contact' },
};

export const navLinks: { id: SectionId; label: Bi }[] = sectionOrder.map((id) => ({
  id,
  label: headings[id],
}));

export const meta: Record<Lang, { title: string; description: string }> = {
  es: {
    title: 'Jhonatan Brito — Desarrollador de Software Full-Stack',
    description:
      'Portafolio de Jhonatan Brito, desarrollador de software full-stack especializado en frontend y móvil (Angular, Vue, React, Flutter). Experiencia, proyectos y contacto.',
  },
  en: {
    title: 'Jhonatan Brito — Full-Stack Software Developer',
    description:
      'Portfolio of Jhonatan Brito, full-stack software developer specializing in frontend and mobile (Angular, Vue, React, Flutter). Experience, projects and contact.',
  },
};

export const ui = {
  skipToContent: { _es: 'Saltar al contenido', _en: 'Skip to content' },
  downloadCv: { _es: 'Descargar CV', _en: 'Download CV' },
  language: { _es: 'Idioma', _en: 'Language' },
  jumpTo: { _es: 'Enlaces rápidos', _en: 'Quick links' },
  social: { _es: 'Redes sociales', _en: 'Social links' },
  footer: {
    _es: '© 2026 Jhonatan Brito · Hecho con Astro',
    _en: '© 2026 Jhonatan Brito · Built with Astro',
  },
  emailLabel: { _es: 'Enviar correo a', _en: 'Send email to' },
  phoneLabel: { _es: 'Llamar por teléfono', _en: 'Call by phone' },
  contactText: {
    _es: '¿Tienes un proyecto o una vacante en mente? Escríbeme y te respondo pronto.',
    _en: 'Have a project or a role in mind? Drop me a line and I will get back to you soon.',
  },
  onGithub: { _es: 'Perfil de GitHub', _en: 'GitHub profile' },
  onLinkedin: { _es: 'Perfil de LinkedIn', _en: 'LinkedIn profile' },
  projectDemo: { _es: 'Demo', _en: 'Demo' },
  projectCode: { _es: 'Código', _en: 'Code' },
  projectsNote: {
    _es: 'Proyectos de ejemplo — reemplazar con proyectos reales.',
    _en: 'Sample projects — replace with real ones.',
  },
  notFound: {
    code: { _es: '404', _en: '404' },
    title: { _es: 'Página no encontrada', _en: 'Page not found' },
    message: {
      _es: 'La página que buscas no existe o se movió.',
      _en: 'The page you are looking for does not exist or has moved.',
    },
    home: { _es: 'Volver al inicio', _en: 'Back to home' },
  },
} as const;
