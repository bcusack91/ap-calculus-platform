export const satCalcStrategyPart5Data = {
  topicSlug: 'sat-calculator-strategy-sat',
  sections: [
    {
      id: 'cs5-intro',
      type: 'text' as const,
      content: `# Regression & Data Analysis in Desmos

**Part 5 of 7 — Tables, Regression, and Curve Fitting**

### Entering Data Tables
Click "+" → "Table" in Desmos. Enter your x and y values. Desmos plots the points automatically.

### Linear Regression
After entering data points, type: `y₁ ~ mx₁ + b`

Desmos finds the best-fit line and gives you:
- **m** (slope) — the rate of change
- **b** (y-intercept) — starting value
- **r²** — how well the line fits (closer to 1 = better fit)

### When the SAT Gives You a Scatterplot
1. Enter the visible data points into a Desmos table
2. Run regression to find the equation
3. Use the equation to predict values or find the slope

### Exponential Regression
For data that curves: `y₁ ~ ab^(x₁)`
- Good for: population growth, compound interest, radioactive decay

### Quadratic Regression
For parabolic data: `y₁ ~ ax₁² + bx₁ + c`
- Good for: projectile motion, area problems, profit/revenue curves

### Residuals
A **residual** = actual value − predicted value. If residuals show a pattern (not random), the model is a poor fit.`
    },
    {
      id: 'cs5-q1',
      type: 'quiz' as const,
      question: 'In Desmos, after entering data points into a table, which expression creates a line of best fit?',
      options: [
        'y = mx + b',
        'y₁ ~ mx₁ + b',
        'f(x) = ax + b',
        'table(x, y)'
      ],
      correctAnswer: 1,
      explanation: 'The tilde (~) tells Desmos to perform regression. y₁ ~ mx₁ + b finds the best-fit linear equation. Desmos then reports the values of m and b.'
    }
  ]
};
