export const satGrammarPart1Data = {
  topicSlug: 'sat-grammar-conventions-sat',
  sections: [
    {
      id: 'sat-g1-intro',
      type: 'text' as const,
      content: `
# 📝 Grammar Conventions

**Part 1 of 7 — Subject-Verb Agreement**

The subject and verb must agree in number (singular/plural).

Ignore words between the subject and verb (prepositional phrases, appositives).
      `
    },
    {
      id: 'sat-g1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains The subject and verb must agree in…?',
            options: [
              'Collective nouns (team, group) are typically singular.',
              'Compound subjects with "and" take plural verbs.',
              'Ignore words between the subject and verb (prepositional phrases, appositives).',
              'The subject and verb must agree in number (singular/plural).'
            ],
            correctAnswer: 3,
            explanation: 'Correct — The subject and verb must agree in number (singular/plural). The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Grammar Conventions, which explains Key Insight?',
            options: [
              'Collective nouns (team, group) are typically singular.',
              'Ignore words between the subject and verb (prepositional phrases, appositives).',
              'Compound subjects with "and" take plural verbs.',
              'The subject and verb must agree in number (singular/plural).'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Key Insight: Compound subjects with "and" take plural verbs. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'sat-g1-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Compound subjects with "and" take plural verbs.

**SAT Tip:** Collective nouns (team, group) are typically singular.
      `
    },
    {
      id: 'sat-g1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about SAT Tip is correct?',
            options: [
              'The subject and verb must agree in number (singular/plural).',
              'Ignore words between the subject and verb (prepositional phrases, appositives).',
              'Collective nouns (team, group) are typically singular.',
              'Compound subjects with "and" take plural verbs.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — SAT Tip: Collective nouns (team, group) are typically singular. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'sat-g1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key Insight',
            options: ['Collective nouns (team, group) are typically singular.', 'Compound subjects with "and" take plural verbs.', 'Ignore words between the subject and verb (prepositional phrases, appositives).', 'The subject and verb must agree in number (singular/plural).']
          },
          {
            label: 'SAT Tip',
            options: ['Collective nouns (team, group) are typically singular.', 'Compound subjects with "and" take plural verbs.', 'The subject and verb must agree in number (singular/plural).', 'Ignore words between the subject and verb (prepositional phrases, appositives).']
          }
        ],
        correctAnswers: ['Compound subjects with "and" take plural verbs.', 'Collective nouns (team, group) are typically singular.'],
        hint1: 'Think about what each concept specifically describes in Grammar Conventions.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Grammar Conventions describes a specific idea. Key Insight: Compound subjects with "and" take plural verbs. SAT Tip: Collective nouns (team, group) are typically singular.'
      }
    }
  ]
}
