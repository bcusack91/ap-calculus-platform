export const chemNetIonicEquationsPart7Data = {
  topicSlug: 'net-ionic-equations',
  sections: [
    {
      id: 'ni7-intro',
      type: 'text' as const,
      content: `
# 🧪 Synthesis & AP Review

**Part 7 of 7 — AP-Style Net Ionic Equation Problems**

This final lesson brings together everything: molecular equations, complete ionic equations, net ionic equations, solubility rules, acid-base chemistry, and gas-forming reactions. The problems mirror the style and difficulty of AP Chemistry free-response questions.
      `
    },
    {
      id: 'ni7-ap-tips',
      type: 'text' as const,
      content: `
## ⚛️ AP Exam Tips for Net Ionic Equations

### What the AP Exam Expects

On the AP Chemistry exam, you may be asked to:
- Write the balanced **net ionic equation** for a described reaction
- Identify spectator ions
- Predict whether a reaction occurs
- Identify driving forces


---

### Common AP Formats

| Prompt Style | What They Want |
|-------------|----------------|
| "Write the net ionic equation for..." | Net ionic only — no molecular needed |
| "Equal volumes of 0.1 M solutions are mixed..." | Identify reaction, write net ionic |
| "Identify the spectator ions..." | Find ions unchanged on both sides |
| "Does a reaction occur? If so, write..." | Check driving forces first |


---

### Scoring Tips

1. **Correct formulas** — wrong formula = wrong answer
2. **Correct charges** — always include charges on ions
3. **Correct phases** — $(s)$, $(l)$, $(g)$, $(aq)$ matter
4. **Balanced** — both atoms and charges must balance
5. **Lowest whole-number coefficients** — simplify the equation
      `
    },
    {
      id: 'ni7-review-text',
      type: 'text' as const,
      content: `
## 🔄 Complete Review: Types of Net Ionic Equations

### Summary of All Patterns

| Reaction Type | Driving Force | Net Ionic Pattern |
|--------------|---------------|-------------------|
| Precipitation | Insoluble solid | Cation + Anion → Solid |
| Strong acid + Strong base | Water | H⁺ + OH⁻ → H₂O |
| Weak acid + Strong base | Water | HA + OH⁻ → A⁻ + H₂O |
| Strong acid + Weak base | Proton transfer | H⁺ + B → BH⁺ |
| Acid + Carbonate | Gas + Water | 2H⁺ + CO₃²⁻ → H₂O + CO₂ |
| Acid + Bicarbonate | Gas + Water | H⁺ + HCO₃⁻ → H₂O + CO₂ |
| Acid + Sulfide | Gas | 2H⁺ + S²⁻ → H₂S(g) |


---

### Quick Solubility Reminders

- **Always soluble:** Na⁺, K⁺, NH₄⁺, NO₃⁻
- **Usually soluble:** Cl⁻, Br⁻, I⁻ (except Ag⁺, Pb²⁺, Hg₂²⁺)
- **Usually soluble:** SO₄²⁻ (except Ba²⁺, Pb²⁺, Ca²⁺, Sr²⁺)
- **Usually insoluble:** OH⁻, S²⁻, CO₃²⁻, PO₄³⁻ (except Group 1, NH₄⁺)
      `
    },
    {
      id: 'ni7-ap-quiz-1',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Questions — Set 1** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Equal volumes of 0.10 M silver nitrate and 0.10 M sodium chromate are mixed. The net ionic equation is:',
            options: [
              '$\\text{Ag}^+(aq) + \\text{CrO}_4^{2-}(aq) \\rightarrow \\text{AgCrO}_4(s)$',
              '$2\\text{Ag}^+(aq) + \\text{CrO}_4^{2-}(aq) \\rightarrow \\text{Ag}_2\\text{CrO}_4(s)$',
              '$\\text{Na}^+(aq) + \\text{NO}_3^-(aq) \\rightarrow \\text{NaNO}_3(s)$',
              '$\\text{Ag}^+(aq) + \\text{NO}_3^-(aq) \\rightarrow \\text{AgNO}_3(s)$'
            ],
            correctAnswer: 1,
            explanation: 'Ag₂CrO₄ is insoluble (a dark red precipitate). The formula requires 2 Ag⁺ per CrO₄²⁻ because Ag is +1 and CrO₄ is −2. Net ionic: 2Ag⁺(aq) + CrO₄²⁻(aq) → Ag₂CrO₄(s). Charge: 2(+1) + (−2) = 0 ✓.'
          },
          {
            question: 'A solution of sulfuric acid is added to a solution of barium hydroxide. The net ionic equation is:',
            options: [
              '$\\text{H}^+(aq) + \\text{OH}^-(aq) \\rightarrow \\text{H}_2\\text{O}(l)$',
              '$\\text{Ba}^{2+}(aq) + \\text{SO}_4^{2-}(aq) \\rightarrow \\text{BaSO}_4(s)$',
              '$\\text{Ba}^{2+}(aq) + \\text{SO}_4^{2-}(aq) + \\text{H}^+(aq) + \\text{OH}^-(aq) \\rightarrow \\text{BaSO}_4(s) + \\text{H}_2\\text{O}(l)$',
              '$\\text{H}_2\\text{SO}_4(aq) + \\text{Ba(OH)}_2(aq) \\rightarrow \\text{BaSO}_4(s) + 2\\text{H}_2\\text{O}(l)$'
            ],
            correctAnswer: 2,
            explanation: 'This reaction has TWO driving forces: BaSO₄(s) precipitate AND H₂O formation. There are NO spectator ions! Every ion participates. The net ionic equation includes all species.'
          },
          {
            question: 'Excess hydrochloric acid is added to a solution of potassium carbonate. What is observed?',
            options: [
              'A white precipitate forms',
              'The solution turns blue',
              'Bubbles of gas are produced',
              'No visible change occurs'
            ],
            correctAnswer: 2,
            explanation: '2H⁺(aq) + CO₃²⁻(aq) → H₂O(l) + CO₂(g). The CO₂ gas produces visible bubbles (effervescence). This is a classic observation on the AP exam.'
          }
        ]
      }
    },
    {
      id: 'ni7-ap-input',
      type: 'input-boxes' as const,
      content: `
**AP-Style Free Response Practice** 🧮

For each scenario, identify the precipitate formed (write formula) or type **NR** if no reaction occurs.

**1)** Solutions of iron(III) nitrate and sodium hydroxide are mixed.

**2)** Solutions of ammonium chloride and potassium nitrate are mixed.

**3)** Solutions of lead(II) nitrate and sodium sulfate are mixed.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['Fe(OH)3', 'NR', 'PbSO4'],
        hint1: 'Fe³⁺ + OH⁻ → Fe(OH)₃. Is Fe(OH)₃ soluble?',
        hint2: 'Products would be NH₄NO₃ and KCl. Are either insoluble?',
        hint3: 'Pb²⁺ + SO₄²⁻ → PbSO₄. Is SO₄²⁻ soluble with Pb²⁺?',
        explanation: '1) Fe(OH)₃ — iron(III) hydroxide is insoluble (rust-brown precipitate). 2) NR — both NH₄NO₃ and KCl are soluble. No driving force. 3) PbSO₄ — sulfate is generally soluble, but Pb²⁺ is one of the exceptions → white precipitate.'
      }
    },
    {
      id: 'ni7-dropdown-review',
      type: 'dropdown-select' as const,
      content: `
**AP Concept Review** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'In the reaction H₂SO₄(aq) + Ba(OH)₂(aq), the number of spectator ions is',
            options: ['0', '1', '2', '4']
          },
          {
            label: 'The net ionic equation for ANY strong acid + strong base reaction is',
            options: ['unique to each pair', 'H⁺ + OH⁻ → H₂O', 'HA + BOH → BA + H₂O', 'always involves a precipitate']
          },
          {
            label: 'When HCl is added to Na₂CO₃, the unstable intermediate is',
            options: ['NaCl', 'H₂CO₃', 'CO₂', 'HClCO₃']
          },
          {
            label: 'A student observes a rust-brown precipitate when mixing two solutions. The precipitate is most likely',
            options: ['CuSO₄', 'AgCl', 'Fe(OH)₃', 'BaSO₄']
          }
        ],
        correctAnswers: ['0', 'H⁺ + OH⁻ → H₂O', 'H₂CO₃', 'Fe(OH)₃'],
        hint1: 'Both BaSO₄ and H₂O form — does anything remain as a spectator?',
        hint2: 'The salt ions are always spectators in strong-strong reactions.',
        hint3: 'H⁺ + CO₃²⁻ first forms H₂CO₃, which then decomposes.',
        explanation: 'H₂SO₄ + Ba(OH)₂: BaSO₄ precipitates and H₂O forms — zero spectators! Strong-strong: always H⁺ + OH⁻ → H₂O. Acid + carbonate → H₂CO₃ (unstable) → H₂O + CO₂. Rust-brown precipitate = Fe(OH)₃.'
      }
    },
    {
      id: 'ni7-ap-quiz-2',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Questions — Set 2** 🏆
      `,
      exercise: {
        questions: [
          {
            question: 'A student adds dilute HCl to an unknown white solid and observes vigorous bubbling. The solid is most likely:',
            options: [
              'NaCl',
              'BaSO₄',
              'CaCO₃',
              'AgCl'
            ],
            correctAnswer: 2,
            explanation: 'Bubbling with acid indicates gas formation. CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂↑. The CO₂ gas causes the bubbling. NaCl, BaSO₄, and AgCl would not produce gas with HCl.'
          },
          {
            question: 'For the reaction: HF(aq) + NaOH(aq) → NaF(aq) + H₂O(l), the spectator ion(s) are:',
            options: [
              'H⁺ and F⁻',
              'Na⁺ only',
              'Na⁺ and F⁻',
              'Na⁺ and OH⁻'
            ],
            correctAnswer: 1,
            explanation: 'HF is a weak acid — it stays molecular, so F⁻ is NOT a separate species on the reactant side. NaOH dissociates to Na⁺ + OH⁻, and NaF dissociates to Na⁺ + F⁻. Na⁺ appears on both sides → only spectator.'
          }
        ]
      }
    },
    {
      id: 'ni7-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Final Exit Quiz — Net Ionic Equations Mastery** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Solutions of calcium chloride and sodium phosphate are mixed. The net ionic equation is:',
            options: [
              '$\\text{Ca}^{2+}(aq) + \\text{PO}_4^{3-}(aq) \\rightarrow \\text{CaPO}_4(s)$',
              '$3\\text{Ca}^{2+}(aq) + 2\\text{PO}_4^{3-}(aq) \\rightarrow \\text{Ca}_3(\\text{PO}_4)_2(s)$',
              '$\\text{Na}^+(aq) + \\text{Cl}^-(aq) \\rightarrow \\text{NaCl}(s)$',
              'No reaction occurs'
            ],
            correctAnswer: 1,
            explanation: 'Ca₃(PO₄)₂ is insoluble (phosphates are generally insoluble except with Group 1/NH₄⁺). The formula needs 3 Ca²⁺ and 2 PO₄³⁻ for charge balance: 3(+2) + 2(−3) = 0. Na⁺ and Cl⁻ are spectators.'
          },
          {
            question: 'Which statement best explains why net ionic equations are useful?',
            options: [
              'They show the spectator ions clearly',
              'They show only the species that undergo a chemical change',
              'They make equations harder to balance',
              'They always involve precipitates'
            ],
            correctAnswer: 1,
            explanation: 'Net ionic equations show only the species that actually participate in the chemical change — the essence of the reaction. They remove the "noise" of spectator ions to reveal what\'s really happening.'
          }
        ]
      }
    }
  ]
}
