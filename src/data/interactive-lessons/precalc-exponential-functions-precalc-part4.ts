export const precalcExponentialPart4Data = {
  topicSlug: 'exponential-functions-precalc',
  sections: [
    {
      id: 'p4-intro',
      type: 'text' as const,
      content: `
# ☢️ Half-Life & Exponential Decay

**Part 4 of 7**

**Half-life** is the time it takes for a quantity to reduce to half its current value.

$$\\boxed{A(t) = A_0 \\cdot \\left(\\frac{1}{2}\\right)^{t/T_{1/2}}}$$

| Variable | Meaning |
|:---------|:--------|
| $A(t)$ | Amount remaining at time $t$ |
| $A_0$ | Initial amount |
| $T_{1/2}$ | Half-life (time to halve) |

This formula works because after each half-life period:
- After $1$ half-life: $\\frac{1}{2}$ remains
- After $2$ half-lives: $\\frac{1}{4}$ remains
- After $3$ half-lives: $\\frac{1}{8}$ remains
- After $n$ half-lives: $\\left(\\frac{1}{2}\\right)^n$ remains
      `
    },
    {
      id: 'p4-halflife-examples',
      type: 'text' as const,
      content: `
## 🧪 Worked Examples

### Example 1: Carbon-14 Dating

> **Carbon-14 has a half-life of $5{,}730$ years. A fossil has $25\\%$ of its original C-14. How old is it?**

$25\\% = \\frac{1}{4} = \\left(\\frac{1}{2}\\right)^2$ → exactly $2$ half-lives have passed.

Age $= 2 \\times 5730 = 11{,}460$ years.

### Example 2: Medicine Clearance

> **A drug has a half-life of $4$ hours. A patient takes $200\\text{ mg}$. How much remains after $10$ hours?**

$A(10) = 200 \\cdot \\left(\\frac{1}{2}\\right)^{10/4} = 200 \\cdot \\left(\\frac{1}{2}\\right)^{2.5}$

$= 200 \\cdot \\frac{1}{2^{2.5}} = 200 \\cdot \\frac{1}{5.657} \\approx 35.4\\text{ mg}$

### Reference Table: Common Real-World Half-Lives

| Substance | Half-Life | Context |
|:----------|:----------|:--------|
| Carbon-14 | $5{,}730$ years | Archaeological dating |
| Iodine-131 | $8$ days | Thyroid treatment |
| Caffeine | $\\sim 5$ hours | Metabolism |
| Uranium-238 | $4.5$ billion years | Geological dating |
      `
    },
    {
      id: 'p4-decay-constant',
      type: 'text' as const,
      content: `
## 🔗 Connecting Half-Life to the Decay Constant

The continuous decay model $A(t) = A_0 e^{kt}$ (with $k < 0$) is related to half-life by:

$$\\boxed{T_{1/2} = \\frac{\\ln 2}{|k|} \\quad \\Longleftrightarrow \\quad k = -\\frac{\\ln 2}{T_{1/2}}}$$

### Worked Example

> **A radioactive sample decays according to $A(t) = 500e^{-0.1t}$ (grams, hours). Find the half-life.**

$$T_{1/2} = \\frac{\\ln 2}{|-0.1|} = \\frac{0.6931}{0.1} \\approx 6.93 \\text{ hours}$$

### Converting Between Forms

| Given | Find | Method |
|:------|:-----|:-------|
| Half-life $= 8$ days | Decay constant $k$ | $k = -\\frac{\\ln 2}{8} \\approx -0.0866$ |
| $k = -0.05$ | Half-life | $T_{1/2} = \\frac{\\ln 2}{0.05} \\approx 13.86$ |
| Periodic base $b = 0.75$ | $k$ | $k = \\ln(0.75) \\approx -0.2877$ |
| $k = -0.2$ | Periodic base $b$ | $b = e^{-0.2} \\approx 0.8187$ |
      `
    },
    {
      id: 'p4-mcq',
      type: 'multiple-choice' as const,
      content: `
**Half-Life Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A radioactive substance has a half-life of $10$ days. After $30$ days, what fraction of the original remains?',
            options: [
              '$\\frac{1}{3}$',
              '$\\frac{1}{4}$',
              '$\\frac{1}{8}$',
              '$\\frac{1}{16}$'
            ],
            correctAnswer: 2,
            explanation: '$30$ days $= 3$ half-lives. Remaining: $\\left(\\frac{1}{2}\\right)^3 = \\frac{1}{8}$.'
          },
          {
            question: 'If $A(t) = 100e^{-0.2t}$, the half-life is closest to:',
            options: [
              '$2$ units',
              '$3.5$ units',
              '$5$ units',
              '$10$ units'
            ],
            correctAnswer: 1,
            explanation: '$T_{1/2} = \\frac{\\ln 2}{0.2} = \\frac{0.693}{0.2} = 3.47 \\approx 3.5$ units.'
          },
          {
            question: 'Which model is equivalent to $A(t) = 800\\left(\\frac{1}{2}\\right)^{t/6}$?',
            options: [
              '$A(t) = 800e^{-6t}$',
              '$A(t) = 800e^{-(\\ln 2/6)t}$',
              '$A(t) = 800e^{-0.5t}$',
              '$A(t) = 800 \\cdot 0.5^t$'
            ],
            correctAnswer: 1,
            explanation: '$(\\frac{1}{2})^{t/6} = e^{(\\ln(1/2)) \\cdot t/6} = e^{-(\\ln 2/6)t}$. The decay constant is $k = -\\frac{\\ln 2}{6}$.'
          }
        ]
      }
    },
    {
      id: 'p4-input',
      type: 'input-boxes' as const,
      content: `
**Decay Calculations** 🧮

**1)** A sample starts at $400\\text{ g}$ with half-life $5$ years. How many grams remain after $15$ years? (e.g., $600\\text{ g}$ with half-life $3$ years after $6$ years: $600 \\cdot (\\frac{1}{2})^2 = 150\\text{ g}$)

**2)** If $k = -0.04$, what is the half-life? Round to one decimal. (e.g., $k = -0.1$: $T_{1/2} = \\frac{0.693}{0.1} = 6.9$)

**3)** How many half-lives occur in $24$ hours if each half-life is $8$ hours? (e.g., half-life of $6$ hours in $18$ hours: $18/6 = 3$)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['50', '17.3', '3'],
        hint1: '$15$ years $= 3$ half-lives. $400 \\cdot (\\frac{1}{2})^3$.',
        hint2: '$T_{1/2} = \\frac{\\ln 2}{|k|} = \\frac{0.693}{0.04}$.',
        hint3: '$24 \\div 8 = ?$',
        explanation: '1) $400 \\cdot (\\frac{1}{2})^3 = 400 \\cdot \\frac{1}{8} = 50\\text{ g}$. 2) $\\frac{0.693}{0.04} = 17.3$. 3) $24/8 = 3$ half-lives.'
      }
    },
    {
      id: 'p4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Decay Concepts** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'In the formula $A = A_0(\\frac{1}{2})^{t/T}$, the exponent $t/T$ counts the number of',
            options: ['years', 'half-lives elapsed', 'grams remaining', 'decay constants']
          },
          {
            label: 'A decay constant $k = -0.05$ means the quantity decays continuously at',
            options: ['$5\\%$ per unit time', '$50\\%$ per unit time', '$0.5\\%$ per unit time', '$95\\%$ per unit time']
          },
          {
            label: 'After exactly $1$ half-life, the fraction remaining is',
            options: ['$\\frac{1}{e}$', '$\\frac{1}{4}$', '$\\frac{1}{2}$', '$0$']
          },
          {
            label: 'Doubling time and half-life both use the constant',
            options: ['$\\pi$', '$e$', '$\\ln 2$', '$\\ln 10$']
          }
        ],
        correctAnswers: ['half-lives elapsed', '$5\\%$ per unit time', '$\\frac{1}{2}$', '$\\ln 2$'],
        hint1: 'The exponent tells you how many half-life intervals have passed.',
        hint2: '$|k| = 0.05 = 5\\%$.',
        hint3: 'By definition, half-life is when $\\frac{1}{2}$ remains.',
        explanation: '$t/T$ counts half-lives. $|k| = 0.05$ is a $5\\%$ continuous rate. One half-life leaves $\\frac{1}{2}$. Both formulas use $\\ln 2 \\approx 0.693$.'
      }
    },
    {
      id: 'p4-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A substance decays from $1{,}000\\text{ g}$ to $62.5\\text{ g}$. If the half-life is $3$ hours, how much total time has passed?',
            options: [
              '$9$ hours',
              '$12$ hours',
              '$15$ hours',
              '$6$ hours'
            ],
            correctAnswer: 1,
            explanation: '$\\frac{62.5}{1000} = \\frac{1}{16} = \\left(\\frac{1}{2}\\right)^4$. So $4$ half-lives passed: $4 \\times 3 = 12$ hours.'
          },
          {
            question: 'Two substances: A has half-life $2$ hours, B has half-life $8$ hours. Both start at $100\\text{ g}$. After $8$ hours, which has MORE remaining?',
            options: [
              'A — because shorter half-life means faster recovery',
              'B — it has undergone only $1$ half-life ($50\\text{ g}$ remaining)',
              'Equal — both are at $50\\text{ g}$',
              'Cannot determine without decay constants'
            ],
            correctAnswer: 1,
            explanation: 'A: $4$ half-lives → $(\\frac{1}{2})^4 \\cdot 100 = 6.25\\text{ g}$. B: $1$ half-life → $(\\frac{1}{2})^1 \\cdot 100 = 50\\text{ g}$. B has far more remaining. Shorter half-life = faster decay.'
          }
        ]
      }
    }
  ]
};
