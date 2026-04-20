import { useState } from "react";
import {
  FiChevronDown,
  FiChevronUp,
  FiCalendar,
  FiMapPin,
  FiBriefcase,
} from "react-icons/fi";
import { C, FONT } from "../theme";

// All bullet points for the job
const BULLETS = [
  "Architected scalable ReactJS and NextJS applications using code splitting, lazy loading, and SSR/SSG strategies.",
  "Built and maintained a reusable TypeScript component library using MUI and component-driven architecture.",
  "Integrated REST APIs with advanced caching, pagination, and server-side filtering across multiple modules.",
  "Wrote comprehensive unit and integration tests using Jest, reducing production bugs significantly.",
  "Led code reviews, enforced coding standards, and mentored junior developers.",
  "Collaborated with UI/UX designers and product owners in Agile/Scrum sprints to deliver features on time.",
];

// Key projects shown in the accordion
const PROJECTS = [
  {
    company: "Gove Technologies",
    title: "DMS – Document Management System",
    stack: ["ReactJS", "TypeScript", "Node.js", "PostgreSQL"],
    desc: "Full-stack document storage and management platform with file upload, versioning, SDK validation, and role-based access. The foundation that BillPay 2.0 was built upon.",
  },
  {
    company: "Gove Technologies",
    title: "BillPay 2.0 – Invoice & Payment Management System",
    stack: ["NextJS", "TypeScript", "Redux", "Material UI"],
    desc: "BillPay 2.0 is the updated version of the DMS project. Bill search, generation, invoice listing, and transaction history handling 10,000+ records with pagination and server-side filtering.",
  },
  {
    company: "Gove Technologies",
    title: "BaaS360 – Business as a Service Platform",
    stack: ["ReactJS", "NextJS", "TypeScript", "Node.js", "PostgreSQL"],
    desc: "End-to-end frontend architecture using NextJS App Router and TypeScript across multiple modules. Delivered 4 major releases on schedule.",
  },
  {
    company: "Gove Technologies",
    title: "Tenant Portal – Fleet Management System",
    stack: ["ReactJS", "TypeScript", "Material UI", "REST API"],
    desc: "Fleet management portal for tenants to manage vehicles, track operations, and handle logistics with role-based access control.",
  },
];

