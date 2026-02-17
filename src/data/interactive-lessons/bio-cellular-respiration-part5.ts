export const bioCellRespirationPart5Data = {
  topicSlug: 'cellular-respiration',
  sections: [
    {
      id: 'cell5-intro-p5',
      type: 'text' as const,
      content: `
# ## Anaerobic Respiration

**Part 5 of 7 — Anaerobic Respiration**

1. Fermentation when O₂ is absent
2. Lactic acid fermentation: pyruvate → lactate (animals, bacteria)
3. Alcohol fermentation: pyruvate → ethanol + CO₂ (yeast)
4. Only 2 ATP per glucose without O₂
      `
    },
    {
      id: 'cell5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Fermentation when O₂ is absent?',
            options: [
              'pyruvate → ethanol + CO₂ (yeast)',
              'Fermentation when O₂ is absent',
              'pyruvate → lactate (animals, bacteria)',
              'Only 2 ATP per glucose without O₂'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Fermentation when O₂ is absent. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Anaerobic Respiration, which explains Alcohol fermentation?',
            options: [
              'Only 2 ATP per glucose without O₂',
              'Fermentation when O₂ is absent',
              'pyruvate → lactate (animals, bacteria)',
              'pyruvate → ethanol + CO₂ (yeast)'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Alcohol fermentation: pyruvate → ethanol + CO₂ (yeast). Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'cell5-detail-p5',
      type: 'text' as const,
      content: `
# ### Key Details

- **Fermentation when O₂ is absent**
- **Lactic acid fermentation**: pyruvate → lactate (animals, bacteria)
- **Alcohol fermentation**: pyruvate → ethanol + CO₂ (yeast)
- **Only 2 ATP per glucose without O₂**
      `
    },
    {
      id: 'cell5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Anaerobic Respiration, which correctly describes Only 2 ATP per glucose without O₂?',
            options: [
              'pyruvate → ethanol + CO₂ (yeast)',
              'Only 2 ATP per glucose without O₂',
              'Fermentation when O₂ is absent',
              'pyruvate → lactate (animals, bacteria)'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Only 2 ATP per glucose without O₂. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'cell5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Lactic acid fermentation',
            options: ['pyruvate → ethanol + CO₂ (yeast)', 'Fermentation when O₂ is absent', 'Only 2 ATP per glucose without O₂', 'pyruvate → lactate (animals, bacteria)']
          },
          {
            label: 'Alcohol fermentation',
            options: ['pyruvate → lactate (animals, bacteria)', 'pyruvate → ethanol + CO₂ (yeast)', 'Fermentation when O₂ is absent', 'Only 2 ATP per glucose without O₂']
          }
        ],
        correctAnswers: ['pyruvate → lactate (animals, bacteria)', 'pyruvate → ethanol + CO₂ (yeast)'],
        hint1: 'Think about what each concept specifically describes in Anaerobic Respiration.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Anaerobic Respiration describes a specific idea. Lactic acid fermentation: pyruvate → lactate (animals, bacteria). Alcohol fermentation: pyruvate → ethanol + CO₂ (yeast).'
      }
    }
  ]
}
