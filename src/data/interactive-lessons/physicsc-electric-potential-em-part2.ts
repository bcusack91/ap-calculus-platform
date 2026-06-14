export const physCEMPotentialPart2Data = {
  topicSlug: 'electric-potential-physics-c-em',
  sections: [
    {
      id: 'physicsc-electric-potential-em-p2-intro',
      type: 'text' as const,
      content: `# Electric Potential (Voltage)

**Part 2 of 7 — Potential = Energy per Charge**

---

### Definition

$V = \\frac{U}{q} = \\frac{kQ}{r}$

Units: Volts (V) = Joules per Coulomb (J/C).

---

### Potential Difference

$\\Delta V = V_B - V_A = -\\int_A^B \\vec{E} \\cdot d\\vec{l}$

$W = q\\,\\Delta V = q(V_B - V_A)$

---

### Equipotential Surfaces

- Surfaces where $V$ is constant
- Always **perpendicular** to electric field lines
- No work is done moving a charge along an equipotential

> Electric field points from high potential to low potential (for the force on a positive charge).`
    },
    {
      id: 'physicsc-electric-potential-em-p2-worked',
      type: 'text' as const,
      content: `### Worked Example — Potential Difference from a Field by Integration

**Problem.** In a region the electric field points along $+x$ with magnitude $E(x) = bx$, where $b = 500\\,\\text{V/m}^2$. Find the potential difference $V_A - V_B$ between $x_A = 0$ and $x_B = 2.0\\,\\text{m}$, and determine which point is at higher potential.

**Step 1 — Use the line-integral definition.** Moving along $x$ with $\\vec{E}\\cdot d\\vec{l} = E\\,dx$:

$V_B - V_A = -\\int_{x_A}^{x_B} E(x)\\,dx = -\\int_0^{2} b x\\,dx$

**Step 2 — Integrate.**

$V_B - V_A = -b\\left[\\frac{x^2}{2}\\right]_0^{2} = -b\\,\\frac{(2)^2}{2} = -2b$

**Step 3 — Plug in $b$.**

$V_B - V_A = -2(500) = -1000\\,\\text{V}$

So $V_A - V_B = +1000\\,\\text{V}$.

**Step 4 — Interpret.** Since $V_A - V_B > 0$, point A (at $x=0$) is at the **higher** potential. This makes sense: the field points from high to low potential ($+x$ direction), so potential decreases as $x$ increases.

**Takeaway.** Potential difference is *minus* the line integral of $\\vec{E}$. Even a position-dependent field is handled by a single definite integral.`
    },
    {
      id: 'physicsc-electric-potential-em-p2-deepen',
      type: 'text' as const,
      content: `### Potential vs. Potential Energy — Keep Them Straight

These two ideas are easy to conflate but answer different questions:

| Quantity | Symbol | Depends on | Units |
|----------|--------|-----------|-------|
| Electric **potential** | $V$ | The *source* charges and the location only | volts (J/C) |
| Electric **potential energy** | $U = qV$ | The source *and* the test charge $q$ | joules |

The potential $V$ exists at a point in space *whether or not* a charge is placed there — it is "energy available per unit charge." Multiply by an actual charge $q$ to get the energy $U = qV$ that charge would have.

**A sign caution.** The field points toward *lower* potential, but a *negative* charge has *higher* potential energy where the potential is *lower* (since $U = qV$ with $q < 0$). So an electron is pushed toward regions of higher potential — opposite to a proton.

> $V$ is a property of the space (set by the sources); $U = qV$ is what a specific charge "feels."`
    },
    {
      id: 'physicsc-electric-potential-em-p2-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check**
      `,
      exercise: {
        questions: [
          {
            question: 'The potential at a distance $r$ from a charge $+Q$ is:',
            options: ['$kQ/r^2$', '$kQ/r$', '$kQr$', '$kQ/r^3$'],
            correctAnswer: 1,
            explanation: '$V = kQ/r$ for a point charge (taking $V = 0$ at infinity).'
          },
          {
            question: 'Moving a charge along an equipotential surface requires:',
            options: ['Maximum work', 'Zero work', 'Negative work', 'Work that depends on direction'],
            correctAnswer: 1,
            explanation: 'On an equipotential, $\\Delta V = 0$, so $W = q\\Delta V = 0$.'
          },
          {
            question: 'A uniform field $E = 200\\,\\text{V/m}$ points in the $+x$ direction. The potential difference $V_A - V_B$ between $x_A = 0$ and $x_B = 0.50\\,\\text{m}$ is:',
            options: ['$-100\\,\\text{V}$', '$+100\\,\\text{V}$', '$+400\\,\\text{V}$', '$0$'],
            correctAnswer: 1,
            explanation: '$V_B - V_A = -\\int_0^{0.5}E\\,dx = -(200)(0.5) = -100\\,\\text{V}$, so $V_A - V_B = +100\\,\\text{V}$.'
          },
          {
            question: 'How much work is done by an external agent to move a $+3\\,\\mu\\text{C}$ charge from a point at $20\\,\\text{V}$ to a point at $80\\,\\text{V}$ (quasi-statically)?',
            options: ['$-180\\,\\mu\\text{J}$', '$+180\\,\\mu\\text{J}$', '$+60\\,\\mu\\text{J}$', '$+240\\,\\mu\\text{J}$'],
            correctAnswer: 1,
            explanation: 'The external work equals $q\\Delta V = (3\\,\\mu\\text{C})(80 - 20\\,\\text{V}) = (3)(60) = 180\\,\\mu\\text{J}$.'
          },
          {
            question: 'At a point exactly midway between $+Q$ and $-Q$ (a dipole), the electric potential is:',
            options: ['Maximum', 'Zero', 'Equal to $kQ/r$', 'Undefined'],
            correctAnswer: 1,
            explanation: 'The scalar potentials cancel: $V = kQ/r + k(-Q)/r = 0$. (Note the field there is not zero, but the potential is.)'
          },
          {
            question: 'Two equipotential surfaces near a point charge are close together where the field is strong and far apart where it is weak because:',
            options: [
              'Potential is constant in space',
              'The field magnitude equals the rate of change of potential with distance',
              'Equipotentials are always evenly spaced',
              'The field is independent of potential'
            ],
            correctAnswer: 1,
            explanation: 'Since $E = |dV/dr|$, a fixed potential step $\\Delta V$ corresponds to a small spacing where $E$ is large and a large spacing where $E$ is small.'
          }
        ]
      }
    }
  ]
};
