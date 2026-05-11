export const personalData = {
  name: "Ali Mohammad",
  role: "Backend / Full Stack Developer",
  email: "aloshmohammad2001@gmail.com",
  phone: "+963951548685",
  github: "https://github.com/AliMohammadDev", // Assumed from CV text
  linkedin: "https://linkedin.com/in/AliMohammad",
  location: "Aleppo, Syria",
  bio: "Software Engineer with 4+ years of experience in web development, mainly focused on backend systems. I've worked on 10+ projects including admin dashboards, e-commerce platforms, and SaaS applications in industries like real estate and online services.",
  experienceYears: 4,
  projectsCount: 10,
};

export const skills = {
  backend: [
    { name: "Laravel", level: 95 },
    { name: "Node.js", level: 90 },
    { name: "Express.js", level: 85 },
    { name: "REST APIs", level: 95 },
    { name: "MySQL", level: 90 },
    { name: "MongoDB", level: 80 },
    { name: "System Architecture", level: 85 },
    { name: "Docker", level: 75 },
  ],
  frontend: [
    { name: "React", level: 85 },
    { name: "Next.js", level: 80 },
    { name: "TypeScript", level: 75 },
    { name: "Tailwind CSS", level: 95 },
    { name: "shadcn", level: 95 },
  ],
};

export const projects = [
  {
    id: 1,
    title: "Elite Racket",
    description: "A comprehensive subscription and court booking platform for padel and tennis. Features real-time reservations, membership management, and a robust admin dashboard for payments and scheduling.",
    tech: ["Laravel", "MySQL", "Tailwind CSS", "Reverb"],
    image: "https://images.unsplash.com/photo-1766675122854-28fc70f50132?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZW5uaXMlMjBjb3VydCUyMG91dGRvb3J8ZW58MXx8fHwxNzcwNDUzOTM3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    demo: "https://elite-racket.com/",
    category: "Backend / API"
  },
  {
    id: 2,
    title: "almanzel-alhadith",
    description: "Full-scale e-commerce solution with integrated POS, inventory management, and multi-channel shipping. Supports multiple local payment gateways and features a PWA admin dashboard.",
    tech: ["Laravel", "Filament", "PWA", "MySQL"],
    image: "https://t4.ftcdn.net/jpg/05/69/21/75/240_F_569217527_O9eTUdEmBURUpxzawhBANGQfVPPPnBr8.jpg",
    demo: "https://almanzel-alhadith.com/",
    category: "E-commerce"
  },

  {
    id: 3,
    title: "almanzel-alhadith Admin & API",
    description:
      "Complete e-commerce and retail management system with POS, cashier operations, inventory tracking, supplier management, warehouse handling, shipping integration, and advanced admin dashboard features.",
    tech: ["Laravel", "Filament", "MySQL", "PWA"],
    image:
      "https://cdn.dribbble.com/userupload/3060498/file/original-6cf9876badef099d8d0a3cd4fd421cec.png?resize=400x0",
    category: "E-commerce"
  },
  {
    id: 4,
    title: "Real Estate VR",
    description: "Interactive 3D real estate platform allowing users to navigate properties in a virtual environment. Features advanced filtering by location and price with smooth animations.",
    tech: ["React", "TypeScript", "Tailwind CSS", "VR Tech"],
    image: "https://res.cloudinary.com/dzvrf9xe3/image/upload/v1778485575/screencapture-capella-voom-cc-master-plan-2026-05-11-10_45_32_ayrolc.png",
    demo: "https://capella.voom.cc/",
    category: "SaaS"
  },
  {
    id: 5,
    title: "Real Estate Admin & API",
    description: "Production-ready RESTful API for managing large-scale real estate operations. Supports multi-tenancy with complete data isolation and detailed statistical tracking.",
    tech: ["Node.js", "Express", "MongoDB", "TypeScript"],
    image: "https://images.klipfolio.com/website/public/bf9c6fbb-06bf-4f1d-88a7-d02b70902bd1/data-dashboard.png",
    category: "SaaS"
  },
  {
    id: 6,
    title: "Real Estate VR",
    description: "Interactive 3D real estate platform allowing users to navigate properties in a virtual environment. Features advanced filtering by location and price with smooth animations.",
    tech: ["React", "TypeScript", "Tailwind CSS", "VR Tech"],
    image: "https://res.cloudinary.com/dzvrf9xe3/image/upload/v1778412627/screencapture-noll-compound-voom-cc-master-plan-2026-05-10-14_29_18_p3naa6.png",
    demo: "https://noll-compound.voom.cc/",
    category: "SaaS"
  },
  {
    id: 7,
    title: "Octo Fitout",
    description:
      "Corporate website for a fit-out and interior solutions company specializing in commercial, residential, and retail spaces. Focused on showcasing services, company expertise, sustainability, and completed projects with a modern responsive design.",
    tech: ["WordPress", "Elementor", "PHP", "CSS"],
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop",
    demo: "https://ocgroup.ae/",
    category: "WordPress"
  },
  {
    id: 8,
    title: "Civicrete Building Maintenance",
    description:
      "Professional construction and maintenance company website focused on concrete restoration, strengthening, and demolition services. Developed to present company vision, mission, and engineering solutions with a clean and professional layout.",
    tech: ["WordPress", "Elementor", "PHP", "CSS"],
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop",
    demo: "https://civicrete.com/",
    category: "WordPress"
  }
];

export const services = [
  {
    title: "Backend Development",
    description: "Building scalable, high-performance server-side logic using modern frameworks.",
    icon: "Server"
  },
  {
    title: "REST API Development",
    description: "Designing and implementing secure, well-documented APIs for web and mobile.",
    icon: "Code"
  },
  {
    title: "Dashboard Systems",
    description: "Creating intuitive admin panels for managing complex business data.",
    icon: "LayoutDashboard"
  },
  {
    title: "E-commerce Solutions",
    description: "End-to-end shopping experiences with POS and inventory integration.",
    icon: "ShoppingBag"
  }
];

export const experience = [
  {
    company: "Nouh Agency",
    role: "Backend Developer",
    period: "2024 - Present",
    url: "https://www.nouh-agency.com/",
    description: "Developing backend systems using Laravel, building e-commerce and POS solutions, and managing warehouse systems."
  },
  {
    company: "Voom",
    role: "Backend Developer",
    period: "2023 - 2024",
    url: "https://voom-eg.com/",
    description: "Built REST APIs using Node.js and Express, worked on VR real estate platforms and SaaS admin dashboards."
  }
];


export const blogPosts = [
  {
    title: "Scaling Laravel APIs with Redis",
    category: "Backend",
    date: "May 5, 2026",
    excerpt: "Learn how to significantly improve your application's response time by implementing effective caching strategies.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Choosing between SQL and NoSQL",
    category: "Database",
    date: "April 20, 2026",
    excerpt: "A deep dive into when to use MySQL vs MongoDB for your next large-scale project.",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=800&auto=format&fit=crop"
  }
];
