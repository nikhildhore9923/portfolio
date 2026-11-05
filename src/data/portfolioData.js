export const PERSONAL_INFO = {
  name: "Nikhil Dhore",
  title: "B.Tech CSE (AI & ML) Student | Software Developer",
  shortBio: "Final-year B.Tech CSE (AI & ML) student who has built and deployed two full-stack projects: a real-time multiplayer quiz platform and an AI-powered feedback analysis platform. Strong foundation in Java, DSA, REST APIs, and machine learning, backed by a GATE 2026 score of 324.",
  headline: "Building Practical Software. Solving Real Problems.",
  subheadline: "Final-year B.Tech CSE (AI & ML) student focused on Java, full-stack systems, and applied machine learning.",
  location: "Kolhapur / Maharashtra, India",
  email: "dhorenikhil46@gmail.com",
  phone: "+91-9284944578",
  github: "https://github.com/nikhildhore9923",
  linkedin: "https://www.linkedin.com/in/nikhil-dhore-9b2318297",
  availability: "Available for Software Engineering Roles & Campus Placements",
  primaryFocus: "Java, Full-Stack Web Development, REST APIs, Machine Learning",
  stats: [
    { label: "GATE 2026 CS", value: "Score: 324", detail: "National-level entrance qualification" },
    { label: "Engineering Degree", value: "CGPA: 8.09", detail: "KIT CoE Kolhapur (Autonomous)" },
    { label: "Flagship Systems", value: "2 Projects", detail: "Sparq (Real-Time) & Pulse (ML)" },
    { label: "Core Foundation", value: "Java & DSA", detail: "OOP, Logic & Problem Solving" },
  ]
};

