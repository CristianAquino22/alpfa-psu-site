# ALPFA Penn State

The website for ALPFA at Penn State University Park, the
Association of Latino Professionals For America.

**Live at [alpfapsu.org](https://alpfapsu.org)**

## About

Built and maintained by Cristian Aquino, Internal Relations on the
chapter's executive board. The site covers who the chapter is, upcoming
and past events, the executive board, and how to get involved.

## Stack

- **Next.js** (App Router) with TypeScript
- **Tailwind CSS v4** — design tokens defined in `src/app/globals.css`
- **Fonts:** Newsreader, IBM Plex Sans, IBM Plex Mono via `next/font/google`
- **Deployed on Vercel** with Vercel Analytics

No database. Content lives in typed arrays at the top of each page file,
so adding an event or board member is a one-line change.

