import { useState } from "react";
import {
  FiChevronDown,
  FiChevronUp,
  FiGithub,
  FiExternalLink,
} from "react-icons/fi";
import { C, FONT } from "../theme";

// TypeScript type for a project
type Project = {
  type: "work" | "personal";
  company: string;
  title: string;
  desc: string;
  tags: string[];
  github: string | null;
  live: string | null;
  details: string[];
};

const ALL_PROJECTS: Project[] = [
  // Work projects
  {
    type: "work",
    company: "Gove Technologies",
    title: "DMS – Document Management System",
    desc: "A full-stack document storage and management platform with SDK validation, file upload, versioning, and role-based access. The foundation that BillPay 2.0 was built upon.",
    tags: ["ReactJS", "TypeScript", "Node.js", "PostgreSQL", "REST API"],
    github: null,
    live: null,
    details: [
      "Built a complete document management system with file upload, storage, and retrieval.",
      "Implemented SDK validation and structured error handling for reliable document processing.",
      "Designed role-based access control to manage user permissions across the platform.",
      "This project served as the foundation for the upgraded BillPay 2.0 system.",
    ],
  },
  {
    type: "work",
    company: "Gove Technologies",
    title: "BillPay 2.0 – Invoice & Payment Management System",
    desc: "BillPay 2.0 is the updated version of the DMS project. Bill search, generation, invoice listing, and transaction history in NextJS and TypeScript, handling 10,000+ records.",
    tags: ["NextJS", "TypeScript", "Redux", "Material UI"],
    github: null,
    live: null,
    details: [
      "Upgraded and extended the DMS project into a full invoice and payment management system.",
      "Implemented Redux for server-state management to reduce redundant API calls.",
      "Built reusable Material UI components for consistent UI across all screens.",
      "Handled 10,000+ records with performant server-side filtering and pagination.",
    ],
  },
  {
    type: "work",
    company: "Gove Technologies",
    title: "BaaS360 – Business as a Service Platform",
    desc: "End-to-end frontend architecture using NextJS App Router and TypeScript, implementing scalable design patterns across multiple modules.",
    tags: ["ReactJS", "NextJS", "TypeScript", "Node.js", "PostgreSQL", "Jest"],
    github: null,
    live: null,
    details: [
      "Integrated secure REST APIs with structured error handling across all modules.",
      "Applied systematic Jest testing to improve maintainability.",
      "Collaborated with UI/UX and backend teams to deliver 4 major feature releases.",
      "Implemented scalable component strategies across the entire codebase.",
    ],
  },
  {
    type: "work",
    company: "Gove Technologies",
    title: "Tenant Portal – Fleet Management System",
    desc: "Fleet management portal for tenants to manage vehicles, track operations, and handle logistics with role-based access control.",
    tags: ["ReactJS", "TypeScript", "Material UI", "REST API"],
    github: null,
    live: null,
    details: [
      "Developed a full-featured fleet management portal for vehicle and operations management.",
      "Built responsive UI components using ReactJS and Material UI.",
      "Integrated REST APIs for real-time fleet data and vehicle tracking.",
      "Implemented role-based access control for different tenant permissions.",
    ],
  },

  // Personal projects
  {
    type: "personal",
    company: "Personal Project",
    title: "LS Photography",
    desc: "A full-featured photography business website with Home, Gallery, Services, About, Feedback, and Contact pages.",
    tags: ["Next.js", "React", "CSS3", "Responsive Design"],
    github: "https://github.com/muthumariappan",
    live: "https://ls-photography-v2.netlify.app/",
    details: [
      "Built a multi-page website with complete navigation and routing.",
      "Implemented responsive design for all screen sizes.",
      "Integrated smooth image gallery with multiple photography categories.",
      "Deployed on Netlify with optimised build.",
    ],
  },
  {
    type: "personal",
    company: "Personal Project",
    title: "Hotel Booking App",
    desc: "A React-based hotel booking application with login, room listings, and booking functionality.",
    tags: ["React", "JavaScript", "CSS3", "REST API"],
    github: "https://github.com/muthumariappan",
    live: "https://hotel-book-react.netlify.app/",
    details: [
      "Built hotel booking flow with login, room search, and reservation features.",
      "Implemented user authentication and protected routes.",
      "Designed clean, responsive UI for browsing and booking.",
      "Deployed on Netlify.",
    ],
  },
];

