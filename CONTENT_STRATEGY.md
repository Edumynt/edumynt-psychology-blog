# Content Strategy — Psychology by Edumynt

Domain: https://psychology.edumynt.in
Audience: general audience + serious learners who want simple bilingual explanations.
Core promise: explain psychology so clearly that a 5-year-old can understand the idea, while preserving exam keywords.

## Languages
- Every post must exist in `src/content/posts/en/` and `src/content/posts/hi/`.
- Use the same `translationKey` in both files so the theme language switcher connects them.
- Hindi should be natural Hindi in Devanagari script with natural English terms with English terms where students actually use them.

## Categories
- Basics
- Learning & Memory
- Motivation
- Personality
- Social Psychology
- Mental Health
- Exam Psychology

## Publishing standard
- 3 bilingual posts per day.
- No repeated topic unless it is a deeper follow-up with a clearly different search intent.
- Easy language first, SEO second — but both matter.
- Include definition, example, exam angle, common mistakes, mini summary, and FAQ where useful.
- Use MDX only when needed; normal Markdown is fine.

## Learning loop
Record feedback, banned topics, preferred structures, and corrections in `PROJECT_MEMORY.md`. Future AI runs must read that file before writing.

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

## Mandatory fact-checking and revision workflow
- Before first publish, every post must pass a fact-check pass.
- Before any later revision, the changed claims must be fact-checked again.
- Fact-check agent must verify definitions, examples, dates, names, theories, grammar rules, and exam-facing claims against reliable sources.
- If a claim is uncertain, simplify it, qualify it, or remove it. Do not publish confident nonsense.
- Keep a short `Fact-check notes` entry in the post creation/revision log with sources consulted or checks performed.

## Internal linking workflow
- Before publishing, scan existing posts in the same blog.
- If a post mentions a related concept that already has a post, link the first natural mention to that post.
- Do not over-link. Prefer 3–8 useful internal links per long post.
- Use descriptive anchor text, not “click here”.
- When a new post fills a topic gap, later audit older related posts and add links to it.

## Image workflow
- Important posts should include a featured image when useful for SEO/social sharing and visual quality.
- Use a consistent Edumynt visual style: clean educational illustration, bright but calm colors, minimal clutter, no tiny unreadable text, concept-focused.
- Store images under `src/assets/images/posts/<slug>/` when generated or curated locally.
- Set `heroImage` and `heroImageAlt` in frontmatter.
- Alt text must explain the educational concept, not just say “image”.

## Agent roles added
- `fact-check-agent`: verifies factual accuracy before publish and before revisions.
- `internal-link-agent`: adds relevant links between related posts.
- `image-agent`: creates/selects consistent featured images and alt text.

## Psychology topic research sources
- For psychology topic ideas and structure, get inspiration from Verywell Mind and Simply Psychology.
- Do not copy their text, outlines, branding, or proprietary wording.
- Use them only to understand learner-friendly topic demand, common explanations, and gaps.
- Prefer simple, exam-useful explanations with independent fact-checking.

## Revised editorial standard — depth over ELI5
- Do NOT optimize for “explain like a 5-year-old.” That was rejected.
- Write in-depth, well-structured, serious-but-readable articles for a general audience.
- Default audience: curious learners, students, teachers, readers, and general web searchers.
- Competitive exam angle may be included only when naturally useful; it must not dominate the post.
- Every post needs real substance: definitions, context, nuance, examples, common misunderstandings, applications, and further reading/internal links where relevant.
- Avoid thin template sections and repeated filler.
- Prefer fewer high-quality posts over many shallow posts.

## Revised image standard
- Do not publish cheap autogenerated filler SVGs as featured images.
- Featured images must look intentionally designed, consistent, and useful.
- If high-quality images are not available, publish without hero image rather than using bad art.
- For now, create image concepts/prompts for approval before bulk-generating featured images.
