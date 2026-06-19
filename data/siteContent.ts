export type NavItem = {
  label: string;
  href: string;
};

export type HighlightStat = {
  value: string;
  label: string;
};

export type ExpertiseGroup = {
  title: string;
  items: string[];
};

export type ExperienceItem = {
  period: string;
  role: string;
  company: string;
  summary: string;
  points: string[];
};

export type ImpactItem = {
  title: string;
  description: string;
  surface: "dark" | "coral" | "cream";
};

export type ProjectItem = {
  title: string;
  category: string;
  description: string;
  outcome: string;
  tags: string[];
  url: string;
  github?: string;
  status?: "featured" | "in-progress" | "archive";
};

export type ContactMethod = {
  label: string;
  value: string;
  href: string;
};

export const siteMeta = {
  name: "M. Alvy Eka Fauzi",
  shortName: "Alvy",
  location: "Bogor, Indonesia",
  role: "Software Engineer with strong frontend expertise",
  description:
    "Software Engineer who can handle frontend and backend work, with stronger depth in frontend engineering across React, Next.js, TypeScript, and React Native.",
  linkedin: "https://www.linkedin.com/in/alvy-fauzi/",
  github: "https://github.com/alvyfz",
  email: "mailto:alvyfauzi10@gmail.com",
  whatsapp: "https://wa.me/6282214644612",
  website: "https://alvyfz.vercel.app/",
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

export const heroContent = {
  eyebrow: "Software Engineering With Frontend Depth",
  title:
    "I build end-to-end digital products, with strongest expertise in frontend experiences that are polished and production-ready.",
  intro:
    "I am a software engineer who can work across frontend and backend needs, while bringing my strongest value through frontend architecture, UI implementation, performance, accessibility, and product-facing execution.",
  supporting:
    "My professional experience spans enterprise delivery, consulting, and consumer-facing products across Prudential Indonesia, CODE.ID, KMPlus Consulting, and tiket.com, with hands-on work in web, mobile, API integration, and product collaboration.",
};

export const highlightStats: HighlightStat[] = [
  {
    value: "4+",
    label: "professional environments across enterprise, consulting, and consumer product teams",
  },
  {
    value: "Frontend + Backend",
    label: "capable of working across interface, integration, and product delivery layers",
  },
  {
    value: "Frontend-first",
    label: "strongest depth in UI quality, maintainability, performance, and shipping discipline",
  },
];

export const aboutSummary = [
  "I enjoy turning business requirements into products that feel clear, fast, and dependable, especially on the frontend where user experience and implementation quality meet.",
  "While I can handle both frontend and backend work, my strongest depth is in React, Next.js, TypeScript, and React Native, supported by experience integrating REST APIs, GraphQL services, reusable UI systems, and production maintenance.",
  "I work best in collaborative teams where product, design, backend, and QA move together to ship reliable experiences with clean execution.",
];

export const expertiseGroups: ExpertiseGroup[] = [
  {
    title: "Frontend Foundations",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Responsive UI",
      "Component Architecture",
      "Tailwind CSS",
    ],
  },
  {
    title: "Mobile And Integration",
    items: [
      "React Native",
      "REST API Integration",
      "GraphQL",
      "State Management",
      "Web To Mobile Consistency",
    ],
  },
  {
    title: "Backend Supporting Skills",
    items: [
      "Node.js",
      "Express.js",
      "Go",
      "MySQL",
      "MongoDB",
      "Docker",
      "API Design Awareness",
    ],
  },
  {
    title: "Delivery And Quality",
    items: [
      "Code Review",
      "Performance Mindset",
      "Error Tracking",
      "Agile/Scrum",
      "Jira",
      "Confluence",
      "Cross-functional Collaboration",
    ],
  },
];

