export const calcabDirectSubstitutionPart3Data = {
  topicSlug: 'direct-substitution-method',
  sections: [
    {
      id: 'dsm3-intro',
      type: 'text' as const,
      content: `# 📜 Limit Laws — The Algebra of Substitution

**Part 3 of 4 — Why "just plug in" works**

---

### Topics in This Part

| Section |
|---------|
| 🔑 The Five Core Limit Laws |
| Composition of Continuous Functions |
| Examples |

> 🔑 **Why this matters:** Limit laws are what *justify* direct substitution and let you break complex limits into pieces.`
    },
    {
      id: 'dsm3-laws',
      type: 'text' as const,
      content: `
## 🔑 The Five Core Limit Laws

If $\\lim_{x \\to a} f(x) = L$ and $\\lim_{x \\to a} g(x) = M$ (both exist), and $c$ is a constant:

| Law | Statement |
|-----|-----------|
| **Sum** | $\\lim (f + g) = L + M$ |
| **Constant Multiple** | $\\lim (c \\cdot f) = cL$ |
| **Product** | $\\lim (fg) = LM$ |
| **Quotient** | $\\lim \\dfrac{f}{g} = \\dfrac{L}{M}$ if $M \\ne 0$ |
| **Power** | $\\lim f^n = L^n$ for positive integers $n$ |

> 💡 These laws let you take a complicated expression apart, evaluate each piece, and combine — exactly what direct substitution does in shorthand.
      `
    },
    {
      id: 'dsm3-comp',
      type: 'text' as const,
      content: `
## 🔁 Composition of Continuous Functions

If $g$ is continuous at $a$ and $f$ is continuous at $g(a)$, then
$$\\lim_{x \\to a} f(g(x)) = f(g(a)).$$

In words: "you can move the limit *inside* a continuous function."

**Worked example:** $\\lim_{x \\to 3} \\sqrt{x^2 + 7}$.

- Inside: $\\lim_{x \\to 3} (x^2 + 7) = 16$.
- Outside: $\\sqrt{\\,\\cdot\\,}$ is continuous at 16.
- Conclusion: $\\sqrt{16} = 4$.
      `
    },
    {
      id: 'dsm3-examples',
      type: 'text' as const,
      content: `
## 📝 Examples Combining the Laws

**Ex 1.** $\\lim_{x \\to 2} \\bigl[(x^3 - 1)(x + 5)\\bigr] = (8 - 1)(7) = 49$. (Product law.)

**Ex 2.** $\\lim_{x \\to 0} \\dfrac{e^x + 4}{\\cos x + 2} = \\dfrac{1 + 4}{1 + 2} = \\dfrac{5}{3}$. (Quotient law.)

**Ex 3.** $\\lim_{x \\to \\pi/2} \\sin(\\cos x) = \\sin(\\cos(\\pi/2)) = \\sin 0 = 0$. (Composition.)
      `
    },
    {
      id: 'dsm3-mc',
      type: 'multiple-choice' as const,
      content: `**Apply the Laws** 🎯`,
      exercise: {
        questions: [
          {
            question: 'If $\\lim_{x \\to a} f = 3$ and $\\lim_{x \\to a} g = -2$, then $\\lim_{x \\to a} (2f - g) = ?$',
            options: ['$1$', '$4$', '$8$', '$-1$'],
            correctAnswer: 2,
            explanation: 'Use sum + constant multiple: $2(3) - (-2) = 6 + 2 = 8$.'
          },
          {
            question: 'Compute $\\lim_{x \\to 0} \\cos(x^2 + \\pi)$.',
            options: ['$1$', '$-1$', '$0$', '$\\pi$'],
            correctAnswer: 1,
            explanation: 'Inside $\\to \\pi$; $\\cos$ continuous; $\\cos \\pi = -1$.'
          }
        ]
      }
    },
    {
      id: 'dsm3-input',
      type: 'input-boxes' as const,
      content: `**Combine the Laws** 🧮

Given $\\lim_{x \\to a} f = 5$ and $\\lim_{x \\to a} g = 4$:

**1)** $\\lim_{x \\to a} (f + g) = ?$

**2)** $\\lim_{x \\to a} (3fg) = ?$

**3)** $\\lim_{x \\to a} \\dfrac{f^2}{g} = ?$ (decimal or fraction)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['9', '60', '25/4'],
        hint1: '$5 + 4 = 9$.',
        hint2: '$3 \\cdot 5 \\cdot 4 = 60$.',
        hint3: '$5^2 / 4 = 25/4 = 6.25$.',
        explanation: 'Sum, product (with constant multiple), and quotient laws applied directly.'
      }
    }
  ]
}
