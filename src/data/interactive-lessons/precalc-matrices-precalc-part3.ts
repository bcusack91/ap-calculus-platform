export const precalcMatricesPart3Data = {
  topicSlug: 'matrices-precalc',
  sections: [
    {
      id: 'precalc-matrices-precalc-p3-s1-intro',
      type: 'text' as const,
      content: `
      ## Matrices: Matrix multiplication
      
      **Part 3 of 7**
      
      This part focuses on computing chained linear mappings. Keep notation precise and connect each symbolic step to geometric or functional meaning.
      
      ### Core definitions
      - **matrix product**: composition of linear mappings
      - **determinant**: scalar indicating area scaling and invertibility in $2	imes2$
      - **inverse matrix**: matrix that undoes another matrix
      
      
      ### Worked Example
      Solve $\\begin{cases}x+y=7\\2x-y=5\end{cases}$ by elimination.
      
      Add equations: $3x=12$, so $x=4$. Substitute into $x+y=7$ to get $y=3$.
      
      A quick matrix check with $\\begin{bmatrix}1&1\\2&-1\end{bmatrix}$ confirms a nonzero determinant, so the solution is unique.
      `
    },
    {
      id: 'precalc-matrices-precalc-p3-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Multiple-choice check (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'Choose the most accurate definition of matrix product.',
            options: [
              'composition of linear mappings',
              'multiplicative neutral matrix',
              'scalar indicating area scaling and invertibility in $2	imes2$',
              'matrix that undoes another matrix'
            ],
            correctAnswer: 0,
            explanation: 'matrix product is defined as: composition of linear mappings.'
          },
          {
            question: 'In computing chained linear mappings, which expression is the best starting model?',
            options: [
              '$(AB)_{ij}=\\sum_k a_{ik}b_{kj}$',
              '$AI=IA=A$',
              '$A^{-1}=\\frac{1}{ad-bc}\\begin{bmatrix}d&-b\\\\-c&a\\end{bmatrix}$',
              '$\\det\\begin{bmatrix}a&b\\\\c&d\\end{bmatrix}=ad-bc$'
            ],
            correctAnswer: 0,
            explanation: 'Use $(AB)_{ij}=\\sum_k a_{ik}b_{kj}$ first, then substitute known quantities from the prompt.'
          }
        ]
      }
    },
    {
      id: 'precalc-matrices-precalc-p3-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive: formulas and decision rules
      
      Use this table to pick the right expression before computing.
      
      | Tool | Formula | Best use |
      |---|---|---|
      | Product entry | $(AB)_{ij}=\sum_k a_{ik}b_{kj}$ | matrix multiplication |
      | Identity action | $AI=IA=A$ | structure check |
      | 2x2 determinant | $\det\\begin{bmatrix}a&b\\c&d\end{bmatrix}=ad-bc$ | invertibility test |
      | 2x2 inverse | $A^{-1}=\\frac{1}{ad-bc}\\begin{bmatrix}d&-b\\-c&a\end{bmatrix}$ | solving small systems |
      
      ### Common pitfalls
      - A zero determinant means no inverse exists.
      - Matrix multiplication is not commutative in general.
      - Dimension mismatch blocks addition or multiplication.
      
      ### Precision checks
      1. Identify givens and unknowns before selecting a formula.
      2. Keep exact values through symbolic simplification when possible.
      3. Verify units, angle mode, or domain constraints before finalizing.
      `
    },
    {
      id: 'precalc-matrices-precalc-p3-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — Matrix Mechanics**
      
      1) Compute $\det\\begin{bmatrix}5&2\\3&4\end{bmatrix}$.
      2) Compute first entry of $\\begin{bmatrix}1&2\\0&1\end{bmatrix}\\begin{bmatrix}3\\4\end{bmatrix}$.
      3) Compute trace of $\\begin{bmatrix}2&1\\5&7\end{bmatrix}$.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['14', '11', '9'],
        hint1: 'Use $ad-bc$.',
        hint2: 'Dot first row with the column vector.',
        hint3: 'Trace is the sum of diagonal entries.',
        explanation: 'Determinant is 14, product entry is 11, and trace is 9.'
      }
    },
    {
      id: 'precalc-matrices-precalc-p3-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown-select practice (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'matrix product',
            options: ['scalar indicating area scaling and invertibility in $2	imes2$', 'matrix that undoes another matrix', 'multiplicative neutral matrix', 'composition of linear mappings']
          },
          {
            label: 'determinant',
            options: ['matrix that undoes another matrix', 'system coefficients with constants in one array', 'multiplicative neutral matrix', 'scalar indicating area scaling and invertibility in $2	imes2$']
          },
          {
            label: 'inverse matrix',
            options: ['system coefficients with constants in one array', 'matrix that undoes another matrix', 'legal transformation preserving system solutions', 'multiplicative neutral matrix']
          }
        ],
        correctAnswers: ['composition of linear mappings', 'scalar indicating area scaling and invertibility in $2	imes2$', 'matrix that undoes another matrix'],
        hint1: 'Match each term to the full definition, not just a keyword.',
        hint2: 'Use elimination by checking whether each definition captures the right dependency.',
        hint3: 'Read the label and option together as one complete mathematical sentence.',
        explanation: 'Correct mapping: matrix product, determinant, and inverse matrix align with their exact definitions used in this part.'
      }
    },
    {
      id: 'precalc-matrices-precalc-p3-s6-strategy',
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
      
      Tie each step to matrix product, determinant, and inverse matrix so your reasoning is explicit and checkable.
      `
    },
    {
      id: 'precalc-matrices-precalc-p3-s7-mcq-applied',
      type: 'multiple-choice' as const,
      content: `
      **Applied mixed questions (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'A student is computing chained linear mappings. Which term best anchors the next reasoning step if the key idea is: multiplicative neutral matrix?',
            options: [
              'determinant',
              'inverse matrix',
              'matrix product',
              'identity matrix'
            ],
            correctAnswer: 3,
            explanation: 'identity matrix matches that description and keeps the model-to-interpretation chain consistent.'
          },
          {
            question: 'A student is solving a mixed matrices prompt. Which term best anchors the next reasoning step if the key idea is: system coefficients with constants in one array?',
            options: [
              'identity matrix',
              'augmented matrix',
              'inverse matrix',
              'row operation'
            ],
            correctAnswer: 1,
            explanation: 'augmented matrix matches that description and keeps the model-to-interpretation chain consistent.'
          }
        ]
      }
    }
  ]
};
