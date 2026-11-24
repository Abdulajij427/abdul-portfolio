
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const skills = [
  "TypeScript",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Express.js",
  "PostgreSQL",
  "Prisma",
  "WebSocket",
  "Tailwind CSS",
  "Git & GitHub",
  "REST APIs",
  "AI Agents",
  "OpenTUI",
];

const projects = [
  {
    number: "01",
    image: "/nightcode.png",
    name: "Nightcode",
    type: "AI CODING AGENT / CODING HARNESS",
    description:
      "An AI-powered CLI coding assistant that helps developers interact with their codebase, automate file operations and solve development problems.",
    features: [
      "Build Mode: Create, read, update and delete files and folders.",
      "Plan Mode: Ask questions, inspect file contents and debug code.",
      "Google OAuth integration for signup and signin.",
      "Bun.secrets integration and token-based authentication.",
    ],
    stack: [
      "TypeScript",
      "Node.js",
      "React",
      "OpenTUI",
      "Express",
      "Prisma",
      "PostgreSQL",
    ],
    github: "https://github.com/Abdulajij427/NightCode",
    demo: "https://www.youtube.com/watch?v=Tcd3Eo0E4-Q",
    featured: true,
  },
  {
    number: "02",
    image: "/cocanvas.png",
    name: "CoCanvas",
    type: "REAL-TIME COLLABORATIVE WHITEBOARD",
    description:
      "An Excalidraw-style collaborative whiteboard where multiple users can join a room and draw together on the same canvas in real time.",
    features: [
      "Secure signup and signin using JWT and bcrypt.",
      "Turborepo monorepo with separate HTTP and WebSocket servers.",
      "Real-time drawing synchronization using WebSocket broadcasting.",
      "Room-based communication to isolate canvas sessions.",
      "Responsive interface built with Tailwind CSS.",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "WebSocket",
      "JWT",
      "Turborepo",
    ],
    github: "https://github.com/Abdulajij427/CoCanvas",
    demo: "https://youtu.be/Nh319q9fVec",
    featured: false,
  },
  {
    number: "03",
    image: "/chat-app.png",
    name: "Real-time Chat Application",
    type: "REAL-TIME COMMUNICATION",
    description:
      "A real-time messaging application that allows multiple users to communicate instantly through WebSocket connections and shared chat rooms.",
    features: [
      "Instant two-way messaging without polling or page refreshes.",
      "Signup and signin secured with JWT and bcrypt.",
      "Multiple users can communicate in shared chat rooms.",
      "WebSocket server handles concurrent users and room-based messages.",
      "Responsive React frontend with live message updates.",
    ],
    stack: [
      "React",
      "TypeScript",
      "Node.js",
      "WebSocket",
      "JWT",
      "bcrypt",
    ],
    github: "https://github.com/Abdulajij427/basic-chat-app",
    demo: "",
    featured: false,
  },
];

