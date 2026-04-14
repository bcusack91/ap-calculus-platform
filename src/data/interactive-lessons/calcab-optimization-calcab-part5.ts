export const calcabOptimizationPart5Data = {
  topicSlug: 'optimization-calcab',
  sections: [
    {
      id: 'opt5-intro',
      type: 'text' as const,
      content: `# Optimization

**Part 5 of 7 \u2014 Distance & Mixed Problems**

### Distance Optimization

When minimizing the distance from a point $(a,b)$ to a curve $y = f(x)$:

$$\\boxed{D^2 = (x-a)^2 + (f(x)-b)^2}$$

> **Key Fact:** Always minimize $D^2$ \u2014 it shares the same critical points as $D$ and avoids square roots.

### Worked Example: Wire-Cutting

> A wire of length 20 is cut into two pieces. One is bent into a square, the other into a circle. What cut minimizes total area?

Let $x =$ circumference of circle, $20-x =$ perimeter of square.

Circle: $r = \\frac{x}{2\\pi}$, area $= \\frac{x^2}{4\\pi}$

Square: side $= \\frac{20-x}{4}$, area $= \\frac{(20-x)^2}{16}$

$$A(x) = \\frac{x^2}{4\\pi} + \\frac{(20-x)^2}{16}$$

$$A'(x) = \\frac{x}{2\\pi} - \\frac{20-x}{8} = 0$$

$$\\frac{4x}{8\\pi} = \\frac{\\pi(20-x)}{8\\pi} \\quad \\Rightarrow \\quad 4x = 20\\pi - \\pi x$$

$$x = \\frac{20\\pi}{\\pi + 4} \\approx 8.80$$

### Special Optimization Patterns

| Pattern | Key Idea |
|:---:|:---:|
| Max/min with absolute value | Split into cases |
| Optimization on closed interval | Check critical points AND endpoints |
| Profit with discrete units | Check both integers near the critical point |
| Constrained by two inequalities | Domain may be restricted |`
    },
    {
      id: 'opt5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Practice \u2014 Mixed Problems** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: 'Find the point on $y = x^2$ closest to $(0, 1)$.',
            options: ['$(\\frac{1}{\\sqrt{2}},\\frac{1}{2})$', '$(0, 0)$', '$(1, 1)$', '$(2, 4)$'],
            correctAnswer: 0,
            explanation: '$D^2 = x^2 + (x^2-1)^2 = x^4 - x^2 + 1$. $\\frac{d}{dx}D^2 = 4x^3 - 2x = 2x(2x^2-1) = 0$. $x = 0$ or $x = \\pm 1/\\sqrt{2}$. $D^2(0)=1$, $D^2(1/\\sqrt{2}) = 3/4 < 1$. So $(1/\\sqrt{2}, 1/2)$ is closest.'
          },
          {
            question: 'A wire of length $L$ is cut. One piece forms a circle, the other a square. To minimize total area, the circle gets length:',
            options: ['$\\frac{L\\pi}{\\pi + 4}$', '$L/2$', '$0$', '$L$'],
            correctAnswer: 0,
            explanation: 'Minimizing $A(x) = \\frac{x^2}{4\\pi} + \\frac{(L-x)^2}{16}$ gives $x = \\frac{L\\pi}{\\pi+4}$.'
          },
          {
            question: 'On a closed interval $[a,b]$, the absolute maximum of $f$ occurs at:',
            options: ['A critical point or an endpoint', 'Only at critical points', 'Only at endpoints', 'Where $f\'\' < 0$'],
            correctAnswer: 0,
            explanation: 'The Extreme Value Theorem says continuous functions on $[a,b]$ achieve max/min. Check all critical points AND endpoints.'
          }
        ]
      }
    },
    {
      id: 'opt5-dropdown',
      type: 'dropdown-select' as const,
      content: '**Choose correctly.** \ud83d\udd0d',
      exercise: {
        dropdowns: [
          {
            label: 'To minimize distance from $(3,0)$ to $y = \\sqrt{x}$, minimize:',
            options: ['$(x-3)^2 + x$', '$\\sqrt{(x-3)^2 + x}$', '$(x-3)^2 + \\sqrt{x}$', '$|x-3| + \\sqrt{x}$'],
            correctAnswers: ['$(x-3)^2 + x$'],
            hints: ['$D^2 = (x-3)^2 + (\\sqrt{x})^2 = (x-3)^2 + x$.'],
            explanation: '$(\\sqrt{x})^2 = x$, so $D^2 = (x-3)^2 + x$.'
          },
          {
            label: 'On a closed interval, after finding critical points you must also:',
            options: ['Evaluate $f$ at the endpoints', 'Check the second derivative', 'Find inflection points', 'Nothing else'],
            correctAnswers: ['Evaluate $f$ at the endpoints'],
            hints: ['Absolute extrema on $[a,b]$: compare all candidates.'],
            explanation: 'On a closed interval, absolute max/min can occur at endpoints or critical points. Evaluate $f$ at all of them.'
          },
          {
            label: 'The wire-cutting problem has how many endpoints to check?',
            options: ['Two: $x = 0$ and $x = 20$', 'None', 'One: $x = 0$', 'Three'],
            correctAnswers: ['Two: $x = 0$ and $x = 20$'],
            hints: ['$x$ ranges from $0$ (all for square) to $20$ (all for circle).'],
            explanation: 'Domain is $[0, 20]$. The critical point minimizes area; endpoints give all-square or all-circle.'
          }
        ]
      }
    },
    {
      id: 'opt5-input',
      type: 'input-box' as const,
      content: '**Solve.** \u270d\ufe0f',
      exercise: {
        question: 'Find the point on $y = \\sqrt{x}$ closest to $(3, 0)$. If the $x$-coordinate is $\\frac{a}{b}$ in lowest terms, find $a + b$.\n\n(Enter an integer.)',
        correctAnswer: '7',
        acceptableAnswers: ['7'],
        hints: [
          '$D^2 = (x-3)^2 + x$.',
          '$\\frac{d}{dx}D^2 = 2(x-3) + 1 = 2x - 5 = 0$.',
          '$x = 5/2$. So $a + b = 5 + 2 = 7$.'
        ],
        explanation: '$x = 5/2$. In lowest terms: $a = 5$, $b = 2$. $a + b = 7$.'
      }
    },
    {
      id: 'opt5-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 5

- Minimize $D^2$ for closest-point problems (avoids square roots)
- Wire-cutting/splitting problems: express total in one variable
- Closed interval: always check endpoints AND critical points
- Discrete constraints: check both nearby integers`
    }
  ]
};
