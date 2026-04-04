export const geoCirclesPart3Data = {
  topicSlug: "circles-geometry",
  sections: [
    {
      id: 'geometry-circles-p3-intro',
      type: 'text' as const,
      content: `
# 🔢 Arc Length & Sector Area

**Part 3 of 7 — Arc Length & Sector Area**

$\text{Arc length} = \frac{\theta}{360} \times 2\pi r$

$\text{Sector area} = \frac{\theta}{360} \times \pi r^2$

where $\theta$ is the central angle in degrees.
    
    `
    },
    {
      id: 'geometry-circles-p3-worked',
      type: 'text' as const,
      content: `
## Worked Example

**r = 10, θ = 90°. Arc length?**

$\frac{90}{360} \times 2\pi(10) = \frac{1}{4}(20\pi) = 5\pi \approx 15.7$ ✅
    
    `
    },
    {
      id: 'geometry-circles-p3-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "Arc length formula uses what fraction of the circumference?",
                    "options": [
                              "θ/360",
                              "θ/180",
                              "θ/2π",
                              "r/θ"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Fraction = central angle / 360°."
          }
]
      }
    },
    {
      id: 'geometry-circles-p3-input',
      type: 'input-boxes' as const,
      content: `
**Arc & Sector** 🧮 (Use π ≈ 3.14)

1) r=6, θ=60°. Arc length?

2) r=10, θ=90°. Sector area?

3) r=4, θ=180°. Arc length?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["6.28","78.5","12.56"],
        hint1: "(60/360)(2)(3.14)(6).",
        hint2: "(90/360)(3.14)(100).",
        hint3: "(180/360)(2)(3.14)(4).",
        explanation: "1) (1/6)(37.68)=6.28. 2) 78.5. 3) (1/2)(25.12)=12.56."
      }
    },
    {
      id: 'geometry-circles-p3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"Arc length is a portion of the","options":["Circumference","Area","Diameter","Radius"]},{"label":"Sector area is a portion of the","options":["Circle area","Circumference","Diameter","Perimeter"]}],
        correctAnswers: ["Circumference","Circle area"],
        hint1: "Arc = part of distance around.",
        hint2: "Sector = pizza slice of area.",
        explanation: "Arc length: part of circumference. Sector: part of area."
      }
    },
    {
      id: 'geometry-circles-p3-practice',
      type: 'text' as const,
      content: `
## Practice

| # | r | θ | Find |
|---|---|---|------|
| 1 | 6 | 60° | Arc length |
| 2 | 10 | 90° | Sector area |
| 3 | 4 | 180° | Arc length |
    
    `
    },
    {
      id: 'geometry-circles-p3-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "Sector area for r=10, θ=90° (use π≈3.14)?",
                    "options": [
                              "78.5",
                              "314",
                              "157",
                              "31.4"
                    ],
                    "correctAnswer": 0,
                    "explanation": "(90/360)π(100) = 25π ≈ 78.5."
          }
]
      }
    }
  ]
};
