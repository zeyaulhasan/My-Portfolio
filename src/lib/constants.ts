export const PERSONAL_INFO = {
  name: "Zeyaul Hasan",
  title: "Software Developer | Cyber Security Enthusiast | Competitive Programmer",
  location: "Punjab, India",
  email: "Zeyaulhasan1326@gmail.com", // Replace with actual email
  resume: "/resume.pdf", // Add your resume to public folder
  bio: "Passionate Software Developer and B.Tech CSE graduate from Lovely Professional University with expertise in software engineering, ethical hacking, cybersecurity, and competitive programming. Actively building innovative solutions and open to exciting opportunities.",
  currentlyLearning: ["Generative AI", "AWS Cloud", "Advanced Cybersecurity", "Machine Learning"]
}

export const SOCIAL_LINKS = {
  github: "https://github.com/zeyaulhasan", // Replace with actual links
  linkedin: "https://www.linkedin.com/in/the7hasan/",
  email: "mailto:Zeyaulhasan1326@gmail.com",
  leetcode: "https://leetcode.com/zeyaulhasan",
  gfg: "https://www.geeksforgeeks.org/user/zeyaulha940z/",
  codeforces: "https://codeforces.com/profile/the7hasan",
  stackoverflow: "https://stackoverflow.com/users/20911380/zeyaul-hasan",
  quora: "https://www.quora.com/profile/ZEYAUL-HASAN-7"
}

export const EDUCATION = [
  {
    institution: "Lovely Professional University, Phagwara, Punjab",
    logo: "/images/LPU.png",
    href: "https://www.lpu.in/",
    degree: "B.Tech Computer Science Engineering",
    period: "2022 - 2026",
    status: "Completed",
    description: "Completed Bachelor of Technology in Computer Science Engineering with a focus on software engineering, cybersecurity, and competitive programming. Maintained excellent academic performance while actively participating in coding competitions and technical workshops.",
    highlights: [
      "Relevant Coursework: Data Structures, Algorithms, System Design, Cybersecurity",
      "Active member of Coding Club and Technical Society",
      "Regular participant in hackathons and coding competitions",
      "Research projects in AI/ML and cybersecurity applications"
    ],
    cgpa: "8.5"
  },
  {
    institution: "R.P.S College, Patna, Bihar",
    logo: "/images/RPS.png",
    href: "https://rpscollege.org/",
    degree: "Intermediate (PCM)",
    period: "2019 - 2021",
    status: "Completed",
    description: "Completed intermediate education with Physics, Chemistry, and Mathematics as core subjects. Developed strong foundation in science and mathematics with excellent academic performance.",
    highlights: [
      "Specialized in Physics, Chemistry, and Mathematics",
      "Consistent academic excellence throughout the course",
      "Active participation in science exhibitions and competitions",
      "Strong foundation in analytical and problem-solving skills"
    ],
    percentage: "85%"
  },
  {
    institution: "Vidya Bharati Vidya Gram, Sitamarhi, Bihar",
    logo: "/images/Vidya Bharati.png",
    degree: "Matriculation",
    period: "2018 - 2019",
    status: "Completed",
    description: "Completed secondary education with comprehensive curriculum covering all major subjects. Established strong academic foundation and developed interest in technology and science.",
    highlights: [
      "Comprehensive curriculum with all major subjects",
      "Active participation in extracurricular activities",
      "Strong foundation for higher education"
    ],
    percentage: "90%"
  }
]

export const ACHIEVEMENTS = [
  {
    title: "Top 10 Rank in College Coding Competition",
    description: "Secured top 10 position in competitive programming contest",
    year: "2024"
  },
  {
    title: "AWS Cloud Workshop Completion",
    description: "Successfully completed comprehensive AWS cloud computing workshop",
    year: "2024"
  },
  {
    title: "Cybersecurity Workshop Certification",
    description: "Completed advanced cybersecurity and digital forensics workshop",
    year: "2024"
  }
]

