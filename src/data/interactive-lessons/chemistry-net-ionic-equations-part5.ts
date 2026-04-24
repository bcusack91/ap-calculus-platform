export const chemNetIonicEquationsPart5Data = {
  topicSlug: 'net-ionic-equations',
  sections: [
    {
      id: 'ni5-intro',
      type: 'text' as const,
      content: `# 🧪 Acid-Base Net Ionic Equations

**Part 5 of 7 — Strong and Weak Acid-Base Reactions**

---

### Topics in This Part

| Section |
|---------|
| 🧪 Strong Acid + Strong Base |
| The Universal Net Ionic Equation |
| 🧪 Weak Acid + Strong Base |
| Example: Acetic acid + Sodium hydroxide |
| 🧪 Strong Acid + Weak Base |

> 🔑 **Key Concept:** Mastering this material will strengthen your foundation for both the AP Chemistry exam and more advanced chemistry topics.

---

### What You'll Master in Part 5
- Understanding the core concepts covered in Part 5
- Applying these ideas to solve practice problems
- Building toward AP exam readiness for this topic`
    },
    {
      id: 'ni5-strong-strong',
      type: 'text' as const,
      content: `
## 🧪 Strong Acid + Strong Base

### The Universal Net Ionic Equation

When a strong acid reacts with a strong base:

**Molecular:**
$$\\text{HCl}(aq) + \\text{NaOH}(aq) \\rightarrow \\text{NaCl}(aq) + \\text{H}_2\\text{O}(l)$$

**Complete ionic:**
$$\\text{H}^+(aq) + \\text{Cl}^-(aq) + \\text{Na}^+(aq) + \\text{OH}^-(aq) \\rightarrow \\text{Na}^+(aq) + \\text{Cl}^-(aq) + \\text{H}_2\\text{O}(l)$$

**Cancel spectators:**
$$\\text{H}^+(aq) + \cancel{\\text{Cl}^-(aq)} + \cancel{\\text{Na}^+(aq)} + \\text{OH}^-(aq) \\rightarrow \cancel{\\text{Na}^+(aq)} + \cancel{\\text{Cl}^-(aq)} + \\text{H}_2\\text{O}(l)$$

**Net ionic:**
$$\\boxed{\\text{H}^+(aq) + \\text{OH}^-(aq) \\rightarrow \\text{H}_2\\text{O}(l)}$$


---

> 🔑 **Key Concept:** **Every** strong acid–strong base reaction has the same net ionic equation! The identity of the acid and base doesn\'t matter because the salt ions are always spectators.

| Reaction | Same Net Ionic |
|----------|---------------|
| HCl + NaOH | H⁺ + OH⁻ → H₂O |
| HNO₃ + KOH | H⁺ + OH⁻ → H₂O |
| H₂SO₄ + 2NaOH | H⁺ + OH⁻ → H₂O |
| HClO₄ + Ba(OH)₂ | H⁺ + OH⁻ → H₂O |
      `
    },
    {
      id: 'ni5-weak-acid',
      type: 'text' as const,
      content: `
## 🧪 Weak Acid + Strong Base

When a **weak acid** reacts with a strong base, the weak acid is NOT split into ions — it stays molecular.


---

### Example: Acetic acid + Sodium hydroxide

**Molecular:**
$$\\text{CH}_3\\text{COOH}(aq) + \\text{NaOH}(aq) \\rightarrow \\text{NaCH}_3\\text{COO}(aq) + \\text{H}_2\\text{O}(l)$$

**Complete ionic:**
$$\\text{CH}_3\\text{COOH}(aq) + \\text{Na}^+(aq) + \\text{OH}^-(aq) \\rightarrow \\text{Na}^+(aq) + \\text{CH}_3\\text{COO}^-(aq) + \\text{H}_2\\text{O}(l)$$

**Net ionic** (cancel Na⁺):
$$\\boxed{\\text{CH}_3\\text{COOH}(aq) + \\text{OH}^-(aq) \\rightarrow \\text{CH}_3\\text{COO}^-(aq) + \\text{H}_2\\text{O}(l)}$$


---

> ⚠️ **Warning:** The weak acid doesn\'t fully dissociate, so it cannot be written as H⁺ + anion. It must appear as the **complete molecule**. The net ionic equation is unique to each weak acid — a critical AP exam distinction!
      `
    },
    {
      id: 'ni5-weak-base',
      type: 'text' as const,
      content: `
## 🧪 Strong Acid + Weak Base

When a strong acid reacts with a **weak base**, the weak base stays molecular.


---

### Example: HCl + Ammonia

**Molecular:**
$$\\text{HCl}(aq) + \\text{NH}_3(aq) \\rightarrow \\text{NH}_4\\text{Cl}(aq)$$

**Complete ionic:**
$$\\text{H}^+(aq) + \\text{Cl}^-(aq) + \\text{NH}_3(aq) \\rightarrow \\text{NH}_4^+(aq) + \\text{Cl}^-(aq)$$

**Net ionic** (cancel Cl⁻):
$$\\boxed{\\text{H}^+(aq) + \\text{NH}_3(aq) \\rightarrow \\text{NH}_4^+(aq)}$$


---

### Summary Table

| Acid | Base | Net Ionic Form |
|------|------|----------------|
| Strong | Strong | $\\text{H}^+ + \\text{OH}^- \\rightarrow \\text{H}_2\\text{O}$ |
| Weak | Strong | $\\text{HA} + \\text{OH}^- \\rightarrow \\text{A}^- + \\text{H}_2\\text{O}$ |
| Strong | Weak | $\\text{H}^+ + \\text{B} \\rightarrow \\text{BH}^+$ |
| Weak | Weak | $\\text{HA} + \\text{B} \\rightarrow \\text{A}^- + \\text{BH}^+$ |
      `
    },
    {
      id: 'ni5-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Acid-Base Net Ionic Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is the net ionic equation for HBr(aq) + KOH(aq) → KBr(aq) + H₂O(l)?',
            options: [
              '$\\text{HBr}(aq) + \\text{KOH}(aq) \\rightarrow \\text{KBr}(aq) + \\text{H}_2\\text{O}(l)$',
              '$\\text{H}^+(aq) + \\text{OH}^-(aq) \\rightarrow \\text{H}_2\\text{O}(l)$',
              '$\\text{H}^+(aq) + \\text{Br}^-(aq) + \\text{K}^+(aq) + \\text{OH}^-(aq) \\rightarrow \\text{H}_2\\text{O}(l)$',
              '$\\text{K}^+(aq) + \\text{Br}^-(aq) \\rightarrow \\text{KBr}(aq)$'
            ],
            correctAnswer: 1,
            explanation: 'HBr is a strong acid and KOH is a strong base. Both fully dissociate. K⁺ and Br⁻ are spectators. The net ionic equation is H⁺(aq) + OH⁻(aq) → H₂O(l) — the same for ALL strong acid–strong base reactions.'
          },
          {
            question: 'Why is CH₃COOH written in molecular form in net ionic equations?',
            options: [
              'It is insoluble in water',
              'It is a strong electrolyte',
              'It is a weak acid that only partially dissociates',
              'It is a non-electrolyte'
            ],
            correctAnswer: 2,
            explanation: 'CH₃COOH (acetic acid) is a weak acid — it only partially dissociates in water. Because it exists mostly as intact molecules, it is written in molecular form, not as separated ions.'
          },
          {
            question: 'What is the net ionic equation for HNO₃(aq) + NH₃(aq) → NH₄NO₃(aq)?',
            options: [
              '$\\text{H}^+(aq) + \\text{OH}^-(aq) \\rightarrow \\text{H}_2\\text{O}(l)$',
              '$\\text{H}^+(aq) + \\text{NH}_3(aq) \\rightarrow \\text{NH}_4^+(aq)$',
              '$\\text{HNO}_3(aq) + \\text{NH}_3(aq) \\rightarrow \\text{NH}_4\\text{NO}_3(aq)$',
              '$\\text{NO}_3^-(aq) + \\text{NH}_4^+(aq) \\rightarrow \\text{NH}_4\\text{NO}_3(aq)$'
            ],
            correctAnswer: 1,
            explanation: 'HNO₃ is a strong acid → splits into H⁺ + NO₃⁻. NH₃ is a weak base → stays molecular. NO₃⁻ is a spectator. Net ionic: H⁺(aq) + NH₃(aq) → NH₄⁺(aq).'
          },
          {
            question: 'The driving force in an acid-base reaction is the formation of:',
            options: [
              'A precipitate',
              'A gas',
              'Water',
              'An ionic compound'
            ],
            correctAnswer: 2,
            explanation: 'In acid-base neutralization, the driving force is the formation of water (H₂O), a very stable molecular compound. This is what makes the reaction favorable.'
          }
        ]
      }
    },
    {
      id: 'ni5-identify-drill',
      type: 'input-boxes' as const,
      content: `
**Acid-Base Classification** 🧮

For each net ionic equation scenario, type **strong-strong**, **weak-strong**, or **strong-weak**.

**1)** HCl(aq) + NaOH(aq) → NaCl(aq) + H₂O(l)

**2)** HF(aq) + KOH(aq) → KF(aq) + H₂O(l)

**3)** HClO₄(aq) + NH₃(aq) → NH₄ClO₄(aq)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['strong-strong', 'weak-strong', 'strong-weak'],
        hint1: 'HCl is a strong acid. NaOH is a strong base.',
        hint2: 'HF is NOT one of the six strong acids — it\'s weak.',
        hint3: 'HClO₄ is a strong acid. NH₃ is a weak base.',
        explanation: '1) HCl (strong acid) + NaOH (strong base) → strong-strong. 2) HF (weak acid) + KOH (strong base) → weak-strong. 3) HClO₄ (strong acid) + NH₃ (weak base) → strong-weak.'
      }
    },
    {
      id: 'ni5-dropdown-practice',
      type: 'dropdown-select' as const,
      content: `
**Acid-Base Net Ionic Concepts** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'All strong acid + strong base reactions have the net ionic equation',
            options: ['HA + OH⁻ → A⁻ + H₂O', 'H⁺ + OH⁻ → H₂O', 'H⁺ + B → BH⁺', 'It depends on the specific acid and base']
          },
          {
            label: 'In the reaction of HF with NaOH, HF is written as',
            options: ['H⁺ + F⁻', 'HF (molecular)', 'H + F', 'H₂F₂']
          },
          {
            label: 'NH₃ is classified as a',
            options: ['strong acid', 'weak acid', 'strong base', 'weak base']
          },
          {
            label: 'The formation of water drives acid-base reactions because water is',
            options: ['a strong electrolyte', 'a very stable molecular compound', 'an insoluble precipitate', 'a gas that escapes']
          }
        ],
        correctAnswers: ['H⁺ + OH⁻ → H₂O', 'HF (molecular)', 'weak base', 'a very stable molecular compound'],
        hint1: 'When both are strong, the salt ions are always spectators.',
        hint2: 'HF is a weak acid. Is it split into ions?',
        hint3: 'NH₃ accepts a proton (H⁺) but does not fully ionize.',
        explanation: 'All strong–strong neutralizations simplify to H⁺ + OH⁻ → H₂O. HF is a weak acid → stays molecular. NH₃ is a weak base (partially accepts H⁺). Water is stable and essentially non-ionized, driving the reaction forward.'
      }
    },
    {
      id: 'ni5-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Acid-Base Net Ionic** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'What is the net ionic equation for the reaction of hydrofluoric acid with sodium hydroxide?',
            options: [
              '$\\text{H}^+(aq) + \\text{OH}^-(aq) \\rightarrow \\text{H}_2\\text{O}(l)$',
              '$\\text{HF}(aq) + \\text{OH}^-(aq) \\rightarrow \\text{F}^-(aq) + \\text{H}_2\\text{O}(l)$',
              '$\\text{HF}(aq) + \\text{NaOH}(aq) \\rightarrow \\text{NaF}(aq) + \\text{H}_2\\text{O}(l)$',
              '$\\text{H}^+(aq) + \\text{F}^-(aq) + \\text{Na}^+(aq) + \\text{OH}^-(aq) \\rightarrow \\text{NaF}(aq) + \\text{H}_2\\text{O}(l)$'
            ],
            correctAnswer: 1,
            explanation: 'HF is a weak acid (not split into ions). NaOH is a strong base (split into Na⁺ + OH⁻). Na⁺ is the only spectator. Net ionic: HF(aq) + OH⁻(aq) → F⁻(aq) + H₂O(l).'
          },
          {
            question: 'Which reaction would NOT have H⁺(aq) + OH⁻(aq) → H₂O(l) as its net ionic equation?',
            options: [
              'HCl + NaOH',
              'HNO₃ + KOH',
              'CH₃COOH + NaOH',
              'HBr + Ba(OH)₂'
            ],
            correctAnswer: 2,
            explanation: 'CH₃COOH is a weak acid — it cannot be written as H⁺ + CH₃COO⁻. Its net ionic equation is CH₃COOH(aq) + OH⁻(aq) → CH₃COO⁻(aq) + H₂O(l). The other three all involve strong acid + strong base = H⁺ + OH⁻ → H₂O.'
          }
        ]
      }
    }
  ]
}
