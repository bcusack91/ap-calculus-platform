'use client'

import { useState } from 'react'
import ExplainDifferently from '@/components/ExplainDifferently'
import { ExamFormatGuide } from '@/components/ExamFormatGuide'
import { CommonMistakesSection } from '@/components/CommonMistakes'
import { RealWorldApplications } from '@/components/RealWorldApplications'
import { WorkedExample } from '@/components/WorkedExamples'
import { MultiStepProblem } from '@/components/MultiStepProblem'
import { GraphingQuestion } from '@/components/GraphingQuestion'
import { AdaptivePractice } from '@/components/AdaptivePractice'

/**
 * Client-side content tools rendered on topic pages.
 * Wraps interactive content-enrichment components that
 * need client-side state to function.
 */
export function TopicContentTools({ topicTitle, topicSlug, courseName }: {
  topicTitle: string
  topicSlug: string
  courseName: string
}) {
  const [showPracticeLab, setShowPracticeLab] = useState(false)

  // Determine if this is an AP exam course
  const isAPCourse = courseName.toLowerCase().startsWith('ap ')
  const isCalculus = courseName.toLowerCase().includes('calculus')
  const _isChemistry = courseName.toLowerCase().includes('chemistry')
  const _isBiology = courseName.toLowerCase().includes('biology')
  const _isAlgebra = courseName.toLowerCase().includes('algebra')
  const _isGeometry = courseName.toLowerCase().includes('geometry')
  const _isStatistics = courseName.toLowerCase().includes('statistics')

  // Map course names to exam format data
  const examFormats: Record<string, { totalTime: string; sections: { name: string; format: string; questionCount: number; timeMinutes: number; weight: string; calculator?: boolean }[]; scoring: { scale: string; breakdown: { score: number; label: string; percentile?: string }[] }; tips: string[] }> = {
    'AP Calculus AB': {
      totalTime: '3 hours 15 minutes',
      sections: [
        { name: 'Multiple Choice (No Calculator)', format: 'MCQ', questionCount: 30, timeMinutes: 60, weight: '33.3%', calculator: false },
        { name: 'Multiple Choice (Calculator)', format: 'MCQ', questionCount: 15, timeMinutes: 45, weight: '16.7%', calculator: true },
        { name: 'Free Response (Calculator)', format: 'FRQ', questionCount: 2, timeMinutes: 30, weight: '16.7%', calculator: true },
        { name: 'Free Response (No Calculator)', format: 'FRQ', questionCount: 4, timeMinutes: 60, weight: '33.3%', calculator: false },
      ],
      scoring: { scale: '1-5', breakdown: [{ score: 5, label: 'Extremely Qualified', percentile: '~20%' }, { score: 4, label: 'Well Qualified', percentile: '~17%' }, { score: 3, label: 'Qualified', percentile: '~19%' }, { score: 2, label: 'Possibly Qualified', percentile: '~22%' }, { score: 1, label: 'No Recommendation', percentile: '~22%' }] },
      tips: ['Show all work on FRQs', 'Use proper notation', 'Check units', 'Manage your time'],
    },
    'AP Calculus BC': {
      totalTime: '3 hours 15 minutes',
      sections: [
        { name: 'Multiple Choice (No Calculator)', format: 'MCQ', questionCount: 30, timeMinutes: 60, weight: '33.3%', calculator: false },
        { name: 'Multiple Choice (Calculator)', format: 'MCQ', questionCount: 15, timeMinutes: 45, weight: '16.7%', calculator: true },
        { name: 'Free Response (Calculator)', format: 'FRQ', questionCount: 2, timeMinutes: 30, weight: '16.7%', calculator: true },
        { name: 'Free Response (No Calculator)', format: 'FRQ', questionCount: 4, timeMinutes: 60, weight: '33.3%', calculator: false },
      ],
      scoring: { scale: '1-5', breakdown: [{ score: 5, label: 'Extremely Qualified', percentile: '~44%' }, { score: 4, label: 'Well Qualified', percentile: '~18%' }, { score: 3, label: 'Qualified', percentile: '~19%' }, { score: 2, label: 'Possibly Qualified', percentile: '~11%' }, { score: 1, label: 'No Recommendation', percentile: '~8%' }] },
      tips: ['Know your series tests', 'Parametric/polar problems appear every year', 'AB subscore is included'],
    },
    'AP Chemistry': {
      totalTime: '3 hours 15 minutes',
      sections: [
        { name: 'Multiple Choice', format: 'MCQ', questionCount: 60, timeMinutes: 90, weight: '50%', calculator: true },
        { name: 'Free Response (Long)', format: 'FRQ', questionCount: 3, timeMinutes: 69, weight: '30%', calculator: true },
        { name: 'Free Response (Short)', format: 'FRQ', questionCount: 4, timeMinutes: 36, weight: '20%', calculator: true },
      ],
      scoring: { scale: '1-5', breakdown: [{ score: 5, label: 'Extremely Qualified', percentile: '~12%' }, { score: 4, label: 'Well Qualified', percentile: '~16%' }, { score: 3, label: 'Qualified', percentile: '~24%' }, { score: 2, label: 'Possibly Qualified', percentile: '~24%' }, { score: 1, label: 'No Recommendation', percentile: '~24%' }] },
      tips: ['Memorize common polyatomic ions', 'Practice dimensional analysis', 'Know your gas laws'],
    },
    'AP Biology': {
      totalTime: '3 hours',
      sections: [
        { name: 'Multiple Choice', format: 'MCQ', questionCount: 60, timeMinutes: 90, weight: '50%', calculator: false },
        { name: 'Free Response (Long)', format: 'FRQ', questionCount: 2, timeMinutes: 50, weight: '30%', calculator: false },
        { name: 'Free Response (Short)', format: 'FRQ', questionCount: 4, timeMinutes: 40, weight: '20%', calculator: false },
      ],
      scoring: { scale: '1-5', breakdown: [{ score: 5, label: 'Extremely Qualified', percentile: '~14%' }, { score: 4, label: 'Well Qualified', percentile: '~22%' }, { score: 3, label: 'Qualified', percentile: '~24%' }, { score: 2, label: 'Possibly Qualified', percentile: '~24%' }, { score: 1, label: 'No Recommendation', percentile: '~16%' }] },
      tips: ['Focus on experimental design', 'Know data analysis', 'Practice graph interpretation'],
    },
  }

  const examData = examFormats[courseName]

  // Common mistakes by course type
  const commonMistakes = getCommonMistakes(courseName, topicTitle)

  // Real-world applications by course type
  const realWorldApps = getRealWorldApplications(courseName, topicTitle)

  // Worked example data
  const workedExample = getWorkedExample(courseName, topicTitle)

  // Multi-step problem data
  const multiStepData = getMultiStepProblem(courseName, topicTitle)

  // Graphing question (calculus only)
  const graphingData = isCalculus ? getGraphingQuestion(topicTitle) : null

  // Adaptive practice questions
  const adaptiveQuestions = getAdaptiveQuestions(courseName, topicTitle)

  return (
    <div className="space-y-6 mt-8">
      {/* Explain Differently — AI-powered concept re-explanation */}
      <ExplainDifferently concept={topicTitle} topicSlug={topicSlug} />

      {/* Exam Format Guide — only for AP courses with known formats */}
      {isAPCourse && examData && (
        <ExamFormatGuide
          examName={courseName}
          totalTime={examData.totalTime}
          sections={examData.sections}
          scoring={examData.scoring}
          tips={examData.tips}
        />
      )}

      {/* Common Mistakes */}
      {commonMistakes.length > 0 && (
        <CommonMistakesSection topic={topicTitle} mistakes={commonMistakes} />
      )}

      {/* Real-World Applications */}
      {realWorldApps.length > 0 && (
        <RealWorldApplications topic={topicTitle} applications={realWorldApps} />
      )}

      {/* Worked Example */}
      {workedExample && (
        <WorkedExample {...workedExample} />
      )}

      {/* Practice Lab — expandable section with interactive practice */}
      <div className="rounded-lg border-2 border-indigo-200 dark:border-indigo-700 overflow-hidden">
        <button
          onClick={() => setShowPracticeLab(!showPracticeLab)}
          className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-5 py-3 flex items-center justify-between hover:from-indigo-600 hover:to-purple-600 transition-all"
        >
          <div className="flex items-center gap-2">
            <span className="text-xl">🧪</span>
            <div className="text-left">
              <h3 className="font-bold text-lg">Practice Lab</h3>
              <p className="text-indigo-100 text-sm">Interactive practice problems for {topicTitle}</p>
            </div>
          </div>
          <span className={`transition-transform ${showPracticeLab ? 'rotate-180' : ''}`}>▾</span>
        </button>

        {showPracticeLab && (
          <div className="p-4 space-y-6 bg-indigo-50/50 dark:bg-indigo-900/10">
            {/* Multi-Step Problem */}
            {multiStepData && <MultiStepProblem {...multiStepData} />}

            {/* Graphing Question (calculus only) */}
            {graphingData && <GraphingQuestion {...graphingData} />}

            {/* Adaptive Practice */}
            {adaptiveQuestions.length >= 3 && (
              <AdaptivePractice
                subject={courseName}
                questionPool={adaptiveQuestions}
                initialDifficulty={3}
              />
            )}
          </div>
        )}
      </div>
    </div>
  )
}

