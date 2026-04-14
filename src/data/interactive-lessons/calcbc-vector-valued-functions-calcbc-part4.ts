export const calcbcVectorsPart4Data = {
  topicSlug: 'vector-valued-functions-calcbc',
  sections: [
    {
      id: 'vv4-intro',
      type: 'text' as const,
      content: `# Vector-Valued Functions — Arc Length & Unit Tangent

**Part 4 of 7 — Arc Length and the Unit Tangent Vector**

### Arc Length

The arc length of $\\vec{r}(t) = \\langle x(t), y(t) \\rangle$ from $t = a$ to $t = b$ is:

$$s = \\int_a^b \\|\\vec{r}\\,'(t)\\|\\,dt = \\int_a^b \\sqrt{[x'(t)]^2 + [y'(t)]^2}\\,dt$$

Note: this is identical to the total distance formula — arc length = distance traveled.

### Unit Tangent Vector

$$\\hat{T}(t) = \\frac{\\vec{r}\\,'(t)}{\\|\\vec{r}\\,'(t)\\|}$$

The unit tangent points in the direction of motion with magnitude 1.

| Vector | Formula | Meaning |
|--------|---------|---------|
| $\\vec{r}\\,'(t)$ | $\\langle x', y' \\rangle$ | Tangent (velocity) |
| $\\hat{T}(t)$ | $\\vec{r}\\,'/\\|\\vec{r}\\,'\\|$ | Unit tangent (direction only) |
| $\\hat{N}(t)$ | $\\hat{T}\\,'/\\|\\hat{T}\\,'\\|$ | Unit normal (beyond BC scope) |`
    },
    {
      id: 'vv4-examples',
      type: 'text' as const,
      content: `### Example

$\\vec{r}(t) = \\langle 3\\cos t, 3\\sin t \\rangle$, $0 \\le t \\le 2\\pi$.

$\\vec{r}\\,'(t) = \\langle -3\\sin t, 3\\cos t \\rangle$

$\\|\\vec{r}\\,'(t)\\| = \\sqrt{9\\sin^2 t + 9\\cos^2 t} = 3$

**Arc length:** $s = \\int_0^{2\\pi} 3\\,dt = 6\\pi$ ✓ (circumference of circle of radius 3)

**Unit tangent:** $\\hat{T}(t) = \\frac{1}{3}\\langle -3\\sin t, 3\\cos t \\rangle = \\langle -\\sin t, \\cos t \\rangle$

> **AP Tip:** Arc length and total distance are computed with the same integral. The only difference is interpretation: arc length describes the curve, distance describes the motion.`
    },
    {
      id: 'vv4-mc1',
      type: 'multiple-choice' as const,
      content: '**Practice Problems**',
      exercise: {
        questions: [
          {
            question: 'The arc length of $\\vec{r}(t) = \\langle t, t \\rangle$ from $t = 0$ to $t = 1$ is:',
            options: ['$\\sqrt{2}$', '$1$', '$2$', '$\\sqrt{2}/2$'],
            correctAnswer: 0,
            explanation: '$\\vec{r}\\,\' = \\langle 1, 1 \\rangle$, $\\|\\vec{r}\\,\'\\| = \\sqrt{2}$. Arc length $= \\int_0^1 \\sqrt{2}\\,dt = \\sqrt{2}$.'
          },
          {
            question: 'The unit tangent vector has magnitude:',
            options: ['Always 1', 'Equal to the speed', 'Variable', 'Always greater than 1'],
            correctAnswer: 0,
            explanation: 'By definition, $\\hat{T} = \\vec{r}\\,\'/\\|\\vec{r}\\,\'\\|$ is normalized to have unit length.'
          }
        ]
      }
    },
    {
      id: 'vv4-dropdown',
      type: 'dropdown-select' as const,
      content: '**Concept Checks**',
      exercise: {
        dropdowns: [
          {
            label: 'For $\\vec{r}(t) = \\langle 4t, 3t \\rangle$, the unit tangent vector $\\hat{T}$ is:',
            options: ['$\\langle 4/5, 3/5 \\rangle$', '$\\langle 4, 3 \\rangle$', '$\\langle 3/5, 4/5 \\rangle$', '$\\langle 1/2, 1/2 \\rangle$'],
            correctAnswers: ['$\\langle 4/5, 3/5 \\rangle$'],
            hints: ['$\\vec{r}\\,\' = \\langle 4, 3 \\rangle$, $\\|\\vec{r}\\,\'\\| = 5$.'],
            explanation: '$\\hat{T} = \\langle 4, 3 \\rangle / 5 = \\langle 4/5, 3/5 \\rangle$. Constant direction — the path is a straight line.'
          },
          {
            label: 'Arc length depends on:',
            options: ['The parametrization (path and speed)', 'Only the shape of the curve', 'Only the speed', 'The acceleration'],
            correctAnswers: ['The parametrization (path and speed)'],
            hints: ['Different parametrizations of the same curve can cover different portions.'],
            explanation: 'The integral $\\int\\|\\vec{r}\\,\'\\|\\,dt$ depends on both the curve shape and how it is traversed. However, for the same path traversed once, the arc length is the same regardless of parametrization.'
          }
        ]
      }
    },
    {
      id: 'vv4-input',
      type: 'input-box' as const,
      content: '**Arc Length Computation**',
      exercise: {
        question: 'Find the arc length of $\\vec{r}(t) = \\langle 5\\cos t, 5\\sin t \\rangle$ from $t = 0$ to $t = \\pi$. Give your answer as a multiple of $\\pi$ (e.g. "5pi").',
        correctAnswer: '5pi',
        acceptableAnswers: ['5pi', '5π', '5 pi', '15.71', '15.707'],
        hints: ['$\\|\\vec{r}\\,\'\\| = 5$ (constant, like the radius).', 'Half the circumference of radius-5 circle.'],
        explanation: '$\\|\\vec{r}\\,\'\\| = 5$. Arc length $= \\int_0^\\pi 5\\,dt = 5\\pi$. This is half the circumference $2\\pi(5)/2 = 5\\pi$. ✓'
      }
    },
    {
      id: 'vv4-summary',
      type: 'text' as const,
      content: `### Summary

- Arc length $= \\int_a^b \\|\\vec{r}\\,'(t)\\|\\,dt$ (same as total distance)
- Unit tangent vector: $\\hat{T}(t) = \\vec{r}\\,'/\\|\\vec{r}\\,'\\|$
- $\\hat{T}$ gives direction of motion, $\\|\\vec{r}\\,'\\|$ gives speed

$$\\boxed{s = \\int_a^b \\|\\vec{r}\\,'(t)\\|\\,dt \\qquad \\hat{T} = \\frac{\\vec{r}\\,'}{\\|\\vec{r}\\,'\\|}}$$

> **Next:** Part 5 — Motion problems and free-response strategies.`
    }
  ]
};
