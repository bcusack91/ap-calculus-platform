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
| 🔑 Step-by-Step: Trace Your Finger |
| Easy Example |

> 🔑 **Why this matters:** AP free-response problems regularly hand you a graph and ask "what is $\\lim_{x \\to 2} f(x)$?" — no formula given.`
    },
    {
      id: 'elg1-idea',
      type: 'text' as const,
      content: `
## 💡 The Visual Idea

A limit asks: as $x$ slides toward $a$ along the $x$-axis, what $y$-value does the graph approach?

> 💡 **Trick of the eye:** ignore the actual point above $x = a$. Look only at where the *curve* is heading from each side.

The limit is the $y$-value the curve is *aiming for*, not necessarily the dot drawn at $x = a$.
      `
    },
    {
      id: 'elg1-steps',
      type: 'text' as const,
      content: `
## 🔑 Step-by-Step: Trace Your Finger

To estimate $\\lim_{x \\to a} f(x)$:

1. Place your finger on the curve well to the **left** of $x = a$.
2. Slide your finger along the curve *toward* $x = a$. Watch the $y$-value.
3. Note the $y$-value the curve approaches → this is the **left-hand limit** $\\lim_{x \\to a^-} f(x)$.
4. Repeat from the **right**: slide from the right toward $x = a$, note the $y$-value.
5. **If both arrive at the same $y$-value $L$**, that's the limit. **If they disagree**, the limit DNE.

> 🔑 At step 5, the value the curve "would land on if continued" is the limit — even if there's a hole there.
      `
    },
    {
      id: 'elg1-example',
      type: 'text' as const,
      content: `
## 📝 Easy Example

A continuous parabola $y = (x - 2)^2 + 1$ passes through $(2, 1)$ smoothly.

- Approach $x = 2$ from the left along the curve → $y$ heads to 1.
- Approach $x = 2$ from the right → $y$ heads to 1.
- Both sides agree: $\\lim_{x \\to 2} f(x) = 1$.

> 💡 For continuous functions (no breaks/holes), the limit equals the visible $y$-value at $x = a$.
      `
    },
    {
      id: 'elg1-mc',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'When estimating a limit from a graph, where do you focus your eye?',
            options: [
              'Only at the dot above $x = a$',
              'On where the curve is aiming AS $x$ approaches $a$, ignoring the value AT $a$',
              'On the $x$-intercept',
              'On the slope of the curve'
            ],
            correctAnswer: 1,
            explanation: 'The limit is about behavior NEAR $a$. Trace the curve toward $a$ from each side — ignore the exact point.'
          },
          {
            question: 'A curve approaches $y = 4$ from both sides as $x \\to 5$, but a solid dot sits at $(5, 9)$. The limit $\\lim_{x \\to 5} f(x)$ equals:',
            options: ['$4$', '$9$', '$6.5$', 'DNE'],
            correctAnswer: 0,
            explanation: 'The limit is what the curve is approaching: $L = 4$. The dot at 9 tells us $f(5) = 9$ — that\'s the value, not the limit.'
          }
        ]
      }
    },
    {
      id: 'elg1-input',
      type: 'input-boxes' as const,
      content: `**Read the limit** 🧮

A graph shows a smooth curve approaching $y = -3$ from both sides as $x \\to 7$. There is an open circle at $(7, -3)$ (so $f(7)$ is undefined).

**1)** $\\lim_{x \\to 7} f(x) = ?$

**2)** Is $f(7)$ defined? Type \`yes\` or \`no\`.
      `,
      exercise: {
        boxes: 2,
        correctAnswers: ['-3', 'no'],
        hint1: 'The limit is the y-value the curve is approaching.',
        hint2: 'An OPEN circle means the function is undefined there.',
        explanation: 'The curve aims at $-3$ from both sides, so the limit is $-3$. The open circle says $f(7)$ does not exist — but the limit can still exist.'
      }
    }
  ]
}
