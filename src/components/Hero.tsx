import { FiArrowRight, FiMail, FiLinkedin, FiGithub } from "react-icons/fi";
import { C, FONT } from "../theme";

// Social links shown at the bottom of the left side
const SOCIALS = [
  {
    label: "Email",
    href: "mailto:muthumariappang02@gmail.com",
    icon: <FiMail size={16} />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/muthu-mariappan-g-a33593336/",
    icon: <FiLinkedin size={16} />,
  },
  {
    label: "GitHub",
    href: "https://github.com/muthumariappan",
    icon: <FiGithub size={16} />,
  },
];

// Stats inside the profile card
const STATS = [
  { number: "3+", label: "Years Exp." },
  { number: "4", label: "Apps Shipped" },
  { number: "1", label: "Company" },
];

// Info rows inside the profile card
const INFO_ROWS = [
  { key: "Role", value: "Front-End Developer" },
  { key: "Company", value: "Gove Technologies" },
  { key: "Stack", value: "React · Next.js · TS" },
  { key: "Location", value: "Chennai, Tamil Nadu" },
];

// Tech chips shown below the card
const TECH_CHIPS = [
  "React.js",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Redux",
  "Material UI",
];

export default function Hero() {
  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        paddingTop: "64px",
        background: C.white,
        fontFamily: FONT.main,
      }}
    >
      {/* Two column layout: left text, right card */}
      <div
        className="hero-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 400px",
          gap: "60px",
          alignItems: "center",
          padding: "40px 40px 60px",
          maxWidth: "1120px",
          margin: "0 auto",
          width: "100%",
        }}
      >
        {/* ─────────────── LEFT SIDE ─────────────── */}
        <div>
          {/* "Available" badge */}
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
              marginBottom: "28px",
            }}
          >
            <span
              style={{
                width: "7px",
                height: "7px",
                borderRadius: "50%",
                background: C.green,
                animation: "blink 2.2s ease-in-out infinite",
              }}
            />
            Available for new opportunities
          </span>

          {/* Name */}
          <p
            style={{ fontSize: "1.4rem", color: C.muted, marginBottom: "4px" }}
          >
            Hi, I'm
          </p>
          <h1
            style={{
              fontSize: "clamp(2.4rem, 4.5vw, 3.6rem)",
              fontWeight: 900,
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              color: C.dark,
              marginBottom: "20px",
            }}
          >
            Muthu Mariappan
          </h1>

          {/* Role */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              flexWrap: "wrap",
              marginBottom: "16px",
            }}
          >
            <span style={{ fontSize: "1rem", fontWeight: 700, color: C.blue }}>
              Front-End Developer
            </span>
            <span
              style={{ width: "1px", height: "16px", background: C.border2 }}
            />
            <span
              style={{
                fontFamily: FONT.mono,
                fontSize: "0.82rem",
                color: C.muted,
              }}
            >
              React.js | Next.js | TypeScript
            </span>
          </div>

          {/* Location line */}
          <p
            style={{
              fontSize: "0.85rem",
              color: C.light,
              marginBottom: "24px",
              fontFamily: FONT.mono,
            }}
          >
            📍 Chennai, Tamil Nadu &nbsp;·&nbsp; React.js · TypeScript · Node.js
          </p>

          {/* Description */}
          <p
            style={{
              fontSize: "0.97rem",
              color: C.muted,
              lineHeight: 1.85,
              maxWidth: "520px",
              marginBottom: "32px",
            }}
          >
            <strong style={{ color: C.dark }}>Front-End Developer</strong> with{" "}
            <strong style={{ color: C.dark }}>3+ years of experience</strong>{" "}
            building scalable web applications. Proficient in{" "}
            <strong style={{ color: C.dark }}>
              ReactJS, NextJS, and TypeScript
            </strong>
            , with hands-on experience in Node.js, REST APIs, and AWS. I
            leverage{" "}
            <span style={{ color: C.blue, fontWeight: 600 }}>
              Claude AI, Gemini, Lovable, Bolt &amp; Copilot
            </span>{" "}
            to ship faster.
          </p>

          {/* CTA buttons */}
          <div
            style={{
              display: "flex",
              gap: "12px",
              flexWrap: "wrap",
              marginBottom: "32px",
            }}
          >
            <button
              onClick={() => scrollTo("projects")}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "12px 24px",
                borderRadius: "8px",
                background: C.blue,
                color: "#fff",
                fontSize: "0.9rem",
                fontWeight: 600,
                cursor: "pointer",
                border: "none",
                fontFamily: FONT.main,
              }}
            >
              View My Work <FiArrowRight size={16} />
            </button>
            <button
              onClick={() => scrollTo("contact")}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "11px 22px",
                borderRadius: "8px",
                background: C.white,
                color: C.dark,
                border: `1.5px solid ${C.border2}`,
                fontSize: "0.9rem",
                fontWeight: 600,
                cursor: "pointer",
                fontFamily: FONT.main,
              }}
            >
              Get In Touch
            </button>
          </div>

          {/* Social links */}
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  color: C.muted,
                  padding: "6px 14px",
                  border: `1px solid ${C.border}`,
                  borderRadius: "6px",
                  textDecoration: "none",
                }}
              >
                {s.icon} {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* ─────────────── RIGHT SIDE: Profile Card ─────────────── */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {/* Card */}
          <div
            style={{
              background: C.white,
              border: `1px solid ${C.border}`,
              borderRadius: "16px",
              boxShadow: "0 10px 40px rgba(0,0,0,0.12)",
              overflow: "hidden",
            }}
          >
            {/* Card top bar — clean, no decorative dots */}
            <div
              style={{
                height: "3px",
                background: `linear-gradient(90deg, ${C.blue}, ${C.blueLine})`,
              }}
            />

            {/* Card body */}
            <div style={{ padding: "22px 20px" }}>
              {/* Avatar with MM initials */}
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  background: C.blue,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 14px",
                  border: `3px solid ${C.blueLine}`,
                  boxShadow: "0 4px 16px rgba(37,99,235,0.3)",
                }}
              >
                <span
                  style={{
                    fontSize: "1.6rem",
                    fontWeight: 900,
                    color: "#fff",
                    letterSpacing: "-0.02em",
                    lineHeight: 1,
                  }}
                >
                  MM
                </span>
              </div>

              {/* Name, role, company */}
              <div style={{ textAlign: "center", marginBottom: "14px" }}>
                <p
                  style={{
                    fontSize: "1.05rem",
                    fontWeight: 800,
                    color: C.dark,
                    marginBottom: "4px",
                  }}
                >
                  Muthu Mariappan G
                </p>
                <p
                  style={{
                    fontSize: "0.88rem",
                    fontWeight: 600,
                    color: C.blue,
                    marginBottom: "3px",
                  }}
                >
                  Front-End Developer
                </p>
                <p
                  style={{
                    fontSize: "0.8rem",
                    color: C.muted,
                    fontFamily: FONT.mono,
                  }}
                >
                  @ Gove Technologies
                </p>
              </div>

              {/* Open to work status */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "7px",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  color: C.green,
                  background: C.greenBg,
                  border: `1px solid ${C.greenLine}`,
                  borderRadius: "100px",
                  padding: "5px 16px",
                  width: "fit-content",
                  margin: "0 auto 14px",
                }}
              >
                <span
                  style={{
                    width: "7px",
                    height: "7px",
                    borderRadius: "50%",
                    background: C.green,
                    animation: "blink 2.2s ease-in-out infinite",
                  }}
                />
                Open to work
              </div>

              {/* Divider */}
              <div
                style={{
                  height: "1px",
                  background: C.lightBg,
                  margin: "4px 0 14px",
                }}
              />

              {/* Stats row */}
              <div
                style={{
                  display: "flex",
                  border: `1px solid ${C.border}`,
                  borderRadius: "10px",
                  overflow: "hidden",
                  marginBottom: "14px",
                }}
              >
                {STATS.map((stat, index) => (
                  <div
                    key={stat.label}
                    style={{
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "4px",
                      padding: "14px 8px",
                      background: C.white,
                      borderRight:
                        index < STATS.length - 1
                          ? `1px solid ${C.border}`
                          : "none",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "1.5rem",
                        fontWeight: 800,
                        color: C.blue,
                        lineHeight: 1,
                        letterSpacing: "-0.03em",
                      }}
                    >
                      {stat.number}
                    </span>
                    <span
                      style={{
                        fontSize: "0.72rem",
                        color: C.muted,
                        fontWeight: 500,
                        textAlign: "center",
                        lineHeight: 1.3,
                      }}
                    >
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Info rows */}
              <div>
                {INFO_ROWS.map((row, index) => (
                  <div
                    key={row.key}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "9px 0",
                      borderBottom:
                        index < INFO_ROWS.length - 1
                          ? `1px solid ${C.lightBg}`
                          : "none",
                      gap: "12px",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.78rem",
                        color: C.light,
                        fontFamily: FONT.mono,
                      }}
                    >
                      {row.key}
                    </span>
                    <span
                      style={{
                        fontSize: "0.82rem",
                        fontWeight: 600,
                        color: C.dark,
                        textAlign: "right",
                      }}
                    >
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tech chips below card */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {TECH_CHIPS.map((chip) => (
              <span
                key={chip}
                style={{
                  display: "inline-flex",
                  padding: "5px 13px",
                  borderRadius: "6px",
                  border: `1px solid ${C.border}`,
                  background: C.white,
                  fontSize: "0.82rem",
                  fontWeight: 500,
                  color: C.body,
                }}
              >
                {chip}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Stack to one column on mobile */}
      <style>{`
        @media (max-width: 960px) {
          .hero-grid { grid-template-columns: 1fr !important; padding: 32px 20px 48px !important; }
        }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0.3} }
      `}</style>
    </section>
  );
}
