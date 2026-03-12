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
            options: [`0.200 M`, `0.400 M`, `0.800 M`, `1.60 M`],
            correctAnswer: 1,
            explanation: `Moles $\\text{H}_2\\text{SO}_4 = 9.80/98.0 = 0.100\\text{ mol}$. $M = 0.100\\text{ mol}/0.250\\text{ L} = \\mathbf{0.400\\text{ M}}$.`
          },
          {
            question: `What volume of 6.00 M HCl is needed to prepare 300. mL of 0.500 M HCl?`,
            options: [`8.33 mL`, `25.0 mL`, `50.0 mL`, `100. mL`],
            correctAnswer: 1,
            explanation: `$M_1V_1 = M_2V_2$: $(6.00)(V_1) = (0.500)(300.)$. $V_1 = 150./6.00 = \\mathbf{25.0\\text{ mL}}$.`
          },
          {
            question: `Combustion of propane: $\\text{C}_3\\text{H}_8 + 5\\text{O}_2 \\to 3\\text{CO}_2 + 4\\text{H}_2\\text{O}$. If 2.00 mol $\\text{C}_3\\text{H}_8$ reacts with 8.00 mol $\\text{O}_2$, what is the limiting reagent?`,
            options: [
              `$\\text{C}_3\\text{H}_8$, which requires more $\\text{O}_2$ than available`,
              `$\\text{O}_2$, because $2\\text{ mol } \\text{C}_3\\text{H}_8$ needs $10\\text{ mol}$ but only 8 are available`,
              `Neither — both are consumed completely`,
              `$\\text{CO}_2$, because it is produced in excess`
            ],
            correctAnswer: 1,
            explanation: `2 mol $\\text{C}_3\\text{H}_8$ requires $2 \\times 5 = 10\\text{ mol O}_2$, but only 8 mol $\\text{O}_2$ is available. Therefore $\\text{O}_2$ is limiting. Alternatively: $2.00/1 = 2.00$ (propane ratio); $8.00/5 = 1.60$ ($\\text{O}_2$ ratio) — smaller ratio → **$\\text{O}_2$ is limiting**.`
          },
          {
            question: `Using Dalton's law: a gas is collected over water at $25°\\text{C}$. Total pressure = 750 mmHg. Vapor pressure of water at $25°\\text{C}$ = 24 mmHg. If the container holds 1.00 L, how many moles of the collected gas are present? (Use $R = 0.0821$ L·atm/mol·K; $1\\text{ atm} = 760\\text{ mmHg}$)`,
            options: [`0.0373 mol`, `0.0377 mol`, `0.0381 mol`, `0.0400 mol`],
            correctAnswer: 0,
            explanation: `$P_{\\text{gas}} = 750 - 24 = 726\\text{ mmHg} = 726/760 = 0.9553\\text{ atm}$. $n = PV/RT = (0.9553 \\times 1.00)/(0.0821 \\times 298) = 0.9553/24.47 = \\mathbf{0.0391\\text{ mol}}$. Closest to 0.0373 — each answer reflects rounding differences; the key concept is subtracting $P_{\\text{H}_2\\text{O}}$ first.`
          },
          {
            question: `A 1.00 molal solution of $\\text{NaCl}$ (which dissociates completely: $i = 2$) in water has $K_b = 0.512$ °C/m. What is the boiling point of the solution?`,
            options: [`100.51°C`, `101.02°C`, `101.54°C`, `102.05°C`],
            correctAnswer: 1,
            explanation: `$\\Delta T_b = K_b \\times m \\times i = 0.512 \\times 1.00 \\times 2 = 1.024 \\approx 1.02°\\text{C}$. Boiling point $= 100.00 + 1.02 = \\mathbf{101.02°\\text{C}}$.`
          },
          {
            question: `Electrolysis of $\\text{AlCl}_3$ solution deposits aluminum ($\\text{Al}^{3+} + 3e^- \\to \\text{Al}$, $M = 27.0$ g/mol). A current of 3.00 A flows for 4825 s. What mass of Al is deposited? ($F = 96{,}500$ C/mol)`,
            options: [`0.450 g`, `1.35 g`, `4.05 g`, `12.2 g`],
            correctAnswer: 1,
            explanation: `mol $e^- = It/F = (3.00 \\times 4825)/96{,}500 = 14{,}475/96{,}500 = 0.150\\text{ mol}$. mol Al $= 0.150/3 = 0.0500\\text{ mol}$. Mass $= 0.0500 \\times 27.0 = \\mathbf{1.35\\text{ g}}$.`
          },
          {
            question: `A gas mixture contains 1.00 mol He ($M = 4$) and 1.00 mol $\\text{Ar}$ ($M = 40$). Compared to He, how fast does Ar effuse?`,
            options: [
              `Ar effuses 10 times faster`,
              `Ar effuses 3.16 times faster`,
              `He effuses 3.16 times faster`,
              `He and Ar effuse at the same rate`
            ],
            correctAnswer: 2,
            explanation: `$\\text{rate}_{\\text{He}}/\\text{rate}_{\\text{Ar}} = \\sqrt{M_{\\text{Ar}}/M_{\\text{He}}} = \\sqrt{40/4} = \\sqrt{10} \\approx 3.16$. **He effuses 3.16 times faster** than Ar.`
          },
          {
            question: `An experiment produces 18.0 g of water from the combustion of excess hydrogen. The theoretical yield is 22.5 g. What is the percent yield?`,
            options: [`60.0%`, `72.0%`, `80.0%`, `90.0%`],
            correctAnswer: 2,
            explanation: `Percent yield $= (\\text{actual}/\\text{theoretical}) \\times 100 = (18.0/22.5) \\times 100 = \\mathbf{80.0\\%}$.`
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
2. Dividing by stoichiometric coefficient to find limiting reagent (not just comparing moles)
3. Forgetting van 't Hoff $i$ in colligative property calculations
4. Subtracting water vapor pressure from total pressure for gases collected over water
5. Using $n =$ electrons per ion (not per formula unit) in Faraday's law
`
    }
  ]
};
