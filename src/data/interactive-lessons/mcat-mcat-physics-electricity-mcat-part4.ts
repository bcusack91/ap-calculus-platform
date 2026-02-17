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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Refraction',
            options: ['Total internal reflection occurs when angle of incidence > critical angle (only going from dense to less dense).', 'Thin lens equation: 1/f = 1/do + 1/di; magnification m = -di/do.', 'converging (convex) focuses light; diverging (concave) spreads light.', 'Snells law n1*sin(theta1) = n2*sin(theta2) — light bends toward normal in denser medium.']
          },
          {
            label: 'Lenses',
            options: ['Snells law n1*sin(theta1) = n2*sin(theta2) — light bends toward normal in denser medium.', 'converging (convex) focuses light; diverging (concave) spreads light.', 'Total internal reflection occurs when angle of incidence > critical angle (only going from dense to less dense).', 'Thin lens equation: 1/f = 1/do + 1/di; magnification m = -di/do.']
          },
          {
            label: 'Key Insight',
            options: ['Snells law n1*sin(theta1) = n2*sin(theta2) — light bends toward normal in denser medium.', 'converging (convex) focuses light; diverging (concave) spreads light.', 'Thin lens equation: 1/f = 1/do + 1/di; magnification m = -di/do.', 'Total internal reflection occurs when angle of incidence > critical angle (only going from dense to less dense).']
          }
        ],
        correctAnswers: ['Snells law n1*sin(theta1) = n2*sin(theta2) — light bends toward normal in denser medium.', 'converging (convex) focuses light; diverging (concave) spreads light.', 'Thin lens equation: 1/f = 1/do + 1/di; magnification m = -di/do.'],
        hint1: 'Think about what each concept specifically describes in Optics & Light.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Optics & Light describes a specific idea. Refraction: Snells law n1*sin(theta1) = n2*sin(theta2) — light bends toward normal in denser medium. Lenses: converging (convex) focuses light; diverging (concave) spreads light. Key Insight: Thin lens equation: 1/f = 1/do + 1/di; magnification m = -di/do.'
      }
    }
  ]
}
