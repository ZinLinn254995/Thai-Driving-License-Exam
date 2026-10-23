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
    assert.match(html, /<html\\s+lang="en"/i, `${file} should declare its document language`);
    assert.match(html, /<title>[^<]+<\\/title>/i, `${file} should have a title`);
    assert.match(html, /<meta\\s+name="description"\\s+content="[^"]+"/i, `${file} should have a description`);
    assert.match(html, /<meta\\s+name="robots"\\s+content="index,follow"/i, `${file} should declare its index policy`);
    assert.match(html, /<h1(?:\\s|>)/i, `${file} should have a main heading`);
    assert.match(
      html,
      new RegExp(`<link\\s+rel="canonical"\\s+href="${productionOrigin.replace(/[.*+?^${}()|[\\]\\\\]/g, '\\$&')}/${file.replace('.', '\\\\.')}"/i),
      `${file} canonical should match the production page URL`
    );
  }
});

test('published information pages do not contain broken root-relative links', () => {
  for (const file of publishedPages) {
    const html = readPublicPage(file);
    const hrefs = [...html.matchAll(/\\bhref="([^"]+)"/gi)].map((match) => match[1]);

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
