export interface SubProject {
  title: string
  description: string
  image: string
  liveUrl?: string
  githubUrl?: string
}

export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  image: string
  images: string[]
  tags: string[]
  liveUrl: string
  githubUrl: string
  features: string[]
  techStack: {
    frontend: string[]
    backend: string[]
    database: string[]
    tools: string[]
  }
  subProjects?: SubProject[]
}

export const projects: Project[] = [
  {
    id: "walletly",
    title: "Walletly - AI Finance Management Platform",
    description:
      "AI-powered financial management platform for tracking expenses, savings, debt, and real-time financial performance.",

    longDescription:
      "Walletly is a full-stack AI-powered financial management platform designed to help users track, analyze, and optimize their personal finances. It provides real-time insights, AI-driven interactions, and advanced budgeting tools to improve financial decision-making.",

    image: "/images/walletly/walletly1.png",
    images: ["/images/walletly/walletly1.png", "/images/walletly/walletly2.png", "/images/walletly/walletly3.png", "/images/walletly/walletly4.png","/images/walletly/walletly5.png"],
    tags: ["Next.js", "Node.js","Express.js", "MongoDB"],
    liveUrl: "https://walletly-web.vercel.app/",
    githubUrl: "https://github.com/husseinnahal/Apis-walletly-app",

    features: [
      "AI-powered voice-based transaction input",
      "Smart financial analysis and chatbot assistance",
      "Real-time expense, savings, and debt tracking",
      "Budgeting tools and bill reminders",
      "Live gold and silver market tracking",
      "Dynamic profit and loss calculations",
      "Secure authentication system",
      "Responsive and production-ready UI"
    ],
    techStack: {
      frontend: ["Next.js", "Tailwind CSS","Redux", "Chart.js", "i18next"],
      backend: ["Node.js", "Express.js", "JWT Authentication"],
      database: ["MongoDB"],
      tools: [ "Git","Github", "Figma", "Postman"],
    },

  },
  {
    id: "baladi",
    title: "Baladi - Management System",
    description: "SaaS-based municipality management platform with multi-tenant architecture.",
    longDescription:
    "Baladi is a full-stack municipality and community management platform designed to help towns and local communities operate within a centralized digital ecosystem. The platform provides isolated management environments for each municipality while enabling efficient handling of local services, announcements, transportation, shops, and community information.",
    image: "/images/baladi/baladi.jpeg",
    images: [
      "/images/baladi/1.png",
      "/images/baladi/2.png",
      "/images/baladi/3.png",


    ],
    tags: [ "Express.js", "MongoDB", "EJS"],
    liveUrl: "#",
    githubUrl: "https://github.com/husseinnahal/BaladiDashboard",
    features: [
      "Multi-tenant SaaS architecture",
      "Municipality-specific dashboards",
      "Hierarchical role-based access control (RBAC)",
      "Community services and announcements management",
      "Shops and local business management",
      "Transportation and local services modules",
      "Responsive and user-friendly interface",
      "Scalable RESTful API architecture"
    ],
    techStack: {
        frontend: [      "React.js","Tailwind CSS","Redux" ],
        backend: [  "Node.js","Express.js","JWT Authentication", "REST APIs"],
        database: ["MongoDB"],
        tools: ["Github", "Git", "Postman"]
    },


  },
  {
    id: "others",
    title: "More Projects",
    description: "Collection of diverse projects including systems, e-commerce sites, and experiments.",
    longDescription:
      "A showcase of various projects developed using different technologies, ranging from management systems and e-commerce sites to experimental applications. These projects highlight versatility across multiple frameworks, databases, and tools.",
    image: "/images/others.png",
    images: ["/images/others.png","/images/others/other2.png", "/images/others/other1.jpg", "/images/others/wecare.jpg", "/images/others/foodev.jpg" , "/images/others/msd.png" , "/images/others/elegance.jpg", "/images/others/lmashtal.jpeg", "/images/others/oren.png", "/images/others/other3.png", "/images/others/other4.png"],
    tags: [],
    liveUrl: "#",
    githubUrl: "#",
    features: [
      "Management systems and dashboards",
      "e-commerce sites and personal branding",
      "API integrations and backend services",
      "UI/UX focused projects",
      "Database-driven applications",
    ],
    techStack: {
      frontend: ["Next.js", "React.js", "EJS", "Bootstrap", "Tailwind CSS"],
      backend: ["Node.js", "Express.js", "PHP"],
      database: ["SQL", "MongoDB"],
      tools: ["Git", "Github","Postman", "Figma"],
    },
    subProjects: [
      {
        title: "JewelFlow",
        description: "A business management solution that streamlines purchasing, inventory control, sales, and supplier management for jewelry stores.",
        image: "/images/others/other2.png",
        liveUrl: "#",
      },    
      {
        title: "SmartMart",
        description: "A comprehensive platform for managing products, inventory, suppliers, sales, and daily supermarket operations.",
        image: "/images/others/other1.jpg",
        liveUrl: "#",
      },     
      {
        title: "We Care Lebanon",
        description: "A health products management system for inventory tracking, supplier management, sales processing, and stock control.",
        image: "/images/others/wecare.jpg",
        liveUrl: "#",
      },
      {
        title: "Oren",
        description: "An e-commerce platform for selling watches, sunglasses, and perfumes with product management, shopping cart, and secure checkout.",
        image: "/images/others/oren.png",
        liveUrl: "https://oreenlb.com/",
      },
      {
        title: "MSD",
        description: "A modern online store offering car accessories, automotive upgrades, and vehicle care products.",
        image: "/images/others/msd.png",
        liveUrl: "https://www.msdcarshop.com",
      },
      {
        title: "FooDev",
        description: "An interactive restaurant menu system that allows customers to customize meals, select ingredients, and place personalized orders.",
        image: "/images/others/foodev.jpg",
        liveUrl: "https://fooddevv.netlify.app",
      },
      {
        title: "Electrician",
        description: "A professional portfolio website for an electrician, featuring services, projects, and contact details.",
        image: "/images/others/other3.png",
        liveUrl: "https://elektrisch.vercel.app",
      },
      {
        title: "Basma",
        description: "A professional company portfolio website showcasing services, projects, and business identity.",
        image: "/images/others/other4.png",
        liveUrl: "https://basmaa.online",
      },
      {
        title: "Elegance Edge",
        description: "An e-commerce platform for a fashion and apparel brand.",
        image: "/images/others/elegance.jpg",
        liveUrl: "#",
      },
      {
        title: "Al-Mashtal",
        description: "An online nursery and plant shop.",
        image: "/images/others/lmashtal.jpeg",
        liveUrl: "#",
      },

    ]
  }

]

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id)
}

export function getAllProjects(): Project[] {
  return projects
}
