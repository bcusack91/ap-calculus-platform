export const calcabLinearizationPart6Data = {
  topicSlug: 'linearization-differentials-calcab',
  sections: [
    {
      id: 'lin6-intro',
      type: 'text' as const,
      content: `# Linearization & Differentials

**Part 6 of 7 \u2014 AP-Style Workshop**

### AP FRQ Patterns

| Pattern | What They Ask |
|:---:|:---:|
| Table + tangent line | "Use the tangent line at $x = a$ to approximate $f(b)$" |
| Over/under | "Is your estimate an over- or underestimate? Justify." |
| Differential | "What is $dy$ when $x = a$ and $dx = h$?" |
| Setup | "Write the linearization of $f$ at $x = a$" |

### Full Worked AP Problem

> The table below gives values of a twice-differentiable function $f$.
>
> | $x$ | $0$ | $1$ | $2$ | $3$ |
> |:---:|:---:|:---:|:---:|:---:|
> | $f(x)$ | $4$ | $7$ | $3$ | $1$ |
> | $f'(x)$ | $2$ | $-1$ | $-3$ | $-2$ |
>
> **(a)** Write the linearization of $f$ at $x = 2$.
>
> **(b)** Use your answer to approximate $f(1.8)$.
>
> **(c)** Given $f''(2) = -1$, is your estimate an over- or underestimate? Justify.

**Solution (a):** $L(x) = f(2) + f'(2)(x-2) = 3 + (-3)(x-2) = 3 - 3(x-2)$

**Solution (b):** $L(1.8) = 3 - 3(1.8-2) = 3 - 3(-0.2) = 3 + 0.6 = 3.6$

**Solution (c):** Since $f''(2) = -1 < 0$, $f$ is concave down near $x = 2$. The tangent line lies **above** the curve, so $3.6$ is an **overestimate**.

> **AP Tip:** For "justify," you must state the concavity ($f'' < 0$), explain what it means (concave down), and conclude (tangent above curve = overestimate).`
    },
    {
      id: 'lin6-quiz1',
      type: 'multiple-choice' as const,
      content: '**AP-Style Practice** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: 'Given $f(4) = 10$, $f\'(4) = 3$. The tangent line at $x = 4$ gives $f(4.5) \\approx$',
            options: ['$11.5$', '$13$', '$10.5$', '$10.3$'],
            correctAnswer: 0,
            explanation: '$L(4.5) = 10 + 3(0.5) = 11.5$.'
          },
          {
            question: 'If $f\'\'(x) > 0$ for all $x$ near $a$, and we use the tangent at $a$ to approximate $f(a+h)$ for $h > 0$, the result is:',
            options: ['An underestimate', 'An overestimate', 'Exact', 'Depends on $h$'],
            correctAnswer: 0,
            explanation: '$f\'\' > 0$ means concave up: tangent is below the curve, so the approximation is an underestimate.'
          },
          {
            question: 'The linearization of $f(x) = e^x$ at $a = 1$ is:',
            options: ['$L(x) = e + e(x-1)$', '$L(x) = 1 + x$', '$L(x) = e^x$', '$L(x) = e(x-1)$'],
            correctAnswer: 0,
            explanation: '$f(1) = e$, $f\'(1) = e$. $L(x) = e + e(x-1)$.'
          }
        ]
      }
    },
    {
      id: 'lin6-dropdown',
      type: 'dropdown-select' as const,
      content: '**Justify your reasoning.** \ud83d\udd0d',
      exercise: {
        dropdowns: [
          {
            label: 'Using $L$ at $a = 0$ for $\\sin x$: $\\sin(0.5) \\approx 0.5$. Since $\\sin\'\'(0) = 0$ and $\\sin\'\'(x) < 0$ for $0 < x < \\pi$:',
            options: ['This is an overestimate', 'This is an underestimate', 'This is exact', 'Cannot determine'],
            correctAnswers: ['This is an overestimate'],
            hints: ['$\\sin\'\'(x) = -\\sin x < 0$ for $x \\in (0, \\pi)$.'],
            explanation: 'Near $x = 0.5$, $\\sin\'\'(0.5) < 0$ (concave down), so the tangent overestimates.'
          },
          {
            label: 'To get a better approximation of $f(3.1)$, use linearization at:',
            options: ['$a = 3$', '$a = 0$', '$a = 4$', '$a = 1$'],
            correctAnswers: ['$a = 3$'],
            hints: ['Closer is better.'],
            explanation: '$a = 3$ is closest to $3.1$, minimizing the error.'
          },
          {
            label: 'An AP justification for over/underestimate must include:',
            options: ['Sign of $f\'\'$, concavity conclusion, and over/under statement', 'Just the word "overestimate"', 'Only $f\'\'$ value', 'A graph'],
            correctAnswers: ['Sign of $f\'\'$, concavity conclusion, and over/under statement'],
            hints: ['All three pieces are needed for full credit.'],
            explanation: 'State $f\'\' > 0$ (or $< 0$), conclude concave up (or down), then state under/overestimate.'
          }
        ]
      }
    },
    {
      id: 'lin6-input',
      type: 'input-box' as const,
      content: '**AP Problem.** \u270d\ufe0f',
      exercise: {
        question: 'Given $f(3) = 10$ and $f\'(3) = -4$. Use the tangent line to approximate $f(3.5)$.\n\n(Enter an integer.)',
        correctAnswer: '8',
        acceptableAnswers: ['8'],
        hints: [
          '$L(x) = f(3) + f\'(3)(x-3)$.',
          '$L(3.5) = 10 + (-4)(0.5)$.',
          '$= 10 - 2 = 8$.'
        ],
        explanation: '$L(3.5) = 10 + (-4)(0.5) = 10 - 2 = 8$.'
      }
    },
    {
      id: 'lin6-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 6

- AP FRQs often combine table data with linearization
- Always justify over/underestimate with concavity
- Three-part justification: sign of $f''$, concavity, conclusion
- The tangent line approximation is exact when $f$ is linear`
    }
  ]
};
