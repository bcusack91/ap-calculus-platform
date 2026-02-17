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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Heart',
            options: ['Blood pressure: systolic/diastolic; regulated by baroreceptors, RAAS, and ANP.', 'SA node pacemaker, atrial contraction, AV node delay, ventricular contraction.', 'Blood components: RBCs (O2 transport), WBCs (immunity), platelets (clotting), plasma (fluid).', '4 chambers; right side pumps to lungs (pulmonary), left side pumps to body (systemic).']
          },
          {
            label: 'Cardiac cycle',
            options: ['Blood pressure: systolic/diastolic; regulated by baroreceptors, RAAS, and ANP.', '4 chambers; right side pumps to lungs (pulmonary), left side pumps to body (systemic).', 'SA node pacemaker, atrial contraction, AV node delay, ventricular contraction.', 'Blood components: RBCs (O2 transport), WBCs (immunity), platelets (clotting), plasma (fluid).']
          },
          {
            label: 'Key Insight',
            options: ['Blood pressure: systolic/diastolic; regulated by baroreceptors, RAAS, and ANP.', '4 chambers; right side pumps to lungs (pulmonary), left side pumps to body (systemic).', 'SA node pacemaker, atrial contraction, AV node delay, ventricular contraction.', 'Blood components: RBCs (O2 transport), WBCs (immunity), platelets (clotting), plasma (fluid).']
          }
        ],
        correctAnswers: ['4 chambers; right side pumps to lungs (pulmonary), left side pumps to body (systemic).', 'SA node pacemaker, atrial contraction, AV node delay, ventricular contraction.', 'Blood pressure: systolic/diastolic; regulated by baroreceptors, RAAS, and ANP.'],
        hint1: 'Think about what each concept specifically describes in Organ Systems.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Organ Systems describes a specific idea. Heart: 4 chambers; right side pumps to lungs (pulmonary), left side pumps to body (systemic). Cardiac cycle: SA node pacemaker, atrial contraction, AV node delay, ventricular contraction. Key Insight: Blood pressure: systolic/diastolic; regulated by baroreceptors, RAAS, and ANP.'
      }
    }
  ]
}
