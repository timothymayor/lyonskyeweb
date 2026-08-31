# Lyonskye Offshore Marine Ltd.

Official web application for **Lyonskye Offshore Marine Ltd.** — providing integrated maritime services, shipping agency, chandling, logistics, crew manning, and offshore support across Nigeria and the Gulf of Guinea.

---

## 🚀 Quick Start (Local Development)

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the local server:**
   ```bash
   npm start
   # or
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🌐 Deploying to Vercel

This repository is pre-configured with `vercel.json` and standalone serverless API handlers in `/api/`.

### Option A: Via Vercel Dashboard (Recommended)
1. Push this repository to your GitHub account.
2. Go to [vercel.com/new](https://vercel.com/new) and log in.
3. Import your GitHub repository.
4. Keep the default settings (Framework Preset: **Other** / Root Directory: `./`).
5. Click **Deploy**. Vercel will automatically host the static front-end and serverless functions at `/api/enquiries` and `/api/health`.

### Option B: Via Vercel CLI
```bash
npm install -g vercel
vercel
```

---

## 🐙 Deploying to GitHub & GitHub Pages

### Step 1: Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit - Lyonskye Offshore Marine Ltd"
git branch -M main
git remote add origin https://github.com/<YOUR-USERNAME>/<YOUR-REPO-NAME>.git
git push -u origin main
```

### Step 2: Enable GitHub Pages
1. Go to your GitHub repository **Settings** → **Pages**.
2. Under **Build and deployment** → **Source**, select **GitHub Actions** (the included `.github/workflows/deploy-pages.yml` workflow will automatically run and publish your site).
3. Alternatively, select **Deploy from a branch** → Branch: `main` / Folder: `/ (root)` and click **Save**.

---

## 📁 Project Structure

```
├── .github/workflows/
│   └── deploy-pages.yml    # Automated GitHub Actions workflow for GitHub Pages
├── api/
│   ├── enquiries.js        # Vercel Serverless Function for contact form submissions
│   └── health.js           # Vercel Serverless Function for API health checks
├── index.html              # Main single-page application entry point
├── server.js               # Node.js / Express local development server
├── vercel.json             # Vercel deployment and routing configuration
├── logo.svg                # Horizontal brand logo (dark text)
├── logo-white.svg          # Horizontal brand logo (light text)
├── logo-vertical.svg       # Vertical badge logo
├── crest.svg               # Standalone circular emblem
├── crest-white.svg         # Standalone circular emblem (white/light variant)
├── metadata.json           # Application metadata
├── package.json            # Project manifest & scripts
└── README.md               # Documentation
```
