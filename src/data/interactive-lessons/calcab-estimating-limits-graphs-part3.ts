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

> 🔑 **Why this matters:** On a graph-only AP problem, you must say not just "DNE" but *why*.`
    },
    {
      id: 'elg3-jump',
      type: 'text' as const,
      content: `
## 1️⃣ Visual Signature: Jump

A **step** in the curve. The two arms aim at different finite $y$-values.

Think of a staircase, or the floor function $\\lfloor x \\rfloor$:

- Left arm at $x = 2$ aims at $y = 1$.
- Right arm at $x = 2$ aims at $y = 2$.
- Limit DNE — *jump discontinuity*.

> 💡 Drawing tell: a vertical "step" with often a closed dot on one side and an open circle on the other.
      `
    },
    {
      id: 'elg3-asymptote',
      type: 'text' as const,
      content: `
## 2️⃣ Visual Signature: Vertical Asymptote

The curve **shoots off to $\\pm\\infty$** as $x$ approaches $a$.

Think $1/x$ at $x = 0$:

- Left arm dives to $-\\infty$.
- Right arm shoots to $+\\infty$.
- Limit DNE — *unbounded blow-up*; vertical asymptote at $x = 0$.

A subtler case is $1/x^2$ at 0: both arms shoot to $+\\infty$. We *describe* the behavior as $\\lim = +\\infty$, but **the limit does not exist as a finite number**.

> 💡 Drawing tell: a dashed vertical line, with the curve hugging it asymptotically.
      `
    },
    {
      id: 'elg3-oscillation',
      type: 'text' as const,
      content: `
## 3️⃣ Visual Signature: Oscillation

The curve **wiggles infinitely fast** near $a$ — never settling on any value.

Think $\\sin(1/x)$ at $x = 0$: as you slide toward 0, the graph crashes through $-1$ and $+1$ infinitely many times in any tiny window.

- Limit DNE — *oscillation*.

> 💡 Drawing tell: a "fuzzy" or shaded vertical band near $a$ where the curve cycles densely between two horizontal levels.

| Failure mode | Visual signature |
|-------------|------------------|
| Jump | Step in graph |
| Vertical asymptote | Curve shoots to $\\pm\\infty$ |
| Oscillation | Fuzzy/wiggly band |
      `
    },
    {
      id: 'elg3-mc',
      type: 'multiple-choice' as const,
      content: `**Diagnose from the Picture** 🎯`,
      exercise: {
        questions: [
          {
            question: 'A graph shows a vertical dashed line at $x = 4$, with the curve diving to $-\\infty$ on the left and shooting to $+\\infty$ on the right. The limit at $x = 4$:',
            options: [
              'Equals 0 (averaged)',
              'DNE — vertical asymptote / blow-up',
              'Equals $+\\infty$',
              'Equals the closed dot'
            ],
            correctAnswer: 1,
            explanation: 'Curve heads to $\\pm\\infty$ from opposite sides → vertical asymptote → limit DNE.'
          },
          {
            question: 'A graph near $x = 0$ looks like a fuzzy band oscillating between $-1$ and $+1$. The limit at 0:',
            options: ['$0$', '$1$', 'DNE — oscillation', '$-1$'],
            correctAnswer: 2,
            explanation: 'Infinite oscillation between $-1$ and $+1$ means the curve never settles on a single $y$-value.'
          }
        ]
      }
    },
    {
      id: 'elg3-dropdown',
      type: 'dropdown-select' as const,
      content: `**Match the Picture to the Failure Mode** 🔽`,
      exercise: {
        dropdowns: [
          { label: 'Curve has a clean step from $y = -2$ to $y = 5$ at $x = 1$', options: ['continuous', 'jump', 'asymptote', 'oscillation'] },
          { label: 'Curve dives down to $-\\infty$ on both sides of $x = 3$ along a dashed vertical line', options: ['continuous', 'jump', 'asymptote (blow-up)', 'oscillation'] },
          { label: 'Curve looks like an infinitely-wiggly fuzzy band hugging $x = 0$', options: ['continuous', 'jump', 'asymptote', 'oscillation'] },
        ],
        correctAnswers: ['jump', 'asymptote (blow-up)', 'oscillation'],
        hint1: 'A clean step = jump.',
        hint2: 'Curve hugging a vertical dashed line = asymptote.',
        hint3: 'Fuzzy band = oscillation.',
        explanation: 'Each picture maps to one of the three classic failure modes for limits.'
      }
    }
  ]
}
