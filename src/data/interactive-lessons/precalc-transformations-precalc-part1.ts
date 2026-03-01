export const precalcTransformationsPart1Data = {
  topicSlug: 'transformations-precalc',
  sections: [
    {
      id: 'precalc-transformations-precalc-p1-s1-intro',
      type: 'text' as const,
      content: `
      ## Function Transformations: Parent functions and baseline shapes
      
      **Part 1 of 7**
      
      This part focuses on matching altered graphs to formulas. Keep notation precise and connect each symbolic step to geometric or functional meaning.
      
      ### Core definitions
      - **parent function**: base graph before transformations
      - **vertical shift**: adds constant outside function value
      - **horizontal shift**: replaces $x$ with $x-h$ inside input
      
      
      ### Worked Example
      Part 1 uses direct precalculus notation to move from structure to computation.
      
      Start with a model statement, substitute known values, and simplify step by step using exact form first.
      When needed, convert to decimals only after the symbolic setup is complete.
      `
    },
    {
      id: 'precalc-transformations-precalc-p1-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Multiple-choice check (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'Choose the most accurate definition of parent function.',
            options: [
              'adds constant outside function value',
              'multiplies input or output by $-1$',
              'replaces $x$ with $x-h$ inside input',
              'base graph before transformations'
            ],
            correctAnswer: 3,
            explanation: 'parent function is defined as: base graph before transformations.'
          },
          {
            question: 'In matching altered graphs to formulas, which expression is the best starting model?',
            options: [
              '$g(x)=a\\,f(b(x-h))+k$',
              '$f(x-h)$',
              '$-f(x),\\;f(-x)$',
              '$f(x)+k$'
            ],
            correctAnswer: 0,
            explanation: 'Use $g(x)=a\\,f(b(x-h))+k$ first, then substitute known quantities from the prompt.'
          }
        ]
      }
    },
    {
      id: 'precalc-transformations-precalc-p1-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive: formulas and decision rules
      
      Use this table to pick the right expression before computing.
      
      | Tool | Formula | Best use |
      |---|---|---|
      | General transform | $g(x)=a\,f(b(x-h))+k$ | all major parameter moves |
      | Horizontal shift | $f(x-h)$ | right by $h$ when $h>0$ |
      | Vertical shift | $f(x)+k$ | up by $k$ when $k>0$ |
      | Reflections | $-f(x),\;f(-x)$ | over $x$-axis and $y$-axis |
      
      ### Common pitfalls
      - Inside changes reverse intuitive direction for horizontal moves.
      - A negative outside coefficient reflects across the $x$-axis.
      - Apply transformations in the order implied by expression structure.
      
      ### Precision checks
      1. Identify givens and unknowns before selecting a formula.
      2. Keep exact values through symbolic simplification when possible.
      3. Verify units, angle mode, or domain constraints before finalizing.
      `
    },
    {
      id: 'precalc-transformations-precalc-p1-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — Transformation Parameters**
      
      1) In $g(x)=f(x-3)+2$, how many units right is the graph shifted?
      2) In $y=-2f(x)$, what is the vertical stretch factor magnitude?
      3) If $f(x)=x^2$, compute $f(-4)$.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['3', '2', '16'],
        hint1: 'Inside subtraction shifts right.',
        hint2: 'Read absolute value of outside multiplier.',
        hint3: 'Square the input after substitution.',
        explanation: 'Shift is 3 right, stretch magnitude is 2, and $f(-4)=16$.'
      }
    },
    {
      id: 'precalc-transformations-precalc-p1-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown-select practice (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'parent function',
            options: ['multiplies input or output by $-1$', 'replaces $x$ with $x-h$ inside input', 'adds constant outside function value', 'base graph before transformations']
          },
          {
            label: 'vertical shift',
            options: ['multiplies output by factor with magnitude $>1$', 'replaces $x$ with $x-h$ inside input', 'multiplies input or output by $-1$', 'adds constant outside function value']
          },
          {
            label: 'horizontal shift',
            options: ['scales graph toward an axis', 'replaces $x$ with $x-h$ inside input', 'multiplies input or output by $-1$', 'multiplies output by factor with magnitude $>1$']
          }
        ],
        correctAnswers: ['base graph before transformations', 'adds constant outside function value', 'replaces $x$ with $x-h$ inside input'],
        hint1: 'Match each term to the full definition, not just a keyword.',
        hint2: 'Use elimination by checking whether each definition captures the right dependency.',
        hint3: 'Read the label and option together as one complete mathematical sentence.',
        explanation: 'Correct mapping: parent function, vertical shift, and horizontal shift align with their exact definitions used in this part.'
      }
    },
    {
      id: 'precalc-transformations-precalc-p1-s6-strategy',
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
      
      Tie each step to parent function, vertical shift, and horizontal shift so your reasoning is explicit and checkable.
      `
    },
    {
      id: 'precalc-transformations-precalc-p1-s7-mcq-applied',
      type: 'multiple-choice' as const,
      content: `
      **Applied mixed questions (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'A student is matching altered graphs to formulas. Which term best anchors the next reasoning step if the key idea is: multiplies input or output by $-1$?',
            options: [
              'vertical shift',
              'reflection',
              'parent function',
              'horizontal shift'
            ],
            correctAnswer: 1,
            explanation: 'reflection matches that description and keeps the model-to-interpretation chain consistent.'
          },
          {
            question: 'A student is solving a mixed function transformations prompt. Which term best anchors the next reasoning step if the key idea is: multiplies output by factor with magnitude $>1$?',
            options: [
              'reflection',
              'compression',
              'horizontal shift',
              'vertical stretch'
            ],
            correctAnswer: 3,
            explanation: 'vertical stretch matches that description and keeps the model-to-interpretation chain consistent.'
          }
        ]
      }
    }
  ]
};
