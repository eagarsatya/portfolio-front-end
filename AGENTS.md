<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Cursor Cloud specific instructions

This is a single-product **Next.js 16 (App Router) + React 19 + TypeScript** portfolio front-end (`portfolio-front-end`). There is no backend, database, or auxiliary service — running the Next.js dev server is all that is needed to test the product end-to-end.

- Run the app (dev): `npm run dev` — serves on `http://localhost:3000`. Routes: `/`, `/about`, `/social`, `/spotify`. Standard scripts are in `package.json` (`dev`/`build`/`start`/`lint`).
- Lint is currently broken at the repo level, not the environment: `npm run lint` runs `next lint`, which was **removed in Next.js 16**, so it errors with `Invalid project directory provided, no such directory: .../lint`. This is a repo issue (script not yet migrated to the ESLint CLI), not a setup problem.
- `next dev`/`next build` will auto-modify `tsconfig.json` (sets `moduleResolution` to `bundler`) and auto-generate `AGENTS.md` and `CLAUDE.md` (the `nextjs-agent-rules` block). These uncommitted changes reappear on every run; committing them keeps the tree clean, or ignore them if you don't want them tracked. `next-env.d.ts` is likewise regenerated.
- No lockfile is committed (`package-lock.json` is gitignored), so `npm install` resolves fresh each time.
- Optional: the `/spotify` page's "Authorize Me!" OAuth flow needs `NEXT_PUBLIC_SPOTIFY_CLIENT_ID`, `NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET`, and `NEXT_PUBLIC_SPOTIFY_REDIRECT_URI` (in `.env.local`) plus a real Spotify developer app. The rest of the site works without them.
