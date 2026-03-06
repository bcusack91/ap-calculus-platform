export const mcatPhysMechPart5Data = {
  topicSlug: 'mcat-physics-mechanics-mcat',
  sections: [
    {
      id: 'pm5-intro',
      type: 'text' as const,
      content: `# Physics: Mechanics for the MCAT

**Part 5 of 7 — Fluids (ULTRA HIGH YIELD)**

### Density & Pressure

$$\\rho = \\frac{m}{V} \\qquad P = \\frac{F}{A}$$

### Hydrostatic Pressure

$$P = P_0 + \\rho g h$$

where $P_0$ = atmospheric pressure (1 atm = 101,325 Pa)

### Pascal's Principle

Pressure applied to a confined fluid is transmitted equally: $\\frac{F_1}{A_1} = \\frac{F_2}{A_2}$

### Archimedes' Principle (Buoyancy)

$$F_b = \\rho_{fluid} \\cdot V_{displaced} \\cdot g$$

Object floats if $\\rho_{object} < \\rho_{fluid}$

### Bernoulli's Equation (Conservation of Energy for Fluids)

$$P_1 + \\frac{1}{2}\\rho v_1^2 + \\rho g h_1 = P_2 + \\frac{1}{2}\\rho v_2^2 + \\rho g h_2$$

### Continuity Equation

$$A_1 v_1 = A_2 v_2$$

Narrower pipe → faster flow → lower pressure (Venturi effect)

### Flow Rate

Volume flow rate $Q = Av$ helps connect continuity to units (m$^3$/s) and physiology passages about blood flow.`
    },
    {
      id: 'pm5-quiz1',
      type: 'multiple-choice' as const,
      content: `**Fluids** 🎯`,
      exercise: {
        questions: [
          {
            question: `Blood flows through an artery that narrows. In the narrow section, compared to the wide section:`,
            options: [`Velocity increases and pressure decreases`, `Both velocity and pressure increase`, `Velocity decreases and pressure increases`, `Both decrease`],
            correctAnswer: 0,
            explanation: `By continuity ($A_1v_1 = A_2v_2$): smaller area → faster flow. By Bernoulli: faster flow → lower pressure. This is the Venturi effect and explains how aneurysms can expand (wider → slower → higher pressure on walls).`
          },
          {
            question: `A block of wood ($\\rho = 600\\;\\text{kg/m}^3$) floats in water ($\\rho = 1000\\;\\text{kg/m}^3$). What fraction is submerged?`,
            options: [`60%`, `40%`, `100%`, `50%`],
            correctAnswer: 0,
            explanation: `For floating: $\\rho_{object}/\\rho_{fluid} = V_{submerged}/V_{total} = 600/1000 = 0.60$. So 60% is submerged.`
          },
          {
            question: `At the same depth in the same fluid, pressure is primarily determined by:`,
            options: [`Depth only (plus surface pressure)`, `Container shape`, `Fluid velocity only`, `Object mass in fluid`],
            correctAnswer: 0,
            explanation: `Hydrostatic pressure follows $P=P_0+\\rho gh$, so at equal depth in same fluid, pressure is the same regardless of container shape.`
          }
        ]
      }
    },
    {
      id: 'pm5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

- Bernoulli: faster flow → lower pressure (explains aneurysms, airplane lift)
- Continuity: $A_1v_1 = A_2v_2$ (incompressible fluid)
- Buoyancy: object floats when $\\rho_{object} < \\rho_{fluid}$
- Hydrostatic pressure increases with depth: $P = P_0 + \\rho gh$`
    }
  ]
};
