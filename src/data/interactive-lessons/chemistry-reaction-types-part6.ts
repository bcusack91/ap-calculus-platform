export const chemReactionTypesPart6Data = {
  topicSlug: 'reaction-types',
  sections: [
    {
      id: 'rt6-intro',
      type: 'text' as const,
      content: `# 🛠️ Problem-Solving Workshop

**Part 6 of 7 — Identifying, Balancing, and Predicting**

---

### Practice Makes Perfect

This workshop features multi-step problems that mirror the AP Chemistry exam format. Each problem asks you to classify a reaction as acid–base, redox, or precipitation, predict what forms, and write a balanced equation.

> 🔑 **Why this matters:** The AP Chemistry exam rewards students who can apply concepts to unfamiliar problems — structured practice is the best preparation.

---

### What You'll Master in Part 6
- Working through complete multi-step problems from start to finish
- Justifying a classification with oxidation numbers or proton transfer
- Identifying which concepts to apply and in what order`
    },
    {
      id: 'rt6-workflow',
      type: 'text' as const,
      content: `
## 📌 The Complete Workflow

### Step 1: Identify the Reaction Type

> 💡 **Tip:** Check oxidation numbers first. If any change, the reaction is redox, even when an acid or an ionic solution is involved.

| Clue | Reaction Type |
|------|--------------|
| Oxidation numbers change (often a free element on one side) | Redox |
| A proton moves from one species to another | Acid–base |
| Dissolved ions combine into an insoluble solid | Precipitation |
| Fuel + $\\text{O}_2$ → $\\text{CO}_2$ + $\\text{H}_2\\text{O}$ | Redox (combustion) |


---

### Step 2: Predict Products

- **Redox:** the oxidized species becomes a cation (or higher oxidation state); the reduced species becomes an anion, a free metal, or $\\text{H}_2$
- **Acid–base:** the acid becomes its conjugate base; the base becomes its conjugate acid
- **Precipitation:** the insoluble new pairing forms the solid (all $\\text{Na}^+$, $\\text{K}^+$, $\\text{NH}_4^+$, and $\\text{NO}_3^-$ salts stay dissolved)


---

### Step 3: Write Correct Formulas

Use ion charges for ionic compounds. Don\'t forget subscripts!


---

### Step 4: Balance the Equation

Use coefficients. Check every atom, and for ionic equations check that the total charge is the same on both sides.
      `
    },
    {
      id: 'rt6-classify-quiz',
      type: 'multiple-choice' as const,
      content: `
**Classify and Analyze** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Classify: $2\\text{KI}(aq) + \\text{Pb(NO}_3)_2(aq) \\rightarrow \\text{PbI}_2(s) + 2\\text{KNO}_3(aq)$',
            options: [
              'Acid–base',
              'Redox',
              'Precipitation',
              'Combustion'
            ],
            correctAnswer: 2,
            explanation: 'Lead(II) and iodide ions leave solution as solid $\\text{PbI}_2$. Lead stays +2 and iodine stays −1, and no proton moves, so this is precipitation. Combustion would need $\\text{O}_2$ as a reactant.'
          },
          {
            question: 'Classify: $2\\text{Li}(s) + 2\\text{H}_2\\text{O}(l) \\rightarrow 2\\text{LiOH}(aq) + \\text{H}_2(g)$',
            options: [
              'Acid–base, because water donates a proton',
              'Redox, because lithium is oxidized and hydrogen is reduced',
              'Precipitation, because lithium hydroxide forms',
              'Acid–base, because hydroxide ions are produced'
            ],
            correctAnswer: 1,
            explanation: 'Lithium goes from 0 to +1 and hydrogen goes from +1 to 0 in $\\text{H}_2$, so electrons are transferred: redox. The hydroxide product does not make it acid–base, and LiOH is dissolved, not a precipitate.'
          },
          {
            question: 'Classify: $\\text{HC}_2\\text{H}_3\\text{O}_2(aq) + \\text{NH}_3(aq) \\rightarrow \\text{C}_2\\text{H}_3\\text{O}_2^-(aq) + \\text{NH}_4^+(aq)$',
            options: [
              'Acid–base',
              'Redox',
              'Precipitation',
              'No reaction'
            ],
            correctAnswer: 0,
            explanation: 'Acetic acid donates a proton to ammonia, which becomes ammonium. No oxidation number changes and no solid forms, so this is an acid–base reaction.'
          },
          {
            question: 'Classify: $\\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2 \\rightarrow 6\\text{CO}_2 + 6\\text{H}_2\\text{O}$',
            options: [
              'Acid–base',
              'Precipitation',
              'Redox',
              'No reaction'
            ],
            correctAnswer: 2,
            explanation: 'Glucose reacts with oxygen gas to form $\\text{CO}_2$ and water: a combustion, which is a subclass of redox. Carbon is oxidized (average 0 → +4) and oxygen is reduced (0 → −2).'
          }
        ]
      }
    },
    {
      id: 'rt6-worked-examples',
      type: 'text' as const,
      content: `
## 🧪 Worked Examples

### Example 1

> **Problem:** $\\text{Mg} + \\text{N}_2 \\rightarrow$ ?

> **Solution:**

1. **Type:** Mg goes from 0 to +2 and N from 0 to −3 → **Redox**
2. **Product:** $\\text{Mg}^{2+}$ + $\\text{N}^{3-}$ → $\\text{Mg}_3\\text{N}_2$ (three +2 charges balance two −3 charges)
3. **Balance:**

$$\\boxed{3\\text{Mg} + \\text{N}_2 \\rightarrow \\text{Mg}_3\\text{N}_2}$$


---

### Example 2

> **Problem:** An iron nail is placed in $\\text{AgNO}_3$ solution. Silver crystals form on the nail, and the iron dissolves as $\\text{Fe}^{2+}$.

> **Solution:**

1. **Type:** Fe 0 → +2 (oxidized), Ag +1 → 0 (reduced) → **Redox**
2. **Products:** $\\text{Fe(NO}_3)_2$ + Ag
3. **Balance:** each Fe loses 2 electrons and each $\\text{Ag}^+$ gains 1, so two silver ions per iron atom:

$$\\boxed{\\text{Fe} + 2\\text{AgNO}_3 \\rightarrow \\text{Fe(NO}_3)_2 + 2\\text{Ag}}$$


---

### Example 3

> **Problem:** $\\text{Na}_2\\text{CO}_3(aq) + \\text{CaCl}_2(aq) \\rightarrow$ ? (Calcium carbonate is insoluble.)

> **Solution:**

1. **Type:** two ionic solutions; a new pairing is insoluble → **Precipitation**
2. **Pairings:** $\\text{Na}^+$ with $\\text{Cl}^-$ → NaCl (soluble, a sodium salt); $\\text{Ca}^{2+}$ with $\\text{CO}_3^{2-}$ → $\\text{CaCO}_3$ (insoluble, given)
3. **Balance:**

$$\\boxed{\\text{Na}_2\\text{CO}_3 + \\text{CaCl}_2 \\rightarrow \\text{CaCO}_3(s) + 2\\text{NaCl}}$$
      `
    },
    {
      id: 'rt6-full-workflow-drill',
      type: 'input-boxes' as const,
      content: `
**Full Workflow Practice** 🧮

Identify each reaction type. Type **acid-base**, **redox**, or **precipitation**.

**1)** $4\\text{Fe} + 3\\text{O}_2 \\rightarrow 2\\text{Fe}_2\\text{O}_3$

**2)** $\\text{AgNO}_3(aq) + \\text{NaCl}(aq) \\rightarrow \\text{AgCl}(s) + \\text{NaNO}_3(aq)$

**3)** $\\text{HNO}_3(aq) + \\text{KOH}(aq) \\rightarrow \\text{KNO}_3(aq) + \\text{H}_2\\text{O}(l)$
      `,
      exercise: {
        questions: [{ question: '(1)', answer: 'redox', acceptableAnswers: ['redox', 'oxidation-reduction', 'oxidation reduction'] }, { question: '(2)', answer: 'precipitation', acceptableAnswers: ['precipitation', 'precipitate'] }, { question: '(3)', answer: 'acid-base', acceptableAnswers: ['acid-base', 'acid base', 'acid–base', 'neutralization'] }],
        hint1: 'Iron starts as a free element and ends as $\\text{Fe}^{3+}$.',
        hint2: 'Silver and chloride ions leave solution as a solid.',
        hint3: '$\\text{H}^+$ from the acid combines with $\\text{OH}^-$.',
        explanation: '1) Redox: iron is oxidized (0 → +3) and oxygen is reduced (0 → −2). 2) Precipitation: $\\text{Ag}^+$ and $\\text{Cl}^-$ form solid AgCl; sodium and nitrate stay dissolved. 3) Acid–base: a proton transfers from the acid to hydroxide, forming water.'
      }
    },
    {
      id: 'rt6-predict-and-balance',
      type: 'multiple-choice' as const,
      content: `
