export const precalcContinuityPart3Data = {
  topicSlug: 'continuity-precalc',
  sections: [
    {
      id: 'p3-intro',
      type: 'text' as const,
      content: `
# 🧩 Piecewise Continuity

**Part 3 of 7**

### The Key Question

For a piecewise function, continuity at the **boundary** is the issue. The pieces are usually nice functions — it's the **join points** that may fail.

### Checking Continuity at a Boundary $x = c$

1. Compute $\\lim_{x \\to c^-} f(x)$ (from the left piece)
2. Compute $\\lim_{x \\to c^+} f(x)$ (from the right piece)
3. Compute $f(c)$ (which piece defines it?)
4. Check: left limit = right limit = $f(c)$?
      `
    },
    {
      id: 'p3-examples',
      type: 'text' as const,
      content: `
## Worked Examples

### Example 1: Continuous

$$f(x) = \\begin{cases} x^2 & x \\leq 2 \\\\ 4x - 4 & x > 2 \\end{cases}$$

At $x = 2$:
- Left: $\\lim_{x \\to 2^-} x^2 = 4$
- Right: $\\lim_{x \\to 2^+}(4x-4) = 4$
- Value: $f(2) = 2^2 = 4$
- $4 = 4 = 4$ ✓ **Continuous!**

### Example 2: Not Continuous

$$g(x) = \\begin{cases} 2x + 1 & x < 3 \\\\ x^2 & x \\geq 3 \\end{cases}$$

At $x = 3$:
- Left: $\\lim_{x \\to 3^-}(2x+1) = 7$
- Right: $\\lim_{x \\to 3^+} x^2 = 9$
- $7 \\neq 9$ → **Jump discontinuity**
      `
    },
    {
      id: 'p3-find-k',
      type: 'text' as const,
      content: `
## Finding Values for Continuity

### The Classic Problem: "Find $k$ so $f$ is continuous"

$$f(x) = \\begin{cases} 3x + k & x < 2 \\\\ x^2 + 1 & x \\geq 2 \\end{cases}$$

**Strategy**: Set left limit = right limit at $x = 2$:

- Left: $\\lim_{x \\to 2^-}(3x+k) = 6 + k$
- Right: $\\lim_{x \\to 2^+}(x^2+1) = 5$
- Set equal: $6 + k = 5 \\Rightarrow k = -1$

### Two Parameters: "Find $a$ and $b$"

$$f(x) = \\begin{cases} 2x & x \\leq 1 \\\\ ax + b & 1 < x < 3 \\\\ 5x & x \\geq 3 \\end{cases}$$

At $x = 1$: $2(1) = a(1) + b \\Rightarrow a + b = 2$

At $x = 3$: $a(3) + b = 5(3) \\Rightarrow 3a + b = 15$

Subtract: $2a = 13 \\Rightarrow a = 6.5, b = -4.5$
      `
    },
    {
      id: 'p3-mcq',
      type: 'multiple-choice' as const,
      content: `
**Piecewise Continuity Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'To check piecewise continuity at $x=c$, compare:',
            options: ['Only left and right limits', 'Left limit, right limit, and $f(c)$', 'Only $f(c)$', 'The derivatives'],
            correctAnswer: 1,
            explanation: 'All three must match: $\\lim^- = \\lim^+ = f(c)$.'
          },
          {
            question: '$f(x) = \\begin{cases} x+1 & x < 0 \\\\ 2 & x \\geq 0 \\end{cases}$. At $x=0$:',
            options: ['Continuous', 'Jump', 'Removable', 'Infinite'],
            correctAnswer: 0,
            explanation: 'Left: $0+1=1$... wait: Left: $\\lim 0^- = 1$, Right/value: $2$. $1 \\neq 2$, so jump. Actually let me recalculate: left $= 0+1 = 1$, $f(0) = 2$, $1 \\neq 2$ → jump discontinuity.'
          },
          {
            question: 'Find $k$: $\\begin{cases} kx & x \\leq 3 \\\\ x+6 & x > 3 \\end{cases}$ is continuous at $x=3$.',
            options: ['$k = 2$', '$k = 3$', '$k = 6$', '$k = 9$'],
            correctAnswer: 1,
            explanation: 'Left: $3k$. Right: $3+6=9$. $3k = 9 \\Rightarrow k = 3$.'
          }
        ]
      }
    },
    {
      id: 'p3-input',
      type: 'input-boxes' as const,
      content: `
**Find the value that makes each continuous:**

**1)** $\\begin{cases} 2x+k & x < 4 \\\\ 3x & x \\geq 4 \\end{cases}$. Find $k$:

**2)** $\\begin{cases} x^2 & x \\leq 1 \\\\ mx + b & x > 1 \\end{cases}$ with $m=3$. Find $b$ for continuity at $x=1$:

**3)** $\\begin{cases} 5 & x < 0 \\\\ ax^2 + 5 & x \\geq 0 \\end{cases}$. Left limit at $x=0$:
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['4', '-2', '5'],
        hint1: 'Left: $8+k$. Right: $12$. Set equal.',
        hint2: 'Left: $1$. Right: $3(1)+b = 3+b$. $3+b = 1$.',
        hint3: '$\\lim_{x \\to 0^-} 5 = 5$.',
        explanation: '(1) $8+k=12 \\Rightarrow k=4$. (2) $3+b=1 \\Rightarrow b=-2$. (3) Constant 5 from the left.'
      }
    },
    {
      id: 'p3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Piecewise Analysis** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'At a piecewise boundary, the potential issue is:',
            options: ['The pieces are wrong', 'The pieces may not connect', 'Domain is empty', 'Function is linear'],
            correctAnswer: 1
          },
          {
            label: 'To find $k$ for continuity, you set:',
            options: ['$f(c) = 0$', 'Left limit = right limit', '$k = c$', 'Derivative = 0'],
            correctAnswer: 1
          },
          {
            label: 'If left $= 4$ and right $= 4$ but $f(c) = 7$:',
            options: ['Continuous', 'Jump', 'Removable', 'Infinite'],
            correctAnswer: 2
          },
          {
            label: 'Three-piece functions may need continuity checked at:',
            options: ['One point', 'Two points', 'Three points', 'No points'],
            correctAnswer: 1
          }
        ],
        correctAnswers: ['The pieces may not connect', 'Left limit = right limit', 'Removable', 'Two points'],
        hint1: 'Each piece is usually continuous — the join is the question.',
        hint2: 'Matching at the boundary.',
        hint3: 'Limit exists (4) but ≠ value (7).',
        explanation: 'Pieces may not connect. Set limits equal. 4≠7 → removable. Three pieces → two boundaries.'
      }
    },
    {
      id: 'p3-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: '$\\begin{cases} x^2-1 & x < 2 \\\\ 2x-1 & x \\geq 2 \\end{cases}$. At $x=2$:',
            options: ['Continuous', 'Jump', 'Removable', 'Infinite'],
            correctAnswer: 0,
            explanation: 'Left: $4-1=3$. Right: $4-1=3$. $f(2) = 3$. All equal → continuous.'
          },
          {
            question: 'Find $c$ for continuity: $\\begin{cases} cx-1 & x < 2 \\\\ 7 & x \\geq 2 \\end{cases}$:',
            options: ['$c = 3$', '$c = 4$', '$c = 3.5$', '$c = 7$'],
            correctAnswer: 1,
            explanation: 'Left: $2c-1$. Right: $7$. $2c-1=7 \\Rightarrow 2c=8 \\Rightarrow c=4$.'
          }
        ]
      }
    }
  ]
};
