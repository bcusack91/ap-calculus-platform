import { elgJump, elgPiecewise } from '@/data/lesson-figures/calcab'

export const calcabEstimatingLimitsGraphsPart2Data = {
  topicSlug: 'estimating-limits-graphs',
  sections: [
    {
      id: 'elg2-intro',
      type: 'text' as const,
      content: `# 📈 One-Sided Limits from a Graph

**Part 2 of 4 — Left arm, right arm**

---

### Topics in This Part

| Section |
|---------|
| Left vs. Right Visually |
| The Existence Test (visual form) |
| Worked Reading of a Jump |

> 🔑 **Why this matters:** AP graphs often show piecewise functions where the two sides of a point do different things.`
    },
    {
      id: 'elg2-leftright',
      type: 'text' as const,
      content: `
## 👈👉 Left vs. Right Visually

Two notations on the same graph:

- $\\lim_{x \\to a^-} f(x)$: trace from the **left** toward $a$ and read the height the curve heads for.
- $\\lim_{x \\to a^+} f(x)$: trace from the **right** toward $a$ and read the height the curve heads for.

> 💡 **Tip:** the superscript $-$ means "from values less than $a$" (left). The superscript $+$ means "from values greater than $a$" (right).

### The Existence Test — Visually

| Picture at $x = a$ | What it means |
|--------------------|---------------|
| Both arms head to the same height | $\\lim_{x \\to a} f(x) = $ that height |
| Arms head to different heights (the graph "jumps") | $\\lim_{x \\to a} f(x)$ does not exist |
| Either arm rises or falls without bound | $\\lim_{x \\to a} f(x)$ does not exist |

The value $f(a)$, drawn as a filled dot (or missing), does NOT affect the limit.
      `
    },
    {
      id: 'elg2-reading',
      type: 'text' as const,
      figure: elgJump,
      content: `
## 📖 Worked Reading of a Jump

| Question | Answer | How to see it |
|----------|--------|---------------|
| $\\lim_{x \\to 1^-} f(x)$ | $4$ | The left piece rises to the open circle at height $4$ |
| $\\lim_{x \\to 1^+} f(x)$ | $2$ | The right piece starts at height $2$ |
| $\\lim_{x \\to 1} f(x)$ | Does not exist | The two sides disagree |
| $f(1)$ | $2$ | The filled dot is at $(1, 2)$ |

> ⚠️ Don't confuse "$f(1)$ exists" with "the limit at 1 exists." They are separate questions.
      `
    },
    {
      id: 'elg2-mc',
      type: 'multiple-choice' as const,
      figure: elgPiecewise,
      content: `**Use the graph of $g$ above** 🎯

`,
      exercise: {
        questions: [
          {
            question: 'What is $\\lim_{x \\to 0^-} g(x)$?',
            options: ['$1$', '$4$', '$0$', 'Does not exist'],
            correctAnswer: 0,
            explanation: 'Coming from the left, the segment falls to the open circle at height $1$. The height $4$ belongs to the right piece (and to $g(0)$), and a one-sided limit can exist even when the two-sided limit does not.'
          },
          {
            question: 'What is $\\lim_{x \\to 0} g(x)$?',
            options: ['$1$', '$4$', '$2.5$', 'Does not exist'],
            correctAnswer: 3,
            explanation: 'The left-hand limit is $1$ and the right-hand limit is $4$. They disagree, so the two-sided limit does not exist. Averaging the two heights is never how a limit works.'
          },
          {
            question: 'What is $\\lim_{x \\to 2} g(x)$?',
            options: ['$2$', '$5$', '$3.5$', 'Does not exist'],
            correctAnswer: 0,
            explanation: 'Both segments head to the open circle at height $2$, so the limit is $2$. The filled dot at $(2, 5)$ is the value $g(2)$, which does not affect the limit.'
          }
        ]
      }
    },
    {
      id: 'elg2-dropdown',
      type: 'dropdown-select' as const,
      figure: elgPiecewise,
      content: `**Read the same graph of $g$** 🔽

`,
      exercise: {
        dropdowns: [
          { label: '$\\lim_{x \\to -2} g(x) = $', options: ['$1$', '$3$', '$-2$', 'DNE'] },
          { label: '$\\lim_{x \\to 0^+} g(x) = $', options: ['$1$', '$4$', '$0$', 'DNE'] },
          { label: '$g(2) = $', options: ['$2$', '$5$', '$3.5$', 'undefined'] },
        ],
        correctAnswers: ['$3$', '$4$', '$5$'],
        hint1: 'At $x = -2$ the two segments meet at a filled dot.',
        hint2: 'From the right of $x = 0$, the segment starts at the filled dot.',
        hint3: 'A value $g(2)$ is read from the filled dot above $x = 2$.',
        explanation: 'At $x = -2$ both segments meet at height $3$. Just to the right of $0$ the graph starts at height $4$. The filled dot above $x = 2$ is at height $5$, so $g(2) = 5$, even though the limit there is $2$.'
      }
    }
  ]
}
