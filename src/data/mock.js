// Mock data for portfolio website

export const personalInfo = {
  name: "SHIVAM RAO",
  title: "Backend Engineer",
  tagline: "Creating Robust Application's with a touch of AI",
  bio: `I’m a backend-focused Software Engineer specializing in Java and Spring Boot, with experience building secure, scalable, and high-performance enterprise applications. I’ve worked on real-time payment systems, modernized legacy platforms, and collaborated closely with cross-functional teams to deliver reliable solutions.`,
  email: "m.shivamrao@gmail.com",
  location: "Pune, INDIA",
  resumeUrl: "/resume.pdf",
  social: {
    github: "https://github.com/Shivam0305-springdev",
    linkedin: "https://www.linkedin.com/in/shivamr1/",
    medium: "https://medium.com/@m.shivamrao"
  }
};

export const skills = [
  {
    category: "Backend Development",
    items: ["Spring Boot", "Java", "REST APIs", "Microservices", "Spring Security", "Spring Data JPA"]
  },
  {
    category: "AI & Machine Learning",
    items: ["LangChain", "Ollama", "Vector Databases", "RAG Systems", "ML Model Integration", "NLP"]
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MongoDB", "Redis", "MySQL"]
  },
  {
    category: "Frontend & Tools",
    items: ["React", "JavaScript", "Docker", "Kubernetes", "Git", "CI/CD", "Kafka"]
  }
];

export const experience = [
  {
    id: 1,
    title: "Associate Consultant – Spring Boot Developer",
    company: "Infosys | Pune, India",
    period: "Jan 2025 – Present",
    description: "Working on enterprise-grade, real-time payment systems for global financial platforms using Java, Spring Boot, and secure development practices.",
    achievements: [
      "Contributing to Mastercard’s real-time and secure payment solutions using Java and Spring Boot.",
      "Ensuring secure development practices by identifying and addressing vulnerabilities using BlackDuck.",
      "Collaborating with cross-domain teams for smooth code migration and secure release processes.",
      "Resolving critical defects to improve system stability and demo readiness.",
      "Developing AI agents to automate repetitive development tasks and improve productivity.",
      "Integrating Apache Camel to decouple service-to-MQ interactions and improve system modularity."
    ]
  },
  {
    id: 2,
    title: "Developer – Spring Boot & Flutter",
    company: "ITC Infotech India Ltd. | Kolkata, India",
    period: "Oct 2021 – Jan 2025",
    description: "Delivered modern backend and mobile solutions by transforming legacy systems into scalable APIs and user-focused applications.",
    achievements: [
      "Migrated legacy Java Servlet-based systems to modern Spring Boot APIs for better scalability and performance.",
      "Designed and implemented RESTful APIs to improve backend responsiveness.",
      "Coordinated with cross-functional teams to ensure smooth project execution and delivery.",
      "Created technical documentation and conducted knowledge transfer sessions for team enablement.",
      "Built automated email reporting solutions for stakeholders.",
      "Developed and maintained Flutter applications, implementing clean UI and push notification features.",
      "Integrated backend services with frontend applications to optimize data flow and user experience.",
    ]
  }
];

export const projects = [
  {
    id: 1,
    title: "AI-Powered Code Review Assistant",
    description: "An intelligent code review system built with Spring Boot that uses AI to analyze code quality, detect bugs, and suggest improvements.",
    technologies: ["Spring Boot", "OpenAI API", "PostgreSQL", "Redis", "React"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop",
    githubUrl: "https://github.com/alexmorgan/ai-code-review",
    liveUrl: "https://code-review-ai.example.com"
  },
  {
    id: 2,
    title: "Smart Document Processing System",
    description: "Enterprise document management system with AI-powered text extraction, classification, and intelligent search capabilities.",
    technologies: ["Spring Boot", "Elasticsearch", "MongoDB", "LangChain", "Docker"],
    image: "https://images.unsplash.com/photo-1618044733300-9472054094ee?w=800&h=600&fit=crop",
    githubUrl: "https://github.com/alexmorgan/smart-docs",
    liveUrl: null
  },
  {
    id: 3,
    title: "Real-Time Analytics Dashboard",
    description: "High-performance analytics platform processing millions of events in real-time with Spring Boot and reactive programming.",
    technologies: ["Spring Boot", "Spring WebFlux", "Redis", "Kafka", "React"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    githubUrl: "https://github.com/alexmorgan/analytics-dashboard",
    liveUrl: "https://analytics.example.com"
  },
  {
    id: 4,
    title: "Microservices E-Commerce Platform",
    description: "Scalable e-commerce backend using Spring Boot microservices architecture with service discovery and load balancing.",
    technologies: ["Spring Boot", "Spring Cloud", "PostgreSQL", "RabbitMQ", "Kubernetes"],
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
    githubUrl: "https://github.com/alexmorgan/ecommerce-microservices",
    liveUrl: null
  },
  {
    id: 5,
    title: "AI Chatbot Framework",
    description: "Reusable chatbot framework with Spring Boot backend supporting multiple AI providers and custom training capabilities.",
    technologies: ["Spring Boot", "OpenAI", "Vector DB", "WebSocket", "MongoDB"],
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=600&fit=crop",
    githubUrl: "https://github.com/alexmorgan/chatbot-framework",
    liveUrl: "https://chatbot-demo.example.com"
  },
  {
    id: 6,
    title: "Secure API Gateway",
    description: "Enterprise API gateway built with Spring Boot featuring rate limiting, authentication, and real-time monitoring.",
    technologies: ["Spring Boot", "Spring Security", "Redis", "JWT", "Grafana"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
    githubUrl: "https://github.com/alexmorgan/api-gateway",
    liveUrl: null
  }
];

export const blogPosts = [
  {
    id: 1,
    title: "Building Scalable Microservices with Spring Boot",
    excerpt: "Learn best practices for designing and implementing microservices architecture using Spring Boot and Spring Cloud.",
    date: "2024-01-15",
    readTime: "8 min read"
  },
  {
    id: 2,
    title: "Integrating AI into Spring Boot Applications",
    excerpt: "A comprehensive guide to integrating OpenAI and other AI services into your Spring Boot applications.",
    date: "2024-02-22",
    readTime: "10 min read"
  },
  {
    id: 3,
    title: "Spring Security Best Practices in 2024",
    excerpt: "Modern security patterns and implementations for Spring Boot applications including JWT and OAuth2.",
    date: "2024-03-10",
    readTime: "6 min read"
  }
];
