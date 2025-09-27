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

}

export const projects: Project[] = [
  {
    id: "walletly",
    title: "Walletly - Finance Management System",
    description: "A comprehensive financial management application with real-time insights.",
    longDescription:"designed to help users track, manage, and optimize their personal finances with ease.  With integrated currency conversion, multi-language support, and theme customization for a flexible user experience. Enabled real time financial insights with charts and stats to support informed decision-making.",
    image: "/images/walletly.jpeg",
    images: ["/images/walletly1.png", "/images/walletly2.png", "/images/walletly3.png", "/images/walletly4.png","/images/walletly5.png","/images/walletly6.png"],
    tags: ["Next.js", "Node.js","Express.js", "MongoDB"],
    liveUrl: "https://walletly-chi.vercel.app/",
    githubUrl: "https://github.com/husseinnahal/Walletly",

    features: [
      "Real-time financial tracking and analytics",
      "Multi-currency support with live exchange rates",
      "Interactive charts and financial insights",
      "Multi-language support (English, Arabic)",
      "Dark/Light theme customization",
      "Secure user authentication and data encryption",
      "Responsive design for all devices",
      "Debt, savings, and transfers tracking for better money management",
    ],
    techStack: {
      frontend: ["Next.js", "Tailwind CSS","Redux", "Chart.js", "i18next"],
      backend: ["Node.js", "Express.js", "JWT Authentication"],
      database: ["MongoDB"],
      tools: [ "Git","Github", "Figma", "Postman"],
    },

  },
  {
    id: "elegance-edge",
    title: "EleganceEdge - Ecommerce Store",
    description: "Modern e-commerce platform with advanced filtering and payment integration.",
    longDescription:"developed with a seamless shopping experience, featuring a professional interface, product filtering, secure user authentication, a dynamic shopping cart with real-time updates, and a fully responsive design across all devices",
    image: "/images/elegance.png",
    images: ["/images/elg1.png", "/images/elg2.png", "/images/elg3.png", "/images/elg4.png","/images/elg5.png"],
    tags: ["Next.js", "Node.js", "Express.js", "MongoDB"],
    liveUrl: "https://eleganceedgedev.netlify.app/",
    githubUrl: "https://github.com/husseinnahal/EleganceEdge",
    features: [
      "Advanced product search and filtering",
      "User authentication and profiles",
      "Admin dashboard for inventory management",
      "Order tracking and management",
      "Responsive design",
      "Shopping cart and wishlist functionality",
    ],
    techStack: {
      frontend: ["Next.js", "Redux", "Tailwind CSS"],
      backend: ["Node.js", "Express.js", "JWT Authentication"],
      database: ["MongoDB"],
      tools: ["Vercel", "Git","Github", "Postman"],
    },


  },
  {
    id: "fooDev",
    title: "FooDev - Restaurant Ordering Website",
    description: "Online food ordering system with real-time order tracking.",
    longDescription:"with advanced filtering and customization options, enabling users to easily browse categories and modify meals. Implemented a real-time ordering system with cart management and seamless order submission to enhance user experience.",
    image: "/images/foodev.jpg",
    images: ["/images/food/food1.png", "/images/food/food2.png", "/images/food/food3.png", "/images/food/food4.png"],
    tags: ["React.js", "Express.js", "Node.js", "MongoDB"],
    liveUrl: "https://youtu.be/dRyrN5PGjog?si=VoRFEB5Vu8-gPp1A",
    githubUrl: "https://github.com/husseinnahal/Foodev",
    features: [
      "Customizable items with add-ons and options",
      "Special offers and combo deals",
      "Responsive design for all devices",
      "Landing page with restaurant story and highlights",
      "Animated product cards and transitions",
      "Contact and location integration",
      "Interactive menu with categories",
      "Simple reservation or pre-order form"
    ],
    techStack: {
      frontend: ["React.js",  "Tailwind CSS","Redux"],
      backend: ["Express.js", "Node.js"],
      database: ["MongoDB"],
      tools: [ "Git", "Github","Postman"],
    },


  },
  {
    id: "AL-Mashtal",
    title: "AL-Mashtal - Ecommerce Platform",
    description: "Feature-rich e-commerce platform with admin dashboard.",
    longDescription:" Developed for selling plants, providing customers with a seamless browsing and purchasing experience. Focused on user- friendly design and optimized functionality across all devices, enabling easy navigation, personalized product pages, and smooth order management.",
    image: "/images/lmashtal.jpeg",
    images: ["/images/almashtal/almashtal1.png", "/images/almashtal/almashtal2.png", "/images/almashtal/almashtal3.png", "/images/almashtal/almashtal4.png"],
    tags: ["PHP", "MYSQL"],
    liveUrl: "https://youtu.be/d8OquedEGNQ?si=uWn9ARXd1hNvnwd9",
    githubUrl: "https://github.com/husseinnahal/Greenfields",
    features: [
      "Beautiful landing page with featured collections",
      "Best seller highlights and trending plants",
      "Add to cart and order management",
      "Secure checkout ",
      "Customer reviews and ratings",
      "Responsive design for all devices"

    ],
    techStack: {
      frontend: ["PHP", "HTML", "CSS", "JavaScript"],
      backend: ["PHP"],
      database: ["MySQL"],
      tools: ["Git", "Github", "Figma"]
    },


  },
  {
    id: "we-care-lebanon",
    title: "We Care Lebanon - Management System",
    description: "Healthcare management system for patient and appointment tracking.",
    longDescription:"developed to streamline sales, inventory, and client data, providing real-time sales tracking and report generation. integrated graphs and statistics to visualize trends, inventory, and performance, enabling data-driven decision-making.",
    image: "/images/wecare.png",
    images: [
      "/images/wecare/wecare1.png",
      "/images/wecare/wecare2.png",
      "/images/wecare/wecare3.png",
      "/images/wecare/wecare4.png",
      "/images/wecare/wecare5.png",
      "/images/wecare/wecare6.png",

    ],
    tags: [ "Express.js", "MongoDB", "EJS"],
    liveUrl: "https://youtu.be/kKX3P8mZ2gg?si=6X_8m6i26hol4jWn",
    githubUrl: "https://github.com/alihazer/weCareLebanon",
    features: [
  "Sales and inventory management",
  "Client data and profile management",
  "Real-time sales tracking",
  "Automated report generation",
  "Integrated graphs and statistics",
  "Inventory performance analysis",
  "Data-driven decision support",
    ],
    techStack: {
        frontend: ["HTML", "CSS", "JavaScript", "EJS"],
        backend: ["Node.js", "Express.js"],
        database: ["MongoDB"],
        tools: ["Github", "Git", "Postman"]
    },


  },
{
  id: "others",
  title: "Other Projects",
  description: "Collection of diverse projects including systems, websites, and experiments.",
  longDescription:
    "A showcase of various projects developed using different technologies, ranging from management systems and portfolio websites to experimental applications. These projects highlight versatility across multiple frameworks, databases, and tools.",
  image: "/images/others.png",
    images: ["/images/others.png","/images/others/other1.png", "/images/others/other2.png", "/images/others/other3.png", "/images/others/other4.png"],
  tags: [],
  liveUrl: "#",
  githubUrl: "#",
  features: [
    "Portfolio websites and personal branding",
    "Management systems and dashboards",
    "API integrations and backend services",
    "UI/UX focused projects",
    "Database-driven applications",
  ],
  techStack: {
    frontend: ["Next.js", "React.js", "EJS", "Bootstrap", "Tailwind CSS"],
    backend: ["Node.js", "Express.js", "Java (Spring)", "C# (.NET)", "PHP"],
    database: ["MySQL", "MongoDB"],
    tools: ["Git", "Github","Postman", "Figma"],
  }
}

]

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id)
}

export function getAllProjects(): Project[] {
  return projects
}
