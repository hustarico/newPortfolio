export const profile = {
  user: 'guest',
  host: 'dev-portfolio',
  name: 'Jane Doe',
  role: 'Full-Stack Developer',
  location: 'Bengaluru, IN (UTC+5:30)',
  email: 'hello@janedoe.dev',
  resumeUrl: '#',
  tagline: 'I build reliable backends and clean frontends.',
  about: [
    'Hi, I am Jane — a developer who lives somewhere between the JVM and the browser.',
    'My day usually starts with a strong coffee and ends with a green test suite. I design REST APIs with Spring Boot, model data across MySQL and PostgreSQL, and ship interfaces people actually enjoy using with React.',
    'I run Linux as my daily driver, script my way out of repetitive work, and believe infrastructure should be boring — predictable, observable, and documented.',
  ],
  socials: [
    { label: 'github', url: 'https://github.com/janedoe', handle: '@janedoe' },
    { label: 'linkedin', url: 'https://linkedin.com/in/janedoe', handle: '/in/janedoe' },
    { label: 'twitter', url: 'https://x.com/janedoe', handle: '@janedoe' },
  ],
}

export const heroLines = [
  { pre: '$ ', text: 'ssh guest@dev-portfolio' },
  { pre: '[ok] ', text: 'connection established' },
  { pre: '$ ', text: 'whoami' },
  { pre: '> ', text: profile.name },
  { pre: '$ ', text: 'cat role.txt' },
  { pre: '> ', text: profile.role },
]

export const skills = [
  {
    group: 'backend/',
    items: [
      { name: 'spring-boot', level: 92 },
      { name: 'rest-apis', level: 90 },
      { name: 'spring-security', level: 78 },
      { name: 'jpa-hibernate', level: 82 },
    ],
  },
  {
    group: 'frontend/',
    items: [
      { name: 'react', level: 88 },
      { name: 'javascript-es6+', level: 85 },
      { name: 'html-css', level: 86 },
      { name: 'vite', level: 80 },
    ],
  },
  {
    group: 'databases/',
    items: [
      { name: 'postgresql', level: 84 },
      { name: 'mysql', level: 83 },
      { name: 'redis', level: 70 },
    ],
  },
  {
    group: 'systems/',
    items: [
      { name: 'linux', level: 89 },
      { name: 'bash-scripting', level: 80 },
      { name: 'docker', level: 75 },
      { name: 'git', level: 90 },
    ],
  },
]

export const projects = [
  {
    name: 'taskflow-api',
    desc: 'Task management REST API with JWT auth, role-based access and audit logging.',
    tech: ['Spring Boot', 'PostgreSQL', 'Docker'],
    repo: 'https://github.com/janedoe/taskflow-api',
    demo: '#',
  },
  {
    name: 'shopstream-ui',
    desc: 'Real-time storefront dashboard with live inventory updates over WebSockets.',
    tech: ['React', 'Vite', 'Spring Boot'],
    repo: 'https://github.com/janedoe/shopstream-ui',
    demo: '#',
  },
  {
    name: 'ledgerly',
    desc: 'Double-entry accounting engine with ACID-safe transactions and reporting exports.',
    tech: ['MySQL', 'Java', 'Batch'],
    repo: 'https://github.com/janedoe/ledgerly',
    demo: '#',
  },
  {
    name: 'ops-toolkit',
    desc: 'Collection of bash scripts and systemd units for server provisioning and backups.',
    tech: ['Linux', 'Bash', 'cron'],
    repo: 'https://github.com/janedoe/ops-toolkit',
    demo: '#',
  },
]

export const experience = [
  {
    period: '2024.03 — present',
    title: 'Senior Full-Stack Developer @ NimbusWorks',
    points: [
      'Led decomposition of a monolith into Spring Boot microservices behind an API gateway',
      'Tuned PostgreSQL queries and indexes, cutting p95 API latency by 40%',
      'Built internal admin tooling in React adopted by 3 teams',
    ],
  },
  {
    period: '2021.07 — 2024.02',
    title: 'Backend Developer @ Corelink Systems',
    points: [
      'Designed MySQL schemas powering 200k+ daily transactions',
      'Automated CI/CD pipelines and zero-downtime deploys on Linux servers',
      'Hardened REST APIs with rate limiting and Spring Security',
    ],
  },
  {
    period: '2019.06 — 2021.06',
    title: 'Software Engineer Intern → Associate Dev @ PixelForge',
    points: [
      'Shipped customer-facing features in a React SPA',
      'Wrote migration scripts moving legacy data into PostgreSQL',
    ],
  },
]

export const socials = profile.socials

export const navLinks = [
  { href: '#about', label: './about' },
  { href: '#skills', label: './skills' },
  { href: '#projects', label: './projects' },
  { href: '#experience', label: './experience' },
  { href: '#terminal', label: './terminal' },
  { href: '#contact', label: './contact' },
]

