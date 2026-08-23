export const profile = {
  user: 'guest',
  host: 'hussam-tarteer',
  name: 'Hussam Tarteer',
  role: 'Full-Stack Developer',
  location: 'Amman, Jordan (UTC+3)',
  email: 'hussamcodes@gmail.com',
  resumeUrl: '/hussam-tarteer-resume.pdf',
  tagline: 'I build REST APIs with Spring Boot and reactive UIs with React.',
  about: [
    'Hi, I am Hussam — a full-stack developer from Amman, Jordan, currently leading web platform development for IEEE RAS UJ.',
    'I build REST APIs and real-time systems with Spring Boot, and ship reactive interfaces with React. I recently completed a Spring Boot internship at ProgressSoft, where I wrote production-grade code under senior mentorship, and independently built Echo, a real-time chat backend powered by WebSockets and JWT authentication.',
    'My goal is simple: contribute to real product development and grow under experienced engineers. Off the keyboard I run Linux as my daily driver and give workshops on Python, Git, problem solving, and Linux basics.',
  ],
  socials: [
    { label: 'github', url: 'https://github.com/hustarico', handle: '@hustarico' },
    { label: 'website', url: 'https://hussamtarteer.netlify.app', handle: 'hussamtarteer.netlify.app' },
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
    image: '/screenshots/echo.svg',
    desc: 'Real-time messaging platform backend — direct and group chats with secure auth.',
    tech: ['Spring Boot', 'MySQL', 'WebSockets STOMP', 'JWT'],
    repo: 'https://github.com/hustarico/echo',
  },
  {
    name: 'aeye-backend',
    image: '/screenshots/aeye-backend.svg',
    desc: 'AI-powered CCTV system: Python AI layer talking to a Spring Boot core over REST at ~15 req/s for near real-time image updates.',
    tech: ['Spring Boot', 'Python', 'REST', 'JWT'],
    repo: 'https://github.com/hustarico/aeye-backend',
  },
  {
    name: 'geeks-league-backend',
    image: '/screenshots/geeks-league.svg',
    desc: 'REST API for the IEEE CS JU Geeks League platform — live in production on Render.',
    tech: ['Spring Boot', 'MySQL', 'Render'],
    repo: 'https://github.com/hustarico/geeksLeagueBackend',
  },
  {
    name: 'streakr',
    image: '/screenshots/streakr.svg',
    desc: 'Client-side React productivity tool with streak tracking and session analytics — no backend, no accounts, instant load.',
    tech: ['React', 'localStorage', 'Netlify'],
    demo: 'https://streakr-study.netlify.app',
  },
  {
    name: 'smart-cell-website',
    image: '/screenshots/smart-cell.svg',
    desc: 'Responsive portfolio website for Smart Cell company — shipped with a two-person team using Git.',
    tech: ['HTML/CSS', 'JavaScript', 'Git'],
    demo: 'https://ses-jo.com',
  },
  {
    name: 'ieee-ras-uj-website',
    image: '/screenshots/ieee-ras-uj.svg',
    desc: 'Official team website for IEEE RAS UJ — designed and built with ReactJS (ongoing).',
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
  { href: '#about', label: './about' },
  { href: '#skills', label: './skills' },
  { href: '#projects', label: './projects' },
  { href: '#experience', label: './experience' },
  { href: '#terminal', label: './terminal' },
  { href: '#contact', label: './contact' },
]
