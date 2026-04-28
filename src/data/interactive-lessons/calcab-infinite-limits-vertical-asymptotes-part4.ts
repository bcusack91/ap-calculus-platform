export const calcabInfiniteLimitsPart4Data = {
  topicSlug: 'infinite-limits-vertical-asymptotes',
  sections: [
    {
      id: 'ilva4-intro',
      type: 'text' as const,
      content: `# 🌐 Asymptotes Beyond Rationals

**Part 4 of 4 — Logs, tangent, and reading from a graph**

---

### Topics in This Part

| Section |
|---------|
| $\\ln x$ at $x = 0$ |
| $\\tan x$ at $x = \\pi/2 + k\\pi$ |
| Reading Asymptotes from a Graph |

> 🔑 **Why this matters:** Vertical asymptotes appear in many functions, not just rationals.`
    },
    {
      id: 'ilva4-log',
      type: 'text' as const,
      content: `
## 📉 Natural Log at $x = 0$

The function $\\ln x$ is defined for $x > 0$ and:

$$\\lim_{x \\to 0^+} \\ln x = -\\infty$$

So $x = 0$ is a vertical asymptote of $\\ln x$ — but only on the right side (the function isn\'t defined for $x \\le 0$).

Same for $\\log_b x$ with any base $b > 1$.
      `
    },
    {
      id: 'ilva4-tan',
      type: 'text' as const,
      content: `
## 📐 Tangent\'s Asymptotes

$\\tan x = \\dfrac{\\sin x}{\\cos x}$ has vertical asymptotes wherever $\\cos x = 0$, i.e., at:

$$x = \\frac{\\pi}{2} + k\\pi \\quad (k \\in \\mathbb{Z})$$

At each one, the left and right limits go to **opposite** infinities.

| Value | Left limit | Right limit |
|-------|------------|-------------|
| $x = \\pi/2$ | $+\\infty$ | $-\\infty$ |
| $x = 3\\pi/2$ | $+\\infty$ | $-\\infty$ |

> 💡 The pattern repeats with period $\\pi$.
      `
    },
    {
      id: 'ilva4-graph',
      type: 'text' as const,
      content: `
## 👁️ Reading Asymptotes from a Graph

A **vertical asymptote** appears as a vertical "cliff" on the graph: the curve rockets up or down as it approaches a vertical line $x = a$.

Visual signs:
- The curve rises (or falls) without bound near $x = a$.
- A vertical dashed line is often drawn at $x = a$ in textbook plots.
- The function is *undefined* at $x = a$.

> ⚠️ Don\'t confuse a **hole** (single missing point) with an asymptote (unbounded behavior). Holes look normal locally, just with one point missing; asymptotes show the function blowing up.
      `
    },
    {
      id: 'ilva4-mc',
      type: 'multiple-choice' as const,
      content: `**Apply the Ideas** 🎯`,
      exercise: {
        questions: [
          {
            question: '$\\lim_{x \\to 0^+} \\ln x$ equals:',
            options: ['$0$', '$1$', '$+\\infty$', '$-\\infty$'],
            correctAnswer: 3,
            explanation: '$\\ln x \\to -\\infty$ as $x \\to 0^+$.'
          },
          {
            question: 'How many vertical asymptotes does $\\tan x$ have on the interval $(-\\pi, \\pi)$?',
            options: ['$0$', '$1$', '$2$', '$3$'],
            correctAnswer: 2,
            explanation: '$\\tan$ has asymptotes at $\\pm\\pi/2$ on this interval — two of them.'
          }
        ]
      }
    },
    {
      id: 'ilva4-exit',
      type: 'multiple-choice' as const,
      content: `**Exit Check ✅**`,
      exercise: {
        questions: [
          {
            question: 'A vertical asymptote at $x = a$ means:',
            options: [
              '$f(a) = 0$',
              '$f(a)$ is very large',
              'At least one one-sided limit at $a$ is $\\pm\\infty$',
              '$f$ is continuous at $a$'
            ],
            correctAnswer: 2,
            explanation: 'Definition of vertical asymptote: at least one one-sided limit is unbounded.'
          },
          {
            question: 'You see $0/0$ at $x = a$. This guarantees:',
            options: [
              'A vertical asymptote',
              'A hole — guaranteed',
              'Indeterminate form — could be hole, asymptote, or finite limit; need to factor',
              'No issue'
            ],
            correctAnswer: 2,
            explanation: '$0/0$ is indeterminate. Factor and analyze to decide.'
          }
        ]
      }
    }
  ]
}
