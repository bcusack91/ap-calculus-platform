export const precalcRatesOfChangePart1Data = {
  topicSlug: 'rates-of-change-precalc',
  sections: [
    {
      id: 'precalc-rates-of-change-precalc-p1-s1-intro',
      type: 'text' as const,
      content: `
      ## Rates of Change: Average rate as slope of secant
      
      **Part 1 of 7**
      
      This part focuses on interpreting distance-time data. Keep notation precise and connect each symbolic step to geometric or functional meaning.
      
      ### Core definitions
      - **average rate of change**: change in output divided by change in input
      - **secant slope**: slope through two points on a graph
      - **unit rate**: rate normalized to one input unit
      
      
      ### Worked Example
      Part 1 uses direct precalculus notation to move from structure to computation.
      
      Start with a model statement, substitute known values, and simplify step by step using exact form first.
      When needed, convert to decimals only after the symbolic setup is complete.
      `
    },
    {
      id: 'precalc-rates-of-change-precalc-p1-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Multiple-choice check (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'Choose the most accurate definition of average rate of change.',
            options: [
              'change in output divided by change in input',
              'slope through two points on a graph',
              'rate normalized to one input unit',
              'interval where function values rise as input increases'
            ],
            correctAnswer: 0,
            explanation: 'average rate of change is defined as: change in output divided by change in input.'
          },
          {
            question: 'In interpreting distance-time data, which expression is the best starting model?',
            options: [
              '$\\frac{\\text{new}-\\text{old}}{\\text{old}}\\cdot 100\\%$',
              '$\\frac{f(b)-f(a)}{b-a}$',
              '$m=\\frac{y_2-y_1}{x_2-x_1}$',
              '$y=mx+b$'
            ],
            correctAnswer: 1,
            explanation: 'Use $\\frac{f(b)-f(a)}{b-a}$ first, then substitute known quantities from the prompt.'
          }
        ]
      }
    },
    {
      id: 'precalc-rates-of-change-precalc-p1-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive: formulas and decision rules
      
      Use this table to pick the right expression before computing.
      
      | Tool | Formula | Best use |
      |---|---|---|
      | Average rate | $\frac{f(b)-f(a)}{b-a}$ | secant computation |
      | Slope | $m=\frac{y_2-y_1}{x_2-x_1}$ | point-pair rate |
      | Percent change | $\frac{\text{new}-\text{old}}{\text{old}}\cdot 100\%$ | relative growth/decline |
      | Linear model | $y=mx+b$ | constant-rate baseline |
      
      ### Common pitfalls
      - A positive average rate on an interval does not force monotonic increase everywhere inside.
      - Rate units must combine output units per input unit.
      - Do not compare rates across intervals without checking interval lengths.
      
      ### Precision checks
      1. Identify givens and unknowns before selecting a formula.
      2. Keep exact values through symbolic simplification when possible.
      3. Verify units, angle mode, or domain constraints before finalizing.
      `
    },
    {
      id: 'precalc-rates-of-change-precalc-p1-s4-input',
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
      id: 'precalc-rates-of-change-precalc-p1-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown-select practice (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'average rate of change',
            options: ['rate normalized to one input unit', 'change in output divided by change in input', 'interval where function values rise as input increases', 'slope through two points on a graph']
          },
          {
            label: 'secant slope',
            options: ['slope through two points on a graph', 'interval where function values fall as input increases', 'interval where function values rise as input increases', 'rate normalized to one input unit']
          },
          {
            label: 'unit rate',
            options: ['interval where function values fall as input increases', 'small-interval trend around one input', 'interval where function values rise as input increases', 'rate normalized to one input unit']
          }
        ],
        correctAnswers: ['change in output divided by change in input', 'slope through two points on a graph', 'rate normalized to one input unit'],
        hint1: 'Match each term to the full definition, not just a keyword.',
        hint2: 'Use elimination by checking whether each definition captures the right dependency.',
        hint3: 'Read the label and option together as one complete mathematical sentence.',
        explanation: 'Correct mapping: average rate of change, secant slope, and unit rate align with their exact definitions used in this part.'
      }
    },
    {
      id: 'precalc-rates-of-change-precalc-p1-s6-strategy',
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
      
      Tie each step to average rate of change, secant slope, and unit rate so your reasoning is explicit and checkable.
      `
    },
    {
      id: 'precalc-rates-of-change-precalc-p1-s7-mcq-applied',
      type: 'multiple-choice' as const,
      content: `
      **Applied mixed questions (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'A student is interpreting distance-time data. Which term best anchors the next reasoning step if the key idea is: interval where function values rise as input increases?',
            options: [
              'average rate of change',
              'unit rate',
              'increasing interval',
              'secant slope'
            ],
            correctAnswer: 2,
            explanation: 'increasing interval matches that description and keeps the model-to-interpretation chain consistent.'
          },
          {
            question: 'A student is solving a mixed rates of change prompt. Which term best anchors the next reasoning step if the key idea is: interval where function values fall as input increases?',
            options: [
              'increasing interval',
              'unit rate',
              'local behavior',
              'decreasing interval'
            ],
            correctAnswer: 3,
            explanation: 'decreasing interval matches that description and keeps the model-to-interpretation chain consistent.'
          }
        ]
      }
    }
  ]
};
