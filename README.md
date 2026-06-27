# Truong Truong Phuc — AI Engineer Portfolio 🚀

This repository contains the source code and production build for my personal portfolio website, hosted on GitHub Pages at [https://Truong99zvc.github.io](https://Truong99zvc.github.io).

## 📁 Repository Branch Structure

To host a React application on a GitHub **User Page** (`username.github.io`), the repository is structured into two separate branches:

1. **`source` branch** (Default Development Branch):
   - Contains the raw React, TypeScript, and SCSS source code.
   - All edits, updates, and local tests are performed on this branch.
2. **`main` branch** (Production Deployment Branch):
   - Contains only the static build assets (compiled HTML, CSS, JS) generated from the `build` folder.
   - GitHub Pages serves the website directly from the root of this branch.
   - **Do not edit files on the `main` branch manually**, as it is automatically overwritten during deployment.

---

## 🛠️ Local Development Setup

To make modifications or test changes locally, ensure you are on the `source` branch:

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the local development server**:
   ```bash
   npm start
   ```
   Open [http://localhost:3000](http://localhost:3000) to view and test the application in your browser.

---

## 🚀 How to Deploy Updates

Whenever you make changes to the portfolio (e.g., updating experiences, adding new projects, changing styles), follow these simple steps to deploy:

### Step 1: Deploy to Production (`main` branch)
Run the automated deployment script:
```bash
npm run deploy
```
**What this script does automatically**:
1. Compiles the React code (`npm run build`).
2. Force-pushes the contents of the generated `build/` folder directly to the root of the `main` branch using the `gh-pages` library.
3. Your website at [https://Truong99zvc.github.io](https://Truong99zvc.github.io) will update automatically within 1-2 minutes.

### Step 2: Save Source Code Changes (`source` branch)
Save your React source code modifications to GitHub:
```bash
git add .
git commit -m "Update portfolio experience/projects"
git push origin source
```

---

## 📂 Project Structure

Edits can be made by navigating to the `/src` directory:
- `/src/components/Main.tsx`: Hero section, name, and social links.
- `/src/components/Expertise.tsx`: Technical skills categorization and tag chips.
- `/src/components/Timeline.tsx`: Education background and career history.
- `/src/components/Project.tsx`: Portfolio projects list (descriptions, icons, mock images).
- `/src/components/Contact.tsx` & `/src/index.scss`: Contact form layout and global styling.