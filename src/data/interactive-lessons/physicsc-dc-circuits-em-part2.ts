export const physCEMCircuitsPart2Data = {
  topicSlug: 'dc-circuits-physics-c-em',
  sections: [
    {
      id: 'physicsc-dc-circuits-em-p2-intro',
      type: 'text' as const,
      content: `# Series and Parallel Circuits

**Part 2 of 7 — Combining Resistors**

---

### Series Resistors

$R_{\\text{eq}} = R_1 + R_2 + R_3 + \\cdots$

- Same current through each resistor
- Voltages add: $V = V_1 + V_2 + V_3$
- Equivalent resistance is always **larger** than the largest resistor

---

### Parallel Resistors

$\\frac{1}{R_{\\text{eq}}} = \\frac{1}{R_1} + \\frac{1}{R_2} + \\frac{1}{R_3} + \\cdots$

For two resistors: $R_{\\text{eq}} = \\frac{R_1 R_2}{R_1 + R_2}$

- Same voltage across each resistor
- Currents add: $I = I_1 + I_2 + I_3$
- Equivalent resistance is always **smaller** than the smallest resistor

---

### Power in Combinations

In series the largest resistor dissipates the most power ($P = I^2R$ with shared $I$); in parallel the **smallest** resistor dissipates the most ($P = V^2/R$ with shared $V$).

> Series: current same, voltage divides. Parallel: voltage same, current divides.`
    },
    {
      id: 'physicsc-dc-circuits-em-p2-worked',
      type: 'text' as const,
      content: `### Worked Example — Reducing a Mixed Network

**Problem.** A $12\\,\\text{V}$ battery (no internal resistance) is connected to a $4\\,\\Omega$ resistor in series with the *parallel* combination of a $6\\,\\Omega$ and a $3\\,\\Omega$ resistor. Find (a) the total current from the battery and (b) the power dissipated in the $6\\,\\Omega$ resistor.

**Step 1 — Combine the parallel pair.**

$R_{\\text{par}} = \\frac{R_1 R_2}{R_1 + R_2} = \\frac{(6)(3)}{6 + 3} = \\frac{18}{9} = 2\\,\\Omega$

**Step 2 — Add the series resistor.**

$R_{\\text{eq}} = 4 + 2 = 6\\,\\Omega$

**Step 3 — Total current (Ohm's law on the whole circuit).**

$I_{\\text{total}} = \\frac{V}{R_{\\text{eq}}} = \\frac{12}{6} = 2\\,\\text{A}$

**Step 4 — Voltage across the parallel section.** That same $2\\,\\text{A}$ flows through the $4\\,\\Omega$ and then through the parallel block:

$V_{\\text{par}} = I_{\\text{total}}\\,R_{\\text{par}} = (2)(2) = 4\\,\\text{V}$

**Step 5 — Power in the $6\\,\\Omega$ resistor.** It sees $4\\,\\text{V}$ across it:

$P_{6} = \\frac{V_{\\text{par}}^2}{R} = \\frac{(4)^2}{6} = \\frac{16}{6} \\approx 2.7\\,\\text{W}$

**Takeaway.** Collapse parallel blocks first, ride the series current to find branch voltages, then use $P = V^2/R$ on the individual resistor.`
    },
    {
      id: 'physicsc-dc-circuits-em-p2-worked2',
      type: 'text' as const,
      content: `### Worked Example (Calculus) — Resistance of a Tapered Conductor

**Problem.** A conductor of resistivity $\\rho$ and length $L$ is shaped so its circular cross-section grows linearly: the radius is $a$ at one end and $b$ at the other. Find its total resistance by treating it as infinitely many thin disks **in series**.

**Step 1 — Slice it.** A disk of thickness $dx$ at position $x$ (from the small end) behaves like a tiny series resistor:

$dR = \\frac{\\rho\\,dx}{A(x)} = \\frac{\\rho\\,dx}{\\pi r(x)^2}$

**Step 2 — Express the radius as a function of $x$.** Linear taper from $a$ to $b$ over length $L$:

$r(x) = a + \\frac{(b - a)}{L}\\,x$

**Step 3 — Sum the series of slices by integrating.**

$R = \\int_0^{L}\\frac{\\rho\\,dx}{\\pi\\,r(x)^2} = \\frac{\\rho}{\\pi}\\int_0^{L}\\frac{dx}{\\left(a + \\frac{b-a}{L}x\\right)^2}$

**Step 4 — Substitute** $u = a + \\frac{b-a}{L}x$, so $du = \\frac{b-a}{L}\\,dx$:

$R = \\frac{\\rho}{\\pi}\\cdot\\frac{L}{b-a}\\int_{a}^{b}\\frac{du}{u^2} = \\frac{\\rho L}{\\pi(b-a)}\\left[-\\frac{1}{u}\\right]_{a}^{b}$

**Step 5 — Evaluate.**

$R = \\frac{\\rho L}{\\pi(b-a)}\\left(\\frac{1}{a} - \\frac{1}{b}\\right) = \\frac{\\rho L}{\\pi(b-a)}\\cdot\\frac{b-a}{ab} = \\frac{\\rho L}{\\pi a b}$

**Check.** If $a = b = r$ (a uniform cylinder), this reduces to $R = \\rho L/(\\pi r^2) = \\rho L/A$, the familiar formula.

**Takeaway.** When the cross-section varies, slice the conductor into series disks and *integrate* $dR = \\rho\\,dx/A(x)$ — series combination becomes a definite integral.`
    },
    {
      id: 'physicsc-dc-circuits-em-p2-deepen',
      type: 'text' as const,
      content: `### Voltage Dividers and Current Dividers

Two shortcuts that save time on exams:

**Voltage divider (series).** When resistors $R_1$ and $R_2$ are in series across a source voltage $V$, the voltage across $R_1$ is its *share* of the total resistance:

$V_1 = V\\,\\frac{R_1}{R_1 + R_2}$

**Current divider (parallel).** When current $I$ splits between $R_1$ and $R_2$ in parallel, the branch with the *smaller* resistance gets the larger share. For two resistors:

$I_1 = I\\,\\frac{R_2}{R_1 + R_2}$

Notice the "opposite" resistor appears in the numerator of the current divider — current prefers the path of least resistance.

> Series divides voltage in *direct* proportion to resistance; parallel divides current in *inverse* proportion to resistance.`
    },
    {
      id: 'physicsc-dc-circuits-em-p2-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check**
      `,
      exercise: {
        questions: [
          {
            question: 'Three $6\\,\\Omega$ resistors in parallel have equivalent resistance:',
            options: ['$18\\,\\Omega$', '$6\\,\\Omega$', '$2\\,\\Omega$', '$3\\,\\Omega$'],
            correctAnswer: 2,
            explanation: '$1/R_{eq} = 1/6 + 1/6 + 1/6 = 3/6 = 1/2$. So $R_{eq} = 2\\,\\Omega$.'
          },
          {
            question: 'In a series circuit, if one resistor is removed (open):',
            options: ['Current increases', 'Current stops', 'Nothing changes', 'Voltage drops'],
            correctAnswer: 1,
            explanation: 'A series circuit is a single path. Removing a resistor breaks the loop, so the current stops.'
          },
          {
            question: 'A $2\\,\\Omega$ and a $4\\,\\Omega$ resistor are in parallel. The equivalent resistance is approximately:',
            options: ['$6\\,\\Omega$', '$3\\,\\Omega$', '$2\\,\\Omega$', '$1.33\\,\\Omega$'],
            correctAnswer: 3,
            explanation: '$R_{eq} = (2)(4)/(2+4) = 8/6 \\approx 1.33\\,\\Omega$, which is less than the smallest resistor in the combination.'
          },
          {
            question: 'Two resistors carry the same current. This tells you they are connected in:',
            options: ['Parallel', 'Series', 'A short circuit', 'Cannot be determined'],
            correctAnswer: 1,
            explanation: 'Identical current through both elements (with no junction between them) is the defining property of a series connection.'
          },
          {
            question: 'A $3\\,\\Omega$ and a $6\\,\\Omega$ resistor are in parallel across a $12\\,\\text{V}$ source. The ratio of current in the $3\\,\\Omega$ resistor to that in the $6\\,\\Omega$ resistor is:',
            options: ['$1:2$', '$2:1$', '$1:1$', '$4:1$'],
            correctAnswer: 1,
            explanation: 'Same voltage across both, $I = V/R$, so $I_3/I_6 = (12/3)/(12/6) = 4/2 = 2$. The smaller resistor carries the larger current.'
          },
          {
            question: 'Four identical resistors $R$ are connected: two in series, and that pair in parallel with another identical series pair. The equivalent resistance is:',
            options: ['$R$', '$2R$', '$4R$', '$R/4$'],
            correctAnswer: 0,
            explanation: 'Each series pair is $2R$. Two $2R$ branches in parallel give $(2R)(2R)/(2R+2R) = 4R^2/4R = R$.'
          }
        ]
      }
    }
  ]
};
