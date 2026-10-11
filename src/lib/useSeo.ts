import { useEffect } from 'react';
import { company } from '../data/site';

type SeoOptions = {
  title: string;
  description: string;
  /** Path for the canonical URL, e.g. "/services". Defaults to the current pathname. */
  path?: string;
  /** Optional override for the social share image (absolute or site-relative URL). */
  image?: string;
};

const SITE_URL = company.url.replace(/\/$/, '');
const DEFAULT_IMAGE = `${SITE_URL}/media/hero-convergence.jpg`;

function setMeta(selector: string, attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setCanonical(href: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

/**
 * Lightweight, dependency-free SEO manager for the SPA. Updates the document
 * title, meta description, canonical URL and Open Graph / Twitter tags on each
 * page so crawlers and link previews see page-specific metadata.
 */
export function useSeo({ title, description, path, image }: SeoOptions) {
  useEffect(() => {
    const canonicalPath = path ?? window.location.pathname;
    const canonical = `${SITE_URL}${canonicalPath === '/' ? '/' : canonicalPath}`;
    const shareImage = image
      ? image.startsWith('http')
        ? image
        : `${SITE_URL}${image}`
      : DEFAULT_IMAGE;

    document.title = title;
    setMeta('meta[name="description"]', 'name', 'description', description);
    setCanonical(canonical);

    setMeta('meta[property="og:title"]', 'property', 'og:title', title);
    setMeta('meta[property="og:description"]', 'property', 'og:description', description);
    setMeta('meta[property="og:url"]', 'property', 'og:url', canonical);
    setMeta('meta[property="og:image"]', 'property', 'og:image', shareImage);

    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', title);
    setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description);
    setMeta('meta[name="twitter:image"]', 'name', 'twitter:image', shareImage);
  }, [title, description, path, image]);
}
