export const mcatSolutionsGasesPart3Data = {
  topicSlug: 'mcat-general-chemistry-solutions-gases-mcat',
  sections: [
    {
      id: 'st5-intro',
      type: 'text' as const,
      content: `# Solutions, Gases & Electrolysis

**Part 3 of 3 — Mixed MCAT Review**

This section mixes the lesson's topics the way an MCAT passage does. Each question may draw on solutions, colligative properties, gas laws, electrolysis, or several at once.

## High-Yield Checklist Before You Practice

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
      content: `**Mixed Review — MCAT-Style Questions** 🎯`,
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
          }
        ]
      }
    },
    {
      id: 'st5-summary',
      type: 'text' as const,
      content: `## Solutions, Gases & Electrolysis — Complete Topic Summary

**Part 1:** Molarity, dilution ($M_1V_1 = M_2V_2$), solution stoichiometry, colligative properties, van 't Hoff factor, net ionic equations, solubility rules, $Q$ vs $K_{sp}$.

**Part 2:** Ideal gas law ($PV=nRT$), combined gas law, Dalton's partial pressures, Graham's law of effusion, real gas deviations, Faraday's law of electrolysis.

**Part 3:** Integrated MCAT practice combining all above topics.

## Key Takeaways — Part 3

- **Moles are the hub.** $n = MV$ for solutions, $n = PV/RT$ for gases and mol $e^- = It/F$ for electrolysis all feed the same balanced-equation mole ratio.
- **Count particles, not formulas.** Colligative effects scale with $i \\times m$ (or $i \\times M$ for $\\Pi$): $\\text{CaCl}_2$ counts three times, glucose once.
- **Kelvin and litres first.** Every gas-law temperature is in kelvin and every $n = MV$ volume is in litres before any arithmetic.
- **Precipitates need $Q > K_{sp}$.** The solubility rules say what usually happens; when concentrations are given, the numbers decide.

**Common traps**

- **°C in gas laws.** 27°C is 300 K, not 27; using the Celsius value shrinks $nRT$ about elevenfold.
- **Forgetting $i$.** 1.0 m NaCl raises the boiling point by $2K_b$, not $K_b$; $\\text{Al}_2(\\text{SO}_4)_3$ counts five particles.
- **Wet gas at full pressure.** A gas collected over water is at $P_{\\text{atm}} - P_{\\text{H}_2\\text{O}}$; subtract the vapor pressure before $PV = nRT$.
- **Electrons are not atoms.** Divide mol $e^-$ by the electrons each ion needs: 2 for $\\text{Cu}^{2+}$, 3 for $\\text{Al}^{3+}$, 1 for $\\text{Ag}^+$.

**Next up:** the *Thermodynamics* lesson — enthalpy and Hess's law, entropy, Gibbs free energy, and phase changes.
`
    }
  ]
};
