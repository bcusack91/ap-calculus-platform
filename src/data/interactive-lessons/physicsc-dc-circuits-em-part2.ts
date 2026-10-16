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
      content: `### Worked Example (Calculus) — Resistivity That Varies Along a Resistor

**Problem.** A resistor of length $L$ and uniform cross-sectional area $A$ is made of a material whose resistivity increases along its length: $\\rho(x) = \\rho_0\\left(1 + \\dfrac{x}{L}\\right)$. Find its total resistance by treating it as infinitely many thin slices **in series**.

**Step 1 — Slice it.** A slice of thickness $dx$ at position $x$ behaves like a tiny series resistor:

$dR = \\frac{\\rho(x)\\,dx}{A}$

**Step 2 — Add the slices by integrating.** Slices in series add, so

$R = \\int_0^{L}\\frac{\\rho_0}{A}\\left(1 + \\frac{x}{L}\\right)dx$

**Step 3 — Evaluate.**

$R = \\frac{\\rho_0}{A}\\left[x + \\frac{x^2}{2L}\\right]_0^{L} = \\frac{\\rho_0}{A}\\left(L + \\frac{L}{2}\\right) = \\frac{3\\rho_0 L}{2A}$

**Check.** The resistivity runs from $\\rho_0$ to $2\\rho_0$ and grows linearly, so its average is $1.5\\rho_0$; a uniform resistor of resistivity $1.5\\rho_0$ gives the same $R = 1.5\\rho_0 L/A$.

**Takeaway.** When the resistivity changes along the length, slice the resistor into series pieces and *integrate* $dR = \\rho(x)\\,dx/A$ — series combination becomes a definite integral.`
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
            options: ['Current increases', 'Current stops', 'Nothing changes', 'Current decreases slightly'],
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
            correctAnswer: 3,
            explanation: 'Series elements always share one current, but two equal resistors in parallel also carry equal currents, so equal currents alone do not tell you the connection.'
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
