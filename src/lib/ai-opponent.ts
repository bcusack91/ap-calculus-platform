/**
 * AI opponent simulation utilities for competitive matches
 */

interface AIAnswerResult {
  shouldAnswer: boolean
  answerIndex: number | null
  isCorrect: boolean
  delay: number
}

/**
 * Simulate AI opponent answering a question
 * @param questionIndex Current question index
 * @param correctAnswerIndex The correct answer index
 * @param difficulty AI difficulty level
 * @param totalQuestions Total number of questions in match
 * @returns AI answer decision
 */
export function simulateAIAnswer(
  questionIndex: number,
  correctAnswerIndex: number,
  difficulty: 'easy' | 'medium' | 'hard' = 'medium',
  totalQuestions: number = 16
): AIAnswerResult {
  // Difficulty settings
  const difficultySettings = {
    easy: {
      accuracy: 0.70, // 70% chance to answer correctly
      minResponseTime: 4000, // 4 seconds minimum
      maxResponseTime: 6000, // 6 seconds maximum
    },
    medium: {
      accuracy: 0.83, // 83% chance to answer correctly
      minResponseTime: 2500, // 2.5 seconds minimum
      maxResponseTime: 4500, // 4.5 seconds maximum
    },
    hard: {
      accuracy: 0.95, // 95% chance to answer correctly
      minResponseTime: 1000, // 1 second minimum
      maxResponseTime: 2000, // 2 seconds maximum
    },
  }

  const settings = difficultySettings[difficulty]

  // Determine if AI answers correctly (based on accuracy)
  const willAnswerCorrectly = Math.random() < settings.accuracy

  // Calculate response delay (random time between min and max)
  const delay = settings.minResponseTime + 
    Math.random() * (settings.maxResponseTime - settings.minResponseTime)

  let answerIndex: number
  if (willAnswerCorrectly) {
    answerIndex = correctAnswerIndex
  } else {
    // Choose a random wrong answer
    do {
      answerIndex = Math.floor(Math.random() * totalQuestions)
    } while (answerIndex === correctAnswerIndex)
  }

  return {
    shouldAnswer: true,
    answerIndex,
    isCorrect: willAnswerCorrectly,
    delay: Math.round(delay),
  }
}

/**
 * Check if a user is an AI opponent
 * @param userId User ID to check
 * @returns True if user is AI bot
 */
export function isAIOpponent(userId: string, email?: string | null): boolean {
  return email === 'ai-opponent@studyai.com' || userId === 'ai-bot'
}

/**
 * Schedule AI answer to be submitted after a delay
 * Used for simulating realistic AI response times
 */
export async function scheduleAIAnswer(
  matchId: string,
  questionIndex: number,
  aiAnswer: AIAnswerResult,
  submitAnswerFn: (matchId: string, questionIndex: number, answerIndex: number) => Promise<void>
): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(async () => {
      if (aiAnswer.shouldAnswer && aiAnswer.answerIndex !== null) {
        await submitAnswerFn(matchId, questionIndex, aiAnswer.answerIndex)
      }
      resolve()
    }, aiAnswer.delay)
  })
}
