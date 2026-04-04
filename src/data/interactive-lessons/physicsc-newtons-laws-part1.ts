export const physCNewtonPart1Data = {
  topicSlug: "newtons-laws-physics-c",
  sections: [
    {
      id: 'physicsc-newtons-laws-p1-intro',
      type: 'text' as const,
      content: `
# ⚛️ Newton's First Law

**Part 1 of 7 — Newton's First Law**

An object remains at rest or in uniform motion unless acted upon by a net external force.

### Key Ideas
- **Inertia**: the tendency of objects to resist changes in motion
- Mass is a measure of inertia
- An object in equilibrium has $\sum \vec{F} = 0$
- This law defines **inertial reference frames**
    
    `
    },
    {
      id: 'physicsc-newtons-laws-p1-worked',
      type: 'text' as const,
      content: `
## Worked Example

**A 5 kg block sits on a frictionless table with two horizontal forces: 20 N to the right and 20 N to the left. Describe its motion.**

**Step 1:** $\sum F = 20 - 20 = 0$ N

**Step 2:** Net force is zero, so the block is in equilibrium.

**Answer:** The block remains at rest (or continues at constant velocity if already moving). ✅
    
    `
    },
    {
      id: 'physicsc-newtons-laws-p1-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "A hockey puck slides on frictionless ice. What happens after it is released?",
                    "options": [
                              "It continues at constant velocity",
                              "It slows down gradually",
                              "It speeds up",
                              "It stops immediately"
                    ],
                    "correctAnswer": 0,
                    "explanation": "With no net force, the puck continues at constant velocity (Newton's First Law)."
          }
]
      }
    },
    {
      id: 'physicsc-newtons-laws-p1-input',
      type: 'input-boxes' as const,
      content: `
**Newton's First Law Practice** 🧮

1) A book sits on a table with no net force. What is its acceleration (in m/s²)?

2) A ball rolls at 10 m/s on a frictionless surface. What is its speed (m/s) after 5 seconds?

3) Two forces act on an object: 15 N right and 10 N left. What is the net force magnitude (in N)?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["0","10","5"],
        hint1: "No net force means no acceleration.",
        hint2: "With zero friction, what does Newton's first law say about the speed?",
        hint3: "Net force = 15 - 10.",
        explanation: "1) Zero net force → zero acceleration. 2) No friction → constant velocity = 10 m/s. 3) 15 - 10 = 5 N."
      }
    },
    {
      id: 'physicsc-newtons-laws-p1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"An object at rest with zero net force will","options":["Remain at rest","Accelerate forward","Decelerate","Float upward"]},{"label":"Inertia depends on an object's","options":["Mass","Shape","Color","Temperature"]}],
        correctAnswers: ["Remain at rest","Mass"],
        hint1: "Think about what Newton's first law says.",
        hint2: "Which property resists changes in motion?",
        explanation: "An object at rest stays at rest when net force is zero. Inertia depends on mass."
      }
    },
    {
      id: 'physicsc-newtons-laws-p1-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Problem | Hint |
|---|---------|------|
| 1 | If net force is zero, what is the acceleration? | Newton's first law |
| 2 | What property measures resistance to acceleration? | Starts with "i" |
| 3 | Can an object move at 10 m/s with zero net force? | Think about constant velocity |
    
    `
    },
    {
      id: 'physicsc-newtons-laws-p1-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "Newton's First Law is valid in which type of reference frame?",
                    "options": [
                              "Inertial",
                              "Accelerating",
                              "Rotating",
                              "Any frame"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Newton's laws hold in inertial (non-accelerating) reference frames."
          }
]
      }
    }
  ]
};
