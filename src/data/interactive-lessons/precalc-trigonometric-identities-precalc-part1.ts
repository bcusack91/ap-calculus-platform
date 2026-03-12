export const precalcTrigIdentitiesPart1Data = {
  topicSlug: 'trigonometric-identities-precalc',
  sections: [
    {
      id: 'precalc-trigonometric-identities-precalc-p1-s1-intro',
      type: 'text' as const,
      content: `
      ## Trigonometric Identities: Pythagorean identity family
      
      **Part 1 of 7**
      
      This part focuses on simplifying expressions before solving equations. Keep notation precise and connect each symbolic step to geometric or functional meaning.
      
      ### Core definitions
      - **Pythagorean identity**: $\sin^2\\heta+\cos^2\\heta=1$
      - **quotient identity**: $\\an\\heta=
      rac{\sin\\heta}{\cos\\heta}$
      - **reciprocal identity**: $\sec\\heta=
      rac1{\cos\\heta}$ and analogs
      
      
      ### Worked Example
      Simplify $
      rac{1-\cos^2\\heta}{\sin\\heta}$ for $\sin\\heta
      eq0$.
      
      Use $1-\cos^2\\heta=\sin^2\\heta$:
      
      $$
      rac{1-\cos^2\\heta}{\sin\\heta}=
      rac{\sin^2\\heta}{\sin\\heta}=\sin\\heta$$
      
      Identity substitution first, then cancellation, keeps the algebra clean.
      `
    },
    {
      id: 'precalc-trigonometric-identities-precalc-p1-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Multiple-choice check (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'Choose the most accurate definition of Pythagorean identity.',
            options: [
              '$\\sin^2\\heta+\\cos^2\\heta=1$',
              'sign behavior under $\\heta\\mapsto -\\heta$',
              '$\\sec\\heta=\\rac1{\\cos\\heta}$ and analogs',
              '$\\an\\heta=\\rac{\\sin\\heta}{\\cos\\heta}$'
            ],
            correctAnswer: 0,
            explanation: 'Pythagorean identity is defined as: $\\sin^2\\heta+\\cos^2\\heta=1$.'
          },
          {
            question: 'In simplifying expressions before solving equations, which expression is the best starting model?',
            options: [
              '$\\cos(A+B)=\\cos A\\cos B-\\sin A\\sin B$',
              '$\\sin(2\\theta)=2\\sin\\theta\\cos\\theta$',
              '$\\tan\\theta=\\frac{\\sin\\theta}{\\cos\\theta}$',
              '$\\sin^2\\theta+\\cos^2\\theta=1$'
            ],
            correctAnswer: 3,
            explanation: 'Use $\\sin^2\\theta+\\cos^2\\theta=1$ first, then substitute known quantities from the prompt.'
          }
        ]
      }
    },
    {
      id: 'precalc-trigonometric-identities-precalc-p1-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive: formulas and decision rules
      
      Use this table to pick the right expression before computing.
      
      | Tool | Formula | Best use |
      |---|---|---|
      | Pythagorean | $\sin^2\theta+\cos^2\theta=1$ | fundamental conversion |
      | Tangent | $\tan\theta=\frac{\sin\theta}{\cos\theta}$ | quotient rewrite |
      | Cosine sum | $\cos(A+B)=\cos A\cos B-\sin A\sin B$ | angle combination |
      | Sine double-angle | $\sin(2\theta)=2\sin\theta\cos\theta$ | power reduction and simplification |
      
      ### Common pitfalls
      - Do not treat identities as equations to solve unless the task requests solving.
      - Keep track of domain restrictions when dividing by trig expressions.
      - Choose one target form early to prevent circular verification.
      
      ### Precision checks
      1. Identify givens and unknowns before selecting a formula.
      2. Keep exact values through symbolic simplification when possible.
      3. Verify units, angle mode, or domain constraints before finalizing.
      `
    },
    {
      id: 'precalc-trigonometric-identities-precalc-p1-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — Identity Values**
      
      1) Compute $\sin^2 30^\circ + \cos^2 30^\circ$.
      2) Compute $\\an 45^\circ$.
      3) Compute $\sec 60^\circ$.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['1', '1', '2'],
        hint1: 'Use the Pythagorean identity.',
        hint2: 'Recall special-angle values.',
        hint3: 'Use reciprocal: $\\sec\\heta=1/\\cos\\heta$.',
        explanation: 'Pythagorean identity gives 1, tangent at 45° is 1, and secant at 60° is 2.'
      }
    },
    {
      id: 'precalc-trigonometric-identities-precalc-p1-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown-select practice (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Pythagorean identity',
            options: ['$\\an\\heta=\\rac{\\sin\\heta}{\\cos\\heta}$', '$\\sin^2\\heta+\\cos^2\\heta=1$', 'sign behavior under $\\heta\\mapsto -\\heta$', '$\\sec\\heta=\\rac1{\\cos\\heta}$ and analogs']
          },
          {
            label: 'quotient identity',
            options: ['relation between complementary angles', '$\\sec\\heta=\\rac1{\\cos\\heta}$ and analogs', 'sign behavior under $\\heta\\mapsto -\\heta$', '$\\an\\heta=\\rac{\\sin\\heta}{\\cos\\heta}$']
          },
          {
            label: 'reciprocal identity',
            options: ['sign behavior under $\\heta\\mapsto -\\heta$', 'formula for trig of $A\\pm B$', '$\\sec\\heta=\\rac1{\\cos\\heta}$ and analogs', 'relation between complementary angles']
          }
        ],
        correctAnswers: ['$\\sin^2\\heta+\\cos^2\\heta=1$', '$\\an\\heta=\\rac{\\sin\\heta}{\\cos\\heta}$', '$\\sec\\heta=\\rac1{\\cos\\heta}$ and analogs'],
        hint1: 'Match each term to the full definition, not just a keyword.',
        hint2: 'Use elimination by checking whether each definition captures the right dependency.',
        hint3: 'Read the label and option together as one complete mathematical sentence.',
        explanation: 'Correct mapping: Pythagorean identity, quotient identity, and reciprocal identity align with their exact definitions used in this part.'
      }
    },
    {
      id: 'precalc-trigonometric-identities-precalc-p1-s6-strategy',
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
      
      Tie each step to Pythagorean identity, quotient identity, and reciprocal identity so your reasoning is explicit and checkable.
      `
    },
    {
      id: 'precalc-trigonometric-identities-precalc-p1-s7-mcq-applied',
      type: 'multiple-choice' as const,
      content: `
      **Applied mixed questions (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'A student is simplifying expressions before solving equations. Which term best anchors the next reasoning step if the key idea is: sign behavior under $\\heta\\mapsto -\\heta$?',
            options: [
              'Pythagorean identity',
              'even-odd identity',
              'quotient identity',
              'reciprocal identity'
            ],
            correctAnswer: 1,
            explanation: 'even-odd identity matches that description and keeps the model-to-interpretation chain consistent.'
          },
          {
            question: 'A student is solving a mixed trigonometric identities prompt. Which term best anchors the next reasoning step if the key idea is: relation between complementary angles?',
            options: [
              'reciprocal identity',
              'cofunction identity',
              'sum identity',
              'even-odd identity'
            ],
            correctAnswer: 1,
            explanation: 'cofunction identity matches that description and keeps the model-to-interpretation chain consistent.'
          }
        ]
      }
    }
  ]
};
