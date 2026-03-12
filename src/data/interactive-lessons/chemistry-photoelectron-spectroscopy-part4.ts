export const chemPhotoelectronSpectroscopyPart4Data = {
  topicSlug: 'photoelectron-spectroscopy',
  sections: [
    {
      id: 'ps4-intro',
      type: 'text' as const,
      content: `# Core vs Valence Electrons in PES

PES spectra make the distinction between **core electrons** and **valence electrons** visually obvious. Understanding this distinction is critical for predicting chemical behavior and interpreting spectra.

## Definitions

- **Core electrons**: Inner-shell electrons that are NOT involved in chemical bonding. They have **high binding energies** and appear on the **left side** of PES spectra.
- **Valence electrons**: Outermost electrons that participate in chemical bonding. They have **low binding energies** and appear on the **right side** of PES spectra.

## Visual Signature

On a PES spectrum, you will typically see a **large gap** in binding energy between the core electrons and the valence electrons. This gap makes it easy to visually separate the two groups.`
    },
    {
      id: 'ps4-example',
      type: 'text' as const,
      content: `## Example: Silicon (Si, Z = 14)

Electron configuration: 1s² 2s² 2p⁶ 3s² 3p²

PES spectrum (left to right):

| Peak | Height | Subshell | Type | Binding Energy |
|------|--------|----------|------|---------------|
| 1 | 2 | 1s² | Core | ~189 MJ/mol |
| 2 | 2 | 2s² | Core | ~17 MJ/mol |
| 3 | 6 | 2p⁶ | Core | ~13 MJ/mol |
| 4 | 2 | 3s² | Valence | ~1.1 MJ/mol |
| 5 | 2 | 3p² | Valence | ~0.8 MJ/mol |

**Key observations:**
- The **core electrons** (1s, 2s, 2p) have binding energies ranging from ~13 to ~189 MJ/mol
- The **valence electrons** (3s, 3p) have binding energies around ~0.8–1.1 MJ/mol
- There is a **huge gap** between the 2p peak (~13 MJ/mol) and the 3s peak (~1.1 MJ/mol)
- This gap clearly separates core from valence electrons`
    },
    {
      id: 'ps4-quiz1',
      type: 'multiple-choice' as const,
      content: `### Core vs Valence

In a PES spectrum, where do valence electrons appear?`,
      exercise: {
        questions: [
          {
            text: 'Valence electrons appear:',
            options: [
              'On the far left of the spectrum (highest binding energy)',
              'In the middle of the spectrum',
              'On the far right of the spectrum (lowest binding energy)',
              'Valence electrons do not appear on PES spectra'
            ],
            correctAnswer: 2,
            explanation: 'Valence electrons have the lowest binding energies because they are farthest from the nucleus and most easily removed. On a PES spectrum (where binding energy decreases left to right), valence electrons appear on the far right.'
          }
        ]
      }
    },
    {
      id: 'ps4-period',
      type: 'text' as const,
      content: `## Core and Valence Across a Period

As you move across a period (e.g., Na → Ar), the number of **core electrons stays the same** while the number of **valence electrons increases**.

For Period 3 elements:
- All have the same core: 1s² 2s² 2p⁶ (10 core electrons)
- Valence electrons increase: Na (1) → Mg (2) → Al (3) → Si (4) → P (5) → S (6) → Cl (7) → Ar (8)

On PES spectra for these elements:
- The **core peaks** shift slightly to the **left** (higher BE) as nuclear charge increases
- The **valence peaks** on the right grow in height as more valence electrons are added
- The **gap** between core and valence remains prominent`
    },
    {
      id: 'ps4-quiz2',
      type: 'multiple-choice' as const,
      content: `### Practice Problem

For an atom with the PES peak heights 2, 2, 6, 2, 6 (from left to right), how many valence electrons does it have?`,
      exercise: {
        questions: [
          {
            text: 'The number of valence electrons is:',
            options: [
              '2',
              '6',
              '8',
              '18'
            ],
            correctAnswer: 2,
            explanation: 'The peaks correspond to 1s²(2), 2s²(2), 2p⁶(6), 3s²(2), 3p⁶(6). This is argon (18 electrons). The valence shell is n = 3, so the valence electrons are in the 3s and 3p subshells: 2 + 6 = 8 valence electrons. The core electrons (1s² 2s² 2p⁶) total 10.'
          }
        ]
      }
    },
    {
      id: 'ps4-input1',
      type: 'input-boxes' as const,
      content: `### Identifying Core and Valence

An element has PES peaks with heights: 2, 2, 6, 2, 3 (from highest to lowest binding energy). The first three peaks are clustered at high binding energies and the last two peaks are at much lower binding energies.`,
      exercise: {
        inputs: [
          {
            label: 'How many core electrons does this atom have?',
            correctAnswer: '10',
            explanation: 'The core electrons are in the high-binding-energy cluster: 1s²(2) + 2s²(2) + 2p⁶(6) = 10 core electrons.'
          },
          {
            label: 'How many valence electrons does this atom have?',
            correctAnswer: '5',
            explanation: 'The valence electrons are in the low-binding-energy peaks: 3s²(2) + 3p³(3) = 5 valence electrons.'
          },
          {
            label: 'What element is this? (chemical symbol)',
            correctAnswer: 'P',
            explanation: 'Total electrons = 10 + 5 = 15 → phosphorus (P). Configuration: 1s² 2s² 2p⁶ 3s² 3p³.'
          }
        ]
      }
    },
    {
      id: 'ps4-dropdown1',
      type: 'dropdown-select' as const,
      content: `### Conceptual Understanding

Consider the PES spectrum of oxygen (O, Z = 8) with configuration 1s² 2s² 2p⁴.`,
      exercise: {
        dropdowns: [
          {
            text: 'How many peaks appear in the PES spectrum of oxygen?',
            options: ['2', '3', '4', '8'],
            correctIndex: 1,
            explanation: 'Oxygen has three occupied subshells: 1s, 2s, and 2p. Each subshell produces one peak, so there are 3 peaks total.'
          },
          {
            text: 'Which electrons in oxygen are classified as core electrons?',
            options: ['1s only', '1s and 2s', '2s and 2p', '1s, 2s, and 2p'],
            correctIndex: 0,
            explanation: 'For oxygen in Period 2, the core electrons are only the 1s² electrons. The 2s² and 2p⁴ electrons are all valence electrons because they are in the outermost principal energy level (n = 2).'
          },
          {
            text: 'Which peak would be the tallest?',
            options: ['1s peak (2 electrons)', '2s peak (2 electrons)', '2p peak (4 electrons)'],
            correctIndex: 2,
            explanation: 'The 2p peak would be the tallest because it contains 4 electrons, while the 1s and 2s peaks each contain only 2 electrons. Peak height is proportional to the number of electrons in that subshell.'
          }
        ]
      }
    },
    {
      id: 'ps4-summary',
      type: 'text' as const,
      content: `## Part 4 Summary

Core vs valence electrons in PES:

1. **Core electrons** appear on the **left** (high binding energy) — they are inner-shell electrons not involved in bonding
2. **Valence electrons** appear on the **right** (low binding energy) — they are outermost electrons that participate in bonding
3. A **large gap** in binding energy often separates core from valence peaks
4. Across a period, the number of **core electrons stays constant** while **valence electrons increase**
5. For **Period 2 elements**, only 1s electrons are core; for **Period 3 elements**, 1s² 2s² 2p⁶ are core
6. The number of **valence electrons** determines the element's chemical properties

Next, we will explore how PES connects to periodic trends, especially effective nuclear charge.`
    }
  ]
}
