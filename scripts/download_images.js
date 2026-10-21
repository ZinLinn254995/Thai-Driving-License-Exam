const fs = require('fs');
const https = require('https');
const path = require('path');

const html = fs.readFileSync('thaidrive_raw.html', 'utf8');
const dir = path.join(process.cwd(), 'public', 'exam_images');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

const re = /<li style="margin-bottom: 30px;">([\s\S]*?)<\/ul>\s*<\/li>/g;
let match;
let images = [];
let idx = 1;

while ((match = re.exec(html)) !== null) {
  const block = match[1];
  const imgMatch = block.match(/<img[^>]+src="([^"]+)"/);
  if (imgMatch) {
    const rawUrl = imgMatch[1].trim();
    const cleanUrl = rawUrl.startsWith('http') ? rawUrl : 'https://thaidriveexam.com/' + rawUrl.replace(/^\//, '');
    const filename = 'q_' + String(idx).padStart(3, '0') + '.webp';
    images.push({ idx, url: cleanUrl, filename });
  }
  idx++;
}

console.log('Total images to download:', images.length);

async function downloadAll() {
  let done = 0;
  for (const item of images) {
    const dest = path.join(dir, item.filename);
    if (fs.existsSync(dest) && fs.statSync(dest).size > 500) {
      done++;
      continue;
    }
    await new Promise((resolve) => {
      https.get(item.url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
        if (res.statusCode === 200) {
          const fileStream = fs.createWriteStream(dest);
          res.pipe(fileStream);
          fileStream.on('finish', () => {
            fileStream.close();
            done++;
            resolve();
          });
        } else {
          console.error('Failed', item.idx, res.statusCode);
          resolve();
        }
      }).on('error', (err) => {
        console.error('Err', item.idx, err);
        resolve();
      });
    });
    // small delay
    await new Promise(r => setTimeout(r, 20));
  }
  console.log('Downloaded successfully:', done, 'out of', images.length);
}

downloadAll();
