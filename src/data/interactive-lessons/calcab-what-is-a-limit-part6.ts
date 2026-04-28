export const calcabWhatIsALimitPart6Data = {
  topicSlug: 'what-is-a-limit',
  sections: [
    {
      id: 'wal6-intro',
      type: 'text' as const,
      content: `# 🛠️ Problem-Solving Workshop

**Part 6 of 7 — Putting it all together**

---

### Topics in This Part

| Section |
|---------|
| Workshop 1 — Numerical Estimation |
| Workshop 2 — Piecewise Function |
| Workshop 3 — Limit + Value Comparison |
| 🔑 Strategies Recap |

> 🔑 **Why this matters:** Now we string together everything from Parts 1–5 into worked AP-style problems. Each example walks through a typical exam scenario.`
    },
    {
      id: 'wal6-w1',
      type: 'text' as const,
      content: `
## 🧪 Workshop 1 — Numerical Estimation

> **Problem.** Use a table of values to estimate $\\displaystyle \\lim_{x \\to 2} \\frac{x^3 - 8}{x - 2}$.

**Plan.** Plug in values approaching 2 from both sides.

| $x$ | $f(x) = (x^3 - 8)/(x - 2)$ |
|----:|---------------------------:|
| 1.9 | 11.41 |
| 1.99 | 11.9401 |
| 1.999 | 11.994001 |
| 2.001 | 12.006001 |
| 2.01 | 12.0601 |
| 2.1 | 12.61 |

**Reading the trend:** values approach **12** from both sides.

**Sanity check via factoring:** $x^3 - 8 = (x-2)(x^2 + 2x + 4)$, so $\\dfrac{x^3-8}{x-2} = x^2 + 2x + 4$ for $x \\ne 2$. Plugging in $x = 2$: $4 + 4 + 4 = 12$. ✅

$$\\boxed{\\lim_{x \\to 2} \\frac{x^3 - 8}{x - 2} = 12}$$
      `
    },
    {
      id: 'wal6-w2',
      type: 'text' as const,
      content: `
## 🔀 Workshop 2 — Piecewise

> **Problem.** Let $g(x) = \\begin{cases} x^2 + 1 & x < 0 \\\\ 2 & x = 0 \\\\ \\cos x & x > 0 \\end{cases}$. Find (a) $\\lim_{x \\to 0^-} g(x)$, (b) $\\lim_{x \\to 0^+} g(x)$, (c) $\\lim_{x \\to 0} g(x)$, (d) $g(0)$. Is $g$ continuous at 0?

**(a)** Use the top piece: $\\lim_{x \\to 0^-} (x^2 + 1) = 0 + 1 = 1$.

**(b)** Use the bottom piece: $\\lim_{x \\to 0^+} \\cos x = \\cos 0 = 1$.

**(c)** Both one-sided limits equal 1, so $\\lim_{x \\to 0} g(x) = 1$.

**(d)** From the middle case, $g(0) = 2$.

**Continuity?** $\\lim_{x \\to 0} g(x) = 1$ but $g(0) = 2$. The limit and value disagree → $g$ is **discontinuous** at 0. (Specifically a *removable* discontinuity — redefining $g(0) = 1$ would patch it.)
      `
    },
    {
      id: 'wal6-w3',
      type: 'text' as const,
      content: `
## 🎯 Workshop 3 — Limit vs. Value

> **Problem.** Suppose a graph of $h$ has the following features at $x = 4$:
> - The curve approaches $y = 6$ from the left.
> - The curve approaches $y = 6$ from the right.
> - There is an OPEN circle at $(4, 6)$.
> - There is a SOLID dot at $(4, -2)$.
>
> Find $\\lim_{x \\to 4} h(x)$ and $h(4)$. Is $h$ continuous at 4?

**Limit:** Both one-sided limits = 6, so $\\lim_{x \\to 4} h(x) = 6$.

**Value:** The solid dot tells us $h(4) = -2$.

**Continuity:** Limit (6) $\\ne$ value ($-2$), so $h$ is **discontinuous** at 4. This is again a *removable* discontinuity, often called a "jump from the limit value to a stray point."

> 💡 The open circle at $(4, 6)$ marks where the limit "wants" the function to be; the solid dot at $(4, -2)$ marks where the function actually is.
      `
    },
    {
      id: 'wal6-recap',
      type: 'text' as const,
      content: `
## 🔑 Strategies Recap

| Situation | Strategy |
|-----------|----------|
| Plain rational, $f(a)$ defined | Direct substitution |
| Get $0/0$ when plugging in | Algebraic simplification (factor / rationalize / common denominator) — Parts 6–8 of Unit 1 |
| Piecewise / absolute value | Compute each one-sided limit separately, compare |
| Looks like a graph problem | Trace from each side; compare to dot at $f(a)$ |
| Numerical / table problem | Build a small table of $x$-values approaching $a$ from both sides |

> 🎯 **Heuristic:** Whenever a problem says "does the limit exist," your default response should be "let me check the two one-sided limits."
      `
    },
    {
      id: 'wal6-mc',
      type: 'multiple-choice' as const,
      content: `
**Workshop Synthesis** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A function $f$ has $\\lim_{x \\to 5} f(x) = 8$ and $f(5) = 8$. The function is:',
            options: [
              'discontinuous at 5 (removable hole)',
              'discontinuous at 5 (jump)',
              'continuous at 5',
              'undefined at 5'
            ],
            correctAnswer: 2,
            explanation: 'Limit equals function value (and the function is defined) — this is exactly the definition of continuity at 5.'
          },
          {
            question: 'A piecewise function has $\\lim_{x\\to a^-} f(x) = 3$ and $\\lim_{x\\to a^+} f(x) = 3$, but $f(a) = 7$. The discontinuity is:',
            options: ['continuous', 'jump', 'removable', 'asymptotic'],
            correctAnswer: 2,
            explanation: 'Both one-sided limits agree at 3, so the limit exists — but $f(a) = 7 \\ne 3$. Redefining $f(a) = 3$ would patch it. That\'s a removable discontinuity.'
          },
          {
            question: 'For $f(x) = (x^2 - 25)/(x - 5)$, what is $\\lim_{x \\to 5} f(x)$?',
            options: ['0', '5', '10', 'DNE'],
            correctAnswer: 2,
            explanation: 'Factor: $(x-5)(x+5)/(x-5) = x + 5$ for $x \\ne 5$. Limit as $x \\to 5$: $5 + 5 = 10$. (Even though $f(5)$ is the indeterminate $0/0$.)'
          }
        ]
      }
    },
    {
      id: 'wal6-input',
      type: 'input-boxes' as const,
      content: `
**End-to-End Workshop** 🧮

Let $f(x) = \\begin{cases} 3x - 5 & x < 2 \\\\ 8 & x = 2 \\\\ x^2 - 3 & x > 2 \\end{cases}$.

**1)** $\\lim_{x \\to 2^-} f(x) = ?$

**2)** $\\lim_{x \\to 2^+} f(x) = ?$

**3)** $\\lim_{x \\to 2} f(x) = ?$ (number or \`DNE\`)

**4)** $f(2) = ?$

**5)** Is $f$ continuous at 2? (\`yes\` or \`no\`)
      `,
      exercise: {
        boxes: 5,
        correctAnswers: ['1', '1', '1', '8', 'no'],
        hint1: 'Plug 2 into the top piece $3x - 5$.',
        hint2: 'Plug 2 into the bottom piece $x^2 - 3$.',
        hint3: 'Both one-sided limits equal 1, so the two-sided limit exists. But $f(2)$ is given as 8 in the middle case. Limit ≠ value → not continuous.',
        explanation: 'Left: $3(2) - 5 = 1$. Right: $4 - 3 = 1$. Both agree, so $\\lim_{x\\to 2} f(x) = 1$. But $f(2) = 8$ (middle case). Limit (1) $\\ne$ value (8), so $f$ is discontinuous at 2 — a removable discontinuity.'
      }
    },
    {
      id: 'wal6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Strategy Picker** 🔽

For each limit, what is the BEST first move?
      `,
      exercise: {
        dropdowns: [
          { label: '$\\lim_{x \\to 7} (x^2 - 1)$', options: ['direct substitution', 'factor and cancel', 'rationalize', 'check one-sided limits'] },
          { label: '$\\lim_{x \\to 3} \\dfrac{x^2 - 9}{x - 3}$ (gives $0/0$)', options: ['direct substitution', 'factor and cancel', 'rationalize', 'check one-sided limits'] },
          { label: '$\\lim_{x \\to 2} f(x)$ for a piecewise function', options: ['direct substitution', 'factor and cancel', 'rationalize', 'check one-sided limits'] },
        ],
        correctAnswers: ['direct substitution', 'factor and cancel', 'check one-sided limits'],
        hint1: 'Polynomials are continuous everywhere, so just plug in.',
        hint2: '$0/0$ with a numerator that factors → cancel the common factor.',
        hint3: 'Piecewise functions can have different formulas on each side of the seam.',
        explanation: 'Polynomials → direct substitution. $0/0$ from a factorable expression → factor and cancel. Piecewise → always compute each one-sided limit using the appropriate piece, then compare.'
      }
    },
    {
      id: 'wal6-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Check ✅**
      `,
      exercise: {
        questions: [
          {
            question: 'A table for $f(x)$ near $x = 4$ shows: $f(3.99) = 7.001$, $f(3.999) = 7.0001$, $f(4.001) = 7.0001$, $f(4.01) = 7.001$. The most likely value of $\\lim_{x \\to 4} f(x)$ is:',
            options: ['4', '7', '$\\infty$', 'DNE'],
            correctAnswer: 1,
            explanation: 'Both sides converge toward 7. The limit is approximately 7.'
          },
          {
            question: 'For $g(x) = (x - 4)/|x - 4|$, what is $\\lim_{x \\to 4} g(x)$?',
            options: ['$-1$', '$+1$', '$0$', 'DNE'],
            correctAnswer: 3,
            explanation: 'For $x < 4$: $g(x) = (x-4)/[-(x-4)] = -1$. For $x > 4$: $g(x) = +1$. The two one-sided limits disagree, so the two-sided limit DNE — a jump.'
          }
        ]
      }
    }
  ]
}
