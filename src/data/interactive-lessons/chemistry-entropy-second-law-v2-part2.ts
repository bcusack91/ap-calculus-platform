export const chemEntropySecondLawV2Part2Data = {
  topicSlug: 'entropy-second-law',
  sections: [
    {
      id: 'en2v2-intro',
      type: 'text' as const,
      content: `
# 🔬 Comparing Entropies

**Part 2 of 7 — Phase, Volume, and Temperature at the Particle Level**

In Part 1 you learned that entropy measures the dispersal of matter and energy. Now you'll use particle-level reasoning to decide **which of two samples has more entropy** and **how large an entropy change is**, the skill CED 9.1.A asks for.
      `
    },
    {
      id: 'en2v2-same-substance',
      type: 'text' as const,
      content: `
## ⚖️ Comparing Two Samples of the Same Substance

| Compare | Higher entropy | Particle-level reason |
|---------|----------------|-----------------------|
| Same gas, same T, 1 L vs. 10 L | The 10 L sample | Molecules move within a larger space |
| Same gas, same V, 300 K vs. 400 K | The 400 K sample | Kinetic energies are spread over a broader range |
| $\\text{H}_2\\text{O}(s)$ vs. $\\text{H}_2\\text{O}(l)$ at 0 °C | The liquid | Molecules move past one another instead of vibrating in place |
| $\\text{H}_2\\text{O}(l)$ vs. $\\text{H}_2\\text{O}(g)$ at 100 °C | The gas | Molecules are far apart and move freely through a large volume |
| 1 mol vs. 2 mol of the same gas at the same T and P | 2 mol | Entropy is extensive: twice the matter, twice the entropy |

> 🔑 **Key Concept:** Always connect your claim to a particle-level reason: freedom of motion, volume available, or the spread of kinetic energies.


---

### How Big Is the Change?

Phase changes do not all change entropy by the same amount.

| Phase change | Typical size of $\\Delta S$ | Why |
|--------------|----------------------------|-----|
| Melting (solid → liquid) | Moderate increase | Particles gain mobility but stay close together |
| Vaporization (liquid → gas) | **Large** increase | Particles spread through a vastly larger volume |
| Sublimation (solid → gas) | Largest increase | Combines both changes |

For water, $\\Delta S_{\\text{vap}}$ (about 109 J/(mol·K)) is roughly five times $\\Delta S_{\\text{fus}}$ (about 22 J/(mol·K)).
      `
    },
    {
      id: 'en2v2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Comparison Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Two flasks each hold 1.0 mol of Ar(g) at 298 K. Flask X has a volume of 2.0 L and flask Y has a volume of 20.0 L. Which statement is correct?',
            options: [
              'X has more entropy because its molecules collide more often',
              'Y has more entropy because its molecules have more space',
              'They have equal entropy because the amount and temperature are equal',
              'X has more entropy because its pressure is higher'
            ],
            correctAnswer: 1,
            explanation: 'At the same temperature, a gas spread through a larger volume is more dispersed, so Y has more entropy (CED 9.1.A.1). Collision frequency and pressure do not raise entropy, and volume matters even when the amount and temperature are the same.'
          },
          {
            question: 'Why does a sample of solid copper have more entropy at 100 °C than at 25 °C?',
            options: [
              'The copper atoms move to a larger volume when heated',
              'The kinetic energies of the atoms are spread over a broader range',
              'Some copper melts at 100 °C, forming a liquid',
              'The copper reacts with air to form more moles of particles'
            ],
            correctAnswer: 1,
            explanation: 'Heating broadens the distribution of vibrational energies of the atoms, so energy is more dispersed and entropy increases (CED 9.1.A.2). The expansion of a solid is tiny, copper melts at over 1000 °C, and no reaction is needed.'
          },
          {
            question: 'Which phase change has the largest entropy increase per mole for a given substance?',
            options: [
              'Melting',
              'Vaporization',
              'Freezing',
              'Condensation'
            ],
            correctAnswer: 1,
            explanation: 'Vaporization takes particles from a close-packed liquid to a gas that fills a vastly larger volume, a much larger gain in dispersal than melting. Freezing and condensation decrease entropy.'
          }
        ]
      }
    },
    {
      id: 'en2v2-different-substances',
      type: 'text' as const,
      content: `
## 📌 Comparing Different Substances

When two substances are in the **same phase at the same temperature**, these features usually mean higher standard molar entropy:

| Feature | Example | Reason |
|---------|---------|--------|
| More atoms per molecule | $\\text{C}_3\\text{H}_8(g)$ > $\\text{CH}_4(g)$ | More ways for the molecule to move and vibrate, so energy is more dispersed |
| Less rigid solid | Graphite > diamond | Layers that slide allow more motion than a rigid 3D network |

> ⚠️ **Warning:** Phase usually outweighs everything else. Even a small gas molecule (for example $\\text{H}_2(g)$, 131 J/(mol·K)) has more entropy than a large liquid or solid such as $\\text{H}_2\\text{O}(l)$ (70 J/(mol·K)).
      `
    },
    {
      id: 'en2v2-compare-drill',
      type: 'input-boxes' as const,
      content: `
**Which Has More Entropy?** 🧮

Type the formula (or description) of the sample with the HIGHER entropy.

**1)** 1 mol $\\text{O}_2(g)$ at 300 K or 1 mol $\\text{O}_2(g)$ at 500 K, same volume (type **300** or **500**)

**2)** 1 mol $\\text{CH}_4(g)$ or 1 mol $\\text{C}_2\\text{H}_6(g)$ at 298 K and 1 atm (type the formula)

**3)** 1 mol $\\text{Br}_2(l)$ or 1 mol $\\text{Br}_2(g)$ at 59 °C (type **l** or **g**)
      `,
      exercise: {
        questions: [{ question: '(1)', answer: '500', acceptableAnswers: ['500', '500 K'] }, { question: '(2)', answer: 'C2H6', acceptableAnswers: ['C2H6', 'ethane'] }, { question: '(3)', answer: 'g', acceptableAnswers: ['g', 'gas', 'Br2(g)'] }],
        hint1: 'Higher temperature means a broader spread of kinetic energies.',
        hint2: 'Which molecule has more atoms that can move and vibrate?',
        hint3: 'Compare the freedom of motion in a liquid and a gas.',
        explanation: '1) 500 K: energy is more dispersed at the higher temperature. 2) $\\text{C}_2\\text{H}_6$: more atoms per molecule, more ways to disperse energy. 3) The gas: its molecules move freely through a far larger volume.'
      }
    },
    {
      id: 'en2v2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Comparison Concepts** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'At constant temperature, compressing a gas into a smaller volume makes its entropy',
            options: ['increase', 'decrease', 'stay the same', 'become zero']
          },
          {
            label: 'Compared with $\\Delta S_{\\text{fus}}$, the value of $\\Delta S_{\\text{vap}}$ for the same substance is usually',
            options: ['much smaller', 'about the same', 'much larger', 'negative']
          },
          {
            label: 'In the same phase and at the same temperature, a molecule with more atoms usually has',
            options: ['lower entropy', 'higher entropy', 'zero entropy', 'the same entropy']
          }
        ],
        correctAnswers: ['decrease', 'much larger', 'higher entropy'],
        hint1: 'The molecules have less space to move in.',
        hint2: 'Liquid → gas is a much bigger change in dispersal than solid → liquid.',
        hint3: 'More atoms means more ways for energy to be dispersed in the molecule.',
        explanation: 'Compression confines the gas, lowering entropy. Vaporization increases dispersal far more than melting. Larger molecules have more ways to store and disperse energy, so higher entropy.'
      }
    },
    {
      id: 'en2v2-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Check** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Which sample has the greatest entropy?',
            options: [
              '1 mol of $H_{2}O(s)$ at 0°C',
              '1 mol of $H_{2}O(l)$ at 25°C',
              '1 mol of $H_{2}O(g)$ at 100°C',
              '1 mol of $H_{2}O(l)$ at 100°C'
            ],
            correctAnswer: 2,
            explanation: 'The gas is the most dispersed: its molecules move freely through a far larger volume and at the highest temperature. Both liquid samples and the ice have less entropy.'
          },
          {
            question: 'A student claims that 1 mol of He(g) in a 5 L flask at 300 K has the same entropy as 1 mol of He(g) in a 5 L flask at 600 K, because the volume is unchanged. Which is the best response?',
            options: [
              'Correct, because entropy depends only on volume',
              'The 600 K sample has more entropy, since its energy is more dispersed',
              'The 300 K sample has more entropy, since its particles move more slowly',
              'Correct, because helium is a monatomic gas'
            ],
            correctAnswer: 1,
            explanation: 'Entropy depends on the dispersal of energy as well as matter. At 600 K the kinetic energies are spread over a broader range, so entropy is higher (CED 9.1.A.2). Slower particles mean less dispersed energy, and being monatomic does not make entropy temperature-independent.'
          }
        ]
      }
    }
  ]
}
