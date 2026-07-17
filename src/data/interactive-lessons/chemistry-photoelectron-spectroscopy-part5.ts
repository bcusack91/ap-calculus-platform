export const chemPhotoelectronSpectroscopyPart5Data = {
  topicSlug: 'photoelectron-spectroscopy',
  sections: [
    {
      id: 'ps5-intro',
      type: 'text' as const,
      content: `# PES and Periodic Trends

**Part 5 of 7 — Identifying Elements from PES**

---

### Topics in This Part

| Section |
|---------|
| 📊 Effective Nuclear Charge |
| Example: Period 2 First Ionization Energies and 1s Binding Energies |
| Sodium (Na, Z = 11): $1s^{2}$ $2s^{2}$ $2p^{6}$ $3s^{1}$ |
| Magnesium (Mg, Z = 12): $1s^{2}$ $2s^{2}$ $2p^{6}$ $3s^{2}$ |
| Key Comparisons: |

> 🔑 **Key Concept:** Mastering this material will strengthen your foundation for both the AP Chemistry exam and more advanced chemistry topics.

---

### What You'll Master in Part 5
- Understanding the core concepts covered in Part 5
- Applying these ideas to solve practice problems
- Building toward AP exam readiness for this topic`
    },
    {
      id: 'ps5-across-period',
      type: 'text' as const,
      content: `## 📌 Binding Energy Across a Period

As you move **left to right across a period**, the binding energies of ALL electrons increase. This happens because:

1. Each successive element adds **one more proton** to the nucleus
2. Electrons are added to the **same principal energy level** (same shell)
3. Electrons in the same shell provide **poor shielding** for each other
4. Therefore, $Z_{eff}$ **increases** across the period


---

### Example: Period 2 First Ionization Energies and 1s Binding Energies

| Element | Z | 1s BE (MJ/mol) | Valence BE (MJ/mol) |
|---------|---|----------------|---------------------|
| Li | 3 | 6.26 | 0.52 |
| Be | 4 | 11.5 | 0.90 |
| B | 5 | 19.3 | 0.80 |
| C | 6 | 28.6 | 1.09 |
| N | 7 | 39.6 | 1.40 |
| O | 8 | 52.6 | 1.31 |
| F | 9 | 67.2 | 1.68 |
| Ne | 10 | 84.0 | 2.08 |

**Notice:** Both the 1s binding energy and the valence binding energy generally increase across the period.

> The slight **decreases** at B (after Be) and O (after N) are due to subshell effects — B starts filling the 2p subshell, and O begins pairing electrons in 2p.

> ⚠️ **Warning:** Don’t expect a perfectly smooth increase in ionization energy across a period. The B/Be and O/N exceptions appear frequently on AP exams — know why they happen!`
    },
    {
      id: 'ps5-quiz1',
      type: 'multiple-choice' as const,
      content: `### ✏️ Trend Check

As you move from left to right across Period 3 (Na to Ar), what happens to the binding energy of the 1s electrons?`,
      exercise: {
        questions: [
          {
            text: 'The 1s binding energy:',
            options: [
              'Decreases because the 1s electrons get farther from the nucleus',
              'Stays the same because the 1s subshell is full in all Period 3 elements',
              'Increases because more protons in the nucleus attract the 1s electrons more strongly',
              'Alternates due to electron pairing effects'
            ],
            correctAnswer: 2,
            explanation: 'As you move across Period 3, each element has one more proton. The 1s electrons are very close to the nucleus and experience almost no shielding, so each additional proton increases the attractive force on them, increasing their binding energy.'
          }
        ]
      }
    },
    {
      id: 'ps5-comparing',
      type: 'text' as const,
      content: `## ⚖️ Comparing PES Spectra of Adjacent Elements

When comparing PES spectra of adjacent elements in the same period, you should notice:


---

### Sodium (Na, Z = 11): $1s^{2}$ $2s^{2}$ $2p^{6}$ $3s^{1}$
- Five peaks with heights: 2, 2, 6, 1 (but 2s and 2p show as separate peaks)
- Rightmost peak $(3s^{1})$: height 1, lowest BE


---

### Magnesium (Mg, Z = 12): $1s^{2}$ $2s^{2}$ $2p^{6}$ $3s^{2}$
- Same number of peaks as Na (four peaks)
- Rightmost peak $(3s^{2})$: height 2, slightly higher BE than Na's 3s peak
- ALL peaks shift slightly **left** (higher BE) compared to Na


---

### Key Comparisons:
1. **Mg's 1s peak** has higher BE than Na's 1s peak (more protons pulling on same electrons)
2. **Mg's 3s peak** is taller (2 vs 1) AND has higher BE
3. The **shapes** of core electron peaks are similar, but shifted
4. Adding a proton affects **all** electrons, not just the outermost ones`
    },
    {
      id: 'ps5-quiz2',
      type: 'multiple-choice' as const,
      content: `### ✏️ Comparing Elements

Which of the following correctly compares the PES spectra of fluorine (F, Z = 9) and neon (Ne, Z = 10)?`,
      exercise: {
        questions: [
          {
            text: 'Select the correct comparison:',
            options: [
              'Ne has more peaks than F because it has more electrons',
              'F has higher binding energies for all subshells than Ne',
              'Ne has higher binding energies for all corresponding subshells than F',
              'The 1s binding energies are identical for both elements'
            ],
            correctAnswer: 2,
            explanation: 'Neon (Z = 10) has one more proton than fluorine (Z = 9). This additional proton increases the attractive force on all electrons, so the binding energies for all corresponding subshells are higher in Ne than in F. Both have the same number of peaks (1s, 2s, 2p), but Ne\'s 2p peak is taller (6 vs 5).'
          }
        ]
      }
    },
    {
      id: 'ps5-input1',
      type: 'input-boxes' as const,
      content: `### ✏️ Effective Nuclear Charge

> **Problem:** Calculate the approximate effective nuclear charge ($Z_{eff}$) felt by a valence electron for the following atoms. Use the simple approximation $Z_{eff} = Z - S$ where $S$ equals the number of core electrons.`,
      exercise: {
        inputs: [
          {
            label: 'What is Zeff for a valence electron in sodium (Na, Z = 11, 10 core electrons)?',
            correctAnswer: '1',
            explanation: '$Z_{eff} = Z - S = 11 - 10 = 1$. A valence electron in sodium feels an effective nuclear charge of approximately +1.'
          },
          {
            label: 'What is Zeff for a valence electron in chlorine (Cl, Z = 17, 10 core electrons)?',
            correctAnswer: '7',
            explanation: '$Z_{eff} = Z - S = 17 - 10 = 7$. A valence electron in chlorine feels an effective nuclear charge of approximately +7, which is why chlorine holds its electrons much more tightly than sodium.'
          }
        ]
      }
    },
    {
      id: 'ps5-dropdown1',
      type: 'dropdown-select' as const,
      content: `### ✏️ Applying Periodic Trends to PES

Use your knowledge of periodic trends and effective nuclear charge to answer these questions.`,
      exercise: {
        dropdowns: [
          {
            text: 'Which element has the highest 1s binding energy: C, N, or O?',
            options: ['Carbon (Z = 6)', 'Nitrogen (Z = 7)', 'Oxygen (Z = 8)'],
            correctIndex: 2,
            explanation: 'Oxygen has the highest atomic number (Z = 8) of the three, meaning it has the most protons. The 1s electrons in oxygen experience the greatest nuclear charge, resulting in the highest 1s binding energy.'
          },
          {
            text: 'Why does boron (Z = 5) have a LOWER first ionization energy than beryllium (Z = 4)?',
            options: [
              'Boron has fewer protons',
              'Boron\'s outermost electron is in a 2p subshell, which is higher in energy and easier to remove than Be\'s 2s',
              'Beryllium has more shielding electrons',
              'Boron is a larger atom'
            ],
            correctIndex: 1,
            explanation: 'Beryllium\'s electron configuration is $1s^{2}$ $2s^{2}$, while boron\'s is $1s^{2}$ $2s^{2}$ $2p^{1}$. The 2p subshell is higher in energy than 2s, so the outermost electron in boron is easier to remove. This causes the slight dip in ionization energy (and valence binding energy) from Be to B, which is visible on PES spectra.'
          }
        ]
      }
    },
    {
      id: 'ps5-summary',
      type: 'text' as const,
      content: `## 📋 Part 5 Summary: PES & Periodic Trends

---

### 🧪 Effective Nuclear Charge

$$Z_{eff} = Z - S$$

where $Z$ = atomic number (# protons) and $S$ = shielding (# core electrons)

---

### 📌 Trends Across a Period

| What Happens | Why | PES Effect |
|-------------|-----|------------|
| $Z_{eff}$ increases | More protons, same shielding | All peaks shift **left** (higher BE) |
| **All** electrons affected | Nuclear charge pulls entire cloud tighter | Core AND valence BEs increase |
| IE generally increases | Harder to remove valence $e^{-}$ | Rightmost peak moves left |

---

### ⚠️ AP Exceptions

| Transition | What Happens | Why |
|-----------|-------------|-----|
| Be → B | IE **drops** | B removes a 2p $e^{-}$ (higher energy than Be's 2s) |
| N → O | IE **drops** | O has a paired 2p $e^{-}$; electron-electron repulsion |

---

### ✅ Your Checklist Before Moving On

- ☐ I can calculate $Z_{eff}$ using $Z - S$
- ☐ I understand why all BEs increase across a period
- ☐ I can explain the Be→B and N→O exceptions
- ☐ I can predict how PES spectra shift for adjacent elements

---

### 🔮 What's Next

In **Part 6**, you will apply all of this knowledge to **solve challenging PES problems** with a systematic approach.`
    }
  ]
}
