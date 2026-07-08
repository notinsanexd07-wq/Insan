# NOT INSANE - Creative Artist Portfolio

A highly optimized, fully responsive, and visually stunning interactive portfolio built with **React**, **Vite**, **Tailwind CSS**, and **Framer Motion**, powered by a backend server for persistent configurations.

## 🚀 Key Features

- **Ambient Backgrounds**: Fluid, responsive canvas animations customized dynamically in real-time.
- **Dynamic Live Stats**: Highlighting active creatives and current server telemetry.
- **Bento Grid Layout**: Organizes thumbnails, logos, custom skins, and social links in a cohesive grid.
- **Admin Portal**: A fully functional, local dashboard built directly into the site to modify links, layout, and copy in real-time.
- **Durable Persistence**: Configuration syncs automatically to a server-side JSON store and uses fallback local storage.

---

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS, Framer Motion, Lucide Icons.
- **Backend**: Express (Node.js) for persistent layout state.
- **Build System**: Vite (frontend) & esbuild (server-side production compiler).

---

## 📦 Project Structure

```text
├── assets/                  # Core static design assets
├── src/
│   ├── assets/              # User-uploaded dynamic images (avatar, projects)
│   ├── components/
│   │   ├── AdminPortal.tsx  # Interactive administration dashboard
│   │   ├── AmbientBackground.tsx # High-performance canvas particle loops
│   │   └── LazyImage.tsx    # Smooth image rendering with fade-in effects
│   ├── App.tsx              # Main layout, router, and configuration hub
│   ├── defaultConfig.ts     # Pre-configured layout default values
│   ├── index.css            # Global styling & Tailwind configuration
│   ├── main.tsx             # Application mount point
│   └── types.ts             # Shared layout types
├── server.ts                # Express backend & API handler
├── package.json             # Scripts & package configurations
└── vite.config.ts           # Vite Bundler settings
```

---

## ⚙️ How to Run Locally

### 1. Install Dependencies
```bash
npm install
```

### 2. Run in Development Mode
Starts both the frontend dev environment and Express API proxy.
```bash
npm run dev
```
Open `http://localhost:3000` in your browser.

### 3. Build & Run in Production Mode
Builds client assets, bundles the backend server into standard Node CJS, and starts the system.
```bash
npm run build
npm start
```
