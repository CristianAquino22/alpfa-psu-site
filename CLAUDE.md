
# ALPFA Penn State Chapter Site

## Context
Club website for ALPFA at Penn State University Park, built and maintained by
Cristian Aquino (Internal Relations, eBoard). Doubles as a portfolio project.

## Stack
- Next.js (App Router), TypeScript, Tailwind CSS v4
- Deployed on Vercel, auto-deploys from `main`

## Conventions
- Brand color is `--alpfa-blue` (#1b4271), registered in globals.css @theme.
  Use the `alpfa-blue` Tailwind utility, never the raw hex.
- Reusable components live in `src/components/`, one component per file.
- Data (events, eboard members) lives in typed arrays at the top of the page
  file, rendered via .map(). Adding an entry should be a one-line change.
- Commit format: `type: short description` where type is one of
  feat / fix / style / content / chore

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