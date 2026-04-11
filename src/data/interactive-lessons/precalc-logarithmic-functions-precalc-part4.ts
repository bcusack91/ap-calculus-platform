export const precalcLogarithmicPart4Data = {
  topicSlug: 'logarithmic-functions-precalc',
  sections: [
    {
      id: 'p4-intro',
      type: 'text' as const,
      content: `
# 🔍 Logarithmic Functions — Solving Log Equations

**Part 4 of 7**

### The Two Core Strategies

| Strategy | When to Use | Key Move |
|:---------|:-----------|:---------|
| **Rewrite as exponential** | Single log on one side | $\\log_b(\\text{stuff}) = c \\implies \\text{stuff} = b^c$ |
| **Condense then convert** | Multiple logs | Combine into one log, then convert |

> ⚠️ **Always check solutions!** Every candidate must make all original log arguments positive.
      `
    },
    {
      id: 'p4-type1',
      type: 'text' as const,
      content: `
## 📝 Type 1: Single Log = Number

### Worked Example 1

> **Solve $\\log_3(2x + 1) = 4$**

| Step | Action | Result |
|:-----|:-------|:-------|
| 1 | Convert to exponential | $2x + 1 = 3^4 = 81$ |
| 2 | Solve linear equation | $2x = 80$ |
| 3 | Isolate $x$ | $x = 40$ |
| 4 | **Check:** $\\log_3(2(40)+1)$ | $= \\log_3(81) = 4$ ✔ |

$$\\boxed{x = 40}$$

### Worked Example 2

> **Solve $\\ln(x - 3) = 2$**

$x - 3 = e^2 \\implies x = e^2 + 3 \\approx 10.389$

**Check:** $x - 3 = e^2 > 0$ ✔
      `
    },
    {
      id: 'p4-type2',
      type: 'text' as const,
      content: `
## 📝 Type 2: Log = Log (One-to-One Property)

If $\\log_b A = \\log_b B$, then $A = B$ (as long as both arguments are positive).

### Worked Example 3

> **Solve $\\log_2(x + 5) = \\log_2(3x - 1)$**

$x + 5 = 3x - 1$

$6 = 2x \\implies x = 3$

**Check:** $\\log_2(3+5) = \\log_2(8) = 3$ and $\\log_2(3(3)-1) = \\log_2(8) = 3$ ✔
      `
    },
    {
      id: 'p4-type3',
      type: 'text' as const,
      content: `
## 📝 Type 3: Multiple Logs — Condense First

### Worked Example 4: Extraneous Solution Alert! 

> **Solve $\\log(x) + \\log(x - 3) = 1$**

| Step | Action | Result |
|:-----|:-------|:-------|
| 1 | Product rule | $\\log[x(x-3)] = 1$ |
| 2 | Convert to exponential | $x(x-3) = 10^1 = 10$ |
| 3 | Expand | $x^2 - 3x - 10 = 0$ |
| 4 | Factor | $(x-5)(x+2) = 0$ |
| 5 | Candidates | $x = 5$ or $x = -2$ |

**Domain check — both original arguments must be positive:**
- $x = 5$: $\\log(5)$ ✔ and $\\log(5-3) = \\log(2)$ ✔ → **valid**
- $x = -2$: $\\log(-2)$ ❌ → **extraneous, reject**

$$\\boxed{x = 5}$$

### ⚠️ Why Extraneous Solutions Appear

When you condense logs, you may expand the domain. The product $x(x-3)$ can be positive even when the individual factors aren't both positive. Always check **each original log argument separately**.
      `
    },
    {
      id: 'p4-mcq',
      type: 'multiple-choice' as const,
      content: `
**Solving Strategies Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Solve $\\log_5(x-1) = 2$.',
            options: [
              '$x = 10$',
              '$x = 24$',
              '$x = 26$',
              '$x = 23$'
            ],
            correctAnswer: 2,
            explanation: '$x - 1 = 5^2 = 25$, so $x = 26$. Check: $\\log_5(25) = 2$ ✔.'
          },
          {
            question: 'Solve $\\ln x + \\ln 4 = \\ln 20$.',
            options: [
              '$x = 16$',
              '$x = 5$',
              '$x = 80$',
              '$x = \\frac{20}{4} = 5$'
            ],
            correctAnswer: 1,
            explanation: '$\\ln(4x) = \\ln 20 \\implies 4x = 20 \\implies x = 5$. Both B and D give the same answer.'
          },
          {
            question: 'For $\\log_2(x) + \\log_2(x-6) = 4$, which solution is extraneous?',
            options: [
              '$x = 8$ is extraneous',
              '$x = -2$ is extraneous',
              'Both are valid',
              'Neither — the equation has no solution'
            ],
            correctAnswer: 1,
            explanation: '$\\log_2[x(x-6)] = 4 \\implies x^2-6x = 16 \\implies x^2-6x-16 = 0 \\implies (x-8)(x+2)=0$. $x = -2$ fails because $\\log_2(-2)$ is undefined.'
          }
        ]
      }
    },
    {
      id: 'p4-input',
      type: 'input-boxes' as const,
      content: `
**Solve for $x$** 🧮

**1)** $\\log_4(3x) = 2$. Find $x$. (e.g., $\\log_3(2x) = 3$: $2x = 27$, $x = 13.5$)

**2)** $\\log(x) + \\log(5) = 3$. Find $x$. (e.g., $\\log(x) + \\log(2) = 2$: $\\log(2x) = 2$, $2x = 100$, $x = 50$)

**3)** $2\\ln(x) = \\ln(25)$. Find $x$. (e.g., $2\\ln(x) = \\ln(9)$: $\\ln(x^2) = \\ln(9)$, $x^2 = 9$, $x = 3$)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['16/3', '200', '5'],
        hint1: '$3x = 4^2 = 16$.',
        hint2: '$\\log(5x) = 3 \\implies 5x = 1000$.',
        hint3: 'Power rule: $\\ln(x^2) = \\ln(25) \\implies x^2 = 25$. Take positive root.',
        explanation: '1) $3x = 16$, so $x = 16/3$. 2) $\\log(5x) = 3$, so $5x = 1000$, $x = 200$. 3) $x^2 = 25$, $x = 5$ (reject $-5$ since $\\ln(-5)$ undefined).'
      }
    },
    {
      id: 'p4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Strategy Selection** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: '$\\log_3(x+2) = 5$ — first step is',
            options: ['condense logs', 'convert to exponential', 'take $\\ln$ of both sides', 'apply product rule']
          },
          {
            label: '$\\log x + \\log(x+3) = 1$ — first step is',
            options: ['convert to exponential', 'condense using product rule', 'subtract logs', 'take $e$ of both sides']
          },
          {
            label: 'After solving, you must check that each log argument is',
            options: ['an integer', 'positive', 'less than the base', 'equal to the other side']
          },
          {
            label: 'A solution that fails the domain check is called',
            options: ['undefined', 'imaginary', 'extraneous', 'irrational']
          }
        ],
        correctAnswers: ['convert to exponential', 'condense using product rule', 'positive', 'extraneous'],
        hint1: 'Single log = number → convert immediately.',
        hint2: 'Two logs added → combine into one first.',
        hint3: 'Log arguments must be in the domain $(0, \\infty)$.',
        explanation: 'Single log: convert to exponential. Multiple logs: condense first. Always verify positivity. Failed solutions are extraneous.'
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
            question: 'How many valid solutions does $\\log_2(x-1) + \\log_2(x+1) = 3$ have?',
            options: [
              '$0$',
              '$1$',
              '$2$',
              'Cannot be determined'
            ],
            correctAnswer: 1,
            explanation: '$\\log_2[(x-1)(x+1)] = 3 \\implies x^2 - 1 = 8 \\implies x^2 = 9 \\implies x = \\pm 3$. Check: $x = 3$ gives $\\log_2(2) + \\log_2(4) = 1 + 2 = 3$ ✔. $x = -3$ gives $\\log_2(-4)$ ❌. Only $1$ valid solution.'
          },
          {
            question: 'Solve $\\log(x^2) = 4$.',
            options: [
              '$x = 100$ only',
              '$x = \\pm 100$',
              '$x = 10{,}000$',
              '$x = \\pm 10{,}000$'
            ],
            correctAnswer: 1,
            explanation: '$\\log(x^2) = 4 \\implies x^2 = 10^4 = 10{,}000 \\implies x = \\pm 100$. Both work because $(\\pm 100)^2 = 10{,}000 > 0$.'
          }
        ]
      }
    }
  ]
};
