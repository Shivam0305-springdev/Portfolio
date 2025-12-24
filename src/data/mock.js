// Mock data for portfolio website

export const personalInfo = {
  name: "Shivam Rao",
  title: "Spring Boot Developer",
  tagline: "Building intelligent applications with Spring Boot and AI",
  bio: "Passionate Spring Boot developer with 4 years of experience in building scalable enterprise applications and AI-powered solutions. I specialize in creating robust backend systems and integrating cutting-edge AI technologies to solve complex business problems.",
  email: "shivam.rao@example.com",
  location: "San Francisco, CA",
  resumeUrl: "/resume.pdf",
  social: {
    github: "https://github.com/shivamrao",
    linkedin: "https://linkedin.com/in/shivamrao",
    medium: "https://medium.com/@shivamrao"
  }
};

export const skills = [
  {
    category: "Backend Development",
    items: ["Spring Boot", "Java", "REST APIs", "Microservices", "Spring Security", "Spring Data JPA"]
  },
  {
    category: "AI & Machine Learning",
    items: ["LangChain", "OpenAI API", "Vector Databases", "RAG Systems", "ML Model Integration", "NLP"]
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Elasticsearch"]
  },
  {
    category: "Frontend & Tools",
    items: ["React", "JavaScript", "Docker", "Kubernetes", "Git", "CI/CD"]
  }
];

export const experience = [
  {
    id: 1,
    title: "Senior Spring Boot Developer",
    company: "TechCorp Solutions",
    period: "2022 - Present",
    description: "Leading development of AI-powered microservices architecture. Built intelligent chatbot systems using Spring Boot and OpenAI APIs, serving 100K+ daily users.",
    achievements: [
      "Architected and deployed 15+ microservices handling 10M+ requests/day",
      "Reduced API response time by 60% through optimization",
      "Integrated AI capabilities into core business applications"
    ]
  },
  {
    id: 2,
    title: "Spring Boot Developer",
    company: "DataFlow Inc",
    period: "2020 - 2022",
    description: "Developed enterprise-grade Spring Boot applications with focus on performance and scalability. Worked on data processing pipelines and real-time analytics systems.",
    achievements: [
      "Built real-time data processing system handling 1M+ events/hour",
      "Implemented authentication and authorization using Spring Security",
      "Mentored 5 junior developers in Spring Boot best practices"
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
