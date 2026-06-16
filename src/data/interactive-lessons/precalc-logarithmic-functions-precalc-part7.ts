export const precalcLogarithmicPart7Data = {
  topicSlug: 'logarithmic-functions-precalc',
  sections: [
    {
      id: 'p7-intro',
      type: 'text' as const,
      content: `
# 🏆 Logarithmic Functions — Full Synthesis

**Part 7 of 7 — Putting It All Together**

### Your Complete Log Toolkit

| Concept (Part) | Key Idea |
|:---------------|:---------|
| Definition & Inverse (1) | $\\log_b x = y \\iff b^y = x$; domain $(0, \\infty)$ |
| Properties (2) | Product, quotient, power rules for expanding/condensing |
| Transformations (3) | $g(x) = a\\log_b(x-h)+k$; VA at $x = h$ |
| Solving Equations (4) | Convert → solve → check for extraneous |
| Change of Base (5) | $\\log_b x = \\frac{\\ln x}{\\ln b}$ |
| Modeling (6) | pH, decibels, Richter — all use $\\log(\\text{ratio})$ |
      `
    },
    {
      id: 'p7-multi-step',
      type: 'text' as const,
      content: `
## 📋 Multi-Step Problem Walkthrough

> **A bacteria population is modeled by $P(t) = 500e^{0.2t}$.**
>
> **(a) When does the population reach $10{,}000$?**
> **(b) What is the doubling time?**
> **(c) Express the model in the form $P(t) = 500 \\cdot b^t$ and find the percent growth rate.**

### Part (a): When $P = 10{,}000$?

$500e^{0.2t} = 10000$

$e^{0.2t} = 20$

$0.2t = \\ln 20 \\approx 2.996$

$t \\approx 14.98 \\approx 15$ time units

### Part (b): Doubling time

$500e^{0.2t} = 1000 \\implies e^{0.2t} = 2$

$t = \\frac{\\ln 2}{0.2} = \\frac{0.693}{0.2} \\approx 3.47$ time units

### Part (c): Convert to $P = 500 \\cdot b^t$

$e^{0.2t} = (e^{0.2})^t \\approx (1.2214)^t$

So $b \\approx 1.2214$, meaning $\\approx 22.14\\%$ growth per time unit.
      `
    },
    {
      id: 'p7-strategy',
      type: 'text' as const,
      content: `
## 🗺️ Problem-Type Decision Map

| If the Problem Says... | Strategy | First Move |
|:----------------------|:---------|:-----------|
| "Evaluate $\\log_b(\\text{number})$" | Definition | Rewrite as $b^? = \\text{number}$ |
| "Expand/simplify $\\log(\\text{expression})$" | Properties (P2) | Apply product/quotient/power rules |
| "Graph $f(x) = a\\log(x-h)+k$" | Transformations (P3) | ID shifts, VA, anchor point |
| "Solve $\\log(\\text{stuff}) = \\text{stuff}$" | Equation solving (P4) | Condense logs → convert to exponential |
| "Compute $\\log_b x$ to a decimal" | Change of base (P5) | $= \\ln x / \\ln b$ |
| "Find the pH / dB / magnitude" | Modeling (P6) | Plug into the log-scale formula |
| "When does the population reach...?" | Log + exponential | Isolate exponential → take $\\ln$ |

### Connecting Logs to Exponentials

Almost every "when does it reach" problem follows this pattern:

$$ab^t = c \\implies b^t = \\frac{c}{a} \\implies t = \\frac{\\ln(c/a)}{\\ln b}$$
      `
    },
    {
      id: 'p7-mcq',
      type: 'multiple-choice' as const,
      content: `
**Synthesis Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Solve $3^{x+1} = 7^x$.',
            options: [
              '$x = \\frac{\\ln 3}{\\ln 7 - \\ln 3}$',
              '$x = \\frac{\\ln 7}{\\ln 3}$',
              '$x = \\frac{\\ln 3}{\\ln 7}$',
              '$x = \\ln 3 - \\ln 7$'
            ],
            correctAnswer: 0,
            explanation: '$\\ln(3^{x+1}) = \\ln(7^x) \\implies (x+1)\\ln 3 = x\\ln 7$. Expand: $x\\ln 3 + \\ln 3 = x\\ln 7$. Collect $x$: $\\ln 3 = x(\\ln 7 - \\ln 3)$. So $x = \\frac{\\ln 3}{\\ln 7 - \\ln 3}$.'
          },
          {
            question: 'The function $g(x) = -2\\log_5(x+3) + 1$ has domain, VA, and anchor point:',
            options: [
              'Domain: $(-3, \\infty)$, VA: $x = -3$, anchor: $(-2, 1)$',
              'Domain: $(3, \\infty)$, VA: $x = 3$, anchor: $(4, 1)$',
              'Domain: $(-3, \\infty)$, VA: $x = -3$, anchor: $(-3, 1)$',
              'Domain: $(0, \\infty)$, VA: $x = 0$, anchor: $(1, 1)$'
            ],
            correctAnswer: 0,
            explanation: '$x + 3 > 0 \\implies x > -3$. VA at $x = -3$. Anchor: when argument $= 1$, i.e., $x + 3 = 1 \\implies x = -2$. $g(-2) = -2\\log_5(1) + 1 = 0 + 1 = 1$. Anchor: $(-2, 1)$.'
          },
          {
            question: 'If $\\log 2 \\approx 0.301$ and $\\log 5 \\approx 0.699$, find $\\log 0.04$.',
            options: [
              '$-1.398$',
              '$-1.000$',
              '$-0.398$',
              '$-2 + 0.602$'
            ],
            correctAnswer: 0,
            explanation: '$0.04 = \\frac{4}{100} = \\frac{2^2}{10^2} = \\frac{1}{25} = 5^{-2}$. $\\log(5^{-2}) = -2\\log 5 = -2(0.699) = -1.398$.'
          }
        ]
      }
    },
    {
      id: 'p7-input',
      type: 'input-boxes' as const,
      content: `
**Multi-Skill Drill** 🧮

**1)** An investment grows as $A = 2000e^{0.06t}$. How many years to reach \\$6,000? Round to one decimal. (e.g., $1000e^{0.05t} = 3000$: $t = \\frac{\\ln 3}{0.05} = \\frac{1.099}{0.05} = 22.0$ years)

**2)** Condense: $2\\log x - \\frac{1}{2}\\log y$. Write the coefficient on $y$ when the expression equals $\\log\\left(\\frac{x^a}{y^b}\\right)$. What is $b$ as a fraction? (e.g., $3\\log x - 2\\log y = \\log(x^3/y^2)$, so $b = 2$)

**3)** An earthquake of magnitude $4$ vs magnitude $7$: the stronger one has how many times the amplitude? (e.g., magnitude $3$ vs $5$: difference $2$, ratio $= 10^2 = 100$)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['18.3', '1/2', '1000'],
        hint1: '$e^{0.06t} = 3 \\implies t = \\frac{\\ln 3}{0.06}$.',
        hint2: 'Power rule: $2\\log x = \\log(x^2)$ and $\\frac{1}{2}\\log y = \\log(y^{1/2})$.',
        hint3: 'Difference: $7 - 4 = 3$. Amplitude ratio: $10^3$.',
        explanation: '1) $t = \\frac{\\ln 3}{0.06} = \\frac{1.099}{0.06} \\approx 18.3$ years. 2) $= \\log(x^2) - \\log(y^{1/2}) = \\log(x^2/\\sqrt{y})$, so $b = 1/2$. 3) $10^3 = 1{,}000\\times$.'
      }
    },
    {
      id: 'p7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Connection** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'To solve $5 \\cdot 2^x = 80$, the first algebraic step is',
            options: ['take $\\log$ of both sides', 'divide both sides by $5$', 'apply product rule', 'rewrite $80$ as a power of $2$']
          },
          {
            label: '$\\log(x+y)$ can be simplified using',
            options: ['the product rule', 'the power rule', 'no log property', 'the quotient rule']
          },
          {
            label: 'The equation $\\log_3(x-2) + \\log_3(x) = 1$ has extraneous solution risk because',
            options: ['logs can be negative', 'condensing may expand the domain', 'the base is odd', 'the sum equals $1$']
          },
          {
            label: 'pH $2$ compared to pH $6$ is ___ times more acidic',
            options: ['$4$', '$40$', '$400$', '$10{,}000$']
          }
        ],
        correctAnswers: ['divide both sides by $5$', 'no log property', 'condensing may expand the domain', '$10{,}000$'],
        hint1: 'Isolate the exponential before taking logs.',
        hint2: '$\\log(x+y)$ has no simplification — it\'s a common trap.',
        hint3: 'When you combine $\\log_3(x-2) + \\log_3(x)$ into $\\log_3[x(x-2)]$, the product can be positive even when factors aren\'t.',
        explanation: 'Divide first: $2^x = 16$. No rule for $\\log(x+y)$. Condensing can make invalid values appear valid. pH: $6 - 2 = 4$ → $10^4 = 10{,}000\\times$.'
      }
    },
    {
      id: 'p7-exit',
      type: 'multiple-choice' as const,
      content: `
**Final Exit Quiz — Logarithmic Functions** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A town\'s population is modeled by $P(t) = 8000(1.03)^t$. Using logs, find when the population first exceeds $15{,}000$.',
            options: [
              '$t = \\frac{\\log(15000/8000)}{\\log(1.03)} \\approx 21.1$ years',
              '$t = \\frac{\\log(15000)}{\\log(8000)} \\approx 1.07$ years',
              '$t = \\frac{15000}{8000 \\cdot 1.03} \\approx 1.82$ years',
              '$t = \\frac{\\ln(1.03)}{\\ln(15000/8000)} \\approx 0.047$ years'
            ],
            correctAnswer: 0,
            explanation: '$8000(1.03)^t = 15000 \\implies (1.03)^t = 1.875 \\implies t = \\frac{\\log 1.875}{\\log 1.03} = \\frac{0.273}{0.01284} \\approx 21.3$ years.'
          },
          {
            question: 'Solve $\\log_2(x^2 - 4) = 3$ for all valid solutions.',
            options: [
              '$x = \\pm 2\\sqrt{3}$',
              '$x = 2\\sqrt{3}$ only',
              '$x = \\pm 6$',
              '$x = 6$ only'
            ],
            correctAnswer: 0,
            explanation: '$x^2 - 4 = 2^3 = 8 \\implies x^2 = 12 \\implies x = \\pm 2\\sqrt{3}$. Check: $(2\\sqrt{3})^2 - 4 = 8 > 0$ ✔ and $(-2\\sqrt{3})^2 - 4 = 8 > 0$ ✔. Both valid since $x^2 - 4$ is positive for both.'
          }
        ]
      }
    }
  ]
};