export const SKILLS = {
  languages: [
    { name: "C++", level: 5, icon: "SiCplusplus" },
    { name: "Java", level: 5, icon: "SiJava" },
    { name: "Python", level: 4, icon: "SiPython" },
    { name: "JavaScript", level: 4, icon: "SiJavascript" },
    { name: "TypeScript", level: 3, icon: "SiTypescript" },
    { name: "C", level: 4, icon: "SiC" }
  ],
  frameworks: [
    { name: "React.js", level: 4, icon: "SiReact" },
    { name: "Next.js", level: 3, icon: "SiNextdotjs" },
    { name: "Node.js", level: 3, icon: "SiNodedotjs" },
    { name: "Spring Boot", level: 3, icon: "SiSpring" },
    { name: "Tailwind CSS", level: 4, icon: "SiTailwindcss" }
  ],
  tools: [
    { name: "Git", level: 4, icon: "SiGit" },
    { name: "GitHub", level: 4, icon: "SiGithub" },
    { name: "MySQL", level: 4, icon: "SiMysql" },
    { name: "AWS", level: 3, icon: "SiAmazonaws" },
    { name: "Linux", level: 4, icon: "SiLinux" },
    { name: "VS Code", level: 5, icon: "SiVisualstudiocode" }
  ],
  softSkills: [
    { name: "Problem Solving", level: 5, icon: "SiPuzzle" },
    { name: "Team Leadership", level: 4, icon: "SiTeamviewer" },
    { name: "Communication", level: 5, icon: "SiChatbot" },
    { name: "Project Management", level: 4, icon: "SiTrello" },
    { name: "Critical Thinking", level: 5, icon: "SiBrain" },
    { name: "Adaptability", level: 4, icon: "SiShuffle" }
  ]
}

export const PROJECTS = [
  {
    id: 1,
    title: "CyberShield AI - Threat Intelligence SOC Platform",
    description: "Enterprise-grade AI-powered cybersecurity platform for real-time threat detection, analysis, and response. Features advanced threat intelligence, security monitoring, and automated incident response capabilities.",
    longDescription: "CyberShield AI is a comprehensive Security Operations Center (SOC) platform that leverages artificial intelligence and machine learning to provide real-time threat detection and analysis. The platform features a sophisticated dashboard with security overview, threat monitoring, analytics, and AI-powered insights. Built with modern web technologies and integrated with advanced security APIs, it provides enterprise-grade protection with 99.9% detection accuracy and continuous monitoring across all endpoints.",
    problem: "Organizations face increasing cyber threats with limited visibility and slow response times. Traditional security tools lack AI-powered intelligence and real-time threat analysis capabilities.",
    solution: "Developed an AI-powered threat intelligence platform with real-time monitoring, automated threat detection, and intelligent security insights. The system provides comprehensive security overview, threat trend analysis, and actionable recommendations.",
    impact: "Enables security teams to detect and respond to threats in real-time with 99.9% accuracy, reducing incident response time and providing proactive security measures through AI-driven insights.",
    image: "/images/cybershield-login.png",
    technologies: ["React", "TypeScript", "Python", "Node.js", "AI/ML", "Cybersecurity", "Real-time Analytics", "AES-256 Encryption"],
    github: "https://github.com/zeyaulhasan/AI-Powered-Cyber-Threat-Intelligence-SOC-Platform",
    live: "https://ai-powered-cyber-threat-intelligence-and.onrender.com",
    featured: true,
    category: "Security"
  },
  {
    id: 2,
    title: "Cyber Intelligence Fusion",
    description: "Multi-source geospatial cybersecurity dashboard providing real-time intelligence and live geospatial threat visualization. Integrates multiple data sources for comprehensive threat landscape analysis.",
    longDescription: "Cyber Intelligence Fusion is an advanced geospatial cybersecurity platform that aggregates and visualizes threat intelligence from multiple sources in real-time. The platform features an intuitive dashboard with real-time intelligence feeds and live geospatial mapping capabilities, enabling security analysts to visualize global threat patterns and identify emerging risks. Built with modern web technologies and integrated with geospatial APIs, it provides a comprehensive view of the cyber threat landscape with interactive maps and real-time data visualization.",
    problem: "Security teams struggle to correlate threat data from multiple sources and lack geographical context for cyber threats, making it difficult to identify patterns and respond to regional attacks.",
    solution: "Created a unified geospatial intelligence platform that aggregates multi-source threat data and visualizes it on interactive maps, providing real-time threat intelligence with geographical context and pattern recognition.",
    impact: "Empowers security analysts to identify geographical threat patterns, correlate multi-source intelligence, and make data-driven decisions with comprehensive geospatial visualization and real-time threat tracking.",
    image: "/images/cyber-intelligence-fusion.png",
    technologies: ["React", "Next.js", "TypeScript", "Geospatial APIs", "Real-time Data", "Interactive Maps", "Threat Intelligence"],
    github: "https://github.com/zeyaulhasan/cyber-intelligence-fusion",
    live: "https://cyber-intelligence-fusion.vercel.app/",
    featured: true,
    category: "Security"
  },
  {
    id: 3,
    title: "Team Task Manager",
    description: "Collaborative project management platform that brings every project, owner, and deadline into focus. Features task assignment, progress tracking, and team collaboration tools for streamlined workflow management.",
    longDescription: "Team Task Manager is a comprehensive project management solution designed to help teams plan work, assign tasks clearly, and track progress from one calm workspace. The platform features an intuitive Kanban-style board with To Do, In Progress, and Done columns, real-time progress tracking with percentage completion, role-based visibility metrics, and deadline management. Built with modern web technologies, it provides a clean and efficient interface for managing multiple projects simultaneously with clear task ownership and accountability.",
    problem: "Teams struggle with scattered project information, unclear task ownership, and difficulty tracking progress across multiple projects, leading to missed deadlines and reduced productivity.",
    solution: "Developed a centralized task management platform with visual Kanban boards, clear task assignment, real-time progress tracking, and role-based metrics to provide complete visibility and control over team workflows.",
    impact: "Streamlines team collaboration by providing a single source of truth for all projects, improving task clarity, reducing missed deadlines, and increasing overall team productivity through better organization and visibility.",
    image: "/images/team-task-manager.png",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Task Management", "Real-time Updates", "Kanban Board"],
    github: "https://github.com/zeyaulhasan/team-task-manager",
    live: "https://team-task-manager-nu-seven.vercel.app/",
    featured: true,
    category: "Full Stack"
  }
]

