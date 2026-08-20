# Rutik Kolhapure - Portfolio

A modern, responsive portfolio website built with Next.js and Tailwind CSS, inspired by professional portfolio designs.

## Features

- 🎨 Modern UI with glass-morphism design
- 📱 Fully responsive for all devices
- ⚡ Fast performance with Next.js
- 🎯 Smooth scroll navigation
- 💫 Animations using Framer Motion
- 📊 Interactive skill progress bars
- 📝 Contact form
- 🔗 Social media integration

## Tech Stack

- **Framework:** Next.js 14
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** React Icons
- **Type Animation:** react-type-animation

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/your-username/portfolio.git
cd portfolio
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Deploy with default settings
5. Your site will be live at `https://your-project.vercel.app`

## Customization

### Personal Information

Edit the following files to customize your portfolio:

- `components/Hero.tsx` - Name, title, and about section
- `components/Experience.tsx` - Work experience
- `components/Projects.tsx` - Project details
- `components/Skills.tsx` - Skills and education
- `components/Contact.tsx` - Contact information

### Styling

- `tailwind.config.js` - Color scheme and animations
- `app/globals.css` - Global styles

## Project Structure

```
portfolio/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Experience.tsx
│   ├── Projects.tsx
│   ├── Skills.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── public/
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

## License

MIT
