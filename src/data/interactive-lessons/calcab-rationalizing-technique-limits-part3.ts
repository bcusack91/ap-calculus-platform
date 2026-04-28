export const calcabRationalizingPart3Data = {
  topicSlug: 'rationalizing-technique-limits',
  sections: [
    {
      id: 'rt3-intro',
      type: 'text' as const,
      content: `# 📝 More Worked Examples

**Part 3 of 4 — Variations on the rationalizing theme**

---

### Topics in This Part

| Section |
|---------|
| Shifted Argument: $\\sqrt{x + h} - \\sqrt{x}$ Style |
| Two Radicals |
| Hidden Roots |

> 🔑 **Why this matters:** Real AP problems vary the form. Recognizing structure is half the battle.`
    },
    {
      id: 'rt3-shift',
      type: 'text' as const,
      content: `
## 📐 Shifted Argument

Find $\\lim_{x \\to 0} \\dfrac{\\sqrt{x + 4} - 2}{x}$.

- Substitute: $\\dfrac{0}{0}$ ✅
- Multiply by $\\dfrac{\\sqrt{x + 4} + 2}{\\sqrt{x + 4} + 2}$:
$$\\dfrac{(x + 4) - 4}{x(\\sqrt{x + 4} + 2)} = \\dfrac{x}{x(\\sqrt{x + 4} + 2)} = \\dfrac{1}{\\sqrt{x + 4} + 2}$$
- Substitute $x = 0$: $\\dfrac{1}{2 + 2} = \\dfrac{1}{4}$.
      `
    },
    {
      id: 'rt3-tworad',
      type: 'text' as const,
      content: `
## 🟰 Two Radicals

Find $\\lim_{x \\to 3} \\dfrac{\\sqrt{x + 1} - \\sqrt{4}}{x - 3} = \\lim_{x \\to 3} \\dfrac{\\sqrt{x + 1} - 2}{x - 3}$.

- Substitute: $0/0$ ✅
- Conjugate $\\sqrt{x + 1} + 2$:
$$\\dfrac{(x + 1) - 4}{(x - 3)(\\sqrt{x + 1} + 2)} = \\dfrac{x - 3}{(x - 3)(\\sqrt{x + 1} + 2)} = \\dfrac{1}{\\sqrt{x + 1} + 2}$$
- Substitute $x = 3$: $\\dfrac{1}{2 + 2} = \\dfrac{1}{4}$.
      `
    },
    {
      id: 'rt3-hidden',
      type: 'text' as const,
      content: `
## 🔍 Hidden Roots

Sometimes the radical is hiding inside an expression.

**Example.** $\\lim_{x \\to 0} \\dfrac{\\sqrt{1 + x} - 1}{x}$.

- $0/0$ ✅
- Conjugate $\\sqrt{1 + x} + 1$:
$$\\dfrac{1 + x - 1}{x(\\sqrt{1 + x} + 1)} = \\dfrac{x}{x(\\sqrt{1 + x} + 1)} = \\dfrac{1}{\\sqrt{1 + x} + 1}$$
- Substitute $x = 0$: $\\dfrac{1}{1 + 1} = \\dfrac{1}{2}$.

> 💡 The pattern $\\dfrac{\\sqrt{1 + x} - 1}{x} \\to \\dfrac{1}{2}$ is famous — it's the derivative of $\\sqrt{1+x}$ at $x = 0$.
      `
    },
    {
      id: 'rt3-mc',
      type: 'multiple-choice' as const,
      content: `**Pattern Recognition** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Compute $\\lim_{x \\to 0} \\dfrac{\\sqrt{x + 9} - 3}{x}$.',
            options: ['$1/9$', '$1/6$', '$1/3$', '$0$'],
            correctAnswer: 1,
            explanation: 'Conjugate gives $\\dfrac{1}{\\sqrt{x+9} + 3} \\to \\dfrac{1}{6}$.'
          },
          {
            question: 'Compute $\\lim_{x \\to 5} \\dfrac{\\sqrt{x + 4} - 3}{x - 5}$.',
            options: ['$1/3$', '$1/6$', '$1/9$', '$0$'],
            correctAnswer: 1,
            explanation: 'Conjugate: $\\dfrac{(x+4)-9}{(x-5)(\\sqrt{x+4}+3)} = \\dfrac{1}{\\sqrt{x+4}+3} \\to \\dfrac{1}{6}$.'
          }
        ]
      }
    },
    {
      id: 'rt3-input',
      type: 'input-boxes' as const,
      content: `**Mixed Practice** 🧮

**1)** $\\lim_{x \\to 0} \\dfrac{\\sqrt{x + 16} - 4}{x} = ?$ (fraction)

**2)** $\\lim_{x \\to 7} \\dfrac{\\sqrt{x + 2} - 3}{x - 7} = ?$ (fraction)
      `,
      exercise: {
        boxes: 2,
        correctAnswers: ['1/8', '1/6'],
        hint1: 'Conjugate: $\\sqrt{x + 16} + 4$. Final: $\\dfrac{1}{4 + 4}$.',
        hint2: 'Conjugate: $\\sqrt{x + 2} + 3$. Final: $\\dfrac{1}{3 + 3}$.',
        explanation: 'Both reduce to $\\dfrac{1}{2c}$ where $c$ is the constant after the radical evaluates.'
      }
    }
  ]
}
