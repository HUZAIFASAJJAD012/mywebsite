#!/usr/bin/env node
// Post-deploy SEO smoke test. Fetches raw HTML (no JavaScript), like a non-rendering crawler.
//
//   node scripts/seo-check.mjs [baseUrl]
//
// Defaults to the production site. Exits with a non-zero code if any check fails, so it can be
// run from CI after a deploy. Set EXPECT_NOINDEX=1 to verify a preview deployment instead.

const base = (process.argv[2] ?? "https://www.huzaifasajjaddev.online").replace(/\/$/, "");
const expectNoindex = process.env.EXPECT_NOINDEX === "1";

const sitemapXml = await (await fetch(`${base}/sitemap.xml`)).text();
const urls = [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
if (urls.length === 0) {
  console.error("FAIL  sitemap.xml has no <loc> entries");
  process.exit(1);
}

let failures = 0;
const fail = (url, message) => {
  failures += 1;
  console.error(`FAIL  ${url}  ${message}`);
};

for (const url of urls) {
  // Check the same path on the target host, even if the sitemap lists the production host.
  const target = `${base}${new URL(url).pathname}`.replace(/\/$/, "") || base;
  const response = await fetch(target, { redirect: "manual" });
  if (response.status !== 200) {
    fail(target, `status ${response.status}`);
    continue;
  }
  const html = await response.text();
  const title = html.match(/<title>([^<]*)<\/title>/)?.[1] ?? "";
  const description = html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? "";
  const h1Count = (html.match(/<h1[\s>]/g) ?? []).length;
  const robotsMeta = html.match(/<meta name="robots" content="([^"]*)"/)?.[1] ?? "";

  if (title.length < 10 || title.length > 75) fail(target, `title length ${title.length}`);
  if (description.length < 50 || description.length > 175) fail(target, `description length ${description.length}`);
  if (h1Count !== 1) fail(target, `expected one <h1>, found ${h1Count}`);
  if (!/<link rel="canonical" href="https?:\/\/[^"]+"/.test(html)) fail(target, "missing canonical");
  if (!html.includes('property="og:site_name"') && !target.endsWith("/contact/thank-you")) fail(target, "missing og:site_name");

  const noindex = /noindex/i.test(robotsMeta);
  if (expectNoindex && !noindex) fail(target, "preview should be noindex");
  if (!expectNoindex && noindex) fail(target, "production page is noindex");

  for (const [, json] of html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)) {
    try {
      JSON.parse(json);
    } catch {
      fail(target, "invalid JSON-LD");
    }
  }
}

console.log(`${urls.length} pages checked, ${failures} problem${failures === 1 ? "" : "s"}.`);
process.exit(failures ? 1 : 0);
