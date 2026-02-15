export const mcatOrganSysPart2Data = {
  topicSlug: 'mcat-organ-systems-mcat',
  sections: [
    {
      id: 'mcat-2-intro',
      type: 'text' as const,
      content: `
# Respiratory System

**Part 2 of 7 — Respiratory System**

Ventilation: diaphragm contracts (inhalation), relaxes (exhalation); negative pressure breathing.

Gas exchange: O2 diffuses into blood in alveoli; CO2 diffuses out — driven by partial pressure gradients.
      `
    },
    {
      id: 'mcat-2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes a key concept in respiratory system?',
            options: [
              'Ventilation: diaphragm contracts (inhalation), relaxes (exhalation); negative pressure breathing',
              'This topic is not tested on the MCAT',
              'This applies only to clinical practice, not the MCAT',
              'None of the above'
            ],
            correctAnswer: 0,
            explanation: 'Ventilation: diaphragm contracts (inhalation), relaxes (exhalation); negative pressure breathing'
          }
        ]
      }
    },
    {
      id: 'mcat-2-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Hemoglobin: cooperative binding, sigmoid curve; Bohr effect: low pH/high CO2 shifts curve right (releases O2).

**MCAT Tip:** Lung volumes: tidal volume, vital capacity, residual volume, total lung capacity.
      `
    },
    {
      id: 'mcat-2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is an important principle for MCAT Bio/Biochem related to respiratory system?',
            options: [
              'Hemoglobin: cooperative binding, sigmoid curve; Bohr effect: low pH/high CO2 shifts curve right (releases O2)',
              'Memorize without understanding — the MCAT only tests recall',
              'This concept is only relevant to graduate-level courses',
              'Skip this topic — it rarely appears on the MCAT'
            ],
            correctAnswer: 0,
            explanation: 'Hemoglobin: cooperative binding, sigmoid curve; Bohr effect: low pH/high CO2 shifts curve right (releases O2)'
          }
        ]
      }
    },
    {
      id: 'mcat-2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Core concept for Respiratory System:',
            options: ['Ventilation: diaphragm contracts (inhalation), relaxes (exha', 'Gas exchange: O2 diffuses into blood in alveoli; CO2 diffuse', 'Not MCAT-relevant', 'Cannot be determined']
          },
          {
            label: 'MCAT application:',
            options: ['Hemoglobin: cooperative binding, sigmoid curve; Bohr effect:', 'Skip this topic', 'Only on practice tests', 'Not applicable']
          }
        ],
        correctAnswers: ['Ventilation: diaphragm contracts (inhalation), relaxes (exha', 'Hemoglobin: cooperative binding, sigmoid curve; Bohr effect:'],
        hint1: 'Think about respiratory system',
        hint2: 'Consider the MCAT application',
        explanation: 'Ventilation: diaphragm contracts (inhalation), relaxes (exhalation); negative pressure breathing. Hemoglobin: cooperative binding, sigmoid curve; Bohr effect: low pH/high CO2 shifts curve right (releases O2).'
      }
    }
  ]
}
