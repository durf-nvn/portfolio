export const profile = {
  name: "Novin Durf N. Aguilar",
  role: "Front-end Developer & UI/UX Designer",
  email: "novindurf06@gmail.com",
  address: "Candaguit, Sibonga, Cebu",
  year: "2026",
  about:
    "Fourth-year BS Information Technology student focused on building clean, user-friendly web interfaces with React. Hands-on experience in front-end development, UI/UX design, QA testing, data analytics, and cybersecurity fundamentals. Seeking a web development role where I can keep learning and contribute to real products.",
};

export const education = {
  degree: "Bachelor of Science in Information Technology",
  school: "Cebu Technological University – Argao Campus",
};

export const leadership = {
  org: "PARSERS",
  role: "Logistics Committee Member",
  period: "SY 2025 – 2026",
};

export const project = {
  title: "AI RAG System",
  tag: "Capstone Project",
  role: "UI Designer & QA Tester",
  points: [
    {
      heading: "UI design",
      text: "Designed the application’s user interface in Figma, building responsive layouts and core UI components aligned with system requirements.",
    },
    {
      heading: "QA testing",
      text: "Served as QA tester: drafted UAT documents, ran system tests, and reported bugs and UI inconsistencies to the backend and database developers for fixing and re-testing before turnover.",
    },
  ],
};

export const technicalSkills = [
  "React",
  "JavaScript (ES6+)",
  "TypeScript",
  "HTML5",
  "CSS3",
  "Vite",
  "Responsive design",
  "Figma",
  "UI/UX design",
  "Node.js",
  "Python",
  "SQLite",
  "C# (.NET MAUI)",
  "Git",
  "GitHub",
  "ESLint",
  "VS Code",
  "User Acceptance Testing (UAT)",
];

export const softSkills = [
  "Teamwork and collaboration",
  "Problem-solving and debugging",
  "Time management",
  "Adaptability",
  "Communication and presenting project work",
  "Attention to detail",
];

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  detail: string;
  image: string;
  alt: string;
}

export const certificates: Certificate[] = [
  {
    id: "tesda",
    title: "Data Analytics Level III",
    issuer: "Call Center Academy (TESDA-registered)",
    detail: "120 hours, May 12 – June 10, 2026",
    image: "/certs/tesda-data-analytics.jpg",
    alt: "Certificate of Completion for Data Analytics Level III from Call Center Academy, awarded to Novin Durf N. Aguilar",
  },
  {
    id: "cisco",
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    detail: "Completed October 6, 2026",
    image: "/certs/cisco-cybersecurity.jpg",
    alt: "Cisco Networking Academy certificate for Introduction to Cybersecurity, awarded to Novin Durf Aguilar",
  },
  {
    id: "parsers",
    title: "Certificate of Recognition",
    issuer: "Parsers Organization, Logistics Committee",
    detail: "Academic Year 2025 – 2026",
    image: "/certs/parsers-recognition.jpg",
    alt: "Certificate of Recognition from the Parsers Organization for service on the Logistics Committee, awarded to Novin Durf Aguilar",
  },
];