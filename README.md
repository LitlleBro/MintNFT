# Base Girl NFT - Mint Landing Mockup

A modern React + TypeScript NFT mint landing page mockup for **Base Girl NFT**.

This project is a creative, fan-made frontend demo focused on premium NFT-style UI/UX:
- dark blue futuristic design
- glassmorphism cards
- responsive layout
- smooth hover interactions
- mock mint flow with local state only

## Story Concept

**Bella Blue** starts as a shy accountant working with spreadsheets and reports.  
After discovering the Base ecosystem, she explores bridges, swaps, dApps, smart contracts, and NFTs, eventually transforming into **Base Girl** - an onchain superhero.

## What Is Included

- Hero section with CTA anchors
- Origin story section
- Before / After transformation cards
- NFT mint mock box
- Roadmap / activity path
- Final CTA and disclaimer footer

## Mock Mint Logic

This demo intentionally has **no blockchain connection** and **no wallet integration**.

- Mint action is local UI state only
- Quantity selector works locally (max 10)
- Mint is limited to one successful mock action per wallet preview (`1/1`)
- After mint:
  - celebratory visual effect is shown
  - mint button is replaced by minted status text

## Screens / Visual Assets

### Bella the Accountant
![Bella the Accountant](public/images/bella-accountant.png)

### Base Girl (Hero)
![Base Girl Hero](public/images/base-girl-hero.png)

### Base Girl NFT Preview
![Base Girl NFT](public/images/base-girl-nft.png)

## Tech Stack

- React 18
- TypeScript
- Vite
- Plain CSS (custom styling, no UI framework)

## Run Locally

```bash
npm install
npm run dev
```

Open: `http://localhost:5173/`

## Production Build

```bash
npm run build
npm run preview
```

## Disclaimer

Base Girl NFT is a creative fan-made mockup project.  
No official affiliation with Coinbase or Base.  
Blockchain minting is not enabled in this demo.
