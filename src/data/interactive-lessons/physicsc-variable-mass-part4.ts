export const physCVarMassPart4Data = {
  topicSlug: "variable-mass-physics-c",
  sections: [
    {
      id: 'vm4-intro',
      type: 'text' as const,
      content: `# Variable Mass — Chains and Ropes

**Part 4 of 7**

Many classic physics problems involve variable-mass systems that aren't rockets: chains falling off tables, ropes being lifted, sand pouring onto conveyors.

### General Variable-Mass Equation

$$F_{\\text{ext}} + v_{\\text{rel}}\\frac{dm}{dt} = m\\frac{dv}{dt}$$

where $v_{\\text{rel}}$ is the velocity of the incoming/outgoing mass **relative** to the system.

For mass **leaving** the system: $dm/dt < 0$

For mass **entering** the system: $dm/dt > 0$`
    },
    {
      id: 'vm4-mcq1',
      type: 'mcq' as const,
      question: 'A chain of total length $L$ and mass $M$ lies on a table with a small piece hanging over the edge. If released, which quantity increases as more chain falls?',
      options: [
        'The gravitational force on the hanging portion',
        'The total mass of the chain',
        'The tension at the table edge stays constant',
        'The normal force from the table increases'
      ],
      correctAnswer: 0,
      explanation: 'As the chain slides off, more mass hangs below the edge. The weight of the hanging portion $= (x/L)Mg$ increases with the hanging length $x$, causing the chain to accelerate.'
    },
    {
      id: 'vm4-chain',
      type: 'text' as const,
      content: `## Falling Chain Problem

A uniform chain of mass $M$ and length $L$ is held vertically with its bottom end just touching a table. It is released and falls, piling up on the table.

**What force does the chain exert on the table when a length $x$ has landed?**

Two contributions:
1. **Weight** of the piled chain: $W = \\frac{Mx}{L}g$
2. **Impact force** from the still-falling links

The falling links have velocity $v = \\sqrt{2gx}$ (free fall from height $x$).

The rate of mass arriving: $\\frac{dm}{dt} = \\frac{M}{L}\\frac{dx}{dt} = \\frac{M}{L}v$

The momentum delivered per unit time (impact force):

$$F_{\\text{impact}} = v\\frac{dm}{dt} = \\frac{Mv^2}{L} = \\frac{M(2gx)}{L} = \\frac{2Mgx}{L}$$

**Total force on table:**

$$F = \\frac{Mgx}{L} + \\frac{2Mgx}{L} = \\frac{3Mgx}{L}$$

When the last link lands ($x = L$): $F = 3Mg$ — **three times the chain's weight!**`
    },
    {
      id: 'vm4-mcq2',
      type: 'mcq' as const,
      question: 'A chain of mass $M$ falls from height $L$ onto a scale. Just as the last link lands, the scale reads:',
      options: ['$3Mg$', '$2Mg$', '$Mg$', '$4Mg$'],
      correctAnswer: 0,
      explanation: 'The total force is weight of piled chain ($Mg$) plus impact force ($2Mg$) = $3Mg$. The impact force is $v(dm/dt) = v \\cdot (M/L) \\cdot v = Mv^2/L = M(2gL)/L = 2Mg$.'
    },
    {
      id: 'vm4-slide',
      type: 'text' as const,
      content: `## Chain Sliding Off a Frictionless Table

A chain of length $L$ and mass $M$ lies on a frictionless table with a length $x_0$ hanging over the edge. Find $v(x)$ as a function of hanging length $x$.

**Equation of motion:** The system has mass $M$ (total chain always part of system). The hanging weight drives the motion:

$$M\\frac{dv}{dt} = \\frac{Mx}{L}g$$

Using $v\\,dv = a\\,dx$ (since $v = dx/dt$):

$$v\\,dv = \\frac{g}{L}x\\,dx$$

$$\\int_0^v v'\\,dv' = \\frac{g}{L}\\int_{x_0}^{x} x'\\,dx'$$

$$\\frac{v^2}{2} = \\frac{g}{2L}(x^2 - x_0^2)$$

$$\\boxed{v = \\sqrt{\\frac{g}{L}(x^2 - x_0^2)}}$$

This can also be obtained from energy conservation:

$$\\Delta KE = \\frac{1}{2}Mv^2 = \\Delta PE = \\frac{Mg}{2L}(x^2 - x_0^2)$$`
    },
    {
      id: 'vm4-mcq3',
      type: 'mcq' as const,
      question: 'A chain slides off a frictionless table. When the hanging length doubles from $x_0$ to $2x_0$, the speed is:',
      options: ['$x_0\\sqrt{3g/L}$', '$x_0\\sqrt{g/L}$', '$2x_0\\sqrt{g/L}$', '$x_0\\sqrt{2g/L}$'],
      correctAnswer: 0,
      explanation: '$v = \\sqrt{(g/L)((2x_0)^2 - x_0^2)} = \\sqrt{(g/L)(3x_0^2)} = x_0\\sqrt{3g/L}$.'
    },
    {
      id: 'vm4-mcq4',
      type: 'mcq' as const,
      question: 'Sand falls vertically at rate $dm/dt$ onto a conveyor belt moving at constant speed $v$. The force required to keep the belt at constant speed is:',
      options: ['$v\\,dm/dt$', '$(1/2)v\\,dm/dt$', '$v^2\\,dm/dt$', 'Zero'],
      correctAnswer: 0,
      explanation: 'The sand arrives with zero horizontal momentum and must be accelerated to speed $v$. By the momentum principle: $F = v\\,dm/dt$. Note: kinetic energy is gained at rate $(1/2)v^2(dm/dt)$ but the force does work at rate $Fv = v^2(dm/dt)$. The other half is lost to friction/heat as sand slides on the belt.'
    },
    {
      id: 'vm4-summary',
      type: 'text' as const,
      content: `## Summary

| Problem | Key Result |
|:---|:---|
| Falling chain on table | $F_{\\text{table}} = 3Mgx/L$ |
| Chain sliding off table | $v = \\sqrt{(g/L)(x^2 - x_0^2)}$ |
| Sand on conveyor | $F = v\\,dm/dt$ |
| General approach | Identify $v_{\\text{rel}}$ and sign of $dm/dt$ |

> **Next:** Part 5 — Mass accretion problems.`
    }
  ]
};
