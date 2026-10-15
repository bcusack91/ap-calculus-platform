export const chemReactionTypesPart5Data = {
  topicSlug: 'reaction-types',
  sections: [
    {
      id: 'rt5-intro',
      type: 'text' as const,
      content: `# 🔮 Predicting Products

**Part 5 of 7 — Predicting Products for Acid–Base, Redox, and Precipitation Reactions**

---

### Topics in This Part

| Section |
|---------|
| 🎯 Product Prediction Strategy |
| Reading the Reactants |
| 🎯 Predicting Redox Products |
| Element + Element, Metal + Acid, Metal + Metal Ion |
| ⚖️ Writing Formulas and Balancing |

> 🔑 **Key Concept:** Decide first which kind of transfer can happen (protons, electrons, or ions leaving solution as a solid). The reaction type tells you what the products must look like.

---

### What You'll Master in Part 5
- Choosing the right reaction type from the reactants and the information given
- Predicting products of acid–base, redox, and precipitation reactions
- Writing correct formulas from ion charges and balancing the result`
    },
    {
      id: 'rt5-strategy',
      type: 'text' as const,
      content: `
## 🎯 Product Prediction Strategy

### Reading the Reactants

| Reactant clue | Reaction type | Product pattern |
|---------------|--------------|-----------------|
| An acid with a hydroxide, ammonia, or a carbonate | Acid–base | Conjugate base + conjugate acid (water, $\\text{NH}_4^+$, or $\\text{H}_2\\text{O} + \\text{CO}_2$) |
| Two ionic solutions | Precipitation, if a new pairing is insoluble | The insoluble solid; other ions stay dissolved |
| A fuel with $\\text{O}_2$ | Redox (combustion) | $\\text{CO}_2$ and $\\text{H}_2\\text{O}$ for a C/H/O fuel |
| A metal with a nonmetal element | Redox | An ionic compound built from the ion charges |
| A metal with an acid, when the metal dissolves | Redox | Metal cation + $\\text{H}_2(g)$ |
| A metal with another metal's ions, when a metal deposits | Redox | The first metal's cation + the second metal |

### Three Steps

1. **Classify** using the table above.
2. **Write the products** using ion charges for every ionic formula.
3. **Balance** atoms (and, for ionic equations, charge).
      `
    },
    {
      id: 'rt5-redox-predictions',
      type: 'text' as const,
      content: `
## 🎯 Predicting Redox Products

### Element + Element

A metal transfers electrons to a nonmetal. Use the charges of the resulting ions to write the formula.

| Reactants | Ion charges | Product |
|-----------|-------------|---------|
| Na + $\\text{Cl}_2$ | $\\text{Na}^+$, $\\text{Cl}^-$ | NaCl |
| Mg + $\\text{O}_2$ | $\\text{Mg}^{2+}$, $\\text{O}^{2-}$ | MgO |
| Al + $\\text{Br}_2$ | $\\text{Al}^{3+}$, $\\text{Br}^-$ | $\\text{AlBr}_3$ |
| Ca + $\\text{N}_2$ | $\\text{Ca}^{2+}$, $\\text{N}^{3-}$ | $\\text{Ca}_3\\text{N}_2$ |


---

### Metal + Acid

When a metal dissolves in an acid, the metal is oxidized to its cation and $\\text{H}^+$ is reduced to hydrogen gas:

$$\\text{Mg}(s) + 2\\text{H}^+(aq) \\rightarrow \\text{Mg}^{2+}(aq) + \\text{H}_2(g)$$


---

### Metal + Another Metal's Ions

When a metal strip placed in a solution becomes coated with a different metal, the strip's metal is oxidized and the dissolved metal ion is reduced:

$$\\text{Zn}(s) + \\text{Cu}^{2+}(aq) \\rightarrow \\text{Zn}^{2+}(aq) + \\text{Cu}(s)$$

> 💡 **Tip:** An AP question will tell you (or describe an observation showing) whether such a reaction happens. You do not need a memorized ranking of metals; your job is to identify what is oxidized and reduced and to write balanced products.

> ⚠️ **Warning:** Electrons lost must equal electrons gained. For aluminum (3 electrons lost per atom) and nickel(II) (2 electrons gained per ion), the balanced equation is $2\\text{Al} + 3\\text{Ni}^{2+} \\rightarrow 2\\text{Al}^{3+} + 3\\text{Ni}$: six electrons each way.
      `
    },
    {
      id: 'rt5-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Product Prediction Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Predict the product of the redox reaction $\\text{Ba}(s) + \\text{O}_2(g) \\rightarrow$ ?',
            options: [
              '$\\text{BaO}_2$',
              'BaO',
              '$\\text{Ba}_2\\text{O}$',
              '$\\text{Ba}_2\\text{O}_3$'
            ],
            correctAnswer: 1,
            explanation: 'Barium forms $\\text{Ba}^{2+}$ and oxygen forms $\\text{O}^{2-}$, so they combine 1:1 as BaO. Balanced: $2\\text{Ba} + \\text{O}_2 \\rightarrow 2\\text{BaO}$. Barium is oxidized (0 → +2) and oxygen is reduced (0 → −2).'
          },
          {
            question: 'A strip of aluminum is placed in a $\\text{NiCl}_2$ solution, and nickel metal deposits on the strip. Which products form?',
            options: [
              '$\\text{AlCl}_2$ and Ni',
              '$\\text{AlCl}_3$ and Ni',
              'No products; the ions only exchange partners',
              '$\\text{AlNi}$ and $\\text{Cl}_2$'
            ],
            correctAnswer: 1,
            explanation: 'Aluminum is oxidized to $\\text{Al}^{3+}$, which pairs with three chloride ions as $\\text{AlCl}_3$, and $\\text{Ni}^{2+}$ is reduced to nickel metal. Balanced: $2\\text{Al} + 3\\text{NiCl}_2 \\rightarrow 2\\text{AlCl}_3 + 3\\text{Ni}$. $\\text{AlCl}_2$ ignores aluminum\'s +3 charge.'
          },
          {
            question: 'What are the products of $\\text{H}_2\\text{SO}_4(aq) + 2\\text{NaOH}(aq)$?',
            options: [
              '$\\text{NaSO}_4$ + $\\text{H}_2\\text{O}$',
              '$\\text{Na}_2\\text{SO}_4$ + $2\\text{H}_2\\text{O}$',
              '$\\text{Na}_2\\text{SO}_4$ + $\\text{H}_2$',
              '$\\text{NaHSO}_4$ + NaOH'
            ],
            correctAnswer: 1,
            explanation: 'This is an acid–base (neutralization) reaction: each $\\text{H}^+$ combines with an $\\text{OH}^-$ to form water, and the sodium and sulfate ions remain as dissolved $\\text{Na}_2\\text{SO}_4$. $\\text{H}_2$ would require a redox reaction, and $\\text{NaSO}_4$ does not balance the ion charges.'
          },
          {
            question: 'Solutions of $\\text{Na}_2\\text{SO}_4$ and $\\text{BaCl}_2$ are mixed. Barium sulfate is insoluble. What are the products?',
            options: [
              'NaCl + $\\text{BaSO}_4$',
              '$\\text{NaSO}_4$ + BaCl',
              '$\\text{Na}_2\\text{Cl}_2$ + $\\text{BaSO}_4$',
              'No reaction; all ions stay dissolved'
            ],
            correctAnswer: 0,
            explanation: 'The new pairings are sodium with chloride (soluble, a sodium salt) and barium with sulfate (insoluble, given). Balanced: $\\text{Na}_2\\text{SO}_4 + \\text{BaCl}_2 \\rightarrow 2\\text{NaCl} + \\text{BaSO}_4(s)$. $\\text{NaSO}_4$ and BaCl ignore the ion charges, and $\\text{Na}_2\\text{Cl}_2$ is not reduced to the simplest ratio.'
          }
        ]
      }
    },
    {
      id: 'rt5-formulas-balancing',
      type: 'text' as const,
      content: `
## ⚖️ Writing Formulas and Balancing

Most wrong predictions come from formulas, not from the reaction type. Build every ionic formula from the charges, then balance.

### Worked Example 1 — Acid–Base

> **Problem:** $\\text{Ca(OH)}_2(aq) + \\text{HNO}_3(aq) \\rightarrow$ ?

1. **Type:** acid + hydroxide → acid–base
2. **Products:** water, plus $\\text{Ca}^{2+}$ with $\\text{NO}_3^-$ → $\\text{Ca(NO}_3)_2$
3. **Balance:** two $\\text{OH}^-$ need two $\\text{H}^+$

$$\\boxed{\\text{Ca(OH)}_2 + 2\\text{HNO}_3 \\rightarrow \\text{Ca(NO}_3)_2 + 2\\text{H}_2\\text{O}}$$


---

### Worked Example 2 — Acid + Carbonate

> **Problem:** $\\text{Na}_2\\text{CO}_3(s) + \\text{HCl}(aq) \\rightarrow$ ?

1. **Type:** carbonate accepts protons → acid–base
2. **Products:** $\\text{H}_2\\text{O} + \\text{CO}_2$, plus dissolved NaCl
3. **Balance:** carbonate accepts two protons

$$\\boxed{\\text{Na}_2\\text{CO}_3 + 2\\text{HCl} \\rightarrow 2\\text{NaCl} + \\text{H}_2\\text{O} + \\text{CO}_2}$$


---

### Worked Example 3 — Combustion

> **Problem:** $\\text{C}_3\\text{H}_8 + \\text{O}_2 \\rightarrow$ ?

1. **Type:** fuel + $\\text{O}_2$ → redox (combustion)
2. **Products:** $\\text{CO}_2 + \\text{H}_2\\text{O}$
3. **Balance:** 3 C → 3 $\\text{CO}_2$; 8 H → 4 $\\text{H}_2\\text{O}$; 10 O → 5 $\\text{O}_2$

$$\\boxed{\\text{C}_3\\text{H}_8 + 5\\text{O}_2 \\rightarrow 3\\text{CO}_2 + 4\\text{H}_2\\text{O}}$$
      `
    },
    {
      id: 'rt5-predict-drill',
      type: 'input-boxes' as const,
      content: `
**Predict the Products** 🧮

Write the chemical formula of the requested product. Use standard notation (no spaces, no charges).

**1)** Redox: $\\text{K} + \\text{Cl}_2 \\rightarrow$ ? (K forms a +1 ion, Cl forms a −1 ion)

**2)** Acid–base: $\\text{Ca(OH)}_2 + 2\\text{HNO}_3 \\rightarrow$ ? + $2\\text{H}_2\\text{O}$ — what is the salt?

**3)** Combustion: $\\text{CH}_4 + 2\\text{O}_2 \\rightarrow$ ? + $2\\text{H}_2\\text{O}$ — what is the other product?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['KCl', 'Ca(NO3)2', 'CO2'],
        hint1: '$\\text{K}^+$ and $\\text{Cl}^-$ combine 1:1.',
        hint2: '$\\text{Ca}^{2+}$ needs two $\\text{NO}_3^-$ ions.',
        hint3: 'Complete combustion of a hydrocarbon produces $\\text{CO}_2$ and $\\text{H}_2\\text{O}$.',
        explanation: '1) $2\\text{K} + \\text{Cl}_2 \\rightarrow 2\\text{KCl}$: potassium is oxidized, chlorine reduced. 2) The calcium and nitrate ions form $\\text{Ca(NO}_3)_2$ while $\\text{H}^+$ and $\\text{OH}^-$ form water. 3) $\\text{CH}_4 + 2\\text{O}_2 \\rightarrow \\text{CO}_2 + 2\\text{H}_2\\text{O}$.'
      }
    },
    {
      id: 'rt5-dropdown-practice',
      type: 'dropdown-select' as const,
      content: `
**Prediction Strategy — Fill in the Blanks** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'When a metal and a nonmetal element react, you predict the product formula from their',
            options: ['atomic masses', 'ion charges', 'melting points', 'densities']
          },
          {
            label: 'When a metal dissolves in hydrochloric acid, the gas produced is',
            options: ['$\\text{O}_2$', '$\\text{Cl}_2$', '$\\text{H}_2$', '$\\text{CO}_2$']
          },
          {
            label: 'If every new cation–anion pairing is soluble after two solutions are mixed,',
            options: ['a precipitate still forms', 'no reaction occurs', 'a redox reaction occurs', 'hydrogen gas forms']
          },
          {
            label: 'In the reaction of a metal with another metal\'s dissolved ions, the metal ions are',
            options: ['oxidized', 'reduced', 'precipitated as salts', 'unchanged spectators']
          }
        ],
        correctAnswers: ['ion charges', '$\\text{H}_2$', 'no reaction occurs', 'reduced'],
        hint1: 'Ionic formulas are neutral combinations of ions.',
        hint2: 'The metal is oxidized; what is reduced?',
        hint3: 'A precipitate needs an insoluble pairing.',
        explanation: 'Ion charges determine ionic formulas. In metal + acid, $\\text{H}^+$ is reduced to $\\text{H}_2$. With no insoluble pairing, the ions stay dissolved and nothing happens. Dissolved metal ions that plate out as metal gain electrons, so they are reduced.'
      }
    },
    {
      id: 'rt5-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Predicting Products** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Solid sodium hydrogen carbonate, $\\text{NaHCO}_3$, is added to hydrochloric acid. What are the products?',
            options: [
              'NaCl, $\\text{H}_2\\text{O}$, and $\\text{CO}_2$',
              'NaCl and $\\text{H}_2\\text{CO}_3$ as a precipitate',
              'NaH, $\\text{Cl}_2$, and $\\text{CO}_2$',
              '$\\text{Na}_2\\text{CO}_3$ and $\\text{H}_2$'
            ],
            correctAnswer: 0,
            explanation: 'Hydrogen carbonate accepts a proton from the acid (acid–base) to form $\\text{H}_2\\text{CO}_3$, which breaks into water and carbon dioxide gas; sodium and chloride ions remain as dissolved NaCl. $\\text{H}_2\\text{CO}_3$ is not a precipitate, and $\\text{Cl}_2$ or $\\text{H}_2$ would require electron transfer.'
          },
          {
            question: 'An unknown compound contains only carbon and hydrogen. When burned in excess $\\text{O}_2$, the products will be:',
            options: [
              'CO + $\\text{H}_2$',
              'C + $\\text{H}_2\\text{O}$',
              '$\\text{CO}_2$ + $\\text{H}_2\\text{O}$',
              '$\\text{CO}_2$ + $\\text{H}_2$'
            ],
            correctAnswer: 2,
            explanation: 'A compound containing only C and H is a hydrocarbon. Complete combustion of any hydrocarbon in excess $\\text{O}_2$ produces $\\text{CO}_2$ + $\\text{H}_2\\text{O}$; carbon is oxidized to +4 and oxygen is reduced to −2.'
          }
        ]
      }
    }
  ]
}
