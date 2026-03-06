export const satCalcStrategyPart2Data = {
  topicSlug: 'sat-calculator-strategy-sat',
  sections: [
    {
      id: 'cs2-intro',
      type: 'text' as const,
      content: `# Desmos Graphing Fundamentals

**Part 2 of 7 — Essential Desmos Skills for the SAT**

### Entering Equations
- Type equations directly: `y = 2x + 3`
- Use `^` for exponents: `y = x^2 - 4`
- Use `sqrt()` for square roots: `y = sqrt(x + 1)`
- Fractions: type `(2/3)x` or use the fraction template

### Finding Key Features
| What You Need | What to Do in Desmos |
|---|---|
| x-intercepts (zeros) | Graph the equation, click where it crosses x-axis |
| y-intercept | Look at where the graph crosses y-axis |
| Vertex of parabola | Click the minimum/maximum point |
| Intersection of two graphs | Enter both equations, click the intersection dot |

### The Table Feature
Click the equation number → "Table" to see exact x/y pairs. This is powerful for:
- Verifying which point satisfies an equation
- Finding a pattern in function values
- Checking if a point is on a line

### Sliders
If you type `y = ax + b`, Desmos creates sliders for `a` and `b`. This helps you:
- Match a graph to given constraints
- Understand how changing a coefficient affects the graph
- Find parameter values that satisfy conditions`
    },
    {
      id: 'cs2-q1',
      type: 'quiz' as const,
      question: 'To find where two lines intersect using Desmos, you should:',
      options: [
        'Enter one equation and use the table to guess',
        'Enter both equations and click the intersection point',
        'Solve by hand — Desmos cannot find intersections',
        'Use the slider feature to match the lines'
      ],
      correctAnswer: 1,
      explanation: 'Enter both equations (e.g., y = 2x + 1 and y = -x + 7) into Desmos. Where the graphs cross, a dot appears — click it to see the exact (x, y) coordinates.'
    },
    {
      id: 'cs2-q2',
      type: 'quiz' as const,
      question: 'You need to find the vertex of y = -2x² + 8x - 3. The fastest Desmos method is:',
      options: [
        'Complete the square by hand',
        'Use the -b/2a formula',
        'Graph it and click the maximum point',
        'Create a table and scan values'
      ],
      correctAnswer: 2,
      explanation: 'Type y = -2x² + 8x - 3 into Desmos. Since a is negative, the parabola opens downward. Click the highest point to see the vertex coordinates (2, 5). This takes about 5 seconds.'
    }
  ]
};
