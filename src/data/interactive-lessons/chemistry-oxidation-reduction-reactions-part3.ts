export const chemOxidationReductionReactionsPart3Data = {
  topicSlug: 'oxidation-reduction-reactions',
  sections: [
    {
      id: 'or3-intro',
      type: 'text' as const,
      content: `# ⚡ Balancing Redox in Acidic Solution

**Part 3 of 7 — The Half-Reaction Method**

---

### Topics in This Part

| Section |
|---------|
| ⚗️ The Half-Reaction Method (Acidic Solution) |
| The 7 Steps |
| Key Principle |
| 🧪 Worked Example |
| Step 1: Write half-reactions |

> 🔑 **Key Concept:** Mastering this material will strengthen your foundation for both the AP Chemistry exam and more advanced chemistry topics.

---

### What You'll Master in Part 3
- Understanding the core concepts covered in Part 3
- Applying these ideas to solve practice problems
- Building toward AP exam readiness for this topic`
    },
    {
      id: 'or3-method',
      type: 'text' as const,
      content: `
## ⚗️ The Half-Reaction Method (Acidic Solution)

### The 7 Steps

| Step | Action |
|------|--------|
| 1 | **Separate** the equation into two half-reactions |
| 2 | **Balance atoms** other than O and H in each half-reaction |
| 3 | **Balance O** by adding **H₂O** |
| 4 | **Balance H** by adding **H⁺** |
| 5 | **Balance charge** by adding **electrons (e⁻)** |
| 6 | **Equalize electrons** — multiply half-reactions so e⁻ cancel |
| 7 | **Add** half-reactions together and simplify |


---

### Key Principle

> 🔑 **Key Concept:** Electrons lost in oxidation must **equal** electrons gained in reduction — electrons are neither created nor destroyed.
      `
    },
    {
      id: 'or3-worked-example',
      type: 'text' as const,
      content: `
## 🧪 Worked Example

> **Problem:** Balance in acidic solution:

$$\\text{MnO}_4^- + \\text{Fe}^{2+} \\rightarrow \\text{Mn}^{2+} + \\text{Fe}^{3+}$$


---

### Step 1: Write half-reactions

**Reduction:** $\\text{MnO}_4^- \\rightarrow \\text{Mn}^{2+}$

**Oxidation:** $\\text{Fe}^{2+} \\rightarrow \\text{Fe}^{3+}$


---

### Step 2: Balance atoms (non-O, non-H)
Already balanced (1 Mn each side, 1 Fe each side).


---

### Step 3: Balance O with H₂O
$\\text{MnO}_4^- \\rightarrow \\text{Mn}^{2+} + 4\\text{H}_2\\text{O}$


---

### Step 4: Balance H with H⁺
$8\\text{H}^+ + \\text{MnO}_4^- \\rightarrow \\text{Mn}^{2+} + 4\\text{H}_2\\text{O}$


---

### Step 5: Balance charge with e⁻

**Reduction:** Left charge: 8(+1) + (−1) = +7. Right charge: +2. Need 5e⁻ on left.
$$5e^- + 8\\text{H}^+ + \\text{MnO}_4^- \\rightarrow \\text{Mn}^{2+} + 4\\text{H}_2\\text{O}$$

**Oxidation:** Left charge: +2. Right charge: +3. Need 1e⁻ on right.
$$\\text{Fe}^{2+} \\rightarrow \\text{Fe}^{3+} + e^-$$


---

### Step 6: Equalize electrons (multiply oxidation by 5)
$$5\\text{Fe}^{2+} \\rightarrow 5\\text{Fe}^{3+} + 5e^-$$


---

### Step 7: Add and cancel e⁻
$$\\boxed{5\\text{Fe}^{2+} + 8\\text{H}^+ + \\text{MnO}_4^- \\rightarrow 5\\text{Fe}^{3+} + \\text{Mn}^{2+} + 4\\text{H}_2\\text{O}}$$


---

### ✅ Verify

> ⚠️ **Warning:** Always verify both atoms AND charge — a common mistake is balancing atoms but not charge!

- **Atoms:** 5 Fe ✓, 1 Mn ✓, 4 O ✓, 8 H ✓
- **Charge:** Left: 5(+2) + 8(+1) + (−1) = +17. Right: 5(+3) + (+2) + 0 = +17 ✓
      `
    },
    {
      id: 'or3-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Half-Reaction Method Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In acidic solution, oxygen atoms are balanced by adding:',
            options: [
              'O₂ molecules',
              'OH⁻ ions',
              'H₂O molecules',
              'O²⁻ ions'
            ],
            correctAnswer: 2,
            explanation: 'In acidic solution, oxygen is balanced by adding H₂O to the side that needs more O. Then hydrogen is balanced by adding H⁺.'
          },
          {
            question: 'After balancing O with H₂O and H with H⁺, what is added to balance charge?',
            options: [
              'More H⁺ ions',
              'OH⁻ ions',
              'Electrons (e⁻)',
              'Protons'
            ],
            correctAnswer: 2,
            explanation: 'After atoms are balanced, charge is balanced by adding electrons (e⁻) to the more positive side of each half-reaction.'
          },
          {
            question: 'In the half-reaction MnO₄⁻ → Mn²⁺ (acidic), how many electrons are gained?',
            options: [
              '2',
              '3',
              '5',
              '7'
            ],
            correctAnswer: 2,
            explanation: 'Mn goes from +7 (in MnO₄⁻) to +2. That\'s a decrease of 5, meaning 5 electrons are gained (reduction). The balanced half-reaction is: 5e⁻ + 8H⁺ + MnO₄⁻ → Mn²⁺ + 4H₂O.'
          },
          {
            question: 'Why must electrons be equalized before adding half-reactions?',
            options: [
              'To make the math easier',
              'Because electrons cannot appear in the final balanced equation',
              'To conserve energy',
              'To balance oxygen atoms'
            ],
            correctAnswer: 1,
            explanation: 'Electrons are transferred, not created or destroyed. They must cancel when the half-reactions are added. If the oxidation half gives 2e⁻ and reduction takes 5e⁻, we need to find the LCM and multiply each accordingly.'
          }
        ]
      }
    },
    {
      id: 'or3-practice-drill',
      type: 'input-boxes' as const,
      content: `
**Half-Reaction Practice** 🧮

For the half-reaction in acidic solution: $\\text{Cr}_2\\text{O}_7^{2-} \\rightarrow \\text{Cr}^{3+}$

**1)** How many H₂O molecules are needed (and on which side)? Type the coefficient only.

**2)** How many H⁺ ions are needed? Type the coefficient only.

**3)** How many electrons are needed? Type the coefficient only.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['7', '14', '6'],
        hint1: 'There are 7 O atoms on the left in Cr₂O₇²⁻. Add 7 H₂O to the right.',
        hint2: '7 H₂O on the right has 14 H atoms. Add 14 H⁺ to the left.',
        hint3: 'Left charge: 14(+1) + (−2) = +12. Right: 2(+3) = +6. Need 6e⁻ on left to go from +12 to +6.',
        explanation: '1) 7 H₂O on the product side (to balance 7 O). 2) 14 H⁺ on the reactant side (to balance 14 H from 7 H₂O). 3) 6e⁻ on the reactant side. Charge: 14 + (−2) + (−6) = +6 on left; 2(+3) = +6 on right ✓. Each Cr goes from +6 to +3, gaining 3e⁻ × 2 Cr = 6e⁻ total.'
      }
    },
    {
      id: 'or3-dropdown-practice',
      type: 'dropdown-select' as const,
      content: `
**Acidic Solution Balancing Concepts** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'In acidic solution, the source of hydrogen atoms for balancing is',
            options: ['H₂O', 'H⁺', 'OH⁻', 'H₂']
          },
          {
            label: 'Electrons are added to the more _____ side of a half-reaction',
            options: ['negative', 'positive', 'neutral', 'it doesn\'t matter']
          },
          {
            label: 'The oxidation half-reaction has electrons on the',
            options: ['left (reactant) side', 'right (product) side', 'both sides', 'neither side']
          },
          {
            label: 'The reduction half-reaction has electrons on the',
            options: ['left (reactant) side', 'right (product) side', 'both sides', 'neither side']
          }
        ],
        correctAnswers: ['H⁺', 'positive', 'right (product) side', 'left (reactant) side'],
        hint1: 'In acidic solution, we add H⁺ (protons) to balance H.',
        hint2: 'Electrons are negative — adding them reduces the positive charge.',
        hint3: 'Oxidation means losing electrons — they\'re released as a product.',
        explanation: 'In acidic solution, H⁺ provides hydrogen. Electrons go on the more positive side to balance charge. In oxidation, electrons are products (released). In reduction, electrons are reactants (consumed).'
      }
    },
    {
      id: 'or3-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Balancing Redox in Acidic Solution** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Balance in acidic solution: Cu(s) + NO₃⁻(aq) → Cu²⁺(aq) + NO(g). What is the coefficient of H⁺ in the balanced equation?',
            options: [
              '2',
              '4',
              '6',
              '8'
            ],
            correctAnswer: 3,
            explanation: 'Oxidation: Cu → Cu²⁺ + 2e⁻. Reduction: 3e⁻ + 4H⁺ + NO₃⁻ → NO + 2H₂O. Equalize: multiply oxidation by 3, reduction by 2. Total: 3Cu + 8H⁺ + 2NO₃⁻ → 3Cu²⁺ + 2NO + 4H₂O. Coefficient of H⁺ = 8.'
          },
          {
            question: 'In the balanced equation above, how many electrons are transferred in total?',
            options: [
              '2',
              '3',
              '5',
              '6'
            ],
            correctAnswer: 3,
            explanation: 'Cu loses 2e⁻ each × 3 Cu = 6e⁻ lost. N gains 3e⁻ each × 2 NO₃⁻ = 6e⁻ gained. The LCM of 2 and 3 is 6, so 6 electrons are transferred.'
          }
        ]
      }
    }
  ]
}
