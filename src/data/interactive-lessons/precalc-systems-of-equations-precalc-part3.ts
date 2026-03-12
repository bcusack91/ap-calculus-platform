export const precalcSystemsPart3Data = {
  topicSlug: 'systems-of-equations-precalc',
  sections: [
    {
      id: 'precalc-systems-of-equations-precalc-p3-s1-intro',
      type: 'text' as const,
      content: `
      ## Systems of Equations: Elimination method
      
      **Part 3 of 7**
      
      This part focuses on clearing coefficients with elimination. Keep notation precise and connect each symbolic step to geometric or functional meaning.
      
      ### Core definitions
      - **inconsistent system**: system with no common solution
      - **dependent system**: equations represent same relation and infinitely many solutions
      - **substitution**: replace one variable expression into another equation
      
      
      ### Worked Example
      Part 3 uses direct precalculus notation to move from structure to computation.
      
      Start with a model statement, substitute known values, and simplify step by step using exact form first.
      When needed, convert to decimals only after the symbolic setup is complete.
      `
    },
    {
      id: 'precalc-systems-of-equations-precalc-p3-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Multiple-choice check (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'Choose the most accurate definition of inconsistent system.',
            options: [
              'replace one variable expression into another equation',
              'equations represent same relation and infinitely many solutions',
              'combine equations to remove a variable',
              'system with no common solution'
            ],
            correctAnswer: 3,
            explanation: 'inconsistent system is defined as: system with no common solution.'
          },
          {
            question: 'In clearing coefficients with elimination, which expression is the best starting model?',
            options: [
              '$y=\\frac{a_1c_2-a_2c_1}{\\Delta}$',
              '$\\Delta=a_1b_2-a_2b_1$',
              '$x=\\frac{c_1b_2-c_2b_1}{\\Delta}$',
              '$\\begin{cases}a_1x+b_1y=c_1\\\\a_2x+b_2y=c_2\\end{cases}$'
            ],
            correctAnswer: 2,
            explanation: 'Use $x=\\frac{c_1b_2-c_2b_1}{\\Delta}$ first, then substitute known quantities from the prompt.'
          }
        ]
      }
    },
    {
      id: 'precalc-systems-of-equations-precalc-p3-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive: formulas and decision rules
      
      Use this table to pick the right expression before computing.
      
      | Tool | Formula | Best use |
      |---|---|---|
      | Cramer's x | $x=\frac{c_1b_2-c_2b_1}{\Delta}$ | explicit solution form |
      | Cramer's y | $y=\frac{a_1c_2-a_2c_1}{\Delta}$ | explicit solution form |
      | Linear system | $\begin{cases}a_1x+b_1y=c_1\\a_2x+b_2y=c_2\end{cases}$ | two-variable framework |
      | Determinant | $\Delta=a_1b_2-a_2b_1$ | uniqueness criterion |
      
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
      id: 'precalc-systems-of-equations-precalc-p3-s4-input',
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
      id: 'precalc-systems-of-equations-precalc-p3-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown-select practice (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'inconsistent system',
            options: ['system with no common solution', 'combine equations to remove a variable', 'replace one variable expression into another equation', 'equations represent same relation and infinitely many solutions']
          },
          {
            label: 'dependent system',
            options: ['matrix containing variable coefficients', 'replace one variable expression into another equation', 'equations represent same relation and infinitely many solutions', 'combine equations to remove a variable']
          },
          {
            label: 'substitution',
            options: ['matrix containing variable coefficients', 'nonzero determinant implies unique 2x2 linear solution', 'combine equations to remove a variable', 'replace one variable expression into another equation']
          }
        ],
        correctAnswers: ['system with no common solution', 'equations represent same relation and infinitely many solutions', 'replace one variable expression into another equation'],
        hint1: 'Match each term to the full definition, not just a keyword.',
        hint2: 'Use elimination by checking whether each definition captures the right dependency.',
        hint3: 'Read the label and option together as one complete mathematical sentence.',
        explanation: 'Correct mapping: inconsistent system, dependent system, and substitution align with their exact definitions used in this part.'
      }
    },
    {
      id: 'precalc-systems-of-equations-precalc-p3-s6-strategy',
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
      
      Tie each step to inconsistent system, dependent system, and substitution so your reasoning is explicit and checkable.
      `
    },
    {
      id: 'precalc-systems-of-equations-precalc-p3-s7-mcq-applied',
      type: 'multiple-choice' as const,
      content: `
      **Applied mixed questions (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'A student is clearing coefficients with elimination. Which term best anchors the next reasoning step if the key idea is: combine equations to remove a variable?',
            options: [
              'elimination',
              'inconsistent system',
              'dependent system',
              'substitution'
            ],
            correctAnswer: 0,
            explanation: 'elimination matches that description and keeps the model-to-interpretation chain consistent.'
          },
          {
            question: 'A student is solving a mixed systems of equations prompt. Which term best anchors the next reasoning step if the key idea is: matrix containing variable coefficients?',
            options: [
              'substitution',
              'determinant test',
              'coefficient matrix',
              'elimination'
            ],
            correctAnswer: 2,
            explanation: 'coefficient matrix matches that description and keeps the model-to-interpretation chain consistent.'
          }
        ]
      }
    }
  ]
};
