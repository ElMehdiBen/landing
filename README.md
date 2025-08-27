# Black & White Landing Page

A stunning minimalist landing page built with Vue.js, TypeScript, and Tailwind CSS. Features floating icons with interactive popup cards.

## Features

- **Responsive Design**: Adapts perfectly to any screen size
- **Black & White Theme**: Clean, minimalist aesthetic
- **Floating Icons**: Interactive icons with hover effects and animations
- **Popup Cards**: Beautiful floating cards with detailed information
- **Smooth Animations**: Elegant transitions and floating effects
- **Full Screen**: Takes complete height and width of the screen

## Tech Stack

- Vue.js 3 with Composition API
- TypeScript for type safety
- Tailwind CSS for styling
- Vite for build tooling
- Custom SVG icons

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to the provided local URL (usually `http://localhost:5173`)

## Build for Production

```bash
npm run build
```

## Features Overview

- **7 Interactive Icons**: Home, Profile, Settings, Favorites, Ideas, Featured, and Global
- **Floating Animation**: Icons gently float with staggered timing
- **Hover Effects**: Icons scale and change appearance on hover
- **Popup System**: Click any icon to see a detailed information card
- **Responsive Layout**: Icons reposition based on screen size
- **Keyboard Accessible**: Can be closed with click outside or close button

## Customization

You can easily customize:
- Icon positions by modifying the `position` property in the `icons` array
- Colors by updating Tailwind classes
- Animation timing by adjusting the `delay` values
- Content by updating the `title` and `description` fields 