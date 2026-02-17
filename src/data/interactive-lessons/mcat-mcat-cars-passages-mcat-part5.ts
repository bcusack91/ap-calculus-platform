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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key Insight',
            options: ['Some passages present two perspectives — identify areas of agreement and disagreement.', 'Questions may ask how one author would respond to the others argument.', 'Track each authors main claim and supporting evidence separately.', 'Create a brief mental comparison chart: Author A says X because...; Author B says Y because....']
          },
          {
            label: 'MCAT Tip',
            options: ['Create a brief mental comparison chart: Author A says X because...; Author B says Y because....', 'Some passages present two perspectives — identify areas of agreement and disagreement.', 'Questions may ask how one author would respond to the others argument.', 'Track each authors main claim and supporting evidence separately.']
          }
        ],
        correctAnswers: ['Questions may ask how one author would respond to the others argument.', 'Create a brief mental comparison chart: Author A says X because...; Author B says Y because....'],
        hint1: 'Think about what each concept specifically describes in Comparative & Contrasting.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Comparative & Contrasting describes a specific idea. Key Insight: Questions may ask how one author would respond to the others argument. MCAT Tip: Create a brief mental comparison chart: Author A says X because...; Author B says Y because....'
      }
    }
  ]
}
