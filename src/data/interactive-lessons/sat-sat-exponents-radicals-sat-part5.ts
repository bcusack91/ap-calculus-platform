export const satExponentsPart5Data = {
  topicSlug: 'sat-exponents-radicals-sat',
  sections: [
    {
      id: 'er5-intro',
      type: 'text' as const,
      content: `# Exponents & Radicals

**Part 5 of 7 — Radical Equations**

### Solving Radical Equations

1. **Isolate** the radical on one side
2. **Square** (or cube, etc.) both sides
3. **Solve** the resulting equation
4. **CHECK** for extraneous solutions!

**Example:** $\\sqrt{x + 3} = x - 3$

Square both sides: $x + 3 = (x - 3)^2 = x^2 - 6x + 9$

Rearrange: $x^2 - 7x + 6 = 0$ → $(x - 1)(x - 6) = 0$

Check $x = 1$: $\\sqrt{4} = 1 - 3 = -2$? No! $2 \\neq -2$ ❌ **Extraneous!**

Check $x = 6$: $\\sqrt{9} = 6 - 3 = 3$? Yes! ✓

### Why Extraneous Solutions Appear

Squaring both sides can introduce false solutions because $(-3)^2 = 3^2 = 9$. The squaring step "loses" the sign information.

---

### Worked Example 1

**Solve $\\sqrt{5x + 1} = x + 1$.**

| Step | Work |
|------|------|
| Square both sides | $5x + 1 = (x+1)^2 = x^2 + 2x + 1$ |
| Rearrange | $x^2 - 3x = 0$ |
| Factor | $x(x - 3) = 0$ → $x = 0$ or $x = 3$ |
| Check $x = 0$ | $\\sqrt{1} = 1$ and $0 + 1 = 1$ ✓ |
| Check $x = 3$ | $\\sqrt{16} = 4$ and $3 + 1 = 4$ ✓ |
| Both valid! | $x = 0$ and $x = 3$ |`
    },
    {
      id: 'er5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Radical Equations** 🎯',
      exercise: {
        questions: [
          {
            question: 'What is the solution to $\\sqrt{2x + 1} = 5$?',
            options: ['$x = 12$', '$x = 2$', '$x = 24$', '$x = 13$'],
            correctAnswer: 0,
            explanation: 'Square both sides: $2x + 1 = 25$ → $2x = 24$ → $x = 12$. Check: $\\sqrt{25} = 5$ ✓'
          },
          {
            question: 'How many real solutions does $\\sqrt{x} = -3$ have?',
            options: ['$0$', '$1$', '$2$', '$9$'],
            correctAnswer: 0,
            explanation: '$\\sqrt{x}$ (principal square root) is never negative. There is no solution.'
          },
          {
            question: '$\\sqrt{3x + 7} = x + 1$. The valid solution(s):',
            options: ['$x = 3$ only', '$x = -2$ and $x = 3$', '$x = -2$ only', 'No real solution'],
            correctAnswer: 0,
            explanation: 'Square: $3x + 7 = x^2 + 2x + 1$ → $x^2 - x - 6 = 0$ → $(x-3)(x+2) = 0$. Check $x = 3$: $\\sqrt{16} = 4 = 3+1$ ✓. Check $x = -2$: $\\sqrt{1} = 1$ but $-2 + 1 = -1$ ❌. Only $x = 3$.'
          }
        ]
      }
    },
    {
      id: 'er5-text2',
      type: 'text' as const,
      content: `### Equations with Two Radicals

When there are two radicals, isolate one, square, then isolate the other and square again.

### Worked Example 2

**Solve $\\sqrt{x + 5} - \\sqrt{x} = 1$.**

| Step | Work |
|------|------|
| Isolate one radical | $\\sqrt{x + 5} = 1 + \\sqrt{x}$ |
| Square both sides | $x + 5 = 1 + 2\\sqrt{x} + x$ |
| Simplify | $4 = 2\\sqrt{x}$ → $\\sqrt{x} = 2$ |
| Solve | $x = 4$ |
| Check | $\\sqrt{9} - \\sqrt{4} = 3 - 2 = 1$ ✓ |

### Cube Root Equations

No extraneous solutions with cube roots (cubing preserves sign).

### Worked Example 3

**Solve $\\sqrt[3]{2x - 1} = 3$.**

| Step | Work |
|------|------|
| Cube both sides | $2x - 1 = 27$ |
| Solve | $2x = 28$ → $x = 14$ |
| No check needed | Cubing doesn't introduce extraneous solutions |

> **SAT Tip:** The SAT will specifically design problems to test whether you check for extraneous solutions. Always substitute back into the **original** equation.`
    },
    {
      id: 'er5-quiz2',
      type: 'multiple-choice' as const,
      content: '**Trickier Radical Equations** 🎯',
      exercise: {
        questions: [
          {
            question: '$\\sqrt{x + 7} + 3 = x$. How many valid solutions?',
            options: ['$1$', '$0$', '$2$', '$3$'],
            correctAnswer: 0,
            explanation: 'Isolate: $\\sqrt{x+7} = x - 3$. Need $x \\geq 3$. Square: $x + 7 = x^2 - 6x + 9$ → $x^2 - 7x + 2 = 0$. Discriminant: $49 - 8 = 41$. Two algebraic solutions, but only one satisfies $x \\geq 3$.'
          },
          {
            question: '$\\sqrt[3]{x - 8} = -2$. What is $x$?',
            options: ['$0$', '$-8$', '$16$', '$4$'],
            correctAnswer: 0,
            explanation: 'Cube both sides: $x - 8 = -8$ → $x = 0$. Cube roots can equal negative numbers.'
          },
          {
            question: 'The equation $\\sqrt{ax + b} = cx + d$ will have extraneous solutions when:',
            options: ['The right side is negative at a proposed solution', 'The left side has no real value', 'Both sides equal zero', 'The equation has only one solution'],
            correctAnswer: 0,
            explanation: '$\\sqrt{}$ is always $\\geq 0$, so if $cx + d < 0$ at a proposed solution, that solution is extraneous.'
          }
        ]
      }
    },
    {
      id: 'er5-dropdown',
      type: 'dropdown-select' as const,
      content: '**Valid or Extraneous?** 🔍\n\nFor each solution, determine if it is valid.',
      exercise: {
        dropdowns: [
          { label: '$\\sqrt{x} = 4$, solution $x = 16$', options: ['Valid', 'Extraneous'] },
          { label: '$\\sqrt{x+1} = x - 1$, solution $x = 0$', options: ['Extraneous', 'Valid'] },
          { label: '$\\sqrt{x+1} = x - 1$, solution $x = 3$', options: ['Valid', 'Extraneous'] },
          { label: '$\\sqrt{x} = -5$, solution $x = 25$', options: ['Extraneous', 'Valid'] }
        ],
        correctAnswers: ['Valid', 'Extraneous', 'Valid', 'Extraneous'],
        hint1: '$\\sqrt{16} = 4$ ✓.',
        hint2: 'Check: $\\sqrt{0+1} = 1$ but $0 - 1 = -1$. Is $1 = -1$?',
        hint3: 'Check: $\\sqrt{3+1} = 2$ and $3 - 1 = 2$. Match!',
        explanation: '$x = 16$: $\\sqrt{16} = 4$ ✓. $x = 0$: $\\sqrt{1} = 1 \\neq -1$ ✗. $x = 3$: $\\sqrt{4} = 2 = 3-1$ ✓. $x = 25$: $\\sqrt{x}$ can\'t equal $-5$ ✗.'
      }
    },
    {
      id: 'er5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

| Step | Details |
|------|---------|
| 1. Isolate | Get the radical alone on one side |
| 2. Raise | Square (or cube) both sides |
| 3. Solve | Standard algebra from here |
| 4. Check | Substitute back — **always!** |

- $\\sqrt{x} \\geq 0$ always — if the other side is negative, the solution is extraneous
- Two radicals? Isolate one, square, isolate the other, square again
- Cube roots: no extraneous solutions (cubing preserves sign)`
    }
  ]
};
