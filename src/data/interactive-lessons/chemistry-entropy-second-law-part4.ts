export const chemEntropySecondLawPart4Data = {
  topicSlug: 'entropy-second-law',
  sections: [
    {
      id: 'en4-intro',
      type: 'text' as const,
      content: `# 🌡️ Standard Molar Entropy

**Part 4 of 7 — Absolute Entropies and How They Change**

---

### Topics in This Part

| Section |
|---------|
| 🌡️ Standard Molar Entropy ($S°$) |
| Key Values to Know |
| Patterns in Standard Entropy |
| 🔧 How Entropy Varies with Temperature |
| 🧮 $\\Delta S°$ from Standard Entropies |

> 🔑 **Key Concept:** Mastering this material will strengthen your foundation for both the AP Chemistry exam and more advanced chemistry topics.

---

### What You'll Master in Part 4
- Understanding the core concepts covered in Part 4
- Applying these ideas to solve practice problems
- Building toward AP exam readiness for this topic`
    },
    {
      id: 'en4-standard-molar',
      type: 'text' as const,
      content: `
## 🌡️ Standard Molar Entropy ($S°$)

The entropy of **one mole** of a substance at **standard conditions** (1 atm, usually 25°C).

Unlike enthalpy, entropy has **absolute** values: a table lists $S°$ itself, not a change from some reference (CED 9.2).


---

### Key Values to Know

| Substance | $S°$ [J/(mol·K)] |
|-----------|-----------------|
| $\\text{C}(s, \\text{graphite})$ | 5.7 |
| $\\text{C}(s, \\text{diamond})$ | 2.4 |
| $\\text{H}_2(g)$ | 130.7 |
| $\\text{N}_2(g)$ | 191.6 |
| $\\text{O}_2(g)$ | 205.1 |
| $\\text{H}_2\\text{O}(l)$ | 69.9 |
| $\\text{H}_2\\text{O}(g)$ | 188.8 |
| $\\text{CO}_2(g)$ | 213.7 |
| $\\text{NH}_3(g)$ | 192.5 |


---

### Patterns in Standard Entropy

1. **Gases > liquids > solids** — always!
2. **More complex molecules** have higher $S°$
3. **Heavier atoms** tend to have higher $S°$ (more accessible energy levels)
4. **Allotropes differ**: diamond (2.4) < graphite (5.7) — more ordered crystal


---

> ⚠️ **Warning:** Unlike $\\Delta H°_f$ (which is zero for elements), $S°$ is **never zero** at room temperature. Every substance has positive entropy at temperatures above 0 K — this is the #1 source of mistakes in entropy calculations!
      `
    },
    {
      id: 'en4-entropy-temperature',
      type: 'text' as const,
      content: `
## 🔧 How Entropy Varies with Temperature

As temperature increases from 0 K, entropy increases through several stages:


---

### Heating a Substance

1. **Solid phase**: $S$ increases gradually as vibrations intensify
2. **At melting point**: sudden jump in $S$ (phase change — fusion)
3. **Liquid phase**: $S$ continues to increase
4. **At boiling point**: large jump in $S$ (phase change — vaporization)
5. **Gas phase**: $S$ continues to increase


---

> 💡 **Tip:** The entropy jump at the **boiling point** is much larger than at the melting point, because the liquid → gas transition involves a vastly greater increase in molecular freedom.


---

### 🧮 $\\Delta S°$ from Standard Entropies

Any entropy change is products minus reactants (CED 9.2):

$$\\boxed{\\Delta S° = \\sum S°_{\\text{products}} - \\sum S°_{\\text{reactants}}}$$

> **Example:** Vaporizing water, $\\text{H}_2\\text{O}(l) \\rightarrow \\text{H}_2\\text{O}(g)$:
>
> $\\Delta S° = 188.8 - 69.9 = +118.9$ J/(mol·K)

The large positive value is the "big jump at the boiling point" from the list above, in numbers.
      `
    },
    {
      id: 'en4-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Standard Entropy Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Using the table, what is ΔS° for C(s, graphite) + $O_{2}(g)$ → $CO_{2}(g)$?',
            options: [
              '+2.9 J/K',
              '−2.9 J/K',
              '+424.5 J/K',
              '+208.0 J/K'
            ],
            correctAnswer: 0,
            explanation: 'ΔS° = 213.7 − (5.7 + 205.1) = 213.7 − 210.8 = +2.9 J/K. The value is small because one mole of gas becomes one mole of gas. Subtracting the other way gives −2.9, adding all three values gives 424.5, and leaving out $O_{2}$ gives 208.0.'
          },
          {
            question: 'Which has a higher standard molar entropy: $H_{2}O(l)$ or $H_{2}O(g)$?',
            options: [
              '$H_{2}O(l)$ — hydrogen bonding gives it more entropy',
              '$H_{2}O(g)$ — gas molecules have far more freedom of motion',
              'They are equal — it is the same compound',
              '$H_{2}O(l)$ — the denser liquid holds more energy'
            ],
            correctAnswer: 1,
            explanation: '$S°[\\text{H}_2\\text{O}(g)] = 188.8$ J/(mol·K) vs. $S°[\\text{H}_2\\text{O}(l)] = 69.9$ J/(mol·K). Gas particles are far more dispersed and move much more freely than particles in the liquid.'
          },
          {
            question: 'Unlike ΔH°_f for elements, the standard molar entropy S° for an element is:',
            options: [
              'Always zero, by the same convention as ΔH°f',
              'Zero only for the element\'s most stable form',
              'Always greater than zero at 298 K',
              'Sometimes zero, sometimes positive'
            ],
            correctAnswer: 2,
            explanation: '$\\Delta H°_f = 0$ for elements in their standard states (by convention), but $S°$ is an absolute value measured up from 0 K, and every substance has $S° > 0$ at temperatures above 0 K. The "zero for elements in their most stable form" convention applies to $\\Delta H°_f$, never to $S°$. These are different concepts!'
          }
        ]
      }
    },
    {
      id: 'en4-comparison-drill',
      type: 'input-boxes' as const,
      content: `
**Compare Standard Entropies** 🧮

Which substance has the HIGHER standard molar entropy? Type the chemical formula.

**1)** $\\text{H}_2\\text{O}(l)$ or $\\text{H}_2\\text{O}(g)$?

**2)** $\\text{C}(s, \\text{diamond})$ or $\\text{C}(s, \\text{graphite})$?

**3)** $\\text{O}_2(g)$ or $\\text{O}_3(g)$?
      `,
      exercise: {
        questions: [{ question: '(1)', answer: 'H2O(g)', acceptableAnswers: ['H2O(g)', 'H₂O(g)', 'H2O (g)'] }, { question: '(2)', answer: 'C(s, graphite)', acceptableAnswers: ['C(s, graphite)', 'C(graphite)', 'graphite', 'C(s,graphite)', 'C (graphite)'] }, { question: '(3)', answer: 'O3(g)', acceptableAnswers: ['O3(g)', 'O3', 'O₃(g)', 'O₃'] }],
        hint1: 'Gas always has higher entropy than liquid.',
        hint2: 'Graphite has a layered structure with more freedom than diamond\'s rigid lattice.',
        hint3: 'More atoms per molecule = more vibrational modes = more entropy.',
        explanation: '1) $H_{2}O(g)$ > $H_{2}O(l)$ — gas phase always has higher entropy. 2) Graphite > diamond — graphite\'s layered structure has more vibrational freedom. 3) $O_{3}$ > $O_{2}$ — more atoms means more ways to vibrate and store energy.'
      }
    },
    {
      id: 'en4-dropdown-practice',
      type: 'dropdown-select' as const,
      content: `
**Standard Entropy Patterns** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Expanding a gas into a larger volume at constant temperature makes its entropy',
            options: ['increase', 'decrease', 'stay the same', 'drop to zero']
          },
          {
            label: 'The largest entropy jump when heating a substance from 0 K occurs at the',
            options: ['melting point', 'boiling point', 'glass transition', 'decomposition point']
          },
          {
            label: 'Standard molar entropy values are typically reported in units of',
            options: ['kJ/mol', 'J/(mol·K)', 'J/mol', 'kJ/(mol·K)']
          },
          {
            label: 'A more complex molecule generally has',
            options: ['lower S° than a simpler one', 'the same S° as a simpler one', 'higher S° than a simpler one', 'zero S°']
          }
        ],
        correctAnswers: ['increase', 'boiling point', 'J/(mol·K)', 'higher S° than a simpler one'],
        hint1: 'In a larger volume the gas particles are more dispersed.',
        hint2: 'Liquid → gas involves a much greater increase in freedom than solid → liquid.',
        hint3: 'Entropy uses joules (not kilojoules) and includes temperature.',
        explanation: 'A larger volume disperses the gas, so S increases. The vaporization entropy jump is larger than fusion. S° is in J/(mol·K). Complex molecules have more vibrational modes → higher entropy.'
      }
    },
    {
      id: 'en4-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Standard Molar Entropy** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Using S° = 69.9 J/(mol·K) for $H_{2}O(l)$ and 188.8 J/(mol·K) for $H_{2}O(g)$, what is ΔS° when 1 mol of water vapor condenses?',
            options: [
              '−118.9 J/K',
              '+118.9 J/K',
              '+258.7 J/K',
              '−258.7 J/K'
            ],
            correctAnswer: 0,
            explanation: 'Condensation is $H_{2}O(g)$ → $H_{2}O(l)$, so ΔS° = 69.9 − 188.8 = −118.9 J/K: negative, because the gas becomes a far less dispersed liquid. +118.9 is the value for vaporization, and ±258.7 comes from adding the two entropies instead of subtracting.'
          },
          {
            question: 'Rank in order of increasing S°: Ne(g), $N_{2}(g)$, $CO_{2}(g)$',
            options: [
              'Ne < $N_{2}$ < $CO_{2}$',
              '$CO_{2}$ < $N_{2}$ < Ne',
              '$N_{2}$ < Ne < $CO_{2}$',
              'Ne < $CO_{2}$ < $N_{2}$'
            ],
            correctAnswer: 0,
            explanation: 'For gases at the same conditions, more atoms in a molecule means more ways to vibrate and rotate — so higher entropy. Ne (monatomic, S° ≈ 146 J/mol·K) < $N_{2}$ (diatomic, S° ≈ 192 J/mol·K) < $CO_{2}$ (triatomic, S° ≈ 214 J/mol·K).'
          }
        ]
      }
    }
  ]
}
