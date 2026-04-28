export const calcabTypesDiscontinuityPart2Data = {
  topicSlug: 'types-of-discontinuity',
  sections: [
    {
      id: 'td2-intro',
      type: 'text' as const,
      content: `# ↕️ Jump Discontinuities

**Part 2 of 4 — When the function "jumps"**

---

### Topics in This Part

| Section |
|---------|
| What Is a Jump? |
| 🔑 Diagnosing from Piecewise Definitions |
| Reading Jumps from Graphs |

> 🔑 **Why this matters:** Jumps occur in piecewise functions and step functions — common in real-world models (taxes, shipping costs, etc.).`
    },
    {
      id: 'td2-def',
      type: 'text' as const,
      content: `
## 📐 Definition

> A **jump discontinuity** at $x = a$ occurs when both one-sided limits $\\lim_{x \\to a^-}$ and $\\lim_{x \\to a^+}$ exist (finite) but are *different*.

So the function "jumps" from one value to another at $a$. The two-sided limit DNE, and the discontinuity is **not** removable (no single value can patch it).
      `
    },
    {
      id: 'td2-piecewise',
      type: 'text' as const,
      content: `
## 🔑 Diagnosing from Piecewise Definitions

For a piecewise function, check the boundary $x = a$:

- Compute $\\lim_{x \\to a^-} f(x)$ from the left piece.
- Compute $\\lim_{x \\to a^+} f(x)$ from the right piece.
- If they\'re finite but unequal → **jump discontinuity**.

**Worked example.** $f(x) = \\begin{cases} x + 1, & x < 0 \\\\ x^2 - 1, & x \\ge 0 \\end{cases}$

- Left limit at 0: $0 + 1 = 1$.
- Right limit at 0: $0 - 1 = -1$.
- Both finite, but $1 \\ne -1$ → **jump** at $x = 0$. Jump size: $|1 - (-1)| = 2$.
      `
    },
    {
      id: 'td2-graph',
      type: 'text' as const,
      content: `
## 👁️ Reading Jumps from Graphs

A jump shows as a vertical *gap* between two pieces, often with:

- An open circle (○) on one side (the value the function doesn\'t take), and
- A closed circle (●) on the other side (the value the function does take).

**Example sketch.** A graph that has a closed point at $(2, 1)$ and an open point at $(2, 4)$ with the curve continuing differently on each side has a jump of size $|4 - 1| = 3$ at $x = 2$.

> 💡 The closed circle is $f(2)$; the open circle is the value the function approaches from the other side.
      `
    },
    {
      id: 'td2-mc',
      type: 'multiple-choice' as const,
      content: `**Jump Practice** 🎯`,
      exercise: {
        questions: [
          {
            question: 'For $f(x) = \\begin{cases} 2x, & x < 1 \\\\ x + 5, & x \\ge 1 \\end{cases}$, what happens at $x = 1$?',
            options: ['Continuous', 'Removable hole', 'Jump (size 4)', 'Vertical asymptote'],
            correctAnswer: 2,
            explanation: 'Left limit: $2$. Right limit: $6$. Different finite values → jump of size $|6 - 2| = 4$.'
          },
          {
            question: 'A jump discontinuity is removable.',
            options: ['True', 'False — left and right limits disagree, so no single value patches it'],
            correctAnswer: 1,
            explanation: 'Removable means the two-sided limit exists. For a jump, it doesn\'t.'
          },
          {
            question: 'Which is true at a jump discontinuity?',
            options: [
              'Two-sided limit exists',
              'Both one-sided limits are infinite',
              'Both one-sided limits are finite but unequal',
              'Function is continuous'
            ],
            correctAnswer: 2,
            explanation: 'Definition of jump: both finite, but unequal.'
          }
        ]
      }
    },
    {
      id: 'td2-input',
      type: 'input-boxes' as const,
      content: `**Compute Jump Sizes** 🧮

**1)** $f(x) = \\begin{cases} 3x, & x < 2 \\\\ x + 7, & x \\ge 2 \\end{cases}$ — jump size at $x = 2$?

**2)** $g(x) = \\begin{cases} x^2, & x < 1 \\\\ 5, & x \\ge 1 \\end{cases}$ — jump size at $x = 1$?
      `,
      exercise: {
        boxes: 2,
        correctAnswers: ['3', '4'],
        hint1: 'Left: $6$, right: $9$. $|9 - 6| = 3$.',
        hint2: 'Left: $1$, right: $5$. $|5 - 1| = 4$.',
        explanation: 'Jump size = $|$ right limit $-$ left limit $|$.'
      }
    }
  ]
}
