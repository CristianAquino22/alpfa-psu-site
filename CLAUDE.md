# ALPFA Penn State Chapter Site

## Context
Club website for ALPFA at Penn State University Park, built and maintained by
Cristian Aquino (Internal Relations, eBoard). Doubles as a portfolio project.

## Environment
- Windows, VS Code, PowerShell (no WSL)
- Node.js LTS, Git for Windows installed
- Repo: github.com/<your-username>/alpfa-psu-site
- Live at: alpfa-psu-site.vercel.app
- Vercel auto-deploys on every push to `main`

## Stack
- Next.js (App Router), TypeScript, Tailwind CSS v4
- No database yet — content lives in typed arrays in page files

## Conventions
- Brand color is `--alpfa-blue` (#1b4271), registered in globals.css @theme.
  Use the `alpfa-blue` Tailwind utility, never the raw hex.
- Reusable components live in `src/components/`, one component per file.
- Data (events, eboard members) lives in typed arrays at the top of the page
  file, rendered via .map(). Adding an entry should be a one-line change.
- Commit format: `type: short description` where type is one of
  feat / fix / style / content / chore

## Current state
- Pages built: Home, Events (structure only), Eboard, Membership, Resources (placeholder)
- Eboard page uses initials-in-circle fallback; real photos not added yet
- Events page has empty upcoming/past flyer arrays awaiting real flyers
- Site metadata still says "Create Next App" — needs fixing

## Working with me
I'm learning web development through this project and need to be able to
explain every change to my eBoard. Before making changes, explain the plan
and why. Prefer small, reviewable diffs over large refactors. Explain new
concepts (hooks, server vs client components, etc.) when they first come up.

## Roadmap
1. ✅ Setup + repo
2. ✅ Public pages, deployed
3. 🔶 Real content (Home ✅, Eboard ✅, Membership ✅, Events/Resources pending)
4. ⬜ Design pass — current styling is too plain, needs a modern look
5. ⬜ Google Form → Sheet attendance pipeline
6. ⬜ Auth (Auth.js + Google OAuth, eBoard email allowlist)
7. ⬜ Protected /dashboard reading Sheet data
8. ⬜ Charts + documentation