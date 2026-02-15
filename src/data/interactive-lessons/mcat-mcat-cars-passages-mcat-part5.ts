export const mcatCarsPsgPart5Data = {
  topicSlug: 'mcat-cars-passages-mcat',
  sections: [
    {
      id: 'mcat-5-intro',
      type: 'text' as const,
      content: `
# Comparative & Contrasting

**Part 5 of 7 — Comparative & Contrasting**

Some passages present two perspectives — identify areas of agreement and disagreement.

Track each authors main claim and supporting evidence separately.
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
            question: 'Which of the following best describes a key concept in comparative & contrasting?',
            options: [
              'Some passages present two perspectives — identify areas of agreement and disagreement',
              'This topic is not tested on the MCAT',
              'This applies only to clinical practice, not the MCAT',
              'None of the above'
            ],
            correctAnswer: 0,
            explanation: 'Some passages present two perspectives — identify areas of agreement and disagreement'
          }
        ]
      }
    },
    {
      id: 'mcat-5-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Questions may ask how one author would respond to the others argument.

**MCAT Tip:** Create a brief mental comparison chart: Author A says X because...; Author B says Y because....
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
            question: 'What is an important principle for MCAT CARS related to comparative & contrasting?',
            options: [
              'Questions may ask how one author would respond to the others argument',
              'Memorize without understanding — the MCAT only tests recall',
              'This concept is only relevant to graduate-level courses',
              'Skip this topic — it rarely appears on the MCAT'
            ],
            correctAnswer: 0,
            explanation: 'Questions may ask how one author would respond to the others argument'
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
            label: 'Core concept for Comparative & Contrasting:',
            options: ['Some passages present two perspectives — identify areas of a', 'Track each authors main claim and supporting evidence separa', 'Not MCAT-relevant', 'Cannot be determined']
          },
          {
            label: 'MCAT application:',
            options: ['Questions may ask how one author would respond to the others', 'Skip this topic', 'Only on practice tests', 'Not applicable']
          }
        ],
        correctAnswers: ['Some passages present two perspectives — identify areas of a', 'Questions may ask how one author would respond to the others'],
        hint1: 'Think about comparative & contrasting',
        hint2: 'Consider the MCAT application',
        explanation: 'Some passages present two perspectives — identify areas of agreement and disagreement. Questions may ask how one author would respond to the others argument.'
      }
    }
  ]
}
