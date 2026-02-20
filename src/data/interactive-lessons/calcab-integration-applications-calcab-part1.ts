export const calcabIntAppsPart1Data = {
  topicSlug: 'integration-applications-calcab',
  sections: [
    {
      id: 'ia1-intro',
      type: 'text' as const,
      content: `# Integration Applications

**Part 1 of 7 — Area Between Curves (Advanced)**

### Area Between Two Curves

$$A = \int_a^b |f(x) - g(x)|\,dx$$

When $f(x) \geq g(x)$ on $[a,b]$:

$$A = \int_a^b [f(x) - g(x)]\,dx$$

### When Curves Cross

Split the integral at intersection points!

### Worked Example

Area between $y = x^2$ and $y = x$ on $[0, 1]$:

Intersection: $x^2 = x \implies x = 0, 1$.

On $[0,1]$: $x \geq x^2$.

$A = \int_0^1 (x - x^2)\,dx = \left[\frac{x^2}{2} - \frac{x^3}{3}\right]_0^1 = \frac{1}{2} - \frac{1}{3} = \frac{1}{6}$`
    },
    {
      id: 'ia1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Area Between Curves** 🎯',
      exercise: {
        questions: [
          {
            question: 'Find the area enclosed by $y = x^2$ and $y = 2x$.',
            options: ['$\\frac{4}{3}$', '$\\frac{2}{3}$', '$2$', '$\\frac{8}{3}$'],
            correctAnswer: 0,
            explanation: 'Intersect: $x^2 = 2x \\implies x = 0, 2$. $A = \\int_0^2(2x - x^2)\\,dx = [x^2 - x^3/3]_0^2 = 4 - 8/3 = 4/3$.'
          },
          {
            question: 'Find the area between $y = \\sqrt{x}$ and $y = x^2$ on $[0, 1]$.',
            options: ['$\\frac{1}{3}$', '$\\frac{1}{6}$', '$\\frac{1}{2}$', '$\\frac{2}{3}$'],
            correctAnswer: 0,
            explanation: '$\\sqrt{x} \\geq x^2$ on $[0,1]$. $A = \\int_0^1(\\sqrt{x} - x^2)\\,dx = [\\frac{2}{3}x^{3/2} - \\frac{x^3}{3}]_0^1 = \\frac{2}{3} - \\frac{1}{3} = \\frac{1}{3}$.'
          }
        ]
      }
    },
    {
      id: 'ia1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1
1. Always determine which curve is on top
2. Find intersection points to set limits
3. Split integral if curves cross within the interval`
    }
  ]
};
