export const calcabDefiniteIntegralsPart1Data = {
  topicSlug: 'definite-integrals-calcab',
  sections: [
    {
      id: 'int1-intro',
      type: 'text' as const,
      content: `# \u222B Riemann Sums

**Part 1 of 7 \u2014 Riemann Sums**

### The Area Problem

How do we find the exact area under a curve? We **approximate** it using rectangles, then take the limit as the number of rectangles approaches infinity.

### Left, Right, and Midpoint Sums

For $f(x)$ on $[a, b]$ with $n$ subintervals of width $\\Delta x = \\frac{b-a}{n}$:

$$L_n = \\sum_{i=0}^{n-1} f(x_i) \\Delta x \\quad \\text{(Left Riemann Sum)}$$

$$R_n = \\sum_{i=1}^{n} f(x_i) \\Delta x \\quad \\text{(Right Riemann Sum)}$$

$$M_n = \\sum_{i=1}^{n} f\\left(\\frac{x_{i-1}+x_i}{2}\\right) \\Delta x \\quad \\text{(Midpoint Sum)}$$

### Worked Example

**Approximate** $\\int_0^4 x^2\\,dx$ **using a Left Riemann Sum with** $n = 4$.

$\\Delta x = \\frac{4-0}{4} = 1$. Left endpoints: $x = 0, 1, 2, 3$.

$$L_4 = f(0)(1) + f(1)(1) + f(2)(1) + f(3)(1) = 0 + 1 + 4 + 9 = 14$$

(The exact answer is $\\frac{64}{3} \\approx 21.33$, so $L_4 = 14$ is an underestimate since $f$ is increasing.)`
    },
    {
      id: 'int1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Compute Riemann Sums** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: 'Approximate $\\int_0^4 x^2\\,dx$ using a Right Riemann Sum with $n = 4$.',
            options: ['$14$', '$30$', '$21.33$', '$20$'],
            correctAnswer: 1,
            explanation: 'Right endpoints: $x = 1, 2, 3, 4$. $R_4 = 1 + 4 + 9 + 16 = 30$.'
          },
          {
            question: 'If $f$ is increasing on $[a,b]$, which Riemann sum overestimates?',
            options: ['Left', 'Right', 'Midpoint', 'None'],
            correctAnswer: 1,
            explanation: 'For an increasing function, the right endpoint is always the highest value on each subinterval, so the Right Riemann Sum overestimates.'
          }
        ]
      }
    },
    {
      id: 'int1-text2',
      type: 'text' as const,
      content: `### Trapezoidal Rule

The trapezoidal rule averages the left and right sums:

$$T_n = \\frac{L_n + R_n}{2} = \\frac{\\Delta x}{2}[f(x_0) + 2f(x_1) + 2f(x_2) + \\cdots + 2f(x_{n-1}) + f(x_n)]$$

### Worked Example

**Trapezoidal approximation of** $\\int_0^4 x^2\\,dx$ **with** $n = 4$:

$$T_4 = \\frac{14 + 30}{2} = 22$$

This is much closer to the exact value of $\\frac{64}{3} \\approx 21.33$.

> **AP Tip:** The trapezoidal rule with data from a table is one of the most common AP free-response questions.`
    },
    {
      id: 'int1-quiz2',
      type: 'multiple-choice' as const,
      content: '**Trapezoidal Rule from a Table** \ud83c\udfaf\n\nGiven the table:\n\n| $x$ | 0 | 2 | 5 | 8 | 10 |\n|-----|---|---|---|---|----|\n| $f(x)$ | 3 | 7 | 11 | 6 | 4 |',
      exercise: {
        questions: [
          {
            question: 'Use the trapezoidal rule to approximate $\\int_0^{10} f(x)\\,dx$.',
            options: ['$62$', '$72.5$', '$67$', '$82$'],
            correctAnswer: 1,
            explanation: '$T = \\frac{2}{2}(3+7) + \\frac{3}{2}(7+11) + \\frac{3}{2}(11+6) + \\frac{2}{2}(6+4) = 10 + 27 + 25.5 + 10 = 72.5$.'
          }
        ]
      }
    },
    {
      id: 'int1-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 1

1. **Riemann Sums** approximate the area under a curve using rectangles
2. **Left/Right/Midpoint** use different sample points within each subinterval
3. For increasing functions: Left underestimates, Right overestimates
4. **Trapezoidal Rule** averages Left and Right sums for better accuracy
5. More rectangles ($n \\to \\infty$) means the sum approaches the exact integral`
    }
  ]
};
