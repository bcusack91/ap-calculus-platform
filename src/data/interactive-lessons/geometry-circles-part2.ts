export const geoCirclesPart2Data = {
  topicSlug: "circles-geometry",
  sections: [
    {
      id: 'geometry-circles-p2-intro',
      type: 'text' as const,
      content: `
# 📊 Central & Inscribed Angles

**Part 2 of 7 — Central & Inscribed Angles**

- **Central angle**: vertex at center; equals the intercepted arc
- **Inscribed angle**: vertex on the circle; equals **half** the intercepted arc

$\\text{Inscribed angle} = \\frac{1}{2} \\times \\text{intercepted arc}$
    
    `
    },
    {
      id: 'geometry-circles-p2-worked',
      type: 'text' as const,
      content: `
## Worked Example

**Arc = 80°. Inscribed angle?**

$\\frac{80}{2} = 40°$ ✅
    
    `
    },
    {
      id: 'geometry-circles-p2-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "Central angle equals:",
                    "options": [
                              "Its intercepted arc",
                              "Half its arc",
                              "Twice its arc",
                              "90°"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Central angle = arc."
          }
]
      }
    },
    {
      id: 'geometry-circles-p2-input',
      type: 'input-boxes' as const,
      content: `
**Inscribed Angles** 🧮

1) Arc = 100°. Inscribed angle?

2) Arc = 60°. Inscribed angle?

3) Arc = 140°. Inscribed angle?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["50","30","70"],
        hint1: "100 ÷ 2.",
        hint2: "60 ÷ 2.",
        hint3: "140 ÷ 2.",
        explanation: "1) 50. 2) 30. 3) 70."
      }
    },
    {
      id: 'geometry-circles-p2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"An inscribed angle is ____ its intercepted arc","options":["Half","Equal to","Double","Unrelated to"]},{"label":"A central angle has its vertex at the","options":["Center","Circle edge","Outside","On a chord"]}],
        correctAnswers: ["Half","Center"],
        hint1: "Inscribed = ½ arc.",
        hint2: "Central → center.",
        explanation: "Inscribed = ½ arc. Central angle: vertex at center."
      }
    },
    {
      id: 'geometry-circles-p2-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Arc | Inscribed Angle |
|---|-----|----------------|
| 1 | 100° | 50° |
| 2 | 60° | 30° |
| 3 | 140° | 70° |
    
    `
    },
    {
      id: 'geometry-circles-p2-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "An inscribed angle in a semicircle is:",
                    "options": [
                              "90°",
                              "180°",
                              "45°",
                              "60°"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Arc of semicircle = 180°. Half = 90°."
          }
]
      }
    }
  ]
};
