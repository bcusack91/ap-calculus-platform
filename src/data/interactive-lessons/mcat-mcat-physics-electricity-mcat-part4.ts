export const mcatPhysElecPart4Data = {
  topicSlug: 'mcat-physics-electricity-mcat',
  sections: [
    {
      id: 'mcat-4-intro',
      type: 'text' as const,
      content: `
# Optics & Light

**Part 4 of 7 — Optics & Light**

Refraction: Snells law n1*sin(theta1) = n2*sin(theta2) — light bends toward normal in denser medium.

Lenses: converging (convex) focuses light; diverging (concave) spreads light.
      `
    },
    {
      id: 'mcat-4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes a key concept in optics & light?',
            options: [
              'Refraction: Snells law n1*sin(theta1) = n2*sin(theta2) — light bends toward normal in denser medium',
              'This topic is not tested on the MCAT',
              'This applies only to clinical practice, not the MCAT',
              'None of the above'
            ],
            correctAnswer: 0,
            explanation: 'Refraction: Snells law n1*sin(theta1) = n2*sin(theta2) — light bends toward normal in denser medium'
          }
        ]
      }
    },
    {
      id: 'mcat-4-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Thin lens equation: 1/f = 1/do + 1/di; magnification m = -di/do.

**MCAT Tip:** Total internal reflection occurs when angle of incidence > critical angle (only going from dense to less dense).
      `
    },
    {
      id: 'mcat-4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is an important principle for MCAT Chem/Phys related to optics & light?',
            options: [
              'Thin lens equation: 1/f = 1/do + 1/di; magnification m = -di/do',
              'Memorize without understanding — the MCAT only tests recall',
              'This concept is only relevant to graduate-level courses',
              'Skip this topic — it rarely appears on the MCAT'
            ],
            correctAnswer: 0,
            explanation: 'Thin lens equation: 1/f = 1/do + 1/di; magnification m = -di/do'
          }
        ]
      }
    },
    {
      id: 'mcat-4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Core concept for Optics & Light:',
            options: ['Refraction: Snells law n1*sin(theta1) = n2*sin(theta2) — lig', 'Lenses: converging (convex) focuses light; diverging (concav', 'Not MCAT-relevant', 'Cannot be determined']
          },
          {
            label: 'MCAT application:',
            options: ['Thin lens equation: 1/f = 1/do + 1/di; magnification m = -di', 'Skip this topic', 'Only on practice tests', 'Not applicable']
          }
        ],
        correctAnswers: ['Refraction: Snells law n1*sin(theta1) = n2*sin(theta2) — lig', 'Thin lens equation: 1/f = 1/do + 1/di; magnification m = -di'],
        hint1: 'Think about optics & light',
        hint2: 'Consider the MCAT application',
        explanation: 'Refraction: Snells law n1*sin(theta1) = n2*sin(theta2) — light bends toward normal in denser medium. Thin lens equation: 1/f = 1/do + 1/di; magnification m = -di/do.'
      }
    }
  ]
}
