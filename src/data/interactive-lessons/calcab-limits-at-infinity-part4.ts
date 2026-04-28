export const calcabLimitsAtInfinityPart4Data = {
  topicSlug: 'limits-at-infinity',
  sections: [
    {
      id: 'lai4-intro',
      type: 'text' as const,
      content: `# 🌐 Other Cases — Exponentials, Logs, and Oscillation

**Part 4 of 4 — Beyond rationals**

---

### Topics in This Part

| Section |
|---------|
| Exponentials Win the Growth Race |
| Logs Lose the Growth Race |
| When Limits at Infinity DNE |

> 🔑 **Why this matters:** Many limit-at-infinity problems involve $e^x$, $\\ln x$, or oscillating functions. Each has its own rules.`
    },
    {
      id: 'lai4-exp',
      type: 'text' as const,
      content: `
## 🚀 Exponentials Beat Polynomials

For any positive $n$: $e^x$ grows faster than $x^n$. So
$$\\lim_{x \\to \\infty} \\dfrac{x^n}{e^x} = 0, \\qquad \\lim_{x \\to \\infty} \\dfrac{e^x}{x^n} = +\\infty.$$

**Example.** $\\lim_{x \\to \\infty} \\dfrac{x^{100}}{e^x} = 0$. (Even with a huge polynomial, the exponential wins.)

For $x \\to -\\infty$: $e^x \\to 0$, so things like $x^2 e^x \\to 0$ (still exponential dominates the polynomial).
      `
    },
    {
      id: 'lai4-log',
      type: 'text' as const,
      content: `
## 🐢 Logs Lose to Polynomials

For any positive $n$: $\\ln x$ grows slower than $x^n$.

$$\\lim_{x \\to \\infty} \\dfrac{\\ln x}{x^n} = 0, \\qquad \\lim_{x \\to \\infty} \\dfrac{x^n}{\\ln x} = +\\infty.$$

**Growth hierarchy** (slowest to fastest, going to $+\\infty$):
$$\\ln x \\;\\ll\\; x^{1/2} \\;\\ll\\; x \\;\\ll\\; x^2 \\;\\ll\\; e^x$$
      `
    },
    {
      id: 'lai4-dne',
      type: 'text' as const,
      content: `
## 🚫 When the Limit at Infinity DNE

Some functions don\'t settle to a value or to $\\pm\\infty$ at infinity:

- $\\sin x$, $\\cos x$ as $x \\to \\infty$ — oscillate forever between $-1$ and $1$. **DNE.**
- $x \\sin x$ — amplitude grows, oscillates between $\\pm\\infty$. **DNE.**

But:
- $\\dfrac{\\sin x}{x} \\to 0$ as $x \\to \\infty$ (Squeeze Theorem: bounded numerator, growing denominator).

> 💡 *Bounded over growing* gives 0. *Growing × bounded oscillation* fails to converge.
      `
    },
    {
      id: 'lai4-mc',
      type: 'multiple-choice' as const,
      content: `**Beyond Rationals** 🎯`,
      exercise: {
        questions: [
          {
            question: '$\\lim_{x \\to \\infty} \\dfrac{e^x}{x^5} = ?$',
            options: ['$0$', '$1$', '$+\\infty$', 'DNE'],
            correctAnswer: 2,
            explanation: 'Exponentials dominate any polynomial → $+\\infty$.'
          },
          {
            question: '$\\lim_{x \\to \\infty} \\dfrac{\\sin x}{x} = ?$',
            options: ['$0$', '$1$', '$\\infty$', 'DNE'],
            correctAnswer: 0,
            explanation: 'Numerator bounded in $[-1, 1]$, denominator grows without bound. By Squeeze, limit is 0.'
          },
          {
            question: '$\\lim_{x \\to \\infty} \\sin x = ?$',
            options: ['$0$', '$1$', '$\\infty$', 'DNE — oscillates forever'],
            correctAnswer: 3,
            explanation: '$\\sin x$ keeps oscillating between $-1$ and $1$, never settling.'
          }
        ]
      }
    },
    {
      id: 'lai4-exit',
      type: 'multiple-choice' as const,
      content: `**Exit Check ✅**`,
      exercise: {
        questions: [
          {
            question: 'For a rational function $p(x)/q(x)$ with $\\deg p > \\deg q$, the limit as $x \\to \\infty$ is:',
            options: ['$0$', 'Ratio of leading coefficients', '$\\pm\\infty$ (DNE as finite)', 'Always 1'],
            correctAnswer: 2,
            explanation: 'Top-heavier → grows without bound. Sign depends on leading coefficients and direction.'
          },
          {
            question: 'Which limit equals 0?',
            options: ['$\\lim_{x \\to \\infty} e^x / x$', '$\\lim_{x \\to \\infty} x / \\ln x$', '$\\lim_{x \\to \\infty} \\ln x / x$', '$\\lim_{x \\to \\infty} x^2 / x$'],
            correctAnswer: 2,
            explanation: 'Logs lose to polynomials: $\\ln x / x \\to 0$.'
          }
        ]
      }
    }
  ]
}
