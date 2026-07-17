export const chemOxidationReductionReactionsPart1Data = {
  topicSlug: 'oxidation-reduction-reactions',
  sections: [
    {
      id: 'or1-intro',
      type: 'text' as const,
      content: `# ⚡ Oxidation States

**Part 1 of 7 — Rules for Assigning Oxidation Numbers**

---

### Topics in This Part

| Section |
|---------|
| 📏 Rules for Assigning Oxidation States |
| Rule 6 Is Your Calculation Tool |
| 🧪 Worked Examples |
| Example 1: $H_{2}SO_{4}$ |
| Example 2: $MnO_{4}^{-}$ (permanganate ion) |

> 🔑 **Key Concept:** Mastering this material will strengthen your foundation for both the AP Chemistry exam and more advanced chemistry topics.

---

### What You'll Master in Part 1
- Understanding the core concepts covered in Part 1
- Applying these ideas to solve practice problems
- Building toward AP exam readiness for this topic`
    },
    {
      id: 'or1-rules',
      type: 'text' as const,
      content: `
## 📏 Rules for Assigning Oxidation States

Apply these rules **in order of priority** (Rule 1 overrides Rule 2, etc.):

> 💡 **Tip:** Always apply the rules in order — higher-numbered rules yield to lower-numbered ones when there's a conflict.

| Rule | Description | Example |
|------|-------------|---------|
| 1 | Free elements have oxidation state **0** | Fe(s) = 0, $O_{2}(g)$ = 0 |
| 2 | Monoatomic ions = their charge | $Na^{+}$ = +1, $Cl^{-}$ = −1, $Fe^{3+}$ = +3 |
| 3 | **Fluorine** is always **−1** | HF: F = −1 |
| 4 | **Oxygen** is usually **−2** | $H_{2}O$: O = −2 |
| | Exception: peroxides (−1) | $H_{2}O_{2}$: O = −1 |
| | Exception: $OF_{2}$ (+2) | $OF_{2}$: O = +2 |
| 5 | **Hydrogen** is usually **+1** | HCl: H = +1 |
| | Exception: metal hydrides (−1) | NaH: H = −1 |
| 6 | Sum of oxidation states = **charge of species** | Neutral compound: sum = 0 |
| | | Ion: sum = ion charge |


---

> 🔑 **Key Concept:** Rule 6 is your primary calculation tool — if you know all oxidation states except one, solve for the unknown!

### Rule 6 Is Your Calculation Tool

For any compound or polyatomic ion:

$$\\boxed{\\sum \\text{(oxidation states)} = \\text{overall charge}}$$
      `
    },
    {
      id: 'or1-examples',
      type: 'text' as const,
      content: `
## 🧪 Worked Examples

### Example 1: $H_{2}SO_{4}$

> **Problem:** Find the oxidation state of sulfur in $H_{2}SO_{4}$.

> **Solution:**
> - H = +1 (Rule 5), O = −2 (Rule 4)
> - $2(+1) + S + 4(-2) = 0$
> - $+2 + S - 8 = 0$
> - $\\boxed{S = +6}$


---

### Example 2: $MnO_{4}^{-}$ (permanganate ion)

> **Problem:** Find the oxidation state of manganese in $MnO_{4}^{-}$.

> **Solution:**
> - O = −2 (Rule 4)
> - $\\text{Mn} + 4(-2) = -1$ (charge of ion)
> - $\\text{Mn} - 8 = -1$
> - $\\boxed{\\text{Mn} = +7}$


---

### Example 3: $Cr_{2}O_{7}^{2-}$ (dichromate ion)

> **Problem:** Find the oxidation state of chromium in $Cr_{2}O_{7}^{2-}$.

> **Solution:**
> - O = −2 (Rule 4)
> - $2(\\text{Cr}) + 7(-2) = -2$
> - $2\\text{Cr} - 14 = -2$
> - $2\\text{Cr} = +12$
> - $\\boxed{\\text{Cr} = +6}$


---

### Example 4: $Na_{2}O_{2}$ (sodium peroxide)

> ⚠️ **Warning:** Peroxides are a common exception — oxygen is −1, not −2!

- Na = +1 (Rule 2, Group 1 metal)
- $2(+1) + 2(\\text{O}) = 0$
- $\\text{O} = -1$ (peroxide exception!)
      `
    },
    {
      id: 'or1-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Oxidation States Concept Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is the oxidation state of nitrogen in $NO_{3}^{-}$?',
            options: [
              '+3',
              '+4',
              '+5',
              '+6'
            ],
            correctAnswer: 2,
            explanation: 'In $NO_{3}^{-}$: O = −2 (Rule 4). N + 3(−2) = −1 (charge of ion). N − 6 = −1. N = +5.'
          },
          {
            question: 'What is the oxidation state of chromium in $K_{2}Cr_{2}O_{7}$?',
            options: [
              '+3',
              '+6',
              '+7',
              '+12'
            ],
            correctAnswer: 1,
            explanation: 'K = +1, O = −2. 2(+1) + 2(Cr) + 7(−2) = 0 → 2 + 2Cr − 14 = 0 → 2Cr = 12 → Cr = +6.'
          },
          {
            question: 'In which compound does oxygen NOT have an oxidation state of −2?',
            options: [
              '$H_{2}O$',
              '$CO_{2}$',
              '$H_{2}O_{2}$',
              'MgO'
            ],
            correctAnswer: 2,
            explanation: 'In $H_{2}O_{2}$ (hydrogen peroxide), oxygen has an oxidation state of −1. This is the peroxide exception. In all the other compounds, oxygen is −2.'
          },
          {
            question: 'What is the oxidation state of each atom in $Fe_{2}O_{3}$?',
            options: [
              'Fe = +2, O = −2',
              'Fe = +3, O = −2',
              'Fe = +3, O = −3',
              'Fe = +6, O = −2'
            ],
            correctAnswer: 1,
            explanation: 'O = −2 (Rule 4). 2(Fe) + 3(−2) = 0 → 2Fe = 6 → Fe = +3. Iron is in the +3 oxidation state in $Fe_{2}O_{3}$.'
          }
        ]
      }
    },
    {
      id: 'or1-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**Calculate Oxidation States** 🧮

Find the oxidation state of the underlined element. Give your answer as a number with sign (e.g., +5 or -2).

**1)** Sulfur in $SO_{4}^{2-}$

