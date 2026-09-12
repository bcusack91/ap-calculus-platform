import type { LessonData } from './registry'

export const electrochemistryMcatPart2: LessonData = {
  topicSlug: 'mcat-physics-electricity-electrochemistry-mcat',
  sections: [
    {
      id: 'echem2-intro',
      type: 'text' as const,
      content: `# Electrochemistry

**Part 2 of 4 — Electrolytic Cells & Faraday's Laws**

### Electrolytic Cells — Redox Driven Backward

An electrolytic cell uses an EXTERNAL power source to force a NONSPONTANEOUS reaction ($E_{cell} < 0$, $\\Delta G > 0$). Electrical energy in, chemical energy stored. Applications: electroplating jewelry, purifying copper, splitting water, producing aluminum and chlorine industrially.

### The Sign Flip (and What Never Flips)

| | Galvanic | Electrolytic |
|---|---------|--------------|
| Spontaneous? | yes ($\\Delta G < 0$) | no — driven ($\\Delta G > 0$) |
| Anode does | oxidation | oxidation |
| Cathode does | reduction | reduction |
| Anode sign | $-$ | $+$ |
| Cathode sign | $+$ | $-$ |

- AN OX / RED CAT: universal.
- Electrons ALWAYS enter the cell at the cathode — also universal.
- The SIGNS flip because in an electrolytic cell the power supply's $+$ terminal grabs the anode (yanking electrons out to force oxidation), and its $-$ terminal feeds the cathode.

Quick mental check for electrolytic cells: cations in solution drift to the NEGATIVE cathode and get reduced there — plating always happens at the cathode.

### Electrolysis Logic

The power supply must provide at least $|E_{cell}|$ volts to force the reaction. In molten salt electrolysis (say $\\text{NaCl}$), sodium metal forms at the cathode, chlorine gas at the anode. In AQUEOUS solutions, water competes: species are oxidized/reduced in order of ease, which is why electrolyzing salt water makes $\\text{H}_2$ at the cathode instead of sodium metal.

### Faraday's Laws — Counting Electrons Like Moles

Charge and chemical change are locked together by the **Faraday constant**:

$F = 96{,}485\\;\\text{C/mol}\\;e^- \\approx 96{,}500$

The working chain for every quantitative electrolysis problem:

$\\text{moles of } e^- = \\frac{It}{F}$

then use the half-reaction's stoichiometry: depositing one mole of $\\text{M}^{n+}$ as metal takes $n$ moles of electrons. So

$\\text{mass deposited} = \\frac{It}{F} \\times \\frac{M_{molar}}{n}$

Same charge deposits HALF as many moles of a $2+$ ion as of a $1+$ ion — the charge on the ion is the exchange rate.`
    },
    {
      id: 'echem2-worked',
      type: 'text' as const,
      content: `### Worked Example — Copper Electroplating (Passage Style)

A technician plates copper from $\\text{CuSO}_4$ solution ($\\text{Cu}^{2+} + 2e^- \\rightarrow \\text{Cu}$, molar mass $63.5\\;\\text{g/mol}$) using a $2.0\\;\\text{A}$ current for $965\\;\\text{s}$.

**Step 1 — Total charge.**

$Q = It = (2.0)(965) = 1930\\;\\text{C}$

**Step 2 — Moles of electrons.**

$n_{e^-} = \\frac{1930}{96{,}500} = 0.020\\;\\text{mol}$

(MCAT arithmetic: $1930$ is $2\\%$ of $96{,}500$.)

**Step 3 — Moles and mass of copper.** Two electrons per copper:

$n_{Cu} = \\frac{0.020}{2} = 0.010\\;\\text{mol}, \\quad m = (0.010)(63.5) = 0.635\\;\\text{g}$

The copper appears on the CATHODE — the electrode wired to the supply's negative terminal.

**Doubling check:** doubling current, time, or both scales the deposit linearly; switching to a $1+$ metal at the same charge would double the moles deposited.

### Worked Example — Which Electrode Is Which?

A student electrolyzes molten $\\text{NaCl}$. Where does each product form?

**Step 1 — Identify the redox.** $\\text{Na}^+ + e^- \\rightarrow \\text{Na}$ is reduction; $2\\text{Cl}^- \\rightarrow \\text{Cl}_2 + 2e^-$ is oxidation.

**Step 2 — Apply the iron laws.** Reduction at the cathode → shiny sodium at the NEGATIVE electrode. Oxidation at the anode → green chlorine gas bubbling off the POSITIVE electrode.

**Step 3 — Sanity.** Both products are higher-energy than the salt — exactly what "pumping energy in" should produce. Left alone, they would happily react back.`
    },
    {
      id: 'echem2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Electrolytic Cells & Faraday's Laws** 🎯`,
      exercise: {
        questions: [
          {
            question: `Which statement is true of BOTH galvanic and electrolytic cells?`,
            options: [`Reduction occurs at the cathode`, `The anode carries a negative sign`, `The reaction is spontaneous`, `Electrical energy is converted to chemical energy`],
            correctAnswer: 0,
            explanation: `RED CAT is universal (as is AN OX). Signs, spontaneity, and the energy-flow direction are exactly what DIFFER between the two cell types.`
          },
          {
            question: `In an electrolytic cell, the anode is:`,
            options: [`Negative, because oxidation releases electrons`, `Neutral, since no net charge flows`, `Positive, because it is wired to the power supply's positive terminal`, `Alternately positive and negative`],
            correctAnswer: 2,
            explanation: `The supply's $+$ terminal pulls electrons out of the anode to force oxidation there. (In a GALVANIC cell the anode is the negative terminal — same chemistry, flipped sign.)`
          },
          {
            question: `The charge required to deposit $0.10\\;\\text{mol}$ of silver from $\\text{Ag}^+$ solution is approximately:`,
            options: [`$965\\;\\text{C}$`, `$96{,}500\\;\\text{C}$`, `$4825\\;\\text{C}$`, `$9650\\;\\text{C}$`],
            correctAnswer: 3,
            explanation: `$\\text{Ag}^+$ takes one electron each: $0.10\\;\\text{mol} \\times 96{,}500\\;\\text{C/mol} = 9650\\;\\text{C}$. A $2+$ ion would need twice this for the same moles of metal.`
          },
          {
            question: `A current of $5.0\\;\\text{A}$ runs for $1930\\;\\text{s}$. The number of moles of electrons passed is:`,
            options: [`$0.05$`, `$0.10$`, `$0.20$`, `$1.0$`],
            correctAnswer: 1,
            explanation: `$Q = It = 9650\\;\\text{C}$; $9650/96{,}500 = 0.10\\;\\text{mol}\\;e^-$ (9650 is 10 percent of a faraday).`
          },
          {
            question: `An electrolytic cell converts:`,
            options: [`Electrical energy into chemical energy`, `Chemical energy into electrical energy`, `Thermal energy into electrical energy`, `Chemical energy into thermal energy only`],
            correctAnswer: 0,
            explanation: `The external supply pushes a nonspontaneous reaction uphill, storing electrical energy in higher-energy products. Chemical-to-electrical is the galvanic direction.`
          }
        ]
      }
    },
    {
      id: 'echem2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- Electrolytic = driven, nonspontaneous ($\\Delta G > 0$); electrical energy stored as chemical energy
- AN OX, RED CAT, and electrons-enter-at-cathode never change; electrode SIGNS flip (electrolytic anode $+$, cathode $-$)
- Plating and metal deposition happen at the cathode; gas from anion oxidation at the anode
- $F \\approx 96{,}500\\;\\text{C/mol}$; moles $e^- = It/F$; divide by $n$ for moles of metal, then multiply by molar mass
- Aqueous electrolysis: water can out-compete the salt's ions at either electrode`
    }
  ]
};
