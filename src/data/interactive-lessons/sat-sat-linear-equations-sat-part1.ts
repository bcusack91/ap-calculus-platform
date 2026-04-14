export const satLinearEquationsPart1Data = {
  topicSlug: 'sat-linear-equations-sat',
  sections: [
    {
      id: 'le1-intro',
      type: 'text' as const,
      content: `# Linear Equations & Inequalities

**Part 1 of 7 — Slope-Intercept and Standard Form**

The SAT Math section heavily tests your ability to work with linear equations. You'll see these in both calculator and no-calculator modules. Mastering the two main forms — and converting between them — is essential.

### Slope-Intercept Form: $y = mx + b$

- $m$ = slope (rate of change)
- $b$ = y-intercept (value when $x = 0$)

**Example:** A phone plan charges \\$45/month plus \\$0.10 per text. If $y$ is the monthly cost and $x$ is the number of texts:

$$y = 0.10x + 45$$

### Standard Form: $Ax + By = C$

- Useful for finding intercepts quickly
- x-intercept: set $y = 0$ → $x = C/A$
- y-intercept: set $x = 0$ → $y = C/B$

---

### Worked Example 1

**Convert $5x + 4y = 20$ to slope-intercept form and identify the intercepts.**

| Step | Work |
|------|------|
| Isolate $y$ | $4y = -5x + 20$ |
| Divide by 4 | $y = -\\frac{5}{4}x + 5$ |
| Read slope | $m = -5/4$ |
| Read y-intercept | $b = 5$ → point $(0, 5)$ |
| Find x-intercept | Set $y = 0$: $5x = 20$ → $x = 4$ → point $(4, 0)$ |

### Worked Example 2

**A streaming service costs \\$12/month after a one-time \\$5 setup fee. Write the total cost $C$ after $m$ months and find the cost after 6 months.**

| Step | Work |
|------|------|
| Identify slope | \\$12/month → $m = 12$ |
| Identify y-intercept | \\$5 setup → $b = 5$ |
| Write equation | $C = 12m + 5$ |
| Evaluate at $m = 6$ | $C = 12(6) + 5 = 77$ |

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
      id: 'le1-text2',
      type: 'text' as const,
      content: `### Point-Slope Form: $y - y_1 = m(x - x_1)$

This form is ideal when you know a point on the line and the slope.

### Worked Example 3

**Write the equation of a line through $(2, 7)$ with slope $3$.**

| Step | Work |
|------|------|
| Point-slope setup | $y - 7 = 3(x - 2)$ |
| Distribute | $y - 7 = 3x - 6$ |
| Slope-intercept | $y = 3x + 1$ |

### Worked Example 4

**A line passes through $(-1, 4)$ and $(3, -8)$. Find its equation in standard form.**

| Step | Work |
|------|------|
| Find slope | $m = \\frac{-8 - 4}{3 - (-1)} = \\frac{-12}{4} = -3$ |
| Point-slope | $y - 4 = -3(x + 1)$ |
| Expand | $y = -3x - 3 + 4 = -3x + 1$ |
| Standard form | $3x + y = 1$ |

### Slope Formula Shortcut

$$m = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{\\text{rise}}{\\text{run}}$$

> **SAT Tip:** When two points are given and the question asks for the equation, always compute the slope first.`
    },
    {
      id: 'le1-quiz2',
      type: 'multiple-choice' as const,
      content: '**Building Equations from Points** 🎯',
      exercise: {
        questions: [
          {
            question: 'A line passes through $(1, 2)$ and $(4, 11)$. What is the y-intercept?',
            options: ['$-1$', '$1$', '$2$', '$3$'],
            correctAnswer: 0,
            explanation: 'Slope $= (11-2)/(4-1) = 9/3 = 3$. Using point $(1,2)$: $2 = 3(1) + b$ → $b = -1$.'
          },
          {
            question: 'Which equation represents a line through $(0, -4)$ and $(6, 8)$?',
            options: ['$y = 2x - 4$', '$y = -2x + 4$', '$y = 2x + 4$', '$y = \\frac{1}{2}x - 4$'],
            correctAnswer: 0,
            explanation: 'Slope $= (8-(-4))/(6-0) = 12/6 = 2$. Y-intercept is the $y$-value at $x = 0$, which is $-4$. So $y = 2x - 4$.'
          },
          {
            question: 'The line $y - 5 = -2(x - 3)$ has the same slope as which equation?',
            options: ['$4x + 2y = 9$', '$2x + 4y = 9$', '$-2x + y = 1$', '$x - 2y = 3$'],
            correctAnswer: 0,
            explanation: 'The given line has slope $-2$. Check $4x + 2y = 9$: $2y = -4x + 9$ → $y = -2x + 4.5$. Slope is $-2$. ✓'
          }
        ]
      }
    },
    {
      id: 'le1-dropdown',
      type: 'dropdown-select' as const,
      content: '**Identify the Form** 🔍\n\nFor each equation, select the correct form it is written in.',
      exercise: {
        dropdowns: [
          { label: '$y = 4x - 7$', options: ['Slope-intercept', 'Standard form', 'Point-slope'] },
          { label: '$3x + 5y = 15$', options: ['Slope-intercept', 'Standard form', 'Point-slope'] },
          { label: '$y - 2 = 6(x - 1)$', options: ['Slope-intercept', 'Standard form', 'Point-slope'] },
          { label: '$y = -\\frac{1}{3}x + 9$', options: ['Slope-intercept', 'Standard form', 'Point-slope'] }
        ],
        correctAnswers: ['Slope-intercept', 'Standard form', 'Point-slope', 'Slope-intercept'],
        hint1: 'Slope-intercept has $y$ isolated: $y = mx + b$.',
        hint2: 'Standard form has both variables on one side: $Ax + By = C$.',
        hint3: 'Point-slope has the pattern $y - y_1 = m(x - x_1)$.',
        explanation: '$y = 4x - 7$ is slope-intercept ($y = mx + b$). $3x + 5y = 15$ is standard form ($Ax + By = C$). $y - 2 = 6(x - 1)$ is point-slope. $y = -\\frac{1}{3}x + 9$ is slope-intercept.'
      }
    },
    {
      id: 'le1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

| Form | Template | When to Use |
|------|----------|-------------|
| Slope-intercept | $y = mx + b$ | Know slope & y-intercept |
| Standard | $Ax + By = C$ | Finding intercepts; slope $= -A/B$ |
| Point-slope | $y - y_1 = m(x - x_1)$ | Know a point & slope |

- Real-world problems: the rate = slope, the starting value = y-intercept
- Always isolate $y$ before identifying the slope from standard form
- The slope formula $m = \\frac{y_2 - y_1}{x_2 - x_1}$ works with any two points on the line
- On the SAT, check which form the answer choices use before you start solving`
    }
  ]
};
