<div align="center">

# 🚀 Zeyaul Hasan — Personal Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-15.5-black?style=for-the-badge&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-FF0055?style=for-the-badge&logo=framer)](https://www.framer.com/motion)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=for-the-badge&logo=vercel)](https://vercel.com)

<br />

**A modern, high-performance developer portfolio built with Next.js 15, TypeScript, and Tailwind CSS.**  
Featuring animated sections, dark/light mode, real-time contact form, and a fully responsive design.

<br />

[🌐 Live Demo](https://zeyaul-portfolio.vercel.app) · [📧 Contact](mailto:Zeyaulhasan1326@gmail.com) · [💼 LinkedIn](https://www.linkedin.com/in/the7hasan/) · [🐙 GitHub](https://github.com/zeyaulhasan)

</div>

---

## ✨ Features

- **⚡ Blazing Fast** — Optimized animations, capped FPS canvas, GPU-accelerated sections
- **🌗 Dark / Light Mode** — Smooth theme toggle with persistent preference
- **🎨 Animated UI** — Framer Motion transitions, particle background, section dividers
- **📱 Fully Responsive** — Mobile-first design, works on all screen sizes
- **📬 Working Contact Form** — Powered by Formspree, messages land directly in inbox
- **🔒 Cybersecurity Focus** — Showcases security projects and certifications
- **🏆 Achievements Section** — Animated counters for stats and platform performance
- **📜 Certificates Gallery** — Interactive certificate cards with modal preview
- **🎓 Education Timeline** — Academic background with institution logos
- **🛠️ Skills & Expertise** — Glowing tech stack icons with hover animations

---

## 🖥️ Sections

| Section | Description |
|---|---|
| **Hero** | Animated intro with particle background and tech stack |
| **About** | Profile card, highlights, expertise grid |
| **Education** | Academic timeline with logos and learning goals |
| **Skills** | Categorized tech stack with glowing icons |
| **Projects** | Featured projects with live demo and GitHub links |
| **Achievements** | Coding stats and platform performance |
| **Certificates** | Professional certifications gallery |
| **Contact** | Working contact form via Formspree |

---

## 🛠️ Tech Stack

| Category | Technologies |
|---|---|
| **Framework** | Next.js 15 (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS v4 |
| **Animations** | Framer Motion |
| **Icons** | Lucide React, React Icons |
| **Contact Form** | Formspree |
| **Deployment** | Vercel |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/zeyaulhasan/zeyaul-portfolio.git

# Navigate to the project
cd zeyaul-portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
zeyaul-portfolio/
├── public/
│   ├── images/          # Profile photo, certificates, project screenshots
│   ├── icons/           # Tech stack icons
│   └── resume.pdf       # Resume file
├── src/
│   ├── app/
│   │   ├── globals.css  # Global styles & theme variables
│   │   ├── layout.tsx   # Root layout
│   │   └── page.tsx     # Main page with all sections
│   ├── components/
│   │   ├── layout/      # Navigation, Footer
│   │   ├── sections/    # Hero, About, Education, Skills, Projects, etc.
│   │   └── ui/          # Reusable UI components
│   ├── hooks/
│   │   └── useTheme.tsx # Dark/light mode hook
│   └── lib/
│       ├── constants.ts # All portfolio data (projects, education, certs)
│       └── utils.ts     # Animation variants & utilities
```

---

## ⚙️ Customization

All portfolio content lives in one file — **`src/lib/constants.ts`**:

```ts
// Update your personal info
export const PERSONAL_INFO = { name, title, location, email, bio }

// Add/edit projects
export const PROJECTS = [{ title, description, technologies, github, live }]

// Update education
export const EDUCATION = [{ institution, degree, period, highlights }]

// Add certificates
export const CERTIFICATES = [{ name, issuer, date, image }]
```

---

## 📬 Contact Form Setup

The contact form uses [Formspree](https://formspree.io):

1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form and copy your Form ID
3. Replace the ID in `src/components/ui/ContactForm.tsx`:
   ```ts
   const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', ...)
   ```

---

## 🚢 Deployment

### Deploy to Vercel (Recommended)

```bash
# Push to GitHub
git add .
git commit -m "Ready to deploy"
git push origin main
```

Then:
1. Go to [vercel.com](https://vercel.com) → Import your GitHub repo
2. Vercel auto-detects Next.js — click **Deploy**
3. Your site is live in ~2 minutes 🎉

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

**Built with ❤️ by [Zeyaul Hasan](https://github.com/zeyaulhasan)**

*Software Engineer · Cybersecurity Enthusiast · Competitive Programmer*

</div>
