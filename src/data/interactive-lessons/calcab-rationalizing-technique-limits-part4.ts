export const calcabRationalizingPart4Data = {
  topicSlug: 'rationalizing-technique-limits',
  sections: [
    {
      id: 'rt4-intro',
      type: 'text' as const,
      content: `# 🔃 Conjugates in the Denominator (and Mixed Cases)

**Part 4 of 4 — Less common but still tested**

---

### Topics in This Part

| Section |
|---------|
| Conjugate in the Denominator |
| Both Sides Have a Radical |
| Pitfalls |

> 🔑 **Why this matters:** When the radical is on the bottom, you still rationalize — but be careful which factor you actually need to expand.`
    },
    {
      id: 'rt4-bottom',
      type: 'text' as const,
      content: `
## ⬇️ Radical in the Denominator

Find $\\lim_{x \\to 0} \\dfrac{x}{\\sqrt{x + 1} - 1}$.

- Substitute: $0/0$ ✅
- Multiply by $\\dfrac{\\sqrt{x + 1} + 1}{\\sqrt{x + 1} + 1}$:
$$\\dfrac{x(\\sqrt{x + 1} + 1)}{(x + 1) - 1} = \\dfrac{x(\\sqrt{x + 1} + 1)}{x} = \\sqrt{x + 1} + 1$$
- Substitute $x = 0$: $1 + 1 = 2$.

> 💡 When the radical is on the bottom, the *expanded* numerator is messier — but it's the *denominator* that simplifies and lets you cancel the offending $x$.
      `
    },
    {
      id: 'rt4-both',
      type: 'text' as const,
      content: `
## ⬆️⬇️ Both Sides Have Roots

Sometimes you need to rationalize both top and bottom.

**Example.** $\\lim_{x \\to 0} \\dfrac{\\sqrt{x + 4} - 2}{\\sqrt{x + 1} - 1}$.

- $0/0$ ✅
- Multiply by $\\dfrac{(\\sqrt{x + 4} + 2)(\\sqrt{x + 1} + 1)}{(\\sqrt{x + 4} + 2)(\\sqrt{x + 1} + 1)}$:
$$\\dfrac{(x + 4 - 4)(\\sqrt{x + 1} + 1)}{(x + 1 - 1)(\\sqrt{x + 4} + 2)} = \\dfrac{x(\\sqrt{x + 1} + 1)}{x(\\sqrt{x + 4} + 2)} = \\dfrac{\\sqrt{x + 1} + 1}{\\sqrt{x + 4} + 2}$$
- Substitute $x = 0$: $\\dfrac{1 + 1}{2 + 2} = \\dfrac{1}{2}$.
      `
    },
    {
      id: 'rt4-pitfalls',
      type: 'text' as const,
      content: `
## ⚠️ Pitfalls

| Pitfall | Fix |
|---------|-----|
| **Distributing the conjugate prematurely.** Leave the un-rationalized side as a single product so it cancels cleanly. | Only multiply out the side you\'re rationalizing. |
| **Forgetting "in disguise"**. You must multiply by $\\dfrac{\\text{conj}}{\\text{conj}}$, not just by the conjugate. | Always pair top and bottom — that\'s what makes it $= 1$. |
| **Sign errors in the conjugate.** | The conjugate flips the sign *between* the two terms only, not on each term. |
      `
    },
    {
      id: 'rt4-mc',
      type: 'multiple-choice' as const,
      content: `**Apply the Idea** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Compute $\\lim_{x \\to 0} \\dfrac{x}{\\sqrt{x + 4} - 2}$.',
            options: ['$0$', '$2$', '$4$', 'DNE'],
            correctAnswer: 2,
            explanation: 'Multiply by $\\dfrac{\\sqrt{x+4}+2}{\\sqrt{x+4}+2}$: $\\dfrac{x(\\sqrt{x+4}+2)}{x} = \\sqrt{x+4}+2 \\to 4$.'
          },
          {
            question: 'The conjugate of $3 - \\sqrt{x}$ is:',
            options: ['$\\sqrt{x} - 3$', '$3 + \\sqrt{x}$', '$-3 - \\sqrt{x}$', '$3 \\sqrt{x}$'],
            correctAnswer: 1,
            explanation: 'Flip only the sign between the terms: $3 + \\sqrt{x}$.'
          }
        ]
      }
    },
    {
      id: 'rt4-exit',
      type: 'multiple-choice' as const,
      content: `**Exit Check ✅**`,
      exercise: {
        questions: [
          {
            question: 'Rationalizing is the right tool when:',
            options: [
              'Direct substitution gives any answer',
              'Direct substitution gives $0/0$ AND a square root is involved',
              'You see a quadratic',
              'The function is exponential'
            ],
            correctAnswer: 1,
            explanation: '$0/0$ from a radical = use the conjugate. Pure polynomial $0/0$ = use factoring.'
          },
          {
            question: 'Why is multiplying by $\\dfrac{\\sqrt{x} + 2}{\\sqrt{x} + 2}$ a legal move?',
            options: ['It changes the numerator only', 'It equals 1, so the value is unchanged', 'It eliminates the variable', 'Limits don\'t care about value'],
            correctAnswer: 1,
            explanation: 'Any nonzero expression over itself equals 1; multiplying by 1 is always allowed.'
          }
        ]
      }
    }
  ]
}
