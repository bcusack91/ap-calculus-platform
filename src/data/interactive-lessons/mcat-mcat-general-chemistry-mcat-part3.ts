export const mcatGenChemPart3Data = {
  topicSlug: 'mcat-general-chemistry-mcat',
  sections: [
    {
      id: 'gc3-intro',
      type: 'text' as const,
      content: `# General Chemistry for the MCAT

**Part 3 of 7 — Stoichiometry, Solutions & Concentration**

### Key Formulas

$$\\text{Molarity (M)} = \\frac{\\text{mol solute}}{\\text{L solution}}$$

$$\\text{Dilution: } M_1V_1 = M_2V_2$$

$$\\text{Molality (m)} = \\frac{\\text{mol solute}}{\\text{kg solvent}}$$

### Colligative Properties

$$\\Delta T_b = K_b \\cdot m \\cdot i \\qquad \\Delta T_f = K_f \\cdot m \\cdot i$$

where $i$ = van't Hoff factor (number of particles in solution)

- $\\text{NaCl}$: $i = 2$ (Na$^+$ + Cl$^-$)
- $\\text{CaCl}_2$: $i = 3$ (Ca$^{2+}$ + 2Cl$^-$)
- Glucose: $i = 1$ (molecular, doesn't dissociate)

### Solubility Rules (MCAT Favorites)

- All Na$^+$, K$^+$, NH$_4^+$ salts are soluble
- All nitrates (NO$_3^-$) and acetates are soluble
- Most halides soluble EXCEPT AgCl, PbCl$_2$
- Most sulfates soluble EXCEPT BaSO$_4$, PbSO$_4$`
    },
    {
      id: 'gc3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Solutions & Stoichiometry** 🎯`,
      exercise: {
        questions: [
          {
            question: `A researcher dissolves 0.1 mol NaCl in 500 mL of solution. What is the molarity of Na$^+$ ions?`,
            options: [`0.2 M`, `0.1 M`, `0.4 M`, `0.05 M`],
            correctAnswer: 0,
            explanation: `M = 0.1 mol / 0.5 L = 0.2 M for NaCl. Since NaCl fully dissociates, [Na$^+$] = 0.2 M and [Cl$^-$] = 0.2 M.`
          },
          {
            question: `Which 0.1 m aqueous solution has the LOWEST freezing point?`,
            options: [`$\\text{CaCl}_2$ ($i = 3$)`, `$\\text{NaCl}$ ($i = 2$)`, `Glucose ($i = 1$)`, `$\\text{KBr}$ ($i = 2$)`],
            correctAnswer: 0,
            explanation: `$\\Delta T_f = K_f \\cdot m \\cdot i$. CaCl$_2$ has the highest $i$ (3 particles), giving the greatest freezing point depression (lowest freezing point).`
          }
        ]
      }
    },
    {
      id: 'gc3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- Molarity = mol/L solution; Molality = mol/kg solvent
- Colligative properties depend on $i$ (number of dissolved particles)
- $M_1V_1 = M_2V_2$ for dilutions
- Know solubility rules: all alkali metals and nitrates are soluble`
    }
  ]
};
