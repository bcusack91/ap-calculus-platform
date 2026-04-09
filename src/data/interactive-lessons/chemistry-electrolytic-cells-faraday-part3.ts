export const chemElectrolyticCellsFaradayPart3Data = {
  topicSlug: 'electrolytic-cells-faraday',
  sections: [
    {
      id: 'ef3-intro',
      type: 'text' as const,
      content: `
# 🧪 Electrolysis of Molten Salts and Aqueous Solutions

**Part 3 of 7 — Predicting Products**

One of the trickiest parts of electrolysis is predicting **what forms at each electrode**. The products depend on whether you are electrolyzing a molten salt or an aqueous solution.
      `
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
| NaCl | Na(l) | Cl₂(g) |
| MgCl₂ | Mg(l) | Cl₂(g) |
| Al₂O₃ | Al(l) | O₂(g) |
| CaBr₂ | Ca(l) | Br₂(g) |
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
| $> -0.83$ V | **Metal deposits** | Cu²⁺, Ag⁺, Au³⁺, Ni²⁺ |
| $< -0.83$ V | **H₂ gas forms** | Na⁺, K⁺, Al³⁺ |

---

### ⬆️ At the Anode — Which Gets Oxidized?

Water's oxidation potential is $E° = +1.23$ V.

| Anion Type | What Happens | Examples |
|:----------:|:------------:|----------|
| Simple halides | **Anion is oxidized** | Cl⁻ → Cl₂, Br⁻ → Br₂, I⁻ → I₂ |
| Oxyanions or F⁻ | **Water is oxidized → O₂** | SO₄²⁻, NO₃⁻, F⁻ |

> ⚠️ **Why do halides win even though their $E°$ is less favorable?** Overpotential! The kinetic barrier for O₂ production is high, so in practice, halides get oxidized first.

---

### 🗺️ Quick Decision Flowchart

| Step | Question | If YES | If NO |
|:----:|----------|--------|-------|
| **1** | Is it a molten salt? | Cation → metal, Anion → nonmetal | Go to step 2 |
| **2** | Cathode: Is metal $E°$ above $-0.83$ V? | Metal deposits | H₂ forms |
| **3** | Anode: Is anion a simple halide? | Halide is oxidized | O₂ forms |
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
> | Au³⁺ | +1.50 | Zn²⁺ | −0.76 |
> | Ag⁺ | +0.80 | Al³⁺ | −1.66 |
> | Cu²⁺ | +0.34 | Na⁺ | −2.71 |
> | Ni²⁺ | −0.26 | K⁺ | −2.93 |
>
> **Oxidation potentials (anode):**
>
> | Half-reaction | $E°$ (V) |
> |--------------|:--------:|
> | 2Cl⁻ → Cl₂ + 2e⁻ | +1.36 |
> | 2Br⁻ → Br₂ + 2e⁻ | +1.07 |
> | 2I⁻ → I₂ + 2e⁻ | +0.54 |
> | 2H₂O → O₂ + 4H⁺ + 4e⁻ | +1.23 |
      `,
      exercise: {
        questions: [
          {
            question: 'In the electrolysis of molten NaCl, the product at the cathode is:',
            options: [
              'Cl₂ gas',
              'Na metal',
              'H₂ gas',
              'O₂ gas'
            ],
            correctAnswer: 1,
            explanation: 'In molten NaCl, Na⁺ is the only cation. It is reduced at the cathode: Na⁺ + e⁻ → Na. There is no water present to compete.'
          },
          {
            question: 'In the electrolysis of aqueous NaCl, the product at the cathode is:',
            options: [
              'Na metal',
              'H₂ gas',
              'Cl₂ gas',
              'O₂ gas'
            ],
            correctAnswer: 1,
            explanation: 'Na⁺ has a very negative E° (−2.71 V), much lower than water (−0.83 V). Water is reduced instead: 2H₂O + 2e⁻ → H₂ + 2OH⁻. You cannot deposit sodium metal from water.'
          },
          {
            question: 'In the electrolysis of aqueous CuSO₄, what forms at the cathode?',
            options: [
              'H₂ gas (water is reduced)',
              'Cu metal (Cu²⁺ is reduced)',
              'O₂ gas',
              'SO₂ gas'
            ],
            correctAnswer: 1,
            explanation: 'Cu²⁺ has $E° = +0.34$ V, which is more positive than water ($-0.83$ V). Cu²⁺ is preferentially reduced: Cu²⁺ + 2e⁻ → Cu. Copper metal deposits on the cathode.'
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
> | Au³⁺ | +1.50 | Zn²⁺ | −0.76 |
> | Ag⁺ | +0.80 | Al³⁺ | −1.66 |
> | Cu²⁺ | +0.34 | Na⁺ | −2.71 |
> | Ni²⁺ | −0.26 | K⁺ | −2.93 |
>
> **Anode:** 2Cl⁻ → Cl₂ (+1.36 V) | 2Br⁻ → Br₂ (+1.07 V) | 2I⁻ → I₂ (+0.54 V) | H₂O → O₂ (+1.23 V)
>
> **Rules:** Metal $E°$ above −0.83 V → metal deposits. Below → H₂. Simple halides → oxidized. Oxyanions → O₂.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Electrolysis of aqueous NaBr at the anode produces',
            options: ['Na metal', 'Br₂', 'O₂', 'H₂']
          },
          {
            label: 'Electrolysis of aqueous NaBr at the cathode produces',
            options: ['Na metal', 'Br₂', 'O₂', 'H₂']
          },
          {
            label: 'Electrolysis of aqueous CuCl₂ at the cathode produces',
            options: ['Cu metal', 'H₂', 'O₂', 'Cl₂']
          },
          {
            label: 'Electrolysis of aqueous Na₂SO₄ at the anode produces',
            options: ['Na metal', 'SO₂', 'O₂', 'H₂']
          }
        ],
        correctAnswers: ['Br₂', 'H₂', 'Cu metal', 'O₂'],
        hint1: 'Br⁻ is a simple halide — it gets oxidized.',
        hint2: 'Na⁺ is too reactive to deposit from water → H₂ forms.',
        hint3: 'Cu²⁺ has E° > −0.83 V, so Cu deposits.',
        explanation: 'NaBr: anode = Br₂ (halide oxidized), cathode = H₂ (Na too reactive). CuCl₂: cathode = Cu (E° = +0.34 V beats water). Na₂SO₄: anode = O₂ (SO₄²⁻ is an oxyanion, water oxidized instead).'
      }
    },
    {
      id: 'ef3-input-practice',
      type: 'input-boxes' as const,
      content: `
**Product Identification** 🧮

> 📋 **Reference:** Ag⁺ $E°$ = +0.80 V | Cu²⁺ = +0.34 V | Ni²⁺ = −0.26 V | Zn²⁺ = −0.76 V | Water cathode = −0.83 V | Na⁺ = −2.71 V | K⁺ = −2.93 V | Mg²⁺ = −2.37 V
>
> **Anode:** Halides (Cl⁻, Br⁻, I⁻) → oxidized. Oxyanions (NO₃⁻, SO₄²⁻) → O₂ forms.

What gas or metal is produced at the cathode during electrolysis of:

**1)** Molten MgCl₂ (cathode product)?

**2)** Aqueous AgNO₃ (cathode product — is Ag⁺ or H₂O reduced)?

**3)** Aqueous KI (anode product — is I⁻ or H₂O oxidized)?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['Mg', 'Ag', 'I2'],
        hint1: 'Molten: only Mg²⁺ and Cl⁻ present. Cation → cathode.',
        hint2: 'Ag⁺ has E° = +0.80 V (more positive than water at −0.83 V).',
        hint3: 'I⁻ is a simple halide — preferentially oxidized over water.',
        explanation: '1) Mg is deposited (molten: only Mg²⁺ available for reduction). 2) Ag deposits (E° = +0.80 V >> −0.83 V for water). 3) I₂ forms (I⁻ is a halide, oxidized before water).'
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
              'NaCl does not dissolve in water',
              'In aqueous solution, water is reduced instead of Na⁺ (water has higher E°)',
              'Sodium reacts with chlorine in water',
              'The salt bridge prevents it'
            ],
            correctAnswer: 1,
            explanation: 'Na⁺ has $E° = -2.71$ V, far below water\'s $E° = -0.83$ V. Water is preferentially reduced in aqueous solution, producing H₂ gas instead of Na metal. In molten NaCl, there is no water to compete.'
          },
          {
            question: 'In aqueous electrolysis, when does O₂ form at the anode instead of the anion?',
            options: [
              'When the anion is a simple halide (Cl⁻, Br⁻, I⁻)',
              'When the anion is an oxyanion (SO₄²⁻, NO₃⁻) or F⁻',
              'O₂ always forms at the anode',
              'O₂ never forms — only the anion is oxidized'
            ],
            correctAnswer: 1,
            explanation: 'Oxyanions (SO₄²⁻, NO₃⁻) and F⁻ are very difficult to oxidize. Water is oxidized instead: 2H₂O → O₂ + 4H⁺ + 4e⁻. Simple halides (Cl⁻, Br⁻, I⁻) are oxidized preferentially.'
          }
        ]
      }
    }
  ]
}
