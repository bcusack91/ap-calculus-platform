export const precalcLogarithmicPart4Data = {
  topicSlug: 'logarithmic-functions-precalc',
  sections: [
    {
      id: 'precalc-logarithmic-functions-precalc-p4-s1-intro',
      type: 'text' as const,
      content: `
      ## Logarithmic Functions: Solving log equations
      
      **Part 4 of 7**
      
      This part focuses on filtering extraneous solutions from domain checks. Keep notation precise and connect each symbolic step to geometric or functional meaning.
      
      ### Core definitions
      - **quotient rule**: $\log_b(x/y)=\log_b x-\log_b y$
      - **power rule**: $\log_b(x^k)=k\log_b x$
      - **change of base**: rewrite logs using convenient computational bases
      
      
      ### Worked Example
      Part 4 uses direct precalculus notation to move from structure to computation.
      
      Start with a model statement, substitute known values, and simplify step by step using exact form first.
      When needed, convert to decimals only after the symbolic setup is complete.
      `
    },
    {
      id: 'precalc-logarithmic-functions-precalc-p4-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Multiple-choice check (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'Choose the most accurate definition of quotient rule.',
            options: [
              'rewrite logs using convenient computational bases',
              'log input must stay strictly positive',
              '$\\log_b(x^k)=k\\log_b x$',
              '$\\log_b(x/y)=\\log_b x-\\log_b y$'
            ],
            correctAnswer: 3,
            explanation: 'quotient rule is defined as: $\\log_b(x/y)=\\log_b x-\\log_b y$.'
          },
          {
            question: 'In filtering extraneous solutions from domain checks, which expression is the best starting model?',
            options: [
              '$\\log_b x = y \\iff b^y=x$',
              '$\\log_b(x^k)=k\\log_b x$',
              '$\\log_b x=\\frac{\\log_k x}{\\log_k b}$',
              '$\\log_b(xy)=\\log_b x+\\log_b y$'
            ],
            correctAnswer: 2,
            explanation: 'Use $\\log_b x=\\frac{\\log_k x}{\\log_k b}$ first, then substitute known quantities from the prompt.'
          }
        ]
      }
    },
    {
      id: 'precalc-logarithmic-functions-precalc-p4-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive: formulas and decision rules
      
      Use this table to pick the right expression before computing.
      
      | Tool | Formula | Best use |
      |---|---|---|
      | Change of base | $\log_b x=\frac{\log_k x}{\log_k b}$ | calculator evaluation |
      | Definition | $\log_b x = y \iff b^y=x$ | inverse conversion |
      | Product | $\log_b(xy)=\log_b x+\log_b y$ | expression expansion |
      | Power | $\log_b(x^k)=k\log_b x$ | exponent extraction |
      
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
      id: 'precalc-logarithmic-functions-precalc-p4-s4-input',
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
      id: 'precalc-logarithmic-functions-precalc-p4-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown-select practice (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'quotient rule',
            options: ['log input must stay strictly positive', 'rewrite logs using convenient computational bases', '$\\log_b(x^k)=k\\log_b x$', '$\\log_b(x/y)=\\log_b x-\\log_b y$']
          },
          {
            label: 'power rule',
            options: ['vertical line where log input approaches zero', 'rewrite logs using convenient computational bases', 'log input must stay strictly positive', '$\\log_b(x^k)=k\\log_b x$']
          },
          {
            label: 'change of base',
            options: ['vertical line where log input approaches zero', 'log input must stay strictly positive', 'exponent needed to produce a value from a base', 'rewrite logs using convenient computational bases']
          }
        ],
        correctAnswers: ['$\\log_b(x/y)=\\log_b x-\\log_b y$', '$\\log_b(x^k)=k\\log_b x$', 'rewrite logs using convenient computational bases'],
        hint1: 'Match each term to the full definition, not just a keyword.',
        hint2: 'Use elimination by checking whether each definition captures the right dependency.',
        hint3: 'Read the label and option together as one complete mathematical sentence.',
        explanation: 'Correct mapping: quotient rule, power rule, and change of base align with their exact definitions used in this part.'
      }
    },
    {
      id: 'precalc-logarithmic-functions-precalc-p4-s6-strategy',
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
      
      Tie each step to quotient rule, power rule, and change of base so your reasoning is explicit and checkable.
      `
    },
    {
      id: 'precalc-logarithmic-functions-precalc-p4-s7-mcq-applied',
      type: 'multiple-choice' as const,
      content: `
      **Applied mixed questions (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'A student is filtering extraneous solutions from domain checks. Which term best anchors the next reasoning step if the key idea is: log input must stay strictly positive?',
            options: [
              'domain condition',
              'quotient rule',
              'change of base',
              'power rule'
            ],
            correctAnswer: 0,
            explanation: 'domain condition matches that description and keeps the model-to-interpretation chain consistent.'
          },
          {
            question: 'A student is solving a mixed logarithmic functions prompt. Which term best anchors the next reasoning step if the key idea is: vertical line where log input approaches zero?',
            options: [
              'asymptote',
              'change of base',
              'logarithm',
              'domain condition'
            ],
            correctAnswer: 0,
            explanation: 'asymptote matches that description and keeps the model-to-interpretation chain consistent.'
          }
        ]
      }
    }
  ]
};
