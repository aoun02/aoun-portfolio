// All website content lives here — edit this file to update the portfolio.

export const profile = {
  name: 'Aoun Raza',
  role: 'Full Stack Engineer',
  location: 'Karachi, Pakistan',
  summary:
    'Software Engineer building fintech products end to end — Java and Spring Boot microservices talking over Kafka, .NET 8 APIs, React and Flutter frontends — shipped with Docker, Helm and CI/CD to Azure Kubernetes and monitored with Grafana.',
  email: 'aounraza008@gmail.com',
  github: 'https://github.com/aoun02',
  linkedin: 'https://www.linkedin.com/in/aoun-raza-5b2638285/',
}

export const stats = [
  { value: '2', label: 'Companies' },
  { value: '40%', label: 'Legacy code migrated to .NET 8' },
  { value: '9/13', label: 'VAPT findings resolved' },
  { value: '3', label: 'Azure K8s environments' },
]

export const education = {
  degree: 'B.S. Computer Engineering',
  school: 'Sir Syed University of Engineering and Technology',
  year: '2024',
  grade: 'CGPA 3.44',
}

export const experience = [
  {
    company: 'Simplifi',
    role: 'Associate Full Stack Engineer',
    period: 'Aug 2026 – Present',
    location: 'Karachi, Pakistan',
    current: true,
    points: [
      'Developing and maintaining a B2B fintech platform that provides debit card services to business clients across the MENA region.',
      'Building backend microservices in Java and Spring Boot with Kafka-based communication, plus frontend features in React.',
      'Writing unit and integration tests to validate backend functionality and keep feature delivery reliable.',
      'Shipping containerized services with Docker, CI/CD pipelines and Helm charts to Azure Kubernetes across Dev, UAT and Production.',
      'Monitoring clusters, pods and logs with Lens and Grafana, and troubleshooting production issues through log analysis.',
      'Developing and releasing Flutter mobile apps for iOS and Android, and writing RFC documents for planned changes.',
    ],
    tags: ['Java', 'Spring Boot', 'Kafka', 'React', 'Flutter', 'Docker', 'Helm', 'AKS', 'Grafana'],
  },
  {
    company: 'Sofcom',
    role: 'Junior Software Developer',
    period: 'Aug 2025 – Aug 2026',
    location: 'Karachi, Pakistan',
    points: [
      'Developed a new MES module on .NET 8 Web API with JWT-based authentication.',
      'Migrated 4 modules (40% of the project) from legacy .NET 4.7.2 Web Forms to .NET 8 Web API, improving performance and maintainability.',
      'Built client customizations across 6 modules from requirements gathered with Support and QA teams.',
      'Resolved 9 of 13 VAPT vulnerabilities reported by the Cyber Security team, hardening 12 modules.',
      'Built Crystal Reports that cut client report errors by 20%, and deployed builds with Azure DevOps.',
    ],
    tags: ['.NET 8', 'C#', 'Web API', 'JWT', 'SQL Server', 'Crystal Reports', 'Azure DevOps'],
  },
]

export const skills = [
  { group: 'Languages', items: ['Java', 'C#', 'C++', 'C', 'JavaScript', 'Python', 'Dart', 'SQL'] },
  { group: 'Backend', items: ['Spring Boot', '.NET 8 / ASP.NET', 'Node.js', 'Express.js', 'REST APIs', 'Microservices', 'Kafka'] },
  { group: 'Frontend & Mobile', items: ['React', 'HTML', 'CSS', 'Flutter', 'iOS', 'Android'] },
  { group: 'Cloud & DevOps', items: ['Azure', 'Kubernetes', 'Docker', 'Helm', 'CI/CD', 'Grafana', 'Lens'] },
  { group: 'Databases', items: ['MySQL', 'SQL Server', 'MongoDB'] },
  { group: 'Practices', items: ['JWT Auth', 'OOP', 'Unit & Integration Testing', 'Agile / Scrum', 'Security (VAPT)'] },
]

// Add a new object here whenever a project is deployed.
export const projects = [
  {
    title: 'Developer Portfolio',
    description:
      'This website — a fast, responsive single-page portfolio with scroll animations, a code-editor hero and a pastel Catppuccin theme. Content is driven from a single data file.',
    tech: ['React', 'Vite', 'CSS', 'Vercel'],
    github: 'https://github.com/aoun02/aoun-portfolio',
    live: 'https://aoun-portfolio.vercel.app',
  },
]
