# 🚀 Omkar Kokane - Portfolio Website

A stunning, modern portfolio website built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion**. Features beautiful scroll animations, typewriter effects, particle backgrounds, and is fully ready for one-click Vercel deployment.

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC?style=flat-square&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-purple?style=flat-square)

---

## ✨ Features

- 🎨 **Dark Futuristic Design** - Beautiful gradient backgrounds and neon accents
- ⌨️ **Typewriter Effect** - Animated role titles in the hero section
- 🌟 **Particle Background** - Interactive floating particles with connections
- 📜 **Scroll Animations** - Smooth reveal animations as you scroll
- 📊 **Animated Skill Bars** - Progress bars that animate into view
- 🔗 **Timeline Experience** - Frame-by-frame work history reveal
- 📱 **Fully Responsive** - Works on all devices
- 🚀 **Vercel Ready** - One-click deployment
- 📝 **Easy to Update** - All content in simple data files

---

## 📁 Project Structure

```
portfolio/
├── app/                          # Next.js App Router
│   ├── globals.css               # Global styles & animations
│   ├── layout.tsx                # Root layout & SEO metadata
│   └── page.tsx                  # Main page (composes all sections)
│
├── components/                   # React Components
│   ├── index.ts                  # Central exports
│   │
│   ├── ui/                       # Reusable UI Components
│   │   ├── Typewriter.tsx        # Typewriter text effect
│   │   ├── ScrollReveal.tsx      # Scroll animation wrapper
│   │   ├── Navbar.tsx            # Sticky navigation
│   │   ├── SectionWrapper.tsx    # Section container
│   │   ├── ProjectCard.tsx       # 3D project cards
│   │   ├── SkillBar.tsx          # Animated skill bars
│   │   └── TimelineCard.tsx      # Timeline entries
│   │
│   ├── sections/                 # Page Sections
│   │   ├── Hero.tsx              # Hero with typewriter
│   │   ├── About.tsx             # About & education
│   │   ├── Experience.tsx        # Work timeline
│   │   ├── Projects.tsx          # Project showcase
│   │   ├── Skills.tsx            # Skills grid
│   │   ├── Achievements.tsx      # Awards & certs
│   │   └── Contact.tsx           # Contact form
│   │
│   └── effects/                  # Visual Effects
│       └── ParticlesBg.tsx       # Canvas particles
│
├── data/                         # ⭐ EDIT THESE FILES
│   ├── index.ts                  # Central exports
│   ├── personal.ts               # Your info & social links
│   ├── experience.ts             # Work experience
│   ├── projects.ts               # Your projects
│   ├── skills.ts                 # Skills & proficiency
│   └── achievements.ts           # Awards & certifications
│
├── public/                       # Static Assets
│   ├── images/                   # Profile & project images
│   └── ...                       # Other static files
│
└── README.md                     # This file
```

---

## 🛠️ Quick Start

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Git (for version control)

### Installation

```bash
# 1. Navigate to the portfolio folder
cd portfolio

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open in browser
# Navigate to http://localhost:3000
```

---

## ✏️ How to Update Content

### 📌 Update Personal Information

Edit `data/personal.ts`:

```typescript
export const personal = {
  name: "Your Name",
  title: "Your Title",
  
  // Roles for typewriter effect
  roles: [
    "Full Stack Developer",
    "UI/UX Designer",
    // Add more...
  ],
  
  tagline: "Your tagline here",
  bio: "Your full bio...",
  
  email: "your@email.com",
  phone: "+1234567890",
  location: "Your City",
  
  social: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "",  // Leave empty to hide
  },
};
```

### 💼 Update Work Experience

Edit `data/experience.ts`:

```typescript
export const experiences = [
  {
    id: 1,
    company: "Company Name",
    role: "Your Role",
    duration: "Jan 2023 - Present",
    type: "full-time", // Options: full-time, part-time, internship, volunteer, freelance
    description: [
      "Achievement or responsibility 1",
      "Achievement or responsibility 2",
    ],
    technologies: ["React", "Node.js", "Python"],
  },
  // Add more experiences...
];
```

### 🚀 Add/Edit Projects

Edit `data/projects.ts`:

```typescript
export const projects = [
  {
    id: 1,
    title: "Project Name",
    shortDescription: "One line description",
    fullDescription: "Detailed description...",
    technologies: ["React", "Node.js"],
    category: "web",  // Options: ai-ml, web, mobile, other
    featured: true,   // Show in featured section
    image: "/projects/project-image.jpg",  // Optional
    liveUrl: "https://project-demo.com",    // Optional
    githubUrl: "https://github.com/...",    // Optional
    highlights: [
      "Key feature 1",
      "Key feature 2",
    ],
  },
  // Add more projects...
];
```

