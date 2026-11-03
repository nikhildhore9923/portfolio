export const PERSONAL_INFO = {
  name: "Nikhil Dhore",
  title: "B.Tech CSE (AIML) Student | Software Developer",
  shortBio: "Final-year B.Tech CSE (AIML) student with practical knowledge of Java, JavaScript, React, Node.js, Express, SQL, and Machine Learning basics. Passionate about problem-solving and building functional web applications.",
  headline: "Building Practical Software. Solving Real Problems.",
  subheadline: "Final-year B.Tech CSE (AIML) student focused on Java, web development, and exploring machine learning applications.",
  location: "Kolhapur / Maharashtra, India",
  email: "dhorenikhil46@gmail.com",
  phone: "+91-9284944578",
  github: "https://github.com/nikhildhore9923",
  linkedin: "https://www.linkedin.com/in/nikhil-dhore-9b2318297",
  availability: "Available for Software Engineering Roles & Campus Placements",
  primaryFocus: "Java, Web Development, SQL, Machine Learning Basics",
  stats: [
    { label: "GATE 2026 CS", value: "Score: 324", detail: "National-level entrance qualification" },
    { label: "Core Foundation", value: "Java & DSA", detail: "OOP, Systems Design & Algorithms" },
    { label: "Flagship Systems", value: "2 Projects", detail: "Sparq (Real-Time) & Pulse (ML)" },
    { label: "Engineering Degree", value: "CGPA: 8.09", detail: "KIT CoE Kolhapur (Autonomous)" },
  ]
};

