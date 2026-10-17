export const profile = {
  user: 'guest',
  host: 'hussam-tarteer',
  name: 'Hussam Tarteer',
  role: 'Full-Stack Developer',
  location: 'Amman, Jordan (UTC+3)',
  email: 'hussamcodes@gmail.com',
  resumeUrl: 'https://drive.google.com/drive/folders/1EGChHwPCEsj-KeCbcSnrc9OMc9UX3HmU',
  tagline: 'I build reliable Spring Boot systems and focused React experiences',
  intro: 'Full-stack developer in Amman, turning product ideas into secure APIs, real-time systems, and responsive web interfaces',
  availability: 'Open to software engineering opportunities',
  about: [
    'I\'m Hussam - a backend-first full-stack developer who likes understanding how things work, not just making them work.',
    'Java and Spring Boot are home. Most of my work revolves around building backends, from REST APIs and authentication systems to real-time applications. My time at ProgressSoft gave me the opportunity to take that knowledge into a professional software development environment, learn from experienced engineers, and put software design principles into practice.',
    'Outside the code editor, I\'m the Chairman of the Open Source Society at UJ, helping build a community around software development and learning. I\'m also interested in open source and exploring what people are building beyond my own projects.',
    'I like pulling things apart, figuring out how they work, and putting them back together better. Software gives me plenty of excuses to do exactly that.'
  ],
  socials: [
    { label: 'github', url: 'https://github.com/hustarico', handle: '@hustarico' },
    { label: 'email', url: 'mailto:hussamcodes@gmail.com', handle: 'hussamcodes@gmail.com' },
    { label: 'linkedin', url: 'https://linkedin.com/in/hussam-tarteer', handle: '@hussam-tarteer' },
  ],
}

export const highlights = [
  'ProgressSoft alumnus',
  'IEEE RAS UJ webmaster',
  'Open Source Society - UJ Chairman',
  'Spring Boot + React',
  'Linux daily driver',
]

export const trustedBy = [
  { name: 'ProgressSoft', logo: '/logos/progresssoft.png' },
  { name: 'IEEE Jordan Section', logo: '/logos/ieee-jordan.png' },
  { name: 'IEEE Computer Society · UJ', logo: '/logos/ieee-cs-uj.png' },
  { name: 'IEEE Computational Intelligence · UJ', logo: '/logos/ieee-cis-uj.png' },
  { name: 'IEEE Robotics & Automation · UJ', logo: '/logos/ieee-ras-uj.png' },
  { name: 'Smart Cell', logo: '/logos/smart-cell.png' },
  { name: 'Open Source Society · UJ', logo: '/logos/oss-logo.png'}
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
      { name: 'H2' },
    ],
  },
  {
    group: 'practices-tools/',
    items: [
      { name: 'solid-principles' },
      { name: 'clean-architecture' },
      { name: 'clean-code' },
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
    name: 'Library Manager',
    label: 'Clean Architecture',
    featured: true,
    image: '/screenshots/library-manager-screenshot.webp',
    desc: 'A modular Spring Boot project exploring service-based and use-case-oriented architectures with isolated domain and persistence models.',
    impact: 'Two application architectures sharing a domain and infrastructure foundation.',
    tech: ['Java', 'Spring Boot', 'Maven', 'JPA', 'H2', 'Clean Architecture'],
    repo: 'https://github.com/hustarico/libraryManager',
  },{
    name: 'echo',
    label: 'Real-time messaging',
    featured: true,
    image: '/screenshots/echo-screenshot.webp',
    desc: 'Backend for direct and group chat with authenticated, bidirectional messaging over WebSockets.',
    impact: 'JWT-secured real-time communication with STOMP.',
    tech: ['Spring Boot', 'MySQL', 'WebSockets STOMP', 'JWT'],
    repo: 'https://github.com/hustarico/echo',
  },
  {
    name: 'aeye-backend',
    label: 'AI systems integration',
    featured: true,
    image: '/screenshots/aeye-backend-screenshot.webp',
    desc: 'Three-layer CCTV system connecting a Python AI service, Spring Boot core, and React frontend.',
    impact: '~15 requests/second for near real-time image updates.',
    tech: ['Spring Boot', 'Python', 'REST', 'JWT'],
    repo: 'https://github.com/hustarico/aeye-backend',
  },
  {
    name: 'geeks-league-backend',
    label: 'Production REST API',
    featured: false,
    image: '/screenshots/geeks-league-screenshot.webp',
    desc: 'Spring Boot and MySQL API powering the IEEE CS JU Geeks League platform.',
    impact: 'Deployed on Render and serving production traffic.',
    tech: ['Spring Boot', 'MySQL', 'Render'],
    repo: 'https://github.com/hustarico/geeksLeagueBackend',
  },
  {
    name: 'streakr',
    label: 'Productivity web app',
    image: '/screenshots/streakr-screenshot.webp',
    desc: 'Client-side React productivity tool with streak tracking and session analytics - no backend, no accounts, instant load.',
    impact: 'Zero-signup experience with local-first persistence.',
    tech: ['React', 'localStorage', 'Netlify'],
    demo: 'https://streakr-study.netlify.app',
  },
  {
    name: 'smart-cell-website',
    label: 'Client website',
    image: '/screenshots/smart-cell-screenshot.webp',
    desc: 'Responsive portfolio website for Smart Cell company - shipped with a two-person team using Git.',
    impact: 'Live company web presence at ses-jo.com.',
    tech: ['HTML/CSS', 'JavaScript', 'Git'],
    demo: 'https://ses-jo.com',
  },
  // {
  //   name: 'ieee-ras-uj-website',
  //   label: 'Team platform',
  //   image: '/screenshots/ieee-ras-uj.svg',
  //   desc: 'Official team website for IEEE RAS UJ - designed and built with ReactJS (ongoing).',
  //   impact: 'Responsive platform for the university branch',
  //   tech: ['ReactJS', 'Responsive Design'],
  //   repo: 'https://github.com/hustarico/IEEE-RAS-UJ-WEBSITE',
  // },
]

