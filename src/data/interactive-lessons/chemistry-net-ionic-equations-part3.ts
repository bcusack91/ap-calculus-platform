export const chemNetIonicEquationsPart3Data = {
  topicSlug: 'net-ionic-equations',
  sections: [
    {
      id: 'ni3-intro',
      type: 'text' as const,
      content: `
# 🧪 Net Ionic Equations

**Part 3 of 7 — Removing Spectator Ions**

The complete ionic equation shows every ion in solution, but many of those ions don\'t actually **do** anything — they\'re just along for the ride. By removing these **spectator ions**, we reveal the **net ionic equation**: the essence of what\'s really happening in the reaction.
      `
    },
    {
      id: 'ni3-spectator-ions',
      type: 'text' as const,
      content: `
## ⚛️ Spectator Ions

**Spectator ions** are ions that appear in the same form on both sides of the complete ionic equation. They don\'t participate in the actual reaction.


---

### Example

Complete ionic equation:

$$\\text{Ag}^+(aq) + \\underset{\\text{spectator}}{\\text{NO}_3^-(aq)} + \\underset{\\text{spectator}}{\\text{Na}^+(aq)} + \\text{Cl}^-(aq) \\rightarrow \\text{AgCl}(s) + \\underset{\\text{spectator}}{\\text{Na}^+(aq)} + \\underset{\\text{spectator}}{\\text{NO}_3^-(aq)}$$

- **Na⁺** appears on both sides → spectator
- **NO₃⁻** appears on both sides → spectator
- **Ag⁺** reacts with Cl⁻ to form AgCl(s) → NOT spectators


---

### Removing Spectators

Cancel ions that appear identically on both sides:

$$\\text{Ag}^+(aq) + \\cancel{\\text{NO}_3^-(aq)} + \\cancel{\\text{Na}^+(aq)} + \\text{Cl}^-(aq) \\rightarrow \\text{AgCl}(s) + \\cancel{\\text{Na}^+(aq)} + \\cancel{\\text{NO}_3^-(aq)}$$


---

### Net Ionic Equation

$$\\text{Ag}^+(aq) + \\text{Cl}^-(aq) \\rightarrow \\text{AgCl}(s)$$

This is the simplest representation showing only what **changes**.
      `
    },
    {
      id: 'ni3-steps',
      type: 'text' as const,
      content: `
## 📋 Steps to Write a Net Ionic Equation

### The Complete Process

| Step | Action |
|------|--------|
| 1 | Write the balanced **molecular equation** with phase labels |
| 2 | Split all aqueous strong electrolytes into ions → **complete ionic equation** |
| 3 | Identify and cancel **spectator ions** (same on both sides) |
| 4 | Write the remaining species → **net ionic equation** |
| 5 | Verify: atoms balanced and charge balanced |


---

### Driving Forces

A reaction occurs (and a net ionic equation exists) when at least one of these forms:

| Driving Force | Example |
|---------------|---------|
| **Precipitate** (insoluble solid) | AgCl(s), BaSO₄(s) |
| **Water** (from acid-base) | H₂O(l) |
| **Gas** | CO₂(g), H₂S(g) |

If none of these forms, there is **no reaction** (NR) and all ions are spectators.
      `
    },
    {
      id: 'ni3-worked-example',
      type: 'text' as const,
      content: `
## 🧪 Worked Example: No Reaction

**Mix NaCl(aq) and KNO₃(aq)**

**Step 1 — Predict products:** Swapping ions gives NaNO₃ and KCl.

**Step 2 — Check solubility:** NaNO₃ is soluble. KCl is soluble. No precipitate forms!

**Step 3 — Complete ionic equation:**

$$\\text{Na}^+(aq) + \\text{Cl}^-(aq) + \\text{K}^+(aq) + \\text{NO}_3^-(aq) \\rightarrow \\text{Na}^+(aq) + \\text{NO}_3^-(aq) + \\text{K}^+(aq) + \\text{Cl}^-(aq)$$

**Step 4:** Every ion is a spectator! All ions appear identically on both sides.

**Conclusion:** No net ionic equation — **no reaction (NR)**.


---

### Key Lesson

Just because you can write a double-replacement equation doesn\'t mean a reaction occurs. You must have a **driving force** (precipitate, water, or gas).
      `
    },
    {
      id: 'ni3-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Net Ionic Equations Concept Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Spectator ions are ions that:',
            options: [
              'Form a precipitate',
              'Appear unchanged on both sides of the equation',
              'Are always polyatomic',
              'Only appear on the product side'
            ],
            correctAnswer: 1,
            explanation: 'Spectator ions appear in the same form on both sides of the complete ionic equation. They do not participate in the net reaction and are canceled when writing the net ionic equation.'
          },
          {
            question: 'What is the net ionic equation for: Ba(NO₃)₂(aq) + Na₂SO₄(aq) → BaSO₄(s) + 2NaNO₃(aq)?',
            options: [
              '$\\text{Ba}^{2+}(aq) + \\text{SO}_4^{2-}(aq) \\rightarrow \\text{BaSO}_4(s)$',
              '$\\text{Ba}^{2+}(aq) + \\text{Na}_2\\text{SO}_4(aq) \\rightarrow \\text{BaSO}_4(s) + 2\\text{Na}^+(aq)$',
              '$\\text{Ba(NO}_3)_2(aq) + \\text{SO}_4^{2-}(aq) \\rightarrow \\text{BaSO}_4(s) + 2\\text{NO}_3^-(aq)$',
              '$2\\text{Na}^+(aq) + \\text{SO}_4^{2-}(aq) \\rightarrow \\text{Na}_2\\text{SO}_4(s)$'
            ],
            correctAnswer: 0,
            explanation: 'Na⁺ and NO₃⁻ are spectators (they appear on both sides). Removing them leaves: Ba²⁺(aq) + SO₄²⁻(aq) → BaSO₄(s). This is the net ionic equation.'
          },
          {
            question: 'Which of the following is a driving force for a reaction to occur?',
            options: [
              'Formation of a soluble salt',
              'Both reactants being aqueous',
              'Formation of a precipitate',
              'All ions being spectators'
            ],
            correctAnswer: 2,
            explanation: 'A reaction occurs when a driving force is present: formation of a precipitate (insoluble solid), water, or a gas. If all products are soluble, there is no driving force and no reaction occurs.'
          },
          {
            question: 'If mixing two aqueous solutions produces no precipitate, no gas, and no water, then:',
            options: [
              'A synthesis reaction occurs',
              'An acid-base reaction occurs',
              'No reaction occurs (NR)',
              'A redox reaction always occurs instead'
            ],
            correctAnswer: 2,
            explanation: 'Without a driving force (precipitate, gas, or water formation), there is no net change. All ions remain as spectators and no reaction occurs.'
          }
        ]
      }
    },
    {
      id: 'ni3-identify-spectators',
      type: 'input-boxes' as const,
      content: `
**Identify Spectator Ions** 🧮

For the reaction: $\\text{CaCl}_2(aq) + \\text{Na}_2\\text{CO}_3(aq) \\rightarrow \\text{CaCO}_3(s) + 2\\text{NaCl}(aq)$

List the spectator ions (type the ion formula without charge, in alphabetical order separated by a comma — e.g., "Cl, Na"):

**1)** The two spectator ions are:

For the net ionic equation $\\text{Ca}^{2+}(aq) + \\text{CO}_3^{2-}(aq) \\rightarrow \\text{CaCO}_3(s)$:

**2)** The sum of charges on the reactant side is:

**3)** The sum of charges on the product side is:
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['Cl, Na', '0', '0'],
        hint1: 'Which ions appear in the same form on both sides? Na⁺ and Cl⁻ don\'t change.',
        hint2: 'Ca²⁺ has +2 charge, CO₃²⁻ has −2 charge. What is (+2) + (−2)?',
        hint3: 'CaCO₃(s) is a neutral solid compound. What is its charge?',
        explanation: '1) Na⁺ and Cl⁻ appear on both sides → spectators. 2) Reactant charges: (+2) + (−2) = 0. 3) Product CaCO₃(s) is a neutral compound with charge 0. Charge is balanced: 0 = 0. ✓'
      }
    },
    {
      id: 'ni3-dropdown-practice',
      type: 'dropdown-select' as const,
      content: `
**Net Ionic Equation Concepts** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The net ionic equation contains only species that',
            options: ['are aqueous', 'actually participate in the reaction', 'are spectator ions', 'are on the product side']
          },
          {
            label: 'Mixing KCl(aq) and NaNO₃(aq) results in',
            options: ['a precipitate forming', 'a gas evolving', 'no reaction', 'an acid-base reaction']
          },
          {
            label: 'In the net ionic equation, charges must be',
            options: ['positive on both sides', 'zero on both sides', 'balanced (equal on both sides)', 'ignored']
          },
          {
            label: 'A net ionic equation for a precipitation reaction always shows',
            options: ['spectator ions combining', 'ions forming a solid product', 'all ions in solution', 'a gas being produced']
          }
        ],
        correctAnswers: ['actually participate in the reaction', 'no reaction', 'balanced (equal on both sides)', 'ions forming a solid product'],
        hint1: 'Spectator ions are removed — what remains?',
        hint2: 'Check: are KNO₃ and NaCl both soluble?',
        hint3: 'Just like atoms, charges must balance.',
        explanation: 'Net ionic equations show only species that change (participate). KCl + NaNO₃ → KNO₃ + NaCl: all soluble, no driving force, NR. Charges must be balanced on both sides. Precipitation net ionic equations show ions combining into a solid.'
      }
    },
    {
      id: 'ni3-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Net Ionic Equations** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'What is the net ionic equation for: Pb(NO₃)₂(aq) + 2KI(aq) → PbI₂(s) + 2KNO₃(aq)?',
            options: [
              '$\\text{Pb}^{2+}(aq) + 2\\text{I}^-(aq) \\rightarrow \\text{PbI}_2(s)$',
              '$\\text{Pb}^{2+}(aq) + 2\\text{KI}(aq) \\rightarrow \\text{PbI}_2(s) + 2\\text{K}^+(aq)$',
              '$\\text{K}^+(aq) + \\text{NO}_3^-(aq) \\rightarrow \\text{KNO}_3(aq)$',
              '$\\text{Pb(NO}_3)_2(aq) + 2\\text{I}^-(aq) \\rightarrow \\text{PbI}_2(s) + 2\\text{NO}_3^-(aq)$'
            ],
            correctAnswer: 0,
            explanation: 'K⁺ and NO₃⁻ are spectators. Removing them: Pb²⁺(aq) + 2I⁻(aq) → PbI₂(s). Charge check: (+2) + 2(−1) = 0 on left; 0 on right ✓.'
          },
          {
            question: 'How many spectator ions are in the complete ionic equation for: 2AgNO₃(aq) + Na₂CrO₄(aq) → Ag₂CrO₄(s) + 2NaNO₃(aq)?',
            options: [
              '1 (only Na⁺)',
              '2 (Na⁺ and NO₃⁻)',
              '3 (Na⁺, NO₃⁻, and CrO₄²⁻)',
              '4 (Na⁺, NO₃⁻, Ag⁺, and CrO₄²⁻)'
            ],
            correctAnswer: 1,
            explanation: 'Na⁺ and NO₃⁻ appear on both sides and do not participate in the reaction — they are the 2 spectator ions. Ag⁺ and CrO₄²⁻ form the precipitate Ag₂CrO₄(s), so they are NOT spectators.'
          }
        ]
      }
    }
  ]
}
