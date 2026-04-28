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
| Limit vs. Value: A Side-by-Side |
| Common AP Graph Setups |

> 🔑 **Why this matters:** Misreading dots is the #1 source of lost points on graph problems.`
    },
    {
      id: 'elg4-dots',
      type: 'text' as const,
      content: `
## 🔑 Open vs. Closed Dot Convention

| Symbol on the graph at $(a, y)$ | Meaning |
|---------------------------------|---------|
| **Closed (filled) dot** | $f(a) = y$ — the function takes this value |
| **Open (hollow) circle** | $f(a) \\ne y$ — the curve approaches $y$ but does NOT take it there |
| **No mark, just the curve continuing** | Read $f(a)$ from the curve itself |

> 💡 The limit cares only about *where the curve is heading*, never about which dot is filled.
      `
    },
    {
      id: 'elg4-vs',
      type: 'text' as const,
      content: `
## 📊 Limit vs. Value: A Side-by-Side

For one graph at $x = 3$:

| Picture detail | $\\lim_{x \\to 3} f(x)$ | $f(3)$ |
|----------------|-----------------------|--------|
| Both arms meet at 5; closed dot at $(3, 5)$ | $5$ | $5$ — *continuous!* |
| Both arms meet at 5; open circle at $(3, 5)$, no other dot | $5$ | undefined — *removable hole* |
| Both arms meet at 5; open circle at $(3, 5)$ AND closed dot at $(3, 9)$ | $5$ | $9$ — limit ≠ value |
| Left arm $\\to 2$, right arm $\\to 7$ | DNE | depends on dot |

> 🔑 The four cases above show why we *separate* "the limit at $a$" from "the value $f(a)$" — they are completely different questions.
      `
    },
    {
      id: 'elg4-ap',
      type: 'text' as const,
      content: `
## 📝 Common AP Graph Setups

You'll often see piecewise graphs with deliberate "trap" features at one $x$-value:

- A removable hole (open circle, no replacement dot).
- A limit that exists but $f(a)$ is "moved" to a different $y$ via a closed dot elsewhere.
- A jump where one side has a closed dot and the other an open circle.

> 💡 **Strategy:** answer questions in this order: (1) left limit, (2) right limit, (3) two-sided limit, (4) $f(a)$. Doing them separately prevents conflating limit and value.
      `
    },
    {
      id: 'elg4-mc',
      type: 'multiple-choice' as const,
      content: `**Decode the Dots** 🎯`,
      exercise: {
        questions: [
          {
            question: 'At $x = 0$ a graph has both arms aiming at $y = 6$, an open circle at $(0, 6)$, and a closed dot at $(0, -2)$. What is $\\lim_{x \\to 0} f(x)$?',
            options: ['$6$', '$-2$', '$2$ (average)', 'DNE'],
            correctAnswer: 0,
            explanation: 'Limit follows the arms, which aim at 6. The closed dot at $-2$ tells us $f(0) = -2$ — irrelevant to the limit.'
          },
          {
            question: 'Same graph as above: what is $f(0)$?',
            options: ['$6$', '$-2$', 'undefined', '$0$'],
            correctAnswer: 1,
            explanation: 'The closed dot at $(0, -2)$ defines the function value: $f(0) = -2$.'
          }
        ]
      }
    },
    {
      id: 'elg4-input',
      type: 'input-boxes' as const,
      content: `**Final Reading** 🧮

A graph at $x = 5$ shows: left arm $\\to 3$, right arm $\\to 3$, an OPEN circle at $(5, 3)$, no other dot drawn.

**1)** $\\lim_{x \\to 5^-} f(x) = ?$

**2)** $\\lim_{x \\to 5^+} f(x) = ?$

**3)** $\\lim_{x \\to 5} f(x) = ?$

**4)** $f(5) = ?$ (use \`undefined\` if no value is defined)
      `,
      exercise: {
        boxes: 4,
        correctAnswers: ['3', '3', '3', 'undefined'],
        hint1: 'Both arms aim at 3.',
        hint2: 'Open circle with no replacement dot means $f(5)$ has no value.',
        explanation: 'A removable hole: the limit exists and equals 3, but $f(5)$ is undefined. Limit ≠ value because value isn\'t there.'
      }
    },
    {
      id: 'elg4-exit',
      type: 'multiple-choice' as const,
      content: `**Exit Check ✅**`,
      exercise: {
        questions: [
          {
            question: 'When estimating a limit from a graph, the most common mistake is:',
            options: [
              'Using the curve\'s direction',
              'Reading the value of a closed dot as if it were the limit',
              'Tracing from the left',
              'Using one-sided limits'
            ],
            correctAnswer: 1,
            explanation: 'A closed dot tells you $f(a)$. The limit is what the *curve* approaches — could be a different number entirely.'
          },
          {
            question: 'You see both arms of $f$ aiming at $y = 4$ as $x \\to 2$, but $f(2) = 4$ (closed dot). What does this tell you?',
            options: [
              '$\\lim_{x\\to 2} f(x) = 4$ AND $f$ is continuous at 2',
              'The limit DNE',
              '$f(2)$ doesn\'t exist',
              'The graph has a jump'
            ],
            correctAnswer: 0,
            explanation: 'When limit = value, the function is continuous at that point. This is the "nicest" case.'
          }
        ]
      }
    }
  ]
}
