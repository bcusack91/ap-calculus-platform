export const calcabFactoringMethodPart4Data = {
  topicSlug: 'factoring-method-limits',
  sections: [
    {
      id: 'fml4-intro',
      type: 'text' as const,
      content: `# 📐 Beyond Quadratics — Higher-Degree Factoring

**Part 4 of 4 — Cubes, grouping, and synthetic division**

---

### Topics in This Part

| Section |
|---------|
| 🔑 Sum and Difference of Cubes |
| Factoring by Grouping |
| Synthetic Division to Find $(x - a)$ |

> 🔑 **Why this matters:** AP problems sometimes hide $(x - a)$ inside a cubic or higher. Knowing extra patterns saves the day.`
    },
    {
      id: 'fml4-cubes',
      type: 'text' as const,
      content: `
## 🧊 Sum and Difference of Cubes

$$a^3 - b^3 = (a - b)(a^2 + ab + b^2)$$
$$a^3 + b^3 = (a + b)(a^2 - ab + b^2)$$

**Example:** $x^3 - 8 = (x - 2)(x^2 + 2x + 4)$.

**Worked limit:** $\\lim_{x \\to 2} \\dfrac{x^3 - 8}{x - 2} = \\lim_{x \\to 2} (x^2 + 2x + 4) = 4 + 4 + 4 = 12$.

> 💡 The leftover quadratic $x^2 + ax + a^2$ does NOT factor further over the reals (discriminant negative). Just substitute.
      `
    },
    {
      id: 'fml4-grouping',
      type: 'text' as const,
      content: `
## 🔗 Factoring by Grouping

For four-term polynomials:

**Example:** $x^3 + x^2 - 4x - 4$.

Group: $(x^3 + x^2) + (-4x - 4) = x^2(x + 1) - 4(x + 1) = (x + 1)(x^2 - 4) = (x + 1)(x - 2)(x + 2)$.

**Worked limit:** $\\lim_{x \\to -1} \\dfrac{x^3 + x^2 - 4x - 4}{x + 1}$.

- $0/0$ ✅
- After cancelling $(x + 1)$: $(x - 2)(x + 2) = x^2 - 4 \\to (-1)^2 - 4 = -3$. **Answer: $-3$.**
      `
    },
    {
      id: 'fml4-synthetic',
      type: 'text' as const,
      content: `
## ➗ Synthetic Division to Extract $(x - a)$

When a polynomial $p(x)$ doesn't factor obviously, use **synthetic division** by $(x - a)$.

**Example:** $\\lim_{x \\to 1} \\dfrac{x^3 - 6x^2 + 11x - 6}{x - 1}$.

Synthetic-divide $1 \\;|\\; 1 \\; -6 \\; 11 \\; -6$:

| step | result |
|------|--------|
| Bring down 1 | $1$ |
| $1 \\cdot 1 = 1$, $-6 + 1 = -5$ | $-5$ |
| $-5 \\cdot 1 = -5$, $11 - 5 = 6$ | $6$ |
| $6 \\cdot 1 = 6$, $-6 + 6 = 0$ | remainder $0$ ✅ |

So $p(x) = (x - 1)(x^2 - 5x + 6)$. Cancel $(x-1)$, take limit: $1 - 5 + 6 = 2$. **Answer: $2$.**

> 💡 Synthetic division IS factoring; it just gives you the quotient mechanically.
      `
    },
    {
      id: 'fml4-mc',
      type: 'multiple-choice' as const,
      content: `**Higher-Degree Practice** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Compute $\\lim_{x \\to 3} \\dfrac{x^3 - 27}{x - 3}$.',
            options: ['$0$', '$9$', '$27$', '$54$'],
            correctAnswer: 2,
            explanation: '$x^3 - 27 = (x - 3)(x^2 + 3x + 9)$; cancel; substitute $x = 3$ into $x^2 + 3x + 9$ → $9 + 9 + 9 = 27$.'
          },
          {
            question: 'Compute $\\lim_{x \\to -2} \\dfrac{x^3 + 8}{x + 2}$.',
            options: ['$0$', '$4$', '$8$', '$12$'],
            correctAnswer: 3,
            explanation: '$x^3 + 8 = (x+2)(x^2 - 2x + 4)$; cancel $(x+2)$; substitute $x = -2$: $4 + 4 + 4 = 12$.'
          }
        ]
      }
    },
    {
      id: 'fml4-exit',
      type: 'multiple-choice' as const,
      content: `**Exit Check ✅**`,
      exercise: {
        questions: [
          {
            question: 'When direct substitution gives $0/0$ on a rational expression, the most common first move is:',
            options: ['Try L\'Hôpital immediately', 'Factor numerator and denominator and cancel the common $(x-a)$', 'Conclude the limit is 0', 'Conclude the limit DNE'],
            correctAnswer: 1,
            explanation: 'On AP, factoring is the standard $0/0$-resolver for polynomial expressions.'
          },
          {
            question: 'You factor and cancel, but the new expression STILL gives $0/0$ at the target. What now?',
            options: ['Limit is 0', 'Cancel another $(x-a)$ — there is a repeated factor', 'Limit DNE', 'Switch to a graph'],
            correctAnswer: 1,
            explanation: 'A repeated $(x-a)$ in both top and bottom requires a second cancellation. Repeat until you get a clean substitution.'
          }
        ]
      }
    }
  ]
}
