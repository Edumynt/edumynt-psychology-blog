# AI Agent System — Psychology by Edumynt

The blog is managed by OpenClaw cron agents. Agents should read:
1. `PROJECT_MEMORY.md`
2. `CONTENT_STRATEGY.md`
3. Chirping Astro docs/README and current source structure
4. Existing posts in both locales

## Roles
- `content-agent`: finds topics and writes bilingual MDX posts.
- `seo-agent`: improves titles, descriptions, headings, internal links, tags, categories, and FAQ sections.
- `editor-agent`: checks simplicity, factual clarity, Hindi/English pairing, and duplicate risk.
- `publisher-agent`: builds, commits, pushes, and logs changes.

Daily cron can run as one combined agent using these roles in sequence.

## Hindi language rule
- Hindi posts must use Devanagari Hindi script, not romanized Hindi.
- English subject terms may remain in English where natural for students.
- Correct Hindi body style: `Psychology क्या है`, `Memory कैसे काम करती है`, `Parts of Speech क्या होते हैं`. Titles still stay pure English.
- Avoid romanized style: `Psychology kya hai`, `Memory kaise kaam karti hai`.

## Title, language, and image rules
- Post titles must be pure English and SEO-friendly. Do not use Hindi or Hinglish in titles/frontmatter titles.
- English is the primary/default language.
- Hindi/Devanagari is used only in the Hindi post body/content when users switch language.
- Hindi body style: Devanagari Hindi with natural English subject terms, e.g. `Psychology क्या है`, not `Psychology kya hai`.
- Every important post should have a consistent featured image/hero image when useful.
- Featured images must follow a consistent Edumynt visual style: clean educational illustration, minimal clutter, same color family, readable concept-focused composition.
- Agents should generate or choose images only when they improve clarity/SEO/social sharing, and must set `heroImage` + `heroImageAlt` correctly.
