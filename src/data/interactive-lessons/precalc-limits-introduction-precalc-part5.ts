export const precalcLimitsPart5Data = {
  topicSlug: 'limits-introduction-precalc',
  sections: [
    {
      id: 'p5-intro',
      type: 'text' as const,
      content: `
# 📈 Limits from Graphs

**Part 5 of 7**

### Reading Limits Graphically

**Look at where the function HEADS**, not where it IS.

### Key Scenarios

| Graph Feature | Limit |
|:-------------|:------|
| Continuous at $c$ | $\\lim = f(c)$ |
| Hole at $c$ | $\\lim$ exists (approach value) but $f(c)$ may differ |
| Jump at $c$ | Left ≠ right → DNE |
| Vertical asymptote | $\\pm\\infty$ (not a finite limit) |
| Oscillation | DNE (no single value approached) |

### Example: Function with a Hole

If the graph approaches $y=3$ from both sides at $x=2$, but there's an open circle at $(2,3)$ and a dot at $(2,5)$:

$$\\lim_{x \\to 2} f(x) = 3 \\quad \\text{but} \\quad f(2) = 5$$

The limit and function value **disagree** — this is a removable discontinuity.
      `
    },
    {
      id: 'p5-practice',
      type: 'text' as const,
      content: `
## 📊 Graph Reading Practice

### Piecewise Example

Imagine a graph where:
- For $x < 1$: the curve approaches $y = 4$
- For $x > 1$: the curve approaches $y = 4$
- At $x = 1$: there's a filled dot at $(1, 2)$

Then:
- $\\lim_{x \\to 1^-} f(x) = 4$
- $\\lim_{x \\to 1^+} f(x) = 4$
- $\\lim_{x \\to 1} f(x) = 4$ ✓ (both sides agree)
- $f(1) = 2$ (actual value)

### Vertical Asymptote Example

Near $x = 3$:
- From left: graph shoots up to $+\\infty$
- From right: graph shoots down to $-\\infty$

Then: $\\lim_{x \\to 3^-} = +\\infty$, $\\lim_{x \\to 3^+} = -\\infty$, $\\lim_{x \\to 3}$ DNE.
      `
    },
    {
      id: 'p5-end',
      type: 'text' as const,
      content: `
## 🔍 End Behavior from Graphs

### Horizontal Asymptotes

If the graph levels off at $y = 2$ as $x \\to \\infty$:

$$\\lim_{x \\to \\infty} f(x) = 2$$

### Different Behavior at $\\pm\\infty$

Some functions (like $\\arctan x$) have **two** horizontal asymptotes:
- $\\lim_{x \\to \\infty} \\arctan x = \\pi/2$
- $\\lim_{x \\to -\\infty} \\arctan x = -\\pi/2$

### Common Mistakes

❌ Confusing the **limit** (where the graph heads) with the **function value** (where the dot is)

❌ Saying the limit is $\\infty$ when it should be DNE (e.g., when one-sided limits are $+\\infty$ and $-\\infty$)

❌ Ignoring the difference between open circles (excluded) and closed circles (included)
      `
    },
    {
      id: 'p5-mcq',
      type: 'multiple-choice' as const,
      content: `
**Graph Limits Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Hole at $(3, 5)$ with the curve approaching $y=5$. $\\lim_{x\\to 3} f(x) = ?$',
            options: ['$5$', 'DNE', '$3$', 'Undefined'],
            correctAnswer: 0,
            explanation: 'The curve approaches 5 from both sides, so the limit is 5 (regardless of the hole).'
          },
          {
            question: 'Graph jumps from 2 to 4 at $x=1$. $\\lim_{x \\to 1} f(x) = ?$',
            options: ['$2$', '$4$', '$3$', 'DNE'],
            correctAnswer: 3,
            explanation: 'Left limit ≠ right limit ($2 \\neq 4$) → limit DNE.'
          },
          {
            question: 'An open circle means:',
            options: ['Point is included', 'Point is excluded', 'Limit DNE', 'Function is 0'],
            correctAnswer: 1,
            explanation: 'Open circle = the function is NOT defined at that exact point (excluded).'
          }
        ]
      }
    },
    {
      id: 'p5-input',
      type: 'input-boxes' as const,
      content: `
**From the description**: Graph has $f(2) = 7$, approaches $y=3$ from both sides as $x \\to 2$.

**1)** $\\lim_{x \\to 2^-} f(x)$ = ?

**2)** $\\lim_{x \\to 2} f(x)$ = ?

**3)** $f(2)$ = ?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['3', '3', '7'],
        hint1: 'Approaches 3 from the left.',
        hint2: 'Both sides approach 3.',
        hint3: 'The actual value at $x=2$ is 7.',
        explanation: 'Limit = 3 (approach value). $f(2) = 7$ (actual value). They differ → removable discontinuity.'
      }
    },
    {
      id: 'p5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Graph Reading** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A removable discontinuity has:',
            options: ['No limit', 'Limit exists but ≠ f(c)', 'Limit = f(c)', 'Infinite limit'],
            correctAnswer: 1
          },
          {
            label: 'A jump discontinuity has:',
            options: ['Equal one-sided limits', 'Unequal one-sided limits', 'One-sided limits = ±∞', 'No one-sided limits'],
            correctAnswer: 1
          },
          {
            label: 'To find $\\lim_{x \\to \\infty} f(x)$ from a graph:',
            options: ['Look at $f(0)$', 'Look at the right end behavior', 'Look at vertical asymptotes', 'Find the maximum'],
            correctAnswer: 1
          },
          {
            label: '$\\sin(1/x)$ near $x=0$:',
            options: ['Limit = 0', 'Limit = 1', 'Oscillates — DNE', 'Limit = -1'],
            correctAnswer: 2
          }
        ],
        correctAnswers: ['Limit exists but ≠ f(c)', 'Unequal one-sided limits', 'Look at the right end behavior', 'Oscillates — DNE'],
        hint1: 'Removable: could "fill in" the hole.',
        hint2: 'Jump: graph has different heights on each side.',
        hint3: '$x \\to \\infty$: look far right.',
        explanation: 'Removable: limit ≠ value. Jump: one-sided ≠. End behavior: far right. $\\sin(1/x)$: oscillates.'
      }
    },
    {
      id: 'p5-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'If graph shows $f$ approaching $y=6$ from left and $y=6$ from right at $x=4$, but $f(4)$ is undefined:',
            options: ['$\\lim_{x \\to 4} f(x) = 6$', 'Limit DNE', 'Limit = undefined', 'Need more info'],
            correctAnswer: 0,
            explanation: 'Both one-sided limits = 6, so the limit is 6, regardless of $f(4)$ being undefined.'
          },
          {
            question: 'Oscillating functions like $\\sin(1/x)$ near $x=0$:',
            options: ['Have limit 0', 'Have limit 1', 'Limit DNE', 'Have infinite limit'],
            correctAnswer: 2,
            explanation: '$\\sin(1/x)$ oscillates between $-1$ and $1$ infinitely often. No single limit value.'
          }
        ]
      }
    }
  ]
};
