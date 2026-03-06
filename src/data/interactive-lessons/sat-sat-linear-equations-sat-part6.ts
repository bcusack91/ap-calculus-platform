export const satLinearEquationsPart6Data = {
  topicSlug: 'sat-linear-equations-sat',
  sections: [
    {
      id: 'le6-intro',
      type: 'text' as const,
      content: `# Linear Equations & Inequalities

**Part 6 of 7 — Absolute Value and Literal Equations**

### Absolute Value Equations

$|ax + b| = c$ splits into two cases (when $c \\geq 0$):

$$ax + b = c \\quad \\text{or} \\quad ax + b = -c$$

**Example:** $|2x - 3| = 7$
- Case 1: $2x - 3 = 7$ → $x = 5$
- Case 2: $2x - 3 = -7$ → $x = -2$

⚠️ If $|ax + b| = -k$ where $k > 0$: **no solution** (absolute value is never negative).

### Absolute Value Inequalities

- $|x| < a$: $-a < x < a$ (AND — between)
- $|x| > a$: $x < -a$ or $x > a$ (OR — outside)

### Literal Equations (Solving for a Variable)

The SAT often asks you to rearrange a formula.

**Example:** Solve $A = \\frac{1}{2}bh$ for $h$:
$$h = \\frac{2A}{b}$$

**Example:** Solve $F = \\frac{9}{5}C + 32$ for $C$:
$$C = \\frac{5(F - 32)}{9}$$

### SAT Strategy 💡

For literal equations, treat every other variable as a number and solve normally. The algebra is the same — just letters instead of digits.`
    },
    {
      id: 'le6-quiz1',
      type: 'multiple-choice' as const,
      content: '**Absolute Value & Literal Equations** 🎯',
      exercise: {
        questions: [
          {
            question: 'How many solutions does $|3x + 1| = -5$ have?',
            options: ['$0$', '$1$', '$2$', 'Infinitely many'],
            correctAnswer: 0,
            explanation: 'Absolute value can never equal a negative number. There are zero solutions.'
          },
          {
            question: 'If $|x - 4| < 3$, which values of $x$ are in the solution set?',
            options: ['$1 < x < 7$', '$x < 1 \\text{ or } x > 7$', '$-3 < x < 3$', '$x < -7 \\text{ or } x > 1$'],
            correctAnswer: 0,
            explanation: '$|x - 4| < 3$ means $-3 < x - 4 < 3$, so $1 < x < 7$. The "less than" case gives a compound inequality (between).'
          },
          {
            question: 'If $P = 2l + 2w$, what is $w$ in terms of $P$ and $l$?',
            options: ['$w = \\frac{P - 2l}{2}$', '$w = P - 2l$', '$w = \\frac{P}{2} - l$', 'Both A and C'],
            correctAnswer: 3,
            explanation: '$2w = P - 2l$ → $w = (P - 2l)/2 = P/2 - l$. Both forms are equivalent, so both A and C are correct.'
          }
        ]
      }
    },
    {
      id: 'le6-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 6

- $|expr| = c$ → two cases: $expr = c$ or $expr = -c$
- $|expr| = \\text{negative}$ → **no solution**
- $|expr| < c$ → compound inequality (between): $-c < expr < c$
- $|expr| > c$ → two separate inequalities (outside): $expr < -c$ or $expr > c$
- Literal equations: isolate the target variable using normal algebra steps`
    }
  ]
};
