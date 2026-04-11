export const precalcLimitsPart6Data = {
  topicSlug: 'limits-introduction-precalc',
  sections: [
    {
      id: 'p6-intro',
      type: 'text' as const,
      content: `
# 🎯 The Formal Definition of a Limit

**Part 6 of 7**

### Epsilon-Delta Intuition

The formal statement of $\\lim_{x \\to c} f(x) = L$:

> For every $\\varepsilon > 0$, there exists $\\delta > 0$ such that if $0 < |x - c| < \\delta$, then $|f(x) - L| < \\varepsilon$.

### What This Means in Plain English

| Symbol | Meaning |
|:-------|:--------|
| $\\varepsilon$ ("epsilon") | How close $f(x)$ must be to $L$ |
| $\\delta$ ("delta") | How close $x$ must be to $c$ |
| $0 < |x-c|$ | $x \\neq c$ (we exclude the point itself) |

**Translation**: "Make $f(x)$ as close to $L$ as you want — I can make it happen by choosing $x$ close enough to $c$."
      `
    },
    {
      id: 'p6-examples',
      type: 'text' as const,
      content: `
## Worked Examples

### Example 1: Prove $\\lim_{x \\to 3}(2x+1) = 7$

Need: $|f(x) - L| < \\varepsilon$ when $0 < |x - c| < \\delta$.

$$|(2x+1) - 7| = |2x - 6| = 2|x - 3|$$

We need $2|x-3| < \\varepsilon$, so $|x-3| < \\varepsilon/2$.

**Choose $\\delta = \\varepsilon/2$**. Then if $|x-3| < \\delta$:
$$|(2x+1) - 7| = 2|x-3| < 2\\delta = 2 \\cdot \\frac{\\varepsilon}{2} = \\varepsilon \\; ✓$$

### Example 2: Prove $\\lim_{x \\to 1}(x^2) = 1$

$$|x^2 - 1| = |x-1||x+1|$$

Near $x=1$, if $|x-1| < 1$, then $0 < x < 2$, so $|x+1| < 3$.

Thus $|x^2-1| < 3|x-1|$. Choose $\\delta = \\min(1, \\varepsilon/3)$.
      `
    },
    {
      id: 'p6-ivt',
      type: 'text' as const,
      content: `
## The Intermediate Value Theorem — Preview

### Statement

If $f$ is continuous on $[a,b]$ and $N$ is between $f(a)$ and $f(b)$, then there exists $c \\in (a,b)$ with $f(c) = N$.

### What It Says Intuitively

A continuous function **can't skip values** — it must hit every $y$-value between its endpoints.

### Classic Application: Proving a Root Exists

To show $x^3 - x - 1 = 0$ has a solution in $[1,2]$:
- $f(1) = 1 - 1 - 1 = -1 < 0$
- $f(2) = 8 - 2 - 1 = 5 > 0$

Since $f$ is continuous and changes sign, IVT guarantees some $c \\in (1,2)$ with $f(c) = 0$.

### Why This Matters for Calculus

IVT is used to prove the **Extreme Value Theorem** and the **Mean Value Theorem**: the pillars of differential calculus.
      `
    },
    {
      id: 'p6-mcq',
      type: 'multiple-choice' as const,
      content: `
**Formal Limits Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In the epsilon-delta definition, $\\varepsilon$ represents:',
            options: ['Closeness of $x$ to $c$', 'Closeness of $f(x)$ to $L$', 'The limit itself', 'The function value'],
            correctAnswer: 1,
            explanation: '$\\varepsilon$ is the tolerance for the OUTPUT — how close $f(x)$ must be to $L$.'
          },
          {
            question: 'For $\\lim_{x\\to 3}(2x+1) = 7$, what $\\delta$ works for $\\varepsilon = 0.01$?',
            options: ['$\\delta = 0.01$', '$\\delta = 0.005$', '$\\delta = 0.02$', '$\\delta = 0.1$'],
            correctAnswer: 1,
            explanation: '$\\delta = \\varepsilon/2 = 0.01/2 = 0.005$.'
          },
          {
            question: 'IVT requires the function to be:',
            options: ['Differentiable', 'Continuous on $[a,b]$', 'Monotonic', 'Polynomial'],
            correctAnswer: 1,
            explanation: 'IVT needs continuity on the closed interval. Differentiability is not required.'
          }
        ]
      }
    },
    {
      id: 'p6-input',
      type: 'input-boxes' as const,
      content: `
**Find the delta:**

**1)** For $\\lim_{x \\to 5}(3x) = 15$, if $\\varepsilon = 0.06$, $\\delta$ = ?

**2)** For $\\lim_{x \\to 2}(4x-1) = 7$, if $\\varepsilon = 0.04$, $\\delta$ = ?

**3)** $f(1)=-2, f(3)=4$, $f$ continuous. IVT guarantees a root in $(a,b)$. What is $a+b$?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0.02', '0.01', '4'],
        hint1: '$|3x-15| = 3|x-5|$, so $\\delta = \\varepsilon/3$.',
        hint2: '$|4x-8| = 4|x-2|$, so $\\delta = \\varepsilon/4$.',
        hint3: '$f$ changes sign on $(1,3)$, there is a root. $a+b = 1+3$.',
        explanation: '(1) $\\delta = 0.06/3 = 0.02$. (2) $\\delta = 0.04/4 = 0.01$. (3) Root in $(1,3)$, $a+b=4$.'
      }
    },
    {
      id: 'p6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Formal Definitions** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: '$0 < |x - c|$ means:',
            options: ['$x = c$', '$x \\neq c$', '$x > c$', '$x < c$'],
            correctAnswer: 1
          },
          {
            label: 'Finding $\\delta$ for a linear function $mx+b$:',
            options: ['$\\delta = \\varepsilon$', '$\\delta = \\varepsilon/|m|$', '$\\delta = m\\varepsilon$', '$\\delta = \\varepsilon^2$'],
            correctAnswer: 1
          },
          {
            label: 'IVT guarantees:',
            options: ['A maximum', 'A minimum', 'An intermediate value is achieved', 'The derivative exists'],
            correctAnswer: 2
          },
          {
            label: 'For Sign Change Rootfinding, we need $f(a)$ and $f(b)$:',
            options: ['Both positive', 'Both negative', 'Opposite signs', 'Both zero'],
            correctAnswer: 2
          }
        ],
        correctAnswers: ['$x \\neq c$', '$\\delta = \\varepsilon/|m|$', 'An intermediate value is achieved', 'Opposite signs'],
        hint1: 'The strict inequality excludes $x=c$.',
        hint2: 'Linear: $|f(x)-L| = |m||x-c|$.',
        hint3: 'Intermediate = between $f(a)$ and $f(b)$.',
        explanation: 'Exclude $x=c$; $\\delta=\\varepsilon/|m|$ for linear; IVT: intermediate value; sign change: opposite signs.'
      }
    },
    {
      id: 'p6-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'The epsilon-delta definition says $\\delta$ depends on:',
            options: ['Only $c$', 'Only $\\varepsilon$', '$\\varepsilon$ (and sometimes $c$)', 'Nothing'],
            correctAnswer: 2,
            explanation: '$\\delta$ always depends on $\\varepsilon$, and for nonlinear functions also on the point $c$.'
          },
          {
            question: 'If $f(0)=-3, f(5)=8$ and $f$ is continuous, which value is guaranteed to be achieved?',
            options: ['$-5$', '$10$', '$4$', '$9$'],
            correctAnswer: 2,
            explanation: 'IVT: any value between $-3$ and $8$ must be hit. Only $4$ is in $(-3,8)$.'
          }
        ]
      }
    }
  ]
};
