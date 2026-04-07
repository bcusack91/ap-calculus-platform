export const chemPhotoelectronSpectroscopyPart7Data = {
  topicSlug: 'photoelectron-spectroscopy',
  sections: [
    {
      id: 'ps7-intro',
      type: 'text' as const,
      content: `# Synthesis & AP Review

This final part brings together everything about Photoelectron Spectroscopy. We will review the key concepts, connect PES to ionization energy, address common mistakes, and practice AP exam-style questions.

## 🔄 Key Concepts Review

1. **PES measures binding energies** of electrons using $BE = E_{photon} - KE$
2. **Each peak** = one subshell; **peak height** = number of electrons
3. **X-axis**: binding energy (high → low, left → right)
4. **Core electrons** = high BE (left); **valence electrons** = low BE (right)
5. **Across a period**: all binding energies increase due to increasing $Z_{eff}$
6. **Element identification**: sum peak heights = atomic number`
    },
    {
      id: 'ps7-ionization',
      type: 'text' as const,
      content: `## 🔗 Connecting PES to Ionization Energy

The **first ionization energy (IE₁)** of an element is directly related to the PES spectrum:

$$IE_1 = \\text{binding energy of the outermost (valence) electron}$$

The **rightmost peak** on a PES spectrum (lowest binding energy) corresponds to the outermost subshell. The binding energy of this peak equals the first ionization energy.


---

### Example:
- Sodium (Na): The rightmost peak is the 3s¹ peak with BE ≈ 0.50 MJ/mol → IE₁ ≈ 0.50 MJ/mol ≈ 496 kJ/mol
- Chlorine (Cl): The rightmost peak is the 3p⁵ peak with BE ≈ 1.25 MJ/mol → IE₁ ≈ 1.25 MJ/mol ≈ 1251 kJ/mol


---

### Successive Ionization Energies
PES data can also help explain **successive ionization energies**. The large jump in IE values that occurs when you begin removing core electrons is clearly visible as the **gap** between valence and core peaks on PES spectra.`
    },
    {
      id: 'ps7-quiz1',
      type: 'multiple-choice' as const,
      content: `### AP Review Question 1

The PES spectrum of an element shows the rightmost peak at a binding energy of 1.09 MJ/mol. This value corresponds to which property of the element?`,
      exercise: {
        questions: [
          {
            text: 'The binding energy of the rightmost peak equals:',
            options: [
              'The electronegativity of the element',
              'The first ionization energy of the element',
              'The electron affinity of the element',
              'The atomic radius of the element'
            ],
            correctAnswer: 1,
            explanation: 'The rightmost peak on a PES spectrum represents the outermost (most easily removed) electrons. The binding energy of this peak equals the first ionization energy — the minimum energy needed to remove one electron from the gaseous atom.'
          }
        ]
      }
    },
    {
      id: 'ps7-mistakes',
      type: 'text' as const,
      content: `## 📌 Common Mistakes on the AP Exam

### Mistake 1: Confusing the X-Axis Direction
❌ Assuming binding energy increases left to right (like most graphs)
✅ Remember: binding energy is **high on the left, low on the right**


---

### Mistake 2: Forgetting the 3d Subshell
❌ Writing peaks as 2, 2, 6, 2, 6, 2, 6 for elements with Z > 20
✅ Include the 3d peak (up to height 10) between 3p and 4s for transition metals


---

### Mistake 3: Confusing Peak Height with Binding Energy
❌ Thinking taller peaks mean higher binding energy
✅ Peak **height** = number of electrons; peak **position** (left/right) = binding energy


---

### Mistake 4: Not Matching Total Electrons to Atomic Number
❌ Identifying an element without verifying the total electron count
✅ Always **sum all peak heights** and confirm it matches the expected atomic number


---

### Mistake 5: Ignoring Subshell Exceptions
❌ Expecting perfectly smooth IE trends across a period
✅ Remember the **B/Be** and **O/N** exceptions due to subshell transitions and electron pairing`
    },
    {
      id: 'ps7-quiz2',
      type: 'multiple-choice' as const,
      content: `### AP Review Question 2

Two elements, X and Y, are in the same period. Element X has PES peak heights of 2, 2, 6, 2, 3, and Element Y has PES peak heights of 2, 2, 6, 2, 4. Which statement is correct?`,
      exercise: {
        questions: [
          {
            text: 'Compare elements X and Y:',
            options: [
              'X has a higher first ionization energy than Y',
              'Y has a higher first ionization energy than X',
              'X and Y have the same first ionization energy',
              'Cannot be determined from PES data alone'
            ],
            correctAnswer: 0,
            explanation: 'Element X has 2+2+6+2+3 = 15 electrons (phosphorus, P) and Element Y has 2+2+6+2+4 = 16 electrons (sulfur, S). Although Zeff increases from P to S, phosphorus actually has a higher first ionization energy than sulfur. This is because P has a half-filled 3p³ subshell (extra stability), while S has a 3p⁴ configuration with one paired electron that experiences electron-electron repulsion, making it easier to remove. This P > S exception is a classic AP Chemistry topic.'
          }
        ]
      }
    },
    {
      id: 'ps7-quiz3',
      type: 'multiple-choice' as const,
      content: `### AP Review Question 3

A student is given PES data for an unknown element:
- Peak 1: BE = 76.0 MJ/mol, relative height = 2
- Peak 2: BE = 8.8 MJ/mol, relative height = 2
- Peak 3: BE = 6.8 MJ/mol, relative height = 3

The student is asked to identify the element. Which reasoning is correct?`,
      exercise: {
        questions: [
          {
            text: 'The correct identification is:',
            options: [
              'Lithium (Z = 3) because it has 3 peaks',
              'Boron (Z = 5) because it has 2 + 2 + 3 = 7 electrons total',
              'Nitrogen (Z = 7) because it has 2 + 2 + 3 = 7 electrons and configuration 1s² 2s² 2p³',
              'Carbon (Z = 6) because the third peak has 3 electrons'
            ],
            correctAnswer: 2,
            explanation: 'Total electrons = 2 + 2 + 3 = 7, which corresponds to nitrogen (Z = 7). The three peaks correspond to 1s² (2 electrons, highest BE), 2s² (2 electrons, middle BE), and 2p³ (3 electrons, lowest BE). This matches nitrogen\'s electron configuration of 1s² 2s² 2p³.'
          }
        ]
      }
    },
    {
      id: 'ps7-input1',
      type: 'input-boxes' as const,
      content: `### AP Review Question 4

Use the following PES data for an unknown element:

| Peak | Binding Energy (MJ/mol) | Relative Height |
|------|------------------------|----------------|
| A | 200.2 | 2 |
| B | 23.4 | 2 |
| C | 18.7 | 6 |
| D | 2.45 | 2 |
| E | 1.09 | 2 |

*Round all answers to 3 significant figures.*
      `,
      exercise: {
        inputs: [
          {
            label: 'What element is this? (chemical symbol)',
            correctAnswer: 'Si',
            explanation: 'Peak heights: 2 + 2 + 6 + 2 + 2 = 14 electrons → silicon (Si, Z = 14). Configuration: 1s²(A), 2s²(B), 2p⁶(C), 3s²(D), 3p²(E).'
          },
          {
            label: 'What is the first ionization energy (in MJ/mol) based on the PES data?',
            correctAnswer: '1.09',
            explanation: 'The first ionization energy corresponds to the binding energy of the rightmost (outermost) peak, which is Peak E at 1.09 MJ/mol. This is the energy required to remove the most loosely bound electron.'
          },
          {
            label: 'How many core electrons does this atom have?',
            correctAnswer: '10',
            explanation: 'The core electrons are those in the inner shells: 1s²(2) + 2s²(2) + 2p⁶(6) = 10 core electrons. The valence electrons in 3s² and 3p² total 4.'
          }
        ]
      }
    },
    {
      id: 'ps7-dropdown1',
      type: 'dropdown-select' as const,
      content: `### AP Review Question 5

Consider the successive ionization energies of magnesium (Mg):
IE₁ = 0.74 MJ/mol, IE₂ = 1.45 MJ/mol, IE₃ = 7.73 MJ/mol

There is a large jump between IE₂ and IE₃.`,
      exercise: {
        dropdowns: [
          {
            text: 'What does this large jump in IE indicate about the electron being removed for IE₃?',
            options: [
              'It is a valence electron in the 3s subshell',
              'It is a core electron in the 2p subshell',
              'It is a paired electron experiencing extra repulsion',
              'It indicates a change in orbital shape'
            ],
            correctIndex: 1,
            explanation: 'Magnesium has configuration 1s² 2s² 2p⁶ 3s². The first two electrons removed are the 3s² valence electrons (IE₁ and IE₂). The third electron must come from the 2p⁶ core, which has a much higher binding energy. This large jump from ~1.45 to ~7.73 MJ/mol corresponds to crossing from valence to core electrons — clearly visible as the gap between the 3s and 2p peaks on a PES spectrum.'
          },
          {
            text: 'On a PES spectrum for Mg, which peak corresponds to the first ionization energy?',
            options: ['The leftmost peak (1s)', 'The 2s peak', 'The 2p peak', 'The rightmost peak (3s)'],
            correctIndex: 3,
            explanation: 'The first ionization energy always corresponds to the rightmost peak on the PES spectrum, which represents the outermost electrons with the lowest binding energy. For magnesium, this is the 3s peak.'
          }
        ]
      }
    },
    {
      id: 'ps7-final',
      type: 'multiple-choice' as const,
      content: `### Final Challenge

An element has a PES spectrum with 7 peaks. The peak heights from left to right are: 2, 2, 6, 2, 6, 2, 10. What is this element, and what is special about it?`,
      exercise: {
        questions: [
          {
            text: 'Identify the element and its significance:',
            options: [
              'Zinc (Zn) — it has a completely filled 3d subshell',
              'Iron (Fe) — it is the most common transition metal',
              'Copper (Cu) — it has an anomalous electron configuration',
              'Nickel (Ni) — it is magnetic'
            ],
            correctAnswer: 0,
            explanation: 'Peaks: 1s²(2), 2s²(2), 2p⁶(6), 3s²(2), 3p⁶(6), 4s²(2), 3d¹⁰(10). Total = 2 + 2 + 6 + 2 + 6 + 2 + 10 = 30 electrons → zinc (Zn, Z = 30). Zinc is notable for having a completely filled 3d subshell (3d¹⁰), giving it unique stability among the transition metals.'
          }
        ]
      }
    },
    {
      id: 'ps7-summary',
      type: 'text' as const,
      content: `## 📋 Complete PES Summary

Congratulations on completing the Photoelectron Spectroscopy unit! Here is everything you need to know for the AP exam:


---

### Essential Equations
- $E_{photon} = BE + KE$ → $BE = E_{photon} - KE$
- $Z_{eff} = Z - S$
- $IE_1$ = binding energy of the rightmost PES peak


---

### Reading Spectra
- X-axis: BE (high left, low right)
- Y-axis: relative number of electrons
- Each peak = one subshell
- Total peak heights = atomic number


---

### Periodic Trends
- Across a period: all BEs increase (higher $Z_{eff}$)
- Exceptions at B/Be and O/N due to subshell effects
- Core vs valence gap visible on spectra


---

### Common AP Tasks
1. Identify elements from PES data
2. Predict PES spectra from electron configurations
3. Connect PES to ionization energies
4. Explain periodic trends using $Z_{eff}$
5. Recognize subshell exceptions`
    }
  ]
}
