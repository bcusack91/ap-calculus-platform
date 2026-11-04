export const mcatStoichiometryPart5Data = {
  topicSlug: 'mcat-general-chemistry-stoichiometry-mcat',
  sections: [
    {
      id: 'st5-intro',
      type: 'text' as const,
      content: `# Stoichiometry & Chemical Reactions

**Part 5 of 5 — Mixed MCAT Review**

This section integrates all stoichiometry concepts you'll encounter on the MCAT. Each question may draw on moles, limiting reagents, gas laws, solutions, colligative properties, electrochemistry, or multiple topics at once.

## High-Yield Checklist Before You Practice

- ✅ **Molar mass** from periodic table; $n = m/M$
- ✅ **Limiting reagent** = divide moles by stoichiometric coefficient; choose smaller result
- ✅ **Percent yield** = (actual / theoretical) × 100%
- ✅ **Molarity** $M = n/V(\\text{L})$; dilution: $M_1V_1 = M_2V_2$
- ✅ **Ideal gas law** $PV = nRT$; $R = 0.0821$ L·atm/mol·K; $T$ in Kelvin
- ✅ **Dalton's law** $P_{\\text{total}} = \\sum P_i$
- ✅ **Graham's law** rate $\\propto 1/\\sqrt{M}$
- ✅ **Colligative:** $\\Delta T_f = K_f m i$; $\\Delta T_b = K_b m i$; $\\Pi = iMRT$
- ✅ **Faraday:** mol $e^- = It/F$; $F \\approx 96{,}500$ C/mol
- ✅ **Net ionic equations:** cancel spectator ions; know solubility rules
`
    },
    {
      id: 'st5-quiz',
      type: 'multiple-choice' as const,
      content: `**Mixed Stoichiometry — MCAT-Style Questions** 🎯`,
      exercise: {
        questions: [
          {
            question: `A student dissolves 9.80 g of $\\text{H}_2\\text{SO}_4$ ($M = 98.0$ g/mol) in water to make 250. mL of solution. What is the molarity of the solution?`,
            options: [`0.200 M`, `0.400 M`, `0.800 M`, `0.0250 M`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `Moles $\\text{H}_2\\text{SO}_4 = 9.80/98.0 = 0.100\\text{ mol}$. $M = 0.100\\text{ mol}/0.250\\text{ L} = \\mathbf{0.400\\text{ M}}$. 0.0250 M multiplies by the volume instead of dividing, 0.800 M counts both H⁺ (that is the normality, 0.800 N), and 0.200 M divides by 0.500 L.`
          },
          {
            question: `What volume of 6.00 M HCl is needed to prepare 300. mL of 0.500 M HCl?`,
            options: [`275. mL`, `25.0 mL`, `50.0 mL`, `3600 mL`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `$M_1V_1 = M_2V_2$: $(6.00)(V_1) = (0.500)(300.)$. $V_1 = 150./6.00 = \\mathbf{25.0\\text{ mL}}$. 275. mL is the water added, not the stock; 50.0 mL divides 300. by 6.00 and ignores the 0.500 M; 3600 mL inverts the concentration ratio.`
          },
          {
            question: `Combustion of propane: $\\text{C}_3\\text{H}_8 + 5\\text{O}_2 \\to 3\\text{CO}_2 + 4\\text{H}_2\\text{O}$. If 2.00 mol $\\text{C}_3\\text{H}_8$ reacts with 8.00 mol $\\text{O}_2$, what is the limiting reagent?`,
            options: [
              `$\\text{C}_3\\text{H}_8$; 2.00 mol is far less than 8.00 mol`,
              `$\\text{O}_2$; 2.00 mol of propane needs 10.0 mol of it`,
              `Neither; the two are mixed in their exact 1 : 5 mole ratio`,
              `Neither; a gas-phase reaction never has a limiting reagent`
            ],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `2 mol $\\text{C}_3\\text{H}_8$ requires $2 \\times 5 = 10\\text{ mol O}_2$, but only 8 mol $\\text{O}_2$ is available. Therefore $\\text{O}_2$ is limiting. Alternatively: $2.00/1 = 2.00$ (propane ratio); $8.00/5 = 1.60$ ($\\text{O}_2$ ratio) — smaller ratio → **$\\text{O}_2$ is limiting**. Having fewer moles does not make propane limiting, the mixture is 1 : 4 rather than 1 : 5, and gas-phase reactions obey the same mole bookkeeping.`
          },
          {
            question: `A gas is collected over water at $25°\\text{C}$. Total pressure = 750 mmHg. Vapor pressure of water at $25°\\text{C}$ = 24 mmHg. If the container holds 1.00 L, how many moles of the collected gas are present? (Use $R = 0.0821$ L·atm/mol·K; $1\\text{ atm} = 760\\text{ mmHg}$)`,
            options: [`0.0390 mol`, `0.0403 mol`, `0.0416 mol`, `0.465 mol`],
            correctAnswer: 0,
            yield: 'MEDIUM',
            explanation: `$P_{\\text{gas}} = 750 - 24 = 726\\text{ mmHg} = 726/760 = 0.9553\\text{ atm}$. $n = PV/RT = (0.9553 \\times 1.00)/(0.0821 \\times 298) = 0.9553/24.47 = \\mathbf{0.0390\\text{ mol}}$. The value 0.0403 mol forgets to subtract the water's vapor pressure, 0.0416 mol adds it instead, and 0.465 mol uses 25 instead of 298 K.`
          },
          {
            question: `A 1.00 molal solution of $\\text{NaCl}$ (which dissociates completely: $i = 2$) in water has $K_b = 0.512$ °C/m. What is the boiling point of the solution?`,
            options: [`100.51°C`, `101.02°C`, `101.54°C`, `102.05°C`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `$\\Delta T_b = K_b \\times m \\times i = 0.512 \\times 1.00 \\times 2 = 1.024 \\approx 1.02°\\text{C}$. Boiling point $= 100.00 + 1.02 = \\mathbf{101.02°\\text{C}}$. 100.51°C forgets $i$, while 101.54°C and 102.05°C use $i = 3$ and $i = 4$, more particles than NaCl gives.`
          },
          {
            question: `Electrolysis of $\\text{AlCl}_3$ solution deposits aluminum ($\\text{Al}^{3+} + 3e^- \\to \\text{Al}$, $M = 27.0$ g/mol). A current of 3.00 A flows for 4825 s. What mass of Al is deposited? ($F = 96{,}500$ C/mol)`,
            options: [`0.450 g`, `1.35 g`, `4.05 g`, `12.2 g`],
            correctAnswer: 1,
            yield: 'MEDIUM',
            explanation: `mol $e^- = It/F = (3.00 \\times 4825)/96{,}500 = 14{,}475/96{,}500 = 0.150\\text{ mol}$. mol Al $= 0.150/3 = 0.0500\\text{ mol}$. Mass $= 0.0500 \\times 27.0 = \\mathbf{1.35\\text{ g}}$. 4.05 g forgets to divide by the 3 electrons per $\\text{Al}^{3+}$, 12.2 g multiplies by 3 instead, and 0.450 g divides by 3 twice.`
          },
          {
            question: `A gas mixture contains 1.00 mol He ($M = 4$) and 1.00 mol $\\text{Ar}$ ($M = 40$). Compared to He, how fast does Ar effuse?`,
            options: [
              `Ar effuses 10 times faster`,
              `Ar effuses 3.16 times faster`,
              `He effuses 3.16 times faster`,
              `He effuses 10 times faster`
            ],
            correctAnswer: 2,
            yield: 'MEDIUM',
            explanation: `$\\text{rate}_{\\text{He}}/\\text{rate}_{\\text{Ar}} = \\sqrt{M_{\\text{Ar}}/M_{\\text{He}}} = \\sqrt{40/4} = \\sqrt{10} \\approx 3.16$. **He effuses 3.16 times faster** than Ar. A factor of 10 forgets the square root, and the lighter gas is always the faster one.`
          },
          {
            question: `An experiment produces 15.3 g of water from the combustion of hydrogen. The theoretical yield is 22.5 g. What is the percent yield?`,
            options: [`32.0%`, `147%`, `68.0%`, `6.80%`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `Percent yield $= (\\text{actual}/\\text{theoretical}) \\times 100 = (15.3/22.5) \\times 100 = \\mathbf{68.0\\%}$. 32.0% is the share lost, 147% puts the theoretical yield on top, and 6.80% slips a decimal place.`
          }
        ]
      }
    },
    {
      id: 'st5-summary',
      type: 'text' as const,
      content: `## Stoichiometry — Complete Topic Summary

**Part 1:** Moles, molar mass, Avogadro's number, empirical/molecular formula, combustion analysis.

**Part 2:** Limiting reagent, percent yield, reaction classification (synthesis, decomposition, single/double displacement, combustion).

**Part 3:** Molarity, dilution ($M_1V_1 = M_2V_2$), solution stoichiometry, colligative properties, van 't Hoff factor, net ionic equations, solubility rules, $Q$ vs $K_{sp}$.

**Part 4:** Ideal gas law ($PV=nRT$), combined gas law, Dalton's partial pressures, Graham's law of effusion, real gas deviations, Faraday's law of electrolysis.

**Part 5:** Integrated MCAT practice combining all above topics.

### Most Common MCAT Pitfalls
1. Forgetting to convert °C → K before using gas laws
2. Comparing raw moles to find the limiting reagent instead of dividing each by its stoichiometric coefficient
3. Forgetting van 't Hoff $i$ in colligative property calculations
4. Forgetting to subtract water vapor pressure from the total pressure for gases collected over water
5. Forgetting to divide moles of electrons by the electrons each ion gains or loses in Faraday's law (2 for $\\text{Cu}^{2+}$, 3 for $\\text{Al}^{3+}$)
`
    }
  ]
};
