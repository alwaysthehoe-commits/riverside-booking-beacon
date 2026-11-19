# Riverside Booking Beacon

Independent, mobile-friendly front end that directs visitors to Riverside County Sheriff's official public inmate/booking search tools.

## Run locally
1. Install Node.js.
2. Run `npm install`.
3. Run `npm run dev`.
4. Run `npm run build` to create the production site in `dist/`.

## Official search links
- Search by name: https://jimspub.riversidesheriff.org/jimsacucgi/InmateInfo.html
- Search by booking date: https://jimspub.riversidesheriff.org/jimsacucgi/SearchByDate.html
- Sheriff's inmate information: https://www.riversidesheriff.org/213/Inmate-Information

The Sheriff's database is operated by Riverside County. This app opens the official search pages rather than scraping, copying, or storing sensitive booking data. The official system may change or be temporarily unavailable.

## Deployment
For Cloudflare Pages, connect this repository and use:
- Build command: `npm run build`
- Build output directory: `dist`

For a Cloudflare Worker serving static assets, configure the Worker to serve the Vite build output in `dist/`.

## Important
This is an independent public-information portal, not a government website. The Sheriff's database states its information should not be relied upon for legal action. Booking information may be delayed, incomplete, or changed. An arrest or charge is not proof of guilt. Verify details with the official Sheriff's Office.
