export const chemPhotoelectronSpectroscopyPart2Data = {
  topicSlug: 'photoelectron-spectroscopy',
  sections: [
    {
      id: 'ps2-intro',
      type: 'text' as const,
      content: `# Reading PES Spectra

Now that you understand how PES works, let's learn how to **read and interpret** the spectra it produces. A PES spectrum is a graph that displays all the information about the binding energies and number of electrons in an atom.

## 📌 Axes of a PES Spectrum

- **X-axis: Binding Energy** — Measured in megajoules per mole (MJ/mol) or electron volts (eV). The x-axis runs from **high binding energy on the left** to **low binding energy on the right**.
- **Y-axis: Relative Number of Electrons** — The height of each peak indicates the **number of electrons** in that subshell.

> ⚠️ **Important**: The x-axis is reversed compared to most graphs — high values are on the LEFT. This is a common source of confusion!`
    },
    {
      id: 'ps2-peaks',
      type: 'text' as const,
      content: `## 📌 Understanding Peaks

Each **peak** in a PES spectrum corresponds to a **subshell** (1s, 2s, 2p, 3s, etc.).


---

### Peak Position (Left-Right)
- Peaks on the **far left** = highest binding energy = electrons **closest to the nucleus** (core electrons)
- Peaks on the **far right** = lowest binding energy = electrons **farthest from the nucleus** (valence electrons)


---

### Peak Height (Relative)
- The **height** of a peak is proportional to the **number of electrons** in that subshell
- A peak that is **3 times taller** than another contains **3 times as many electrons**
- For example, a 2p subshell (6 electrons) produces a peak 3 times taller than a 2s subshell (2 electrons)


---

### Example: Lithium (Li, Z = 3)
Electron configuration: 1s² 2s¹

A PES spectrum for lithium shows:
- **Peak 1** (far left, highest BE): Relative height of 2 → corresponds to **1s²** (2 electrons)
- **Peak 2** (far right, lowest BE): Relative height of 1 → corresponds to **2s¹** (1 electron)`
    },
    {
      id: 'ps2-quiz1',
      type: 'multiple-choice' as const,
      content: `### Check Your Understanding

On a PES spectrum, the x-axis displays binding energy. How is it oriented?`,
      exercise: {
        questions: [
          {
            text: 'The x-axis of a PES spectrum shows:',
            options: [
              'Low binding energy on the left, high binding energy on the right',
              'High binding energy on the left, low binding energy on the right',
              'Binding energy increases from bottom to top',
              'Binding energy is not displayed on PES spectra'
            ],
            correctAnswer: 1,
            explanation: 'The x-axis of a PES spectrum runs from high binding energy on the left to low binding energy on the right. This is the reverse of most conventional graphs and is a common source of mistakes.'
          }
        ]
      }
    },
    {
      id: 'ps2-nitrogen',
      type: 'text' as const,
      content: `## 📌 Reading a Spectrum: Nitrogen (Z = 7)

Nitrogen has the electron configuration: **1s² 2s² 2p³**

Its PES spectrum shows **three peaks**:

| Peak | Position | Relative Height | Subshell |
|------|----------|----------------|----------|
| 1 | Far left (highest BE) | 2 | 1s² |
| 2 | Middle | 2 | 2s² |
| 3 | Far right (lowest BE) | 3 | 2p³ |

**Notice:**
- The 1s peak has the **highest** binding energy because those electrons are closest to the nucleus
- The 2s and 2p peaks have **lower** binding energies
- The 2p peak is **taller** than the 2s peak because it holds more electrons (3 vs 2)
- The total electron count: 2 + 2 + 3 = 7, which matches nitrogen's atomic number`
    },
    {
      id: 'ps2-quiz2',
      type: 'multiple-choice' as const,
      content: `### Practice: Reading Spectra

A PES spectrum shows three peaks with relative heights of 2, 2, and 6 (from left to right, i.e., from highest to lowest binding energy). How many total electrons does this atom have?`,
      exercise: {
        questions: [
          {
            text: 'The total number of electrons is:',
            options: [
              '6',
              '8',
              '10',
              '12'
            ],
            correctAnswer: 2,
            explanation: 'The total number of electrons is the sum of the relative heights: 2 + 2 + 6 = 10 electrons. This atom has 10 electrons, which corresponds to neon (Ne) with the configuration 1s² 2s² 2p⁶.'
          }
        ]
      }
    },
    {
      id: 'ps2-input1',
      type: 'input-boxes' as const,
      content: `### Spectrum Analysis

A PES spectrum for an unknown element shows four peaks with the following relative heights (listed from highest to lowest binding energy):

Peak 1: height = 2
Peak 2: height = 2
Peak 3: height = 6
Peak 4: height = 1`,
      exercise: {
        inputs: [
          {
            label: 'How many total electrons does this atom have?',
            correctAnswer: '11',
            explanation: 'Total electrons = 2 + 2 + 6 + 1 = 11 electrons.'
          },
          {
            label: 'What is the atomic number of this element?',
            correctAnswer: '11',
            explanation: 'For a neutral atom, the number of electrons equals the atomic number. With 11 electrons, this is sodium (Na, Z = 11).'
          }
        ]
      }
    },
    {
      id: 'ps2-dropdown1',
      type: 'dropdown-select' as const,
      content: `### Interpreting Peak Heights

Consider a PES spectrum with peaks at relative heights of 2, 2, 6, 2, and 3 (from left to right).`,
      exercise: {
        dropdowns: [
          {
            text: 'Which subshell does the tallest peak (height 6) correspond to?',
            options: ['1s', '2s', '2p', '3s', '3p'],
            correctIndex: 2,
            explanation: 'The peaks from left to right correspond to subshells in order: 1s (2), 2s (2), 2p (6), 3s (2), 3p (3). The tallest peak with 6 electrons corresponds to the 2p subshell, which can hold a maximum of 6 electrons.'
          },
          {
            text: 'What element does this spectrum represent?',
            options: ['Nitrogen (Z=7)', 'Neon (Z=10)', 'Aluminum (Z=13)', 'Phosphorus (Z=15)', 'Chlorine (Z=17)'],
            correctIndex: 3,
            explanation: 'Total electrons: 2 + 2 + 6 + 2 + 3 = 15. This corresponds to phosphorus (P, Z = 15) with configuration 1s² 2s² 2p⁶ 3s² 3p³.'
          }
        ]
      }
    },
    {
      id: 'ps2-summary',
      type: 'text' as const,
      content: `## 📋 Part 2 Summary

Key points for reading PES spectra:

1. **X-axis**: Binding energy — high on the left, low on the right
2. **Y-axis**: Relative number of electrons — peak height tells you how many electrons are in each subshell
3. **Each peak** = one subshell (1s, 2s, 2p, 3s, 3p, etc.)
4. **Left-most peak** = highest binding energy = innermost electrons (1s)
5. **Right-most peak** = lowest binding energy = outermost (valence) electrons
6. **Total electrons** = sum of all peak heights = atomic number (for neutral atoms)

In the next part, we will connect PES spectra directly to electron configurations.`
    }
  ]
}
