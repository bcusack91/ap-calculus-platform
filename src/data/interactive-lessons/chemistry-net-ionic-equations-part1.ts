export const chemNetIonicEquationsPart1Data = {
  topicSlug: 'net-ionic-equations',
  sections: [
    {
      id: 'ni1-intro',
      type: 'text' as const,
      content: `
# 🧪 Molecular vs. Ionic Equations

**Part 1 of 7 — Writing Full Molecular Equations**

When ionic compounds dissolve in water, they dissociate into ions. To properly describe reactions in aqueous solution, chemists use three levels of detail: **molecular equations**, **complete ionic equations**, and **net ionic equations**. In this lesson, we start with the most familiar form — the full molecular equation.
      `
    },
    {
      id: 'ni1-molecular-equations',
      type: 'text' as const,
      content: `
## Full Molecular Equations

A **molecular equation** (also called a formula equation) shows all reactants and products as complete, neutral formulas — just like the balanced equations you\'ve written before.

### Example

$$\\text{AgNO}_3(aq) + \\text{NaCl}(aq) \\rightarrow \\text{AgCl}(s) + \\text{NaNO}_3(aq)$$

### Key Features

| Feature | Description |
|---------|-------------|
| Formulas | Written as complete neutral compounds |
| Phase labels | $(s)$, $(l)$, $(g)$, $(aq)$ are included |
| Balanced | Atoms and charge are balanced |
| Simplest form | Easiest to read, but hides ionic details |

### Phase Labels Review

| Symbol | Meaning |
|--------|---------|
| $(s)$ | Solid |
| $(l)$ | Liquid (pure) |
| $(g)$ | Gas |
| $(aq)$ | Aqueous (dissolved in water) |
      `
    },
    {
      id: 'ni1-electrolytes',
      type: 'text' as const,
      content: `
## Electrolytes and Dissociation

To move beyond molecular equations, you must know which substances **dissociate** (break apart) into ions when dissolved.

### Strong Electrolytes — Fully Dissociate

| Category | Examples |
|----------|----------|
| Strong acids | HCl, HBr, HI, HNO₃, H₂SO₄, HClO₄ |
| Strong bases | NaOH, KOH, Ca(OH)₂, Ba(OH)₂ |
| Soluble ionic compounds | NaCl, KNO₃, AgNO₃ (any soluble salt) |

$$\\text{NaCl}(aq) \\rightarrow \\text{Na}^+(aq) + \\text{Cl}^-(aq)$$

### Weak Electrolytes — Partially Dissociate

| Category | Examples |
|----------|----------|
| Weak acids | HF, CH₃COOH, H₂CO₃ |
| Weak bases | NH₃, amines |

These remain mostly as intact molecules in solution and are written in **molecular form**.

### Non-Electrolytes — Do Not Dissociate

| Category | Examples |
|----------|----------|
| Molecular compounds | Sugar (C₆H₁₂O₆), ethanol |
| Water | H₂O |

### Critical Rule

Only **strong electrolytes in aqueous solution** are written as separated ions. Solids, liquids, gases, weak electrolytes, and non-electrolytes stay as complete formulas.
      `
    },
    {
      id: 'ni1-writing-molecular',
      type: 'text' as const,
      content: `
## Writing Balanced Molecular Equations

### Steps

1. **Identify reactants and products** (predict products using reaction type rules)
2. **Write correct formulas** for each compound (use charges to determine subscripts)
3. **Balance** the equation
4. **Add phase labels** — $(aq)$ for dissolved species, $(s)$ for precipitates, etc.

### Example: Silver Nitrate + Sodium Chloride

**Step 1:** Reactants: AgNO₃ and NaCl (both in aqueous solution)

**Step 2:** Products: The cations and anions swap partners → AgCl and NaNO₃

**Step 3:** Already balanced:
$$\\text{AgNO}_3(aq) + \\text{NaCl}(aq) \\rightarrow \\text{AgCl}(s) + \\text{NaNO}_3(aq)$$

**Step 4:** AgCl is insoluble (precipitate → solid), everything else is aqueous.

### Common Pitfall

Always check solubility to assign correct phase labels. A reaction may not occur if no precipitate, gas, or water forms!
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
            explanation: 'In a molecular (formula) equation, all compounds are written as complete, neutral formulas such as NaCl or AgNO₃, not as separated ions.'
          },
          {
            question: 'Which of the following is a strong electrolyte that fully dissociates in water?',
            options: [
              'CH₃COOH (acetic acid)',
              'C₆H₁₂O₆ (glucose)',
              'HNO₃ (nitric acid)',
              'H₂O (water)'
            ],
            correctAnswer: 2,
            explanation: 'HNO₃ is one of the six common strong acids and fully dissociates into H⁺ and NO₃⁻ in water. Acetic acid is a weak acid, glucose is a non-electrolyte, and water is a very weak electrolyte.'
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

1) KBr dissolved in water

2) CH₃COOH (acetic acid) in water

3) C₂H₅OH (ethanol) in water
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['strong', 'weak', 'non'],
        hint1: 'KBr is a soluble ionic compound. Does it fully dissociate?',
        hint2: 'Acetic acid is an organic acid. Is it on the strong acid list?',
        hint3: 'Ethanol is a molecular (covalent) compound.',
        explanation: '1) KBr is a soluble ionic salt → strong electrolyte (fully dissociates into K⁺ and Br⁻). 2) CH₃COOH is a weak acid → weak electrolyte (partially dissociates). 3) Ethanol is a molecular compound that does not produce ions → non-electrolyte.'
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
            options: ['Na⁺ + Cl⁻', 'NaCl', 'Na + Cl', 'Na₂Cl₂']
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
        explanation: 'In molecular equations, NaCl stays as NaCl (not ions). (s) means solid. HCl is a strong acid (strong electrolyte). Sugar (C₆H₁₂O₆) does not produce ions in solution — non-electrolyte.'
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
            explanation: 'Pb²⁺ needs 2 I⁻ ions to form PbI₂, so we need 2 KI. This gives 2 KNO₃. PbI₂ is insoluble so it is labeled (s). The balanced equation is Pb(NO₃)₂(aq) + 2KI(aq) → PbI₂(s) + 2KNO₃(aq).'
          },
          {
            question: 'Which of the following would be written in molecular form (NOT as ions) in a complete ionic equation?',
            options: [
              'NaNO₃(aq)',
              'H₂O(l)',
              'KOH(aq)',
              'HBr(aq)'
            ],
            correctAnswer: 1,
            explanation: 'H₂O(l) is a liquid, not an aqueous strong electrolyte. It stays in molecular form. NaNO₃(aq), KOH(aq), and HBr(aq) are all strong electrolytes in solution and would be written as separated ions.'
          }
        ]
      }
    }
  ]
}
