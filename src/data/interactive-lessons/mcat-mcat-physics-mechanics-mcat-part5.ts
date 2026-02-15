export const mcatPhysMechPart5Data = {
  topicSlug: 'mcat-physics-mechanics-mcat',
  sections: [
    {
      id: 'mcat-5-intro',
      type: 'text' as const,
      content: `
# Fluids & Pressure

**Part 5 of 7 — Fluids & Pressure**

Pressure P = F/A; units: Pascal (Pa) = N/m2; 1 atm = 101,325 Pa.

Hydrostatic pressure: P = P0 + rho*g*h — pressure increases with depth.
      `
    },
    {
      id: 'mcat-5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes a key concept in fluids & pressure?',
            options: [
              'Pressure P = F/A; units: Pascal (Pa) = N/m2; 1 atm = 101,325 Pa',
              'This topic is not tested on the MCAT',
              'This applies only to clinical practice, not the MCAT',
              'None of the above'
            ],
            correctAnswer: 0,
            explanation: 'Pressure P = F/A; units: Pascal (Pa) = N/m2; 1 atm = 101,325 Pa'
          }
        ]
      }
    },
    {
      id: 'mcat-5-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Buoyancy (Archimedes): Fb = rho_fluid * V_displaced * g — object floats if Fb >= weight.

**MCAT Tip:** Bernoulli equation: P + (1/2)rho*v2 + rho*g*h = constant along a streamline.
      `
    },
    {
      id: 'mcat-5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is an important principle for MCAT Chem/Phys related to fluids & pressure?',
            options: [
              'Buoyancy (Archimedes): Fb = rho_fluid * V_displaced * g — object floats if Fb >= weight',
              'Memorize without understanding — the MCAT only tests recall',
              'This concept is only relevant to graduate-level courses',
              'Skip this topic — it rarely appears on the MCAT'
            ],
            correctAnswer: 0,
            explanation: 'Buoyancy (Archimedes): Fb = rho_fluid * V_displaced * g — object floats if Fb >= weight'
          }
        ]
      }
    },
    {
      id: 'mcat-5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Core concept for Fluids & Pressure:',
            options: ['Pressure P = F/A; units: Pascal (Pa) = N/m2; 1 atm = 101,325', 'Hydrostatic pressure: P = P0 + rho*g*h — pressure increases ', 'Not MCAT-relevant', 'Cannot be determined']
          },
          {
            label: 'MCAT application:',
            options: ['Buoyancy (Archimedes): Fb = rho_fluid * V_displaced * g — ob', 'Skip this topic', 'Only on practice tests', 'Not applicable']
          }
        ],
        correctAnswers: ['Pressure P = F/A; units: Pascal (Pa) = N/m2; 1 atm = 101,325', 'Buoyancy (Archimedes): Fb = rho_fluid * V_displaced * g — ob'],
        hint1: 'Think about fluids & pressure',
        hint2: 'Consider the MCAT application',
        explanation: 'Pressure P = F/A; units: Pascal (Pa) = N/m2; 1 atm = 101,325 Pa. Buoyancy (Archimedes): Fb = rho_fluid * V_displaced * g — object floats if Fb >= weight.'
      }
    }
  ]
}
