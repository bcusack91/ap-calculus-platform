export const precalcSequencesPart3Data = {
  topicSlug: 'sequences-series-precalc',
  sections: [
    {
      id: 'p3-intro',
      type: 'text' as const,
      figure: {
        svg: '<svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><g class="fig-muted" stroke="currentColor" stroke-width="1" stroke-dasharray="4 4"><line x1="50" y1="166.25" x2="230" y2="31.25"/></g><g stroke="currentColor" stroke-width="1.5"><line x1="30" y1="200" x2="305" y2="200"/><line x1="50" y1="210" x2="50" y2="12"/></g><text x="300" y="214" font-size="12" fill="currentColor">n</text><text x="58" y="18" font-size="12" fill="currentColor" font-style="italic">a</text><text x="66" y="22" font-size="9" fill="currentColor" font-style="italic">n</text><g font-size="11" fill="currentColor" text-anchor="middle"><text x="50" y="214">0</text><text x="110" y="214">1</text><text x="170" y="214">2</text><text x="230" y="214">3</text><text x="290" y="214">4</text></g><g font-size="11" fill="currentColor" text-anchor="end"><text x="44" y="170">3</text><text x="44" y="125">7</text><text x="44" y="81">11</text><text x="44" y="35">15</text></g><g class="fig-muted" stroke="currentColor" stroke-width="1"><line x1="46" y1="166.25" x2="54" y2="166.25"/><line x1="46" y1="121.25" x2="54" y2="121.25"/><line x1="46" y1="77.5" x2="54" y2="77.5"/><line x1="46" y1="31.25" x2="54" y2="31.25"/></g><g class="fig-accent"><circle cx="50" cy="166.25" r="5" fill="currentColor"/><circle cx="110" cy="121.25" r="5" fill="currentColor"/><circle cx="170" cy="77.5" r="5" fill="currentColor"/><circle cx="230" cy="31.25" r="5" fill="currentColor"/></g></svg>',
        alt: 'Four separate dots at (0, 3), (1, 7), (2, 11) and (3, 15) on axes labeled n and a sub n. A faint dashed guide line passes through the dots, but nothing is drawn between them.',
        caption: 'Figure. The arithmetic sequence $a_n = 3 + 4n$ is four discrete points; the dashed guide only shows that they line up.',
      },
      content: `
# 📈 Sequences as Functions

**Part 3 of 7 — Sequences as Functions & General Terms**

### A Sequence Is a Function

A **sequence** is a function from the **whole numbers** to the real numbers: input $n$, output $a_n$. Because the inputs are separate whole numbers, the **graph of a sequence is a set of discrete points**, not a connected curve.

| $n$ | $0$ | $1$ | $2$ | $3$ |
|:--|:--|:--|:--|:--|
| $a_n$ | $3$ | $7$ | $11$ | $15$ |

Plotted (figure above), these are the four separate points $(0, 3), (1, 7), (2, 11), (3, 15)$. Nothing is drawn between them: there is no term $1.5$.

### Starting the Count at 0

The AP Precalculus course often labels the **initial value** as term $0$:

| Type | Starting at $a_0$ | Starting at $a_1$ |
|:-----|:------------------|:------------------|
| Arithmetic | $a_n = a_0 + dn$ | $a_n = a_1 + (n-1)d$ |
| Geometric | $g_n = g_0 r^n$ | $g_n = g_1 r^{n-1}$ |

Both columns describe the same list. Only the label of the first term changes, so always check where a problem starts counting.
      `
    },
    {
      id: 'p3-anyterm',
      type: 'text' as const,
      content: `
## 🔑 General Terms from Any Known Term

You don't need the first term. If you know **any** term and the common difference or ratio:

$$a_n = a_k + d(n - k) \\qquad\\qquad g_n = g_k \\, r^{\\,n - k}$$

The exponent or multiplier $n - k$ counts the steps from the known term $k$ to the term $n$ you want.

### Arithmetic Example

$a_6 = 40$ and $d = -3$:

- Rule: $a_n = 40 - 3(n - 6)$
- $a_{10} = 40 - 3(4) = 28$
- $a_0 = 40 - 3(-6) = 58$ (counting backward works too)

### Geometric Example

$g_4 = 162$ and $r = 3$:

- Rule: $g_n = 162 \\cdot 3^{\\,n - 4}$
- $g_6 = 162 \\cdot 3^2 = 1458$
- $g_2 = 162 \\cdot 3^{-2} = 18$
      `
    },
    {
      id: 'p3-mcq',
      type: 'multiple-choice' as const,
      content: `
**Sequences as Functions Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does the graph of a sequence look like?',
            options: ['Separate points, one for each whole-number input', 'A smooth unbroken curve through every input', 'A straight line through the origin', 'Vertical segments between consecutive inputs'],
            correctAnswer: 0,
            explanation: 'A sequence is defined only at whole-number inputs, so its graph is a set of discrete points. Even an arithmetic sequence is not drawn as a full line.'
          },
          {
            question: 'An arithmetic sequence has $a_6 = 40$ and $d = -3$. Which rule gives $a_n$?',
            options: ['$a_n = 40 - 3(n - 6)$', '$a_n = 40 - 3n$', '$a_n = 40 + 3(n - 6)$', '$a_n = -3 + 40(n - 6)$'],
            correctAnswer: 0,
            explanation: 'Use $a_n = a_k + d(n - k)$ with $k = 6$. The rule $40 - 3n$ would make $40$ the value at $n = 0$, not at $n = 6$.'
          },
          {
            question: 'A geometric sequence has $g_4 = 162$ and $r = 3$. What is $g_2$?',
            options: ['$18$', '$54$', '$486$', '$1458$'],
            correctAnswer: 0,
            explanation: '$g_2 = 162 \\cdot 3^{2-4} = 162 \\div 9 = 18$. Stepping back only once gives $54$, and $486$ and $1458$ step forward instead of back.'
          }
        ]
      }
    },
    {
      id: 'p3-twoterms',
      type: 'text' as const,
      content: `
## 🧩 Building a Rule from Two Terms

Two terms are enough to pin down an arithmetic or geometric sequence.

### Arithmetic: $a_4 = 10$ and $a_9 = 35$

- From term $4$ to term $9$ is $5$ steps: $35 - 10 = 5d$, so $d = 5$
- Rule: $a_n = 10 + 5(n - 4)$
- Initial value: $a_0 = 10 + 5(-4) = -10$, so also $a_n = -10 + 5n$

### Geometric: $g_2 = 12$ and $g_5 = 324$

- From term $2$ to term $5$ is $3$ steps: $\\frac{324}{12} = r^3$, so $r^3 = 27$ and $r = 3$
- Rule: $g_n = 12 \\cdot 3^{\\,n - 2}$
- Initial value: $g_0 = 12 \\cdot 3^{-2} = \\frac{4}{3}$

> ⚠️ For arithmetic sequences you **subtract** terms and divide by the number of steps. For geometric sequences you **divide** terms and take a root.
      `
    },
    {
      id: 'p3-input',
      type: 'input-boxes' as const,
      content: `
**General Term Practice** 🧮

**1)** An arithmetic sequence has $a_4 = 10$ and $a_9 = 35$. Find $d$:

**2)** For that same sequence, find $a_0$:

**3)** A geometric sequence has $g_2 = 12$ and $g_5 = 324$. Find $r$:
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['5', '-10', '3'],
        hint1: '$a_9 - a_4 = (9 - 4)d$.',
        hint2: 'Step back $4$ terms from $a_4$: $a_0 = a_4 - 4d$.',
        hint3: '$\\frac{g_5}{g_2} = r^{5-2} = r^3$.',
        explanation: '1) $25 = 5d$, so $d = 5$. 2) $a_0 = 10 - 20 = -10$. 3) $r^3 = 27$, so $r = 3$.'
      }
    },
    {
      id: 'p3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**General Terms Concepts** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'In $a_n = a_0 + dn$, the value $a_0$ is the:',
            options: ['Initial value', 'Common difference', 'Number of terms', 'Largest term listed'],
            correctAnswer: 0
          },
          {
            label: 'The rule $g_n = g_k r^{\\,n-k}$ is useful when you know:',
            options: ['Only the value of $n$', '$r$ and any one term', 'Two consecutive differences', 'Only the very first term'],
            correctAnswer: 1
          },
          {
            label: 'The sequence $5, 8, 11, \\ldots$ with $a_0 = 5$ is:',
            options: ['$a_n = 5 + 3(n-1)$', '$a_n = 3 + 5n$', '$a_n = 5 + 3n$', '$a_n = 5 \\cdot 3^n$'],
            correctAnswer: 2
          },
          {
            label: 'The inputs of a sequence are:',
            options: ['All real numbers', 'Whole numbers', 'Positive real numbers', 'Integers and fractions'],
            correctAnswer: 1
          }
        ],
        correctAnswers: ['Initial value', '$r$ and any one term', '$a_n = 5 + 3n$', 'Whole numbers'],
        hint1: 'It is the term at $n = 0$.',
        hint2: 'The formula starts from a known term $g_k$.',
        hint3: 'Starting at $a_0$, the term $a_n$ is $n$ steps from the start.',
        explanation: '$a_0$ is the initial value. $g_k r^{n-k}$ needs the ratio and any one term. With $a_0 = 5$ and $d = 3$, $a_n = 5 + 3n$. A sequence is a function of the whole numbers.'
      }
    },
    {
      id: 'p3-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'An arithmetic sequence has $a_3 = 14$ and $a_8 = 39$. What is $a_{20}$?',
            options: ['$99$', '$104$', '$109$', '$114$'],
            correctAnswer: 0,
            explanation: '$d = \\frac{39 - 14}{8 - 3} = 5$, so $a_{20} = 14 + 5(20 - 3) = 14 + 85 = 99$. Counting $18$ steps from $a_3$ gives $104$.'
          },
          {
            question: 'An increasing geometric sequence has $g_1 = 6$ and $g_3 = 54$. What is $g_5$?',
            options: ['$486$', '$162$', '$1458$', '$102$'],
            correctAnswer: 0,
            explanation: '$r^2 = \\frac{54}{6} = 9$ and the sequence increases, so $r = 3$. Then $g_5 = 54 \\cdot 3^2 = 486$. The value $162$ is $g_4$, and $102$ treats the pattern as adding $24$ each step instead of multiplying.'
          }
        ]
      }
    }
  ]
};
