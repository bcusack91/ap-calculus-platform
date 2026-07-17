export const chemPhotoelectronSpectroscopyPart6Data = {
  topicSlug: 'photoelectron-spectroscopy',
  sections: [
    {
      id: 'ps6-intro',
      type: 'text' as const,
      content: `# Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

---

### Practice Makes Perfect

This workshop features multi-step problems that mirror the AP Chemistry exam format. Each problem requires you to combine concepts from previous parts and show your work clearly.

> 🔑 **Why this matters:** The AP Chemistry exam rewards students who can apply concepts to unfamiliar problems — structured practice is the best preparation.

---

### What You'll Master in Part 6
- Working through complete multi-step problems from start to finish
- Building problem-solving strategies you can apply on the AP exam
- Identifying which concepts to apply and in what order`
    },
    {
      id: 'ps6-problem1',
      type: 'text' as const,
      content: `## 🎯 Strategy: Identifying Unknown Elements

When given PES data and asked to identify an element, follow this systematic approach:

**Step 1:** List the peak heights from left to right (highest to lowest BE).

**Step 2:** Assign subshells in order: 1s, 2s, 2p, 3s, 3p, 4s, 3d, 4p, ...

**Step 3:** Check that each peak height does not exceed the maximum for that subshell:
- s subshells: max 2
- p subshells: max 6
- d subshells: max 10
- f subshells: max 14

**Step 4:** Sum all electrons to get the atomic number.

**Step 5:** Look up the element.

**Step 6:** Verify your answer makes chemical sense.

> 💡 **Tip:** Always check that each peak height doesn’t exceed the subshell maximum (s ≤ 2, p ≤ 6, d ≤ 10, f ≤ 14). This catches assignment errors quickly.`
    },
    {
      id: 'ps6-quiz1',
      type: 'multiple-choice' as const,
      content: `### ✏️ Problem 1: Mystery Element

> **Problem:** A PES spectrum shows six peaks with the following data:
>
> | Peak | Relative Height | Binding Energy (MJ/mol) |
> |------|----------------|------------------------|
> | 1 | 2 | 151 |
> | 2 | 2 | 17.4 |
> | 3 | 6 | 13.5 |
> | 4 | 2 | 1.95 |
> | 5 | 6 | 1.01 |
> | 6 | 1 | 0.58 |
>
> What element is this?`,
      exercise: {
        questions: [
          {
            text: 'Identify the element:',
            options: [
              'Sodium (Na, Z = 11)',
              'Magnesium (Mg, Z = 12)',
              'Potassium (K, Z = 19)',
              'Calcium (Ca, Z = 20)'
            ],
            correctAnswer: 2,
            explanation: 'Peak heights: 2 + 2 + 6 + 2 + 6 + 1 = 19 electrons. This corresponds to: $1s^{2}(2)$, $2s^{2}(2)$, $2p^{6}(6)$, $3s^{2}(2)$, $3p^{6}(6)$, $4s^{1}(1)$ = potassium (K, Z = 19). The last peak with height 1 is the single 4s electron, which has the lowest binding energy.'
          }
        ]
      }
    },
    {
      id: 'ps6-quiz2',
      type: 'multiple-choice' as const,
      content: `### ✏️ Problem 2: Predicting Spectra

> **Problem:** If you were to draw the PES spectrum for aluminum (Al, Z = 13), how many peaks would appear and what would their relative heights be?`,
      exercise: {
        questions: [
          {
            text: 'Al $(1s^{2} 2s^{2} 2p^{6} 3s^{2} 3p^{1})$ would show:',
            options: [
              '3 peaks: 2, 8, 3',
              '5 peaks: 2, 2, 6, 2, 1',
              '4 peaks: 2, 2, 6, 3',
              '4 peaks: 2, 8, 2, 1'
            ],
            correctAnswer: 1,
            explanation: 'Aluminum has 5 occupied subshells: $1s^{2}$ (2), $2s^{2}$ (2), $2p^{6}$ (6), $3s^{2}$ (2), $3p^{1}$ (1). Each subshell produces one peak, giving 5 peaks with heights 2, 2, 6, 2, 1 from highest to lowest binding energy.'
          }
        ]
      }
    },
    {
      id: 'ps6-input1',
      type: 'input-boxes' as const,
      content: `### ✏️ Problem 3: Multi-Step Analysis

> **Problem:** Two PES spectra are compared. Element X has peaks: 2, 2, 6, 2, 2. Element Y has peaks: 2, 2, 6, 2, 3. Both are neutral atoms.`,
      exercise: {
        inputs: [
          {
            label: 'What is element X? (chemical symbol)',
            correctAnswer: 'Si',
            explanation: 'Element X: 2 + 2 + 6 + 2 + 2 = 14 electrons → silicon (Si). Configuration: $1s^{2}$ $2s^{2}$ $2p^{6}$ $3s^{2}$ $3p^{2}$.'
          },
          {
            label: 'What is element Y? (chemical symbol)',
            correctAnswer: 'P',
            explanation: 'Element Y: 2 + 2 + 6 + 2 + 3 = 15 electrons → phosphorus (P). Configuration: $1s^{2}$ $2s^{2}$ $2p^{6}$ $3s^{2}$ $3p^{3}$.'
          },
          {
            label: 'Which element (X or Y) has higher 1s binding energy? (enter X or Y)',
            correctAnswer: 'Y',
            explanation: 'Element Y (phosphorus, Z = 15) has more protons than element X (silicon, Z = 14). The additional proton increases the attraction on all electrons, including the 1s electrons. Therefore, Y has a higher 1s binding energy.'
          }
        ]
      }
    },
    {
      id: 'ps6-dropdown1',
      type: 'dropdown-select' as const,
      content: `### ✏️ Problem 4: Reasoning About Spectra

> **Problem:** An unknown element has a PES spectrum with peak heights: 2, 2, 6, 2, 6, 2, 6 (from highest to lowest binding energy).`,
      exercise: {
        dropdowns: [
          {
            text: 'A student sees this spectrum and claims the total is 2+2+6+2+6+2+6 = 26. Is this spectrum complete for any real neutral atom?',
            options: ['Yes — it represents iron (Fe, Z = 26)', 'No — the spectrum is missing a 3d peak and cannot represent a real element as shown', 'Yes — it represents krypton (Kr, Z = 36)', 'Yes — it represents argon (Ar, Z = 18)'],
            correctIndex: 1,
            explanation: 'The peak pattern 2, 2, 6, 2, 6, 2, 6 implies subshells $1s^{2}$, $2s^{2}$, $2p^{6}$, $3s^{2}$, $3p^{6}$, $4s^{2}$, $4p^{6}$ — but this is not a valid ground-state configuration. The 3d subshell must fill (up to 10 electrons) before the 4p subshell. No neutral atom has electrons in 4p without first filling 3d. This spectrum is incomplete or erroneous — a 3d peak is missing.'
          },
          {
            text: 'What is missing from this PES spectrum if the element is supposed to have electrons in the 3d subshell?',
            options: ['A peak of height 10 between the 3p and 4s peaks', 'A peak of height 6 after the 4p peak', 'Nothing is missing', 'A peak of height 2 before the 1s peak'],
            correctIndex: 0,
            explanation: 'If the element has electrons beyond the $3p^{6}$ subshell, the 3d subshell must fill before 4p. A complete spectrum for krypton would include a $3d^{10}$ peak (height 10) between the $3p^{6}$ and $4s^{2}$ peaks, giving total electrons: 2+2+6+2+6+10+2+6 = 36.'
          }
        ]
      }
    },
    {
      id: 'ps6-ap-style',
      type: 'multiple-choice' as const,
      content: `### ✏️ Problem 5: AP-Style Question

> **Problem:** A student analyzes the PES spectrum of an unknown gaseous element. The spectrum shows 5 peaks. The first peak (highest BE) has a relative height of 2. The second peak has a relative height of 2. The third peak has a relative height of 6. The fourth and fifth peaks (lowest BE) have relative heights of 2 and 4, respectively.
>
> The student claims the element must be in Period 3 of the periodic table. Is the student correct, and what element is it?`,
      exercise: {
        questions: [
          {
            text: 'Evaluate the student\'s claim:',
            options: [
              'Correct — the element is sulfur (S) in Period 3',
              'Correct — the element is silicon (Si) in Period 3',
              'Incorrect — the element is in Period 2',
              'Incorrect — the element is in Period 4'
            ],
            correctAnswer: 0,
            explanation: 'Peaks: $1s^{2}(2)$, $2s^{2}(2)$, $2p^{6}(6)$, $3s^{2}(2)$, $3p^{4}(4)$. Total = 16 electrons → sulfur (S, Z = 16). Since the outermost occupied subshell is 3p, sulfur is indeed in Period 3. The student is correct.'
          }
        ]
      }
    },
    {
      id: 'ps6-input2',
      type: 'input-boxes' as const,
      content: `### ✏️ Problem 6: Predicting Peak Heights

Write the expected PES peak heights (from highest to lowest binding energy) for the following element. Separate your answers with commas.`,
      exercise: {
        inputs: [
          {
            label: 'Peak heights for argon (Ar, Z = 18): $1s^{2}$ $2s^{2}$ $2p^{6}$ $3s^{2}$ $3p^{6}$',
            correctAnswer: '2,2,6,2,6',
            explanation: 'Argon has 5 occupied subshells: $1s^{2}(2)$, $2s^{2}(2)$, $2p^{6}(6)$, $3s^{2}(2)$, $3p^{6}(6)$. The peak heights from left to right are: 2, 2, 6, 2, 6.'
          }
        ]
      }
    },
    {
      id: 'ps6-summary',
      type: 'text' as const,
      content: `## 📋 Part 6 Summary: PES Problem-Solving

---

### 🧪 Systematic Approach

| Step | Action | Check |
|------|--------|-------|
| 1 | List all peaks (left → right) | Highest BE to lowest BE |
| 2 | Assign subshells | s ≤ 2, p ≤ 6, d ≤ 10, f ≤ 14 |
| 3 | Sum all electrons | Must equal atomic number |
| 4 | Identify the element | Use periodic table |

---

### ⚠️ Common AP Mistakes

| Mistake | Correct Approach |
|---------|------------------|
| Forgetting 3d for Z > 20 | Always include 3d subshell for transition metals |
| Writing 2, 2, 6, 2, 6, 2, 6 for TMs | Must show 3d peak (up to height 10) between 3p and 4p |
| Not verifying total | Always sum peak heights = atomic number |

---

### 📌 Key Skills

| Task | Strategy |
|------|----------|
| Compare spectra | Adjacent elements differ by 1 $e^{-}$; all BEs shift with Z |
| Predict a spectrum | Write $e^{-}$ config → each subshell = one peak |
| Verify answer | Total $e^{-}$ must = atomic number for neutral atoms |

---

### ✅ Your Checklist Before Moving On

- ☐ I can systematically identify an element from PES data
- ☐ I check subshell maximums for each peak
- ☐ I always include 3d for transition metals (Z > 20)
- ☐ I can predict PES spectra from electron configurations

---

### 🔮 What's Next

In **Part 7** (final), we will review everything and practice **AP exam-style questions** to solidify your mastery.`
    }
  ]
}
