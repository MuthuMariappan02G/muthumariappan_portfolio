import { FiMapPin, FiMail, FiBookOpen, FiZap } from "react-icons/fi";
import { C, FONT } from "../theme";

const STATS = [
  { number: "3+", label: "Years Experience" },
  { number: "4", label: "Apps Shipped" },
  { number: "1", label: "Product Company" },
];

const INFO_ROWS = [
  {
    icon: <FiMapPin size={14} />,
    label: "Location",
    value: "Chennai, Tamil Nadu",
    isLink: false,
    isGreen: false,
    href: "",
  },
  {
    icon: <FiMail size={14} />,
    label: "Email",
    value: "muthumariappang02@gmail.com",
    isLink: true,
    isGreen: false,
    href: "mailto:muthumariappang02@gmail.com",
  },
  {
    icon: <FiBookOpen size={14} />,
    label: "Degree",
    value: "B.E. – Electronics & Communication Eng.",
    isLink: false,
    isGreen: false,
    href: "",
  },
  {
    icon: <FiZap size={14} />,
    label: "Status",
    value: "Open to opportunities",
    isLink: false,
    isGreen: true,
    href: "",
  },
];

const FOCUS_TAGS = [
  "UI Performance",
  "Clean Code",
  "Component Design",
  "API Integration",
  "Agile Delivery",
];

export default function About() {
  return (
    <section
      id="about"
      style={{ background: C.pageBg, padding: "96px 0", fontFamily: FONT.main }}
    >
      <div style={{ maxWidth: "1120px", margin: "0 auto", padding: "0 40px" }}>
        {/* Two column layout */}
        <div
          className="about-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "64px",
            alignItems: "start",
          }}
        >
          {/* ─── LEFT: Heading + Bio ─── */}
          <div>
            {/* Label */}
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
              About Me
            </p>

            {/* Title */}
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
              Turning ideas into
              <br />
              production software
            </h2>

            <p
              style={{
                fontSize: "1rem",
                color: C.muted,
                lineHeight: 1.75,
                marginBottom: "28px",
              }}
            >
              A product-focused developer who cares about code quality,
              performance, and real-world impact.
            </p>

            {/* Bio paragraphs */}
            <p
              style={{
                fontSize: "0.96rem",
                color: C.body,
                lineHeight: 1.9,
                marginBottom: "16px",
              }}
            >
              I'm a{" "}
              <strong style={{ color: C.dark }}>Front-End Developer</strong>{" "}
              based in Chennai with a strong foundation in React.js and
              TypeScript. I've spent 3+ years at{" "}
              <strong style={{ color: C.dark }}>Gove Technologies</strong>{" "}
              building real-world applications end-to-end.
            </p>

            <p
              style={{
                fontSize: "0.96rem",
                color: C.body,
                lineHeight: 1.9,
                marginBottom: "16px",
              }}
            >
              My core strength is{" "}
              <strong style={{ color: C.dark }}>
                ReactJS, NextJS, and TypeScript
              </strong>
              . I work with REST APIs, Redux, AWS cloud services, and I've led
              code reviews across Agile sprint cycles.
            </p>

            <p
              style={{
                fontSize: "0.96rem",
                color: C.body,
                lineHeight: 1.9,
                marginBottom: "24px",
              }}
            >
              I use{" "}
              <strong style={{ color: C.blue }}>
                Claude AI, Gemini, Lovable, Bolt, and GitHub Copilot
              </strong>{" "}
              to ship better code, faster.
            </p>

            {/* Focus tags */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {FOCUS_TAGS.map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: 500,
                    color: C.blue,
                    background: C.blueBg,
                    border: `1px solid ${C.blueLine}`,
                    padding: "5px 14px",
                    borderRadius: "100px",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* ─── RIGHT: Stats + Info table ─── */}
          <div>
            {/* Stats boxes */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "1px",
                background: C.border,
                border: `1px solid ${C.border}`,
                borderRadius: "16px",
                overflow: "hidden",
                marginBottom: "20px",
              }}
            >
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "5px",
                    padding: "24px 12px",
                    background: C.white,
                  }}
                >
                  <p
                    style={{
                      fontSize: "2.2rem",
                      fontWeight: 800,
                      lineHeight: 1,
                      letterSpacing: "-0.04em",
                      color: C.blue,
                    }}
                  >
                    {stat.number}
                  </p>
                  <p
                    style={{
                      fontSize: "0.76rem",
                      fontWeight: 500,
                      color: C.muted,
                      textAlign: "center",
                      lineHeight: 1.3,
                    }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Info table */}
            <div
              style={{
                background: C.white,
                border: `1px solid ${C.border}`,
                borderRadius: "16px",
                overflow: "hidden",
              }}
            >
              {INFO_ROWS.map((row, index) => (
                <div
                  key={row.label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: "8px",
                    padding: "13px 18px",
                    borderBottom:
                      index < INFO_ROWS.length - 1
                        ? `1px solid ${C.lightBg}`
                        : "none",
                  }}
                >
                  {/* Label */}
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      fontSize: "0.8rem",
                      fontWeight: 500,
                      color: C.muted,
                    }}
                  >
                    {row.icon} {row.label}
                  </span>

                  {/* Value — green for status, link for email, plain text for others */}
                  {row.isGreen && (
                    <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        color: C.green,
                        fontWeight: 600,
                        fontSize: "0.82rem",
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
                      {row.value}
                    </span>
                  )}
                  {!row.isGreen && row.isLink && (
                    <a
                      href={row.href}
                      style={{
                        fontSize: "0.82rem",
                        fontWeight: 500,
                        color: C.blue,
                        textDecoration: "none",
                      }}
                    >
                      {row.value}
                    </a>
                  )}
                  {!row.isGreen && !row.isLink && (
                    <span
                      style={{
                        fontSize: "0.82rem",
                        fontWeight: 500,
                        color: C.dark,
                        textAlign: "right",
                      }}
                    >
                      {row.value}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; } }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0.3} }
      `}</style>
    </section>
  );
}
