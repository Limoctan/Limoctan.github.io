import type { Bi } from './i18n';

export type Job = {
  company: string;
  role: Bi;
  dates: Bi;
  /** Bullets support `**bold**`; known tech names get an inline icon. */
  bullets: Bi[];
};

/**
 * CV order is intentional (not newest-first): Oclinicals is last because it
 * was a temporary job unrelated to the primary career.
 */
export const jobs: Job[] = [
  {
    company: 'Circle Studio Labs',
    role: {
      _es: 'Desarrollador Frontend & Mobile',
      _en: 'Frontend & Mobile Developer',
    },
    dates: { _es: 'Enero 2021 – Marzo 2025', _en: 'Jan 2021 – Mar 2025' },
    bullets: [
      {
        _es: '**Desarrollo Móvil:** Diseñé, construí e implementé 3 aplicaciones móviles utilizando **Flutter**, logrando un despliegue exitoso enfocado en alto impacto social y atención a miles de usuarios activos.',
        _en: '**Mobile Development:** Designed, built and shipped 3 mobile applications using **Flutter**, achieving a successful launch focused on social impact and serving thousands of active users.',
      },
      {
        _es: '**Desarrollo Frontend:** Construí interfaces web escalables y adaptativas mediante **Angular** y **VueJS**, optimizando la experiencia de usuario (UX) y reduciendo los tiempos de carga en pantalla.',
        _en: '**Frontend Development:** Built scalable, responsive web interfaces with **Angular** and **VueJS**, optimizing user experience (UX) and reducing on-screen load times.',
      },
      {
        _es: '**Integración Backend:** Diseñé e implementé arquitecturas de **APIs RESTful** robustas con **NestJS**, garantizando una comunicación fluida y segura entre el cliente y el servidor.',
        _en: '**Backend Integration:** Designed and implemented robust **RESTful API** architectures with **NestJS**, ensuring smooth and secure client-server communication.',
      },
      {
        _es: '**Colaboración & Calidad:** Automaticé flujos de trabajo e integración continua mediante pipelines de **CI/CD** y desplegué entornos aislados con **Docker**.',
        _en: '**Collaboration & Quality:** Automated workflows and continuous integration through **CI/CD** pipelines and deployed isolated environments with **Docker**.',
      },
    ],
  },
  {
    company: 'SOMOS SISTEMAS, C.A.',
    role: { _es: 'Desarrollador Junior / Mid', _en: 'Junior / Mid Developer' },
    dates: { _es: 'Marzo 2019 – Enero 2021', _en: 'Mar 2019 – Jan 2021' },
    bullets: [
      {
        _es: '**Modernización de Software:** Lideré la migración y modernización de sistemas heredados basados en **PHP**, mejorando la mantenibilidad del código y la seguridad del sistema.',
        _en: '**Software Modernization:** Led the migration and modernization of legacy **PHP** systems, improving code maintainability and system security.',
      },
      {
        _es: '**Desarrollo ERP:** Desarrollé y mantuve módulos clave para un sistema **ERP** empresarial, optimizando procesos de gestión interna e inventario.',
        _en: '**ERP Development:** Built and maintained key modules for a company **ERP** system, optimizing internal management and inventory processes.',
      },
      {
        _es: '**Atención al Cliente & Requisitos:** Analicé e implementé de manera ágil los requerimientos técnicos solicitados por nuevos clientes, garantizando entregas a tiempo y sin interrupción de operaciones.',
        _en: '**Client Support & Requirements:** Analyzed and swiftly implemented technical requirements requested by new clients, ensuring on-time delivery without interrupting operations.',
      },
    ],
  },
  {
    company: 'Oclinicals',
    role: {
      _es: 'Agente de Operaciones y Entrada de Datos',
      _en: 'Operations & Data Entry Agent',
    },
    dates: { _es: 'Noviembre 2025 – Junio 2026', _en: 'Nov 2025 – Jun 2026' },
    bullets: [
      {
        _es: 'Mantuve un índice de precisión del 99%+ en el registro e integración de datos críticos de pacientes, garantizando la integridad de los sistemas de información bajo altos volúmenes de trabajo.',
        _en: 'Maintained a 99%+ accuracy rate when recording and integrating critical patient data, ensuring information system integrity under high workloads.',
      },
    ],
  },
];
