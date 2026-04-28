export const calcabContinuityIntroPart3Data = {
  topicSlug: 'continuity-introduction',
  sections: [
    {
      id: 'ci3-intro',
      type: 'text' as const,
      content: `# 🧩 Continuity for Piecewise Functions

**Part 3 of 4 — Make the pieces match up**

---

### Topics in This Part

| Section |
|---------|
| The Boundary Test |
| 🔑 Solving for an Unknown Constant |
| Worked Examples |

> 🔑 **Why this matters:** AP loves to ask "what value of $k$ makes this piecewise function continuous?" — a routine application of the three-condition test.`
    },
    {
      id: 'ci3-bound',
      type: 'text' as const,
      content: `
## 📍 The Boundary Test

For a piecewise function defined as

$$f(x) = \\begin{cases} g(x), & x < a \\\\ h(x), & x \\ge a \\end{cases}$$

to be continuous at the boundary $x = a$, we need:

$$\\lim_{x \\to a^-} g(x) \\;=\\; \\lim_{x \\to a^+} h(x) \\;=\\; f(a) = h(a).$$

In words: **left piece and right piece must meet at the same value at $a$.**

> 💡 Inside each piece (away from the boundary), the function is just $g$ or $h$ — already continuous if those are continuous.
      `
    },
    {
      id: 'ci3-solvek',
      type: 'text' as const,
      content: `
## 🔑 Solving for an Unknown Constant

Classic AP setup: find the value of $k$ that makes $f$ continuous.

**Worked example.** Find $k$ such that
$$f(x) = \\begin{cases} x^2 + 1, & x \\le 2 \\\\ kx + 3, & x > 2 \\end{cases}$$
is continuous at $x = 2$.

- Left piece at $x = 2$: $4 + 1 = 5$.
- Right piece limit at $x = 2$: $2k + 3$.
- Set equal: $2k + 3 = 5 \\Rightarrow k = 1$.

**Answer: $k = 1$**.
      `
    },
    {
      id: 'ci3-2unknowns',
      type: 'text' as const,
      content: `
## 🎯 Two Unknowns

Sometimes both pieces have an unknown — then you need a system.

**Example.** Find $a, b$ so that
$$f(x) = \\begin{cases} ax + b, & x < 1 \\\\ x^2, & 1 \\le x \\le 2 \\\\ 4x + a, & x > 2 \\end{cases}$$
is continuous everywhere.

- At $x = 1$: $a(1) + b = 1^2 \\Rightarrow a + b = 1$.
- At $x = 2$: $2^2 = 4(2) + a \\Rightarrow 4 = 8 + a \\Rightarrow a = -4$.
- From the first equation: $b = 5$.

**Answer:** $a = -4$, $b = 5$.
      `
    },
    {
      id: 'ci3-mc',
      type: 'multiple-choice' as const,
      content: `**Boundary Practice** 🎯`,
      exercise: {
        questions: [
          {
            question: 'For $f(x) = \\begin{cases} 2x + 1, & x \\le 3 \\\\ x^2 + k, & x > 3 \\end{cases}$, what value of $k$ makes $f$ continuous at $x = 3$?',
            options: ['$k = -2$', '$k = 0$', '$k = 7$', '$k = 16$'],
            correctAnswer: 0,
            explanation: 'Left at 3: $7$. Right limit: $9 + k$. Set $9 + k = 7 \\Rightarrow k = -2$.'
          },
          {
            question: 'For $f(x) = \\begin{cases} x + a, & x < 0 \\\\ \\cos x, & x \\ge 0 \\end{cases}$, what value of $a$ makes $f$ continuous at $x = 0$?',
            options: ['$0$', '$1$', '$-1$', 'No such value'],
            correctAnswer: 1,
            explanation: 'Left limit: $0 + a = a$. Right value: $\\cos 0 = 1$. Set $a = 1$.'
          }
        ]
      }
    },
    {
      id: 'ci3-input',
      type: 'input-boxes' as const,
      content: `**Solve** 🧮

**1)** For $f(x) = \\begin{cases} 3x - 1, & x \\le 4 \\\\ x^2 + k, & x > 4 \\end{cases}$, find $k$.

**2)** For $g(x) = \\begin{cases} ax + 5, & x < 2 \\\\ x^3, & x \\ge 2 \\end{cases}$, find $a$.
      `,
      exercise: {
        boxes: 2,
        correctAnswers: ['-5', '3/2'],
        hint1: 'Left at 4: $11$. Right limit: $16 + k$. Set $16 + k = 11$.',
        hint2: 'Left limit: $2a + 5$. Right at 2: $8$. Set $2a + 5 = 8 \\Rightarrow a = 3/2 = 1.5$.',
        explanation: 'Match left limit to right value (or vice versa) at the boundary.'
      }
    }
  ]
}
