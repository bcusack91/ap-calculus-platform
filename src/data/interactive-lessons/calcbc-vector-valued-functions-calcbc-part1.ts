export const calcbcVectorsPart1Data = {
  topicSlug: 'vector-valued-functions-calcbc',
  sections: [
    {
      id: 'vv1-intro',
      type: 'text' as const,
      content: `# Vector-Valued Functions

**Part 1 of 7 — Introduction & Position Vectors**

A **vector-valued function** describes a curve using a position vector:

$$\\vec{r}(t) = \\langle x(t),\\, y(t) \\rangle = x(t)\\,\\mathbf{i} + y(t)\\,\\mathbf{j}$$

This is the natural extension of parametric equations — same information, vector notation.

### Parametric vs. Vector Form

| Parametric | Vector |
|-----------|--------|
| $x = f(t),\\; y = g(t)$ | $\\vec{r}(t) = \\langle f(t), g(t) \\rangle$ |
| Point $(x, y)$ | Position vector $\\vec{r}$ |
| Motion over $[a, b]$ | Path traced by tip of $\\vec{r}(t)$ |

> **Key Fact:** The AP BC exam uses both notations interchangeably. Be fluent in both.`
    },
    {
      id: 'vv1-examples',
      type: 'text' as const,
      content: `### Examples of Vector-Valued Functions

**Example 1.** Circular motion:  
$$\\vec{r}(t) = \\langle \\cos t,\\, \\sin t \\rangle$$
traces the unit circle counterclockwise.

**Example 2.** Line through $(1, 3)$ with direction $\\langle 2, -1 \\rangle$:  
$$\\vec{r}(t) = \\langle 1 + 2t,\\, 3 - t \\rangle$$

**Example 3.** Parabolic path:  
$$\\vec{r}(t) = \\langle t,\\, t^2 \\rangle$$

### Domain and Continuity

$\\vec{r}(t)$ is continuous at $t = c$ if both component functions $x(t)$ and $y(t)$ are continuous at $c$.

$$\\lim_{t \\to c} \\vec{r}(t) = \\left\\langle \\lim_{t \\to c} x(t),\\; \\lim_{t \\to c} y(t) \\right\\rangle$$`
    },
    {
      id: 'vv1-mc1',
      type: 'multiple-choice' as const,
      content: '**Practice Problems**',
      exercise: {
        questions: [
          {
            question: 'The vector-valued function $\\vec{r}(t) = \\langle 3\\cos t, 3\\sin t \\rangle$ traces:',
            options: ['A circle of radius 3 centered at the origin', 'A line with slope 1', 'An ellipse', 'A parabola'],
            correctAnswer: 0,
            explanation: '$x^2 + y^2 = 9\\cos^2 t + 9\\sin^2 t = 9$. This is a circle of radius 3.'
          },
          {
            question: 'If $\\vec{r}(t) = \\langle t^2 - 1, 2t + 3 \\rangle$, what is $\\vec{r}(2)$?',
            options: ['$\\langle 3, 7 \\rangle$', '$\\langle 5, 7 \\rangle$', '$\\langle 3, 4 \\rangle$', '$\\langle 1, 7 \\rangle$'],
            correctAnswer: 0,
            explanation: '$x(2) = 4 - 1 = 3$, $y(2) = 4 + 3 = 7$. So $\\vec{r}(2) = \\langle 3, 7 \\rangle$.'
          },
          {
            question: '$\\lim_{t \\to 0} \\langle \\frac{\\sin t}{t}, e^t \\rangle = $',
            options: ['$\\langle 1, 1 \\rangle$', '$\\langle 0, 1 \\rangle$', '$\\langle 1, 0 \\rangle$', 'Does not exist'],
            correctAnswer: 0,
            explanation: '$\\lim \\frac{\\sin t}{t} = 1$ and $\\lim e^t = e^0 = 1$. Limits are taken component-wise.'
          }
        ]
      }
    },
    {
      id: 'vv1-dropdown',
      type: 'dropdown-select' as const,
      content: '**Concept Checks**',
      exercise: {
        dropdowns: [
          {
            label: '$\\vec{r}(t) = \\langle 2+t, 5-3t \\rangle$ represents a:',
            options: ['Line', 'Circle', 'Parabola', 'Ellipse'],
            correctAnswers: ['Line'],
            hints: ['Both components are linear functions of $t$.'],
            explanation: 'Linear component functions produce a line. Eliminating $t$: $t = x - 2$, so $y = 5 - 3(x-2) = 11 - 3x$.'
          },
          {
            label: 'The position at $t = 0$ for $\\vec{r}(t) = \\langle e^t, \\ln(t+1) \\rangle$ is:',
            options: ['$\\langle 1, 0 \\rangle$', '$\\langle 0, 0 \\rangle$', '$\\langle 1, 1 \\rangle$', '$\\langle e, 0 \\rangle$'],
            correctAnswers: ['$\\langle 1, 0 \\rangle$'],
            hints: ['$e^0 = 1$, $\\ln 1 = 0$.'],
            explanation: '$\\vec{r}(0) = \\langle e^0, \\ln 1 \\rangle = \\langle 1, 0 \\rangle$.'
          }
        ]
      }
    },
    {
      id: 'vv1-input',
      type: 'input-box' as const,
      content: '**Computation**',
      exercise: {
        question: 'For $\\vec{r}(t) = \\langle 4t, t^2 \\rangle$, eliminate the parameter to write $y$ in terms of $x$. If $y = x^2/k$, what is $k$?',
        correctAnswer: '16',
        acceptableAnswers: ['16'],
        hints: ['From $x = 4t$, we get $t = x/4$.', 'Then $y = t^2 = (x/4)^2 = x^2/16$.'],
        explanation: '$t = x/4$, so $y = (x/4)^2 = x^2/16$. Therefore $k = 16$.'
      }
    },
    {
      id: 'vv1-summary',
      type: 'text' as const,
      content: `### Summary

- Vector-valued functions: $\\vec{r}(t) = \\langle x(t), y(t) \\rangle$
- Equivalent to parametric equations in vector notation
- Limits and continuity are evaluated component-wise
- The path is traced by the tip of the position vector

$$\\boxed{\\vec{r}(t) = \\langle x(t),\\, y(t) \\rangle}$$

> **Next:** Part 2 — Velocity, speed, and acceleration vectors.`
    }
  ]
};
