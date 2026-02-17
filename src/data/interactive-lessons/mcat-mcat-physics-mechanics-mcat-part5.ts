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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Pressure P = F/A; units',
            options: ['Bernoulli equation: P + (1/2)rho*v2 + rho*g*h = constant along a streamline.', 'Pascal (Pa) = N/m2; 1 atm = 101,325 Pa.', 'Buoyancy (Archimedes): Fb = rho_fluid * V_displaced * g — object floats if Fb >= weight.', 'P = P0 + rho*g*h — pressure increases with depth.']
          },
          {
            label: 'Hydrostatic pressure',
            options: ['Pascal (Pa) = N/m2; 1 atm = 101,325 Pa.', 'P = P0 + rho*g*h — pressure increases with depth.', 'Buoyancy (Archimedes): Fb = rho_fluid * V_displaced * g — object floats if Fb >= weight.', 'Bernoulli equation: P + (1/2)rho*v2 + rho*g*h = constant along a streamline.']
          },
          {
            label: 'Key Insight',
            options: ['Pascal (Pa) = N/m2; 1 atm = 101,325 Pa.', 'P = P0 + rho*g*h — pressure increases with depth.', 'Buoyancy (Archimedes): Fb = rho_fluid * V_displaced * g — object floats if Fb >= weight.', 'Bernoulli equation: P + (1/2)rho*v2 + rho*g*h = constant along a streamline.']
          }
        ],
        correctAnswers: ['Pascal (Pa) = N/m2; 1 atm = 101,325 Pa.', 'P = P0 + rho*g*h — pressure increases with depth.', 'Buoyancy (Archimedes): Fb = rho_fluid * V_displaced * g — object floats if Fb >= weight.'],
        hint1: 'Think about what each concept specifically describes in Fluids & Pressure.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Fluids & Pressure describes a specific idea. Pressure P = F/A; units: Pascal (Pa) = N/m2; 1 atm = 101,325 Pa. Hydrostatic pressure: P = P0 + rho*g*h — pressure increases with depth. Key Insight: Buoyancy (Archimedes): Fb = rho_fluid * V_displaced * g — object floats if Fb >= weight.'
      }
    }
  ]
}
