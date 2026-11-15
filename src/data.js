import avatar from "../images/profile.jpg";
export const profile = {
  name: "Armaghan Nikfar",
  role: "AI Developer & Full-Stack Engineer",
  intro:
    "I build web apps with React and train deep learning models for language and medical data.",
  about: [
    "I started as a frontend developer and spent six years building React interfaces. Later I moved into applied deep learning research: LSTM, transformers and reinforcement learning.",
    "Today I hold an M.Sc. in AI and Robotics and I am working on my PhD. I like projects where a good model and a good interface have to work together.",
  ],
  email: "you@example.com",
  github: "https://github.com/ArmaghanNikfar",
  linkedin: "https://linkedin.com/in/your-id",
  avatar: avatar,
};

export const navLinks = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export const skills = [
  {
    group: "Frontend",
    items: ["React", "JavaScript", "TypeScript", "HTML & CSS", "Vite"],
  },
  {
    group: "AI & Research",
    items: [
      "PyTorch",
      "LSTM / BLSTM",
      "Transformers",
      "NLP",
      "Reinforcement learning",
    ],
  },
  { group: "Tools", items: ["Git & GitHub", "Python", "Node.js", "Figma"] },
];

export const projects = [
  {
    id: 1,
    title: "Respiratory disease diagnosis",
    description:
      "A multimodal LSTM system that helps diagnose respiratory infectious diseases. Published in Springer.",
    tags: ["AI"],
    stack: ["Python", "LSTM"],
    link: "#",
  },
  {
    id: 2,
    title: "Call volume forecasting",
    description:
      "A deep learning model that predicts incoming calls for a call center. Published in ScienceDirect.",
    tags: ["AI"],
    stack: ["Python", "Deep learning"],
    link: "#",
  },
  {
    id: 3,
    title: "Chat interface",
    description:
      "A messenger-style chat UI with conversation list, message bubbles and live input.",
    tags: ["Web"],
    stack: ["React", "CSS"],
    link: "#",
  },
  {
    id: 4,
    title: "Personal portfolio",
    description:
      "This site. Built in a free workshop and deployed on GitHub Pages.",
    tags: ["Web"],
    stack: ["React", "Vite"],
    link: "#",
  },
];
