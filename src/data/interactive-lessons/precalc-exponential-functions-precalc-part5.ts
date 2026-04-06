export const precalcExponentialPart5Data = {
  topicSlug: 'exponential-functions-precalc',
  sections: [
    {
      id: 'precalc-exponential-functions-precalc-p5-s1-intro',
      type: 'text' as const,
      content: `
      ## Exponential Functions: Exponential equations with logs
      
      **Part 5 of 7**
      
      This part focuses on solving unknown exponents in calibration models. Keep notation precise and connect each symbolic step to geometric or functional meaning.
      
      ### Core definitions
      - **doubling time**: input interval required to multiply output by 2
      - **half-life**: input interval required to multiply output by $
      rac12$
      - **relative rate**: percent change per step or per unit time
      
      
      ### Worked Example
      Part 5 uses direct precalculus notation to move from structure to computation.
      
      Start with a model statement, substitute known values, and simplify step by step using exact form first.
      When needed, convert to decimals only after the symbolic setup is complete.
      `
    },
    {
      id: 'precalc-exponential-functions-precalc-p5-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Multiple-choice check (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'Choose the most accurate definition of doubling time.',
            options: [
              'percent change per step or per unit time',
              'using logarithms to solve for exponents',
              'input interval required to multiply output by 2',
              'input interval required to multiply output by $\\rac12$'
            ],
            correctAnswer: 2,
            explanation: 'doubling time is defined as: input interval required to multiply output by 2.'
          },
          {
            question: 'In solving unknown exponents in calibration models, which expression is the best starting model?',
            options: [
              '$T_d=\\frac{\\ln 2}{k}$',
              '$f(t)=Ae^{kt}$',
              '$T_{1/2}=\\frac{\\ln 2}{|k|}$',
              '$f(x)=ab^x$'
            ],
            correctAnswer: 3,
            explanation: 'Use $f(x)=ab^x$ first, then substitute known quantities from the prompt.'
          }
        ]
      }
    },
    {
      id: 'precalc-exponential-functions-precalc-p5-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive: formulas and decision rules
      
      Use this table to pick the right expression before computing.
      
      | Tool | Formula | Best use |
      |---|---|---|
      | Exponential form | $f(x)=ab^x$ | model construction |
      | Continuous model | $f(t)=Ae^{kt}$ | growth/decay by constant relative rate |
      | Doubling time | $T_d=\\frac{\ln 2}{k}$ | continuous growth timing |
      | Half-life | $T_{1/2}=\\frac{\ln 2}{|k|}$ | continuous decay timing |
      
      ### Common pitfalls
      - A linear graph of raw data is not exponential evidence; inspect ratios.
      - When solving exponents, isolate the exponential expression before applying logs.
      - Do not confuse the base $b$ with the initial value $a$.
      
      ### Precision checks
      1. Identify givens and unknowns before selecting a formula.
      2. Keep exact values through symbolic simplification when possible.
      3. Verify units, angle mode, or domain constraints before finalizing.
      `
    },
    {
      id: 'precalc-exponential-functions-precalc-p5-s4-input',
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
      id: 'precalc-exponential-functions-precalc-p5-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown-select practice (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'doubling time',
            options: ['using logarithms to solve for exponents', 'input interval required to multiply output by 2', 'input interval required to multiply output by $\\frac12$', 'percent change per step or per unit time']
          },
          {
            label: 'half-life',
            options: ['input interval required to multiply output by $\\frac12$', 'percent change per step or per unit time', 'using logarithms to solve for exponents', 'function of the form $f(x)=ab^x$ with $b>0, b\\neq1$']
          },
          {
            label: 'relative rate',
            options: ['multiplier per unit increase in input', 'using logarithms to solve for exponents', 'percent change per step or per unit time', 'function of the form $f(x)=ab^x$ with $b>0, b\\neq1$']
          }
        ],
        correctAnswers: ['input interval required to multiply output by 2', 'input interval required to multiply output by $\\frac12$', 'percent change per step or per unit time'],
        hint1: 'Match each term to the full definition, not just a keyword.',
        hint2: 'Use elimination by checking whether each definition captures the right dependency.',
        hint3: 'Read the label and option together as one complete mathematical sentence.',
        explanation: 'Correct mapping: doubling time, half-life, and relative rate align with their exact definitions used in this part.'
      }
    },
    {
      id: 'precalc-exponential-functions-precalc-p5-s6-strategy',
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
      
      Tie each step to doubling time, half-life, and relative rate so your reasoning is explicit and checkable.
      `
    },
    {
      id: 'precalc-exponential-functions-precalc-p5-s7-mcq-applied',
      type: 'multiple-choice' as const,
      content: `
      **Applied mixed questions (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'A student is solving unknown exponents in calibration models. Which term best anchors the next reasoning step if the key idea is: using logarithms to solve for exponents?',
            options: [
              'relative rate',
              'doubling time',
              'log linearization',
              'half-life'
            ],
            correctAnswer: 2,
            explanation: 'log linearization matches that description and keeps the model-to-interpretation chain consistent.'
          },
          {
            question: 'A student is solving a mixed exponential functions prompt. Which term best anchors the next reasoning step if the key idea is: function of the form $f(x)=ab^x$ with $b>0, b\\neq1$?',
            options: [
              'log linearization',
              'exponential function',
              'relative rate',
              'growth factor'
            ],
            correctAnswer: 1,
            explanation: 'exponential function matches that description and keeps the model-to-interpretation chain consistent.'
          }
        ]
      }
    }
  ]
};
