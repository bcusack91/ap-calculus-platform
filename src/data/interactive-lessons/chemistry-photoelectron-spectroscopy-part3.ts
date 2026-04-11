export const chemPhotoelectronSpectroscopyPart3Data = {
  topicSlug: 'photoelectron-spectroscopy',
  sections: [
    {
      id: 'ps3-intro',
      type: 'text' as const,
      content: `# Connecting PES to Electron Configuration

**Part 3 of 7 — Binding Energy & Subshells**

---

### Topics in This Part

| Section |
|---------|
| 🔗 The Connection |
| Example: Four peaks with heights 2, 2, 6, 2 |
| Within the Same Atom: |
| Typical Binding Energy Ranges: |
| Spacing Between Peaks |

> 🔑 **Key Concept:** Mastering this material will strengthen your foundation for both the AP Chemistry exam and more advanced chemistry topics.

---

### What You'll Master in Part 3
- Understanding the core concepts covered in Part 3
- Applying these ideas to solve practice problems
- Building toward AP exam readiness for this topic`
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
Total electrons: 2 + 2 + 6 + 2 = 12 → **Magnesium (Mg)**

> 🔑 **Key Concept:** Each PES peak maps directly to one subshell in the electron configuration. Reading peaks left-to-right gives you the configuration from innermost to outermost subshell.`
    },
    {
      id: 'ps3-quiz1',
      type: 'multiple-choice' as const,
      content: `### ✏️ Identify the Element

> **Problem:** A PES spectrum shows five peaks with relative heights (from highest to lowest binding energy): 2, 2, 6, 2, 5.
>
> What element does this represent?`,
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
- There is a **smaller gap** between subshells within the same principal level (e.g., 2s vs 2p)

> 🔑 **Key Concept:** Within the same atom, binding energy follows the order: 1s > 2s > 2p > 3s > 3p > 4s > 3d. Large gaps between peaks indicate different principal energy levels.`
    },
    {
      id: 'ps3-quiz2',
      type: 'multiple-choice' as const,
      content: `### ✏️ Electron Configuration from PES

> **Problem:** A PES spectrum for a neutral atom shows peaks with heights 2, 2, 6, 2, 6, 2. What is the electron configuration?`,
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
      content: `### ✏️ Practice: Element Identification

> **Problem:** A PES spectrum shows the following peaks (from highest to lowest BE):
>
> - Peak 1: relative height 2
> - Peak 2: relative height 2
> - Peak 3: relative height 6
> - Peak 4: relative height 2
> - Peak 5: relative height 4`,
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
      content: `### ✏️ Subshell Assignment

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
      content: `## 📋 Part 3 Summary: PES ↔ Electron Configuration

---

### 🧪 How to Identify an Element from PES

| Step | Action | Example |
|------|--------|---------|
| 1 | Assign subshells to each peak (left → right) | 1s, 2s, 2p, 3s, 3p |
| 2 | Read the peak height for each | 2, 2, 6, 2, 5 |
| 3 | Sum all electrons | 2+2+6+2+5 = 17 |
| 4 | Match to atomic number | Z = 17 → **Chlorine** |

---

### 📌 Binding Energy Order

$$1s > 2s > 2p > 3s > 3p > 4s > 3d > 4p > \\dots$$

> ⚠️ For transition metals, the 3d peak may appear with **higher BE** than 4s on PES spectra.

---

### ✅ Your Checklist Before Moving On

- ☐ I can convert PES peaks into an electron configuration
- ☐ I can identify elements from PES data by summing electrons
- ☐ I know the binding energy order for subshells
- ☐ I understand the 3d/4s ordering special case for transition metals

---

### 🔮 What's Next

In **Part 4**, we will explore the distinction between **core and valence electrons** in PES spectra.`
    }
  ]
}
