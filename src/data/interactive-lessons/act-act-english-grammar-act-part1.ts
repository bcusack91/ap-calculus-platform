export const actEnglishGrammarPart1Data = {
  topicSlug: 'act-english-grammar-act',
  sections: [
    {
      id: 'act-e1-intro',
      type: 'text' as const,
      content: `
# 📋 English Grammar

**Part 1 of 7 — Subject-Verb Agreement**

Subject and verb must agree in number.

Ignore prepositional phrases between subject and verb.
      `
    },
    {
      id: 'act-e1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Subject and verb must agree in number." refer to in ACT prep?',
            options: [
              'Collective nouns (team, jury) are usually singular.',
              'Ignore prepositional phrases between subject and verb.',
              'Compound subjects with "and" = plural verb.',
              'Subject and verb must agree in number.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Subject and verb must agree in number. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Key Insight:',
            options: [
              'Compound subjects with "and" = plural verb.',
              'Ignore prepositional phrases between subject and verb.',
              'Collective nouns (team, jury) are usually singular.',
              'Subject and verb must agree in number.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Key Insight: Compound subjects with "and" = plural verb. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'act-e1-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Compound subjects with "and" = plural verb.

**ACT Tip:** Collective nouns (team, jury) are usually singular.
      `
    },
    {
      id: 'act-e1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about ACT Tip is correct?',
            options: [
              'Compound subjects with "and" = plural verb.',
              'Collective nouns (team, jury) are usually singular.',
              'Subject and verb must agree in number.',
              'Ignore prepositional phrases between subject and verb.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — ACT Tip: Collective nouns (team, jury) are usually singular. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'act-e1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key Insight',
            options: ['Subject and verb must agree in number.', 'Compound subjects with "and" = plural verb.', 'Collective nouns (team, jury) are usually singular.', 'Ignore prepositional phrases between subject and verb.']
          },
          {
            label: 'ACT Tip',
            options: ['Compound subjects with "and" = plural verb.', 'Ignore prepositional phrases between subject and verb.', 'Collective nouns (team, jury) are usually singular.', 'Subject and verb must agree in number.']
          }
        ],
        correctAnswers: ['Compound subjects with "and" = plural verb.', 'Collective nouns (team, jury) are usually singular.'],
        hint1: 'Think about what each concept specifically describes in English Grammar.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in English Grammar describes a specific idea. Key Insight: Compound subjects with "and" = plural verb. ACT Tip: Collective nouns (team, jury) are usually singular.'
      }
    }
  ]
}
