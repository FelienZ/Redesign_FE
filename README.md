# 🎮 IGRS Redesign Frontend

> Redesign website **Indonesia Game Rating System (IGRS)** menggunakan **React + TypeScript + Vite + Tailwind CSS v4 + shadcn/ui**.

![React](https://img.shields.io/badge/React-19-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Vite](https://img.shields.io/badge/Vite-7-purple)
![TailwindCSS](https://img.shields.io/badge/Tailwind-v4-38BDF8)
![shadcn/ui](https://img.shields.io/badge/shadcn-ui-black)

---

# 📖 Deskripsi

Project ini merupakan redesign frontend website IGRS dengan fokus pada:

- Modern UI
- Responsive Layout
- Reusable Component
- Scalable Styling
- Ready untuk integrasi Backend (NestJS)

Frontend dibangun menggunakan pendekatan component-based sehingga mudah dikembangkan oleh anggota tim.

---

# 🚀 Tech Stack

| Technology       | Keterangan            |
| ---------------- | --------------------- |
| React 19         | Library UI            |
| TypeScript       | Type Safety           |
| Vite             | Build Tool            |
| Tailwind CSS v4  | Utility CSS           |
| shadcn/ui        | Reusable UI Component |
| Lucide React     | Icon Library          |
| React Router DOM | Routing               |
| Fontsource       | Local Font Package    |

---

# 📂 Struktur Project

```text
src
│
├── assets/
│   ├── data/
│   └── images/
│
├── components/
│   │
│   ├── ui/
│   │   ├── button.tsx
│   │   ├── badge.tsx
│   │   ├── input.tsx
│   │   └── ...
│   │
│   └── custom/
│       ├── heroSection.tsx
│       ├── gameSection.tsx
│       ├── ratingSection.tsx
│       ├── newsSection.tsx
│       ├── aboutSection.tsx
│       └── addSection.tsx
│
├── layout/
│   ├── navbar.tsx
│   ├── footer.tsx
│   └── layout.tsx
│
├── pages/
│   └── dashboard.tsx
│
├── utils/
│   ├── RouterProvider.tsx
│   └── styleConfig.ts
│
├── lib/
│
├── index.css
├── main.tsx
└── ...
```

---

# 📌 Struktur Folder

| Folder            | Fungsi                                 |
| ----------------- | -------------------------------------- |
| assets            | Menyimpan asset gambar dan mock data   |
| components/ui     | Komponen bawaan shadcn/ui              |
| components/custom | Komponen khusus halaman IGRS           |
| layout            | Layout global (Navbar, Footer, Layout) |
| pages             | Halaman utama                          |
| utils             | Routing dan konfigurasi utilitas       |
| lib               | Utility helper (cn(), dll)             |

---

# 🎨 Design System

Project menggunakan Design System sederhana agar styling konsisten.

## Typography

| Fungsi      | Font          |
| ----------- | ------------- |
| Heading     | Space Grotesk |
| Body        | Inter         |
| Pixel Style | Jersey 10     |

Contoh penggunaan

```tsx
<h1 className="font-heading">
    Hero Title
</h1>

<p className="font-sans">
    Description
</p>

<span className="font-pixel">
    13+
</span>
```

---

# 🎨 Color Palette

## Base Color

| Variable   | Fungsi                  |
| ---------- | ----------------------- |
| background | Background utama        |
| foreground | Warna text utama        |
| card       | Background Card         |
| primary    | Button utama            |
| secondary  | Surface kedua           |
| muted      | Text sekunder           |
| border     | Border seluruh komponen |

Semua warna berada pada

```text
src/index.css
```

menggunakan CSS Variable.

---

## Rating Color

Project menyediakan warna khusus untuk setiap klasifikasi usia.

| Rating | Variable          |
| ------ | ----------------- |
| 3+     | --rating-3-solid  |
| 7+     | --rating-7-solid  |
| 13+    | --rating-13-solid |
| 15+    | --rating-15-solid |
| 18+    | --rating-18-solid |

Contoh

```tsx
<div
className="text-[var(--rating-13-solid)]"
>
```

---

# 🧩 Styling

Project menggunakan kombinasi

- Tailwind CSS
- CSS Variable
- shadcn/ui Theme

Semua konfigurasi global berada pada

```text
src/index.css
```

meliputi

- Font
- Color Palette
- Radius
- Theme
- Rating Color
- Utility Class

---

# 🧱 Komponen

Komponen dibagi menjadi dua kategori.

## 1. UI Component

Berasal dari shadcn/ui.

Contoh

```text
Button

Badge

Input

Card

Dialog

Dropdown
```

Tidak disarankan mengubah struktur internal kecuali diperlukan.

---

## 2. Custom Component

Berisi section khusus halaman.

Contoh

```text
Hero Section

Game Section

Rating Section

News Section

About Section

CTA Section
```

Komponen ini bebas dikembangkan sesuai kebutuhan.

---

# 📐 Layout

Layout utama

```text
Navbar

↓

Hero

↓

Rating Statistic

↓

Rating Category

↓

About

↓

Game

↓

News

↓

CTA

↓

Footer
```

Semua section berada pada folder

```text
components/custom
```

---

# 📦 Asset

Asset disimpan pada

```text
assets/
```

berisi

- Logo
- Background
- Hero Image
- Mock Data
- Pixel Asset (Coming Soon)

---

# 📱 Responsive

Target responsive

| Device  | Breakpoint |
| ------- | ---------- |
| Mobile  | < 768px    |
| Tablet  | ≥ 768px    |
| Laptop  | ≥ 1024px   |
| Desktop | ≥ 1280px   |

---

# 🔧 Development

Install dependency

```bash
npm install
```

Menjalankan project

```bash
npm run dev
```

Build Production

```bash
npm run build
```

Preview

```bash
npm run preview
```

---

# 📋 Coding Convention

## Component

Gunakan PascalCase

```text
HeroSection.tsx
```

## Hook

Gunakan camelCase, ex:

```text
useGames.ts
```

## Utility

Gunakan camelCase

```text
styleConfig.ts
```

---

# 🌳 Git Branch Strategy

| Branch         | Keterangan        |
| -------------- | ----------------- |
| dev            | Development       |
| collaborations | Branch Kolaborasi |

Contoh

---

# 🔮 Roadmap

- [x] Landing Page
- [ ] Responsive Layout
- [ ] Design System
- [ ] Backend Integration
- [ ] API Fetching
- [ ] Skeleton Loading
- [ ] Animation
- [ ] Deployment

---

# 🤝 Developer Notes

- Gunakan component reusable sebisa mungkin.
- Hindari hardcode color, gunakan CSS Variable.
- Gunakan utility Tailwind sebelum menambahkan CSS baru.
- Semua styling global dikelola melalui `index.css`.
- Komponen UI bawaan shadcn diusahakan tetap reusable.

---

# 👥 Team

Frontend Developer

Backend Developer - Rajab (FelienZ)

UI/UX Designer

---

Made with ❤️ by Team 3 for IGRS Redesign Challenge
