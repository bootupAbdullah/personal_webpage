import { useEffect } from 'react';

const SITE_URL = 'https://akddev.co';
const SITE_NAME = 'akddev.co';

function upsertMetaDescription(content) {
  let tag = document.querySelector('meta[name="description"]');
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('name', 'description');
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

function upsertCanonical(href) {
  let tag = document.querySelector('link[rel="canonical"]');
  if (!tag) {
    tag = document.createElement('link');
    tag.setAttribute('rel', 'canonical');
    document.head.appendChild(tag);
  }
  tag.setAttribute('href', href);
}

// Sets per-page title/description/canonical for search crawlers (which render JS).
// Social link-unfurlers (Slack, X, Discord, ...) don't run JS, so og:*/twitter:*
// tags stay static site-wide in index.html rather than being set here.
export default function useDocumentMeta({ title, description, path = '' }) {
  useEffect(() => {
    document.title = title ? `${title} — ${SITE_NAME}` : SITE_NAME;
    if (description) upsertMetaDescription(description);
    upsertCanonical(`${SITE_URL}${path}`);
  }, [title, description, path]);
}
