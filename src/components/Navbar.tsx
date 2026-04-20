import { useState, useEffect, useRef } from "react";
import {
  FiDownload,
  FiMenu,
  FiX,
  FiChevronDown,
  FiFileText,
  FiFile,
} from "react-icons/fi";
import { C, FONT } from "../theme";

// List of nav links in the header
const NAV_LINKS = ["About", "Skills", "Experience", "Projects", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const [showResumeDrop, setShowResumeDrop] = useState(false);

  // Used to close the resume dropdown when clicking outside
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Make the navbar solid when user scrolls
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setShowResumeDrop(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  // Scroll to a section smoothly
  function goTo(name: string) {
    document
      .getElementById(name.toLowerCase())
      ?.scrollIntoView({ behavior: "smooth" });
    setActiveLink(name);
    setMobileOpen(false);
  }

  return (
    <>
      {/* ── Header bar ── */}
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          height: "64px",
          background: scrolled ? "rgba(255,255,255,0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled
            ? `1px solid ${C.border}`
            : "1px solid transparent",
          transition: "all 0.3s",
          fontFamily: FONT.main,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "100%",
            padding: "0 40px",
          }}
        >
          {/* Logo on the left */}
          <a
            href="#"
            style={{
              fontSize: "1rem",
              fontWeight: 800,
              color: C.dark,
              textDecoration: "none",
              letterSpacing: "-0.02em",
              whiteSpace: "nowrap",
            }}
          >
            Muthu Mariappan<span style={{ color: C.blue }}>.</span>
          </a>

          {/* Nav links on the right (desktop only) */}
          <nav
            style={{ display: "flex", alignItems: "center", gap: "4px" }}
            className="desktop-nav"
          >
            {/* Each nav link button */}
            {NAV_LINKS.map((link) => (
              <button
                key={link}
                onClick={() => goTo(link)}
                style={{
                  padding: "7px 14px",
                  borderRadius: "6px",
                  fontSize: "0.88rem",
                  fontWeight: 500,
                  color: activeLink === link ? C.blue : C.muted,
                  background: activeLink === link ? C.blueBg : "transparent",
                  border:
                    activeLink === link
                      ? `1px solid ${C.blueLine}`
                      : "1px solid transparent",
                  cursor: "pointer",
                  fontFamily: FONT.main,
                  transition: "all 0.18s",
                }}
              >
                {link}
              </button>
            ))}

            {/* Resume button with dropdown */}
            <div
              ref={dropdownRef}
              style={{ position: "relative", marginLeft: "10px" }}
            >
              {/* Resume button */}
              <button
                onClick={() => setShowResumeDrop(!showResumeDrop)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "9px 16px",
                  borderRadius: "8px",
                  background: C.blue,
                  color: "#fff",
                  fontSize: "0.86rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  border: "none",
                  fontFamily: FONT.main,
                }}
              >
                <FiDownload size={14} />
                Resume
                <FiChevronDown
                  size={13}
                  style={{
                    transform: showResumeDrop
                      ? "rotate(180deg)"
                      : "rotate(0deg)",
                    transition: "transform 0.2s",
                  }}
                />
              </button>

              {/* Dropdown: Document or PDF */}
              {showResumeDrop && (
                <div
                  style={{
                    position: "absolute",
                    top: "calc(100% + 8px)",
                    right: 0,
                    background: C.white,
                    border: `1px solid ${C.border}`,
                    borderRadius: "10px",
                    boxShadow: "0 10px 40px rgba(0,0,0,0.12)",
                    minWidth: "200px",
                    overflow: "hidden",
                    zIndex: 200,
                  }}
                >
                  {/* Document option */}
                  <a
                    href="/Muthu mariappan.docx"
                    download="Muthu mariappan.docx"
                    onClick={() => setShowResumeDrop(false)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      padding: "13px 16px",
                      borderBottom: `1px solid ${C.border}`,
                      textDecoration: "none",
                      color: C.dark,
                    }}
                  >
                    <FiFileText size={16} color={C.blue} />
                    <div>
                      <p
                        style={{
                          fontSize: "0.88rem",
                          fontWeight: 600,
                          color: C.dark,
                        }}
                      >
                        Document
                      </p>
                      <p
                        style={{
                          fontSize: "0.74rem",
                          color: C.light,
                          fontFamily: FONT.mono,
                        }}
                      >
                        .docx format
                      </p>
                    </div>
                  </a>

                  {/* PDF option */}
                  <a
                    href="/Muthu mariappan.pdf"
                    download="Muthu mariappan.pdf"
                    onClick={() => setShowResumeDrop(false)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      padding: "13px 16px",
                      textDecoration: "none",
                      color: C.dark,
                    }}
                  >
                    <FiFile size={16} color="#dc2626" />
                    <div>
                      <p
                        style={{
                          fontSize: "0.88rem",
                          fontWeight: 600,
                          color: C.dark,
                        }}
                      >
                        PDF
                      </p>
                      <p
                        style={{
                          fontSize: "0.74rem",
                          color: C.light,
                          fontFamily: FONT.mono,
                        }}
                      >
                        .pdf format
                      </p>
                    </div>
                  </a>
                </div>
              )}
            </div>
          </nav>

          {/* Hamburger button (mobile only) */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              display: "none",
              color: C.dark,
              padding: "6px",
              background: "transparent",
              border: "none",
              cursor: "pointer",
            }}
          >
            {mobileOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </header>

      {/* ── Mobile dropdown menu ── */}
      {mobileOpen && (
        <div
          style={{
            position: "fixed",
            top: "64px",
            left: 0,
            right: 0,
            zIndex: 99,
            background: C.white,
            borderBottom: `1px solid ${C.border}`,
            padding: "16px 24px 24px",
            fontFamily: FONT.main,
          }}
        >
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => goTo(link)}
              style={{
                display: "block",
                width: "100%",
                textAlign: "left",
                padding: "13px 0",
                fontSize: "1rem",
                fontWeight: 600,
                color: C.dark,
                background: "transparent",
                border: "none",
                borderBottom: `1px solid ${C.border}`,
                cursor: "pointer",
                fontFamily: FONT.main,
              }}
            >
              {link}
            </button>
          ))}
          <a
            href="/Muthu mariappan.docx"
            download
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginTop: "16px",
              padding: "12px 18px",
              borderRadius: "8px",
              background: C.blueBg,
              color: C.blue,
              border: `1px solid ${C.blueLine}`,
              textDecoration: "none",
              fontWeight: 600,
              fontSize: "0.9rem",
            }}
          >
            <FiFileText size={15} /> Download as Document
          </a>
          <a
            href="/Muthu mariappan.pdf"
            download
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginTop: "8px",
              padding: "12px 18px",
              borderRadius: "8px",
              background: "#fef2f2",
              color: "#dc2626",
              border: "1px solid #fecaca",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: "0.9rem",
            }}
          >
            <FiFile size={15} /> Download as PDF
          </a>
        </div>
      )}

      {/* Hide desktop nav on mobile */}
      <style>{`
        @media (max-width: 900px) {
          .desktop-nav      { display: none !important; }
          .mobile-menu-btn  { display: flex !important; }
        }
      `}</style>
    </>
  );
}
