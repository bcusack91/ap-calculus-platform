export const precalcTrigIdentitiesPart5Data = {
  topicSlug: 'trigonometric-identities-precalc',
  sections: [
    {
      id: 'precalc-trigonometric-identities-precalc-p5-s1-intro',
      type: 'text' as const,
      content: `
      ## Trigonometric Identities: Double-angle and half-angle structures
      
      **Part 5 of 7**
      
      This part focuses on reducing powers for integration-prep style tasks. Keep notation precise and connect each symbolic step to geometric or functional meaning.
      
      ### Core definitions
      - **cofunction identity**: relation between complementary angles
      - **sum identity**: formula for trig of $A\pm B$
      - **double-angle identity**: expressions for trig of $2\\heta$
      
      
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
      id: 'precalc-trigonometric-identities-precalc-p5-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Multiple-choice check (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'Choose the most accurate definition of cofunction identity.',
            options: [
              'relation between complementary angles',
              'formula for trig of $A\\pm B$',
              'expressions for trig of $2\\heta$',
              'rewrite one side with targeted identities'
            ],
            correctAnswer: 0,
            explanation: 'cofunction identity is defined as: relation between complementary angles.'
          },
          {
            question: 'In reducing powers for integration-prep style tasks, which expression is the best starting model?',
            options: [
              '$\\sin^2\\theta+\\cos^2\\theta=1$',
              '$\\sin(2\\theta)=2\\sin\\theta\\cos\\theta$',
              '$\\tan\\theta=\\frac{\\sin\\theta}{\\cos\\theta}$',
              '$\\cos(A+B)=\\cos A\\cos B-\\sin A\\sin B$'
            ],
            correctAnswer: 0,
            explanation: 'Use $\\sin^2\\theta+\\cos^2\\theta=1$ first, then substitute known quantities from the prompt.'
          }
        ]
      }
    },
    {
      id: 'precalc-trigonometric-identities-precalc-p5-s3-deep-dive',
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
      - Keep track of domain restrictions when dividing by trig expressions.
      - Choose one target form early to prevent circular verification.
      - Do not treat identities as equations to solve unless the task requests solving.
      
      ### Precision checks
      1. Identify givens and unknowns before selecting a formula.
      2. Keep exact values through symbolic simplification when possible.
      3. Verify units, angle mode, or domain constraints before finalizing.
      `
    },
    {
      id: 'precalc-trigonometric-identities-precalc-p5-s4-input',
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
      id: 'precalc-trigonometric-identities-precalc-p5-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown-select practice (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'cofunction identity',
            options: ['formula for trig of $A\\pm B$', 'expressions for trig of $2\\heta$', 'rewrite one side with targeted identities', 'relation between complementary angles']
          },
          {
            label: 'sum identity',
            options: ['expressions for trig of $2\\heta$', '$\\sin^2\\heta+\\cos^2\\heta=1$', 'rewrite one side with targeted identities', 'formula for trig of $A\\pm B$']
          },
          {
            label: 'double-angle identity',
            options: ['rewrite one side with targeted identities', '$\\an\\heta=\\rac{\\sin\\heta}{\\cos\\heta}$', '$\\sin^2\\heta+\\cos^2\\heta=1$', 'expressions for trig of $2\\heta$']
          }
        ],
        correctAnswers: ['relation between complementary angles', 'formula for trig of $A\\pm B$', 'expressions for trig of $2\\heta$'],
        hint1: 'Match each term to the full definition, not just a keyword.',
        hint2: 'Use elimination by checking whether each definition captures the right dependency.',
        hint3: 'Read the label and option together as one complete mathematical sentence.',
        explanation: 'Correct mapping: cofunction identity, sum identity, and double-angle identity align with their exact definitions used in this part.'
      }
    },
    {
      id: 'precalc-trigonometric-identities-precalc-p5-s6-strategy',
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
      
      Tie each step to cofunction identity, sum identity, and double-angle identity so your reasoning is explicit and checkable.
      `
    },
    {
      id: 'precalc-trigonometric-identities-precalc-p5-s7-mcq-applied',
      type: 'multiple-choice' as const,
      content: `
      **Applied mixed questions (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'A student is reducing powers for integration-prep style tasks. Which term best anchors the next reasoning step if the key idea is: rewrite one side with targeted identities?',
            options: [
              'cofunction identity',
              'verification strategy',
              'double-angle identity',
              'sum identity'
            ],
            correctAnswer: 1,
            explanation: 'verification strategy matches that description and keeps the model-to-interpretation chain consistent.'
          },
          {
            question: 'A student is solving a mixed trigonometric identities prompt. Which term best anchors the next reasoning step if the key idea is: $\\sin^2\\heta+\\cos^2\\heta=1$?',
            options: [
              'quotient identity',
              'verification strategy',
              'Pythagorean identity',
              'double-angle identity'
            ],
            correctAnswer: 2,
            explanation: 'Pythagorean identity matches that description and keeps the model-to-interpretation chain consistent.'
          }
        ]
      }
    }
  ]
};
