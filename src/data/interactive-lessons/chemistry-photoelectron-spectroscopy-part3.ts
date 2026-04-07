export const chemPhotoelectronSpectroscopyPart3Data = {
  topicSlug: 'photoelectron-spectroscopy',
  sections: [
    {
      id: 'ps3-intro',
      type: 'text' as const,
      content: `# Connecting PES to Electron Configuration

One of the most powerful aspects of PES is that it provides **direct experimental evidence** for the electron configuration model. Each peak in a PES spectrum corresponds exactly to a subshell in the electron configuration.

## 🔗 The Connection

| Electron Configuration | PES Peaks (left to right) |
|------------------------|--------------------------|
| 1s² | One peak, height 2 |
| 1s² 2s² | Two peaks, heights 2, 2 |
| 1s² 2s² 2p⁴ | Three peaks, heights 2, 2, 4 |
| 1s² 2s² 2p⁶ 3s¹ | Four peaks, heights 2, 2, 6, 1 |

The peaks appear in order from **highest binding energy** (innermost subshell) to **lowest binding energy** (outermost subshell), matching the order of subshells from the nucleus outward.`
    },
    {
      id: 'ps3-mapping',
      type: 'text' as const,
      content: `## 📌 Mapping Peaks to Subshells

To identify an element from its PES spectrum:

**Step 1:** Count the number of peaks — this tells you how many occupied subshells there are.

**Step 2:** Read the relative height of each peak — this tells you how many electrons are in each subshell.

**Step 3:** Assign subshells in order (1s, 2s, 2p, 3s, 3p, 4s, 3d, 4p, ...).

**Step 4:** Write the electron configuration.

**Step 5:** Sum the electrons to find the atomic number and identify the element.


---

### Example: Four peaks with heights 2, 2, 6, 2

- Peak 1 (height 2) → 1s²
- Peak 2 (height 2) → 2s²
- Peak 3 (height 6) → 2p⁶
- Peak 4 (height 2) → 3s²

Electron configuration: 1s² 2s² 2p⁶ 3s²
Total electrons: 2 + 2 + 6 + 2 = 12 → **Magnesium (Mg)**`
    },
    {
      id: 'ps3-quiz1',
      type: 'multiple-choice' as const,
      content: `### Identify the Element

A PES spectrum shows five peaks with relative heights (from highest to lowest binding energy): 2, 2, 6, 2, 5.

What element does this represent?`,
      exercise: {
        questions: [
          {
            text: 'Identify the element:',
            options: [
              'Nitrogen (N)',
              'Phosphorus (P)',
              'Chlorine (Cl)',
              'Bromine (Br)'
            ],
            correctAnswer: 2,
            explanation: 'The peaks correspond to: 1s²(2), 2s²(2), 2p⁶(6), 3s²(2), 3p⁵(5). Total = 2 + 2 + 6 + 2 + 5 = 17 electrons. Element with Z = 17 is chlorine (Cl).'
          }
        ]
      }
    },
    {
      id: 'ps3-binding-energy',
      type: 'text' as const,
      content: `## 📌 Relative Binding Energies

The binding energies of subshells follow predictable patterns:


---

### Within the Same Atom:
- **1s** has the **highest** binding energy (closest to nucleus)
- Each successive subshell has a **lower** binding energy
- Within the same principal energy level, the order is: s > p > d > f


---

### Typical Binding Energy Ranges:
| Subshell | Approximate BE Range |
|----------|---------------------|
| 1s | Very high (tens to hundreds of MJ/mol) |
| 2s | High |
| 2p | Moderately high |
| 3s | Moderate |
| 3p | Lower |
| Valence | Lowest (typically < 2 MJ/mol) |


---

### Spacing Between Peaks
- There is typically a **large gap** between peaks from different principal energy levels (e.g., 1s vs 2s)
- There is a **smaller gap** between subshells within the same principal level (e.g., 2s vs 2p)`
    },
    {
      id: 'ps3-quiz2',
      type: 'multiple-choice' as const,
      content: `### Electron Configuration from PES

A PES spectrum for a neutral atom shows peaks with heights 2, 2, 6, 2, 6, 2. What is the electron configuration?`,
      exercise: {
        questions: [
          {
            text: 'The electron configuration is:',
            options: [
              '1s² 2s² 2p⁶ 3s² 3p⁶',
              '1s² 2s² 2p⁶ 3s² 3p⁶ 4s²',
              '1s² 2s² 2p⁶ 3s² 3p⁴ 3d²',
              '1s² 2s² 2p⁶ 3s² 3p⁶ 3d²'
            ],
            correctAnswer: 1,
            explanation: 'Six peaks with heights 2, 2, 6, 2, 6, 2 correspond to: 1s²(2), 2s²(2), 2p⁶(6), 3s²(2), 3p⁶(6), 4s²(2). Total = 20 electrons = calcium (Ca). The 4s subshell fills before 3d.'
          }
        ]
      }
    },
    {
      id: 'ps3-input1',
      type: 'input-boxes' as const,
      content: `### Practice: Element Identification

A PES spectrum shows the following peaks (from highest to lowest BE):
- Peak 1: relative height 2
- Peak 2: relative height 2
- Peak 3: relative height 6
- Peak 4: relative height 2
- Peak 5: relative height 4`,
      exercise: {
        inputs: [
          {
            label: 'How many total electrons does this atom have?',
            correctAnswer: '16',
            explanation: 'Total electrons = 2 + 2 + 6 + 2 + 4 = 16.'
          },
          {
            label: 'What is the chemical symbol for this element?',
            correctAnswer: 'S',
            explanation: 'With 16 electrons (Z = 16), the element is sulfur (S). Its electron configuration is 1s² 2s² 2p⁶ 3s² 3p⁴.'
          }
        ]
      }
    },
    {
      id: 'ps3-dropdown1',
      type: 'dropdown-select' as const,
      content: `### Subshell Assignment

An atom has the PES peaks: 2, 2, 6, 2, 6, 2, 1 (from highest to lowest binding energy).`,
      exercise: {
        dropdowns: [
          {
            text: 'What subshell does the 7th peak (height 1) correspond to?',
            options: ['3p', '3d', '4s', '4p'],
            correctIndex: 1,
            explanation: 'The seven peaks correspond to: 1s²(2), 2s²(2), 2p⁶(6), 3s²(2), 3p⁶(6), 4s²(2), 3d¹(1). After the 4s subshell fills, the next subshell to fill is 3d. Note: in PES, 3d appears after 4s because 3d has a higher binding energy position relative to 4s in transition metals — but the filling order puts 4s before 3d. On the PES spectrum for scandium, the 3d peak appears to the left of 4s because 3d electrons have higher binding energy.'
          },
          {
            text: 'What element is this?',
            options: ['Potassium (K)', 'Calcium (Ca)', 'Scandium (Sc)', 'Titanium (Ti)'],
            correctIndex: 2,
            explanation: 'Total electrons = 2 + 2 + 6 + 2 + 6 + 2 + 1 = 21. This is scandium (Sc, Z = 21) with configuration 1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹.'
          }
        ]
      }
    },
    {
      id: 'ps3-summary',
      type: 'text' as const,
      content: `## 📋 Part 3 Summary

Connecting PES to electron configuration:

1. **Each peak** in a PES spectrum corresponds to **one subshell** in the electron configuration
2. **Peak height** = number of electrons in that subshell
3. **Peaks are ordered** from highest BE (innermost subshell) to lowest BE (outermost subshell)
4. **To identify an element**: assign subshells to peaks, sum electrons, find atomic number
5. **Binding energy order** within an atom: 1s > 2s > 2p > 3s > 3p > 4s > 3d > ...
6. For **transition metals**, the 3d peak may appear with higher BE than 4s on PES spectra

Next, we will explore the distinction between core and valence electrons in PES spectra.`
    }
  ]
}
