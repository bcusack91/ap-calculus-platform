export const calcabTablesDataPart4Data = {
  topicSlug: 'tables-data-calcab',
  sections: [
    {
      id: 'td4-intro',
      type: 'text' as const,
      content: `# Working with Tables & Data

**Part 4 of 7 \u2014 MVT & IVT with Tables**

### Mean Value Theorem (MVT) with Tables

If $f$ is continuous on $[a,b]$ and differentiable on $(a,b)$:

$$\\boxed{\\exists\\, c \\in (a,b) \\text{ such that } f'(c) = \\frac{f(b) - f(a)}{b - a}}$$

### Intermediate Value Theorem (IVT) with Tables

If $f$ is continuous on $[a,b]$ and $k$ is between $f(a)$ and $f(b)$:

$$\\boxed{\\exists\\, c \\in (a,b) \\text{ such that } f(c) = k}$$

### Comparison

| Theorem | Hypothesis | Conclusion |
|:---|:---|:---|
| MVT | Continuous + differentiable | Guarantees a specific $f'(c)$ |
| IVT | Continuous only | Guarantees $f$ attains a value $k$ |

> **AP Tip:** You MUST cite the theorem by name and verify all hypotheses for full credit.

### Worked Example \u2014 MVT

| $x$ | 1 | 4 | 7 |
|:---:|:---:|:---:|:---:|
| $f(x)$ | 3 | 12 | 6 |

$f$ is differentiable on $(1,4)$.

By MVT, $\\exists\\, c \\in (1,4)$ such that $f'(c) = \\frac{12 - 3}{4 - 1} = 3$.

### Worked Example \u2014 IVT

$f$ is continuous. $f(1) = 3$, $f(4) = 12$.

Since $5$ is between $3$ and $12$, by IVT $\\exists\\, c \\in (1,4)$ such that $f(c) = 5$.

### MVT for $f'$ (Second Derivative)

If $f'$ values are in a table and $f'$ is differentiable:

$$f''(c) = \\frac{f'(b) - f'(a)}{b - a}$$

This is MVT applied to $f'$ (guarantees $f''(c)$ exists).`
    },
    {
      id: 'td4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Practice \u2014 MVT & IVT** \ud83c\udfaf\n\n$f$ is continuous and differentiable.\n\n| $x$ | 2 | 5 | 8 | 11 |\n|:---:|:---:|:---:|:---:|:---:|\n| $f(x)$ | 1 | 10 | 4 | 13 |',
      exercise: {
        questions: [
          {
            question: 'By MVT on $[2,5]$, there exists $c$ where $f\'(c) =$',
            options: ['$3$', '$9$', '$\\frac{10}{5}$', '$5$'],
            correctAnswer: 0,
            explanation: '$f\'(c) = \\frac{f(5)-f(2)}{5-2} = \\frac{10-1}{3} = 3$.'
          },
          {
            question: 'By IVT, can we guarantee $f(c) = 7$ for some $c \\in (2,5)$?',
            options: ['Yes \u2014 $7$ is between $f(2)=1$ and $f(5)=10$', 'No \u2014 $7$ is not in the range', 'Only by MVT', 'Cannot tell'],
            correctAnswer: 0,
            explanation: '$f(2)=1 < 7 < 10 = f(5)$. By IVT (continuous), $\\exists\\, c \\in (2,5)$ with $f(c)=7$.'
          },
          {
            question: 'By MVT on $[2,11]$, $f\'(c) =$',
            options: ['$\\frac{4}{3}$', '$3$', '$4$', '$\\frac{12}{9}$'],
            correctAnswer: 0,
            explanation: '$f\'(c) = \\frac{13-1}{11-2} = \\frac{12}{9} = \\frac{4}{3}$.'
          }
        ]
      }
    },
    {
      id: 'td4-dropdown',
      type: 'dropdown-select' as const,
      content: '**Apply the theorems.** \ud83d\udd0d\n\n$g$ is continuous on $[0,10]$. $g(0) = -3$, $g(4) = 5$, $g(7) = 2$, $g(10) = 8$.',
      exercise: {
        dropdowns: [
          {
            label: 'Can IVT guarantee $g(c) = 0$ for some $c \\in (0,4)$?',
            options: ['Yes \u2014 $0$ is between $-3$ and $5$', 'No \u2014 $g$ might skip $0$', 'Only if $g$ is differentiable', 'Need more data'],
            correctAnswers: ['Yes \u2014 $0$ is between $-3$ and $5$'],
            hints: ['$g(0) = -3 < 0 < 5 = g(4)$.'],
            explanation: '$-3 < 0 < 5$. By IVT, $g(c) = 0$ for some $c \\in (0,4)$.'
          },
          {
            label: 'Can IVT guarantee $g(c) = 6$ for some $c \\in (4,7)$?',
            options: ['No', 'Yes', 'Only by MVT', 'Cannot tell'],
            correctAnswers: ['No'],
            hints: ['$g(4) = 5$ and $g(7) = 2$. Is $6$ between them?'],
            explanation: '$g(4)=5$ and $g(7)=2$. $6$ is NOT between $2$ and $5$, so IVT does not apply here.'
          },
          {
            label: 'If $g$ is also differentiable, MVT on $[0,10]$ gives $g\'(c) =$',
            options: ['$11/10$', '$8/10$', '$5/4$', '$3/7$'],
            correctAnswers: ['$11/10$'],
            hints: ['$\\frac{g(10)-g(0)}{10-0}$.'],
            explanation: '$g\'(c) = \\frac{8-(-3)}{10-0} = \\frac{11}{10}$.'
          }
        ]
      }
    },
    {
      id: 'td4-input',
      type: 'input-box' as const,
      content: '**Apply MVT.** \u270d\ufe0f\n\n$h$ is differentiable. $h(2) = 7$, $h(8) = 19$.',
      exercise: {
        question: 'By MVT, there exists $c \\in (2,8)$ where $h\'(c) = a/b$ in lowest terms. Enter **$a + b$**.',
        correctAnswer: '3',
        acceptableAnswers: ['3'],
        hints: [
          '$h\'(c) = \\frac{h(8) - h(2)}{8 - 2}$.',
          '$= \\frac{19 - 7}{6} = \\frac{12}{6} = 2$.',
          '$2 = 2/1$, so $a + b = 2 + 1 = 3$.'
        ],
        explanation: '$h\'(c) = \\frac{12}{6} = 2 = \\frac{2}{1}$. $a + b = 3$.'
      }
    },
    {
      id: 'td4-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 4

- MVT guarantees a specific derivative value between two points
- IVT guarantees a function attains any value between $f(a)$ and $f(b)$
- Both require continuity; MVT also requires differentiability
- Always cite the theorem by name on the AP exam`
    }
  ]
};
