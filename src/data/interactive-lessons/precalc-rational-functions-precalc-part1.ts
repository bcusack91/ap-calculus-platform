export const precalcRationalPart1Data = {
  topicSlug: 'rational-functions-precalc',
  sections: [
    {
      id: 'precalc-rational-functions-precalc-p1-s1-intro',
      type: 'text' as const,
      content: `
      ## Rational Functions: Domain and excluded values
      
      **Part 1 of 7**
      
      This part focuses on screening illegal input values. Keep notation precise and connect each symbolic step to geometric or functional meaning.
      
      ### Core definitions
      - **rational function**: ratio of two polynomials with nonzero denominator
      - **domain restriction**: input value making denominator zero is excluded
      - **vertical asymptote**: line where function magnitude grows without bound
      
      
      ### Worked Example
      Part 1 uses direct precalculus notation to move from structure to computation.
      
      Start with a model statement, substitute known values, and simplify step by step using exact form first.
      When needed, convert to decimals only after the symbolic setup is complete.
      `
    },
    {
      id: 'precalc-rational-functions-precalc-p1-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Multiple-choice check (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'Choose the most accurate definition of rational function.',
            options: [
              'input value making denominator zero is excluded',
              'output value approached for large $|x|$',
              'line where function magnitude grows without bound',
              'ratio of two polynomials with nonzero denominator'
            ],
            correctAnswer: 3,
            explanation: 'rational function is defined as: ratio of two polynomials with nonzero denominator.'
          },
          {
            question: 'In screening illegal input values, which expression is the best starting model?',
            options: [
              '$\\deg p < \\deg q \\Rightarrow y=0$',
              '$q(c)=0\\text{ and factor not cancelled}$',
              '$f(x)=\\frac{p(x)}{q(x)}$',
              '$\\frac{(x-a)g(x)}{(x-a)h(x)}=\\frac{g(x)}{h(x)}\\;(x\\neq a)$'
            ],
            correctAnswer: 2,
            explanation: 'Use $f(x)=\\frac{p(x)}{q(x)}$ first, then substitute known quantities from the prompt.'
          }
        ]
      }
    },
    {
      id: 'precalc-rational-functions-precalc-p1-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive: formulas and decision rules
      
      Use this table to pick the right expression before computing.
      
      | Tool | Formula | Best use |
      |---|---|---|
      | General form | $f(x)=\\frac{p(x)}{q(x)}$ | ratio modeling |
      | Vertical asymptote test | $q(c)=0\\text{ and factor not cancelled}$ | non-removable singularity |
      | Horizontal rule | $\deg p < \deg q \\Rightarrow y=0$ | end behavior shortcut |
      | Hole simplification | $\\frac{(x-a)g(x)}{(x-a)h(x)}=\\frac{g(x)}{h(x)}\;(x\\neq a)$ | removable cleanup |
      
      ### Common pitfalls
      - Cancellation removes factors, not domain restrictions.
      - Asymptotes are approach lines, not always graph intersections to forbid.
      - Match algebra and graph features before concluding function type.
      
      ### Precision checks
      1. Identify givens and unknowns before selecting a formula.
      2. Keep exact values through symbolic simplification when possible.
      3. Verify units, angle mode, or domain constraints before finalizing.
      `
    },
    {
      id: 'precalc-rational-functions-precalc-p1-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — Rational Evaluation**
      
      1) Evaluate $
      rac{x^2-9}{x-3}$ at $x=5$ after simplification.
      2) State vertical asymptote for $f(x)=
      rac1{x-4}$.
      3) Evaluate $
      rac{2x+1}{x+2}$ at $x=2$.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['8', '4', '1.25'],
        hint1: 'Factor numerator as $(x-3)(x+3)$.',
        hint2: 'Set denominator equal to zero.',
        hint3: 'Substitute then divide carefully.',
        explanation: 'Simplified evaluation gives 8, asymptote is $x=4$, and direct substitution gives 1.25.'
      }
    },
    {
      id: 'precalc-rational-functions-precalc-p1-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown-select practice (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'rational function',
            options: ['line where function magnitude grows without bound', 'ratio of two polynomials with nonzero denominator', 'output value approached for large $|x|$', 'input value making denominator zero is excluded']
          },
          {
            label: 'domain restriction',
            options: ['removable point from common-factor cancellation', 'output value approached for large $|x|$', 'line where function magnitude grows without bound', 'input value making denominator zero is excluded']
          },
          {
            label: 'vertical asymptote',
            options: ['trend as input magnitude becomes large', 'line where function magnitude grows without bound', 'removable point from common-factor cancellation', 'output value approached for large $|x|$']
          }
        ],
        correctAnswers: ['ratio of two polynomials with nonzero denominator', 'input value making denominator zero is excluded', 'line where function magnitude grows without bound'],
        hint1: 'Match each term to the full definition, not just a keyword.',
        hint2: 'Use elimination by checking whether each definition captures the right dependency.',
        hint3: 'Read the label and option together as one complete mathematical sentence.',
        explanation: 'Correct mapping: rational function, domain restriction, and vertical asymptote align with their exact definitions used in this part.'
      }
    },
    {
      id: 'precalc-rational-functions-precalc-p1-s6-strategy',
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
      
      Tie each step to rational function, domain restriction, and vertical asymptote so your reasoning is explicit and checkable.
      `
    },
    {
      id: 'precalc-rational-functions-precalc-p1-s7-mcq-applied',
      type: 'multiple-choice' as const,
      content: `
      **Applied mixed questions (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'A student is screening illegal input values. Which term best anchors the next reasoning step if the key idea is: output value approached for large $|x|$?',
            options: [
              'rational function',
              'horizontal asymptote',
              'domain restriction',
              'vertical asymptote'
            ],
            correctAnswer: 1,
            explanation: 'horizontal asymptote matches that description and keeps the model-to-interpretation chain consistent.'
          },
          {
            question: 'A student is solving a mixed rational functions prompt. Which term best anchors the next reasoning step if the key idea is: removable point from common-factor cancellation?',
            options: [
              'end behavior',
              'horizontal asymptote',
              'vertical asymptote',
              'hole'
            ],
            correctAnswer: 3,
            explanation: 'hole matches that description and keeps the model-to-interpretation chain consistent.'
          }
        ]
      }
    }
  ]
};
