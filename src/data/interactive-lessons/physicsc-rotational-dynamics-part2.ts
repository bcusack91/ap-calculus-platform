export const physCRotationPart2Data = {
  topicSlug: "rotational-dynamics-physics-c",
  sections: [
    {
      id: 'physicsc-rotational-dynamics-p2-intro',
      type: 'text' as const,
      content: `
# ⚛️ Moment of Inertia

**Part 2 of 7 — Moment of Inertia**

$I = \sum m_i r_i^2 = \int r^2\,dm$

Common moments of inertia:
- Point mass: $I = mr^2$
- Solid cylinder/disk: $I = \\frac{1}{2}mr^2$
- Solid sphere: $I = \\frac{2}{5}mr^2$
- Thin rod (center): $I = \\frac{1}{12}mL^2$
- Thin hoop: $I = mr^2$

**Parallel axis theorem:** $I = I_{cm} + md^2$
    
    `
    },
    {
      id: 'physicsc-rotational-dynamics-p2-worked',
      type: 'text' as const,
      content: `
## Worked Example

**Find I for a 3 kg point mass at 2 m from the axis.**

$I = mr^2 = 3(4) = 12$ kg·m² ✅
    
    `
    },
    {
      id: 'physicsc-rotational-dynamics-p2-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "The moment of inertia depends on:",
                    "options": [
                              "Mass and its distribution from the axis",
                              "Mass only",
                              "Shape only",
                              "Angular velocity"
                    ],
                    "correctAnswer": 0,
                    "explanation": "$I = \\\\sum mr^2$. It depends on both mass and how far it is from the axis."
          }
]
      }
    },
    {
      id: 'physicsc-rotational-dynamics-p2-input',
      type: 'input-boxes' as const,
      content: `
**Moment of Inertia** 🧮

1) A 3 kg point mass is 2 m from the axis. $I$ (kg·m²)?

2) A solid disk has $m = 4$ kg, $r = 1$ m. $I$ (kg·m²)?

3) A solid sphere has $m = 5$ kg, $r = 2$ m. $I$ (kg·m²)?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["12","2","8"],
        hint1: "$I = mr^2 = 3(4)$.",
        hint2: "$I = \\frac{1}{2}mr^2 = \\frac{1}{2}(4)(1)$.",
        hint3: "$I = \\frac{2}{5}mr^2 = \\frac{2}{5}(5)(4)$.",
        explanation: "1) $3(4) = 12$. 2) $\\frac{1}{2}(4)(1) = 2$. 3) $\\frac{2}{5}(5)(4) = 8$."
      }
    },
    {
      id: 'physicsc-rotational-dynamics-p2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"A hoop has moment of inertia","options":["$mr^2$","$\\\\frac{1}{2}mr^2$","$\\\\frac{2}{5}mr^2$","$\\\\frac{1}{12}mL^2$"]},{"label":"Moving mass further from the axis","options":["Increases $I$","Decreases $I$","No effect on $I$","Decreases $\\\\omega$"]}],
        correctAnswers: ["$mr^2$","Increases $I$"],
        hint1: "A hoop has all mass at radius $r$.",
        hint2: "$I \\propto r^2$.",
        explanation: "A hoop: $I = mr^2$. Since $I \\propto r^2$, moving mass outward increases $I$."
      }
    },
    {
      id: 'physicsc-rotational-dynamics-p2-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Object | $I$ |
|---|--------|-----|
| 1 | Point mass | $mr^2$ |
| 2 | Disk | $\\frac{1}{2}mr^2$ |
| 3 | Sphere | $\\frac{2}{5}mr^2$ |
    
    `
    },
    {
      id: 'physicsc-rotational-dynamics-p2-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "The parallel axis theorem adds the term:",
                    "options": [
                              "$md^2$",
                              "$\\\\frac{1}{2}md^2$",
                              "$md$",
                              "$m^2d$"
                    ],
                    "correctAnswer": 0,
                    "explanation": "$I = I_{cm} + md^2$, where $d$ is the distance from cm to new axis."
          }
]
      }
    }
  ]
};
