export const satLinearEquationsPart1Data = {
  topicSlug: 'sat-linear-equations-sat',
  sections: [
    {
      id: 'le1-intro',
      type: 'text' as const,
      content: `# Linear Equations & Inequalities

**Part 1 of 7 — Slope-Intercept and Standard Form**

The SAT Math section heavily tests your ability to work with linear equations. You'll see these in both calculator and no-calculator modules.

### Slope-Intercept Form: $y = mx + b$

- $m$ = slope (rate of change)
- $b$ = y-intercept (value when $x = 0$)

**Example:** A phone plan charges \\$45/month plus \\$0.10 per text. If $y$ is the monthly cost and $x$ is the number of texts:

$$y = 0.10x + 45$$

### Standard Form: $Ax + By = C$

- Useful for finding intercepts quickly
- x-intercept: set $y = 0$ → $x = C/A$
- y-intercept: set $x = 0$ → $y = C/B$

### Converting Between Forms

To convert $3x + 2y = 12$ to slope-intercept:
$$2y = -3x + 12$$
$$y = -\\frac{3}{2}x + 6$$

So slope $= -3/2$ and y-intercept $= 6$.

### SAT Trap ⚠️

When the SAT gives you standard form and asks for the slope, students often forget to isolate $y$ first. The slope is NOT just $A/B$ — it's $-A/B$.`
    },
    {
      id: 'le1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Slope-Intercept & Standard Form** 🎯',
      exercise: {
        questions: [
          {
            question: 'A gym membership costs \\$25 to join and \\$30 per month. Which equation represents the total cost $C$ after $m$ months?',
            options: ['$C = 30m + 25$', '$C = 25m + 30$', '$C = 55m$', '$C = 30m - 25$'],
            correctAnswer: 0,
            explanation: 'The \\$30/month is the rate (slope) and \\$25 is the one-time fee (y-intercept). So $C = 30m + 25$.'
          },
          {
            question: 'What is the slope of the line $4x - 2y = 10$?',
            options: ['$2$', '$-2$', '$4$', '$-4$'],
            correctAnswer: 0,
            explanation: 'Solve for y: $-2y = -4x + 10$, so $y = 2x - 5$. The slope is $2$. Remember: slope $= -A/B = -4/(-2) = 2$.'
          },
          {
            question: 'The line $y = -3x + 7$ crosses the x-axis at:',
            options: ['$(7/3,\\, 0)$', '$(0,\\, 7)$', '$(-3,\\, 0)$', '$(7,\\, 0)$'],
            correctAnswer: 0,
            explanation: 'At the x-axis, $y = 0$: $0 = -3x + 7$ → $3x = 7$ → $x = 7/3$. The x-intercept is $(7/3, 0)$.'
          }
        ]
      }
    },
    {
      id: 'le1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- **Slope-intercept** ($y = mx + b$): slope is the coefficient of $x$, y-int is the constant
- **Standard form** ($Ax + By = C$): slope $= -A/B$, NOT $A/B$
- Real-world problems: the rate = slope, the starting value = y-intercept
- Always isolate $y$ before identifying the slope from standard form`
    }
  ]
};
