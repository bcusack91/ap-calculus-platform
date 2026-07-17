export const physCEMMagFieldsPart5Data = {
  topicSlug: 'magnetic-fields-physics-c-em',
  sections: [
    {
      id: 'physicsc-magnetic-fields-em-p5-intro',
      type: 'text' as const,
      content: `# 🌀 Magnetic Flux

**Part 5 of 7 — Flux Through Surfaces**

---

### Magnetic Flux

$$\\Phi_B = \\int \\vec{B} \\cdot d\\vec{A}$$

For uniform $B$ through flat surface: $\\Phi_B = BA\\cos\\theta$

Units: Weber (Wb) = $T\\cdot m^{2}$

---

### Gauss’s Law for Magnetism

$$\\oint \\vec{B} \\cdot d\\vec{A} = 0$$

> 🔑 No magnetic monopoles — field lines have no beginning or end. Total flux through any closed surface is zero.`
    },
    {
      id: 'physicsc-magnetic-fields-em-p5-when-integrate',
      type: 'text' as const,
      content: `### Uniform vs. Non-Uniform Flux

**When $\\vec{B}$ is uniform** over a flat surface, the integral collapses: $\\Phi_B = \\vec{B}\\cdot\\vec{A} = BA\\cos\\theta$, where $\\theta$ is the angle between $\\vec{B}$ and the surface **normal** $\\hat{n}$. Flux is maximal when the normal lies along $\\vec{B}$ and zero when the surface is edge-on to the field.

**When $\\vec{B}$ varies across the surface** (for example, near a current-carrying wire where $B\\propto 1/r$), you must actually integrate: slice the area into strips on which $B$ is nearly constant, then $\\Phi_B = \\int B\\,dA$. Integrating a $1/r$ field across a strip produces the logarithm $\\ln\\frac{a+b}{a}$ you will see in the worked example.

### Why This Matters for Induction

Flux is the bridge to Faraday's law: an EMF appears only when $\\Phi_B$ *changes in time*. Gauss's law for magnetism, $\\oint\\vec{B}\\cdot d\\vec{A}=0$, guarantees the field lines you count entering a closed surface exactly equal those leaving — there are no magnetic charges to act as sources or sinks. This is one of the four Maxwell equations.`
    },
    {
      id: 'physicsc-magnetic-fields-em-p5-worked',
      type: 'text' as const,
      content: `### Worked Example — Flux from a Wire Through a Loop (Integration)

A long straight wire carries current $I$. A rectangular loop of height $\\ell$ lies in the same plane, with its near side a distance $a$ from the wire and its far side at $a + b$. Find the total flux through the loop.

**Step 1 — The field varies across the loop.** At distance $r$ from the wire, $B(r) = \\frac{\\mu_0 I}{2\\pi r}$, pointing perpendicular to the loop's plane. Because $B$ depends on $r$, we must integrate rather than use $BA$.

**Step 2 — Set up the strip.** Take a thin strip of width $dr$ at distance $r$, with area $dA = \\ell\\,dr$. The flux through it is

$d\\Phi_B = B(r)\\,dA = \\frac{\\mu_0 I}{2\\pi r}\\,\\ell\\,dr.$

**Step 3 — Integrate from $a$ to $a+b$.**

$\\Phi_B = \\frac{\\mu_0 I \\ell}{2\\pi}\\int_a^{a+b}\\frac{dr}{r} = \\frac{\\mu_0 I \\ell}{2\\pi}\\ln\\!\\left(\\frac{a+b}{a}\\right).$

**Numbers.** With $I = 20\\text{ A}$, $\\ell = 0.10\\text{ m}$, $a = 0.01\\text{ m}$, $b = 0.04\\text{ m}$: $\\Phi_B = \\frac{(4\\pi\\times10^{-7})(20)(0.10)}{2\\pi}\\ln(5) = (4.0\\times10^{-7})\\ln 5 = 6.4\\times10^{-7}\\text{ Wb}$. The logarithm is the signature of a $1/r$ field integrated over distance.`
    },
    {
      id: 'physicsc-magnetic-fields-em-p5-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The net magnetic flux through any closed surface is:',
            options: ['Positive', 'Negative', 'Zero', 'Depends on the surface'],
            correctAnswer: 2,
            explanation: 'Gauss’s law for magnetism: $\\oint \\vec{B} \\cdot d\\vec{A} = 0$. No magnetic monopoles.'
          },
          {
            question: 'The SI unit of magnetic flux is the:',
            options: ['Tesla', 'Weber', 'Henry', 'Gauss'],
            correctAnswer: 1,
            explanation: 'Flux is measured in webers ($1\\text{ Wb} = 1\\text{ T}\\cdot\\text{m}^2$). The tesla is the unit of $B$.'
          },
          {
            question: 'A flat 0.020 $m^{2}$ coil is in a 0.50 T uniform field. The flux is maximum when the coil’s plane is:',
            options: ['Parallel to $\\vec{B}$', 'Perpendicular to $\\vec{B}$ (normal along $\\vec{B}$)', 'At 45° to $\\vec{B}$', 'Irrelevant — flux is constant'],
            correctAnswer: 1,
            explanation: '$\\Phi_B = BA\\cos\\theta$ where $\\theta$ is between the normal and $\\vec{B}$. Flux is maximal when the normal is along $\\vec{B}$ — i.e., the plane is perpendicular to $\\vec{B}$ — giving $\\Phi_B = (0.50)(0.020) = 0.010$ Wb.'
          },
          {
            question: 'The fact that $\\oint \\vec{B}\\cdot d\\vec{A} = 0$ for every closed surface implies:',
            options: ['Magnetic field lines start on north poles and end on south poles, terminating in space', 'Magnetic monopoles do not exist; field lines form closed loops', 'Magnetic fields cannot pass through surfaces', 'Magnetic charge is quantized'],
            correctAnswer: 1,
            explanation: 'Zero net flux through any closed surface means there are no magnetic charges (monopoles); $\\vec{B}$ lines have no sources or sinks and close on themselves.'
          },
          {
            question: 'The flux through the rectangular loop next to a long wire depends on the distance $a$ as:',
            options: ['Linearly in $a$', 'Logarithmically (through $\\ln\\frac{a+b}{a}$)', 'As $1/a^2$', 'Independent of $a$'],
            correctAnswer: 1,
            explanation: 'Integrating the $1/r$ field gives $\\Phi_B = \\frac{\\mu_0 I\\ell}{2\\pi}\\ln\\frac{a+b}{a}$ — a logarithmic dependence on the geometry.'
          }
        ]
      }
    }
  ]
};
