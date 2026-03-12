export const precalcInverseTrigPart6Data = {
  topicSlug: 'inverse-trig-functions-precalc',
  sections: [
    {
      id: 'precalc-inverse-trig-functions-precalc-p6-s1-intro',
      type: 'text' as const,
      content: `
      ## Inverse Trigonometric Functions: Modeling with angle recovery
      
      **Part 6 of 7**
      
      This part focuses on estimating heading from coordinate data. Keep notation precise and connect each symbolic step to geometric or functional meaning.
      
      ### Core definitions
      - **composition**: applying one function to the output of another
      - **reference triangle**: triangle built from known trig ratios
      - **angle normalization**: placing angles inside principal intervals
      
      
      ### Worked Example
      Part 6 uses direct precalculus notation to move from structure to computation.
      
      Start with a model statement, substitute known values, and simplify step by step using exact form first.
      When needed, convert to decimals only after the symbolic setup is complete.
      `
    },
    {
      id: 'precalc-inverse-trig-functions-precalc-p6-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Multiple-choice check (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'Choose the most accurate definition of composition.',
            options: [
              'applying one function to the output of another',
              'triangle built from known trig ratios',
              'standard output interval used by an inverse trig function',
              'placing angles inside principal intervals'
            ],
            correctAnswer: 0,
            explanation: 'composition is defined as: applying one function to the output of another.'
          },
          {
            question: 'In estimating heading from coordinate data, which expression is the best starting model?',
            options: [
              '$\\arctan x + \\arctan\\!\\left(\\frac1x\\right)=\\frac\\pi2\\;(x>0)$',
              '$\\sin(\\arcsin x)=x$',
              '$\\tan(\\arctan x)=x$',
              '$\\arccos x \\in [0,\\pi]$'
            ],
            correctAnswer: 3,
            explanation: 'Use $\\arccos x \\in [0,\\pi]$ first, then substitute known quantities from the prompt.'
          }
        ]
      }
    },
    {
      id: 'precalc-inverse-trig-functions-precalc-p6-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive: formulas and decision rules
      
      Use this table to pick the right expression before computing.
      
      | Tool | Formula | Best use |
      |---|---|---|
      | Principal output | $\arccos x \in [0,\pi]$ | range control |
      | Tangent inverse | $\tan(\arctan x)=x$ | all real inputs |
      | Reciprocal relation | $\arctan x + \arctan\!\left(\frac1x\right)=\frac\pi2\;(x>0)$ | angle decomposition |
      | Inverse identity | $\sin(\arcsin x)=x$ | valid for $x\in[-1,1]$ |
      
      ### Common pitfalls
      - Use principal intervals before comparing equivalent angle expressions.
      - Inverse trig outputs are angles, not raw ratio values.
      - A composition can fail if the inner output leaves the inverse domain.
      
      ### Precision checks
      1. Identify givens and unknowns before selecting a formula.
      2. Keep exact values through symbolic simplification when possible.
      3. Verify units, angle mode, or domain constraints before finalizing.
      `
    },
    {
      id: 'precalc-inverse-trig-functions-precalc-p6-s4-input',
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
      id: 'precalc-inverse-trig-functions-precalc-p6-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown-select practice (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'composition',
            options: ['placing angles inside principal intervals', 'triangle built from known trig ratios', 'standard output interval used by an inverse trig function', 'applying one function to the output of another']
          },
          {
            label: 'reference triangle',
            options: ['placing angles inside principal intervals', 'standard output interval used by an inverse trig function', 'input interval chosen to make trig one-to-one', 'triangle built from known trig ratios']
          },
          {
            label: 'angle normalization',
            options: ['inverse of sine on $[-\\rac\\pi2,\\rac\\pi2]$', 'placing angles inside principal intervals', 'standard output interval used by an inverse trig function', 'input interval chosen to make trig one-to-one']
          }
        ],
        correctAnswers: ['applying one function to the output of another', 'triangle built from known trig ratios', 'placing angles inside principal intervals'],
        hint1: 'Match each term to the full definition, not just a keyword.',
        hint2: 'Use elimination by checking whether each definition captures the right dependency.',
        hint3: 'Read the label and option together as one complete mathematical sentence.',
        explanation: 'Correct mapping: composition, reference triangle, and angle normalization align with their exact definitions used in this part.'
      }
    },
    {
      id: 'precalc-inverse-trig-functions-precalc-p6-s6-strategy',
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
      
      Tie each step to composition, reference triangle, and angle normalization so your reasoning is explicit and checkable.
      `
    },
    {
      id: 'precalc-inverse-trig-functions-precalc-p6-s7-mcq-applied',
      type: 'multiple-choice' as const,
      content: `
      **Applied mixed questions (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'A student is estimating heading from coordinate data. Which term best anchors the next reasoning step if the key idea is: standard output interval used by an inverse trig function?',
            options: [
              'reference triangle',
              'composition',
              'angle normalization',
              'principal value'
            ],
            correctAnswer: 3,
            explanation: 'principal value matches that description and keeps the model-to-interpretation chain consistent.'
          },
          {
            question: 'A student is solving a mixed inverse trigonometric functions prompt. Which term best anchors the next reasoning step if the key idea is: input interval chosen to make trig one-to-one?',
            options: [
              'principal value',
              'arcsin',
              'angle normalization',
              'restricted domain'
            ],
            correctAnswer: 3,
            explanation: 'restricted domain matches that description and keeps the model-to-interpretation chain consistent.'
          }
        ]
      }
    }
  ]
};