// ─── Data Generators ─────────────────────────────────────────

function getCommonMistakes(course: string, _topic: string) {
  const cl = course.toLowerCase()
  if (cl.includes('calculus')) {
    return [
      { mistake: 'Forgetting the constant of integration (+C) on indefinite integrals', why: 'Every antiderivative has infinitely many solutions differing by a constant. Without +C, you only represent one.', correct: 'Always write +C for indefinite integrals: ∫2x dx = x² + C' },
      { mistake: 'Confusing the Power Rule with the Chain Rule', why: 'The Chain Rule is needed whenever you differentiate a composite function f(g(x)), not just a simple power.', correct: 'd/dx [f(g(x))] = f\'(g(x)) · g\'(x). Multiply by the derivative of the inner function.' },
      { mistake: 'Not checking continuity before applying the Mean Value Theorem', why: 'The MVT requires the function to be continuous on [a,b] and differentiable on (a,b).', correct: 'State both conditions explicitly before applying the theorem.' },
      { mistake: 'Dropping negative signs when differentiating trig functions', why: 'd/dx[cos(x)] = -sin(x) and d/dx[csc(x)] = -csc(x)cot(x). The negatives are easy to forget.', correct: 'Memorize: derivatives of cos, cot, and csc all have negatives.' },
    ]
  }
  if (cl.includes('chemistry')) {
    return [
      { mistake: 'Not balancing equations before doing stoichiometry', why: 'Unbalanced equations give wrong mole ratios and incorrect calculations.', correct: 'Always balance the equation first, then use coefficients as mole ratios.' },
      { mistake: 'Confusing molarity (M) with molality (m)', why: 'Molarity is mol/L of solution; molality is mol/kg of solvent. They give different values.', correct: 'Molarity = mol solute / L solution. Molality = mol solute / kg solvent.' },
      { mistake: 'Forgetting to convert temperature to Kelvin for gas law problems', why: 'The ideal gas law PV=nRT requires absolute temperature (K), not °C.', correct: 'K = °C + 273.15. Always convert before plugging into gas law equations.' },
    ]
  }
  if (cl.includes('biology')) {
    return [
      { mistake: 'Confusing DNA replication with transcription', why: 'Replication copies the entire genome (DNA→DNA). Transcription makes mRNA from a gene (DNA→RNA).', correct: 'Replication = whole genome duplication. Transcription = gene → mRNA.' },
      { mistake: 'Mixing up mitosis and meiosis outcomes', why: 'Mitosis = 2 identical diploid cells. Meiosis = 4 unique haploid cells.', correct: 'Mitosis: 2n→2n (growth/repair). Meiosis: 2n→n (gametes).' },
      { mistake: 'Forgetting that enzymes are not consumed in reactions', why: 'Enzymes lower activation energy but are recycled. They are catalysts, not reactants.', correct: 'Enzymes speed up reactions without being used up. They can catalyze many reactions.' },
    ]
  }
  if (cl.includes('algebra')) {
    return [
      { mistake: 'Distributing exponents over addition: (a+b)² ≠ a²+b²', why: 'Exponents distribute over multiplication, not over addition/subtraction.', correct: '(a+b)² = a² + 2ab + b². Use FOIL or the binomial formula.' },
      { mistake: 'Canceling terms instead of factors', why: 'You can only cancel common factors from numerator and denominator, not individual terms.', correct: '(x²+x)/x = x+1 (factor first: x(x+1)/x). NOT x²+1.' },
      { mistake: 'Forgetting to flip the inequality sign when multiplying/dividing by a negative', why: 'Multiplying both sides by a negative reverses the order relationship.', correct: 'If -2x > 6, then x < -3 (flip the >).' },
    ]
  }
  if (cl.includes('statistics')) {
    return [
      { mistake: 'Confusing correlation with causation', why: 'A strong correlation between X and Y does not mean X causes Y. Lurking variables may exist.', correct: 'Say "X is associated with Y" unless a controlled experiment establishes causation.' },
      { mistake: 'Using a z-test when the population standard deviation is unknown', why: 'When σ is unknown and estimated by s, the sampling distribution follows a t-distribution.', correct: 'Use a t-test when σ is unknown and the sample size is small.' },
      { mistake: 'Forgetting to check conditions for inference procedures', why: 'Statistical tests require conditions (randomness, normality, independence) to be valid.', correct: 'Always state and verify: Random, Normal (n≥30 or population normal), Independent (10% condition).' },
    ]
  }
  return []
}

