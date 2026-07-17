export const chemNetIonicEquationsPart6Data = {
  topicSlug: 'net-ionic-equations',
  sections: [
    {
      id: 'ni6-intro',
      type: 'text' as const,
      content: `# 🧪 Problem-Solving Workshop

**Part 6 of 7 — Writing Net Ionic Equations for Various Reaction Types**

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
      id: 'ni6-gas-forming',
      type: 'text' as const,
      content: `
## ⚗️ Gas-Forming Reactions

Some double-replacement reactions produce an **unstable compound** that decomposes into a gas and water. These are important driving forces.


---

### Common Gas-Forming Patterns

| Unstable Product | Decomposes Into | Gas Produced |
|-----------------|-----------------|--------------|
| $H_{2}CO_{3}$ | $H_{2}O$ + $CO_{2}$ | Carbon dioxide |
| $H_{2}SO_{3}$ | $H_{2}O$ + $SO_{2}$ | Sulfur dioxide |
| $NH_{4}OH$ | $H_{2}O$ + $NH_{3}$ | Ammonia |
| $H_{2}S$ | stays as $H_{2}S(g)$ | Hydrogen sulfide |


---

### Example: Acid + Carbonate

$$2\\text{HCl}(aq) + \\text{Na}_2\\text{CO}_3(aq) \\rightarrow 2\\text{NaCl}(aq) + \\text{H}_2\\text{O}(l) + \\text{CO}_2(g)$$

**Net ionic:**
$$\\boxed{2\\text{H}^+(aq) + \\text{CO}_3^{2-}(aq) \\rightarrow \\text{H}_2\\text{O}(l) + \\text{CO}_2(g)}$$

> 💡 **Tip:** The fizzing you see when acid hits baking soda is $CO_{2}$ gas escaping!
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

> 🔑 **Decision Tree for Splitting:**
> - A solid, liquid, or gas? → **Keep molecular**
> - A weak electrolyte? → **Keep molecular**
> - An aqueous strong electrolyte? → **Split into ions**


---

> ⚠️ **Common AP Mistakes:**
> 1. Splitting a precipitate into ions (NO — it\'s a solid!)
> 2. Splitting a weak acid like HF or $CH_{3}COOH$ (NO — weak electrolyte!)
> 3. Forgetting to balance the molecular equation first
> 4. Not checking charge balance in the net ionic equation
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
            question: 'What is the net ionic equation for: $Na_{2}CO_{3}(aq)$ + 2HCl(aq) → 2NaCl(aq) + $H_{2}O(l)$ + $CO_{2}(g)$?',
            options: [
              '$\\text{Na}_2\\text{CO}_3(aq) + 2\\text{HCl}(aq) \\rightarrow 2\\text{NaCl}(aq) + \\text{H}_2\\text{O}(l) + \\text{CO}_2(g)$',
              '$\\text{CO}_3^{2-}(aq) + 2\\text{H}^+(aq) \\rightarrow \\text{H}_2\\text{O}(l) + \\text{CO}_2(g)$',
              '$\\text{Na}^+(aq) + \\text{Cl}^-(aq) \\rightarrow \\text{NaCl}(aq)$',
              '$2\\text{H}^+(aq) + \\text{CO}_3^{2-}(aq) \\rightarrow \\text{H}_2\\text{CO}_3(aq)$'
            ],
            correctAnswer: 1,
            explanation: '$Na^{+}$ and $Cl^{-}$ are spectators. The net ionic equation shows $H^{+}$ reacting with $CO_{3}^{2-}$ to form $H_{2}O$ and $CO_{2}$ ($H_{2}CO_{3}$ is unstable and decomposes). Charge: 2(+1) + (−2) = 0 on both sides ✓.'
          },
          {
            question: 'When solutions of $(NH_{4})_{2}SO_{4}$ and $Ba(OH)_{2}$ are mixed, what are the driving forces?',
            options: [
              'Only a precipitate forms',
              'Only a gas forms',
              'Both a precipitate $(BaSO_{4})$ and a gas $(NH_{3})$ form',
              'No reaction occurs'
            ],
            correctAnswer: 2,
            explanation: '$(NH_{4})_{2}SO_{4}$ + $Ba(OH)_{2}$ produces $BaSO_{4}(s)$ — an insoluble precipitate — AND $NH_{4}OH$, which decomposes to $NH_{3}(g)$ + $H_{2}O$. Two driving forces make this reaction highly favorable!'
          },
          {
            question: 'What is the net ionic equation for: $AgNO_{3}(aq)$ + NaBr(aq) → AgBr(s) + $NaNO_{3}(aq)$?',
            options: [
              '$\\text{Na}^+(aq) + \\text{NO}_3^-(aq) \\rightarrow \\text{NaNO}_3(aq)$',
              '$\\text{Ag}^+(aq) + \\text{Br}^-(aq) \\rightarrow \\text{AgBr}(s)$',
              '$\\text{AgNO}_3(aq) + \\text{NaBr}(aq) \\rightarrow \\text{AgBr}(s) + \\text{NaNO}_3(aq)$',
              '$\\text{Ag}^+(aq) + \\text{NO}_3^-(aq) + \\text{Na}^+(aq) + \\text{Br}^-(aq) \\rightarrow \\text{AgBr}(s)$'
            ],
            correctAnswer: 1,
            explanation: '$Na^{+}$ and $NO_{3}^{-}$ are spectators. The net ionic equation is simply $Ag^{+}(aq)$ + $Br^{-}(aq)$ → AgBr(s). Charge: (+1) + (−1) = 0 on left; 0 on right ✓.'
          },
          {
            question: '$H_{2}CO_{3}$ appears in the intermediate step of a reaction but is not seen in the final products because:',
            options: [
              'It is a strong acid that dissociates',
              'It is unstable and decomposes into $H_{2}O$ and $CO_{2}$',
              'It precipitates out of solution',
              'It evaporates immediately'
            ],
            correctAnswer: 1,
            explanation: '$H_{2}CO_{3}$ (carbonic acid) is extremely unstable in solution. It rapidly decomposes: $H_{2}CO_{3}$ → $H_{2}O(l)$ + $CO_{2}(g)$. That\'s why you see bubbles when acid is added to carbonates or bicarbonates.'
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

**1)** What precipitate forms when $Pb(NO_{3})_{2}(aq)$ is mixed with KI(aq)?

**2)** What gas is produced when HCl(aq) reacts with $NaHCO_{3}(aq)$?

**3)** What precipitate forms when $CuSO_{4}(aq)$ is mixed with NaOH(aq)?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['PbI2', 'CO2', 'Cu(OH)2'],
        hint1: '$Pb^{2+}$ + $I^{-}$ → $PbI_{2}$. Is it soluble? $I^{-}$ with $Pb^{2+}$ is an exception.',
        hint2: '$H^{+}$ + $HCO_{3}^{-}$ → $H_{2}CO_{3}$, which decomposes into...',
        hint3: '$Cu^{2+}$ + $OH^{-}$ → $Cu(OH)_{2}$. Hydroxides with transition metals are...',
        explanation: '1) $PbI_{2}$ — lead(II) iodide, a bright yellow precipitate. $I^{-}$ with $Pb^{2+}$ is an exception to halide solubility. 2) $CO_{2}$ — $H^{+}$ + $HCO_{3}^{-}$ → $H_{2}CO_{3}$ → $H_{2}O$ + $CO_{2}$↑. 3) $Cu(OH)_{2}$ — copper(II) hydroxide, a blue precipitate. Hydroxides of transition metals are insoluble.'
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
            label: 'HCl(aq) + NaOH(aq) → NaCl(aq) + $H_{2}O(l)$ is driven by',
            options: ['precipitate formation', 'gas evolution', 'water formation', 'no driving force']
          },
          {
            label: 'When acid reacts with a carbonate, the gas produced is',
            options: ['$O_{2}$', '$H_{2}$', '$CO_{2}$', '$N_{2}$']
          },
          {
            label: '$NH_{4}OH$ is unstable and decomposes into',
            options: ['$NH_{3}$ + $H_{2}O$', '$N_{2}$ + $H_{2}O$', '$NH_{4}^{+}$ + $OH^{-}$', '$N_{2}H_{4}$ + $O_{2}$']
          },
          {
            label: 'If all possible products of mixing two solutions are soluble, the result is',
            options: ['a precipitation reaction', 'an acid-base reaction', 'no reaction', 'a redox reaction']
          }
        ],
        correctAnswers: ['water formation', '$CO_{2}$', '$NH_{3}$ + $H_{2}O$', 'no reaction'],
        hint1: 'Acid-base reactions form water as the driving force.',
        hint2: 'Carbonates react with acid: $CO_{3}^{2-}$ + $2H^{+}$ → $H_{2}CO_{3}$ → ?',
        hint3: '$NH_{4}OH$ is essentially $NH_{3}$ dissolved in water.',
        explanation: 'Strong acid + strong base: water formation. Acid + carbonate → $H_{2}CO_{3}$ → $H_{2}O$ + $CO_{2}$. $NH_{4}OH$ → $NH_{3}(g)$ + $H_{2}O(l)$. All soluble products = no driving force = no reaction.'
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
            question: 'What is the net ionic equation for: $2HNO_{3}(aq)$ + $Ca(OH)_{2}(aq)$ → $Ca(NO_{3})_{2}(aq)$ + $2H_{2}O(l)$?',
            options: [
              '$\\text{H}^+(aq) + \\text{OH}^-(aq) \\rightarrow \\text{H}_2\\text{O}(l)$',
              '$\\text{HNO}_3(aq) + \\text{Ca(OH)}_2(aq) \\rightarrow \\text{Ca(NO}_3)_2(aq) + \\text{H}_2\\text{O}(l)$',
              '$\\text{Ca}^{2+}(aq) + 2\\text{NO}_3^-(aq) \\rightarrow \\text{Ca(NO}_3)_2(aq)$',
              '$2\\text{H}^+(aq) + \\text{Ca(OH)}_2(aq) \\rightarrow \\text{Ca}^{2+}(aq) + 2\\text{H}_2\\text{O}(l)$'
            ],
            correctAnswer: 0,
            explanation: '$HNO_{3}$ is a strong acid, $Ca(OH)_{2}$ is a strong base (soluble in dilute solution). Both dissociate fully. $Ca^{2+}$ and $NO_{3}^{-}$ are spectators. Net ionic: $H^{+}(aq)$ + $OH^{-}(aq)$ → $H_{2}O(l)$.'
          },
          {
            question: 'When $Na_{2}S(aq)$ is mixed with $H_{2}SO_{4}(aq)$, the net ionic equation is:',
            options: [
              '$\\text{Na}^+(aq) + \\text{SO}_4^{2-}(aq) \\rightarrow \\text{Na}_2\\text{SO}_4(s)$',
              '$\\text{S}^{2-}(aq) + 2\\text{H}^+(aq) \\rightarrow \\text{H}_2\\text{S}(g)$',
              '$\\text{S}^{2-}(aq) + \\text{SO}_4^{2-}(aq) \\rightarrow \\text{S}_2\\text{O}_4^{4-}(aq)$',
              '$2\\text{Na}^+(aq) + \\text{SO}_4^{2-}(aq) \\rightarrow \\text{Na}_2\\text{SO}_4(aq)$'
            ],
            correctAnswer: 1,
            explanation: '$S^{2-}$ + $2H^{+}$ → $H_{2}S(g)$. $H_{2}S$ is a gas that escapes the solution (driving force). $Na^{+}$ and $SO_{4}^{2-}$ are spectators. Charge check: (−2) + 2(+1) = 0 on both sides ✓.'
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
              '$AgNO_{3}(aq)$ + NaCl(aq)',
              'HCl(aq) + $NaHCO_{3}(aq)$',
              '$KNO_{3}(aq)$ + NaBr(aq)',
              '$Ba(NO_{3})_{2}(aq)$ + $Na_{2}SO_{4}(aq)$'
            ],
            correctAnswer: 2,
            explanation: '$KNO_{3}$ + NaBr → KBr + $NaNO_{3}$. All four compounds are soluble — no precipitate, no gas, no water formed. No driving force = no reaction.'
          },
          {
            question: 'The net ionic equation for $CH_{3}COOH(aq)$ + $NaHCO_{3}(aq)$ → $NaCH_{3}COO(aq)$ + $H_{2}O(l)$ + $CO_{2}(g)$ is:',
            options: [
              '$\\text{H}^+(aq) + \\text{HCO}_3^-(aq) \\rightarrow \\text{H}_2\\text{O}(l) + \\text{CO}_2(g)$',
              '$\\text{CH}_3\\text{COOH}(aq) + \\text{HCO}_3^-(aq) \\rightarrow \\text{CH}_3\\text{COO}^-(aq) + \\text{H}_2\\text{O}(l) + \\text{CO}_2(g)$',
              '$\\text{CH}_3\\text{COOH}(aq) + \\text{NaHCO}_3(aq) \\rightarrow \\text{NaCH}_3\\text{COO}(aq) + \\text{H}_2\\text{O}(l) + \\text{CO}_2(g)$',
              '$\\text{Na}^+(aq) + \\text{CH}_3\\text{COO}^-(aq) \\rightarrow \\text{NaCH}_3\\text{COO}(aq)$'
            ],
            correctAnswer: 1,
            explanation: '$CH_{3}COOH$ is a weak acid → stays molecular. $NaHCO_{3}$ splits: $Na^{+}$ + $HCO_{3}^{-}$. $Na^{+}$ is the spectator. Products: $CH_{3}COO^{-}(aq)$ + $H_{2}O(l)$ + $CO_{2}(g)$. The weak acid is NOT split into $H^{+}$.'
          }
        ]
      }
    }
  ]
}
