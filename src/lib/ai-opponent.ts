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
