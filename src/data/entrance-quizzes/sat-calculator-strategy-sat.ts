/**
 * Entrance Quiz — SAT Calculator Strategies (SAT)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // ── Part 1: When to Use a Calculator ─────────────
  {
    id: 'scals-ent-1a',
    question:
      'On the SAT Math section, which type of problem is generally BEST solved without a calculator?',
    options: [
      'Finding the decimal value of √157 to four decimal places.',
      'Solving 2x + 6 = 14 for x.',
      'Calculating 17.3% of 842.',
      'Evaluating sin(47°) to three decimal places.',
    ],
    correctIndex: 1,
    explanation:
      '2x + 6 = 14 → 2x = 8 → x = 4 requires only simple mental arithmetic. A calculator adds no value here and slows you down. The other options (irrational roots, percentages of large numbers, trigonometric values) genuinely benefit from calculator use.',
    partNumber: 1,
    partTitle: 'When to Use a Calculator',
  },
  {
    id: 'scals-ent-1b',
    question:
      'A student uses a calculator to evaluate (3/7) × (14/9). Which answer would the calculator display, and is it the most efficient method?',
    options: [
      '0.6667; and yes, a calculator is most efficient here.',
      '2/3; and a calculator is not necessary—mental simplification is faster.',
      '0.4762; and a calculator is the only way to solve this.',
      '3/14; and a calculator is needed to find this fraction.',
    ],
    correctIndex: 1,
    explanation:
      '(3/7) × (14/9) = (3 × 14)/(7 × 9) = 42/63 = 2/3. Cross-canceling: 3/9 = 1/3 and 14/7 = 2, so (1/3) × 2 = 2/3. Mental simplification is faster and avoids decimal rounding. The result is exactly 2/3.',
    partNumber: 1,
    partTitle: 'When to Use a Calculator',
  },

  // ── Part 2: Graphing Functions ────────────────────
  {
    id: 'scals-ent-2a',
    question:
      'You graph y = x² − 4x − 5 on your calculator. What feature of the graph helps you find the x-intercepts (roots) most directly?',
    options: [
      'The y-intercept',
      'The vertex (minimum point)',
      'The zero/root finder (where the graph crosses the x-axis)',
      'The table of values at y = 0',
    ],
    correctIndex: 2,
    explanation:
      'X-intercepts are where y = 0—literally where the graph crosses the x-axis. Using the "zero" or "root" function on a graphing calculator locates these points directly. A table of values can also help (option D) but is less direct than the built-in zero finder.',
    partNumber: 2,
    partTitle: 'Graphing Functions',
  },
  {
    id: 'scals-ent-2b',
    question:
      'When using a graphing calculator to find the intersection of y = 2x + 1 and y = x² − 3, what does the intersection point represent?',
    options: [
      'The vertex of the parabola.',
      'The x-value where both functions equal zero.',
      'The point(s) where the two equations have the same x and y values—i.e., the solution(s) to 2x + 1 = x² − 3.',
      'The average of the two functions.',
    ],
    correctIndex: 2,
    explanation:
      'The intersection of two graphs represents the point(s) where both equations are simultaneously satisfied. Finding intersections graphically is equivalent to solving the system algebraically: 2x + 1 = x² − 3.',
    partNumber: 2,
    partTitle: 'Graphing Functions',
  },

  // ── Part 3: Solving Equations Graphically ────────
  {
    id: 'scals-ent-3a',
    question:
      'To solve the equation x³ − 3x = 2 using a graphing calculator, which strategy is most effective?',
    options: [
      'Graph y = x³ − 3x − 2 and find where it crosses the x-axis.',
      'Graph y = x³ and y = 3x + 2 and find their intersection.',
      'Evaluate x³ − 3x for x = 1, 2, 3 until you find 2.',
      'Both A and B are equally valid strategies.',
    ],
    correctIndex: 3,
    explanation:
      'Both strategies work: (A) graph f(x) = x³ − 3x − 2 and find x-intercepts (zeros); or (B) graph y = x³ − 3x and y = 2 and find where they intersect. Both give the same solutions. Option D correctly recognizes that either approach is valid.',
    partNumber: 3,
    partTitle: 'Solving Equations Graphically',
  },
  {
    id: 'scals-ent-3b',
    question:
      'You graph y = |2x − 6| and y = 4 on your calculator to solve |2x − 6| = 4. The graph shows two intersection points at x = 1 and x = 5. What does this mean algebraically?',
    options: [
      'The equation has no solution.',
      'The only solution is x = 1.',
      'The solutions are x = 1 and x = 5.',
      'The equation simplifies to 2x − 6 = 4 only.',
    ],
    correctIndex: 2,
    explanation:
      'An absolute value equation |2x − 6| = 4 has two cases: 2x − 6 = 4 (x = 5) and 2x − 6 = −4 (x = 1). The graph confirms both solutions as intersection points. Both are valid solutions.',
    partNumber: 3,
    partTitle: 'Solving Equations Graphically',
  },

  // ── Part 4: Using Tables ──────────────────────────
  {
    id: 'scals-ent-4a',
    question:
      'You use the TABLE function on a graphing calculator and see: x = 0 gives y = −3; x = 1 gives y = 0; x = 2 gives y = 5. What can you immediately conclude?',
    options: [
      'The function has a zero at x = 0.',
      'The function has a zero at x = 1.',
      'The function has a zero between x = 0 and x = 1.',
      'The function is decreasing over the interval shown.',
    ],
    correctIndex: 1,
    explanation:
      'A zero of a function occurs where y = 0. The table shows y = 0 when x = 1, so x = 1 is a zero. (If the table showed a sign change without hitting exactly zero, you would use the Intermediate Value Theorem to locate a root between two values.)',
    partNumber: 4,
    partTitle: 'Using Tables',
  },
  {
    id: 'scals-ent-4b',
    question:
      'On the SAT, a table of values for a linear function shows: (0, 5), (1, 8), (2, 11), (3, 14). What is the equation of the function?',
    options: [
      'y = 3x + 5',
      'y = 5x + 3',
      'y = 3x − 5',
      'y = 2x + 5',
    ],
    correctIndex: 0,
    explanation:
      'The y-value increases by 3 for each unit increase in x, so the slope is 3. The y-intercept is 5 (value when x = 0). Equation: y = 3x + 5. Check: y(2) = 3(2) + 5 = 11 ✓.',
    partNumber: 4,
    partTitle: 'Using Tables',
  },

  // ── Part 5: Estimation Strategies ────────────────
  {
    id: 'scals-ent-5a',
    question:
      'Which estimation technique is most useful for checking whether a calculator answer is reasonable on the SAT?',
    options: [
      'Round all numbers to the nearest thousand before calculating.',
      'Use front-end estimation: round each number to its leading digit and compute mentally.',
      'Divide your calculator answer by 2 to check for errors.',
      'Substitute your answer back into the original problem and verify it satisfies the conditions.',
    ],
    correctIndex: 3,
    explanation:
      'Substituting your answer back into the original problem is the most reliable check—it directly tests whether the answer satisfies all given conditions. Front-end estimation (option B) is also useful for quick sanity checks, but verification by substitution is the gold standard.',
    partNumber: 5,
    partTitle: 'Estimation Strategies',
  },
  {
    id: 'scals-ent-5b',
    question:
      'Without using a calculator, estimate which of the following is closest to √50.',
    options: [
      '6',
      '7',
      '8',
      '25',
    ],
    correctIndex: 1,
    explanation:
      '6² = 36 and 7² = 49 and 8² = 64. Since 49 < 50 < 64, √50 is slightly above 7. Among the choices, 7 is the closest estimate to √50 ≈ 7.07.',
    partNumber: 5,
    partTitle: 'Estimation Strategies',
  },

  // ── Part 6: Problem-Solving Workshop ─────────────
  {
    id: 'scals-ent-6a',
    question:
      'A student needs to find all x-values where f(x) = x³ − 6x² + 9x equals zero. She graphs the function. The graph touches the x-axis at x = 0 and x = 3 but does not cross at x = 3. What does this tell her?',
    options: [
      'x = 3 is not actually a root.',
      'x = 3 is a root of multiplicity 2 (a repeated root), and the graph is tangent to the x-axis there.',
      'The function has no roots.',
      'The graph has an error because a cubic must cross the x-axis three times.',
    ],
    correctIndex: 1,
    explanation:
      'Factor: x³ − 6x² + 9x = x(x² − 6x + 9) = x(x − 3)². The factor (x − 3)² creates a repeated root at x = 3, causing the graph to "bounce" off (touch without crossing) the x-axis at that point. x = 0 is a simple root where the graph does cross.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'scals-ent-6b',
    question:
      'Which setting adjustment on a graphing calculator is MOST important when solving an SAT problem involving the graph of y = sin(x)?',
    options: [
      'Setting the window\'s y-range to [−100, 100].',
      'Switching the angle mode from degrees to radians (or vice versa) to match the problem\'s context.',
      'Changing the color of the graph line.',
      'Increasing the graph\'s resolution by reducing the x-step.',
    ],
    correctIndex: 1,
    explanation:
      'Graphing calculators can be set to degree or radian mode. If the mode does not match the problem\'s context, all values will be wrong. On the SAT, always confirm your calculator is in the correct angle mode before evaluating or graphing trigonometric functions.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },

  // ── Part 7: Review & Applications ────────────────
  {
    id: 'scals-ent-7a',
    question:
      'The SAT now has one Math section. Which of the following is true about calculator use on this section?',
    options: [
      'No calculator is permitted on any part of the SAT Math section.',
      'A calculator is permitted and a Desmos graphing calculator is available in the digital SAT interface.',
      'Only a basic four-function calculator may be used.',
      'Students must bring a physical calculator; no digital calculator is provided.',
    ],
    correctIndex: 1,
    explanation:
      'On the digital SAT (introduced in 2024), a built-in Desmos graphing calculator is available for the entire Math section, in addition to any approved personal calculator the student brings. This makes graphical problem-solving more accessible than ever.',
    partNumber: 7,
    partTitle: 'Review & Applications',
  },
  {
    id: 'scals-ent-7b',
    question:
      'A student uses her calculator to solve 3x² + 7x − 6 = 0 graphically and finds x ≈ 0.667. How can she verify this is a reasonable answer?',
    options: [
      'Substitute x = 0.667 back into 3x² + 7x − 6 and check if the result is approximately 0.',
      'Check that 0.667 appears in the table of values as a y-value.',
      'Confirm that 0.667 × 3 = 2 exactly.',
      'Verify that the discriminant is negative.',
    ],
    correctIndex: 0,
    explanation:
      'Substituting x ≈ 0.667 into 3(0.667)² + 7(0.667) − 6 ≈ 3(0.445) + 4.669 − 6 ≈ 1.335 + 4.669 − 6 ≈ 0.004 ≈ 0 ✓. This confirms the answer is correct to three decimal places. Note: the exact root is x = 2/3.',
    partNumber: 7,
    partTitle: 'Review & Applications',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'When to Use a Calculator' },
    { partNumber: 2, partTitle: 'Graphing Functions' },
    { partNumber: 3, partTitle: 'Solving Equations Graphically' },
    { partNumber: 4, partTitle: 'Using Tables' },
    { partNumber: 5, partTitle: 'Estimation Strategies' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Review & Applications' },
  ]
}
