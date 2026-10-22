import { elgContinuous, elgHole, elgMovedDot } from '@/data/lesson-figures/calcab'

export const calcabEstimatingLimitsGraphsPart1Data = {
  topicSlug: 'estimating-limits-graphs',
  sections: [
    {
      id: 'elg1-intro',
      type: 'text' as const,
      content: `# 📈 Estimating Limits from a Graph

**Part 1 of 4 — Reading $\\lim_{x \\to a} f(x)$ off a picture**

---

### Topics in This Part

| Section |
|---------|
| The Visual Idea |
| 🔑 Step-by-Step: Trace the Curve |
| Three Graphs, Three Readings |

> 🔑 **Why this matters:** AP questions regularly hand you a graph and ask "what is $\\lim_{x \\to 2} f(x)$?" with no formula given.`
    },
    {
      id: 'elg1-idea',
      type: 'text' as const,
      content: `
## 💡 The Visual Idea

A limit asks: as $x$ slides toward $a$ along the $x$-axis, what $y$-value does the graph approach?

> 💡 **Trick of the eye:** ignore the point drawn above $x = a$. Look only at where the *curve* is heading from each side.

The limit is the $y$-value the curve is *aiming for*, not necessarily the dot drawn at $x = a$.
      `
    },
    {
      id: 'elg1-steps',
      type: 'text' as const,
      content: `
## 🔑 Step-by-Step: Trace the Curve

To estimate $\\lim_{x \\to a} f(x)$:

1. Put your finger on the curve well to the **left** of $x = a$.
2. Slide along the curve *toward* $x = a$ and watch the height.
3. The height the curve approaches is the **left-hand limit** $\\lim_{x \\to a^-} f(x)$.
4. Repeat from the **right** to get $\\lim_{x \\to a^+} f(x)$.
5. **If both sides approach the same height $L$**, the limit is $L$. **If they disagree**, the limit does not exist.

> 🔑 The height the curve "would land on if continued" is the limit, even if there is a hole there.
      `
    },
    {
      id: 'elg1-example',
      type: 'text' as const,
      figure: elgContinuous,
      content: `
## 📝 Graph 1: A Curve with No Break

This is $y = (x - 2)^2 + 1$.

- Tracing toward $x = 2$ from the left, the height heads to $1$.
- Tracing toward $x = 2$ from the right, the height heads to $1$.
- Both sides agree: $\\lim_{x \\to 2} f(x) = 1$, and the point $(2, 1)$ is on the curve, so $f(2) = 1$ too.

> 💡 When the curve passes through $x = a$ with no break, hole or jump, the limit equals the height of the curve at $x = a$.
      `
    },
    {
      id: 'elg1-hole',
      type: 'text' as const,
      figure: elgHole,
      content: `
## 📝 Graph 2: A Curve with a Hole

The **open circle** at $(3, 2)$ means the curve skips that single point.

- From the left and from the right, the curve heads to height $2$.
- So $\\lim_{x \\to 3} g(x) = 2$.
- No filled dot is drawn above $x = 3$, so $g(3)$ is **undefined**.

> 🔑 A limit can exist at a point where the function has no value. The limit describes where the curve is heading, not what happens exactly at $x = a$.
      `
    },
    {
      id: 'elg1-mc',
      type: 'multiple-choice' as const,
      figure: elgMovedDot,
      content: `**Use the graph of $h$ above** 🎯

`,
      exercise: {
        questions: [
          {
            question: 'What is $\\lim_{x \\to 5} h(x)$?',
            options: ['$4$', '$7$', '$5.5$', 'Does not exist'],
            correctAnswer: 0,
            explanation: 'From both sides the curve heads to the open circle at height $4$, so the limit is $4$. The filled dot at $(5, 7)$ gives the value $h(5) = 7$, which a limit ignores, and there is no reason to average the two heights.'
          },
          {
            question: 'What is $h(5)$?',
            options: ['$4$', '$7$', 'Undefined', '$5$'],
            correctAnswer: 1,
            explanation: 'The filled dot above $x = 5$ is at height $7$, so $h(5) = 7$. The open circle at height $4$ is the point the curve skips, and $5$ is the input, not an output.'
          },
          {
            question: 'When estimating a limit from a graph, where do you focus?',
            options: [
              'On the filled dot drawn above $x = a$',
              'Where the curve heads as $x$ approaches $a$',
              'On the $x$-intercept nearest to $x = a$',
              'On the steepness of the curve near $x = a$'
            ],
            correctAnswer: 1,
            explanation: 'A limit is about the behavior NEAR $a$: trace the curve toward $a$ from each side. A filled dot shows $f(a)$, not the limit, and intercepts and steepness answer different questions.'
          }
        ]
      }
    },
    {
      id: 'elg1-input',
      type: 'input-boxes' as const,
      figure: elgHole,
      content: `**Read the limit from the graph** 🧮

**1)** $\\lim_{x \\to 3} g(x) = ?$

**2)** $\\lim_{x \\to 5} g(x) = ?$ (read the height of the curve above $x = 5$)

**3)** Is $g(3)$ defined? Type \`yes\` or \`no\`.
      `,
      exercise: {
        questions: [
          { question: '(1)', answer: '2', acceptableAnswers: ['2'] },
          { question: '(2)', answer: '4', acceptableAnswers: ['4'] },
          { question: '(3)', answer: 'no', acceptableAnswers: ['no', 'No'] }
        ],
        hint1: 'The curve heads to the open circle from both sides.',
        hint2: 'At $x = 5$ there is no break, so read the height of the curve there.',
        hint3: 'An open circle with no filled dot above $x = 3$ means $g(3)$ is undefined.',
        explanation: 'At $x = 3$ the curve heads to $2$ from both sides, so the limit is $2$ even though $g(3)$ is undefined. At $x = 5$ the curve is unbroken, so the limit is the height there: the curve passes through $(5, 4)$.'
      }
    }
  ]
}
