export const physCNewtonPart3Data = {
  topicSlug: "newtons-laws-physics-c",
  sections: [
    {
      id: 'physicsc-newtons-laws-p3-intro',
      type: 'text' as const,
      content: `
# ⚛️ Newton's Third Law

**Part 3 of 7 — Newton's Third Law**

For every action force, there is an equal and opposite reaction force.

$\vec{F}_{A \text{ on } B} = -\vec{F}_{B \text{ on } A}$

- Action-reaction pairs act on **different** objects
- They are equal in magnitude, opposite in direction
- They are the same type of force
    
    `
    },
    {
      id: 'physicsc-newtons-laws-p3-worked',
      type: 'text' as const,
      content: `
## Worked Example

**A person pushes a wall with 50 N. What force does the wall exert on the person?**

By Newton's Third Law: The wall exerts 50 N on the person in the opposite direction. ✅

These are an action-reaction pair acting on different objects (person and wall).
    
    `
    },
    {
      id: 'physicsc-newtons-laws-p3-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "Action-reaction force pairs act on:",
                    "options": [
                              "Different objects",
                              "The same object",
                              "Only stationary objects",
                              "Only moving objects"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Newton's Third Law pairs always act on two different objects."
          }
]
      }
    },
    {
      id: 'physicsc-newtons-laws-p3-input',
      type: 'input-boxes' as const,
      content: `
**Newton's Third Law** 🧮

1) You push a desk with 50 N. How many newtons does the desk push back on you?

2) A swimmer pushes water backward with 100 N. What force (N) does the water exert on the swimmer?

3) Object A exerts 20 N on Object B. What force (N) does Object B exert on Object A?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["50","100","20"],
        hint1: "Newton's third law: equal and opposite.",
        hint2: "The reaction force equals the action force.",
        hint3: "Action-reaction pairs have equal magnitudes.",
        explanation: "1) 50 N by Newton's Third Law. 2) 100 N forward. 3) 20 N (opposite direction)."
      }
    },
    {
      id: 'physicsc-newtons-laws-p3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"If a bat exerts 500 N on a ball, the ball exerts on the bat","options":["500 N in the opposite direction","500 N in the same direction","0 N","250 N"]},{"label":"Action-reaction pairs are always","options":["Equal in magnitude","Equal in direction","Acting on the same object","Unbalanced"]}],
        correctAnswers: ["500 N in the opposite direction","Equal in magnitude"],
        hint1: "Newton's Third Law: equal and opposite.",
        hint2: "Think about the definition of the law.",
        explanation: "Newton's Third Law: reaction is 500 N opposite. The pairs are always equal in magnitude."
      }
    },
    {
      id: 'physicsc-newtons-laws-p3-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Action Force | Reaction Force |
|---|-------------|----------------|
| 1 | Earth pulls apple down | Apple pulls Earth up |
| 2 | Bat hits ball | Ball hits bat |
| 3 | Foot pushes ground back | Ground pushes foot forward |
    
    `
    },
    {
      id: 'physicsc-newtons-laws-p3-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "A 1000 kg car hits a 50 kg bicycle. Which experiences the greater force?",
                    "options": [
                              "Same force on both",
                              "The bicycle",
                              "The car",
                              "Depends on speed"
                    ],
                    "correctAnswer": 0,
                    "explanation": "By Newton's Third Law, the forces are equal in magnitude (but cause different accelerations due to different masses)."
          }
]
      }
    }
  ]
};
