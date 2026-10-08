export interface KeyStat {
  value: string;
  label: string;
}

export interface MiniPreviewUI {
  type: 'tutorium' | 'eduinsights' | 'criticalcare' | 'taskminder';
  data?: Record<string, unknown>;
}

export interface ProjectCard {
  id: string;
  badge: string;
  title: string;
  italicSubhead: string;
  description: string;
  stack: string[];
  githubUrl?: string;
  liveUrl?: string;
  preview: MiniPreviewUI;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface BookItem {
  id: string;
  title: string;
  author: string;
  status: 'Reading' | 'Finished' | 'Want to Read';
}

export interface ContactChannel {
  label: string;
  value: string;
  href: string;
  iconName: 'Mail' | 'Github' | 'Linkedin';
}

export interface PortfolioData {
  hero: {
    badgeText: string;
    headline: string;
    headlineEmphasis: string;
    headlineEnd?: string;
    subheadline: string;
    stats: KeyStat[];
    bioWidget: {
      name: string;
      role: string;
      location: string;
      status: string;
      recentFocus: string;
      focusTags?: string[];
      email?: string;
    };
  };
  projects: ProjectCard[];
  skills: SkillCategory[];
  bookshelf: {
    quote: {
      text: string;
      author: string;
    };
    books: BookItem[];
  };
  contact: {
    subhead: string;
    channels: ContactChannel[];
    responseTime: string;
  };
}

const projects: ProjectCard[] = [
  {
    id: "tutorium",
    badge: "REACT · NODEJS· POSTGRESQL",
    title: "Tutorium",
    italicSubhead: "Peer-to-Peer Tutoring Marketplace",
    description:
      "An intuitive mobile platform connecting university students for peer-to-peer tutoring. Features real-time availability scheduling, in-app chat messaging, and flexible lesson management.",
    stack: ["React", "PostgreSQL", "Node.js"],
    githubUrl: "https://github.com/HawraaR/tutoring-marketplace",
    liveUrl: "https://tutorium-delta.vercel.app",
    preview: {
      type: "tutorium",
    },
  },
  {
    id: "eduinsights",
    badge: "ASP.NET CORE · REACT · MYSQL",
    title: "EDU Insights",
    italicSubhead: "Lecture Assessment",
    description:
      "Engineered a real-time lecture assessment system for post-secondary classes. Students respond to quick, end-of-lecture quizzes, allowing instructors to identify comprehension gaps with instant visual analytics.",
    stack: ["ASP.NET Web API", "React", "MySQL", "Tailwind CSS"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    preview: {
      type: "eduinsights",
    },
  },
  {
    id: "critical-care",
    badge: "REACT · POSTGRESQL · NODEJS · EXPRESS",
    title: "Critical Care Nursing",
    italicSubhead: "Clinical Ed Portal",
    description:
      "Designed and built a clinical training and review portal for nursing students with structured modules and clinical practice questions. Tracks learning progress across critical care categories with an interactive exam portal.",
    stack: ["React", "Express", "PostgreSQL", "Node.js"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    preview: {
      type: "criticalcare",
    },
  },
  {
    id: "taskminder",
    badge: "JAVA · ANDROID SDK · SQLITE",
    title: "TaskMinder",
    italicSubhead: "Android Task Engine",
    description:
      "A native Android mobile application built with Java and Android Studio for offline task organization, priority flags, and clean deadline tracking with low memory footprint.",
    stack: ["Android Java", "Android Studio", "SQLite"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    preview: {
      type: "taskminder",
    },
  },
];

const skills: SkillCategory[] = [
  {
    title: "Frontend & Mobile Architecture",
    skills: ["React", "TypeScript", "React Native", "Vue.js", "Tailwind CSS", "Android Java"],
  },
  {
    title: "Backend & Database Systems",
    skills: ["Node.js", "Express.js", "ASP.NET Core", "PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    title: "Tooling, CI/CD & Systems",
    skills: ["Docker", "Git & GitHub Actions", "Supabase", "Sequelize / Mongoose"],
  },
];

const totalSkillsCount = skills.reduce((total, cat) => total + cat.skills.length, 0);

export const portfolioData: PortfolioData = {
  hero: {
    badgeText: "FULL-STACK DEV · BACKEND & MOBILE",
    headline: "Full-stack developer building",
    headlineEmphasis: "thoughtful",
    headlineEnd: "web & mobile solutions.",
    subheadline:
      "Crafting scalable, reliable applications with React, Node.js, and ASP.NET Core—grounded in clean architecture and a good cup of tea.",
    stats: [
      { value: "3+ Years", label: "BUILDING EXPERIENCE" },
      { value: `${projects.length} Projects`, label: "FEATURED & DEPLOYED" },
      { value: `${totalSkillsCount}+ Tools`, label: "CORE TECHNOLOGIES" },
    ],
    bioWidget: {
      name: "Hawraa Ramadan",
      role: "Full-Stack & Mobile Engineer",
      location: "Beirut, Lebanon (UTC+3)",
      status: "Available for projects & roles",
      recentFocus: "Architecting React Native & ASP.NET web platforms.",
      focusTags: ["React Native", "ASP.NET Core", "PostgreSQL", "Node.js"],
      email: "hawraa.ramadan.dev@gmail.com",
    },
  },
  projects,
  skills,

  bookshelf: {
    quote: {
      text: "Simplicity is prerequisite for reliability. Software must walk with simplicity across generations.",
      author: "Edsger W. Dijkstra",
    },
    books: [
      {
        id: "1",
        title: "Tomorrow, and Tomorrow, and Tomorrow",
        author: "Gabrielle Zevin",
        status: "Finished",
      },
      {
        id: "2",
        title: "Designing Data-Intensive Applications",
        author: "Martin Kleppmann",
        status: "Reading",
      },
      {
        id: "3",
        title: "A Philosophy of Software Design",
        author: "John Ousterhout",
        status: "Finished",
      },
    ],
  },

  contact: {
    subhead:
      "Whether you need a full-stack web app, a mobile solution, an architecture review, or an enthusiastic software developer on your team—my inbox is always open.",
    channels: [
      {
        label: "Direct Email",
        value: "hawraa.ramadan.dev@gmail.com",
        href: "mailto:hawraa.ramadan.dev@gmail.com",
        iconName: "Mail",
      },
      {
        label: "GitHub Profile",
        value: "github.com/hawraaramadan",
        href: "https://github.com/HawraaR",
        iconName: "Github",
      },
      {
        label: "LinkedIn Network",
        value: "linkedin.com/in/hawraa-ramadan",
        href: "https://www.linkedin.com/in/hawraaramadan",
        iconName: "Linkedin",
      },
    ],
    responseTime: "Guaranteed 24–48 hours turnaround for project inquiries.",
  },
};