export const precalcExponentialPart3Data = {
  topicSlug: 'exponential-functions-precalc',
  sections: [
    {
      id: 'precalc-exponential-functions-precalc-p3-s1-intro',
      type: 'text' as const,
      content: `
      ## Exponential Functions: Compound growth models
      
      **Part 3 of 7**
      
      This part focuses on modeling annual investment compounding. Keep notation precise and connect each symbolic step to geometric or functional meaning.
      
      ### Core definitions
      - **decay factor**: multiplier between 0 and 1 per input step
      - **initial value**: value when input is zero
      - **doubling time**: input interval required to multiply output by 2
      
      
      ### Worked Example
      Part 3 uses direct precalculus notation to move from structure to computation.
      
      Start with a model statement, substitute known values, and simplify step by step using exact form first.
      When needed, convert to decimals only after the symbolic setup is complete.
      `
    },
    {
      id: 'precalc-exponential-functions-precalc-p3-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Multiple-choice check (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'Choose the most accurate definition of decay factor.',
            options: [
              'value when input is zero',
              'input interval required to multiply output by $\\rac12$',
              'input interval required to multiply output by 2',
              'multiplier between 0 and 1 per input step'
            ],
            correctAnswer: 3,
            explanation: 'decay factor is defined as: multiplier between 0 and 1 per input step.'
          },
          {
            question: 'In modeling annual investment compounding, which expression is the best starting model?',
            options: [
              '$T_d=\\frac{\\ln 2}{k}$',
              '$f(x)=ab^x$',
              '$f(t)=Ae^{kt}$',
              '$T_{1/2}=\\frac{\\ln 2}{|k|}$'
            ],
            correctAnswer: 0,
            explanation: 'Use $T_d=\\frac{\\ln 2}{k}$ first, then substitute known quantities from the prompt.'
          }
        ]
      }
    },
    {
      id: 'precalc-exponential-functions-precalc-p3-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive: formulas and decision rules
      
      Use this table to pick the right expression before computing.
      
      | Tool | Formula | Best use |
      |---|---|---|
      | Doubling time | $T_d=\frac{\ln 2}{k}$ | continuous growth timing |
      | Half-life | $T_{1/2}=\frac{\ln 2}{|k|}$ | continuous decay timing |
      | Exponential form | $f(x)=ab^x$ | model construction |
      | Continuous model | $f(t)=Ae^{kt}$ | growth/decay by constant relative rate |
      
      ### Common pitfalls
      - When solving exponents, isolate the exponential expression before applying logs.
      - Do not confuse the base $b$ with the initial value $a$.
      - A linear graph of raw data is not exponential evidence; inspect ratios.
      
      ### Precision checks
      1. Identify givens and unknowns before selecting a formula.
      2. Keep exact values through symbolic simplification when possible.
      3. Verify units, angle mode, or domain constraints before finalizing.
      `
    },
    {
      id: 'precalc-exponential-functions-precalc-p3-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — Exponential Evaluation**
      
      1) Solve $2^x=32$ for $x$.
      2) Evaluate $f(3)$ for $f(x)=5\left(
      rac{1}{2}
      ight)^x$.
      3) If $P(t)=100(1.1)^t$, compute $P(2)$.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['5', '0.625', '121'],
        hint1: 'Rewrite 32 as a power of 2.',
        hint2: 'Compute $(1/2)^3$ first, then scale by 5.',
        hint3: 'Square the growth factor 1.1 and multiply by 100.',
        explanation: 'The answers are 5, 0.625, and 121 after direct exponential substitution.'
      }
    },
    {
      id: 'precalc-exponential-functions-precalc-p3-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown-select practice (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'decay factor',
            options: ['value when input is zero', 'input interval required to multiply output by $\\rac12$', 'input interval required to multiply output by 2', 'multiplier between 0 and 1 per input step']
          },
          {
            label: 'initial value',
            options: ['input interval required to multiply output by $\\rac12$', 'input interval required to multiply output by 2', 'percent change per step or per unit time', 'value when input is zero']
          },
          {
            label: 'doubling time',
            options: ['percent change per step or per unit time', 'input interval required to multiply output by 2', 'using logarithms to solve for exponents', 'input interval required to multiply output by $\\rac12$']
          }
        ],
        correctAnswers: ['multiplier between 0 and 1 per input step', 'value when input is zero', 'input interval required to multiply output by 2'],
        hint1: 'Match each term to the full definition, not just a keyword.',
        hint2: 'Use elimination by checking whether each definition captures the right dependency.',
        hint3: 'Read the label and option together as one complete mathematical sentence.',
        explanation: 'Correct mapping: decay factor, initial value, and doubling time align with their exact definitions used in this part.'
      }
    },
    {
      id: 'precalc-exponential-functions-precalc-p3-s6-strategy',
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
      
      Tie each step to decay factor, initial value, and doubling time so your reasoning is explicit and checkable.
      `
    },
    {
      id: 'precalc-exponential-functions-precalc-p3-s7-mcq-applied',
      type: 'multiple-choice' as const,
      content: `
      **Applied mixed questions (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'A student is modeling annual investment compounding. Which term best anchors the next reasoning step if the key idea is: input interval required to multiply output by $\\rac12$?',
            options: [
              'initial value',
              'half-life',
              'doubling time',
              'decay factor'
            ],
            correctAnswer: 1,
            explanation: 'half-life matches that description and keeps the model-to-interpretation chain consistent.'
          },
          {
            question: 'A student is solving a mixed exponential functions prompt. Which term best anchors the next reasoning step if the key idea is: percent change per step or per unit time?',
            options: [
              'relative rate',
              'doubling time',
              'half-life',
              'log linearization'
            ],
            correctAnswer: 0,
            explanation: 'relative rate matches that description and keeps the model-to-interpretation chain consistent.'
          }
        ]
      }
    }
  ]
};
