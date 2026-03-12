export const precalcVectors2DPart6Data = {
  topicSlug: 'vectors-two-dimensions-precalc',
  sections: [
    {
      id: 'precalc-vectors-two-dimensions-precalc-p6-s1-intro',
      type: 'text' as const,
      content: `
      ## Vectors in Two Dimensions: Motion and force applications
      
      **Part 6 of 7**
      
      This part focuses on modeling resultant forces. Keep notation precise and connect each symbolic step to geometric or functional meaning.
      
      ### Core definitions
      - **unit vector**: vector with magnitude 1
      - **resultant**: single vector equivalent to a combined effect
      - **orthogonal**: vectors with dot product zero
      
      
      ### Worked Example
      Part 6 uses direct precalculus notation to move from structure to computation.
      
      Start with a model statement, substitute known values, and simplify step by step using exact form first.
      When needed, convert to decimals only after the symbolic setup is complete.
      `
    },
    {
      id: 'precalc-vectors-two-dimensions-precalc-p6-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Multiple-choice check (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'Choose the most accurate definition of unit vector.',
            options: [
              'vector written as ordered components like $\langle a,b\rangle$',
              'single vector equivalent to a combined effect',
              'vectors with dot product zero',
              'vector with magnitude 1'
            ],
            correctAnswer: 3,
            explanation: 'unit vector is defined as: vector with magnitude 1.'
          },
          {
            question: 'In modeling resultant forces, which expression is the best starting model?',
            options: [
              '$\\mathbf u\\cdot\\mathbf v=\\|\\mathbf u\\|\\|\\mathbf v\\|\\cos\\theta$',
              '$\\langle a,b\\rangle\\cdot\\langle c,d\\rangle=ac+bd$',
              '$\\|\\langle a,b\\rangle\\|=\\sqrt{a^2+b^2}$',
              '$\\hat{\\mathbf u}=\\frac{\\mathbf u}{\\|\\mathbf u\\|}$'
            ],
            correctAnswer: 1,
            explanation: 'Use $\\langle a,b\\rangle\\cdot\\langle c,d\\rangle=ac+bd$ first, then substitute known quantities from the prompt.'
          }
        ]
      }
    },
    {
      id: 'precalc-vectors-two-dimensions-precalc-p6-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive: formulas and decision rules
      
      Use this table to pick the right expression before computing.
      
      | Tool | Formula | Best use |
      |---|---|---|
      | Dot product | $\langle a,b\rangle\cdot\langle c,d\rangle=ac+bd$ | angle and projection |
      | Angle relation | $\mathbf u\cdot\mathbf v=\|\mathbf u\|\|\mathbf v\|\cos\theta$ | finding angle between vectors |
      | Unit vector | $\hat{\mathbf u}=\frac{\mathbf u}{\|\mathbf u\|}$ | direction-only normalization |
      | Magnitude | $\|\langle a,b\rangle\|=\sqrt{a^2+b^2}$ | length computation |
      
      ### Common pitfalls
      - Keep component order consistent as $(x,y)$.
      - Magnitude is always nonnegative.
      - A zero dot product indicates orthogonality, not parallelism.
      
      ### Precision checks
      1. Identify givens and unknowns before selecting a formula.
      2. Keep exact values through symbolic simplification when possible.
      3. Verify units, angle mode, or domain constraints before finalizing.
      `
    },
    {
      id: 'precalc-vectors-two-dimensions-precalc-p6-s4-input',
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
      id: 'precalc-vectors-two-dimensions-precalc-p6-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown-select practice (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'unit vector',
            options: ['vector written as ordered components like $\langle a,b\rangle$', 'vectors with dot product zero', 'single vector equivalent to a combined effect', 'vector with magnitude 1']
          },
          {
            label: 'resultant',
            options: ['length of a vector', 'single vector equivalent to a combined effect', 'vectors with dot product zero', 'vector written as ordered components like $\langle a,b\rangle$']
          },
          {
            label: 'orthogonal',
            options: ['length of a vector', 'vector written as ordered components like $\langle a,b\rangle$', 'vectors with dot product zero', 'angle measured from positive $x$-axis']
          }
        ],
        correctAnswers: ['vector with magnitude 1', 'single vector equivalent to a combined effect', 'vectors with dot product zero'],
        hint1: 'Match each term to the full definition, not just a keyword.',
        hint2: 'Use elimination by checking whether each definition captures the right dependency.',
        hint3: 'Read the label and option together as one complete mathematical sentence.',
        explanation: 'Correct mapping: unit vector, resultant, and orthogonal align with their exact definitions used in this part.'
      }
    },
    {
      id: 'precalc-vectors-two-dimensions-precalc-p6-s6-strategy',
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
      
      Tie each step to unit vector, resultant, and orthogonal so your reasoning is explicit and checkable.
      `
    },
    {
      id: 'precalc-vectors-two-dimensions-precalc-p6-s7-mcq-applied',
      type: 'multiple-choice' as const,
      content: `
      **Applied mixed questions (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'A student is modeling resultant forces. Which term best anchors the next reasoning step if the key idea is: vector written as ordered components like $\langle a,b\rangle$?',
            options: [
              'unit vector',
              'resultant',
              'orthogonal',
              'component form'
            ],
            correctAnswer: 3,
            explanation: 'component form matches that description and keeps the model-to-interpretation chain consistent.'
          },
          {
            question: 'A student is solving a mixed vectors in two dimensions prompt. Which term best anchors the next reasoning step if the key idea is: length of a vector?',
            options: [
              'magnitude',
              'component form',
              'direction angle',
              'orthogonal'
            ],
            correctAnswer: 0,
            explanation: 'magnitude matches that description and keeps the model-to-interpretation chain consistent.'
          }
        ]
      }
    }
  ]
};
