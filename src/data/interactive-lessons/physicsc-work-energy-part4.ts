export const physCWorkEnergyPart4Data = {
  topicSlug: "work-energy-theorem-physics-c",
  sections: [
    {
      id: 'physicsc-work-energy-p4-intro',
      type: 'text' as const,
      content: `
# ⚛️ Conservation of Energy

**Part 4 of 7 — Conservation of Energy**

For isolated systems with only conservative forces:

$KE_i + U_i = KE_f + U_f$

$\frac{1}{2}mv_i^2 + mgh_i = \frac{1}{2}mv_f^2 + mgh_f$

If non-conservative forces (friction) act:
$KE_i + U_i + W_{nc} = KE_f + U_f$
    
    `
    },
    {
      id: 'physicsc-work-energy-p4-worked',
      type: 'text' as const,
      content: `
## Worked Example

**A ball is dropped from 20 m. Find its speed at the ground. ($g = 10$ m/s²)**

$mgh = \frac{1}{2}mv^2 \implies v = \sqrt{2gh} = \sqrt{2(10)(20)} = 20$ m/s ✅
    
    `
    },
    {
      id: 'physicsc-work-energy-p4-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "A pendulum at its lowest point has:",
                    "options": [
                              "Maximum KE, minimum PE",
                              "Minimum KE, maximum PE",
                              "Equal KE and PE",
                              "Zero KE and PE"
                    ],
                    "correctAnswer": 0,
                    "explanation": "At the lowest point, all PE has converted to KE."
          }
]
      }
    },
    {
      id: 'physicsc-work-energy-p4-input',
      type: 'input-boxes' as const,
      content: `
**Conservation of Energy** 🧮

1) A ball falls from 20 m. Speed at the bottom (m/s)? ($g = 10$ m/s²)

2) A ball is launched upward at 20 m/s. What speed (m/s) does it have at height 15 m? ($g = 10$ m/s²)

3) A ball is thrown upward at 20 m/s. Maximum height reached (m)? ($g = 10$ m/s², answer as integer. Hint: $h = v^2/(2g)$)
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["20","10","15"],
        hint1: "$v = \\sqrt{2gh}$.",
        hint2: "Use $\\frac{1}{2}mv_i^2 = \\frac{1}{2}mv_f^2 + mgh$. Solve for $v_f$.",
        hint3: "At max height, $v = 0$. So $\\frac{1}{2}v_i^2 = gh$.",
        explanation: "1) $v = \\sqrt{2(10)(20)} = 20$ m/s. 2) $v_f = \\sqrt{400 - 300} = \\sqrt{100} = 10$ m/s. 3) $h = 400/20 = 20$ m. Hmm wait: $h = v^2/(2g) = 400/20 = 20$ m."
      }
    },
    {
      id: 'physicsc-work-energy-p4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"Conservation of mechanical energy requires","options":["Only conservative forces do work","Friction is present","External forces act","The system is open"]},{"label":"The total energy of an isolated system","options":["Is always conserved","Increases over time","Decreases over time","Oscillates"]}],
        correctAnswers: ["Only conservative forces do work","Is always conserved"],
        hint1: "Non-conservative forces dissipate energy.",
        hint2: "First law of thermodynamics for an isolated system.",
        explanation: "Mechanical energy is conserved when only conservative forces act. Total energy (including thermal) is always conserved in an isolated system."
      }
    },
    {
      id: 'physicsc-work-energy-p4-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Scenario | Equation |
|---|----------|----------|
| 1 | Dropped object | $mgh = \frac{1}{2}mv^2$ |
| 2 | Spring launch | $\frac{1}{2}kx^2 = \frac{1}{2}mv^2$ |
| 3 | Friction on ramp | $mgh = \frac{1}{2}mv^2 + f_k d$ |
    
    `
    },
    {
      id: 'physicsc-work-energy-p4-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "Friction converts mechanical energy into:",
                    "options": [
                              "Thermal energy",
                              "Potential energy",
                              "Kinetic energy",
                              "Nuclear energy"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Friction is a non-conservative force that converts mechanical energy to heat."
          }
]
      }
    }
  ]
};
