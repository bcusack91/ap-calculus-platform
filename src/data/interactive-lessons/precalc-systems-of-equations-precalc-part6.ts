export const precalcSystemsPart6Data = {
  topicSlug: 'systems-of-equations-precalc',
  sections: [
    {
      id: 'precalc-systems-of-equations-precalc-p6-s1-intro',
      type: 'text' as const,
      content: `
      ## Systems of Equations: Applied mixture and constraint models
      
      **Part 6 of 7**
      
      This part focuses on handling two-condition application problems. Keep notation precise and connect each symbolic step to geometric or functional meaning.
      
      ### Core definitions
      - **elimination**: combine equations to remove a variable
      - **coefficient matrix**: matrix containing variable coefficients
      - **determinant test**: nonzero determinant implies unique 2x2 linear solution
      
      
      ### Worked Example
      Part 6 uses direct precalculus notation to move from structure to computation.
      
      Start with a model statement, substitute known values, and simplify step by step using exact form first.
      When needed, convert to decimals only after the symbolic setup is complete.
      `
    },
    {
      id: 'precalc-systems-of-equations-precalc-p6-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Multiple-choice check (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'Choose the most accurate definition of elimination.',
            options: [
              'nonzero determinant implies unique 2x2 linear solution',
              'matrix containing variable coefficients',
              'all ordered pairs satisfying every equation',
              'combine equations to remove a variable'
            ],
            correctAnswer: 3,
            explanation: 'elimination is defined as: combine equations to remove a variable.'
          },
          {
            question: 'In handling two-condition application problems, which expression is the best starting model?',
            options: [
              '$x=\\frac{c_1b_2-c_2b_1}{\\Delta}$',
              '$\\Delta=a_1b_2-a_2b_1$',
              '$y=\\frac{a_1c_2-a_2c_1}{\\Delta}$',
              '$\\begin{cases}a_1x+b_1y=c_1\\\\a_2x+b_2y=c_2\\end{cases}$'
            ],
            correctAnswer: 1,
            explanation: 'Use $\\Delta=a_1b_2-a_2b_1$ first, then substitute known quantities from the prompt.'
          }
        ]
      }
    },
    {
      id: 'precalc-systems-of-equations-precalc-p6-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive: formulas and decision rules
      
      Use this table to pick the right expression before computing.
      
      | Tool | Formula | Best use |
      |---|---|---|
      | Determinant | $\Delta=a_1b_2-a_2b_1$ | uniqueness criterion |
      | Cramer's x | $x=\frac{c_1b_2-c_2b_1}{\Delta}$ | explicit solution form |
      | Cramer's y | $y=\frac{a_1c_2-a_2c_1}{\Delta}$ | explicit solution form |
      | Linear system | $\begin{cases}a_1x+b_1y=c_1\\a_2x+b_2y=c_2\end{cases}$ | two-variable framework |
      
      ### Common pitfalls
      - State whether the system has one, none, or infinitely many solutions.
      - Parallel lines in graph form indicate no solution.
      - Arithmetic sign slips in elimination often flip outcomes.
      
      ### Precision checks
      1. Identify givens and unknowns before selecting a formula.
      2. Keep exact values through symbolic simplification when possible.
      3. Verify units, angle mode, or domain constraints before finalizing.
      `
    },
    {
      id: 'precalc-systems-of-equations-precalc-p6-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — Solving Systems**
      
      1) Solve for $x$: $x+y=10$, $x-y=2$.
      2) Solve for $y$: $2x+3y=12$, $x-y=1$.
      3) Compute determinant of $\\begin{bmatrix}2&1\\5&3\end{bmatrix}$.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['6', '2', '1'],
        hint1: 'Add the two equations to eliminate $y$.',
        hint2: 'Use substitution from $x=y+1$.',
        hint3: 'Use $ad-bc$ for the determinant.',
        explanation: 'The system gives $x=6$ and $y=2$, with determinant 1 confirming uniqueness.'
      }
    },
    {
      id: 'precalc-systems-of-equations-precalc-p6-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown-select practice (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'elimination',
            options: ['matrix containing variable coefficients', 'nonzero determinant implies unique 2x2 linear solution', 'all ordered pairs satisfying every equation', 'combine equations to remove a variable']
          },
          {
            label: 'coefficient matrix',
            options: ['system with at least one solution', 'nonzero determinant implies unique 2x2 linear solution', 'matrix containing variable coefficients', 'all ordered pairs satisfying every equation']
          },
          {
            label: 'determinant test',
            options: ['system with at least one solution', 'nonzero determinant implies unique 2x2 linear solution', 'system with no common solution', 'all ordered pairs satisfying every equation']
          }
        ],
        correctAnswers: ['combine equations to remove a variable', 'matrix containing variable coefficients', 'nonzero determinant implies unique 2x2 linear solution'],
        hint1: 'Match each term to the full definition, not just a keyword.',
        hint2: 'Use elimination by checking whether each definition captures the right dependency.',
        hint3: 'Read the label and option together as one complete mathematical sentence.',
        explanation: 'Correct mapping: elimination, coefficient matrix, and determinant test align with their exact definitions used in this part.'
      }
    },
    {
      id: 'precalc-systems-of-equations-precalc-p6-s6-strategy',
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
      
      Tie each step to elimination, coefficient matrix, and determinant test so your reasoning is explicit and checkable.
      `
    },
    {
      id: 'precalc-systems-of-equations-precalc-p6-s7-mcq-applied',
      type: 'multiple-choice' as const,
      content: `
      **Applied mixed questions (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'A student is handling two-condition application problems. Which term best anchors the next reasoning step if the key idea is: all ordered pairs satisfying every equation?',
            options: [
              'coefficient matrix',
              'elimination',
              'determinant test',
              'solution set'
            ],
            correctAnswer: 3,
            explanation: 'solution set matches that description and keeps the model-to-interpretation chain consistent.'
          },
          {
            question: 'A student is solving a mixed systems of equations prompt. Which term best anchors the next reasoning step if the key idea is: system with at least one solution?',
            options: [
              'solution set',
              'inconsistent system',
              'consistent system',
              'determinant test'
            ],
            correctAnswer: 2,
            explanation: 'consistent system matches that description and keeps the model-to-interpretation chain consistent.'
          }
        ]
      }
    }
  ]
};
