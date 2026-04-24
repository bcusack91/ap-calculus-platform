export const physCNewtonPart4Data = {
  topicSlug: "newtons-laws-physics-c",
  sections: [
    {
      id: 'physicsc-newtons-laws-p4-intro',
      type: 'text' as const,
      content: `
# ⚛️ Friction Forces

**Part 4 of 7 — Friction Forces**

- **Static friction:** $f_s \\leq \mu_s N$ (prevents motion)
- **Kinetic friction:** $f_k = \mu_k N$ (opposes sliding motion)

Where $N$ is the normal force and $\\mu$ is the coefficient of friction.

For an object on an incline at angle $\\theta$:
- $N = mg\\cos\\theta$
- Friction along the incline: $f = \\mu mg\\cos\\theta$
    
    `
    },
    {
      id: 'physicsc-newtons-laws-p4-worked',
      type: 'text' as const,
      content: `
## Worked Example

**A 10 kg block on a horizontal surface has $\mu_k = 0.3$. Find the kinetic friction force.**

$N = mg = 10 \\times 10 = 100$ N

$f_k = \mu_k N = 0.3 \\times 100 = 30$ N ✅
    
    `
    },
    {
      id: 'physicsc-newtons-laws-p4-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "Which type of friction acts on a stationary object about to slide?",
                    "options": [
                              "Static friction",
                              "Kinetic friction",
                              "Rolling friction",
                              "Air resistance"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Static friction prevents an object from starting to slide."
          }
]
      }
    },
    {
      id: 'physicsc-newtons-laws-p4-input',
      type: 'input-boxes' as const,
      content: `
**Friction Forces** 🧮

1) A 10 kg block on a flat surface has $\mu_k = 0.3$. Kinetic friction force (N)? (Use $g = 10$ m/s²)

2) A 5 kg block requires 20 N to start sliding on a flat surface. What is $\mu_s$? (Use $g = 10$ m/s²)

3) A 10 kg block is on a surface with $\mu_k = 0.5$. What horizontal force (N) is needed to move it at constant velocity? (Use $g = 10$ m/s²)
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["30","0.4","50"],
        hint1: "$f_k = \\mu_k \\cdot m \\cdot g$.",
        hint2: "$\\mu_s = f_s / N = 20 / (5 \\times 10)$.",
        hint3: "At constant velocity, applied force equals friction.",
        explanation: "1) $0.3 \\times 100 = 30$ N. 2) $\\mu_s = 20/50 = 0.4$. 3) $f_k = 0.5 \\times 100 = 50$ N, so applied force = 50 N."
      }
    },
    {
      id: 'physicsc-newtons-laws-p4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"Kinetic friction is generally _____ than static friction","options":["Less","Greater","Equal","Unrelated"]},{"label":"On a steeper incline, the normal force","options":["Decreases","Increases","Stays the same","Becomes zero"]}],
        correctAnswers: ["Less","Decreases"],
        hint1: "$\\mu_k < \\mu_s$ for most surfaces.",
        hint2: "$N = mg\\cos\\theta$. As $\\theta$ increases, $\\cos\\theta$ ...",
        explanation: "$\\mu_k < \\mu_s$ so kinetic friction is less. As angle increases, $\\cos\\theta$ decreases, so $N$ decreases."
      }
    },
    {
      id: 'physicsc-newtons-laws-p4-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Scenario | Key Formula |
|---|----------|-------------|
| 1 | Flat surface | $f = \\mu mg$ |
| 2 | Inclined plane | $f = \\mu mg\\cos\\theta$ |
| 3 | Threshold of sliding | $f_s = \mu_s N$ |
    
    `
    },
    {
      id: 'physicsc-newtons-laws-p4-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "On an incline, the normal force equals:",
                    "options": [
                              "$mg\\\\cos\\\\theta$",
                              "$mg\\\\sin\\\\theta$",
                              "$mg$",
                              "$\\\\mu mg$"
                    ],
                    "correctAnswer": 0,
                    "explanation": "The normal force on an incline is the component perpendicular to the surface: $N = mg\\\\cos\\\\theta$."
          }
]
      }
    }
  ]
};
