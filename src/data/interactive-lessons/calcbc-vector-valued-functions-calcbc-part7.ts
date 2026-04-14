export const calcbcVectorsPart7Data = {
  topicSlug: 'vector-valued-functions-calcbc',
  sections: [
    {
      id: 'vv7-intro',
      type: 'text' as const,
      content: `# Vector-Valued Functions — Comprehensive Review

**Part 7 of 7 — Full Topic Review**

### Master Reference Table

| Concept | Formula |
|---------|---------|
| Position | $\\vec{r}(t) = \\langle x(t), y(t) \\rangle$ |
| Velocity | $\\vec{v}(t) = \\langle x'(t), y'(t) \\rangle$ |
| Acceleration | $\\vec{a}(t) = \\langle x''(t), y''(t) \\rangle$ |
| Speed | $\\|\\vec{v}\\| = \\sqrt{(x')^2 + (y')^2}$ |
| Distance | $\\int_a^b \\|\\vec{v}\\|\\,dt$ |
| Displacement | $\\int_a^b \\vec{v}\\,dt = \\vec{r}(b) - \\vec{r}(a)$ |
| Unit tangent | $\\hat{T} = \\vec{v}/\\|\\vec{v}\\|$ |
| At rest | $\\vec{v}(t) = \\vec{0}$ |

> **AP Tip:** This table covers everything you need for vector motion questions. Memorize it.`
    },
    {
      id: 'vv7-review',
      type: 'text' as const,
      content: `### Key Connections

**Vectors ↔ Parametric:** Same math, different notation. $\\vec{r}(t) = \\langle x(t), y(t) \\rangle$ is the same as $x = x(t), y = y(t)$.

**Vectors ↔ 1D Motion:** Extends AB motion concepts:
- AB: $v(t) = s'(t)$, distance $= \\int|v|\\,dt$
- BC: $\\vec{v}(t) = \\vec{r}\\,'(t)$, distance $= \\int\\|\\vec{v}\\|\\,dt$

**Common Mistakes:**
1. Confusing displacement (vector) with distance (scalar)
2. Forgetting to check BOTH components for "at rest"
3. Using $|x'| + |y'|$ instead of $\\sqrt{(x')^2+(y')^2}$ for speed
4. Not applying initial conditions after integration`
    },
    {
      id: 'vv7-mc1',
      type: 'multiple-choice' as const,
      content: '**Review Questions**',
      exercise: {
        questions: [
          {
            question: 'If $\\|\\vec{v}(t)\\|$ is constant and nonzero, which is true?',
            options: ['$\\vec{a} \\cdot \\vec{v} = 0$ (acceleration perpendicular to velocity)', 'Acceleration is zero', 'The path is a straight line', 'Speed is increasing'],
            correctAnswer: 0,
            explanation: '$\\frac{d}{dt}(\\vec{v}\\cdot\\vec{v}) = 2\\vec{v}\\cdot\\vec{a} = \\frac{d}{dt}(c^2) = 0$. So $\\vec{a} \\perp \\vec{v}$. (Uniform circular motion is a classic example.)'
          },
          {
            question: 'The displacement from $t = 0$ to $t = T$ equals $\\langle 0, 0 \\rangle$. This means:',
            options: ['The particle returns to its starting point', 'The particle never moved', 'The speed was zero', 'The path was a straight line'],
            correctAnswer: 0,
            explanation: 'Zero displacement means $\\vec{r}(T) = \\vec{r}(0)$: the particle is back where it started. It may have traveled a long distance (e.g., a full circle).'
          },
          {
            question: 'Which increases the total distance traveled?',
            options: ['Higher speed over the interval', 'Higher acceleration', 'Starting farther from the origin', 'None of these necessarily'],
            correctAnswer: 0,
            explanation: 'Distance $= \\int \\|\\vec{v}\\|\\,dt$. Higher speed (larger $\\|\\vec{v}\\|$) directly increases the integral.'
          }
        ]
      }
    },
    {
      id: 'vv7-dropdown',
      type: 'dropdown-select' as const,
      content: '**Concept Checks**',
      exercise: {
        dropdowns: [
          {
            label: 'For $\\vec{r}(t) = \\langle t - \\sin t, 1 - \\cos t \\rangle$ (cycloid), the particle is at rest when:',
            options: ['$t = 2k\\pi$ (multiples of $2\\pi$)', '$t = k\\pi$', '$t = \\pi/2 + k\\pi$', 'Never'],
            correctAnswers: ['$t = 2k\\pi$ (multiples of $2\\pi$)'],
            hints: ['$\\vec{v} = \\langle 1 - \\cos t, \\sin t \\rangle = \\vec{0}$ when?'],
            explanation: '$1 - \\cos t = 0 \\implies \\cos t = 1 \\implies t = 2k\\pi$. And $\\sin(2k\\pi) = 0$ ✓. Both components are zero at $t = 2k\\pi$.'
          },
          {
            label: 'If $\\vec{v}(t) = \\langle t^2, t \\rangle$, the total distance from $t = 0$ to $t = 1$ is:',
            options: ['$\\int_0^1 \\sqrt{t^4 + t^2}\\,dt$', '$\\langle 1/3, 1/2 \\rangle$', '$\\sqrt{1/9 + 1/4}$', '$\\int_0^1(t^2 + t)\\,dt$'],
            correctAnswers: ['$\\int_0^1 \\sqrt{t^4 + t^2}\\,dt$'],
            hints: ['Distance $= \\int \\|\\vec{v}\\|\\,dt$, not $\\int(|v_x|+|v_y|)\\,dt$.'],
            explanation: '$\\|\\vec{v}\\| = \\sqrt{t^4 + t^2}$. Distance $= \\int_0^1 \\sqrt{t^4 + t^2}\\,dt = \\int_0^1 t\\sqrt{t^2+1}\\,dt$ (since $t \\ge 0$).'
          }
        ]
      }
    },
    {
      id: 'vv7-input',
      type: 'input-box' as const,
      content: '**Final Computation**',
      exercise: {
        question: 'A particle moves along $\\vec{r}(t) = \\langle 3t, 4t \\rangle$. What is the total distance from $t = 0$ to $t = 10$?',
        correctAnswer: '50',
        acceptableAnswers: ['50', '50.0'],
        hints: ['Speed $= \\sqrt{9+16} = 5$.', 'Distance $= 5 \\times 10$.'],
        explanation: 'Speed $= 5$ (constant). Distance $= 5 \\cdot 10 = 50$. Straight-line motion at constant speed.'
      }
    },
    {
      id: 'vv7-summary',
      type: 'text' as const,
      content: `### Topic Complete!

You've mastered vector-valued functions:
- Position, velocity, acceleration — component-wise derivatives
- Speed vs. velocity vs. displacement vs. distance
- Integration with initial conditions
- Arc length and unit tangent vectors
- AP FRQ strategies for motion problems

$$\\boxed{\\vec{v}(t) = \\vec{r}\\,'(t) \\qquad \\text{Distance} = \\int_a^b \\|\\vec{v}(t)\\|\\,dt}$$

> **Up next:** Arc Length & Surface Area — extending these ideas to general curves.`
    }
  ]
};
