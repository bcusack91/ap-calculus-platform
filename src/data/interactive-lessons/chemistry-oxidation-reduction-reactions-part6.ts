export const chemOxidationReductionReactionsPart6Data = {
  topicSlug: 'oxidation-reduction-reactions',
  sections: [
    {
      id: 'or6-intro',
      type: 'text' as const,
      content: `# ⚡ Problem-Solving Workshop

**Part 6 of 7 — Mixed Redox Balancing Practice**

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
      id: 'or6-strategy',
      type: 'text' as const,
      content: `
## 🛠️ Problem-Solving Strategy

### Decision Flowchart

1. **Assign oxidation states** — find which atoms change
2. **Write half-reactions** — one for oxidation, one for reduction
3. **Check the medium:**
   - Acidic → use $H_{2}O$ and $H^{+}$
   - Basic → balance in acid first, then add $OH^{-}$
4. **Balance each half-reaction** (atoms, then charge with $e^{-}$)
5. **Equalize and add** — cancel electrons
6. **Verify** — atoms AND charge must balance

> 💡 **Tip:** Always verify BOTH atoms and charge in your final answer — a common source of lost points on the AP exam.


---

### Common Patterns to Recognize

> 🔑 **Key Concept:** Memorize these common species and their typical products — they appear frequently on the AP exam.

| Species | Typical Behavior | Product |
|---------|-----------------|---------|
| $MnO_{4}^{-}$ (acidic) | Strong oxidizer | $Mn^{2+}$ |
| $MnO_{4}^{-}$ (basic) | Moderate oxidizer | $MnO_{2}$ |
| $Cr_{2}O_{7}^{2-}$ (acidic) | Strong oxidizer | $Cr^{3+}$ |
| $NO_{3}^{-}$ (acidic, dilute) | Oxidizer | NO |
| $NO_{3}^{-}$ (acidic, conc.) | Oxidizer | $NO_{2}$ |
| $H_{2}O_{2}$ | Can oxidize or reduce | $O_{2}$ or $H_{2}O$ |
      `
    },
    {
      id: 'or6-practice-1',
      type: 'multiple-choice' as const,
      content: `
**Balancing Practice — Acidic Solution** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Balance in acidic solution: $Cr_{2}O_{7}^{2-}$ + $I^{-}$ → $Cr^{3+}$ + $I_{2}$. What is the coefficient of $I^{-}$?',
            options: [
              '2',
              '3',
              '6',
              '7'
            ],
            correctAnswer: 2,
            explanation: 'Reduction: $Cr_{2}O_{7}^{2-}$ → $2Cr^{3+}$ $(gain 6e^{-})$. Oxidation: $2I^{-}$ → $I_{2}$ $(lose 2e^{-})$. Equalize: multiply oxidation by 3 → $6I^{-}$ → $3I_{2}$ + $6e^{-}$. Balanced: $Cr_{2}O_{7}^{2-}$ + $6I^{-}$ + $14H^{+}$ → $2Cr^{3+}$ + $3I_{2}$ + $7H_{2}O$.'
          },
          {
            question: 'In the balanced equation above, the coefficient of $H^{+}$ is:',
            options: [
              '6',
              '7',
              '12',
              '14'
            ],
            correctAnswer: 3,
            explanation: 'The reduction half-reaction: $6e^{-}$ + $14H^{+}$ + $Cr_{2}O_{7}^{2-}$ → $2Cr^{3+}$ + $7H_{2}O$. There are 7 O atoms on the left → $7H_{2}O$ on the right → 14H needed → $14H^{+}$ on the left.'
          },
          {
            question: 'Balance in acidic solution: $H_{2}O_{2}$ + $Fe^{2+}$ → $H_{2}O$ + $Fe^{3+}$. What is the coefficient of $Fe^{2+}$?',
            options: [
              '1',
              '2',
              '3',
              '4'
            ],
            correctAnswer: 1,
            explanation: 'Reduction: $H_{2}O_{2}$ + $2H^{+}$ + $2e^{-}$ → $2H_{2}O$ (O goes from −1 to −2, gaining $2e^{-}$ total). Oxidation: $Fe^{2+}$ → $Fe^{3+}$ + $e^{-}$. Equalize: multiply oxidation by 2. Result: $H_{2}O_{2}$ + $2Fe^{2+}$ + $2H^{+}$ → $2H_{2}O$ + $2Fe^{3+}$.'
          }
        ]
      }
    },
    {
      id: 'or6-practice-2',
      type: 'multiple-choice' as const,
      content: `
**Balancing Practice — Basic Solution** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Balance in basic solution: $MnO_{4}^{-}$ + $CN^{-}$ → $MnO_{2}$ + $CNO^{-}$. After converting to basic, which species appear in the final equation?',
            options: [
              '$H^{+}$ and $H_{2}O$ only',
              '$OH^{-}$ and $H_{2}O$ only',
              '$H^{+}$, $OH^{-}$, and $H_{2}O$',
              'None of these — only the redox species'
            ],
            correctAnswer: 1,
            explanation: 'In basic solution, after converting from acidic form, the equation contains $OH^{-}$ and $H_{2}O$ but NO $H^{+}$. All $H^{+}$ ions have been neutralized by adding $OH^{-}$.'
          },
          {
            question: 'In basic solution: Al(s) + $MnO_{4}^{-}$ → $Al(OH)_{4}^{-}$ + $MnO_{2}$. How many electrons does each Al atom lose?',
            options: [
              '1',
              '2',
              '3',
              '4'
            ],
            correctAnswer: 2,
            explanation: 'Al goes from 0 (in Al metal) to +3 (in $Al(OH)_{4}^{-}$, since 4 $OH^{-}$ contributes −4 charge and the ion is −1, so Al = +3). That\'s a loss of 3 electrons per Al atom.'
          },
          {
            question: 'When balancing $CrO_{4}^{2-}$ + $S^{2-}$ → $Cr(OH)_{3}$ + S in basic solution, the final balanced equation will have:',
            options: [
              '$H^{+}$ on the reactant side',
              '$OH^{-}$ on the reactant side',
              '$OH^{-}$ on the product side',
              'No $H_{2}O$ or $OH^{-}$'
            ],
            correctAnswer: 1,
            explanation: 'In basic solution, after fully balancing, $OH^{-}$ typically appears. For this equation, $OH^{-}$ and $H_{2}O$ appear on specific sides depending on the balance. After converting from acidic, $OH^{-}$ ends up on the reactant side with $H_{2}O$ on the product side.'
          }
        ]
      }
    },
    {
      id: 'or6-oxidation-state-drill',
      type: 'input-boxes' as const,
      content: `
**Quick Oxidation State Check** 🧮

Determine the oxidation state change for the underlined element in each half-reaction.

**1)** $\\text{Cr}_2\\text{O}_7^{2-} \\rightarrow \\text{Cr}^{3+}$: Each Cr changes from ____ to +3 (give initial oxidation state with sign)

