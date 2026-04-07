export const chemReactionTypesPart7Data = {
  topicSlug: 'reaction-types',
  sections: [
    {
      id: 'rt7-intro',
      type: 'text' as const,
      content: `
# 🎓 Synthesis & AP Review

**Part 7 of 7 — AP-Style Questions on Reaction Classification**

This final part brings together everything from the entire topic. You\'ll face AP-level questions that require you to classify reactions, predict products, balance equations, and apply your knowledge of the activity series, driving forces, and combustion patterns.
      `
    },
    {
      id: 'rt7-summary',
      type: 'text' as const,
      content: `
## 📋 Complete Reaction Type Summary

| Type | General Form | Key Signal |
|------|-------------|------------|
| Synthesis | $A + B \\rightarrow AB$ | Many → one |
| Decomposition | $AB \\rightarrow A + B$ | One → many (often with $\\Delta$) |
| Single Replacement | $A + BC \\rightarrow AC + B$ | Free element + compound |
| Double Replacement | $AB + CD \\rightarrow AD + CB$ | Two ionic compounds swap ions |
| Combustion | $\\text{Fuel} + \\text{O}_2 \\rightarrow \\text{CO}_2 + \\text{H}_2\\text{O}$ | Organic + O₂ |

## 📌 AP Exam Tips

1. **Read carefully** — the AP exam often describes reactions in words rather than symbols
2. **Know the activity series** — required for predicting single replacement
3. **Know solubility rules** — required for identifying precipitates in double replacement
4. **Balancing must be correct** — even if the products are right, unbalanced equations lose points
5. **State symbols matter** — (s), (l), (g), (aq) are often tested
6. **Net ionic equations** — AP frequently asks for these in double replacement reactions
      `
    },
    {
      id: 'rt7-net-ionic-review',
      type: 'text' as const,
      content: `
## 🔄 Net Ionic Equations — Quick Review

For double replacement reactions in solution, the AP exam often asks for net ionic equations.


---

### Steps

1. Write the balanced molecular equation
2. Write the complete ionic equation (split soluble ionic compounds into ions)
3. Cancel spectator ions (ions that appear unchanged on both sides)
4. What remains is the net ionic equation


---

### Example

**Molecular:** $\\text{AgNO}_3(\\text{aq}) + \\text{NaCl}(\\text{aq}) \\rightarrow \\text{AgCl}(\\text{s}) + \\text{NaNO}_3(\\text{aq})$

**Complete ionic:** $\\text{Ag}^+(\\text{aq}) + \\text{NO}_3^-(\\text{aq}) + \\text{Na}^+(\\text{aq}) + \\text{Cl}^-(\\text{aq}) \\rightarrow \\text{AgCl}(\\text{s}) + \\text{Na}^+(\\text{aq}) + \\text{NO}_3^-(\\text{aq})$

**Net ionic:** $\\text{Ag}^+(\\text{aq}) + \\text{Cl}^-(\\text{aq}) \\rightarrow \\text{AgCl}(\\text{s})$

The spectator ions (Na⁺ and NO₃⁻) are removed because they don\'t participate in the actual reaction.
      `
    },
    {
      id: 'rt7-ap-quiz-1',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Questions — Set 1** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A strip of zinc metal is placed in a solution of copper(II) sulfate. Which statement is correct?',
            options: [
              'No reaction occurs because copper is more reactive than zinc',
              'Zinc dissolves and copper metal deposits because zinc is more reactive',
              'Both metals dissolve in solution',
              'Copper sulfate decomposes into copper and sulfur trioxide'
            ],
            correctAnswer: 1,
            explanation: 'Zinc is above copper in the activity series. $\\text{Zn}(s) + \\text{CuSO}_4(aq) \\rightarrow \\text{ZnSO}_4(aq) + \\text{Cu}(s)$. The zinc dissolves (oxidized) and copper metal plates out (reduced).'
          },
          {
            question: 'When solutions of sodium hydroxide and hydrochloric acid are mixed, the net ionic equation is:',
            options: [
              '$\\text{Na}^+ + \\text{Cl}^- \\rightarrow \\text{NaCl}$',
              '$\\text{H}^+ + \\text{OH}^- \\rightarrow \\text{H}_2\\text{O}$',
              '$\\text{NaOH} + \\text{HCl} \\rightarrow \\text{NaCl} + \\text{H}_2\\text{O}$',
              '$\\text{Na}^+ + \\text{Cl}^- + \\text{H}_2\\text{O} \\rightarrow \\text{NaCl} + \\text{H}_2\\text{O}$'
            ],
            correctAnswer: 1,
            explanation: 'The molecular equation is NaOH + HCl → NaCl + H₂O. Na⁺ and Cl⁻ are spectator ions. The net ionic equation shows only what actually reacts: $\\text{H}^+(aq) + \\text{OH}^-(aq) \\rightarrow \\text{H}_2\\text{O}(l)$.'
          },
          {
            question: 'Heating copper(II) carbonate produces a black solid and a gas. This is best classified as:',
            options: [
              'Synthesis',
              'Combustion',
              'Decomposition',
              'Single replacement'
            ],
            correctAnswer: 2,
            explanation: '$\\text{CuCO}_3 \\xrightarrow{\\Delta} \\text{CuO}(\\text{black solid}) + \\text{CO}_2(\\text{gas})$. One reactant breaks into two simpler products — this is decomposition.'
          },
          {
            question: 'Gold does not dissolve in hydrochloric acid. This is because:',
            options: [
              'Gold is above hydrogen in the activity series',
              'Gold is below hydrogen in the activity series',
              'HCl is not an acid',
              'Gold forms a protective oxide layer'
            ],
            correctAnswer: 1,
            explanation: 'Gold is far below hydrogen in the activity series (it is the least reactive metal). Only metals above hydrogen can displace H₂ from acids. Gold requires aqua regia (HCl + HNO₃) to dissolve.'
          }
        ]
      }
    },
    {
      id: 'rt7-ap-input-drill',
      type: 'input-boxes' as const,
      content: `
**AP-Style Identification** 🧮

Classify each reaction. Type: **synthesis**, **decomposition**, **single**, **double**, or **combustion**.

**1)** $2\\text{Na} + \\text{Cl}_2 \\rightarrow 2\\text{NaCl}$

**2)** $\\text{Pb(NO}_3)_2(\\text{aq}) + 2\\text{KI}(\\text{aq}) \\rightarrow \\text{PbI}_2(\\text{s}) + 2\\text{KNO}_3(\\text{aq})$

**3)** $2\\text{C}_8\\text{H}_{18} + 25\\text{O}_2 \\rightarrow 16\\text{CO}_2 + 18\\text{H}_2\\text{O}$
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['synthesis', 'double', 'combustion'],
        hint1: 'Two elements combine to form one ionic compound.',
        hint2: 'Two aqueous ionic compounds exchange ions; a precipitate forms.',
        hint3: 'A hydrocarbon reacts with oxygen to form CO₂ and H₂O.',
        explanation: '1) Synthesis: 2Na + Cl₂ → 2NaCl (two elements → one compound). 2) Double replacement: Pb(NO₃)₂ + 2KI → PbI₂↓ + 2KNO₃ (ions exchange; precipitate forms). 3) Combustion: octane + O₂ → CO₂ + H₂O (hydrocarbon + oxygen).'
      }
    },
    {
      id: 'rt7-ap-quiz-2',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Questions — Set 2** 🔬
      `,
      exercise: {
        questions: [
          {
            question: 'A student mixes aqueous solutions of barium chloride and sodium sulfate. A white precipitate forms. The formula of the precipitate is:',
            options: [
              'NaCl',
              'BaSO₄',
              'BaNa₂',
              'Na₂Cl₂'
            ],
            correctAnswer: 1,
            explanation: '$\\text{BaCl}_2(aq) + \\text{Na}_2\\text{SO}_4(aq) \\rightarrow \\text{BaSO}_4(s) + 2\\text{NaCl}(aq)$. BaSO₄ is the insoluble precipitate (white). NaCl is soluble and remains in solution.'
          },
          {
            question: 'Which reaction represents the thermal decomposition of limestone?',
            options: [
              '$\\text{CaCO}_3 \\rightarrow \\text{CaO} + \\text{CO}_2$',
              '$\\text{CaO} + \\text{CO}_2 \\rightarrow \\text{CaCO}_3$',
              '$\\text{Ca} + \\text{CO}_3 \\rightarrow \\text{CaCO}_3$',
              '$\\text{CaCO}_3 + \\text{HCl} \\rightarrow \\text{CaCl}_2 + \\text{H}_2\\text{O} + \\text{CO}_2$'
            ],
            correctAnswer: 0,
            explanation: 'Limestone is CaCO₃. Thermal decomposition (heating) breaks it into CaO (quicklime) + CO₂. This is used industrially in cement production. Option B is the reverse (synthesis), and D is a double replacement with an acid.'
          }
        ]
      }
    },
    {
      id: 'rt7-dropdown-comprehensive',
      type: 'dropdown-select' as const,
      content: `
**Comprehensive Review — Fill in the Blanks** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The formation of rust (Fe₂O₃) from iron and oxygen is a type of',
            options: ['decomposition', 'synthesis', 'single replacement', 'combustion']
          },
          {
            label: 'In a net ionic equation, spectator ions are',
            options: ['the main reactants', 'removed because they don\'t change', 'always precipitates', 'gases that escape']
          },
          {
            label: 'Fluorine gas can displace chloride ions from NaCl because',
            options: ['F₂ is less reactive than Cl₂', 'F₂ is more reactive than Cl₂', 'NaCl is insoluble', 'fluorine is a metal']
          },
          {
            label: 'An acid reacting with a base to form salt and water is called',
            options: ['combustion', 'synthesis', 'neutralization', 'decomposition']
          }
        ],
        correctAnswers: ['synthesis', 'removed because they don\'t change', 'F₂ is more reactive than Cl₂', 'neutralization'],
        hint1: 'Two elements forming one compound.',
        hint2: 'Spectator ions appear identically on both sides.',
        hint3: 'Reactivity decreases down Group 17: F > Cl > Br > I.',
        explanation: 'Rust formation is synthesis (4Fe + 3O₂ → 2Fe₂O₃). Spectator ions don\'t participate and are removed from net ionic equations. F₂ > Cl₂ in reactivity (higher in Group 17). Acid + base → salt + water is neutralization (a type of double replacement).'
      }
    },
    {
      id: 'rt7-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Final Exit Quiz — Reaction Types Mastery** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A student combines solutions of iron(III) chloride and sodium hydroxide. A brown precipitate forms. The balanced equation is:',
            options: [
              '$\\text{FeCl}_3 + \\text{NaOH} \\rightarrow \\text{Fe(OH)}_3 + \\text{NaCl}$',
              '$\\text{FeCl}_3 + 3\\text{NaOH} \\rightarrow \\text{Fe(OH)}_3 + 3\\text{NaCl}$',
              '$3\\text{FeCl}_3 + \\text{NaOH} \\rightarrow 3\\text{Fe(OH)}_3 + \\text{NaCl}$',
              '$\\text{FeCl}_3 + 3\\text{NaOH} \\rightarrow \\text{FeO}_3 + 3\\text{NaCl} + 3\\text{H}_2$'
            ],
            correctAnswer: 1,
            explanation: 'Double replacement: Fe³⁺ pairs with OH⁻ → Fe(OH)₃ (brown precipitate). Na⁺ pairs with Cl⁻ → NaCl. Balanced: FeCl₃ + 3NaOH → Fe(OH)₃↓ + 3NaCl. Fe: 1=1 ✓, Cl: 3=3 ✓, Na: 3=3 ✓, O: 3=3 ✓, H: 3=3 ✓.'
          },
          {
            question: 'On the AP exam, which piece of information is MOST important for predicting whether a single replacement reaction occurs?',
            options: [
              'The solubility rules',
              'The activity series',
              'The molar masses of reactants',
              'The color of the solution'
            ],
            correctAnswer: 1,
            explanation: 'The activity series determines whether a free element can displace another element from a compound. Without it, you cannot predict if a single replacement reaction will proceed or result in "no reaction."'
          }
        ]
      }
    }
  ]
}