export const PROJECTS = [
  {
    id: "sparq",
    name: "Sparq",
    tagline: "Real-Time Multiplayer Quiz Platform",
    summary: "A multiplayer quiz application where users join rooms, answer timed questions, and see live score updates together without refreshing the page, built with Socket.io, React, Node.js, and Express.",
    category: "Real-Time Web App",
    tags: ["React", "Node.js", "Express", "Socket.io", "WebSockets", "JWT", "SQLite"],
    statusBadge: "Real-Time Multiplayer Quiz Platform",
    badgeColor: "cyan",
    githubUrl: "https://github.com/nikhildhore9923/sparq-quiz",
    liveDemoUrl: "https://sparq-quiz.vercel.app/",
    problem: "Traditional web apps require page refreshes to update scores and timers, making multiplayer gameplay sluggish and out of sync between different players.",
    solution: "Used Socket.io and WebSockets for real-time bidirectional communication between the server and players. The server coordinates the countdown timer to keep all players in sync, with JWT authentication and reconnect support for interrupted connections.",
    keyFeatures: [
      "Real-Time Quiz Rooms: Built with Socket.io and WebSockets for instant message passing and live leaderboard updates without page reloads.",
      "Server-Controlled Timers: The server manages the countdown clock to keep question timing fair and synchronized for all players in the room.",
      "JWT Authentication: Secure user login and registration using JSON Web Tokens and password hashing.",
      "Reconnection Support: Users can reconnect to an ongoing quiz session using a stored session token after a temporary network drop.",
      "Responsive React UI: Clean, responsive user interface adapted for mobile and desktop screens."
    ],
    technicalHighlights: [
      "Demonstrates practical real-time communication using Socket.io and WebSockets.",
      "Server-coordinated timer and synchronized scoring across multiple clients.",
      "User authentication and session reconnection support."
    ],
    architectureOverview: {
      title: "Server-Authoritative Real-Time Architecture",
      description: "Dual-protocol structure separating high-frequency game synchronization from stateless auth and persistent storage.",
      nodes: [
        {
          layer: "Client Frontend",
          technologies: ["React (Vite)", "Socket.io Client"],
          role: "Optimistic UI state, live countdown animations, buzzer interaction, and live leaderboard rendering."
        },
        {
          layer: "Stateless Auth & Management",
          technologies: ["Express REST API", "JWT", "bcrypt"],
          role: "User authentication, profile management, and room parameter setup isolated from WebSocket events."
        },
        {
          layer: "Real-Time Synchronization Engine",
          technologies: ["Node.js", "Socket.io Server"],
          role: "Room state machine, server-authoritative countdown ticker, live buzz event arbitration, and scoring."
        },
        {
          layer: "On-Demand Content Generator",
          technologies: ["Groq API (Llama 3)"],
          role: "Generates topic-customized trivia question sets on-the-fly and formats them into strict game payloads."
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
    tagline: "AI-Powered Customer Feedback & Sentiment Analyzer",
    summary: "An application that analyzes customer feedback using NLP and machine learning to classify sentiment and identify negative experiences, featuring a React frontend, Node.js/Express backend, Python ML pipeline, and Groq LLM integration.",
    category: "AI & Web App",
    tags: ["React", "Node.js", "Express", "Python", "Scikit-learn", "TF-IDF", "Groq API", "MySQL"],
    statusBadge: "AI Feedback Analyzer & Sentiment Pipeline",
    badgeColor: "emerald",
    githubUrl: "https://github.com/nikhildhore9923/feedback-analyzer",
    liveDemoUrl: "https://feedback-analyzer-beta.vercel.app/",
    problem: "Customer feedback is often unstructured text that is tedious to read manually. Businesses need an automated way to quickly identify negative reviews, understand customer sentiment, and get alerts for critical issues.",
    solution: "Built a full-stack web application combining a React dashboard, Node.js/Express backend, and a Python machine learning service (TF-IDF + Logistic Regression) to analyze text sentiment, with Groq LLM integration for automated summaries and email alerts for negative feedback.",
    keyFeatures: [
      "NLP Feedback Analysis: TF-IDF feature extraction with Logistic Regression to classify feedback sentiment into positive, neutral, or negative.",
      "Reliable Fallback Logic: Implemented local fallback analysis so the application continues to provide sentiment feedback even if the Python service is spinning up.",
      "React Frontend Dashboard: Clean user interface for submitting feedback, viewing batch statistics, and monitoring sentiment breakdowns.",
      "LLM Executive Summaries: Integrated the Groq API (Llama 3.1) to generate readable summary reports from collected feedback batches.",
      "Database & Alerts: MySQL database integration for storing feedback records and automated email alerts for strongly negative reviews."
    ],
    technicalHighlights: [
      "Combines React, Node.js/Express, Python, and SQL in a practical full-stack project.",
      "Fast sentiment classification using Scikit-learn TF-IDF and Logistic Regression.",
      "Automated summary generation using the Groq Llama 3.1 model."
    ],
    architectureOverview: {
      title: "Resilient Microservices & Fallback Pipeline",
      description: "How Pulse routes feedback from client ingestion through ML classification, serverless storage, and LLM synthesis.",
      nodes: [
        {
          layer: "Presentation Layer",
          technologies: ["React", "Tailwind CSS"],
          role: "Interactive analytics dashboard, real-time sentiment distribution charts, and batch upload interface."
        },
        {
          layer: "API Gateway & Orchestration",
          technologies: ["Node.js", "Vercel Serverless Functions"],
          role: "HTTP endpoint orchestration, request validation, authentication, and intelligent failover routing."
        },
        {
          layer: "Primary ML Microservice",
          technologies: ["Python", "FastAPI", "Scikit-learn (TF-IDF + Logistic Regression)"],
          role: "Vectorization of feedback text, multiclass topic classification, and sentiment polarity scoring with confidence values."
        },
        {
          layer: "Fault-Tolerant Local Fallback",
          technologies: ["Node.js Local Heuristic Analyzer"],
          role: "Instantly kicks in within <50ms if the FastAPI container is cold-starting or unreachable."
        },
        {
          layer: "Intelligence & Data Layer",
          technologies: ["Groq API (Llama 3)", "MySQL Database"],
          role: "Batch LLM synthesis for executive trends and relational storage for persistent historical metrics."
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

export const SKILLS = [
  // Languages
  {
    name: "Java",
    category: "Languages",
    level: "Core Strength",
    highlight: true,
    context: "Strong foundation in Object-Oriented Programming, Data Structures & Algorithms, and robust system design.",
    iconName: "Coffee"
  },
  {
    name: "Python",
    category: "Languages",
    level: "Proficient",
    highlight: true,
    context: "Used in FastAPI microservices, Scikit-learn NLP pipelines, and data manipulation with Pandas & NumPy.",
    iconName: "Terminal"
  },
  {
    name: "JavaScript (ES6+)",
    category: "Languages",
    level: "Proficient",
    highlight: true,
    context: "Asynchronous programming, event-driven Node.js runtimes, and modern frontend application development.",
    iconName: "Code2"
  },
  {
    name: "SQL",
    category: "Languages",
    level: "Competent",
    highlight: false,
    context: "Relational schema design, normalization, join queries, indexing, and transactional integrity.",
    iconName: "Database"
  },

  // Web & Backend
  {
    name: "Node.js & Express",
    category: "Web & Backend",
    level: "Core Backend",
    highlight: true,
    context: "REST API development, JWT auth, middleware pipelines, and serverless endpoint refactoring.",
    iconName: "Server"
  },
  {
    name: "FastAPI",
    category: "Web & Backend",
    level: "Proficient",
    highlight: true,
    context: "High-performance asynchronous Python microservices for low-latency machine learning inference.",
    iconName: "Zap"
  },
  {
    name: "React (Vite)",
    category: "Web & Backend",
    level: "Proficient",
    highlight: true,
    context: "Modern component architecture, custom hooks, real-time state synchronization, and Tailwind UI.",
    iconName: "Layers"
  },
  {
    name: "REST APIs & Architecture",
    category: "Web & Backend",
    level: "Competent",
    highlight: false,
    context: "Resource-oriented design, status codes, input validation, and secure authentication flows.",
    iconName: "Network"
  },
  {
    name: "Socket.io & WebSockets",
    category: "Web & Backend",
    level: "Proficient",
    highlight: true,
    context: "Bidirectional low-latency communication, room management, and server-authoritative state sync.",
    iconName: "Radio"
  },
  {
    name: "JWT & Security",
    category: "Web & Backend",
    level: "Competent",
    highlight: false,
    context: "Stateless token-based authentication, bcrypt password hashing, and reconnection token validation.",
    iconName: "ShieldCheck"
  },

  // AI / ML & Data
  {
    name: "NLP & Text Classification",
    category: "AI / ML & Data",
    level: "Applied Practice",
    highlight: true,
    context: "Text preprocessing, tokenization, feature engineering, and topic/sentiment scoring in Pulse.",
    iconName: "Brain"
  },
  {
    name: "Scikit-learn (TF-IDF & Logistic Reg)",
    category: "AI / ML & Data",
    level: "Applied Practice",
    highlight: true,
    context: "Trained classification models with confidence scores for high-speed sentiment analytics.",
    iconName: "Cpu"
  },
  {
    name: "LLM API Integration (Groq & Llama 3)",
    category: "AI / ML & Data",
    level: "Applied Practice",
    highlight: true,
    context: "High-throughput inference for executive summaries and on-demand dynamic trivia generation.",
    iconName: "Sparkles"
  },
  {
    name: "NumPy & Pandas",
    category: "AI / ML & Data",
    level: "Working Knowledge",
    highlight: false,
    context: "Vectorized operations, dataset transformation, and structured data handling.",
    iconName: "FileSpreadsheet"
  },

  // Databases
  {
    name: "MySQL",
    category: "Databases",
    level: "Competent",
    highlight: true,
    context: "Relational database used in Pulse for feedback persistence, schema modeling, and structured querying.",
    iconName: "Database"
  },
  {
    name: "SQLite (WAL Mode)",
    category: "Databases",
    level: "Competent",
    highlight: true,
    context: "Utilized with better-sqlite3 in Write-Ahead Logging mode for microsecond response times in Sparq.",
    iconName: "HardDrive"
  },

  // Cloud & Tools
  {
    name: "Git & GitHub",
    category: "Cloud & Tools",
    level: "Proficient",
    highlight: true,
    context: "Version control, branching workflows, pull requests, and collaborative repository management.",
    iconName: "GitBranch"
  },
  {
    name: "Vercel (Serverless & Cron)",
    category: "Cloud & Tools",
    level: "Competent",
    highlight: true,
    context: "Edge deployment, serverless functions, HTTP-triggered routines, and static asset distribution.",
    iconName: "Cloud"
  },
  {
    name: "Render",
    category: "Cloud & Tools",
    level: "Competent",
    highlight: false,
    context: "Deployment of stateful persistent backend services requiring long-lived WebSocket connections.",
    iconName: "CloudRain"
  }
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
      "Coursework in Data Structures & Algorithms, Object-Oriented Programming (Java), Database Management Systems, and Machine Learning.",
      "Hands-on project work in full-stack web development (React, Node.js) and applied machine learning (NLP).",
      "Final-year student preparing for entry-level software engineering roles and campus placements."
    ]
  },
  {
    degree: "Higher Secondary Certificate (HSC - Class XII)",
    institution: "G.M.B. Jr. College",
    location: "Arjuni Morgaon, Maharashtra",
    period: "2022",
    grade: "Percentage: 83.67%",
    highlights: ["Science curriculum with emphasis on Mathematics, Physics, and Chemistry."]
  },
  {
    degree: "Secondary School Certificate (SSC - Class X)",
    institution: "Vidya Vihar Mandir",
    location: "Lakhandur, Maharashtra",
    period: "2020",
    grade: "Percentage: 83.60%",
    highlights: ["Strong academic record with foundational mathematics and sciences."]
  }
];

export const ACHIEVEMENTS = [
  {
    title: "Qualified GATE 2026 (Computer Science)",
    issuer: "Graduate Aptitude Test in Engineering (National Examination)",
    year: "2026",
    badge: "GATE Score: 324",
    description: "Cleared the highly competitive national-level engineering entrance exam for Computer Science and Information Technology, testing core computer science concepts including Algorithms, Operating Systems, Computer Networks, DBMS, and Theory of Computation.",
    verifiedDetails: "National Examination for Engineering & Computer Science Foundation"
  },
  {
    title: "The Complete Web Development Bootcamp",
    issuer: "Udemy (Dr. Angela Yu)",
    year: "Bootcamp Graduate",
    badge: "Full-Stack Certified",
    description: "Completed comprehensive full-stack engineering training covering frontend technologies (React, JavaScript, HTML, CSS), backend systems (Node.js, Express, REST APIs), and database architectures.",
    verifiedDetails: "Practical Full-Stack Engineering Curriculum"
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
