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

export const professionalProjects: Project[] = [
  {
    title_es: "Aftim",
    title_en: "Aftim",
    desc_es:
      "ERP de gestión de inventario y ventas con paneles de control, informes y facturación. Me encargue del mantenimiento y desarrollo de nuevas funcionalidades. Mi aporte más importante fue la implementación del sistema de tasa de cambio, que permitia actualizar todos los precios del sistema segun la tasa del dia o una tasa arbitraria.",
    desc_en:
      "Inventory and sales management ERP with dashboards, reports and invoicing. I was in charge of maintenance and development of new features. My most important contribution was the implementation of the exchange rate system, which allowed updating all system prices according to the daily rate or an arbitrary rate.",
    tags: ["HTML5", "JQuery", "PHP", "MySQL", "Bootstrap"],
    links: { demo: "https://market.aftim.app/sistema/login/entrar/", code: "" },
    image: "/images/projects/aftim.png",
  },
  {
    title_es: "Aramark",
    title_en: "Aramark",
    desc_es:
      "App para gestión de beneficios de alimentación para trabajadores en Chile. Incluye app moviles y admin web. Desarrollé gran parte de la aplicación movil, incluyendo pagos con QR y geolocalización de locales.",
    desc_en:
      "App for managing food benefits for employees in Chile. Includes mobile app and web admin. I developed a large part of the mobile application, including QR payments and geolocation of stores.",
    tags: ["Angular", "Flutter", "Dart", "NestJS", "PostgreSQL", "Docker"],
    links: {
      demo: "https://app.aramarkpay.cl/auth/login?returnUrl=%2Fhome",
      code: "",
    },
    image: "/images/projects/aramark.png",
  },
  {
    title_es: "Locales Conectados",
    title_en: "Locales Conectados",
    desc_es:
      "App que permitía a los usuarios canjear ayudas sociales y realizar pagos utilizando únicamente su cédula de identidad en pequeños comercios de barrio. Participé en el desarrollo de la aplicación móvil y el panel de administración web, incluyendo la integración con el sistema de pagos Transbank.",
    desc_en:
      "App that allowed users to redeem social benefits and make payments using only their identity card in small neighborhood stores. I participated in the development of the mobile application and the web administration panel, including integration with the Transbank payment system.",
    tags: ["Vue", "TypeScript", "Flutter", "Dart"],
    links: { demo: "", code: "" },
    image: "/images/projects/lc.jpg",
  },
];

export const personalProjects: Project[] = [
  {
    title_es: "Venedle",
    title_en: "Venedle",
    desc_es:
      "App de adivinar venezolanos famosos. Diariamente se puede adivinar una nueva personas. Tiene pistas segun caracteristicas de la personas y rachas.",
    desc_en:
      "An app for guessing famous Venezuelans. You can guess a new person every day. It features clues based on the person's characteristics and includes a streak system.",
    tags: ["React", "TypeScript", "Express", "PostgreSQL"],
    links: {
      demo: "https://www.venedle.lat/",
      code: "https://github.com/Limoctan/venedle",
    },
    image: "/images/projects/venedle.png",
  },
  {
    title_es: "Pickea (WIP)",
    title_en: "Pickea (WIP)",
    desc_es:
      "App para organizar partidos de futbol entre amigos. Consta de salas para añadir los jugadores participantes, sistema de draft y gestión de pagos.",
    desc_en:
      "An app for organizing soccer matches among friends. It features lobbies for adding participating players, a draft system, and payment management.",
    tags: ["React", "Laravel", "Tailwind", "PostgreSQL"],
    links: {
      demo: "",
      code: "https://github.com/Limoctan/futdraft",
    },
    image: "/images/projects/pickea.png",
  },
];
