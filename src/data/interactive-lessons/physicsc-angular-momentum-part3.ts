export const physCAngMomPart3Data = {
  topicSlug: "angular-momentum-physics-c",
  sections: [
    {
      id: 'am3-intro',
      type: 'text' as const,
      content: `# Torque and $d\\vec{L}/dt$

**Part 3 of 7**

The rotational analog of Newton's second law:

$$\\vec{\\tau}_{\\text{net}} = \\frac{d\\vec{L}}{dt}$$

This is the most general form — it holds even when $I$ changes with time.

### Derivation

$$\\frac{d\\vec{L}}{dt} = \\frac{d}{dt}(\\vec{r} \\times \\vec{p}) = \\underbrace{\\dot{\\vec{r}} \\times \\vec{p}}_{= \\vec{v} \\times m\\vec{v} = 0} + \\vec{r} \\times \\dot{\\vec{p}} = \\vec{r} \\times \\vec{F} = \\vec{\\tau}$$

### Special Cases

| Condition | Result |
|:---|:---|
| Fixed axis, constant $I$ | $\\tau = I\\alpha$ |
| Fixed axis, varying $I$ | $\\tau = \\frac{d}{dt}(I\\omega)$ |
| $\\tau = 0$ | $\\vec{L} = \\text{const}$ (conservation) |`
    },
    {
      id: 'am3-mcq1',
      type: 'mcq' as const,
      question: 'A torque of $12$ N·m is applied to a wheel with $I = 4$ kg·m² for $3$ seconds. The change in angular momentum is:',
      options: ['$36$ kg·m²/s', '$12$ kg·m²/s', '$4$ kg·m²/s', '$48$ kg·m²/s'],
      correctAnswer: 0,
      explanation: '$\\Delta L = \\tau \\cdot \\Delta t = 12 \\times 3 = 36$ kg·m²/s. This is the rotational impulse-momentum theorem: $\\int \\tau\\,dt = \\Delta L$.'
    },
    {
      id: 'am3-impulse',
      type: 'text' as const,
      content: `## Angular Impulse

The angular analog of the impulse-momentum theorem:

$$\\vec{J}_{\\text{angular}} = \\int_{t_1}^{t_2} \\vec{\\tau}\\,dt = \\Delta\\vec{L} = \\vec{L}_f - \\vec{L}_i$$

For a constant torque: $\\vec{J} = \\vec{\\tau}\\,\\Delta t$

### Worked Example

A figure skater extends her arms (initial $I_1 = 4$ kg·m², $\\omega_1 = 2$ rad/s). She brings her arms in, changing her moment of inertia to $I_2 = 1.5$ kg·m² over $0.5$ seconds. 

If no external torque acts:

$$L_1 = L_2 \\implies I_1\\omega_1 = I_2\\omega_2$$

$$\\omega_2 = \\frac{4 \\times 2}{1.5} = \\frac{16}{3} \\approx 5.33 \\text{ rad/s}$$

The average internal torque she exerts during the transition:

$$\\tau_{\\text{avg}} = \\frac{\\Delta L}{\\Delta t}$$

But $\\Delta L = 0$ for the system! The internal torque changes $I$ and $\\omega$ while keeping $L$ constant.`
    },
    {
      id: 'am3-mcq2',
      type: 'mcq' as const,
      question: 'A constant torque brings a wheel from rest to $\\omega = 20$ rad/s in $5$ s. The angular impulse delivered is $100$ kg·m²/s. The moment of inertia is:',
      options: ['$5$ kg·m²', '$20$ kg·m²', '$100$ kg·m²', '$0.5$ kg·m²'],
      correctAnswer: 0,
      explanation: '$\\Delta L = I\\omega - 0 = I(20) = 100$. $I = 100/20 = 5$ kg·m².'
    },
    {
      id: 'am3-variable',
      type: 'text' as const,
      content: `## Varying Moment of Inertia

When $I$ changes with time (e.g., a rod extending while spinning):

$$\\tau = \\frac{d}{dt}(I\\omega) = I\\frac{d\\omega}{dt} + \\omega\\frac{dI}{dt}$$

This is **not** the same as $I\\alpha$! The $\\omega\\,dI/dt$ term accounts for the redistribution of mass.

### Example: Wrapping Rope

A disk ($I = \\frac{1}{2}MR^2$) has a rope wound around it. The rope unwinds under a hanging mass $m$.

Torque: $\\tau = mgR$ (ignoring rope mass)

$$mgR = I\\alpha = \\frac{1}{2}MR^2 \\alpha$$

$$\\alpha = \\frac{2mg}{MR}$$

Linear acceleration of the hanging mass: $a = R\\alpha = \\frac{2mg}{M}$

Note: if $m \\ll M$, then $a \\approx 0$ (the heavy disk barely accelerates). If $M \\ll m$, then $a \\to \\infty$ — but we'd need to account for the mass falling at $a = g$.

Correct treatment with tension $T$:

For hanging mass: $mg - T = ma$

For disk: $TR = \\frac{1}{2}MR^2 \\alpha$, $T = \\frac{1}{2}Ma$

$$mg - \\frac{1}{2}Ma = ma \\implies a = \\frac{mg}{m + M/2}$$`
    },
    {
      id: 'am3-mcq3',
      type: 'mcq' as const,
      question: 'A force $\\vec{F} = 5\\hat{x}$ N acts on a particle at position $\\vec{r} = 3\\hat{x} + 4\\hat{y}$ m. The torque about the origin is:',
      options: ['$-20\\hat{z}$ N·m', '$20\\hat{z}$ N·m', '$15\\hat{z}$ N·m', '$0$'],
      correctAnswer: 0,
      explanation: '$\\vec{\\tau} = \\vec{r} \\times \\vec{F} = (3\\hat{x} + 4\\hat{y}) \\times 5\\hat{x} = 15(\\hat{x}\\times\\hat{x}) + 20(\\hat{y}\\times\\hat{x}) = 0 + 20(-\\hat{z}) = -20\\hat{z}$ N·m.'
    },
    {
      id: 'am3-mcq4',
      type: 'mcq' as const,
      question: 'A disk with $I = 2$ kg·m² has angular velocity $\\omega(t) = 3t^2$ rad/s. The torque at $t = 2$ s is:',
      options: ['$24$ N·m', '$12$ N·m', '$36$ N·m', '$6$ N·m'],
      correctAnswer: 0,
      explanation: '$L = I\\omega = 2(3t^2) = 6t^2$. $\\tau = dL/dt = 12t$. At $t = 2$: $\\tau = 24$ N·m. Alternatively: $\\alpha = d\\omega/dt = 6t$, $\\tau = I\\alpha = 2(6)(2) = 24$ N·m.'
    },
    {
      id: 'am3-summary',
      type: 'text' as const,
      content: `## Summary

| Concept | Expression |
|:---|:---|
| Newton's 2nd (rotation) | $\\vec{\\tau} = d\\vec{L}/dt$ |
| Constant $I$ | $\\tau = I\\alpha$ |
| Variable $I$ | $\\tau = I(d\\omega/dt) + \\omega(dI/dt)$ |
| Angular impulse | $\\int \\tau\\,dt = \\Delta L$ |
| Cross product | $\\vec{\\tau} = \\vec{r} \\times \\vec{F}$ |

> **Next:** Part 4 — Conservation of angular momentum.`
    }
  ]
};
