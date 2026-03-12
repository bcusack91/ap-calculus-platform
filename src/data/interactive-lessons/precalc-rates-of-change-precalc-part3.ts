export const precalcRatesOfChangePart3Data = {
  topicSlug: 'rates-of-change-precalc',
  sections: [
    {
      id: 'precalc-rates-of-change-precalc-p3-s1-intro',
      type: 'text' as const,
      content: `
      ## Rates of Change: Comparing linear and nonlinear changes
      
      **Part 3 of 7**
      
      This part focuses on comparing linear approximation against curved trends. Keep notation precise and connect each symbolic step to geometric or functional meaning.
      
      ### Core definitions
      - **unit rate**: rate normalized to one input unit
      - **increasing interval**: interval where function values rise as input increases
      - **decreasing interval**: interval where function values fall as input increases
      
      
      ### Worked Example
      Part 3 uses direct precalculus notation to move from structure to computation.
      
      Start with a model statement, substitute known values, and simplify step by step using exact form first.
      When needed, convert to decimals only after the symbolic setup is complete.
      `
    },
    {
      id: 'precalc-rates-of-change-precalc-p3-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Multiple-choice check (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'Choose the most accurate definition of unit rate.',
            options: [
              'small-interval trend around one input',
              'interval where function values fall as input increases',
              'interval where function values rise as input increases',
              'rate normalized to one input unit'
            ],
            correctAnswer: 3,
            explanation: 'unit rate is defined as: rate normalized to one input unit.'
          },
          {
            question: 'In comparing linear approximation against curved trends, which expression is the best starting model?',
            options: [
              '$\\frac{\\text{new}-\\text{old}}{\\text{old}}\\cdot 100\\%$',
              '$\\frac{f(b)-f(a)}{b-a}$',
              '$m=\\frac{y_2-y_1}{x_2-x_1}$',
              '$y=mx+b$'
            ],
            correctAnswer: 0,
            explanation: 'Use $\\frac{\\text{new}-\\text{old}}{\\text{old}}\\cdot 100\\%$ first, then substitute known quantities from the prompt.'
          }
        ]
      }
    },
    {
      id: 'precalc-rates-of-change-precalc-p3-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive: formulas and decision rules
      
      Use this table to pick the right expression before computing.
      
      | Tool | Formula | Best use |
      |---|---|---|
      | Percent change | $\frac{\text{new}-\text{old}}{\text{old}}\cdot 100\%$ | relative growth/decline |
      | Linear model | $y=mx+b$ | constant-rate baseline |
      | Average rate | $\frac{f(b)-f(a)}{b-a}$ | secant computation |
      | Slope | $m=\frac{y_2-y_1}{x_2-x_1}$ | point-pair rate |
      
      ### Common pitfalls
      - Do not compare rates across intervals without checking interval lengths.
      - A positive average rate on an interval does not force monotonic increase everywhere inside.
      - Rate units must combine output units per input unit.
      
      ### Precision checks
      1. Identify givens and unknowns before selecting a formula.
      2. Keep exact values through symbolic simplification when possible.
      3. Verify units, angle mode, or domain constraints before finalizing.
      `
    },
    {
      id: 'precalc-rates-of-change-precalc-p3-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — Rate Calculations**
      
      1) Compute average rate for $f(x)=x^2$ on $[2,5]$.
      2) Find slope through $(1,3)$ and $(4,15)$.
      3) Compute percent change from 50 to 65.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['7', '4', '30'],
        hint1: 'Use $\\rac{f(5)-f(2)}{5-2}$.',
        hint2: 'Use slope formula with ordered pairs.',
        hint3: 'Relative change is $\\rac{15}{50}\\cdot100\\%$.',
        explanation: 'Average rate is 7, secant slope is 4, and percent increase is 30%.'
      }
    },
    {
      id: 'precalc-rates-of-change-precalc-p3-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown-select practice (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'unit rate',
            options: ['interval where function values fall as input increases', 'interval where function values rise as input increases', 'rate normalized to one input unit', 'small-interval trend around one input']
          },
          {
            label: 'increasing interval',
            options: ['interval where function values rise as input increases', 'interval where function values fall as input increases', 'relative change expressed as a percent', 'small-interval trend around one input']
          },
          {
            label: 'decreasing interval',
            options: ['interval where function values fall as input increases', 'how well a function captures observed change', 'small-interval trend around one input', 'relative change expressed as a percent']
          }
        ],
        correctAnswers: ['rate normalized to one input unit', 'interval where function values rise as input increases', 'interval where function values fall as input increases'],
        hint1: 'Match each term to the full definition, not just a keyword.',
        hint2: 'Use elimination by checking whether each definition captures the right dependency.',
        hint3: 'Read the label and option together as one complete mathematical sentence.',
        explanation: 'Correct mapping: unit rate, increasing interval, and decreasing interval align with their exact definitions used in this part.'
      }
    },
    {
      id: 'precalc-rates-of-change-precalc-p3-s6-strategy',
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
      
      Tie each step to unit rate, increasing interval, and decreasing interval so your reasoning is explicit and checkable.
      `
    },
    {
      id: 'precalc-rates-of-change-precalc-p3-s7-mcq-applied',
      type: 'multiple-choice' as const,
      content: `
      **Applied mixed questions (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'A student is comparing linear approximation against curved trends. Which term best anchors the next reasoning step if the key idea is: small-interval trend around one input?',
            options: [
              'decreasing interval',
              'local behavior',
              'unit rate',
              'increasing interval'
            ],
            correctAnswer: 1,
            explanation: 'local behavior matches that description and keeps the model-to-interpretation chain consistent.'
          },
          {
            question: 'A student is solving a mixed rates of change prompt. Which term best anchors the next reasoning step if the key idea is: relative change expressed as a percent?',
            options: [
              'model fit',
              'local behavior',
              'decreasing interval',
              'percent change'
            ],
            correctAnswer: 3,
            explanation: 'percent change matches that description and keeps the model-to-interpretation chain consistent.'
          }
        ]
      }
    }
  ]
};
