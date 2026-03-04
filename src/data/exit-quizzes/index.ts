/**
 * Exit Quiz Registry — centralizes all exit quiz question pools
 * Import from here instead of individual quiz files.
 */

export type { ExitQuizQuestion } from './sat-linear-equations-inequalities'
import type { ExitQuizQuestion } from './sat-linear-equations-inequalities'

// Original 9 math quizzes
import { generateExitQuiz as genLinearEquations } from './sat-linear-equations-inequalities'
import { generateExitQuiz as genQuadraticEquations } from './sat-quadratic-equations'
import { generateExitQuiz as genFunctions } from './sat-functions'
import { generateExitQuiz as genExponentsRadicals } from './sat-exponents-radicals'
import { generateExitQuiz as genRatiosProportions } from './sat-ratios-proportions-percents'
import { generateExitQuiz as genStatistics } from './sat-statistics-data-interpretation'
import { generateExitQuiz as genExponentialFunctions } from './sat-exponential-functions'
import { generateExitQuiz as genCircles } from './sat-circles'
import { generateExitQuiz as genComplexNumbers } from './sat-complex-numbers'

// New math quizzes
import { generateExitQuiz as genSystemsLinearEquations } from './sat-systems-linear-equations'
import { generateExitQuiz as genLinearInequalitiesGraphs } from './sat-linear-inequalities-graphs'
import { generateExitQuiz as genProbabilityTwoWay } from './sat-probability-two-way-tables'
import { generateExitQuiz as genScatterplotsLineFit } from './sat-scatterplots-line-fit'
import { generateExitQuiz as genDataStatistics } from './sat-data-statistics'
import { generateExitQuiz as genPolynomialsFactoring } from './sat-polynomials-factoring'
import { generateExitQuiz as genPolynomialRational } from './sat-polynomial-rational-expressions'
import { generateExitQuiz as genNonlinearEquations } from './sat-nonlinear-equations-functions'
import { generateExitQuiz as genGeometryTrig } from './sat-geometry-trigonometry'
import { generateExitQuiz as genGeometryBasics } from './sat-geometry-basics'

// Reading quizzes
import { generateExitQuiz as genReadingComprehension } from './sat-reading-comprehension'
import { generateExitQuiz as genVocabularyContext } from './sat-vocabulary-context'
import { generateExitQuiz as genCentralIdeasDetails } from './sat-central-ideas-details'
import { generateExitQuiz as genCommandEvidence } from './sat-command-evidence'
import { generateExitQuiz as genFindingTextualEvidence } from './sat-finding-textual-evidence'

// Writing quizzes
import { generateExitQuiz as genGrammarUsage } from './sat-grammar-usage'
import { generateExitQuiz as genGrammarConventions } from './sat-grammar-conventions'
import { generateExitQuiz as genPunctuation } from './sat-punctuation'
import { generateExitQuiz as genPunctuationCommasSemicolons } from './sat-punctuation-commas-semicolons'
import { generateExitQuiz as genSentenceStructure } from './sat-sentence-structure'
import { generateExitQuiz as genPronounAgreement } from './sat-pronoun-agreement'
import { generateExitQuiz as genEffectiveLanguage } from './sat-effective-language-use'
import { generateExitQuiz as genTransitionsOrganization } from './sat-transitions-organization'
import { generateExitQuiz as genConcisenessRedundancy } from './sat-conciseness-redundancy'
import { generateExitQuiz as genSubjectVerbAgreement } from './sat-subject-verb-agreement'

// Strategy quizzes
import { generateExitQuiz as genTimeManagement } from './sat-time-management'

const quizGenerators: Record<string, (count?: number) => ExitQuizQuestion[]> = {
  // Original math
  'sat-linear-equations-inequalities': genLinearEquations,
  'sat-quadratic-equations': genQuadraticEquations,
  'sat-functions': genFunctions,
  'sat-exponents-radicals': genExponentsRadicals,
  'sat-ratios-proportions-percents': genRatiosProportions,
  'sat-statistics-data-interpretation': genStatistics,
  'sat-exponential-functions': genExponentialFunctions,
  'sat-circles': genCircles,
  'sat-complex-numbers': genComplexNumbers,
  // New math
  'sat-systems-linear-equations': genSystemsLinearEquations,
  'sat-systems-equations': genSystemsLinearEquations, // alias
  'sat-linear-inequalities-graphs': genLinearInequalitiesGraphs,
  'sat-probability-two-way-tables': genProbabilityTwoWay,
  'sat-scatterplots-line-fit': genScatterplotsLineFit,
  'sat-data-statistics': genDataStatistics,
  'sat-polynomials-factoring': genPolynomialsFactoring,
  'sat-polynomial-rational-expressions': genPolynomialRational,
  'sat-nonlinear-equations-functions': genNonlinearEquations,
  'sat-geometry-trigonometry': genGeometryTrig,
  'sat-geometry-basics': genGeometryBasics,
  // Reading
  'sat-reading-comprehension': genReadingComprehension,
  'sat-vocabulary-context': genVocabularyContext,
  'sat-central-ideas-details': genCentralIdeasDetails,
  'sat-command-evidence': genCommandEvidence,
  'sat-finding-textual-evidence': genFindingTextualEvidence,
  // Writing
  'sat-grammar-usage': genGrammarUsage,
  'sat-grammar-conventions': genGrammarConventions,
  'sat-punctuation': genPunctuation,
  'sat-punctuation-commas-semicolons': genPunctuationCommasSemicolons,
  'sat-sentence-structure': genSentenceStructure,
  'sat-pronoun-agreement': genPronounAgreement,
  'sat-effective-language-use': genEffectiveLanguage,
  'sat-transitions-organization': genTransitionsOrganization,
  'sat-conciseness-redundancy': genConcisenessRedundancy,
  'sat-subject-verb-agreement': genSubjectVerbAgreement,
  // Strategy
  'sat-time-management': genTimeManagement,
  'sat-test-strategies': genTimeManagement, // alias
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
