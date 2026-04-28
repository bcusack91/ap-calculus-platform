export const calcabOneSidedLimitsPart2Data = {
  topicSlug: 'one-sided-limits',
  sections: [
    {
      id: 'osl2-intro',
      type: 'text' as const,
      content: `# 🧮 Computing One-Sided Limits

**Part 2 of 4 — Piecewise functions, $|x|$, and the sign function**

---

### Topics in This Part

| Section |
|---------|
| Piecewise Functions |
| Absolute Value Functions |
| The Sign Function |

> 🔑 **Why this matters:** The most common one-sided-limit problems involve splitting cases — you must know which formula to use on which side.`
    },
    {
      id: 'osl2-piecewise',
      type: 'text' as const,
      content: `
## 🧩 Piecewise Functions

Suppose
$$f(x) = \\begin{cases} x^2 + 1 & \\text{if } x < 2 \\\\ 3x - 4 & \\text{if } x \\ge 2 \\end{cases}$$

To compute $\\lim_{x \\to 2^-} f(x)$, use the formula for $x < 2$:
$$\\lim_{x \\to 2^-} (x^2 + 1) = 2^2 + 1 = 5.$$

To compute $\\lim_{x \\to 2^+} f(x)$, use the formula for $x > 2$:
$$\\lim_{x \\to 2^+} (3x - 4) = 3(2) - 4 = 2.$$

The two sides disagree (5 vs. 2), so $\\lim_{x \\to 2} f(x)$ DNE — *jump*.

> 💡 **Strategy:** identify which "piece" applies on each side, then substitute.
      `
    },
    {
      id: 'osl2-abs',
      type: 'text' as const,
      content: `
## ➖➕ Absolute Value Functions

Rewrite $|x - a|$ as a piecewise function:
$$|x - a| = \\begin{cases} -(x - a) & \\text{if } x < a \\\\ (x - a) & \\text{if } x \\ge a \\end{cases}$$

**Worked example:** $\\displaystyle \\lim_{x \\to 3} \\frac{|x - 3|}{x - 3}$.

- Left ($x \\to 3^-$): $|x - 3| = -(x - 3)$, so the ratio is $-1$.
- Right ($x \\to 3^+$): $|x - 3| = x - 3$, so the ratio is $+1$.
- Two-sided limit DNE.

> 🔑 Whenever you see $|x - a|$ near $x = a$, split into cases. Almost always you get $\\pm 1$ on the two sides.
      `
    },
    {
      id: 'osl2-sign',
      type: 'text' as const,
      content: `
## 🔺 The Sign Function

$$\\operatorname{sgn}(x) = \\begin{cases} -1 & x < 0 \\\\ 0 & x = 0 \\\\ +1 & x > 0 \\end{cases}$$

- $\\lim_{x \\to 0^-} \\operatorname{sgn}(x) = -1$
- $\\lim_{x \\to 0^+} \\operatorname{sgn}(x) = +1$
- Two-sided $\\lim_{x \\to 0} \\operatorname{sgn}(x)$ DNE.

> 💡 The value $\\operatorname{sgn}(0) = 0$ doesn't change the limit answers — limits ignore the value at the point.
      `
    },
    {
      id: 'osl2-mc',
      type: 'multiple-choice' as const,
      content: `**Computation Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'For $f(x) = \\begin{cases} x + 1 & x < 0 \\\\ x^2 + 5 & x \\ge 0 \\end{cases}$, find $\\lim_{x \\to 0^-} f(x)$.',
            options: ['$5$', '$1$', '$0$', 'DNE'],
            correctAnswer: 1,
            explanation: 'Approach from the left → use $x + 1$, plug in 0 → 1.'
          },
          {
            question: 'For the same $f$: $\\lim_{x \\to 0^+} f(x) = ?$',
            options: ['$5$', '$1$', '$0$', 'DNE'],
            correctAnswer: 0,
            explanation: 'Approach from the right → use $x^2 + 5$, plug in 0 → 5.'
          },
          {
            question: 'Same $f$: does $\\lim_{x \\to 0} f(x)$ exist?',
            options: ['Yes, equals 1', 'Yes, equals 5', 'Yes, equals 3 (average)', 'No — sides disagree (1 vs 5)'],
            correctAnswer: 3,
            explanation: 'One-sided limits 1 and 5 disagree, so the two-sided limit DNE.'
          }
        ]
      }
    },
    {
      id: 'osl2-input',
      type: 'input-boxes' as const,
      content: `**Compute** 🧮

For $g(x) = \\dfrac{|x + 4|}{x + 4}$:

**1)** $\\lim_{x \\to -4^-} g(x) = ?$

**2)** $\\lim_{x \\to -4^+} g(x) = ?$

**3)** Does $\\lim_{x \\to -4} g(x)$ exist? \`yes\` or \`no\`:
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['-1', '1', 'no'],
        hint1: 'For $x < -4$, $x + 4 < 0$, so $|x+4| = -(x+4)$.',
        hint2: 'For $x > -4$, $x + 4 > 0$, so $|x+4| = (x+4)$.',
        explanation: 'Standard absolute-value split: $-1$ on the left, $+1$ on the right, DNE overall.'
      }
    }
  ]
}
