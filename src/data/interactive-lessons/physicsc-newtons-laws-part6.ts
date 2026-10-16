export const physCNewtonPart6Data = {
  topicSlug: "newtons-laws-physics-c",
  sections: [
    {
      id: 'physicsc-newtons-laws-p6-intro',
      type: 'text' as const,
      content: `
# ⚛️ Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

### Strategy for Newton's Law Problems
1. Draw a **free-body diagram** (FBD)
2. Choose coordinate axes (often along incline)
3. Write $\\sum F_x = ma_x$ and $\\sum F_y = ma_y$
4. Solve the system of equations
5. Check units and reasonableness
    
    `
    },
    {
      id: 'physicsc-newtons-laws-p6-worked',
      type: 'text' as const,
      content: `
## Worked Example

**A 5 kg block is pushed with 40 N along a surface with $\\mu_k = 0.2$. Find the acceleration. ($g = 10$ $m/s^{2}$)**

$N = mg = 50$ N, $f_k = 0.2 \\times 50 = 10$ N

$\\sum F = 40 - 10 = 30$ N

$a = 30/5 = 6$ $m/s^{2}$ ✅
    
    `
    },
    {
      id: 'physicsc-newtons-laws-p6-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "The first step in solving a Newton's law problem should be:",
                    "options": [
                              "Draw a free-body diagram",
                              "Choose a kinematics equation",
                              "Multiply the mass by $g$ first",
                              "Add all the forces in the system"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Always start with a free-body diagram to identify all forces."
          }
]
      }
    },
    {
      id: 'physicsc-newtons-laws-p6-input',
      type: 'input-boxes' as const,
      content: `
**Problem-Solving Workshop** 🧮

1) A 5 kg block is pushed with 40 N on a surface ($\\mu_k = 0.2$, $g = 10$ $m/s^{2}$). What is the acceleration $(m/s^{2})$?

2) Net force on a 3 kg object is 12 N. What is the acceleration $(m/s^{2})$?

3) A 10 kg object accelerates at 2 $m/s^{2}$ while a 15 N friction force opposes its motion. What horizontal applied force (N) acts on it?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["6","4","35"],
        hint1: "$f_k = 0.2 \\times 5 \\times 10 = 10$ N. $a = (40-10)/5$.",
        hint2: "$a = F/m$.",
        hint3: "$F_{app} - f = ma$, so $F_{app} = ma + f$.",
        explanation: "1) $a = (40-10)/5 = 6$ $m/s^{2}$. 2) $12/3 = 4$ $m/s^{2}$. 3) $F_{app} = 10(2)+15 = 35$ N."
      }
    },
    {
      id: 'physicsc-newtons-laws-p6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"On a frictionless incline, the acceleration depends on","options":["The angle of the incline","The mass of the object","The length of the incline","The object's starting speed"]},{"label":"When drawing a free-body diagram, you should include","options":["Only forces acting on the object","All forces in the system","Only gravity","Only applied forces"]}],
        correctAnswers: ["The angle of the incline","Only forces acting on the object"],
        hint1: "$a = g\\sin\\theta$ on a frictionless incline.",
        hint2: "FBDs show forces on one specific object only.",
        explanation: "Acceleration on a frictionless incline is $g\\sin\\theta$ (mass cancels). FBDs show only forces on the chosen object."
      }
    },
    {
      id: 'physicsc-newtons-laws-p6-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Problem Type | Key Steps |
|---|-------------|-----------|
| 1 | Horizontal surface with friction | FBD → $F_{net} = F_{app} - f_k$ |
| 2 | Incline problems | Components along and perpendicular |
| 3 | Connected objects | Shared acceleration, separate FBDs |
    
    `
    },
    {
      id: 'physicsc-newtons-laws-p6-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "For two blocks connected by a string (no friction), they share:",
                    "options": [
                              "The same acceleration",
                              "The same mass",
                              "The same net force",
                              "The same weight"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Connected objects with an inextensible string have the same acceleration magnitude."
          }
]
      }
    }
  ]
};
