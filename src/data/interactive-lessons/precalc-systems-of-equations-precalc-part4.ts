export const precalcSystemsPart4Data = {
  topicSlug: 'systems-of-equations-precalc',
  sections: [
    {
      id: 'precalc-systems-of-equations-precalc-p4-s1-intro',
      type: 'text' as const,
      content: `
      ## Systems of Equations: Matrix and determinant perspective
      
      **Part 4 of 7**
      
      This part focuses on testing uniqueness with determinants. Keep notation precise and connect each symbolic step to geometric or functional meaning.
      
      ### Core definitions
      - **dependent system**: equations represent same relation and infinitely many solutions
      - **substitution**: replace one variable expression into another equation
      - **elimination**: combine equations to remove a variable
      
      
      ### Worked Example
      Part 4 uses direct precalculus notation to move from structure to computation.
      
      Start with a model statement, substitute known values, and simplify step by step using exact form first.
      When needed, convert to decimals only after the symbolic setup is complete.
      `
    },
    {
      id: 'precalc-systems-of-equations-precalc-p4-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Multiple-choice check (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'Choose the most accurate definition of dependent system.',
            options: [
              'replace one variable expression into another equation',
              'combine equations to remove a variable',
              'matrix containing variable coefficients',
              'equations represent same relation and infinitely many solutions'
            ],
            correctAnswer: 3,
            explanation: 'dependent system is defined as: equations represent same relation and infinitely many solutions.'
          },
          {
            question: 'In testing uniqueness with determinants, which expression is the best starting model?',
            options: [
              '$\\Delta=a_1b_2-a_2b_1$',
              '$\\begin{cases}a_1x+b_1y=c_1\\\\a_2x+b_2y=c_2\\end{cases}$',
              '$y=\\frac{a_1c_2-a_2c_1}{\\Delta}$',
              '$x=\\frac{c_1b_2-c_2b_1}{\\Delta}$'
            ],
            correctAnswer: 2,
            explanation: 'Use $y=\\frac{a_1c_2-a_2c_1}{\\Delta}$ first, then substitute known quantities from the prompt.'
          }
        ]
      }
    },
    {
      id: 'precalc-systems-of-equations-precalc-p4-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive: formulas and decision rules
      
      Use this table to pick the right expression before computing.
      
      | Tool | Formula | Best use |
      |---|---|---|
      | Cramer's y | $y=\frac{a_1c_2-a_2c_1}{\Delta}$ | explicit solution form |
      | Linear system | $\begin{cases}a_1x+b_1y=c_1\\a_2x+b_2y=c_2\end{cases}$ | two-variable framework |
      | Determinant | $\Delta=a_1b_2-a_2b_1$ | uniqueness criterion |
      | Cramer's x | $x=\frac{c_1b_2-c_2b_1}{\Delta}$ | explicit solution form |
      
      ### Common pitfalls
      - Parallel lines in graph form indicate no solution.
      - Arithmetic sign slips in elimination often flip outcomes.
      - State whether the system has one, none, or infinitely many solutions.
      
      ### Precision checks
      1. Identify givens and unknowns before selecting a formula.
      2. Keep exact values through symbolic simplification when possible.
      3. Verify units, angle mode, or domain constraints before finalizing.
      `
    },
    {
      id: 'precalc-systems-of-equations-precalc-p4-s4-input',
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
      id: 'precalc-systems-of-equations-precalc-p4-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown-select practice (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'dependent system',
            options: ['replace one variable expression into another equation', 'equations represent same relation and infinitely many solutions', 'combine equations to remove a variable', 'matrix containing variable coefficients']
          },
          {
            label: 'substitution',
            options: ['combine equations to remove a variable', 'nonzero determinant implies unique 2x2 linear solution', 'matrix containing variable coefficients', 'replace one variable expression into another equation']
          },
          {
            label: 'elimination',
            options: ['all ordered pairs satisfying every equation', 'combine equations to remove a variable', 'matrix containing variable coefficients', 'nonzero determinant implies unique 2x2 linear solution']
          }
        ],
        correctAnswers: ['equations represent same relation and infinitely many solutions', 'replace one variable expression into another equation', 'combine equations to remove a variable'],
        hint1: 'Match each term to the full definition, not just a keyword.',
        hint2: 'Use elimination by checking whether each definition captures the right dependency.',
        hint3: 'Read the label and option together as one complete mathematical sentence.',
        explanation: 'Correct mapping: dependent system, substitution, and elimination align with their exact definitions used in this part.'
      }
    },
    {
      id: 'precalc-systems-of-equations-precalc-p4-s6-strategy',
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
      
      Tie each step to dependent system, substitution, and elimination so your reasoning is explicit and checkable.
      `
    },
    {
      id: 'precalc-systems-of-equations-precalc-p4-s7-mcq-applied',
      type: 'multiple-choice' as const,
      content: `
      **Applied mixed questions (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'A student is testing uniqueness with determinants. Which term best anchors the next reasoning step if the key idea is: matrix containing variable coefficients?',
            options: [
              'dependent system',
              'elimination',
              'coefficient matrix',
              'substitution'
            ],
            correctAnswer: 2,
            explanation: 'coefficient matrix matches that description and keeps the model-to-interpretation chain consistent.'
          },
          {
            question: 'A student is solving a mixed systems of equations prompt. Which term best anchors the next reasoning step if the key idea is: nonzero determinant implies unique 2x2 linear solution?',
            options: [
              'coefficient matrix',
              'solution set',
              'determinant test',
              'elimination'
            ],
            correctAnswer: 2,
            explanation: 'determinant test matches that description and keeps the model-to-interpretation chain consistent.'
          }
        ]
      }
    }
  ]
};
