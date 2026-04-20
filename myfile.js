# Muthu Mariappan — Portfolio

> Personal portfolio website built with **React + Vite + TypeScript**

[![React](https://img.shields.io/badge/React-18.2-blue?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.2-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.1-purple?logo=vite)](https://vitejs.dev/)

---

## 🚀 Live Demo

🔗 [muthumariappan-portfolio.netlify.app](https://muthumariappan-portfolio.netlify.app/)

---

## 📋 About

This is my personal developer portfolio showcasing my skills, work experience, and projects as a **Front-End Developer** with 3+ years of experience at Gove Technologies, Chennai.

---

## 🛠️ Tech Stack

| Category     | Technology                   |
| ------------ | ---------------------------- |
| Framework    | React 18 + TypeScript        |
| Build Tool   | Vite 5                       |
| Styling      | Inline styles (no CSS files) |
| Icons        | React Icons                  |
| Contact Form | Formsubmit.co                |
| Deployment   | Netlify                      |

---

## 📁 Project Structure

```
muthu-portfolio/
├── public/
│   ├── favicon.png               # MM favicon
│   ├── Muthu mariappan.pdf       # Resume (PDF)
│   └── Muthu mariappan.docx      # Resume (Word)
│
├── src/
│   ├── theme.ts                  # All colors & design tokens
│   ├── App.tsx                   # Root component
│   ├── main.tsx                  # Entry point
│   │
│   └── components/
│       ├── Navbar.tsx            # Navigation + Resume download dropdown
│       ├── Hero.tsx              # Landing section with profile card
│       ├── About.tsx             # About me + stats + info table
│       ├── Skills.tsx            # Tech stack with category tabs
│       ├── Experience.tsx        # Work history + project accordions
│       ├── Projects.tsx          # Work & Personal project tabs
│       ├── Contact.tsx           # Contact form (Formsubmit) + info
│       └── Footer.tsx            # Footer with social links
│
├── index.html
├── vite.config.ts
├── tsconfig.json
├── package.json
└── .gitignore
```

---

## ⚡ Getting Started

### Prerequisites

- **Node.js** v18 or above
- **npm** v9 or above

### 1. Clone the repository

```bash
git clone https://github.com/muthumariappan/muthu-portfolio.git
cd muthu-portfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📦 Build for Production

```bash
npm run build
```

Output is generated in the `dist/` folder.

### Preview the production build locally

```bash
npm run preview
```

---

## 📧 Contact Form Setup

The contact form uses **Formsubmit.co** — no backend or API key needed.

**First-time setup (one-time only):**

1. Run the project and fill the contact form
2. Check `muthumariappang02@gmail.com` inbox
3. Click **"Activate Form"** in the email from Formsubmit
4. Done — all future submissions arrive directly in Gmail

---

## 🎨 Customise Colors

All colors are defined in one file — `src/theme.ts`:

```ts
export const C = {
  blue: "#2563eb", // ← change this to update the accent color everywhere
  green: "#16a34a", // ← availability / status color
  dark: "#0f172a", // ← main text color
  // ...
};
```

---

## 🚀 Deploy to Netlify

1. Push this repo to GitHub
2. Go to [netlify.com](https://netlify.com) → **Add new site** → **Import from Git**
3. Select your GitHub repo
4. Set build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Click **Deploy site**

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👤 Author

**Muthu Mariappan G**

- 📧 muthumariappang02@gmail.com
- 💼 [LinkedIn](https://www.linkedin.com/in/muthu-mariappan-g-a33593336/)
