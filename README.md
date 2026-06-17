# Interactive Developer Portfolio V2

A high-end, responsive, and visually stunning developer portfolio built using React 19, Vite 8, Tailwind CSS v4, and framer-motion physics. The application features advanced interactive elements, including a GPU-accelerated WebGL background shader, interactive 3D holographic cards, scroll-triggered text scramble decoders, and physics-driven interactive buttons.

## ✨ Features

*   🌌 **WebGL Balatro-Style Background**: Liquid gradient shader utilizing WebGL rendering (`ogl` library) with mouse coordinate responsiveness.
*   🎴 **3D Holographic Profile Card**: Fully interactive 3D avatar card that tilts relative to mouse positioning, renders animated prism shine patterns, and leverages the HTML5 DeviceOrientation API for gyroscope-based tilt on mobile devices.
*   🔐 **Decrypted Text Scrambler**: Cyberpunk-style letter decoder animation that triggers when components mount or when user hovers over titles.
*   🧲 **Magnetic Button physics**: UI elements that naturally pull toward the user's cursor utilizing custom spring simulation mechanics.
*   🔍 **Spotlight Hover Cards**: Container grid that maps spotlight gradients following the user's mouse overlay.
*   💫 **Infinite Marquee Scroller**: Seamlessly sliding list showing technology stack skills with gradient visual masks.
*   📧 **Responsive Contact Form**: Client form directly integrated with FormSubmit for immediate spam-free mail delivery.

---

## 📂 Project Structure

```text
PortfolioV2/
├── public/                 # Static asset directory
├── src/
│   ├── assets/             # Images, screenshots, and visual assets
│   ├── components/         # Interactive UI components (WebGL, 3D card, Magnetic, etc.)
│   ├── sections/           # Vertical page segments (Hero, About, Projects, Contact)
│   ├── App.jsx             # Root layout and background coordinator
│   ├── index.css           # Global CSS and Tailwind CSS v4 theme variables
│   └── main.jsx            # Application mount entrypoint
├── IMPLEMENTATION.md       # In-depth technical architecture and mathematics documentation
├── package.json            # Scripts & dependencies
└── vite.config.js          # Vite configuration
```

---

## 🛠️ Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository and navigate into the folder:
   ```bash
   cd PortfolioV2
   ```

2. Install the project dependencies:
   ```bash
   npm install
   ```

### Running Locally

To run the Vite development server locally, execute:
   ```bash
   npm run dev
   ```

### Building for Production

To build optimized production assets, run:
   ```bash
   npm run build
   ```
The built files will be located in the `dist/` directory, ready to be deployed to your preferred host (Vercel, Netlify, Github Pages, etc.).

---

## 📖 Deep-Dive Documentation

For a comprehensive explanation of every component's inner workings, API props, mathematical tilt engines, CSS styles, and WebGL shader code, please check:
👉 **[IMPLEMENTATION.md](file:///home/rishab/Documents/React-Projects/PortfolioV2/IMPLEMENTATION.md)**
