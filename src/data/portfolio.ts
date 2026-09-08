export interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  featured?: boolean;
}

export interface RoleDetail {
  role: string;
  period: string;
  employmentType?: string;
  description?: string;
  highlights?: string[];
}

export interface Experience {
  company: string;
  companyUrl?: string;
  period: string;
  role?: string;
  employmentType?: string;
  description?: string;
  highlights?: string[];
  roles?: RoleDetail[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
}

export interface PortfolioData {
  name: string;
  title: string;
  location: string;
  about: string;
  resumeUrl: string;
  socials: {
    github?: string;
    linkedin?: string;
    email?: string;
    phone?: string;
  };
  skills: {
    category: string;
    items: string[];
  }[];
  projects: Project[];
  experience: Experience[];
  education: Education[];
  languages: string[];
}

export const portfolioData: PortfolioData = {
  name: "Chris Joseph Avickal",
  title: "Senior / Lead Flutter Engineer",
  location: "Bengaluru, Karnataka",
  about:
    "Senior & Lead Flutter Engineer with 6+ years of experience delivering high-performance, cross-platform mobile applications (iOS, Android, Web) across trading, banking, e-commerce, and Ed-Tech domains. Proven full-lifecycle ownership from architecture and complex UI engineering through performance optimization, product instrumentation, and client-facing technical leadership. Early adopter of AI-driven SDLC and Spec Driven Development.",
  resumeUrl: "/resume.pdf",
  socials: {
    github: "https://github.com/chris-joseph",
    linkedin: "https://www.linkedin.com/in/chris-joseph-avickal",
    email: "chris10joseph@gmail.com",
    phone: "+91 9995515397",
  },
  skills: [
    {
      category: "Languages & Frameworks",
      items: ["Flutter", "Dart", "Kotlin", "Golang", "React.js"],
    },
    {
      category: "Mobile Architecture & Systems",
      items: [
        "App Architecture",
        "Performance Optimization",
        "Crash Analytics",
        "Deeplinking",
        "CRM Integration",
        "A/B Testing",
        "Fastlane",
      ],
    },
    {
      category: "AI-Driven SDLC & Practices",
      items: [
        "Claude Code",
        "GitHub Copilot",
        "Spec Driven Development",
        "Obsidian (Spec Management)",
        "AI-Assisted Generation",
        "CI/CD Pipelines",
        "Technical Leadership",
      ],
    },
    {
      category: "APIs & Platforms",
      items: ["iOS", "Android", "Web", "REST APIs", "GraphQL", "SQL"],
    },
  ],
  projects: [
    {
      title: "Tale",
      description:
        "A travel and itinerary planning companion application published on Google Play. Features offline-first architecture, adaptive layout system, real-time sync, and location intelligence.",
      tags: ["Flutter", "Dart", "Offline-First", "Google Play", "Firebase"],
      link: "https://play.google.com/store/apps/details?id=com.zanfort.tale&pcampaignid=web_share",
      featured: true,
    },
    {
      title: "Tickertape",
      description:
        "Asset analysis and financial research platform. Built core iOS features in Flutter, contributed to early architecture, and implemented the Stock Screener and interactive financial charting components.",
      tags: ["Flutter", "iOS", "Financial Charts", "Performance Tuning"],
      link: "https://www.tickertape.in/",
      featured: true,
    },
    {
      title: "SpeakX (formerly Yellow Class)",
      description:
        "First mobile engineer hire; architected and built the kids' Ed-Tech application from scratch for iOS and Android under strict compliance standards. Scaled to over 500,000+ downloads with a 4.5 average rating.",
      tags: ["Flutter", "iOS", "Android", "Ed-Tech", "500K+ Downloads"],
      link: "https://speakx.ai/",
      featured: true,
    },
    {
      title: "Enterprise Operations Portal",
      description:
        "Enterprise modernization project at Thoughtworks Technologies India, delivering a high-reliability operations portal with Flutter Web for industrial workflows.",
      tags: ["Flutter Web", "Thoughtworks", "Enterprise", "Architecture"],
      link: "https://www.thoughtworks.com/en-in",
      featured: false,
    },
    {
      title: "Trading & Banking Applications",
      description:
        "Led client-facing technical discussions and delivered cross-platform applications across trading, banking, and e-commerce engagements at Thoughtworks.",
      tags: ["Flutter", "Banking", "Fintech", "Client Consulting"],
      link: "https://www.thoughtworks.com/en-in",
      featured: false,
    },
  ],
  experience: [
    {
      role: "Lead Mobile Engineer",
      company: "KJBN Labs",
      period: "Feb 2026 — Apr 2026",
      description:
        "Led development of an offline-first Flutter application, owning technical decisions and architecture end-to-end.",
      highlights: [
        "Established an AI-driven SDLC on the project using Claude Code for spec-to-code generation, Obsidian to author and maintain structured product/engineering specs, and GitHub Copilot for in-editor assistance.",
        "Applied Spec Driven Development to translate product specifications and development guidelines into reusable, production-ready Flutter packages.",
      ],
    },
    {
      company: "Thoughtworks Technologies India",
      companyUrl: "https://www.thoughtworks.com/en-in",
      period: "Jun 2023 — Jan 2026 · 2 yrs 8 mos",
      roles: [
        {
          role: "Consultant, Mobile Engineer",
          employmentType: "Full-time",
          period: "May 2024 — Jan 2026",
          description:
            "Led Flutter development across concurrent client engagements in trading, banking, and e-commerce, acting as the primary technical point of contact.",
          highlights: [
            "Delivered an Enterprise Operations Portal built with Flutter Web as part of a high-impact enterprise modernization engagement.",
            "Drove client discussions on project architecture, technical design, and implementation approach.",
            "Coordinated performance optimization efforts across Flutter-based mobile (iOS/Android) and web applications.",
          ],
        },
        {
          role: "Senior Consultant, Mobile Engineer",
          employmentType: "Contract (via NetAnalytiks)",
          period: "Jun 2023 — May 2024",
          description:
            "Engaged on contract delivering mission-critical Flutter applications for Thoughtworks enterprise client projects, demonstrating technical leadership that led to direct full-time conversion.",
          highlights: [
            "Delivered key client milestones across cross-platform mobile initiatives in high-stakes environments.",
            "Collaborated with distributed cross-functional teams adhering to Thoughtworks agile and extreme programming principles.",
          ],
        },
      ],
    },
    {
      role: "Software Engineer",
      company: "Anchorage Technologies (Tickertape)",
      companyUrl: "https://www.tickertape.in/",
      period: "Feb 2022 — Apr 2023",
      description:
        "Core member of the Flutter team building the iOS application for Tickertape, an asset analysis platform.",
      highlights: [
        "Contributed to early architecture setup and implemented complex UI features, including the Stock Screener and interactive graphing components.",
        "Optimized existing Flutter implementations for performance.",
        "Participated in the technical hiring process, interviewing and evaluating mobile engineering candidates.",
      ],
    },
    {
      role: "Software Engineer",
      company: "Ivypods (SpeakX, formerly Yellow Class)",
      companyUrl: "https://speakx.ai/",
      period: "Oct 2020 — Jan 2022",
      description:
        "First hire on the mobile team; owned low-level architecture and implementation decisions for a Flutter-based kids' Ed-Tech application.",
      highlights: [
        "Built the product from the ground up for iOS and Android under strict compliance and safety constraints for children's applications.",
        "Mentored interns and junior engineers, including leading code reviews.",
        "Delivered an app that surpassed 500K downloads on the Play Store with a 4.5 average rating.",
      ],
    },
    {
      role: "Software Engineer",
      company: "Untangle Strategy",
      period: "Jul 2019 — Oct 2020",
      description:
        "Developed front-end features for web and mobile applications using React.js and Flutter; partnered with Essar Steel (AMNS) technical teams to build in-house applications.",
    },
  ],
  education: [
    {
      degree: "Bachelor of Technology (BTech)",
      institution: "APJ Abdul Kalam Technical University, Kerala",
      period: "Jul 2015 — Jul 2019",
    },
  ],
  languages: [
    "Malayalam (Native)",
    "English (Fluent)",
    "Hindi (Basic Working Proficiency)",
  ],
};
