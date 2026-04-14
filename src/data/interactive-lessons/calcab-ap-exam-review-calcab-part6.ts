export const calcabExamReviewPart6Data = {
  topicSlug: 'ap-exam-review-calcab',
  sections: [
    {
      id: 'examrev6-intro',
      type: 'text' as const,
      content: `# AP Exam Review \u2014 Differential Equations & Modeling

**Part 6 of 7**

---

### Differential Equations on the AP Exam

| Type | Form | Method |
|:---|:---|:---|
| Separable | $\\frac{dy}{dx} = f(x)g(y)$ | Separate and integrate |
| Initial Value Problem | DE + $y(x_0) = y_0$ | Solve DE, use condition for $C$ |
| Slope Fields | $\\frac{dy}{dx} = F(x,y)$ | Sketch slopes at grid points |
| Exponential Growth/Decay | $\\frac{dy}{dt} = ky$ | $y = y_0 e^{kt}$ |

### Separable Equations \u2014 Steps

$$\\boxed{\\frac{dy}{dx} = f(x)g(y) \\implies \\frac{dy}{g(y)} = f(x)\\,dx \\implies \\int \\frac{dy}{g(y)} = \\int f(x)\\,dx}$$

### Worked Example \u2014 Separable DE

Solve $\\frac{dy}{dx} = 2xy$, $y(0) = 3$.

**Step 1:** Separate: $\\frac{dy}{y} = 2x\\,dx$

**Step 2:** Integrate: $\\ln|y| = x^2 + C$

**Step 3:** Solve for $y$: $y = Ae^{x^2}$ where $A = e^C$

**Step 4:** Apply IC: $y(0) = A = 3$

$$y = 3e^{x^2}$$

---

### Exponential Growth & Decay

$$\\boxed{\\frac{dy}{dt} = ky \\implies y(t) = y_0 e^{kt}}$$

| $k > 0$ | $k < 0$ |
|:---|:---|
| Exponential growth | Exponential decay |
| Population growth | Radioactive decay |
| Compound interest | Cooling (Newton\u2019s Law) |

> **Key Fact:** Half-life formula: $t_{1/2} = \\frac{\\ln 2}{|k|}$`
    },
    {
      id: 'examrev6-quiz1',
      type: 'multiple-choice' as const,
      content: '**Differential Equations Quiz** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: 'Which DE is separable?',
            options: ['$\\frac{dy}{dx} = \\frac{x}{y}$', '$\\frac{dy}{dx} = x + y$', '$\\frac{dy}{dx} = xy + x$', 'Both A and C'],
            correctAnswer: 3,
            explanation: 'A: $y\\,dy = x\\,dx$ \u2713. C: $\\frac{dy}{dx} = x(y+1)$ is also separable. B is NOT separable.'
          },
          {
            question: 'A population doubles every 5 years. What is $k$?',
            options: ['$\\frac{\\ln 2}{5}$', '$\\frac{2}{5}$', '$\\frac{5}{\\ln 2}$', '$\\frac{\\ln 5}{2}$'],
            correctAnswer: 0,
            explanation: '$2y_0 = y_0 e^{5k} \\implies 5k = \\ln 2 \\implies k = \\frac{\\ln 2}{5}$.'
          },
          {
            question: 'On a slope field, horizontal segments ($\\frac{dy}{dx}=0$) for $\\frac{dy}{dx} = y-2$ occur at:',
            options: ['$y = 2$', '$x = 2$', '$y = 0$', '$x = 0$'],
            correctAnswer: 0,
            explanation: '$y-2=0 \\implies y=2$. The slope is zero whenever $y=2$, regardless of $x$.'
          }
        ]
      }
    },
    {
      id: 'examrev6-slopefields',
      type: 'text' as const,
      content: `### Slope Fields \u2014 Reading Guide

| Observation | Meaning |
|:---|:---|
| All segments same slope in a row | DE depends only on $y$ |
| All segments same slope in a column | DE depends only on $x$ |
| Segments get steeper as you move right | DE is increasing in $x$ |
| Horizontal segments along a line | That line is an equilibrium ($dy/dx=0$) |

### AP Slope Field Tips

- **Matching:** Plug in specific $(x,y)$ values to check if the slope matches
- **Sketching solutions:** Follow the slopes like a river
- **Equilibrium:** $\\frac{dy}{dx} = 0$ lines are equilibrium solutions`
    },
    {
      id: 'examrev6-dropdown',
      type: 'dropdown-select' as const,
      content: '**Classify the differential equation.** \ud83d\udd0d',
      exercise: {
        dropdowns: [
          {
            label: '$\\frac{dy}{dt} = -0.03y$ describes:',
            options: ['Exponential decay', 'Exponential growth', 'Logistic growth', 'Linear model'],
            correctAnswers: ['Exponential decay'],
            hints: ['$k = -0.03 < 0$.'],
            explanation: 'Negative $k$ means exponential decay. $y = y_0 e^{-0.03t}$.'
          },
          {
            label: '$\\frac{dy}{dx} = \\frac{x^2}{y}$ \u2014 to solve, first:',
            options: ['Separate: $y\\,dy = x^2\\,dx$', 'Use integrating factor', 'Apply FTC', 'Take $\\ln$ of both sides'],
            correctAnswers: ['Separate: $y\\,dy = x^2\\,dx$'],
            hints: ['Multiply both sides by $y$ and by $dx$.'],
            explanation: 'Separable DE: move $y$ to left, $x^2$ and $dx$ to right, then integrate.'
          },
          {
            label: 'On a slope field for $\\frac{dy}{dx} = x - y$, the slope at $(2, 1)$ is:',
            options: ['$1$', '$-1$', '$3$', '$0$'],
            correctAnswers: ['$1$'],
            hints: ['Plug in: $2 - 1 = ?$'],
            explanation: '$\\frac{dy}{dx}\\big|_{(2,1)} = 2-1 = 1$.'
          }
        ]
      }
    },
    {
      id: 'examrev6-input',
      type: 'input-box' as const,
      content: '**Solve the IVP.** \u270d\ufe0f',
      exercise: {
        question: 'Solve $\\frac{dy}{dx} = 6x^2$, $y(1) = 5$. Find $y(2)$.',
        correctAnswer: '19',
        acceptableAnswers: ['19'],
        hints: [
          'Integrate: $y = 2x^3 + C$.',
          'Apply IC: $y(1) = 2(1) + C = 5 \\implies C = 3$.',
          '$y = 2x^3 + 3$. $y(2) = 2(8) + 3 = 19$.'
        ],
        explanation: '$y = 2x^3 + 3$. $y(2) = 16 + 3 = 19$.'
      }
    },
    {
      id: 'examrev6-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 6

- Separable DEs: move $y$ terms to one side, $x$ terms to the other
- Always apply the initial condition AFTER integrating
- Exponential model: $\\frac{dy}{dt} = ky$ has solution $y = y_0 e^{kt}$
- Slope fields: plug in points to verify slopes, look for equilibrium lines`
    }
  ]
};
