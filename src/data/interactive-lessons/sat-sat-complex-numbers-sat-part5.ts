export const satComplexPart5Data = {
  topicSlug: 'sat-complex-numbers-sat',
  sections: [
    {
      id: 'sat-cx5-intro',
      type: 'text' as const,
      content: `
# 🔍 Solving Equations with Complex Solutions

**Part 5 of 7 — Negative Discriminants, $x^2 + k = 0$, Quadratic Formula**

Not every quadratic equation has real solutions. When the discriminant $b^2-4ac < 0$, the solutions are **complex numbers**.

$$
x = \\frac{-b \\pm \\sqrt{b^2-4ac}}{2a}
$$

| Discriminant $\\Delta = b^2-4ac$ | Solutions |
|----------------------------------|-----------|
| $\\Delta > 0$ | Two real solutions |
| $\\Delta = 0$ | One repeated real solution |
| $\\Delta < 0$ | Two complex conjugate solutions |

**Key fact:** Complex solutions always come in conjugate pairs: if $a+bi$ is a solution, then $a-bi$ is also a solution.
      `
    },
    {
      id: 'sat-cx5-simple',
      type: 'text' as const,
      content: `
## Simple Cases: $x^2 + k = 0$

**Example 1:** Solve $x^2 + 4 = 0$.

$$x^2 = -4 \\Rightarrow x = \\pm\\sqrt{-4} = \\pm 2i$$

**Example 2:** Solve $x^2 + 9 = 0$.

$$x^2 = -9 \\Rightarrow x = \\pm 3i$$

**Example 3:** Solve $2x^2 + 50 = 0$.

$$2x^2 = -50 \\Rightarrow x^2 = -25 \\Rightarrow x = \\pm 5i$$

---

**Pattern:** $x^2 + k = 0$ (with $k > 0$) always gives $x = \\pm i\\sqrt{k}$.
      `
    },
    {
      id: 'sat-cx5-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Practice — Simple Equations** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'What are the solutions to $x^2 + 16 = 0$?',
            options: ['$x = \\pm 4$', '$x = \\pm 4i$', '$x = \\pm 8i$', '$x = \\pm 16i$'],
            correctAnswer: 1,
            explanation: '$x^2 = -16 \\Rightarrow x = \\pm\\sqrt{-16} = \\pm 4i$.'
          },
          {
            question: 'How many real solutions does $3x^2 + 12 = 0$ have?',
            options: ['$0$', '$1$', '$2$', 'Infinitely many'],
            correctAnswer: 0,
            explanation: '$x^2 = -4$, which has no real solutions (you cannot square a real number and get a negative). It has 2 complex solutions: $\\pm 2i$.'
          }
        ]
      }
    },
    {
      id: 'sat-cx5-quadratic',
      type: 'text' as const,
      content: `
## Using the Quadratic Formula

**Example:** Solve $x^2 - 4x + 13 = 0$.

Here $a=1$, $b=-4$, $c=13$.

$$\\Delta = (-4)^2 - 4(1)(13) = 16 - 52 = -36$$

$$x = \\frac{4 \\pm \\sqrt{-36}}{2} = \\frac{4 \\pm 6i}{2} = 2 \\pm 3i$$

**Solutions:** $x = 2 + 3i$ and $x = 2 - 3i$ (conjugate pair!).

**Example:** Solve $x^2 + 2x + 5 = 0$.

$$\\Delta = 4 - 20 = -16$$

$$x = \\frac{-2 \\pm \\sqrt{-16}}{2} = \\frac{-2 \\pm 4i}{2} = -1 \\pm 2i$$

---

**SAT Tip:** If a problem says "non-real solutions," it means the discriminant is negative.
      `
    },
    {
      id: 'sat-cx5-input1',
      type: 'input-boxes' as const,
      content: `
**Solve each equation.** 🧮

1) $x^2 + 36 = 0$ — the positive imaginary solution is $x = $

2) $x^2 - 6x + 13 = 0$ — the discriminant is $\\Delta = $

3) For the equation in (2), the solutions are $x = 3 \\pm \\_\\_ i$. Fill in the blank.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['6i', '-16', '2'],
        hint1: '$x^2 = -36$, so $x = \\pm 6i$. The positive imaginary solution is $6i$.',
        hint2: '$\\Delta = (-6)^2 - 4(1)(13) = 36 - 52 = -16$.',
        hint3: '$x = \\frac{6 \\pm \\sqrt{-16}}{2} = \\frac{6 \\pm 4i}{2} = 3 \\pm 2i$. The blank is $2$.',
        explanation: '$x^2+36=0 \\Rightarrow x=\\pm 6i$. $\\Delta = 36-52=-16$. $x=3\\pm 2i$.'
      }
    },
    {
      id: 'sat-cx5-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Classify each equation's solutions.** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '$x^2 - 6x + 9 = 0$',
            options: ['Two distinct real', 'One repeated real', 'Two complex (non-real)']
          },
          {
            label: '$x^2 + 1 = 0$',
            options: ['Two distinct real', 'One repeated real', 'Two complex (non-real)']
          },
          {
            label: '$x^2 - 5x + 3 = 0$',
            options: ['Two distinct real', 'One repeated real', 'Two complex (non-real)']
          }
        ],
        correctAnswers: ['One repeated real', 'Two complex (non-real)', 'Two distinct real'],
        hint1: '$\\Delta = 36-36=0$, so one repeated real solution: $x=3$.',
        hint2: '$\\Delta = 0-4=-4 < 0$, so two complex solutions: $x=\\pm i$.',
        hint3: '$\\Delta = 25-12=13>0$, so two distinct real solutions.',
        explanation: '$\\Delta=0$: repeated. $\\Delta<0$: complex. $\\Delta>0$: two real.'
      }
    },
    {
      id: 'sat-cx5-mcq2',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'For what value of $k$ does $x^2 + kx + 25 = 0$ have exactly one real solution?',
            options: ['$k = 5$', '$k = 10$', '$k = 25$', '$k = 0$'],
            correctAnswer: 1,
            explanation: 'For one repeated solution, $\\Delta = 0$: $k^2 - 4(1)(25) = 0 \\Rightarrow k^2 = 100 \\Rightarrow k = \\pm 10$. The positive value is $10$.'
          },
          {
            question: 'If $2+3i$ is a solution to a quadratic with real coefficients, what is the other solution?',
            options: ['$2-3i$', '$-2+3i$', '$-2-3i$', '$3+2i$'],
            correctAnswer: 0,
            explanation: 'Complex solutions come in conjugate pairs. If $2+3i$ is a solution, $2-3i$ must also be a solution.'
          }
        ]
      }
    }
  ]
}
