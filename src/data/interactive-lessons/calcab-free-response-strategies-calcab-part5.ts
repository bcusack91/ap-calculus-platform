export const calcabFRQPart5Data = {
  topicSlug: 'free-response-strategies-calcab',
  sections: [
    {
      id: 'frq5-intro',
      type: 'text' as const,
      content: `# Free-Response Strategies \u2014 Differential Equation FRQs

**Part 5 of 7**

---

### DE FRQ Overview

Differential equation FRQs typically include some or all of these parts:

| Part | Common Task |
|:---|:---|
| (a) | Sketch a slope field |
| (b) | Sketch a particular solution through a given point |
| (c) | Solve the separable DE |
| (d) | Use the solution to answer a question |

### Slope Field Rules

$$\\boxed{\\text{At each point } (x,y), \\text{ draw a short segment with slope } \\frac{dy}{dx}\\bigg|_{(x,y)}}$$

| Slope Value | Segment |
|:---|:---|
| $\\frac{dy}{dx} = 0$ | Horizontal |
| $\\frac{dy}{dx} > 0$ | Slants up-right |
| $\\frac{dy}{dx} < 0$ | Slants down-right |
| $\\frac{dy}{dx}$ undefined | Vertical or no segment |

### Separation of Variables Steps

| Step | Action | Example: $\\frac{dy}{dx} = xy$ |
|:---|:---|:---|
| 1 | Separate | $\\frac{dy}{y} = x\\,dx$ |
| 2 | Integrate | $\\ln|y| = \\frac{x^2}{2} + C$ |
| 3 | Solve for $y$ | $y = Ae^{x^2/2}$ |
| 4 | Apply IC | $y(0) = 3 \\implies A = 3$ |

> **Key Fact:** On AP FRQs, always include the constant of integration and solve for it using the initial condition. Forgetting $+C$ loses a point.

---

### Worked Example \u2014 DE FRQ

$\\frac{dy}{dx} = \\frac{2x}{y}$, $y(0) = 4$.

**(a)** Slope at $(1, 2)$: $\\frac{dy}{dx} = \\frac{2(1)}{2} = 1$.

**(b)** Solve:

$y\\,dy = 2x\\,dx \\implies \\frac{y^2}{2} = x^2 + C$

$y(0) = 4$: $\\frac{16}{2} = 0 + C \\implies C = 8$

$y^2 = 2x^2 + 16 \\implies y = \\sqrt{2x^2 + 16}$ (positive since $y(0)=4>0$)

**(c)** $y(2) = \\sqrt{8 + 16} = \\sqrt{24} = 2\\sqrt{6}$`
    },
    {
      id: 'frq5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Differential Equation FRQ Quiz** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: 'The slope field for $\\frac{dy}{dx} = x - 1$ has horizontal segments at:',
            options: ['$x = 1$', '$y = 1$', '$x = 0$', '$y = 0$'],
            correctAnswer: 0,
            explanation: '$x-1=0 \\implies x=1$. The slope is zero at all points where $x=1$.'
          },
          {
            question: 'To solve $\\frac{dy}{dx} = e^x \\cos y$, the first step is:',
            options: ['$\\frac{dy}{\\cos y} = e^x\\,dx$', 'Integrate both sides now', 'Use an integrating factor', 'Apply FTC'],
            correctAnswer: 0,
            explanation: 'Separate: put $y$ terms with $dy$, $x$ terms with $dx$. $\\sec y\\,dy = e^x\\,dx$.'
          },
          {
            question: 'After solving a DE, the +$C$ is determined by:',
            options: ['The initial condition', 'Setting $C = 0$ by default', 'The segments of the slope field', 'The domain of the solution $y$'],
            correctAnswer: 0,
            explanation: 'The initial condition $y(x_0) = y_0$ provides the specific value of $C$. A slope field shows the shape of every solution but does not pick one, and $C = 0$ is right only when the initial condition makes it so.'
          }
        ]
      }
    },
    {
      id: 'frq5-mistakes',
      type: 'text' as const,
      content: `### Common DE Mistakes on FRQs

| Mistake | Why It Costs Points |
|:---|:---|
| Forgetting $+C$ | Costs the constant-of-integration point, and the solution that follows is wrong |
| Not separating correctly | Cannot integrate an unseparated DE |
| Wrong sign on $\\ln|y|$ | Direction of inequality matters |
| Not checking domain | $y > 0$ vs $y < 0$ affects $|y|$ removal |
| Slope field: wrong direction | Double-check sign at each point |

### Tangent Line and Concavity Parts (No Calculator)

Many DE questions ask: "Write an equation for the line tangent to the graph of $y = f(x)$ at $x = 1$, and use it to approximate $f(1.3)$." A follow-up asks for $\\frac{d^2y}{dx^2}$ and whether the approximation is an over- or underestimate.

**Example:** $\\frac{dy}{dx} = \\frac{2x}{y}$ with $f(1) = 3$.

**Tangent line:** slope $= \\frac{2(1)}{3} = \\frac{2}{3}$, so $y = 3 + \\frac{2}{3}(x - 1)$ and $f(1.3) \\approx 3 + \\frac{2}{3}(0.3) = 3.2$.

**Second derivative (quotient rule, then substitute the DE):**

$$\\frac{d^2y}{dx^2} = \\frac{2y - 2x\\frac{dy}{dx}}{y^2} = \\frac{2y - \\frac{4x^2}{y}}{y^2}$$

At $(1, 3)$: $\\frac{d^2y}{dx^2} = \\frac{6 - \\frac{4}{3}}{9} = \\frac{14}{27} > 0$, so the graph is concave up near $x = 1$, the tangent line lies below it, and $3.2$ is an **underestimate**.

> **AP Tip:** State the reason in words: "$\\frac{d^2y}{dx^2} > 0$, so $f$ is concave up, so the tangent line lies below the graph." Euler's method is BC-only; AB free-response questions do not ask for it.`
    },
    {
      id: 'frq5-dropdown',
      type: 'dropdown-select' as const,
      content: '**Classify the DE approach.** \ud83d\udd0d',
      exercise: {
        dropdowns: [
          {
            label: '$\\frac{dy}{dx} = \\frac{y}{x}$ \u2014 to solve:',
            options: ['Separate and integrate', 'Use a tangent line', 'Apply FTC directly', 'Cannot be solved analytically'],
            correctAnswers: ['Separate and integrate'],
            hints: ['$\\frac{dy}{y} = \\frac{dx}{x}$ \u2192 both sides integrate to $\\ln$.'],
            explanation: '$\\ln|y| = \\ln|x| + C \\implies y = Ax$.'
          },
          {
            label: 'On a slope field, solution curves:',
            options: ['Follow the direction of segments', 'Cross segments perpendicularly', 'Only pass through zero-slope points', 'Are always straight lines'],
            correctAnswers: ['Follow the direction of segments'],
            hints: ['The segments show the tangent line direction at each point.'],
            explanation: 'Solution curves are tangent to the slope field segments at every point.'
          },
          {
            label: '$\\frac{dy}{dx} = ky$ has solution:',
            options: ['$y = y_0 e^{kx}$', '$y = kx + C$', '$y = \\frac{k}{x}$', '$y = \\sin(kx)$'],
            correctAnswers: ['$y = y_0 e^{kx}$'],
            hints: ['This is the exponential growth/decay equation.'],
            explanation: 'The classic DE $y\'=ky$ has general solution $y=Ce^{kx}$. With IC: $y=y_0 e^{kx}$.'
          }
        ]
      }
    },
    {
      id: 'frq5-input',
      type: 'input-box' as const,
      content: '**Solve the IVP.** \u270d\ufe0f',
      exercise: {
        question: 'Solve $\\frac{dy}{dx} = 3x^2 y$, $y(0) = 2$. Find $y(1)$. Express as $ae^b$ where $a, b$ are integers. Enter $a + b$.',
        correctAnswer: '3',
        acceptableAnswers: ['3'],
        hints: [
          'Separate: $\\frac{dy}{y} = 3x^2\\,dx$.',
          '$\\ln|y| = x^3 + C$. $y(0)=2 \\implies C = \\ln 2$.',
          '$y = 2e^{x^3}$. $y(1) = 2e^1 = 2e$. $a=2, b=1, a+b=3$.'
        ],
        explanation: '$y = 2e^{x^3}$. $y(1) = 2e$. $a+b = 2+1 = 3$.'
      }
    },
    {
      id: 'frq5-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 5

- DE FRQs: slope fields, separation of variables, initial conditions
- Always include $+C$ and solve for it using the IC
- Solution curves follow the slope field segments
- Tangent-line estimates take their slope from the DE; the sign of $\\frac{d^2y}{dx^2}$ decides over or under`
    }
  ]
};
