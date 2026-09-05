# Recycle Hub — Admin Portal

This is the admin workspace for my Recycle Hub project. It gives authorised administrators a focused view of the marketplace so they can review activity and help keep the platform organised.

## What it’s for

- Admin-only sign-in and access control
- Reviewing marketplace activity and user information
- Managing the operational side of buyers, sellers, and listings
- Keeping administrative workflows separate from the public marketplace

The portal uses the shared API in [`../Recycle-Hub-Backend`](../Recycle-Hub-Backend). The public marketplace is in [`../Recycle-Hub-Frontend`](../Recycle-Hub-Frontend).

## Run it locally

You’ll need Node.js and npm installed.

```bash
npm install
npm run dev
```

Then open `http://localhost:3000` in a browser. If the marketplace frontend is running at the same time, use a different local port for one of the two Next.js apps.

## Useful commands

```bash
npm run dev      # Start the development server
npm run build    # Check the build locally
npm run lint     # Check the code style
```

## Project layout

- `src/app` — admin pages and routes
- `src/components` — reusable admin UI
- `src/context` — authentication and shared state
- `src/constants` — API and application configuration
- `public` — static assets
