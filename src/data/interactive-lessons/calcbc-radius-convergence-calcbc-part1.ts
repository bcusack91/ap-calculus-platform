export const calcbcRadConvPart1Data = {
  topicSlug: 'radius-convergence-calcbc',
  sections: [
    {
      id: 'radiusconvergence-p1-intro',
      type: 'text' as const,
      content: `# 📏 Radius & Interval of Convergence

**Part 1 of 7 — Radius of Convergence**

---

### Power Series

A power series centered at $a$:

$$\\\\sum_{n=0}^{\\\\infty} c_n(x-a)^n$$

### Radius of Convergence

Every power series has a **radius of convergence** $R$ such that:
- Series converges absolutely for $|x - a| < R$
- Series diverges for $|x - a| > R$
- May converge or diverge at $|x - a| = R$ (endpoints)

### Finding $R$ Using the Ratio Test

$$R = \\\\lim_{n \\\\to \\\\infty} \\\\left|\\\\frac{c_n}{c_{n+1}}\\\\right| \\\\quad \\\\text{or} \\\\quad \\\\frac{1}{R} = \\\\lim_{n \\\\to \\\\infty} \\\\left|\\\\frac{c_{n+1}}{c_n}\\\\right|$$

---

### Worked Example

$$\\\\sum_{n=0}^{\\\\infty} \\\\frac{x^n}{n!}$$

$$\\\\frac{1}{R} = \\\\lim \\\\frac{|c_{n+1}|}{|c_n|} = \\\\lim \\\\frac{1/(n+1)!}{1/n!} = \\\\lim \\\\frac{1}{n+1} = 0$$

So $R = \\\\infty$. This series converges for all $x$! (It’s $e^x$.)`
    },    {
      id: 'radiusconvergence-p1-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** \U0001f3af
      `,
      exercise: {
        questions: [
          {
            question: 'A power series with $R = 5$ centered at $a = 2$ converges for:',
            options: ['$-5 < x < 5$', '$-3 < x < 7$', '$2 < x < 7$', '$-3 < x < 3$'],
            correctAnswer: 1,
            explanation: '$|x - 2| < 5$ means $-3 < x < 7$. Endpoints need separate check.'
          },
          {
            question: 'If the Ratio Test gives $L = |x|/3$, then $R = ?$',
            options: ['1/3', '3', '$|x|$', '0'],
            correctAnswer: 1,
            explanation: 'Converges when $|x|/3 < 1$, i.e., $|x| < 3$. So $R = 3$.'
          },
          {
            question: 'A power series with $R = 0$:',
            options: ['Converges everywhere', 'Converges only at the center', 'Diverges everywhere', 'Has no center'],
            correctAnswer: 1,
            explanation: '$R = 0$ means the series only converges at $x = a$ itself.'
          }
        ]
      }
    },    {
      id: 'radiusconvergence-p1-input',
      type: 'input-boxes' as const,
      content: `
**Finding R** 🧮

$\\\\sum_{n=0}^{\\\\infty} \\\\frac{(x-3)^n}{2^n}$

**1)** What is the center $a$?

**2)** What is $R$?

**3)** Open interval of convergence? (write as e.g., 1 < x < 5)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['3', '2', '1 < x < 5'],
        hint1: '$(x - a)^n$ form',
        hint2: 'Ratio: $|x-3|/2 < 1$',
        hint3: '$|x-3| < 2$ means $1 < x < 5$',
        explanation: '1) $a = 3$. 2) $R = 2$ (geometric with ratio $(x-3)/2$). 3) $1 < x < 5$.'
      }
    }
  ]
};
