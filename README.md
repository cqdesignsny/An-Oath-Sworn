# An Oath Sworn - Website Repository

Cinematic dark fantasy website for M.T. Kadisin's "An Oath Sworn: Saga of the Stone King"

## 🚀 Quick Start

### Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

The site will be available at `http://localhost:5173/`

### Build for Production

```bash
npm run build
npm run preview
```

## 📦 What's Included

- **React + Vite** - Fast, modern development setup
- **Tailwind CSS v4** - Custom theme with cinematic dark fantasy design
- **Framer Motion** - Smooth scroll animations and micro-interactions
- **Responsive Design** - Optimized for desktop, tablet, and mobile

## 🎨 Features

- Atmospheric backgrounds on all sections (Deep Forge, Deep Gate, Ancestors Hall, Deep Roads)
- Enhanced mobile UX with larger text and centered buttons
- Digital book mockup integration
- Parallax hero section
- Interactive atmosphere cards
- Sales-focused CTAs throughout

## 📁 Project Structure

```
├── public/              # Static assets (images, fonts)
├── src/
│   ├── components/      # Reusable components (Hero, Navbar, Footer, etc.)
│   ├── pages/          # Page components (Home, About, Shop, Contact)
│   ├── index.css       # Global styles and Tailwind theme
│   └── App.jsx         # Main app with routing
├── Project Magma/      # Source images and assets
└── package.json        # Dependencies and scripts
```

## 🔧 GitHub Setup (Complete the Push)

Your repository is set up and all files are committed. To complete the push to GitHub:

### Option 1: Command Line (with authentication)

```bash
# If you have a personal access token:
git push -u origin main

# Enter your GitHub username when prompted
# Use your Personal Access Token as the password
```

### Option 2: GitHub Desktop (Easiest)

1. Open GitHub Desktop
2. File → Add Local Repository
3. Choose this folder: `/Users/cqstudio/Library/CloudStorage/Dropbox/An Oath Sworn`
4. Click "Publish repository" or "Push origin"

### Option 3: GitHub CLI

```bash
# Install GitHub CLI if you haven't: brew install gh
gh auth login
git push -u origin main
```

## 🌐 Deploy to GitHub Pages

Once pushed, you can deploy to GitHub Pages:

1. Go to your repository settings on GitHub
2. Navigate to Pages (in the sidebar)
3. Source: Deploy from a branch
4. Branch: `main` → `/root` or `/docs` (you may need to build first)
5. Save

Or use a service like Vercel or Netlify for automatic deployments.

## 📝 Notes

- All images are in the `public/` folder for Vite to serve
- Source images are in `Project Magma/` for reference
- The site uses Google Fonts (Cinzel Decorative, Cinzel, Lato)

---

**Repository:** https://github.com/cqdesignsny/An-Oath-Sworn.git

Built with ❤️ by Antigravity
