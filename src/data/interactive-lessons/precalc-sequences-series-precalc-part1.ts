export const precalcSequencesPart1Data = {
  topicSlug: 'sequences-series-precalc',
  sections: [
    {
      id: 'p1-intro',
      type: 'text' as const,
      content: `
# 📊 Sequences — Arithmetic Sequences

**Part 1 of 7 — Arithmetic Sequences**

### What Is a Sequence?

A **sequence** is an ordered list of numbers following a pattern. Each number is called a **term**.

$$a_1, a_2, a_3, \\ldots, a_n, \\ldots$$

### Arithmetic Sequences

An **arithmetic sequence** has a constant difference between consecutive terms:

$$a_n = a_1 + (n-1)d$$

where $d = a_{n+1} - a_n$ is the **common difference**.

AP Precalculus usually counts from term $0$: $a_n = a_0 + dn$, or from any known term $a_k$: $a_n = a_k + d(n-k)$. The familiar $a_1 + (n-1)d$ is just the $k = 1$ case. The list $2, 7, 12, 17, \\ldots$ can be written $a_n = 2 + 5(n-1)$ from term $1$ or $a_n = 2 + 5n$ from term $0$ — the same list, differing only in which index labels the first term.

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
## 📝 Finding Terms and Positions

### The $n$th Term Formula

$$a_n = a_1 + (n-1)d$$

**Example**: $a_1=3, d=4$. Find $a_{20}$:

$a_{20} = 3 + 19(4) = 79$

### Which Term Is It?

Which term of $7, 11, 15, \\ldots$ equals $99$?

$99 = 7 + (n-1)(4) \\implies 92 = 4(n-1) \\implies n - 1 = 23 \\implies n = 24$

So $99$ is $a_{24}$.

### In Context

A theater's first row has $20$ seats and each row after it has $2$ more. Row $15$ has

$a_{15} = 20 + 14(2) = 48$ seats.

> 💡 Adding up the terms of a sequence (a series) is not on the AP Precalculus exam. The exam asks for terms, rates of change, and the functions that sequences resemble.
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

### Missing Terms Between Two Known Terms

Find the three terms between $a_0 = 2$ and $a_4 = 14$:

$14 = 2 + 4d \\implies d = 3$.

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
            options: ['$4$', '$-4$', '$6$', '$8$'],
            correctAnswer: 1,
            explanation: '$d = 6-10 = -4$.'
          },
          {
            question: 'Which term of $7, 11, 15, \\ldots$ equals $99$?',
            options: ['$a_{24}$', '$a_{23}$', '$a_{25}$', '$a_{22}$'],
            correctAnswer: 0,
            explanation: '$99 = 7 + 4(n-1)$ gives $n - 1 = 23$, so $n = 24$. Stopping at $n - 1 = 23$ gives $a_{23}$, which is $95$.'
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

**2)** A theater's first row has $20$ seats and each later row has $2$ more. Seats in row $15$:

**3)** $a_3=11, a_7=23$. Find $d$:
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['68', '48', '3'],
        hint1: '$a_{10} = 5+9(7) = 68$.',
        hint2: '$a_{15} = 20 + (15-1)(2)$.',
        hint3: '$23-11 = 4d \\implies d = 3$.',
        explanation: '1) $5 + 63 = 68$. 2) $20 + 28 = 48$ seats. 3) Four steps from $a_3$ to $a_7$ add $12$, so $d = 3$.'
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
            label: 'To get from $a_1$ to $a_{20}$, you add $d$ this many times:',
            options: ['$20$', '$19$', '$21$'],
            correctAnswer: 1
          },
          {
            label: 'If $d < 0$, the sequence is:',
            options: ['Growing', 'Decreasing', 'Constant'],
            correctAnswer: 1
          },
          {
            label: 'The 1000th term of $1, 2, 3, 4, \\ldots$ is:',
            options: ['$999$', '$1000$', '$1001$', '$500$'],
            correctAnswer: 1
          }
        ],
        correctAnswers: ['Common difference', '$19$', 'Decreasing', '$1000$'],
        hint1: 'Arithmetic = constant difference between terms.',
        hint2: 'The first term takes zero steps, so count the steps from $1$ to $20$.',
        hint3: 'Negative $d$ means each term is smaller.',
        explanation: 'Arithmetic: common difference. From $a_1$ to $a_{20}$ is $19$ steps. Negative $d$: decreasing. $a_{1000}=1+999(1)=1000$.'
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
            question: 'A savings jar holds \\$35 after week $1$, and \\$5 is added every week after that. In which week does it first hold \\$100?',
            options: ['Week $13$', 'Week $14$', 'Week $15$', 'Week $20$'],
            correctAnswer: 1,
            explanation: '$a_n = 35 + 5(n-1) = 100$ gives $n - 1 = 13$, so $n = 14$. Week $13$ holds only \\$95, and dividing \\$100 by \\$5 gives $20$, which ignores the starting \\$35.'
          }
        ]
      }
    }
  ]
};
