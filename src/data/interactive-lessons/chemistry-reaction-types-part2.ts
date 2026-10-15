export const chemReactionTypesPart2Data = {
  topicSlug: 'reaction-types',
  sections: [
    {
      id: 'rt2-intro',
      type: 'text' as const,
      content: `# 🔄 Precipitation & Acid–Base Reactions

**Part 2 of 7 — Mixing Solutions: Precipitates and Proton Transfer**

---

### Topics in This Part

| Section |
|---------|
| 📌 Predicting a Precipitate When Two Solutions Mix |
| The Solubility Information You Need |
| When Nothing Precipitates |
| 📌 Acid–Base Reactions in Solution |
| Four Patterns to Recognize |

> 🔑 **Key Concept:** Precipitation and acid–base reactions are the two reaction types in which **no oxidation number changes**. In one, ions leave solution as a solid; in the other, a proton moves from an acid to a base.

---

### What You'll Master in Part 2
- Finding the precipitate (if any) when two ionic solutions are mixed
- Using the sodium/potassium/ammonium/nitrate rule plus solubility data given in a question
- Writing the products of strong and weak acid–base reactions`
    },
    {
      id: 'rt2-precipitation',
      type: 'text' as const,
      content: `
## 📌 Predicting a Precipitate When Two Solutions Mix

Each ionic solution contains separate, hydrated ions. When two solutions are mixed, every cation is now near every anion. A precipitate forms if a **new** cation–anion pairing is insoluble.

### Step-by-Step

1. **List the ions** in each solution.
2. **Pair each cation with the anion from the other solution** (the "new" pairings).
3. **Check each new pairing** for solubility.
4. **Write the solid** (with a correct formula from the ion charges); everything else stays dissolved.


---

### The Solubility Information You Need

> 🔑 **Key Concept:** All **sodium, potassium, ammonium, and nitrate** salts are soluble (CED 4.7.A.5). That is the only rule you must memorize. When a question needs any other compound's solubility, it gives it to you.

**Example:** Solutions of $\\text{Pb(NO}_3)_2$ and $\\text{KI}$ are mixed. (Lead(II) iodide is insoluble.)

| Step | Result |
|------|--------|
| Ions present | $\\text{Pb}^{2+}$, $\\text{NO}_3^-$, $\\text{K}^+$, $\\text{I}^-$ |
| New pairings | $\\text{Pb}^{2+}$ with $\\text{I}^-$; $\\text{K}^+$ with $\\text{NO}_3^-$ |
| Solubility | $\\text{KNO}_3$ is soluble (potassium and nitrate); $\\text{PbI}_2$ is insoluble (given) |
| Precipitate | $\\text{PbI}_2(s)$, a yellow solid |

$$\\text{Pb}^{2+}(aq) + 2\\text{I}^-(aq) \\rightarrow \\text{PbI}_2(s)$$


---

### When Nothing Precipitates

If every new pairing is soluble, the ions simply stay dissolved and **no reaction occurs**. Mixing $\\text{NaCl}(aq)$ with $\\text{KNO}_3(aq)$ gives a solution of four kinds of ions, because $\\text{NaNO}_3$ and $\\text{KCl}$ are both sodium, potassium, or nitrate salts.

> ⚠️ **Warning:** A precipitate is always a **neutral** ionic compound. Balance the charges ($\\text{Pb}^{2+}$ needs two $\\text{I}^-$), and never pair two cations or two anions.
      `
    },
    {
      id: 'rt2-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Precipitation Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Solutions of $\\text{BaCl}_2$ and $\\text{Na}_2\\text{SO}_4$ are mixed. Barium sulfate is insoluble. Which ions remain dissolved after the precipitate forms?',
            options: [
              '$\\text{Ba}^{2+}$ and $\\text{SO}_4^{2-}$',
              '$\\text{Na}^+$ and $\\text{Cl}^-$',
              '$\\text{Ba}^{2+}$ and $\\text{Cl}^-$',
              '$\\text{Na}^+$ and $\\text{SO}_4^{2-}$'
            ],
            correctAnswer: 1,
            explanation: 'Barium and sulfate ions combine into solid $\\text{BaSO}_4$ and leave solution. Sodium and chloride ions never combine into a solid (all sodium salts are soluble), so they remain dissolved as spectator ions.'
          },
          {
            question: 'Which pair of solutions, when mixed, can NOT produce a precipitate?',
            options: [
              '$\\text{AgNO}_3$ and $\\text{NaCl}$',
              '$\\text{CaCl}_2$ and $\\text{Na}_2\\text{CO}_3$',
              '$\\text{NH}_4\\text{Cl}$ and $\\text{KNO}_3$',
              '$\\text{Pb(NO}_3)_2$ and $\\text{K}_2\\text{CrO}_4$'
            ],
            correctAnswer: 2,
            explanation: 'The new pairings for ammonium chloride and potassium nitrate are $\\text{NH}_4\\text{NO}_3$ and $\\text{KCl}$, and every ammonium, potassium, and nitrate salt is soluble. Each of the other mixtures has a possible new pairing (silver chloride, calcium carbonate, lead(II) chromate) that is not covered by that rule.'
          },
          {
            question: 'Solutions of $\\text{FeCl}_3$ and $\\text{NaOH}$ are mixed, and iron(III) hydroxide precipitates. What is the formula of the precipitate?',
            options: [
              '$\\text{FeOH}$',
              '$\\text{Fe(OH)}_3$',
              '$\\text{Fe}_3\\text{OH}$',
              '$\\text{Fe(OH)}_2$'
            ],
            correctAnswer: 1,
            explanation: 'Iron(III) carries a +3 charge and hydroxide carries −1, so three hydroxide ions balance one iron ion: $\\text{Fe(OH)}_3$. The other formulas do not balance a +3 cation with −1 anions.'
          }
        ]
      }
    },
    {
      id: 'rt2-acid-base',
      type: 'text' as const,
      content: `
## 📌 Acid–Base Reactions in Solution

An acid–base reaction transfers a proton from the acid to the base. The products are the **conjugate base** of the acid and the **conjugate acid** of the base.

### Four Patterns to Recognize

| Mixture | What actually reacts | Products |
|---------|---------------------|----------|
| Strong acid + strong base (e.g., $\\text{HCl} + \\text{NaOH}$) | $\\text{H}^+$ and $\\text{OH}^-$ | $\\text{H}_2\\text{O}$; the other ions stay dissolved |
| Weak acid + strong base (e.g., $\\text{HF} + \\text{KOH}$) | intact HF and $\\text{OH}^-$ | $\\text{F}^-$ and $\\text{H}_2\\text{O}$ |
| Strong acid + weak base (e.g., $\\text{HNO}_3 + \\text{NH}_3$) | $\\text{H}^+$ (as $\\text{H}_3\\text{O}^+$) and intact $\\text{NH}_3$ | $\\text{NH}_4^+$ |
| Acid + carbonate or hydrogen carbonate | $\\text{H}^+$ and $\\text{CO}_3^{2-}$ or $\\text{HCO}_3^-$ | $\\text{H}_2\\text{O}$ and $\\text{CO}_2(g)$ |

> 💡 **Tip:** Weak acids and weak bases are mostly un-ionized in water, so they react as **intact molecules**. Strong acids and strong bases are fully ionized, so their $\\text{H}^+$ or $\\text{OH}^-$ ions do the reacting.


---

### Neutralization

When an acid reacts with a hydroxide base, the result is water plus a salt left in solution. This **neutralization** is an acid–base reaction, not a separate category:

$$\\text{H}_2\\text{SO}_4(aq) + 2\\text{NaOH}(aq) \\rightarrow \\text{Na}_2\\text{SO}_4(aq) + 2\\text{H}_2\\text{O}(l)$$

The sodium and sulfate ions end up as dissolved $\\text{Na}_2\\text{SO}_4$; the reaction that matters is $\\text{H}^+ + \\text{OH}^- \\rightarrow \\text{H}_2\\text{O}$.
      `
    },
    {
      id: 'rt2-predict-products',
      type: 'input-boxes' as const,
      content: `
**Predict the Key Product** 🧮

Type the formula of the requested product (no charges needed for neutral compounds; write charges as + or − after the formula, e.g. NH4+).

**1)** $\\text{AgNO}_3(aq)$ is mixed with $\\text{NaBr}(aq)$. Silver bromide is insoluble. What is the precipitate?

**2)** $\\text{HCl}(aq)$ is mixed with $\\text{KOH}(aq)$. What molecular product forms?

**3)** $\\text{HCl}(aq)$ is added to $\\text{NH}_3(aq)$. What ion does the ammonia become?
      `,
      exercise: {
        questions: [{ question: '(1)', answer: 'AgBr', acceptableAnswers: ['AgBr'] }, { question: '(2)', answer: 'H2O', acceptableAnswers: ['H2O', 'water'] }, { question: '(3)', answer: 'NH4+', acceptableAnswers: ['NH4+', 'NH4', 'ammonium'] }],
        hint1: 'The new pairings are silver with bromide and sodium with nitrate. Which one is not a sodium or nitrate salt?',
        hint2: 'A strong acid and a strong base: what do $\\text{H}^+$ and $\\text{OH}^-$ form?',
        hint3: 'Ammonia is a base: it accepts a proton.',
        explanation: '1) Sodium nitrate is soluble, so the precipitate is $\\text{AgBr}(s)$. 2) $\\text{H}^+ + \\text{OH}^- \\rightarrow \\text{H}_2\\text{O}$; potassium and chloride ions stay dissolved. 3) $\\text{NH}_3$ accepts a proton from $\\text{H}_3\\text{O}^+$ to become the ammonium ion, $\\text{NH}_4^+$.'
      }
    },
    {
      id: 'rt2-dropdown-practice',
      type: 'dropdown-select' as const,
      content: `
**Precipitates and Proton Transfer — Fill in the Blanks** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A salt that is guaranteed to be soluble in water is',
            options: ['$\\text{AgCl}$', '$\\text{NH}_4\\text{Br}$', '$\\text{BaSO}_4$', '$\\text{CaCO}_3$']
          },
          {
            label: 'When a weak acid reacts with hydroxide, the weak acid is written',
            options: ['as separate ions', 'as an intact molecule', 'as a precipitate', 'as a gas']
          },
          {
            label: 'An acid reacting with a carbonate produces water and',
            options: ['hydrogen gas', 'oxygen gas', 'carbon dioxide gas', 'a carbonate precipitate']
          },
          {
            label: 'Ions that stay dissolved and unchanged when a precipitate forms are called',
            options: ['conjugate ions', 'spectator ions', 'common ions', 'polyatomic ions']
          }
        ],
        correctAnswers: ['$\\text{NH}_4\\text{Br}$', 'as an intact molecule', 'carbon dioxide gas', 'spectator ions'],
        hint1: 'Which salt contains sodium, potassium, ammonium, or nitrate?',
        hint2: 'Weak acids are mostly un-ionized in water.',
        hint3: 'Carbonate accepts protons to form $\\text{H}_2\\text{CO}_3$, which breaks apart.',
        explanation: 'Ammonium bromide is an ammonium salt, so it is soluble; the other three are common precipitates. Weak acids react as intact molecules. Acid + carbonate gives water and $\\text{CO}_2$. Ions that remain unchanged in solution are spectator ions.'
      }
    },
    {
      id: 'rt2-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Precipitation & Acid–Base** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Aqueous acetic acid, $\\text{HC}_2\\text{H}_3\\text{O}_2$, is mixed with aqueous sodium hydroxide. Which equation shows the species that actually react?',
            options: [
              '$\\text{H}^+(aq) + \\text{OH}^-(aq) \\rightarrow \\text{H}_2\\text{O}(l)$',
              '$\\text{HC}_2\\text{H}_3\\text{O}_2(aq) + \\text{OH}^-(aq) \\rightarrow \\text{C}_2\\text{H}_3\\text{O}_2^-(aq) + \\text{H}_2\\text{O}(l)$',
              '$\\text{Na}^+(aq) + \\text{C}_2\\text{H}_3\\text{O}_2^-(aq) \\rightarrow \\text{NaC}_2\\text{H}_3\\text{O}_2(s)$',
              '$\\text{HC}_2\\text{H}_3\\text{O}_2(aq) + \\text{Na}^+(aq) \\rightarrow \\text{NaC}_2\\text{H}_3\\text{O}_2(aq) + \\text{H}^+(aq)$'
            ],
            correctAnswer: 1,
            explanation: 'Acetic acid is weak, so it is mostly un-ionized and reacts as an intact molecule, giving its proton to hydroxide. Writing only $\\text{H}^+ + \\text{OH}^-$ treats it as a strong acid. Sodium acetate is soluble (a sodium salt), so it does not precipitate, and sodium ions do not take part.'
          },
          {
            question: 'Solutions of $\\text{CuSO}_4$ and $\\text{K}_2\\text{S}$ are mixed. Copper(II) sulfide is insoluble. What happens?',
            options: [
              'Potassium sulfate precipitates and copper ions stay dissolved',
              'CuS precipitates, leaving potassium and sulfate ions dissolved',
              'No reaction occurs because every product is soluble',
              'Copper metal forms because sulfide transfers electrons'
            ],
            correctAnswer: 1,
            explanation: 'The new pairings are $\\text{Cu}^{2+}$ with $\\text{S}^{2-}$ and $\\text{K}^+$ with $\\text{SO}_4^{2-}$. Potassium sulfate is soluble (a potassium salt), and copper(II) sulfide is given as insoluble, so CuS(s) forms while potassium and sulfate ions remain as spectators.'
          }
        ]
      }
    }
  ]
}
