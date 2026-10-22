import { elgAsymptote, elgOscillation, elgThreePanels } from '@/data/lesson-figures/calcab'

export const calcabEstimatingLimitsGraphsPart3Data = {
  topicSlug: 'estimating-limits-graphs',
  sections: [
    {
      id: 'elg3-intro',
      type: 'text' as const,
      content: `# 🚫 When the Graph Shows DNE

**Part 3 of 4 — Visual signatures of failure**

---

### Topics in This Part

| Section |
|---------|
| Visual Signature: Jump |
| Visual Signature: Vertical Asymptote |
| Visual Signature: Oscillation |

> 🔑 **Why this matters:** On a graph-only problem, you should say not just "does not exist" but *why*.`
    },
    {
      id: 'elg3-jump',
      type: 'text' as const,
      content: `
## 1️⃣ Visual Signature: Jump

A **step** in the graph: the two arms head to different finite heights.

In the jump graph from Part 2, the left arm heads to $4$ and the right arm heads to $2$ at $x = 1$, so $\\lim_{x \\to 1} f(x)$ does not exist (a *jump discontinuity*).

> 💡 Drawing tell: an open circle on one side and a filled dot on the other, at different heights above the same $x$.
      `
    },
    {
      id: 'elg3-asymptote',
      type: 'text' as const,
      figure: elgAsymptote,
      content: `
## 2️⃣ Visual Signature: Vertical Asymptote

The curve **runs off the graph** next to the dashed line $x = 4$:

- Left arm: $\\lim_{x \\to 4^-} f(x) = -\\infty$ (it falls without bound).
- Right arm: $\\lim_{x \\to 4^+} f(x) = +\\infty$ (it rises without bound).
- $\\lim_{x \\to 4} f(x)$ does not exist — the values are unbounded, and the two sides even go opposite ways.

If **both** arms rise without bound (like $\\frac{1}{x^2}$ at $0$), we write $\\lim = +\\infty$ to *describe* the behavior, but the limit still does not exist as a finite number.

> 💡 Drawing tell: a dashed vertical line with the curve hugging it.
      `
    },
    {
      id: 'elg3-oscillation',
      type: 'text' as const,
      figure: elgOscillation,
      content: `
## 3️⃣ Visual Signature: Oscillation

As $x \\to 0$, $\\sin(1/x)$ swings between $-1$ and $+1$ infinitely many times in every tiny window around $0$ (the shaded band). It never settles on one height, so $\\lim_{x \\to 0} \\sin(1/x)$ does not exist.

| Failure mode | Visual signature |
|-------------|------------------|
| Jump | Arms end at two different heights |
| Vertical asymptote | Curve runs off along a dashed vertical line |
| Oscillation | Curve wiggles faster and faster in a band |
      `
    },
    {
      id: 'elg3-mc',
      type: 'multiple-choice' as const,
      figure: elgAsymptote,
      content: `**Diagnose from the picture** 🎯

`,
      exercise: {
        questions: [
          {
            question: 'Use the graph above. Which statement about $\\lim_{x \\to 4} f(x)$ is true?',
            options: [
              'It equals $0$, the average of the two sides',
              'It does not exist, since $f$ is unbounded near $4$',
              'It equals $+\\infty$, since the right arm rises',
              'It equals $-\\infty$, from the left-hand approach'
            ],
            correctAnswer: 1,
            explanation: 'Near $x = 4$ the values are unbounded, falling to $-\\infty$ on the left and rising to $+\\infty$ on the right, so the limit does not exist. One side alone never decides a two-sided limit, and infinities are not averaged.'
          },
          {
            question: 'Use the graph above. What is $\\lim_{x \\to 4^+} f(x)$?',
            options: ['$+\\infty$', '$-\\infty$', '$0$', '$4$'],
            correctAnswer: 0,
            explanation: 'Just to the right of the dashed line the curve rises without bound, so the right-hand limit is $+\\infty$. The left arm falls to $-\\infty$, and $4$ is the $x$-value of the asymptote, not a height.'
          },
          {
            question: 'Use the graph above. What is $\\lim_{x \\to 6} f(x)$?',
            options: ['$1$', '$2$', '$6$', 'Does not exist'],
            correctAnswer: 0,
            explanation: 'At $x = 6$ the right branch is unbroken and passes through height $1$, so the limit is $1$. Only $x = 4$ is a problem point; $2$ is the height at $x = 5$.'
          }
        ]
      }
    },
    {
      id: 'elg3-dropdown',
      type: 'dropdown-select' as const,
      figure: elgThreePanels,
      content: `**Match each graph to its failure mode** 🔽

`,
      exercise: {
        dropdowns: [
          { label: 'Graph A at $x = 2$', options: ['limit exists', 'jump', 'vertical asymptote', 'oscillation'] },
          { label: 'Graph B at $x = 3$', options: ['limit exists', 'jump', 'vertical asymptote', 'oscillation'] },
          { label: 'Graph C at $x = 0$', options: ['limit exists', 'jump', 'vertical asymptote', 'oscillation'] },
        ],
        correctAnswers: ['jump', 'vertical asymptote', 'oscillation'],
        hint1: 'In Graph A the two pieces end at different heights.',
        hint2: 'In Graph B both arms run down along the dashed line.',
        hint3: 'In Graph C the curve never settles.',
        explanation: 'Graph A has finite one-sided limits $3.5$ and $1$ that disagree (jump). In Graph B both arms fall without bound, so $\\lim_{x \\to 3} = -\\infty$ describes the behavior, but no finite limit exists (vertical asymptote). Graph C oscillates between $-1$ and $1$ near $0$ (oscillation).'
      }
    }
  ]
}
