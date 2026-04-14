export const calcabOptimizationPart6Data = {
  topicSlug: 'optimization-calcab',
  sections: [
    {
      id: 'opt6-intro',
      type: 'text' as const,
      content: `# Optimization

**Part 6 of 7 \u2014 AP-Style Workshop**

### AP FRQ Optimization Patterns

| Pattern | What They Ask | Key Steps |
|:---:|:---:|:---:|
| Geometric | "Find dimensions that maximize/minimize..." | Draw diagram, label, constrain |
| Applied | "At what rate/quantity is profit maximized?" | $P = R - C$, set $P' = 0$ |
| Justification | "Justify that your answer is a maximum" | Second derivative test or endpoints |
| Setup only | "Write but do not solve..." | Show objective, constraint, domain |

### Full Worked AP Problem

> A rectangle has one side on the $x$-axis, the upper two vertices on $y = 4 - x^2$.
>
> **(a)** Express the area $A$ in terms of $x$.
>
> **(b)** Find the value of $x$ that maximizes $A$.
>
> **(c)** Justify that your answer gives a maximum.

**Solution (a):** Vertices at $(\\pm x, 0)$ and $(\\pm x, 4-x^2)$. Width $= 2x$, height $= 4-x^2$.
$$A(x) = 2x(4-x^2) = 8x - 2x^3, \\quad 0 < x < 2$$

**Solution (b):** $A'(x) = 8 - 6x^2 = 0 \\Rightarrow x^2 = 4/3 \\Rightarrow x = \\frac{2}{\\sqrt{3}} = \\frac{2\\sqrt{3}}{3}$

**Solution (c):** $A''(x) = -12x$. At $x = 2\\sqrt{3}/3$: $A'' = -12 \\cdot \\frac{2\\sqrt{3}}{3} < 0$.

Since $A'' < 0$ at the critical point, $A$ is concave down there, so this gives a **maximum**.

$$A_{\\max} = 2 \\cdot \\frac{2\\sqrt{3}}{3}\\left(4 - \\frac{4}{3}\\right) = \\frac{4\\sqrt{3}}{3} \\cdot \\frac{8}{3} = \\frac{32\\sqrt{3}}{9}$$

> **AP Tip:** On justification, you must state the Second Derivative Test result AND explicitly conclude "maximum" or "minimum." Just computing $f''$ is not enough.`
    },
    {
      id: 'opt6-quiz1',
      type: 'multiple-choice' as const,
      content: '**AP-Style Practice** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: 'Two positive numbers have product 100. Their sum is minimized when they are:',
            options: ['$10$ and $10$', '$5$ and $20$', '$1$ and $100$', '$25$ and $4$'],
            correctAnswer: 0,
            explanation: '$xy=100$, minimize $S=x+100/x$. $S\'=1-100/x^2=0$ at $x=10$. $y=10$.'
          },
          {
            question: 'A page has 1-inch margins on all sides. Print area is 24 sq in. The page width that minimizes paper area is:',
            options: ['$2+2\\sqrt{6}$ inches', '$6$ inches', '$4+2$ inches', '$8$ inches'],
            correctAnswer: 0,
            explanation: 'Print: $(w-2)(h-2)=24$, $h=24/(w-2)+2$. $A=wh$. Calculus gives $w=2+2\\sqrt{6}$.'
          },
          {
            question: 'Which justification is sufficient for "the critical point is a maximum"?',
            options: ['$f\'\'(c) < 0$ at the critical point $c$', '$f\'(c) = 0$', '$f$ is continuous', '$f(c)$ is positive'],
            correctAnswer: 0,
            explanation: 'Second Derivative Test: $f\'(c)=0$ and $f\'\'(c)<0$ implies local maximum at $c$.'
          }
        ]
      }
    },
    {
      id: 'opt6-dropdown',
      type: 'dropdown-select' as const,
      content: '**AP steps.** \ud83d\udd0d',
      exercise: {
        dropdowns: [
          {
            label: 'In "write but do not solve," you should still include:',
            options: ['The equation $f\'(x) = 0$ and the domain', 'The numerical answer', 'A graph', 'The second derivative'],
            correctAnswers: ['The equation $f\'(x) = 0$ and the domain'],
            hints: ['Show the setup completely.'],
            explanation: 'Write the objective, apply the constraint, take the derivative, write $f\'(x)=0$, and state the domain.'
          },
          {
            label: 'For "justify your answer is a maximum," the strongest approach is:',
            options: ['Second Derivative Test: $f\'\'(c) < 0$', 'Plugging in nearby values', 'Saying "it looks like a maximum"', 'Checking the graph'],
            correctAnswers: ['Second Derivative Test: $f\'\'(c) < 0$'],
            hints: ['AP graders look for a rigorous test.'],
            explanation: 'The Second Derivative Test or the first derivative sign-change test (candidates test on closed interval) are accepted justifications.'
          },
          {
            label: 'If the domain is a closed interval $[a,b]$, you should:',
            options: ['Compare $f$ at critical points AND endpoints', 'Only check critical points', 'Only check endpoints', 'Use the Second Derivative Test'],
            correctAnswers: ['Compare $f$ at critical points AND endpoints'],
            hints: ['Extreme Value Theorem.'],
            explanation: 'On a closed interval, absolute max/min could be at critical points or endpoints. Evaluate $f$ at all candidates.'
          }
        ]
      }
    },
    {
      id: 'opt6-input',
      type: 'input-box' as const,
      content: '**AP Problem.** \u270d\ufe0f',
      exercise: {
        question: 'A rectangle inscribed under $y = 9 - x^2$ (with base on the $x$-axis) has $A(x) = 2x(9-x^2)$. Find the maximum area.\n\nIf the answer is $a\\sqrt{b}$, find $a + b$.\n\n(Enter an integer.)',
        correctAnswer: '15',
        acceptableAnswers: ['15'],
        hints: [
          '$A = 18x - 2x^3$. $A\' = 18 - 6x^2 = 0$.',
          '$x^2 = 3$, $x = \\sqrt{3}$.',
          '$A = 2\\sqrt{3}(9-3) = 12\\sqrt{3}$. So $a = 12$, $b = 3$.'
        ],
        explanation: '$A(\\sqrt{3}) = 2\\sqrt{3} \\cdot 6 = 12\\sqrt{3}$. $a + b = 12 + 3 = 15$.'
      }
    },
    {
      id: 'opt6-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 6

- AP FRQs require complete justification for max/min
- "Write but do not solve" earns credit for setup
- Second Derivative Test is the standard justification
- On closed intervals, compare all candidates (critical points + endpoints)`
    }
  ]
};
