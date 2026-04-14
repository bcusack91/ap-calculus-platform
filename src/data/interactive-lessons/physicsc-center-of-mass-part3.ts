export const physCCOMPart3Data = {
  topicSlug: "center-of-mass-physics-c",
  sections: [
    {
      id: 'com3-intro',
      type: 'text' as const,
      content: `# COM Velocity and Momentum

**Part 3 of 7**

Differentiating the COM position gives the COM velocity:

$$\\vec{v}_{\\text{cm}} = \\frac{d\\vec{r}_{\\text{cm}}}{dt} = \\frac{1}{M}\\sum_{i} m_i \\vec{v}_i = \\frac{\\vec{p}_{\\text{total}}}{M}$$

Therefore the **total momentum** of the system equals:

$$\\vec{p}_{\\text{total}} = M\\vec{v}_{\\text{cm}}$$

This is a profound result: the total momentum of a system is the same as if all the mass were concentrated at the COM moving with $\\vec{v}_{\\text{cm}}$.

### COM Acceleration

$$\\vec{a}_{\\text{cm}} = \\frac{d\\vec{v}_{\\text{cm}}}{dt} = \\frac{1}{M}\\sum m_i \\vec{a}_i = \\frac{\\vec{F}_{\\text{ext}}}{M}$$

Internal forces cancel in pairs (Newton's third law), so only **external forces** determine COM motion.`
    },
    {
      id: 'com3-mcq1',
      type: 'mcq' as const,
      question: 'A 2 kg particle moves at $3$ m/s east and a 4 kg particle moves at $6$ m/s west. What is $v_{\\text{cm}}$?',
      options: ['$3$ m/s west', '$4$ m/s west', '$1$ m/s east', '$5$ m/s west'],
      correctAnswer: 0,
      explanation: 'Taking east as positive: $v_{\\text{cm}} = \\frac{2(3) + 4(-6)}{2+4} = \\frac{6 - 24}{6} = \\frac{-18}{6} = -3$ m/s. The negative sign means $3$ m/s west.'
    },
    {
      id: 'com3-explosion',
      type: 'text' as const,
      content: `## Explosions and Internal Forces

When a body explodes or breaks apart, no external forces act during the explosion. Therefore:

$$\\vec{v}_{\\text{cm, before}} = \\vec{v}_{\\text{cm, after}}$$

### Worked Example

A 10 kg projectile moving at $20$ m/s horizontally explodes into two pieces. A 4 kg piece comes to rest. Find the velocity of the 6 kg piece.

**Solution:**

$$p_{\\text{before}} = 10 \\times 20 = 200 \\text{ kg·m/s}$$

$$p_{\\text{after}} = 4(0) + 6v_2 = 200$$

$$v_2 = \\frac{200}{6} = \\frac{100}{3} \\approx 33.3 \\text{ m/s}$$

The COM continues at $v_{\\text{cm}} = 20$ m/s throughout.`
    },
    {
      id: 'com3-mcq2',
      type: 'mcq' as const,
      question: 'A stationary 12 kg object explodes into three pieces of equal mass. Two pieces fly off with velocities $(3, 0)$ m/s and $(0, 4)$ m/s. The speed of the third piece is:',
      options: ['$5$ m/s', '$7$ m/s', '$3$ m/s', '$4$ m/s'],
      correctAnswer: 0,
      explanation: 'Total initial momentum is zero. So $\\vec{p}_3 = -(\\vec{p}_1 + \\vec{p}_2) = -4(3,0) - 4(0,4) = (-12, -16)$ kg·m/s. $v_3 = \\frac{|\\vec{p}_3|}{m_3} = \\frac{\\sqrt{144+256}}{4} = \\frac{20}{4} = 5$ m/s.'
    },
    {
      id: 'com3-recoil',
      type: 'text' as const,
      content: `## Recoil Problems

A classic application: a person standing on a frictionless surface throws an object.

### Worked Example

A 60 kg person on a frictionless frozen lake throws a 5 kg ball at $10$ m/s (relative to ground). Both start at rest.

$$0 = 60 v_p + 5(10) \\implies v_p = -\\frac{50}{60} = -\\frac{5}{6} \\approx -0.83 \\text{ m/s}$$

The person recoils in the opposite direction.

### Continuous Mass Loss

If mass is ejected continuously (foreshadowing rockets), the momentum equation becomes differential:

$$d\\vec{p} = \\vec{v}\\,dm$$

This leads to the variable-mass equation we'll study in Topic 8.`
    },
    {
      id: 'com3-mcq3',
      type: 'mcq' as const,
      question: 'Two ice skaters push off from each other on a frictionless surface. Skater A (mass $m$) moves at speed $v$. Skater B (mass $3m$) moves at speed:',
      options: ['$v/3$', '$v$', '$3v$', '$v/9$'],
      correctAnswer: 0,
      explanation: 'Initial momentum = 0. $mv + 3m v_B = 0 \\implies v_B = -v/3$. The heavier skater moves at one-third the speed in the opposite direction.'
    },
    {
      id: 'com3-mcq4',
      type: 'mcq' as const,
      question: 'A firecracker at rest explodes into many pieces. The velocity of the center of mass after the explosion is:',
      options: ['Zero', 'Depends on the number of pieces', 'Equal to the fastest piece', 'Indeterminate without more data'],
      correctAnswer: 0,
      explanation: 'The explosion is an internal force. $\\vec{F}_{\\text{ext}} = 0$ (ignoring gravity during the brief explosion), so $\\vec{v}_{\\text{cm}}$ remains zero.'
    },
    {
      id: 'com3-summary',
      type: 'text' as const,
      content: `## Summary

| Concept | Key Equation |
|:---|:---|
| COM velocity | $\\vec{v}_{\\text{cm}} = \\frac{\\sum m_i \\vec{v}_i}{M}$ |
| Total momentum | $\\vec{p}_{\\text{total}} = M\\vec{v}_{\\text{cm}}$ |
| No external forces | $\\vec{v}_{\\text{cm}} = \\text{const}$ |
| Explosions | COM velocity unchanged |
| Recoil | $\\sum \\vec{p}_i = 0$ if starting from rest |

> **Next:** Part 4 — The center of mass reference frame.`
    }
  ]
};
