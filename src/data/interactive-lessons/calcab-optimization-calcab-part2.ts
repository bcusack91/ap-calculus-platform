export const calcabOptimizationPart2Data = {
  topicSlug: 'optimization-calcab',
  sections: [
    {
      id: 'opt2-intro',
      type: 'text' as const,
      content: `# Optimization

**Part 2 of 7 \u2014 Geometric Optimization**

### Classic Geometry Problems

| Problem Type | Setup |
|:---:|:---:|
| Box from sheet | Cut squares of side $x$ from corners, fold up |
| Rectangle in parabola | Vertices at $(\\pm x, 0)$ and $(\\pm x, f(x))$ |
| Closest point | Minimize $D^2 = (x-a)^2 + (f(x)-b)^2$ |
| Inscribed shapes | Express dimensions using the curve equation |

### Worked Example: Open-Top Box

> An open-top box is made by cutting squares of side $x$ from the corners of a $12 \\times 8$ sheet and folding up.

$$V(x) = x(12-2x)(8-2x)$$

**Domain:** $0 < x < 4$

$$V = 4x^3 - 40x^2 + 96x$$
$$V'(x) = 12x^2 - 80x + 96 = 4(3x^2 - 20x + 24)$$

$$x = \\frac{20 \\pm \\sqrt{400-288}}{6} = \\frac{20 \\pm \\sqrt{112}}{6}$$

$x \\approx 1.57$ (only solution in domain). $\\boxed{V_{\\max} \\approx 67.6 \\text{ cubic units}}$

> **AP Tip:** When asked to "set up but do not solve," write $V(x)$, state the domain, and show $V'(x) = 0$. You earn full credit without solving the quadratic.

### Worked Example: Closest Point

> Find the point on $y = \\sqrt{x}$ closest to $(3, 0)$.

Minimize $D^2 = (x-3)^2 + (\\sqrt{x})^2 = (x-3)^2 + x$

$$\\frac{d}{dx}D^2 = 2(x-3) + 1 = 2x - 5 = 0 \\quad \\Rightarrow \\quad x = \\frac{5}{2}$$

Point: $\\left(\\frac{5}{2},\\, \\sqrt{\\frac{5}{2}}\\right)$

> **Key Fact:** Always minimize $D^2$ instead of $D$ \u2014 it avoids square roots and gives the same critical points.`
    },
    {
      id: 'opt2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Practice \u2014 Geometric Optimization** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: 'A rectangle inscribed under $y = 12 - x^2$ (base on x-axis) has area $A = 2x(12-x^2)$. Find the $x$ that maximizes area.',
            options: ['$x = 2$', '$x = \\sqrt{3}$', '$x = 1$', '$x = 3$'],
            correctAnswer: 0,
            explanation: '$A = 24x - 2x^3$. $A\' = 24 - 6x^2 = 0$ at $x^2 = 4$, so $x = 2$.'
          },
          {
            question: 'When minimizing the distance from a point to a curve, we minimize $D^2$ instead of $D$ because:',
            options: ['It avoids square roots and gives the same critical points', 'It changes the answer', '$D$ is always negative', '$D^2$ is easier to integrate'],
            correctAnswer: 0,
            explanation: '$D$ and $D^2$ have the same critical points since $D \\geq 0$. Using $D^2$ avoids the square root in the derivative.'
          },
          {
            question: 'An open-top box is made from a $20 \\times 20$ square by cutting squares of side $x$. The volume is:',
            options: ['$V = x(20-2x)^2$', '$V = x^2(20-2x)$', '$V = (20-2x)^3$', '$V = x(20-x)^2$'],
            correctAnswer: 0,
            explanation: 'After cutting, the base is $(20-2x) \\times (20-2x)$ and height is $x$. $V = x(20-2x)^2$.'
          }
        ]
      }
    },
    {
      id: 'opt2-dropdown',
      type: 'dropdown-select' as const,
      content: '**Identify the correct approach.** \ud83d\udd0d',
      exercise: {
        dropdowns: [
          {
            label: 'For the open-top box from a $20 \\times 20$ sheet, the domain of $x$ is:',
            options: ['$0 < x < 10$', '$0 < x < 20$', '$0 < x < 5$', '$x > 0$'],
            correctAnswers: ['$0 < x < 10$'],
            hints: ['The cut cannot exceed half the side length.'],
            explanation: '$20-)2x > 0$ requires $x < 10$. Also $x > 0$.'
          },
          {
            label: 'To inscribe a rectangle in a semicircle of radius $r$, the constraint is:',
            options: ['$x^2 + y^2 = r^2$', '$x + y = r$', '$xy = r^2$', '$2x + 2y = 2\\pi r$'],
            correctAnswers: ['$x^2 + y^2 = r^2$'],
            hints: ['The corner of the rectangle lies on the circle.'],
            explanation: 'The upper corners $(x, y)$ lie on the semicircle, so $x^2 + y^2 = r^2$.'
          },
          {
            label: 'After finding a critical point for a box volume, $V\'\'(x) < 0$ means:',
            options: ['The critical point is a maximum volume', 'The critical point is a minimum volume', 'The test is inconclusive', 'The box has no volume'],
            correctAnswers: ['The critical point is a maximum volume'],
            hints: ['Concave down = maximum.'],
            explanation: '$V\'\' < 0$ means concave down at the critical point, confirming a local maximum.'
          }
        ]
      }
    },
    {
      id: 'opt2-input',
      type: 'input-box' as const,
      content: '**Calculate.** \u270d\ufe0f',
      exercise: {
        question: 'A rectangle inscribed under $y = 12 - x^2$ (with base on the $x$-axis) has vertices at $(\\pm x, 0)$ and $(\\pm x, 12-x^2)$. Find the maximum area.\n\n(Enter an integer.)',
        correctAnswer: '32',
        acceptableAnswers: ['32'],
        hints: [
          '$A = 2x(12-x^2) = 24x - 2x^3$.',
          '$A\' = 24 - 6x^2 = 0$ at $x = 2$.',
          '$A(2) = 2(2)(12-4) = 4 \\times 8 = 32$.'
        ],
        explanation: '$A(2) = 2 \\cdot 2 \\cdot (12-4) = 32$.'
      }
    },
    {
      id: 'opt2-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 2

- Box-cutting problems: $V = x(L-2x)(W-2x)$, domain $0 < x < \\min(L,W)/2$
- Minimize $D^2$ for closest-point problems
- Inscribed rectangle under a curve: $A = 2x \\cdot f(x)$
- Always check domain endpoints for absolute max/min`
    }
  ]
};
