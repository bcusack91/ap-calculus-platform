export const satExpressionPart2Data = {
  topicSlug: 'sat-expression-ideas-sat',
  sections: [
    {
      id: 'sat-e2-intro',
      type: 'text' as const,
      content: `
# Combining Sentences

**Part 2 of 7 — Combining Sentences**

Combine sentences to improve flow and eliminate repetition.

Use relative clauses (who, which, that), appositives, or participial phrases.
      `
    },
    {
      id: 'sat-e2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Combine sentences to improve flow and…?',
            options: [
              'Use relative clauses (who, which, that), appositives, or participial phrases.',
              'Combine sentences to improve flow and eliminate repetition.',
              'Shorter combined version is usually preferred.',
              'Maintain the meaning and emphasis of the original sentences.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Combine sentences to improve flow and eliminate repetition. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Combining Sentences, which explains Key Insight?',
            options: [
              'Combine sentences to improve flow and eliminate repetition.',
              'Maintain the meaning and emphasis of the original sentences.',
              'Shorter combined version is usually preferred.',
              'Use relative clauses (who, which, that), appositives, or participial phrases.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Key Insight: Maintain the meaning and emphasis of the original sentences. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'sat-e2-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Maintain the meaning and emphasis of the original sentences.

**SAT Tip:** Shorter combined version is usually preferred.
      `
    },
    {
      id: 'sat-e2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Combining Sentences, which correctly describes SAT Tip?',
            options: [
              'Shorter combined version is usually preferred.',
              'Combine sentences to improve flow and eliminate repetition.',
              'Use relative clauses (who, which, that), appositives, or participial phrases.',
              'Maintain the meaning and emphasis of the original sentences.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — SAT Tip: Shorter combined version is usually preferred. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'sat-e2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key Insight',
            options: ['Maintain the meaning and emphasis of the original sentences.', 'Use relative clauses (who, which, that), appositives, or participial phrases.', 'Combine sentences to improve flow and eliminate repetition.', 'Shorter combined version is usually preferred.']
          },
          {
            label: 'SAT Tip',
            options: ['Maintain the meaning and emphasis of the original sentences.', 'Use relative clauses (who, which, that), appositives, or participial phrases.', 'Combine sentences to improve flow and eliminate repetition.', 'Shorter combined version is usually preferred.']
          }
        ],
        correctAnswers: ['Maintain the meaning and emphasis of the original sentences.', 'Shorter combined version is usually preferred.'],
        hint1: 'Think about what each concept specifically describes in Combining Sentences.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Combining Sentences describes a specific idea. Key Insight: Maintain the meaning and emphasis of the original sentences. SAT Tip: Shorter combined version is usually preferred.'
      }
    }
  ]
}
