export const physCEMCapacitorsPart3Data = {
  topicSlug: "capacitors-dielectrics-physics-c-em",
  sections: [
    {
      id: 'physicsc-em-capacitors-p3-intro',
      type: 'text' as const,
      content: `
# ⚡ Capacitors in Series & Parallel

**Part 3 of 7 — Series & Parallel Combinations**

**Parallel:** $C_{eq} = C_1 + C_2 + \cdots$ (same voltage)

**Series:** $\frac{1}{C_{eq}} = \frac{1}{C_1} + \frac{1}{C_2} + \cdots$ (same charge)

Note: opposite of resistors! Parallel adds, series uses reciprocals.
    
    `
    },
    {
      id: 'physicsc-em-capacitors-p3-worked',
      type: 'text' as const,
      content: `
## Worked Example

**Two capacitors: 3 μF and 6 μF in series. Find $C_{eq}$.**

$\frac{1}{C_{eq}} = \frac{1}{3} + \frac{1}{6} = \frac{2+1}{6} = \frac{1}{2}$

$C_{eq} = 2$ μF ✅
    
    `
    },
    {
      id: 'physicsc-em-capacitors-p3-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "Two identical capacitors in parallel have total capacitance:",
                    "options": [
                              "$2C$",
                              "$C$",
                              "$C/2$",
                              "$4C$"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Parallel: $C_{eq} = C + C = 2C$."
          }
]
      }
    },
    {
      id: 'physicsc-em-capacitors-p3-input',
      type: 'input-boxes' as const,
      content: `
**Series & Parallel Capacitors** 🧮

1) 3 μF and 6 μF in parallel. $C_{eq}$ (μF)?

2) 3 μF and 6 μF in series. $C_{eq}$ (μF)?

3) Two 3 μF caps in parallel: $C_{eq}$ (μF)?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["9","2","6"],
        hint1: "Parallel: add them.",
        hint2: "$1/C_{eq} = 1/3 + 1/6 = 3/6 = 1/2$.",
        hint3: "$3 + 3$.",
        explanation: "1) $3 + 6 = 9$ μF. 2) $C_{eq} = 2$ μF. 3) $3 + 3 = 6$ μF."
      }
    },
    {
      id: 'physicsc-em-capacitors-p3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"Capacitors in parallel share the same","options":["Voltage","Charge","Current","Resistance"]},{"label":"Capacitors in series share the same","options":["Charge","Voltage","Capacitance","Energy"]}],
        correctAnswers: ["Voltage","Charge"],
        hint1: "Parallel components are connected across the same points.",
        hint2: "Charge flows through series capacitors equally.",
        explanation: "Parallel: same voltage. Series: same charge on each capacitor."
      }
    },
    {
      id: 'physicsc-em-capacitors-p3-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Configuration | Formula |
|---|--------------|---------|
| 1 | Parallel | $C_{eq} = C_1 + C_2$ |
| 2 | Series | $1/C_{eq} = 1/C_1 + 1/C_2$ |
| 3 | Mixed | Simplify step by step |
    
    `
    },
    {
      id: 'physicsc-em-capacitors-p3-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "Two identical capacitors in series have total capacitance:",
                    "options": [
                              "$C/2$",
                              "$2C$",
                              "$C$",
                              "$4C$"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Series: $1/C_{eq} = 1/C + 1/C = 2/C$, so $C_{eq} = C/2$."
          }
]
      }
    }
  ]
};
