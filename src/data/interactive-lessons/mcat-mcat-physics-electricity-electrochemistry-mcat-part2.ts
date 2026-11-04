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

**Problem 1.** A technician plates copper from $\\text{CuSO}_4$ solution ($\\text{Cu}^{2+} + 2e^- \\rightarrow \\text{Cu}$, molar mass $63.5\\;\\text{g/mol}$) using a $2.0\\;\\text{A}$ current for $965\\;\\text{s}$.

- **(a)** How much charge passes through the cell?
- **(b)** How many moles of electrons is that?
- **(c)** How many moles, and what mass, of copper are deposited?
- **(d)** On which electrode does the copper appear, and how would the deposit change with double the current or a $1+$ metal ion?

**(a) Total charge.** $Q = It = (2.0)(965) = 1930\\;\\text{C}$

**(b) Moles of electrons.** With $Q = 1930\\;\\text{C}$ from (a):

$n_{e^-} = \\frac{1930}{96{,}500} = 0.020\\;\\text{mol}$

(MCAT arithmetic: $1930$ is $2\\%$ of $96{,}500$.)

**(c) Moles and mass of copper.** Two electrons per copper, so the $0.020\\;\\text{mol}\\;e^-$ from (b) gives:

$n_{Cu} = \\frac{0.020}{2} = 0.010\\;\\text{mol}, \\quad m = (0.010)(63.5) = 0.635\\;\\text{g}$

**(d) Where, and how it scales.** The copper appears on the CATHODE — the electrode wired to the supply's negative terminal. Doubling current, time, or both scales the deposit linearly; switching to a $1+$ metal at the same charge would double the moles deposited.

### Worked Example — Which Electrode Is Which?

**Problem 1.** A student electrolyzes molten $\\text{NaCl}$ between two electrodes wired to a DC power supply.

- **(a)** Which ion is reduced and which is oxidized?
- **(b)** Which product forms at which electrode, and what is each electrode's sign?
- **(c)** How do the products' energies compare with the salt's?

**(a) Identify the redox.** $\\text{Na}^+ + e^- \\rightarrow \\text{Na}$ is reduction; $2\\text{Cl}^- \\rightarrow \\text{Cl}_2 + 2e^-$ is oxidation.

**(b) Apply the iron laws.** Reduction at the cathode → shiny sodium at the NEGATIVE electrode. Oxidation at the anode → yellow-green chlorine gas bubbling off the POSITIVE electrode.

**(c) Sanity check.** Both products are higher-energy than the salt — exactly what "pumping energy in" should produce. Left alone, they would happily react back.`
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
            yield: 'ULTRA_HIGH',
            explanation: `RED CAT is universal (as is AN OX). Signs, spontaneity, and the energy-flow direction are exactly what DIFFER between the two cell types.`
          },
          {
            question: `In an electrolytic cell, the anode is:`,
            options: [`Negative, because oxidation releases electrons`, `Neutral, since no net charge flows`, `Positive, because it is wired to the power supply's positive terminal`, `Alternately positive and negative`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `The supply's $+$ terminal pulls electrons out of the anode to force oxidation there. (In a GALVANIC cell the anode is the negative terminal — same chemistry, flipped sign.)`
          },
          {
            question: `The charge required to deposit $0.10\\;\\text{mol}$ of silver from $\\text{Ag}^+$ solution is approximately:`,
            options: [`$965\\;\\text{C}$`, `$96{,}500\\;\\text{C}$`, `$4825\\;\\text{C}$`, `$9650\\;\\text{C}$`],
            correctAnswer: 3,
            yield: 'HIGH',
            explanation: `$\\text{Ag}^+$ takes one electron each: $0.10\\;\\text{mol} \\times 96{,}500\\;\\text{C/mol} = 9650\\;\\text{C}$. A $2+$ ion would need twice this for the same moles of metal. $96{,}500\\;\\text{C}$ deposits a full mole, ten times too much; $965\\;\\text{C}$ is a tenth of the right charge (a slipped decimal); $4825\\;\\text{C}$ halves it, as if each $\\text{Ag}^+$ needed only half an electron.`
          },
          {
            question: `A current of $5.0\\;\\text{A}$ runs for $1930\\;\\text{s}$. The number of moles of electrons passed is:`,
            options: [`$0.05$`, `$0.10$`, `$0.20$`, `$1.0$`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `$Q = It = 9650\\;\\text{C}$; $9650/96{,}500 = 0.10\\;\\text{mol}\\;e^-$ (9650 is 10 percent of a faraday). $0.05$ halves the answer, as if counting moles of a $2+$ metal rather than moles of electrons; $0.20$ doubles it; $1.0$ treats $9650\\;\\text{C}$ as a full faraday.`
          },
          {
            question: `An electrolytic cell converts:`,
            options: [`Electrical energy into chemical energy`, `Chemical energy into electrical energy`, `Thermal energy into electrical energy`, `Chemical energy into thermal energy only`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `The external supply pushes a nonspontaneous reaction uphill, storing electrical energy in higher-energy products. Chemical-to-electrical is the galvanic direction.`
          }
        ]
      }
    },
    {
      id: 'echem2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- **Electrolytic means driven.** An external supply forces a nonspontaneous reaction ($\\Delta G > 0$), storing energy chemically.
- **What flips, what stays.** AN OX, RED CAT and electrons entering at the cathode hold; the anode is now $(+)$, the cathode $(-)$.
- **Plating at the cathode.** Cations drift to the $(-)$ cathode and deposit as metal; anions are oxidized at the anode, often to gas.
- **The Faraday chain.** Moles $e^- = It/F$ with $F \\approx 96{,}500\\;\\text{C/mol}$; divide by $n$, then multiply by molar mass.

**Common traps**

- **An always-negative anode.** Only a galvanic anode is $(-)$; an electrolytic anode is $(+)$ and is still where oxidation happens.
- **Forgetting the ion's charge.** Depositing one mole of $\\text{M}^{n+}$ takes $n$ moles of electrons, so divide moles $e^-$ by $n$.
- **Sodium from salt water.** In aqueous NaCl, water is reduced first, so the cathode makes $\\text{H}_2$, not sodium metal.
- **Reversing the energy flow.** An electrolytic cell turns electrical energy into chemical energy; chemical to electrical is galvanic.`
    }
  ]
};
