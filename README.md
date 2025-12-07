# Professional Portfolio Website

A modern, responsive portfolio website built with Next.js, React, and TypeScript. Showcase your projects, skills, education, and experience with a sleek, professional design.

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Dark Mode Support**: Toggle between light and dark themes with `next-themes`
- **Modern UI Components**: Built with Radix UI and shadcn/ui component library
- **Type-Safe**: Full TypeScript support for better code quality
- **Form Validation**: Robust form validation using `react-hook-form` and Zod
- **Data Visualization**: Charts and visualizations with Recharts
- **Smooth Animations**: Elegant animations with TailwindCSS
- **SEO Optimized**: Optimized for search engines with Next.js

## 📋 Tech Stack

### Frontend Framework

- **Next.js 16** - React framework with server-side rendering
- **React 19** - UI library
- **TypeScript** - Type safety

### Styling & UI

- **TailwindCSS 3** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **shadcn/ui** - Re-usable components built on Radix UI
- **tailwindcss-animate** - Animation utilities
- **class-variance-authority** - CSS class composition

### Forms & Validation

- **react-hook-form** - Flexible form state management
- **Zod** - TypeScript-first schema validation
- **@hookform/resolvers** - Integration between react-hook-form and Zod

### UI Components & Libraries

- **Lucide React** - Beautiful icon library
- **Sonner** - Toast notifications
- **embla-carousel** - Carousel/slider component
- **react-day-picker** - Date picker component
- **react-resizable-panels** - Resizable panel layouts
- **input-otp** - OTP input component
- **cmdk** - Command menu component
- **vaul** - Drawer component

### Data & Utilities

- **Recharts** - Composable charting library
- **date-fns** - Modern date utility library
- **date-fns/tz** - Timezone support
- **Vercel Analytics** - Analytics integration
- **tailwind-merge** - Merge TailwindCSS classes
- **clsx** - Conditional className utility

### Development Tools

- **pnpm** - Fast, disk space efficient package manager
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixes

## 📦 Project Structure

```
professional-portfolio-site/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout component
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── about.tsx         # About section
│   ├── contact.tsx       # Contact section
│   ├── education.tsx     # Education section
│   ├── experience.tsx    # Experience section
│   ├── hero.tsx          # Hero section
│   ├── projects.tsx      # Projects section
│   ├── skills.tsx        # Skills section
│   └── ...
├── hooks/                # Custom React hooks
│   ├── use-mobile.ts     # Mobile detection hook
│   └── use-toast.ts      # Toast notification hook
├── lib/                  # Utility functions
│   └── utils.ts          # Shared utilities
├── public/               # Static assets
│   ├── images/          # Project and portfolio images
│   ├── icons/           # Icon assets
│   └── resume.pdf       # Resume file
├── styles/               # Additional stylesheets
├── package.json          # Dependencies
├── pnpm-lock.yaml        # Lock file
├── tsconfig.json         # TypeScript configuration
├── next.config.mjs       # Next.js configuration
├── postcss.config.mjs    # PostCSS configuration
├── components.json       # Component library config
└── README.md             # This file
```

## 🛠️ Installation

### Prerequisites

- Node.js 18+ or higher
- pnpm (recommended) or npm

### Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/TechieParth2310/portfolio-site-parth.git
   cd portfolio-site-parth
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   # or with npm
   npm install
   ```

3. **Run the development server**

   ```bash
   pnpm dev
   # or with npm
   npm run dev
   ```

4. **Open in browser**
   - Navigate to [http://localhost:3000](http://localhost:3000)
   - The app will auto-reload as you make changes

## 🚀 Building for Production

### Create optimized production build

```bash
pnpm build
# or
npm run build
```

### Start production server

```bash
pnpm start
# or
npm start
```

## 📝 Available Scripts

| Script       | Description                              |
| ------------ | ---------------------------------------- |
| `pnpm dev`   | Start development server with hot reload |
| `pnpm build` | Build for production                     |
| `pnpm start` | Start production server                  |
| `pnpm lint`  | Run ESLint                               |

## 🎨 Customization

### Updating Portfolio Content

1. **Edit sections** in `components/` directory:

   - `components/hero.tsx` - Main hero section
   - `components/about.tsx` - About section
   - `components/skills.tsx` - Skills showcase
   - `components/experience.tsx` - Work experience
   - `components/education.tsx` - Educational background
   - `components/projects.tsx` - Portfolio projects
   - `components/contact.tsx` - Contact information

2. **Add images** to `public/images/` and reference them in components

3. **Customize colors** via TailwindCSS classes in components

### Theming

The site supports light and dark mode. Theme toggle is available in the header.

## 🌐 Deployment

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Environment Variables

Create a `.env.local` file for local development:

```env
# Add any environment variables needed
```

## 📊 Performance

- **Optimized Images**: Next.js Image component for automatic optimization
- **Code Splitting**: Automatic route-based code splitting
- **Server Components**: React Server Components for improved performance
- **CSS-in-JS**: TailwindCSS for minimal CSS bundle size

## ♿ Accessibility

- **Semantic HTML**: Proper use of semantic elements
- **ARIA Labels**: Accessible component labels
- **Keyboard Navigation**: Full keyboard support
- **Color Contrast**: WCAG compliant contrast ratios
- **Radix UI**: Built-in accessibility features

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Parth Kothawade**

- GitHub: [@TechieParth2310](https://github.com/TechieParth2310)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/TechieParth2310/portfolio-site-parth/issues) if you want to contribute.

## 📞 Support

For support, please open an issue in the repository or contact through the portfolio website.

---

**Built with ❤️ using Next.js and React**
