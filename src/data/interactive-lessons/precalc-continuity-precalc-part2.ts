export const precalcContinuityPart2Data = {
  topicSlug: 'continuity-precalc',
  sections: [
    {
      id: 'precalc-continuity-precalc-p2-s1-intro',
      type: 'text' as const,
      content: `
      ## Continuity: Formal continuity at a point
      
      **Part 2 of 7**
      
      This part focuses on validating sensor calibration curves. Keep notation precise and connect each symbolic step to geometric or functional meaning.
      
      ### Core definitions
      - **continuity at a point**: limit exists and equals the function value
      - **removable discontinuity**: hole created by cancellation or redefinition
      - **jump discontinuity**: left and right limits exist but are unequal
      
      
      ### Worked Example
      Part 2 uses direct precalculus notation to move from structure to computation.
      
      Start with a model statement, substitute known values, and simplify step by step using exact form first.
      When needed, convert to decimals only after the symbolic setup is complete.
      `
    },
    {
      id: 'precalc-continuity-precalc-p2-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Multiple-choice check (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'Choose the most accurate definition of continuity at a point.',
            options: [
              'limit exists and equals the function value',
              'left and right limits exist but are unequal',
              'function grows without bound near a point',
              'hole created by cancellation or redefinition'
            ],
            correctAnswer: 0,
            explanation: 'continuity at a point is defined as: limit exists and equals the function value.'
          },
          {
            question: 'In validating sensor calibration curves, which expression is the best starting model?',
            options: [
              '$\\frac{f(b)-f(a)}{b-a}$',
              '$\\lim_{x\\to a^-}f(x)=\\lim_{x\\to a^+}f(x)$',
              '$\\frac{x^2-c^2}{x-c}=x+c\\;(x\\neq c)$',
              '$\\lim_{x\\to a} f(x) = f(a)$'
            ],
            correctAnswer: 0,
            explanation: 'Use $\\frac{f(b)-f(a)}{b-a}$ first, then substitute known quantities from the prompt.'
          }
        ]
      }
    },
    {
      id: 'precalc-continuity-precalc-p2-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive: formulas and decision rules
      
      Use this table to pick the right expression before computing.
      
      | Tool | Formula | Best use |
      |---|---|---|
      | Average rate | $\\frac{f(b)-f(a)}{b-a}$ | bridge to local behavior |
      | One-sided match | $\lim_{x\\to a^-}f(x)=\lim_{x\\to a^+}f(x)$ | two-sided existence |
      | Rational hole repair | $\\frac{x^2-c^2}{x-c}=x+c\;(x\\neq c)$ | removable discontinuity cleanup |
      | Continuity test | $\lim_{x\\to a} f(x) = f(a)$ | pointwise verification |
      
      ### Common pitfalls
      - Do not classify a vertical asymptote as removable.
      - For piecewise functions, evaluate left limit, right limit, and value separately.
      - A defined value at $x=a$ does not guarantee continuity.
      
      ### Precision checks
      1. Identify givens and unknowns before selecting a formula.
      2. Keep exact values through symbolic simplification when possible.
      3. Verify units, angle mode, or domain constraints before finalizing.
      `
    },
    {
      id: 'precalc-continuity-precalc-p2-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — Continuity and Limits**
      
      1) Compute $\lim_{x	o 3} (2x^2-x)$. 
      2) Compute $
      rac{f(5)-f(2)}{5-2}$ for $f(x)=x^2$.
      3) Compute $\lim_{x	o 4}
      rac{x^2-16}{x-4}$.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['15', '7', '8'],
        hint1: 'Polynomials are continuous, so substitute directly.',
        hint2: 'Use average rate of change with two function values.',
        hint3: 'Factor numerator as $(x-4)(x+4)$ before canceling.',
        explanation: 'Direct substitution gives 15, average rate gives 7, and simplification gives 8.'
      }
    },
    {
      id: 'precalc-continuity-precalc-p2-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown-select practice (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'continuity at a point',
            options: ['limit exists and equals the function value', 'left and right limits exist but are unequal', 'hole created by cancellation or redefinition', 'function grows without bound near a point']
          },
          {
            label: 'removable discontinuity',
            options: ['hole created by cancellation or redefinition', 'limit from only the left or only the right', 'left and right limits exist but are unequal', 'function grows without bound near a point']
          },
          {
            label: 'jump discontinuity',
            options: ['limit from only the left or only the right', 'function grows without bound near a point', 'continuous functions on closed intervals take all intermediate values', 'left and right limits exist but are unequal']
          }
        ],
        correctAnswers: ['limit exists and equals the function value', 'hole created by cancellation or redefinition', 'left and right limits exist but are unequal'],
        hint1: 'Match each term to the full definition, not just a keyword.',
        hint2: 'Use elimination by checking whether each definition captures the right dependency.',
        hint3: 'Read the label and option together as one complete mathematical sentence.',
        explanation: 'Correct mapping: continuity at a point, removable discontinuity, and jump discontinuity align with their exact definitions used in this part.'
      }
    },
    {
      id: 'precalc-continuity-precalc-p2-s6-strategy',
      type: 'text' as const,
      content: `
      ### Strategy: graphing, calculator, and exam tactics
      
      **Graphing tactics**
      - Sketch anchor points or intercept behavior before detailed algebra.
      - Use symmetry, domain limits, and asymptotes to verify shape quickly.
      
      **Calculator tactics**
      - Confirm angle mode before trig operations.
      - Store intermediate values to avoid rounded drift.
      - Use table mode to test reasonableness around key inputs.
      
      **Exam tactics**
      - Translate words to symbols first, then choose the matching formula family.
      - Eliminate options that violate domain or structure.
      - If two choices are close, substitute back into the original relationship.
      
      Tie each step to continuity at a point, removable discontinuity, and jump discontinuity so your reasoning is explicit and checkable.
      `
    },
    {
      id: 'precalc-continuity-precalc-p2-s7-mcq-applied',
      type: 'multiple-choice' as const,
      content: `
      **Applied mixed questions (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'A student is validating sensor calibration curves. Which term best anchors the next reasoning step if the key idea is: function grows without bound near a point?',
            options: [
              'removable discontinuity',
              'infinite discontinuity',
              'jump discontinuity',
              'continuity at a point'
            ],
            correctAnswer: 1,
            explanation: 'infinite discontinuity matches that description and keeps the model-to-interpretation chain consistent.'
          },
          {
            question: 'A student is solving a mixed continuity prompt. Which term best anchors the next reasoning step if the key idea is: limit from only the left or only the right?',
            options: [
              'infinite discontinuity',
              'IVT',
              'one-sided limit',
              'jump discontinuity'
            ],
            correctAnswer: 2,
            explanation: 'one-sided limit matches that description and keeps the model-to-interpretation chain consistent.'
          }
        ]
      }
    }
  ]
};
