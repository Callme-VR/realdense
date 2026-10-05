# Realdense Monorepo — Deployment Guide

This guide provides step-by-step instructions on how to publish the **Realdense** codebase to **GitHub**, deploy the Express & Prisma backend to **Render**, and deploy the Next.js 16 frontend to **Vercel**.

---

## 📋 Architecture Overview

- **Repository**: Monorepo (Turbo + Bun Workspaces)
- **Frontend (`apps/frentend`)**: Next.js 16 (React 19, TailwindCSS v4) ➔ Deployed on **Vercel**
- **Backend (`apps/backend`)**: Express.js + Prisma ORM (PostgreSQL/Neon) ➔ Deployed on **Render**
- **Database**: PostgreSQL (Neon Cloud DB)

---

## 1. 🐙 Push Codebase to GitHub

### Step 1: Initialize Git & Commit Changes
Open your terminal in the root directory (`Realdense`) and run:

```bash
# Check status of modified files
git status

# Stage all files
git add .

# Commit changes
git commit -m "feat: setup full-stack deployment configuration"
```

### Step 2: Push to GitHub
1. Go to [GitHub.com](https://github.com) and create a **New Repository** named `Realdense` (or your preferred name).
2. Do **NOT** initialize with a README, `.gitignore`, or license.
3. Link your local repo and push:

```bash
# Add remote URL (replace with your actual GitHub repo URL)
git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/Realdense.git

# Rename main branch (if needed) and push
git branch -M main
git push -u origin main
```

---

## 2. 🚀 Backend Deployment on Render

Deploy `apps/backend` as a **Web Service** on [Render.com](https://render.com).

### Step-by-Step Render Setup:

1. **Sign in to Render**: Log in at [dashboard.render.com](https://dashboard.render.com/).
2. **Create New Web Service**: Click **New +** ➔ Select **Web Service**.
3. **Connect Repository**: Choose your `Realdense` GitHub repository.
4. **Configure Web Service Settings**:
   - **Name**: `realdense-backend` (or your choice)
   - **Region**: Choose closest to your database (e.g., *Singapore* or *Frankfurt*)
   - **Branch**: `main`
   - **Root Directory**: `apps/backend`  *(⚠️ Important for monorepo)*
   - **Runtime**: `Node` (or `Bun` if enabled)
   - **Build Command**:
     ```bash
     bun install && bunx prisma generate
     ```
     *(or if using npm/pnpm: `npm install && npx prisma generate`)*
   - **Start Command**:
     ```bash
     bun src/index.ts
     ```
     *(or `npx tsx src/index.ts`)*

5. **Set Environment Variables**:
   In the Render dashboard under **Environment Variables**, add:
   | Key | Value / Example | Description |
   | :--- | :--- | :--- |
   | `DATABASE_URL` | `postgresql://neondb_owner:...@ep-...aws.neon.tech/neondb?sslmode=verify-full` | Your Neon PostgreSQL Connection String |
   | `PORT` | `3001` (Render automatically overrides this) | Backend Server Port |
   | `NODE_ENV` | `production` | Environment mode |

6. **Health Check Path**:
   - Under **Advanced Settings**, set **Health Check Path** to `/health`.
   - The backend includes a pre-configured `GET /health` endpoint that checks database connection.

7. **Deploy**: Click **Create Web Service**.
   - Render will build and deploy your service.
   - Note your backend URL (e.g., `https://realdense-backend.onrender.com`).

---

## 3. 🌐 Frontend Deployment on Vercel

Deploy `apps/frentend` to [Vercel.com](https://vercel.com).

### Step-by-Step Vercel Setup:

1. **Log in to Vercel**: Go to [vercel.com](https://vercel.com/) and log in with GitHub.
2. **Add New Project**: Click **Add New...** ➔ Select **Project**.
3. **Import Repository**: Select your `Realdense` GitHub repository.
4. **Configure Project Settings**:
   - **Project Name**: `realdense-frontend`
   - **Framework Preset**: `Next.js`
   - **Root Directory**: Click **Edit** and select `apps/frentend`  *(⚠️ Crucial)*

5. **Build & Output Settings**:
   - **Build Command**: `next build` (or leave default)
   - **Output Directory**: `.next` (default)
   - **Install Command**: `bun install` (Vercel automatically detects Bun / npm)

6. **Set Environment Variables**:
   Add environment variables required by your Next.js app:
   | Key | Value | Description |
   | :--- | :--- | :--- |
   | `NEXT_PUBLIC_API_URL` | `https://realdense-backend.onrender.com` | Your deployed Render backend URL |

7. **Deploy**: Click **Deploy**.
   - Vercel will compile Next.js and generate your production URL (e.g., `https://realdense-frontend.vercel.app`).

---

## 4. 🔄 CORS Configuration (Backend & Frontend Integration)

Ensure your backend allows cross-origin requests from your Vercel frontend URL.

In `apps/backend/src/index.ts`:
```typescript
import cors from "cors";

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://realdense-frontend.vercel.app", // Your Vercel frontend URL
      process.env.FRONTEND_URL || "",
    ].filter(Boolean),
    credentials: true,
  })
);
```

---

## 🛠️ Summary & Quick Reference

| Service | Component | Source Location | Host Provider | Build Command | Start Command |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Frontend** | Next.js 16 Web App | `apps/frentend` | **Vercel** | `next build` | `next start` |
| **Backend** | Express + Prisma API | `apps/backend` | **Render** | `bun install && bunx prisma generate` | `bun src/index.ts` |
| **Database** | PostgreSQL | Cloud (Neon) | **Neon.tech** | N/A | N/A |
| **Repository**| Monorepo | Entire Folder | **GitHub** | N/A | N/A |

---

## ⚡ Deployment Troubleshooting

1. **Prisma Client not found error on Render**:
   - Make sure `bunx prisma generate` is included in the Render **Build Command**.
2. **Root Directory Not Selected**:
   - Always specify `apps/backend` for Render and `apps/frentend` for Vercel in project settings.
3. **Mixed Content / CORS error**:
   - Ensure `NEXT_PUBLIC_API_URL` on Vercel uses `https://` (e.g. `https://realdense-backend.onrender.com`).
