export const precalcVectors2DPart2Data = {
  topicSlug: 'vectors-two-dimensions-precalc',
  sections: [
    {
      id: 'precalc-vectors-two-dimensions-precalc-p2-s1-intro',
      type: 'text' as const,
      content: `
      ## Vectors in Two Dimensions: Addition, subtraction, and scalar multiples
      
      **Part 2 of 7**
      
      This part focuses on combining movement instructions. Keep notation precise and connect each symbolic step to geometric or functional meaning.
      
      ### Core definitions
      - **magnitude**: length of a vector
      - **direction angle**: angle measured from positive $x$-axis
      - **dot product**: scalar from component-wise multiplication and sum
      
      
      ### Worked Example
      Part 2 uses direct precalculus notation to move from structure to computation.
      
      Start with a model statement, substitute known values, and simplify step by step using exact form first.
      When needed, convert to decimals only after the symbolic setup is complete.
      `
    },
    {
      id: 'precalc-vectors-two-dimensions-precalc-p2-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Multiple-choice check (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'Choose the most accurate definition of magnitude.',
            options: [
              'angle measured from positive $x$-axis',
              'component of one vector along another',
              'length of a vector',
              'scalar from component-wise multiplication and sum'
            ],
            correctAnswer: 2,
            explanation: 'magnitude is defined as: length of a vector.'
          },
          {
            question: 'In combining movement instructions, which expression is the best starting model?',
            options: [
              '$\\hat{\\mathbf u}=\\frac{\\mathbf u}{\\|\\mathbf u\\|}$',
              '$\\mathbf u\\cdot\\mathbf v=\\|\\mathbf u\\|\\|\\mathbf v\\|\\cos\\theta$',
              '$\\|\\langle a,b\\rangle\\|=\\sqrt{a^2+b^2}$',
              '$\\langle a,b\\rangle\\cdot\\langle c,d\\rangle=ac+bd$'
            ],
            correctAnswer: 3,
            explanation: 'Use $\\langle a,b\\rangle\\cdot\\langle c,d\\rangle=ac+bd$ first, then substitute known quantities from the prompt.'
          }
        ]
      }
    },
    {
      id: 'precalc-vectors-two-dimensions-precalc-p2-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive: formulas and decision rules
      
      Use this table to pick the right expression before computing.
      
      | Tool | Formula | Best use |
      |---|---|---|
      | Dot product | $\langle a,b\\rangle\cdot\langle c,d\\rangle=ac+bd$ | angle and projection |
      | Angle relation | $\mathbf u\cdot\mathbf v=\|\mathbf u\|\|\mathbf v\|\cos\\theta$ | finding angle between vectors |
      | Unit vector | $\hat{\mathbf u}=\\frac{\mathbf u}{\|\mathbf u\|}$ | direction-only normalization |
      | Magnitude | $\|\langle a,b\\rangle\|=\sqrt{a^2+b^2}$ | length computation |
      
      ### Common pitfalls
      - A zero dot product indicates orthogonality, not parallelism.
      - Keep component order consistent as $(x,y)$.
      - Magnitude is always nonnegative.
      
      ### Precision checks
      1. Identify givens and unknowns before selecting a formula.
      2. Keep exact values through symbolic simplification when possible.
      3. Verify units, angle mode, or domain constraints before finalizing.
      `
    },
    {
      id: 'precalc-vectors-two-dimensions-precalc-p2-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — Vector Calculations**
      
      1) Compute magnitude of $\langle 3,4
      angle$.
      2) Compute $\langle 1,2
      angle\cdot\langle 3,4
      angle$.
      3) Compute the $y$-component of $\langle 2,5
      angle+\langle -1,3
      angle$.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['5', '11', '8'],
        hint1: 'Use $\\sqrt{a^2+b^2}$.',
        hint2: 'Multiply matching components and add.',
        hint3: 'Add components independently.',
        explanation: 'Magnitude is 5, dot product is 11, and the resulting $y$-component is 8.'
      }
    },
    {
      id: 'precalc-vectors-two-dimensions-precalc-p2-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown-select practice (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'magnitude',
            options: ['scalar from component-wise multiplication and sum', 'component of one vector along another', 'length of a vector', 'angle measured from positive $x$-axis']
          },
          {
            label: 'direction angle',
            options: ['angle measured from positive $x$-axis', 'vector with magnitude 1', 'component of one vector along another', 'scalar from component-wise multiplication and sum']
          },
          {
            label: 'dot product',
            options: ['component of one vector along another', 'vector with magnitude 1', 'scalar from component-wise multiplication and sum', 'single vector equivalent to a combined effect']
          }
        ],
        correctAnswers: ['length of a vector', 'angle measured from positive $x$-axis', 'scalar from component-wise multiplication and sum'],
        hint1: 'Match each term to the full definition, not just a keyword.',
        hint2: 'Use elimination by checking whether each definition captures the right dependency.',
        hint3: 'Read the label and option together as one complete mathematical sentence.',
        explanation: 'Correct mapping: magnitude, direction angle, and dot product align with their exact definitions used in this part.'
      }
    },
    {
      id: 'precalc-vectors-two-dimensions-precalc-p2-s6-strategy',
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
      
      Tie each step to magnitude, direction angle, and dot product so your reasoning is explicit and checkable.
      `
    },
    {
      id: 'precalc-vectors-two-dimensions-precalc-p2-s7-mcq-applied',
      type: 'multiple-choice' as const,
      content: `
      **Applied mixed questions (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'A student is combining movement instructions. Which term best anchors the next reasoning step if the key idea is: component of one vector along another?',
            options: [
              'dot product',
              'magnitude',
              'projection',
              'direction angle'
            ],
            correctAnswer: 2,
            explanation: 'projection matches that description and keeps the model-to-interpretation chain consistent.'
          },
          {
            question: 'A student is solving a mixed vectors in two dimensions prompt. Which term best anchors the next reasoning step if the key idea is: vector with magnitude 1?',
            options: [
              'unit vector',
              'resultant',
              'dot product',
              'projection'
            ],
            correctAnswer: 0,
            explanation: 'unit vector matches that description and keeps the model-to-interpretation chain consistent.'
          }
        ]
      }
    }
  ]
};
