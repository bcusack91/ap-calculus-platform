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
After entering data points, type: \`y₁ ~ mx₁ + b\`

Desmos finds the best-fit line and gives you:
- **m** (slope) — the rate of change
- **b** (y-intercept) — starting value
- **r²** — how well the line fits (closer to 1 = better fit)

### When the SAT Gives You a Scatterplot
1. Enter the visible data points into a Desmos table
2. Run regression to find the equation
3. Use the equation to predict values or find the slope

### Exponential Regression
For data that curves: \`y₁ ~ ab^(x₁)\`
- Good for: population growth, compound interest, radioactive decay

### Quadratic Regression
For parabolic data: \`y₁ ~ ax₁² + bx₁ + c\`
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
    },
    {
      id: 'cs5-text2',
      type: 'text' as const,
      content: `## Deep Dive: Desmos Data Analysis

### Worked Example 1: Building a Line of Best Fit

| Step | Work |
|---|---|
| **Problem** | "Data: (1, 3), (2, 5), (3, 8), (4, 9), (5, 13). Find the equation of the best-fit line." |
| **Enter data** | Click "+" → Table. Enter x: 1,2,3,4,5 and y: 3,5,8,9,13. |
| **Regression** | Type: $y_1 \\sim mx_1 + b$ |
| **Read** | Desmos gives $m \\approx 2.3$, $b \\approx 0.7$. Line: $y = 2.3x + 0.7$. |
| **Interpret** | For each additional unit of $x$, $y$ increases by about 2.3. |

### Worked Example 2: Choosing the Right Model

| Step | Work |
|---|---|
| **Problem** | "Data curves upward. Is it linear, quadratic, or exponential?" |
| **Try each** | Linear: $y_1 \\sim mx_1 + b$. Quadratic: $y_1 \\sim ax_1^2 + bx_1 + c$. Exponential: $y_1 \\sim ab^{x_1}$. |
| **Compare $r^2$** | Whichever has $r^2$ closest to 1 is the best fit. |

### Regression Types You Need

| Pattern | Desmos Syntax | When to Use |
|---|---|---|
| Linear (straight line) | $y_1 \\sim mx_1 + b$ | Constant rate of change |
| Quadratic (parabola) | $y_1 \\sim ax_1^2 + bx_1 + c$ | Data curves up or down, then back |
| Exponential (growth/decay) | $y_1 \\sim ab^{x_1}$ | Data grows/shrinks by a percent |

### Interpreting Regression Output

| Output | Meaning |
|---|---|
| $m$ (slope) | Rate of change per unit of $x$ |
| $b$ (y-intercept) | Predicted $y$ when $x = 0$ |
| $r^2$ | Fit quality: 1.0 = perfect, 0.8+ = good, <0.5 = poor |
| $a, b$ in exponential | $a$ = initial value, $b$ = growth factor |

### Using Regression to Predict

Once you have the equation, plug in any $x$ to predict $y$. In Desmos, just look at the graph or table.`
    },
    {
      id: 'cs5-quiz2',
      type: 'multiple-choice' as const,
      content: '**Data Analysis Practice** 🎯',
      exercise: {
        questions: [
          {
            question: 'You run linear regression and get $r^2 = 0.42$. This means:',
            options: ['The linear model is a poor fit — try quadratic or exponential', 'The linear model fits well', 'The slope is 0.42', '42% of the data points are on the line'],
            correctAnswer: 0,
            explanation: '$r^2 = 0.42$ means only 42% of the variation in $y$ is explained by $x$ linearly. That\'s a poor fit. Try a different model (quadratic, exponential) to see if $r^2$ improves.'
          },
          {
            question: 'A regression gives $y = 3.2x + 15$. What does the 15 represent?',
            options: ['The predicted $y$-value when $x = 0$', 'The slope of the line', 'The number of data points', 'The maximum value of $y$'],
            correctAnswer: 0,
            explanation: '$b = 15$ is the y-intercept — the predicted value of $y$ when $x = 0$. In context, it\'s the starting value before any change in $x$.'
          },
          {
            question: 'Data points: (0, 5), (1, 15), (2, 45), (3, 135). Which regression model fits best?',
            options: ['Exponential: $y_1 \\sim ab^{x_1}$ (each $y$ triples)', 'Linear: $y_1 \\sim mx_1 + b$', 'Quadratic: $y_1 \\sim ax_1^2 + bx_1 + c$', 'None — the data is random'],
            correctAnswer: 0,
            explanation: 'Each $y$ is 3 times the previous: $5 \\times 3 = 15$, $15 \\times 3 = 45$, $45 \\times 3 = 135$. This is exponential growth with factor 3. Regression gives $a = 5$, $b = 3$.'
          }
        ]
      }
    },
    {
      id: 'cs5-dropdown',
      type: 'dropdown-select' as const,
      content: '**Regression Match** — Choose the correct regression model.',
      exercise: {
        dropdowns: [
          'Data follows a straight-line pattern → [Linear: y₁ ~ mx₁ + b|Exponential|Quadratic|None]',
          'Data doubles repeatedly → [Exponential: y₁ ~ ab^(x₁)|Linear|Quadratic|Logarithmic]',
          'Data forms an arch shape (rises then falls) → [Quadratic: y₁ ~ ax₁² + bx₁ + c|Linear|Exponential|Cubic]',
          'r² close to 1 means → [Model fits well|Model fits poorly|Slope is 1|Data is linear]'
        ],
        correctAnswers: ['Linear: y₁ ~ mx₁ + b', 'Exponential: y₁ ~ ab^(x₁)', 'Quadratic: y₁ ~ ax₁² + bx₁ + c', 'Model fits well'],
        hint1: 'Constant rate of change = linear.',
        hint2: 'Repeated multiplication = exponential.',
        hint3: 'Parabolic shape = quadratic.',
        explanation: 'Linear for constant growth, exponential for percent-based growth, quadratic for parabolic patterns. r² near 1 means the model explains the data well.'
      }
    },
    {
      id: 'cs5-summary',
      type: 'text' as const,
      content: `## Part 5 Summary: Regression in Desmos

| Model | Syntax | Look For |
|---|---|---|
| Linear | $y_1 \\sim mx_1 + b$ | Straight-line trend |
| Quadratic | $y_1 \\sim ax_1^2 + bx_1 + c$ | Parabolic curve |
| Exponential | $y_1 \\sim ab^{x_1}$ | Repeated multiplication |

### Key Outputs
- **$r^2$** near 1 = good fit; near 0 = poor fit
- **Slope** = rate of change (linear)
- **y-intercept** = predicted value at $x = 0$
- **Residuals** should be random if the model is appropriate

*Next: Advanced calculator techniques →*`
    }
  ]
};
