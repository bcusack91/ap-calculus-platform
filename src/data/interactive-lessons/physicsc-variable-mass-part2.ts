export const physCVarMassPart2Data = {
  topicSlug: "variable-mass-physics-c",
  sections: [
    {
      id: 'vm2-intro',
      type: 'text' as const,
      content: `# The Tsiolkovsky Rocket Equation

**Part 2 of 7**

Starting from $m\\,dv = -v_e\\,dm$ (no external forces), we integrate:

$$\\int_{v_0}^{v_f} dv = -v_e \\int_{m_0}^{m_f} \\frac{dm}{m}$$

$$\\boxed{\\Delta v = v_e \\ln\\frac{m_0}{m_f}}$$

This is the **Tsiolkovsky rocket equation** (1903), the fundamental equation of astronautics.

### Key Insight

- $m_0$ = initial mass (rocket + fuel)
- $m_f$ = final mass (rocket only, fuel spent)
- The ratio $m_0/m_f$ is called the **mass ratio** $R$
- $\\Delta v$ grows **logarithmically** with the mass ratio — diminishing returns for adding more fuel`
    },
    {
      id: 'vm2-mcq1',
      type: 'mcq' as const,
      question: 'A rocket has $v_e = 3000$ m/s and mass ratio $m_0/m_f = e^2 \\approx 7.39$. What is $\\Delta v$?',
      options: ['$6000$ m/s', '$3000$ m/s', '$9000$ m/s', '$22{,}170$ m/s'],
      correctAnswer: 0,
      explanation: '$\\Delta v = v_e \\ln(m_0/m_f) = 3000 \\ln(e^2) = 3000 \\times 2 = 6000$ m/s.'
    },
    {
      id: 'vm2-staging',
      type: 'text' as const,
      content: `## Multistage Rockets

A single-stage rocket is limited by $\\Delta v = v_e \\ln R$. To achieve higher $\\Delta v$, use **staging**: discard empty tanks to reduce dead mass.

For an $n$-stage rocket where each stage has the same mass ratio $R_i$:

$$\\Delta v_{\\text{total}} = \\sum_{i=1}^{n} v_{e,i} \\ln R_i$$

### Why Staging Works

Consider total mass $M$ with payload $m_p$.

**Single stage:** $\\Delta v = v_e \\ln\\frac{M}{m_p}$

**Two equal stages** (each discards half the structural mass):
$$\\Delta v = 2 v_e \\ln\\frac{M/2 + m_p/2}{m_p/2 + m_s/2}$$

Staging always gives a larger $\\Delta v$ for the same total mass because you're not accelerating empty fuel tanks.

### Worked Example

A two-stage rocket: each stage has $v_e = 3000$ m/s and mass ratio $R = 3$.

$$\\Delta v = 2 \\times 3000 \\ln 3 = 6000 \\times 1.099 = 6591 \\text{ m/s}$$

Compare single stage with $R = 9$: $\\Delta v = 3000 \\ln 9 = 3000 \\times 2.197 = 6591$ m/s.

In this case they're equal! But staging wins when structural mass is accounted for separately.`
    },
    {
      id: 'vm2-mcq2',
      type: 'mcq' as const,
      question: 'To double $\\Delta v$ while keeping $v_e$ constant, the mass ratio $m_0/m_f$ must be:',
      options: ['Squared', 'Doubled', 'Quadrupled', 'Increased by $e$'],
      correctAnswer: 0,
      explanation: '$\\Delta v = v_e \\ln R$. For $2\\Delta v$: $2v_e \\ln R = v_e \\ln R\'$, so $R\' = R^2$. The mass ratio must be squared — exponential fuel growth for linear velocity gain.'
    },
    {
      id: 'vm2-gravity',
      type: 'text' as const,
      content: `## Tsiolkovsky Equation with Gravity

For a vertical launch against constant gravity with burn time $t_b$:

$$m\\frac{dv}{dt} = -v_e \\frac{dm}{dt} - mg$$

This integrates to:

$$\\Delta v = v_e \\ln\\frac{m_0}{m_f} - g t_b$$

The term $g t_b$ is called **gravity loss** — the velocity penalty for fighting gravity during the burn.

### Minimizing Gravity Loss
- Burn as quickly as possible (short $t_b$)
- This means high thrust-to-weight ratio
- But very high acceleration stresses the structure
- Real rockets balance these constraints`
    },
    {
      id: 'vm2-mcq3',
      type: 'mcq' as const,
      question: 'A rocket with $v_e = 2500$ m/s, $m_0/m_f = 4$, and burn time $60$ s launches vertically. What is $\\Delta v$? ($g = 10$ m/s²)',
      options: ['$2866$ m/s', '$3466$ m/s', '$4066$ m/s', '$2266$ m/s'],
      correctAnswer: 0,
      explanation: '$\\Delta v = 2500\\ln 4 - 10(60) = 2500(1.386) - 600 = 3466 - 600 = 2866$ m/s.'
    },
    {
      id: 'vm2-mcq4',
      type: 'mcq' as const,
      question: 'The Tsiolkovsky equation $\\Delta v = v_e \\ln(m_0/m_f)$ shows that $\\Delta v$ depends on mass ratio, not absolute masses. A 10-ton and 100-ton rocket with the same $v_e$ and mass ratio have:',
      options: [
        'The same $\\Delta v$',
        'Different $\\Delta v$ proportional to mass',
        'Different $\\Delta v$ proportional to $\\sqrt{\\text{mass}}$',
        'Cannot be compared without thrust data'
      ],
      correctAnswer: 0,
      explanation: 'The Tsiolkovsky equation depends only on $v_e$ and the mass ratio $m_0/m_f$, not the absolute mass. Both rockets achieve the same $\\Delta v$.'
    },
    {
      id: 'vm2-summary',
      type: 'text' as const,
      content: `## Summary

| Concept | Expression |
|:---|:---|
| Tsiolkovsky equation | $\\Delta v = v_e \\ln(m_0/m_f)$ |
| With gravity | $\\Delta v = v_e \\ln(m_0/m_f) - gt_b$ |
| Mass ratio | $R = m_0/m_f$ |
| Multistage | $\\Delta v = \\sum v_{e,i}\\ln R_i$ |
| Key insight | $\\Delta v \\propto \\ln R$ (diminishing returns) |

> **Next:** Part 3 — Thrust force in detail.`
    }
  ]
};
