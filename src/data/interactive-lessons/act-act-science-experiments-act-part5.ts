export const actScienceExpPart5Data = {
  topicSlug: 'act-science-experiments-act',
  sections: [
    {
      id: 'act-s5-intro',
      type: 'text' as const,
      content: `
# Evaluating Conclusions

**Part 5 of 7 — Evaluating Conclusions**

Does the conclusion logically follow from the data?.

Look for overgeneralizations or claims beyond the evidence.
      `
    },
    {
      id: 'act-s5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes does the conclusion logically follow from the data??',
            options: [
              'Does the conclusion logically follow from the data? is a key concept for ACT Science',
              'Look for overgeneralizations or claims beyond the evidence',
              'This concept is not tested on the ACT',
              'None of these apply to ACT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Does the conclusion logically follow from the data?'
          }
        ]
      }
    },
    {
      id: 'act-s5-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Alternative explanations: could something else explain the results?.

**ACT Tip:** Sample bias: is the sample representative of the population?.
      `
    },
    {
      id: 'act-s5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for evaluating conclusions?',
            options: [
              'Alternative explanations: could something else explain the results?',
              'Skip these questions entirely on the ACT',
              'These are only on the optional Writing section',
              'This topic appears only on the SAT'
            ],
            correctAnswer: 0,
            explanation: 'Alternative explanations: could something else explain the results?'
          }
        ]
      }
    },
    {
      id: 'act-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Evaluating Conclusions:',
            options: ['Does the conclusion logically follow from the data', 'Look for overgeneralizations or claims beyond the ', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Alternative explanations: could something else exp', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Does the conclusion logically follow from the data', 'Alternative explanations: could something else exp'],
        hint1: 'Think about evaluating conclusions',
        hint2: 'Consider the best ACT strategy',
        explanation: 'Does the conclusion logically follow from the data?. Alternative explanations: could something else explain the results?.'
      }
    }
  ]
}
