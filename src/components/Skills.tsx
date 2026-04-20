import { useState } from "react";
import {
  FiCode,
  FiServer,
  FiDatabase,
  FiCloud,
  FiTool,
  FiCheckCircle,
} from "react-icons/fi";
import { C, FONT } from "../theme";

// Each category with its own color and skills list
const CATEGORIES = [
  {
    id: "frontend",
    label: "Frontend",
    color: "#2563eb",
    bgColor: "#eff6ff",
    icon: <FiCode size={20} />,
    skills: [
      "ReactJS",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Material UI (MUI)",
      "Redux",
      "React Hooks",
      "Context API",
      "Custom Hooks",
      "useMemo",
      "useCallback",
    ],
  },
  {
    id: "backend",
    label: "Backend",
    color: "#7c3aed",
    bgColor: "#f5f3ff",
    icon: <FiServer size={20} />,
    skills: [
      "Node.js",
      "Express.js",
      "REST API Design",
      "REST API Development",
      "MVC Architecture",
      "JWT Authentication",
    ],
  },
  {
    id: "databases",
    label: "Databases",
    color: "#0891b2",
    bgColor: "#ecfeff",
    icon: <FiDatabase size={20} />,
    skills: [
      "SQL",
      "PostgreSQL",
      "Database Schema Design",
      "Database Connection",
    ],
  },
  {
    id: "cloud",
    label: "Cloud & DevOps",
    color: "#ea580c",
    bgColor: "#fff7ed",
    icon: <FiCloud size={20} />,
    skills: ["AWS (S3)", "KeyCloak (OAuth)", "CI/CD"],
  },
  {
    id: "aitools",
    label: "AI & Dev Tools",
    color: "#16a34a",
    bgColor: "#f0fdf4",
    icon: <FiTool size={20} />,
    skills: [
      "Claude AI",
      "Gemini",
      "Lovable",
      "Bolt",
      "GitHub Copilot",
      "Cursor",
      "Windsurf",
      "Vite",
      "Webpack",
      "Git",
      "Postman",
    ],
  },
  {
    id: "practices",
    label: "Practices",
    color: "#be185d",
    bgColor: "#fdf2f8",
    icon: <FiCheckCircle size={20} />,
    skills: [
      "Agile / Scrum",
      "Unit Testing (Jest)",
      "Code Reviews",
      "API Integration",
      "Component Architecture",
      "Performance Optimization",
    ],
  },
];

export default function Skills() {
  const [activeId, setActiveId] = useState("frontend");

  // Find the currently selected category
  const active = CATEGORIES.find((c) => c.id === activeId)!;

  return (
    <section
      id="skills"
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
          Tech Stack
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
          Skills &amp; Technologies
        </h2>
        <p
          style={{
            fontSize: "0.95rem",
            color: C.muted,
            maxWidth: "480px",
            lineHeight: 1.8,
            marginBottom: "48px",
          }}
        >
          Tools and technologies I use to build fast, scalable, production-ready
          applications.
        </p>

        {/* Sidebar + Panel layout */}
        <div
          className="skills-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "220px 1fr",
            gap: "24px",
            alignItems: "start",
          }}
        >
          {/* ─── Left: Category buttons ─── */}
          <div>
            {CATEGORIES.map((cat) => {
              const isActive = activeId === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveId(cat.id)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: "13px 16px",
                    borderRadius: "10px",
                    background: isActive ? cat.bgColor : C.white,
                    border: `1.5px solid ${isActive ? cat.color : C.border}`,
                    width: "100%",
                    textAlign: "left",
                    cursor: "pointer",
                    fontFamily: FONT.main,
                    marginBottom: "8px",
                    transition: "all 0.2s",
                  }}
                >
                  {/* Coloured icon */}
                  <span
                    style={{
                      color: cat.color,
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {cat.icon}
                  </span>

                  {/* Category name */}
                  <span
                    style={{
                      fontSize: "0.88rem",
                      fontWeight: 600,
                      color: C.dark,
                      flex: 1,
                    }}
                  >
                    {cat.label}
                  </span>

                  {/* Skills count */}
                  <span
                    style={{
                      fontFamily: FONT.mono,
                      fontSize: "0.72rem",
                      color: C.light,
                      background: C.lightBg,
                      padding: "2px 8px",
                      borderRadius: "100px",
                    }}
                  >
                    {cat.skills.length}
                  </span>
                </button>
              );
            })}
          </div>

          {/* ─── Right: Skills panel ─── */}
          <div
            style={{
              background: C.white,
              border: `1px solid ${C.border}`,
              borderRadius: "16px",
              overflow: "hidden",
              minHeight: "280px",
            }}
          >
            {/* Panel header with category colour */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                padding: "20px 24px",
                background: active.bgColor,
                borderBottom: `1px solid ${C.border}`,
              }}
            >
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "10px",
                  background: C.white,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: active.color,
                }}
              >
                {active.icon}
              </div>
              <div>
                <p
                  style={{
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: C.dark,
                    marginBottom: "2px",
                  }}
                >
                  {active.label}
                </p>
                <p style={{ fontSize: "0.8rem", color: C.muted }}>
                  {active.skills.length} technologies
                </p>
              </div>
            </div>

            {/* Skill chips */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
                padding: "24px",
              }}
            >
              {active.skills.map((skill) => (
                <span
                  key={skill}
                  style={{
                    display: "inline-flex",
                    padding: "7px 16px",
                    borderRadius: "6px",
                    border: `1px solid ${C.border}`,
                    background: C.white,
                    fontSize: "0.84rem",
                    fontWeight: 500,
                    color: C.body,
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { .skills-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
