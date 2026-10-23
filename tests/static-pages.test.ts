import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { test } from 'node:test';

const root = process.cwd();
const publicDir = join(root, 'public');
const productionOrigin = 'https://thai-driving-license-exam.vercel.app';
const publishedPages = [
  'about.html',
  'contact.html',
  'disclaimer.html',
  'faq.html',
  'privacy.html',
  'study-guide.html'
];

function readPublicPage(file: string): string {
  return readFileSync(join(publicDir, file), 'utf8');
}

test('published information pages have essential SEO and document metadata', () => {
  for (const file of publishedPages) {
    const html = readPublicPage(file);
    assert.ok(html.includes('<html lang="en"'), `${file} should declare its document language`);
    assert.ok(html.includes('<title>') && html.includes('</title>'), `${file} should have a title`);
    assert.ok(html.includes('name="description"'), `${file} should have a description`);
    assert.ok(html.includes('name="robots" content="index,follow"'), `${file} should declare its index policy`);
    assert.ok(html.includes('<h1'), `${file} should have a main heading`);
    assert.ok(
      html.includes(`<link rel="canonical" href="${productionOrigin}/${file}"`),
      `${file} canonical should match the production page URL`
    );
  }
});

test('published information pages do not contain broken root-relative links', () => {
  for (const file of publishedPages) {
    const html = readPublicPage(file);
    const hrefs = [...html.matchAll(new RegExp('href="([^"]+)"', 'gi'))].map((match) => match[1]);

    for (const href of hrefs) {
      if (!href.startsWith('/') || href.startsWith('//')) continue;
      const pathname = decodeURIComponent(href.split(/[?#]/, 1)[0]);
      const target = pathname === '/' ? join(root, 'index.html') : resolve(publicDir, `.${pathname}`);
      assert.ok(
        target === join(root, 'index.html') || target.startsWith(publicDir + '/') || target === publicDir,
        `${file} link escapes the public directory: ${href}`
      );
      assert.ok(existsSync(target), `${file} has a missing internal link target: ${href}`);
    }
  }
});
