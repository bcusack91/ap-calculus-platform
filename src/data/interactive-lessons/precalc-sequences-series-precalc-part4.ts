export const precalcSequencesPart4Data = {
  topicSlug: 'sequences-series-precalc',
  sections: [
    {
      id: 'p4-intro',
      type: 'text' as const,
      content: `
# 🔢 Sigma Notation & Series

**Part 4 of 7**

### Sigma (Summation) Notation

$$\\sum_{k=1}^{n} a_k = a_1 + a_2 + a_3 + \\cdots + a_n$$

- $k$ = **index** of summation (dummy variable)
- Lower limit: starting value
- Upper limit: ending value

### Examples

| Sigma Form | Expanded | Value |
|:-----------|:---------|:------|
| $\\sum_{k=1}^{4} k$ | $1+2+3+4$ | $10$ |
| $\\sum_{k=1}^{3} k^2$ | $1+4+9$ | $14$ |
| $\\sum_{k=0}^{3} 2^k$ | $1+2+4+8$ | $15$ |
| $\\sum_{k=1}^{5} 3$ | $3+3+3+3+3$ | $15$ |
      `
    },
    {
      id: 'p4-properties',
      type: 'text' as const,
      content: `
## 📐 Properties of Summation

### Linearity Rules

$$\\sum_{k=1}^n (a_k + b_k) = \\sum_{k=1}^n a_k + \\sum_{k=1}^n b_k$$

$$\\sum_{k=1}^n c \\cdot a_k = c \\cdot \\sum_{k=1}^n a_k$$

### Useful Closed-Form Sums

| Sum | Formula |
|:----|:--------|
| $\\sum_{k=1}^n 1$ | $n$ |
| $\\sum_{k=1}^n k$ | $\\frac{n(n+1)}{2}$ |
| $\\sum_{k=1}^n k^2$ | $\\frac{n(n+1)(2n+1)}{6}$ |
| $\\sum_{k=1}^n k^3$ | $\\left[\\frac{n(n+1)}{2}\\right]^2$ |

### Telescoping Sums

$\\sum_{k=1}^n [f(k)-f(k-1)] = f(n)-f(0)$ — most terms cancel!
      `
    },
    {
      id: 'p4-practice',
      type: 'text' as const,
      content: `
## 📝 Writing in Sigma Notation

### Example 1: $2+4+6+8+\\cdots+100$

Pattern: $a_k = 2k$, from $k=1$ to $50$.

$$\\sum_{k=1}^{50} 2k = 2\\sum_{k=1}^{50} k = 2 \\cdot \\frac{50(51)}{2} = 2550$$

### Example 2: $1-\\frac{1}{2}+\\frac{1}{4}-\\frac{1}{8}+\\cdots$

Pattern: $a_k = (-\\frac{1}{2})^k$, from $k=0$ to $\\infty$.

$$\\sum_{k=0}^{\\infty}\\left(-\\frac{1}{2}\\right)^k = \\frac{1}{1+\\frac{1}{2}} = \\frac{2}{3}$$

### Example 3: $\\frac{1}{1\\cdot 2}+\\frac{1}{2\\cdot 3}+\\frac{1}{3\\cdot 4}+\\cdots+\\frac{1}{99\\cdot 100}$

Partial fractions: $\\frac{1}{k(k+1)} = \\frac{1}{k}-\\frac{1}{k+1}$ → telescoping!

$$\\sum_{k=1}^{99}\\left(\\frac{1}{k}-\\frac{1}{k+1}\\right) = 1 - \\frac{1}{100} = \\frac{99}{100}$$
      `
    },
    {
      id: 'p4-mcq',
      type: 'multiple-choice' as const,
      content: `
**Sigma Notation Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: '$\\sum_{k=1}^{5} (2k-1)$ equals:',
            options: ['$15$', '$20$', '$25$', '$30$'],
            correctAnswer: 2,
            explanation: '$1+3+5+7+9 = 25$. (Sum of first 5 odd numbers.)'
          },
          {
            question: '$\\sum_{k=0}^{4} 3^k$ equals:',
            options: ['$81$', '$121$', '$243$', '$363$'],
            correctAnswer: 1,
            explanation: '$1+3+9+27+81 = 121$.'
          },
          {
            question: '$\\sum_{k=1}^{100} k = $',
            options: ['$5000$', '$5050$', '$5100$', '$10100$'],
            correctAnswer: 1,
            explanation: '$\\frac{100(101)}{2} = 5050$.'
          }
        ]
      }
    },
    {
      id: 'p4-input',
      type: 'input-boxes' as const,
      content: `
**Sigma Calculations** 🧮

**1)** $\\sum_{k=1}^{4} k^2$ = ?

**2)** $\\sum_{k=1}^{10} k$ = ?

**3)** $\\sum_{k=1}^{6} 5$ = ?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['30', '55', '30'],
        hint1: '$1+4+9+16 = 30$.',
        hint2: '$\\frac{10(11)}{2} = 55$.',
        hint3: 'Constant $5$ summed $6$ times: $30$.',
        explanation: '1) $1+4+9+16=30$. 2) $55$. 3) $5 \\times 6 = 30$.'
      }
    },
    {
      id: 'p4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Sigma Concepts** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The index variable in $\\sum_{k=1}^n a_k$ is:',
            options: ['$a$', '$k$', '$n$', '$\\sum$'],
            correctAnswer: 1
          },
          {
            label: '$\\sum_{k=1}^n c = $',
            options: ['$c$', '$cn$', '$c^n$', '$nc^2$'],
            correctAnswer: 1
          },
          {
            label: 'Changing index from $\\sum_{k=1}^n$ to $\\sum_{j=0}^{n-1}$ via $j=k-1$:',
            options: ['Changes the sum value', 'Does not change the sum value', 'Only works for arithmetic'],
            correctAnswer: 1
          },
          {
            label: 'In a telescoping sum, most terms:',
            options: ['Double', 'Cancel', 'Become zero', 'Converge'],
            correctAnswer: 1
          }
        ],
        correctAnswers: ['$k$', '$cn$', 'Does not change the sum value', 'Cancel'],
        hint1: '$k$ is the index/dummy variable.',
        hint2: 'Sum of a constant $c$ repeated $n$ times: $cn$.',
        hint3: 'Re-indexing is just a substitution; the sum is the same.',
        explanation: 'Index: $k$. $\\sum c = cn$. Re-indexing preserves value. Telescoping: adjacent terms cancel.'
      }
    },
    {
      id: 'p4-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Write $3+6+9+\\cdots+300$ in sigma notation:',
            options: ['$\\sum_{k=1}^{100} 3k$', '$\\sum_{k=1}^{300} k$', '$\\sum_{k=3}^{300} k$', '$\\sum_{k=1}^{100} 3$'],
            correctAnswer: 0,
            explanation: 'Terms are $3k$ for $k=1$ to $100$ (since $3(100)=300$).'
          },
          {
            question: '$\\sum_{k=1}^{20} k^2 = \\frac{20 \\cdot 21 \\cdot 41}{6} =$',
            options: ['$2870$', '$2640$', '$3080$', '$17220$'],
            correctAnswer: 0,
            explanation: '$\\frac{20 \\cdot 21 \\cdot 41}{6} = \\frac{17220}{6} = 2870$.'
          }
        ]
      }
    }
  ]
};
