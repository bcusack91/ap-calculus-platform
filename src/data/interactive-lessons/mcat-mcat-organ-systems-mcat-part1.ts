export const mcatOrganSysPart1Data = {
  topicSlug: 'mcat-organ-systems-mcat',
  sections: [
    {
      id: 'mcat-1-intro',
      type: 'text' as const,
      content: `
# 🏥 Organ Systems

**Part 1 of 7 — Cardiovascular System**

Heart: 4 chambers; right side pumps to lungs (pulmonary), left side pumps to body (systemic).

Cardiac cycle: SA node pacemaker, atrial contraction, AV node delay, ventricular contraction.
      `
    },
    {
      id: 'mcat-1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes a key concept in cardiovascular system?',
            options: [
              'Heart: 4 chambers; right side pumps to lungs (pulmonary), left side pumps to body (systemic)',
              'This topic is not tested on the MCAT',
              'This applies only to clinical practice, not the MCAT',
              'None of the above'
            ],
            correctAnswer: 0,
            explanation: 'Heart: 4 chambers; right side pumps to lungs (pulmonary), left side pumps to body (systemic)'
          }
        ]
      }
    },
    {
      id: 'mcat-1-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Blood pressure: systolic/diastolic; regulated by baroreceptors, RAAS, and ANP.

**MCAT Tip:** Blood components: RBCs (O2 transport), WBCs (immunity), platelets (clotting), plasma (fluid).
      `
    },
    {
      id: 'mcat-1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is an important principle for MCAT Bio/Biochem related to cardiovascular system?',
            options: [
              'Blood pressure: systolic/diastolic; regulated by baroreceptors, RAAS, and ANP',
              'Memorize without understanding — the MCAT only tests recall',
              'This concept is only relevant to graduate-level courses',
              'Skip this topic — it rarely appears on the MCAT'
            ],
            correctAnswer: 0,
            explanation: 'Blood pressure: systolic/diastolic; regulated by baroreceptors, RAAS, and ANP'
          }
        ]
      }
    },
    {
      id: 'mcat-1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Core concept for Cardiovascular System:',
            options: ['Heart: 4 chambers; right side pumps to lungs (pulmonary), le', 'Cardiac cycle: SA node pacemaker, atrial contraction, AV nod', 'Not MCAT-relevant', 'Cannot be determined']
          },
          {
            label: 'MCAT application:',
            options: ['Blood pressure: systolic/diastolic; regulated by barorecepto', 'Skip this topic', 'Only on practice tests', 'Not applicable']
          }
        ],
        correctAnswers: ['Heart: 4 chambers; right side pumps to lungs (pulmonary), le', 'Blood pressure: systolic/diastolic; regulated by barorecepto'],
        hint1: 'Think about cardiovascular system',
        hint2: 'Consider the MCAT application',
        explanation: 'Heart: 4 chambers; right side pumps to lungs (pulmonary), left side pumps to body (systemic). Blood pressure: systolic/diastolic; regulated by baroreceptors, RAAS, and ANP.'
      }
    }
  ]
}
