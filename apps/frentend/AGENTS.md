<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Realdense Frontend — AI Agent Instructions & Guidelines

Welcome to the **Realdense Frontend** codebase (`apps/frentend`). This document outlines project architecture, coding standards, visual design tokens, and best practices for AI agent assistance.

---

## 🛠️ Technology Stack

- **Framework**: Next.js 16 (App Router)
- **UI Library**: React 19
- **Styling**: TailwindCSS v4 (`@tailwindcss/postcss`)
- **Animation**: Motion / Framer Motion (`motion/react`)
- **Language**: TypeScript 5
- **Package Manager**: Bun (`bun@1.3.4`)

---

## 📁 Directory Structure & Responsibilities

```
apps/frentend/
├── app/
│   ├── layout.tsx         # Root layout (Fonts, Metadata, fixed header alignment)
│   ├── page.tsx           # Home page entry (Navbar, Hero background, OurPromise)
│   ├── globals.css        # Tailwind v4 import directives & global styles
│   └── icon.png           # Website icon / favicon
├── components/
│   ├── Navbar.tsx         # Fixed navigation header with dropdowns & mobile drawer
│   ├── HomePage.tsx       # Hero section, trust badges, before/after cards
│   ├── HeroBackground.tsx # SVG blue wave ambient background graphic
│   └── OurPromise.tsx     # 3x2 feature grid with square icon badges & grid lines
├── public/
│   ├── assets/            # Logos (logo.png), before/after comparison images
│   └── patients/          # Avatar stack images
├── Design.md              # Design system tokens, component sets, Figma report
└── package.json           # Frontend dependencies & scripts
```

---

## 🎨 Visual Design System & Design Tokens

When creating or modifying components, strictly adhere to the established brand palette:

| Token Role | Value | Tailwind Class / Style | Usage |
| :--- | :--- | :--- | :--- |
| **Primary Navy** | `#001e56` | `text-[#001e56]`, `bg-[#001e56]` | Main headlines, dark buttons, primary text |
| **Brand Cyan Accent**| `#0cb0f2` / `#0196e3` | `text-[#0cb0f2]`, `bg-[#0cb0f2]` | Hero accents, active indicators, eyebrow labels |
| **Light Blue Tint** | `#edf6fe`, `#e9f4fd` | `bg-[#edf6fe]`, `bg-[#e9f4fd]` | Card default fills, dropdown panel background |
| **Slate / Dividers** | `#64748B`, `#94a3b8` | `text-[#64748B]`, `bg-[#94a3b8]` | Eyebrows, grid divider lines between cards |

---

## 📌 Coding Standards & Guidelines for Agents

### 1. Next.js Image Component Usage
- Always provide explicit `width` and `height` props.
- When setting fluid heights/widths, include matching `w-auto h-auto` in both `className` and `style` to prevent layout aspect ratio warnings:
  ```tsx
  <Image
    src="/assets/logo.png"
    alt="Realdense Clinic"
    width={148}
    height={52}
    className="w-auto h-auto object-contain"
    style={{ width: "auto", height: "auto" }}
    priority
  />
  ```

### 2. Layout & Fixed Navbar Alignment
- The header in `Navbar.tsx` is fixed (`fixed top-0 left-0 right-0 z-50`).
- Ensure root page containers use `pt-[76px]` or adequate top padding so header elements never obscure hero titles or content.

### 3. Hydration & Extension Protection
- To prevent hydration errors caused by browser extensions (e.g. Grammarly injecting body attributes), keep `suppressHydrationWarning` on `<html>` and `<body>` tags in `app/layout.tsx`.

### 4. Interactive Components
- Mark client-side interactive files with `"use client";` at line 1.
- Use `motion/react` for smooth scroll/fade animations, preserving performance and accessibility.

---

## 🚀 Common Commands

```bash
# Development server (Port 3000)
bun run dev

# Production build check
bun run build

# TypeScript type check
bun run check-types
```
