export type Project = {
  title_es: string;
  title_en: string;
  desc_es: string;
  desc_en: string;
  tags: string[];
  /** Placeholder links — replace with real URLs later. */
  links: { demo: string; code: string };
  /** Locally generated SVG placeholder (no external requests). */
  image: string;
};

/** Exactly three stub projects with realistic dummy data. */
export const projects: Project[] = [
  {
    title_es: 'TaskFlow',
    title_en: 'TaskFlow',
    desc_es:
      'Gestor de tareas en tiempo real con tableros Kanban, asignación de trabajo en equipo y sincronización sin conexión.',
    desc_en:
      'Real-time task manager with Kanban boards, team assignment and offline synchronization.',
    tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    links: { demo: '#', code: '#' },
    image: '/images/projects/taskflow.svg',
  },
  {
    title_es: 'RutaBus',
    title_en: 'RutaBus',
    desc_es:
      'App de transporte público con seguimiento de rutas en vivo, horarios actualizados y alertas push para pasajeros.',
    desc_en:
      'Public transport app with live route tracking, up-to-date schedules and push alerts for passengers.',
    tags: ['Flutter', 'Dart', 'NestJS', 'MySQL'],
    links: { demo: '#', code: '#' },
    image: '/images/projects/rutabus.svg',
  },
  {
    title_es: 'NexoStats',
    title_en: 'NexoStats',
    desc_es:
      'Panel de analítica de producto que convierte métricas en dashboards claros, con informes programados y exportables.',
    desc_en:
      'Product analytics dashboard that turns metrics into clear dashboards, with scheduled and exportable reports.',
    tags: ['Vue', 'TypeScript', 'Docker'],
    links: { demo: '#', code: '#' },
    image: '/images/projects/nexostats.svg',
  },
];
