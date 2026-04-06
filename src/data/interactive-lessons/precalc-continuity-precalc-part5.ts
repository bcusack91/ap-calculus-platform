export const precalcContinuityPart5Data = {
  topicSlug: 'continuity-precalc',
  sections: [
    {
      id: 'precalc-continuity-precalc-p5-s1-intro',
      type: 'text' as const,
      content: `
      ## Continuity: Intermediate Value Theorem reasoning
      
      **Part 5 of 7**
      
      This part focuses on guaranteeing a target value is reached. Keep notation precise and connect each symbolic step to geometric or functional meaning.
      
      ### Core definitions
      - **infinite discontinuity**: function grows without bound near a point
      - **one-sided limit**: limit from only the left or only the right
      - **IVT**: continuous functions on closed intervals take all intermediate values
      
      
      ### Worked Example
      Part 5 uses direct precalculus notation to move from structure to computation.
      
      Start with a model statement, substitute known values, and simplify step by step using exact form first.
      When needed, convert to decimals only after the symbolic setup is complete.
      `
    },
    {
      id: 'precalc-continuity-precalc-p5-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Multiple-choice check (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'Choose the most accurate definition of infinite discontinuity.',
            options: [
              'rule changes across intervals of the domain',
              'limit from only the left or only the right',
              'function grows without bound near a point',
              'continuous functions on closed intervals take all intermediate values'
            ],
            correctAnswer: 2,
            explanation: 'infinite discontinuity is defined as: function grows without bound near a point.'
          },
          {
            question: 'In guaranteeing a target value is reached, which expression is the best starting model?',
            options: [
              '$\\frac{f(b)-f(a)}{b-a}$',
              '$\\lim_{x\\to a} f(x) = f(a)$',
              '$\\lim_{x\\to a^-}f(x)=\\lim_{x\\to a^+}f(x)$',
              '$\\frac{x^2-c^2}{x-c}=x+c\\;(x\\neq c)$'
            ],
            correctAnswer: 1,
            explanation: 'Use $\\lim_{x\\to a} f(x) = f(a)$ first, then substitute known quantities from the prompt.'
          }
        ]
      }
    },
    {
      id: 'precalc-continuity-precalc-p5-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive: formulas and decision rules
      
      Use this table to pick the right expression before computing.
      
      | Tool | Formula | Best use |
      |---|---|---|
      | Continuity test | $\lim_{x\\to a} f(x) = f(a)$ | pointwise verification |
      | Average rate | $\\frac{f(b)-f(a)}{b-a}$ | bridge to local behavior |
      | One-sided match | $\lim_{x\\to a^-}f(x)=\lim_{x\\to a^+}f(x)$ | two-sided existence |
      | Rational hole repair | $\\frac{x^2-c^2}{x-c}=x+c\;(x\\neq c)$ | removable discontinuity cleanup |
      
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
      id: 'precalc-continuity-precalc-p5-s4-input',
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
      id: 'precalc-continuity-precalc-p5-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown-select practice (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'infinite discontinuity',
            options: ['function grows without bound near a point', 'rule changes across intervals of the domain', 'continuous functions on closed intervals take all intermediate values', 'limit from only the left or only the right']
          },
          {
            label: 'one-sided limit',
            options: ['limit from only the left or only the right', 'continuous functions on closed intervals take all intermediate values', 'rule changes across intervals of the domain', 'value approached by a function as input approaches a target']
          },
          {
            label: 'IVT',
            options: ['continuous functions on closed intervals take all intermediate values', 'value approached by a function as input approaches a target', 'limit exists and equals the function value', 'rule changes across intervals of the domain']
          }
        ],
        correctAnswers: ['function grows without bound near a point', 'limit from only the left or only the right', 'continuous functions on closed intervals take all intermediate values'],
        hint1: 'Match each term to the full definition, not just a keyword.',
        hint2: 'Use elimination by checking whether each definition captures the right dependency.',
        hint3: 'Read the label and option together as one complete mathematical sentence.',
        explanation: 'Correct mapping: infinite discontinuity, one-sided limit, and IVT align with their exact definitions used in this part.'
      }
    },
    {
      id: 'precalc-continuity-precalc-p5-s6-strategy',
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
      
      Tie each step to infinite discontinuity, one-sided limit, and IVT so your reasoning is explicit and checkable.
      `
    },
    {
      id: 'precalc-continuity-precalc-p5-s7-mcq-applied',
      type: 'multiple-choice' as const,
      content: `
      **Applied mixed questions (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'A student is guaranteeing a target value is reached. Which term best anchors the next reasoning step if the key idea is: rule changes across intervals of the domain?',
            options: [
              'IVT',
              'infinite discontinuity',
              'one-sided limit',
              'piecewise function'
            ],
            correctAnswer: 3,
            explanation: 'piecewise function matches that description and keeps the model-to-interpretation chain consistent.'
          },
          {
            question: 'A student is solving a mixed continuity prompt. Which term best anchors the next reasoning step if the key idea is: value approached by a function as input approaches a target?',
            options: [
              'piecewise function',
              'continuity at a point',
              'IVT',
              'limit'
            ],
            correctAnswer: 3,
            explanation: 'limit matches that description and keeps the model-to-interpretation chain consistent.'
          }
        ]
      }
    }
  ]
};
