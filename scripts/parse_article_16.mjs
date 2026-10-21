import * as cheerio from 'cheerio';
import fs from 'fs';

const html = fs.readFileSync('article_16.html', 'utf8');
const $ = cheerio.load(html);

console.log('Title:', $('title').text());

const imgs = [];
$('img').each((i, el) => {
  const src = $(el).attr('src') || $(el).attr('data-src');
  if (src) imgs.push(src);
});
console.log('Total img count:', imgs.length);
console.log('Images:', imgs.slice(0, 15));

// Check how article 15 was structured vs article 16
// Let's print out the main content container
const articleContent = $('.article-content, #article-content, .content, main, article').first();
console.log('Article container found:', articleContent.length);

// Let's search for questions with radio inputs or tables or question headers
let questions = [];

// Look for elements with question pattern
$('div, p, tr, li').each((i, el) => {
  const txt = $(el).clone().children().remove().end().text().trim();
  if (txt.match(/ข้อที่\s*\d+/) || txt.match(/^\d+[\.\s]/)) {
    // console.log('Match:', txt.substring(0, 80));
  }
});
