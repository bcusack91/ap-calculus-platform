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
            options: ['$(\\frac{1}{\\sqrt{2}},\\frac{1}{2})$', '$(0, 0)$', '$(\\sqrt{2}, 2)$', '$(\\frac{1}{2}, \\frac{1}{4})$'],
            correctAnswer: 0,
            explanation: '$D^2 = x^2 + (x^2-1)^2 = x^4 - x^2 + 1$. $\\frac{d}{dx}D^2 = 4x^3 - 2x = 2x(2x^2-1) = 0$. $x = 0$ or $x = \\pm 1/\\sqrt{2}$. $D^2(0)=1$, $D^2(1/\\sqrt{2}) = 3/4 < 1$. So $(1/\\sqrt{2}, 1/2)$ is closest (as is its mirror image). The point $(0,0)$ is the other critical point, solving $2x^2 = 1$ as $x^2 = 2$ gives $(\\sqrt{2}, 2)$, and taking $x = \\frac{1}{2}$ instead of $x^2 = \\frac{1}{2}$ gives $(\\frac{1}{2}, \\frac{1}{4})$.'
          },
          {
            question: 'A wire of length $L$ is cut. One piece forms a circle, the other a square. To minimize total area, the circle gets length:',
            options: ['$\\frac{L\\pi}{\\pi + 4}$', '$\\frac{4L}{\\pi + 4}$', '$0$', '$L$'],
            correctAnswer: 0,
            explanation: 'Minimizing $A(x) = \\frac{x^2}{4\\pi} + \\frac{(L-x)^2}{16}$ gives $x = \\frac{L\\pi}{\\pi+4}$. The length $\\frac{4L}{\\pi + 4}$ is what the square gets, and the endpoints $0$ and $L$ (all square or all circle) do not minimize the area.'
          },
          {
            question: 'On a closed interval $[a,b]$, the absolute maximum of $f$ occurs at:',
            options: ['A critical point or an endpoint', 'Only at critical points inside $(a,b)$', 'Only at the endpoints $x = a$ or $x = b$', 'Wherever $f\'\'(x) < 0$ on the interval'],
            correctAnswer: 0,
            explanation: 'The Extreme Value Theorem says continuous functions on $[a,b]$ achieve a max and a min. Check all critical points AND endpoints; either kind of point can be the answer.'
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
            options: ['Evaluate $f$ at the endpoints', 'Check the second derivative', 'Find inflection points', 'Nothing else is needed'],
            correctAnswers: ['Evaluate $f$ at the endpoints'],
            hints: ['Absolute extrema on $[a,b]$: compare all candidates.'],
            explanation: 'On a closed interval, absolute max/min can occur at endpoints or critical points. Evaluate $f$ at all of them.'
          },
          {
            label: 'The wire-cutting problem has how many endpoints to check?',
            options: ['Two: $x = 0$ and $x = 20$', 'None, since the interval is open', 'One: $x = 0$ only', 'Three: $0$, $10$, and $20$'],
            correctAnswers: ['Two: $x = 0$ and $x = 20$'],
            hints: ['$x$ ranges from $0$ (all for square) to $20$ (all for circle).'],
            explanation: 'The domain is the closed interval $[0, 20]$, so its two endpoints are checked along with the critical point. The critical point minimizes area; the endpoints give all-square or all-circle.'
          }
        ]
      }
    },
    {
      id: 'opt5-input',
      type: 'input-box' as const,
      content: '**Solve.** \u270d\ufe0f',
      exercise: {
        question: 'Find the $x$-coordinate of the point on $y = \\sqrt{x}$ closest to $(3, 0)$.',
        correctAnswer: '5/2',
        acceptableAnswers: ['5/2', '2.5'],
        hints: [
          '$D^2 = (x-3)^2 + x$.',
          '$\\frac{d}{dx}D^2 = 2(x-3) + 1 = 2x - 5 = 0$.',
          'Solve $2x - 5 = 0$.'
        ],
        explanation: 'Minimize $D^2 = (x-3)^2 + x$ for $x \\ge 0$: $\\frac{d}{dx}D^2 = 2x - 5$ is negative for $x < \\frac{5}{2}$ and positive for $x > \\frac{5}{2}$, so the only critical point $x = \\frac{5}{2}$ gives the minimum distance. The point is $\\left(\\frac{5}{2}, \\sqrt{\\frac{5}{2}}\\right)$.'
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
