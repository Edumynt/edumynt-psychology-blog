/**
 * Generate static JSON API files from MDX content.
 * Reads posts directly from src/content/posts/en/ and outputs JSON to dist/api/posts/
 */
import { readFileSync, writeFileSync, mkdirSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const CONTENT_DIR = './src/content/posts/en';
const DIST_API_DIR = './dist/api/posts';

// Ensure output directory exists
mkdirSync(DIST_API_DIR, { recursive: true });

interface PostData {
  slug: string;
  title: string;
  description: string;
  pubDate: string;
  updatedDate: string | null;
  tags: string[];
  categories: string[];
  heroImage: string | null;
  heroImageAlt: string | null;
  toc: boolean;
  content?: string;
}

function parseFrontmatter(content: string): Record<string, any> {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};

  const frontmatter = match[1];
  const meta: Record<string, any> = {};
  let currentArray: string[] | null = null;

  for (const line of frontmatter.split('\n')) {
    const arrayMatch = line.match(/^  - (.+)$/);
    if (arrayMatch && currentArray) {
      currentArray.push(arrayMatch[1].replace(/^["']|["']$/g, ''));
      continue;
    }

    const kvMatch = line.match(/^(\w[\w]*):\s*(.*)$/);
    if (kvMatch) {
      const key = kvMatch[1];
      let value = kvMatch[2].trim();

      if (value === '') {
        meta[key] = [];
        currentArray = meta[key];
      } else {
        value = value.replace(/^["']|["']$/g, '');
        if (value === 'true') value = true;
        else if (value === 'false') value = false;
        meta[key] = value;
        currentArray = null;
      }
    }
  }

  return meta;
}

function parsePost(filePath: string): PostData | null {
  const raw = readFileSync(filePath, 'utf-8');
  const meta = parseFrontmatter(raw);
  if (!meta.title) return null;

  const contentMatch = raw.match(/^---\n[\s\S]*?\n---\n([\s\S]*)$/);
  const content = contentMatch ? contentMatch[1].trim() : '';
  const slug = filePath.split('/').pop()?.replace('.mdx', '') || '';

  return {
    slug,
    title: meta.title,
    description: meta.description || '',
    pubDate: meta.pubDate || '',
    updatedDate: meta.updatedDate || null,
    tags: meta.tags || [],
    categories: meta.categories || [],
    heroImage: meta.heroImage || null,
    heroImageAlt: meta.heroImageAlt || null,
    toc: meta.toc !== false,
    content,
  };
}

// Read all MDX files
const files = readdirSync(CONTENT_DIR).filter((f) => f.endsWith('.mdx'));
const posts: PostData[] = [];

for (const file of files) {
  const post = parsePost(join(CONTENT_DIR, file));
  if (post) posts.push(post);
}

// Sort by date (newest first)
posts.sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime());

// Generate index.json (list without content)
const index = posts.map(({ content: _c, ...rest }) => rest);
writeFileSync(join(DIST_API_DIR, 'index.json'), JSON.stringify(index, null, 2));

// Generate individual post files (with content)
for (const post of posts) {
  writeFileSync(
    join(DIST_API_DIR, `${post.slug}.json`),
    JSON.stringify(post, null, 2)
  );
}

console.log(`✅ Generated ${posts.length} post JSON files in ${DIST_API_DIR}/`);
console.log(`   - index.json (${posts.length} posts)`);
for (const post of posts) {
  console.log(`   - ${post.slug}.json`);
}
