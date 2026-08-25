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

Copy `.env.example` to `.env.local` and configure the server-only `SMTP_*` values and `CONTACT_TO_EMAIL`. `CONTACT_WEBHOOK_URL` can remain as an optional fallback. Without either delivery method, the form safely directs visitors to email or WhatsApp.

The canonical production origin is `https://www.huzaifasajjaddev.online`. Keep `NEXT_PUBLIC_SITE_URL` set to that exact HTTPS origin so canonical URLs, sitemap entries and structured data remain consistent.

## Search launch checklist

- Keep `NEXT_PUBLIC_SITE_URL` set to `https://www.huzaifasajjaddev.online` and update `SITE_LAST_MODIFIED` after meaningful content changes.
- Set `NEXT_PUBLIC_LINKEDIN_URL` to Huzaifa's exact public LinkedIn profile URL. It is then included in the visible footer and Person structured data alongside the verified GitHub and Freelancer profiles.
- Configure both `www.huzaifasajjaddev.online` and `huzaifasajjaddev.online` in Vercel, then make `www` primary so the bare domain receives a valid certificate and redirects permanently.
- Add the domain to Google Search Console and Bing Webmaster Tools.
- Add the provided verification tokens as `GOOGLE_SITE_VERIFICATION` and `BING_SITE_VERIFICATION` in the production environment.
- Submit `/sitemap.xml` in both webmaster tools after deployment and inspect the homepage, `/gigs` and the individual `/services/*` URLs.
- Use Search Console performance data to improve pages based on real queries; no ranking position is guaranteed.

## Content

Profile and contact details live in `src/content/profile.ts`. Project records live in `src/content/projects.ts`. See `CONTENT_CHECKLIST.md` for verified assets and information still required before production launch.