export const PROJECTS = [
  {
    id: "sparq",
    name: "Sparq",
    tagline: "Real-Time Multiplayer Quiz Platform",
    summary: "A Kahoot-style real-time quiz game where the server handles timers, scoring, and answer checking to prevent cheating, featuring LLM trivia generation and instant Socket.io updates.",
    category: "Real-Time Web App",
    tags: ["React", "Node.js", "Express", "Socket.io", "JWT", "Groq API", "SQLite"],
    statusBadge: "Real-Time Multiplayer Quiz Platform",
    badgeColor: "cyan",
    githubUrl: "https://github.com/nikhildhore9923/sparq-quiz",
    liveDemoUrl: "https://sparq-quiz.vercel.app/",
    problem: "Traditional web apps require page refreshes to update scores and timers, making multiplayer gameplay sluggish and prone to client-side clock tampering.",
    solution: "Built a Kahoot-style real-time quiz game using Node.js and Socket.io, where the server controls timers, scoring, and answer checking. Integrated Groq API for instant trivia generation and JWT authentication for saved quizzes.",
    keyFeatures: [
      "Server-Authoritative Game State: Server handles timers, scoring, and answer verification to strictly prevent client-side latency cheating.",
      "Instant AI Quiz Generation: Integrated Groq API (LLM) to generate customized 4-option trivia questions on any topic in seconds.",
      "Host Authentication & Saved Quizzes: Host login with JWT and bcrypt password hashing, plus Express REST APIs to save and reuse quizzes.",
      "Dual Deployment & High Performance: Stored game data in SQLite (better-sqlite3, WAL mode) with React on Vercel and Socket.io server on Render."
    ],
    technicalHighlights: [
      "Real-time bidirectional synchronization with Socket.io and WebSockets.",
      "On-demand AI question generation powered by Groq API (Llama 3).",
      "Persistent SQLite with Write-Ahead Logging (WAL) for sub-millisecond writes."
    ],
    resumeBullets: [
      "Built a Kahoot-style real-time quiz game using Node.js and Socket.io, where the server handles timers, scoring, and answer checking to prevent cheating.",
      "Integrated the Groq API (LLM) to generate 4-option trivia questions on any topic, so hosts can create a quiz instantly.",
      "Implemented host login with JWT and bcrypt password hashing, plus Express REST APIs to save and reuse quizzes, while live gameplay runs separately over Socket.io.",
      "Stored game data in SQLite (better-sqlite3, WAL mode) and deployed the React frontend on Vercel and the Socket.io server on Render."
    ],
    architectureOverview: {
      title: "Server-Authoritative Real-Time Architecture",
      description: "Dual-protocol structure separating high-frequency game synchronization from stateless auth and persistent storage.",
      nodes: [
        {
          layer: "Client Frontend",
          technologies: ["React (Vite)", "Socket.io Client", "Tailwind CSS"],
          role: "Optimistic UI state, live countdown animations, buzzer interaction, and live leaderboard rendering."
        },
        {
          layer: "Stateless Auth & Management",
          technologies: ["Express REST API", "JWT", "bcrypt"],
          role: "Host authentication, quiz catalog management, and room parameter setup isolated from WebSocket events."
        },
        {
          layer: "Real-Time Synchronization Engine",
          technologies: ["Node.js", "Socket.io Server"],
          role: "Room state machine, server-authoritative countdown ticker, live buzz event arbitration, and scoring."
        },
        {
          layer: "On-Demand Content Generator",
          technologies: ["Groq API (Llama 3)"],
          role: "Generates topic-customized 4-option trivia question sets on-the-fly and formats them into strict game payloads."
        },
        {
          layer: "High-Performance Persistence",
          technologies: ["SQLite (better-sqlite3, WAL mode)"],
          role: "Fast disk transactions with Write-Ahead Logging for zero lock contention during high-speed quiz writes."
        }
      ]
    },
    engineeringChallenges: [
      {
        challenge: "Preventing client-side latency cheating and timer desynchronization across players with differing connection qualities.",
        solution: "Moved timer ownership entirely to the server room state machine. The server computes answers against server timestamps rather than relying on client timestamps.",
        impact: "Fair, synchronized gameplay immune to client-side clock modification."
      },
      {
        challenge: "Managing persistent WebSocket connections alongside serverless frontend requirements.",
        solution: "Engineered a split deployment strategy: frontend statically deployed on Vercel's global CDN, with the persistent Node.js/Socket.io backend deployed on Render.",
        impact: "Fast frontend edge delivery combined with resilient long-lived bidirectional socket connections."
      }
    ]
  },
  {
    id: "pulse",
    name: "Pulse",
    tagline: "AI-Powered Customer Intelligence Platform",
    summary: "A full-stack customer feedback platform with a React dashboard, Node.js/Express API, FastAPI machine learning service, Scikit-learn sentiment classification, Groq LLM trends, and MySQL storage.",
    category: "AI & Web App",
    tags: ["React", "Node.js", "FastAPI", "Scikit-learn", "Groq API", "MySQL"],
    statusBadge: "AI-Powered Customer Intelligence Platform",
    badgeColor: "emerald",
    githubUrl: "https://github.com/nikhildhore9923/feedback-analyzer",
    liveDemoUrl: "https://feedback-analyzer-beta.vercel.app/",
    problem: "Customer feedback arrives in long, unstructured text across channels. Manual review is too slow, making it difficult for teams to detect critical issues before they escalate.",
    solution: "Built a full-stack platform combining a React dashboard, Node.js/Express API, and a FastAPI ML service with Scikit-learn NLP classification, Groq LLM executive summaries, and automatic fallback handling.",
    keyFeatures: [
      "Microservice Architecture: React dashboard connected to a Node.js/Express API with a dedicated FastAPI Python service for ML, using MySQL for storage.",
      "Scikit-learn NLP Pipeline: TF-IDF feature extraction and Logistic Regression classifying feedback sentiment and topic with confidence scoring.",
      "Groq LLM Trend Summaries: Integrated Groq API (Llama 3) to generate on-demand executive summaries of customer feedback patterns.",
      "Cold-Start Resilient Fallback: When the ML service is slow or cold-starting, the backend switches after a short timeout to a keyword-based sentiment check."
    ],
    technicalHighlights: [
      "Microservice architecture integrating Node.js, FastAPI, and MySQL.",
      "NLP classification pipeline using Scikit-learn (TF-IDF + Logistic Regression).",
      "Executive trend synthesis with Groq API (Llama 3) and resilient fallback handling."
    ],
    resumeBullets: [
      "Built a full-stack customer feedback platform with a React dashboard, a Node.js/Express API, and a separate FastAPI service for machine learning, using MySQL for storage.",
      "Implemented an NLP pipeline in Scikit-learn (TF-IDF + Logistic Regression) that classifies feedback sentiment and topic and returns a confidence score.",
      "Integrated the Groq API (Llama 3) to generate on-demand executive summaries of customer feedback trends.",
      "Added a fallback so the app stays responsive when the ML service is slow or cold-starting: after a short timeout, the backend switches to a simple keyword-based sentiment check."
    ],
    architectureOverview: {
      title: "Resilient Microservices & Fallback Pipeline",
      description: "How Pulse routes feedback from client ingestion through ML classification, serverless storage, and LLM synthesis.",
      nodes: [
        {
          layer: "Presentation Layer",
          technologies: ["React", "Tailwind CSS"],
          role: "Interactive analytics dashboard, real-time sentiment distribution charts, and feedback submission interface."
        },
        {
          layer: "API Gateway & Orchestration",
          technologies: ["Node.js", "Express", "Vercel Functions"],
          role: "HTTP endpoint orchestration, request validation, authentication, and intelligent failover routing."
        },
        {
          layer: "Primary ML Microservice",
          technologies: ["FastAPI (Python)", "Scikit-learn (TF-IDF + Logistic Regression)"],
          role: "Vectorization of feedback text, multiclass topic classification, and sentiment polarity scoring with confidence values."
        },
        {
          layer: "Fault-Tolerant Local Fallback",
          technologies: ["Node.js Local Heuristic Analyzer"],
          role: "Instantly kicks in within <50ms if the FastAPI service is cold-starting or unreachable."
        },
        {
          layer: "Intelligence & Data Layer",
          technologies: ["Groq API (Llama 3)", "MySQL Database"],
          role: "On-demand LLM synthesis for executive trends and relational storage for persistent historical metrics."
        }
      ]
    },
    engineeringChallenges: [
      {
        challenge: "Mitigating Python ML microservice cold-start delays on serverless infrastructure.",
        solution: "Built an active circuit-breaker / timeout interceptor in the Node.js layer that redirects requests to a lightweight local heuristic classifier when latency exceeds the threshold.",
        impact: "Guaranteed uninterrupted user experience and 100% API uptime during cold starts."
      },
      {
        challenge: "Refactoring scheduled background cron jobs and file uploads for ephemeral serverless environments.",
        solution: "Re-architected cron routines into authenticated HTTP-triggered webhooks and adapted file upload streams to bypass persistent local disk dependencies.",
        impact: "Seamless deployment on Vercel Serverless without requiring expensive 24/7 background VM instances."
      }
    ]
  }
];

