export const chemOxidationReductionReactionsPart5Data = {
  topicSlug: 'oxidation-reduction-reactions',
  sections: [
    {
      id: 'or5-intro',
      type: 'text' as const,
      content: `# ⚡ Redox Stoichiometry and Titrations

**Part 5 of 7 — Using Balanced Redox Equations to Find Amounts**

---

### Topics in This Part

| Section |
|---------|
| 📌 Mole Ratios from a Balanced Redox Equation |
| Electrons as a Bookkeeping Tool |
| 📌 Redox Titrations |
| The Permanganate Endpoint |
| 🧪 Worked Titration Example |

> 🔑 **Key Concept:** A balanced redox equation works like any other balanced equation: its coefficients give the mole ratios you need for stoichiometry and titrations (CED 4.5, 4.6, 4.9).

---

### What You'll Master in Part 5
- Reading mole ratios from a balanced redox equation
- Recognizing the endpoint of a permanganate titration
- Calculating the amount or concentration of an analyte from redox titration data`
    },
    {
      id: 'or5-redox-ratios',
      type: 'text' as const,
      content: `
## 📌 Mole Ratios from a Balanced Redox Equation

Once a redox equation is balanced with half-reactions, its coefficients are mole ratios.

$$\\text{MnO}_4^-(aq) + 5\\text{Fe}^{2+}(aq) + 8\\text{H}^+(aq) \\rightarrow \\text{Mn}^{2+}(aq) + 5\\text{Fe}^{3+}(aq) + 4\\text{H}_2\\text{O}(l)$$

| Ratio | Meaning |
|-------|---------|
| 1 mol $\\text{MnO}_4^-$ : 5 mol $\\text{Fe}^{2+}$ | One permanganate ion oxidizes five iron(II) ions |
| 1 mol $\\text{MnO}_4^-$ : 8 mol $\\text{H}^+$ | The reaction consumes acid |
| 5 mol $\\text{Fe}^{2+}$ : 5 mol $\\text{Fe}^{3+}$ | Every iron(II) ion becomes iron(III) |


---

### Electrons as a Bookkeeping Tool

The 1 : 5 ratio comes straight from electron counting:

- Mn goes from +7 to +2: each $\\text{MnO}_4^-$ **gains 5 electrons**
- Fe goes from +2 to +3: each $\\text{Fe}^{2+}$ **loses 1 electron**

So one permanganate ion needs five iron(II) ions to supply its five electrons. Checking this ratio is a fast way to catch a balancing mistake.

> ⚠️ **Warning:** The most common error is using a 1 : 1 ratio because both formulas look "single." Always take the ratio from the balanced equation.
      `
    },
    {
      id: 'or5-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Redox Mole Ratios Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Using $\\text{MnO}_4^- + 5\\text{Fe}^{2+} + 8\\text{H}^+ \\rightarrow \\text{Mn}^{2+} + 5\\text{Fe}^{3+} + 4\\text{H}_2\\text{O}$, how many moles of $\\text{Fe}^{2+}$ react with 0.020 mol $\\text{MnO}_4^-$?',
            options: [
              '0.0040 mol',
              '0.020 mol',
              '0.10 mol',
              '0.16 mol'
            ],
            correctAnswer: 2,
            explanation: '0.020 mol $\\text{MnO}_4^-$ × (5 mol $\\text{Fe}^{2+}$ / 1 mol $\\text{MnO}_4^-$) = 0.10 mol. Dividing by 5 instead of multiplying gives 0.0040 mol, a 1 : 1 ratio gives 0.020 mol, and 0.16 mol uses the $\\text{H}^+$ coefficient.'
          },
          {
            question: 'In $\\text{Cr}_2\\text{O}_7^{2-} + 6\\text{Fe}^{2+} + 14\\text{H}^+ \\rightarrow 2\\text{Cr}^{3+} + 6\\text{Fe}^{3+} + 7\\text{H}_2\\text{O}$, why does one dichromate ion react with six iron(II) ions?',
            options: [
              'Each dichromate ion contains six oxygen atoms that bond to iron',
              'Two Cr atoms each gain 3 electrons, and each $\\text{Fe}^{2+}$ loses 1',
              'Fourteen $\\text{H}^+$ ions must be split evenly between the iron ions',
              'Each Cr atom gains 6 electrons, and each $\\text{Fe}^{2+}$ loses 2'
            ],
            correctAnswer: 1,
            explanation: 'Cr goes from +6 to +3, so each Cr gains 3 electrons and the two Cr atoms in one dichromate gain 6. Each $\\text{Fe}^{2+}$ loses 1 electron, so six are needed. Dichromate has seven oxygen atoms, not six, and the $\\text{H}^+$ count is set by balancing O and H, not by the electron ratio.'
          },
          {
            question: 'When 0.30 mol of zinc reacts completely by $\\text{Zn} + 2\\text{H}^+ \\rightarrow \\text{Zn}^{2+} + \\text{H}_2$, how many moles of electrons are transferred?',
            options: [
              '0.15 mol',
              '0.30 mol',
              '0.60 mol',
              '1.2 mol'
            ],
            correctAnswer: 2,
            explanation: 'Each Zn atom loses 2 electrons, so 0.30 mol Zn transfers 0.30 × 2 = 0.60 mol of electrons (and produces 0.30 mol $\\text{H}_2$). Halving instead of doubling gives 0.15 mol, and 1.2 mol double-counts the electrons gained.'
          }
        ]
      }
    },
    {
      id: 'or5-titrations',
      type: 'text' as const,
      content: `
## 📌 Redox Titrations

A titration finds the amount of an **analyte** by reacting it completely with a **titrant** of known concentration (CED 4.6.A.1). In a redox titration, the titrant is an oxidizing or reducing species, such as acidified potassium permanganate.

### The Permanganate Endpoint

- $\\text{MnO}_4^-$ is deep purple; $\\text{Mn}^{2+}$ is nearly colorless.
- Before the equivalence point, every drop of purple titrant is reduced by the analyte and the color disappears.
- At the **endpoint**, the analyte is used up, the next drop of $\\text{MnO}_4^-$ has nothing to react with, and a **faint pink color persists**.

> 💡 **Tip:** Permanganate acts as its own indicator. No separate indicator is needed.


---

### The Calculation Path

$$\\text{volume of titrant} \\xrightarrow{\\times M} \\text{mol titrant} \\xrightarrow{\\text{mole ratio}} \\text{mol analyte} \\xrightarrow{\\div V \\text{ or } \\times \\text{molar mass}} \\text{concentration or mass}$$

Remember to convert mL to L before multiplying by molarity.
      `
    },
    {
      id: 'or5-worked-titration',
      type: 'text' as const,
      content: `
## 🧪 Worked Titration Example

> **Problem:** A 25.00 mL sample of an $\\text{Fe}^{2+}$ solution is titrated with 0.0200 M $\\text{KMnO}_4$ in acid. The faint pink endpoint appears after 18.50 mL of titrant. What is $[\\text{Fe}^{2+}]$?

> **Solution:**

**Step 1 — Moles of titrant:**
$$n_{\\text{MnO}_4^-} = (0.0200 \\text{ M})(0.01850 \\text{ L}) = 3.70 \\times 10^{-4} \\text{ mol}$$

**Step 2 — Mole ratio (1 $\\text{MnO}_4^-$ : 5 $\\text{Fe}^{2+}$):**
$$n_{\\text{Fe}^{2+}} = 5 \\times (3.70 \\times 10^{-4}) = 1.85 \\times 10^{-3} \\text{ mol}$$

**Step 3 — Concentration:**
$$[\\text{Fe}^{2+}] = \\frac{1.85 \\times 10^{-3} \\text{ mol}}{0.02500 \\text{ L}} = \\boxed{0.0740 \\text{ M}}$$


---

### Error Analysis

| Mistake | Effect on calculated $[\\text{Fe}^{2+}]$ |
|---------|----------------------------------------|
| Titrating past the endpoint (dark purple) | Volume too large → result **too high** |
| Using a 1 : 1 ratio | Result **5 times too low** |
| Forgetting to convert mL to L | Result off by a factor of 1000 |
      `
    },
    {
      id: 'or5-titration-drill',
      type: 'input-boxes' as const,
      content: `
**Redox Titration Practice** 🧮

Use $\\text{MnO}_4^- + 5\\text{Fe}^{2+} + 8\\text{H}^+ \\rightarrow \\text{Mn}^{2+} + 5\\text{Fe}^{3+} + 4\\text{H}_2\\text{O}$.

A 20.00 mL sample of $\\text{Fe}^{2+}$ solution requires 12.00 mL of 0.0100 M $\\text{KMnO}_4$ to reach the endpoint.

**1)** Moles of $\\text{MnO}_4^-$ used (in units of $10^{-4}$ mol; e.g., type 3.5 for $3.5 \\times 10^{-4}$)

**2)** Moles of $\\text{Fe}^{2+}$ in the sample (in units of $10^{-4}$ mol)

**3)** $[\\text{Fe}^{2+}]$ in mol/L (3 significant figures)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['1.2', '6.0', '0.0300'],
        hint1: '$(0.0100)(0.01200)$ = ?',
        hint2: 'Multiply the moles of permanganate by 5.',
        hint3: 'Divide the moles of $\\text{Fe}^{2+}$ by 0.02000 L.',
        explanation: '1) $(0.0100 \\text{ M})(0.01200 \\text{ L}) = 1.2 \\times 10^{-4}$ mol. 2) $5 \\times 1.2 \\times 10^{-4} = 6.0 \\times 10^{-4}$ mol. 3) $6.0 \\times 10^{-4} / 0.02000 = 0.0300$ M.'
      }
    },
    {
      id: 'or5-dropdown-practice',
      type: 'dropdown-select' as const,
      content: `
**Redox Titration Concepts** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'In a permanganate titration, the endpoint is signaled by',
            options: ['a precipitate forming', 'a faint pink color that persists', 'bubbles of gas', 'the solution turning colorless']
          },
          {
            label: 'During the titration of $\\text{Fe}^{2+}$ with $\\text{MnO}_4^-$, the iron(II) ions are',
            options: ['oxidized', 'reduced', 'spectators', 'precipitated']
          },
          {
            label: 'The mole ratio used in a redox titration calculation comes from',
            options: ['the molar masses', 'the balanced redox equation', 'the volume of the sample', 'the color of the titrant']
          },
          {
            label: 'If a student overshoots the endpoint, the calculated analyte concentration will be',
            options: ['too low', 'too high', 'unchanged', 'zero']
          }
        ],
        correctAnswers: ['a faint pink color that persists', 'oxidized', 'the balanced redox equation', 'too high'],
        hint1: 'Purple permanganate stays colored only once the analyte is gone.',
        hint2: 'Fe goes from +2 to +3.',
        hint3: 'Coefficients give mole ratios.',
        explanation: 'Excess $\\text{MnO}_4^-$ gives a lasting pink color at the endpoint. $\\text{Fe}^{2+}$ loses an electron, so it is oxidized. Mole ratios come from the balanced equation. Extra titrant volume makes the calculated moles of analyte, and therefore its concentration, too high.'
      }
    },
    {
      id: 'or5-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Redox Stoichiometry** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Oxalate is titrated by $2\\text{MnO}_4^- + 5\\text{C}_2\\text{O}_4^{2-} + 16\\text{H}^+ \\rightarrow 2\\text{Mn}^{2+} + 10\\text{CO}_2 + 8\\text{H}_2\\text{O}$. If $4.0 \\times 10^{-4}$ mol of $\\text{MnO}_4^-$ is used, how many moles of oxalate were present?',
            options: [
              '$1.6 \\times 10^{-4}$ mol',
              '$4.0 \\times 10^{-4}$ mol',
              '$1.0 \\times 10^{-3}$ mol',
              '$2.0 \\times 10^{-3}$ mol'
            ],
            correctAnswer: 2,
            explanation: '$4.0 \\times 10^{-4}$ mol $\\text{MnO}_4^-$ × (5 mol oxalate / 2 mol $\\text{MnO}_4^-$) = $1.0 \\times 10^{-3}$ mol. Inverting the ratio gives $1.6 \\times 10^{-4}$, a 1 : 1 ratio gives $4.0 \\times 10^{-4}$, and multiplying by 5 without dividing by 2 gives $2.0 \\times 10^{-3}$.'
          },
          {
            question: 'A student titrating $\\text{Fe}^{2+}$ with $\\text{KMnO}_4$ records the volume when the solution first turns dark purple instead of faint pink. How does this affect the calculated $[\\text{Fe}^{2+}]$?',
            options: [
              'Too low, because less permanganate was recorded',
              'Too high, because too much permanganate was counted',
              'Unchanged, because the mole ratio is fixed',
              'Too low, because the iron was reduced'
            ],
            correctAnswer: 1,
            explanation: 'Dark purple means excess titrant was added past the endpoint. The recorded volume, and therefore the calculated moles of $\\text{MnO}_4^-$ and $\\text{Fe}^{2+}$, are too large, so the concentration comes out too high. Iron(II) is oxidized, not reduced, in this titration.'
          }
        ]
      }
    }
  ]
}
