export const precalcSequencesPart5Data = {
  topicSlug: 'sequences-series-precalc',
  sections: [
    {
      id: 'p5-intro',
      type: 'text' as const,
      content: `
# 🔗 Sequences, Linear Functions & Exponential Functions

**Part 5 of 7 — Sequences and Linear & Exponential Functions**

### Same Structure, Different Inputs

| Sequence | Function | Built from |
|:---------|:---------|:-----------|
| Arithmetic: $a_n = a_0 + dn$ | Linear: $f(x) = b + mx$ | an initial value plus **repeated addition** of a constant rate ($d$ or $m$) |
| Geometric: $g_n = g_0 r^n$ | Exponential: $f(x) = ab^x$ | an initial value times **repeated multiplication** by a constant ratio ($r$ or $b$) |

So $a_n = 7 + 3n$ matches $f(x) = 7 + 3x$, and $g_n = 5(2)^n$ matches $f(x) = 5(2)^x$.

### Point Forms

Just as $a_n = a_k + d(n - k)$ starts from a known term, a function can start from a known point $(x_i, y_i)$:

| Sequence form | Function form |
|:--------------|:--------------|
| $a_n = a_k + d(n - k)$ | $f(x) = y_i + m(x - x_i)$ |
| $g_n = g_k r^{\\,n - k}$ | $f(x) = y_i \\, b^{\\,x - x_i}$ |

### Different Domains

A sequence accepts only whole numbers. Its matching function accepts every real number. For $f(x) = 400(0.5)^x$, the value $f(1.5) \\approx 141.4$ exists, but a sequence has no "term $1.5$".
      `
    },
    {
      id: 'p5-mcq',
      type: 'multiple-choice' as const,
      content: `
**Sequences and Functions Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which function corresponds to the arithmetic sequence $a_n = 7 + 3n$?',
            options: ['$f(x) = 7 + 3x$', '$f(x) = 7 \\cdot 3^x$', '$f(x) = 3 + 7x$', '$f(x) = 10x$'],
            correctAnswer: 0,
            explanation: 'Both start at $7$ and add $3$ for each unit increase in the input. Writing $7 \\cdot 3^x$ multiplies instead of adds, and $3 + 7x$ swaps the initial value and the rate.'
          },
          {
            question: 'An exponential function $f(x) = ab^x$ passes through $(1, 6)$ and $(3, 54)$. Which is $f$?',
            options: ['$f(x) = 2 \\cdot 3^x$', '$f(x) = 6 \\cdot 3^x$', '$f(x) = 2 \\cdot 9^x$', '$f(x) = 24x - 18$'],
            correctAnswer: 0,
            explanation: 'From $x = 1$ to $x = 3$ the output is multiplied by $\\frac{54}{6} = 9 = b^2$, so $b = 3$. Then $f(x) = 6 \\cdot 3^{x-1} = 2 \\cdot 3^x$. The line $24x - 18$ also passes through both points, but it is linear, not exponential.'
          },
          {
            question: 'Over equal-length input intervals, the outputs of $f$ are multiplied by $1.2$ each time. Which type of function is $f$?',
            options: ['Exponential', 'Linear', 'Quadratic', 'Constant'],
            correctAnswer: 0,
            explanation: 'Outputs that change proportionally (by the same factor) over equal-length input intervals mean exponential. A constant difference would mean linear.'
          }
        ]
      }
    },
    {
      id: 'p5-build',
      type: 'text' as const,
      content: `
## 🛠️ Building a Function from Two Points

Two values at different inputs always determine a linear function (or an arithmetic sequence). They determine an exponential function $f(x) = ab^x$ when both outputs are nonzero with the same sign. For a geometric sequence, an even number of steps between the known terms leaves $r = \\pm\\sqrt[\\,n]{\\text{ratio}}$, so you need extra information such as "positive terms" to pin down $r$.

### Linear Through $(2, 11)$ and $(6, 31)$

- Slope: $m = \\frac{31 - 11}{6 - 2} = 5$
- Point form: $f(x) = 11 + 5(x - 2)$
- Initial value: $f(0) = 11 - 10 = 1$, so $f(x) = 1 + 5x$

### Exponential Through $(2, 12)$ and $(5, 96)$

- Ratio over $3$ units: $\\frac{96}{12} = 8 = b^3$, so $b = 2$
- Point form: $f(x) = 12 \\cdot 2^{\\,x - 2}$
- Initial value: $f(0) = 12 \\cdot 2^{-2} = 3$, so $f(x) = 3 \\cdot 2^x$

## 📊 Linear or Exponential from a Table

| $x$ | $0$ | $0.5$ | $1$ | $1.5$ |
|:--|:--|:--|:--|:--|
| $f(x)$ | $8$ | $12$ | $18$ | $27$ |

The inputs are equally spaced. The differences $4, 6, 9$ are not constant, but every ratio is $1.5$, so $f$ is **exponential**: its outputs change proportionally. (An exponential base must be positive and not equal to $1$.)

> 🔑 Linear functions are based on **addition**; exponential functions are based on **multiplication**.
      `
    },
    {
      id: 'p5-input',
      type: 'input-boxes' as const,
      content: `
**Build the Function** 🧮

**1)** A linear function passes through $(2, 11)$ and $(6, 31)$. Its slope $m$ = ?

**2)** For that linear function, $f(0)$ = ?

**3)** An exponential function $ab^x$ passes through $(2, 12)$ and $(5, 96)$. Its base $b$ = ?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['5', '1', '2'],
        hint1: 'Change in output over change in input: $\\frac{31 - 11}{6 - 2}$.',
        hint2: 'Step back $2$ units from $x = 2$: $11 - 2(5)$.',
        hint3: 'Divide the outputs: $\\frac{96}{12} = b^{5-2}$.',
        explanation: '1) $\\frac{20}{4} = 5$. 2) $f(0) = 11 - 10 = 1$. 3) $b^3 = 8$, so $b = 2$.'
      }
    },
    {
      id: 'p5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Sequences and Functions** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: '$g_n = 5(2)^n$ and $f(x) = 5(2)^x$ differ in their:',
            options: ['Initial values', 'Domains', 'Common ratios', 'Outputs at $3$'],
            correctAnswer: 1
          },
          {
            label: 'Linear functions are built on repeated:',
            options: ['Multiplication', 'Exponentiation', 'Addition', 'Subtraction'],
            correctAnswer: 2
          },
          {
            label: 'In $f(x) = y_i \\, b^{\\,x - x_i}$, the pair $(x_i, y_i)$ is:',
            options: ['A known point on the graph', 'The horizontal asymptote', 'The point where $f$ is zero', 'The base and the exponent'],
            correctAnswer: 0
          },
          {
            label: 'How many points (with positive outputs) are needed to determine an exponential function $ab^x$?',
            options: ['Only one', 'Two', 'Three', 'Four'],
            correctAnswer: 1
          }
        ],
        correctAnswers: ['Domains', 'Addition', 'A known point on the graph', 'Two'],
        hint1: 'The rules match; ask which inputs each one accepts.',
        hint2: 'Initial value plus a constant rate, again and again.',
        hint3: 'The point form starts from a value you already know.',
        explanation: 'The sequence takes whole-number inputs while the function takes all real numbers. Linear functions add a constant rate. $(x_i, y_i)$ is a known point. Two points with positive outputs fix both $a$ and $b$.'
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
            question: 'The data $(0, 5)$, $(2, 9)$, $(4, 13)$, $(6, 17)$ fit which model?',
            options: ['$y = 5 + 2x$', '$y = 5 + 4x$', '$y = 5(1.8)^x$', '$y = 5 \\cdot 2^x$'],
            correctAnswer: 0,
            explanation: 'The outputs rise by $4$ every $2$ units of input, a constant rate of $2$ per unit, so the model is linear: $y = 5 + 2x$. Using $4$ as the slope ignores that the inputs step by $2$.'
          },
          {
            question: 'Using a calculator, for $f(x) = 400(0.5)^x$, what is $f(1.5)$ to the nearest tenth?',
            options: ['$141.4$', '$150$', '$100$', '$200$'],
            correctAnswer: 0,
            explanation: '$400(0.5)^{1.5} \\approx 400(0.35355) \\approx 141.4$. The value $150$ is halfway between $f(1) = 200$ and $f(2) = 100$, which treats the decay as linear.'
          }
        ]
      }
    }
  ]
};
