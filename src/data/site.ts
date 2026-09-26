import type { Lang } from "./i18n";

export const site = {
  /** GitHub Pages user site (no base path). */
  url: "https://limoctan.github.io",
  analyticsId: "G-VKYNZGXTXQ",
  social: {
    github: "https://github.com/Limoctan",
    linkedin: "https://www.linkedin.com/in/jhonatan-brito-c/",
  },
  contact: {
    email: "jhonatanjesusbrito@gmail.com",
    phoneHref: "+584248578294",
    phoneDisplay: "+(58) 424 8578294",
  },
  /** Language-specific CVs, URL-encoded (filenames keep their spaces). */
  cv: {
    es: "/cv/Jhonatan_Brito_CV_FullStack.pdf",
    en: "/cv/Jhonatan_Brito_CV_(English).pdf",
  } satisfies Record<Lang, string>,
} as const;