export const SKILL_CATEGORIES = [
  {
    category: "Languages",
    title: "Programming Languages",
    iconName: "Code2",
    skills: ["Java", "JavaScript", "SQL"],
    description: "Core languages used for object-oriented programming, asynchronous web applications, and relational databases."
  },
  {
    category: "Web & Backend",
    title: "Web & Backend Engineering",
    iconName: "Server",
    skills: ["React", "Node.js", "Express", "FastAPI", "REST APIs", "Socket.io", "WebSockets", "JWT", "HTML", "CSS"],
    description: "Full-stack development, asynchronous microservices, bidirectional WebSockets, and stateless authentication."
  },
  {
    category: "Databases",
    title: "Databases & Storage",
    iconName: "Database",
    skills: ["MySQL", "SQLite"],
    description: "Relational schema design, normalization, join queries, and fast SQLite Write-Ahead Logging (WAL)."
  },
  {
    category: "AI/ML & Data",
    title: "AI/ML & Data Science",
    iconName: "Brain",
    skills: ["NLP", "Scikit-learn", "NumPy", "Pandas", "Groq API"],
    description: "Text feature extraction (TF-IDF), Logistic Regression classification, data manipulation, and LLM integration."
  },
  {
    category: "Tools & Cloud",
    title: "Tools & Cloud Platforms",
    iconName: "Cloud",
    skills: ["Git", "GitHub", "Vercel", "Render"],
    description: "Version control workflows, continuous integration, frontend edge hosting, and persistent backend deployment."
  }
];

