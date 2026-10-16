export const physCEMMaxwellPart3Data = {
  topicSlug: 'maxwell-equations-physics-c-em',
  sections: [
    {
      id: 'physicsc-maxwell-equations-em-p3-intro',
      type: 'text' as const,
      content: `# ⚡ Faraday's Law and Induced Electric Fields

**Part 3 of 7 — Faraday's Law as an Induced Electric Field**

---

### Maxwell's Third Equation
$$\\oint \\vec{E} \\cdot d\\vec{l} = -\\frac{d\\Phi_B}{dt}$$

A changing magnetic flux creates an **electric field** that circulates around the region where the flux is changing. The field exists whether or not a wire is there; a conducting loop simply lets it push charges around, and the EMF in the loop is $\\mathcal{E} = \\oint \\vec{E} \\cdot d\\vec{l}$. For a coil of $N$ turns, $\\mathcal{E} = -N\\frac{d\\Phi_B}{dt}$, and Lenz's law gives the direction.

---

### Two Kinds of Electric Field

| | Electrostatic field (from charges) | Induced field (from changing $\\vec{B}$) |
|---|---|---|
| Field lines | Start and end on charges | Form **closed loops** |
| $\\oint \\vec{E} \\cdot d\\vec{l}$ around a loop | $0$ (conservative) | $-d\\Phi_B/dt$ (non-conservative) |
| Electric potential | Well defined | Cannot be defined around the loop |

Both kinds exert the same force $\\vec{F} = q\\vec{E}$ on a charge.`
    },
    {
      id: 'physicsc-maxwell-equations-em-p3-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'An electric field produced by a changing magnetic field differs from an electrostatic field because its field lines:',
            options: ['Form closed loops', 'Start on positive charges', 'Point straight out from an axis', 'Always point toward lower potential'],
            correctAnswer: 0,
            explanation: 'Induced field lines circulate around the changing flux and close on themselves; starting on charges and pointing toward lower potential describe electrostatic fields.'
          },
          {
            question: 'Around any closed path, the line integral $\\oint \\vec{E} \\cdot d\\vec{l}$ of an electrostatic field (one produced only by stationary charges) is:',
            options: ['Zero', 'Equal to $-d\\Phi_B/dt$', 'Equal to $Q_{enc}/\\varepsilon_0$', 'Always positive'],
            correctAnswer: 0,
            explanation: 'Electrostatic fields are conservative, so the work per unit charge around a closed path is zero. Only a changing magnetic flux makes the loop integral nonzero.'
          }
        ]
      }
    },
    {
      id: 'physicsc-maxwell-equations-em-p3-worked',
      type: 'text' as const,
      content: `### 📝 Worked Example — Induced Field In and Around a Solenoid

A long solenoid of radius $R = 0.020 \\text{ m}$ has $n = 1000$ turns per meter. Its current increases at $\\frac{dI}{dt} = 50 \\text{ A/s}$. Find the induced electric field at (a) $r = 0.010 \\text{ m}$ (inside) and (b) $r = 0.040 \\text{ m}$ (outside).

**Step 1 — Rate of change of $B$ inside.** From Ampère's law, $B = \\mu_0 n I$, so
$\\frac{dB}{dt} = \\mu_0 n \\frac{dI}{dt} = (4\\pi \\times 10^{-7})(1000)(50) = 6.28 \\times 10^{-2} \\text{ T/s}$

**Step 2 — Use symmetry.** On a circle of radius $r$ centered on the axis, $\\vec{E}$ is tangent to the circle with constant magnitude, so $\\oint \\vec{E} \\cdot d\\vec{l} = E(2\\pi r)$.

**Step 3 — Inside ($r < R$).** The circle encloses flux $B\\pi r^2$:
$E(2\\pi r) = \\pi r^2 \\frac{dB}{dt} \;\\Rightarrow\; E = \\frac{r}{2}\\frac{dB}{dt} = \\frac{0.010}{2}(6.28 \\times 10^{-2}) = 3.1 \\times 10^{-4} \\text{ V/m}$

**Step 4 — Outside ($r > R$).** $B \\approx 0$ outside, but the circle still encloses the solenoid's flux $B\\pi R^2$:
$E(2\\pi r) = \\pi R^2 \\frac{dB}{dt} \;\\Rightarrow\; E = \\frac{R^2}{2r}\\frac{dB}{dt} = \\frac{(0.020)^2}{2(0.040)}(6.28 \\times 10^{-2}) = 3.1 \\times 10^{-4} \\text{ V/m}$

> 🔑 Inside, $E$ grows linearly with $r$; outside, it falls as $1/r$. There is an induced electric field outside the solenoid even though the magnetic field there is essentially zero.`
    },
    {
      id: 'physicsc-maxwell-equations-em-p3-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'Inside a long solenoid whose current is increasing steadily, the induced electric field at distance $r$ from the axis is proportional to:',
            options: ['$r$', '$1/r$', '$r^2$', '$1/r^2$'],
            correctAnswer: 0,
            explanation: '$E(2\\pi r) = \\pi r^2\\,dB/dt$ gives $E = (r/2)\\,dB/dt$, which grows linearly with $r$. The $1/r$ dependence applies outside the solenoid.'
          },
          {
            question: 'For the solenoid in the worked example, the induced electric field at $r = 0.040$ m (outside the windings) is:',
            options: ['$3.1 \\times 10^{-4}$ V/m', '$1.3 \\times 10^{-3}$ V/m', '$6.3 \\times 10^{-4}$ V/m', '$0$'],
            correctAnswer: 0,
            explanation: 'Outside, the enclosed flux is $B\\pi R^2$, so $E = (R^2/2r)\\,dB/dt = 3.1 \\times 10^{-4}$ V/m. Using the inside formula $(r/2)\\,dB/dt$ gives $1.3 \\times 10^{-3}$ V/m, and $B \\approx 0$ outside does not make $E$ zero.'
          },
          {
            question: 'A wire ring encircles a long solenoid, outside its windings where $B \\approx 0$. When the solenoid\'s current increases, a current is induced in the ring because:',
            options: ['The flux through the ring changes', 'A magnetic force acts on charges in the ring', 'Charge leaks from the solenoid into the ring', 'The ring sits in a strong magnetic field'],
            correctAnswer: 0,
            explanation: 'The ring encloses the solenoid\'s changing flux, so Faraday\'s law gives a circulating induced electric field along the ring that drives the current, even though $B$ at the wire itself is about zero.'
          }
        ]
      }
    }
  ]
};
