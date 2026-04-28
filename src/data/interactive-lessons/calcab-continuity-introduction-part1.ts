export const calcabContinuityIntroPart1Data = {
  topicSlug: 'continuity-introduction',
  sections: [
    {
      id: 'ci1-intro',
      type: 'text' as const,
      content: `# 🔗 Continuity — Drawing Without Lifting the Pencil

**Part 1 of 4 — The intuition**

---

### Topics in This Part

| Section |
|---------|
| Intuitive Definition |
| 🔑 Limit = Value |
| Continuous vs. Not |

> 🔑 **Why this matters:** Continuity is the bridge from limits to derivatives. It\'s the most heavily tested concept in Unit 1.`
    },
    {
      id: 'ci1-intuition',
      type: 'text' as const,
      content: `
## ✏️ Intuitive Definition

> A function $f$ is **continuous** on an interval if you can draw its graph without lifting your pencil.

Visually, this means **no jumps, no holes, no vertical asymptotes**.

This is great intuition but not quite a definition. The precise version uses limits.
      `
    },
    {
      id: 'ci1-formal',
      type: 'text' as const,
      content: `
## 🔑 Formal Definition: Continuous at $a$

A function $f$ is **continuous at $x = a$** if all three conditions hold:

1. $f(a)$ is defined.
2. $\\lim_{x \\to a} f(x)$ exists (both one-sided limits agree on a finite value).
3. $\\lim_{x \\to a} f(x) = f(a)$.

In short: **the limit equals the value**.

> 💡 If any one of the three conditions fails, $f$ is **discontinuous** at $a$.
      `
    },
    {
      id: 'ci1-vs',
      type: 'text' as const,
      content: `
## ⚖️ Continuous vs. Not

| Function | Continuous at $a$? | Why |
|----------|-------------------|-----|
| $f(x) = x^2$ at $a = 3$ | ✅ Yes | Polynomial; $\\lim = f(3) = 9$ |
| $f(x) = 1/x$ at $a = 0$ | ❌ No | $f(0)$ undefined |
| Piecewise with a jump at $a$ | ❌ No | One-sided limits disagree → no limit |
| Hole at $a$ (removable) | ❌ No | Limit exists but $f(a)$ either undefined or $\\ne$ limit |

Most "common" functions (polynomials, sin, cos, exp) are continuous everywhere they\'re defined.
      `
    },
    {
      id: 'ci1-mc',
      type: 'multiple-choice' as const,
      content: `**Three-Part Test** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Which is NOT one of the three conditions for continuity at $a$?',
            options: [
              '$f(a)$ is defined',
              '$\\lim_{x \\to a} f(x)$ exists',
              '$\\lim_{x \\to a} f(x) = f(a)$',
              '$f$ is differentiable at $a$'
            ],
            correctAnswer: 3,
            explanation: 'Differentiability is a stronger requirement, not part of the continuity definition.'
          },
          {
            question: 'Is $f(x) = \\dfrac{x^2 - 4}{x - 2}$ continuous at $x = 2$?',
            options: ['Yes', 'No — $f(2)$ is undefined', 'Yes if you remove the singularity', 'It depends on the limit'],
            correctAnswer: 1,
            explanation: '$f(2) = 0/0$ is undefined, so condition (1) fails. The limit DOES exist (it\'s 4), making this a removable discontinuity.'
          }
        ]
      }
    },
    {
      id: 'ci1-input',
      type: 'input-boxes' as const,
      content: `**Identify** 🧮

For each statement, type \`yes\` or \`no\`:

**1)** Is $f(x) = x^3 - 5x$ continuous at $x = 2$?

**2)** Is $g(x) = 1/(x - 4)$ continuous at $x = 4$?

**3)** Is $h(x) = \\sin x$ continuous at $x = \\pi$?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['yes', 'no', 'yes'],
        hint1: 'Polynomial — continuous everywhere.',
        hint2: '$g(4)$ undefined (denom 0).',
        hint3: '$\\sin x$ is continuous everywhere.',
        explanation: 'Polynomials, $\\sin$, $\\cos$, $e^x$ are continuous everywhere; rationals are continuous wherever the denominator is nonzero.'
      }
    }
  ]
}