**2)** Phosphorus in $H_{3}PO_{4}$

**3)** Manganese in $MnO_{2}$
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['+6', '+5', '+4'],
        hint1: 'S + 4(−2) = −2 (charge of ion). Solve for S.',
        hint2: '3(+1) + P + 4(−2) = 0. Solve for P.',
        hint3: 'Mn + 2(−2) = 0. Solve for Mn.',
        explanation: '1) S + 4(−2) = −2 → S − 8 = −2 → S = +6. 2) 3(+1) + P + 4(−2) = 0 → 3 + P − 8 = 0 → P = +5. 3) Mn + 2(−2) = 0 → Mn − 4 = 0 → Mn = +4.'
      }
    },
    {
      id: 'or1-dropdown-practice',
      type: 'dropdown-select' as const,
      content: `
**Oxidation State Rules** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The oxidation state of any free (uncombined) element is',
            options: ['+1', '−1', '0', 'depends on the element']
          },
          {
            label: 'Fluorine always has an oxidation state of',
            options: ['+1', '−1', '0', '−2']
          },
          {
            label: 'Hydrogen has an oxidation state of −1 when bonded to',
            options: ['nonmetals', 'oxygen', 'metals (metal hydrides)', 'halogens']
          },
          {
            label: 'In a polyatomic ion, the sum of oxidation states equals',
            options: ['zero', 'the charge of the ion', 'the number of atoms', '+1']
          }
        ],
        correctAnswers: ['0', '−1', 'metals (metal hydrides)', 'the charge of the ion'],
        hint1: 'Fe(s), $O_{2}(g)$, $N_{2}(g)$ — what do they all have in common?',
        hint2: 'Fluorine is the most electronegative element.',
        hint3: 'NaH, $CaH_{2}$ — H bonded to metals takes electrons.',
        explanation: 'Free elements = 0 (Rule 1). F is always −1 (most electronegative). H = −1 in metal hydrides like NaH. For polyatomic ions, oxidation states sum to the ion\'s charge.'
      }
    },
    {
      id: 'or1-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Oxidation States** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'What is the oxidation state of carbon in $Na_{2}CO_{3}$?',
            options: [
              '+2',
              '+3',
              '+4',
              '+6'
            ],
            correctAnswer: 2,
            explanation: 'Na = +1, O = −2. 2(+1) + C + 3(−2) = 0 → 2 + C − 6 = 0 → C = +4.'
          },
          {
            question: 'In which species does chlorine have the highest oxidation state?',
            options: [
              '$Cl_{2}$',
              'HCl',
              '$ClO_{3}^{-}$',
              '$ClO_{4}^{-}$'
            ],
            correctAnswer: 3,
            explanation: '$Cl_{2}$: Cl = 0. HCl: Cl = −1. $ClO_{3}^{-}$: Cl + 3(−2) = −1 → Cl = +5. $ClO_{4}^{-}$: Cl + 4(−2) = −1 → Cl = +7. The highest is +7 in $ClO_{4}^{-}$ (perchlorate).'
          }
        ]
      }
    }
  ]
}