export const experienceItems: ExperienceItem[] = [
  {
    period: "2023 - Present",
    role: "Frontend Developer",
    company: "Prudential Indonesia via CODE.ID",
    summary:
      "Contribute to enterprise product delivery across web and mobile surfaces, with ownership focused on frontend implementation while collaborating closely with broader engineering and product functions.",
    points: [
      "Develop and maintain React Native applications for Android and iOS.",
      "Build and maintain React and TypeScript web experiences for ongoing business needs.",
      "Support code review practices to keep implementation quality and consistency high.",
      "Collaborate closely with project manager, backend engineers, QA, automation tester, and technical analyst in Agile delivery.",
    ],
  },
  {
    period: "2023 - Present",
    role: "Frontend Developer",
    company: "CODE.ID",
    summary:
      "Work as part of a software development services environment, contributing frontend engineering capability for client delivery and cross-functional execution.",
    points: [
      "Assigned to Prudential Indonesia as part of a delivery team that includes backend engineers, QA, automation tester, technical analyst, and project manager.",
      "Support implementation quality and delivery consistency in a client-facing engineering environment.",
      "Strengthen collaboration patterns between frontend execution and broader product delivery needs.",
    ],
  },
  {
    period: "2023",
    role: "Frontend Developer",
    company: "KMPlus Consulting",
    summary:
      "Worked on SSO and multiple SaaS products with strong focus on UI delivery, API integration, and responsive implementation in a consulting environment.",
    points: [
      "Translate UI and UX design into interactive, responsive product interfaces.",
      "Integrate frontend applications with REST APIs across multiple products.",
      "Coordinate with QA to keep bug resolution and feature validation moving efficiently.",
      "Support product delivery that connects frontend requirements with backend services and business workflows.",
    ],
  },
  {
    period: "2022",
    role: "Frontend Engineer",
    company: "tiket.com",
    summary:
      "Contributed within a consumer-facing squad where code quality, SEO, performance, and reliability directly affected user experience at scale.",
    points: [
      "Contributed to migration work toward Next.js to support SEO and performance goals.",
      "Helped maintain code quality and improve the stability of ongoing features.",
      "Supported error tracking setup to catch issues faster and improve investigation flow.",
    ],
  },
  {
    period: "2022",
    role: "Frontend Developer and Team Lead",
    company: "KMPlus Consulting",
    summary:
      "Supported the development of three SaaS applications and an SSO architecture while taking ownership in team coordination, delivery quality, and hiring support.",
    points: [
      "Led a frontend team of six members during delivery.",
      "Participated in frontend interviewing and team growth activities.",
      "Balanced implementation work with coordination responsibilities across the team.",
      "Worked in a role that required both hands-on engineering and broader delivery ownership.",
    ],
  },
  {
    period: "2021 - 2022",
    role: "Fullstack Engineer Student",
    company: "Alterra Academy",
    summary:
      "Built end-to-end foundations through frontend, backend, and product mini projects, including the office booking system and property platform work.",
    points: [
      "Worked on frontend and backend capstone delivery for an office booking system.",
      "Built mini projects with React, GraphQL, Go, MySQL, MongoDB, Docker, and AWS EC2.",
      "Strengthened collaboration and communication through project-based learning.",
    ],
  },
];

export const impactItems: ImpactItem[] = [
  {
    title: "Design To Production",
    description:
      "Translate design direction into interfaces that feel refined, responsive, and ready for real product usage rather than one-off demos.",
    surface: "dark",
  },
  {
    title: "Cross-functional Delivery",
    description:
      "Work effectively with product, design, backend, QA, and stakeholders to turn complex requirements into clean and shippable user experiences.",
    surface: "cream",
  },
  {
    title: "Frontend Strength With Fullstack Awareness",
    description:
      "Bring the strongest value in frontend engineering while staying comfortable with backend concepts, API integration, and end-to-end product delivery needs.",
    surface: "coral",
  },
];

export const featuredProjects: ProjectItem[] = [
  {
    title: "Kulinary",
    category: "Featured Product Build",
    description:
      "Restaurant operations platform that combines owner dashboard, cashier POS, kitchen display system, and public QR menu in a single workflow.",
    outcome:
      "Demonstrates product thinking, dashboard architecture, and polished UI implementation for operational workflows.",
    tags: [
      "TanStack Start",
      "React",
      "TypeScript",
      "HeroUI",
      "Tailwind CSS",
      "Appwrite",
    ],
    url: "https://kulinary.aftech.cloud/",
    status: "featured",
  },
  {
    title: "Luxe Materials",
    category: "Premium Marketing Experience",
    description:
      "Elegant showcase for premium interior and architecture materials with refined visual presentation and smooth browsing experience.",
    outcome:
      "Highlights attention to detail, visual hierarchy, and frontend craftsmanship for brand-focused websites.",
    tags: [
      "TanStack Start",
      "React",
      "TypeScript",
      "HeroUI",
      "Tailwind CSS",
      "Framer Motion",
    ],
    url: "https://luxe-materials.vercel.app/",
    status: "featured",
  },
  {
    title: "Inkwells",
    category: "Full Product Prototype",
    description:
      "Writing platform for creating, reading, and sharing ideas with a product-oriented experience across content exploration and publishing.",
    outcome:
      "Represents end-to-end thinking around user flows, content interaction, and full product iteration.",
    tags: ["Next.js", "TypeScript", "Express.js", "MongoDB"],
    url: "https://inkwells.vercel.app/",
    github: "https://github.com/alvyfz/inkwell-web",
    status: "in-progress",
  },
];

