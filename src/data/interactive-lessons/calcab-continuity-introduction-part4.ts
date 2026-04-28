export const calcabContinuityIntroPart4Data = {
  topicSlug: 'continuity-introduction',
  sections: [
    {
      id: 'ci4-intro',
      type: 'text' as const,
      content: `# 🌐 Continuity on an Interval & the IVT

**Part 4 of 4 — Big-picture continuity**

---

### Topics in This Part

| Section |
|---------|
| Continuous on an Open vs. Closed Interval |
| 🔑 The Intermediate Value Theorem |
| Applying IVT |

> 🔑 **Why this matters:** Continuity on an interval enables the IVT — a foundational existence theorem you\'ll use in later units (and on the AP exam).`
    },
    {
      id: 'ci4-interval',
      type: 'text' as const,
      content: `
## 📏 Continuous on an Interval

> $f$ is **continuous on an open interval** $(a, b)$ if it\'s continuous at every point in $(a, b)$.
>
> $f$ is **continuous on a closed interval** $[a, b]$ if it\'s continuous on $(a, b)$ AND **right-continuous at $a$** AND **left-continuous at $b$**.

The endpoint conditions:

- Right-continuous at $a$: $\\lim_{x \\to a^+} f(x) = f(a)$.
- Left-continuous at $b$: $\\lim_{x \\to b^-} f(x) = f(b)$.

> 💡 Most "nice" functions (polynomials, sin, cos, $e^x$) are continuous on every interval.
      `
    },
    {
      id: 'ci4-ivt',
      type: 'text' as const,
      content: `
## 🔑 The Intermediate Value Theorem (IVT)

> **IVT.** If $f$ is continuous on $[a, b]$ and $N$ is any value strictly between $f(a)$ and $f(b)$, then there exists at least one $c \\in (a, b)$ such that $f(c) = N$.

In words: **a continuous function on a closed interval takes on every value between its endpoint values.**

> 💡 The IVT is an *existence* theorem — it tells you a $c$ exists, but not where it is or how many.
      `
    },
    {
      id: 'ci4-apply',
      type: 'text' as const,
      content: `
## 🔍 Applying IVT — Root-Finding

**Worked example.** Show $f(x) = x^3 + x - 1$ has a root on $[0, 1]$.

- $f$ is a polynomial → continuous on $[0, 1]$ ✅
- $f(0) = -1 < 0$
- $f(1) = 1 > 0$
- $0$ is strictly between $-1$ and $1$.

By IVT, there exists $c \\in (0, 1)$ with $f(c) = 0$. **A root exists in $(0, 1)$.**

> 💡 IVT *guarantees* existence; doesn\'t tell you the root\'s location. You\'d use other methods (bisection, Newton\'s method) to find it.
      `
    },
    {
      id: 'ci4-mc',
      type: 'multiple-choice' as const,
      content: `**IVT Application** 🎯`,
      exercise: {
        questions: [
          {
            question: 'IVT requires the function to be:',
            options: ['Differentiable on $[a, b]$', 'Continuous on $[a, b]$', 'Polynomial', 'Bounded on $[a, b]$'],
            correctAnswer: 1,
            explanation: 'Continuity on the closed interval is the only hypothesis.'
          },
          {
            question: 'For $f(x) = x^2 - 2$ on $[1, 2]$: $f(1) = -1$, $f(2) = 2$. By IVT, there is a $c \\in (1, 2)$ with:',
            options: ['$f(c) = -1$', '$f(c) = 0$ (in particular)', '$f(c) = 5$', '$f(c) = -2$'],
            correctAnswer: 1,
            explanation: 'Since $0$ lies strictly between $-1$ and $2$, IVT guarantees a $c \\in (1, 2)$ with $f(c) = 0$ (this $c$ is $\\sqrt 2$).'
          },
          {
            question: 'IVT does NOT apply to which case?',
            options: ['$f$ continuous on $[1, 5]$', '$f$ continuous on $(1, 5)$ only (open at endpoints)', '$f$ a polynomial on $[0, 1]$', '$f(x) = \\sin x$ on $[0, \\pi]$'],
            correctAnswer: 1,
            explanation: 'IVT requires a CLOSED interval $[a, b]$, with continuity including the endpoints.'
          }
        ]
      }
    },
    {
      id: 'ci4-exit',
      type: 'multiple-choice' as const,
      content: `**Exit Check ✅**`,
      exercise: {
        questions: [
          {
            question: 'A function $f$ is continuous at $a$ if and only if:',
            options: [
              '$f(a)$ exists',
              '$\\lim_{x \\to a} f(x)$ exists',
              '$\\lim_{x \\to a} f(x) = f(a)$ (with both sides existing)',
              '$f$ is differentiable at $a$'
            ],
            correctAnswer: 2,
            explanation: 'Continuity = limit equals value. Both must exist and agree.'
          },
          {
            question: 'IVT is an example of:',
            options: [
              'A computational shortcut',
              'An existence theorem',
              'A formula for derivatives',
              'A way to evaluate limits'
            ],
            correctAnswer: 1,
            explanation: 'IVT *guarantees* a $c$ exists; it doesn\'t compute or locate it.'
          }
        ]
      }
    }
  ]
}
