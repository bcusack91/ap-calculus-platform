export const chemPhotoelectronSpectroscopyPart4Data = {
  topicSlug: 'photoelectron-spectroscopy',
  sections: [
    {
      id: 'ps4-intro',
      type: 'text' as const,
      content: `# Core vs Valence Electrons in PES

**Part 4 of 7 — Relative Peak Heights**

---

### Topics in This Part

| Section |
|---------|
| 📖 Definitions |
| 📌 Visual Signature |

> 🔑 **Key Concept:** Mastering this material will strengthen your foundation for both the AP Chemistry exam and more advanced chemistry topics.

---

### What You'll Master in Part 4
- Understanding the core concepts covered in Part 4
- Applying these ideas to solve practice problems
- Building toward AP exam readiness for this topic`
    },
    {
      id: 'ps4-example',
      type: 'text' as const,
      content: `## 🧪 Example: Silicon (Si, Z = 14)

Electron configuration: $1s^{2}$ $2s^{2}$ $2p^{6}$ $3s^{2}$ $3p^{2}$

PES spectrum (left to right):

| Peak | Height | Subshell | Type | Binding Energy |
|------|--------|----------|------|---------------|
| 1 | 2 | $1s^{2}$ | Core | ~189 MJ/mol |
| 2 | 2 | $2s^{2}$ | Core | ~17 MJ/mol |
| 3 | 6 | $2p^{6}$ | Core | ~13 MJ/mol |
| 4 | 2 | $3s^{2}$ | Valence | ~1.1 MJ/mol |
| 5 | 2 | $3p^{2}$ | Valence | ~0.8 MJ/mol |

**Key observations:**
- The **core electrons** (1s, 2s, 2p) have binding energies ranging from ~13 to ~189 MJ/mol
- The **valence electrons** (3s, 3p) have binding energies around ~0.8–1.1 MJ/mol
- There is a **huge gap** between the 2p peak (~13 MJ/mol) and the 3s peak (~1.1 MJ/mol)
- This gap clearly separates core from valence electrons

> 💡 **Tip:** Look for the largest gap between adjacent peaks — everything to the left of that gap is core, everything to the right is valence.`
    },
    {
      id: 'ps4-quiz1',
      type: 'multiple-choice' as const,
      content: `### ✏️ Core vs Valence

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
      content: `## 📌 Core and Valence Across a Period

As you move across a period (e.g., Na → Ar), the number of **core electrons stays the same** while the number of **valence electrons increases**.

For Period 3 elements:
- All have the same core: $1s^{2}$ $2s^{2}$ $2p^{6}$ (10 core electrons)
- Valence electrons increase: Na (1) → Mg (2) → Al (3) → Si (4) → P (5) → S (6) → Cl (7) → Ar (8)

On PES spectra for these elements:
- The **core peaks** shift slightly to the **left** (higher BE) as nuclear charge increases
- The **valence peaks** on the right grow in height as more valence electrons are added
- The **gap** between core and valence remains prominent`
    },
    {
      id: 'ps4-quiz2',
      type: 'multiple-choice' as const,
      content: `### ✏️ Practice Problem

> **Problem:** For an atom with the PES peak heights 2, 2, 6, 2, 6 (from left to right), how many valence electrons does it have?`,
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
            explanation: 'The peaks correspond to $1s^{2}(2)$, $2s^{2}(2)$, $2p^{6}(6)$, $3s^{2}(2)$, $3p^{6}(6)$. This is argon (18 electrons). The valence shell is n = 3, so the valence electrons are in the 3s and 3p subshells: 2 + 6 = 8 valence electrons. The core electrons $(1s^{2} 2s^{2} 2p^{6})$ total 10.'
          }
        ]
      }
    },
    {
      id: 'ps4-input1',
      type: 'input-boxes' as const,
      content: `### ✏️ Identifying Core and Valence

> **Problem:** An element has PES peaks with heights: 2, 2, 6, 2, 3 (from highest to lowest binding energy). The first three peaks are clustered at high binding energies and the last two peaks are at much lower binding energies.`,
      exercise: {
        inputs: [
          {
            label: 'How many core electrons does this atom have?',
            correctAnswer: '10',
            explanation: 'The core electrons are in the high-binding-energy cluster: $1s^{2}(2)$ + $2s^{2}(2)$ + $2p^{6}(6)$ = 10 core electrons.'
          },
          {
            label: 'How many valence electrons does this atom have?',
            correctAnswer: '5',
            explanation: 'The valence electrons are in the low-binding-energy peaks: $3s^{2}(2)$ + $3p^{3}(3)$ = 5 valence electrons.'
          },
          {
            label: 'What element is this? (chemical symbol)',
            correctAnswer: 'P',
            explanation: 'Total electrons = 10 + 5 = 15 → phosphorus (P). Configuration: $1s^{2}$ $2s^{2}$ $2p^{6}$ $3s^{2}$ $3p^{3}$.'
          }
        ]
      }
    },
    {
      id: 'ps4-dropdown1',
      type: 'dropdown-select' as const,
      content: `### ✏️ Conceptual Understanding

Consider the PES spectrum of oxygen (O, Z = 8) with configuration $1s^{2}$ $2s^{2}$ $2p^{4}$.`,
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
            explanation: 'For oxygen in Period 2, the core electrons are only the $1s^{2}$ electrons. The $2s^{2}$ and $2p^{4}$ electrons are all valence electrons because they are in the outermost principal energy level (n = 2).'
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
      content: `## 📋 Part 4 Summary: Core vs. Valence Electrons

---

### 🧪 Core vs. Valence on PES

| Feature | Core Electrons | Valence Electrons |
|---------|---------------|-------------------|
| Position on spectrum | **Left** (high BE) | **Right** (low BE) |
| Role | Not involved in bonding | Participate in bonding & reactions |
| Across a period | Number stays **constant** | Number **increases** |

---

### 📌 Core Electrons by Period

| Period | Core Configuration | # Core $e^{-}$ |
|--------|-------------------|------------|
| 2 | $1s^{2}$ | 2 |
| 3 | $1s^{2}$ $2s^{2}$ $2p^{6}$ | 10 |
| 4 | $1s^{2}$ $2s^{2}$ $2p^{6}$ $3s^{2}$ $3p^{6}$ | 18 |

> 💡 A **large gap** in binding energy on the spectrum often marks the boundary between core and valence electrons.

---

### ✅ Your Checklist Before Moving On

- ☐ I can identify core vs. valence peaks on a PES spectrum
- ☐ I know that the # of valence electrons determines chemical properties
- ☐ I understand why core electrons stay constant across a period
- ☐ I can spot the BE gap that separates core from valence

---

### 🔮 What's Next

In **Part 5**, we explore how PES connects to **periodic trends**, especially **effective nuclear charge** ($Z_{eff}$).`
    }
  ]
}
