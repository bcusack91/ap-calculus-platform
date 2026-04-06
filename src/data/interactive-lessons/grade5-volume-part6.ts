export const g5VolumePart6Data = {
  topicSlug: "volume-grade5",
  sections: [
    {
      id: 'grade5-volume-p6-intro',
      type: 'text' as const,
      content: `
# 🛠️ Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

Apply volume to multi-step problems:
1. Identify dimensions
2. Choose the right formula
3. Calculate
4. Check units (cubic)
    
    `
    },
    {
      id: 'grade5-volume-p6-worked',
      type: 'text' as const,
      content: `
## Worked Example

**A garden bed is 6 m × 3 m × 0.5 m. Soil costs \$5/m³. Total cost?**

$V = 6 \\times 3 \\times 0.5 = 9$ m³

Cost: $9 \\times 5 = 45$ → **\$45** ✅
    
    `
    },
    {
      id: 'grade5-volume-p6-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "Double the height of a 5×4×3 box. New volume?",
                    "options": [
                              "120",
                              "60",
                              "240",
                              "30"
                    ],
                    "correctAnswer": 0,
                    "explanation": "5 × 4 × 6 = 120."
          }
]
      }
    },
    {
      id: 'grade5-volume-p6-input',
      type: 'input-boxes' as const,
      content: `
**Problem Solving** 🧮

1) How many 1-inch cubes fill a 4 × 3 × 2 inch box?

2) A 5 × 4 × 3 box. You double the height. New volume?

3) A 2 × 2 × 2 m hole. Gravel costs \$3/m³. Total cost?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["24","120","24"],
        hint1: "V = 4 × 3 × 2.",
        hint2: "New height = 6. V = 5 × 4 × 6.",
        hint3: "V = 8. Cost = 8 × 3.",
        explanation: "1) 24. 2) 120. 3) V=8, cost=8×3=$24."
      }
    },
    {
      id: 'grade5-volume-p6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"Doubling one dimension of a prism","options":["Doubles the volume","Quadruples the volume","Does not change volume","Triples the volume"]},{"label":"To find cost of filling, first find","options":["Volume","Perimeter","Surface area","Weight"]}],
        correctAnswers: ["Doubles the volume","Volume"],
        hint1: "V = l × w × h. Double one = double V.",
        hint2: "Cost depends on how much space to fill.",
        explanation: "Doubling one dimension doubles V. Cost needs volume first."
      }
    },
    {
      id: 'grade5-volume-p6-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Problem | Steps |
|---|---------|-------|
| 1 | Fill a 4×3×2 box with 1-inch cubes | V = lwh |
| 2 | Double the height of a 5×4×3 box | Compare volumes |
| 3 | Cost to fill 2×2×2 m with gravel at \$3/m³ | V then cost |
    
    `
    },
    {
      id: 'grade5-volume-p6-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "A pool holds 200 m³. Half-filled = ?",
                    "options": [
                              "100 m³",
                              "400 m³",
                              "200 m³",
                              "50 m³"
                    ],
                    "correctAnswer": 0,
                    "explanation": "200 ÷ 2 = 100 m³."
          }
]
      }
    }
  ]
};
