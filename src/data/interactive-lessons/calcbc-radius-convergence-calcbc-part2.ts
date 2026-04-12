export const calcbcRadConvPart2Data = {
  topicSlug: 'radius-convergence-calcbc',
  sections: [
    {
      id: 'radiusconvergence-p2-intro',
      type: 'text' as const,
      content: `# 📐 Interval of Convergence

**Part 2 of 7 — Checking Endpoints**

---

### Steps to Find the Interval of Convergence

1. **Find $R$** using Ratio or Root Test
2. **Identify** the open interval $(a-R, a+R)$
3. **Check each endpoint** separately by substituting $x = a - R$ and $x = a + R$
4. **Include** endpoints where the series converges

### Endpoint Behavior

At endpoints, the power series often becomes:
- A **p-series** ($\\\\sum 1/n^p$)
- An **alternating series** ($\\\\sum (-1)^n/n^p$)
- The **harmonic series** ($\\\\sum 1/n$)

---

### Example: $\\\\sum \\\\frac{x^n}{n}$ (centered at 0)

$R = 1$ (by Ratio Test)

**At $x = 1$:** $\\\\sum 1/n$ = harmonic series → **diverges**
**At $x = -1$:** $\\\\sum (-1)^n/n$ = alternating harmonic → **converges**

Interval of convergence: $[-1, 1)$`
    },    {
      id: 'radiusconvergence-p2-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** \U0001f3af
      `,
      exercise: {
        questions: [
          {
            question: 'After finding $R$, you must always:',
            options: ['Assume endpoints diverge', 'Check endpoints separately', 'Include both endpoints', 'Exclude both endpoints'],
            correctAnswer: 1,
            explanation: 'Endpoints require individual testing — they can go either way.'
          },
          {
            question: '$\\\\sum \\\\frac{x^n}{n^2}$ at $x = 1$ gives:',
            options: ['$\\\\sum 1/n^2$ (converges)', '$\\\\sum 1/n$ (diverges)', '$\\\\sum (-1)^n/n^2$ (converges)', '$\\\\sum n^2$ (diverges)'],
            correctAnswer: 0,
            explanation: 'At $x = 1$: $\\\\sum 1/n^2$ is a convergent p-series ($p = 2 > 1$).'
          },
          {
            question: '$\\\\sum \\\\frac{x^n}{n^2}$ has interval of convergence:',
            options: ['$(-1, 1)$', '$[-1, 1]$', '$[-1, 1)$', '$(-1, 1]$'],
            correctAnswer: 1,
            explanation: 'At $x = 1$: $\\\\sum 1/n^2$ converges. At $x = -1$: $\\\\sum (-1)^n/n^2$ converges (absolutely). Both included: $[-1, 1]$.'
          }
        ]
      }
    },    {
      id: 'radiusconvergence-p2-input',
      type: 'input-boxes' as const,
      content: `
**Interval of Convergence** 🧮

$\\\\sum_{n=1}^{\\\\infty} \\\\frac{(x-1)^n}{n \\\\cdot 3^n}$

**1)** $R = ?$

**2)** At $x = 4$: what series results? (harmonic/alternating harmonic/p-series)

**3)** Interval of convergence? (e.g., [-2, 4) )
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['3', 'harmonic', '[-2, 4)'],
        hint1: 'Ratio: $|x-1|/3 < 1$',
        hint2: 'At $x = 4$: $(x-1)^n/3^n = 1$, leaves $\\\\sum 1/n$',
        hint3: '$x = -2$: $\\\\sum (-1)^n/n$ converges (AST)',
        explanation: '1) $R = 3$. 2) Harmonic ($\\\\sum 1/n$, diverges). 3) $[-2, 4)$ (includes $-2$, excludes $4$).'
      }
    }
  ]
};
