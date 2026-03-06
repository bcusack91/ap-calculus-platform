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

### SAT Strategy

Always check. The SAT specifically designs problems where one solution is extraneous to trap students.`
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
      id: 'er5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

- Isolate the radical, then raise both sides to the appropriate power
- **Always check** for extraneous solutions — this is a guaranteed SAT trap
- $\\sqrt{x}$ is never negative (principal root)
- If you get two solutions after squaring, one may be extraneous`
    }
  ]
};
