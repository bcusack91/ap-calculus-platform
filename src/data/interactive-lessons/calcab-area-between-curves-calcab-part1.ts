export const calcabAreaCurvesPart1Data = {
  topicSlug: 'area-between-curves-calcab',
  sections: [
    {
      id: 'area1-intro',
      type: 'text' as const,
      content: `# Area Between Curves

**Part 1 of 7 — Area Between Two Curves**

### The Formula

For two functions where $f(x) \\geq g(x)$ on $[a, b]$:

$$A = \\int_a^b [f(x) - g(x)]\\,dx$$

**Top function minus bottom function.**

### Worked Example

Find the area between $y = x^2$ and $y = x + 2$.

**Step 1:** Find intersection points.
$x^2 = x + 2$ → $x^2 - x - 2 = 0$ → $(x-2)(x+1) = 0$ → $x = -1, 2$

**Step 2:** Determine which is on top. At $x = 0$: $y = 0$ vs $y = 2$. So $x + 2$ is on top.

**Step 3:** Integrate.
$$A = \\int_{-1}^{2} [(x+2) - x^2]\\,dx = \\left[\\frac{x^2}{2} + 2x - \\frac{x^3}{3}\\right]_{-1}^{2}$$

$$= \\left(2 + 4 - \\frac{8}{3}\\right) - \\left(\\frac{1}{2} - 2 + \\frac{1}{3}\\right) = \\frac{10}{3} - \\left(-\\frac{7}{6}\\right) = \\frac{27}{6} = \\frac{9}{2}$$`
    },
    {
      id: 'area1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Area Between Curves** 🎯',
      exercise: {
        questions: [
          {
            question: 'Find the area between $y = x^2$ and $y = 4$.',
            options: ['$\\frac{32}{3}$', '$\\frac{16}{3}$', '$8$', '$\\frac{64}{3}$'],
            correctAnswer: 0,
            explanation: 'Intersect: $x^2 = 4$ at $x = \\pm 2$. $A = \\int_{-2}^{2} (4 - x^2)\\,dx = 2\\int_0^2 (4-x^2)\\,dx = 2[4x - \\frac{x^3}{3}]_0^2 = 2(8 - \\frac{8}{3}) = 2 \\cdot \\frac{16}{3} = \\frac{32}{3}$.'
          },
          {
            question: 'Find the area between $y = \\sin x$ and $y = 0$ on $[0, \\pi]$.',
            options: ['$1$', '$2$', '$\\pi$', '$0$'],
            correctAnswer: 1,
            explanation: '$\\sin x \\geq 0$ on $[0, \\pi]$. $A = \\int_0^{\\pi} \\sin x\\,dx = [-\\cos x]_0^{\\pi} = 1 + 1 = 2$.'
          }
        ]
      }
    },
    {
      id: 'area1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

1. Area = $\\int$ (top curve $-$ bottom curve)
2. Always find intersection points first
3. Check which function is on top by testing a point in the interval`
    }
  ]
};