export const archiveProjects: ProjectItem[] = [
  {
    title: "INICS",
    category: "Healthcare SaaS",
    description:
      "Clinic management SaaS platform concept designed to modernize administrative workflows and operational visibility.",
    outcome:
      "Shows product structuring for healthcare operations and a SaaS-oriented interface approach.",
    tags: ["Next.js", "TypeScript"],
    url: "https://inics-dev.vercel.app/",
    status: "in-progress",
  },
  {
    title: "My Property",
    category: "Frontend Mini Product",
    description:
      "Property-focused web application that helps users discover and evaluate listings in a more practical way.",
    outcome:
      "Reflects early product implementation using React and GraphQL with responsive web patterns.",
    tags: ["React", "JavaScript", "GraphQL", "Bootstrap"],
    url: "https://myproperty-six.vercel.app/",
    github: "https://github.com/alvyfz/myproperty-react-with-graphql",
    status: "archive",
  },
  {
    title: "goodJobs",
    category: "Capstone Product",
    description:
      "Office booking platform built to help users search and secure workspaces across Jakarta.",
    outcome:
      "Shows collaboration across frontend, backend, and product thinking during training and capstone delivery.",
    tags: ["React", "Go", "GraphQL", "JavaScript", "Responsive Design"],
    url: "https://goodjobs-app.netlify.app/",
    github: "https://github.com/alvyfz/frontend-goodjobs",
    status: "archive",
  },
  {
    title: "Bacotan Native",
    category: "Mobile Experiment",
    description:
      "React Native chat app experiment focused on group communication patterns and mobile interaction.",
    outcome:
      "Highlights mobile app exploration and cross-platform development capability.",
    tags: ["React Native", "JavaScript", "GraphQL", "Android"],
    url: "https://expo.dev/@alvyfz/bacotan?serviceType=classic&distribution=expo-go",
    github: "https://github.com/alvyfz/bacotan-react-native",
    status: "archive",
  },
  {
    title: "Bacotan",
    category: "PWA Experiment",
    description:
      "Progressive web app for chat interaction, built to explore messaging workflows in a browser-based experience.",
    outcome:
      "Demonstrates experimentation with PWA patterns, GraphQL integration, and TypeScript-based UI work.",
    tags: ["React", "TypeScript", "GraphQL", "Material UI", "PWA"],
    url: "https://bacotan.vercel.app/",
    github: "https://github.com/alvyfz/bacotan-reactts-pwa-",
    status: "archive",
  },
  {
    title: "Wedding Invitation",
    category: "Marketing Microsite",
    description:
      "Digital invitation site created as a practical and efficient alternative to conventional invitation workflows.",
    outcome:
      "Shows versatility in building polished presentation-driven websites for personal or client-facing use cases.",
    tags: ["Vue", "Nuxt", "JavaScript", "Tailwind CSS"],
    url: "https://wedding-invitation-alvyfz.netlify.app/",
    github: "https://github.com/alvyfz/wedding-invitation-nuxt",
    status: "archive",
  },
];

export const contactMethods: ContactMethod[] = [
  {
    label: "Email",
    value: "alvyfauzi10@gmail.com",
    href: "mailto:alvyfauzi10@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/alvy-fauzi",
    href: "https://www.linkedin.com/in/alvy-fauzi/",
  },
  {
    label: "GitHub",
    value: "github.com/alvyfz",
    href: "https://github.com/alvyfz",
  },
  {
    label: "WhatsApp",
    value: "+62 822-1464-4612",
    href: "https://wa.me/6282214644612",
  },
];

export const serviceList = [
  "Software engineering support for digital products, with strongest contribution in frontend architecture and implementation.",
  "React and Next.js delivery for interfaces that need strong usability, maintainable structure, and production readiness.",
  "React Native support for mobile product implementation and ongoing feature work.",
  "Collaboration with backend, QA, design, and product teams to ship reliable end-to-end experiences.",
];
