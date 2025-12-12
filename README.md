Portfolio Dashboard

A futuristic, interactive portfolio dashboard built with Next.js, featuring a game-inspired UI with neon aesthetics and smooth animations.

## 🎮 Features

- **Game-Style UI**: Futuristic dashboard with Apple iOS dark theme aesthetics
- **3D Hover Effects**: Cards with depth, rotation, and lift animations
- **Neon Glow**: Beautiful cyan, blue, and purple neon accents
- **Particle Background**: Dynamic particle system with connected nodes
- **Smooth Transitions**: Page transitions and loading animations
- **Fully Responsive**: Works perfectly on all screen sizes
- **8 Interactive Sections**:
  - Profile / About Me
  - Projects Gallery
  - Certifications
  - Skills & Expertise
  - Services Offered
  - Social Profiles
  - Experience & Stats
  - Contact Form

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd Portfolio2
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🎨 Customization

### Update Your Information

1. **Profile Page** (`app/profile/page.tsx`): Update name, bio, contact info
2. **Projects** (`app/projects/page.tsx`): Add your projects with links
3. **Skills** (`app/skills/page.tsx`): Modify skill levels and categories
4. **Experience** (`app/experience/page.tsx`): Update work history and stats
5. **Social Links** (`app/profiles/page.tsx`): Update your social media handles
6. **Contact Info** (`app/contact/page.tsx`): Update email and contact details

### Color Scheme

Colors are defined in `tailwind.config.ts`:
```typescript
neon: {
  blue: "#00f0ff",
  purple: "#b829fc",
  cyan: "#00ffff",
  pink: "#ff00ff",
  green: "#00ff88",
}
```

### Animations

Animation variants are in `lib/animations.ts` - adjust timing and easing as needed.

## 📁 Project Structure

```
Portfolio2/
├── app/
│   ├── certifications/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── experience/
│   │   └── page.tsx
│   ├── profile/
│   │   └── page.tsx
│   ├── profiles/
│   │   └── page.tsx
│   ├── projects/
│   │   └── page.tsx
│   ├── services/
│   │   └── page.tsx
│   ├── skills/
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx          # Main dashboard
├── components/
│   ├── DashboardCard.tsx
│   ├── PageLayout.tsx
│   ├── PageTransition.tsx
│   └── ParticleBackground.tsx
├── lib/
│   ├── animations.ts
│   └── utils.ts
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## 🎯 Usage

The application is a single-page application (SPA) with multiple routes. Each card on the main dashboard links to a dedicated page:

- `/` - Main dashboard with grid of cards
- `/profile` - About me section
- `/projects` - Project showcase
- `/certifications` - Credentials and certificates
- `/skills` - Technical skills with progress bars
- `/services` - Services offered
- `/profiles` - Social media links
- `/experience` - Work experience timeline
- `/contact` - Contact form

## 🌟 Key Components

### DashboardCard
Reusable card component with 3D hover effects and neon glow:
```tsx
<DashboardCard
  title="Profile"
  description="Learn more about me"
  icon={User}
  href="/profile"
  color="blue"
/>
```

### PageLayout
Consistent layout wrapper for all pages with back button and header.

### ParticleBackground
Canvas-based particle system with connected nodes.

## 🔧 Build for Production

```bash
npm run build
npm start
```

## 📝 License

MIT License - feel free to use this for your own portfolio!

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

---

**Built with ❤️ using Next.js and Framer Motion**
# Portfolio
