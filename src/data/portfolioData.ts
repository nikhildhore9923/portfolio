import { Project, SkillItem, EducationItem, AchievementItem, BuildPhilosophyStep } from '../types';

export const PERSONAL_INFO = {
  name: "Nikhil Dhore",
  title: "Software Developer | Backend, Systems & Applied AI",
  shortBio: "Final-year B.Tech CSE (AI & ML) student with hands-on experience building and deploying full-stack applications across AI/ML and real-time systems. Strong foundation in Java, DSA, backend/API engineering, and applied machine learning.",
  headline: "Building Thoughtful Software. Solving Real Problems.",
  subheadline: "Focused on Java, resilient backend architectures, real-time event systems, and applied NLP microservices. Turning complex distributed challenges into clean, observable code.",
  location: "Kolhapur / Maharashtra, India",
  email: "dhorenikhil46@gmail.com",
  phone: "+91-9284944578",
  github: "https://github.com/nikhildhore",
  linkedin: "https://linkedin.com/in/nikhildhore",
  availability: "Available for Software Engineering Roles & Campus Placements",
  primaryFocus: "Java, Backend Engineering, Real-Time Systems, Applied AI",
  stats: [
    { label: "GATE 2026 CS", value: "Score: 324", detail: "National-level entrance" },
    { label: "Core Foundation", value: "Java & DSA", detail: "OOP & Systems Thinking" },
    { label: "Flagship Projects", value: "2 Systems", detail: "Sparq & Pulse" },
    { label: "Engineering CGPA", value: "8.09 / 10", detail: "KIT CoE Kolhapur" },
  ]
};

