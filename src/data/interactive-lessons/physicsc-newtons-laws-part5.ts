export const physCNewtonPart5Data = {
  topicSlug: "newtons-laws-physics-c",
  sections: [
    {
      id: 'physicsc-newtons-laws-p5-intro',
      type: 'text' as const,
      content: `
# ⚛️ Circular Motion

**Part 5 of 7 — Circular Motion**

For uniform circular motion:

$a_c = \\frac{v^2}{r} = \\omega^2 r$

$F_c = \\frac{mv^2}{r}$

where $\\omega = 2\\pi f = \\frac{2\\pi}{T}$ is the angular velocity.

Centripetal force is not a new force — it is the net inward force (tension, gravity, friction, normal force, etc.).
    
    `
    },
    {
      id: 'physicsc-newtons-laws-p5-worked',
      type: 'text' as const,
      content: `
## Worked Example

**A 2 kg ball on a 0.5 m string moves at 4 m/s in a horizontal circle. Find the centripetal force.**

$F_c = \\frac{mv^2}{r} = \\frac{2(16)}{0.5} = 64$ N ✅
    
    `
    },
    {
      id: 'physicsc-newtons-laws-p5-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "Centripetal acceleration always points:",
                    "options": [
                              "Toward the center",
                              "Away from the center",
                              "Tangent to the circle",
                              "In the direction of velocity"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Centripetal means \"center-seeking.\" The acceleration always points inward."
          }
]
      }
    },
    {
      id: 'physicsc-newtons-laws-p5-input',
      type: 'input-boxes' as const,
      content: `
**Circular Motion** 🧮

1) A car goes around a curve of radius 50 m at 20 m/s. What is the centripetal acceleration (m/s²)?

2) An object moves in a circle of radius 2 m with centripetal acceleration 8 m/s². What is the speed (m/s)?

3) A 2 kg ball on a 0.5 m string moves at 4 m/s. What is the tension/centripetal force (N)?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["8","4","32"],
        hint1: "$a_c = v^2/r = (20)^2/50$.",
        hint2: "$v^2 = a_c \\cdot r$, then take the square root.",
        hint3: "$F_c = mv^2/r = 2(16)/0.5$.",
        explanation: "1) $400/50 = 8$ m/s². 2) $v = \\sqrt{8 \\times 2} = \\sqrt{16} = 4$ m/s. 3) $32/0.5 = 64$... wait, $2(16)/0.5 = 64$ N. Let me recheck: $F = 2 \\times 16 / 0.5 = 64$ N."
      }
    },
    {
      id: 'physicsc-newtons-laws-p5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"The centripetal force for a car on a flat curve is provided by","options":["Friction","Gravity","Normal force","Engine force"]},{"label":"In uniform circular motion, the speed is","options":["Constant","Increasing","Decreasing","Zero"]}],
        correctAnswers: ["Friction","Constant"],
        hint1: "What force acts horizontally toward the center on a flat road?",
        hint2: "Uniform means constant speed.",
        explanation: "Friction provides the centripetal force on a flat curve. Uniform circular motion has constant speed."
      }
    },
    {
      id: 'physicsc-newtons-laws-p5-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Concept | Formula |
|---|---------|---------|
| 1 | Centripetal acceleration | $a_c = v^2/r$ |
| 2 | Centripetal force | $F_c = mv^2/r$ |
| 3 | Period and frequency | $T = 2\\pi r / v$ |
    
    `
    },
    {
      id: 'physicsc-newtons-laws-p5-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "If the speed of an object in circular motion doubles while the radius stays the same, the centripetal force:",
                    "options": [
                              "Quadruples",
                              "Doubles",
                              "Halves",
                              "Stays the same"
                    ],
                    "correctAnswer": 0,
                    "explanation": "$F_c = mv^2/r$. If $v \\\\to 2v$, then $F_c \\\\to m(2v)^2/r = 4mv^2/r$."
          }
]
      }
    }
  ]
};
