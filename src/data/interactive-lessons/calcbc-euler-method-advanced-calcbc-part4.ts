export const calcbcEulerPart4Data = {
  topicSlug: 'euler-method-advanced-calcbc',
  sections: [
    {
      id: 'euler4-intro',
      type: 'text' as const,
      content: `# Euler's Method with Slope Fields

**Part 4 of 7 — Connecting Graphical and Numerical**

### Slope Fields + Euler's Method

A slope field shows the direction field of $dy/dx = f(x,y)$. Euler's method FOLLOWS these slopes:

1. Start at the initial point
2. Follow the slope segment for distance $\\Delta x$
3. Arrive at a new point — read the NEW slope there
4. Repeat

### Reading Slope Fields for Euler Steps

| Slope field feature | What it tells you about Euler |
|-------------------|-------------------------------|
| Slopes getting steeper | $y$ values accelerate |
| Slopes are horizontal ($f = 0$) | $y$ doesn't change at that step |
| Slopes change sign | Solution has a local extremum |
| Slopes are constant along horizontals | $f$ depends only on $y$ |
| Slopes are constant along verticals | $f$ depends only on $x$ |

### AP Exam Connection

The AP exam may show a slope field and ask you to:
- Sketch the Euler approximation (draw tangent segments)
- Determine if Euler over/underestimates by comparing to the slope field
- Use the slope field to check if your numerical answer is reasonable

> **Key Fact:** Euler's method traces a piecewise-linear path through the slope field. The true solution is the smooth curve that is tangent to every slope segment it passes through.`
    },
    {
      id: 'euler4-iso',
      type: 'text' as const,
      content: `### Isoclines and Euler

An **isocline** is a curve where $f(x,y) = c$ (constant slope). Isoclines help predict Euler behavior:

| Scenario | Euler behavior |
|----------|---------------|
| Initial point on isocline $f = 0$ | First step is horizontal |
| Euler step crosses an isocline | Slope changes at next step |
| Solution stays near an isocline | Euler stays roughly parallel |

### Example: Autonomous Equations

For $dy/dx = y(2-y)$:
- Isocline $f = 0$: $y = 0$ or $y = 2$ (equilibria)
- If $0 < y < 2$: slopes are positive → solution increases
- If $y > 2$: slopes are negative → solution decreases

Euler starting at $y(0) = 1$:
- $f(0, 1) = 1(1) = 1$: slope = 1, step moves up
- Solution approaches $y = 2$ (stable equilibrium)

### Equilibrium Behavior

$$\\boxed{\\text{Euler's method approaches stable equilibria, just like exact solutions}}$$

But it may oscillate around unstable equilibria if $\\Delta x$ is too large.`
    },
    {
      id: 'euler4-mc1',
      type: 'multiple-choice' as const,
      content: '**Slope Field + Euler Integration**',
      exercise: {
        questions: [
          {
            question: 'A slope field shows all slopes are positive in a region and getting steeper as $y$ increases. Starting Euler in this region, $y$-values will:',
            options: ['Increase with growing step sizes ($\\Delta y$ gets larger)', 'Increase with constant step sizes', 'Decrease', 'Level off'],
            correctAnswer: 0,
            explanation: 'Positive slopes → $y$ increases. Getting steeper → each $\\Delta y = f \\cdot \\Delta x$ is larger than the last.'
          },
          {
            question: 'If slopes on a slope field are zero along the line $y = 3$, what happens when Euler reaches $y \\approx 3$?',
            options: ['$\\Delta y \\approx 0$; the approximation nearly stops changing', 'The method diverges', '$y$ jumps past 3', 'The method is undefined'],
            correctAnswer: 0,
            explanation: '$f \\approx 0$ means $\\Delta y = f \\cdot \\Delta x \\approx 0$. Euler flattens out near $y = 3$.'
          }
        ]
      }
    },
    {
      id: 'euler4-dropdown',
      type: 'dropdown-select' as const,
      content: '**Slope Field Analysis**\n\n$dy/dx = x - y$ slope field analysis:',
      exercise: {
        dropdowns: [
          {
            label: 'Along the line $y = x$, all slopes equal:',
            options: ['$0$ (horizontal segments)', '$1$', '$-1$', '$x$'],
            correctAnswers: ['$0$ (horizontal segments)'],
            hints: ['$f(x, y) = x - y$. On $y = x$: $f = x - x = 0$.'],
            explanation: '$f = x - x = 0$ on the isocline $y = x$. All segments are horizontal.'
          },
          {
            label: 'Starting Euler at $(0, 2)$: $f(0, 2) = -2$. The solution is initially:',
            options: ['Decreasing toward the line $y = x$', 'Increasing', 'Constant', 'Undefined'],
            correctAnswers: ['Decreasing toward the line $y = x$'],
            hints: ['Negative slope → decreasing. The isocline $y = x$ is an attractor.'],
            explanation: 'Slope is $-2$ → decreasing. Solution curves approach $y = x - 1$ as $x \\to \\infty$.'
          }
        ]
      }
    },
    {
      id: 'euler4-input',
      type: 'input-box' as const,
      content: '**Equilibrium**',
      exercise: {
        question: 'For $dy/dx = y(3 - y)$, at what TWO values of $y$ is the slope zero (equilibria)? Enter them separated by a comma, smaller first.',
        correctAnswer: '0, 3',
        acceptableAnswers: ['0, 3', '0,3', '0 and 3'],
        hints: ['Set $y(3-y) = 0$.'],
        explanation: '$y(3-y) = 0$ when $y = 0$ or $y = 3$. These are equilibrium solutions.'
      }
    },
    {
      id: 'euler4-summary',
      type: 'text' as const,
      content: `### Summary

- Euler's method traces a piecewise-linear path through the slope field
- Isoclines (constant-slope curves) help predict behavior
- Equilibria occur where $f(x,y) = 0$
- Compare Euler's path to the slope field for reasonableness

> **Next:** Part 5 — AP Exam Strategies.`
    }
  ]
};