**2)** $\\text{I}^- \\rightarrow \\text{I}_2$: Each I changes from −1 to ____ (give final oxidation state with sign)

**3)** $\\text{SO}_3^{2-} \\rightarrow \\text{SO}_4^{2-}$: S changes from ____ to +6 (give initial oxidation state with sign)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['+6', '0', '+4'],
        hint1: 'In $Cr_{2}O_{7}^{2-}$: 2(Cr) + 7(−2) = −2 → 2Cr = +12 → Cr = ?',
        hint2: '$I_{2}$ is a free element — what is the oxidation state of a free element?',
        hint3: 'In $SO_{3}^{2-}$: S + 3(−2) = −2 → S − 6 = −2 → S = ?',
        explanation: '1) In $Cr_{2}O_{7}^{2-}$: 2Cr + 7(−2) = −2 → 2Cr = +12 → Cr = +6. Each Cr goes from +6 to +3. 2) $I_{2}$ is a free element: oxidation state = 0. Each I goes from −1 to 0. 3) In $SO_{3}^{2-}$: S + 3(−2) = −2 → S = +4. S goes from +4 to +6.'
      }
    },
    {
      id: 'or6-dropdown-practice',
      type: 'dropdown-select' as const,
      content: `
**Redox Balancing Strategy** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: '$MnO_{4}^{-}$ in acidic solution typically gets reduced to',
            options: ['$MnO_{2}$', '$Mn^{2+}$', 'Mn', '$MnO_{3}^{-}$']
          },
          {
            label: '$MnO_{4}^{-}$ in basic or neutral solution typically gets reduced to',
            options: ['$MnO_{2}$', '$Mn^{2+}$', 'Mn', '$MnO_{3}^{-}$']
          },
          {
            label: '$H_{2}O_{2}$ acting as a reducing agent is oxidized to',
            options: ['$H_{2}O$', '$O_{2}$', '$OH^{-}$', '$H_{2}$']
          },
          {
            label: 'The number of electrons transferred must be equal in both half-reactions because',
            options: ['it makes the math easier', 'electrons cannot be created or destroyed', 'it balances hydrogen', 'it balances oxygen']
          }
        ],
        correctAnswers: ['$Mn^{2+}$', '$MnO_{2}$', '$O_{2}$', 'electrons cannot be created or destroyed'],
        hint1: 'Acidic conditions allow Mn to be fully reduced to +2.',
        hint2: 'In basic/neutral, $MnO_{4}^{-}$ is partially reduced (Mn goes from +7 to +4).',
        hint3: 'When $H_{2}O_{2}$ is oxidized, O goes from −1 to 0.',
        explanation: '$MnO_{4}^{-}$ → $Mn^{2+}$ in acid (complete reduction). $MnO_{4}^{-}$ → $MnO_{2}$ in basic/neutral. $H_{2}O_{2}$ oxidized → $O_{2}$ (O: −1 → 0). Electron conservation: $e^{-}$ lost must equal $e^{-}$ gained.'
      }
    },
    {
      id: 'or6-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Problem-Solving Workshop** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Balance in acidic solution: $MnO_{4}^{-}$ + $C_{2}O_{4}^{2-}$ → $Mn^{2+}$ + $CO_{2}$. The coefficient of $MnO_{4}^{-}$ is:',
            options: [
              '2',
              '3',
              '4',
              '5'
            ],
            correctAnswer: 0,
            explanation: 'Reduction: $MnO_{4}^{-}$ → $Mn^{2+}$ gains $5e^{-}$. Oxidation: $C_{2}O_{4}^{2-}$ → $2CO_{2}$ loses $2e^{-}$. LCM(5,2) = 10. Multiply: $2MnO_{4}^{-}$ $(10e^{-})$ and $5C_{2}O_{4}^{2-}$ $(10e^{-})$. Balanced: $2MnO_{4}^{-}$ + $5C_{2}O_{4}^{2-}$ + $16H^{+}$ → $2Mn^{2+}$ + $10CO_{2}$ + $8H_{2}O$.'
          },
          {
            question: 'In the balanced equation above, the total charge on the reactant side is:',
            options: [
              '+2',
              '+4',
              '+6',
              '+4'
            ],
            correctAnswer: 1,
            explanation: 'Left: 2(−1) + 5(−2) + 16(+1) = −2 − 10 + 16 = +4. Right: 2(+2) + 0 + 0 = +4. Charge balanced ✓.'
          }
        ]
      }
    }
  ]
}
