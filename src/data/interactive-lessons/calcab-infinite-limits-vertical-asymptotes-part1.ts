export const calcabInfiniteLimitsPart1Data = {
  topicSlug: 'infinite-limits-vertical-asymptotes',
  sections: [
    {
      id: 'ilva1-intro',
      type: 'text' as const,
      content: `# 📈 Infinite Limits — When Functions Blow Up

**Part 1 of 4 — Notation and meaning**

---

### Topics in This Part

| Section |
|---------|
| What "$\\lim = \\infty$" Really Means |
| 🔑 Infinite Limits vs. Limits at Infinity |
| Notation and Conventions |

> 🔑 **Why this matters:** Infinite limits describe vertical asymptotes — a key feature of any rational function.`
    },
    {
      id: 'ilva1-mean',
      type: 'text' as const,
      content: `
## 💡 What "$\\lim_{x \\to a} f(x) = +\\infty$" Means

> As $x$ approaches $a$, the values of $f(x)$ grow without bound (positive direction).

This is **not** saying the limit exists in the usual sense — $\\infty$ isn\'t a real number. It\'s a *description* of how the limit fails to be a finite number.

Same for $-\\infty$: $f(x)$ decreases without bound.

> 💡 In AP language, we sometimes say *"the limit equals $+\\infty$"* and sometimes say *"the limit DNE (and the function $\\to +\\infty$)"*. Both are accepted on the exam.
      `
    },
    {
      id: 'ilva1-vs',
      type: 'text' as const,
      content: `
## ⚖️ Infinite Limits vs. Limits at Infinity

Two different concepts, similar names — don\'t confuse them.

| Type | Notation | Means |
|------|----------|-------|
| **Limit at infinity** | $\\lim_{x \\to \\infty} f(x)$ | Behavior as $x$ goes to $\\infty$ — describes *horizontal* asymptotes |
| **Infinite limit** | $\\lim_{x \\to a} f(x) = \\infty$ | Behavior near a finite $a$ where $f$ blows up — describes *vertical* asymptotes |

**Quick test:** is $\\infty$ in the *target* (under the lim) or in the *value* (after the equal sign)?
- Under the lim → limit at infinity (horizontal asymptote idea).
- After the equal sign → infinite limit (vertical asymptote idea).
      `
    },
    {
      id: 'ilva1-notation',
      type: 'text' as const,
      content: `
## 📝 Notation and Conventions

| Notation | Meaning |
|----------|---------|
| $\\lim_{x \\to a^+} f(x) = +\\infty$ | Approaching $a$ from the **right**, $f$ shoots up |
| $\\lim_{x \\to a^+} f(x) = -\\infty$ | Approaching $a$ from the **right**, $f$ shoots down |
| $\\lim_{x \\to a^-} f(x) = +\\infty$ | Approaching from the **left**, $f$ shoots up |
| $\\lim_{x \\to a} f(x) = +\\infty$ | **Both** sides go to $+\\infty$ |

> ⚠️ If the two sides go to *opposite* infinities (e.g., left $\\to -\\infty$, right $\\to +\\infty$), the two-sided limit DNE. We do **not** say it equals $\\infty$ in that case.
      `
    },
    {
      id: 'ilva1-mc',
      type: 'multiple-choice' as const,
      content: `**Notation Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'What does $\\lim_{x \\to 0} \\dfrac{1}{x^2} = +\\infty$ mean?',
            options: [
              'The function equals infinity at zero',
              'As $x$ approaches 0, the values grow without bound positively',
              'The function is constant',
              'The limit does not exist in any sense'
            ],
            correctAnswer: 1,
            explanation: '"$\\lim = +\\infty$" describes unbounded positive growth as $x$ nears 0.'
          },
          {
            question: 'For $f(x) = 1/x$: $\\lim_{x \\to 0^+} f(x) = +\\infty$ and $\\lim_{x \\to 0^-} f(x) = -\\infty$. The two-sided limit:',
            options: ['Equals $+\\infty$', 'Equals $-\\infty$', 'Equals $0$', 'DNE (sides disagree)'],
            correctAnswer: 3,
            explanation: 'Sides go to opposite infinities → two-sided limit DNE.'
          }
        ]
      }
    },
    {
      id: 'ilva1-input',
      type: 'input-boxes' as const,
      content: `**Identify** 🧮

For $f(x) = \\dfrac{1}{(x - 5)^2}$:

**1)** $\\lim_{x \\to 5^+} f(x) = ?$ (use \`infinity\`, \`-infinity\`, \`DNE\`, or a number)

**2)** $\\lim_{x \\to 5^-} f(x) = ?$

**3)** $\\lim_{x \\to 5} f(x) = ?$
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['infinity', 'infinity', 'infinity'],
        hint1: 'Squared denominator is always positive — both sides go up.',
        hint2: 'Same.',
        hint3: 'Both sides agree on $+\\infty$, so the two-sided limit equals $+\\infty$.',
        explanation: 'The square keeps the denominator positive on both sides, so both one-sided limits agree at $+\\infty$.'
      }
    }
  ]
}
