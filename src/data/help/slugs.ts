/**
 * Help-center article slugs — the ONE list other code references.
 *
 * Import `HELP_ARTICLES` (or `helpHref`) instead of typing "/help/..." strings,
 * so a renamed article is a type error rather than a dead link. Every slug here
 * must have an entry in src/data/help/articles.ts; tests/lib/help-center.test.ts
 * enforces that.
 */
export const HELP_ARTICLES = {
  gettingStartedStudents: 'getting-started-students',
  gettingStartedTeachers: 'getting-started-teachers',
  diagnosticsAndStudyPlans: 'diagnostics-and-study-plans',
  whatClearedMeans: 'what-does-cleared-mean',
  flashcardsLocked: 'why-are-my-flashcards-locked',
  reviewingFlashcards: 'reviewing-flashcards',
  studyModesAndDecks: 'study-modes-and-decks',
  joiningAClass: 'joining-a-class',
  competitiveMode: 'competitive-mode',
  classDiagnostics: 'class-diagnostics',
  classGamesAndLiveLessons: 'class-games-and-live-lessons',
  rosterImport: 'roster-import',
  glossary: 'glossary',
} as const

export type HelpArticleKey = keyof typeof HELP_ARTICLES
export type HelpArticleSlug = (typeof HELP_ARTICLES)[HelpArticleKey]

export const HELP_BASE_PATH = '/help'

/** `/help/<slug>` plus an optional in-page anchor (a heading or glossary term id). */
export function helpHref(slug: HelpArticleSlug, anchor?: string): string {
  return `${HELP_BASE_PATH}/${slug}${anchor ? `#${anchor}` : ''}`
}
