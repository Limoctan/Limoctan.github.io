import type { IconSlug } from "../icons/techIcons";
import type { Bi } from "./i18n";

export type Skill = { name: Bi; icon?: IconSlug };

export type SkillGroup = { title: Bi; items: Skill[] };

/** Grouped exactly as in `cv/cv-spanish.md` (languages row excluded). */
export const skillGroups: SkillGroup[] = [
  {
    title: { _es: "Frontend", _en: "Frontend" },
    items: [
      { name: { _es: "Angular", _en: "Angular" }, icon: "Angular" },
      { name: { _es: "VueJS", _en: "VueJS" }, icon: "VueJS" },
      { name: { _es: "React", _en: "React" }, icon: "React" },
      { name: { _es: "TypeScript", _en: "TypeScript" }, icon: "TypeScript" },
      { name: { _es: "CSS3/SASS", _en: "CSS3/SASS" }, icon: "CSS3/SASS" },
      { name: { _es: "HTML5", _en: "HTML5" }, icon: "HTML5" },
    ],
  },
  {
    title: { _es: "Móvil", _en: "Mobile" },
    items: [
      { name: { _es: "Flutter", _en: "Flutter" }, icon: "Flutter" },
      { name: { _es: "Dart", _en: "Dart" }, icon: "Dart" },
    ],
  },
  {
    title: { _es: "Backend & APIs", _en: "Backend & APIs" },
    items: [
      { name: { _es: "NestJS", _en: "NestJS" }, icon: "NestJS" },
      { name: { _es: "Node.js", _en: "Node.js" }, icon: "Node.js" },
      { name: { _es: "Express", _en: "Express" }, icon: "Express" },
      { name: { _es: "PHP", _en: "PHP" }, icon: "PHP" },
      { name: { _es: "Laravel", _en: "Laravel" }, icon: "Laravel" },
    ],
  },
  {
    title: { _es: "Bases de Datos & DevOps", _en: "Databases & DevOps" },
    items: [
      { name: { _es: "PostgreSQL", _en: "PostgreSQL" }, icon: "PostgreSQL" },
      { name: { _es: "MySQL", _en: "MySQL" }, icon: "MySQL" },
      { name: { _es: "Docker", _en: "Docker" }, icon: "Docker" },
      { name: { _es: "Git", _en: "Git" }, icon: "Git" },
      { name: { _es: "CI/CD", _en: "CI/CD" }, icon: "CI/CD" },
    ],
  },
  {
    title: { _es: "Idiomas", _en: "Languages" },
    items: [
      { name: { _es: "Español (Nativo)", _en: "Spanish (Native)" } },
      {
        name: {
          _es: "Inglés (C2 Proficient - EF SET 50 min)",
          _en: "English (C2 Proficient - EF SET 50 min)",
        },
      },
    ],
  },
  {
    title: { _es: "IA", _en: "AI" },
    items: [
      { name: { _es: "OpenCode", _en: "OpenCode" }, icon: "OpenCode" },
      { name: { _es: "Gemini", _en: "Gemini" }, icon: "Gemini" },
      {
        name: {
          _es: "IA Prompting",
          _en: "AI Prompting",
        },
      },
    ],
  },
];
