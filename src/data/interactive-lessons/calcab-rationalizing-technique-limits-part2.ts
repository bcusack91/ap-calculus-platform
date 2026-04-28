export const calcabRationalizingPart2Data = {
  topicSlug: 'rationalizing-technique-limits',
  sections: [
    {
      id: 'rt2-intro',
      type: 'text' as const,
      content: `# 🛠️ The Rationalizing Workflow (Numerator Has the Root)

**Part 2 of 4 — Step-by-step**

---

### Topics in This Part

| Section |
|---------|
| 🔑 The 5-Step Workflow |
| Worked Example #1 |
| Common Setup |

> 🔑 **Why this matters:** Most AP rationalizing problems have the radical in the numerator. Master this case first.`
    },
    {
      id: 'rt2-workflow',
      type: 'text' as const,
      content: `
## 🔄 The 5-Step Workflow

For $\\lim_{x \\to a} \\dfrac{\\sqrt{\\,\\text{stuff}\\,} - c}{(x - a)}$:

1. **Substitute** to confirm $0/0$.
2. **Multiply by 1**: $\\dfrac{\\text{conjugate}}{\\text{conjugate}}$ where the conjugate flips the sign of the $\\sqrt{}$ piece.
3. **Simplify the numerator** using $(a-b)(a+b) = a^2 - b^2$ — the radical disappears.
4. **Cancel** the common factor $(x - a)$.
5. **Substitute** $x = a$ into the simplified expression.
      `
    },
    {
      id: 'rt2-ex1',
      type: 'text' as const,
      content: `
## 📝 Worked Example #1

Find $\\lim_{x \\to 9} \\dfrac{\\sqrt{x} - 3}{x - 9}$.

**Step 1.** Substitute: $\\dfrac{0}{0}$ ✅
**Step 2.** Multiply by $\\dfrac{\\sqrt{x} + 3}{\\sqrt{x} + 3}$.
$$\\dfrac{(\\sqrt{x} - 3)(\\sqrt{x} + 3)}{(x - 9)(\\sqrt{x} + 3)}$$
**Step 3.** Numerator becomes $x - 9$.
$$\\dfrac{x - 9}{(x - 9)(\\sqrt{x} + 3)}$$
**Step 4.** Cancel $(x - 9)$:
$$\\dfrac{1}{\\sqrt{x} + 3}$$
**Step 5.** Substitute $x = 9$: $\\dfrac{1}{3 + 3} = \\dfrac{1}{6}$.

$$\\boxed{\\lim_{x \\to 9} \\frac{\\sqrt{x} - 3}{x - 9} = \\frac{1}{6}}$$
      `
    },
    {
      id: 'rt2-pattern',
      type: 'text' as const,
      content: `
## 🎯 The General Pattern

For $\\lim_{x \\to a} \\dfrac{\\sqrt{x} - \\sqrt{a}}{x - a} = \\dfrac{1}{2\\sqrt{a}}$.

This actually IS the derivative of $\\sqrt{x}$ at $x = a$ — you\'ll meet this idea soon.

> 💡 If you start seeing the same answer pattern $\\dfrac{1}{2\\sqrt{a}}$, that\'s why.
      `
    },
    {
      id: 'rt2-mc',
      type: 'multiple-choice' as const,
      content: `**Workflow Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Compute $\\lim_{x \\to 4} \\dfrac{\\sqrt{x} - 2}{x - 4}$.',
            options: ['$0$', '$1/4$', '$1/2$', 'DNE'],
            correctAnswer: 1,
            explanation: 'Conjugate $\\sqrt{x} + 2$: $\\dfrac{x - 4}{(x - 4)(\\sqrt{x} + 2)} \\to \\dfrac{1}{\\sqrt{4} + 2} = \\dfrac{1}{4}$.'
          },
          {
            question: 'Compute $\\lim_{x \\to 16} \\dfrac{\\sqrt{x} - 4}{x - 16}$.',
            options: ['$1/16$', '$1/8$', '$1/4$', '$0$'],
            correctAnswer: 1,
            explanation: '$\\dfrac{1}{2\\sqrt{16}} = \\dfrac{1}{8}$.'
          }
        ]
      }
    },
    {
      id: 'rt2-input',
      type: 'input-boxes' as const,
      content: `**Apply the Workflow** 🧮

**1)** $\\lim_{x \\to 25} \\dfrac{\\sqrt{x} - 5}{x - 25} = ?$ (decimal or fraction)

**2)** $\\lim_{x \\to 1} \\dfrac{\\sqrt{x} - 1}{x - 1} = ?$ (decimal or fraction)
      `,
      exercise: {
        boxes: 2,
        correctAnswers: ['1/10', '1/2'],
        hint1: '$\\dfrac{1}{2\\sqrt{25}} = 1/10$.',
        hint2: '$\\dfrac{1}{2\\sqrt{1}} = 1/2$.',
        explanation: 'Both use $\\dfrac{1}{2\\sqrt{a}}$ shortcut from the general pattern.'
      }
    }
  ]
}
