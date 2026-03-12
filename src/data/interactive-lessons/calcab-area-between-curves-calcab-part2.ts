export const calcabAreaCurvesPart2Data = {
  topicSlug: 'area-between-curves-calcab',
  sections: [
    {
      id: 'area2-intro',
      type: 'text' as const,
      content: `# Area Between Curves

**Part 2 of 7 — When Curves Switch Position**

### Splitting the Integral

When the "top" and "bottom" curves switch, split into separate integrals:

$$A = \\int_a^c [f(x) - g(x)]\\,dx + \\int_c^b [g(x) - f(x)]\\,dx$$

Or equivalently: $A = \\int_a^b |f(x) - g(x)|\\,dx$

### Worked Example

Find the area between $y = x^3$ and $y = x$ on $[-1, 1]$.

Intersections: $x^3 = x$ → $x(x^2-1) = 0$ → $x = -1, 0, 1$

- On $[-1, 0]$: $x^3 \\geq x$ (test $x = -0.5$: $-0.125 > -0.5$)
- On $[0, 1]$: $x \\geq x^3$ (test $x = 0.5$: $0.5 > 0.125$)

$$A = \\int_{-1}^0 (x^3 - x)\\,dx + \\int_0^1 (x - x^3)\\,dx = \\frac{1}{4} + \\frac{1}{4} = \\frac{1}{2}$$`
    },
    {
      id: 'area2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Curves that Cross** 🎯',
      exercise: {
        questions: [
          {
            question: 'Find the area between $y = x^2 - 1$ and $y = -x^2 + 1$ on $[-1, 1]$.',
            options: ['$\\frac{4}{3}$', '$\\frac{8}{3}$', '$0$', '$4$'],
            correctAnswer: 1,
            explanation: '$-x^2+1 \\geq x^2-1$ on $[-1,1]$. $A = \\int_{-1}^1 [(-x^2+1)-(x^2-1)]\\,dx = \\int_{-1}^1 (2-2x^2)\\,dx = 2[2x - \\frac{2x^3}{3}]_0^1 = 2(2-\\frac{2}{3}) = \\frac{8}{3}$.'
          }
        ]
      }
    },
    {
      id: 'area2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

1. When curves cross, split the integral at each intersection
2. Always use $|\\text{top} - \\text{bottom}|$ to get positive area
3. Test a point in each subinterval to determine which is on top`
    }
  ]
};
