export const calcabInverseFunctionsPart2Data = {
  topicSlug: 'inverse-functions-derivatives-calcab',
  sections: [
    {
      id: 'inv2-intro',
      type: 'text' as const,
      content: `# Inverse Functions & Their Derivatives

**Part 2 of 7 \u2014 Table-Based Inverse Problems**

### The AP Favorite

The AP exam frequently gives a **table** of $f$ and $f'$ values and asks for $(f^{-1})'$ at a point.

$$\\boxed{(f^{-1})'(a) = \\frac{1}{f'(b)} \\quad \\text{where } f(b) = a}$$

### Strategy with Tables

| Step | What to Do |
|:---:|:---:|
| 1 | Look up: which $b$ has $f(b) = a$? |
| 2 | Read $f'(b)$ from the table |
| 3 | Answer: $\\frac{1}{f'(b)}$ |

### Worked Example

| $x$ | $f(x)$ | $f'(x)$ |
|:---:|:---:|:---:|
| 1 | 5 | 3 |
| 2 | 8 | 6 |
| 3 | 12 | 4 |

> Find $(f^{-1})'(8)$.

$f(2) = 8 \\Rightarrow b = 2$. $f'(2) = 6$.

$$(f^{-1})'(8) = \\frac{1}{f'(2)} = \\boxed{\\frac{1}{6}}$$

### Common Pitfall

> **Key Fact:** Students often confuse the input. $(f^{-1})'(\\mathbf{8})$ asks about the $f$-value, not the $x$-value. Find the row where $f(x) = 8$, NOT where $x = 8$.`
    },
    {
      id: 'inv2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Practice \u2014 Table Problems** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: 'Table: $f(1)=4, f\'(1)=2, f(2)=7, f\'(2)=5, f(4)=10, f\'(4)=3$. Find $(f^{-1})\'(4)$.',
            options: ['$\\frac{1}{2}$', '$\\frac{1}{3}$', '$\\frac{1}{5}$', '$3$'],
            correctAnswer: 0,
            explanation: '$f(1)=4 \\Rightarrow b=1$. $f\'(1)=2$. $(f^{-1})\'(4) = 1/2$.'
          },
          {
            question: 'Same table. Find $(f^{-1})\'(10)$.',
            options: ['$\\frac{1}{3}$', '$\\frac{1}{5}$', '$\\frac{1}{2}$', '$3$'],
            correctAnswer: 0,
            explanation: '$f(4)=10 \\Rightarrow b=4$. $f\'(4)=3$. $(f^{-1})\'(10) = 1/3$.'
          },
          {
            question: 'If $g = f^{-1}$ and $g(7) = 2$, then $f(2) = $',
            options: ['$7$', '$2$', '$\\frac{1}{7}$', 'Cannot determine'],
            correctAnswer: 0,
            explanation: '$g(7) = 2$ means $f^{-1}(7) = 2$, so $f(2) = 7$.'
          }
        ]
      }
    },
    {
      id: 'inv2-dropdown',
      type: 'dropdown-select' as const,
      content: '**Identify the correct step.** \ud83d\udd0d',
      exercise: {
        dropdowns: [
          {
            label: 'For $(f^{-1})\'(a)$, look in the table for:',
            options: ['Row where $f(x) = a$', 'Row where $x = a$', 'Row where $f\'(x) = a$', 'The last row'],
            correctAnswers: ['Row where $f(x) = a$'],
            hints: ['$f(b)=a$ tells you $b = f^{-1}(a)$.'],
            explanation: 'Look for $a$ in the $f(x)$ column, not the $x$ column.'
          },
          {
            label: 'Table has $f(3)=5, f\'(3)=0$. $(f^{-1})\'(5)$ is:',
            options: ['Undefined', '$0$', '$\\frac{1}{5}$', 'Infinite'],
            correctAnswers: ['Undefined'],
            hints: ['$1/f\'(3) = 1/0$.'],
            explanation: '$f\'(3)=0$ means the inverse has a vertical tangent at $x=5$.'
          },
          {
            label: 'You need $(f^{-1})\'(6)$ but no row has $f(x)=6$. Then:',
            options: ['Cannot find exact answer from the table', 'Use $x=6$ row instead', '$\\frac{1}{6}$', 'Answer is 0'],
            correctAnswers: ['Cannot find exact answer from the table'],
            hints: ['You need $f(b) = 6$ to apply the formula.'],
            explanation: 'Without a row where $f(x)=6$, you cannot apply the formula directly.'
          }
        ]
      }
    },
    {
      id: 'inv2-input',
      type: 'input-box' as const,
      content: '**Table problem.** \u270d\ufe0f',
      exercise: {
        question: 'Table: $f(0)=3, f\'(0)=4, f(3)=9, f\'(3)=2, f(9)=15, f\'(9)=7$.\n\nFind $(f^{-1})\'(9)$. Answer $= \\frac{1}{a}$. Enter $a$.\n\n(Enter an integer.)',
        correctAnswer: '2',
        acceptableAnswers: ['2'],
        hints: [
          'Which row has $f(x) = 9$? $f(3) = 9$.',
          'So $b = 3$ and $f\'(3) = 2$.',
          '$(f^{-1})\'(9) = 1/2$. So $a = 2$.'
        ],
        explanation: '$f(3) = 9 \\Rightarrow (f^{-1})\'(9) = \\frac{1}{f\'(3)} = \\frac{1}{2}$.'
      }
    },
    {
      id: 'inv2-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 2

- Table problems: look for $f(b) = a$ in the $f(x)$ column
- Common mistake: using the $x$-column instead of $f(x)$-column
- If $f'(b) = 0$, the inverse derivative is undefined
- This is one of the most common AP MC question types`
    }
  ]
};
