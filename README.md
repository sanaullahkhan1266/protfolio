# Sanaullah Khan - Portfolio Website

A modern, interactive portfolio website showcasing my skills, projects, and experience as a Full Stack Developer. Built with cutting-edge technologies and featuring stunning 3D visuals.

## 🚀 **[Live Demo](https://your-portfolio-url.vercel.app)** • **[Report Bug](https://github.com/sanaullahkhan1266/protfolio/issues)** • **[Request Feature](https://github.com/sanaullahkhan1266/protfolio/issues)**

## 📋 Table of Contents

- [Features](#-features)
- [Screenshots](#-screenshots)  
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Customization](#-customization)
- [Features Overview](#-features-overview)
- [Deployment](#-deployment)
- [Contact](#-contact)
- [License](#-license)

**📚 Additional Documentation:**
- [📋 Deployment Guide](DEPLOYMENT.md) - Complete deployment instructions
- [🤝 Contributing Guidelines](CONTRIBUTING.md) - How to contribute
- [📱 Social Media Kit](SOCIAL_MEDIA.md) - Ready-to-share content

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen)
![License](https://img.shields.io/badge/License-MIT-blue.svg)
![GitHub stars](https://img.shields.io/github/stars/sanaullahkhan1266/protfolio?style=social)
![GitHub forks](https://img.shields.io/github/forks/sanaullahkhan1266/protfolio?style=social)

![Next.js](https://img.shields.io/badge/Next.js-15.5.4-black?logo=next.js)
![React](https://img.shields.io/badge/React-19.1.0-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Three.js](https://img.shields.io/badge/Three.js-0.180.0-green?logo=three.js)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-blue?logo=tailwindcss)
![Node.js](https://img.shields.io/badge/Node.js-18+-green?logo=node.js)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/sanaullahkhan1266/protfolio)

## 🚀 Features

- **Interactive 3D Elements**: Immersive space-themed 3D models and animations using Three.js
- **Modern Design**: Clean, responsive UI with smooth animations and transitions
- **Performance Optimized**: Built with Next.js 15 and React 19 for optimal performance
- **Mobile Responsive**: Fully responsive design that works on all devices
- **Contact Integration**: Direct email and social media links
- **Project Showcase**: Dynamic grid displaying featured projects
- **Skills Section**: Visual representation of technical skills
- **Smooth Animations**: Framer Motion-like animations and transitions

## 📸 Screenshots

### 🖼️ Desktop View
![Hero Section Desktop](assets/hero-desktop.png)
*Interactive 3D space model with smooth animations*

### 📱 Mobile Responsive
![Mobile View](assets/hero-mobile.png)
*Fully responsive design optimized for all devices*

### 💼 Projects Showcase
![Projects Grid](assets/projects-grid.png)
*Dynamic project grid with hover effects*

### 🎆 3D Interaction
![3D Animation](assets/3d-interaction.gif)
*Interactive 3D model with orbital animations*

> 📝 **Note**: Screenshots will be added once the portfolio is deployed and live.

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 15.5.4 with Turbopack
- **UI Library**: React 19.1.0
- **Language**: TypeScript 5
- **Styling**: TailwindCSS 4
- **3D Graphics**: Three.js 0.180.0
- **3D React Integration**: @react-three/fiber & @react-three/drei

### Development Tools
- **Linting**: ESLint with Next.js config
- **Type Checking**: TypeScript
- **Package Manager**: npm
- **Development Server**: Next.js with Turbopack

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── models/          # 3D models (.glb files)
│   │   ├── hero.glb
│   │   └── space.glb
│   └── ...
├── src/
│   ├── app/
│   │   ├── globals.css  # Global styles
│   │   ├── layout.tsx   # Root layout
│   │   └── page.tsx     # Home page
│   ├── components/
│   │   ├── r3f/         # React Three Fiber components
│   │   │   ├── IntroCamera.tsx
│   │   │   ├── Model.tsx
│   │   │   ├── Scene.tsx
│   │   │   ├── SpaceField.tsx
│   │   │   └── SpaceModel.tsx
│   │   ├── Contact.tsx
│   │   ├── Hero.tsx
│   │   ├── NavBar.tsx
│   │   ├── ProjectsGrid.tsx
│   │   ├── Section.tsx
│   │   ├── Skills.tsx
│   │   └── ThreeBackground.tsx
│   └── config/
│       └── scene.ts     # 3D scene configuration
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.ts
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Development Commands

```bash
# Start development server with Turbopack
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run ESLint
npm run lint

# Type check
npx tsc --noEmit
```

## 🎨 Customization

### Adding New 3D Models
1. Place your `.glb` files in the `public/models/` directory
2. Update the model loading logic in `src/components/r3f/Model.tsx`
3. Preload models for better performance

### Updating Content
- **Personal Info**: Update contact details in `src/components/Contact.tsx`
- **Projects**: Modify the projects data in `src/components/ProjectsGrid.tsx`
- **Skills**: Update skills in `src/components/Skills.tsx`
- **Hero Section**: Customize the hero content in `src/components/Hero.tsx`

### Styling
- TailwindCSS is used for styling
- Custom CSS can be added to `src/app/globals.css`
- Color schemes and themes can be adjusted in `tailwind.config.ts`

## 📱 Features Overview

### 🌟 Hero Section
- Interactive 3D space model with orbital animation
- Smooth camera transitions and intro sequences
- Responsive typography with gradient effects

### 💼 Projects Grid
- Dynamic project showcase
- Hover effects and smooth transitions
- Responsive grid layout

### 🛠️ Skills Section
- Visual skill representation
- Technology stack display
- Interactive elements

### 📞 Contact Section
- Direct email integration
- Social media links (GitHub, LinkedIn)
- Professional contact form

## 🌐 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

### Other Platforms
- **Netlify**: Supports Next.js static export
- **AWS Amplify**: Full Next.js support
- **Digital Ocean**: App Platform deployment

## 📧 Contact

- **Email**: [sanaullahdev7@gmail.com](mailto:sanaullahdev7@gmail.com)
- **LinkedIn**: [sanaullah-link](https://www.linkedin.com/in/sanaullah-link/)
- **GitHub**: [sanaullahkhan1266](https://github.com/sanaullahkhan1266)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Three.js Community** for amazing 3D graphics capabilities
- **React Three Fiber** for seamless React integration
- **Next.js Team** for the incredible framework
- **Tailwind CSS** for utility-first styling
- **Khronos Group** for glTF sample models

---

⭐ **Star this repository if you found it helpful!**