# UK Dashboard

A React dashboard showing how the UK is doing, with statistics on immigration and crime sourced from the ONS and Home Office.

## Features

- **Overview** — headline KPIs across all topics
- **Immigration** — net migration trends, arrivals by reason, visa grants, asylum applications
- **Crime** — police recorded crime, crime by type, Crime Survey for England & Wales trends

Data sources: [ONS](https://www.ons.gov.uk) · [Home Office Immigration Statistics](https://www.gov.uk/government/collections/immigration-statistics)

## Development

```bash
npm install
npm run dev
```

## Docker (Ubuntu server)

```bash
docker compose up -d --build
# Available at http://<server-ip>:3000
```

## Tech stack

- React + Vite
- Recharts
- Nginx (production serving)
