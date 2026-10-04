// Post-build step: writes dist/blog/<slug>.html for each post, a copy of
// the SPA shell with that post's title/description/og:*/twitter:* tags baked in.
// Social link-unfurlers (LinkedIn, Slack, X, ...) don't run JS, so they only see
// the raw HTML. The app itself boots exactly as before from the same bundle.
//
// Hosting: static hosts serve a real file before the SPA fallback. Netlify maps
// /blog/<slug> to <slug>.html with no redirect; nginx needs `$uri.html` in try_files.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { posts } from '../src/posts/index.js';

const SITE_URL = 'https://akddev.co';
const SITE_NAME = 'akddev.co';

const distDir = join(dirname(fileURLToPath(import.meta.url)), '..', 'dist');
const shell = readFileSync(join(distDir, 'index.html'), 'utf8');

const escapeAttr = (value) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

// Replaces the content of an existing tag; fails the build if the tag is missing
// so a change to index.html can't silently ship generic cards again.
function replaceTag(html, pattern, replacement, label) {
  if (!pattern.test(html)) {
    throw new Error(`prerender-post-meta: could not find ${label} in dist/index.html`);
  }
  return html.replace(pattern, replacement);
}

function setMeta(html, attr, key, value) {
  const pattern = new RegExp(`<meta ${attr}="${key}" content="[^"]*"\\s*/?>`);
  return replaceTag(html, pattern, `<meta ${attr}="${key}" content="${escapeAttr(value)}" />`, key);
}

for (const post of posts) {
  const url = `${SITE_URL}/blog/${post.slug}`;
  const title = `${post.title} — ${SITE_NAME}`;
  const image = `${SITE_URL}${post.heroImage || post.image}`;

  let html = shell;
  html = replaceTag(html, /<title>[^<]*<\/title>/, `<title>${escapeAttr(title)}</title>`, '<title>');
  html = replaceTag(
    html,
    /<link rel="canonical" href="[^"]*"\s*\/?>/,
    `<link rel="canonical" href="${url}" />`,
    'canonical',
  );
  html = setMeta(html, 'name', 'description', post.subtitle);
  html = setMeta(html, 'property', 'og:type', 'article');
  html = setMeta(html, 'property', 'og:title', post.title);
  html = setMeta(html, 'property', 'og:description', post.subtitle);
  html = setMeta(html, 'property', 'og:image', image);
  html = setMeta(html, 'property', 'og:url', url);
  html = setMeta(html, 'name', 'twitter:title', post.title);
  html = setMeta(html, 'name', 'twitter:description', post.subtitle);
  html = setMeta(html, 'name', 'twitter:image', image);

  const outDir = join(distDir, 'blog');
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, `${post.slug}.html`), html);
  console.log(`prerender-post-meta: wrote blog/${post.slug}.html`);
}
