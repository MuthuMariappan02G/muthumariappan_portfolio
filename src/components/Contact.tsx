import { useState } from "react";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiMessageCircle,
  FiSend,
  FiCheck,
  FiLinkedin,
  FiAlertCircle,
  FiInfo,
} from "react-icons/fi";
import { C, FONT } from "../theme";

// Sends form to muthumariappang02@gmail.com via Formsubmit
const FORM_URL = "https://formsubmit.co/ajax/muthumariappang02@gmail.com";

// Info cards shown at the top
const CONTACT_INFO = [
  {
    icon: <FiMail size={17} />,
    label: "Email",
    value: "muthumariappang02@gmail.com",
    href: "mailto:muthumariappang02@gmail.com",
  },
  {
    icon: <FiPhone size={17} />,
    label: "Phone",
    value: "+91 6382751742",
    href: "tel:+916382751742",
  },
  {
    icon: <FiMessageCircle size={17} />,
    label: "WhatsApp",
    value: "+91 6382751742",
    href: "https://wa.me/916382751742",
  },
  {
    icon: <FiMapPin size={17} />,
    label: "Location",
    value: "Chennai, Tamil Nadu",
    href: null,
  },
];

// Empty form state
const EMPTY_FORM = { name: "", email: "", subject: "", message: "" };

// Status type
type Status = "idle" | "sending" | "success" | "activated" | "error";

