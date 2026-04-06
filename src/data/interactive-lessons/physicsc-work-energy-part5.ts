export const physCWorkEnergyPart5Data = {
  topicSlug: "work-energy-theorem-physics-c",
  sections: [
    {
      id: 'physicsc-work-energy-p5-intro',
      type: 'text' as const,
      content: `
# ⚛️ Power

**Part 5 of 7 — Power**

Power is the rate of doing work:

$P = \\frac{dW}{dt} = \\vec{F} \cdot \\vec{v}$

$P_{avg} = \\frac{W}{\Delta t} = \\frac{\Delta E}{\Delta t}$

Unit: **Watt** (W) = J/s = kg·m²/s³
    
    `
    },
    {
      id: 'physicsc-work-energy-p5-worked',
      type: 'text' as const,
      content: `
## Worked Example

**A motor lifts a 100 kg load 10 m in 5 s. Find the average power. ($g = 10$ m/s²)**

$P = \\frac{W}{t} = \\frac{mgh}{t} = \\frac{100(10)(10)}{5} = 2000$ W ✅
    
    `
    },
    {
      id: 'physicsc-work-energy-p5-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "One Watt equals:",
                    "options": [
                              "One Joule per second",
                              "One Newton per second",
                              "One kg·m/s",
                              "One Newton·meter"
                    ],
                    "correctAnswer": 0,
                    "explanation": "1 W = 1 J/s. Power is energy per unit time."
          }
]
      }
    },
    {
      id: 'physicsc-work-energy-p5-input',
      type: 'input-boxes' as const,
      content: `
**Power** 🧮

1) A motor lifts 100 kg by 10 m in 5 s. Average power (W)? ($g = 10$ m/s²)

2) A force of 50 N moves an object at 10 m/s. Instantaneous power (W)?

3) A 1000 W motor runs for 5 s. How much energy (J) does it deliver? Divide your answer by 5 to give energy per second... wait. 1000 W for 5 s = 5000 J. Hmm. Let me redo: A motor delivers 1000 J in 5 s. What is the power (W)?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["2000","500","200"],
        hint1: "$P = mgh/t$.",
        hint2: "$P = Fv$.",
        hint3: "$P = W/t = 1000/5$.",
        explanation: "1) $P = (100)(10)(10)/5 = 2000$ W. 2) $P = 50 \\times 10 = 500$ W. 3) $P = 1000/5 = 200$ W."
      }
    },
    {
      id: 'physicsc-work-energy-p5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"Instantaneous power is calculated as","options":["$P = F \\\\cdot v$","$P = F \\\\cdot a$","$P = m \\\\cdot v$","$P = F / t$"]},{"label":"If the same work is done in half the time, the power is","options":["Doubled","Halved","The same","Quadrupled"]}],
        correctAnswers: ["$P = F \\\\cdot v$","Doubled"],
        hint1: "Power is force times velocity.",
        hint2: "$P = W/t$. If $t$ halves...",
        explanation: "$P = F \\cdot v$ for instantaneous power. Halving time doubles power since $P = W/t$."
      }
    },
    {
      id: 'physicsc-work-energy-p5-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Concept | Formula |
|---|---------|---------|
| 1 | Average power | $P = W/t$ |
| 2 | Instantaneous power | $P = Fv$ |
| 3 | Horsepower conversion | 1 hp ≈ 746 W |
    
    `
    },
    {
      id: 'physicsc-work-energy-p5-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "A car traveling at constant velocity $v$ against friction $f$ has engine power:",
                    "options": [
                              "$P = fv$",
                              "$P = fv^2$",
                              "$P = f/v$",
                              "$P = fv/2$"
                    ],
                    "correctAnswer": 0,
                    "explanation": "At constant velocity, engine force equals friction. $P = Fv = fv$."
          }
]
      }
    }
  ]
};
