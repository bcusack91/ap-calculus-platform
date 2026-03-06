export const satCalcStrategyPart4Data = {
  topicSlug: 'sat-calculator-strategy-sat',
  sections: [
    {
      id: 'cs4-intro',
      type: 'text' as const,
      content: `# Inequalities & Restrictions in Desmos

**Part 4 of 7 — Shading, Domains, and Constraints**

### Graphing Inequalities
Desmos shades the solution region automatically:
- `y > 2x + 1` → shades above the line
- `y ≤ -x + 3` → shades below and on the line
- Use `<`, `>`, `<=`, `>=` on your keyboard

### Systems of Inequalities
Enter multiple inequalities. The **overlapping shaded region** is the solution set. Desmos uses different colors for each, making the overlap visible.

### Domain Restrictions
Limit a function to certain x-values using braces:
- `y = x^2 {0 < x < 5}` → only shows parabola between x = 0 and x = 5
- `y = 2x + 1 {x >= 0}` → only shows the positive part

### Finding Integer Solutions
When the SAT asks "how many integer values of x satisfy both inequalities":
1. Graph both inequalities
2. Find the overlap region
3. Count the integer x-values within that region
4. The Desmos table feature helps verify specific integer points

### Absolute Value Inequalities
- `|x - 3| < 5` means the distance from 3 is less than 5
- Graph `y = |x - 3|` and `y = 5`, and identify where the V-shape is **below** the horizontal line`
    },
    {
      id: 'cs4-q1',
      type: 'quiz' as const,
      question: 'To find the solution region of y ≥ x + 1 AND y < -2x + 8 in Desmos, you should:',
      options: [
        'Solve the system algebraically first',
        'Enter both inequalities and look for the overlapping shaded area',
        'Graph only the boundary lines',
        'Use the table to test random points'
      ],
      correctAnswer: 1,
      explanation: 'Enter both inequalities in Desmos. Each will shade a region. The area where both shadings overlap is the solution set. You can then identify boundary points or count integer solutions.'
    }
  ]
};
