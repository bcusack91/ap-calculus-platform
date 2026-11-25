/**
 * AI opponent identity helpers for competitive matches.
 *
 * The bot's BEHAVIOUR (how long it takes on a question, how often it is
 * right) lives in bot-pacing.ts — `botAnswerPlan` / `planBotMove` — and is
 * driven by the course's exam pacing, the item's difficulty and its length.
 * This file used to carry a second copy of the old fixed-seconds table
 * (`simulateAIAnswer`), which nothing called; it was removed so there is one
 * source of bot timing.
 */

/**
 * Check if a user is an AI opponent
 * @param userId User ID to check
 * @returns True if user is AI bot
 */
export function isAIOpponent(userId: string, email?: string | null): boolean {
  return email === 'ai-opponent@studyai.com' || userId === 'ai-bot'
}

/**
 * The practice bots' accounts (AI Practice Bot, AI Teammate, AI Opponent 2)
 * all use this domain. They play practice matches, so they build up MMR, but
 * they are not competitors: rankings leave them out.
 */
export const AI_BOT_EMAIL_DOMAIN = '@studyai.com'

/** Prisma `where` fragment for a CompetitiveProfile that belongs to a real player, not a bot. */
export const REAL_PLAYER_PROFILE = {
  user: { NOT: { email: { endsWith: AI_BOT_EMAIL_DOMAIN } } },
} as const
