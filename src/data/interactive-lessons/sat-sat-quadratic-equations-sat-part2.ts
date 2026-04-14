export const satQuadraticsPart2Data = {
  topicSlug: 'sat-quadratic-equations-sat',
  sections: [
    {
      id: 'qe2-intro',
      type: 'text' as const,
      content: `# Quadratic Equations

**Part 2 of 7 — The Quadratic Formula & Discriminant**

### The Quadratic Formula

For $ax^2 + bx + c = 0$:

$$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$

Use this when factoring is difficult or impossible.

### The Discriminant: $\\Delta = b^2 - 4ac$

| Discriminant | # Solutions | Graph |
|-------------|------------|-------|
| $\\Delta > 0$ | 2 real solutions | Parabola crosses x-axis twice |
| $\\Delta = 0$ | 1 real solution (double root) | Parabola touches x-axis |
| $\\Delta < 0$ | 0 real solutions | Parabola doesn't touch x-axis |

---

### Worked Example 1

**Solve $3x^2 - 5x + 1 = 0$ using the quadratic formula.**

| Step | Work |
|------|------|
| Identify $a, b, c$ | $a = 3$, $b = -5$, $c = 1$ |
| Discriminant | $(-5)^2 - 4(3)(1) = 25 - 12 = 13$ |
| Apply formula | $x = \\frac{5 \\pm \\sqrt{13}}{6}$ |
| Approximate | $x \\approx 1.43$ or $x \\approx 0.23$ |

### SAT Favorite Question Type 🎯

"For what values of $k$ does $x^2 + kx + 9 = 0$ have exactly one real solution?"

Set discriminant = 0: $k^2 - 4(1)(9) = 0$ → $k^2 = 36$ → $k = \\pm 6$`
    },
    {
      id: 'qe2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Quadratic Formula & Discriminant** 🎯',
      exercise: {
        questions: [
          {
            question: 'How many real solutions does $2x^2 + 3x + 5 = 0$ have?',
            options: ['$0$', '$1$', '$2$', 'Cannot be determined'],
            correctAnswer: 0,
            explanation: '$\\Delta = 9 - 40 = -31 < 0$. Negative discriminant means no real solutions.'
          },
          {
            question: 'Using the quadratic formula, what are the solutions to $x^2 - 6x + 5 = 0$?',
            options: ['$x = 1$ and $x = 5$', '$x = -1$ and $x = -5$', '$x = 2$ and $x = 3$', '$x = -2$ and $x = 3$'],
            correctAnswer: 0,
            explanation: '$x = (6 \\pm \\sqrt{36 - 20})/2 = (6 \\pm 4)/2$. So $x = 5$ or $x = 1$. (Note: factoring $(x-1)(x-5)$ is faster here!)'
          },
          {
            question: 'For what value of $c$ does $x^2 + 8x + c = 0$ have exactly one solution?',
            options: ['$16$', '$8$', '$64$', '$4$'],
            correctAnswer: 0,
            explanation: 'One solution means $\\Delta = 0$: $64 - 4c = 0$ → $c = 16$. The equation becomes $(x + 4)^2 = 0$.'
          }
        ]
      }
    },
    {
      id: 'qe2-text2',
      type: 'text' as const,
      content: `### When to Use Factoring vs. Quadratic Formula

| Situation | Best Method | Why |
|-----------|------------|-----|
| Simple integers | Factoring | Faster, less error-prone |
| $a \\neq 1$, messy numbers | Quadratic formula | Guaranteed to work |
| "How many solutions?" | Discriminant only | Don't need to solve |
| Non-real answers | Quadratic formula | Factoring won't work |

### Worked Example 2

**Does $5x^2 + 3x + 2 = 0$ have real solutions? If yes, find them.**

| Step | Work |
|------|------|
| Discriminant | $3^2 - 4(5)(2) = 9 - 40 = -31$ |
| Conclusion | $\\Delta < 0$ → no real solutions |
| Done | No need to apply the formula! |

### Worked Example 3

**For what value of $k$ does $kx^2 + 12x + 4 = 0$ have exactly one solution?**

| Step | Work |
|------|------|
| Set $\\Delta = 0$ | $12^2 - 4(k)(4) = 0$ |
| Solve | $144 - 16k = 0$ → $k = 9$ |
| Verify | $9x^2 + 12x + 4 = (3x + 2)^2 = 0$ → $x = -2/3$ ✓ |

> **SAT Tip:** Whenever the SAT says "exactly one solution," "one repeated root," or "tangent to the x-axis," set the discriminant to zero.`
    },
    {
      id: 'qe2-quiz2',
      type: 'multiple-choice' as const,
      content: '**Discriminant Deep Dive** 🎯',
      exercise: {
        questions: [
          {
            question: 'The equation $x^2 - 6x + k = 0$ has two distinct real solutions. Which could be $k$?',
            options: ['$5$', '$9$', '$10$', '$12$'],
            correctAnswer: 0,
            explanation: 'Two distinct real solutions: $\\Delta > 0$. $36 - 4k > 0$ → $k < 9$. Only $k = 5$ satisfies this.'
          },
          {
            question: 'If $2x^2 + bx + 8 = 0$ has no real solutions, which is a possible value of $b$?',
            options: ['$6$', '$8$', '$-8$', '$10$'],
            correctAnswer: 0,
            explanation: 'No real solutions: $b^2 - 64 < 0$ → $b^2 < 64$ → $-8 < b < 8$. Only $b = 6$ is in this range.'
          },
          {
            question: 'What is the sum of the solutions of $x^2 - 10x + 21 = 0$?',
            options: ['$10$', '$21$', '$-10$', '$7$'],
            correctAnswer: 0,
            explanation: 'Sum of solutions $= -b/a = -(-10)/1 = 10$. No need to factor! (Though: $(x-3)(x-7) = 0$ → $3+7=10$ confirms it.)'
          }
        ]
      }
    },
    {
      id: 'qe2-dropdown',
      type: 'dropdown-select' as const,
      content: '**Choose the Best Method** 🔍\n\nFor each equation, select the most efficient solving approach.',
      exercise: {
        dropdowns: [
          { label: '$x^2 - 9 = 0$', options: ['Factoring (difference of squares)', 'Quadratic formula', 'Completing the square', 'Graphing'] },
          { label: '$3x^2 + 2x - 7 = 0$', options: ['Factoring', 'Quadratic formula', 'Completing the square', 'Graphing'] },
          { label: '$x^2 + 6x + 9 = 0$', options: ['Factoring (perfect square)', 'Quadratic formula', 'Completing the square', 'Graphing'] },
          { label: '"How many real solutions does $x^2 + 4x + 5 = 0$ have?"', options: ['Factoring', 'Quadratic formula', 'Discriminant only', 'Graphing'] }
        ],
        correctAnswers: ['Factoring (difference of squares)', 'Quadratic formula', 'Factoring (perfect square)', 'Discriminant only'],
        hint1: '$x^2 - 9 = (x+3)(x-3)$ — instant.',
        hint2: '$3x^2 + 2x - 7$: no obvious factoring, use the formula.',
        hint3: 'When the question only asks "how many" — the discriminant is enough.',
        explanation: '$x^2 - 9$: instant factoring. $3x^2 + 2x - 7$: messy coefficients → formula. $x^2 + 6x + 9 = (x+3)^2$: perfect square. "How many solutions?": just compute $\\Delta = 16 - 20 = -4 < 0$ → zero.'
      }
    },
    {
      id: 'qe2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

| Tool | What It Tells You |
|------|------------------|
| Quadratic formula | The exact values of the solutions |
| Discriminant ($\\Delta$) | How many real solutions (0, 1, or 2) |
| Sum of roots ($-b/a$) | Total of solutions without solving |
| Product of roots ($c/a$) | Product of solutions without solving |

- Quadratic formula: memorize it — it works for ALL quadratics
- $\\Delta > 0$: 2 solutions, $\\Delta = 0$: 1 solution, $\\Delta < 0$: 0 real solutions
- "Exactly one solution" → set discriminant equal to 0
- Factoring is faster when it works — always try it first`
    }
  ]
};