export const PROJECTS: Project[] = [
  {
    id: "pulse",
    name: "Pulse",
    tagline: "AI-Powered Customer Intelligence & Feedback Platform",
    summary: "A fault-tolerant feedback analytics platform pairing Scikit-learn NLP pipelines with Vercel Serverless and FastAPI microservices, featuring automatic cold-start heuristic failovers and LLM executive synthesis.",
    category: "Applied AI & ML",
    tags: ["React", "Node.js (Serverless)", "Python (FastAPI)", "Scikit-learn", "TF-IDF", "Groq API (Llama 3)", "MySQL"],
    statusBadge: "Serverless Architecture & Resilient Fallback",
    problem: "Modern customer feedback floods in unstructured across channels. Companies either rely on heavy, expensive LLMs for every basic sentence or suffer total API outages when dedicated Python ML microservices experience cold starts or serverless spin-up latency.",
    solution: "Engineered a dual-tiered architecture: an Scikit-learn NLP pipeline (TF-IDF + Logistic Regression) handles high-throughput topic & sentiment classification, coupled with an automatic local heuristic fallback that shields user requests during Python cold starts. Groq LLaMA 3 generates on-demand executive summaries only when synthesis is needed.",
    keyFeatures: [
      "NLP Feedback Pipeline: TF-IDF feature extraction with Logistic Regression classifier for high-speed sentiment & topic tagging with confidence scores.",
      "Fault-Tolerant Microservice Fallback: Automatically detects Python FastAPI cold-starts or timeouts and switches to a zero-delay local heuristic analyzer.",
      "Serverless Architecture Migration: Migrated Node.js backend to Vercel Serverless Functions with HTTP-triggered endpoints replacing background cron daemons.",
      "Ephemeral Filesystem Upload Handling: Built robust in-memory stream processing to handle CSV/feedback file uploads on stateless serverless nodes.",
      "LLM Executive Summarization: Leveraged Groq API (Llama 3 8B Instant) to parse classified feedback batches into actionable executive trend reports.",
      "Database Integration & Alerting: MySQL storage with automated email alerts triggered on critical negative customer sentiment anomalies."
    ],
    technicalHighlights: [
      "Zero-downtime fallback mechanism maintains 100% API responsiveness regardless of ML worker state.",
      "Sub-second executive summaries through Groq Llama 3 8B Instant API.",
      "Scikit-learn confidence scoring prevents misclassification of ambiguous feedback."
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
  },
  {
    id: "sparq",
    name: "Sparq",
    tagline: "Real-Time Multiplayer Quiz Platform with Server-Authoritative State",
    summary: "A low-latency multiplayer quiz engine featuring synchronized room timers, cheat-resistant server validation, Groq-generated dynamic questions, and SQLite in WAL mode with split Vercel/Render deployment.",
    category: "Real-Time & Distributed Systems",
    tags: ["React (Vite)", "Node.js", "Express", "Socket.io", "WebSockets", "JWT", "Groq API", "SQLite (WAL mode)"],
    statusBadge: "Server-Authoritative Clock & WebSocket Engine",
    problem: "Real-time quiz applications often suffer from client-side clock tampering, desynchronized question timers across players, high latency socket overhead for non-game actions, and socket disconnects during mobile network flakiness.",
    solution: "Designed a server-authoritative multiplayer engine using Socket.io where all scoring, timer ticks, and state progressions are enforced exclusively by the server. Split the architecture: Express REST handles stateless JWT auth & quiz management, while Socket.io isolates high-frequency game packets.",
    keyFeatures: [
      "Server-Authoritative Timers: Centralized clock broadcast prevents client-side timer manipulation and guarantees fair play across players on variable pings.",
      "Decoupled REST & WebSocket Architecture: Stateless Express endpoints handle authentication (custom JWT with bcrypt) and room configuration, keeping WebSocket event loops lean.",
      "Dynamic Question Synthesis: Integrated Groq API to generate tailored topic-based trivia questions on demand, validated against strict quiz schema.",
      "Session Reconnection Resilience: Players can seamlessly reconnect to an active room using stored tokens following temporary network drops without state loss.",
      "High-Performance Local Storage: Utilized SQLite with better-sqlite3 in Write-Ahead Logging (WAL) mode for near-instant concurrent read/write operations.",
      "Split Deployment Infrastructure: Hosted static React frontend on Vercel while running the persistent WebSocket daemon on Render."
    ],
    technicalHighlights: [
      "Zero client-side clock trust: Server verifies timestamps to eliminate response spoofing.",
      "WAL-mode SQLite provides microsecond read queries during live multiplayer rooms.",
      "Automatic token-based socket reconnection handles flaky mobile connections cleanly."
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
  }
];

export const SKILLS: SkillItem[] = [
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

export const EDUCATION: EducationItem[] = [
  {
    degree: "B.Tech in Computer Science and Engineering (AI & ML)",
    institution: "KIT's College of Engineering (Autonomous)",
    location: "Kolhapur, Maharashtra",
    period: "2023 – Present",
    grade: "CGPA: 8.09 / 10",
    specialization: "Artificial Intelligence & Machine Learning",
    highlights: [
      "Rigorous coursework in Data Structures, Object-Oriented Programming (Java), Database Management Systems, and Machine Learning.",
      "Hands-on architectural capstones in distributed real-time systems and NLP sentiment intelligence.",
      "Final-year student preparing for software engineering roles and campus placements."
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

export const ACHIEVEMENTS: AchievementItem[] = [
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

export const BUILD_PHILOSOPHY: BuildPhilosophyStep[] = [
  {
    step: "01",
    title: "Deconstruct & Threat-Model",
    subtitle: "Understand the Core Problem",
    description: "Before writing code, analyze boundary conditions, state synchronization pitfalls, and data flow bottlenecks. Identify where systems commonly break under network jitter or service latency.",
    principles: ["Identify single points of failure", "Clarify state ownership", "Determine synchronous vs asynchronous boundaries"]
  },
  {
    step: "02",
    title: "Design Resilient Architecture",
    subtitle: "Fail-Safe by Design",
    description: "Architect systems assuming external dependencies will fail or experience cold starts. Build circuit breakers, heuristic fallbacks, and decoupled protocols.",
    principles: ["Zero-trust client clocks", "Fast local fallbacks for ML services", "Separate high-frequency sockets from REST auth"]
  },
  {
    step: "03",
    title: "Authoritative Implementation",
    subtitle: "Clean, Disciplined Code",
    description: "Implement core business logic with clean OOP principles in Java and modular services in Node.js and FastAPI. Keep game state and timer authority strictly on the server.",
    principles: ["Server-authoritative state", "Strict schema validation", "WAL mode for zero lock contention"]
  },
  {
    step: "04",
    title: "Stress & Fault Testing",
    subtitle: "Verify Edge Cases",
    description: "Simulate edge conditions: serverless cold starts, unexpected network disconnects, token recovery, and payload malformations to ensure zero unhandled exceptions.",
    principles: ["Socket reconnection validation", "Fallback latency checks", "Confidence scoring verification"]
  },
  {
    step: "05",
    title: "Operational Polish & Deploy",
    subtitle: "Deliver with Confidence",
    description: "Deploy to split infrastructures (Vercel edge for frontends, Render for persistent WebSocket loops). Optimize asset bundling and ensure continuous observability.",
    principles: ["Split-cloud deployment", "Ephemeral file stream handling", "Production build optimization"]
  }
];
