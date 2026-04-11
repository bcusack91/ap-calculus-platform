export const chemElectronConfigPart4Data = {
  topicSlug: 'electron-configuration',
  sections: [
    {
      id: 'ec4-intro',
      type: 'text' as const,
      content: `# 📦 Noble Gas (Shorthand) Notation

**Part 4 of 7 — Simplifying Electron Configurations**

---

### The Problem

Writing out full configurations gets long fast:

| Element | Z | Full Configuration | That's a lot... |
|---------|---|--------------------|-----------------|
| Na | 11 | 1s² 2s² 2p⁶ 3s¹ | 4 subshells |
| Fe | 26 | 1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d⁶ | 7 subshells |
| Br | 35 | 1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁵ | 8 subshells |

### The Solution

Replace the inner-shell electrons with the **preceding noble gas in brackets**:

| Element | Full Configuration | → | Shorthand |
|---------|--------------------|----|-----------|
| Na | 1s² 2s² 2p⁶ 3s¹ | → | **[Ne] 3s¹** |
| Fe | 1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d⁶ | → | **[Ar] 4s² 3d⁶** |
| Br | 1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁵ | → | **[Ar] 4s² 3d¹⁰ 4p⁵** |

> 🔑 **Why this matters:** Noble gas shorthand lets you focus on the **valence electrons** — the ones that actually determine chemical behavior and bonding.

---

### What You'll Master in Part 4
- Identifying the correct noble gas core for any element
- Converting between full and shorthand notation
- Recognizing that shorthand highlights the chemically important electrons`
    },
    {
      id: 'ec4-noble-gases',
      type: 'text' as const,
      content: `## 📌 The Noble Gases

| Noble Gas | Symbol | Atomic Number | Full Configuration |
|-----------|--------|---------------|--------------------|
| Helium | He | 2 | 1s² |
| Neon | Ne | 10 | 1s² 2s² 2p⁶ |
| Argon | Ar | 18 | 1s² 2s² 2p⁶ 3s² 3p⁶ |
| Krypton | Kr | 36 | 1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ |
| Xenon | Xe | 54 | [Kr] 4d¹⁰ 5s² 5p⁶ |
| Radon | Rn | 86 | [Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁶ |

To use shorthand notation:
1. Find the **noble gas** that comes just before your element in the periodic table.
2. Write that noble gas symbol in **brackets**.
3. Continue the configuration from where the noble gas left off.`
    },
    {
      id: 'ec4-examples',
      type: 'text' as const,
      content: `## 🧪 Step-by-Step Examples

### Example 1: Sodium (Na, Z = 11)

**Total electrons:** 11

| Step | Action | Result |
|------|--------|--------|
| 1 | Write the full configuration | 1s² 2s² 2p⁶ 3s¹ |
| 2 | Identify the preceding noble gas | Neon (Ne, Z = 10) |
| 3 | Ne accounts for: | 1s² 2s² 2p⁶ (10 electrons) |
| 4 | Remaining electrons: 11 − 10 = 1 | 3s¹ |

**Shorthand: [Ne] 3s¹**

> 🔑 The single 3s¹ electron is sodium's **valence electron** — the one it loses to form Na⁺.

---

### Example 2: Iron (Fe, Z = 26)

**Total electrons:** 26

| Step | Action | Result |
|------|--------|--------|
| 1 | Write the full configuration | 1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d⁶ |
| 2 | Identify the preceding noble gas | Argon (Ar, Z = 18) |
| 3 | Ar accounts for: | 1s² 2s² 2p⁶ 3s² 3p⁶ (18 electrons) |
| 4 | Remaining electrons: 26 − 18 = 8 | 4s² 3d⁶ |

**Shorthand: [Ar] 4s² 3d⁶**

> ⚠️ **Why not [Kr]?** Krypton has Z = 36, which is **more** than 26. Always use the noble gas that comes **before** your element.

---

### Example 3: Bromine (Br, Z = 35)

**Total electrons:** 35

| Step | Action | Result |
|------|--------|--------|
| 1 | Write the full configuration | 1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁵ |
| 2 | Identify the preceding noble gas | Argon (Ar, Z = 18) |
| 3 | Ar accounts for: | 1s² 2s² 2p⁶ 3s² 3p⁶ (18 electrons) |
| 4 | Remaining electrons: 35 − 18 = 17 | 4s² 3d¹⁰ 4p⁵ |

**Shorthand: [Ar] 4s² 3d¹⁰ 4p⁵**

> 💡 Notice how the shorthand cuts a **8-subshell** configuration down to just **3 subshells** — and immediately shows the 7 valence electrons (4s² + 4p⁵) that determine bromine's chemistry.`
    },
    {
      id: 'ec4-quiz-identify-core',
      type: 'multiple-choice' as const,
      content: `### Identify the Noble Gas Core

Which noble gas core would you use for the shorthand notation of Selenium (Se, Z = 34)?`,
      exercise: {
        questions: [
          {
            question: 'Noble gas core for Se:',
            options: ['[Ne]', '[Ar]', '[Kr]', '[Xe]'],
            correctAnswer: 1,
            explanation: 'Selenium (Z = 34) comes after Argon (Z = 18) and before Krypton (Z = 36). The preceding noble gas is Argon, so we use [Ar] as the core. The shorthand is [Ar] 4s² 3d¹⁰ 4p⁴.'
          }
        ]
      }
    },
    {
      id: 'ec4-quiz-shorthand',
      type: 'multiple-choice' as const,
      content: `### Shorthand Notation

What is the correct noble gas shorthand notation for phosphorus (P, Z = 15)?`,
      exercise: {
        questions: [
          {
            question: 'Noble gas shorthand for P:',
            options: [
              '[He] 2s² 2p⁶ 3s² 3p³',
              '[Ne] 3s² 3p³',
              '[Ne] 3s² 3p⁵',
              '[Ar] 3s² 3p³'
            ],
            correctAnswer: 1,
            explanation: 'Phosphorus (Z = 15) uses [Ne] (Z = 10) as its core. The remaining 5 electrons: 3s² 3p³. So the answer is [Ne] 3s² 3p³. While option A is technically correct, [Ne] is the most appropriate (closest) noble gas core.'
          }
        ]
      }
    },
    {
      id: 'ec4-input-convert',
      type: 'input-box' as const,
      content: `### Convert to Shorthand

Convert the following full electron configurations to noble gas shorthand (e.g., [Ne] 3s2 3p5). A formatted preview will appear as you type.`,
      exercise: {
        inputs: [
          {
            label: 'Chlorine — Full: 1s2 2s2 2p6 3s2 3p5',
            correctAnswer: '[Ne] 3s2 3p5',
            explanation: 'Neon accounts for the first 10 electrons (1s² 2s² 2p⁶). The remaining 7 electrons are 3s² 3p⁵, giving [Ne] 3s² 3p⁵.'
          },
          {
            label: 'Titanium — Full: 1s2 2s2 2p6 3s2 3p6 4s2 3d2',
            correctAnswer: '[Ar] 4s2 3d2',
            explanation: 'Argon accounts for the first 18 electrons (through 3p⁶). The remaining 4 electrons are 4s² 3d², giving [Ar] 4s² 3d².'
          }
        ]
      }
    },
    {
      id: 'ec4-dropdown-practice',
      type: 'dropdown-select' as const,
      content: `### Noble Gas Shorthand Identification

Match each element with its correct shorthand electron configuration.`,
      exercise: {
        dropdowns: [
          {
            label: 'Potassium (K, Z = 19):',
            options: ['[Ar] 3d¹', '[Ar] 4s¹', '[Ne] 3s² 3p⁶ 4s¹', '[Kr] 4s¹'],
            correctIndex: 1,
            explanation: 'Potassium: [Ar] 4s¹. After the argon core (18 electrons), the 19th electron goes into 4s, not 3d.'
          },
          {
            label: 'Gallium (Ga, Z = 31):',
            options: ['[Ar] 4s² 3d¹⁰ 4p¹', '[Kr] 4p¹', '[Ar] 3d¹³', '[Ar] 4s² 4p¹¹'],
            correctIndex: 0,
            explanation: 'Gallium: [Ar] 4s² 3d¹⁰ 4p¹. After argon (18), add 4s² (20), 3d¹⁰ (30), 4p¹ (31). Total = 31 ✓.'
          }
        ]
      }
    },
    {
      id: 'ec4-summary',
      type: 'text' as const,
      content: `## � Part 4 Summary: Noble Gas Shorthand

---

### 🧰 The Method

| Step | Action | Example (Bromine, Z = 35) |
|------|--------|---------------------------|
| 1 | Write the full configuration | 1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁵ |
| 2 | Find the preceding noble gas | Argon (Ar, Z = 18) |
| 3 | Replace the noble gas core with brackets | [Ar] |
| 4 | Write the remaining subshells | 4s² 3d¹⁰ 4p⁵ |
| **Result** | **Noble gas shorthand** | **[Ar] 4s² 3d¹⁰ 4p⁵** |

---

### 📌 Noble Gas Reference

| Noble Gas | Z | Use for elements with Z = |
|-----------|---|---------------------------|
| He | 2 | 3–10 |
| Ne | 10 | 11–18 |
| Ar | 18 | 19–36 |
| Kr | 36 | 37–54 |
| Xe | 54 | 55–86 |
| Rn | 86 | 87+ |

---

### ✅ Your Checklist Before Moving On

- ☐ I can identify the correct noble gas core for any element
- ☐ I can convert a full configuration to noble gas shorthand
- ☐ I can convert noble gas shorthand back to the full configuration
- ☐ I understand that shorthand highlights the **valence electrons** — the ones that determine chemical behavior

---

### 🔮 What's Next

In **Part 5**, we tackle the important **exceptions** to the Aufbau filling order (Chromium and Copper) and learn how to write electron configurations for **ions** — including the critical rule that 4s electrons are removed before 3d when forming cations.`
    }
  ]
}
