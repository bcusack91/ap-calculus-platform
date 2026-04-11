export const precalcContinuityPart5Data = {
  topicSlug: 'continuity-precalc',
  sections: [
    {
      id: 'p5-intro',
      type: 'text' as const,
      content: `
# 📊 IVT Applications

**Part 5 of 7**

### Intermediate Value Theorem — Full Statement

If $f$ is continuous on $[a,b]$ and $N$ is any number strictly between $f(a)$ and $f(b)$, then there exists at least one $c \\in (a,b)$ such that $f(c) = N$.

### What You Can Prove with IVT

1. **Existence of roots**: $f(a)$ and $f(b)$ have opposite signs → there's a zero in $(a,b)$
2. **Existence of specific values**: $f$ must hit every value between $f(a)$ and $f(b)$
3. **Bisection method**: Narrow down the location of a root

### What IVT Does NOT Tell You

- **How many** solutions exist (just "at least one")
- **Where exactly** $c$ is (just somewhere in $(a,b)$)
- Anything about **discontinuous** functions
      `
    },
    {
      id: 'p5-roots',
      type: 'text' as const,
      content: `
## Proving Roots Exist

### Example 1: $x^3 + x - 1 = 0$ has a root in $(0, 1)$

Let $f(x) = x^3 + x - 1$.
- $f(0) = 0 + 0 - 1 = -1 < 0$
- $f(1) = 1 + 1 - 1 = 1 > 0$
- $f$ is a polynomial → continuous

By IVT, since $f(0) < 0 < f(1)$, there exists $c \\in (0,1)$ with $f(c) = 0$. ✓

### Example 2: $\\cos x = x$ has a solution

Let $g(x) = \\cos x - x$.
- $g(0) = 1 - 0 = 1 > 0$
- $g(\\pi/2) = 0 - \\pi/2 \\approx -1.57 < 0$
- $g$ is continuous

By IVT, $g(c) = 0$ for some $c \\in (0, \\pi/2)$, meaning $\\cos c = c$.

### Template for IVT Proofs

1. Define $f(x)$ (often rearrange to $f(x) = 0$ form)
2. State that $f$ is continuous on $[a,b]$ (and why)
3. Compute $f(a)$ and $f(b)$ → show they have opposite signs (or bracket target)
4. Conclude by IVT
      `
    },
    {
      id: 'p5-bisection',
      type: 'text' as const,
      content: `
## The Bisection Method

### Finding Roots Numerically

IVT says a root exists. **Bisection** narrows it down:

### Example: $f(x) = x^2 - 2$ (finding $\\sqrt{2}$)

| Step | Interval | Midpoint $m$ | $f(m)$ | New Interval |
|:-----|:---------|:------------|:-------|:-------------|
| 1 | $[1, 2]$ | $1.5$ | $0.25 > 0$ | $[1, 1.5]$ |
| 2 | $[1, 1.5]$ | $1.25$ | $-0.4375 < 0$ | $[1.25, 1.5]$ |
| 3 | $[1.25, 1.5]$ | $1.375$ | $-0.109 < 0$ | $[1.375, 1.5]$ |
| 4 | $[1.375, 1.5]$ | $1.4375$ | $0.066 > 0$ | $[1.375, 1.4375]$ |

After just 4 steps: $\\sqrt{2} \\in (1.375, 1.4375)$. Actual: $1.4142...$

Each step **halves** the interval. After $n$ steps, error $< \\frac{b-a}{2^n}$.
      `
    },
    {
      id: 'p5-mcq',
      type: 'multiple-choice' as const,
      content: `
**IVT Applications Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: '$f(x) = x^5 - 3x + 1$. $f(0) = 1, f(1) = -1$. IVT guarantees:',
            options: ['No roots', 'A root in $(0, 1)$', 'Exactly one root', 'Root at $x = 0.5$'],
            correctAnswer: 1,
            explanation: 'Sign change ($1 > 0, -1 < 0$) + continuous → at least one root in $(0,1)$.'
          },
          {
            question: 'IVT requires:',
            options: ['Differentiability', 'Continuity on $[a,b]$', 'Monotonicity', '$f(a) = f(b)$'],
            correctAnswer: 1,
            explanation: 'IVT needs continuity on a closed interval. Nothing else.'
          },
          {
            question: 'Bisection halves the interval each step. After 10 steps on $[0,1]$:',
            options: ['Error < 0.01', 'Error < 0.001', 'Error < 0.0001', 'Error < 0.00001'],
            correctAnswer: 1,
            explanation: 'Error $< 1/2^{10} = 1/1024 \\approx 0.00098 < 0.001$.'
          }
        ]
      }
    },
    {
      id: 'p5-input',
      type: 'input-boxes' as const,
      content: `
**IVT Practice:**

**1)** $f(x) = x^2 - 5$. $f(2) = ?$:

**2)** $f(3) = ?$ for the same function:

**3)** Since $f(2)$ and $f(3)$ have opposite signs, a root of $x^2-5=0$ is between 2 and 3. This root is $\\sqrt{?}$:
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['-1', '4', '5'],
        hint1: '$4 - 5 = -1$.',
        hint2: '$9 - 5 = 4$.',
        hint3: '$x^2 = 5 \\Rightarrow x = \\sqrt{5}$.',
        explanation: '(1) $f(2) = -1$. (2) $f(3) = 4$. (3) Root is $\\sqrt{5} \\approx 2.236$.'
      }
    },
    {
      id: 'p5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**IVT Concepts** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'IVT says "at least one $c$" — it doesn\'t say:',
            options: ['$c$ exists', 'How many $c$ values', '$f$ is continuous', '$N$ is between $f(a)$ and $f(b)$'],
            correctAnswer: 1
          },
          {
            label: 'First step in an IVT proof:',
            options: ['Find the root', 'Verify continuity on $[a,b]$', 'Take the derivative', 'Graph the function'],
            correctAnswer: 1
          },
          {
            label: 'Bisection method is based on:',
            options: ['Newton\'s method', 'IVT (sign change)', 'Taylor series', 'L\'Hôpital\'s Rule'],
            correctAnswer: 1
          },
          {
            label: 'IVT applied to temperature: body at 98.6°F, room at 70°F. At some time:',
            options: ['Temp = 150°F', 'Temp = 85°F', 'Temp stays at 98.6°F', 'Temp = 50°F'],
            correctAnswer: 1
          }
        ],
        correctAnswers: ['How many $c$ values', 'Verify continuity on $[a,b]$', 'IVT (sign change)', 'Temp = 85°F'],
        hint1: 'IVT doesn\'t guarantee uniqueness.',
        hint2: 'Always check the hypothesis first.',
        hint3: 'Bisection relies on sign change → IVT.',
        explanation: 'IVT: existence not uniqueness. First: check continuity. Bisection = IVT. 85°F is between 70 and 98.6.'
      }
    },
    {
      id: 'p5-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Prove $e^x = 3-x$ has a solution. Which function and interval?',
            options: ['$f(x)=e^x-3+x$ on $[0,1]$', '$f(x)=e^x$ on $[0,3]$', '$f(x)=3-x$ on $[0,1]$', '$f(x)=e^x+x-3$ on $[-1,0]$'],
            correctAnswer: 0,
            explanation: '$f(x)=e^x+x-3$. $f(0)=1+0-3=-2<0$. $f(1)=e+1-3\\approx 0.72>0$. Sign change on $[0,1]$.'
          },
          {
            question: 'A discontinuous function on $[0,1]$: can we apply IVT?',
            options: ['Yes, always', 'No — IVT requires continuity', 'Only if it\'s monotonic', 'Only at endpoints'],
            correctAnswer: 1,
            explanation: 'IVT cannot be applied without continuity — it\'s a required hypothesis.'
          }
        ]
      }
    }
  ]
};
