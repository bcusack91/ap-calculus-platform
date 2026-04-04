export const chemOxidationReductionReactionsPart5Data = {
  topicSlug: 'oxidation-reduction-reactions',
  sections: [
    {
      id: 'or5-intro',
      type: 'text' as const,
      content: `
# ⚡ Activity Series and Predicting Redox

**Part 5 of 7 — Metals Activity Series and Spontaneous Reactions**

Not every possible redox reaction actually occurs. The **activity series** ranks metals (and hydrogen) by their tendency to lose electrons. This ranking lets you predict whether a single-replacement reaction will happen spontaneously.
      `
    },
    {
      id: 'or5-activity-series',
      type: 'text' as const,
      content: `
## The Activity Series of Metals

### Ranked from Most Active to Least Active

| Rank | Metal | Oxidation | Notes |
|------|-------|-----------|-------|
| 1 | Li | Li → Li⁺ + e⁻ | Most active — reacts with cold water |
| 2 | K | K → K⁺ + e⁻ | Reacts violently with water |
| 3 | Ba | Ba → Ba²⁺ + 2e⁻ | Reacts with water |
| 4 | Ca | Ca → Ca²⁺ + 2e⁻ | Reacts with water |
| 5 | Na | Na → Na⁺ + e⁻ | Reacts with cold water |
| 6 | Mg | Mg → Mg²⁺ + 2e⁻ | Reacts with steam |
| 7 | Al | Al → Al³⁺ + 3e⁻ | Reacts with steam |
| 8 | Zn | Zn → Zn²⁺ + 2e⁻ | Reacts with acids |
| 9 | Fe | Fe → Fe²⁺ + 2e⁻ | Reacts with acids |
| 10 | Ni | Ni → Ni²⁺ + 2e⁻ | Reacts with acids |
| — | **H₂** | **H₂ → 2H⁺ + 2e⁻** | **Reference point** |
| 11 | Cu | Cu → Cu²⁺ + 2e⁻ | Does NOT react with most acids |
| 12 | Ag | Ag → Ag⁺ + e⁻ | Very unreactive |
| 13 | Pt | Pt → Pt²⁺ + 2e⁻ | Noble metal |
| 14 | Au | Au → Au³⁺ + 3e⁻ | Least active — noble metal |
      `
    },
    {
      id: 'or5-rules',
      type: 'text' as const,
      content: `
## Using the Activity Series

### The Golden Rule

A metal can **displace** (replace) any metal **below it** in the activity series from a solution of that metal\'s ions.

$$\\text{More active metal} + \\text{Less active metal ion} \\rightarrow \\text{Reaction occurs!}$$

$$\\text{Less active metal} + \\text{More active metal ion} \\rightarrow \\text{No reaction (NR)}$$

### Examples

**Zn(s) + CuSO₄(aq) → ?**
- Zn is ABOVE Cu in the series → **reaction occurs**
$$\\text{Zn}(s) + \\text{Cu}^{2+}(aq) \\rightarrow \\text{Zn}^{2+}(aq) + \\text{Cu}(s)$$

**Cu(s) + ZnSO₄(aq) → ?**
- Cu is BELOW Zn in the series → **no reaction (NR)**

### Metals and Acids

Metals **above hydrogen** in the activity series react with dilute acids (HCl, H₂SO₄) to produce H₂ gas:

$$\\text{Zn}(s) + 2\\text{HCl}(aq) \\rightarrow \\text{ZnCl}_2(aq) + \\text{H}_2(g)$$

Metals **below hydrogen** (Cu, Ag, Pt, Au) do **NOT** react with dilute HCl or H₂SO₄.
      `
    },
    {
      id: 'or5-practical',
      type: 'text' as const,
      content: `
## Practical Applications

### Why Gold Doesn\'t Corrode

Gold (Au) is at the **bottom** of the activity series. It cannot be oxidized by water, air, or common acids. This is why gold jewelry stays shiny for thousands of years.

### Galvanized Steel

Steel (mostly Fe) is coated with zinc (Zn). Since Zn is more active than Fe, the zinc corrodes preferentially, **protecting** the iron underneath. This is called **sacrificial protection**.

### Copper Pennies in Silver Nitrate

When a copper penny is placed in AgNO₃ solution:
$$\\text{Cu}(s) + 2\\text{Ag}^+(aq) \\rightarrow \\text{Cu}^{2+}(aq) + 2\\text{Ag}(s)$$

Cu is above Ag → reaction occurs. Silver crystals grow on the penny while the solution turns blue (Cu²⁺).

### Dissolving Gold

Gold requires **aqua regia** (a mixture of HNO₃ and HCl) — ordinary acids cannot oxidize it.
      `
    },
    {
      id: 'or5-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Activity Series Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A strip of zinc metal is placed in a solution of CuSO₄. What happens?',
            options: [
              'No reaction — Cu is more active than Zn',
              'Zn dissolves and Cu metal deposits — Zn is more active than Cu',
              'Both metals dissolve',
              'ZnSO₄ precipitates'
            ],
            correctAnswer: 1,
            explanation: 'Zn is above Cu in the activity series, so Zn can displace Cu²⁺ from solution. Zn → Zn²⁺ (dissolves) and Cu²⁺ → Cu (deposits as solid copper).'
          },
          {
            question: 'Which metal will NOT react with dilute HCl?',
            options: [
              'Zinc',
              'Iron',
              'Magnesium',
              'Copper'
            ],
            correctAnswer: 3,
            explanation: 'Copper (Cu) is below hydrogen in the activity series. It cannot reduce H⁺ to H₂, so it does not react with dilute HCl. Zn, Fe, and Mg are all above H and will react.'
          },
          {
            question: 'If you place an iron nail into a solution of aluminum sulfate, what occurs?',
            options: [
              'Fe displaces Al — iron is more active',
              'No reaction — iron is less active than aluminum',
              'Both metals react with sulfate',
              'A precipitate of FeSO₄ forms'
            ],
            correctAnswer: 1,
            explanation: 'Aluminum (Al) is above iron (Fe) in the activity series. Fe cannot displace Al³⁺ from solution. A less active metal cannot displace a more active metal\'s ions.'
          },
          {
            question: 'Galvanized steel uses zinc coating to protect iron because:',
            options: [
              'Zinc is less active and creates a barrier',
              'Zinc is more active and corrodes preferentially',
              'Zinc reacts with iron to form an alloy',
              'Zinc is cheaper than iron'
            ],
            correctAnswer: 1,
            explanation: 'Zinc is more active (higher in the activity series) than iron. It oxidizes preferentially, sacrificing itself to protect the iron underneath. This is sacrificial (cathodic) protection.'
          }
        ]
      }
    },
    {
      id: 'or5-predict-drill',
      type: 'input-boxes' as const,
      content: `
**Predict the Reaction** 🧮

Will a reaction occur? Type **yes** or **no**.

1) Ag(s) + CuSO₄(aq) → ?

2) Mg(s) + FeCl₂(aq) → ?

3) Fe(s) + HCl(aq) → ?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['no', 'yes', 'yes'],
        hint1: 'Is Ag above or below Cu in the activity series?',
        hint2: 'Is Mg above or below Fe in the activity series?',
        hint3: 'Is Fe above or below H in the activity series?',
        explanation: '1) No — Ag is below Cu in the series; it cannot displace Cu²⁺. 2) Yes — Mg is above Fe; Mg(s) + FeCl₂(aq) → MgCl₂(aq) + Fe(s). 3) Yes — Fe is above H; Fe(s) + 2HCl(aq) → FeCl₂(aq) + H₂(g).'
      }
    },
    {
      id: 'or5-dropdown-practice',
      type: 'dropdown-select' as const,
      content: `
**Activity Series Concepts** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A more active metal is one that',
            options: ['gains electrons easily', 'loses electrons easily', 'is unreactive', 'is always a noble metal']
          },
          {
            label: 'Metals below hydrogen in the activity series',
            options: ['react with all acids', 'react only with strong acids', 'do not react with dilute acids', 'always form precipitates']
          },
          {
            label: 'In single replacement, the free metal must be _____ the ion it replaces',
            options: ['below', 'above', 'equal to', 'adjacent to']
          },
          {
            label: 'Gold is at the bottom of the activity series, meaning it is',
            options: ['the most reactive metal', 'the least reactive metal listed', 'a strong reducing agent', 'easily oxidized']
          }
        ],
        correctAnswers: ['loses electrons easily', 'do not react with dilute acids', 'above', 'the least reactive metal listed'],
        hint1: 'Active metals are strong reducing agents — they give up electrons.',
        hint2: 'Cu, Ag, Pt, Au cannot reduce H⁺ to H₂.',
        hint3: 'More active = higher in the series = can displace lower ones.',
        explanation: 'Active metals lose electrons easily (strong reducing agents). Metals below H don\'t react with dilute acids. The displacing metal must be above the ion\'s metal in the series. Gold is the least reactive metal — it\'s nearly impossible to oxidize.'
      }
    },
    {
      id: 'or5-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Activity Series** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Which reaction will occur spontaneously?',
            options: [
              '$\\text{Au}(s) + \\text{HCl}(aq) \\rightarrow$',
              '$\\text{Ag}(s) + \\text{Cu(NO}_3)_2(aq) \\rightarrow$',
              '$\\text{Zn}(s) + \\text{Pb(NO}_3)_2(aq) \\rightarrow$',
              '$\\text{Cu}(s) + \\text{NaCl}(aq) \\rightarrow$'
            ],
            correctAnswer: 2,
            explanation: 'Zn is above Pb in the activity series. Zn(s) + Pb(NO₃)₂(aq) → Zn(NO₃)₂(aq) + Pb(s). Au and Ag cannot displace Cu or react with dilute acids. Cu cannot displace Na.'
          },
          {
            question: 'A student places metal X into a solution of YCl₂ and observes metal Y depositing on X. This means:',
            options: [
              'Y is more active than X',
              'X is more active than Y',
              'X and Y have equal activity',
              'No redox reaction occurred'
            ],
            correctAnswer: 1,
            explanation: 'Metal X displaced Y²⁺ from solution, meaning X is more active (higher in the activity series) than Y. X was oxidized and Y²⁺ was reduced to solid Y.'
          }
        ]
      }
    }
  ]
}
