export const satLinearEquationsPart7Data = {
  topicSlug: 'sat-linear-equations-sat',
  sections: [
    {
      id: 'sat-l7-intro',
      type: 'text' as const,
      content: `
# 🎯 Review & Mixed Practice

**Part 7 of 7 — Putting It All Together**

You've learned all the building blocks:
- One-step and two-step equations
- Multi-step equations with distribution and combining
- Inequalities (with sign-flipping)
- Systems of equations (substitution & elimination)
- Word problem modeling and SAT strategies

Now it's time for **mixed practice** — just like on the real SAT, where you won't be told which technique to use. Let's go!
      `
    },
    {
      id: 'sat-l7-warmup',
      type: 'input-boxes' as const,
      content: `
**Warm-Up: Solve for $x$.** 🧮

1) $7x - 3 = 4x + 15$

2) $\\frac{2x + 1}{3} = 5$

3) $-2(x - 4) + 3x = 14$
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['6', '7', '6'],
        hint1: 'For #1: Move variable terms to one side. Subtract $4x$ from both sides.',
        hint2: 'For #2: Multiply both sides by 3 first to clear the fraction.',
        hint3: 'For #3: Distribute the $-2$ first: $-2x + 8 + 3x = 14$. Then combine like terms.',
        explanation: '1) $3x = 18 \\Rightarrow x = 6$. 2) $2x + 1 = 15 \\Rightarrow 2x = 14 \\Rightarrow x = 7$. 3) $x + 8 = 14 \\Rightarrow x = 6$.'
      }
    },
    {
      id: 'sat-l7-mixed1',
      type: 'multiple-choice' as const,
      content: `
**Mixed SAT Practice** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'If $\\frac{x}{3} + \\frac{x}{6} = 5$, what is the value of $x$?',
            options: [
              '$6$',
              '$8$',
              '$10$',
              '$15$'
            ],
            correctAnswer: 2,
            explanation: 'Multiply everything by 6 (the LCD): $2x + x = 30$. So $3x = 30$, meaning $x = 10$.'
          },
          {
            question: 'The perimeter of a rectangle is 42 cm. If the length is 3 cm more than twice the width, what is the width?',
            options: [
              '$6$ cm',
              '$7$ cm',
              '$8$ cm',
              '$9$ cm'
            ],
            correctAnswer: 0,
            explanation: 'Let width $= w$, length $= 2w + 3$. Perimeter $= 2(w + 2w + 3) = 42$. Simplify: $2(3w + 3) = 42 \\Rightarrow 6w + 6 = 42 \\Rightarrow 6w = 36 \\Rightarrow w = 6$ cm.'
          }
        ]
      }
    },
    {
      id: 'sat-l7-systems-practice',
      type: 'input-boxes' as const,
      content: `
**Systems Practice** 🧮

Solve each system. Enter the value of $x$.

1) $x + y = 15$ and $y = 2x$

2) $3x + 2y = 19$ and $x - 2y = -3$
      `,
      exercise: {
        boxes: 2,
        correctAnswers: ['5', '4'],
        hint1: 'For #1: Substitute $y = 2x$ into the first equation: $x + 2x = 15$.',
        hint2: 'For #2: Add the two equations to eliminate $y$: $(3x + 2y) + (x - 2y) = 19 + (-3)$.',
        explanation: '1) $3x = 15 \\Rightarrow x = 5$, $y = 10$. 2) $4x = 16 \\Rightarrow x = 4$, $y = 3.5$.'
      }
    },
    {
      id: 'sat-l7-mixed2',
      type: 'multiple-choice' as const,
      content: `
**More SAT-Style Practice** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'If $2(3x - 1) = 4x + 10$, what is the value of $x + 5$?',
            options: [
              '$8$',
              '$11$',
              '$13$',
              '$16$'
            ],
            correctAnswer: 1,
            explanation: 'Distribute: $6x - 2 = 4x + 10$. Subtract $4x$: $2x - 2 = 10$. Add 2: $2x = 12$. So $x = 6$. The question asks for $x + 5 = 6 + 5 = 11$.'
          },
          {
            question: 'A number decreased by 20% of itself equals 36. What is the number?',
            options: [
              '$40$',
              '$42$',
              '$45$',
              '$48$'
            ],
            correctAnswer: 2,
            explanation: '$x - 0.20x = 36 \\Rightarrow 0.80x = 36 \\Rightarrow x = 45$. Check: $45 - 9 = 36$ ✓.'
          },
          {
            question: 'Which value of $x$ does NOT satisfy $-3 \\leq 2x - 1 < 7$?',
            options: [
              '$x = -1$',
              '$x = 0$',
              '$x = 3$',
              '$x = 4$'
            ],
            correctAnswer: 3,
            explanation: 'Add 1: $-2 \\leq 2x < 8$. Divide by 2: $-1 \\leq x < 4$. So $x$ can be $-1, 0, 3$ but NOT $4$ (since $x < 4$ is strict).'
          }
        ]
      }
    },
    {
      id: 'sat-l7-cheat-sheet',
      type: 'text' as const,
      content: `
**Quick Reference — SAT Linear Equations Cheat Sheet** 📝

| Technique | When to Use |
|-----------|-------------|
| One/Two-step solving | Simple $ax + b = c$ equations |
| Distribute & combine | Parentheses or like terms present |
| Clear fractions (multiply by LCD) | Equation has fractions |
| Flip inequality sign | Multiply/divide by a **negative** |
| Substitution | One variable is already isolated |
| Elimination | Same variable on both equations, easy coefficients |
| Backsolving | Stuck on setup — try answer choices |
| Pick numbers | Variables in answer choices |

**Remember:** The SAT isn't testing how fast you can compute — it's testing whether you can **choose the right approach**. Read carefully, set up correctly, and check your work!
      `
    }
  ]
}
