export const precalcInverseTrigPart7Data = {
  topicSlug: 'inverse-trig-functions-precalc',
  sections: [
    {
      id: 'precalc-inverse-trig-functions-precalc-p7-s1-intro',
      type: 'text' as const,
      content: `
      ## Inverse Trigonometric Functions: Mixed inverse-trig synthesis
      
      **Part 7 of 7**
      
      This part focuses on solving mixed principal-value exam tasks. Keep notation precise and connect each symbolic step to geometric or functional meaning.
      
      ### Core definitions
      - **reference triangle**: triangle built from known trig ratios
      - **angle normalization**: placing angles inside principal intervals
      - **principal value**: standard output interval used by an inverse trig function
      
      
      ### Worked Example
      Part 7 uses direct precalculus notation to move from structure to computation.
      
      Start with a model statement, substitute known values, and simplify step by step using exact form first.
      When needed, convert to decimals only after the symbolic setup is complete.
      `
    },
    {
      id: 'precalc-inverse-trig-functions-precalc-p7-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Multiple-choice check (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'Choose the most accurate definition of reference triangle.',
            options: [
              'triangle built from known trig ratios',
              'standard output interval used by an inverse trig function',
              'input interval chosen to make trig one-to-one',
              'placing angles inside principal intervals'
            ],
            correctAnswer: 0,
            explanation: 'reference triangle is defined as: triangle built from known trig ratios.'
          },
          {
            question: 'In solving mixed principal-value exam tasks, which expression is the best starting model?',
            options: [
              '$\\arctan x + \\arctan\\!\\left(\\frac1x\\right)=\\frac\\pi2\\;(x>0)$',
              '$\\sin(\\arcsin x)=x$',
              '$\\arccos x \\in [0,\\pi]$',
              '$\\tan(\\arctan x)=x$'
            ],
            correctAnswer: 3,
            explanation: 'Use $\\tan(\\arctan x)=x$ first, then substitute known quantities from the prompt.'
          }
        ]
      }
    },
    {
      id: 'precalc-inverse-trig-functions-precalc-p7-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive: formulas and decision rules
      
      Use this table to pick the right expression before computing.
      
      | Tool | Formula | Best use |
      |---|---|---|
      | Tangent inverse | $\tan(\arctan x)=x$ | all real inputs |
      | Reciprocal relation | $\arctan x + \arctan\!\left(\frac1x\right)=\frac\pi2\;(x>0)$ | angle decomposition |
      | Inverse identity | $\sin(\arcsin x)=x$ | valid for $x\in[-1,1]$ |
      | Principal output | $\arccos x \in [0,\pi]$ | range control |
      
      ### Common pitfalls
      - Inverse trig outputs are angles, not raw ratio values.
      - A composition can fail if the inner output leaves the inverse domain.
      - Use principal intervals before comparing equivalent angle expressions.
      
      ### Precision checks
      1. Identify givens and unknowns before selecting a formula.
      2. Keep exact values through symbolic simplification when possible.
      3. Verify units, angle mode, or domain constraints before finalizing.
      `
    },
    {
      id: 'precalc-inverse-trig-functions-precalc-p7-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — Inverse Trig Values**
      
      Use degree values for angle outputs when prompted.
      
      1) Compute $rcsin\left(
      rac{1}{2}
      ight)$ in degrees.
      2) Compute $rccos\left(
      rac{\sqrt{2}}{2}
      ight)$ in degrees.
      3) Compute $\\an(rctan(
      rac{3}{4}))$.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['30', '45', '0.75'],
        hint1: 'Use principal range for arcsin.',
        hint2: 'Use principal range for arccos.',
        hint3: 'A function and its inverse undo each other on valid inputs.',
        explanation: 'Principal angles are 30° and 45°, and composition returns 0.75.'
      }
    },
    {
      id: 'precalc-inverse-trig-functions-precalc-p7-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown-select practice (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'reference triangle',
            options: ['triangle built from known trig ratios', 'placing angles inside principal intervals', 'standard output interval used by an inverse trig function', 'input interval chosen to make trig one-to-one']
          },
          {
            label: 'angle normalization',
            options: ['inverse of sine on $[-\\rac\\pi2,\\rac\\pi2]$', 'standard output interval used by an inverse trig function', 'placing angles inside principal intervals', 'input interval chosen to make trig one-to-one']
          },
          {
            label: 'principal value',
            options: ['standard output interval used by an inverse trig function', 'inverse of sine on $[-\\rac\\pi2,\\rac\\pi2]$', 'input interval chosen to make trig one-to-one', 'inverse of cosine on $[0,\\pi]$']
          }
        ],
        correctAnswers: ['triangle built from known trig ratios', 'placing angles inside principal intervals', 'standard output interval used by an inverse trig function'],
        hint1: 'Match each term to the full definition, not just a keyword.',
        hint2: 'Use elimination by checking whether each definition captures the right dependency.',
        hint3: 'Read the label and option together as one complete mathematical sentence.',
        explanation: 'Correct mapping: reference triangle, angle normalization, and principal value align with their exact definitions used in this part.'
      }
    },
    {
      id: 'precalc-inverse-trig-functions-precalc-p7-s6-strategy',
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
      
      Tie each step to reference triangle, angle normalization, and principal value so your reasoning is explicit and checkable.
      `
    },
    {
      id: 'precalc-inverse-trig-functions-precalc-p7-s7-mcq-applied',
      type: 'multiple-choice' as const,
      content: `
      **Applied mixed questions (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'A student is solving mixed principal-value exam tasks. Which term best anchors the next reasoning step if the key idea is: input interval chosen to make trig one-to-one?',
            options: [
              'reference triangle',
              'angle normalization',
              'principal value',
              'restricted domain'
            ],
            correctAnswer: 3,
            explanation: 'restricted domain matches that description and keeps the model-to-interpretation chain consistent.'
          },
          {
            question: 'A student is solving a mixed inverse trigonometric functions prompt. Which term best anchors the next reasoning step if the key idea is: inverse of sine on $[-\\rac\\pi2,\\rac\\pi2]$?',
            options: [
              'restricted domain',
              'arccos',
              'arcsin',
              'principal value'
            ],
            correctAnswer: 2,
            explanation: 'arcsin matches that description and keeps the model-to-interpretation chain consistent.'
          }
        ]
      }
    }
  ]
};
