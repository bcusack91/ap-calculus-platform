export const precalcSequencesPart5Data = {
  topicSlug: 'sequences-series-precalc',
  sections: [
    {
      id: 'p5-intro',
      type: 'text' as const,
      content: `
# 🔁 Recursive Sequences & Special Sequences

**Part 5 of 7**

### Recursive vs. Explicit Formulas

| Type | Definition | Example |
|:-----|:-----------|:--------|
| **Explicit** | $a_n$ as a function of $n$ | $a_n = 3n+1$ |
| **Recursive** | $a_n$ in terms of previous terms | $a_n = a_{n-1}+3$, $a_1=4$ |

### The Fibonacci Sequence

$$F_1=1, F_2=1, F_n = F_{n-1}+F_{n-2}$$

$1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, \\ldots$

Each term is the sum of the two preceding terms.

> 💡 The ratio of consecutive Fibonacci numbers approaches the **Golden Ratio** $\\phi = \\frac{1+\\sqrt{5}}{2} \\approx 1.618$.
      `
    },
    {
      id: 'p5-recursive',
      type: 'text' as const,
      content: `
## 📝 Working with Recursive Formulas

### Example 1: $a_1=2, a_n=3a_{n-1}-1$

$a_1 = 2$
$a_2 = 3(2)-1 = 5$
$a_3 = 3(5)-1 = 14$
$a_4 = 3(14)-1 = 41$

### Example 2: Converting Recursive → Explicit

Given: $a_1 = 5, a_n = a_{n-1}+4$

This is arithmetic with $d=4$: $a_n = 5+4(n-1) = 4n+1$.

### Example 3: Logistic Growth

$$P_{n+1} = r \\cdot P_n(1-P_n)$$

This recursive formula models population growth with limited resources. Unlike geometric growth, it accounts for carrying capacity.
      `
    },
    {
      id: 'p5-special',
      type: 'text' as const,
      content: `
## 🌟 Special Sequences

### Triangular Numbers
$1, 3, 6, 10, 15, 21, \\ldots$ → $T_n = \\frac{n(n+1)}{2}$

### Square Numbers
$1, 4, 9, 16, 25, \\ldots$ → $S_n = n^2$

### Factorial Sequence
$1, 1, 2, 6, 24, 120, \\ldots$ → $n! = n(n-1)(n-2)\\cdots 1$

### Powers of 2
$1, 2, 4, 8, 16, 32, \\ldots$ → $a_n = 2^{n-1}$

### Harmonic Sequence
$1, \\frac{1}{2}, \\frac{1}{3}, \\frac{1}{4}, \\ldots$ → $a_n = \\frac{1}{n}$

> The harmonic series $\\sum \\frac{1}{n}$ diverges — even though terms go to 0!
      `
    },
    {
      id: 'p5-mcq',
      type: 'multiple-choice' as const,
      content: `
**Recursive Sequences Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'If $a_1=1, a_n=2a_{n-1}+1$, find $a_4$:',
            options: ['$7$', '$9$', '$15$', '$31$'],
            correctAnswer: 2,
            explanation: '$a_2=3, a_3=7, a_4=2(7)+1=15$.'
          },
          {
            question: 'The 10th Fibonacci number is:',
            options: ['$34$', '$55$', '$89$', '$144$'],
            correctAnswer: 1,
            explanation: '$1,1,2,3,5,8,13,21,34,55$. The 10th term is $55$.'
          },
          {
            question: 'The 6th triangular number is:',
            options: ['$15$', '$18$', '$21$', '$28$'],
            correctAnswer: 2,
            explanation: '$T_6 = \\frac{6(7)}{2} = 21$.'
          }
        ]
      }
    },
    {
      id: 'p5-input',
      type: 'input-boxes' as const,
      content: `
**Recursive Calculations** 🧮

For $a_1=3, a_n=a_{n-1}^2-2$:

**1)** $a_2$ = ?

**2)** $a_3$ = ?

**3)** What is $5!$ (5 factorial)?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['7', '47', '120'],
        hint1: '$a_2 = 3^2-2 = 7$.',
        hint2: '$a_3 = 7^2-2 = 47$.',
        hint3: '$5! = 5 \\times 4 \\times 3 \\times 2 \\times 1 = 120$.',
        explanation: '1) $7$. 2) $47$. 3) $120$.'
      }
    },
    {
      id: 'p5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Special Sequences Concepts** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The Fibonacci sequence is defined:',
            options: ['Explicitly', 'Recursively', 'Both equivalently'],
            correctAnswer: 1
          },
          {
            label: 'The Golden Ratio $\\phi$ approximately equals:',
            options: ['$1.414$', '$1.618$', '$2.718$', '$3.14$'],
            correctAnswer: 1
          },
          {
            label: 'The harmonic series $\\sum 1/n$:',
            options: ['Converges to 1', 'Converges to $\\pi$', 'Diverges'],
            correctAnswer: 2
          },
          {
            label: 'An arithmetic sequence can always be defined:',
            options: ['Only recursively', 'Only explicitly', 'Both recursively and explicitly'],
            correctAnswer: 2
          }
        ],
        correctAnswers: ['Recursively', '$1.618$', 'Diverges', 'Both recursively and explicitly'],
        hint1: 'Fibonacci: $F_n = F_{n-1}+F_{n-2}$ — defined using previous terms.',
        hint2: '$\\phi = (1+\\sqrt{5})/2 \\approx 1.618$.',
        hint3: 'The harmonic series diverges despite terms approaching 0.',
        explanation: 'Fibonacci: recursive. $\\phi \\approx 1.618$. Harmonic series diverges. Arithmetic: both recursive ($a_n = a_{n-1}+d$) and explicit ($a_n = a_1+(n-1)d$).'
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
            question: '$a_1=100, a_n=a_{n-1}/2$. What is $a_5$?',
            options: ['$12.5$', '$6.25$', '$25$', '$50$'],
            correctAnswer: 1,
            explanation: '$100, 50, 25, 12.5, 6.25$. This is geometric with $r=1/2$.'
          },
          {
            question: 'The recursive formula $a_n = a_{n-1}+d$ defines which type?',
            options: ['Geometric', 'Arithmetic', 'Fibonacci', 'Harmonic'],
            correctAnswer: 1,
            explanation: 'Adding a constant difference $d$ each time is arithmetic.'
          }
        ]
      }
    }
  ]
};
