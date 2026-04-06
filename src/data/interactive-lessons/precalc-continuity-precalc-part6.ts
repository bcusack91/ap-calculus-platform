export const precalcContinuityPart6Data = {
  topicSlug: 'continuity-precalc',
  sections: [
    {
      id: 'precalc-continuity-precalc-p6-s1-intro',
      type: 'text' as const,
      content: `
      ## Continuity: Piecewise definitions and endpoint checks
      
      **Part 6 of 7**
      
      This part focuses on testing continuity in piecewise shipping costs. Keep notation precise and connect each symbolic step to geometric or functional meaning.
      
      ### Core definitions
      - **one-sided limit**: limit from only the left or only the right
      - **IVT**: continuous functions on closed intervals take all intermediate values
      - **piecewise function**: rule changes across intervals of the domain
      
      
      ### Worked Example
      Part 6 uses direct precalculus notation to move from structure to computation.
      
      Start with a model statement, substitute known values, and simplify step by step using exact form first.
      When needed, convert to decimals only after the symbolic setup is complete.
      `
    },
    {
      id: 'precalc-continuity-precalc-p6-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Multiple-choice check (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'Choose the most accurate definition of one-sided limit.',
            options: [
              'value approached by a function as input approaches a target',
              'limit from only the left or only the right',
              'rule changes across intervals of the domain',
              'continuous functions on closed intervals take all intermediate values'
            ],
            correctAnswer: 1,
            explanation: 'one-sided limit is defined as: limit from only the left or only the right.'
          },
          {
            question: 'In testing continuity in piecewise shipping costs, which expression is the best starting model?',
            options: [
              '$\\lim_{x\\to a^-}f(x)=\\lim_{x\\to a^+}f(x)$',
              '$\\lim_{x\\to a} f(x) = f(a)$',
              '$\\frac{x^2-c^2}{x-c}=x+c\\;(x\\neq c)$',
              '$\\frac{f(b)-f(a)}{b-a}$'
            ],
            correctAnswer: 3,
            explanation: 'Use $\\frac{f(b)-f(a)}{b-a}$ first, then substitute known quantities from the prompt.'
          }
        ]
      }
    },
    {
      id: 'precalc-continuity-precalc-p6-s3-deep-dive',
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
      - For piecewise functions, evaluate left limit, right limit, and value separately.
      - A defined value at $x=a$ does not guarantee continuity.
      - Do not classify a vertical asymptote as removable.
      
      ### Precision checks
      1. Identify givens and unknowns before selecting a formula.
      2. Keep exact values through symbolic simplification when possible.
      3. Verify units, angle mode, or domain constraints before finalizing.
      `
    },
    {
      id: 'precalc-continuity-precalc-p6-s4-input',
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
      id: 'precalc-continuity-precalc-p6-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown-select practice (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'one-sided limit',
            options: ['limit from only the left or only the right', 'rule changes across intervals of the domain', 'continuous functions on closed intervals take all intermediate values', 'value approached by a function as input approaches a target']
          },
          {
            label: 'IVT',
            options: ['continuous functions on closed intervals take all intermediate values', 'limit exists and equals the function value', 'value approached by a function as input approaches a target', 'rule changes across intervals of the domain']
          },
          {
            label: 'piecewise function',
            options: ['limit exists and equals the function value', 'value approached by a function as input approaches a target', 'rule changes across intervals of the domain', 'hole created by cancellation or redefinition']
          }
        ],
        correctAnswers: ['limit from only the left or only the right', 'continuous functions on closed intervals take all intermediate values', 'rule changes across intervals of the domain'],
        hint1: 'Match each term to the full definition, not just a keyword.',
        hint2: 'Use elimination by checking whether each definition captures the right dependency.',
        hint3: 'Read the label and option together as one complete mathematical sentence.',
        explanation: 'Correct mapping: one-sided limit, IVT, and piecewise function align with their exact definitions used in this part.'
      }
    },
    {
      id: 'precalc-continuity-precalc-p6-s6-strategy',
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
      
      Tie each step to one-sided limit, IVT, and piecewise function so your reasoning is explicit and checkable.
      `
    },
    {
      id: 'precalc-continuity-precalc-p6-s7-mcq-applied',
      type: 'multiple-choice' as const,
      content: `
      **Applied mixed questions (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'A student is testing continuity in piecewise shipping costs. Which term best anchors the next reasoning step if the key idea is: value approached by a function as input approaches a target?',
            options: [
              'piecewise function',
              'one-sided limit',
              'limit',
              'IVT'
            ],
            correctAnswer: 2,
            explanation: 'limit matches that description and keeps the model-to-interpretation chain consistent.'
          },
          {
            question: 'A student is solving a mixed continuity prompt. Which term best anchors the next reasoning step if the key idea is: limit exists and equals the function value?',
            options: [
              'limit',
              'piecewise function',
              'removable discontinuity',
              'continuity at a point'
            ],
            correctAnswer: 3,
            explanation: 'continuity at a point matches that description and keeps the model-to-interpretation chain consistent.'
          }
        ]
      }
    }
  ]
};