### 🎯 Update Skills

Edit `data/skills.ts`:

```typescript
export const skillCategories = [
  {
    title: "Category Name",
    icon: "🔧",
    skills: [
      { name: "Skill Name", proficiency: 90 },  // 0-100
      { name: "Another Skill", proficiency: 85 },
    ],
  },
  // Add more categories...
];
```

### 🏆 Add Achievements

Edit `data/achievements.ts`:

```typescript
export const achievements = [
  {
    id: 1,
    title: "Achievement Title",
    organization: "Organization Name",
    date: "2024",
    type: "hackathon",  // Options: hackathon, award, certification, competition, other
    position: "1st Place",  // Optional
    description: "Details...",  // Optional
  },
  // Add more...
];
```

---

## 🎨 Customization Guide

### Change Colors

Edit `app/globals.css`:

```css
:root {
  /* Background colors */
  --color-bg-primary: #0a0a0f;     /* Main background */
  --color-bg-secondary: #0f0f18;   /* Section alternate */
  --color-bg-card: #12121a;        /* Card backgrounds */
  
  /* Accent colors */
  --color-accent-cyan: #00f0ff;    /* Primary accent */
  --color-accent-purple: #a855f7;  /* Secondary accent */
  --color-accent-pink: #ec4899;    /* Tertiary accent */
}
```

### Change Fonts

Edit `app/layout.tsx`:

```typescript
import { Inter, Roboto_Mono } from "next/font/google";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});
```

### Adjust Particle Background

Edit `app/page.tsx`:

```typescript
<ParticlesBg 
  particleCount={60}      // Number of particles
  speed={0.3}             // Movement speed
  connectDistance={100}   // Line connection distance
/>
```

### Add Profile Image

1. Add your image to `/public/images/profile.jpg`
2. Edit `components/sections/About.tsx`:
   - Uncomment the `<img>` tag
   - Comment out or remove the placeholder

---

## 🚀 Deployment to Vercel

### Method 1: GitHub Integration (Recommended)

1. **Push to GitHub**
   ```bash
   # Initialize git (if not done)
   git init
   
   # Add all files
   git add .
   
   # Commit
   git commit -m "Initial portfolio commit"
   
   # Add remote origin
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   
   # Push
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy" - Done! ✨

### Method 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow the prompts
```

### Environment Variables (Optional)

If you add a contact form API, set environment variables in Vercel:
- Go to Project Settings → Environment Variables
- Add your API keys

---

## 📱 Responsive Breakpoints

The portfolio is fully responsive:

| Breakpoint | Screen Size |
|------------|-------------|
| `sm` | 640px+ |
| `md` | 768px+ |
| `lg` | 1024px+ |
| `xl` | 1280px+ |

---

## 🧩 Component Reference

### Typewriter
```tsx
<Typewriter
  texts={["Role 1", "Role 2"]}
  typingSpeed={100}
  deletingSpeed={50}
  pauseTime={2000}
/>
```

### ScrollReveal
```tsx
<ScrollReveal
  direction="up"    // up, down, left, right, none
  delay={0.2}
  duration={0.6}
>
  <YourContent />
</ScrollReveal>
```

### SectionWrapper
```tsx
<SectionWrapper
  id="section-id"
  title="Section Title"
  subtitle="Optional subtitle"
>
  <YourContent />
</SectionWrapper>
```

---

## 🔧 Commands Reference

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

---

## 📄 SEO Configuration

Edit `app/layout.tsx` metadata:

```typescript
export const metadata: Metadata = {
  title: "Your Name | Developer",
  description: "Your description...",
  keywords: ["keyword1", "keyword2"],
  openGraph: {
    title: "Your Name",
    description: "...",
    url: "https://your-domain.com",
  },
};
```

---

## 🐛 Troubleshooting

### Build Errors
```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules
npm install
```

### TypeScript Errors
```bash
# Check for type errors
npx tsc --noEmit
```

### Styling Not Updating
- Make sure Tailwind is configured correctly
- Check `tailwind.config.js` content paths

---

## 📝 Todo / Improvements

- [ ] Add your profile image
- [ ] Update project images
- [ ] Add project GitHub/live URLs
- [ ] Set up contact form API
- [ ] Add Google Analytics
- [ ] Add more projects as you build them

---

## 📜 License

MIT License - Feel free to use and modify for your own portfolio!

---

## 🙏 Credits

Built with:
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [GSAP](https://greensock.com/gsap/)

---

**Made with ❤️ by Omkar Kokane**