// Single project accordion row
function ProjectItem({ project }: { project: (typeof PROJECTS)[0] }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        border: `1px solid ${C.border}`,
        borderRadius: "10px",
        overflow: "hidden",
        marginBottom: "10px",
      }}
    >
      {/* Header row — click to open/close */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "14px 18px",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
          fontFamily: FONT.main,
        }}
      >
        <div>
          <p
            style={{
              fontFamily: FONT.mono,
              fontSize: "0.66rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: C.blue,
              fontWeight: 600,
              marginBottom: "3px",
            }}
          >
            {project.company}
          </p>
          <p style={{ fontSize: "0.9rem", fontWeight: 600, color: C.dark }}>
            {project.title}
          </p>
        </div>
        <span style={{ color: C.light, flexShrink: 0 }}>
          {open ? <FiChevronUp size={15} /> : <FiChevronDown size={15} />}
        </span>
      </button>

      {/* Body — shown when open */}
      {open && (
        <div
          style={{
            padding: "14px 18px 18px",
            borderTop: `1px solid ${C.border}`,
            background: C.pageBg,
          }}
        >
          <p
            style={{
              fontSize: "0.875rem",
              color: C.muted,
              lineHeight: 1.75,
              marginBottom: "14px",
            }}
          >
            {project.desc}
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "7px" }}>
            {project.stack.map((tech) => (
              <span
                key={tech}
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
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Experience() {
  return (
    <section
      id="experience"
      style={{
        background: C.pageBg,
        padding: "96px 0",
        borderTop: `1px solid ${C.border}`,
        fontFamily: FONT.main,
      }}
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
          Work History
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
          Experience
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
          Companies I've worked at and projects I've shipped to production.
        </p>

        {/* Experience card */}
        <div
          style={{
            background: C.white,
            border: `1px solid ${C.border}`,
            borderRadius: "16px",
            overflow: "hidden",
          }}
        >
          {/* Blue top accent bar */}
          <div
            style={{
              height: "3px",
              background: `linear-gradient(90deg, ${C.blue}, ${C.blueLine})`,
            }}
          />

          {/* Card header: company icon + name + badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "16px",
              padding: "24px 28px 0",
            }}
          >
            {/* Left: icon + company name */}
            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <div
                style={{
                  width: "46px",
                  height: "46px",
                  borderRadius: "10px",
                  background: C.blueBg,
                  border: `1px solid ${C.blueLine}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: C.blue,
                }}
              >
                <FiBriefcase size={20} />
              </div>
              <div>
                <h3
                  style={{
                    fontSize: "1.15rem",
                    fontWeight: 800,
                    color: C.dark,
                    marginBottom: "3px",
                  }}
                >
                  Gove Technologies
                </h3>
                <p style={{ fontSize: "0.82rem", color: C.muted }}>
                  Full-time · Product Company
                </p>
              </div>
            </div>

            {/* Right: "Currently Here" badge */}
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "7px",
                padding: "5px 14px",
                borderRadius: "100px",
                border: `1px solid ${C.greenLine}`,
                background: C.greenBg,
                fontSize: "0.8rem",
                fontWeight: 600,
                color: C.green,
              }}
            >
              <span
                style={{
                  width: "7px",
                  height: "7px",
                  borderRadius: "50%",
                  background: C.green,
                  animation: "blink 2.2s infinite",
                }}
              />
              Currently Here
            </span>
          </div>

          {/* Meta row: role, date, location, duration */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "8px 20px",
              padding: "16px 28px",
              borderBottom: `1px solid ${C.border}`,
            }}
          >
            <span
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "0.84rem",
                color: C.muted,
              }}
            >
              <FiBriefcase size={13} /> Software Developer
            </span>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "0.84rem",
                color: C.muted,
              }}
            >
              <FiCalendar size={13} /> Feb 2023 – Present
            </span>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "0.84rem",
                color: C.muted,
              }}
            >
              <FiMapPin size={13} /> Chennai, India
            </span>
            <span
              style={{
                marginLeft: "auto",
                padding: "4px 14px",
                borderRadius: "100px",
                background: C.blueBg,
                border: `1px solid ${C.blueLine}`,
                fontSize: "0.78rem",
                fontWeight: 700,
                color: C.blue,
                fontFamily: FONT.mono,
              }}
            >
              3+ Years
            </span>
          </div>

          {/* Body */}
          <div style={{ padding: "24px 28px 28px" }}>
            {/* Summary */}
            <p
              style={{
                fontSize: "0.95rem",
                color: C.muted,
                lineHeight: 1.8,
                marginBottom: "20px",
              }}
            >
              Building scalable, production-ready web applications using ReactJS
              and NextJS. Working end-to-end from architecture to production
              deployment in an Agile/Scrum environment.
            </p>

            {/* Bullet points */}
            <ul
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                marginBottom: "28px",
              }}
            >
              {BULLETS.map((bullet, i) => (
                <li
                  key={i}
                  style={{
                    display: "flex",
                    gap: "12px",
                    fontSize: "0.9rem",
                    color: C.body,
                    lineHeight: 1.7,
                  }}
                >
                  <span
                    style={{
                      width: "6px",
                      height: "6px",
                      minWidth: "6px",
                      borderRadius: "50%",
                      background: C.blue,
                      marginTop: "9px",
                      flexShrink: 0,
                    }}
                  />
                  {bullet}
                </li>
              ))}
            </ul>

            {/* Key projects */}
            <div
              style={{ borderTop: `1px solid ${C.border}`, paddingTop: "22px" }}
            >
              <p
                style={{
                  fontFamily: FONT.mono,
                  fontSize: "0.68rem",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: C.light,
                  fontWeight: 600,
                  marginBottom: "14px",
                }}
              >
                Key Projects ({PROJECTS.length})
              </p>
              {PROJECTS.map((p) => (
                <ProjectItem key={p.title} project={p} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0.3} }`}</style>
    </section>
  );
}
