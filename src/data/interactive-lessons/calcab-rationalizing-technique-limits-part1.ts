export const calcabRationalizingPart1Data = {
  topicSlug: 'rationalizing-technique-limits',
  sections: [
    {
      id: 'rt1-intro',
      type: 'text' as const,
      content: `# 🔁 Rationalizing — When to Reach for the Conjugate

**Part 1 of 4 — The signal: a $\\sqrt{}$ in a $0/0$ limit**

---

### Topics in This Part

| Section |
|---------|
| 🔑 The Trigger: $\\sqrt{}$ + $0/0$ |
| What Is a Conjugate? |
| Why Multiplying by 1 Helps |

> 🔑 **Why this matters:** Factoring fails when a square root creates the $0/0$. Conjugates clear the radical and unlock cancellation.`
    },
    {
      id: 'rt1-trigger',
      type: 'text' as const,
      content: `
## ⚠️ The Trigger

Use rationalizing when:

1. Direct substitution gives $0/0$, **AND**
2. The expression contains a **square root** (or sometimes higher root) that\'s causing the zero.

Classic shape:
$$\\lim_{x \\to a} \\frac{\\sqrt{f(x)} - c}{x - a} \\quad \\text{or} \\quad \\lim_{x \\to a} \\frac{x - a}{\\sqrt{f(x)} - c}$$

> 💡 If you only have polynomials and you get $0/0$, factor instead. Rationalize when a $\\sqrt{}$ is in the way.
      `
    },
    {
      id: 'rt1-conjugate',
      type: 'text' as const,
      content: `
## 🔄 What Is a Conjugate?

The **conjugate** of $a + b$ is $a - b$, and vice versa. The key identity:

$$(a - b)(a + b) = a^2 - b^2$$

This eliminates radicals because $(\\sqrt{x})^2 = x$.

| Expression | Conjugate |
|------------|-----------|
| $\\sqrt{x} - 2$ | $\\sqrt{x} + 2$ |
| $\\sqrt{x + 4} - 3$ | $\\sqrt{x + 4} + 3$ |
| $1 + \\sqrt{x}$ | $1 - \\sqrt{x}$ |
      `
    },
    {
      id: 'rt1-mult1',
      type: 'text' as const,
      content: `
## ✖️ Multiplying by 1 (in disguise)

The trick: multiply by $\\dfrac{\\text{conjugate}}{\\text{conjugate}}$. This equals 1, so the value of the expression is unchanged — but the form is transformed.

$$\\frac{\\sqrt{x} - 2}{x - 4} \\cdot \\frac{\\sqrt{x} + 2}{\\sqrt{x} + 2} = \\frac{x - 4}{(x - 4)(\\sqrt{x} + 2)} = \\frac{1}{\\sqrt{x} + 2}$$

Now you can substitute $x = 4$: $\\dfrac{1}{2 + 2} = \\dfrac{1}{4}$.

> 💡 The $(x - 4)$ that was *hidden inside* the radical comes out and cancels with the denominator.
      `
    },
    {
      id: 'rt1-mc',
      type: 'multiple-choice' as const,
      content: `**Conjugate Concept** 🎯`,
      exercise: {
        questions: [
          {
            question: 'The conjugate of $\\sqrt{x + 5} - 3$ is:',
            options: ['$\\sqrt{x + 5} + 3$', '$-\\sqrt{x + 5} - 3$', '$\\sqrt{x - 5} + 3$', '$3 - \\sqrt{x + 5}$'],
            correctAnswer: 0,
            explanation: 'Flip the sign between the two terms. The conjugate is $\\sqrt{x + 5} + 3$.'
          },
          {
            question: 'Why does multiplying $\\sqrt{x} - 2$ by $\\sqrt{x} + 2$ help?',
            options: [
              'It gives 0',
              'It gives $x - 4$ — eliminates the radical',
              'It doubles the expression',
              'It changes the value of the limit'
            ],
            correctAnswer: 1,
            explanation: 'Difference of squares: $(\\sqrt{x})^2 - 2^2 = x - 4$. Radical eliminated.'
          }
        ]
      }
    },
    {
      id: 'rt1-input',
      type: 'input-boxes' as const,
      content: `**Build the Conjugate** 🧮

Write down what each multiplication produces (use the difference-of-squares identity):

**1)** $(\\sqrt{x} - 5)(\\sqrt{x} + 5) = ?$ (answer in form like \`x-25\`)

**2)** $(\\sqrt{x + 7} - 3)(\\sqrt{x + 7} + 3) = ?$ (simplify completely; e.g. \`x-2\`)
      `,
      exercise: {
        boxes: 2,
        correctAnswers: ['x-25', 'x-2'],
        hint1: '$(\\sqrt{x})^2 - 5^2 = x - 25$.',
        hint2: '$(x + 7) - 9 = x - 2$.',
        explanation: 'Both use $(a-b)(a+b) = a^2 - b^2$. Type without spaces: e.g. \`x-25\`.'
      }
    }
  ]
}