// Single project card
function ProjectCard({ project }: { project: Project }) {
  const [showDetails, setShowDetails] = useState(false);
  const isPersonal = project.type === "personal";

  return (
    <div
      style={{
        background: C.white,
        border: `1px solid ${C.border}`,
        borderRadius: "16px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Blue top line */}
      <div
        style={{
          height: "3px",
          background: `linear-gradient(90deg, ${C.blue}, ${C.blueLine})`,
        }}
      />

      <div
        style={{
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        {/* Company + badge */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "8px",
            marginBottom: "12px",
          }}
        >
          <span
            style={{
              fontSize: "0.78rem",
              fontWeight: 600,
              color: C.muted,
              background: C.lightBg,
              padding: "3px 10px",
              borderRadius: "100px",
              border: `1px solid ${C.border}`,
            }}
          >
            {project.company}
          </span>
          <span
            style={{
              padding: "3px 11px",
              borderRadius: "100px",
              fontSize: "0.72rem",
              fontWeight: 600,
              background: isPersonal ? "#fef9c3" : C.blueBg,
              color: isPersonal ? "#854d0e" : C.blue,
              border: `1px solid ${isPersonal ? "#fde68a" : C.blueLine}`,
            }}
          >
            {isPersonal ? "Personal" : "Production"}
          </span>
        </div>

        {/* Title */}
        <h3
          style={{
            fontSize: "1rem",
            fontWeight: 700,
            color: C.dark,
            lineHeight: 1.4,
            marginBottom: "10px",
          }}
        >
          {project.title}
        </h3>

        {/* Description */}
        <p
          style={{
            fontSize: "0.875rem",
            color: C.muted,
            lineHeight: 1.8,
            marginBottom: "14px",
            flex: 1,
          }}
        >
          {project.desc}
        </p>

        {/* Tags */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "7px",
            marginBottom: "14px",
          }}
        >
          {project.tags.map((tag) => (
            <span
              key={tag}
              style={{
                display: "inline-flex",
                padding: "4px 11px",
                borderRadius: "6px",
                border: `1px solid ${C.border}`,
                background: C.white,
                fontSize: "0.76rem",
                fontWeight: 500,
                color: C.body,
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* GitHub + Live links */}
        {(project.github || project.live) && (
          <div
            style={{
              display: "flex",
              gap: "10px",
              flexWrap: "wrap",
              marginBottom: "14px",
            }}
          >
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  fontSize: "0.81rem",
                  fontWeight: 600,
                  color: C.muted,
                  border: `1px solid ${C.border}`,
                  padding: "5px 12px",
                  borderRadius: "6px",
                  textDecoration: "none",
                }}
              >
                <FiGithub size={14} /> GitHub
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  fontSize: "0.81rem",
                  fontWeight: 600,
                  color: C.blue,
                  border: `1px solid ${C.blueLine}`,
                  background: C.blueBg,
                  padding: "5px 12px",
                  borderRadius: "6px",
                  textDecoration: "none",
                }}
              >
                <FiExternalLink size={14} /> Live Demo
              </a>
            )}
          </div>
        )}

        {/* View details toggle */}
        <button
          onClick={() => setShowDetails(!showDetails)}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
            fontSize: "0.82rem",
            fontWeight: 600,
            color: C.blue,
            background: "none",
            border: "none",
            padding: 0,
            cursor: "pointer",
            fontFamily: FONT.main,
            width: "fit-content",
          }}
        >
          {showDetails ? (
            <FiChevronUp size={14} />
          ) : (
            <FiChevronDown size={14} />
          )}
          {showDetails ? "Hide Details" : "View Details"}
        </button>

        {/* Details list — only shown when toggled */}
        {showDetails && (
          <div
            style={{
              marginTop: "14px",
              paddingTop: "14px",
              borderTop: `1px solid ${C.border}`,
            }}
          >
            <ul
              style={{ display: "flex", flexDirection: "column", gap: "9px" }}
            >
              {project.details.map((item, i) => (
                <li
                  key={i}
                  style={{
                    display: "flex",
                    gap: "10px",
                    fontSize: "0.86rem",
                    color: C.body,
                    lineHeight: 1.7,
                  }}
                >
                  <span
                    style={{
                      width: "5px",
                      height: "5px",
                      minWidth: "5px",
                      borderRadius: "50%",
                      background: C.blue,
                      marginTop: "9px",
                      flexShrink: 0,
                    }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  const [activeTab, setActiveTab] = useState<"work" | "personal">("work");

  // Filter projects based on selected tab
  const visibleProjects = ALL_PROJECTS.filter((p) => p.type === activeTab);

  return (
    <section
      id="projects"
      style={{ background: C.white, padding: "96px 0", fontFamily: FONT.main }}
    >
      <div style={{ maxWidth: "1120px", margin: "0 auto", padding: "0 40px" }}>
        {/* Section label */}
        <p
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            fontFamily: FONT.mono,
            fontSize: "0.72rem",
            fontWeight: 500,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: C.blue,
            marginBottom: "12px",
          }}
        >
          <span
            style={{
              width: "26px",
              height: "2px",
              background: C.blue,
              borderRadius: "2px",
              display: "block",
            }}
          />
          Portfolio
        </p>

        <h2
          style={{
            fontSize: "clamp(1.9rem, 3vw, 2.6rem)",
            fontWeight: 800,
            lineHeight: 1.15,
            letterSpacing: "-0.025em",
            color: C.dark,
            marginBottom: "12px",
          }}
        >
          Projects
        </h2>
        <p
          style={{
            fontSize: "0.95rem",
            color: C.muted,
            maxWidth: "480px",
            lineHeight: 1.8,
            marginBottom: "32px",
          }}
        >
          Production applications and personal projects I've designed, built,
          and shipped.
        </p>

        {/* Tab switcher */}
        <div
          style={{
            display: "flex",
            gap: "8px",
            borderBottom: `2px solid ${C.border}`,
            marginBottom: "32px",
          }}
        >
          {(["work", "personal"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "10px 20px",
                fontSize: "0.9rem",
                fontWeight: 600,
                color: activeTab === tab ? C.blue : C.muted,
                background: "transparent",
                border: "none",
                borderBottom:
                  activeTab === tab
                    ? `2px solid ${C.blue}`
                    : "2px solid transparent",
                marginBottom: "-2px",
                cursor: "pointer",
                fontFamily: FONT.main,
                transition: "all 0.18s",
              }}
            >
              {tab === "work" ? "Work Projects" : "Personal Projects"}
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minWidth: "22px",
                  height: "22px",
                  padding: "0 7px",
                  borderRadius: "100px",
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  background: activeTab === tab ? C.blueBg : C.lightBg,
                  color: activeTab === tab ? C.blue : C.muted,
                }}
              >
                {ALL_PROJECTS.filter((p) => p.type === tab).length}
              </span>
            </button>
          ))}
        </div>

        {/* Cards grid — align-items: start so expanding one card doesn't affect the other */}
        <div
          className="proj-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "20px",
            alignItems: "start",
          }}
        >
          {visibleProjects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </div>

      <style>{`@media (max-width: 700px) { .proj-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}