export const CERTIFICATES = [
  {
    id: 1,
    name: "OCI Generative Ai Professional",
    issuer: "Oracle University",
    date: "Sep 23, 2025",
    image: "/images/oci-generative-ai-professional.jpg",
    verificationUrl: "#"
  },
  {
    id: 2,
    name: "OCI DevOps Professional",
    issuer: "Oracle University",
    date: "Sep 23, 2025",
    image: "/images/oci-devops-professional.jpg",
    verificationUrl: "#"
  },
  {
    id: 3,
    name: "Cloud Computing",
    issuer: "NPTEL- IIT Kharagpur",
    date: "May 15, 2025",
    image: "/images/cloud-computing.jpg",
    verificationUrl: "#"
  },
  {
    id: 4,
    name: "Core & Advanced Java",
    issuer: "Board & infinity",
    date: "Jul 11, 2024",
    image: "/images/board-infinity.jpg",
    verificationUrl: "#"
  },
  {
    id: 5,
    name: "STC On Figma",
    issuer: "LPU",
    date: "Apr 11, 2025",
    image: "/images/stc-on-figma.jpg",
    verificationUrl: "#"
  },
  {
    id: 6,
    name: "Cyber Job Simulation",
    issuer: "Deloitte",
    date: "June 24, 2025",
    image: "/images/cyber-job-simulation.jpg",
    verificationUrl: "#"
  },
  {
    id: 7,
    name: "CompTIA Linux+ XKO-005",
    issuer: "CYBRARY",
    date: "May 10, 2024",
    image: "/images/comptia-linux-xko005.jpg",
    verificationUrl: "#"
  },
  {
    id: 8,
    name: "Full-Stack Web Developer",
    issuer: "LinkedIn",
    date: "Feb 20, 2023",
    image: "/images/full-stack-web-developer.jpg",
    verificationUrl: "#"
  }
]

export const CODING_STATS = {
  problemsSolved: 500,
  platforms: [
    { name: "GeeksforGeeks", solved: 50, profile: SOCIAL_LINKS.gfg },
    { name: "LeetCode", solved: 450, profile: SOCIAL_LINKS.leetcode },
    { name: "CodeForces", solved: 50, profile: SOCIAL_LINKS.codeforces }
  ],
  achievements: [
    "Top 10 in College Coding Competition",
    "20+ Major Projects Completed",
    "Regular Participant in Online Contests"
  ]
}

export const NAVIGATION_ITEMS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Achievements", href: "#achievements" },
  { name: "Certificates", href: "#certificates" },
  { name: "Contact", href: "#contact" }
]
