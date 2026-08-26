export const profile = {
  user: 'guest',
  host: 'hussam-tarteer',
  name: 'Hussam Tarteer',
  role: 'Full-Stack Developer',
  location: 'Amman, Jordan (UTC+3)',
  email: 'hussamcodes@gmail.com',
  resumeUrl: '/hussam-tarteer-resume.pdf',
  tagline: 'I build reliable Spring Boot systems and focused React experiences.',
  intro: 'Full-stack developer in Amman, turning product ideas into secure APIs, real-time systems, and responsive web interfaces.',
  availability: 'Open to software engineering opportunities',
  about: [
    'I am a full-stack developer who gravitates toward backend-heavy products: clear domain models, secure REST APIs, real-time communication, and interfaces that make the underlying system feel simple.',
    'At ProgressSoft, I built and tested Spring Boot applications under senior mentorship. At IEEE RAS UJ, I lead web platform development and turn what I learn into workshops on Python, Git, problem solving, and Linux.',
    'I care about code that is understandable after the demo is over. My daily toolkit is Java, Spring Boot, React, relational databases, Docker, Git, and Linux.',
  ],
  socials: [
    { label: 'github', url: 'https://github.com/hustarico', handle: '@hustarico' },
    { label: 'email', url: 'mailto:hussamcodes@gmail.com', handle: 'hussamcodes@gmail.com' },
  ],
}

export const heroLines = [
  { pre: '$ ', text: 'ssh guest@hussam-tarteer' },
  { pre: '[ok] ', text: 'connection established' },
  { pre: '$ ', text: 'whoami' },
  { pre: '> ', text: profile.name },
  { pre: '$ ', text: 'cat role.txt' },
  { pre: '> ', text: profile.role },
]

export const trustedBy = [
  { name: 'ProgressSoft', logo: '/logos/progresssoft.png' },
  { name: 'IEEE Jordan Section', logo: '/logos/ieee-jordan.png' },
  { name: 'IEEE Computer Society · UJ', logo: '/logos/ieee-cs-uj.png' },
  { name: 'IEEE Computational Intelligence · UJ', logo: '/logos/ieee-cis-uj.png' },
  { name: 'IEEE Robotics & Automation · UJ', logo: '/logos/ieee-ras-uj.png' },
  { name: 'Smart Cell', logo: '/logos/smart-cell.png' },
]

export const skills = [
  {
    group: 'backend/',
    items: [
      { name: 'java' },
      { name: 'spring-boot' },
      { name: 'spring-security' },
      { name: 'jpa-hibernate' },
      { name: 'websockets-stomp' },
      { name: 'rest-apis' },
    ],
  },
  {
    group: 'frontend/',
    items: [
      { name: 'reactjs' },
      { name: 'javascript-es6+' },
      { name: 'html-css' },
    ],
  },
  {
    group: 'databases/',
    items: [
      { name: 'mysql' },
      { name: 'postgresql' },
    ],
  },
  {
    group: 'practices-tools/',
    items: [
      { name: 'solid-clean-code' },
      { name: 'design-patterns' },
      { name: 'junit' },
      { name: 'mockito' },
      { name: 'docker' },
      { name: 'git-github' },
      { name: 'linux' },
    ],
  },
]

export const projects = [
  {
    name: 'echo',
    label: 'Real-time messaging',
    featured: true,
    image: '/screenshots/echo.svg',
    desc: 'Backend for direct and group chat with authenticated, bidirectional messaging over WebSockets.',
    impact: 'JWT-secured real-time communication with STOMP',
    tech: ['Spring Boot', 'MySQL', 'WebSockets STOMP', 'JWT'],
    repo: 'https://github.com/hustarico/echo',
  },
  {
    name: 'aeye-backend',
    label: 'AI systems integration',
    featured: true,
    image: '/screenshots/aeye-backend.svg',
    desc: 'Three-layer CCTV system connecting a Python AI service, Spring Boot core, and React frontend.',
    impact: '~15 requests/second for near real-time image updates',
    tech: ['Spring Boot', 'Python', 'REST', 'JWT'],
    repo: 'https://github.com/hustarico/aeye-backend',
  },
  {
    name: 'geeks-league-backend',
    label: 'Production REST API',
    featured: true,
    image: '/screenshots/geeks-league.svg',
    desc: 'Spring Boot and MySQL API powering the IEEE CS JU Geeks League platform.',
    impact: 'Deployed on Render and serving production traffic',
    tech: ['Spring Boot', 'MySQL', 'Render'],
    repo: 'https://github.com/hustarico/geeksLeagueBackend',
  },
  {
    name: 'streakr',
    label: 'Productivity web app',
    image: '/screenshots/streakr.svg',
    desc: 'Client-side React productivity tool with streak tracking and session analytics — no backend, no accounts, instant load.',
    impact: 'Zero-signup experience with local-first persistence',
    tech: ['React', 'localStorage', 'Netlify'],
    demo: 'https://streakr-study.netlify.app',
  },
  {
    name: 'smart-cell-website',
    label: 'Client website',
    image: '/screenshots/smart-cell.svg',
    desc: 'Responsive portfolio website for Smart Cell company — shipped with a two-person team using Git.',
    impact: 'Live company web presence at ses-jo.com',
    tech: ['HTML/CSS', 'JavaScript', 'Git'],
    demo: 'https://ses-jo.com',
  },
  {
    name: 'ieee-ras-uj-website',
    label: 'Team platform',
    image: '/screenshots/ieee-ras-uj.svg',
    desc: 'Official team website for IEEE RAS UJ — designed and built with ReactJS (ongoing).',
    impact: 'Responsive platform for the university branch',
    tech: ['ReactJS', 'Responsive Design'],
    repo: 'https://github.com/hustarico/IEEE-RAS-UJ-WEBSITE',
  },
]

export const experience = [
  {
    period: '2026.08',
    title: 'Software Development Intern @ ProgressSoft — Amman',
    points: [
      'Built two Spring Boot applications under mentor guidance applying SOLID principles, clean code and design patterns',
      'Wrote unit and integration tests with JUnit and Mockito to validate application behavior',
      'Worked with PostgreSQL for persistence and Docker for containerized dev environments',
      'Participated in daily standups with hands-on mentorship from senior engineers',
    ],
  },
  {
    period: '2025.10 — present',
    title: 'Webmaster @ IEEE RAS UJ — University of Jordan',
    points: [
      'Orchestrating development, launch and maintenance of multiple IEEE RAS UJ web platforms, including the official ReactJS team site',
      'Delivered workshops on Python, Git/GitHub, problem solving and Linux basics',
    ],
  },
  {
    period: '2024 — present',
    title: 'Technical Member @ IEEE CS UJ — University of Jordan',
    points: [
      'Contributed development, UX improvements and bug fixes to the official IEEE CIS JU website',
      'Collaborated on organizing tech events and workshops; mentored peers learning full-stack development',
    ],
  },
]

export const education = {
  period: '2023 — present',
  degree: "B.Sc. Computer Information Systems",
  school: 'University of Jordan',
  note: 'GPA: Very Good',
}

export const socials = profile.socials

export const navLinks = [
  { href: '#projects', label: './projects' },
  { href: '#about', label: './about' },
  { href: '#experience', label: './experience' },
  { href: '#skills', label: './skills' },
  { href: '#contact', label: './contact' },
]
