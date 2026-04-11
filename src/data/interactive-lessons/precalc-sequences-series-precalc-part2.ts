export const precalcSequencesPart2Data = {
  topicSlug: 'sequences-series-precalc',
  sections: [
    {
      id: 'p2-intro',
      type: 'text' as const,
      content: `
# 📊 Geometric Sequences

**Part 2 of 7**

### Definition

A **geometric sequence** has a constant **ratio** between consecutive terms:

$$a_n = a_1 \\cdot r^{n-1}$$

where $r = \\frac{a_{n+1}}{a_n}$ is the **common ratio**.

### Examples

| Sequence | $a_1$ | $r$ |
|:---------|:------|:----|
| $3, 6, 12, 24, \\ldots$ | $3$ | $2$ |
| $100, 50, 25, 12.5, \\ldots$ | $100$ | $\\frac{1}{2}$ |
| $1, -3, 9, -27, \\ldots$ | $1$ | $-3$ |
| $5, 5, 5, 5, \\ldots$ | $5$ | $1$ |

> 💡 If $|r| > 1$, terms grow; if $|r| < 1$, terms shrink; if $r < 0$, terms alternate sign.
      `
    },
    {
      id: 'p2-sums',
      type: 'text' as const,
      content: `
## 📝 Finite Geometric Series

$$S_n = a_1 \\cdot \\frac{1-r^n}{1-r} \\quad (r \\neq 1)$$

### Example: Find $S_8$ for $a_1=3, r=2$

$$S_8 = 3 \\cdot \\frac{1-2^8}{1-2} = 3 \\cdot \\frac{1-256}{-1} = 3 \\cdot 255 = 765$$

### Geometric Mean

The geometric mean of positive $a$ and $b$ is $\\sqrt{ab}$.

Insert a geometric mean between 4 and 16:
$\\sqrt{4 \\cdot 16} = \\sqrt{64} = 8$

Sequence: $4, 8, 16$ with $r = 2$.
      `
    },
    {
      id: 'p2-compare',
      type: 'text' as const,
      content: `
## 📊 Arithmetic vs. Geometric

| Feature | Arithmetic | Geometric |
|:--------|:-----------|:----------|
| Pattern | Add constant $d$ | Multiply by constant $r$ |
| Formula | $a_n = a_1+(n-1)d$ | $a_n = a_1 \\cdot r^{n-1}$ |
| Sum | $\\frac{n}{2}(a_1+a_n)$ | $a_1\\frac{1-r^n}{1-r}$ |
| Growth | Linear | Exponential |
| Graph | Straight line | Exponential curve |

### Key Insight

Arithmetic sequences grow by **addition** → linear growth.

Geometric sequences grow by **multiplication** → exponential growth (or decay if $|r|<1$).
      `
    },
    {
      id: 'p2-mcq',
      type: 'multiple-choice' as const,
      content: `
**Geometric Sequences Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Find $a_6$ if $a_1=2, r=3$:',
            options: ['$486$', '$162$', '$729$', '$54$'],
            correctAnswer: 0,
            explanation: '$a_6 = 2 \\cdot 3^5 = 2(243) = 486$.'
          },
          {
            question: 'The common ratio of $64, 32, 16, 8, \\ldots$ is:',
            options: ['$2$', '$-2$', '$\\frac{1}{2}$', '$-\\frac{1}{2}$'],
            correctAnswer: 2,
            explanation: '$r = 32/64 = 1/2$.'
          },
          {
            question: '$S_5$ for $a_1=1, r=-2$:',
            options: ['$11$', '$-11$', '$31$', '$-31$'],
            correctAnswer: 0,
            explanation: '$S_5=1\\cdot\\frac{1-(-2)^5}{1-(-2)}=\\frac{1+32}{3}=\\frac{33}{3}=11$.'
          }
        ]
      }
    },
    {
      id: 'p2-input',
      type: 'input-boxes' as const,
      content: `
**Geometric Sequence Practice** 🧮

**1)** $a_1=5, r=2$. Find $a_8$:

**2)** $a_1=1000, r=\\frac{1}{2}$. Find $a_5$:

**3)** $S_4$ for $a_1=3, r=4$: (use the sum formula)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['640', '62.5', '255'],
        hint1: '$a_8 = 5 \\cdot 2^7 = 5(128) = 640$.',
        hint2: '$a_5 = 1000(1/2)^4 = 1000/16 = 62.5$.',
        hint3: '$S_4 = 3 \\cdot \\frac{1-256}{1-4} = 3 \\cdot \\frac{-255}{-3} = 255$.',
        explanation: '1) $640$. 2) $62.5$. 3) $255$.'
      }
    },
    {
      id: 'p2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Geometric Sequences Properties** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'If $|r|>1$, the geometric sequence:',
            options: ['Converges to 0', 'Grows without bound', 'Stays constant'],
            correctAnswer: 1
          },
          {
            label: 'The geometric mean of 3 and 27 is:',
            options: ['$15$', '$9$', '$12$', '$\\sqrt{30}$'],
            correctAnswer: 1
          },
          {
            label: 'A negative common ratio $r<0$ causes terms to:',
            options: ['All be negative', 'Alternate in sign', 'Decrease steadily'],
            correctAnswer: 1
          },
          {
            label: 'Compound interest creates a:',
            options: ['Arithmetic sequence', 'Geometric sequence', 'Fibonacci sequence'],
            correctAnswer: 1
          }
        ],
        correctAnswers: ['Grows without bound', '$9$', 'Alternate in sign', 'Geometric sequence'],
        hint1: '$|r|>1$ means each term is larger in magnitude.',
        hint2: '$\\sqrt{3 \\cdot 27} = \\sqrt{81} = 9$.',
        hint3: 'Multiplying by a negative flips the sign.',
        explanation: '$|r|>1$: diverges. GM of 3 and 27: $9$. Negative $r$: alternating signs. Compound interest: multiply by $(1+r)$ each period → geometric.'
      }
    },
    {
      id: 'p2-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A ball bounces to $\\frac{3}{4}$ of its height each time. Starting at 16 ft, what height after 3 bounces?',
            options: ['$9$ ft', '$6.75$ ft', '$5.0625$ ft', '$12$ ft'],
            correctAnswer: 1,
            explanation: '$16 \\cdot (3/4)^3 = 16 \\cdot 27/64 = 6.75$ ft.'
          },
          {
            question: 'If $a_3=12$ and $a_6=96$ in a geometric sequence, find $r$:',
            options: ['$2$', '$4$', '$8$', '$3$'],
            correctAnswer: 0,
            explanation: '$a_6/a_3 = r^3 = 96/12 = 8$. $r = \\sqrt[3]{8} = 2$.'
          }
        ]
      }
    }
  ]
};
