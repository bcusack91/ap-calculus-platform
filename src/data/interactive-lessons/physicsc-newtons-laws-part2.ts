export const physCNewtonPart2Data = {
  topicSlug: "newtons-laws-physics-c",
  sections: [
    {
      id: 'physicsc-newtons-laws-p2-intro',
      type: 'text' as const,
      content: `
# ⚛️ Newton's Second Law with Calculus

**Part 2 of 7 — Newton's Second Law with Calculus**

$\vec{F}_{\text{net}} = m\vec{a} = m\frac{d\vec{v}}{dt} = \frac{d\vec{p}}{dt}$

When force varies with time or position, use calculus:
- $v(t) = v_0 + \int_0^t \frac{F(t')}{m}\,dt'$
- $x(t) = x_0 + \int_0^t v(t')\,dt'$
    
    `
    },
    {
      id: 'physicsc-newtons-laws-p2-worked',
      type: 'text' as const,
      content: `
## Worked Example

**A 2 kg object has $F(t) = 6t$ N. Find velocity at $t = 3$ s if $v(0) = 0$.**

$a(t) = \frac{F}{m} = \frac{6t}{2} = 3t$

$v(3) = \int_0^3 3t\,dt = \frac{3t^2}{2}\Big|_0^3 = \frac{27}{2} = 13.5$ m/s ✅
    
    `
    },
    {
      id: 'physicsc-newtons-laws-p2-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
    `,
      exercise: {
        questions: [
          {
                    "question": "If $F(t) = 4t$ and $m = 2$ kg, what is $a(t)$?",
                    "options": [
                              "$2t$",
                              "$4t$",
                              "$8t$",
                              "$t/2$"
                    ],
                    "correctAnswer": 0,
                    "explanation": "$a = F/m = 4t/2 = 2t$."
          }
]
      }
    },
    {
      id: 'physicsc-newtons-laws-p2-input',
      type: 'input-boxes' as const,
      content: `
**Newton's Second Law with Calculus** 🧮

1) A 4 kg object has a net force of 20 N. What is its acceleration (m/s²)?

2) A 2 kg mass has $F(t) = 6t$ N. What is the velocity (m/s) at $t = 3$ s if starting from rest? (Hint: integrate $a(t) = 3t$ from 0 to 3). Give answer as a decimal.

3) A constant force of 3 N acts on a 1 kg mass starting from rest. What is the velocity (m/s) at $t = 3$ s?
    
    `,
      exercise: {
        boxes: 3,
        correctAnswers: ["5","4.5","9"],
        hint1: "$a = F/m = 20/4$.",
        hint2: "$v = \\int_0^3 3t\\,dt = [3t^2/2]_0^3$. Evaluate carefully.",
        hint3: "$v = at = (F/m) \\cdot t$.",
        explanation: "1) $a = 20/4 = 5$ m/s². 2) $v = 3(9)/2 = 13.5$ m/s. 3) $a = 3$ m/s², $v = 3(3) = 9$ m/s."
      }
    },
    {
      id: 'physicsc-newtons-laws-p2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
    `,
      exercise: {
        dropdowns: [{"label":"Newton's second law in differential form is","options":["$F = dp/dt$","$F = mv$","$F = ma^2$","$F = m/a$"]},{"label":"To find velocity from a time-varying force, you","options":["Integrate $a(t)$","Differentiate $a(t)$","Square $F(t)$","Multiply $F \\\\times t$"]}],
        correctAnswers: ["$F = dp/dt$","Integrate $a(t)$"],
        hint1: "Think about the most general form of the second law.",
        hint2: "Velocity is the integral of acceleration.",
        explanation: "$F = dp/dt$ is the general form. $v(t) = \\int a(t)\\,dt$."
      }
    },
    {
      id: 'physicsc-newtons-laws-p2-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Concept | Formula |
|---|---------|---------|
| 1 | $F = ma$ | Constant force |
| 2 | $v = \int a\,dt$ | Variable force |
| 3 | $x = \int v\,dt$ | Position from velocity |
    
    `
    },
    {
      id: 'physicsc-newtons-laws-p2-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Question** 📋
    `,
      exercise: {
        questions: [
          {
                    "question": "The impulse delivered by a variable force from $t = 0$ to $t = T$ is:",
                    "options": [
                              "$\\\\int_0^T F(t)\\\\,dt$",
                              "$F \\\\cdot T$",
                              "$ma$",
                              "$\\\\frac{dF}{dt}$"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Impulse is the integral of force over time: $J = \\\\int F\\\\,dt$."
          }
]
      }
    }
  ]
};