export default function Contact() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>("idle");

  // Update a single field and clear its error
  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  }

  // Validate all fields — shows red error under each empty field
  function validate(): boolean {
    const newErrors: Record<string, string> = {};

    if (!form.name.trim()) newErrors.name = "Please enter your name";
    if (!form.email.trim()) newErrors.email = "Please enter your email";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Please enter a valid email";
    if (!form.subject.trim()) newErrors.subject = "Please enter a subject";
    if (!form.message.trim()) newErrors.message = "Please enter your message";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  // Send the form via Formsubmit
  async function handleSend() {
    if (!validate()) return;

    setStatus("sending");

    try {
      const res = await fetch(FORM_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
          _subject: `Portfolio Message: ${form.subject}`,
          _replyto: form.email,
          _template: "table",
          _captcha: "false",
        }),
      });
      const data = await res.json();

      // First-ever submission triggers activation email to Gmail
      const needsActivation =
        data.success === "false" &&
        typeof data.message === "string" &&
        data.message.toLowerCase().includes("activation");

      if (data.success === "true") {
        setStatus("success");
        setForm(EMPTY_FORM); // clear all fields
        setErrors({});
        setTimeout(() => setStatus("idle"), 6000);
      } else if (needsActivation) {
        setStatus("activated");
        setForm(EMPTY_FORM);
        setErrors({});
        setTimeout(() => setStatus("idle"), 8000);
      } else {
        throw new Error("Send failed");
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 6000);
    }
  }

  // Open WhatsApp with pre-filled message
  function handleWhatsApp() {
    if (!validate()) return;
    const msg = `Hi Muthu! I'm ${form.name}.\n\nSubject: ${form.subject}\n\n${form.message}\n\nReply to: ${form.email}`;
    window.open(
      `https://wa.me/916382751742?text=${encodeURIComponent(msg)}`,
      "_blank",
    );
  }

  // Input style — turns red border if there's an error
  function inputStyle(field: string): React.CSSProperties {
    const hasError = Boolean(errors[field]);
    return {
      width: "100%",
      padding: "11px 14px",
      background: hasError ? "#fff8f8" : C.pageBg,
      border: `1.5px solid ${hasError ? "#dc2626" : C.border}`,
      borderRadius: "10px",
      fontFamily: FONT.main,
      fontSize: "0.9rem",
      color: C.dark,
      outline: "none",
    };
  }

  const isSending = status === "sending";

  return (
    <section
      id="contact"
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
          Get In Touch
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
          Contact Me
        </h2>
        <p
          style={{
            fontSize: "0.95rem",
            color: C.muted,
            maxWidth: "500px",
            lineHeight: 1.8,
            marginBottom: "32px",
          }}
        >
          Open to new opportunities, freelance projects, or just a conversation.
          Fill the form — message will be delivered directly to my Gmail.
        </p>

        {/* ─── Info strips ─── */}
        <div
          className="contact-strips"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1px",
            background: C.border,
            border: `1px solid ${C.border}`,
            borderRadius: "16px",
            overflow: "hidden",
            marginBottom: "36px",
          }}
        >
          {CONTACT_INFO.map((item) => (
            <div
              key={item.label}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                background: C.white,
                padding: "16px 18px",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  minWidth: "40px",
                  borderRadius: "10px",
                  background: C.blueBg,
                  border: `1px solid ${C.blueLine}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: C.blue,
                }}
              >
                {item.icon}
              </div>
              <div>
                <p
                  style={{
                    fontSize: "0.72rem",
                    fontFamily: FONT.mono,
                    color: C.light,
                    marginBottom: "3px",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  {item.label}
                </p>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    style={{
                      fontSize: "0.85rem",
                      fontWeight: 600,
                      color: C.dark,
                      textDecoration: "none",
                    }}
                  >
                    {item.value}
                  </a>
                ) : (
                  <p
                    style={{
                      fontSize: "0.85rem",
                      fontWeight: 600,
                      color: C.dark,
                    }}
                  >
                    {item.value}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* ─── Main layout: form + sidebar ─── */}
        <div
          className="contact-main"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 300px",
            gap: "24px",
            alignItems: "start",
          }}
        >
          {/* ── FORM ── */}
          <div
            style={{
              background: C.white,
              border: `1px solid ${C.border}`,
              borderRadius: "16px",
              padding: "32px",
            }}
          >
            <h3
              style={{
                fontSize: "1.15rem",
                fontWeight: 700,
                color: C.dark,
                marginBottom: "24px",
              }}
            >
              Send a Message
            </h3>

            {/* ✅ Success banner */}
            {status === "success" && (
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "12px",
                  padding: "14px 16px",
                  borderRadius: "10px",
                  marginBottom: "20px",
                  background: C.greenBg,
                  border: `1px solid ${C.greenLine}`,
                  color: C.green,
                }}
              >
                <FiCheck size={18} />
                <div>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      fontWeight: 700,
                      marginBottom: "3px",
                    }}
                  >
                    Message sent successfully!
                  </p>
                  <p style={{ fontSize: "0.8rem", opacity: 0.85 }}>
                    Delivered to muthumariappang02@gmail.com — I'll reply soon!
                  </p>
                </div>
              </div>
            )}

            {/* 📧 Activation banner (first-ever send) */}
            {status === "activated" && (
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "12px",
                  padding: "14px 16px",
                  borderRadius: "10px",
                  marginBottom: "20px",
                  background: C.blueBg,
                  border: `1px solid ${C.blueLine}`,
                  color: C.blue,
                }}
              >
                <FiInfo size={18} />
                <div>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      fontWeight: 700,
                      marginBottom: "3px",
                    }}
                  >
                    One-time activation needed!
                  </p>
                  <p style={{ fontSize: "0.8rem", opacity: 0.85 }}>
                    Check your Gmail → click "Activate Form" → then send again.
                    This only happens once.
                  </p>
                </div>
              </div>
            )}

            {/* ❌ Error banner */}
            {status === "error" && (
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "12px",
                  padding: "14px 16px",
                  borderRadius: "10px",
                  marginBottom: "20px",
                  background: "#fef2f2",
                  border: "1px solid #fecaca",
                  color: "#dc2626",
                }}
              >
                <FiAlertCircle size={18} />
                <div>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      fontWeight: 700,
                      marginBottom: "3px",
                    }}
                  >
                    Failed to send. Please try again.
                  </p>
                  <p style={{ fontSize: "0.8rem", opacity: 0.85 }}>
                    Or email directly: muthumariappang02@gmail.com
                  </p>
                </div>
              </div>
            )}

            {/* Name + Email row */}
            <div
              className="form-row"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "16px",
                marginBottom: "16px",
              }}
            >
              <div
                style={{ display: "flex", flexDirection: "column", gap: "7px" }}
              >
                <label
                  style={{
                    fontSize: "0.83rem",
                    fontWeight: 600,
                    color: C.body,
                  }}
                >
                  Full Name <span style={{ color: "#dc2626" }}>*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  disabled={isSending}
                  style={inputStyle("name")}
                />
                {errors.name && (
                  <span
                    style={{
                      fontSize: "0.78rem",
                      color: "#dc2626",
                      fontWeight: 500,
                    }}
                  >
                    {errors.name}
                  </span>
                )}
              </div>
              <div
                style={{ display: "flex", flexDirection: "column", gap: "7px" }}
              >
                <label
                  style={{
                    fontSize: "0.83rem",
                    fontWeight: 600,
                    color: C.body,
                  }}
                >
                  Email Address <span style={{ color: "#dc2626" }}>*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  disabled={isSending}
                  style={inputStyle("email")}
                />
                {errors.email && (
                  <span
                    style={{
                      fontSize: "0.78rem",
                      color: "#dc2626",
                      fontWeight: 500,
                    }}
                  >
                    {errors.email}
                  </span>
                )}
              </div>
            </div>

            {/* Subject */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "7px",
                marginBottom: "16px",
              }}
            >
              <label
                style={{ fontSize: "0.83rem", fontWeight: 600, color: C.body }}
              >
                Subject <span style={{ color: "#dc2626" }}>*</span>
              </label>
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="e.g. Job opportunity / Freelance project"
                disabled={isSending}
                style={inputStyle("subject")}
              />
              {errors.subject && (
                <span
                  style={{
                    fontSize: "0.78rem",
                    color: "#dc2626",
                    fontWeight: 500,
                  }}
                >
                  {errors.subject}
                </span>
              )}
            </div>

            {/* Message */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "7px",
                marginBottom: "24px",
              }}
            >
              <label
                style={{ fontSize: "0.83rem", fontWeight: 600, color: C.body }}
              >
                Message <span style={{ color: "#dc2626" }}>*</span>
              </label>
              <textarea
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about the role, project, or what you'd like to discuss..."
                disabled={isSending}
                style={{ ...inputStyle("message"), resize: "vertical" }}
              />
              {errors.message && (
                <span
                  style={{
                    fontSize: "0.78rem",
                    color: "#dc2626",
                    fontWeight: 500,
                  }}
                >
                  {errors.message}
                </span>
              )}
            </div>

            {/* Send buttons */}
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <button
                onClick={handleSend}
                disabled={isSending}
                style={{
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  padding: "12px 24px",
                  borderRadius: "8px",
                  background: C.blue,
                  color: "#fff",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  cursor: isSending ? "not-allowed" : "pointer",
                  border: "none",
                  fontFamily: FONT.main,
                  minWidth: "160px",
                  opacity: isSending ? 0.8 : 1,
                }}
              >
                {isSending ? (
                  <>
                    <span
                      style={{
                        display: "inline-block",
                        width: "15px",
                        height: "15px",
                        border: "2px solid rgba(255,255,255,0.4)",
                        borderTop: "2px solid #fff",
                        borderRadius: "50%",
                        animation: "spin 0.7s linear infinite",
                      }}
                    />{" "}
                    Sending...
                  </>
                ) : (
                  <>
                    <FiSend size={15} /> Send via Email
                  </>
                )}
              </button>
              <button
                onClick={handleWhatsApp}
                disabled={isSending}
                style={{
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  padding: "11px 22px",
                  borderRadius: "8px",
                  background: "transparent",
                  color: C.green,
                  border: `1.5px solid ${C.greenLine}`,
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  fontFamily: FONT.main,
                  minWidth: "160px",
                }}
              >
                <FiMessageCircle size={15} /> Send via WhatsApp
              </button>
            </div>
          </div>

          {/* ── SIDEBAR ── */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "14px" }}
          >
            {/* Availability */}
            <div
              style={{
                background: C.greenBg,
                border: `1px solid ${C.greenLine}`,
                borderRadius: "16px",
                padding: "18px",
              }}
            >
              <p
                style={{
                  fontWeight: 700,
                  color: C.green,
                  fontSize: "0.9rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  marginBottom: "5px",
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
                Available for Opportunities
              </p>
              <p style={{ fontSize: "0.82rem", color: "#16a34a" }}>
                Full-time · Contract · Freelance
              </p>
            </div>

            <a
              href="https://wa.me/916382751742"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "9px",
                padding: "13px 18px",
                background: C.white,
                border: `1.5px solid ${C.greenLine}`,
                borderRadius: "10px",
                color: C.green,
                fontSize: "0.88rem",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              <FiMessageCircle size={18} /> Message on WhatsApp
            </a>

            <a
              href="https://www.linkedin.com/in/muthu-mariappan-g-a33593336/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "9px",
                padding: "13px 18px",
                background: C.white,
                border: `1.5px solid ${C.blueLine}`,
                borderRadius: "10px",
                color: C.blue,
                fontSize: "0.88rem",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              <FiLinkedin size={18} /> View LinkedIn Profile
            </a>

            <div
              style={{
                background: C.white,
                border: `1px solid ${C.border}`,
                borderRadius: "10px",
                padding: "18px",
              }}
            >
              <p
                style={{
                  fontSize: "0.88rem",
                  fontWeight: 700,
                  color: C.dark,
                  marginBottom: "8px",
                }}
              >
                ⚡ Quick Response
              </p>
              <p
                style={{ fontSize: "0.82rem", color: C.muted, lineHeight: 1.7 }}
              >
                I typically reply within 24 hours. For urgent enquiries,
                WhatsApp is the fastest way to reach me.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) { .contact-strips { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 768px) { .contact-main   { grid-template-columns: 1fr !important; } }
        @media (max-width: 560px) { .contact-strips { grid-template-columns: 1fr !important; } .form-row { grid-template-columns: 1fr !important; } }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0.3} }
        @keyframes spin  { to { transform: rotate(360deg); } }
      `}</style>
    </section>
  );
}
