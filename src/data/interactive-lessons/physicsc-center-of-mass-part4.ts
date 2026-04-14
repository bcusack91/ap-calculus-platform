export const physCCOMPart4Data = {
  topicSlug: "center-of-mass-physics-c",
  sections: [
    {
      id: 'com4-intro',
      type: 'text' as const,
      content: `# COM Reference Frame

**Part 4 of 7**

The **center-of-mass frame** (also called the zero-momentum frame) is the reference frame in which the total momentum is zero:

$$\\vec{p}_{\\text{total}}^{\\,\\prime} = \\sum m_i \\vec{v}_i^{\\,\\prime} = 0$$

To transform from the lab frame to the COM frame, subtract $\\vec{v}_{\\text{cm}}$:

$$\\vec{v}_i^{\\,\\prime} = \\vec{v}_i - \\vec{v}_{\\text{cm}}$$

### Why Use the COM Frame?

- Total momentum is always zero — simplifies collision analysis
- Kinetic energy splits into COM motion + internal motion
- Elastic collisions are symmetric in the COM frame`
    },
    {
      id: 'com4-mcq1',
      type: 'mcq' as const,
      question: 'In the COM frame, two particles of masses $m_1$ and $m_2$ approach each other. The ratio of their speeds is:',
      options: ['$v_1\'/v_2\' = m_2/m_1$', '$v_1\'/v_2\' = m_1/m_2$', '$v_1\'/v_2\' = 1$', '$v_1\'/v_2\' = \\sqrt{m_2/m_1}$'],
      correctAnswer: 0,
      explanation: 'In the COM frame, $m_1 v_1\' + m_2 v_2\' = 0$, so $m_1 v_1\' = -m_2 v_2\'$. Taking magnitudes: $v_1\'/v_2\' = m_2/m_1$.'
    },
    {
      id: 'com4-ke',
      type: 'text' as const,
      content: `## Kinetic Energy Decomposition

The total KE in the lab frame separates as:

$$K_{\\text{total}} = \\underbrace{\\frac{1}{2}M v_{\\text{cm}}^2}_{K_{\\text{cm}}} + \\underbrace{\\sum \\frac{1}{2}m_i v_i'^2}_{K_{\\text{int}}}$$

where $v_i' = |\\vec{v}_i - \\vec{v}_{\\text{cm}}|$.

### Interpretation
- $K_{\\text{cm}}$: energy of the system's bulk motion
- $K_{\\text{int}}$: energy of internal (relative) motion
- In a perfectly inelastic collision, $K_{\\text{int}} \\to 0$ (all internal KE is lost)

### Worked Example

A 2 kg ball at $6$ m/s collides with a 4 kg ball at rest.

$$v_{\\text{cm}} = \\frac{2(6) + 4(0)}{6} = 2 \\text{ m/s}$$

$$K_{\\text{cm}} = \\frac{1}{2}(6)(2)^2 = 12 \\text{ J}$$

$$K_{\\text{int}} = \\frac{1}{2}(2)(6-2)^2 + \\frac{1}{2}(4)(0-2)^2 = 16 + 8 = 24 \\text{ J}$$

$$K_{\\text{total}} = 12 + 24 = 36 \\text{ J} = \\frac{1}{2}(2)(6)^2 \\checkmark$$`
    },
    {
      id: 'com4-mcq2',
      type: 'mcq' as const,
      question: 'In a perfectly inelastic collision, what fraction of the initial KE is lost when a mass $m$ hits a stationary mass $M$?',
      options: ['$M/(m+M)$', '$m/(m+M)$', '$1/2$', '$(m-M)/(m+M)$'],
      correctAnswer: 0,
      explanation: 'The lost KE equals $K_{\\text{int}}$. Using the reduced mass $\\mu = mM/(m+M)$: $K_{\\text{int}} = \\frac{1}{2}\\mu v_{\\text{rel}}^2$. The fraction lost is $K_{\\text{int}}/K_{\\text{total}} = \\mu v_{\\text{rel}}^2/(m v^2) = M/(m+M)$.'
    },
    {
      id: 'com4-elastic',
      type: 'text' as const,
      content: `## Elastic Collisions in the COM Frame

In the COM frame, an elastic collision is beautifully simple: each particle **reverses** its velocity.

$$v_1'^{\\text{after}} = -v_1'^{\\text{before}}, \\quad v_2'^{\\text{after}} = -v_2'^{\\text{before}}$$

Transforming back to the lab frame:

$$v_1^{\\text{after}} = v_1'^{\\text{after}} + v_{\\text{cm}} = -v_1' + v_{\\text{cm}}$$

This gives the familiar results:

$$v_1^{\\text{after}} = \\frac{m_1 - m_2}{m_1 + m_2}v_1 + \\frac{2m_2}{m_1+m_2}v_2$$

$$v_2^{\\text{after}} = \\frac{2m_1}{m_1+m_2}v_1 + \\frac{m_2 - m_1}{m_1+m_2}v_2$$`
    },
    {
      id: 'com4-mcq3',
      type: 'mcq' as const,
      question: 'In an elastic collision, a particle of mass $m$ strikes a stationary particle of mass $2m$. In the COM frame, the incoming particle\'s speed after the collision is:',
      options: [
        'The same as before (just reversed)',
        'Zero',
        'Reduced by half',
        'Doubled'
      ],
      correctAnswer: 0,
      explanation: 'In the COM frame, elastic collisions simply reverse velocities. The speed of each particle is unchanged; only the direction flips.'
    },
    {
      id: 'com4-mcq4',
      type: 'mcq' as const,
      question: 'The reduced mass $\\mu = \\frac{m_1 m_2}{m_1 + m_2}$ appears in two-body problems. If $m_1 = m_2 = m$, then $\\mu =$',
      options: ['$m/2$', '$m$', '$2m$', '$m/4$'],
      correctAnswer: 0,
      explanation: '$\\mu = \\frac{m \\cdot m}{m + m} = \\frac{m^2}{2m} = m/2$. The reduced mass is always less than or equal to the smaller mass.'
    },
    {
      id: 'com4-summary',
      type: 'text' as const,
      content: `## Summary

| Concept | Key Result |
|:---|:---|
| COM frame transform | $\\vec{v}_i' = \\vec{v}_i - \\vec{v}_{\\text{cm}}$ |
| Zero momentum | $\\sum m_i \\vec{v}_i' = 0$ always |
| KE decomposition | $K = K_{\\text{cm}} + K_{\\text{int}}$ |
| Elastic (COM frame) | Velocities reverse |
| Perfectly inelastic | All $K_{\\text{int}}$ is lost |
| Reduced mass | $\\mu = m_1 m_2/(m_1+m_2)$ |

> **Next:** Part 5 — COM motion under external forces.`
    }
  ]
};
