export const chemGalvanicCellsPotentialsPart1Data = {
  topicSlug: 'galvanic-cells-potentials',
  sections: [
    {
      id: 'gc1-intro',
      type: 'text' as const,
      content: `
# ⚡ Galvanic Cells — Redox Review

**Part 1 of 7 — Half-Reactions and Electron Transfer**

Electrochemistry converts chemical energy into electrical energy (and vice versa). It is all built on **redox** reactions — reactions involving the transfer of electrons. Let\'s review the fundamentals before building galvanic cells.
      `
    },
    {
      id: 'gc1-redox-basics',
      type: 'text' as const,
      content: `
## Redox Review

### Oxidation and Reduction

| Term | Definition | Electrons | Mnemonic |
|------|-----------|-----------|----------|
| **Oxidation** | Loss of electrons | Electrons leave | OIL (Oxidation Is Loss) |
| **Reduction** | Gain of electrons | Electrons arrive | RIG (Reduction Is Gain) |

Together: **OIL RIG**

### Oxidation Numbers

Oxidation numbers (states) help track electron transfer:
- Elements in standard state: 0
- Monatomic ions: charge = oxidation number
- O is usually −2 (except peroxides: −1)
- H is usually +1 (except metal hydrides: −1)
- Sum of oxidation numbers = charge of species

### Identifying Redox

- The species that is **oxidized** is the **reducing agent** (it reduces something else)
- The species that is **reduced** is the **oxidizing agent** (it oxidizes something else)
      `
    },
    {
      id: 'gc1-half-reactions',
      type: 'text' as const,
      content: `
## Writing Half-Reactions

Every redox reaction can be split into two **half-reactions**:

### Example: $\\text{Zn}(s) + \\text{Cu}^{2+}(aq) \\rightarrow \\text{Zn}^{2+}(aq) + \\text{Cu}(s)$

**Oxidation half-reaction:**
$$\\text{Zn}(s) \\rightarrow \\text{Zn}^{2+}(aq) + 2e^-$$

Zinc loses 2 electrons (oxidation number: $0 \\rightarrow +2$)

**Reduction half-reaction:**
$$\\text{Cu}^{2+}(aq) + 2e^- \\rightarrow \\text{Cu}(s)$$

Copper gains 2 electrons (oxidation number: $+2 \\rightarrow 0$)

### Key Points

- Electrons must **balance** — the number lost in oxidation = number gained in reduction
- The electrode where **oxidation** occurs = **anode**
- The electrode where **reduction** occurs = **cathode**

**Memory trick: AN OX, RED CAT** (Anode = Oxidation, Reduction = Cathode)
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
            question: 'In the reaction Fe²⁺ + Sn → Fe + Sn²⁺, which species is oxidized?',
            options: [
              'Fe²⁺',
              'Sn',
              'Fe',
              'Sn²⁺'
            ],
            correctAnswer: 1,
            explanation: 'Sn goes from oxidation state 0 to +2, meaning it loses electrons. Sn is oxidized (and is the reducing agent). Fe²⁺ is reduced (gains electrons).'
          },
          {
            question: 'At which electrode does oxidation occur?',
            options: [
              'Cathode',
              'Anode',
              'Both',
              'Neither — oxidation occurs in solution'
            ],
            correctAnswer: 1,
            explanation: 'Oxidation always occurs at the **anode** (AN OX). Reduction occurs at the cathode (RED CAT).'
          },
          {
            question: 'In the half-reaction Ag⁺(aq) + e⁻ → Ag(s), silver is being:',
            options: [
              'Oxidized (losing electrons)',
              'Reduced (gaining electrons)',
              'Neither oxidized nor reduced',
              'Both oxidized and reduced'
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

1) The oxidation state of Mn in $\\text{MnO}_4^-$ is:

2) The oxidation state of Cr in $\\text{Cr}_2\\text{O}_7^{2-}$ is:

3) The oxidation state of N in $\\text{NO}_3^-$ is:
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
            label: 'The species that is oxidized acts as the',
            options: ['oxidizing agent', 'reducing agent', 'catalyst', 'spectator ion']
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
            options: ['be greater than electrons gained', 'be less than electrons gained', 'equal the electrons gained', 'be zero']
          }
        ],
        correctAnswers: ['reducing agent', 'anode to cathode', 'anode = oxidation', 'equal the electrons gained'],
        hint1: 'The oxidized species gives electrons to the other — it reduces the other.',
        hint2: 'Electrons are produced at the anode (oxidation) and consumed at the cathode (reduction).',
        hint3: 'AN OX: Anode is where Oxidation happens.',
        explanation: 'The oxidized species is the reducing agent (it reduces something else by giving it electrons). Electrons flow from anode (where they are produced) to cathode. AN OX = Anode = Oxidation. Electrons must balance: lost = gained.'
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
            question: 'For the reaction 2Fe³⁺ + Sn²⁺ → 2Fe²⁺ + Sn⁴⁺, identify the oxidizing agent.',
            options: [
              'Fe³⁺',
              'Sn²⁺',
              'Fe²⁺',
              'Sn⁴⁺'
            ],
            correctAnswer: 0,
            explanation: 'Fe³⁺ is reduced (Fe³⁺ → Fe²⁺, gains electrons). The species that is reduced is the **oxidizing agent**. Sn²⁺ is oxidized (Sn²⁺ → Sn⁴⁺) and is the reducing agent.'
          },
          {
            question: 'How many electrons are transferred in the balanced reaction: 2Al + 3Cu²⁺ → 2Al³⁺ + 3Cu?',
            options: [
              '2',
              '3',
              '6',
              '12'
            ],
            correctAnswer: 2,
            explanation: 'Each Al loses 3e⁻: 2 × 3 = 6e⁻ lost. Each Cu²⁺ gains 2e⁻: 3 × 2 = 6e⁻ gained. Total: 6 electrons transferred.'
          }
        ]
      }
    }
  ]
}