function getRealWorldApplications(course: string, _topic: string) {
  const cl = course.toLowerCase()
  if (cl.includes('calculus')) {
    return [
      { title: 'Optimizing Package Design', field: 'Engineering', description: 'Engineers use derivatives to minimize material while maximizing volume when designing shipping containers and product packaging.', example: 'Find the dimensions of a box with maximum volume using 1200 cm² of cardboard — a classic optimization problem.' },
      { title: 'Predicting Drug Dosage Decay', field: 'Medicine', description: 'Pharmacokinetics models use exponential decay and integration to determine how quickly drugs leave the bloodstream.', example: 'If a drug\'s half-life is 4 hours, integration tells us the total drug exposure (AUC) over 24 hours.' },
      { title: 'Calculating Distance from Velocity', field: 'Physics', description: 'The integral of a velocity function gives total displacement — fundamental in motion analysis.', example: 'A car accelerates at v(t) = 3t² m/s. The distance in 5 seconds is ∫₀⁵ 3t² dt = 125 meters.' },
      { title: 'Revenue Optimization', field: 'Finance', description: 'Marginal revenue and marginal cost functions use derivatives to find the profit-maximizing production level.', example: 'Set MR(x) = MC(x) and solve for x to find the quantity that maximizes profit.' },
    ]
  }
  if (cl.includes('chemistry')) {
    return [
      { title: 'Water Purification', field: 'Environment', description: 'Chemical equilibrium and reaction rates govern how water treatment plants remove contaminants using precipitation and filtration.', example: 'Adding alum (Al₂(SO₄)₃) to water causes impurities to coagulate through an equilibrium-driven process.' },
      { title: 'Battery Technology', field: 'Technology', description: 'Electrochemistry principles directly apply to lithium-ion battery design, electric vehicles, and renewable energy storage.', example: 'The Nernst equation predicts battery voltage under non-standard conditions.' },
      { title: 'Cooking Chemistry', field: 'Cooking', description: 'The Maillard reaction, caramelization, and protein denaturation are all chemical processes that happen when you cook.', example: 'Baking bread at 350°F triggers the Maillard reaction between amino acids and reducing sugars, creating flavor and color.' },
    ]
  }
  if (cl.includes('biology')) {
    return [
      { title: 'CRISPR Gene Editing', field: 'Medicine', description: 'Understanding DNA structure and gene expression is the foundation of CRISPR-Cas9 technology used to treat genetic diseases.', example: 'CRISPR has been used to treat sickle cell disease by editing the hemoglobin gene in patient stem cells.' },
      { title: 'Ecosystem Conservation', field: 'Environment', description: 'Population ecology models help conservation biologists predict species survival and design effective wildlife reserves.', example: 'The logistic growth model dN/dt = rN(1-N/K) predicts carrying capacity for endangered species habitats.' },
      { title: 'Forensic DNA Analysis', field: 'Technology', description: 'PCR amplification and gel electrophoresis — core molecular biology techniques — are used in criminal investigations.', example: 'DNA profiling compares STR (short tandem repeat) patterns to identify individuals with >99.99% accuracy.' },
    ]
  }
  if (cl.includes('algebra')) {
    return [
      { title: 'Budgeting & Finance', field: 'Finance', description: 'Linear equations model income vs expenses, helping people create budgets and savings plans.', example: 'If you earn $15/hour and save 20%, the equation s = 0.2(15h) models your savings s after h hours.' },
      { title: 'Game Development', field: 'Technology', description: 'Game physics use systems of equations and quadratic functions for projectile motion and collision detection.', example: 'A projectile follows y = -½gt² + v₀t + h₀, a quadratic that determines if a ball clears a wall.' },
      { title: 'Architecture & Design', field: 'Architecture', description: 'Proportional reasoning, scaling, and geometric relationships are essential for creating accurate blueprints.', example: 'A 1:50 scale model means every 1 cm represents 50 cm in real life — a direct proportion.' },
    ]
  }
  return []
}

