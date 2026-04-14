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

---

### Worked Example 1

**Solve $|4x + 1| = 11$.**

| Step | Work |
|------|------|
| Case 1 | $4x + 1 = 11$ → $4x = 10$ → $x = 5/2$ |
| Case 2 | $4x + 1 = -11$ → $4x = -12$ → $x = -3$ |
| Solutions | $x = 5/2$ or $x = -3$ |
| Verify | $|4(5/2) + 1| = |11| = 11$ ✓, $|4(-3) + 1| = |-11| = 11$ ✓ |

### Worked Example 2

**Solve $|x - 5| \\leq 3$.**

| Step | Work |
|------|------|
| Set up compound | $-3 \\leq x - 5 \\leq 3$ |
| Add 5 | $2 \\leq x \\leq 8$ |
| In interval form | $[2, 8]$ |`
    },
    {
      id: 'le6-quiz1',
      type: 'multiple-choice' as const,
      content: '**Absolute Value** 🎯',
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
            question: 'What are the solutions to $|2x + 6| = 10$?',
            options: ['$x = 2$ and $x = -8$', '$x = 2$ and $x = 8$', '$x = -2$ and $x = 8$', '$x = 2$ only'],
            correctAnswer: 0,
            explanation: 'Case 1: $2x + 6 = 10$ → $x = 2$. Case 2: $2x + 6 = -10$ → $x = -8$. Two solutions.'
          }
        ]
      }
    },
    {
      id: 'le6-text2',
      type: 'text' as const,
      content: `### Literal Equations (Solving for a Variable)

The SAT often asks you to rearrange a formula. Treat every other variable as a number.

### Worked Example 3

**Solve $A = \\frac{1}{2}bh$ for $h$.**

| Step | Work |
|------|------|
| Multiply by 2 | $2A = bh$ |
| Divide by $b$ | $h = \\frac{2A}{b}$ |

### Worked Example 4

**Solve $\\frac{1}{R} = \\frac{1}{R_1} + \\frac{1}{R_2}$ for $R$.**

| Step | Work |
|------|------|
| Common denominator | $\\frac{1}{R} = \\frac{R_2 + R_1}{R_1 R_2}$ |
| Reciprocal | $R = \\frac{R_1 R_2}{R_1 + R_2}$ |

### Worked Example 5

**Solve $F = \\frac{9}{5}C + 32$ for $C$.**

| Step | Work |
|------|------|
| Subtract 32 | $F - 32 = \\frac{9}{5}C$ |
| Multiply by $\\frac{5}{9}$ | $C = \\frac{5(F - 32)}{9}$ |

> **SAT Strategy 💡:** For literal equations, treat every other variable as a number. The solving process is identical — just letters instead of digits.`
    },
    {
      id: 'le6-quiz2',
      type: 'multiple-choice' as const,
      content: '**Literal Equations** 🎯',
      exercise: {
        questions: [
          {
            question: 'If $P = 2l + 2w$, what is $w$ in terms of $P$ and $l$?',
            options: ['$w = \\frac{P - 2l}{2}$', '$w = P - 2l$', '$w = 2P - l$', '$w = \\frac{P}{2l}$'],
            correctAnswer: 0,
            explanation: '$2w = P - 2l$ → $w = (P - 2l)/2$. Note: this is also $w = P/2 - l$.'
          },
          {
            question: 'If $d = rt$, which correctly expresses $t$?',
            options: ['$t = \\frac{d}{r}$', '$t = dr$', '$t = d - r$', '$t = \\frac{r}{d}$'],
            correctAnswer: 0,
            explanation: 'Divide both sides by $r$: $t = d/r$. Distance = rate × time → time = distance ÷ rate.'
          },
          {
            question: 'If $\\frac{x}{a} + \\frac{y}{b} = 1$, what is $y$ in terms of $x$, $a$, and $b$?',
            options: ['$y = b - \\frac{bx}{a}$', '$y = b - \\frac{x}{a}$', '$y = 1 - \\frac{x}{a}$', '$y = \\frac{b}{a} - x$'],
            correctAnswer: 0,
            explanation: '$\\frac{y}{b} = 1 - \\frac{x}{a}$. Multiply by $b$: $y = b - \\frac{bx}{a} = b\\left(1 - \\frac{x}{a}\\right)$.'
          }
        ]
      }
    },
    {
      id: 'le6-dropdown',
      type: 'dropdown-select' as const,
      content: '**Absolute Value Solutions** 🔍\n\nFor each equation/inequality, select the number of solutions.',
      exercise: {
        dropdowns: [
          { label: '$|x + 2| = 7$', options: ['0 solutions', '1 solution', '2 solutions', 'Infinitely many'] },
          { label: '$|3x - 1| = -4$', options: ['0 solutions', '1 solution', '2 solutions', 'Infinitely many'] },
          { label: '$|x| = 0$', options: ['0 solutions', '1 solution', '2 solutions', 'Infinitely many'] },
          { label: '$|5x + 10| = 0$', options: ['0 solutions', '1 solution', '2 solutions', 'Infinitely many'] }
        ],
        correctAnswers: ['2 solutions', '0 solutions', '1 solution', '1 solution'],
        hint1: 'A positive right-hand side always gives 2 solutions.',
        hint2: 'Absolute value can never equal a negative number.',
        hint3: 'Absolute value equals 0 only when the expression inside is exactly 0.',
        explanation: '$|x+2| = 7$: positive → 2 solutions. $|3x-1| = -4$: negative → 0 solutions. $|x| = 0$: only $x = 0$ → 1 solution. $|5x+10| = 0$: only $x = -2$ → 1 solution.'
      }
    },
    {
      id: 'le6-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 6

| Absolute Value Scenario | Setup | Solution Type |
|------------------------|-------|---------------|
| $|expr| = c$ (c > 0) | Two cases | 2 solutions |
| $|expr| = 0$ | One case | 1 solution |
| $|expr| = -c$ (c > 0) | Impossible | No solution |
| $|expr| < c$ | Compound: $-c < expr < c$ | Interval (between) |
| $|expr| > c$ | Two parts: $expr < -c$ or $expr > c$ | Two rays (outside) |

- Literal equations: isolate the target variable using normal algebra steps
- Treat all other variables as constants when solving for one variable
- Always verify absolute value solutions by plugging back in`
    }
  ]
};
