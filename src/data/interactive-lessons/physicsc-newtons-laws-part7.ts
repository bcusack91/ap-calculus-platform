export const physCNewtonPart7Data = {
  topicSlug: "newtons-laws-physics-c",
  sections: [
    {
      id: 'physicsc-newtons-laws-p7-intro',
      type: 'text' as const,
      content: `
# ⚛️ Review & Applications

**Part 7 of 7 — Review & Applications**

### Key Formulas
- $\\sum F = ma = m\\frac{dv}{dt}$
- $f_s \\leq \mu_s N$, $f_k = \mu_k N$
- $F_c = mv^2/r$
- Action-reaction: $F_{AB} = -F_{BA}$
    
    `
    },
    {
      id: 'physicsc-newtons-laws-p7-worked',
      type: 'text' as const,
      content: `
## Worked Example

**An Atwood machine has masses 3 kg and 5 kg. Find the acceleration. ($g = 10$ m/s²)**

$a = \\frac{(m_2 - m_1)g}{m_1 + m_2} = \\frac{(5-3)(10)}{3+5} = \\frac{20}{8} = 2.5$ m/s² ✅
    
    `
    },
    {
      id: 'physicsc-newtons-laws-p7-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "An elevator accelerates upward at 2 m/s². A person's apparent weight:",
                    "options": [
                              "Increases",
                              "Decreases",
                              "Stays the same",
                              "Becomes zero"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Accelerating upward increases apparent weight: $N = m(g + a)$."
          }
]
      }
    },
    {
      id: 'physicsc-newtons-laws-p7-input',
      type: 'input-boxes' as const,
      content: `
**Review & Applications** 🧮

1) Atwood machine: masses 3 kg and 5 kg. Acceleration (m/s²)? ($g = 10$ m/s²)

2) A 10 kg object hangs from a rope. What is the tension (N)? ($g = 10$ m/s²)

3) A 4 kg block is pushed with 30 N. Friction is 10 N. What is the net force (N)?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["2.5","100","20"],
        hint1: "$a = (m_2 - m_1)g / (m_1 + m_2)$.",
        hint2: "At rest: $T = mg$.",
        hint3: "$F_{net} = F_{app} - f$.",
        explanation: "1) $(5-3)(10)/(3+5) = 20/8 = 2.5$ m/s². 2) $T = 10 \\times 10 = 100$ N. 3) $30 - 10 = 20$ N."
      }
    },
    {
      id: 'physicsc-newtons-laws-p7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"The SI unit of force is the","options":["Newton","Joule","Watt","Pascal"]},{"label":"At terminal velocity, net force is","options":["Zero","Maximum","Equal to weight","Equal to drag"]}],
        correctAnswers: ["Newton","Zero"],
        hint1: "Named after Isaac Newton.",
        hint2: "Terminal velocity means no acceleration.",
        explanation: "Force is measured in Newtons. At terminal velocity, drag equals weight, so net force = 0."
      }
    },
    {
      id: 'physicsc-newtons-laws-p7-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Topic | Key Formula |
|---|-------|-------------|
| 1 | Newton's Laws overview | $F = ma$ |
| 2 | Friction | $f = \\mu N$ |
| 3 | Circular motion | $F_c = mv^2/r$ |
    
    `
    },
    {
      id: 'physicsc-newtons-laws-p7-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "A box in a truck does not slide when the truck brakes. What force prevents sliding?",
                    "options": [
                              "Static friction",
                              "Kinetic friction",
                              "Normal force",
                              "Gravity"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Static friction between the box and truck bed resists relative motion."
          }
]
      }
    }
  ]
};
