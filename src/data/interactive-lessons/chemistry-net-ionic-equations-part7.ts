export const chemNetIonicEquationsPart7Data = {
  topicSlug: 'net-ionic-equations',
  sections: [
    {
      id: 'ni7-intro',
      type: 'text' as const,
      content: `# 🧪 Synthesis & AP Review

**Part 7 of 7 — AP-Style Net Ionic Equation Problems**

---

### Bringing It All Together

This comprehensive review connects every concept from Parts 1–6 with AP-style problems. The questions are designed to mirror what you'll see on the actual exam — multi-step, multi-concept, and requiring clear written explanations.

> 🔑 **Why this matters:** AP Chemistry exam questions rarely test one concept in isolation — success requires connecting ideas across topics.

---

### What You'll Master in Part 7
- Solving AP-style questions that integrate multiple concepts from this unit
- Writing clear, concise explanations using proper chemistry terminology
- Identifying and avoiding common AP exam traps and mistakes`
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

> 💡 **AP Scoring Tips:**
> 1. **Correct formulas** — wrong formula = wrong answer
> 2. **Correct charges** — always include charges on ions
> 3. **Correct phases** — $(s)$, $(l)$, $(g)$, $(aq)$ matter
> 4. **Balanced** — both atoms and charges must balance
> 5. **Lowest whole-number coefficients** — simplify the equation
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
| Strong acid + Strong base | Water | $H^{+}$ + $OH^{-}$ → $H_{2}O$ |
| Weak acid + Strong base | Water | HA + $OH^{-}$ → $A^{-}$ + $H_{2}O$ |
| Strong acid + Weak base | Proton transfer | $H^{+}$ + B → $BH^{+}$ |
| Acid + Carbonate | Gas + Water | $2H^{+}$ + $CO_{3}^{2-}$ → $H_{2}O$ + $CO_{2}$ |
| Acid + Bicarbonate | Gas + Water | $H^{+}$ + $HCO_{3}^{-}$ → $H_{2}O$ + $CO_{2}$ |
| Acid + Sulfide | Gas | $2H^{+}$ + $S^{2-}$ → $H_{2}S(g)$ |


---

> 🔑 **Quick Solubility Rules:**
> - **Always soluble:** $Na^{+}$, $K^{+}$, $NH_{4}^{+}$, $NO_{3}^{-}$
> - **Usually soluble:** $Cl^{-}$, $Br^{-}$, $I^{-}$ (except $Ag^{+}$, $Pb^{2+}$, $Hg_{2}^{2+}$)
> - **Usually soluble:** $SO_{4}^{2-}$ (except $Ba^{2+}$, $Pb^{2+}$, $Ca^{2+}$, $Sr^{2+}$)
> - **Usually insoluble:** $OH^{-}$, $S^{2-}$, $CO_{3}^{2-}$, $PO_{4}^{3-}$ (except Group 1, $NH_{4}^{+}$)
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
            explanation: '$Ag_{2}CrO_{4}$ is insoluble (a dark red precipitate). The formula requires 2 $Ag^{+}$ per $CrO_{4}^{2-}$ because Ag is +1 and $CrO_{4}$ is −2. Net ionic: $2Ag^{+}(aq)$ + $CrO_{4}^{2-}(aq)$ → $Ag_{2}CrO_{4}(s)$. Charge: 2(+1) + (−2) = 0 ✓.'
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
            explanation: 'This reaction has TWO driving forces: $BaSO_{4}(s)$ precipitate AND $H_{2}O$ formation. There are NO spectator ions! Every ion participates. The net ionic equation includes all species.'
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
            explanation: '$2H^{+}(aq)$ + $CO_{3}^{2-}(aq)$ → $H_{2}O(l)$ + $CO_{2}(g)$. The $CO_{2}$ gas produces visible bubbles (effervescence). This is a classic observation on the AP exam.'
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
        hint1: '$Fe^{3+}$ + $OH^{-}$ → $Fe(OH)_{3}$. Is $Fe(OH)_{3}$ soluble?',
        hint2: 'Products would be $NH_{4}NO_{3}$ and KCl. Are either insoluble?',
        hint3: '$Pb^{2+}$ + $SO_{4}^{2-}$ → $PbSO_{4}$. Is $SO_{4}^{2-}$ soluble with $Pb^{2+}$?',
        explanation: '1) $Fe(OH)_{3}$ — iron(III) hydroxide is insoluble (rust-brown precipitate). 2) NR — both $NH_{4}NO_{3}$ and KCl are soluble. No driving force. 3) $PbSO_{4}$ — sulfate is generally soluble, but $Pb^{2+}$ is one of the exceptions → white precipitate.'
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
            label: 'In the reaction $H_{2}SO_{4}(aq)$ + $Ba(OH)_{2}(aq)$, the number of spectator ions is',
            options: ['0', '1', '2', '4']
          },
          {
            label: 'The net ionic equation for ANY strong acid + strong base reaction is',
            options: ['unique to each pair', '$H^{+}$ + $OH^{-}$ → $H_{2}O$', 'HA + BOH → BA + $H_{2}O$', 'always involves a precipitate']
          },
          {
            label: 'When HCl is added to $Na_{2}CO_{3}$, the unstable intermediate is',
            options: ['NaCl', '$H_{2}CO_{3}$', '$CO_{2}$', '$HClCO_{3}$']
          },
          {
            label: 'A student observes a rust-brown precipitate when mixing two solutions. The precipitate is most likely',
            options: ['$CuSO_{4}$', 'AgCl', '$Fe(OH)_{3}$', '$BaSO_{4}$']
          }
        ],
        correctAnswers: ['0', '$H^{+}$ + $OH^{-}$ → $H_{2}O$', '$H_{2}CO_{3}$', '$Fe(OH)_{3}$'],
        hint1: 'Both $BaSO_{4}$ and $H_{2}O$ form — does anything remain as a spectator?',
        hint2: 'The salt ions are always spectators in strong-strong reactions.',
        hint3: '$H^{+}$ + $CO_{3}^{2-}$ first forms $H_{2}CO_{3}$, which then decomposes.',
        explanation: '$H_{2}SO_{4}$ + $Ba(OH)_{2}$: $BaSO_{4}$ precipitates and $H_{2}O$ forms — zero spectators! Strong-strong: always $H^{+}$ + $OH^{-}$ → $H_{2}O$. Acid + carbonate → $H_{2}CO_{3}$ (unstable) → $H_{2}O$ + $CO_{2}$. Rust-brown precipitate = $Fe(OH)_{3}$.'
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
              '$BaSO_{4}$',
              '$CaCO_{3}$',
              'AgCl'
            ],
            correctAnswer: 2,
            explanation: 'Bubbling with acid indicates gas formation. $CaCO_{3}$ + 2HCl → $CaCl_{2}$ + $H_{2}O$ + $CO_{2}$↑. The $CO_{2}$ gas causes the bubbling. NaCl, $BaSO_{4}$, and AgCl would not produce gas with HCl.'
          },
          {
            question: 'For the reaction: HF(aq) + NaOH(aq) → NaF(aq) + $H_{2}O(l)$, the spectator ion(s) are:',
            options: [
              '$H^{+}$ and $F^{-}$',
              '$Na^{+}$ only',
              '$Na^{+}$ and $F^{-}$',
              '$Na^{+}$ and $OH^{-}$'
            ],
            correctAnswer: 1,
            explanation: 'HF is a weak acid — it stays molecular, so $F^{-}$ is NOT a separate species on the reactant side. NaOH dissociates to $Na^{+}$ + $OH^{-}$, and NaF dissociates to $Na^{+}$ + $F^{-}$. $Na^{+}$ appears on both sides → only spectator.'
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
            explanation: '$Ca_{3}(PO_{4})_{2}$ is insoluble (phosphates are generally insoluble except with Group $1/NH_{4}^{+}$). The formula needs 3 $Ca^{2+}$ and 2 $PO_{4}^{3-}$ for charge balance: 3(+2) + 2(−3) = 0. $Na^{+}$ and $Cl^{-}$ are spectators.'
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