**Predict Products and Balance** 🔬
      `,
      exercise: {
        questions: [
          {
            question: 'Zinc metal dissolves in hydrochloric acid, releasing a gas. Which balanced equation is correct?',
            options: [
              '$\\text{Zn} + \\text{HCl} \\rightarrow \\text{ZnCl} + \\text{H}_2$',
              '$\\text{Zn} + 2\\text{HCl} \\rightarrow \\text{ZnCl}_2 + \\text{H}_2$',
              '$2\\text{Zn} + 2\\text{HCl} \\rightarrow 2\\text{ZnCl} + \\text{H}_2$',
              '$\\text{Zn} + \\text{HCl} \\rightarrow \\text{ZnCl}_2 + \\text{H}$'
            ],
            correctAnswer: 1,
            explanation: 'Zinc is oxidized to $\\text{Zn}^{2+}$, which pairs with two chloride ions, and $\\text{H}^+$ is reduced to $\\text{H}_2$. Balanced: $\\text{Zn} + 2\\text{HCl} \\rightarrow \\text{ZnCl}_2 + \\text{H}_2$. Zn: 1=1 ✓, H: 2=2 ✓, Cl: 2=2 ✓.'
          },
          {
            question: 'Which net ionic equation represents the reaction of aqueous ammonia with hydrochloric acid?',
            options: [
              '$\\text{NH}_3(aq) + \\text{H}^+(aq) \\rightarrow \\text{NH}_4^+(aq)$',
              '$\\text{NH}_4^+(aq) + \\text{OH}^-(aq) \\rightarrow \\text{NH}_3(aq) + \\text{H}_2\\text{O}(l)$',
              '$\\text{H}^+(aq) + \\text{OH}^-(aq) \\rightarrow \\text{H}_2\\text{O}(l)$',
              '$\\text{NH}_3(aq) + \\text{Cl}^-(aq) \\rightarrow \\text{NH}_3\\text{Cl}^-(aq)$'
            ],
            correctAnswer: 0,
            explanation: 'Ammonia is a weak base, written intact, and it accepts a proton from the strong acid to become ammonium; chloride is a spectator. There is no hydroxide in the reaction mixture to start with, so the $\\text{H}^+ + \\text{OH}^-$ equation does not apply.'
          }
        ]
      }
    },
    {
      id: 'rt6-dropdown-practice',
      type: 'dropdown-select' as const,
      content: `
