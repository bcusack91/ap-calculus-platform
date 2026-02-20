export const mcatGenChemPart7Data = {
  topicSlug: 'mcat-general-chemistry-mcat',
  sections: [
    {
      id: 'gc7-intro',
      type: 'text' as const,
      content: `# General Chemistry for the MCAT

**Part 7 of 7 — Electrochemistry & Redox**

### Key Concepts

**Oxidation** = loss of electrons (OIL RIG)
**Reduction** = gain of electrons

### Cell Potential

$$E°_{cell} = E°_{cathode} - E°_{anode}$$

- Galvanic cell: $E°_{cell} > 0$ (spontaneous, $\\Delta G < 0$)
- Electrolytic cell: $E°_{cell} < 0$ (non-spontaneous, requires external energy)

### Nernst Equation

$$E = E° - \\frac{RT}{nF}\\ln Q = E° - \\frac{0.0592}{n}\\log Q \\quad (\\text{at } 25°C)$$

### Relationship to Free Energy

$$\\Delta G° = -nFE°$$

where $n$ = moles of electrons transferred, $F$ = 96,485 C/mol`
    },
    {
      id: 'gc7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Electrochemistry** 🎯',
      exercise: {
        questions: [
          {
            question: 'Given: $Zn^{2+}/Zn$ has $E° = -0.76$ V and $Cu^{2+}/Cu$ has $E° = +0.34$ V. In a galvanic cell, $E°_{cell}$ is:',
            options: ['$+1.10$ V (Cu is cathode, Zn is anode)', '$-1.10$ V', '$+0.42$ V', '$-0.42$ V'],
            correctAnswer: 0,
            explanation: 'In a galvanic cell, the more positive $E°$ is the cathode (reduction). $E°_{cell} = E°_{cathode} - E°_{anode} = 0.34 - (-0.76) = +1.10$ V.'
          },
          {
            question: 'In an electrolytic cell, oxidation occurs at the:',
            options: ['Anode (positive electrode)', 'Cathode (negative electrode)', 'Salt bridge', 'It varies'],
            correctAnswer: 0,
            explanation: 'Oxidation ALWAYS occurs at the anode (both galvanic and electrolytic). In electrolytic cells, the anode is positive (connected to + terminal of battery).'
          }
        ]
      }
    },
    {
      id: 'gc7-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 7

- AN OX, RED CAT: Anode = Oxidation, Reduction = Cathode (always!)
- Galvanic: spontaneous, $E° > 0$; Electrolytic: non-spontaneous, $E° < 0$
- $\\Delta G° = -nFE°$: positive cell potential means negative free energy
- Nernst equation: how concentration affects cell potential`
    }
  ]
};
