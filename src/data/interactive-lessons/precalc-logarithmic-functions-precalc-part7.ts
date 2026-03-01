export const precalcLogarithmicPart7Data = {
  topicSlug: 'logarithmic-functions-precalc',
  sections: [
    {
      id: 'precalc-logarithmic-functions-precalc-p7-s1-intro',
      type: 'text' as const,
      content: `
      ## Logarithmic Functions: Mixed log-exponential synthesis
      
      **Part 7 of 7**
      
      This part focuses on combining log algebra with model interpretation. Keep notation precise and connect each symbolic step to geometric or functional meaning.
      
      ### Core definitions
      - **domain condition**: log input must stay strictly positive
      - **asymptote**: vertical line where log input approaches zero
      - **logarithm**: exponent needed to produce a value from a base
      
      
      ### Worked Example
      Part 7 uses direct precalculus notation to move from structure to computation.
      
      Start with a model statement, substitute known values, and simplify step by step using exact form first.
      When needed, convert to decimals only after the symbolic setup is complete.
      `
    },
    {
      id: 'precalc-logarithmic-functions-precalc-p7-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Multiple-choice check (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'Choose the most accurate definition of domain condition.',
            options: [
              'log and exponential functions undo each other',
              'vertical line where log input approaches zero',
              'exponent needed to produce a value from a base',
              'log input must stay strictly positive'
            ],
            correctAnswer: 3,
            explanation: 'domain condition is defined as: log input must stay strictly positive.'
          },
          {
            question: 'In combining log algebra with model interpretation, which expression is the best starting model?',
            options: [
              '$\\log_b(x^k)=k\\log_b x$',
              '$\\log_b x=\\frac{\\log_k x}{\\log_k b}$',
              '$\\log_b x = y \\iff b^y=x$',
              '$\\log_b(xy)=\\log_b x+\\log_b y$'
            ],
            correctAnswer: 0,
            explanation: 'Use $\\log_b(x^k)=k\\log_b x$ first, then substitute known quantities from the prompt.'
          }
        ]
      }
    },
    {
      id: 'precalc-logarithmic-functions-precalc-p7-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive: formulas and decision rules
      
      Use this table to pick the right expression before computing.
      
      | Tool | Formula | Best use |
      |---|---|---|
      | Power | $\log_b(x^k)=k\log_b x$ | exponent extraction |
      | Change of base | $\log_b x=\frac{\log_k x}{\log_k b}$ | calculator evaluation |
      | Definition | $\log_b x = y \iff b^y=x$ | inverse conversion |
      | Product | $\log_b(xy)=\log_b x+\log_b y$ | expression expansion |
      
      ### Common pitfalls
      - Applying log rules across sums, like $\log(x+y)$, is invalid.
      - Always test candidate solutions against positive-input domain restrictions.
      - Keep base notation explicit when combining terms.
      
      ### Precision checks
      1. Identify givens and unknowns before selecting a formula.
      2. Keep exact values through symbolic simplification when possible.
      3. Verify units, angle mode, or domain constraints before finalizing.
      `
    },
    {
      id: 'precalc-logarithmic-functions-precalc-p7-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — Logarithm Computation**
      
      1) Evaluate $\log_2 32$.
      2) Solve $\log_{10}(x)=2$.
      3) Evaluate $\ln(e^4)$.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['5', '100', '4'],
        hint1: 'Ask: $2^{?}=32$.',
        hint2: 'Rewrite in exponential form.',
        hint3: '$\\ln$ and $e^x$ are inverse operations.',
        explanation: 'Outputs are 5, 100, and 4 by inverse log-exponential conversion.'
      }
    },
    {
      id: 'precalc-logarithmic-functions-precalc-p7-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown-select practice (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'domain condition',
            options: ['exponent needed to produce a value from a base', 'vertical line where log input approaches zero', 'log input must stay strictly positive', 'log and exponential functions undo each other']
          },
          {
            label: 'asymptote',
            options: ['$\\log_b(xy)=\\log_b x+\\log_b y$', 'log and exponential functions undo each other', 'vertical line where log input approaches zero', 'exponent needed to produce a value from a base']
          },
          {
            label: 'logarithm',
            options: ['$\\log_b(xy)=\\log_b x+\\log_b y$', '$\\log_b(x/y)=\\log_b x-\\log_b y$', 'log and exponential functions undo each other', 'exponent needed to produce a value from a base']
          }
        ],
        correctAnswers: ['log input must stay strictly positive', 'vertical line where log input approaches zero', 'exponent needed to produce a value from a base'],
        hint1: 'Match each term to the full definition, not just a keyword.',
        hint2: 'Use elimination by checking whether each definition captures the right dependency.',
        hint3: 'Read the label and option together as one complete mathematical sentence.',
        explanation: 'Correct mapping: domain condition, asymptote, and logarithm align with their exact definitions used in this part.'
      }
    },
    {
      id: 'precalc-logarithmic-functions-precalc-p7-s6-strategy',
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
      
      Tie each step to domain condition, asymptote, and logarithm so your reasoning is explicit and checkable.
      `
    },
    {
      id: 'precalc-logarithmic-functions-precalc-p7-s7-mcq-applied',
      type: 'multiple-choice' as const,
      content: `
      **Applied mixed questions (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'A student is combining log algebra with model interpretation. Which term best anchors the next reasoning step if the key idea is: log and exponential functions undo each other?',
            options: [
              'asymptote',
              'logarithm',
              'inverse relation',
              'domain condition'
            ],
            correctAnswer: 2,
            explanation: 'inverse relation matches that description and keeps the model-to-interpretation chain consistent.'
          },
          {
            question: 'A student is solving a mixed logarithmic functions prompt. Which term best anchors the next reasoning step if the key idea is: $\\log_b(xy)=\\log_b x+\\log_b y$?',
            options: [
              'inverse relation',
              'product rule',
              'logarithm',
              'quotient rule'
            ],
            correctAnswer: 1,
            explanation: 'product rule matches that description and keeps the model-to-interpretation chain consistent.'
          }
        ]
      }
    }
  ]
};