**Workshop Review — Fill in the Blanks** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The most reliable first check when classifying a reaction is',
            options: ['counting the reactants', 'looking for oxidation-number changes', 'calculating molar masses', 'checking the state of matter']
          },
          {
            label: 'A reaction between a metal and a nonmetal element is classified as',
            options: ['acid–base', 'precipitation', 'redox', 'no reaction']
          },
          {
            label: 'In an acid–base reaction, the species that accepts the proton is the',
            options: ['acid', 'base', 'spectator', 'precipitate']
          },
          {
            label: 'After predicting products, the final step is to',
            options: ['identify the reaction type again', 'balance the equation', 'add a catalyst', 'determine the color']
          }
        ],
        correctAnswers: ['looking for oxidation-number changes', 'redox', 'base', 'balance the equation'],
        hint1: 'An acid can be present in a redox reaction, so check for electron transfer first.',
        hint2: 'The metal loses electrons to the nonmetal.',
        hint3: 'Brønsted–Lowry: donor = acid, acceptor = ?',
        explanation: 'Checking oxidation numbers first catches redox reactions that happen to involve acids or ions. Metal + nonmetal is electron transfer, so it is redox. The proton acceptor is the base. The final step is always to balance the equation.'
      }
    },
    {
      id: 'rt6-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Problem-Solving Workshop** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A student adds a piece of copper wire to a solution of silver nitrate. The solution turns blue as $\\text{Cu}^{2+}$ forms, and silver metal deposits. Which statement is correct?',
            options: [
              'Copper is reduced and silver ions are oxidized',
              'Copper is oxidized and silver ions are reduced',
              'Silver nitrate precipitates as the copper dissolves',
              'Nitrate ions donate protons to the copper metal'
            ],
            correctAnswer: 1,
            explanation: '$\\text{Cu} + 2\\text{Ag}^+ \\rightarrow \\text{Cu}^{2+} + 2\\text{Ag}$. Copper goes from 0 to +2 (loses electrons, oxidized) and silver goes from +1 to 0 (gains electrons, reduced). Silver nitrate is soluble, and nitrate has no proton to donate.'
          },
          {
            question: 'Aqueous sodium hydroxide is added to aqueous magnesium chloride, and a white solid forms. What is the solid, and what type of reaction is this?',
            options: [
              'NaCl; precipitation',
              '$\\text{Mg(OH)}_2$; precipitation',
              '$\\text{Mg(OH)}_2$; redox',
              'MgOH; acid–base'
            ],
            correctAnswer: 1,
            explanation: 'Sodium chloride is soluble (a sodium salt), so the solid must be magnesium hydroxide. $\\text{Mg}^{2+}$ needs two $\\text{OH}^-$, giving $\\text{Mg(OH)}_2$. No oxidation number changes and no proton moves, so this is precipitation.'
          }
        ]
      }
    }
  ]
}
