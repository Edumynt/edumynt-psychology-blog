# Content Strategy — Psychology by Edumynt

Domain: https://psychology.edumynt.com
Audience: competitive exam students + beginners who want simple bilingual explanations.
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
