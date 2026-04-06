export const precalcRationalPart5Data = {
  topicSlug: 'rational-functions-precalc',
  sections: [
    {
      id: 'precalc-rational-functions-precalc-p5-s1-intro',
      type: 'text' as const,
      content: `
      ## Rational Functions: Graph interpretation and transformations
      
      **Part 5 of 7**
      
      This part focuses on graphing translated reciprocal families. Keep notation precise and connect each symbolic step to geometric or functional meaning.
      
      ### Core definitions
      - **hole**: removable point from common-factor cancellation
      - **end behavior**: trend as input magnitude becomes large
      - **degree comparison**: tool for asymptote prediction
      
      
      ### Worked Example
      Part 5 uses direct precalculus notation to move from structure to computation.
      
      Start with a model statement, substitute known values, and simplify step by step using exact form first.
      When needed, convert to decimals only after the symbolic setup is complete.
      `
    },
    {
      id: 'precalc-rational-functions-precalc-p5-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Multiple-choice check (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'Choose the most accurate definition of hole.',
            options: [
              'removable point from common-factor cancellation',
              'tool for asymptote prediction',
              'rewrite into simpler rational terms',
              'trend as input magnitude becomes large'
            ],
            correctAnswer: 0,
            explanation: 'hole is defined as: removable point from common-factor cancellation.'
          },
          {
            question: 'In graphing translated reciprocal families, which expression is the best starting model?',
            options: [
              '$\\frac{(x-a)g(x)}{(x-a)h(x)}=\\frac{g(x)}{h(x)}\\;(x\\neq a)$',
              '$q(c)=0\\text{ and factor not cancelled}$',
              '$\\deg p < \\deg q \\Rightarrow y=0$',
              '$f(x)=\\frac{p(x)}{q(x)}$'
            ],
            correctAnswer: 3,
            explanation: 'Use $f(x)=\\frac{p(x)}{q(x)}$ first, then substitute known quantities from the prompt.'
          }
        ]
      }
    },
    {
      id: 'precalc-rational-functions-precalc-p5-s3-deep-dive',
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
      - Asymptotes are approach lines, not always graph intersections to forbid.
      - Match algebra and graph features before concluding function type.
      - Cancellation removes factors, not domain restrictions.
      
      ### Precision checks
      1. Identify givens and unknowns before selecting a formula.
      2. Keep exact values through symbolic simplification when possible.
      3. Verify units, angle mode, or domain constraints before finalizing.
      `
    },
    {
      id: 'precalc-rational-functions-precalc-p5-s4-input',
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
      id: 'precalc-rational-functions-precalc-p5-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown-select practice (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'hole',
            options: ['trend as input magnitude becomes large', 'rewrite into simpler rational terms', 'tool for asymptote prediction', 'removable point from common-factor cancellation']
          },
          {
            label: 'end behavior',
            options: ['rewrite into simpler rational terms', 'tool for asymptote prediction', 'ratio of two polynomials with nonzero denominator', 'trend as input magnitude becomes large']
          },
          {
            label: 'degree comparison',
            options: ['ratio of two polynomials with nonzero denominator', 'input value making denominator zero is excluded', 'rewrite into simpler rational terms', 'tool for asymptote prediction']
          }
        ],
        correctAnswers: ['removable point from common-factor cancellation', 'trend as input magnitude becomes large', 'tool for asymptote prediction'],
        hint1: 'Match each term to the full definition, not just a keyword.',
        hint2: 'Use elimination by checking whether each definition captures the right dependency.',
        hint3: 'Read the label and option together as one complete mathematical sentence.',
        explanation: 'Correct mapping: hole, end behavior, and degree comparison align with their exact definitions used in this part.'
      }
    },
    {
      id: 'precalc-rational-functions-precalc-p5-s6-strategy',
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
      
      Tie each step to hole, end behavior, and degree comparison so your reasoning is explicit and checkable.
      `
    },
    {
      id: 'precalc-rational-functions-precalc-p5-s7-mcq-applied',
      type: 'multiple-choice' as const,
      content: `
      **Applied mixed questions (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'A student is graphing translated reciprocal families. Which term best anchors the next reasoning step if the key idea is: rewrite into simpler rational terms?',
            options: [
              'degree comparison',
              'partial fraction idea',
              'end behavior',
              'hole'
            ],
            correctAnswer: 1,
            explanation: 'partial fraction idea matches that description and keeps the model-to-interpretation chain consistent.'
          },
          {
            question: 'A student is solving a mixed rational functions prompt. Which term best anchors the next reasoning step if the key idea is: ratio of two polynomials with nonzero denominator?',
            options: [
              'degree comparison',
              'partial fraction idea',
              'domain restriction',
              'rational function'
            ],
            correctAnswer: 3,
            explanation: 'rational function matches that description and keeps the model-to-interpretation chain consistent.'
          }
        ]
      }
    }
  ]
};
