export const chemElectrolyticCellsFaradayPart3Data = {
  topicSlug: 'electrolytic-cells-faraday',
  sections: [
    {
      id: 'ef3-intro',
      type: 'text' as const,
      content: `# 🧪 Electrolysis of Molten Salts and Aqueous Solutions

**Part 3 of 7 — Predicting Products**

---

### Topics in This Part

| Section |
|---------|
| 🔋 Electrolysis of Molten Salts |
| Why Molten? |
| Simple Case: Molten NaCl |
| Molten Salt Rule |
| Examples |

> 🔑 **Key Concept:** Mastering this material will strengthen your foundation for both the AP Chemistry exam and more advanced chemistry topics.

---

### What You'll Master in Part 3
- Understanding the core concepts covered in Part 3
- Applying these ideas to solve practice problems
- Building toward AP exam readiness for this topic`
    },
    {
      id: 'ef3-molten-salts',
      type: 'text' as const,
      content: `
## 🔋 Electrolysis of Molten Salts

### Why Molten?

Ionic compounds must be in a **molten** (liquid) state or **dissolved** in water to conduct electricity. In the solid state, ions are locked in place and cannot migrate.


---

### Simple Case: Molten NaCl

**At the cathode (reduction):**
$$\\text{Na}^+(l) + e^- \\rightarrow \\text{Na}(l)$$

**At the anode (oxidation):**
$$2\\text{Cl}^-(l) \\rightarrow \\text{Cl}_2(g) + 2e^-$$


---

### Molten Salt Rule

In a molten salt, there are **only two ions** present. The prediction is straightforward:
- **Cation** is reduced at the cathode → metal forms
- **Anion** is oxidized at the anode → nonmetal forms


---

### Examples

| Salt | Cathode Product | Anode Product |
|------|----------------|---------------|
| NaCl | Na(l) | $Cl_{2}(g)$ |
| $MgCl_{2}$ | Mg(l) | $Cl_{2}(g)$ |
| $Al_{2}O_{3}$ | Al(l) | $O_{2}(g)$ |
| $CaBr_{2}$ | Ca(l) | $Br_{2}(g)$ |
      `
    },
    {
      id: 'ef3-aqueous',
      type: 'text' as const,
      content: `
## 🧪 Electrolysis of Aqueous Solutions

### The Complication: Water Competes!

In aqueous solutions, **water** can be oxidized or reduced instead of the dissolved ions. You must compare the reduction potentials to predict which reaction occurs.

---

### 📋 Key Reduction Potentials to Know

| Half-Reaction | $E°$ (V) |
|--------------|:--------:|
| $\\text{Au}^{3+} + 3e^- \\rightarrow \\text{Au}$ | $+1.50$ |
| $\\text{Ag}^+ + e^- \\rightarrow \\text{Ag}$ | $+0.80$ |
| $\\text{Cu}^{2+} + 2e^- \\rightarrow \\text{Cu}$ | $+0.34$ |
| $2\\text{H}_2\\text{O} + 2e^- \\rightarrow \\text{H}_2 + 2\\text{OH}^-$ | $-0.83$ |
| $\\text{Ni}^{2+} + 2e^- \\rightarrow \\text{Ni}$ | $-0.26$ |
| $\\text{Zn}^{2+} + 2e^- \\rightarrow \\text{Zn}$ | $-0.76$ |
| $\\text{Al}^{3+} + 3e^- \\rightarrow \\text{Al}$ | $-1.66$ |
| $\\text{Na}^+ + e^- \\rightarrow \\text{Na}$ | $-2.71$ |
| $\\text{K}^+ + e^- \\rightarrow \\text{K}$ | $-2.93$ |

> 🔑 **The decision rule:** Whichever half-reaction has the **more positive (less negative)** $E°$ is easier to reduce and wins the competition at the cathode.

---

### ⬇️ At the Cathode — Which Gets Reduced?

Water's reduction potential is $E° = -0.83$ V. Compare the metal ion to this benchmark:

| Metal Ion $E°$ | What Happens | Examples |
|:--------------:|:------------:|----------|
| $> -0.83$ V | **Metal deposits** | $Cu^{2+}$, $Ag^{+}$, $Au^{3+}$, $Ni^{2+}$ |
| $< -0.83$ V | **$H_{2}$ gas forms** | $Na^{+}$, $K^{+}$, $Al^{3+}$ |

---

### ⬆️ At the Anode — Which Gets Oxidized?

Compare reduction potentials again: the couple with the **lower** $E°$ has the reduced form that is **easier to oxidize**. Water's couple is $\\text{O}_2 + 4\\text{H}^+ + 4e^- \\rightarrow 2\\text{H}_2\\text{O}$, $E° = +1.23$ V.

| Anion | Couple $E°$ | What Happens |
|:-----:|:-----------:|:------------:|
| $I^{-}$ | $I_{2}/I^{-}$ = +0.54 V (below 1.23) | **$I^{-}$ is oxidized → $I_{2}$** |
| $Br^{-}$ | $Br_{2}/Br^{-}$ = +1.07 V (below 1.23) | **$Br^{-}$ is oxidized → $Br_{2}$** |
| $SO_{4}^{2-}$, $NO_{3}^{-}$ | S and N already in their highest oxidation states | **Water is oxidized → $O_{2}$** |

> 📝 Aqueous chloride solutions do not follow a simple $E°$ comparison at the anode, because the two values are close and other factors decide the outcome. When an AP question involves one, it tells you which product forms.

---

### 🗺️ Quick Decision Flowchart

| Step | Question | If YES | If NO |
|:----:|----------|--------|-------|
| **1** | Is it a molten salt? | Cation → metal, Anion → nonmetal | Go to step 2 |
| **2** | Cathode: Is metal $E°$ above $-0.83$ V? | Metal deposits | $H_{2}$ forms |
| **3** | Anode: Is the anion's couple below +1.23 V ($Br^{-}$, $I^{-}$)? | Anion is oxidized | $O_{2}$ forms |
      `
    },
    {
      id: 'ef3-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Electrolysis Product Quiz** 🎯

> 📋 **Reference:** Water cathode $E° = -0.83$ V | Water anode $E° = +1.23$ V
>
> **Reduction potentials:**
>
> | Ion | $E°$ (V) | Ion | $E°$ (V) |
> |-----|:--------:|-----|:--------:|
> | $Au^{3+}$ | +1.50 | $Zn^{2+}$ | −0.76 |
> | $Ag^{+}$ | +0.80 | $Al^{3+}$ | −1.66 |
> | $Cu^{2+}$ | +0.34 | $Na^{+}$ | −2.71 |
> | $Ni^{2+}$ | −0.26 | $K^{+}$ | −2.93 |
>
> **Anode couples (reduction potentials):**
>
> | Couple | $E°$ (V) |
> |--------------|:--------:|
> | $Br_{2}/Br^{-}$ | +1.07 |
> | $I_{2}/I^{-}$ | +0.54 |
> | $O_{2}/H_{2}O$ | +1.23 |
      `,
      exercise: {
        questions: [
          {
            question: 'In the electrolysis of molten NaCl, the product at the cathode is:',
            options: [
              '$Cl_{2}$ gas',
              'Na metal',
              '$H_{2}$ gas',
              '$O_{2}$ gas'
            ],
            correctAnswer: 1,
            explanation: 'In molten NaCl, $Na^{+}$ is the only cation. It is reduced at the cathode: $Na^{+}$ + $e^{-}$ → Na. There is no water present to compete.'
          },
          {
            question: 'In the electrolysis of aqueous NaCl, the product at the cathode is:',
            options: [
              'Na metal',
              '$H_{2}$ gas',
              '$Cl_{2}$ gas',
              '$O_{2}$ gas'
            ],
            correctAnswer: 1,
            explanation: '$Na^{+}$ has a very negative E° (−2.71 V), much lower than water (−0.83 V). Water is reduced instead: $2H_{2}O$ + $2e^{-}$ → $H_{2}$ + $2OH^{-}$. You cannot deposit sodium metal from water.'
          },
          {
            question: 'In the electrolysis of aqueous $CuSO_{4}$, what forms at the cathode?',
            options: [
              '$H_{2}$ gas (water is reduced)',
              'Cu metal ($Cu^{2+}$ is reduced)',
              '$O_{2}$ gas (water is oxidized)',
              '$SO_{2}$ gas ($SO_4^{2-}$ is reduced)'
            ],
            correctAnswer: 1,
            explanation: '$Cu^{2+}$ has $E° = +0.34$ V, which is more positive than water ($-0.83$ V). $Cu^{2+}$ is preferentially reduced: $Cu^{2+}$ + $2e^{-}$ → Cu. Copper metal deposits on the cathode. Oxidation of water to $O_2$ happens at the anode, and sulfate is not reduced under these conditions.'
          }
        ]
      }
    },
    {
      id: 'ef3-dropdown-practice',
      type: 'dropdown-select' as const,
      content: `
**Predicting Electrolysis Products** 🔽

> 📋 **Reduction potentials:**
>
> | Ion | $E°$ (V) | Ion | $E°$ (V) |
> |-----|:--------:|-----|:--------:|
> | $Au^{3+}$ | +1.50 | $Zn^{2+}$ | −0.76 |
> | $Ag^{+}$ | +0.80 | $Al^{3+}$ | −1.66 |
> | $Cu^{2+}$ | +0.34 | $Na^{+}$ | −2.71 |
> | $Ni^{2+}$ | −0.26 | $K^{+}$ | −2.93 |
>
> **Anode couples:** $Br_{2}/Br^{-}$ (+1.07 V) | $I_{2}/I^{-}$ (+0.54 V) | $O_{2}/H_{2}O$ (+1.23 V)
>
> **Rules:** Metal $E°$ above −0.83 V → metal deposits. Below → $H_{2}$. $Br^{-}$ and $I^{-}$ → oxidized. Oxyanions → $O_{2}$.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Electrolysis of aqueous NaBr at the anode produces',
            options: ['Na metal', '$Br_{2}$', '$O_{2}$', '$H_{2}$']
          },
          {
            label: 'Electrolysis of aqueous NaBr at the cathode produces',
            options: ['Na metal', '$Br_{2}$', '$O_{2}$', '$H_{2}$']
          },
          {
            label: 'Electrolysis of aqueous $CuCl_{2}$ at the cathode produces',
            options: ['Cu metal', '$H_{2}$', '$O_{2}$', '$Cl_{2}$']
          },
          {
            label: 'Electrolysis of aqueous $Na_{2}SO_{4}$ at the anode produces',
            options: ['Na metal', '$SO_{2}$', '$O_{2}$', '$H_{2}$']
          }
        ],
        correctAnswers: ['$Br_{2}$', '$H_{2}$', 'Cu metal', '$O_{2}$'],
        hint1: '$Br^{-}$ is a simple halide — it gets oxidized.',
        hint2: '$Na^{+}$ is too reactive to deposit from water → $H_{2}$ forms.',
        hint3: '$Cu^{2+}$ has E° > −0.83 V, so Cu deposits.',
        explanation: 'NaBr: anode = $Br_{2}$ (its couple, +1.07 V, is below water\'s +1.23 V), cathode = $H_{2}$ (Na too reactive). $CuCl_{2}$: cathode = Cu (E° = +0.34 V beats water). $Na_{2}SO_{4}$: anode = $O_{2}$ ($SO_{4}^{2-}$ is an oxyanion, water oxidized instead).'
      }
    },
    {
      id: 'ef3-input-practice',
      type: 'input-boxes' as const,
      content: `
**Product Identification** 🧮

> 📋 **Reference:** $Ag^{+}$ $E°$ = +0.80 V | $Cu^{2+}$ = +0.34 V | $Ni^{2+}$ = −0.26 V | $Zn^{2+}$ = −0.76 V | Water cathode = −0.83 V | $Na^{+}$ = −2.71 V | $K^{+}$ = −2.93 V | $Mg^{2+}$ = −2.37 V
>
> **Anode:** $Br^{-}$ and $I^{-}$ → oxidized (couples below +1.23 V). Oxyanions ($NO_{3}^{-}$, $SO_{4}^{2-}$) → $O_{2}$ forms.

What gas or metal is produced at the cathode during electrolysis of:

**1)** Molten $MgCl_{2}$ (cathode product)?

**2)** Aqueous $AgNO_{3}$ (cathode product — is $Ag^{+}$ or $H_{2}O$ reduced)?

**3)** Aqueous KI (anode product — is $I^{-}$ or $H_{2}O$ oxidized)?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['Mg', 'Ag', 'I2'],
        hint1: 'Molten: only $Mg^{2+}$ and $Cl^{-}$ present. Cation → cathode.',
        hint2: '$Ag^{+}$ has E° = +0.80 V (more positive than water at −0.83 V).',
        hint3: 'The $I_{2}/I^{-}$ couple (+0.54 V) is far below water\'s +1.23 V.',
        explanation: '1) Mg is deposited (molten: only $Mg^{2+}$ available for reduction). 2) Ag deposits (E° = +0.80 V >> −0.83 V for water). 3) $I_{2}$ forms ($I^{-}$ is easier to oxidize than water).'
      }
    },
    {
      id: 'ef3-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Electrolysis Products** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Why can sodium metal be produced from molten NaCl but NOT from aqueous NaCl?',
            options: [
              'NaCl does not dissolve well enough in water to react',
              'Water is reduced in preference to $Na^{+}$ in solution',
              'Sodium formed reacts with $Cl_2$ to remake NaCl',
              '$Na^{+}$ is too hydrated to reach the cathode'
            ],
            correctAnswer: 1,
            explanation: '$Na^{+}$ has $E° = -2.71$ V, far below water\'s $E° = -0.83$ V. Water is preferentially reduced in aqueous solution, producing $H_{2}$ gas instead of Na metal. In molten NaCl, there is no water to compete. NaCl dissolves readily, $Na^{+}$ ions do reach the cathode, and the anode product forms at the other electrode, not where sodium would deposit.'
          },
          {
            question: 'In aqueous electrolysis, when does $O_{2}$ form at the anode instead of the anion?',
            options: [
              'When the anion is $Br^{-}$ or $I^{-}$, which oxidize below 1.23 V',
              'When the anion is $SO_{4}^{2-}$ or $NO_{3}^{-}$, which resist oxidation',
              '$O_{2}$ always forms at the anode in water',
              '$O_{2}$ never forms; the anion is always oxidized'
            ],
            correctAnswer: 1,
            explanation: 'Sulfate and nitrate already hold S and N in their highest oxidation states, so water is oxidized instead: $2H_{2}O$ → $O_{2}$ + $4H^{+}$ + $4e^{-}$. $Br^{-}$ and $I^{-}$ have couples below +1.23 V, so they are oxidized in preference to water.'
          }
        ]
      }
    }
  ]
}
