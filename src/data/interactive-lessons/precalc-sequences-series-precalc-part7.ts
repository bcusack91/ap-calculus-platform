export const precalcSequencesPart7Data = {
  topicSlug: 'sequences-series-precalc',
  sections: [
    {
      id: 'p7-intro',
      type: 'text' as const,
      content: `
# 🎯 Sequences — Review & Applications

**Part 7 of 7 — Review & Applications**

### Master Summary

| | Arithmetic | Geometric |
|:--|:-----------|:----------|
| Step | add $d$ | multiply by $r$ |
| Type of change | constant rate of change | constant proportional change |
| From $a_0$ | $a_n = a_0 + dn$ | $g_n = g_0 r^n$ |
| From $a_1$ | $a_n = a_1 + (n-1)d$ | $g_n = g_1 r^{n-1}$ |
| From any term | $a_n = a_k + d(n-k)$ | $g_n = g_k r^{n-k}$ |
| Matching function | linear $f(x) = b + mx$ | exponential $f(x) = ab^x$ |
| Increasing growth | same amount each step | larger amount each step |

### Key Decision Tree

**Constant differences?** → Arithmetic, matches a linear function

**Constant ratios?** → Geometric, matches an exponential function

**Neither?** → Some other kind of sequence

**Expanding $(a+b)^n$?** → Use row $n$ of Pascal's Triangle
      `
    },
    {
      id: 'p7-strategies',
      type: 'text' as const,
      content: `
## 🗺️ Problem-Solving Strategies

### Finding the Pattern
1. Compute differences $a_2 - a_1, a_3 - a_2, \\ldots$. Constant → arithmetic.
2. Compute ratios $\\frac{a_2}{a_1}, \\frac{a_3}{a_2}, \\ldots$. Constant → geometric.
3. Check where the count starts: $a_0$ or $a_1$.

### Two Known Terms
- Arithmetic: $d = \\frac{a_n - a_k}{n - k}$
- Geometric: $r^{\\,n-k} = \\frac{g_n}{g_k}$

### AP Exam Tips
- Read percent language as a ratio: "$6\\%$ growth" means $r = 1.06$, and "$6\\%$ decay" means $r = 0.94$.
- A sequence has whole-number inputs; its matching function accepts all real inputs.
- For a binomial term, the exponents add to $n$ and the coefficient comes from Pascal's Triangle.
      `
    },
    {
      id: 'p7-mixed',
      type: 'text' as const,
      content: `
## 📝 Mixed Practice

### Problem 1
Sequence: $2, 6, 18, 54, \\ldots$

Ratios: $6/2 = 3$ → Geometric, $r = 3$. $a_n = 2(3)^{n-1}$, or $g_n = 2(3)^n$ if the count starts at $n = 0$.

### Problem 2
A gym has $120$ members in month $0$ and gains $15$ members per month. Which month first has at least $300$ members?

$120 + 15n \\geq 300 \\implies n \\geq 12$. Month $12$.

### Problem 3
A culture of $500$ bacteria triples every $4$ hours. As a function of hours: $f(t) = 500 \\cdot 3^{t/4}$. After $8$ hours: $500 \\cdot 3^2 = 4500$.

### Problem 4
Find the coefficient of $x^2y^3$ in $(x+y)^5$:

Row $5$ is $1, 5, 10, 10, 5, 1$, and the $y^3$ term uses $\\binom{5}{3} = 10$.
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
            options: ['Arithmetic, $d=4$', 'Geometric, $r=\\frac{7}{3}$', 'Arithmetic, $d=-4$', 'Neither, it is quadratic'],
            correctAnswer: 0,
            explanation: 'Constant difference $7-3 = 4$ → arithmetic with $d = 4$ (subtracting in the wrong order gives $-4$). The ratios $7/3$ and $11/7$ differ, so it is not geometric.'
          },
          {
            question: 'A geometric sequence has $g_0 = 3$ and $g_4 = 48$, with positive terms. Which exponential function matches it?',
            options: ['$f(x) = 3 \\cdot 2^x$', '$f(x) = 3 \\cdot 4^x$', '$f(x) = 3 + 11.25x$', '$f(x) = 48 \\cdot 2^x$'],
            correctAnswer: 0,
            explanation: '$r^4 = \\frac{48}{3} = 16$, so $r = 2$ and $f(x) = 3 \\cdot 2^x$. Dividing $16$ by $4$ instead of taking a fourth root gives base $4$, and $3 + 11.25x$ is the linear function through the same two points.'
          },
          {
            question: 'The coefficient of $x^7$ in $(x+1)^{10}$ is:',
            options: ['$120$', '$210$', '$252$', '$45$'],
            correctAnswer: 0,
            explanation: 'Row 10 begins $1, 10, 45, 120, \\ldots$; the $x^7$ term is entry $k = 3$: $120x^7$.'
          }
        ]
      }
    },
    {
      id: 'p7-input',
      type: 'input-boxes' as const,
      content: `
**Mixed Calculations** 🧮

**1)** The $20$th term of $5, 8, 11, 14, \\ldots$ (with $a_1 = 5$):

**2)** A geometric sequence has $g_3 = 40$ and $r = 0.5$. Find $g_6$:

**3)** $\\binom{7}{3}$ = ?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['62', '5', '35'],
        hint1: '$a_{20} = 5 + 19(3)$.',
        hint2: '$g_6 = 40 \\cdot 0.5^{6-3}$.',
        hint3: 'Row 7 is $1, 7, 21, 35, 35, 21, 7, 1$; entry $k = 3$ is $35$.',
        explanation: '1) $5 + 57 = 62$. 2) $40 \\cdot 0.125 = 5$. 3) $35$.'
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
            options: ['Arithmetic', 'Geometric', 'Neither'],
            correctAnswer: 2
          },
          {
            label: '"Loses $20\\%$ of its value each year" gives a common ratio of:',
            options: ['$0.2$', '$0.8$', '$1.2$', '$-0.2$'],
            correctAnswer: 1
          },
          {
            label: 'An arithmetic sequence corresponds to a:',
            options: ['Linear function', 'Exponential function', 'Quadratic function', 'Logarithmic function'],
            correctAnswer: 0
          },
          {
            label: 'The expansion of $(a+b)^6$ has this many terms:',
            options: ['$6$', '$7$', '$12$', '$5$'],
            correctAnswer: 1
          }
        ],
        correctAnswers: ['Neither', '$0.8$', 'Linear function', '$7$'],
        hint1: 'Differences are $3,5,7,9\\ldots$ — not constant, so not arithmetic.',
        hint2: 'Keeping $80\\%$ each year means multiplying by $0.8$.',
        hint3: 'Constant difference ↔ constant rate of change.',
        explanation: 'Square numbers: neither arithmetic nor geometric. A $20\\%$ loss leaves $80\\%$, so $r = 0.8$. Arithmetic sequences match linear functions. $(a+b)^n$ has $n + 1$ terms.'
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
            question: 'Which situation is modeled by a geometric sequence?',
            options: ['A balance that earns $3\\%$ interest each year', 'A tank that loses $40$ gallons each day', 'A ladder whose rungs are $30$ cm apart', 'A runner who adds $2$ km to each weekly run'],
            correctAnswer: 0,
            explanation: 'Earning $3\\%$ multiplies the balance by $1.03$ each year, a constant ratio. The other three change by a fixed amount each step, so they are arithmetic.'
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
