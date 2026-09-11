#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const POSTS_DIR = path.join(__dirname, '..', 'posts');
const OUTPUT = path.join(POSTS_DIR, 'data.json');

function parseFrontmatter(content) {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return { data: {}, body: content };

  const raw = match[1];
  const data = {};
  raw.split('\n').forEach(line => {
    const idx = line.indexOf(':');
    if (idx === -1) return;
    const key = line.slice(0, idx).trim();
    let val = line.slice(idx + 1).trim();

    if (val.startsWith('[') && val.endsWith(']')) {
      val = val.slice(1, -1).split(',').map(s => s.trim().replace(/^["']|["']$/g, ''));
    } else {
      val = val.replace(/^["']|["']$/g, '');
    }
    data[key] = val;
  });

  const body = content.slice(match[0].length).trim();
  return { data, body };
}

function slugFromDir(dirName) {
  return dirName
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function scanPosts() {
  if (!fs.existsSync(POSTS_DIR)) {
    console.error('Posts directory not found:', POSTS_DIR);
    process.exit(1);
  }

  const entries = fs.readdirSync(POSTS_DIR, { withFileTypes: true });
  const posts = [];

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    if (entry.name.startsWith('.') || entry.name === 'assets') continue;

    const dirPath = path.join(POSTS_DIR, entry.name);
    const slug = slugFromDir(entry.name);
    const languages = {};
    const titles = {};
    const descriptions = {};
    let meta = null;

    for (const lang of ['en', 'es']) {
      const filePath = path.join(dirPath, `index.${lang}.md`);
      if (!fs.existsSync(filePath)) continue;

      const content = fs.readFileSync(filePath, 'utf-8');
      const { data, body } = parseFrontmatter(content);

      titles[lang] = data.title || entry.name;
      descriptions[lang] = data.description || '';

      if (!meta) {
        meta = {
          slug,
          dir: entry.name,
          date: data.date || '2026-01-01',
          tags: data.tags || [],
          image: data.image || null,
        };
      }

      languages[lang] = {
        file: `index.${lang}.md`,
        wordCount: body.split(/\s+/).filter(Boolean).length,
      };

      if (data.image) {
        const imgPath = path.join(dirPath, data.image);
        if (!fs.existsSync(imgPath)) {
          console.warn(`  Warning: image "${data.image}" not found in ${entry.name}/`);
        }
      }
    }

    if (Object.keys(languages).length === 0) continue;

    posts.push({ ...meta, title: titles, description: descriptions, languages });
  }

  posts.sort((a, b) => new Date(b.date) - new Date(a.date));
  return posts;
}

function main() {
  console.log('Building blog data...');
  const posts = scanPosts();

  fs.mkdirSync(path.dirname(OUTPUT), { recursive: true });
  fs.writeFileSync(OUTPUT, JSON.stringify(posts, null, 2));

  console.log('Generated ' + OUTPUT);
  console.log('  ' + posts.length + ' post(s) found');

  posts.forEach(function(p) {
    const langs = Object.keys(p.languages).join(', ');
    console.log('  - ' + p.slug + ' [' + langs + '] "' + (p.title.en || p.title) + '"');
  });
}

main();
