export const mcatThermoPart5Data = {
  topicSlug: 'mcat-general-chemistry-thermodynamics-mcat',
  sections: [
    {
      id: 'thermo5-intro',
      type: 'text' as const,
      content: `# Thermodynamics

**Part 5 of 5 — Mixed MCAT Review**

## High-Yield Checklist

- ✅ $\\Delta H$: exothermic (−) releases heat; endothermic (+) absorbs heat
- ✅ Hess's Law: $\\Delta H$ is a state function; add reactions algebraically
- ✅ $\\Delta S > 0$: more disorder (gas formed, dissolution, mixing, heating)
- ✅ $\\Delta G = \\Delta H - T\\Delta S$: negative = spontaneous
- ✅ $\\Delta G° = -RT\\ln K = -nFE°_{\\text{cell}}$
- ✅ Phase transitions: exothermic going toward solid; endothermic going toward gas
- ✅ Heating curve: plateaus at phase transitions ($q = n\\Delta H$); slopes = $q = mc\\Delta T$
- ✅ Colligative properties: $\\Delta T_b = K_b m i$; $\\Delta T_f = K_f m i$; $\\Pi = iMRT$
`
    },
    {
      id: 'thermo5-quiz',
      type: 'multiple-choice' as const,
      content: `**Mixed Thermodynamics — MCAT-Style Questions** 🎯`,
      exercise: {
        questions: [
          {
            question: `A reaction has $\\Delta H° = -80$ kJ and $\\Delta S° = +120$ J/K at 298 K. What is $\\Delta G°$?`,
            options: [`−80 kJ`, `−115.8 kJ`, `−44 kJ`, `+115.8 kJ`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `$\\Delta G° = \\Delta H° - T\\Delta S° = -80{,}000 - (298)(120) = -80{,}000 - 35{,}760 = -115{,}760\\text{ J} \\approx \\mathbf{-115.8\\text{ kJ}}$. $-80$ kJ ignores the $T\\Delta S$ term, $-44$ kJ adds $T\\Delta S$ instead of subtracting it, and $+115.8$ kJ flips the sign of the whole result.`
          },
          {
            question: `An electrochemical reaction transfers 3 mol electrons and has $E°_{\\text{cell}} = 0.500$ V. What is $\\Delta G°$? ($F = 96{,}500$ C/mol)`,
            options: [
              `$+144.8$ kJ`,
              `$-144.8$ kJ`,
              `$+48.3$ kJ`,
              `$-48.3$ kJ`
            ],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `$\\Delta G° = -nFE° = -(3)(96{,}500)(0.500) = -144{,}750\\text{ J} \\approx \\mathbf{-144.8\\text{ kJ}}$. Positive $E°_{\\text{cell}}$ → spontaneous galvanic cell → negative $\\Delta G°$. $48.3$ kJ drops $n$ (it is the value for one electron), and the positive values miss the minus sign in $-nFE°$.`
          },
          {
            question: `Which reaction is ALWAYS spontaneous at all temperatures?`,
            options: [
              `$\\Delta H = -50$ kJ; $\\Delta S = -100$ J/K`,
              `$\\Delta H = +50$ kJ; $\\Delta S = +100$ J/K`,
              `$\\Delta H = -50$ kJ; $\\Delta S = +100$ J/K`,
              `$\\Delta H = +50$ kJ; $\\Delta S = -100$ J/K`
            ],
            correctAnswer: 2,
            yield: 'ULTRA_HIGH',
            explanation: `$\\Delta G = \\Delta H - T\\Delta S$. When $\\Delta H < 0$ and $\\Delta S > 0$, both terms contribute to making $\\Delta G < 0$ regardless of $T$. For $\\Delta H = -50$ kJ and $\\Delta S = +100$ J/K: $\\Delta G = -50{,}000 - T(+100)$ — always negative at any $T > 0$.`
          },
          {
            question: `How much heat must be removed to freeze 36.0 g of water at 0°C? ($\\Delta H_{\\text{fus}} = 6.01$ kJ/mol; $M_{\\text{H}_2\\text{O}} = 18.0$ g/mol)`,
            options: [`6.01 kJ`, `12.02 kJ`, `24.04 kJ`, `36.06 kJ`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `Moles = $36.0/18.0 = 2.00\\text{ mol}$. Freezing is exothermic: heat released = $2.00 \\times 6.01 = \\mathbf{12.02\\text{ kJ}}$. (Heat is removed from water to surroundings.) $6.01$ kJ is the heat for one mole only; $24.04$ and $36.06$ kJ correspond to 4 and 6 mol, which $36.0$ g of water is not.`
          },
          {
            question: `A reaction has $\\Delta G° = +10.0$ kJ at 298 K. What is the equilibrium constant $K$? ($R = 8.314$ J/mol·K; $e^{4.04} \\approx 57$)`,
            options: [`$K \\approx 57$`, `$K \\approx 0.018$`, `$K \\approx 0.996$`, `$K \\approx 0.0001$`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `$\\ln K = -\\Delta G°/RT = -10{,}000/(8.314 \\times 298) = -10{,}000/2477 = -4.04$. $K = e^{-4.04} = 1/e^{4.04} \\approx 1/57 \\approx \\mathbf{0.018}$. Since $\\Delta G° > 0$, $K < 1$ (reactants favored). $57$ drops the minus sign, $0.996$ leaves $\\Delta G°$ in kJ, and $0.0001$ treats $-4.04$ as a base-10 logarithm.`
          },
          {
            question: `What is the boiling point of a solution made by dissolving 2.00 mol of $\\text{CaCl}_2$ (which dissociates completely: $i = 3$) in 1.00 kg of water? ($K_b = 0.512$ °C/m)`,
            options: [`100.51°C`, `101.02°C`, `102.05°C`, `103.07°C`],
            correctAnswer: 3,
            yield: 'HIGH',
            explanation: `$\\Delta T_b = K_b \\times m \\times i = 0.512 \\times 2.00 \\times 3 = 3.07°\\text{C}$. Boiling point $= 100.00 + 3.07 = \\mathbf{103.07°\\text{C}}$. $101.02$°C ignores dissociation ($i = 1$), $102.05$°C counts only two particles per formula unit ($i = 2$), and $100.51$°C also uses 1 mol instead of 2.`
          },
          {
            question: `Ice at −1°C is compressed at constant temperature. What happens?`,
            options: [
              `It stays solid, because pressure raises the melting point`,
              `It melts: water's melting line slopes negative`,
              `It sublimes, because the added pressure favors the gas`,
              `Nothing happens until the pressure reaches the triple point`
            ],
            correctAnswer: 1,
            yield: 'MEDIUM',
            explanation: `Water's solid–liquid line has a negative slope: ice is less dense than liquid water, so raising the pressure favors the denser liquid, and enough pressure lowers the melting point below −1°C. The ice melts. Pressure raises the melting point for most substances, but not water; added pressure favors denser phases, never the gas; and the triple point is a single low-pressure point, not a threshold for compression.`
          },
          {
            question: `The reaction $\\text{A}(g) \\to 2\\text{B}(g)$ is endothermic. At low temperature, $\\Delta G > 0$. Which statement explains why the reaction becomes spontaneous at high temperature?`,
            options: [
              `The $T\\Delta S$ term grows until it outweighs $\\Delta H$`,
              `$\\Delta H$ shrinks and turns negative as the temperature rises`,
              `$K$ falls as the temperature rises, which favors the products`,
              `$\\Delta S$ falls because the gases condense back into liquid`
            ],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `$\\Delta G = \\Delta H - T\\Delta S$. For an endothermic reaction ($\\Delta H > 0$) producing more gas ($\\Delta S > 0$): at high enough $T$, the $T\\Delta S$ term exceeds $\\Delta H$, making $\\Delta G < 0$ and the reaction spontaneous. $\\Delta H$ stays roughly constant and positive; a smaller $K$ would favor reactants, not products; and condensing gases would lower $\\Delta S$, making the reaction less favorable.`
          }
        ]
      }
    },
    {
      id: 'thermo5-summary',
      type: 'text' as const,
      content: `## Thermodynamics — Complete Topic Summary

**Part 1:** Enthalpy, exothermic/endothermic, calorimetry ($q = mc\\Delta T$), Hess's Law, standard enthalpies of formation.

**Part 2:** Entropy, predicting $\\text{sign}(\\Delta S)$, First/Second/Third Laws, entropy at phase transitions, spontaneity matrix.

**Part 3:** Gibbs free energy ($\\Delta G = \\Delta H - T\\Delta S$), relationship to $K_{eq}$ ($\\Delta G° = -RT\\ln K$), relationship to cell potential ($\\Delta G° = -nFE°$), coupled reactions.

**Part 4:** Phase changes (endo/exothermic), heating curves, specific heats of water, phase diagrams, triple point, critical point, colligative properties review.

**Part 5:** Integrated MCAT practice.

### Most Tested MCAT Thermodynamics Concepts
1. $\\Delta G = 0$ at equilibrium or phase transition temperature
2. $\\Delta G°, K, E°_{\\text{cell}}$ are all related: $-nFE° = \\Delta G° = -RT\\ln K$
3. Spontaneous at all T: when $\\Delta H < 0$ and $\\Delta S > 0$
4. Heating curve plateaus — never confuse with temperature changes
5. Phase transition: $T_{\\text{transition}} = \\Delta H/\\Delta S$
6. Colligative properties depend on number of particles, not identity

### Key Takeaways — Part 5

- **Three signs agree.** $\\Delta G° < 0$, $K > 1$ and $E°_{\\text{cell}} > 0$ all say a reaction is product-favored as written.
- **Spontaneous at all $T$.** Only $\\Delta H < 0$ with $\\Delta S > 0$; same-sign pairs switch at $T = \\Delta H/\\Delta S$.
- **Heat bookkeeping.** $q = mc\\Delta T$ on slopes, $q = n\\Delta H$ on plateaus, and flip the sign from solution to reaction.
- **Count the particles.** Colligative shifts scale with $i \\times m$: $2.00$ m $\\text{CaCl}_2$ ($i = 3$) raises the boiling point $3.07$°C.

**Common traps**

- **Unconverted units.** Convert J/K to kJ/K before computing $\\Delta H - T\\Delta S$; an unconverted term is off by 1000.
- **Celsius in the formulas.** Every $T$ in $\\Delta G = \\Delta H - T\\Delta S$ and $-RT\\ln K$ is in kelvin.
- **Dropping $n$ in $-nFE°$.** Multiply by the moles of electrons transferred; leaving out $n$ shrinks $\\Delta G°$ by that factor.
- **Triple vs. critical point.** The triple point is where three phases coexist; the critical point is where liquid and gas merge.
`
    }
  ]
};
