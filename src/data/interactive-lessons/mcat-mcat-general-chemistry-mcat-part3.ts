export const mcatGenChemPart3Data = {
  topicSlug: 'mcat-general-chemistry-mcat',
  sections: [
    {
      id: 'gc3-intro',
      type: 'text' as const,
      content: `# General Chemistry for the MCAT

**Part 3 of 7 — Stoichiometry, Solutions & Concentration**

    ### Stoichiometry Workflow (MCAT-Proof)

    1. Balance the equation.
    2. Convert given values to moles.
    3. Use mole ratios to find limiting reagent or product moles.
    4. Convert to requested units (grams, liters, concentration, particles).

    ### Key Concentration Formulas

$$\\text{Molarity (M)} = \\frac{\\text{mol solute}}{\\text{L solution}}$$

$$\\text{Dilution: } M_1V_1 = M_2V_2$$

$$\\text{Molality (m)} = \\frac{\\text{mol solute}}{\\text{kg solvent}}$$

Molarity changes with temperature (volume changes); molality does not.

### Colligative Properties and Particle Counting

$$\\Delta T_b = K_b \\cdot m \\cdot i \\qquad \\Delta T_f = K_f \\cdot m \\cdot i$$

where $i$ = van't Hoff factor (number of particles in solution)

- $\\text{NaCl}$: $i = 2$ (Na$^+$ + Cl$^-$)
- $\\text{CaCl}_2$: $i = 3$ (Ca$^{2+}$ + 2Cl$^-$)
- Glucose: $i = 1$ (molecular solute, no dissociation)

### Solubility and Precipitation Logic

- All Na$^+$, K$^+$, NH$_4^+$ salts are soluble
- All nitrates (NO$_3^-$) and acetates are soluble
- Most halides soluble EXCEPT AgCl, PbCl$_2$
- Most sulfates soluble EXCEPT BaSO$_4$, PbSO$_4$

To predict precipitation, identify ions after mixing and check whether any product is insoluble.`
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
          },
          {
            question: `How much 12 M HCl is needed to prepare 250 mL of 0.50 M HCl?`,
            options: [`10.4 mL`, `24.0 mL`, `40.0 mL`, `120 mL`],
            correctAnswer: 0,
            explanation: `Use $M_1V_1=M_2V_2$: $V_1=(0.50\\times0.250)/12=0.0104$ L = 10.4 mL.`
          },
          {
            question: `When aqueous $AgNO_3$ is mixed with aqueous $NaCl$, the precipitate formed is:`,
            options: [`$NaNO_3$`, `$AgCl$`, `$NaCl$`, `No precipitate`],
            correctAnswer: 1,
            explanation: `$Ag^+$ and $Cl^-$ form insoluble $AgCl(s)$, while $NaNO_3$ remains soluble.`
          },
          {
            question: `A 5.0 g sample of $CaCO_3$ (M = 100 g/mol) is treated with excess acid. How many moles of $CO_2$ are produced from $CaCO_3 + 2H^+ -> Ca^{2+} + CO_2 + H_2O$?`,
            options: [`0.025 mol`, `0.050 mol`, `0.10 mol`, `0.20 mol`],
            correctAnswer: 1,
            explanation: `Moles $CaCO_3 = 5.0/100 = 0.050$ mol. Stoichiometry is 1:1 from $CaCO_3$ to $CO_2$, so 0.050 mol $CO_2$.`
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
- Know solubility rules and use them to predict precipitation reactions
- In multi-step stoichiometry, unit tracking prevents most errors.`
    }
  ]
};
