export const precalcPolynomialPart4Data = {
  topicSlug: 'polynomial-functions-precalc',
  sections: [
    {
      id: 'precalc-polynomial-functions-precalc-p4-s1-intro',
      type: 'text' as const,
      content: `
      ## Polynomial Functions: Division and remainder theorem
      
      **Part 4 of 7**
      
      This part focuses on testing candidate roots rapidly. Keep notation precise and connect each symbolic step to geometric or functional meaning.
      
      ### Core definitions
      - **multiplicity**: number of times a factor repeats
      - **remainder theorem**: remainder of division by $x-c$ equals $p(c)$
      - **factor theorem**: $p(c)=0$ implies $(x-c)$ is a factor
      
      
      ### Worked Example
      Part 4 uses direct precalculus notation to move from structure to computation.
      
      Start with a model statement, substitute known values, and simplify step by step using exact form first.
      When needed, convert to decimals only after the symbolic setup is complete.
      `
    },
    {
      id: 'precalc-polynomial-functions-precalc-p4-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Multiple-choice check (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'Choose the most accurate definition of multiplicity.',
            options: [
              'remainder of division by $x-c$ equals $p(c)$',
              'number of times a factor repeats',
              '$p(c)=0$ implies $(x-c)$ is a factor',
              'direction of graph tails as $x	o\\pm\\infty$'
            ],
            correctAnswer: 1,
            explanation: 'multiplicity is defined as: number of times a factor repeats.'
          },
          {
            question: 'In testing candidate roots rapidly, which expression is the best starting model?',
            options: [
              '$p(x)=a\\prod (x-r_i)^{m_i}$',
              '$\\deg(pq)=\\deg p+\\deg q$',
              '$\\text{rem}(p\\div (x-c))=p(c)$',
              '$x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}$'
            ],
            correctAnswer: 1,
            explanation: 'Use $\\deg(pq)=\\deg p+\\deg q$ first, then substitute known quantities from the prompt.'
          }
        ]
      }
    },
    {
      id: 'precalc-polynomial-functions-precalc-p4-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive: formulas and decision rules
      
      Use this table to pick the right expression before computing.
      
      | Tool | Formula | Best use |
      |---|---|---|
      | Degree sum | $\deg(pq)=\deg p+\deg q$ | model-building checks |
      | Factored form | $p(x)=a\prod (x-r_i)^{m_i}$ | zero/multiplicity encoding |
      | Remainder theorem | $\text{rem}(p\div (x-c))=p(c)$ | fast root testing |
      | Quadratic roots | $x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}$ | embedded factor analysis |
      
      ### Common pitfalls
      - Multiplicity affects local graph shape at zeros.
      - Even/odd degree does not determine all turning behavior.
      - A numerical approximation can hide repeated roots if precision is low.
      
      ### Precision checks
      1. Identify givens and unknowns before selecting a formula.
      2. Keep exact values through symbolic simplification when possible.
      3. Verify units, angle mode, or domain constraints before finalizing.
      `
    },
    {
      id: 'precalc-polynomial-functions-precalc-p4-s4-input',
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
      id: 'precalc-polynomial-functions-precalc-p4-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown-select practice (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'multiplicity',
            options: ['direction of graph tails as $x	o\\pm\\infty$', '$p(c)=0$ implies $(x-c)$ is a factor', 'remainder of division by $x-c$ equals $p(c)$', 'number of times a factor repeats']
          },
          {
            label: 'remainder theorem',
            options: ['direction of graph tails as $x	o\\pm\\infty$', 'remainder of division by $x-c$ equals $p(c)$', '$p(c)=0$ implies $(x-c)$ is a factor', 'non-real roots of real polynomials occur in pairs']
          },
          {
            label: 'factor theorem',
            options: ['highest exponent with nonzero coefficient', 'direction of graph tails as $x	o\\pm\\infty$', 'non-real roots of real polynomials occur in pairs', '$p(c)=0$ implies $(x-c)$ is a factor']
          }
        ],
        correctAnswers: ['number of times a factor repeats', 'remainder of division by $x-c$ equals $p(c)$', '$p(c)=0$ implies $(x-c)$ is a factor'],
        hint1: 'Match each term to the full definition, not just a keyword.',
        hint2: 'Use elimination by checking whether each definition captures the right dependency.',
        hint3: 'Read the label and option together as one complete mathematical sentence.',
        explanation: 'Correct mapping: multiplicity, remainder theorem, and factor theorem align with their exact definitions used in this part.'
      }
    },
    {
      id: 'precalc-polynomial-functions-precalc-p4-s6-strategy',
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
      
      Tie each step to multiplicity, remainder theorem, and factor theorem so your reasoning is explicit and checkable.
      `
    },
    {
      id: 'precalc-polynomial-functions-precalc-p4-s7-mcq-applied',
      type: 'multiple-choice' as const,
      content: `
      **Applied mixed questions (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'A student is testing candidate roots rapidly. Which term best anchors the next reasoning step if the key idea is: direction of graph tails as $x	o\\pm\\infty$?',
            options: [
              'remainder theorem',
              'multiplicity',
              'end behavior',
              'factor theorem'
            ],
            correctAnswer: 2,
            explanation: 'end behavior matches that description and keeps the model-to-interpretation chain consistent.'
          },
          {
            question: 'A student is solving a mixed polynomial functions prompt. Which term best anchors the next reasoning step if the key idea is: non-real roots of real polynomials occur in pairs?',
            options: [
              'conjugate roots',
              'degree',
              'end behavior',
              'factor theorem'
            ],
            correctAnswer: 0,
            explanation: 'conjugate roots matches that description and keeps the model-to-interpretation chain consistent.'
          }
        ]
      }
    }
  ]
};