function getWorkedExample(course: string, _topic: string) {
  const cl = course.toLowerCase()
  if (cl.includes('calculus')) {
    return {
      title: 'Related Rates — Expanding Circle',
      problem: 'A stone is dropped into a still pond, creating a circular ripple. The radius of the ripple is increasing at a rate of $2$ cm/s. How fast is the area of the circle increasing when the radius is $10$ cm?',
      steps: [
        { label: 'Identify the known and unknown rates', content: 'Given: $\\frac{dr}{dt} = 2$ cm/s. Find: $\\frac{dA}{dt}$ when $r = 10$ cm.' },
        { label: 'Write the relationship between variables', content: 'The area of a circle: $A = \\pi r^2$' },
        { label: 'Differentiate both sides with respect to time', content: '$\\frac{dA}{dt} = 2\\pi r \\cdot \\frac{dr}{dt}$\n\nThis uses the Chain Rule since $r$ is a function of $t$.' },
        { label: 'Substitute known values', content: '$\\frac{dA}{dt} = 2\\pi(10)(2) = 40\\pi$ cm²/s' },
      ],
      finalAnswer: 'The area is increasing at $40\\pi \\approx 125.66$ cm²/s when the radius is 10 cm.',
      commonMistake: 'Forgetting to apply the Chain Rule — writing dA/dt = 2πr instead of 2πr(dr/dt).',
    }
  }
  if (cl.includes('chemistry')) {
    return {
      title: 'Stoichiometry — Limiting Reagent',
      problem: '$2$ mol of $H_2$ reacts with $1$ mol of $O_2$. How many grams of water are produced? Which is the limiting reagent? ($2H_2 + O_2 \\to 2H_2O$)',
      steps: [
        { label: 'Write the balanced equation', content: '$2H_2 + O_2 \\to 2H_2O$\n\nThe coefficients tell us: 2 mol H₂ reacts with 1 mol O₂ to produce 2 mol H₂O.' },
        { label: 'Determine the limiting reagent', content: 'From the equation, 2 mol H₂ requires 1 mol O₂. We have exactly 2 mol H₂ and 1 mol O₂ — they are in perfect stoichiometric ratio. Neither is truly "limiting."' },
        { label: 'Calculate moles of product', content: 'From 2 mol H₂ → 2 mol H₂O (1:1 ratio with balanced eq). So we produce 2 mol H₂O.' },
        { label: 'Convert moles to grams', content: 'Molar mass of H₂O = 2(1.008) + 16.00 = 18.016 g/mol\n\n$2 \\text{ mol} \\times 18.016 \\text{ g/mol} = 36.03$ g' },
      ],
      finalAnswer: '$36.03$ g of water is produced. The reagents are in stoichiometric ratio (neither is limiting).',
    }
  }
  if (cl.includes('algebra')) {
    return {
      title: 'Solving a Quadratic by Factoring',
      problem: 'Solve $x^2 - 5x + 6 = 0$.',
      steps: [
        { label: 'Look for two numbers that multiply to 6 and add to -5', content: 'We need factors of $+6$ whose sum is $-5$.\n\nTry: $(-2) \\times (-3) = 6$ and $(-2) + (-3) = -5$ ✓' },
        { label: 'Factor the quadratic', content: '$x^2 - 5x + 6 = (x - 2)(x - 3)$' },
        { label: 'Set each factor equal to zero', content: '$x - 2 = 0 \\implies x = 2$\n\n$x - 3 = 0 \\implies x = 3$' },
      ],
      finalAnswer: '$x = 2$ or $x = 3$',
      commonMistake: 'Getting the signs wrong when factoring. Remember: if the constant is positive and the middle term is negative, both factors are negative.',
    }
  }
  return null
}

