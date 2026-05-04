# DXF Studio — Website

A Next.js marketing site for DXF Studio, combining web design and photography services for small businesses.

## Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS + inline styles
- **Fonts**: Cormorant Garamond (display) + DM Sans (body)
- **Deployment**: Vercel

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 3. Build for production

```bash
npm run build
npm run start
```

---

## Deploy to Vercel

### Option A — Vercel CLI

```bash
npm install -g vercel
vercel
```

Follow the prompts. Vercel auto-detects Next.js.

### Option B — GitHub + Vercel Dashboard

1. Push this project to a GitHub repo
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import the GitHub repo
4. Vercel auto-detects Next.js — click Deploy
5. Connect your custom domain (`dxfstudio.com`) in Project Settings → Domains

---

## Customization

### Update contact email
In `components/Contact.js`, replace `hello@dxfstudio.com` with your real email.

### Update pricing
Edit the `plans` array in `components/Pricing.js`.

### Update services
Edit the `services` array in `components/Services.js`.

### Add Sanity CMS (future)
When ready to make content editable by clients:
```bash
npm install next-sanity @sanity/image-url
npx sanity@latest init
```

---

## Project Structure

```
dxfstudio/
├── app/
│   ├── globals.css       # Global styles, fonts, animations
│   ├── layout.js         # Root layout + metadata
│   └── page.js           # Main page (assembles all sections)
├── components/
│   ├── Navbar.js         # Sticky nav with mobile menu
│   ├── Hero.js           # Hero section with stats
│   ├── Services.js       # 4-service grid
│   ├── Difference.js     # Why DXF Studio section
│   ├── Pricing.js        # 3-tier pricing cards
│   ├── Contact.js        # Contact info section
│   └── Footer.js         # Footer
├── public/               # Static assets (add your logo, favicon here)
├── vercel.json
├── next.config.js
├── tailwind.config.js
└── package.json
```

---

## Brand Colors

| Name | Hex |
|------|-----|
| Copper | `#b07d62` |
| Pure white | `#ffffff` |
| Soft panel | `#fcfbf8` |
| Warm panel | `#f7efe6` |
| Section tint | `#faf7f2` |
| Main text | `#2d2926` |
| Secondary text | `#5a4f47` |
| Muted text | `#7a6b61` |
| Descriptor accent | `#9d8678` |
