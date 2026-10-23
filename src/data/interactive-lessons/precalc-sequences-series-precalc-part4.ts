export const precalcSequencesPart4Data = {
  topicSlug: 'sequences-series-precalc',
  sections: [
    {
      id: 'p4-intro',
      type: 'text' as const,
      content: `
# ⚖️ Arithmetic vs. Geometric Growth

**Part 4 of 7 — Arithmetic vs. Geometric Growth**

### Two Kinds of Change

- **Arithmetic:** successive terms have a **common difference**, a constant rate of change. The sequence changes by the **same amount** every step.
- **Geometric:** successive terms have a **common ratio**, a constant proportional change. The sequence changes by the **same factor** every step.

### Side by Side

Both sequences below start at $100$ and gain $50$ on the first step.

| $n$ | $0$ | $1$ | $2$ | $3$ | $4$ | $5$ |
|:--|:--|:--|:--|:--|:--|:--|
| $a_n = 100 + 50n$ | $100$ | $150$ | $200$ | $250$ | $300$ | $350$ |
| $g_n = 100(1.5)^n$ | $100$ | $150$ | $225$ | $337.5$ | $506.25$ | $759.375$ |

- The arithmetic sequence gains $50$ **every** step.
- The geometric sequence gains $50$, then $75$, then $112.5$, then $168.75$, then $253.125$: a **larger amount each step**.

> 🔑 An increasing arithmetic sequence increases equally with each step, whereas an increasing geometric sequence of positive values increases by a larger amount with each successive step.
      `
    },
    {
      id: 'p4-mcq',
      type: 'multiple-choice' as const,
      content: `
**Growth Comparison Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which sequence increases by a larger amount with each successive step?',
            options: ['$g_n = 4(1.5)^n$', '$a_n = 4 + 1.5(n+1)$', '$a_n = 40 + 6n$', '$a_n = 4 - 1.5n$'],
            correctAnswer: 0,
            explanation: 'An increasing geometric sequence of positive terms gains more each step. The arithmetic sequences gain the same amount every step, and $4 - 1.5n$ decreases.'
          },
          {
            question: 'A salary starts at \\$50,000. Plan A adds \\$2,000 per year and Plan B adds $4\\%$ per year. Which describes the yearly raises?',
            options: [
              'A\'s raise stays fixed; B\'s raise grows each year',
              'A\'s raise grows each year; B\'s raise stays fixed',
              'Each plan gives the same dollar raise every year',
              'B\'s dollar raise shrinks as the salary rises'
            ],
            correctAnswer: 0,
            explanation: 'Plan A is arithmetic, so it adds the same \\$2,000 each year. Plan B is geometric, and $4\\%$ of a growing salary is a growing dollar amount: \\$2,000 the first year, then \\$2,080, and so on.'
          },
          {
            question: 'The terms $80, 60, 45, 33.75$ (for $n = 0, 1, 2, 3$) form which kind of sequence?',
            options: ['Geometric with $r = 0.75$', 'Arithmetic with $d = -20$', 'Geometric with $r = -0.75$', 'Arithmetic with $d = -15$'],
            correctAnswer: 0,
            explanation: 'The differences are $-20, -15, -11.25$, which are not constant, but every ratio is $\\frac{60}{80} = \\frac{45}{60} = 0.75$. A negative ratio would make the terms alternate in sign.'
          }
        ]
      }
    },
    {
      id: 'p4-identify',
      type: 'text' as const,
      content: `
## 🔍 Telling Them Apart

### From a List of Terms

1. Compute **differences** $a_{n+1} - a_n$. All equal? **Arithmetic.**
2. Compute **ratios** $\\frac{a_{n+1}}{a_n}$. All equal? **Geometric.**
3. Neither constant? The sequence is **neither**. Example: $2, 5, 10, 17$ has differences $3, 5, 7$ and ratios $2.5, 2, 1.7$.

### From Words

| Description | Type | Constant |
|:------------|:-----|:---------|
| "grows by $8$ units each year" | arithmetic | $d = 8$ |
| "grows by $8\\%$ each year" | geometric | $r = 1.08$ |
| "loses $300$ gallons each day" | arithmetic | $d = -300$ |
| "loses a third of its value each year" | geometric | $r = \\frac{2}{3}$ |

### Decreasing Sequences

- A decreasing arithmetic sequence falls by the **same amount** each step.
- A decreasing geometric sequence of positive terms ($0 < r < 1$) falls by **smaller and smaller amounts**, leveling off toward $0$ but staying positive.

### Who Wins?

An increasing geometric sequence with positive terms eventually passes any arithmetic sequence. With $a_n = 10 + 20n$ and $g_n = 10 \\cdot 2^n$:

| $n$ | $0$ | $1$ | $2$ | $3$ | $4$ |
|:--|:--|:--|:--|:--|:--|
| $a_n$ | $10$ | $30$ | $50$ | $70$ | $90$ |
| $g_n$ | $10$ | $20$ | $40$ | $80$ | $160$ |

The geometric sequence trails at first, then takes the lead at $n = 3$ and never gives it back.
      `
    },
    {
      id: 'p4-input',
      type: 'input-boxes' as const,
      content: `
**Compare the Growth** 🧮

Use $a_n = 100 + 50n$ and $g_n = 100(1.5)^n$.

**1)** $a_4$ = ?

**2)** $g_4$ = ?

**3)** How much does $g$ gain from $n = 3$ to $n = 4$?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['300', '506.25', '168.75'],
        hint1: '$100 + 50(4)$.',
        hint2: '$100(1.5)^4 = 100(5.0625)$.',
        hint3: '$g_3 = 337.5$. Subtract it from $g_4$.',
        explanation: '1) $300$. 2) $506.25$. 3) $506.25 - 337.5 = 168.75$, far more than the steady $50$ the arithmetic sequence gains.'
      }
    },
    {
      id: 'p4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Arithmetic or Geometric?** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: '"Grows by $8\\%$ each year" describes:',
            options: ['An arithmetic sequence', 'A geometric sequence', 'Neither type of sequence', 'Both types at once'],
            correctAnswer: 1
          },
          {
            label: '"Grows by $8$ units each year" describes:',
            options: ['An arithmetic sequence', 'A geometric sequence', 'Neither type of sequence', 'Both types at once'],
            correctAnswer: 0
          },
          {
            label: 'The sequence $2, 5, 10, 17, \\ldots$ is:',
            options: ['Arithmetic', 'Geometric', 'Neither'],
            correctAnswer: 2
          },
          {
            label: 'A decreasing geometric sequence of positive terms falls by:',
            options: ['Equal amounts each step', 'Larger amounts each step', 'Smaller amounts each step', 'Alternating up and down'],
            correctAnswer: 2
          }
        ],
        correctAnswers: ['A geometric sequence', 'An arithmetic sequence', 'Neither', 'Smaller amounts each step'],
        hint1: 'A percent change multiplies by the same factor.',
        hint2: 'A fixed number of units is added each time.',
        hint3: 'Check both the differences and the ratios.',
        explanation: 'Percent change is geometric ($r = 1.08$). A fixed amount is arithmetic ($d = 8$). $2, 5, 10, 17$ has neither constant differences nor constant ratios. With $0 < r < 1$, each drop is a fixed fraction of a shrinking term, so the drops shrink.'
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
            question: 'For $a_n = 10 + 20n$ and $g_n = 10 \\cdot 2^n$, what is the first $n$ with $g_n > a_n$?',
            options: ['$n = 3$', '$n = 2$', '$n = 4$', '$n = 1$'],
            correctAnswer: 0,
            explanation: 'At $n = 2$: $g_2 = 40 < a_2 = 50$. At $n = 3$: $g_3 = 80 > a_3 = 70$. From then on the geometric sequence gains more each step and stays ahead.'
          },
          {
            question: 'An increasing arithmetic sequence and an increasing geometric sequence with positive terms are compared. Which is true?',
            options: [
              'The geometric one eventually passes it',
              'The arithmetic one ends up above the geometric one',
              'They increase by the same amount at every step',
              'Neither can pass the other after the first step'
            ],
            correctAnswer: 0,
            explanation: 'The arithmetic sequence adds the same amount each step, while the geometric one adds a larger amount each step, so the geometric sequence eventually pulls ahead for good.'
          }
        ]
      }
    }
  ]
};