export const SKILLS = [
  // Languages
  { name: "Java", category: "Languages", level: "Primary", highlight: true, context: "OOP, Data Structures & Algorithms, and robust system design.", iconName: "Coffee" },
  { name: "JavaScript", category: "Languages", level: "Proficient", highlight: true, context: "ES6+, async/await, event-driven Node.js runtimes, and React.", iconName: "Code2" },
  { name: "SQL", category: "Languages", level: "Proficient", highlight: true, context: "Relational queries, schema design, normalization, and joins.", iconName: "Database" },

  // Web / Backend
  { name: "React", category: "Web & Backend", level: "Proficient", highlight: true, context: "Component architecture, hooks, responsive state management, and modern UI.", iconName: "Layers" },
  { name: "Node.js", category: "Web & Backend", level: "Proficient", highlight: true, context: "Asynchronous backend execution, API routing, and event orchestration.", iconName: "Server" },
  { name: "Express", category: "Web & Backend", level: "Proficient", highlight: true, context: "RESTful endpoints, middleware, and request validation.", iconName: "Network" },
  { name: "FastAPI", category: "Web & Backend", level: "Proficient", highlight: true, context: "Asynchronous Python microservice for low-latency ML inference.", iconName: "Zap" },
  { name: "REST APIs", category: "Web & Backend", level: "Proficient", highlight: false, context: "Resource-oriented design, status codes, and JSON contracts.", iconName: "Network" },
  { name: "Socket.io", category: "Web & Backend", level: "Proficient", highlight: true, context: "Bidirectional real-time communication and server-controlled room timers.", iconName: "Radio" },
  { name: "WebSockets", category: "Web & Backend", level: "Proficient", highlight: false, context: "Low-latency persistent TCP connection for live multiplayer sync.", iconName: "Radio" },
  { name: "JWT", category: "Web & Backend", level: "Competent", highlight: false, context: "Stateless authentication and session reconnection tokens.", iconName: "ShieldCheck" },
  { name: "HTML & CSS", category: "Web & Backend", level: "Proficient", highlight: false, context: "Semantic markup, Tailwind CSS, and mobile-responsive layouts.", iconName: "Globe" },

  // Databases
  { name: "MySQL", category: "Databases", level: "Competent", highlight: true, context: "Relational storage in Pulse for structured customer feedback.", iconName: "Database" },
  { name: "SQLite", category: "Databases", level: "Competent", highlight: true, context: "Embedded database (better-sqlite3, WAL mode) in Sparq for microsecond writes.", iconName: "HardDrive" },

  // AI/ML & Data
  { name: "NLP", category: "AI/ML & Data", level: "Applied", highlight: true, context: "Text preprocessing, tokenization, and sentiment polarity classification.", iconName: "Brain" },
  { name: "Scikit-learn", category: "AI/ML & Data", level: "Applied", highlight: true, context: "TF-IDF feature extraction and Logistic Regression models.", iconName: "Cpu" },
  { name: "NumPy", category: "AI/ML & Data", level: "Applied", highlight: false, context: "Vectorized numerical computing and multidimensional array operations.", iconName: "Cpu" },
  { name: "Pandas", category: "AI/ML & Data", level: "Applied", highlight: false, context: "Data manipulation, CSV parsing, and dataset preparation.", iconName: "FileSpreadsheet" },

  // Tools / Cloud
  { name: "Git", category: "Tools / Cloud", level: "Proficient", highlight: true, context: "Version control, branching, rebasing, and repository management.", iconName: "GitBranch" },
  { name: "GitHub", category: "Tools / Cloud", level: "Proficient", highlight: true, context: "Code collaboration, issue tracking, and GitHub Actions CI/CD.", iconName: "Github" },
  { name: "Vercel", category: "Tools / Cloud", level: "Proficient", highlight: true, context: "Frontend edge deployment and serverless API hosting.", iconName: "Cloud" },
  { name: "Render", category: "Tools / Cloud", level: "Competent", highlight: false, context: "Persistent deployment for long-lived Socket.io backend services.", iconName: "CloudRain" }
];

