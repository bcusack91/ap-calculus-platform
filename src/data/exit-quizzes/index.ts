/**
 * Exit Quiz Registry — centralizes all exit quiz question pools
 * Import from here instead of individual quiz files.
 */

export type { ExitQuizQuestion } from './sat-linear-equations-inequalities'
import type { ExitQuizQuestion } from './sat-linear-equations-inequalities'

import { generateExitQuiz as genLinearEquations } from './sat-linear-equations-inequalities'
import { generateExitQuiz as genQuadraticEquations } from './sat-quadratic-equations'
import { generateExitQuiz as genFunctions } from './sat-functions'
import { generateExitQuiz as genExponentsRadicals } from './sat-exponents-radicals'
import { generateExitQuiz as genRatiosProportions } from './sat-ratios-proportions-percents'
import { generateExitQuiz as genStatistics } from './sat-statistics-data-interpretation'

const quizGenerators: Record<string, (count?: number) => ExitQuizQuestion[]> = {
  'sat-linear-equations-inequalities': genLinearEquations,
  'sat-quadratic-equations': genQuadraticEquations,
  'sat-functions': genFunctions,
  'sat-exponents-radicals': genExponentsRadicals,
  'sat-ratios-proportions-percents': genRatiosProportions,
  'sat-statistics-data-interpretation': genStatistics,
}

/**
 * Check whether a topic slug has an exit quiz available
 */
export function hasExitQuiz(topicSlug: string): boolean {
  return topicSlug in quizGenerators
}

/**
 * Generate an exit quiz for a given topic slug.
 * Dispatches to the appropriate question pool.
 */
export function generateExitQuiz(topicSlug: string, count: number = 10): ExitQuizQuestion[] {
  const generator = quizGenerators[topicSlug]
  if (!generator) {
    throw new Error(`No exit quiz found for topic: ${topicSlug}`)
  }
  return generator(count)
}