function ArrowUpRight() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  const [theme, setTheme] = useState<Theme | null>(null);

  // Load saved theme when the component mounts.
  useEffect(() => {
    const savedTheme = localStorage.getItem("abdul-portfolio-theme");
    setTheme(savedTheme === "dark" ? "dark" : "light");
  }, []);

  // Save theme whenever the user changes it.
  useEffect(() => {
    if (theme !== null) {
      localStorage.setItem("abdul-portfolio-theme", theme);
    }
  }, [theme]);

  const isDark = theme === "dark";

  return (
    <main className={isDark ? "dark-theme" : "light-theme"}>
      {/* NAVIGATION */}
      <nav className="navbar">
        <a className="brand" href="#home" aria-label="Abdul home">
          abdul<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="nav-actions">
          <button
            className="theme-toggle"
            type="button"
            onClick={() =>
              setTheme((current) =>
                current === "dark" ? "light" : "dark"
              )
            }
            aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
          >
            <span aria-hidden="true">{isDark ? "☀" : "☾"}</span>
            {isDark ? "Light" : "Dark"}
          </button>

          <a className="nav-cta" href="#contact">
            Let&apos;s talk <ArrowUpRight />
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero section" id="home">
        <div className="hero-copy">
          <div className="availability">
            <span className="status-dot" />
            OPEN TO OPPORTUNITIES
          </div>

          <p className="eyebrow">HELLO, I&apos;M ABDUL</p>

          <h1>
            Building things
            <br />
            for the <span>web.</span>
          </h1>

          <p className="hero-description">
            I&apos;m an aspiring Full Stack Developer who enjoys building
            web applications, real-time systems and AI-powered developer
            tools. I love turning ideas into practical products.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              Explore my work <ArrowUpRight />
            </a>

            <a className="button button-secondary" href="#contact">
              Get in touch
            </a>
          </div>

          <div className="hero-location">
            <span>⌖</span> Navi Mumbai, India
          </div>
        </div>

        <div className="photo-wrap">
          <div className="photo-frame">
            <Image
              src="/abdul.jpg"
              alt="Abdul - Full Stack Developer"
              fill
              priority
              className="profile-photo"
              sizes="(max-width: 650px) 85vw, 390px"
            />
          </div>

          <div className="photo-caption">
            <span>DEVELOPER / BUILDER</span>
            <span>INDIA · 2026</span>
          </div>

          <div className="photo-decoration" />
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee">
        <div className="marquee-track">
          <span>
            DESIGN ✳ DEVELOP ✳ BUILD ✳ LEARN ✳ REPEAT ✳
            DESIGN ✳ DEVELOP ✳ BUILD ✳ LEARN ✳ REPEAT ✳
          </span>
        </div>
      </div>

      {/* ABOUT */}
      <section className="section about-section" id="about">
        <div className="section-label">
          <span>01 / ABOUT</span>
          <span>A LITTLE INTRODUCTION</span>
        </div>

        <div className="about-content">
          <h2>
            Curious mind.
            <br />
            <span>Builder&apos;s mindset.</span>
          </h2>

          <div className="about-text">
            <p>
              I&apos;m Abdul, an aspiring Full Stack Developer who enjoys
              understanding how technology works and building applications
              from the ground up.
            </p>

            <p>
              My interests include full-stack development, backend
              engineering, real-time communication and AI-powered developer
              tools. I enjoy learning new technologies by building practical
              projects.
            </p>

            <a className="text-link" href="#projects">
              Explore my projects <ArrowUpRight />
            </a>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="skills-section" id="skills">
        <div className="section">
          <div className="section-label">
            <span>02 / TOOLKIT</span>
            <span>TECHNOLOGIES I WORK WITH</span>
          </div>

          <h2 className="section-heading">
            My <span>toolkit.</span>
          </h2>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div className="skill-item" key={skill}>
                <span className="skill-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{skill}</span>
                <span className="skill-arrow">↗</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section projects-section" id="projects">
        <div className="section-label">
          <span>03 / SELECTED WORK</span>
          <span>THINGS I HAVE BUILT</span>
        </div>

        <div className="projects-heading">
          <h2 className="section-heading">
            Selected <span>projects.</span>
          </h2>

          <p>
            A collection of applications, experiments and tools I&apos;ve
            built.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article
              className={`project-card ${
                project.featured ? "featured-project" : ""
              }`}
              key={project.number}
            >
              <div className="project-top">
                <span>{project.number} / PROJECT</span>
                {project.featured && (
                  <span className="featured-label">FEATURED PROJECT</span>
                )}
              </div>

              <div className="project-visual">
                <Image
                  src={project.image}
                  alt={`${project.name} project preview`}
                  fill
                  className="project-image"
                  sizes="(max-width: 650px) 90vw, (max-width: 1100px) 45vw, 540px"
                />
              </div>

              <p className="project-type">{project.type}</p>

              <h3>{project.name}</h3>

              <p className="project-description">
                {project.description}
              </p>

              <ul className="project-features">
                {project.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>

              <div className="project-stack">
                {project.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>

              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub <ArrowUpRight />
                </a>

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Watch demo <ArrowUpRight />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <footer className="contact-section" id="contact">
        <div className="section contact-inner">
          <div className="section-label">
            <span>04 / CONTACT</span>
            <span>HAVE SOMETHING IN MIND?</span>
          </div>

          <p className="eyebrow">LET&apos;S CONNECT</p>

          <h2>
            Have a good
            <br />
            idea? <span>Let&apos;s talk.</span>
          </h2>

          <a
            className="contact-email"
            href="mailto:abdulajij427@gmail.com"
          >
            abdulajij427@gmail.com <ArrowUpRight />
          </a>

          <div className="contact-bottom">
            <div className="social-links">
              <a
                href="https://www.linkedin.com/in/abdul-shaikh786"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn <ArrowUpRight />
              </a>

              <a
                href="https://github.com/Abdulajij427"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub <ArrowUpRight />
              </a>

              <a href="mailto:abdulajij427@gmail.com">
                Email <ArrowUpRight />
              </a>
            </div>

            <p>© 2026 Abdul. Designed & built with care.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