function getMultiStepProblem(course: string, _topic: string) {
  const cl = course.toLowerCase()
  if (cl.includes('calculus')) {
    return {
      title: 'Optimization: Maximum Area',
      context: 'A farmer has 200 meters of fencing and wants to enclose the largest possible rectangular area against a straight river (so only 3 sides need fencing).',
      difficulty: 'hard' as const,
      steps: [
        { prompt: 'If the side perpendicular to the river has length x, what is the length of the side parallel to the river?', options: ['200 - x', '200 - 2x', '100 - x', '(200 - x)/2'], correctAnswer: 1, explanation: 'Two perpendicular sides need fencing (2x), so the parallel side is 200 - 2x.', carriesForward: 'We now know the parallel side = 200 - 2x' },
        { prompt: 'What is the area function A(x)?', options: ['x(200 - x)', 'x(200 - 2x)', '2x(200 - x)', 'x²(200 - 2x)'], correctAnswer: 1, explanation: 'Area = width × length = x(200 - 2x) = 200x - 2x².', carriesForward: 'A(x) = 200x - 2x²' },
        { prompt: 'What value of x maximizes the area?', options: ['x = 25', 'x = 50', 'x = 100', 'x = 75'], correctAnswer: 1, explanation: 'A\'(x) = 200 - 4x = 0 → x = 50. A\'\'(x) = -4 < 0 confirms maximum.', carriesForward: 'x = 50 meters' },
        { prompt: 'What is the maximum area?', options: ['5000 m²', '7500 m²', '10000 m²', '2500 m²'], correctAnswer: 0, explanation: 'A(50) = 50(200 - 100) = 50(100) = 5000 m².' },
      ],
    }
  }
  if (cl.includes('chemistry')) {
    return {
      title: 'Solution Dilution Problem',
      context: 'You have a stock solution of 6.0 M HCl. You need to prepare 500 mL of 0.50 M HCl for a lab experiment.',
      difficulty: 'medium' as const,
      steps: [
        { prompt: 'Which equation relates the concentrations and volumes of the two solutions?', options: ['PV = nRT', 'M₁V₁ = M₂V₂', 'pH = -log[H⁺]', 'ΔG = ΔH - TΔS'], correctAnswer: 1, explanation: 'The dilution equation M₁V₁ = M₂V₂ conserves moles of solute.', carriesForward: 'We\'ll use M₁V₁ = M₂V₂' },
        { prompt: 'How many mL of the 6.0 M stock solution do you need?', options: ['41.7 mL', '83.3 mL', '50.0 mL', '250.0 mL'], correctAnswer: 0, explanation: '(6.0)(V₁) = (0.50)(500) → V₁ = 250/6.0 = 41.7 mL' },
        { prompt: 'What is the correct procedure for making this solution?', options: ['Add water to acid', 'Add acid to water, then dilute to 500 mL', 'Mix equal parts', 'Heat the stock solution first'], correctAnswer: 1, explanation: 'Always add acid to water for safety ("do as you oughta, add acid to water"). Then add water to reach final volume.' },
      ],
    }
  }
  return null
}