export const EDUCATION = [
  {
    degree: "B.Tech in Computer Science and Engineering (AI & ML)",
    institution: "KIT's College of Engineering (Autonomous)",
    location: "Kolhapur, Maharashtra",
    period: "2023 – Present",
    grade: "CGPA: 8.09 / 10",
    specialization: "Artificial Intelligence & Machine Learning",
    highlights: [
      "Final-year student specializing in AI & ML with a strong foundation in Java, Data Structures, OOP, and Database Systems.",
      "Built and deployed two full-stack projects: Sparq (real-time quiz) and Pulse (AI customer intelligence platform).",
      "Qualified GATE 2026 CS (Score: 324) demonstrating core Computer Science proficiency."
    ]
  },
  {
    degree: "Higher Secondary Certificate (HSC - Class XII)",
    institution: "G.M.B. Jr. College",
    location: "Arjuni Morgaon, Maharashtra",
    period: "2022",
    grade: "Percentage: 83.67%",
    highlights: ["Science stream with focus on Mathematics, Physics, and Chemistry."]
  },
  {
    degree: "Secondary School Certificate (SSC - Class X)",
    institution: "Vidya Vihar Mandir",
    location: "Lakhandur, Maharashtra",
    period: "2020",
    grade: "Percentage: 83.60%",
    highlights: ["Foundational academics with strong mathematics and sciences."]
  }
];

export const ACHIEVEMENTS = [
  {
    title: "Qualified GATE 2026 (Computer Science)",
    issuer: "Graduate Aptitude Test in Engineering (National Examination)",
    year: "2026",
    badge: "GATE Score: 324",
    description: "Qualified the national-level engineering entrance exam in Computer Science & Information Technology, demonstrating strong command of core fundamentals: Data Structures, Algorithms, Operating Systems, DBMS, and Computer Networks.",
    verifiedDetails: "National-level examination evaluating computer science foundations."
  },
  {
    title: "The Complete Web Development Bootcamp",
    issuer: "Udemy (Dr. Angela Yu)",
    year: "Certified Graduate",
    badge: "Full-Stack Web Dev",
    description: "Completed comprehensive full-stack training covering frontend technologies (React, JavaScript, HTML, CSS), backend systems (Node.js, Express, REST APIs), and database architectures.",
    verifiedDetails: "Completed full-stack engineering curriculum."
  }
];

export const BUILD_PHILOSOPHY = [
  {
    step: "01",
    title: "Understand the Problem",
    subtitle: "Define Requirements Clearly",
    description: "Before jumping into code, I clarify what the project aims to solve, who will use it, and what features are essential versus optional.",
    principles: ["Identify the core objective", "Break requirements into smaller tasks", "Choose the right tools for the job"]
  },
  {
    step: "02",
    title: "Design the Solution",
    subtitle: "Plan Architecture & Data Flow",
    description: "Plan how frontend components connect with backend APIs, sketch out database tables, and establish clear REST endpoints.",
    principles: ["Design clean API endpoints", "Plan simple database tables", "Keep frontend and backend modular"]
  },
  {
    step: "03",
    title: "Build Core Functionality",
    subtitle: "Iterative Implementation",
    description: "Start by implementing the most critical features first—whether it's user authentication, quiz room communication, or text classification.",
    principles: ["Write readable, structured code", "Focus on working prototypes", "Follow standard OOP principles"]
  },
  {
    step: "04",
    title: "Test and Debug",
    subtitle: "Find & Fix Issues",
    description: "Test normal usage and common error cases: invalid inputs, dropped connections, or missing fields, ensuring the app doesn't crash unexpectedly.",
    principles: ["Validate user inputs", "Handle API errors gracefully", "Test socket reconnects and fallbacks"]
  },
  {
    step: "05",
    title: "Refine and Deploy",
    subtitle: "Polish & Host Online",
    description: "Clean up code, add helpful error feedback, and deploy the application to cloud platforms like Vercel and Render so anyone can test it live.",
    principles: ["Deploy live for easy testing", "Optimize frontend responsiveness", "Keep documentation and GitHub clean"]
  }
];
