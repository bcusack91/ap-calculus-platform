export const mcatPhysMechPart5Data = {
  topicSlug: 'mcat-physics-mechanics-mcat',
  sections: [
    {
      id: 'pm5-intro',
      type: 'text' as const,
      content: `# Physics: Mechanics for the MCAT

**Part 5 of 7 — Fluids (ULTRA HIGH YIELD)**

### Density & Pressure

$\\rho = \\frac{m}{V}$ and $P = \\frac{F}{A}$

### Hydrostatic Pressure

$P = P_0 + \\rho g h$, where $P_0$ is atmospheric pressure ($1\\;\\text{atm} \\approx 1.0 \\times 10^5\\;\\text{Pa}$)

### Pascal's Principle

Pressure applied to a confined fluid is transmitted equally: $\\frac{F_1}{A_1} = \\frac{F_2}{A_2}$ (the basis of the hydraulic lift)

### Archimedes' Principle (Buoyancy)

$F_b = \\rho_{fluid} \\cdot V_{displaced} \\cdot g$

An object floats if $\\rho_{object} < \\rho_{fluid}$.

### Bernoulli's Equation (energy conservation for fluids)

$P_1 + \\tfrac{1}{2}\\rho v_1^2 + \\rho g h_1 = P_2 + \\tfrac{1}{2}\\rho v_2^2 + \\rho g h_2$

### Continuity Equation

$A_1 v_1 = A_2 v_2$ — a narrower pipe forces faster flow, which (by Bernoulli) lowers pressure (the Venturi effect)

### Flow Rate

Volume flow rate $Q = Av$ ties continuity to units ($\\text{m}^3/\\text{s}$) and to physiology passages about blood flow.`
    },
    {
      id: 'pm5-worked',
      type: 'text' as const,
      content: `### Worked Example — Buoyant Force on a Submerged Object

A solid block of volume $V = 2.0 \\times 10^{-3}\\;\\text{m}^3$ is fully submerged in water ($\\rho_{fluid} = 1000\\;\\text{kg/m}^3$). Using $g = 10\\;\\text{m/s}^2$, find the buoyant force on it.

**Step 1 — Apply Archimedes' principle.** Fully submerged means $V_{displaced} = V$:

$F_b = \\rho_{fluid} \\cdot V_{displaced} \\cdot g$

**Step 2 — Substitute the values.**

$F_b = (1000)(2.0 \\times 10^{-3})(10)$

**Step 3 — Evaluate.**

$F_b = 1000 \\times 0.002 \\times 10 = 20\\;\\text{N}$

The buoyant force depends only on the displaced fluid, NOT on the block's own density. To decide whether it floats or sinks, compare this $20\\;\\text{N}$ buoyant force with the block's weight $mg$: if the weight is larger, it sinks.`
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
            explanation: `By continuity ($A_1 v_1 = A_2 v_2$), smaller area means faster flow. By Bernoulli, faster flow means lower pressure. This Venturi effect explains how aneurysms expand (wider → slower → higher wall pressure).`
          },
          {
            question: `A block of wood ($\\rho = 600\\;\\text{kg/m}^3$) floats in water ($\\rho = 1000\\;\\text{kg/m}^3$). What fraction is submerged?`,
            options: [`60%`, `40%`, `100%`, `50%`],
            correctAnswer: 0,
            explanation: `For a floating object, $V_{submerged}/V_{total} = \\rho_{object}/\\rho_{fluid} = 600/1000 = 0.60$, so 60% is submerged.`
          },
          {
            question: `At the same depth in the same fluid, pressure is primarily determined by:`,
            options: [`Depth only (plus the surface pressure)`, `Container shape`, `Fluid velocity only`, `Object mass in the fluid`],
            correctAnswer: 0,
            explanation: `Hydrostatic pressure follows $P = P_0 + \\rho g h$, so at equal depth in the same fluid the pressure is identical regardless of container shape.`
          },
          {
            question: `A hydraulic lift has a small piston of area $0.01\\;\\text{m}^2$ and a large piston of area $0.50\\;\\text{m}^2$. A $100\\;\\text{N}$ push on the small piston lifts a load of:`,
            options: [`5000 N`, `2 N`, `100 N`, `500 N`],
            correctAnswer: 0,
            explanation: `Pascal's principle: $F_2 = F_1(A_2/A_1) = 100(0.50/0.01) = 100 \\times 50 = 5000\\;\\text{N}$. The lift multiplies force by the area ratio.`
          },
          {
            question: `Water flows through a pipe whose cross-sectional area is halved. The flow speed in the narrow section:`,
            options: [`Doubles`, `Halves`, `Stays the same`, `Quadruples`],
            correctAnswer: 0,
            explanation: `Continuity $A_1 v_1 = A_2 v_2$: if $A$ is halved, $v$ must double so the volume flow rate stays constant.`
          },
          {
            question: `How deep in water ($\\rho = 1000\\;\\text{kg/m}^3$, $g = 10\\;\\text{m/s}^2$) does the gauge pressure reach $2.0 \\times 10^4\\;\\text{Pa}$?`,
            options: [`2 m`, `20 m`, `0.5 m`, `200 m`],
            correctAnswer: 0,
            explanation: `Gauge pressure $= \\rho g h$, so $h = P/(\\rho g) = (2.0 \\times 10^4)/((1000)(10)) = 2\\;\\text{m}$.`
          }
        ]
      }
    },
    {
      id: 'pm5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

- Bernoulli: faster flow → lower pressure (explains aneurysms and airplane lift)
- Continuity: $A_1 v_1 = A_2 v_2$ for an incompressible fluid
- Buoyancy: $F_b = \\rho_{fluid} V_{displaced} g$; an object floats when $\\rho_{object} < \\rho_{fluid}$
- Hydrostatic pressure rises with depth: $P = P_0 + \\rho g h$
- Hydraulic lift (Pascal): force multiplies by the area ratio $A_2/A_1$`
    }
  ]
};
