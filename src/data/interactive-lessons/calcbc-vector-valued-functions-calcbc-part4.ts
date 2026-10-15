export const calcbcVectorsPart4Data = {
  topicSlug: 'vector-valued-functions-calcbc',
  sections: [
    {
      id: 'vv4-intro',
      type: 'text' as const,
      content: `# Vector-Valued Functions — Arc Length, Speed & Acceleration

**Part 4 of 7 — Arc Length, Speed, and Acceleration**

### Arc Length

The arc length of $\\vec{r}(t) = \\langle x(t), y(t) \\rangle$ from $t = a$ to $t = b$ is:

$$s = \\int_a^b \\|\\vec{r}\\,'(t)\\|\\,dt = \\int_a^b \\sqrt{[x'(t)]^2 + [y'(t)]^2}\\,dt$$

Note: this is identical to the total distance formula — arc length = distance traveled.

### Speed and Acceleration

| Quantity | Formula | Meaning |
|--------|---------|---------|
| $\\vec{v}(t) = \\vec{r}\\,'(t)$ | $\\langle x', y' \\rangle$ | Velocity (direction of motion) |
| $\\|\\vec{v}(t)\\|$ | $\\sqrt{(x')^2 + (y')^2}$ | Speed (a scalar) |
| $\\vec{a}(t) = \\vec{r}\\,''(t)$ | $\\langle x'', y'' \\rangle$ | Acceleration |

To decide whether the particle is **speeding up**, differentiate the speed itself: the speed is increasing when $\\frac{d}{dt}\\|\\vec{v}(t)\\| > 0$. A nonzero acceleration vector alone does not mean the speed is changing; a particle moving around a circle at constant speed still has nonzero acceleration.`
    },
    {
      id: 'vv4-examples',
      type: 'text' as const,
      content: `### Example

$\\vec{r}(t) = \\langle 3\\cos t, 3\\sin t \\rangle$, $0 \\le t \\le 2\\pi$.

$\\vec{r}\\,'(t) = \\langle -3\\sin t, 3\\cos t \\rangle$

$\\|\\vec{r}\\,'(t)\\| = \\sqrt{9\\sin^2 t + 9\\cos^2 t} = 3$

**Arc length:** $s = \\int_0^{2\\pi} 3\\,dt = 6\\pi$ ✓ (circumference of circle of radius 3)

**Acceleration:** $\\vec{a}(t) = \\langle -3\\cos t, -3\\sin t \\rangle$, which is never $\\vec{0}$, even though the speed stays $3$.

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
            question: 'A particle has position $\\vec{r}(t) = \\langle t^2, 2t \\rangle$. For $t > 0$, its speed is:',
            options: ['Decreasing, because $y\'(t)$ is constant', 'Constant, because $\\vec{a}(t)$ is constant', 'Increasing, because $2\\sqrt{t^2 + 1}$ grows', 'Increasing, because $x(t)$ is increasing'],
            correctAnswer: 2,
            explanation: 'The speed is $\\sqrt{(2t)^2 + 2^2} = 2\\sqrt{t^2 + 1}$, whose derivative $\\frac{2t}{\\sqrt{t^2+1}}$ is positive for $t > 0$. A constant $y\'$ does not make the speed fall, a constant acceleration $\\langle 2, 0 \\rangle$ does not make the speed constant, and an increasing position says nothing about speed.'
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
            label: 'For $\\vec{r}(t) = \\langle 4t, 3t \\rangle$, the speed of the particle is',
            options: ['$7$', '$5$', '$25$', '$5t$'],
            correctAnswers: ['$5$'],
            hints: ['$\\vec{r}\\,\' = \\langle 4, 3 \\rangle$.'],
            explanation: 'Speed $= \\|\\langle 4, 3 \\rangle\\| = \\sqrt{16 + 9} = 5$, constant because the path is a straight line traced at a steady rate. Adding components gives $7$, forgetting the square root gives $25$, and $5t$ is the distance traveled from $t = 0$, not the speed.'
          },
          {
            label: 'Arc length depends on:',
            options: ['The path traced, including any retracing', 'Only the two endpoints, like displacement', 'How fast the particle moves along the path', 'The acceleration of the particle on the path'],
            correctAnswers: ['The path traced, including any retracing'],
            hints: ['Different parametrizations of the same curve can cover different portions.'],
            explanation: '$L = \\int\\|\\vec{r}\\,\'(t)\\|\\,dt$ adds up the distance actually traveled. Reparametrizing the same path (traced once) at a different speed leaves $L$ unchanged, and acceleration plays no role; but a parametrization that retraces part of the curve counts that part again. The endpoints alone give displacement, not arc length.'
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
- Velocity $\\vec{r}\\,'$ gives the direction of motion; its magnitude is the speed
- Speed is increasing when $\\frac{d}{dt}\\|\\vec{v}\\| > 0$; acceleration is $\\vec{r}\\,''$

$$\\boxed{s = \\int_a^b \\|\\vec{r}\\,'(t)\\|\\,dt}$$

> **Next:** Part 5 — Motion problems and free-response strategies.`
    }
  ]
};
