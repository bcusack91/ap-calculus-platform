export const mcatMechFluidsWavesPart1Data = {
  topicSlug: 'mcat-physics-mechanics-fluids-waves-mcat',
  sections: [
    {
      id: 'flw1-intro',
      type: 'text' as const,
      content: `# Fluids & Waves

**Part 1 of 4 — Fluid Statics: Density, Pressure & Buoyancy**

### Density and Specific Gravity

$\\rho = \\frac{m}{V} \\qquad SG = \\frac{\\rho_{substance}}{\\rho_{water}}$

Water's density is the anchor: $1000\\;\\text{kg/m}^3 = 1\\;\\text{g/cm}^3$. Specific gravity is dimensionless — $SG = 0.8$ means 80% as dense as water. Memorize mercury's $SG = 13.6$.

### Pressure

$P = \\frac{F}{A}$

Pressure is a scalar (no direction), in pascals ($1\\;\\text{Pa} = 1\\;\\text{N/m}^2$); $1\\;\\text{atm} \\approx 10^5\\;\\text{Pa} = 760\\;\\text{mmHg}$. Beneath a fluid surface:

$P = P_0 + \\rho g h$

The **gauge pressure** $\\rho g h$ is the pressure above atmospheric; absolute pressure adds $P_0$. Depth pressure depends ONLY on depth, fluid density, and $g$ — never on the container's shape or total volume. A skinny standpipe and a lake apply identical pressure at the same depth.

### Pascal's Principle: The Hydraulic Lever

Pressure applied to an enclosed fluid transmits undiminished everywhere. In a hydraulic lift, equal pressures at both pistons mean

$\\frac{F_1}{A_1} = \\frac{F_2}{A_2}$

A small force on a small piston yields a large force on a large piston — but the small piston must travel proportionally farther ($A_1d_1 = A_2d_2$), so the work is never multiplied. It is the fluid version of a lever.

### Archimedes' Principle

$F_B = \\rho_{fluid} \\, V_{submerged} \\, g$

The buoyant force equals the **weight of displaced fluid** — fluid density, not object density, and only the submerged volume counts. Two consequences:

- A FLOATING object displaces its own weight of fluid; the fraction submerged equals its specific gravity ($SG = 0.9$ iceberg floats 90% underwater)
- A fully SUBMERGED object displaces its own volume; it sinks if $\\rho_{object} > \\rho_{fluid}$, and the buoyant force does not change with depth (incompressible fluid)`
    },
    {
      id: 'flw1-worked',
      type: 'text' as const,
      content: `### Worked Example — Hydraulic Lift

A mechanic pushes down with $100\\;\\text{N}$ on a piston of area $0.01\\;\\text{m}^2$. The output piston has area $0.1\\;\\text{m}^2$.

**Step 1 — Pressure created.**

$P = \\frac{100}{0.01} = 10^4\\;\\text{Pa}$

**Step 2 — Force on the large piston.**

$F_2 = PA_2 = (10^4)(0.1) = 1000\\;\\text{N}$

A tenfold force multiplication from the tenfold area ratio. To raise the load $0.05\\;\\text{m}$, the mechanic's piston must sweep $0.5\\;\\text{m}$ — work in equals work out ($50\\;\\text{J}$ both ways).

### Worked Example — Floating and Reading Specific Gravity

A block of wood floats in water with 60% of its volume submerged.

Floating means $F_B = W$:

$\\rho_{water}(0.6V)g = \\rho_{wood}Vg \\Rightarrow \\rho_{wood} = 0.6\\,\\rho_{water} = 600\\;\\text{kg/m}^3$

The submerged fraction IS the specific gravity. Moved to oil ($SG = 0.8$), the same block must displace more oil to match its weight: fraction $= 0.6/0.8 = 0.75$, so it rides lower. In a fluid with $SG < 0.6$ it would sink entirely.

**Gauge check:** a diver at $20\\;\\text{m}$ in fresh water ($g = 10\\;\\text{m/s}^2$) feels gauge pressure $\\rho g h = (1000)(10)(20) = 2 \\times 10^5\\;\\text{Pa}$ — about 2 atm above the surface, 3 atm absolute.`
    },
    {
      id: 'flw1-quiz1',
      type: 'multiple-choice' as const,
      content: `**Fluid Statics** 🎯`,
      exercise: {
        questions: [
          {
            question: `An object with specific gravity $0.8$ floats in water. The fraction of its volume below the waterline is:`,
            options: [`$20\\%$`, `$80\\%$`, `$100\\%$`, `$8\\%$`],
            correctAnswer: 1,
            explanation: `Floating equilibrium: $\\rho_{obj}Vg = \\rho_{water}V_{sub}g$, so $V_{sub}/V = SG = 0.8$. The submerged fraction equals the specific gravity — the 20% is the part you see.`
          },
          {
            question: `The gauge pressure $20\\;\\text{m}$ below the surface of a freshwater lake ($g = 10\\;\\text{m/s}^2$) is:`,
            options: [`$1 \\times 10^5\\;\\text{Pa}$`, `$2 \\times 10^4\\;\\text{Pa}$`, `$3 \\times 10^5\\;\\text{Pa}$`, `$2 \\times 10^5\\;\\text{Pa}$`],
            correctAnswer: 3,
            explanation: `$P_{gauge} = \\rho gh = (1000)(10)(20) = 2 \\times 10^5\\;\\text{Pa}$. The $3 \\times 10^5$ choice is the ABSOLUTE pressure (gauge plus 1 atm) — read which one the question asks for.`
          },
          {
            question: `The hydrostatic pressure at the bottom of a container of fluid depends on:`,
            options: [`The fluid's depth and density`, `The total volume of fluid in the container`, `The shape of the container`, `The surface area of the container's base`],
            correctAnswer: 0,
            explanation: `$P = P_0 + \\rho gh$: only depth, density, and $g$ matter. A narrow tube and a huge tank produce the same pressure at the same depth — the hydrostatic paradox that Pascal's barrel experiment made famous.`
          },
          {
            question: `A hydraulic lift's output piston has 20 times the area of the input piston. To support a $2000\\;\\text{N}$ engine on the output piston, the input force needed is:`,
            options: [`$40000\\;\\text{N}$`, `$2000\\;\\text{N}$`, `$100\\;\\text{N}$`, `$20\\;\\text{N}$`],
            correctAnswer: 2,
            explanation: `$F_1 = F_2 \\frac{A_1}{A_2} = 2000/20 = 100\\;\\text{N}$. The price is distance: the input piston must move 20 times farther, so no work is gained.`
          },
          {
            question: `A stone is held fully submerged, displacing $0.002\\;\\text{m}^3$ of water ($g = 10\\;\\text{m/s}^2$). If it is lowered twice as deep (still submerged), the buoyant force on it:`,
            options: [`Doubles`, `Stays at $20\\;\\text{N}$`, `Halves`, `Drops to zero`],
            correctAnswer: 1,
            explanation: `$F_B = \\rho_{fluid}V_{sub}g = (1000)(0.002)(10) = 20\\;\\text{N}$, and it depends only on displaced volume and fluid density. Water is incompressible, so depth changes the surrounding pressure but not the buoyant force.`
          }
        ]
      }
    },
    {
      id: 'flw1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- $SG = \\rho/\\rho_{water}$; water is $1000\\;\\text{kg/m}^3$; submerged fraction of a floater = its SG
- Hydrostatic pressure $P = P_0 + \\rho gh$ depends on depth and density only — never container shape
- Gauge pressure excludes atmosphere; absolute includes it; roughly +1 atm per 10 m of water
- Pascal: $F_1/A_1 = F_2/A_2$ — hydraulics multiply force, never work
- Buoyant force = weight of DISPLACED fluid ($\\rho_{fluid}V_{sub}g$), independent of depth
- Sink or float: compare object density to fluid density`
    }
  ]
};
