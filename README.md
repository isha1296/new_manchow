# New Manchow

New Manchow is a premium single-page restaurant website for an Indo-Chinese dining brand. The site follows the supplied "Obsidian Flame" direction: dark editorial layouts, warm flame accents, large Playfair Display headings, and food-led visual sections.

## Features

- Responsive landing page with sticky desktop navigation and mobile bottom actions
- Interactive menu tabs for starters, mains, noodles and rice, and soups
- Working cart drawer with quantity controls and live total
- Order modal with pickup and delivery flow
- Reservation modal for table requests
- Contact form with inline confirmation state
- Smooth in-page navigation and scroll reveal animation
- Gallery, story, visit, and footer sections

## Project Structure

```text
.
├── index.html     # Main HTML file
├── assets/        # Site imagery and static assets
├── vercel.json    # Vercel deployment, headers, and routing config
├── package.json   # NPM scripts and project metadata
├── .vercelignore  # Vercel deployment ignore rules
├── .gitignore     # Git ignore rules
├── DESIGN.md      # Source design system and brand direction
├── screen.png     # Reference design screenshot
└── README.md      # Project documentation
```

## Run Locally

Option 1: Using Node.js / npm
```bash
npm run dev
```

Option 2: Using Python HTTP server
```bash
python -m http.server 5500
```

Then open `http://localhost:5500/` or `http://localhost:3000/`.

## Deployment to Vercel

### Option 1: Vercel CLI (Recommended for instant deployment)
1. Install Vercel CLI globally (if not already installed):
   ```bash
   npm i -g vercel
   ```
2. Run deployment command in the project directory:
   ```bash
   vercel
   ```
3. Deploy to production:
   ```bash
   vercel --prod
   ```

### Option 2: GitHub / Git Repository Integration
1. Push this repository to GitHub, GitLab, or Bitbucket.
2. Go to [Vercel Dashboard](https://vercel.com/new).
3. Import your repository.
4. Vercel will automatically detect `vercel.json` and deploy your static site.

## Notes

The order, reservation, and contact flows are front-end interactions only. To make them production-ready, connect the forms to a backend service, email workflow, ordering system, or restaurant POS integration.
