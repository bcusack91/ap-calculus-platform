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
            explanation: `$\\Delta G° = \\Delta H° - T\\Delta S° = -80{,}000 - (298)(120) = -80{,}000 - 35{,}760 = -115{,}760\\text{ J} \\approx \\mathbf{-115.8\\text{ kJ}}$.`
          },
          {
            question: `An electrochemical reaction transfers 3 mol electrons and has $E°_{\\text{cell}} = 0.400$ V. What is $\\Delta G°$? ($F = 96{,}500$ C/mol)`,
            options: [
              `$+115.8$ kJ`,
              `$-115.8$ kJ`,
              `$+32.2$ kJ`,
              `$-32.2$ kJ`
            ],
            correctAnswer: 1,
            explanation: `$\\Delta G° = -nFE° = -(3)(96{,}500)(0.400) = -115{,}800\\text{ J} = \\mathbf{-115.8\\text{ kJ}}$. Positive $E°_{\\text{cell}}$ → spontaneous galvanic cell → negative $\\Delta G°$.`
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
            explanation: `$\\Delta G = \\Delta H - T\\Delta S$. When $\\Delta H < 0$ and $\\Delta S > 0$, both terms contribute to making $\\Delta G < 0$ regardless of $T$. Option C: $\\Delta G = -50{,}000 - T(+100)$ — always negative at any $T > 0$.`
          },
          {
            question: `How much heat must be removed to freeze 36.0 g of water at 0°C? ($\\Delta H_{\\text{fus}} = 6.01$ kJ/mol; $M_{\\text{H}_2\\text{O}} = 18.0$ g/mol)`,
            options: [`6.01 kJ`, `12.02 kJ`, `24.04 kJ`, `36.06 kJ`],
            correctAnswer: 1,
            explanation: `Moles = $36.0/18.0 = 2.00\\text{ mol}$. Freezing is exothermic: heat released = $2.00 \\times 6.01 = \\mathbf{12.02\\text{ kJ}}$. (Heat is removed from water to surroundings.)`
          },
          {
            question: `A reaction has $\\Delta G° = +10.0$ kJ at 298 K. What is the equilibrium constant $K$? ($R = 8.314$ J/mol·K; $e^{-4.03} \\approx 0.018$)`,
            options: [`$K \\approx 55$`, `$K \\approx 0.018$`, `$K \\approx 1.0$`, `$K = 0$`],
            correctAnswer: 1,
            explanation: `$\\ln K = -\\Delta G°/RT = -10{,}000/(8.314 \\times 298) = -10{,}000/2477 = -4.04$. $K = e^{-4.04} \\approx \\mathbf{0.018}$. Since $\\Delta G° > 0$, $K < 1$ (reactants favored).`
          },
          {
            question: `What is the boiling point of a solution made by dissolving 2.00 mol of $\\text{CaCl}_2$ (which dissociates completely: $i = 3$) in 1.00 kg of water? ($K_b = 0.512$ °C/m)`,
            options: [`100.51°C`, `101.02°C`, `102.05°C`, `103.07°C`],
            correctAnswer: 3,
            explanation: `$\\Delta T_b = K_b \\times m \\times i = 0.512 \\times 2.00 \\times 3 = 3.07°\\text{C}$. Boiling point $= 100.00 + 3.07 = \\mathbf{103.07°\\text{C}}$.`
          },
          {
            question: `On a phase diagram, which point represents the conditions where all three phases of a substance can coexist in equilibrium?`,
            options: [
              `The critical point`,
              `The triple point`,
              `Any point on the solid-liquid boundary`,
              `The standard boiling point`
            ],
            correctAnswer: 1,
            explanation: `The **triple point** is the unique $T$ and $P$ where solid, liquid, and gas phases are all in equilibrium simultaneously. The critical point is where the gas-liquid distinction disappears above a certain $T$ and $P$.`
          },
          {
            question: `The reaction $\\text{A}(g) \\to 2\\text{B}(g)$ is endothermic. At low temperature, $\\Delta G > 0$. Which combination correctly explains why the reaction becomes spontaneous at high temperature?`,
            options: [
              `At high T, entropy term $T\\Delta S$ becomes large enough to overcome positive $\\Delta H$`,
              `At high T, $\\Delta H$ decreases and becomes negative`,
              `At high T, $K$ decreases making the reaction spontaneous`,
              `At high T, $\\Delta S$ decreases because gases condense`
            ],
            correctAnswer: 0,
            explanation: `$\\Delta G = \\Delta H - T\\Delta S$. For an endothermic reaction ($\\Delta H > 0$) producing more gas ($\\Delta S > 0$): at high enough $T$, the $T\\Delta S$ term exceeds $\\Delta H$, making $\\Delta G < 0$ and the reaction spontaneous.`
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
`
    }
  ]
};