export const experience = [
  {
    period: '2026.08',
    title: 'Software Development Intern @ ProgressSoft - Amman',
    points: [
      'Built two Spring Boot applications under mentor guidance applying SOLID principles, clean code and design patterns.',
      'Wrote unit and integration tests with JUnit and Mockito to validate application behavior.',
      'Worked with PostgreSQL for persistence and Docker for containerized dev environments.',
      'Participated in daily standups with hands-on mentorship from senior engineers.',
    ],
  },
  {
    period: '2026.10 - Present',
    title: 'Chairman @ Open Source Society - University of Jordan',
    points: [
      'Leading the society\'s executive team and coordinating its technical and community initiatives.',
      'Working with team leads to plan workshops, events, and development activities.',
    ],
  },
  {
    period: '2026.01 - 2026.09',
    title: 'Technical Team Lead @ Open Source Society - University of Jordan',
    points: [
      'Helped students get started with Linux and supported them in learning their development environments.',
      'Delivered a practical workshop introducing students to Linux.',
    ],
  },
  {
    period: '2024.03 - Present',
    title: 'Technical Member @ IEEE CS UJ - University of Jordan',
    points: [
      'Geeks League: Independently developed the platform\'s Spring Boot and MySQL backend, providing the REST API for a frontend built by another team member.',
      'Geeks Program: Curated free and paid Arabic and English learning resources covering the MERN stack, from HTML and CSS through React, Node.js, Express.js, and MongoDB.',
      'Practical mentorship: Delivered an introductory session on web application architecture, then guided participants through weekly hands-on assignments with independent learning and code reviews. Two participants progressed from HTML fundamentals to building dynamic React applications using hooks such as useState and useEffect.'
    ],
  },{
    period: '2025.10 - 2026.09',
    title: 'Webmaster @ IEEE RAS UJ - University of Jordan',
    points: [
      'Delivered workshops on Python, Git/GitHub, and problem solving.',
    ],
  },
]

export const education = {
  period: '2023 - Present',
  degree: "B.Sc. Computer Information Systems",
  school: 'University of Jordan',
  note: 'GPA: 3.44 (Very Good)',
}

export const socials = profile.socials

export const navLinks = [
  { href: '#projects', label: './projects' },
  { href: '#about', label: './about' },
  { href: '#experience', label: './experience' },
  { href: '#skills', label: './skills' },
  { href: '#contact', label: './contact' },
]
