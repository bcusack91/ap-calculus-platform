export const precalcSequencesPart1Data = {
  topicSlug: 'sequences-series-precalc',
  sections: [
    {
      id: 'p1-intro',
      type: 'text' as const,
      content: `
# 📊 Sequences & Series — Arithmetic Sequences

**Part 1 of 7**

### What Is a Sequence?

A **sequence** is an ordered list of numbers following a pattern. Each number is called a **term**.

$$a_1, a_2, a_3, \\ldots, a_n, \\ldots$$

### Arithmetic Sequences

An **arithmetic sequence** has a constant difference between consecutive terms:

$$a_n = a_1 + (n-1)d$$

where $d = a_{n+1} - a_n$ is the **common difference**.

### Examples

- $2, 5, 8, 11, 14, \\ldots$ → $d = 3$
- $20, 15, 10, 5, 0, \\ldots$ → $d = -5$
- $\\frac{1}{2}, 1, \\frac{3}{2}, 2, \\ldots$ → $d = \\frac{1}{2}$
      `
    },
    {
      id: 'p1-formulas',
      type: 'text' as const,
      content: `
## 📝 Finding Terms and Sums

### The $n$th Term Formula

$$a_n = a_1 + (n-1)d$$

**Example**: $a_1=3, d=4$. Find $a_{20}$:

$a_{20} = 3 + 19(4) = 79$

### Arithmetic Series (Sum)

$$S_n = \\frac{n}{2}(a_1 + a_n) = \\frac{n}{2}[2a_1 + (n-1)d]$$

**Example**: Sum the first $100$ positive integers.

$a_1 = 1, a_{100} = 100, n = 100$

$$S_{100} = \\frac{100}{2}(1+100) = 50 \\cdot 101 = 5050$$

> 💡 This is Gauss's famous result! He supposedly computed this as a schoolboy.
      `
    },
    {
      id: 'p1-application',
      type: 'text' as const,
      content: `
## 🧩 Applications

### Finding Unknown Terms

If $a_5 = 17$ and $a_{12} = 45$:

$a_{12} - a_5 = (12-5)d$

$45 - 17 = 7d \\implies d = 4$

$a_1 = a_5 - 4d = 17 - 16 = 1$

### Arithmetic Mean

The arithmetic mean of $a$ and $b$ is $\\frac{a+b}{2}$, which is the term between them in an arithmetic sequence.

Insert 3 arithmetic means between 2 and 14:

$a_1 = 2, a_5 = 14$. $14 = 2+4d \\implies d = 3$.

Sequence: $2, 5, 8, 11, 14$.
      `
    },
    {
      id: 'p1-mcq',
      type: 'multiple-choice' as const,
      content: `
**Arithmetic Sequences Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Find $a_{15}$ if $a_1 = 7$ and $d = -3$:',
            options: ['$-35$', '$-38$', '$52$', '$49$'],
            correctAnswer: 0,
            explanation: '$a_{15} = 7+14(-3) = 7-42 = -35$.'
          },
          {
            question: 'The common difference of $10, 6, 2, -2, \\ldots$ is:',
            options: ['$4$', '$-4$', '$6$', '$-6$'],
            correctAnswer: 1,
            explanation: '$d = 6-10 = -4$.'
          },
          {
            question: 'Find $S_{20}$ for $a_1=2, d=3$:',
            options: ['$610$', '$590$', '$620$', '$600$'],
            correctAnswer: 0,
            explanation: '$S_{20} = \\frac{20}{2}[2(2)+19(3)] = 10(4+57) = 10(61) = 610$.'
          }
        ]
      }
    },
    {
      id: 'p1-input',
      type: 'input-boxes' as const,
      content: `
**Arithmetic Sequence Practice** 🧮

**1)** $a_1=5, d=7$. Find $a_{10}$:

**2)** Sum of first $50$ positive integers: $S_{50}$ = ?

**3)** $a_3=11, a_7=23$. Find $d$:
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['68', '1275', '3'],
        hint1: '$a_{10} = 5+9(7) = 68$.',
        hint2: '$S_{50} = \\frac{50}{2}(1+50) = 25 \\cdot 51 = 1275$.',
        hint3: '$23-11 = 4d \\implies d = 3$.',
        explanation: '1) $68$. 2) $1275$. 3) $d = 3$.'
      }
    },
    {
      id: 'p1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Arithmetic Sequences Properties** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'In an arithmetic sequence, equal spacing means:',
            options: ['Common ratio', 'Common difference', 'Common factor'],
            correctAnswer: 1
          },
          {
            label: 'The sum formula $S_n = \\frac{n}{2}(a_1+a_n)$ averages:',
            options: ['First and last terms, multiplied by $n$', 'All terms individually', 'Only the middle term'],
            correctAnswer: 0
          },
          {
            label: 'If $d < 0$, the sequence is:',
            options: ['Increasing', 'Decreasing', 'Constant'],
            correctAnswer: 1
          },
          {
            label: 'The 1000th term of $1, 2, 3, 4, \\ldots$ is:',
            options: ['$999$', '$1000$', '$1001$', '$500$'],
            correctAnswer: 1
          }
        ],
        correctAnswers: ['Common difference', 'First and last terms, multiplied by $n$', 'Decreasing', '$1000$'],
        hint1: 'Arithmetic = constant difference between terms.',
        hint2: 'Average of first and last, times number of terms.',
        hint3: 'Negative $d$ means each term is smaller.',
        explanation: 'Arithmetic: common difference. Sum: average of endpoints × count. Negative $d$: decreasing. $a_{1000}=1+999(1)=1000$.'
      }
    },
    {
      id: 'p1-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'An arithmetic sequence has $a_1=100$ and $d=-7$. Which term is the first negative?',
            options: ['$a_{14}$', '$a_{15}$', '$a_{16}$', '$a_{17}$'],
            correctAnswer: 2,
            explanation: '$a_n = 100-7(n-1) < 0 \\implies 7(n-1) > 100 \\implies n-1 > 14.28 \\implies n \\geq 16$. $a_{16} = 100-105 = -5$.'
          },
          {
            question: 'The sum $5+10+15+\\cdots+500$ equals:',
            options: ['$24750$', '$25000$', '$25250$', '$50500$'],
            correctAnswer: 2,
            explanation: '$n = 100$ terms, $S = \\frac{100}{2}(5+500) = 50(505) = 25250$.'
          }
        ]
      }
    }
  ]
};
