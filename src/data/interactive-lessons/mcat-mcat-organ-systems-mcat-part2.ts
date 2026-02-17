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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Ventilation',
            options: ['Hemoglobin: cooperative binding, sigmoid curve; Bohr effect: low pH/high CO2 shifts curve right (releases O2).', 'O2 diffuses into blood in alveoli; CO2 diffuses out — driven by partial pressure gradients.', 'Lung volumes: tidal volume, vital capacity, residual volume, total lung capacity.', 'diaphragm contracts (inhalation), relaxes (exhalation); negative pressure breathing.']
          },
          {
            label: 'Gas exchange',
            options: ['Hemoglobin: cooperative binding, sigmoid curve; Bohr effect: low pH/high CO2 shifts curve right (releases O2).', 'diaphragm contracts (inhalation), relaxes (exhalation); negative pressure breathing.', 'O2 diffuses into blood in alveoli; CO2 diffuses out — driven by partial pressure gradients.', 'Lung volumes: tidal volume, vital capacity, residual volume, total lung capacity.']
          },
          {
            label: 'Key Insight',
            options: ['Lung volumes: tidal volume, vital capacity, residual volume, total lung capacity.', 'diaphragm contracts (inhalation), relaxes (exhalation); negative pressure breathing.', 'O2 diffuses into blood in alveoli; CO2 diffuses out — driven by partial pressure gradients.', 'Hemoglobin: cooperative binding, sigmoid curve; Bohr effect: low pH/high CO2 shifts curve right (releases O2).']
          }
        ],
        correctAnswers: ['diaphragm contracts (inhalation), relaxes (exhalation); negative pressure breathing.', 'O2 diffuses into blood in alveoli; CO2 diffuses out — driven by partial pressure gradients.', 'Hemoglobin: cooperative binding, sigmoid curve; Bohr effect: low pH/high CO2 shifts curve right (releases O2).'],
        hint1: 'Think about what each concept specifically describes in Respiratory System.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Respiratory System describes a specific idea. Ventilation: diaphragm contracts (inhalation), relaxes (exhalation); negative pressure breathing. Gas exchange: O2 diffuses into blood in alveoli; CO2 diffuses out — driven by partial pressure gradients. Key Insight: Hemoglobin: cooperative binding, sigmoid curve; Bohr effect: low pH/high CO2 shifts curve right (releases O2).'
      }
    }
  ]
}
