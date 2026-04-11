export const chemElectronConfigPart5Data = {
  topicSlug: 'electron-configuration',
  sections: [
    {
      id: 'ec5-intro',
      type: 'text' as const,
      content: `# Part 5: Exceptions and Ion Configurations

**Part 5 of 7 — Exceptions & Ion Configurations**

---

### The Two Must-Know Exceptions

| Element | Expected Config | Actual Config | Why? |
|---------|----------------|---------------|------|
| **Cr** (Z=24) | [Ar] 4s² 3d⁴ | **[Ar] 3d⁵ 4s¹** | Half-filled d⁵ is extra stable |
| **Cu** (Z=29) | [Ar] 4s² 3d⁹ | **[Ar] 3d¹⁰ 4s¹** | Fully filled d¹⁰ is extra stable |

And the critical ion rule: **remove electrons from the highest n first** (4s before 3d).

> 🔑 **Why this matters:** These exceptions and the ion formation rule are among the most frequently tested topics on the AP Chemistry exam.

---

### What You'll Master in Part 5
- Recognizing and writing the Cr and Cu exceptions
- Forming cation configurations by removing from the highest n first
- Writing anion configurations by adding electrons
- Identifying isoelectronic species`
    },
    {
      id: 'ec5-exceptions',
      type: 'text' as const,
      content: `## ⚠️ The Two Critical Exceptions

### Chromium (Cr, Z = 24)
**Expected:** [Ar] 4s² 3d⁴  
**Actual:** [Ar] 3d⁵ 4s¹


---

### Copper (Cu, Z = 29)
**Expected:** [Ar] 4s² 3d⁹  
**Actual:** [Ar] 3d¹⁰ 4s¹

**Why?** Half-filled (d⁵) and fully filled (d¹⁰) subshells have **extra stability** due to:
- **Exchange energy:** More favorable electron-electron interactions when orbitals are symmetrically occupied.
- Electrons in the 4s and 3d subshells are very close in energy, so the stabilization from a half-filled or fully filled d subshell outweighs the cost of promoting one electron from 4s.

Other elements in the same columns (Mo, Ag, etc.) show similar exceptions, but **Cr and Cu are the ones you must know for the AP exam**.

> ⚠️ **AP Must-Know:** Cr is [Ar] 3d⁵ 4s¹ (not 4s² 3d⁴) and Cu is [Ar] 3d¹⁰ 4s¹ (not 4s² 3d⁹). Half-filled and fully filled d subshells have extra stability.`
    },
    {
      id: 'ec5-quiz-exceptions',
      type: 'multiple-choice' as const,
      content: `### Exception Check

What is the correct electron configuration for chromium (Cr, Z = 24)?`,
      exercise: {
        questions: [
          {
            question: 'Electron configuration of Cr:',
            options: [
              '[Ar] 4s² 3d⁴',
              '[Ar] 3d⁶',
              '[Ar] 3d⁵ 4s¹',
              '[Ar] 4s¹ 3d⁴'
            ],
            correctAnswer: 2,
            explanation: 'Chromium is an exception: it adopts [Ar] 3d⁵ 4s¹ instead of the expected [Ar] 4s² 3d⁴. The half-filled 3d⁵ configuration provides extra stability from exchange energy.'
          }
        ]
      }
    },
    {
      id: 'ec5-ions',
      type: 'text' as const,
      content: `## 🔋 Electron Configurations of Ions

### Cations (Positive Ions)
When forming cations, electrons are removed from the subshell with the **highest principal quantum number (n)** first.

> ⚠️ **Critical Rule for Transition Metals:** Remove electrons from **4s before 3d**, even though 4s filled first!

---

### Example 1: Fe²⁺ (Z = 26, 24 electrons)

| Step | Action | Result |
|------|--------|--------|
| 1 | Write neutral Fe configuration | [Ar] 4s² 3d⁶ |
| 2 | Identify highest n to remove from | 4s (n = 4) |
| 3 | Remove 2 electrons from 4s | 4s⁰ (both 4s electrons gone) |

**Fe²⁺: [Ar] 3d⁶**

---

### Example 2: Fe³⁺ (Z = 26, 23 electrons)

| Step | Action | Result |
|------|--------|--------|
| 1 | Start from Fe²⁺ | [Ar] 3d⁶ |
| 2 | 4s is already empty — remove from 3d | Remove 1 electron from 3d |
| 3 | Final configuration | [Ar] 3d⁵ |

**Fe³⁺: [Ar] 3d⁵**

> 🔑 **Notice:** Fe³⁺ has a half-filled 3d⁵ subshell, giving it extra stability — this is why Fe³⁺ is a very common ion.

---

### Anions (Negative Ions)
When forming anions, electrons are **added** to the next available subshell.

### Example 3: Cl⁻ (Z = 17, 18 electrons)

| Step | Action | Result |
|------|--------|--------|
| 1 | Write neutral Cl configuration | [Ne] 3s² 3p⁵ |
| 2 | Add 1 electron to 3p | 3p⁵ → 3p⁶ |
| 3 | Final configuration | [Ne] 3s² 3p⁶ |

**Cl⁻: [Ne] 3s² 3p⁶**

> 💡 Cl⁻ has 18 electrons — the same as Argon. They are **isoelectronic**!`
    },
    {
      id: 'ec5-quiz-ions',
      type: 'multiple-choice' as const,
      content: `### Ion Configuration Practice

What is the electron configuration of Cu²⁺?

Recall: Cu (Z = 29) has the configuration [Ar] 3d¹⁰ 4s¹ (exception).`,
      exercise: {
        questions: [
          {
            question: 'Electron configuration of Cu²⁺:',
            options: [
              '[Ar] 3d⁹ 4s⁰',
              '[Ar] 3d⁹',
              '[Ar] 3d⁸ 4s¹',
              '[Ar] 4s² 3d⁷'
            ],
            correctAnswer: 1,
            explanation: 'Cu: [Ar] 3d¹⁰ 4s¹. To form Cu²⁺, remove 2 electrons. First remove the 4s¹ electron (highest n), then remove 1 from 3d: [Ar] 3d⁹. We typically omit "4s⁰" since that subshell is empty.'
          }
        ]
      }
    },
    {
      id: 'ec5-input-ions',
      type: 'input-box' as const,
      content: `### Write Ion Configurations

Write the noble gas shorthand electron configuration for each ion (e.g., [Ar] 3d6). A formatted preview will appear as you type.

Remember: Remove electrons from the highest n first!`,
      exercise: {
        inputs: [
          {
            label: 'Mn²⁺ (Mn: Z = 25)',
            correctAnswer: '[Ar] 3d5',
            explanation: 'Neutral Mn: [Ar] 4s² 3d⁵. Remove 2 electrons from 4s (highest n): [Ar] 3d⁵. The Mn²⁺ ion has a half-filled d subshell, which is very stable.'
          },
          {
            label: 'Zn²⁺ (Zn: Z = 30)',
            correctAnswer: '[Ar] 3d10',
            explanation: 'Neutral Zn: [Ar] 4s² 3d¹⁰. Remove 2 electrons from 4s: [Ar] 3d¹⁰. The Zn²⁺ ion has a completely filled d subshell.'
          }
        ]
      }
    },
    {
      id: 'ec5-dropdown-tricky',
      type: 'dropdown-select' as const,
      content: `### Tricky Ion Problems

These require careful attention to exception rules and ion formation rules.`,
      exercise: {
        dropdowns: [
          {
            label: 'Which ion is isoelectronic with Ar (18 electrons)?',
            options: ['Na⁺', 'Mg²⁺', 'K⁺', 'Fe²⁺'],
            correctIndex: 2,
            explanation: 'K⁺: potassium (Z = 19) loses 1 electron → 18 electrons, same as Ar. Na⁺ has 10 electrons (like Ne), Mg²⁺ has 10 electrons (like Ne), and Fe²⁺ has 24 electrons. Only K⁺ matches Ar\'s 18 electrons.'
          },
          {
            label: 'What is the electron configuration of Cr³⁺?',
            options: ['[Ar] 4s¹ 3d²', '[Ar] 3d³', '[Ar] 3d² 4s¹', '[Ar] 4s² 3d¹'],
            correctIndex: 1,
            explanation: 'Cr: [Ar] 3d⁵ 4s¹ (exception). Remove 3 electrons: first the 4s¹, then 2 from 3d. Result: [Ar] 3d³.'
          }
        ]
      }
    },
    {
      id: 'ec5-summary',
      type: 'text' as const,
      content: `## � Part 5 Summary: Exceptions & Ion Configurations

---

### 🧰 The Two Critical Exceptions

| Element | Expected | Actual | Why |
|---------|----------|--------|-----|
| Cr (Z = 24) | [Ar] 4s² 3d⁴ | [Ar] 3d⁵ 4s¹ | Half-filled d⁵ = extra stability |
| Cu (Z = 29) | [Ar] 4s² 3d⁹ | [Ar] 3d¹⁰ 4s¹ | Fully filled d¹⁰ = extra stability |

---

### 📌 Ion Configuration Rules

| Ion Type | Rule | Example |
|----------|------|---------|
| Cations (+) | Remove from **highest n** first | Fe²⁺: remove 4s² → [Ar] 3d⁶ |
| Anions (−) | Add to next available subshell | Cl⁻: add to 3p → [Ne] 3s² 3p⁶ |
| Isoelectronic | Same e⁻ count = same configuration | Na⁺, F⁻, Ne all have 10 e⁻ |

> ⚠️ **AP Trap:** For transition metal cations, always remove 4s electrons before 3d — even though 4s filled first!

---

### ✅ Your Checklist Before Moving On

- ☐ I know the configurations of Cr and Cu (and why they are exceptions)
- ☐ I can write ion configurations by removing from the highest n first
- ☐ I can identify isoelectronic species
- ☐ I will not mistakenly remove 3d electrons before 4s when forming cations

---

### 🔮 What's Next

In **Part 6**, we explore **orbital diagrams** (box-arrow notation) and the **four quantum numbers** that uniquely identify every electron in an atom.`
    }
  ]
}
