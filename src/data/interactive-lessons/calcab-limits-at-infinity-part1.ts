export const calcabLimitsAtInfinityPart1Data = {
  topicSlug: 'limits-at-infinity',
  sections: [
    {
      id: 'lai1-intro',
      type: 'text' as const,
      content: `# ♾️ Limits at Infinity — End Behavior

**Part 1 of 4 — What $\\lim_{x \\to \\pm\\infty}$ means**

---

### Topics in This Part

| Section |
|---------|
| The Idea of $x \\to \\pm\\infty$ |
| 🔑 Horizontal Asymptotes |
| Quick Reference Table |

> 🔑 **Why this matters:** End behavior governs horizontal asymptotes — a foundational topic for both limits and integration later.`
    },
    {
      id: 'lai1-idea',
      type: 'text' as const,
      content: `
## 💡 What Does $\\lim_{x \\to \\infty} f(x) = L$ Mean?

> As $x$ gets arbitrarily large, $f(x)$ gets arbitrarily close to $L$.

We are **not** plugging $\\infty$ into $f$ — $\\infty$ isn't a number. We\'re asking: *as $x$ marches off to the right, where is $f$ headed?*

Same idea for $\\lim_{x \\to -\\infty} f(x) = L$ — march to the left.

> 💡 The two ends are independent: $f$ might approach different limits as $x \\to \\infty$ and as $x \\to -\\infty$.
      `
    },
    {
      id: 'lai1-ha',
      type: 'text' as const,
      content: `
## 🔑 Horizontal Asymptotes

> The line $y = L$ is a **horizontal asymptote** of $f$ if $\\lim_{x \\to \\infty} f(x) = L$ **or** $\\lim_{x \\to -\\infty} f(x) = L$.

A function can have:

- **0 horizontal asymptotes** (e.g., $f(x) = x^2$ — both ends $\\to +\\infty$)
- **1 horizontal asymptote** (e.g., $f(x) = e^x$ — left end $\\to 0$, right end $\\to \\infty$, so $y = 0$ on the left only)
- **2 horizontal asymptotes** (e.g., $f(x) = \\arctan x$ — $-\\pi/2$ on the left, $\\pi/2$ on the right)

> ⚠️ A function can cross a horizontal asymptote — it just can\'t stay away from it forever.
      `
    },
    {
      id: 'lai1-ref',
      type: 'text' as const,
      content: `
## 📋 Quick Reference

| Function | $x \\to +\\infty$ | $x \\to -\\infty$ |
|----------|------------------|------------------|
| $1/x$ | $0$ | $0$ |
| $1/x^2$ | $0$ | $0$ |
| $e^x$ | $+\\infty$ | $0$ |
| $e^{-x}$ | $0$ | $+\\infty$ |
| $\\ln x$ | $+\\infty$ | undefined |
| $\\arctan x$ | $\\pi/2$ | $-\\pi/2$ |
      `
    },
    {
      id: 'lai1-mc',
      type: 'multiple-choice' as const,
      content: `**End-Behavior Vocab** 🎯`,
      exercise: {
        questions: [
          {
            question: 'What is $\\lim_{x \\to \\infty} \\dfrac{1}{x^2}$?',
            options: ['$0$', '$1$', '$\\infty$', 'DNE'],
            correctAnswer: 0,
            explanation: 'Denominator grows without bound; reciprocal $\\to 0$.'
          },
          {
            question: 'How many horizontal asymptotes does $\\arctan x$ have?',
            options: ['$0$', '$1$', '$2$', 'Infinite'],
            correctAnswer: 2,
            explanation: '$y = \\pi/2$ on the right and $y = -\\pi/2$ on the left.'
          }
        ]
      }
    },
    {
      id: 'lai1-input',
      type: 'input-boxes' as const,
      content: `**Compute Limits at Infinity** 🧮

**1)** $\\lim_{x \\to \\infty} \\dfrac{5}{x} = ?$

**2)** $\\lim_{x \\to -\\infty} e^x = ?$

**3)** $\\lim_{x \\to \\infty} \\arctan x = ?$ (use \`pi/2\`)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0', '0', 'pi/2'],
        hint1: '$5/x \\to 0$ as $x \\to \\infty$ (constant over growing denominator).',
        hint2: '$e^x$ at very negative $x$ is a tiny positive number $\\to 0$.',
        hint3: '$\\arctan$ levels off at $\\pi/2$ on the right.',
        explanation: 'Memorize these reference cases — they appear constantly.'
      }
    }
  ]
}
