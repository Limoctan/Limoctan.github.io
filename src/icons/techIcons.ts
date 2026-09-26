import type { ComponentProps } from "astro/types";
import {
  Angular,
  Dart,
  Docker,
  Express,
  Flutter,
  Git,
  Github,
  Githubactions,
  Googlegemini,
  Html5,
  Laravel,
  Maildotru,
  Mysql,
  Nestjs,
  Nodedotjs,
  Php,
  Postgresql,
  React,
  Sass,
  Typescript,
  Vuedotjs,
} from "simple-icons-astro";
import Phone from "./Phone.astro";
import Linkedin from "./Linkedin.astro";
import Opencode from "./Opencode.astro";

type IconProps = ComponentProps<typeof Github>;
type IconComponent = (props: IconProps) => any;

export const techIcons = {
  Angular: Angular,
  VueJS: Vuedotjs,
  React: React,
  TypeScript: Typescript,
  "CSS3/SASS": Sass,
  HTML5: Html5,
  Flutter: Flutter,
  Dart: Dart,
  NestJS: Nestjs,
  "Node.js": Nodedotjs,
  PHP: Php,
  PostgreSQL: Postgresql,
  MySQL: Mysql,
  Docker: Docker,
  Git: Git,
  Express: Express,
  Laravel: Laravel,
  "CI/CD": Githubactions,
  Email: Maildotru,
  Phone: Phone,
  Github: Github,
  Linkedin: Linkedin,
  OpenCode: Opencode,
  Gemini: Googlegemini,
};

export type IconSlug = keyof typeof techIcons;

export function getIcon(slug: IconSlug): IconComponent {
  return techIcons[slug];
}
