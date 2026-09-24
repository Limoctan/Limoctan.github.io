import type { Bi } from './i18n';

export type Skill = { name: Bi; icon: string | null };

export type SkillGroup = { title: Bi; items: Skill[] };

/** Grouped exactly as in `cv/cv-spanish.md` (languages row excluded). */
export const skillGroups: SkillGroup[] = [
  {
    title: { _es: 'Frontend', _en: 'Frontend' },
    items: [
      { name: { _es: 'Angular', _en: 'Angular' }, icon: 'angular' },
      { name: { _es: 'VueJS', _en: 'VueJS' }, icon: 'vuedotjs' },
      { name: { _es: 'React', _en: 'React' }, icon: 'react' },
      { name: { _es: 'TypeScript', _en: 'TypeScript' }, icon: 'typescript' },
      { name: { _es: 'CSS3/SASS', _en: 'CSS3/SASS' }, icon: 'sass' },
      { name: { _es: 'HTML5', _en: 'HTML5' }, icon: 'html5' },
      { name: { _es: 'Responsive Design', _en: 'Responsive Design' }, icon: null },
    ],
  },
  {
    title: { _es: 'Móvil', _en: 'Mobile' },
    items: [
      { name: { _es: 'Flutter', _en: 'Flutter' }, icon: 'flutter' },
      { name: { _es: 'Dart', _en: 'Dart' }, icon: 'dart' },
      {
        name: {
          _es: 'Desarrollo Multiplataforma (iOS/Android)',
          _en: 'Cross-platform Development (iOS/Android)',
        },
        icon: null,
      },
    ],
  },
  {
    title: { _es: 'Backend & APIs', _en: 'Backend & APIs' },
    items: [
      { name: { _es: 'NestJS', _en: 'NestJS' }, icon: 'nestjs' },
      { name: { _es: 'Node.js', _en: 'Node.js' }, icon: 'nodedotjs' },
      { name: { _es: 'PHP', _en: 'PHP' }, icon: 'php' },
      { name: { _es: 'API RESTful', _en: 'RESTful API' }, icon: null },
    ],
  },
  {
    title: { _es: 'Bases de Datos & DevOps', _en: 'Databases & DevOps' },
    items: [
      { name: { _es: 'SQL', _en: 'SQL' }, icon: null },
      { name: { _es: 'PostgreSQL', _en: 'PostgreSQL' }, icon: 'postgresql' },
      { name: { _es: 'MySQL', _en: 'MySQL' }, icon: 'mysql' },
      { name: { _es: 'Docker', _en: 'Docker' }, icon: 'docker' },
      { name: { _es: 'CI/CD', _en: 'CI/CD' }, icon: null },
      { name: { _es: 'Git', _en: 'Git' }, icon: 'git' },
    ],
  },
];
