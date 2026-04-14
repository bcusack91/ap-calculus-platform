export const physCVarMassPart5Data = {
  topicSlug: "variable-mass-physics-c",
  sections: [
    {
      id: 'vm5-intro',
      type: 'text' as const,
      content: `# Mass Accretion Problems

**Part 5 of 7**

In accretion problems, mass is **added** to the system ($dm/dt > 0$). The general equation becomes:

$$F_{\\text{ext}} = m\\frac{dv}{dt} + v_{\\text{rel}}\\frac{dm}{dt}$$

where $v_{\\text{rel}}$ is the velocity of incoming mass relative to the system.

### Common Accretion Scenarios
- A cart collecting rain/sand
- A snowplow accumulating snow
- A rocket scooping up interstellar gas (ram-jet)
- A rope being pulled from a pile`
    },
    {
      id: 'vm5-mcq1',
      type: 'mcq' as const,
      question: 'An open cart of mass $M$ moves at speed $v_0$ on a frictionless track. Rain falls vertically into the cart at rate $dm/dt = \\alpha$. The velocity of the rain relative to the cart in the horizontal direction is:',
      options: ['$-v$ (opposite to cart velocity)', '$0$', '$v$', '$v_0$'],
      correctAnswer: 0,
      explanation: 'Rain falls vertically, so its horizontal velocity is zero in the ground frame. In the cart frame, the rain approaches horizontally at $-v$ (backward). The relative horizontal velocity is $0 - v = -v$.'
    },
    {
      id: 'vm5-rain',
      type: 'text' as const,
      content: `## Cart Collecting Rain

An open cart ($M$, initial speed $v_0$) collects rain (vertical, rate $\\alpha$ = mass per time). No friction.

**Horizontal momentum is conserved** (rain has zero horizontal momentum):

$$Mv_0 = (M + \\alpha t)v(t)$$

$$\\boxed{v(t) = \\frac{Mv_0}{M + \\alpha t}}$$

The cart slows down as it gains mass. The deceleration:

$$a(t) = \\frac{dv}{dt} = \\frac{-M v_0 \\alpha}{(M + \\alpha t)^2}$$

### Position as a function of time:

$$x(t) = \\int_0^t v\\,dt' = \\int_0^t \\frac{Mv_0}{M + \\alpha t'}dt' = \\frac{Mv_0}{\\alpha}\\ln\\left(1 + \\frac{\\alpha t}{M}\\right)$$

Note: As $t \\to \\infty$, $v \\to 0$ but $x \\to \\infty$ (logarithmically).`
    },
    {
      id: 'vm5-mcq2',
      type: 'mcq' as const,
      question: 'A 100 kg cart moves at $10$ m/s. Rain falls in at $2$ kg/s. After $50$ s, the cart\'s speed is:',
      options: ['$5$ m/s', '$2.5$ m/s', '$1$ m/s', '$0$ m/s'],
      correctAnswer: 0,
      explanation: '$v = \\frac{100 \\times 10}{100 + 2(50)} = \\frac{1000}{200} = 5$ m/s. The cart has doubled its mass, so its speed is halved.'
    },
    {
      id: 'vm5-snow',
      type: 'text' as const,
      content: `## Snowplow Problem

A snowplow of mass $M$ pushes through snow of depth $d$ and density $\\rho$. The plow has width $w$ and moves at speed $v$.

**Mass pickup rate:** $\\frac{dm}{dt} = \\rho d w v$

Note: the pickup rate depends on $v$ since faster motion sweeps up more snow per time.

If constant force $F$ is applied:

$$F = (M + \\rho dwx)\\frac{dv}{dt} + \\rho dwv^2$$

where $x$ is distance traveled. The $v^2$ term acts like a drag force — this is why snowplows slow down in deep snow.

### Simplification: Constant Speed

If the plow maintains constant speed ($dv/dt = 0$):

$$F = \\rho dwv^2$$

The required force is proportional to $v^2$ — just like aerodynamic drag!`
    },
    {
      id: 'vm5-mcq3',
      type: 'mcq' as const,
      question: 'A snowplow maintains constant speed through uniform snow. If the snow depth doubles, the required force:',
      options: ['Doubles', 'Quadruples', 'Stays the same', 'Increases by $\\sqrt{2}$'],
      correctAnswer: 0,
      explanation: 'At constant speed, $F = \\rho d w v^2$. Doubling $d$ doubles $F$. The force is directly proportional to the snow depth.'
    },
    {
      id: 'vm5-rope',
      type: 'text' as const,
      content: `## Lifting a Rope from a Pile

A rope of mass $M$ and length $L$ is coiled on the floor. One end is lifted at constant speed $v$.

When height $y$ of rope is in the air:
- Mass in air: $m = (M/L)y$
- Weight of hanging rope: $mg = (Mg/L)y$
- Force to accelerate new rope from rest to speed $v$: $v\\,dm/dt = v \\cdot (M/L) \\cdot v = Mv^2/L$

Total force applied:

$$F = \\frac{Mgy}{L} + \\frac{Mv^2}{L} = \\frac{M}{L}(gy + v^2)$$

At $y = 0$ (just starting): $F = Mv^2/L$

At $y = L$ (fully lifted): $F = Mg + Mv^2/L$`
    },
    {
      id: 'vm5-mcq4',
      type: 'mcq' as const,
      question: 'When lifting a chain from a pile at constant speed $v$, the extra force (beyond the weight of the hanging chain) needed is:',
      options: ['$Mv^2/L$ (constant)', '$Mgv/L$', 'Zero', '$Mv/L$'],
      correctAnswer: 0,
      explanation: 'The additional force $= v(dm/dt) = v(M/L)v = Mv^2/L$. This is the momentum transfer rate: accelerating each new link from rest to speed $v$. It\'s constant because $v$ and $dm/dt$ (at constant $v$) are constant.'
    },
    {
      id: 'vm5-summary',
      type: 'text' as const,
      content: `## Summary

| Problem | Key Result |
|:---|:---|
| Cart + rain | $v = Mv_0/(M + \\alpha t)$ |
| Snowplow (const $v$) | $F = \\rho dw v^2$ |
| Lifting rope | $F = (M/L)(gy + v^2)$ |
| General accretion | Mass gain → velocity decreases if no force applied |

> **Next:** Part 6 — Problem-solving workshop.`
    }
  ]
};
