export interface ProjectNode {
  layer: string;
  technologies: string[];
  role: string;
}

export interface ProjectChallenge {
  challenge: string;
  solution: string;
  impact: string;
}

export interface Project {
  id: string;
  name: string;
  tagline: string;
  summary: string;
  category: string;
  tags: string[];
  statusBadge: string;
  badgeColor: string;
  githubUrl: string;
  liveDemoUrl: string;
  problem: string;
  solution: string;
  keyFeatures: string[];
  technicalHighlights: string[];
  resumeBullets?: string[];
  architectureOverview: {
    title: string;
    description: string;
    nodes: ProjectNode[];
  };
  engineeringChallenges: ProjectChallenge[];
}

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

export const PROJECTS: Project[] = [
  {
    id: "sparq",
    name: "Sparq",
    tagline: "Real-Time Multiplayer Quiz Platform",
    summary: "A Kahoot-style real-time quiz game using Node.js and Socket.io, where the server handles timers, scoring, and answer checking to prevent cheating, featuring LLM trivia generation and instant Socket.io updates.",
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
