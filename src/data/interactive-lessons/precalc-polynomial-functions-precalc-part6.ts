export const precalcPolynomialPart6Data = {
  topicSlug: 'polynomial-functions-precalc',
  sections: [
    {
      id: 'precalc-polynomial-functions-precalc-p6-s1-intro',
      type: 'text' as const,
      content: `
      ## Polynomial Functions: Building models from zeros
      
      **Part 6 of 7**
      
      This part focuses on constructing a polynomial from constraints. Keep notation precise and connect each symbolic step to geometric or functional meaning.
      
      ### Core definitions
      - **factor theorem**: $p(c)=0$ implies $(x-c)$ is a factor
      - **end behavior**: direction of graph tails as $x	o\pm\infty$
      - **conjugate roots**: non-real roots of real polynomials occur in pairs
      
      
      ### Worked Example
      Part 6 uses direct precalculus notation to move from structure to computation.
      
      Start with a model statement, substitute known values, and simplify step by step using exact form first.
      When needed, convert to decimals only after the symbolic setup is complete.
      `
    },
    {
      id: 'precalc-polynomial-functions-precalc-p6-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Multiple-choice check (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'Choose the most accurate definition of factor theorem.',
            options: [
              'non-real roots of real polynomials occur in pairs',
              '$p(c)=0$ implies $(x-c)$ is a factor',
              'highest exponent with nonzero coefficient',
              'direction of graph tails as $x	o\\pm\\infty$'
            ],
            correctAnswer: 1,
            explanation: 'factor theorem is defined as: $p(c)=0$ implies $(x-c)$ is a factor.'
          },
          {
            question: 'In constructing a polynomial from constraints, which expression is the best starting model?',
            options: [
              '$\\deg(pq)=\\deg p+\\deg q$',
              '$x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}$',
              '$\\text{rem}(p\\div (x-c))=p(c)$',
              '$p(x)=a\\prod (x-r_i)^{m_i}$'
            ],
            correctAnswer: 2,
            explanation: 'Use $\\text{rem}(p\\div (x-c))=p(c)$ first, then substitute known quantities from the prompt.'
          }
        ]
      }
    },
    {
      id: 'precalc-polynomial-functions-precalc-p6-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive: formulas and decision rules
      
      Use this table to pick the right expression before computing.
      
      | Tool | Formula | Best use |
      |---|---|---|
      | Remainder theorem | $\text{rem}(p\div (x-c))=p(c)$ | fast root testing |
      | Quadratic roots | $x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}$ | embedded factor analysis |
      | Degree sum | $\deg(pq)=\deg p+\deg q$ | model-building checks |
      | Factored form | $p(x)=a\prod (x-r_i)^{m_i}$ | zero/multiplicity encoding |
      
      ### Common pitfalls
      - A numerical approximation can hide repeated roots if precision is low.
      - Multiplicity affects local graph shape at zeros.
      - Even/odd degree does not determine all turning behavior.
      
      ### Precision checks
      1. Identify givens and unknowns before selecting a formula.
      2. Keep exact values through symbolic simplification when possible.
      3. Verify units, angle mode, or domain constraints before finalizing.
      `
    },
    {
      id: 'precalc-polynomial-functions-precalc-p6-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — Polynomial Structure**
      
      1) Evaluate $p(3)$ for $p(x)=x^3-2x$.
      2) Compute $p(2)$ for $p(x)=x^2-5x+6$.
      3) Find degree of $(x^2+1)(x^3-1)$.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['21', '0', '5'],
        hint1: 'Substitute and simplify term by term.',
        hint2: 'Use the remainder/factor theorem shortcut.',
        hint3: 'Degrees add under multiplication.',
        explanation: 'Values are 21 and 0, and the product polynomial has degree 5.'
      }
    },
    {
      id: 'precalc-polynomial-functions-precalc-p6-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown-select practice (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'factor theorem',
            options: ['highest exponent with nonzero coefficient', 'direction of graph tails as $x	o\\pm\\infty$', 'non-real roots of real polynomials occur in pairs', '$p(c)=0$ implies $(x-c)$ is a factor']
          },
          {
            label: 'end behavior',
            options: ['direction of graph tails as $x	o\\pm\\infty$', 'non-real roots of real polynomials occur in pairs', 'highest exponent with nonzero coefficient', 'coefficient of the highest-degree term']
          },
          {
            label: 'conjugate roots',
            options: ['non-real roots of real polynomials occur in pairs', 'input value where polynomial output is zero', 'highest exponent with nonzero coefficient', 'coefficient of the highest-degree term']
          }
        ],
        correctAnswers: ['$p(c)=0$ implies $(x-c)$ is a factor', 'direction of graph tails as $x	o\\pm\\infty$', 'non-real roots of real polynomials occur in pairs'],
        hint1: 'Match each term to the full definition, not just a keyword.',
        hint2: 'Use elimination by checking whether each definition captures the right dependency.',
        hint3: 'Read the label and option together as one complete mathematical sentence.',
        explanation: 'Correct mapping: factor theorem, end behavior, and conjugate roots align with their exact definitions used in this part.'
      }
    },
    {
      id: 'precalc-polynomial-functions-precalc-p6-s6-strategy',
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
      
      Tie each step to factor theorem, end behavior, and conjugate roots so your reasoning is explicit and checkable.
      `
    },
    {
      id: 'precalc-polynomial-functions-precalc-p6-s7-mcq-applied',
      type: 'multiple-choice' as const,
      content: `
      **Applied mixed questions (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'A student is constructing a polynomial from constraints. Which term best anchors the next reasoning step if the key idea is: highest exponent with nonzero coefficient?',
            options: [
              'degree',
              'end behavior',
              'conjugate roots',
              'factor theorem'
            ],
            correctAnswer: 0,
            explanation: 'degree matches that description and keeps the model-to-interpretation chain consistent.'
          },
          {
            question: 'A student is solving a mixed polynomial functions prompt. Which term best anchors the next reasoning step if the key idea is: coefficient of the highest-degree term?',
            options: [
              'degree',
              'leading coefficient',
              'zero',
              'conjugate roots'
            ],
            correctAnswer: 1,
            explanation: 'leading coefficient matches that description and keeps the model-to-interpretation chain consistent.'
          }
        ]
      }
    }
  ]
};
