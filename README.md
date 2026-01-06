# Portfolio V1 - John.Dev

A modern, developer-focused portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features a sleek dark theme with code-inspired design elements and smooth animations.

## 🚀 Features

- **Modern Design**: Clean, dark theme with code-inspired aesthetics
- **Responsive Layout**: Fully responsive design that works on all devices
- **Custom Animations**: Smooth hover effects and subtle animations
- **Tech Stack Icons**: Interactive technology stack showcase
- **Polygon Image Mask**: Custom CSS clip-path for unique profile image styling
- **Monospace Typography**: JetBrains Mono font for that authentic developer feel

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Font**: JetBrains Mono (Google Fonts)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio_v1
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:
- `accent-green`: #00ff88
- `accent-pink`: #ff6b9d
- `accent-orange`: #ffa726
- `accent-red`: #ff5252
- `text-gray`: #a1a1aa
- `bg-dark`: #0a0a0a
- `card-dark`: #000000

### Profile Image
Replace the profile image URL in `components/HeroSection.tsx` with your own image.

### Personal Information
Update the following in `components/HeroSection.tsx`:
- Name in the intro line
- Job title and description
- Tech stack icons and descriptions
- Social media links in `components/Navbar.tsx`

## 📁 Project Structure

```
portfolio_v1/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── HeroSection.tsx
│   ├── Navbar.tsx
│   └── TechIcon.tsx
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

### Other Platforms
```bash
npm run build
npm start
```

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

---

**Built with ❤️ by John.Dev** 