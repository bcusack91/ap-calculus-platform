export const chemGalvanicCellsPotentialsPart1Data = {
  topicSlug: 'galvanic-cells-potentials',
  sections: [
    {
      id: 'gc1-intro',
      type: 'text' as const,
      content: `# ⚡ Galvanic Cells — Redox Review

**Part 1 of 7 — Half-Reactions and Electron Transfer**

---

### Topics in This Part

| Section |
|---------|
| 🔄 Redox Review |
| Oxidation and Reduction |
| Oxidation Numbers |
| Identifying Redox |
| ✍️ Writing Half-Reactions |

> 🔑 **Key Concept:** Mastering this material will strengthen your foundation for both the AP Chemistry exam and more advanced chemistry topics.

---

### What You'll Master in Part 1
- Understanding the core concepts covered in Part 1
- Applying these ideas to solve practice problems
- Building toward AP exam readiness for this topic`
    },
    {
      id: 'gc1-redox-basics',
      type: 'text' as const,
      content: `
## 🔄 Redox Review

### Oxidation and Reduction

| Term | Definition | Electrons | Mnemonic |
|------|-----------|-----------|----------|
| **Oxidation** | Loss of electrons | Electrons leave | OIL (Oxidation Is Loss) |
| **Reduction** | Gain of electrons | Electrons arrive | RIG (Reduction Is Gain) |

> 🔑 **Key Concept:** Remember **OIL RIG** — Oxidation Is Loss, Reduction Is Gain.


---

### Oxidation Numbers

Oxidation numbers (states) help track electron transfer:
- Elements in standard state: 0
- Monatomic ions: charge = oxidation number
- O is usually −2 (except peroxides: −1)
- H is usually +1 (except metal hydrides: −1)
- Sum of oxidation numbers = charge of species


---

### Identifying Redox

- Find the element whose oxidation number **increases**: that species is **oxidized** (it loses electrons).
- Find the element whose oxidation number **decreases**: that species is **reduced** (it gains electrons).
- Electrons move **from** the species oxidized **to** the species reduced (CED 4.7.A.3).

> 📝 The AP exam describes species as "oxidized" or "reduced"; the older labels "oxidizing agent" and "reducing agent" are not assessed.
      `
    },
    {
      id: 'gc1-half-reactions',
      type: 'text' as const,
      content: `
## ✍️ Writing Half-Reactions

Every redox reaction can be split into two **half-reactions** — one for oxidation and one for reduction.

---

### Worked Example

> **Overall Reaction:**
>
> $$\\text{Zn}(s) + \\text{Cu}^{2+}(aq) \\rightarrow \\text{Zn}^{2+}(aq) + \\text{Cu}(s)$$

**Oxidation half-reaction (anode):**

$$\\text{Zn}(s) \\rightarrow \\text{Zn}^{2+}(aq) + 2e^-$$

Zinc loses 2 electrons — oxidation number changes from $0$ to $+2$.

**Reduction half-reaction (cathode):**

$$\\text{Cu}^{2+}(aq) + 2e^- \\rightarrow \\text{Cu}(s)$$

Copper gains 2 electrons — oxidation number changes from $+2$ to $0$.

---

### Key Points

- Electrons must **balance** — the number lost in oxidation equals the number gained in reduction
- The electrode where **oxidation** occurs is the **anode**
- The electrode where **reduction** occurs is the **cathode**

> 🔑 **Key Concept — AN OX, RED CAT:**
>
> **AN**ode = **OX**idation &nbsp;|&nbsp; **RED**uction = **CAT**hode
      `
    },
    {
      id: 'gc1-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Redox Fundamentals Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In the reaction $Fe^{2+}$ + Sn → Fe + $Sn^{2+}$, which species is oxidized?',
            options: [
              '$Fe^{2+}$',
              'Sn',
              'Fe',
              '$Sn^{2+}$'
            ],
            correctAnswer: 1,
            explanation: 'Sn goes from oxidation state 0 to +2, meaning it loses electrons. Sn is oxidized. $Fe^{2+}$ is reduced (gains electrons), going from +2 to 0.'
          },
          {
            question: 'At which electrode does oxidation occur?',
            options: [
              'Cathode',
              'Anode',
              'Both electrodes',
              'Neither — oxidation occurs in solution'
            ],
            correctAnswer: 1,
            explanation: 'Oxidation always occurs at the **anode** (AN OX). Reduction occurs at the cathode (RED CAT). Each electrode hosts only one of the two half-reactions, and the electron transfer happens at the electrode surfaces, not in the bulk solution.'
          },
          {
            question: 'In the half-reaction $Ag^{+}(aq)$ + $e^{-}$ → Ag(s), silver is being:',
            options: [
              'Oxidized (losing an electron)',
              'Reduced (gaining electrons)',
              'Neither oxidized nor reduced',
              'Both oxidized and reduced at once'
            ],
            correctAnswer: 1,
            explanation: 'Silver gains an electron ($\\text{Ag}^+ \\rightarrow \\text{Ag}^0$), so it is being **reduced**. The oxidation number decreases from +1 to 0.'
          }
        ]
      }
    },
    {
      id: 'gc1-oxidation-states',
      type: 'input-boxes' as const,
      content: `
**Oxidation State Practice** 🧮

Determine the oxidation state of the underlined element:

**1)** The oxidation state of Mn in $\\text{MnO}_4^-$ is:

**2)** The oxidation state of Cr in $\\text{Cr}_2\\text{O}_7^{2-}$ is:

**3)** The oxidation state of N in $\\text{NO}_3^-$ is:
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['+7', '+6', '+5'],
        hint1: 'Let Mn = x. x + 4(−2) = −1. Solve for x.',
        hint2: 'Let Cr = x. 2x + 7(−2) = −2. Solve for x.',
        hint3: 'Let N = x. x + 3(−2) = −1. Solve for x.',
        explanation: '1) Mn + 4(−2) = −1 → Mn = +7. 2) 2Cr + 7(−2) = −2 → 2Cr = +12 → Cr = +6. 3) N + 3(−2) = −1 → N = +5.'
      }
    },
    {
      id: 'gc1-dropdown-practice',
      type: 'dropdown-select' as const,
      content: `
**Redox Terminology** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Electrons are transferred from the species that is',
            options: ['oxidized', 'reduced', 'a spectator ion', 'a catalyst']
          },
          {
            label: 'Electrons flow from the',
            options: ['cathode to anode', 'anode to cathode', 'salt bridge', 'solution']
          },
          {
            label: 'The mnemonic AN OX means',
            options: ['anode = oxidation', 'anode = negative', 'anion = oxidized', 'anode = neutral']
          },
          {
            label: 'In a balanced redox reaction, the number of electrons lost must',
            options: ['be greater than electrons gained', 'be less than electrons gained', 'equal the electrons gained', 'be twice the electrons gained']
          }
        ],
        correctAnswers: ['oxidized', 'anode to cathode', 'anode = oxidation', 'equal the electrons gained'],
        hint1: 'Oxidation is loss of electrons; those electrons go to the species being reduced.',
        hint2: 'Electrons are produced at the anode (oxidation) and consumed at the cathode (reduction).',
        hint3: 'AN OX: Anode is where Oxidation happens.',
        explanation: 'Electrons move from the species oxidized to the species reduced. Electrons flow from anode (where they are produced) to cathode. AN OX = Anode = Oxidation. Electrons must balance: lost = gained.'
      }
    },
    {
      id: 'gc1-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Redox Review** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'For the reaction $2Fe^{3+}$ + $Sn^{2+}$ → $2Fe^{2+}$ + $Sn^{4+}$, which species is reduced?',
            options: [
              '$Fe^{3+}$',
              '$Sn^{2+}$',
              '$Fe^{2+}$',
              '$Sn^{4+}$'
            ],
            correctAnswer: 0,
            explanation: '$Fe^{3+}$ is reduced: its oxidation number falls from +3 to +2 as it gains an electron. $Sn^{2+}$ is oxidized ($Sn^{2+}$ → $Sn^{4+}$), and the two products are the species formed, not the species that react.'
          },
          {
            question: 'How many electrons are transferred in the balanced reaction: 2Al + $3Cu^{2+}$ → $2Al^{3+}$ + 3Cu?',
            options: [
              '2',
              '3',
              '6',
              '12'
            ],
            correctAnswer: 2,
            explanation: 'Each Al loses $3e^{-}$: 2 × 3 = $6e^{-}$ lost. Each $Cu^{2+}$ gains $2e^{-}$: 3 × 2 = $6e^{-}$ gained. Total: 6 electrons transferred.'
          }
        ]
      }
    }
  ]
}
