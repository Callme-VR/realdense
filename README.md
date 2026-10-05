# 💇‍♂️ Realdense — Hair Restoration Clinic Monorepo

Welcome to the **Realdense** repository. This is a full-stack monorepo powered by **Bun**, **Turborepo**, **Next.js 16**, and **Express.js with Prisma ORM**.

---

## 🛠️ Tech Stack & Workspace Overview

- **Package Manager & Runtime**: [Bun](https://bun.sh) (`v1.3.4+`)
- **Monorepo Build System**: [Turborepo](https://turborepo.dev)
- **Frontend (`apps/frentend`)**: Next.js 16, React 19, TailwindCSS v4, Framer Motion (`motion/react`)
- **Backend (`apps/backend`)**: Express.js, Prisma 7 ORM, PostgreSQL (Neon Cloud DB)

---

## 🚀 Prerequisites

Ensure you have **Bun** installed globally:

```bash
# Verify Bun installation
bun --version
```

If you don't have Bun installed:
- **macOS / Linux**: `curl -fsSL https://bun.sh/install | bash`
- **Windows**: `powershell -c "irm bun.sh/install.ps1 | iex"`

---

## 📥 Installation

Clone the repository and install all workspace dependencies from the root directory using **Bun**:

```bash
# Install all dependencies across apps & packages
bun install
```

---

## 💻 Running the Application with Bun

### 1. Run Full Stack (Frontend + Backend Concurrently)

To start both the **Next.js Frontend** (Port `3000`) and **Express Backend** (Port `3001`) simultaneously from the monorepo root:

```bash
bun dev
```

### 2. Run Frontend Only (`apps/frentend`)

```bash
# Option A: From root using workspace filter
bun run --filter=frentend dev

# Option B: From the frontend directory
cd apps/frentend
bun dev
```
> Frontend will be running at **`http://localhost:3000`**

### 3. Run Backend Only (`apps/backend`)

```bash
# Option A: From root using workspace filter
bun run --filter=backend dev

# Option B: From the backend directory
cd apps/backend
bun dev
```
> Backend API will be running at **`http://localhost:3001`**

---

## 🗄️ Database Commands (Prisma & Bun)

All database scripts are executed inside `apps/backend`:

```bash
cd apps/backend

# Generate Prisma Client
bun run db:generate

# Push schema changes to Neon PostgreSQL database
bun run db:push

# Run database migrations
bun run db:migrate

# Open Prisma Studio (GUI Database Manager)
bun run db:studio
```

---

## 🏗️ Production Build

To test and build all packages and applications for production:

```bash
# Build all workspaces
bun run build
```

To build a specific app:

```bash
# Build Frontend only
bun run --filter=frentend build

# Build Backend only
bun run --filter=backend build
```

---

## 📁 Repository Structure

```
Realdense/
├── apps/
│   ├── frentend/          # Next.js 16 Web Application
│   └── backend/           # Express.js REST API + Prisma ORM
├── packages/
│   ├── eslint-config/     # Shared ESLint configuration
│   ├── typescript-config/ # Shared TypeScript configs
│   └── ui/                # Shared UI component library
├── Deployment.md          # Step-by-step deployment guide (Vercel & Render)
├── Design.md              # Figma design system analysis & tokens
└── package.json           # Monorepo root script definitions
```

---

## 📜 Deployment Guide

For full instructions on how to deploy the backend to **Render** and the frontend to **Vercel**, refer to [Deployment.md](./Deployment.md).
