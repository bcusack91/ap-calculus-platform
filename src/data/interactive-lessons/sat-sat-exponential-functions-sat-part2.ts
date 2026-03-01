export const satExponentialFnPart2Data = {
  topicSlug: 'sat-exponential-functions-sat',
  sections: [
    {
      id: 'sat-ef2-intro',
      type: 'text' as const,
      content: `
# 🌱 Growth & Decay Models

**Part 2 of 7 — $A = P(1+r)^t$, Population Growth, Depreciation, Half-Life**

Real-world exponential models usually appear in one of these forms:

| Model | Formula |
|-------|---------|
| Growth | $A = P(1 + r)^t$ |
| Decay | $A = P(1 - r)^t$ |
| Half-life | $A = P\\left(\\frac{1}{2}\\right)^{t/h}$ |

Where:
- $P$ = initial amount (principal)
- $r$ = rate of growth or decay (as a decimal)
- $t$ = time
- $h$ = half-life period
- $A$ = amount after time $t$

**Key insight:** Growth by $r$ means the base is $1 + r$. Decay by $r$ means the base is $1 - r$.
      `
    },
    {
      id: 'sat-ef2-examples',
      type: 'text' as const,
      content: `
## Worked Examples

**Example 1 — Population growth:**
A town of 20,000 people grows at 3 % per year. What is the population after 5 years?

$$A = 20{,}000(1 + 0.03)^5 = 20{,}000(1.03)^5$$

$$(1.03)^5 \\approx 1.1593 \\implies A \\approx 23{,}186$$

**Example 2 — Depreciation:**
A car worth \$25,000 depreciates at 12 % per year. Find the value after 3 years.

$$A = 25{,}000(1 - 0.12)^3 = 25{,}000(0.88)^3$$

$$(0.88)^3 \\approx 0.6815 \\implies A \\approx \$17{,}037$$

**Example 3 — Half-life:**
A radioactive substance has a half-life of 6 hours. If you start with 400 mg, how much remains after 18 hours?

$$A = 400\\left(\\frac{1}{2}\\right)^{18/6} = 400\\left(\\frac{1}{2}\\right)^3 = 400 \\cdot \\frac{1}{8} = 50 \\text{ mg}$$

**SAT Tip:** When the problem says "decreases by 20 %," the base is $1 - 0.20 = 0.80$, **not** $0.20$.
      `
    },
    {
      id: 'sat-ef2-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Growth & Decay Identification** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'A quantity increases by 8 % each year. Which expression gives its value after $t$ years if the initial amount is $P$?',
            options: ['$P(0.08)^t$', '$P(0.92)^t$', '$P(1.08)^t$', '$P(8)^t$'],
            correctAnswer: 2,
            explanation: 'Growth of 8 % means the base is $1 + 0.08 = 1.08$. So the expression is $P(1.08)^t$.'
          },
          {
            question: 'A substance has a half-life of 10 years. What fraction of the original amount remains after 30 years?',
            options: ['$\\frac{1}{2}$', '$\\frac{1}{4}$', '$\\frac{1}{8}$', '$\\frac{1}{16}$'],
            correctAnswer: 2,
            explanation: '$30/10 = 3$ half-lives. $(1/2)^3 = 1/8$.'
          }
        ]
      }
    },
    {
      id: 'sat-ef2-rates',
      type: 'text' as const,
      content: `
## Interpreting Growth & Decay Rates

On the SAT you may see a function like:

$$V(t) = 18{,}000(0.85)^t$$

**How to interpret:**
1. **Initial value:** $V(0) = 18{,}000$ — the starting value.
2. **Base:** $0.85 = 1 - 0.15$, so the value **decreases by 15 %** each period.
3. **Retained fraction:** 85 % of the value remains after each period.

Another example: $N(t) = 500(1.12)^t$

1. $N(0) = 500$ — initial count.
2. $1.12 = 1 + 0.12$ — grows by 12 % per period.

**Common SAT question:** "By what percent does the value decrease each year?" → Extract the rate from the base.

| Base $b$ | Interpretation |
|----------|---------------|
| $1.07$ | 7 % growth |
| $0.95$ | 5 % decay |
| $0.5$ | 50 % decay (halving) |
| $2$ | 100 % growth (doubling) |
      `
    },
    {
      id: 'sat-ef2-input1',
      type: 'input-boxes' as const,
      content: `
**Applying Growth & Decay** 🧮

1) A city has 50,000 people and grows at 4 % per year. What is the population after 2 years? (Round to the nearest whole number.)
2) A laptop worth $1,200 depreciates at 25 % per year. What is its value after 2 years? (In dollars, no $ sign.)
3) A radioactive sample of 160 g has a half-life of 5 years. How many grams remain after 15 years?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['54080', '675', '20'],
        hint1: '$A = 50{,}000(1.04)^2 = 50{,}000 \\times 1.0816$.',
        hint2: '$A = 1200(0.75)^2 = 1200 \\times 0.5625$.',
        hint3: '$15/5 = 3$ half-lives. $160 \\times (1/2)^3 = 160/8$.',
        explanation: '1) $50{,}000 \\times 1.0816 = 54{,}080$. 2) $1{,}200 \\times 0.5625 = 675$. 3) $160 / 8 = 20$ g.'
      }
    },
    {
      id: 'sat-ef2-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Interpreting Models** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'In $A = 5000(0.92)^t$, the value decreases by … each period.',
            options: ['92%', '8%', '0.92%', '108%']
          },
          {
            label: 'A half-life model uses a base of …',
            options: ['$2$', '$0.5$', '$1.5$', '$0.25$']
          },
          {
            label: 'If a population triples every year, the base $b$ is …',
            options: ['$1.03$', '$3$', '$1/3$', '$0.3$']
          }
        ],
        correctAnswers: ['8%', '$0.5$', '$3$'],
        hint1: '$0.92 = 1 - 0.08$, so the decay rate is $0.08 = 8\\%$.',
        hint2: 'Half-life means the quantity is multiplied by $1/2$ each period.',
        hint3: 'Tripling means $f(x+1) = 3 \\cdot f(x)$, so the base is 3.',
        explanation: 'Base $0.92$ → 8 % decay. Half-life base is $0.5$. Tripling gives $b = 3$.'
      }
    },
    {
      id: 'sat-ef2-sat',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'The value of a collectible is modeled by $V(t) = 800(1.06)^t$, where $t$ is years since purchase. What does $1.06$ represent?',
            options: ['The value increases by $6$ each year', 'The value is multiplied by $6$ each year', 'The value increases by $6\\%$ each year', 'The initial value is $1.06$'],
            correctAnswer: 2,
            explanation: '$1.06 = 1 + 0.06$, so the value increases by 6 % per year.'
          },
          {
            question: 'A medication in the bloodstream decreases by 30 % every hour. If the initial dose is 500 mg, how much remains after 3 hours?',
            options: ['$171.5$ mg', '$350$ mg', '$150$ mg', '$120.05$ mg'],
            correctAnswer: 0,
            explanation: '$A = 500(0.70)^3 = 500 \\times 0.343 = 171.5$ mg.'
          }
        ]
      }
    }
  ]
};
