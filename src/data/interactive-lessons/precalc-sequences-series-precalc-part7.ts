export const precalcSequencesPart7Data = {
  topicSlug: 'sequences-series-precalc',
  sections: [
    {
      id: 'p7-intro',
      type: 'text' as const,
      content: `
# 🎯 Sequences & Series — Full Synthesis

**Part 7 of 7**

### Master Summary

| Type | $n$th Term | Sum Formula | Convergence |
|:-----|:-----------|:------------|:------------|
| Arithmetic | $a_1+(n-1)d$ | $\\frac{n}{2}(a_1+a_n)$ | Always diverges |
| Geometric | $a_1 r^{n-1}$ | $a_1\\frac{1-r^n}{1-r}$ | $|r|<1 \\to \\frac{a_1}{1-r}$ |

### Key Decision Tree

**Is there a common difference?** → Arithmetic

**Is there a common ratio?** → Geometric

**Is it defined by previous terms?** → Recursive

**Does it involve $\\binom{n}{k}$?** → Binomial expansion
      `
    },
    {
      id: 'p7-strategies',
      type: 'text' as const,
      content: `
## 🗺️ Problem-Solving Strategies

### Finding the Pattern
1. Compute differences: $a_2-a_1, a_3-a_2, \\ldots$ → constant? → arithmetic
2. Compute ratios: $a_2/a_1, a_3/a_2, \\ldots$ → constant? → geometric
3. Check second differences → constant? → quadratic sequence

### AP Exam Tips
- Know both sum formulas cold
- Practice converting between recursive and explicit
- For convergence questions: only geometric with $|r|<1$
- Telescoping sums: try partial fractions
- Binomial: know how to find a specific term without expanding everything
      `
    },
    {
      id: 'p7-mixed',
      type: 'text' as const,
      content: `
## 📝 Mixed Practice

### Problem 1
Sequence: $2, 6, 18, 54, \\ldots$

Ratios: $6/2=3$ → Geometric, $r=3$. $a_n = 2(3)^{n-1}$.

### Problem 2
$\\sum_{k=1}^{\\infty} \\frac{4}{5^k}$

$a_1 = 4/5, r = 1/5$. $S = \\frac{4/5}{1-1/5} = \\frac{4/5}{4/5} = 1$.

### Problem 3
Find the coefficient of $x^2y^3$ in $(x+y)^5$:

$\\binom{5}{3} = 10$.

### Problem 4
Find the sum: $1 + 3 + 5 + \\cdots + 99$

Arithmetic: $a_1=1, d=2, a_n=99$. $n = 50$.
$S_{50} = \\frac{50}{2}(1+99) = 2500$.
      `
    },
    {
      id: 'p7-mcq',
      type: 'multiple-choice' as const,
      content: `
**Synthesis Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: '$3, 7, 11, 15, \\ldots$ is:',
            options: ['Arithmetic, $d=4$', 'Geometric, $r=4$', 'Neither', 'Fibonacci'],
            correctAnswer: 0,
            explanation: 'Constant difference $d = 4$ → arithmetic.'
          },
          {
            question: '$\\sum_{n=0}^{\\infty} (-0.8)^n$ equals:',
            options: ['$5/9$', '$5$', '$5/3$', 'Diverges'],
            correctAnswer: 0,
            explanation: '$|r|=0.8<1$. $S = \\frac{1}{1+0.8} = \\frac{1}{1.8} = \\frac{5}{9}$.'
          },
          {
            question: 'The coefficient of $x^7$ in $(x+1)^{10}$ is:',
            options: ['$120$', '$210$', '$252$', '$45$'],
            correctAnswer: 0,
            explanation: '$\\binom{10}{3}x^7(1)^3 = 120x^7$.'
          }
        ]
      }
    },
    {
      id: 'p7-input',
      type: 'input-boxes' as const,
      content: `
**Mixed Calculations** 🧮

**1)** Sum of first 20 terms of $5, 8, 11, 14, \\ldots$:

**2)** $\\sum_{n=1}^{\\infty} 10(0.1)^n$ = ? (Enter as a fraction)

**3)** $\\binom{7}{3}$ = ?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['670', '10/9', '35'],
        hint1: '$a_1=5, d=3$. $S_{20} = \\frac{20}{2}[2(5)+19(3)] = 10(67) = 670$.',
        hint2: '$a_1=1, r=0.1$. $S = 1/(1-0.1) = 10/9$.',
        hint3: '$\\frac{7!}{3!4!} = \\frac{210}{6} = 35$.',
        explanation: '1) $670$. 2) $10/9$. 3) $35$.'
      }
    },
    {
      id: 'p7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Master Classification** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: '$1, 4, 9, 16, 25, \\ldots$ is:',
            options: ['Arithmetic', 'Geometric', 'Neither (quadratic/square numbers)'],
            correctAnswer: 2
          },
          {
            label: 'An arithmetic series (infinite) always:',
            options: ['Converges', 'Diverges', 'Depends on $d$'],
            correctAnswer: 1
          },
          {
            label: '$0.\\overline{142857}$ as a fraction is:',
            options: ['$1/7$', '$1/6$', '$1/9$', '$1/11$'],
            correctAnswer: 0
          },
          {
            label: 'The sum of row $n$ of Pascals triangle is:',
            options: ['$n!$', '$n^2$', '$2^n$', '$\\binom{2n}{n}$'],
            correctAnswer: 2
          }
        ],
        correctAnswers: ['Neither (quadratic/square numbers)', 'Diverges', '$1/7$', '$2^n$'],
        hint1: 'Differences are $3,5,7,9\\ldots$ — not constant, so not arithmetic.',
        hint2: 'Arithmetic sums grow without bound.',
        hint3: '$142857/999999 = 1/7$.',
        explanation: 'Square numbers: neither arithmetic nor geometric. Arithmetic series diverge. $0.\\overline{142857} = 1/7$. Row sum = $2^n$.'
      }
    },
    {
      id: 'p7-exit',
      type: 'multiple-choice' as const,
      content: `
**Final Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Which infinite series converges?',
            options: ['$\\sum n$', '$\\sum 1/n$', '$\\sum (3/4)^n$', '$\\sum (-1)^n$'],
            correctAnswer: 2,
            explanation: 'Geometric with $|r|=3/4<1$ converges. $\\sum n$ and $\\sum 1/n$ diverge; $\\sum(-1)^n$ oscillates.'
          },
          {
            question: 'In the expansion of $(2x-1)^4$, the constant term is:',
            options: ['$-1$', '$1$', '$16$', '$-16$'],
            correctAnswer: 1,
            explanation: 'Constant term: $\\binom{4}{4}(2x)^0(-1)^4 = 1 \\cdot 1 \\cdot 1 = 1$.'
          }
        ]
      }
    }
  ]
};
