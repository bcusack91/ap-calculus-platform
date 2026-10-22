import { elgDots, elgFourPanels, elgHole5 } from '@/data/lesson-figures/calcab'

export const calcabEstimatingLimitsGraphsPart4Data = {
  topicSlug: 'estimating-limits-graphs',
  sections: [
    {
      id: 'elg4-intro',
      type: 'text' as const,
      content: `# 🔵🟡 Holes, Open/Closed Dots, and $f(a)$ vs. $\\lim$

**Part 4 of 4 — Decoding dot conventions**

---

### Topics in This Part

| Section |
|---------|
| 🔑 Open vs. Closed Dot Convention |
| Limit vs. Value: Four Pictures |
| Common AP Graph Setups |

> 🔑 **Why this matters:** Misreading dots is one of the most common errors on graph problems.`
    },
    {
      id: 'elg4-dots',
      type: 'text' as const,
      content: `
## 🔑 Open vs. Closed Dot Convention

| Symbol on the graph at $(a, y)$ | Meaning |
|---------------------------------|---------|
| **Closed (filled) dot** | $f(a) = y$: the function takes this value |
| **Open (hollow) circle** | The curve approaches height $y$ but does NOT take it at $x = a$ |
| **No mark, just the curve continuing** | Read $f(a)$ from the curve itself |

> 💡 The limit cares only about *where the curve is heading*, never about which dot is filled.
      `
    },
    {
      id: 'elg4-vs',
      type: 'text' as const,
      figure: elgFourPanels,
      content: `
## 📊 Limit vs. Value: Four Pictures

| Panel | $\\lim_{x \\to 3} f(x)$ | $f(3)$ | Verdict |
|-------|-----------------------|--------|---------|
| 1 | $5$ | $5$ | Continuous at $3$ |
| 2 | $5$ | undefined | Removable hole |
| 3 | $5$ | $8$ | Limit exists but differs from the value |
| 4 | does not exist ($2$ from the left, $7$ from the right) | $7$ | Jump |

> 🔑 The four panels show why "the limit at $a$" and "the value $f(a)$" are separate questions.
      `
    },
    {
      id: 'elg4-ap',
      type: 'text' as const,
      content: `
## 📝 Common AP Graph Setups

AP graphs often place a deliberate "trap" at one $x$-value:

- A removable hole (open circle, no filled dot above it).
- A limit that exists while $f(a)$ is "moved" to a different height by a filled dot.
- A jump where one side ends at a filled dot and the other at an open circle.

> 💡 **Strategy:** answer in this order: (1) left limit, (2) right limit, (3) two-sided limit, (4) $f(a)$. Doing them separately keeps the limit and the value apart.
      `
    },
    {
      id: 'elg4-mc',
      type: 'multiple-choice' as const,
      figure: elgDots,
      content: `**Decode the dots** 🎯

`,
      exercise: {
        questions: [
          {
            question: 'Use the graph above. What is $\\lim_{x \\to 0} f(x)$?',
            options: ['$6$', '$-2$', '$2$', 'Does not exist'],
            correctAnswer: 0,
            explanation: 'Both arms head to the open circle at height $6$, so the limit is $6$. The filled dot at $(0, -2)$ gives $f(0) = -2$, which does not affect the limit, and $2$ is just the average of the two heights.'
          },
          {
            question: 'Use the graph above. What is $f(0)$?',
            options: ['$6$', '$-2$', 'Undefined', '$0$'],
            correctAnswer: 1,
            explanation: 'The filled dot at $(0, -2)$ defines the function value: $f(0) = -2$. The open circle at height $6$ is skipped, so $6$ is the limit, not the value.'
          },
          {
            question: 'Use the graph above. Is $f$ continuous at $x = 0$?',
            options: ['No, since $\\lim_{x \\to 0} f(x) \\ne f(0)$', 'Yes, since $\\lim_{x \\to 0} f(x)$ exists', 'Yes, since $f(0)$ is defined', 'No, since $\\lim_{x \\to 0} f(x)$ does not exist'],
            correctAnswer: 0,
            explanation: 'The limit is $6$ and the value is $-2$. Continuity needs the limit to equal the value, so $f$ is not continuous at $0$ (a removable discontinuity). The limit does exist, and existence of the limit or of $f(0)$ alone is not enough.'
          }
        ]
      }
    },
    {
      id: 'elg4-input',
      type: 'input-boxes' as const,
      figure: elgHole5,
      content: `**Final reading** 🧮

**1)** $\\lim_{x \\to 5^-} f(x) = ?$

**2)** $\\lim_{x \\to 5^+} f(x) = ?$

**3)** $\\lim_{x \\to 5} f(x) = ?$

**4)** $f(5) = ?$ (type \`undefined\` if no value is defined)
      `,
      exercise: {
        questions: [
          { question: '(1)', answer: '3', acceptableAnswers: ['3'] },
          { question: '(2)', answer: '3', acceptableAnswers: ['3'] },
          { question: '(3)', answer: '3', acceptableAnswers: ['3'] },
          { question: '(4)', answer: 'undefined', acceptableAnswers: ['undefined', 'Undefined', 'DNE', 'dne'] }
        ],
        hint1: 'Both arms head to the open circle at height 3.',
        hint2: 'An open circle with no filled dot above it means $f(5)$ has no value.',
        explanation: 'A removable hole: both one-sided limits are $3$, so the limit exists and equals $3$, but $f(5)$ is undefined.'
      }
    },
    {
      id: 'elg4-exit',
      type: 'multiple-choice' as const,
      figure: elgFourPanels,
      content: `**Exit Check ✅**

`,
      exercise: {
        questions: [
          {
            question: 'In which panel does $\\lim_{x \\to 3} f(x)$ fail to exist?',
            options: ['Panel 4', 'Panel 2', 'Panel 3', 'Panel 1'],
            correctAnswer: 0,
            explanation: 'In Panel 4 the left piece heads to $2$ and the right piece to $7$, so the one-sided limits disagree. In Panels 1–3 both arms head to $5$; the dots there change only the value $f(3)$.'
          },
          {
            question: 'In Panel 3, which statement is true?',
            options: [
              '$\\lim_{x \\to 3} f(x) = 5$ and $f(3) = 8$',
              '$\\lim_{x \\to 3} f(x) = 8$ and $f(3) = 8$',
              '$\\lim_{x \\to 3} f(x) = 5$ and $f(3)$ is undefined',
              'The limit does not exist and $f(3) = 8$'
            ],
            correctAnswer: 0,
            explanation: 'Both arms head to the open circle at height $5$, so the limit is $5$; the filled dot sets $f(3) = 8$. Reading the filled dot as the limit is the classic mistake.'
          }
        ]
      }
    }
  ]
}
