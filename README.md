# Huzaifa Sajjad Portfolio

Production portfolio built with Next.js 16, React 19.2, TypeScript 6, Tailwind CSS 4.3 and Motion for React.

## Local development

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

## Quality checks

```bash
pnpm lint
pnpm typecheck
pnpm test
pnpm build
```

## Contact delivery

Copy `.env.example` to `.env.local` and configure `CONTACT_WEBHOOK_URL` with a server-side endpoint that accepts the validated JSON enquiry. Without it, the form safely directs visitors to email or WhatsApp.

Set `NEXT_PUBLIC_SITE_URL` to the production origin before deployment so canonical URLs, sitemap entries and structured data use the correct domain.

## Content

Profile and contact details live in `src/content/profile.ts`. Project records live in `src/content/projects.ts`. See `CONTENT_CHECKLIST.md` for verified assets and information still required before production launch.
