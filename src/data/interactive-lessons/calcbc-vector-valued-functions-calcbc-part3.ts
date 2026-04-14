export const calcbcVectorsPart3Data = {
  topicSlug: 'vector-valued-functions-calcbc',
  sections: [
    {
      id: 'vv3-intro',
      type: 'text' as const,
      content: `# Vector-Valued Functions — Integration & Displacement

**Part 3 of 7 — Antiderivatives and Distance**

Integration of vector functions is also done component-wise:

$$\\int_a^b \\vec{r}\\,'(t)\\,dt = \\vec{r}(b) - \\vec{r}(a) = \\text{displacement}$$

### Displacement vs. Distance

| Concept | Formula | Type |
|---------|---------|------|
| **Displacement** | $\\int_a^b \\vec{v}(t)\\,dt = \\langle \\int_a^b x'\\,dt,\\, \\int_a^b y'\\,dt \\rangle$ | Vector |
| **Total distance** | $\\int_a^b \\|\\vec{v}(t)\\|\\,dt = \\int_a^b \\sqrt{(x')^2 + (y')^2}\\,dt$ | Scalar |

> **AP Tip:** "How far" = total distance (scalar). "Net change in position" = displacement (vector). The exam is precise about this distinction.`
    },
    {
      id: 'vv3-examples',
      type: 'text' as const,
      content: `### Example

A particle has velocity $\\vec{v}(t) = \\langle 2t, 3 \\rangle$ and initial position $\\vec{r}(0) = \\langle 1, -2 \\rangle$.

**Position function:**
$$\\vec{r}(t) = \\int \\vec{v}(t)\\,dt = \\langle t^2 + C_1,\\, 3t + C_2 \\rangle$$

Apply ICs: $\\vec{r}(0) = \\langle C_1, C_2 \\rangle = \\langle 1, -2 \\rangle$

$$\\boxed{\\vec{r}(t) = \\langle t^2 + 1,\\, 3t - 2 \\rangle}$$

**Displacement from $t=0$ to $t=2$:**
$$\\vec{r}(2) - \\vec{r}(0) = \\langle 5, 4 \\rangle - \\langle 1, -2 \\rangle = \\langle 4, 6 \\rangle$$

**Total distance from $t=0$ to $t=2$:**
$$\\int_0^2 \\sqrt{4t^2 + 9}\\,dt$$
This requires trig sub or a calculator. On the AP exam, a calculator-active section would provide a numerical answer.`
    },
    {
      id: 'vv3-mc1',
      type: 'multiple-choice' as const,
      content: '**Practice Problems**',
      exercise: {
        questions: [
          {
            question: 'Displacement is a _____ and total distance is a _____.',
            options: ['vector; scalar', 'scalar; vector', 'scalar; scalar', 'vector; vector'],
            correctAnswer: 0,
            explanation: 'Displacement $= \\int \\vec{v}\\,dt$ is a vector (has direction). Distance $= \\int \\|\\vec{v}\\|\\,dt$ is a scalar (magnitude only).'
          },
          {
            question: 'If $\\vec{v}(t) = \\langle 1, -1 \\rangle$ for $0 \\le t \\le 4$, the total distance traveled is:',
            options: ['$4\\sqrt{2}$', '$4$', '$0$', '$\\sqrt{2}$'],
            correctAnswer: 0,
            explanation: 'Speed $= \\sqrt{1+1} = \\sqrt{2}$. Distance $= \\sqrt{2} \\cdot 4 = 4\\sqrt{2}$.'
          },
          {
            question: 'A particle with $\\vec{r}(t) = \\langle \\sin t, \\cos t \\rangle$ travels from $t = 0$ to $t = 2\\pi$. Its displacement is:',
            options: ['$\\langle 0, 0 \\rangle$', '$\\langle 2\\pi, 0 \\rangle$', '$\\langle 0, 2\\pi \\rangle$', '$\\langle 1, 1 \\rangle$'],
            correctAnswer: 0,
            explanation: '$\\vec{r}(2\\pi) - \\vec{r}(0) = \\langle 0, 1 \\rangle - \\langle 0, 1 \\rangle = \\langle 0, 0 \\rangle$. The particle returns to start (full circle).'
          }
        ]
      }
    },
    {
      id: 'vv3-dropdown',
      type: 'dropdown-select' as const,
      content: '**Concept Checks**',
      exercise: {
        dropdowns: [
          {
            label: 'If $\\vec{a}(t) = \\langle 0, -g \\rangle$ (projectile motion), then $\\vec{v}(t) = $',
            options: ['$\\langle v_{0x},\\, v_{0y} - gt \\rangle$', '$\\langle -gt, 0 \\rangle$', '$\\langle 0, -gt \\rangle$', '$\\langle gt, -g \\rangle$'],
            correctAnswers: ['$\\langle v_{0x},\\, v_{0y} - gt \\rangle$'],
            hints: ['Integrate $\\vec{a}(t)$ and apply initial velocity.'],
            explanation: '$\\vec{v}(t) = \\int \\langle 0, -g \\rangle\\,dt = \\langle C_1, -gt + C_2 \\rangle$. At $t = 0$: $\\vec{v}(0) = \\langle v_{0x}, v_{0y} \\rangle$, so $C_1 = v_{0x}$, $C_2 = v_{0y}$.'
          },
          {
            label: '$\\int_0^3 \\langle 2t, 6t^2 \\rangle\\,dt$ equals:',
            options: ['$\\langle 9, 54 \\rangle$', '$\\langle 6, 18 \\rangle$', '$\\langle 3, 54 \\rangle$', '$\\langle 9, 18 \\rangle$'],
            correctAnswers: ['$\\langle 9, 54 \\rangle$'],
            hints: ['Integrate each component: $\\int_0^3 2t\\,dt$ and $\\int_0^3 6t^2\\,dt$.'],
            explanation: '$\\int_0^3 2t\\,dt = [t^2]_0^3 = 9$. $\\int_0^3 6t^2\\,dt = [2t^3]_0^3 = 54$. Result: $\\langle 9, 54 \\rangle$.'
          }
        ]
      }
    },
    {
      id: 'vv3-input',
      type: 'input-box' as const,
      content: '**Computation**',
      exercise: {
        question: 'A particle has $\\vec{v}(t) = \\langle 3, 4 \\rangle$ (constant). What is the total distance traveled from $t = 0$ to $t = 3$?',
        correctAnswer: '15',
        acceptableAnswers: ['15', '15.0'],
        hints: ['Speed $= \\|\\vec{v}\\| = \\sqrt{9 + 16} = 5$.', 'Distance $= \\text{speed} \\times \\text{time}$.'],
        explanation: 'Speed $= 5$ (constant). Distance $= 5 \\cdot 3 = 15$.'
      }
    },
    {
      id: 'vv3-summary',
      type: 'text' as const,
      content: `### Summary

- Integrate vector functions component-wise
- Displacement $= \\int_a^b \\vec{v}\\,dt$ (vector)
- Total distance $= \\int_a^b \\|\\vec{v}\\|\\,dt$ (scalar)
- Use initial conditions to find constants of integration

$$\\boxed{\\text{Distance} = \\int_a^b \\sqrt{[x'(t)]^2 + [y'(t)]^2}\\,dt}$$

> **Next:** Part 4 — Arc length and the unit tangent vector.`
    }
  ]
};
