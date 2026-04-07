export const chemOxidationReductionReactionsPart6Data = {
  topicSlug: 'oxidation-reduction-reactions',
  sections: [
    {
      id: 'or6-intro',
      type: 'text' as const,
      content: `
# ⚡ Problem-Solving Workshop

**Part 6 of 7 — Mixed Redox Balancing Practice**

This workshop brings together all the redox skills: assigning oxidation states, identifying oxidized/reduced species, balancing in acidic solution, and balancing in basic solution. Work through these problems systematically using the half-reaction method.
      `
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
   - Acidic → use H₂O and H⁺
   - Basic → balance in acid first, then add OH⁻
4. **Balance each half-reaction** (atoms, then charge with e⁻)
5. **Equalize and add** — cancel electrons
6. **Verify** — atoms AND charge must balance


---

### Common Patterns to Recognize

| Species | Typical Behavior | Product |
|---------|-----------------|---------|
| MnO₄⁻ (acidic) | Strong oxidizer | Mn²⁺ |
| MnO₄⁻ (basic) | Moderate oxidizer | MnO₂ |
| Cr₂O₇²⁻ (acidic) | Strong oxidizer | Cr³⁺ |
| NO₃⁻ (acidic, dilute) | Oxidizer | NO |
| NO₃⁻ (acidic, conc.) | Oxidizer | NO₂ |
| H₂O₂ | Can oxidize or reduce | O₂ or H₂O |
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
            question: 'Balance in acidic solution: Cr₂O₇²⁻ + I⁻ → Cr³⁺ + I₂. What is the coefficient of I⁻?',
            options: [
              '2',
              '3',
              '6',
              '7'
            ],
            correctAnswer: 2,
            explanation: 'Reduction: Cr₂O₇²⁻ → 2Cr³⁺ (gain 6e⁻). Oxidation: 2I⁻ → I₂ (lose 2e⁻). Equalize: multiply oxidation by 3 → 6I⁻ → 3I₂ + 6e⁻. Balanced: Cr₂O₇²⁻ + 6I⁻ + 14H⁺ → 2Cr³⁺ + 3I₂ + 7H₂O.'
          },
          {
            question: 'In the balanced equation above, the coefficient of H⁺ is:',
            options: [
              '6',
              '7',
              '12',
              '14'
            ],
            correctAnswer: 3,
            explanation: 'The reduction half-reaction: 6e⁻ + 14H⁺ + Cr₂O₇²⁻ → 2Cr³⁺ + 7H₂O. There are 7 O atoms on the left → 7H₂O on the right → 14H needed → 14H⁺ on the left.'
          },
          {
            question: 'Balance in acidic solution: H₂O₂ + Fe²⁺ → H₂O + Fe³⁺. What is the coefficient of Fe²⁺?',
            options: [
              '1',
              '2',
              '3',
              '4'
            ],
            correctAnswer: 1,
            explanation: 'Reduction: H₂O₂ + 2H⁺ + 2e⁻ → 2H₂O (O goes from −1 to −2, gaining 2e⁻ total). Oxidation: Fe²⁺ → Fe³⁺ + e⁻. Equalize: multiply oxidation by 2. Result: H₂O₂ + 2Fe²⁺ + 2H⁺ → 2H₂O + 2Fe³⁺.'
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
            question: 'Balance in basic solution: MnO₄⁻ + CN⁻ → MnO₂ + CNO⁻. After converting to basic, which species appear in the final equation?',
            options: [
              'H⁺ and H₂O only',
              'OH⁻ and H₂O only',
              'H⁺, OH⁻, and H₂O',
              'None of these — only the redox species'
            ],
            correctAnswer: 1,
            explanation: 'In basic solution, after converting from acidic form, the equation contains OH⁻ and H₂O but NO H⁺. All H⁺ ions have been neutralized by adding OH⁻.'
          },
          {
            question: 'In basic solution: Al(s) + MnO₄⁻ → Al(OH)₄⁻ + MnO₂. How many electrons does each Al atom lose?',
            options: [
              '1',
              '2',
              '3',
              '4'
            ],
            correctAnswer: 2,
            explanation: 'Al goes from 0 (in Al metal) to +3 (in Al(OH)₄⁻, since 4 OH⁻ contributes −4 charge and the ion is −1, so Al = +3). That\'s a loss of 3 electrons per Al atom.'
          },
          {
            question: 'When balancing CrO₄²⁻ + S²⁻ → Cr(OH)₃ + S in basic solution, the final balanced equation will have:',
            options: [
              'H⁺ on the reactant side',
              'OH⁻ on the reactant side',
              'OH⁻ on the product side',
              'No H₂O or OH⁻'
            ],
            correctAnswer: 1,
            explanation: 'In basic solution, after fully balancing, OH⁻ typically appears. For this equation, OH⁻ and H₂O appear on specific sides depending on the balance. After converting from acidic, OH⁻ ends up on the reactant side with H₂O on the product side.'
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
        hint1: 'In Cr₂O₇²⁻: 2(Cr) + 7(−2) = −2 → 2Cr = +12 → Cr = ?',
        hint2: 'I₂ is a free element — what is the oxidation state of a free element?',
        hint3: 'In SO₃²⁻: S + 3(−2) = −2 → S − 6 = −2 → S = ?',
        explanation: '1) In Cr₂O₇²⁻: 2Cr + 7(−2) = −2 → 2Cr = +12 → Cr = +6. Each Cr goes from +6 to +3. 2) I₂ is a free element: oxidation state = 0. Each I goes from −1 to 0. 3) In SO₃²⁻: S + 3(−2) = −2 → S = +4. S goes from +4 to +6.'
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
            label: 'MnO₄⁻ in acidic solution typically gets reduced to',
            options: ['MnO₂', 'Mn²⁺', 'Mn', 'MnO₃⁻']
          },
          {
            label: 'MnO₄⁻ in basic or neutral solution typically gets reduced to',
            options: ['MnO₂', 'Mn²⁺', 'Mn', 'MnO₃⁻']
          },
          {
            label: 'H₂O₂ acting as a reducing agent is oxidized to',
            options: ['H₂O', 'O₂', 'OH⁻', 'H₂']
          },
          {
            label: 'The number of electrons transferred must be equal in both half-reactions because',
            options: ['it makes the math easier', 'electrons cannot be created or destroyed', 'it balances hydrogen', 'it balances oxygen']
          }
        ],
        correctAnswers: ['Mn²⁺', 'MnO₂', 'O₂', 'electrons cannot be created or destroyed'],
        hint1: 'Acidic conditions allow Mn to be fully reduced to +2.',
        hint2: 'In basic/neutral, MnO₄⁻ is partially reduced (Mn goes from +7 to +4).',
        hint3: 'When H₂O₂ is oxidized, O goes from −1 to 0.',
        explanation: 'MnO₄⁻ → Mn²⁺ in acid (complete reduction). MnO₄⁻ → MnO₂ in basic/neutral. H₂O₂ oxidized → O₂ (O: −1 → 0). Electron conservation: e⁻ lost must equal e⁻ gained.'
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
            question: 'Balance in acidic solution: MnO₄⁻ + C₂O₄²⁻ → Mn²⁺ + CO₂. The coefficient of MnO₄⁻ is:',
            options: [
              '2',
              '3',
              '4',
              '5'
            ],
            correctAnswer: 0,
            explanation: 'Reduction: MnO₄⁻ → Mn²⁺ gains 5e⁻. Oxidation: C₂O₄²⁻ → 2CO₂ loses 2e⁻. LCM(5,2) = 10. Multiply: 2MnO₄⁻ (10e⁻) and 5C₂O₄²⁻ (10e⁻). Balanced: 2MnO₄⁻ + 5C₂O₄²⁻ + 16H⁺ → 2Mn²⁺ + 10CO₂ + 8H₂O.'
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
