export const physCEMCircuitsPart1Data = {
  topicSlug: 'dc-circuits-physics-c-em',
  sections: [
    {
      id: 'physicsc-dc-circuits-em-p1-intro',
      type: 'text' as const,
      content: `# Current and Resistance

**Part 1 of 7 — Fundamentals of DC Circuits**

---

### Electric Current

Current is the *rate* at which charge flows through a cross-section of a conductor. As a calculus-based definition:

$I = \\frac{dQ}{dt}$

If the current is not constant, the total charge that passes a point between times $t_1$ and $t_2$ is the integral of the current:

$Q = \\int_{t_1}^{t_2} I\\,dt$

Units: Amperes (A) = Coulombs/second.

---

### Microscopic Picture: Drift Velocity

The macroscopic current is tied to the motion of mobile charge carriers (density $n$, charge $q$, drift speed $v_d$) in a wire of cross-sectional area $A$:

$I = n\\,q\\,v_d\\,A$

---

### Ohm's Law

$V = IR$

| Quantity | Symbol | Unit |
|----------|--------|------|
| Voltage | $V$ | Volts (V) |
| Current | $I$ | Amperes (A) |
| Resistance | $R$ | Ohms ($\\Omega$) |

---

### Resistivity

$R = \\rho \\frac{L}{A}$

where $\\rho$ is resistivity, $L$ is length, $A$ is cross-sectional area. The microscopic form of Ohm's law relates the field to the current density $\\vec{J}$: $\\vec{E} = \\rho\\,\\vec{J}$.

---

### Power

$P = IV = I^2R = \\frac{V^2}{R}$

> Current (conventional) flows from high potential to low potential.`
    },
    {
      id: 'physicsc-dc-circuits-em-p1-worked',
      type: 'text' as const,
      content: `### Worked Example — Charge from a Time-Varying Current

**Problem.** The current in a wire varies with time as $I(t) = (3.0\\,\\text{A/s}^2)\\,t^2 + (2.0\\,\\text{A})$. How much charge flows past a point during the first $4.0$ seconds, and what constant current would transport the same charge in that interval?

**Step 1 — Set up the integral.** Because $I = dQ/dt$, the charge is

$Q = \\int_0^{4} I(t)\\,dt = \\int_0^{4}\\left(3t^2 + 2\\right)dt$

**Step 2 — Integrate term by term.**

$Q = \\left[\\,t^3 + 2t\\,\\right]_0^{4}$

**Step 3 — Evaluate the bounds.**

$Q = (4^3 + 2\\cdot 4) - 0 = 64 + 8 = 72\\,\\text{C}$

**Step 4 — Equivalent constant current.** The average current is the total charge divided by the elapsed time:

$I_{\\text{avg}} = \\frac{Q}{\\Delta t} = \\frac{72\\,\\text{C}}{4.0\\,\\text{s}} = 18\\,\\text{A}$

**Takeaway.** When current depends on time, you *integrate* $I(t)$ to get charge; a single "plug-in" of $I \\times t$ only works for constant current.`
    },
    {
      id: 'physicsc-dc-circuits-em-p1-deepen',
      type: 'text' as const,
      content: `### Resistance vs. Resistivity — Don't Confuse Them

A common AP trap is treating **resistivity** $\\rho$ and **resistance** $R$ as interchangeable.

- **Resistivity** $\\rho$ is an *intrinsic material property* (units $\\Omega\\cdot\\text{m}$). Copper has $\\rho \\approx 1.7\\times10^{-8}\\,\\Omega\\cdot\\text{m}$ no matter how the wire is shaped.
- **Resistance** $R = \\rho L/A$ depends on *geometry* — stretch the wire or change its cross-section and $R$ changes even though $\\rho$ does not.

**Temperature dependence.** For many conductors, resistivity rises roughly linearly with temperature:

$\\rho(T) = \\rho_0\\left[1 + \\alpha(T - T_0)\\right]$

where $\\alpha$ is the temperature coefficient of resistivity. This is why a light-bulb filament has a much larger resistance when hot than when cold.

> Think "$\\rho$ = the material, $R$ = the material *plus* the shape."`
    },
    {
      id: 'physicsc-dc-circuits-em-p1-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check**
      `,
      exercise: {
        questions: [
          {
            question: 'Doubling the length of a wire while halving its cross-sectional area multiplies resistance by:',
            options: ['$2$', '$4$', '$1/2$', '$1$'],
            correctAnswer: 1,
            explanation: '$R = \\rho L/A$. Doubling $L$ and halving $A$: $R \\to \\rho(2L)/(A/2) = 4\\rho L/A = 4R$.'
          },
          {
            question: 'If current through a resistor doubles, the power dissipated:',
            options: ['Doubles', 'Quadruples', 'Halves', 'Stays the same'],
            correctAnswer: 1,
            explanation: '$P = I^2R$. Doubling $I$ gives $P \\to (2I)^2 R = 4I^2R = 4P$.'
          },
          {
            question: 'The current in a wire is $I(t) = (4\\,\\text{A/s})\\,t$. How much charge passes a point between $t=0$ and $t=3\\,\\text{s}$?',
            options: ['$12$ C', '$18$ C', '$9$ C', '$6$ C'],
            correctAnswer: 1,
            explanation: '$Q = \\int_0^3 4t\\,dt = [2t^2]_0^3 = 2(9) = 18$ C.'
          },
          {
            question: 'A copper wire carries a steady current. If the drift speed $v_d$ of the electrons is fixed, but the wire is replaced by one with twice the cross-sectional area (same $n$, same $v_d$), the current:',
            options: ['Halves', 'Stays the same', 'Doubles', 'Quadruples'],
            correctAnswer: 2,
            explanation: '$I = nqv_dA$. With $n$, $q$, and $v_d$ unchanged, doubling $A$ doubles $I$.'
          },
          {
            question: 'A resistor dissipates $20\\,\\text{W}$ when connected across a $10\\,\\text{V}$ source. Its resistance is:',
            options: ['$0.5\\,\\Omega$', '$2\\,\\Omega$', '$5\\,\\Omega$', '$200\\,\\Omega$'],
            correctAnswer: 2,
            explanation: 'Use $P = V^2/R$, so $R = V^2/P = (10)^2/20 = 100/20 = 5\\,\\Omega$.'
          },
          {
            question: 'Two wires are made of the same material and have the same length, but wire B has twice the diameter of wire A. The ratio $R_A / R_B$ is:',
            options: ['$2$', '$4$', '$1/2$', '$1/4$'],
            correctAnswer: 1,
            explanation: 'Area scales as the square of diameter, so $A_B = 4A_A$. Since $R \\propto 1/A$, $R_B = R_A/4$, giving $R_A/R_B = 4$.'
          },
          {
            question: 'A copper wire is heated. Assuming its dimensions barely change, its resistance:',
            options: ['Decreases', 'Increases', 'Stays exactly the same', 'Drops to zero'],
            correctAnswer: 1,
            explanation: 'For a metal, resistivity rises with temperature, $\\rho(T) = \\rho_0[1 + \\alpha(T - T_0)]$ with $\\alpha > 0$. Since $R = \\rho L/A$, the resistance increases as the wire heats up.'
          }
        ]
      }
    }
  ]
};
