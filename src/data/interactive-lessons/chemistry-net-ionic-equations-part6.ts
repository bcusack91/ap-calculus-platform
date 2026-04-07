export const chemNetIonicEquationsPart6Data = {
  topicSlug: 'net-ionic-equations',
  sections: [
    {
      id: 'ni6-intro',
      type: 'text' as const,
      content: `
# 🧪 Problem-Solving Workshop

**Part 6 of 7 — Writing Net Ionic Equations for Various Reaction Types**

Time to practice the complete process — from identifying the reaction type, through molecular and complete ionic equations, to the final net ionic equation. This workshop covers precipitation, acid-base, and gas-forming reactions.
      `
    },
    {
      id: 'ni6-gas-forming',
      type: 'text' as const,
      content: `
## ⚗️ Gas-Forming Reactions

Some double-replacement reactions produce an **unstable compound** that decomposes into a gas and water. These are important driving forces.


---

### Common Gas-Forming Patterns

| Unstable Product | Decomposes Into | Gas Produced |
|-----------------|-----------------|--------------|
| H₂CO₃ | H₂O + CO₂ | Carbon dioxide |
| H₂SO₃ | H₂O + SO₂ | Sulfur dioxide |
| NH₄OH | H₂O + NH₃ | Ammonia |
| H₂S | stays as H₂S(g) | Hydrogen sulfide |


---

### Example: Acid + Carbonate

$$2\\text{HCl}(aq) + \\text{Na}_2\\text{CO}_3(aq) \\rightarrow 2\\text{NaCl}(aq) + \\text{H}_2\\text{O}(l) + \\text{CO}_2(g)$$

**Net ionic:**
$$2\\text{H}^+(aq) + \\text{CO}_3^{2-}(aq) \\rightarrow \\text{H}_2\\text{O}(l) + \\text{CO}_2(g)$$

The fizzing you see when acid hits baking soda is CO₂ gas escaping!
      `
    },
    {
      id: 'ni6-systematic-approach',
      type: 'text' as const,
      content: `
## 🛠️ Systematic Problem-Solving Approach

### The 5-Step Method

| Step | Action | Example |
|------|--------|---------|
| 1 | **Identify** reaction type | Double replacement |
| 2 | **Write** balanced molecular equation | Include phase labels |
| 3 | **Split** aqueous strong electrolytes | Ions for soluble salts, strong acids/bases |
| 4 | **Cancel** spectator ions | Same ion on both sides |
| 5 | **Verify** net ionic equation | Atoms and charges balanced |


---

### Decision Tree for Splitting

Ask: Is this species...
- A solid, liquid, or gas? → **Keep molecular**
- A weak electrolyte? → **Keep molecular**
- An aqueous strong electrolyte? → **Split into ions**


---

### Common Mistakes to Avoid

1. Splitting a precipitate into ions (NO — it\'s a solid!)
2. Splitting a weak acid like HF or CH₃COOH (NO — weak electrolyte!)
3. Forgetting to balance the molecular equation first
4. Not checking charge balance in the net ionic equation
      `
    },
    {
      id: 'ni6-practice-quiz',
      type: 'multiple-choice' as const,
      content: `
**Mixed Practice Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is the net ionic equation for: Na₂CO₃(aq) + 2HCl(aq) → 2NaCl(aq) + H₂O(l) + CO₂(g)?',
            options: [
              '$\\text{Na}_2\\text{CO}_3(aq) + 2\\text{HCl}(aq) \\rightarrow 2\\text{NaCl}(aq) + \\text{H}_2\\text{O}(l) + \\text{CO}_2(g)$',
              '$\\text{CO}_3^{2-}(aq) + 2\\text{H}^+(aq) \\rightarrow \\text{H}_2\\text{O}(l) + \\text{CO}_2(g)$',
              '$\\text{Na}^+(aq) + \\text{Cl}^-(aq) \\rightarrow \\text{NaCl}(aq)$',
              '$2\\text{H}^+(aq) + \\text{CO}_3^{2-}(aq) \\rightarrow \\text{H}_2\\text{CO}_3(aq)$'
            ],
            correctAnswer: 1,
            explanation: 'Na⁺ and Cl⁻ are spectators. The net ionic equation shows H⁺ reacting with CO₃²⁻ to form H₂O and CO₂ (H₂CO₃ is unstable and decomposes). Charge: 2(+1) + (−2) = 0 on both sides ✓.'
          },
          {
            question: 'When solutions of (NH₄)₂SO₄ and Ba(OH)₂ are mixed, what are the driving forces?',
            options: [
              'Only a precipitate forms',
              'Only a gas forms',
              'Both a precipitate (BaSO₄) and a gas (NH₃) form',
              'No reaction occurs'
            ],
            correctAnswer: 2,
            explanation: '(NH₄)₂SO₄ + Ba(OH)₂ produces BaSO₄(s) — an insoluble precipitate — AND NH₄OH, which decomposes to NH₃(g) + H₂O. Two driving forces make this reaction highly favorable!'
          },
          {
            question: 'What is the net ionic equation for: AgNO₃(aq) + NaBr(aq) → AgBr(s) + NaNO₃(aq)?',
            options: [
              '$\\text{Na}^+(aq) + \\text{NO}_3^-(aq) \\rightarrow \\text{NaNO}_3(aq)$',
              '$\\text{Ag}^+(aq) + \\text{Br}^-(aq) \\rightarrow \\text{AgBr}(s)$',
              '$\\text{AgNO}_3(aq) + \\text{NaBr}(aq) \\rightarrow \\text{AgBr}(s) + \\text{NaNO}_3(aq)$',
              '$\\text{Ag}^+(aq) + \\text{NO}_3^-(aq) + \\text{Na}^+(aq) + \\text{Br}^-(aq) \\rightarrow \\text{AgBr}(s)$'
            ],
            correctAnswer: 1,
            explanation: 'Na⁺ and NO₃⁻ are spectators. The net ionic equation is simply Ag⁺(aq) + Br⁻(aq) → AgBr(s). Charge: (+1) + (−1) = 0 on left; 0 on right ✓.'
          },
          {
            question: 'H₂CO₃ appears in the intermediate step of a reaction but is not seen in the final products because:',
            options: [
              'It is a strong acid that dissociates',
              'It is unstable and decomposes into H₂O and CO₂',
              'It precipitates out of solution',
              'It evaporates immediately'
            ],
            correctAnswer: 1,
            explanation: 'H₂CO₃ (carbonic acid) is extremely unstable in solution. It rapidly decomposes: H₂CO₃ → H₂O(l) + CO₂(g). That\'s why you see bubbles when acid is added to carbonates or bicarbonates.'
          }
        ]
      }
    },
    {
      id: 'ni6-writing-drill',
      type: 'input-boxes' as const,
      content: `
**Write the Products** 🧮

Identify the precipitate or gas formed. Type the chemical formula (no phase labels).

**1)** What precipitate forms when Pb(NO₃)₂(aq) is mixed with KI(aq)?

**2)** What gas is produced when HCl(aq) reacts with NaHCO₃(aq)?

**3)** What precipitate forms when CuSO₄(aq) is mixed with NaOH(aq)?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['PbI2', 'CO2', 'Cu(OH)2'],
        hint1: 'Pb²⁺ + I⁻ → PbI₂. Is it soluble? I⁻ with Pb²⁺ is an exception.',
        hint2: 'H⁺ + HCO₃⁻ → H₂CO₃, which decomposes into...',
        hint3: 'Cu²⁺ + OH⁻ → Cu(OH)₂. Hydroxides with transition metals are...',
        explanation: '1) PbI₂ — lead(II) iodide, a bright yellow precipitate. I⁻ with Pb²⁺ is an exception to halide solubility. 2) CO₂ — H⁺ + HCO₃⁻ → H₂CO₃ → H₂O + CO₂↑. 3) Cu(OH)₂ — copper(II) hydroxide, a blue precipitate. Hydroxides of transition metals are insoluble.'
      }
    },
    {
      id: 'ni6-dropdown-practice',
      type: 'dropdown-select' as const,
      content: `
**Reaction Classification** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'HCl(aq) + NaOH(aq) → NaCl(aq) + H₂O(l) is driven by',
            options: ['precipitate formation', 'gas evolution', 'water formation', 'no driving force']
          },
          {
            label: 'When acid reacts with a carbonate, the gas produced is',
            options: ['O₂', 'H₂', 'CO₂', 'N₂']
          },
          {
            label: 'NH₄OH is unstable and decomposes into',
            options: ['NH₃ + H₂O', 'N₂ + H₂O', 'NH₄⁺ + OH⁻', 'N₂H₄ + O₂']
          },
          {
            label: 'If all possible products of mixing two solutions are soluble, the result is',
            options: ['a precipitation reaction', 'an acid-base reaction', 'no reaction', 'a redox reaction']
          }
        ],
        correctAnswers: ['water formation', 'CO₂', 'NH₃ + H₂O', 'no reaction'],
        hint1: 'Acid-base reactions form water as the driving force.',
        hint2: 'Carbonates react with acid: CO₃²⁻ + 2H⁺ → H₂CO₃ → ?',
        hint3: 'NH₄OH is essentially NH₃ dissolved in water.',
        explanation: 'Strong acid + strong base: water formation. Acid + carbonate → H₂CO₃ → H₂O + CO₂. NH₄OH → NH₃(g) + H₂O(l). All soluble products = no driving force = no reaction.'
      }
    },
    {
      id: 'ni6-challenge-quiz',
      type: 'multiple-choice' as const,
      content: `
**Challenge Problems** 🏆
      `,
      exercise: {
        questions: [
          {
            question: 'What is the net ionic equation for: 2HNO₃(aq) + Ca(OH)₂(aq) → Ca(NO₃)₂(aq) + 2H₂O(l)?',
            options: [
              '$\\text{H}^+(aq) + \\text{OH}^-(aq) \\rightarrow \\text{H}_2\\text{O}(l)$',
              '$\\text{HNO}_3(aq) + \\text{Ca(OH)}_2(aq) \\rightarrow \\text{Ca(NO}_3)_2(aq) + \\text{H}_2\\text{O}(l)$',
              '$\\text{Ca}^{2+}(aq) + 2\\text{NO}_3^-(aq) \\rightarrow \\text{Ca(NO}_3)_2(aq)$',
              '$2\\text{H}^+(aq) + \\text{Ca(OH)}_2(aq) \\rightarrow \\text{Ca}^{2+}(aq) + 2\\text{H}_2\\text{O}(l)$'
            ],
            correctAnswer: 0,
            explanation: 'HNO₃ is a strong acid, Ca(OH)₂ is a strong base (soluble in dilute solution). Both dissociate fully. Ca²⁺ and NO₃⁻ are spectators. Net ionic: H⁺(aq) + OH⁻(aq) → H₂O(l).'
          },
          {
            question: 'When Na₂S(aq) is mixed with H₂SO₄(aq), the net ionic equation is:',
            options: [
              '$\\text{Na}^+(aq) + \\text{SO}_4^{2-}(aq) \\rightarrow \\text{Na}_2\\text{SO}_4(s)$',
              '$\\text{S}^{2-}(aq) + 2\\text{H}^+(aq) \\rightarrow \\text{H}_2\\text{S}(g)$',
              '$\\text{S}^{2-}(aq) + \\text{SO}_4^{2-}(aq) \\rightarrow \\text{S}_2\\text{O}_4^{4-}(aq)$',
              '$2\\text{Na}^+(aq) + \\text{SO}_4^{2-}(aq) \\rightarrow \\text{Na}_2\\text{SO}_4(aq)$'
            ],
            correctAnswer: 1,
            explanation: 'S²⁻ + 2H⁺ → H₂S(g). H₂S is a gas that escapes the solution (driving force). Na⁺ and SO₄²⁻ are spectators. Charge check: (−2) + 2(+1) = 0 on both sides ✓.'
          }
        ]
      }
    },
    {
      id: 'ni6-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Problem-Solving Workshop** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following pairs will NOT produce a reaction when mixed?',
            options: [
              'AgNO₃(aq) + NaCl(aq)',
              'HCl(aq) + NaHCO₃(aq)',
              'KNO₃(aq) + NaBr(aq)',
              'Ba(NO₃)₂(aq) + Na₂SO₄(aq)'
            ],
            correctAnswer: 2,
            explanation: 'KNO₃ + NaBr → KBr + NaNO₃. All four compounds are soluble — no precipitate, no gas, no water formed. No driving force = no reaction.'
          },
          {
            question: 'The net ionic equation for CH₃COOH(aq) + NaHCO₃(aq) → NaCH₃COO(aq) + H₂O(l) + CO₂(g) is:',
            options: [
              '$\\text{H}^+(aq) + \\text{HCO}_3^-(aq) \\rightarrow \\text{H}_2\\text{O}(l) + \\text{CO}_2(g)$',
              '$\\text{CH}_3\\text{COOH}(aq) + \\text{HCO}_3^-(aq) \\rightarrow \\text{CH}_3\\text{COO}^-(aq) + \\text{H}_2\\text{O}(l) + \\text{CO}_2(g)$',
              '$\\text{CH}_3\\text{COOH}(aq) + \\text{NaHCO}_3(aq) \\rightarrow \\text{NaCH}_3\\text{COO}(aq) + \\text{H}_2\\text{O}(l) + \\text{CO}_2(g)$',
              '$\\text{Na}^+(aq) + \\text{CH}_3\\text{COO}^-(aq) \\rightarrow \\text{NaCH}_3\\text{COO}(aq)$'
            ],
            correctAnswer: 1,
            explanation: 'CH₃COOH is a weak acid → stays molecular. NaHCO₃ splits: Na⁺ + HCO₃⁻. Na⁺ is the spectator. Products: CH₃COO⁻(aq) + H₂O(l) + CO₂(g). The weak acid is NOT split into H⁺.'
          }
        ]
      }
    }
  ]
}
