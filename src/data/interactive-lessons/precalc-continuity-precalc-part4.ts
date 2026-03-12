export const precalcContinuityPart4Data = {
  topicSlug: 'continuity-precalc',
  sections: [
    {
      id: 'precalc-continuity-precalc-p4-s1-intro',
      type: 'text' as const,
      content: `
      ## Continuity: Discontinuity types and diagnostics
      
      **Part 4 of 7**
      
      This part focuses on classifying removable versus jump breaks. Keep notation precise and connect each symbolic step to geometric or functional meaning.
      
      ### Core definitions
      - **jump discontinuity**: left and right limits exist but are unequal
      - **infinite discontinuity**: function grows without bound near a point
      - **one-sided limit**: limit from only the left or only the right
      
      
      ### Worked Example
      Part 4 uses direct precalculus notation to move from structure to computation.
      
      Start with a model statement, substitute known values, and simplify step by step using exact form first.
      When needed, convert to decimals only after the symbolic setup is complete.
      `
    },
    {
      id: 'precalc-continuity-precalc-p4-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Multiple-choice check (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'Choose the most accurate definition of jump discontinuity.',
            options: [
              'left and right limits exist but are unequal',
              'continuous functions on closed intervals take all intermediate values',
              'function grows without bound near a point',
              'limit from only the left or only the right'
            ],
            correctAnswer: 0,
            explanation: 'jump discontinuity is defined as: left and right limits exist but are unequal.'
          },
          {
            question: 'In classifying removable versus jump breaks, which expression is the best starting model?',
            options: [
              '$\\lim_{x\\to a^-}f(x)=\\lim_{x\\to a^+}f(x)$',
              '$\\lim_{x\\to a} f(x) = f(a)$',
              '$\\frac{x^2-c^2}{x-c}=x+c\\;(x\\neq c)$',
              '$\\frac{f(b)-f(a)}{b-a}$'
            ],
            correctAnswer: 2,
            explanation: 'Use $\\frac{x^2-c^2}{x-c}=x+c\\;(x\\neq c)$ first, then substitute known quantities from the prompt.'
          }
        ]
      }
    },
    {
      id: 'precalc-continuity-precalc-p4-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive: formulas and decision rules
      
      Use this table to pick the right expression before computing.
      
      | Tool | Formula | Best use |
      |---|---|---|
      | Rational hole repair | $\frac{x^2-c^2}{x-c}=x+c\;(x\neq c)$ | removable discontinuity cleanup |
      | Continuity test | $\lim_{x\to a} f(x) = f(a)$ | pointwise verification |
      | Average rate | $\frac{f(b)-f(a)}{b-a}$ | bridge to local behavior |
      | One-sided match | $\lim_{x\to a^-}f(x)=\lim_{x\to a^+}f(x)$ | two-sided existence |
      
      ### Common pitfalls
      - A defined value at $x=a$ does not guarantee continuity.
      - Do not classify a vertical asymptote as removable.
      - For piecewise functions, evaluate left limit, right limit, and value separately.
      
      ### Precision checks
      1. Identify givens and unknowns before selecting a formula.
      2. Keep exact values through symbolic simplification when possible.
      3. Verify units, angle mode, or domain constraints before finalizing.
      `
    },
    {
      id: 'precalc-continuity-precalc-p4-s4-input',
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
      id: 'precalc-continuity-precalc-p4-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown-select practice (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'jump discontinuity',
            options: ['function grows without bound near a point', 'left and right limits exist but are unequal', 'continuous functions on closed intervals take all intermediate values', 'limit from only the left or only the right']
          },
          {
            label: 'infinite discontinuity',
            options: ['rule changes across intervals of the domain', 'function grows without bound near a point', 'continuous functions on closed intervals take all intermediate values', 'limit from only the left or only the right']
          },
          {
            label: 'one-sided limit',
            options: ['continuous functions on closed intervals take all intermediate values', 'value approached by a function as input approaches a target', 'limit from only the left or only the right', 'rule changes across intervals of the domain']
          }
        ],
        correctAnswers: ['left and right limits exist but are unequal', 'function grows without bound near a point', 'limit from only the left or only the right'],
        hint1: 'Match each term to the full definition, not just a keyword.',
        hint2: 'Use elimination by checking whether each definition captures the right dependency.',
        hint3: 'Read the label and option together as one complete mathematical sentence.',
        explanation: 'Correct mapping: jump discontinuity, infinite discontinuity, and one-sided limit align with their exact definitions used in this part.'
      }
    },
    {
      id: 'precalc-continuity-precalc-p4-s6-strategy',
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
      
      Tie each step to jump discontinuity, infinite discontinuity, and one-sided limit so your reasoning is explicit and checkable.
      `
    },
    {
      id: 'precalc-continuity-precalc-p4-s7-mcq-applied',
      type: 'multiple-choice' as const,
      content: `
      **Applied mixed questions (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'A student is classifying removable versus jump breaks. Which term best anchors the next reasoning step if the key idea is: continuous functions on closed intervals take all intermediate values?',
            options: [
              'jump discontinuity',
              'IVT',
              'infinite discontinuity',
              'one-sided limit'
            ],
            correctAnswer: 1,
            explanation: 'IVT matches that description and keeps the model-to-interpretation chain consistent.'
          },
          {
            question: 'A student is solving a mixed continuity prompt. Which term best anchors the next reasoning step if the key idea is: rule changes across intervals of the domain?',
            options: [
              'piecewise function',
              'limit',
              'one-sided limit',
              'IVT'
            ],
            correctAnswer: 0,
            explanation: 'piecewise function matches that description and keeps the model-to-interpretation chain consistent.'
          }
        ]
      }
    }
  ]
};