function getGraphingQuestion(_topic: string) {
  return {
    title: 'Sketch the Derivative',
    instruction: 'Click to place points that approximate the derivative f\'(x) of the parabola f(x) = x² shown in blue. Remember: the derivative of x² is 2x, which is a straight line through the origin.',
    xRange: [-5, 5] as [number, number],
    yRange: [-10, 10] as [number, number],
    gridStep: 1,
    showReferenceFunction: (x: number) => x * x,
    referenceLabel: 'f(x) = x²',
    correctCheck: (points: { x: number; y: number }[]) => {
      if (points.length < 3) {
        return { correct: false, feedback: 'Place at least 3 points to approximate the derivative.' }
      }
      // Check if the points roughly follow y = 2x
      let closeCount = 0
      for (const p of points) {
        const expected = 2 * p.x
        if (Math.abs(p.y - expected) <= 2) closeCount++
      }
      const ratio = closeCount / points.length
      if (ratio >= 0.7) {
        return { correct: true, feedback: 'Great job! Your points closely follow f\'(x) = 2x.' }
      }
      return { correct: false, feedback: `${closeCount}/${points.length} points were close to f'(x) = 2x. The derivative of x² is a line through the origin with slope 2.` }
    },
  }
}

function getAdaptiveQuestions(course: string, _topic: string) {
  const cl = course.toLowerCase()
  if (cl.includes('calculus')) {
    return [
      { id: 'calc-1', question: 'What is the derivative of f(x) = 3x²?', options: ['3x', '6x', '6x²', '3x²'], correctAnswer: 1, explanation: 'Using the power rule: d/dx[3x²] = 3·2x = 6x.', difficulty: 1 as const, skill: 'Power Rule' },
      { id: 'calc-2', question: 'What is ∫4x dx?', options: ['4x²', '2x²+C', '4x²+C', '2x+C'], correctAnswer: 1, explanation: '∫4x dx = 4·(x²/2) + C = 2x² + C.', difficulty: 1 as const, skill: 'Basic Integration' },
      { id: 'calc-3', question: 'What is the derivative of sin(3x)?', options: ['cos(3x)', '3cos(3x)', '-3cos(3x)', '3sin(3x)'], correctAnswer: 1, explanation: 'Chain Rule: d/dx[sin(3x)] = cos(3x)·3 = 3cos(3x).', difficulty: 2 as const, skill: 'Chain Rule' },
      { id: 'calc-4', question: 'Find the critical points of f(x) = x³ - 3x.', options: ['x=0', 'x=±1', 'x=±√3', 'x=1 only'], correctAnswer: 1, explanation: 'f\'(x) = 3x²-3 = 3(x²-1) = 0 → x = ±1.', difficulty: 3 as const, skill: 'Critical Points' },
      { id: 'calc-5', question: 'Evaluate ∫₀¹ (2x+1) dx.', options: ['1', '2', '3', '4'], correctAnswer: 1, explanation: '[x²+x]₀¹ = (1+1)-(0+0) = 2.', difficulty: 2 as const, skill: 'Definite Integrals' },
      { id: 'calc-6', question: 'What is d/dx[eˣ·ln(x)]?', options: ['eˣ/x', 'eˣ·ln(x)+eˣ/x', 'eˣ·ln(x)', '1/x'], correctAnswer: 1, explanation: 'Product Rule: d/dx[eˣ·ln(x)] = eˣ·ln(x) + eˣ·(1/x).', difficulty: 3 as const, skill: 'Product Rule' },
      { id: 'calc-7', question: 'Find lim(x→0) sin(x)/x.', options: ['0', '1', '∞', 'Does not exist'], correctAnswer: 1, explanation: 'This is the fundamental trig limit: lim(x→0) sin(x)/x = 1.', difficulty: 2 as const, skill: 'Limits' },
      { id: 'calc-8', question: 'If f\'(x)=0 and f\'\'(x)<0, the point is a:', options: ['Local min', 'Local max', 'Inflection point', 'Saddle point'], correctAnswer: 1, explanation: 'Second Derivative Test: f\'=0 and f\'\'<0 means concave down → local maximum.', difficulty: 3 as const, skill: 'Second Derivative Test' },
      { id: 'calc-9', question: 'Find ∫sec²(x) dx.', options: ['sec(x)+C', 'tan(x)+C', '2sec(x)tan(x)+C', '-csc²(x)+C'], correctAnswer: 1, explanation: 'The antiderivative of sec²(x) is tan(x)+C.', difficulty: 2 as const, skill: 'Trig Integration' },
      { id: 'calc-10', question: 'Use L\'Hôpital\'s Rule: lim(x→∞) x/eˣ.', options: ['1', '0', '∞', 'e'], correctAnswer: 1, explanation: 'L\'Hôpital\'s: lim x/eˣ = lim 1/eˣ = 0 as x→∞.', difficulty: 4 as const, skill: "L'Hôpital's Rule" },
    ]
  }
  if (cl.includes('algebra')) {
    return [
      { id: 'alg-1', question: 'Solve: 2x + 5 = 13', options: ['x = 3', 'x = 4', 'x = 9', 'x = 6'], correctAnswer: 1, explanation: '2x = 13-5 = 8, so x = 4.', difficulty: 1 as const, skill: 'Linear Equations' },
      { id: 'alg-2', question: 'Simplify: 3(x + 2) - x', options: ['2x + 6', '4x + 6', '2x + 2', '3x + 6'], correctAnswer: 0, explanation: '3x + 6 - x = 2x + 6.', difficulty: 1 as const, skill: 'Simplifying' },
      { id: 'alg-3', question: 'Factor: x² - 9', options: ['(x-3)(x-3)', '(x+3)(x-3)', '(x+9)(x-1)', 'Cannot factor'], correctAnswer: 1, explanation: 'Difference of squares: x²-9 = (x+3)(x-3).', difficulty: 2 as const, skill: 'Factoring' },
      { id: 'alg-4', question: 'What is the slope of y = -2x + 7?', options: ['7', '-2', '2', '-7'], correctAnswer: 1, explanation: 'In y = mx + b form, m = -2 is the slope.', difficulty: 1 as const, skill: 'Slope' },
      { id: 'alg-5', question: 'Solve: x² + 5x + 6 = 0', options: ['x=-2, x=-3', 'x=2, x=3', 'x=-1, x=-6', 'x=1, x=6'], correctAnswer: 0, explanation: '(x+2)(x+3)=0, so x=-2 or x=-3.', difficulty: 2 as const, skill: 'Quadratics' },
      { id: 'alg-6', question: 'Simplify: (x³)(x²)', options: ['x⁵', 'x⁶', '2x⁵', 'x¹'], correctAnswer: 0, explanation: 'When multiplying same base, add exponents: x³⁺² = x⁵.', difficulty: 1 as const, skill: 'Exponents' },
    ]
  }
  if (cl.includes('chemistry')) {
    return [
      { id: 'chem-1', question: 'What is Avogadro\'s number?', options: ['6.022×10²³', '3.14×10⁸', '1.602×10⁻¹⁹', '6.626×10⁻³⁴'], correctAnswer: 0, explanation: 'Avogadro\'s number N_A = 6.022×10²³ particles/mol.', difficulty: 1 as const, skill: 'Constants' },
      { id: 'chem-2', question: 'What is the pH of a 0.001 M HCl solution?', options: ['1', '2', '3', '4'], correctAnswer: 2, explanation: 'pH = -log[H⁺] = -log(0.001) = -log(10⁻³) = 3.', difficulty: 2 as const, skill: 'pH' },
      { id: 'chem-3', question: 'In the reaction 2H₂ + O₂ → 2H₂O, what is the mole ratio of H₂ to H₂O?', options: ['1:1', '2:1', '1:2', '2:2'], correctAnswer: 0, explanation: '2 mol H₂ produces 2 mol H₂O, so the ratio is 2:2 = 1:1.', difficulty: 1 as const, skill: 'Stoichiometry' },
      { id: 'chem-4', question: 'Which bond is most polar?', options: ['C-H', 'O-H', 'N-H', 'F-H'], correctAnswer: 3, explanation: 'F-H has the greatest electronegativity difference (F=4.0, H=2.1).', difficulty: 3 as const, skill: 'Bonding' },
      { id: 'chem-5', question: 'A catalyst affects a reaction by:', options: ['Increasing ΔH', 'Lowering activation energy', 'Changing equilibrium position', 'Increasing ΔG'], correctAnswer: 1, explanation: 'Catalysts provide an alternate pathway with lower activation energy.', difficulty: 2 as const, skill: 'Kinetics' },
    ]
  }
  return []
}
