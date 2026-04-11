export const chemReactionTypesPart2Data = {
  topicSlug: 'reaction-types',
  sections: [
    {
      id: 'rt2-intro',
      type: 'text' as const,
      content: `# 🔄 Single & Double Replacement Reactions

**Part 2 of 7 — Trading Partners**

---

### Topics in This Part

| Section |
|---------|
| 📌 Single Replacement (Single Displacement) |
| General Form |
| Examples |
| No Reaction Example |
| 📌 The Activity Series |

> 🔑 **Key Concept:** Mastering this material will strengthen your foundation for both the AP Chemistry exam and more advanced chemistry topics.

---

### What You'll Master in Part 2
- Understanding the core concepts covered in Part 2
- Applying these ideas to solve practice problems
- Building toward AP exam readiness for this topic`
    },
    {
      id: 'rt2-single-replacement',
      type: 'text' as const,
      content: `
## 📌 Single Replacement (Single Displacement)

A more reactive element displaces a less reactive element from a compound.


---

### General Form

$$\\boxed{A + BC \\rightarrow AC + B}$$

Element A replaces element B in compound BC, but **only if A is more reactive than B**.


---

### Examples

| Reaction | Equation |
|----------|----------|
| Metal replaces metal | $\\text{Zn} + \\text{CuSO}_4 \\rightarrow \\text{ZnSO}_4 + \\text{Cu}$ |
| Metal replaces hydrogen | $\\text{Mg} + 2\\text{HCl} \\rightarrow \\text{MgCl}_2 + \\text{H}_2$ |
| Halogen replaces halogen | $\\text{Cl}_2 + 2\\text{NaBr} \\rightarrow 2\\text{NaCl} + \\text{Br}_2$ |


---

### No Reaction Example

$$\\text{Cu} + \\text{ZnSO}_4 \\rightarrow \\text{No Reaction}$$

> ⚠️ **Warning:** Copper is **less reactive** than zinc, so it cannot displace zinc from solution. Always check the activity series before predicting products — if the free element is below the element in the compound, **no reaction** occurs.
      `
    },
    {
      id: 'rt2-activity-series',
      type: 'text' as const,
      content: `
## 📌 The Activity Series

The activity series ranks metals (and hydrogen) by their ability to lose electrons and form cations. A higher metal can replace a lower one.


---

### Metal Activity Series (Most → Least Reactive)

| Most Reactive | | | Least Reactive |
|:---:|:---:|:---:|:---:|
| Li, K, Ba, Ca, Na | Mg, Al, Zn, Fe | Ni, Sn, Pb, **H₂** | Cu, Hg, Ag, Pt, Au |


---

### Key Rules

> 🔑 **Key Concept:** The activity series determines which replacement reactions will occur:

1. **A metal above H₂** can react with acids to produce H₂ gas
2. **A metal below H₂** (Cu, Ag, Au) cannot dissolve in common acids
3. **A metal can replace any metal below it** in solution
4. **A halogen can replace any halogen below it**: F₂ > Cl₂ > Br₂ > I₂


---

### Memory Aid

**Li**ttle **K**ids **Ba**ke **Ca**kes **Na**turally → **M**akes **Al**l **Z**ealous **Fe**llows... → **Ni**ce **Sn**acks **Pb**ring **H**appiness → **Cu**rious **H**umming **Ag**ent **Pt**ays **Au**to
      `
    },
    {
      id: 'rt2-double-replacement',
      type: 'text' as const,
      content: `
## 📌 Double Replacement (Double Displacement / Metathesis)

Two ionic compounds in solution **exchange ions** to form two new compounds.


---

### General Form

$$\\boxed{AB + CD \\rightarrow AD + CB}$$

The cations and anions switch partners.


---

### Driving Forces

A double replacement reaction occurs when one of the products is:

1. **A precipitate** (insoluble solid, denoted ↓)
2. **Water** (a molecular compound)
3. **A gas** (escapes the solution, denoted ↑)


---

### Examples

| Driving Force | Reaction |
|--------------|----------|
| Precipitate | $\\text{AgNO}_3 + \\text{NaCl} \\rightarrow \\text{AgCl}\\downarrow + \\text{NaNO}_3$ |
| Water | $\\text{HCl} + \\text{NaOH} \\rightarrow \\text{NaCl} + \\text{H}_2\\text{O}$ |
| Gas | $\\text{Na}_2\\text{CO}_3 + 2\\text{HCl} \\rightarrow 2\\text{NaCl} + \\text{H}_2\\text{O} + \\text{CO}_2\\uparrow$ |


---

### Neutralization

The reaction of an acid with a base to form salt and water is a special case of double replacement:

$$\\boxed{\\text{Acid} + \\text{Base} \\rightarrow \\text{Salt} + \\text{Water}}$$
      `
    },
    {
      id: 'rt2-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Replacement Reactions Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which reaction will occur based on the activity series?',
            options: [
              '$\\text{Cu} + \\text{FeSO}_4 \\rightarrow \\text{CuSO}_4 + \\text{Fe}$',
              '$\\text{Au} + \\text{HCl} \\rightarrow \\text{AuCl}_3 + \\text{H}_2$',
              '$\\text{Zn} + \\text{CuSO}_4 \\rightarrow \\text{ZnSO}_4 + \\text{Cu}$',
              '$\\text{Ag} + \\text{NaCl} \\rightarrow \\text{AgCl} + \\text{Na}$'
            ],
            correctAnswer: 2,
            explanation: 'Zinc is above copper in the activity series, so Zn can displace Cu from CuSO₄. Copper cannot displace iron, gold cannot displace hydrogen from acids, and silver cannot displace sodium.'
          },
          {
            question: 'What type of reaction is: $\\text{BaCl}_2 + \\text{Na}_2\\text{SO}_4 \\rightarrow \\text{BaSO}_4\\downarrow + 2\\text{NaCl}$?',
            options: [
              'Synthesis',
              'Single replacement',
              'Double replacement',
              'Decomposition'
            ],
            correctAnswer: 2,
            explanation: 'Two ionic compounds exchange ions: Ba²⁺ pairs with SO₄²⁻ and Na⁺ pairs with Cl⁻. The precipitate BaSO₄ drives the reaction forward. This is double replacement.'
          },
          {
            question: 'In the reaction $\\text{Mg} + 2\\text{HCl} \\rightarrow \\text{MgCl}_2 + \\text{H}_2$, what drives the reaction?',
            options: [
              'Mg is below H in the activity series',
              'Mg is above H in the activity series',
              'A precipitate forms',
              'The reaction is endothermic'
            ],
            correctAnswer: 1,
            explanation: 'Magnesium is above hydrogen in the activity series, meaning Mg is more reactive. It can displace H from HCl, producing H₂ gas. Metals above H react with acids.'
          },
          {
            question: 'Which is a driving force for a double replacement reaction?',
            options: [
              'The reaction releases heat',
              'Both products are soluble',
              'A precipitate, gas, or water forms',
              'A more reactive metal is present'
            ],
            correctAnswer: 2,
            explanation: 'Double replacement reactions are driven by the formation of a precipitate (insoluble solid), a gas that escapes, or water (a stable molecular compound). Without one of these driving forces, no reaction occurs.'
          }
        ]
      }
    },
    {
      id: 'rt2-predict-products',
      type: 'input-boxes' as const,
      content: `
**Predict the Reaction** 🧮

For each scenario, indicate if a reaction occurs. Type the **chemical formula of the solid metal produced**, or type **NR** if no reaction occurs.

**1)** $\\text{Fe} + \\text{CuSO}_4 \\rightarrow$ ? (Iron is above copper in the activity series)

**2)** $\\text{Cu} + \\text{AgNO}_3 \\rightarrow$ ? (Copper is above silver in the activity series)

**3)** $\\text{Ag} + \\text{HCl} \\rightarrow$ ? (Silver is below hydrogen in the activity series)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['Cu', 'Ag', 'NR'],
        hint1: 'Fe is more reactive than Cu, so Fe replaces Cu. What solid metal is released?',
        hint2: 'Cu is more reactive than Ag, so Cu replaces Ag. What solid metal is released?',
        hint3: 'Silver is below hydrogen — can it displace H from an acid?',
        explanation: '1) $\\text{Fe} + \\text{CuSO}_4 \\rightarrow \\text{FeSO}_4 + \\text{Cu}$. Copper metal is produced. 2) $\\text{Cu} + 2\\text{AgNO}_3 \\rightarrow \\text{Cu(NO}_3)_2 + 2\\text{Ag}$. Silver metal is produced. 3) Silver is below hydrogen in the activity series, so it cannot react with HCl. No reaction (NR).'
      }
    },
    {
      id: 'rt2-dropdown-practice',
      type: 'dropdown-select' as const,
      content: `
**Replacement Reactions — Fill in the Blanks** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'In a single replacement reaction, the number of elements among the reactants is',
            options: ['zero', 'one', 'two', 'three']
          },
          {
            label: 'The halogen activity order (most to least reactive) is',
            options: ['I₂ > Br₂ > Cl₂ > F₂', 'F₂ > Cl₂ > Br₂ > I₂', 'Cl₂ > F₂ > Br₂ > I₂', 'F₂ > I₂ > Br₂ > Cl₂']
          },
          {
            label: 'A neutralization reaction (acid + base → salt + water) is a type of',
            options: ['synthesis', 'decomposition', 'single replacement', 'double replacement']
          },
          {
            label: 'If mixing two ionic solutions produces no precipitate, gas, or water, then',
            options: ['a synthesis occurs', 'a single replacement occurs', 'no reaction occurs', 'decomposition occurs']
          }
        ],
        correctAnswers: ['one', 'F₂ > Cl₂ > Br₂ > I₂', 'double replacement', 'no reaction occurs'],
        hint1: 'Single replacement: element + compound → compound + element. How many uncombined elements are among the reactants?',
        hint2: 'Reactivity decreases going down Group 17.',
        hint3: 'Acid–base neutralization: two compounds exchange ions.',
        explanation: 'In single replacement, there is exactly one free element as a reactant. Halogen reactivity: F₂ > Cl₂ > Br₂ > I₂ (decreases down the group). Neutralization is double replacement (ion exchange). Without a driving force (precipitate, gas, or water), no double replacement occurs.'
      }
    },
    {
      id: 'rt2-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Single & Double Replacement** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'When chlorine gas is bubbled through a solution of potassium iodide, the products are:',
            options: [
              'KCl + I₂',
              'KI + Cl₂ (no reaction)',
              'KClI + O₂',
              'HCl + KOH'
            ],
            correctAnswer: 0,
            explanation: '$\\text{Cl}_2 + 2\\text{KI} \\rightarrow 2\\text{KCl} + \\text{I}_2$. Chlorine is above iodine in the halogen activity series, so Cl₂ displaces I⁻ from KI. This is single replacement.'
          },
          {
            question: 'Mixing solutions of lead(II) nitrate and potassium iodide produces a yellow precipitate. This reaction is:',
            options: [
              'Synthesis',
              'Decomposition',
              'Single replacement',
              'Double replacement'
            ],
            correctAnswer: 3,
            explanation: '$\\text{Pb(NO}_3)_2 + 2\\text{KI} \\rightarrow \\text{PbI}_2\\downarrow + 2\\text{KNO}_3$. Two ionic compounds exchange ions, and the insoluble precipitate PbI₂ (yellow) drives the reaction. This is double replacement.'
          }
        ]
      }
    }
  ]
}
