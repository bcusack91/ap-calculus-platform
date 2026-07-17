export const chemNetIonicEquationsPart1Data = {
  topicSlug: 'net-ionic-equations',
  sections: [
    {
      id: 'ni1-intro',
      type: 'text' as const,
      content: `# 🧪 Molecular vs. Ionic Equations

**Part 1 of 7 — Writing Full Molecular Equations**

---

### Topics in This Part

| Section |
|---------|
| ⚖️ Full Molecular Equations |
| Example |
| Key Features |
| Phase Labels Review |
| 🔋 Electrolytes and Dissociation |

> 🔑 **Key Concept:** Mastering this material will strengthen your foundation for both the AP Chemistry exam and more advanced chemistry topics.

---

### What You'll Master in Part 1
- Understanding the core concepts covered in Part 1
- Applying these ideas to solve practice problems
- Building toward AP exam readiness for this topic`
    },
    {
      id: 'ni1-molecular-equations',
      type: 'text' as const,
      content: `
## ⚖️ Full Molecular Equations

A **molecular equation** (also called a formula equation) shows all reactants and products as complete, neutral formulas — just like the balanced equations you\'ve written before.


---

### Example

$$\\boxed{\\text{AgNO}_3(aq) + \\text{NaCl}(aq) \\rightarrow \\text{AgCl}(s) + \\text{NaNO}_3(aq)}$$


---

### Key Features

| Feature | Description |
|---------|-------------|
| Formulas | Written as complete neutral compounds |
| Phase labels | $(s)$, $(l)$, $(g)$, $(aq)$ are included |
| Balanced | Atoms and charge are balanced |
| Simplest form | Easiest to read, but hides ionic details |


---

### Phase Labels Review

| Symbol | Meaning |
|--------|---------|
| $(s)$ | Solid |
| $(l)$ | Liquid (pure) |
| $(g)$ | Gas |
| $(aq)$ | Aqueous (dissolved in water) |

> 💡 **Tip:** Phase labels are critical on the AP exam — they determine how each species is written in ionic equations.
      `
    },
    {
      id: 'ni1-electrolytes',
      type: 'text' as const,
      content: `
## 🔋 Electrolytes and Dissociation

To move beyond molecular equations, you must know which substances **dissociate** (break apart) into ions when dissolved.


---

### Strong Electrolytes — Fully Dissociate

| Category | Examples |
|----------|----------|
| Strong acids | HCl, HBr, HI, $HNO_{3}$, $H_{2}SO_{4}$, $HClO_{4}$ |
| Strong bases | NaOH, KOH, $Ca(OH)_{2}$, $Ba(OH)_{2}$ |
| Soluble ionic compounds | NaCl, $KNO_{3}$, $AgNO_{3}$ (any soluble salt) |

$$\\boxed{\\text{NaCl}(aq) \\rightarrow \\text{Na}^+(aq) + \\text{Cl}^-(aq)}$$


---

### Weak Electrolytes — Partially Dissociate

| Category | Examples |
|----------|----------|
| Weak acids | HF, $CH_{3}COOH$, $H_{2}CO_{3}$ |
| Weak bases | $NH_{3}$, amines |

These remain mostly as intact molecules in solution and are written in **molecular form**.


---

### Non-Electrolytes — Do Not Dissociate

| Category | Examples |
|----------|----------|
| Molecular compounds | Sugar $(C_{6}H_{12}O_{6})$, ethanol |
| Water | $H_{2}O$ |


---

> 🔑 **Key Concept:** Only **strong electrolytes in aqueous solution** are written as separated ions. Solids, liquids, gases, weak electrolytes, and non-electrolytes stay as complete formulas.
      `
    },
    {
      id: 'ni1-writing-molecular',
      type: 'text' as const,
      content: `
## ✍️ Writing Balanced Molecular Equations

### Steps

1. **Identify reactants and products** (predict products using reaction type rules)
2. **Write correct formulas** for each compound (use charges to determine subscripts)
3. **Balance** the equation
4. **Add phase labels** — $(aq)$ for dissolved species, $(s)$ for precipitates, etc.


---

> **Problem:** Write the balanced molecular equation for the reaction of silver nitrate with sodium chloride.

> **Solution:**

**Step 1:** Reactants: $AgNO_{3}$ and NaCl (both in aqueous solution)

**Step 2:** Products: The cations and anions swap partners → AgCl and $NaNO_{3}$

**Step 3:** Already balanced:
$$\\text{AgNO}_3(aq) + \\text{NaCl}(aq) \\rightarrow \\text{AgCl}(s) + \\text{NaNO}_3(aq)$$

**Step 4:** AgCl is insoluble (precipitate → solid), everything else is aqueous.


---

> ⚠️ **Warning:** Always check solubility to assign correct phase labels. A reaction may not occur if no precipitate, gas, or water forms!
      `
    },
    {
      id: 'ni1-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Molecular Equations Concept Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In a molecular equation, how are ionic compounds written?',
            options: [
              'As separated ions',
              'As complete neutral formulas',
              'As atoms only',
              'Without phase labels'
            ],
            correctAnswer: 1,
            explanation: 'In a molecular (formula) equation, all compounds are written as complete, neutral formulas such as NaCl or $AgNO_{3}$, not as separated ions.'
          },
          {
            question: 'Which of the following is a strong electrolyte that fully dissociates in water?',
            options: [
              '$CH_{3}COOH$ (acetic acid)',
              '$C_{6}H_{12}O_{6}$ (glucose)',
              '$HNO_{3}$ (nitric acid)',
              '$H_{2}O$ (water)'
            ],
            correctAnswer: 2,
            explanation: '$HNO_{3}$ is one of the six common strong acids and fully dissociates into $H^{+}$ and $NO_{3}^{-}$ in water. Acetic acid is a weak acid, glucose is a non-electrolyte, and water is a very weak electrolyte.'
          },
          {
            question: 'The phase label (aq) means the substance is:',
            options: [
              'A pure liquid',
              'A gas dissolved in water',
              'Dissolved in water',
              'A solid precipitate'
            ],
            correctAnswer: 2,
            explanation: '(aq) stands for "aqueous" — dissolved in water. It applies to soluble ionic compounds, strong acids/bases, and other solutes in aqueous solution.'
          },
          {
            question: 'Which substance would NOT be written as separated ions in an ionic equation?',
            options: [
              'NaCl(aq)',
              'KOH(aq)',
              'AgCl(s)',
              'HCl(aq)'
            ],
            correctAnswer: 2,
            explanation: 'AgCl(s) is a solid precipitate — it does not dissociate. Only aqueous strong electrolytes are written as separated ions. Solids, liquids, gases, and weak electrolytes keep their molecular formulas.'
          }
        ]
      }
    },
    {
      id: 'ni1-identify-drill',
      type: 'input-boxes' as const,
      content: `
**Electrolyte Classification** 🧮

Classify each substance as **strong**, **weak**, or **non** (electrolyte).

**1)** KBr dissolved in water

**2)** $CH_{3}COOH$ (acetic acid) in water

**3)** $C_{2}H_{5}OH$ (ethanol) in water
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['strong', 'weak', 'non'],
        hint1: 'KBr is a soluble ionic compound. Does it fully dissociate?',
        hint2: 'Acetic acid is an organic acid. Is it on the strong acid list?',
        hint3: 'Ethanol is a molecular (covalent) compound.',
        explanation: '1) KBr is a soluble ionic salt → strong electrolyte (fully dissociates into $K^{+}$ and $Br^{-}$). 2) $CH_{3}COOH$ is a weak acid → weak electrolyte (partially dissociates). 3) Ethanol is a molecular compound that does not produce ions → non-electrolyte.'
      }
    },
    {
      id: 'ni1-dropdown-practice',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks — Molecular Equations** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'In a molecular equation, NaCl(aq) is written as',
            options: ['$Na^{+}$ + $Cl^{-}$', 'NaCl', 'Na + Cl', '$Na_{2}Cl_{2}$']
          },
          {
            label: 'A substance labeled (s) in an equation is a',
            options: ['solution', 'solid', 'solvent', 'strong electrolyte']
          },
          {
            label: 'HCl is classified as a',
            options: ['weak electrolyte', 'non-electrolyte', 'strong electrolyte', 'insoluble compound']
          },
          {
            label: 'Sugar dissolved in water is a',
            options: ['strong electrolyte', 'weak electrolyte', 'non-electrolyte', 'precipitate']
          }
        ],
        correctAnswers: ['NaCl', 'solid', 'strong electrolyte', 'non-electrolyte'],
        hint1: 'Molecular equations keep compounds as complete formulas.',
        hint2: 'The (s) phase label stands for a specific state of matter.',
        hint3: 'HCl is one of the six common strong acids.',
        explanation: 'In molecular equations, NaCl stays as NaCl (not ions). (s) means solid. HCl is a strong acid (strong electrolyte). Sugar $(C_{6}H_{12}O_{6})$ does not produce ions in solution — non-electrolyte.'
      }
    },
    {
      id: 'ni1-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Molecular Equations** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Which balanced molecular equation correctly represents the reaction of lead(II) nitrate with potassium iodide?',
            options: [
              '$\\text{PbNO}_3(aq) + \\text{KI}(aq) \\rightarrow \\text{PbI}(s) + \\text{KNO}_3(aq)$',
              '$\\text{Pb(NO}_3)_2(aq) + 2\\text{KI}(aq) \\rightarrow \\text{PbI}_2(s) + 2\\text{KNO}_3(aq)$',
              '$\\text{Pb(NO}_3)_2(aq) + \\text{KI}(aq) \\rightarrow \\text{PbI}_2(s) + \\text{KNO}_3(aq)$',
              '$\\text{Pb(NO}_3)_2(aq) + 2\\text{KI}(aq) \\rightarrow \\text{PbI}_2(aq) + 2\\text{KNO}_3(aq)$'
            ],
            correctAnswer: 1,
            explanation: '$Pb^{2+}$ needs 2 $I^{-}$ ions to form $PbI_{2}$, so we need 2 KI. This gives 2 $KNO_{3}$. $PbI_{2}$ is insoluble so it is labeled (s). The balanced equation is $Pb(NO_{3})_{2}(aq)$ + 2KI(aq) → $PbI_{2}(s)$ + $2KNO_{3}(aq)$.'
          },
          {
            question: 'Which of the following would be written in molecular form (NOT as ions) in a complete ionic equation?',
            options: [
              '$NaNO_{3}(aq)$',
              '$H_{2}O(l)$',
              'KOH(aq)',
              'HBr(aq)'
            ],
            correctAnswer: 1,
            explanation: '$H_{2}O(l)$ is a liquid, not an aqueous strong electrolyte. It stays in molecular form. $NaNO_{3}(aq)$, KOH(aq), and HBr(aq) are all strong electrolytes in solution and would be written as separated ions.'
          }
        ]
      }
    }
  ]
}
