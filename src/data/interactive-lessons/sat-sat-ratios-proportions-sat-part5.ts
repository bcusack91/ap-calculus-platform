export const satRatiosPart5Data = {
  topicSlug: 'sat-ratios-proportions-sat',
  sections: [
    {
      id: 'sat-rp5-intro',
      type: 'text' as const,
      content: `
# 🔗 Direct & Inverse Variation

**Part 5 of 7 — $y = kx$, $y = k/x$, Identifying from Tables & Solving**

**Direct variation:** $y$ is directly proportional to $x$:

$$y = kx \\qquad \\text{or equivalently} \\qquad \\frac{y}{x} = k$$

The constant $k$ is called the **constant of proportionality**.

**Example 1:** If $y$ varies directly with $x$, and $y = 12$ when $x = 4$, find $k$ and the equation.

$$k = \\frac{y}{x} = \\frac{12}{4} = 3 \\implies y = 3x$$

**How to identify direct variation from a table:** Compute $y/x$ for each row. If the ratio is constant, the relationship is direct.

| $x$ | $y$ | $y/x$ |
|-----|-----|--------|
| 2 | 6 | 3 |
| 5 | 15 | 3 |
| 8 | 24 | 3 |

Constant ratio → direct variation with $k = 3$.
      `
    },
    {
      id: 'sat-rp5-inverse',
      type: 'text' as const,
      content: `
## Inverse Variation

$y$ is **inversely proportional** to $x$:

$$y = \\frac{k}{x} \\qquad \\text{or equivalently} \\qquad xy = k$$

**Example 2:** If $y$ varies inversely with $x$, and $y = 10$ when $x = 3$, find $y$ when $x = 6$.

$$k = xy = 3 \\times 10 = 30 \\implies y = \\frac{30}{6} = 5$$

**How to identify inverse variation from a table:** Compute $x \\cdot y$ for each row. If the product is constant, the relationship is inverse.

| $x$ | $y$ | $x \\cdot y$ |
|-----|-----|------------|
| 2 | 15 | 30 |
| 5 | 6 | 30 |
| 10 | 3 | 30 |

Constant product → inverse variation with $k = 30$.

---

**Comparison Summary:**

| Feature | Direct ($y = kx$) | Inverse ($y = k/x$) |
|---------|-------------------|---------------------|
| Graph | Line through origin | Hyperbola |
| Test | $y/x$ constant | $xy$ constant |
| As $x$ increases | $y$ increases | $y$ decreases |
      `
    },
    {
      id: 'sat-rp5-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Variation Type** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'If $y = 48/x$, what happens to $y$ when $x$ is tripled?',
            options: ['$y$ triples', '$y$ is divided by 3', '$y$ stays the same', '$y$ is multiplied by 9'],
            correctAnswer: 1,
            explanation: 'Inverse variation: $y = 48/(3x) = (1/3)(48/x)$. So $y$ is divided by 3.'
          },
          {
            question: 'Which table shows direct variation?',
            options: ['$x: 1,2,3$ / $y: 5,10,20$', '$x: 1,2,3$ / $y: 4,8,12$', '$x: 1,2,4$ / $y: 12,6,3$', '$x: 2,4,8$ / $y: 1,3,5$'],
            correctAnswer: 1,
            explanation: '$y/x$ = $4/1, 8/2, 12/3$ = $4, 4, 4$. Constant ratio confirms direct variation.'
          }
        ]
      }
    },
    {
      id: 'sat-rp5-solving',
      type: 'text' as const,
      content: `
## Solving Variation Problems

**Example 3 — Direct:** The cost $C$ of gasoline varies directly with the number of gallons $g$ purchased. If 8 gallons cost \$28, how much do 15 gallons cost?

$$k = \\frac{C}{g} = \\frac{28}{8} = 3.50 \\implies C = 3.50 \\times 15 = \\$52.50$$

**Example 4 — Inverse:** The time $t$ to complete a job varies inversely with the number of workers $w$. If 6 workers finish in 10 hours, how long will 4 workers take?

$$k = wt = 6 \\times 10 = 60 \\implies t = \\frac{60}{4} = 15 \\text{ hours}$$

**Example 5 — Joint:** $z$ varies directly with $x$ and inversely with $y$: $z = kx/y$. If $z = 8$ when $x = 4$ and $y = 3$:

$$8 = \\frac{4k}{3} \\implies k = 6 \\implies z = \\frac{6x}{y}$$

Find $z$ when $x = 10, y = 5$: $z = 60/5 = 12$.
      `
    },
    {
      id: 'sat-rp5-input1',
      type: 'input-boxes' as const,
      content: `
**Variation Practice** 🧮

1) $y$ varies directly with $x$. If $y = 20$ when $x = 8$, find $y$ when $x = 14$.
2) $y$ varies inversely with $x$. If $y = 9$ when $x = 4$, find $y$ when $x = 12$.
3) The product $xy$ for a data set is always $60$. What is $y$ when $x = 15$?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['35', '3', '4'],
        hint1: '$k = 20/8 = 2.5$. $y = 2.5 \\times 14$.',
        hint2: '$k = 9 \\times 4 = 36$. $y = 36/12$.',
        hint3: '$y = 60/15$.',
        explanation: '$y = 2.5 \\times 14 = 35$. $y = 36/12 = 3$. $y = 60/15 = 4$.'
      }
    },
    {
      id: 'sat-rp5-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Variation Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The graph of $y = kx$ (direct variation) always passes through …',
            options: ['$(1, 1)$', '$(0, k)$', '$(0, 0)$', '$(k, 0)$']
          },
          {
            label: 'For inverse variation, the test on a data table is to check whether … is constant.',
            options: ['$y / x$', '$x + y$', '$x \\cdot y$', '$x - y$']
          },
          {
            label: 'If $y = kx$ and $k = 7$, what is $y$ when $x = 0$?',
            options: ['$7$', '$0$', '$1$', 'undefined']
          }
        ],
        correctAnswers: ['$(0, 0)$', '$x \\cdot y$', '$0$'],
        hint1: 'When $x = 0$, $y = k(0) = 0$.',
        hint2: 'Inverse: $xy = k$, so check the product.',
        hint3: '$y = 7(0) = 0$.',
        explanation: 'Direct variation lines pass through the origin. Inverse variation: $xy = k$. $y = 7 \\cdot 0 = 0$.'
      }
    },
    {
      id: 'sat-rp5-sat',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'The number of hours $h$ it takes to paint a house varies inversely with the number of painters $p$. If 3 painters can finish in 8 hours, how many painters are needed to finish in 2 hours?',
            options: ['$6$', '$8$', '$12$', '$24$'],
            correctAnswer: 2,
            explanation: '$k = 3 \\times 8 = 24$. $p = 24/2 = 12$ painters.'
          },
          {
            question: 'If $y$ varies directly with $x^2$, and $y = 50$ when $x = 5$, what is $y$ when $x = 3$?',
            options: ['$18$', '$30$', '$12$', '$6$'],
            correctAnswer: 0,
            explanation: '$y = kx^2$. $50 = k(25) \\implies k = 2$. $y = 2(9) = 18$.'
          }
        ]
      }
    }
  ]
};
