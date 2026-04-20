import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from "react-icons/fi";
import { C, FONT } from "../theme";

export default function Footer() {
  function goToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // Social links shown in the footer
  const LINKS = [
    {
      href: "https://github.com/muthumariappan",
      icon: <FiGithub size={17} />,
      label: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/muthu-mariappan-g-a33593336/",
      icon: <FiLinkedin size={17} />,
      label: "LinkedIn",
    },
    {
      href: "mailto:muthumariappang02@gmail.com",
      icon: <FiMail size={17} />,
      label: "Email",
    },
  ];

  return (
    <footer
      style={{
        background: C.footer,
        padding: "28px 0",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        fontFamily: FONT.main,
      }}
    >
      <div
        style={{
          maxWidth: "1120px",
          margin: "0 auto",
          padding: "0 40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        {/* Logo */}
        <span
          style={{
            fontSize: "1rem",
            fontWeight: 800,
            color: "#ffffff",
            letterSpacing: "-0.02em",
            whiteSpace: "nowrap",
          }}
        >
          Muthu Mariappan<span style={{ color: C.blueLine }}>.</span>
        </span>

        {/* Copyright */}
        <p style={{ fontSize: "0.8rem", color: "#64748b" }}>
          © {new Date().getFullYear()} Muthu Mariappan G &nbsp;·&nbsp; Built
          with React + Vite + TypeScript
        </p>

        {/* Social icons + back to top */}
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          {/* Social links — always white */}
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              style={{
                color: "#ffffff",
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              {link.icon}
            </a>
          ))}

          {/* Back to top button */}
          <button
            onClick={goToTop}
            aria-label="Back to top"
            style={{
              width: "34px",
              height: "34px",
              borderRadius: "6px",
              border: "1px solid rgba(255,255,255,0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#ffffff",
              cursor: "pointer",
              background: "transparent",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            <FiArrowUp size={15} />
          </button>
        </div>
      </div>
    </footer>
  );
}
