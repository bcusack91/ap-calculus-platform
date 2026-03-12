export const precalcTransformationsPart4Data = {
  topicSlug: 'transformations-precalc',
  sections: [
    {
      id: 'precalc-transformations-precalc-p4-s1-intro',
      type: 'text' as const,
      content: `
      ## Function Transformations: Stretches and compressions
      
      **Part 4 of 7**
      
      This part focuses on comparing scaling effects on steepness. Keep notation precise and connect each symbolic step to geometric or functional meaning.
      
      ### Core definitions
      - **reflection**: multiplies input or output by $-1$
      - **vertical stretch**: multiplies output by factor with magnitude $>1$
      - **compression**: scales graph toward an axis
      
      
      ### Worked Example
      Part 4 uses direct precalculus notation to move from structure to computation.
      
      Start with a model statement, substitute known values, and simplify step by step using exact form first.
      When needed, convert to decimals only after the symbolic setup is complete.
      `
    },
    {
      id: 'precalc-transformations-precalc-p4-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Multiple-choice check (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'Choose the most accurate definition of reflection.',
            options: [
              'scales graph toward an axis',
              'multiplies output by factor with magnitude $>1$',
              'multiple transformations applied to one parent',
              'multiplies input or output by $-1$'
            ],
            correctAnswer: 3,
            explanation: 'reflection is defined as: multiplies input or output by $-1$.'
          },
          {
            question: 'In comparing scaling effects on steepness, which expression is the best starting model?',
            options: [
              '$f(x)+k$',
              '$g(x)=a\\,f(b(x-h))+k$',
              '$f(x-h)$',
              '$-f(x),\\;f(-x)$'
            ],
            correctAnswer: 3,
            explanation: 'Use $-f(x),\\;f(-x)$ first, then substitute known quantities from the prompt.'
          }
        ]
      }
    },
    {
      id: 'precalc-transformations-precalc-p4-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive: formulas and decision rules
      
      Use this table to pick the right expression before computing.
      
      | Tool | Formula | Best use |
      |---|---|---|
      | Reflections | $-f(x),\;f(-x)$ | over $x$-axis and $y$-axis |
      | General transform | $g(x)=a\,f(b(x-h))+k$ | all major parameter moves |
      | Horizontal shift | $f(x-h)$ | right by $h$ when $h>0$ |
      | Vertical shift | $f(x)+k$ | up by $k$ when $k>0$ |
      
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
      id: 'precalc-transformations-precalc-p4-s4-input',
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
      id: 'precalc-transformations-precalc-p4-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown-select practice (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'reflection',
            options: ['scales graph toward an axis', 'multiple transformations applied to one parent', 'multiplies output by factor with magnitude $>1$', 'multiplies input or output by $-1$']
          },
          {
            label: 'vertical stretch',
            options: ['point unchanged by selected transformation', 'scales graph toward an axis', 'multiplies output by factor with magnitude $>1$', 'multiple transformations applied to one parent']
          },
          {
            label: 'compression',
            options: ['base graph before transformations', 'point unchanged by selected transformation', 'scales graph toward an axis', 'multiple transformations applied to one parent']
          }
        ],
        correctAnswers: ['multiplies input or output by $-1$', 'multiplies output by factor with magnitude $>1$', 'scales graph toward an axis'],
        hint1: 'Match each term to the full definition, not just a keyword.',
        hint2: 'Use elimination by checking whether each definition captures the right dependency.',
        hint3: 'Read the label and option together as one complete mathematical sentence.',
        explanation: 'Correct mapping: reflection, vertical stretch, and compression align with their exact definitions used in this part.'
      }
    },
    {
      id: 'precalc-transformations-precalc-p4-s6-strategy',
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
      
      Tie each step to reflection, vertical stretch, and compression so your reasoning is explicit and checkable.
      `
    },
    {
      id: 'precalc-transformations-precalc-p4-s7-mcq-applied',
      type: 'multiple-choice' as const,
      content: `
      **Applied mixed questions (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'A student is comparing scaling effects on steepness. Which term best anchors the next reasoning step if the key idea is: multiple transformations applied to one parent?',
            options: [
              'reflection',
              'composite transform',
              'compression',
              'vertical stretch'
            ],
            correctAnswer: 1,
            explanation: 'composite transform matches that description and keeps the model-to-interpretation chain consistent.'
          },
          {
            question: 'A student is solving a mixed function transformations prompt. Which term best anchors the next reasoning step if the key idea is: point unchanged by selected transformation?',
            options: [
              'invariant point',
              'composite transform',
              'compression',
              'parent function'
            ],
            correctAnswer: 0,
            explanation: 'invariant point matches that description and keeps the model-to-interpretation chain consistent.'
          }
        ]
      }
    }
  ]
};
